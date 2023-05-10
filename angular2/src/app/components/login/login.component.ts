import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public alerta = false;
  constructor(private loginService: LoginService) { }
  postLogin(email: string, password: string){
    this.alerta = this.loginService.postLogin(email, password);
  }

  ngOnInit(): void {
  }

}
