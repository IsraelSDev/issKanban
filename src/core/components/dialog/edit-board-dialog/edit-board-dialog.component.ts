import {Component, EventEmitter, Output} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-edit-board-dialog',
  templateUrl: './edit-board-dialog.component.html',
  styleUrls: ['./edit-board-dialog.component.scss']
})
export class EditBoardDialogComponent {


  @Output() close: EventEmitter<void> = new EventEmitter<void>()

  constructor(private dialogref: DialogRef) {
  }


}
