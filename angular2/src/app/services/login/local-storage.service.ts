import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  helper = new JwtHelperService();
  constructor() { }

  setLocalStorage(key: string , data: string) {
    localStorage.setItem(key, data);
  }
  deleteLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  getLocalStorage(key: string): string {
    return localStorage.getItem(key)||"";
    
  }
  getLocalToken() {
    const decodedToken = this.helper.decodeToken(this.getLocalStorage('sesion'));
    const now = new Date ();
    const nowTime: number = Math.round(now.getTime() / 1000);
    if (nowTime >= decodedToken.exp) {
      localStorage.removeItem('sesion');
      return false;
    }
    return decodedToken;
  }
}
