import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {themeState} from "../core/store/theme/theme.reducers";
import {Store} from "@ngrx/store";
import {AppState} from "../core/store/app-state";
import {getThemeMode} from "../core/store/theme/theme.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private theme$: Observable<string> = this.store.select(getThemeMode);
  public mode: string = '';

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.theme$.subscribe((theme: string) => this.mode = theme)
  }

}
