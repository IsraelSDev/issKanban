import {themeReducers, themeState} from "./theme/theme.reducers";
import {ActionReducerMap} from "@ngrx/store";
import {themeEffects} from "./theme/theme.effects";
import {sideBarReducer, sideBarType} from "./sidebar/sidebar.reducers";

export interface AppState {
  theme: themeState,
  sidebar: sideBarType,
}

export const appReducer: ActionReducerMap<AppState> = {
  theme: themeReducers,
  sidebar: sideBarReducer
}

export const appEffects = [
  themeEffects,
]
