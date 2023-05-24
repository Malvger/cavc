import { Component } from '@angular/core';
import { LocalStorageService } from './services/login/local-storage.service';
import { LoginService } from './services/login/login.service';

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
      const decode_token = this.storage.getLocalToken();
      if (!decode_token) {
        console.log('Token invalido');
      } else {
        // console.log(decode_token);
      }
    }
  }


  public getLogin() {
    return this.loginService.login;
  }
}
