import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
     //public login = true;
    public login = false;
    public alerta = false;
    public token: string="";

  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  postLogin(email: string, password: string) {
    let ok =true;
    
    const body = new URLSearchParams();
    body.set('email', email.toString());
    body.set('password', password.toString());

    const ParseHeaders = {
      headers: new HttpHeaders({
       'Content-Type'  : 'application/x-www-form-urlencoded'
      })
     };

    const _URL = environment.apiEndpoint + 'login';
    this.http.post<any>(_URL, body.toString(), ParseHeaders).subscribe(data => {

     if (data.ok) {
      this.token = data.token; 
      this.login = true;
      this.storage.setLocalStorage('sesion', JSON.stringify(data));
      ok=false;
    }
      //console.log(data)
    });



    return ok;
  
  }

  setLogin(login: boolean) {
    this.login = login;
  }
}
