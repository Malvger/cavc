import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public login = false;
  public alerta = false;
  public token: string;

  constructor(private http: HttpClient, private storage: LocalStorageService) {

  }


  // getEquipo(){
  //   this.http.get('http://localhost:4000/equipo').subscribe((data: any) =>{
  //     console.log(data.equipos);
  //   })
  // }

  postLogin(email: string, password: string) {


    const body = new URLSearchParams();
    body.set('email', email.toString());
    body.set('password', password.toString());

    // const body = {
    //   email: 'malvger@gmail.com',
    //   password: 'regvlam'
    // }

    const ParseHeaders = {
      headers: new HttpHeaders({
       'Content-Type'  : 'application/x-www-form-urlencoded'
      })
     };

    const _URL = 'http://localhost:4000/login';
    this.http.post(_URL, body.toString(), ParseHeaders).subscribe((res: any) => {
    console.log(res.ok);
    if (res.ok) {
      this.token = res.token;
      this.login = true;
      this.storage.setLocalStorage('sesion', JSON.stringify(res));
      return false;
    }
    });
    return true;
  }

  setLogin(login: boolean) {
    this.login = login;
  }
}

