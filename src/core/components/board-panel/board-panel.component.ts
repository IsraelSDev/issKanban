import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app-state";
import {Observable} from "rxjs";
import {BoardModel} from "../../models/Board.model";
import {boardActiveSelector} from "../../store/board/board.selectors";
import {addColumnAction, createBoardAction} from "../../store/board/board.actions";
import {MatDialog} from "@angular/material/dialog";
import {NewColumnDialogComponent} from "../dialog/new-column-dialog/new-column-dialog.component";

@Component({
  selector: 'app-board-panel',
  templateUrl: './board-panel.component.html',
  styleUrls: ['./board-panel.component.scss']
})
export class BoardPanelComponent {

  currentBoard: BoardModel = {} as BoardModel;
  activeBoard$: Observable<BoardModel> = this.store.select(boardActiveSelector);

  constructor(private store: Store<AppState>, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.activeBoard$.subscribe((board: BoardModel) => {
      this.currentBoard = board
    });


  }

  newColumn(): void {
    // this.store.dispatch(addColumnAction({id: this.currentBoard.id, column:  } ))
    console.log(this.currentBoard)

    this.dialog.open(NewColumnDialogComponent, {
      data: {
        id: 2,
        board: this.currentBoard
      }
    })
  }

}
