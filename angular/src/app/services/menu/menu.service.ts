import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class MenuService {
//   private menu = {
//     "ok": true,
//     "menu": [
//         {
//             "estado": true,
//             "submenus": [],
//             "_id": "5e83c74b87fa3c4fa4e875de",
//             "nombre": "Dashboard",
//             "descripcion": "Menu de Dashboard",
//             "class": "zmdi zmdi-view-dashboard zmdi-hc-lg",
//             "style": "",
//             "url": "#",
//             "__v": 0
//         },
//         {
//             "estado": true,
//             "submenus": [
//                 {
//                     "estado": true,
//                     "_id": "5e8290c1a778d653a0a3be3e",
//                     "nombre": "Subir ION",
//                     "descripcion": "",
//                     "class": "",
//                     "style": "",
//                     "menu": "5e829063a778d653a0a3be3c",
//                     "url": "#",
//                     "__v": 0
//                 },
//                 {
//                     "estado": true,
//                     "_id": "5e8290d2a778d653a0a3be3f",
//                     "nombre": "Generada",
//                     "descripcion": "",
//                     "class": "",
//                     "style": "",
//                     "menu": "5e829063a778d653a0a3be3c",
//                     "url": "#",
//                     "__v": 0
//                 },
//                 {
//                     "estado": true,
//                     "_id": "5e8290dda778d653a0a3be40",
//                     "nombre": "Consumida",
//                     "descripcion": "",
//                     "class": "",
//                     "style": "",
//                     "menu": "5e829063a778d653a0a3be3c",
//                     "url": "#",
//                     "__v": 0
//                 }
//             ],
//             "_id": "5e829063a778d653a0a3be3c",
//             "nombre": "Energía",
//             "descripcion": "Menu de Energía",
//             "class": "zmdi zmdi-sun zmdi-hc-lg",
//             "style": "",
//             "url": "#",
//             "__v": 0
//         },
//         {
//             "estado": true,
//             "submenus": [
//                 {
//                     "estado": true,
//                     "_id": "5e829103a778d653a0a3be41",
//                     "nombre": "Orden de Servicio",
//                     "descripcion": "",
//                     "class": "",
//                     "style": "",
//                     "menu": "5e829090a778d653a0a3be3d",
//                     "url": "#",
//                     "__v": 0
//                 },
//                 {
//                     "estado": true,
//                     "_id": "5e829112a778d653a0a3be42",
//                     "nombre": "Actividades",
//                     "descripcion": "",
//                     "class": "",
//                     "style": "",
//                     "menu": "5e829090a778d653a0a3be3d",
//                     "url": "#",
//                     "__v": 0
//                 },
//                 {
//                     "estado": true,
//                     "_id": "5e82911fa778d653a0a3be43",
//                     "nombre": "Insumos",
//                     "descripcion": "",
//                     "class": "",
//                     "style": "",
//                     "menu": "5e829090a778d653a0a3be3d",
//                     "url": "#",
//                     "__v": 0
//                 }
//             ],
//             "_id": "5e829090a778d653a0a3be3d",
//             "nombre": "Mantenimiento",
//             "descripcion": "Menu de Mantenimiento",
//             "class": "zmdi zmdi-wrench zmdi-hc-lg",
//             "style": "",
//             "url": "#",
//             "__v": 0
//         },
//         {
//             "estado": true,
//             "submenus": [
//                 {
//                     "estado": true,
//                     "_id": "5e829156a778d653a0a3be44",
//                     "nombre": "Generación Diaria",
//                     "descripcion": "",
//                     "class": "",
//                     "style": "",
//                     "menu": "5e829030a778d653a0a3be3b",
//                     "url": "#",
//                     "__v": 0
//                 },
//                 {
//                     "estado": true,
//                     "_id": "5e829166a778d653a0a3be45",
//                     "nombre": "Control de Nivel",
//                     "descripcion": "",
//                     "class": "",
//                     "style": "",
//                     "menu": "5e829030a778d653a0a3be3b",
//                     "url": "#",
//                     "__v": 0
//                 }
//             ],
//             "_id": "5e829030a778d653a0a3be3b",
//             "nombre": "Operación",
//             "descripcion": "Menu de Operación",
//             "class": "zmdi zmdi-lamp zmdi-hc-lg",
//             "style": "",
//             "url": "#",
//             "__v": 0
//         },
//         {
//             "estado": true,
//             "submenus": [
//                 {
//                     "estado": true,
//                     "_id": "5e82919da778d653a0a3be46",
//                     "nombre": "New Service 1",
//                     "descripcion": "",
//                     "class": "",
//                     "style": "",
//                     "menu": "5e828ff6a778d653a0a3be3a",
//                     "url": "#",
//                     "__v": 0
//                 },
//                 {
//                     "estado": true,
//                     "_id": "5e83bad2832a57285cfcb339",
//                     "nombre": "New Service 2",
//                     "descripcion": "",
//                     "class": "",
//                     "style": "",
//                     "menu": "5e828ff6a778d653a0a3be3a",
//                     "url": "#",
//                     "__v": 0
//                 }
//             ],
//             "_id": "5e828ff6a778d653a0a3be3a",
//             "nombre": "Services",
//             "descripcion": "Menu de Services",
//             "class": "fa fa-globe fa-lg",
//             "style": "",
//             "url": "#",
//             "__v": 0
//         }
//     ]
// };
constructor(private http: HttpClient ) {



}
getMenus() {
  return this.http.get('http://localhost:3000/service/menu/5e72bdece967740dd85f7351');
}

}
