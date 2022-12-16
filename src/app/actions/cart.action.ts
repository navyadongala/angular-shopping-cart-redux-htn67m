import { createAction, props } from '@ngrx/store';
import { Product, UUID } from '../models/types';

export const cartActionsTag = '[Shopping Cart]';

export const addToCart = createAction(`${cartActionsTag} Add to Cart`, props<{ product: Product }>());
export const removeFromCart = createAction(`${cartActionsTag} Remove from Cart`, props<{ id: UUID }>());

export const extractProduct: (_: { product: Product }) => Product = ({ product }) => product;
export const extractId: (_: { id: UUID }) => UUID = ({ id }) => id;
