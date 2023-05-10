import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../login/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class Crud2Service {
  token: any;
  constructor(
    private http: HttpClient,
    private storage: LocalStorageService
  ) {
    this.token = JSON.parse(storage.getLocalStorage('sesion'));

  }
  getDatos(crud: string) {
    const url: string = environment.apiEndpoint + crud;
    const headers = new HttpHeaders()
          .set('token', this.token.token);
    return this.http.get<any>(url, {headers} );

  }
  getModel(crud: string) {
    const url: string = environment.apiEndpoint +'crudmodel/'+ crud;
    const headers = new HttpHeaders()
          .set('token', this.token.token);
    return this.http.get<any>(url, {headers} );

  }
  getStructure(crud: string) {
    const url: string = environment.apiEndpoint +'crudstructure/'+ crud;
    const headers = new HttpHeaders()
          .set('token', this.token.token);
    return this.http.get<any>(url, {headers} );

  }
  getCrudElement(tl: string) {
    const url: string = environment.apiEndpoint +'crudElement/'+ tl;
    const headers = new HttpHeaders()
          .set('token', this.token.token);
    return this.http.get<any>(url, {headers} );

  }
}

