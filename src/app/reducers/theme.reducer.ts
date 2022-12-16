import { Action, createReducer, on } from '@ngrx/store';
import { setLightTheme, setDarkTheme } from '../actions/theme.action';
import { ThemeState } from '../state';
import { always } from 'ramda';

export const initialState: ThemeState = {
  name: 'light',
  dark: false
};

export const themeReducer = (currentState: ThemeState, action: Action) =>
  createReducer(
    initialState,
    on(setLightTheme, always({ name: 'light', dark: false })),
    on(setDarkTheme, always({ name: 'dark', dark: true }))
  )(currentState, action);
