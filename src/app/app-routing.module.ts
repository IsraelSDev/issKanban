import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./pages/home/home.component";
import {BoardPanelComponent} from "../core/components/board-panel/board-panel.component";

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: ':id',
          component: BoardPanelComponent
        }
      ]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
