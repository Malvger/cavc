import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Data } from '../../class/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public alerta = false;

  constructor( private loginService: LoginService) {
  }

  postLogin(email: string, password: string){
    this.alerta = this.loginService.postLogin(email, password);
  }
}
