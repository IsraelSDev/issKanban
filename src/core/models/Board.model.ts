import {Column} from "./Columns.model";

export type BoardModel =
  {
    name: string;
    id: number;
    active: boolean;
    columns: Column[]
  }


export type BoardListModel = BoardModel[]


export type boardRoute = {
  id: number;
  name: string;
}
