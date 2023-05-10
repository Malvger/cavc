import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../services/login/local-storage.service';
import { LoginService } from "../../../services/login/login.service";

@Component({
  selector: 'app-bnlogin',
  templateUrl: './bnlogin.component.html',
  styleUrls: ['./bnlogin.component.css']
})
export class BnloginComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private loginService: LoginService) { }

   ngOnInit() {
   }

  // constructor() { }

  // ngOnInit(): void {
  // }
  close(){
     this.localStorageService.deleteLocalStorage('sesion');
     this.loginService.setLogin(false);
  }

}
