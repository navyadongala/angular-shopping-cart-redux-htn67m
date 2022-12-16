import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, selectShoppingCart } from '../state';
import { addToCart, removeFromCart } from '../actions/cart.action';
import { ProductService } from '../services/product.service';
import { Product, idLens, priceLens, UUID } from '../models';
import { length, toString, compose, gt, __, view, sum, map as rMap } from 'ramda';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  cartCount$: Observable<string>;
  hasCartItems$: Observable<boolean>;
  cartTotal$: Observable<number>;
  productsInCart$: Observable<UUID[]>;

  constructor(private store: Store<AppState>, private router: Router, private productsService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.findAll();

    const cart = this.store.pipe(select(selectShoppingCart));
    this.cartCount$ = cart.pipe(map(compose(toString, length)));
    this.hasCartItems$ = this.cartCount$.pipe(map(gt(__, 0)));
    this.cartTotal$ = cart.pipe(map(compose(sum, rMap(view(priceLens)))));
    this.productsInCart$ = cart.pipe(map(rMap(view(idLens))));
  }

  addToCart(ev: Event, product: Product): void {
    ev.preventDefault();
    this.store.dispatch(addToCart({product}));
  }

  removeFromCart(ev: Event, id: UUID): void {
    ev.preventDefault();
    this.store.dispatch(removeFromCart({id}));
  }
}
