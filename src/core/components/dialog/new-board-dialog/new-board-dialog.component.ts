import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app-state";
import {Column} from "../../../models/Columns.model";
import {createBoardAction} from "../../../store/board/board.actions";
import {BoardModel} from "../../../models/Board.model";


@Component({
  selector: 'app-new-board-dialog',
  templateUrl: './new-board-dialog.component.html',
  styleUrls: ['./new-board-dialog.component.scss']
})
export class NewBoardDialogComponent {

  @Output() close: EventEmitter<void> = new EventEmitter<void>()

  public columnsList: Column[] = [];

  newBoardForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    columns: new FormControl([] as Column[], [Validators.required])
  })

  constructor(
    private store: Store<AppState>,
  ) {
  }

  createNewBoard(): void {
    const objBoard = {
      name: this.newBoardForm.get('name')?.value,
      columns: this.newBoardForm.get('columns')?.value,
      id: 0
    }
    if (this.newBoardForm.get('name')?.value) {
      this.store.dispatch(createBoardAction(objBoard as BoardModel))
      this.close.emit()
    }
  }


  deleteColumn(id: number): void {
    this.columnsList = this.columnsList.filter((column: Column) => column.id !== id);
    this.newBoardForm.get('columns')?.setValue(this.columnsList)
  }

  addNewColumn(): void {
    this.columnsList.push({
      description: '',
      id: Math.random(),
      tasks: [],
      color: Math.floor(Math.random() * 16777215).toString(16)
    })
  }

  handleName(name: string): void {
    this.newBoardForm.get('name')?.setValue(name)
  }

  handleColumn(type: string, id: number): void {
    this.columnsList.map((column: Column) => column.id === id ? column.description = type : null)
    this.newBoardForm.get('columns')?.setValue(this.columnsList)
  }
}

