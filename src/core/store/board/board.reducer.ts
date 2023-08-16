import {BoardListModel, BoardModel} from "../../models/Board.model";
import {Action, createReducer, on} from "@ngrx/store";
import * as fromBoardActions from "./board.actions";
import {Column} from "../../models/Columns.model";

const initialBoard: BoardListModel = [{
  name: 'EXEMPLO',
  active: true,
  columns: [

    {
      description: 'COLUNA 2',
      id: 0.23258104988998962,
      tasks: [],
      color: '7d1ecf'
    },
    {
      description: 'COLUNA 3',
      id: 0.18496864000661994,
      tasks: [],
      color: 'b473df'
    },
    {
      description: 'COLUNA 4',
      id: 0.408598059643575,
      tasks: [],
      color: '1dc5f7'
    },
    {
      description: 'COLUNA 5',
      id: 0.6398801610685281,
      tasks: [],
      color: 'cf0c86'
    }
  ],
  id: 0.40808928233142483
}]


const _boardReducer = createReducer(initialBoard,
  on(fromBoardActions.boardLoadAction, (state: BoardListModel) => ({
    ...state
  })),
  on(fromBoardActions.handleBoardAction, (state: BoardListModel, payload: { id: number, active: boolean }) => (
      state.map((board: BoardModel) => (
        board.id === payload.id ? {...board, active: payload.active} : {...board, active: false}
      ))
    )
  ),
  on(fromBoardActions.createBoardAction, (state: BoardListModel, payload: {
      name: string,
      columns: Column[]
    }) => ([...state, {name: payload.name, active: false, columns: payload.columns, id: Math.random()}])
  ),
  on(fromBoardActions.addColumnAction, (state: BoardListModel, payload: { id: number, columnTitle: string }) => (
    state.map((board: BoardModel) => (
        board.id === payload.id ?
          {
            ...board,
            columns: [...board.columns, {
              description: payload.columnTitle,
              color: Math.floor(Math.random() * 16777215).toString(16),
              tasks: [],
              id: Math.random()
            } as Column]
          }
          : {...board}
      )
    )
  )),
)

export const boardReducer = (state: BoardListModel = initialBoard, action: Action) => _boardReducer(state, action);

