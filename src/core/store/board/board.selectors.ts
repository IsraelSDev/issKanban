import {createFeatureSelector, createSelector} from "@ngrx/store";
import {BoardListModel, BoardModel, boardRoute} from "../../models/Board.model";

const boardFeatureSelector = createFeatureSelector<BoardListModel>('boards');

export const boardCurrentSelector = createSelector(boardFeatureSelector, (boards: BoardListModel) => boards);
export const boardsRouterSelector = createSelector(boardFeatureSelector, (boards: BoardListModel) => boards.map((board: BoardModel) => {
  let boardRoute: boardRoute = {
    name: board.name,
    id: board.id
  }
  return boardRoute;
}))

export const boardActiveSelector = createSelector(boardFeatureSelector, (board: BoardListModel) => board.filter((el: BoardModel) => (el.active))[0])
