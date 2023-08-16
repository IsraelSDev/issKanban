import {NgModule} from '@angular/core';
import {CommonModule, NgIf, NgOptimizedImage} from '@angular/common';
import {ButtonComponent} from './components/button/button.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {TextfieldComponent} from './components/textfield/textfield.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {SwitchThemeComponent} from './components/switch-theme/switch-theme.component';
import {BoardsListComponent} from './components/boards-list/boards-list.component';
import {BoardLinkComponent} from './components/board-link/board-link.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {BoardPanelComponent} from './components/board-panel/board-panel.component';
import {MatDialogModule} from '@angular/material/dialog';
import {CustomDialogsModule} from "./components/dialog/dialog.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EllipsisPipe} from "./pipes/ellipsis.pipe";
import { ColumnComponent } from './components/column/column.component';


@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    TextfieldComponent,
    DropdownComponent,
    SwitchThemeComponent,
    BoardsListComponent,
    BoardLinkComponent,
    BoardPanelComponent,
    EllipsisPipe,
    ColumnComponent
  ],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    TextfieldComponent,
    DropdownComponent,
    SwitchThemeComponent,
    BoardsListComponent,
    BoardLinkComponent,
    BoardPanelComponent,
    MatDialogModule,
    EllipsisPipe
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CoreModule {
}
