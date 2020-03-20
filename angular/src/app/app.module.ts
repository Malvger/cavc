import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { LetSidebarComponent } from './component/let-sidebar/let-sidebar.component';
import { PageWrapperComponent } from './component/page-wrapper/page-wrapper.component';
import { NavbarComponent } from './component/contener/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LetSidebarComponent,
    PageWrapperComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
