import {createAction, props} from "@ngrx/store";

export const enum themeTypeAction {
  LOAD_THEME = '[LOAD_THEME]: LOADING THEME',
  LOAD_THEME_SUCESS = '[LOAD_THEME_SUCESS]: LOADING THEME HAS SUCESS',
  LOAD_THEME_FAIL = '[LOAD_THEME_FAIL]: LOADING THEME FAIL',

  UPDATE_THEME = '[UPDATE_THEME]: UPDATING THEME',
  UPDATE_THEME_SUCESS = '[UPDATE_THEME_SUCESS]: UPDATING THEME HAS SUCESS',
  UPDATE_THEME_FAIL = '[UPDATE_THEME_FAIL]: UPDATING THEME HAS FAIL',
}

export const LoadTheme = createAction(themeTypeAction.LOAD_THEME);
export const LoadThemeSucess = createAction(themeTypeAction.LOAD_THEME_SUCESS, props<{ mode: string }>())
export const LoadThemeFail = createAction(themeTypeAction.LOAD_THEME_FAIL, props<{ error: string }>())

export const UpdateTheme = createAction(themeTypeAction.UPDATE_THEME, props<{ mode: string }>())
export const UpdateThemeSucess = createAction(themeTypeAction.UPDATE_THEME_SUCESS, props<{ payload: string }>())
export const UpdateThemeFail = createAction(themeTypeAction.UPDATE_THEME_FAIL, props<{ error: string }>())
