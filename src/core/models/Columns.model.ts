import {TaskModel} from "./Card.model";

export type ColumnsModel = {

  name: string;
  color: string;
  totalBoards: number;
  cards: TaskModel[];

}
export type Column = {
  description: string;
  color: string;
  tasks: []
  id: number
}
