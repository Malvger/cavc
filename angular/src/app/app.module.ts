import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/contener/navbar/navbar.component';
import { MenuComponent } from './components/contener/menu/menu.component';
import { FooterComponent } from './components/contener/footer/footer.component';
import { BnloginComponent } from './components/contener/bnlogin/bnlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    BnloginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
