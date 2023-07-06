import {NgModule} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {DialogComponent} from "./dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {NewBoardDialogComponent} from './new-board-dialog/new-board-dialog.component';

@NgModule({
  declarations: [
    DialogComponent,
    NewBoardDialogComponent,
  ],
  exports: [
    NewBoardDialogComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
  ]
})
export class CustomDialogsModule {
}
