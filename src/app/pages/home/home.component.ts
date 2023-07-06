import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../core/store/app-state";
import {handleSidebarMode} from "../../../core/store/sidebar/sidebar.actions";
import {Observable} from "rxjs";
import {getSideBarShow} from "../../../core/store/sidebar/sidebar.selectors";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sidebar$: Observable<boolean> = this.store.select(getSideBarShow);
  isSideBarVisible: boolean = true;

  ngOnInit() {
    this.sidebar$.subscribe((isVisible: boolean) => this.isSideBarVisible = isVisible)
  }

  constructor(private store: Store<AppState>) {
  }

  showSideBar(): void {
    this.store.dispatch(handleSidebarMode({
      show: true
    }))
  }
}
