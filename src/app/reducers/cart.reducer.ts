import { Action, createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, extractProduct, extractId } from '../actions/cart.action';
import { ShoppingCart, matchesProduct } from '../models';
import { compose, append, reject } from 'ramda';
import { reduceAction } from './common';

export const initialState: ShoppingCart = [];

export const cartReducer = (currentState: ShoppingCart, action: Action) =>
  createReducer(
    initialState,
    on(addToCart, reduceAction(compose(append, extractProduct))),
    on(removeFromCart, reduceAction(compose(reject, matchesProduct, extractId)))
  )(currentState, action);