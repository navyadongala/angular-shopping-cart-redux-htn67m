import { Pipe, PipeTransform } from '@angular/core';
import { includes } from 'ramda';
import { UUID } from '../models';

@Pipe({
  name: 'addedToCart'
})
export class AddedToCartPipe implements PipeTransform {
  transform(value: UUID, productsInCart: UUID[] = []): any {
    return includes(value)(productsInCart);
  }
}
