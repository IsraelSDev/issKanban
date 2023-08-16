import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogNewColumnModel} from "../../../models/DialogData.model";
import {AppState} from "../../../store/app-state";
import {Store} from "@ngrx/store";
import {addColumnAction} from "../../../store/board/board.actions";

@Component({
  selector: 'app-new-column-dialog',
  templateUrl: './new-column-dialog.component.html',
  styleUrls: ['./new-column-dialog.component.scss']
})
export class NewColumnDialogComponent {

  @Output() close: EventEmitter<void> = new EventEmitter<void>()
  private columnName: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogNewColumnModel,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {

  }

  newColumn(column: string): void {
    this.columnName = column;
  }

  cadNewColumn() {
    this.store.dispatch(addColumnAction({
      id: this.data.board.id,
      columnTitle: this.columnName
    }))
  }
}
