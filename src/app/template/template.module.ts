import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CoreModule} from "../../core/core.module";
import {TopbarComponent} from './topbar/topbar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgOptimizedImage,
  ],
  exports: [
    SidebarComponent,
    TopbarComponent
  ]
})
export class TemplateModule {
}

