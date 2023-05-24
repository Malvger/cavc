import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Tab } from '../../components/contener/tabs/tabs.interface';
import { LocalStorageService } from '../login/local-storage.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Menu, Submenu } from '../../components/contener/menu/menu.interface';


@Injectable({
  providedIn: 'root'
})



export class MenuService {

  public tabs: Tab[] = []; 

  constructor(private http: HttpClient,  private storage: LocalStorageService) { }
  public  closeTab(index:number) {
    this.tabs.splice( (index), 1 );
    if (this.tabs.length > 0) {
      this.tabs[this.tabs.length - 1].activate = true;
    }
  }
  public newTab(tab: Tab) {
    this.tabs.forEach( tab => {
      tab.activate = false;
    });
    this.tabs.push(tab);
  }

  getMenus() {
    const t_menus : Menu[] = [];

    const decode_token = this.storage.getLocalToken();
    // console.log(dat);
    const {perfil} =decode_token.Usuario[0]
    const body = new URLSearchParams();
    //  console.log(decode_token.Usuario[0].perfil);
    //  console.log(perfil);

    body.set('perfil', perfil);
    const ParseHeaders = {
      headers: new HttpHeaders({
       'Content-Type'  : 'application/x-www-form-urlencoded'
      })
     };
    if (!decode_token) {
    } else {
      const url: string = environment.apiEndpoint + 'menu/';
      this.http.post<any[]>(url, body.toString(), ParseHeaders).subscribe(data=>{

         data.forEach(menu => {
          //console.log(t_menus.length);
            if(t_menus.length==0){
              let m:any=[];
              m.id=menu.id;
              m.nombre=menu.nombre;
              m.descripcion=menu.descripcion;
              m.class=menu.class;
              m.style=menu.style;
              m.estado=menu.estado;
              m.url=menu.url;
              m.contener=menu.contener;
              m.submenus=[];
              t_menus.push(m);
            }
            if(!getMenuExiste(t_menus,menu.id)){
              let m:any=[];
              m.id=menu.id;
              m.nombre=menu.nombre;
              m.descripcion=menu.descripcion;
              m.class=menu.class;
              m.style=menu.style;
              m.estado=menu.estado;
              m.url=menu.url;
              m.contener=menu.contener;
              m.submenus=[];
              t_menus.push(m);
            }
            const ix:any =getMenuItem(t_menus,menu.id);
            if (ix!=-1){
              if(menu.sub_id!=null){
                let m:any=[];
                m.id=menu.sub_id;
                m.nombre=menu.sub_nombre;
                m.descripcion=menu.sub_descripcion;
                m.class=menu.sub_class;
                m.style=menu.sub_estilo;
                m.estado=menu.estado;
                m.url=menu.sub_url;
                m.contener=menu.sub_contener;
                t_menus[ix].submenus.push(m);
              }
            
            }
            // console.log(ix+"-");
            //t_menu.push(menu);
           });
          //  console.log(t_menus);
        });
    }
    //console.log(t_menus);
     return t_menus;
  }
}
function getMenuItem(menu:Menu[], id:Number):Number {
 let idex:Number=-1;
 let count =0;
  menu.forEach(m => {
    if(m.id==id){
      idex = count;
    }
    count++;
  });
 return idex;
}
function getMenuExiste(menu:Menu[], id:Number):boolean {
  let exite:boolean=false;
   menu.forEach(m => {
     if(m.id==id){
      exite = true;
     }
   });
  return exite;
 }


