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
import { Crud1Component } from './components/crud/crud1/crud1.component';
import { RrhhService } from './services/crud/crud.rrhh.service';
import { crud1Service } from './services/crud/crud1.service';
import { CuComponent } from './components/crud/crud1/cu/cu.component';
import { Crud1ElementService } from './services/crud/crud1.element.service';
import { FormsModule} from '@angular/forms';

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
    FormularioComponent,
    Crud1Component,
    CuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppConfigModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    ],
  providers: [
    LoginService ,
    MenuService,
    LocalStorageService,
    RrhhService,
    crud1Service,
    Crud1ElementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
