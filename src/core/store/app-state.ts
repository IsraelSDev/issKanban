import {themeReducers, themeState} from "./theme/theme.reducers";
import {ActionReducerMap} from "@ngrx/store";
import {themeEffects} from "./theme/theme.effects";
import {sideBarReducer, sideBarType} from "./sidebar/sidebar.reducers";
import {BoardListModel, BoardModel} from "../models/Board.model";
import {boardReducer} from "./board/board.reducer";

export interface AppState {
  theme: themeState,
  sidebar: sideBarType,
  boards: BoardListModel,
}

export const appReducer: ActionReducerMap<AppState> = {
  theme: themeReducers,
  sidebar: sideBarReducer,
  boards: boardReducer,
}

export const appEffects = [
  themeEffects,
]
