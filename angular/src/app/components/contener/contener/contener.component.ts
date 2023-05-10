// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-contener',
  templateUrl: './contener.component.html',
  styleUrls: ['./contener.component.css']
})
export class ContenerComponent implements OnInit {
  @Input() contener: string;
  @Input() data: any;

  constructor() {
    // console.log(this.contener);
   }

  ngOnInit() {
  }

}
