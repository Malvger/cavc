import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/contener/navbar/navbar.component';
import { FooterComponent } from './components/contener/footer/footer.component';
import { MenuComponent } from './components/contener/menu/menu.component';
import { ContenerComponent } from './components/contener/contener/contener.component';
import { TabsComponent } from './components/contener/tabs/tabs.component';
import { BnloginComponent } from './components/contener/bnlogin/bnlogin.component';
import { LoginComponent } from './components/login/login.component';

import { LocalStorageService } from './services/login/local-storage.service';
import { LoginService } from './services/login/login.service';
import {MenuService} from './services/menu/menu.service';

import { Crud1Component } from './components/contener/crud/crud1/crud1.component';
import { CuComponent } from './components/contener/crud/crud1/cu/cu.component'
import { crud1Service } from './services/crud/crud1.service';
import { Crud1ElementService } from './services/crud/crud1.element.service';
import { FormsModule } from '@angular/forms';
import { Crud2Component } from './components/contener/crud/crud2/crud2.component';
import {Cu2Component } from './components/contener/crud/crud2/cu/cu2.component';
import{ Crud2Service} from './services/crud/crud2.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    ContenerComponent,
    TabsComponent,
    BnloginComponent,
    LoginComponent,
    Crud1Component,
    CuComponent,
    Crud2Component,
    Cu2Component
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule 

  ],
  providers: [
    LocalStorageService,
    LoginService,
    MenuService,
    crud1Service,
    Crud1ElementService,
    Crud2Service

  ],
  bootstrap: [AppComponent]
})
export class AppModule {  }
