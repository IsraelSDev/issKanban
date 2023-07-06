import {Action, createReducer, on} from "@ngrx/store";
import * as fromSideBarActions from './sidebar.actions';

export type sideBarType = {
  show: boolean
}

export const initialSideBar: sideBarType = {
  show: true
}

const _sideBarReducer = createReducer(initialSideBar,
  on(fromSideBarActions.loadSideBar, (state: sideBarType) => ({
    ...state
  })),
  on(fromSideBarActions.handleSidebarMode, (state: sideBarType, payload: { show: boolean }) => ({
    ...state,
    show: payload.show
  }))
)

export const sideBarReducer = (state: sideBarType = initialSideBar, action: Action) => {
  return _sideBarReducer(state, action);
}
