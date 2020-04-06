import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLocalStorage(key: string , data: string){
    localStorage.setItem(key, data);
  }

  getLocalStorage(key: string): string {
    return localStorage.getItem(key);
  }
}
