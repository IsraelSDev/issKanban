import {Component, Inject, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogRef} from "@angular/cdk/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {AppState} from "../../store/app-state";
import {Store} from "@ngrx/store";
import {handleBoardAction} from "../../store/board/board.actions";

@Component({
  selector: 'app-board-link',
  templateUrl: './board-link.component.html',
  styleUrls: ['./board-link.component.scss']
})
export class BoardLinkComponent {

  @Input() newBoardLink: boolean = false;
  @Input() name: string = '';
  @Input() route: string = '';
  @Input() boardId: number = 0;
  @Input() id: number = 0;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
  }

  ngOnInit() {

  }


  handleBoard(id: number): void {
    this.store.dispatch(handleBoardAction({id: id, active: true}))
  }

  public openNewBoard(): void {
    this.dialog.open(
      DialogComponent, {
        data: {
          modalTypeId: 1,
        }
      }
    ).afterClosed()
  }
}

