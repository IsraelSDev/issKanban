import {createAction, props} from "@ngrx/store";
import {Column} from "../../models/Columns.model";

const enum boardActionsType {
  LOAD_BOARD = '[LOAD_BOARD]: CARREGANDO QUADRO ATIVO',
  HANDLE_BOARD = '[HANDLE_BOARD]: ALTERNANDO ENTRE QUADROS',
  CREATE_BOARD = '[CREATE_BOARD]: CRIANDO UM NOVO BOARD',
  DELETE_BOARD = '[DELETE_BOARD]: EXCLUINDO UM BOARD',
  ADD_COLUMN = '[ADD_COLUMN]: ADICIONANDO UMA COLUNA'
}

export const boardLoadAction = createAction(boardActionsType.LOAD_BOARD)
export const handleBoardAction = createAction(boardActionsType.HANDLE_BOARD, props<{ id: number, active: boolean }>())

export const createBoardAction = createAction(boardActionsType.CREATE_BOARD, props<{
  name: string,
  columns: Column[]
}>())


export const addColumnAction = createAction(boardActionsType.ADD_COLUMN, props<{ id: number, columnTitle: string }>())

export const deleteBoardAction = createAction(boardActionsType.DELETE_BOARD, props<{ id: number }>())
