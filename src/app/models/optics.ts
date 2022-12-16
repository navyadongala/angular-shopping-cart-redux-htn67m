import { lensProp } from 'ramda';
import { Product } from './types';

export const idLens = lensProp('id');
export const priceLens = lensProp('price');