import {createAction, props} from "@ngrx/store";

export const enum sidebarTypeAction {
  LOAD_SIDEBAR_MODE = '[LOAD_SIDEBAR_MODE]: LOADING SIDEBAR MODE',
  CHANGE_SIDEBAR_MODE = '[HANDLE_SIDEBAR_MODE]: HANDLE SIDEBAR MODE'
}

export const loadSideBar = createAction(sidebarTypeAction.LOAD_SIDEBAR_MODE);
export const handleSidebarMode = createAction(sidebarTypeAction.CHANGE_SIDEBAR_MODE, props<{ show: boolean }>());

