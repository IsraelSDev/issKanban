import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../core/store/app-state";
import {Observable} from "rxjs";
import {getThemeMode} from "../../../core/store/theme/theme.selectors";
import {getSideBarShow} from "../../../core/store/sidebar/sidebar.selectors";
import {handleSidebarMode} from "../../../core/store/sidebar/sidebar.actions";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  private theme$: Observable<string> = this.store.select(getThemeMode)
  private sideBar$: Observable<boolean> = this.store.select(getSideBarShow)

  public theme: string = ''
  public isSideBarShow: boolean = true;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.theme$.subscribe((theme: string) => theme === 'dark' ? this.theme = 'light' : this.theme = 'dark')
    this.sideBar$.subscribe((sideBar: boolean) => this.isSideBarShow = sideBar)
  }

  hideSideBar() {
    this.store.dispatch(handleSidebarMode({
      show: false
    }))
  }


}
