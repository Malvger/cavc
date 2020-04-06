import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // public login = true;
  public login = false;
  public alerta = false;
  public token: string;

  constructor(private http: HttpClient) {

  }

  postLogin(email: string, password: string) {


    const body = new URLSearchParams();
    body.set('email', email.toString());
    body.set('password', password.toString());

    const ParseHeaders = {
      headers: new HttpHeaders({
       'Content-Type'  : 'application/x-www-form-urlencoded'
      })
     };

    const _URL = environment.apiEndpoint + 'login';
    this.http.post(_URL, body.toString(), ParseHeaders).subscribe((res: any) => {
    // console.log(res.ok);
    if (res.ok) {
      this.token = res.token;
      // console.log(this.token);
      this.login = true;
      return false;
    }
    });
    return true;
  }

}

