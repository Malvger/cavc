import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/contener/navbar/navbar.component';
import { MenuComponent } from './components/contener/menu/menu.component';
import { FooterComponent } from './components/contener/footer/footer.component';
import { BnloginComponent } from './components/contener/bnlogin/bnlogin.component';
import { TabsComponent } from './components/contener/tabs/tabs.component';

import { HttpClientModule } from '@angular/common/http';
import { ContenerComponent } from './components/contener/contener/contener.component';
import { LoginService } from './services/login/login.service';
import {MenuService} from './services/menu/menu.service';
import { AppConfigModule } from './app.config';
import { OpGenDiariaComponent } from './components/op/op-gen-diaria/op-gen-diaria.component';
import { LoginComponent } from '../app/components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LocalStorageService } from './services/login/local-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    BnloginComponent,
    TabsComponent,
    ContenerComponent,
    OpGenDiariaComponent,
    LoginComponent,
    FormularioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppConfigModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    ],
  providers: [LoginService , MenuService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
