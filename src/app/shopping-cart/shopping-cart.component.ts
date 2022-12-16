import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectShoppingCart } from '../state';
import { removeFromCart } from '../actions/cart.action';
import { Product, UUID } from '../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.products$ = this.store.pipe(select(selectShoppingCart));
  }

  removeFromCart(ev: Event, id: UUID): void {
    ev.preventDefault();
    this.store.dispatch(removeFromCart({id}));
  }
}
