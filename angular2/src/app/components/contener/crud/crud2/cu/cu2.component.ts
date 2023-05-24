// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-cu2',
  templateUrl: './cu2.component.html',
  styleUrls: ['./cu2.component.css']
})
export class Cu2Component implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
 