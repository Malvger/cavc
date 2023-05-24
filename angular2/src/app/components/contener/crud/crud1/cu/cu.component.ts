
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Crud1ElementService } from 'src/app/services/crud/crud1.element.service';
import { Crud1Model, TheadsModel } from 'src/app/models/crud1.model';
import { crud1Service } from 'src/app/services/crud/crud1.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cu',
  templateUrl: './cu.component.html',
  styleUrls: ['./cu.component.css']
})
export class CuComponent implements OnInit {
  @Input() data: any;
  
  public crudModel: Crud1Model = new Crud1Model;
  // datos: any  = [];
  //public datos: Array<string>  = new Array<string> ();
  datos: string[] = [];
  ncs= '' ;
  constructor(
    private crudEService: Crud1ElementService,
    private crudService: crud1Service,
    private route: ActivatedRoute
  ) {

  }
  visualizar(thead: any): boolean {
    //  console.log(thead);
    if (thead.visible) {return true; }
    if (this.datos[thead.name]) {return true; }
    if (this.datos[thead.name] === '') {return true; }
    return false;
  }
  Otros(thead: any): boolean {
    //  console.log(thead);
    if (this.datos[thead.name]) {return false; }
    if (!thead.visible) {return true; }
    return false;
  }
  cArray(array: Array<object>) {
    let count = -1;

    for (const key in array) {
      if (array.hasOwnProperty(key)) {
        const element = array[key];
        count++;
      }
    }
    return count - 2;
  }
  fSelected(value: any) {
    this.ncs = value;
  }
  newCampo(event: any ) {
    //this.datos[this.ncs] = ' ';
    console.log(this.datos);
  }
  getIxT(thead:any):any{
   //console.log(name);
    //console.log (this.datos[0][name])

    return this.datos[thead.name];
  }

  chagerData(name:any,value :any ) {
    //console.log(name,value);
    this.datos[name]=value;
  }
  guardar(form: NgForm) {
    let peticion: Observable<any>;
    //console.log(this.datos);
    

    if (form.invalid) {
      console.log('Formulario no valido');
      return;
    }
    if (this.data.data.id !== 'new') {
      peticion = this.crudService.upDate(this.datos, this.data.data.url);
    } else {
      peticion = this.crudService.addData(this.datos, this.data.data.url);
    }

    peticion.subscribe(resp => {
      if (!(resp === undefined)) {
        //console.log(resp);
        this.datos = resp.data;
      }
    } );
  }
  getValue( col: number): string {
    const tmp = this.datos[col];
    if (tmp === undefined) {return ''; }
    return tmp ;
  }
  getValueKey( col: number) {
    const tmp = this.datos[col];
    if (tmp === undefined) {return ''; }
    return this.datos[col];
  }
  ngOnInit() {
    console.log(this.data);
    this.crudModel.setCrud( this.crudEService.getCrud(this.data.data.url));
    console.log(this.data.data.dato);
    if (this.data.data.dato !== undefined) {
      const url = this.crudModel.url + `/${this.data.data.dato.id}`;
      this.crudService.getDatos(url).subscribe((resp: any) => {
        this.datos = resp.data[0];
        // console.log(this.datos);
      });
    }else {
      // const ...dato
      this.datos = {... this.crudModel.new};
    }
    // console.log(this.datos);

  }

}
