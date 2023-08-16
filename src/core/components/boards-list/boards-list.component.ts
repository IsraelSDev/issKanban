import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {BoardListModel, boardRoute} from "../../models/Board.model";
import {boardCurrentSelector, boardsRouterSelector} from "../../store/board/board.selectors";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.scss']
})

export class BoardsListComponent {

  boards$: Observable<BoardListModel> = this.store.select(boardCurrentSelector);
  boardRoutes$: Observable<boardRoute[]> = this.store.select(boardsRouterSelector);

  boardList: BoardListModel = []
  boardRoutes: boardRoute[] = [];

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.boards$.subscribe((boards: BoardListModel) => this.boardList = boards)
    this.boardRoutes$.subscribe((routes: boardRoute[]) => this.boardRoutes = routes)

  }

}


