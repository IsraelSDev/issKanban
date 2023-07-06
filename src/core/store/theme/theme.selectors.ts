import {createFeatureSelector, createSelector} from "@ngrx/store";
import {themeState} from "./theme.reducers";

export const getThemeModeSelector = createFeatureSelector<themeState>('theme')

export const getThemeMode = createSelector(getThemeModeSelector, (state: themeState) => state.mode)
