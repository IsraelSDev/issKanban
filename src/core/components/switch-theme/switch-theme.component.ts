import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app-state";
import {UpdateTheme} from "../../store/theme/theme.actions";


@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss']
})
export class SwitchThemeComponent {

  constructor(private store: Store<AppState>) {
  }

  toggleTheme($event: any): void {
    const darkTheme = {
      mode: 'dark'
    }
    const lightTheme = {
      mode: 'light'
    }
    this.store.dispatch(UpdateTheme($event.checked ? darkTheme : lightTheme))
  }
}
