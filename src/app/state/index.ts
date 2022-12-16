import { createSelector } from '@ngrx/store';
import { ShoppingCart } from '../models';

export interface ThemeState {
  name?: string;
  dark?: boolean;
}

export interface AppState {
  shoppingCart?: ShoppingCart;
  theme?: ThemeState;
}

export const selectShoppingCart = (state: AppState) => state.shoppingCart;
export const selectTheme = (state: AppState) => state.theme;

export const selectThemeName = createSelector(
  selectTheme,
  (theme: ThemeState) => theme.name
);
export const selectIsDarkTheme = createSelector(
  selectTheme,
  (theme: ThemeState) => theme.dark
);
