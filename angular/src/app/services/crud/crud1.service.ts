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
    // console.log(dato);
    // return this.http.post(`${url}/`, dato, {headers}).pipe(
    //   map((resp: any) => {
    //     // heroe.id = resp.name;
    //     // return heroe;
    //     //console.log(resp);
    //   })
    // );
    return this.http.post(`${url}/`, dato, {headers});

  }
  upDate(dato: any, crud: string) {
    const url: string = environment.apiEndpoint + crud;
    const headers = new HttpHeaders()
            .set('token', this.token.token);
    const datoTemp = {
              ...dato
            };
    delete datoTemp._id;
    // console.log(dato,crud);
    return this.http.put(`${url}/${dato._id}`, datoTemp, {headers});
  }

  getDatos(crud: string) {

      const url: string = environment.apiEndpoint + crud;
      const headers = new HttpHeaders()
            .set('token', this.token.token);
      // console.log(url);
      return this.http.get(url, {headers} );

  }
  deleteDato(crud: string, id: string) {
    const url: string = environment.apiEndpoint + crud + `/${id}`;
    const headers = new HttpHeaders()
    .set('token', this.token.token);
    console.log(url);
    return this.http.delete (url, {headers});
  }
}
