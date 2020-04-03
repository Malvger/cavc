import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cavc';


  constructor(private loginService: LoginService){
  }


  public getLogin(){
    return this.loginService.login;
  }
}
