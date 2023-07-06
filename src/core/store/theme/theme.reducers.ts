import {Action, createReducer, on,} from "@ngrx/store";
import * as fromThemeAction from "./theme.actions";

export interface themeState {
  mode: string;
  error: string;
}

export const initialTheme: themeState = {
  mode: 'light',
  error: ''
}

const _themeReducer = createReducer(
  initialTheme,
  on(fromThemeAction.LoadTheme, (state: themeState) => ({
    ...state,
  })),
  on(fromThemeAction.UpdateTheme, (state: themeState, payload: { mode: string }) =>
    ({
      ...state,
      mode: payload.mode
    })
  ),
)
export const themeReducers = (state: themeState = initialTheme, action: Action) => {
  return _themeReducer(state, action);
}

