import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogDataModel} from "../../models/DialogData.model";
import {Observable} from "rxjs";
import {getThemeMode} from "../../store/theme/theme.selectors";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app-state";


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {
  private theme$: Observable<string> = this.store.select(getThemeMode);
  public mode: string = '';

  constructor(
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataModel,
  ) {
  }

  ngOnInit(): void {
    this.theme$.subscribe((theme: string) => this.mode = theme)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
