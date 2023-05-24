import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../login/local-storage.service';
import { Crud1Model, TheadsModel } from '../../models/crud1.model';
// import { Crud1ElementModel } from './crud1.element.service';
@Injectable({
  providedIn: 'root'
})


export class Crud1ElementService {
  rrhh: Crud1Model = {
    url: 'rrhh',
    new: { apellidos: '', dpi: '', estado: true, fecha: '', nombres: '', telefonos: '' },
    theads: [
      // (name, label,disable,visible,type,required),
      new TheadsModel('id', 'ID', true, true, 'ObjectID', true),
      new TheadsModel('nombres', 'Nombres', false, true, 'text', true),
      new TheadsModel('apellidos', 'Apellidos', false, true, 'text', true),
      new TheadsModel('dpi', 'DPI', false, true, 'text', true),
      new TheadsModel('telefonos', 'Telefono', false, true, 'text', true),
      new TheadsModel('fecha', 'Fecha Nacimiento', false, true, 'date', false),
      new TheadsModel('email', 'Correo', false, false, 'text', false),
      new TheadsModel('foto', 'Foto', false, false, 'img', false),
      // {
      //  name: '_id',
      //  label: 'ID',
      //  disable: true,
      //  visible: true,
      //  type: 'ObjectID',
      //  required: true
      //  },
      // {name: 'nombres', label: 'Nombres', disable: false, visible: true, type: 'text', required: true},
      // {name: 'apellidos', label: 'Apellidos', disable: false, visible: true, type: 'text', required: true},
      // {name: 'email', label: 'Correo', disable: false, visible: true, type: 'text', required: true},
      // {name: 'dpi', label: 'DPI', disable: false, visible: true, type: 'text', required: true},
      // {name: 'telefonos', label: 'Telefono', disable: false, visible: true, type: 'text', required: true},
      // {name: 'fecha', label: 'Fecha Nacimiento', disable: false, visible: true, type: 'date', required: true},
      // new TheadsModel( 'fecha2', 'Fecha Nacimiento2',  false,  true,  'date')
    ],
    setCrud: function (crud: Crud1Model | undefined): void {
      throw new Error('Function not implemented.');
    }
  };
    trrhh: Crud1Model = {
      url: 'trrhh',
      new: { apellidos: '', dpi: '', estado: true, nombres: '' },
      theads: [
        // (name, label,disable,visible,type,required),
        new TheadsModel('id', 'ID', true, true, 'ObjectID', true),
        new TheadsModel('error', 'error', true, false, 'text', false),
        new TheadsModel('nombres', 'Nombres', false, true, 'text', true),
        new TheadsModel('apellidos', 'Apellidos', false, true, 'text', true),
        new TheadsModel('dpi', 'DPI', false, true, 'text', true),
        new TheadsModel('telefonos', 'Telefono', false, false, 'text', false),
        new TheadsModel('fecha', 'Fecha Nacimiento', false, false, 'date', false),
        new TheadsModel('email', 'Correo', false, false, 'text', false),
        new TheadsModel('comunidad', 'Comunidad', false, true, 'text', false),
        new TheadsModel('jornal', 'Jornal', false, true, 'text', false),
        new TheadsModel('planta', 'Planta', false, false, 'text', false),
        new TheadsModel('area', 'Área', false, false, 'text', false),
        new TheadsModel('nit', 'Nit', false, false, 'text', false),
        new TheadsModel('foto', 'Foto', false, false, 'img', false),
      ],
      setCrud: function (crud: Crud1Model | undefined): void {
        throw new Error('Function not implemented.');
      }
    };

   getCrud(model: string) {
    switch (model) {
      case 'rrhh':
        return this.rrhh;
        break;
      case 'trrhh':
        return this.trrhh;
        break;
      default:
        return undefined;
        break;
    }
   }
}
