import {Component, Inject, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogRef} from "@angular/cdk/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-board-link',
  templateUrl: './board-link.component.html',
  styleUrls: ['./board-link.component.scss']
})
export class BoardLinkComponent {

  @Input() newBoardLink: boolean = false;
  @Input() name: string = '';
  @Input() route: string = '';


  constructor(public dialog: MatDialog) {
  }

  public openNewBoard(): void {
    this.dialog.open(
      DialogComponent, {
        data: {
          modalTypeId: 1,
        }
      }
    ).afterClosed().subscribe((obs: DialogRef) => console.log(obs));
  }
}

