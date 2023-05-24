import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../login/local-storage.service';


@Injectable({
  providedIn: 'root'
})

export class RrhhService {
  token: any;
  constructor(
    private http: HttpClient,
    private storage: LocalStorageService
  ) {
    // headers.append('token', storage.getLocalToken() );
    this.token = JSON.parse(storage.getLocalStorage('sesion'));

  }

  getRRHHs() {

      const url: string = environment.apiEndpoint + 'rrhh';

      // console.log(url);
      const headers = new HttpHeaders()
            .set('token', this.token.token);

      return this.http.get(url,{headers} );

  }
}
