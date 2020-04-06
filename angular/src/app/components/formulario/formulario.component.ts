import { Component, OnInit } from '@angular/core';

declare var xepOnline: any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

public printMe() {
  xepOnline.Formatter.Format('print_me', {render: 'download'});
}

}
