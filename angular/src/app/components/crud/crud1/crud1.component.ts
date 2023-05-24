// import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Crud1Model } from '../../../models/crud1.model';
import { crud1Service } from '../../../services/crud/crud1.service';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Crud1ElementService } from '../../../services/crud/crud1.element.service';
import { MenuService } from '../../../services/menu/menu.service';


@Component({
  selector: 'app-crud1',
  templateUrl: './crud1.component.html',
  styleUrls: ['./crud1.component.css']
})
export class Crud1Component implements OnInit {
    @Input() crud: string;
    @Input() data: any;
   public crudModel: Crud1Model;
   datos: [] = [];
   cargando = false;

  constructor( private crudService: crud1Service,
               private crudEService: Crud1ElementService,
               private _menuService: MenuService ) { }

  ngOnInit() {

    this.onInit();
    // console.log(this.crudModel);
  }
  onInit() {
    this.crudModel = this.crudEService.getCrud(this.crud);
    this.crudService.getDatos(this.crudModel.url).subscribe((resp: any) => {
      this.datos = resp.data;
    });
  }



  getValueKey(item: number, col: string) {
    return this.datos[item][col];
  }

  deleteDato(dato: any, i: number) {
    // console.log(dato);
    Swal.fire({
      title: '¿Esta Seguro?',
      text: 'Esta seguro de eliminar este registro ',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
        if (resp.value) {
          this.datos.splice(i, 1);
          this.crudService.deleteDato(this.crudModel.url, dato._id).subscribe();
        }
    });
  }
  public  newTab( data: any) {
    // console.log(data);
    if (data) {
      if (data.length  !== 0) {
        const activate = true;
        this._menuService.newTab({name: `${this.data.name}-(update/add)`, contener: 'app-cu', activate, data:{data, name: this.data.name}});
      }
    }
  }

}
