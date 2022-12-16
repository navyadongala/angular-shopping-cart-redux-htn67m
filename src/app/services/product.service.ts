import { Injectable } from '@angular/core';
import { Maybe } from 'monet';
import { Arbitrary, nat, record, lorem, float, sample, uuid } from 'fast-check';
import { Product, UUID, Images } from '../models/types';
import { add, multiply, divide, __, compose } from 'ramda';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private subject: BehaviorSubject<Product[]>;

  constructor() {
    const roundTo2Decimals = compose(divide(__, 100), Math.round, multiply(100), add(Number.EPSILON));

    const imageUrlArb = nat().map(seed => (w: number) => (h: number) => `https://picsum.photos/seed/${seed}/${w}/${h}.jpg`);
    const imagesArb: Arbitrary<Images> = record<Images>({
      thumbnail: imageUrlArb.map(f => f(200)(150)),
      medium: imageUrlArb.map(f => f(400)(300)),
      large: imageUrlArb.map(f => f(800)(600))
    });

    const productArb = record<Product>({
      id: uuid(),
      name: lorem(3),
      images: imagesArb,
      price: float(10, 5000).map(roundTo2Decimals),
      rating: float(0, 5)
    });

    const products = sample(productArb, 101);

    this.subject = new BehaviorSubject(products);
  }

  findAll(): Observable<Product[]> {
    return this.subject.asObservable();
  }

  findById(id: UUID): Observable<Maybe<Product>> {
    return this.subject.pipe(map(items => Maybe.fromUndefined(items.find(item => item.id === id))));
  }
}
