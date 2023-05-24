import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MenuService } from '../../../../services/menu/menu.service';
import { Crud2Service } from '../../../../services/crud/crud2.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud2',
  templateUrl: './crud2.component.html',
  styleUrls: ['./crud2.component.css']
})
export class Crud2Component implements OnInit {
  @Input() crud: string="";
  @Input() data: any;
  cargando = false;
  row: any[] = [];
  structure: any[] = [];
  model: any[] = [];;

  constructor(private crudService: Crud2Service,
    private _menuService: MenuService) { }

  ngOnInit(): void {
    this.onInit();
  }
  onInit() {
    // console.log(this.crud);
    // console.log(this.data);
    this.cargando=true;
    this.crudService.getModel(this.crud).subscribe((resp: any) => {
        // console.log(resp.data[0]);
        this.model =this.getArrayElement(resp.data[0]);
        // this.structure=this.crudService.getStructure(resp.data[0].tb_crud);
        this.crudService.getStructure(resp.data[0].tb_crud).subscribe((resp: any) => {
          this.structure=this.getArrayElement(resp);
        });
        this.crudService.getCrudElement(resp.data[0].tb_crud).subscribe((resp: any) => {
          // console.log(resp);
         this.row = this.getArrayElement(resp);
        //  console.log(this.row.length);
        //  console.log(this.getElArray(this.row));
       });
      });
      this.cargando=false;

  } 
  getElArray(el:Array<any>):number{
    let c=0;
    for (const key in el) {
      c++;
    }
    return c;
  }
  getArrayElement(resp:any){
    const rest: any[] = [];
    for (const key in resp) {
      if (Object.prototype.hasOwnProperty.call(resp, key)) {
        const element = resp[key];
        //rest.push({name:key,value:element})
        rest.push(element);
        // console.log(key);
      }
    }
    return rest;
    // return resp;
  }
  getValueKey(item: number, col: string) {
    return this.row[item][col];
  }
  
  deleteDato(dato: any, i: number) {
    // console.log(dato);
    Swal.fire({
      title: '¿Esta Seguro?',
      text: 'Esta seguro de eliminar este registro ',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
        // if (resp.value) {
        //   this.datos.splice(i, 1);
        //   this.crudService.deleteDato(this.crudModel.url, dato.id).subscribe();
        // }
    });
  }
  public  newTab( data: any) {
    // console.log(data.data._id);
    if (data) {
      if (data.length  !== 0) {
        const activate = true;
        this._menuService.newTab({name: `${this.data.name}-(update/add)`, contener: 'app-cu', activate, data:{data, name: this.data.name}});
      }
    }
  }
}

