import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Tab } from '../../components/contener/tabs/tabs.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  public tabs: Tab[] = []; /* = [
    {name: 'Operaciones', contener: 'app-energia'},
    {name: 'RRHH', contener: 'app-rrhh'},
    {name: 'Mantenimiento', contener: 'app-mantenimiento'},
    {name: 'Generación Diaria', contener: 'app-op-gen-diaria'}
  ];*/
  constructor(
    private http: HttpClient
  ) {}
  public  closeTab(index) {
    this.tabs.splice( (index), 1 );
  }
  public newTab(tab: Tab) {
    this.tabs.forEach( tab => {
      tab.activate = false;
    });
    this.tabs.push(tab);
  }

  getMenus() {
    const url: string = environment.apiEndpoint + 'service/menu/5e72bdece967740dd85f7351';
    return this.http.get(url);
  }
}
