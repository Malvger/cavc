import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/contener/navbar/navbar.component';
import { MenuComponent } from './components/contener/menu/menu.component';
import { FooterComponent } from './components/contener/footer/footer.component';
import { BnloginComponent } from './components/contener/bnlogin/bnlogin.component';
import { TabsComponent } from './components/contener/tabs/tabs.component';
// import { TabComponent } from './components/contener/tabs/tab.component';
// import { Tabs_Component } from './components/contener/tabs/tabs_.component';

import { HttpClientModule } from '@angular/common/http';
import { ContenerComponent } from './components/contener/contener/contener.component';

import {MenuService} from './services/menu/menu.service';
import { AppConfigModule } from './app.config';
import { OpGenDiariaComponent } from './components/op/op-gen-diaria/op-gen-diaria.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    BnloginComponent,
    TabsComponent,
    // TabComponent,
    // Tabs_Component,
    ContenerComponent,
    OpGenDiariaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppConfigModule
  ],
  providers: [
    MenuService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
