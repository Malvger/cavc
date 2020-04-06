import { Component } from '@angular/core';
import { LoginService } from './service/login.service';
import { LocalStorageService } from './service/local-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cavc';


  constructor(private loginService: LoginService, private storage: LocalStorageService) {
    const sesion = this.storage.getLocalStorage('sesion');
    if (sesion === null) {
      this.loginService.setLogin(false);
    } else {
      this.loginService.setLogin(true);
    }
  }


  public getLogin(){
    return this.loginService.login;
  }
}
