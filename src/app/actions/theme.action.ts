import { createAction } from '@ngrx/store';

export const themeActionsTag = '[Theme]';

export const setLightTheme = createAction(`${themeActionsTag} Set Light Theme`);
export const setDarkTheme = createAction(`${themeActionsTag} Set Dark Theme`);