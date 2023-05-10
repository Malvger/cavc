import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../login/local-storage.service';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class crud1Service {
  token: any;
  constructor(
    private http: HttpClient,
    private storage: LocalStorageService
  ) {
    // headers.append('token', storage.getLocalToken() );
    this.token = JSON.parse(storage.getLocalStorage('sesion'));

  }
  addData(dato: any, crud: string) {
    const url: string = environment.apiEndpoint + crud;
    const headers = new HttpHeaders()
    .set('token', this.token.token);
    return this.http.post(`${url}/`, dato, {headers});

  }
  upDate(dato: any, crud: string) {
    const url: string = environment.apiEndpoint + crud;
    //console.log(this.token.token);
    const headers = new HttpHeaders()
            .set('token', this.token.token);
    const datoTemp = {
              ...dato
            };
    delete datoTemp.id;
    // console.log(dato,crud);
    return this.http.put(`${url}/${dato.id}`, datoTemp, {headers});
     
  }

  getDatos(crud: string) {
      const url: string = environment.apiEndpoint + crud;
      const headers = new HttpHeaders()
            .set('token', this.token.token);
      return this.http.get<any>(url, {headers} );

  }

  deleteDato(crud: string, id: string) {
    const url: string = environment.apiEndpoint + crud + `/${id}`;
    const headers = new HttpHeaders()
    .set('token', this.token.token);
    console.log(url);
    return this.http.delete (url, {headers});
  }
}
