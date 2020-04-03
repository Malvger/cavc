import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../../services/menu/menu.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  public tabs = [ ];
  constructor(private menuService: MenuService) {
    this.tabs = this.menuService.tabs;
  }
//active active show
  public  closeTab(index) {
    this.menuService.closeTab(index);
  }
  public getActivate(index: number, t: number= 0): string {
    if (t === 0) {
      if (this.menuService.tabs[index].activate) {
        return 'nav-item nav-link active';
      } else {
        return 'nav-item nav-link ';
      }
    } else {
      if (this.menuService.tabs[index].activate) {
        return 'tab-pane fade active show';
      } else {
        return 'tab-pane fade';
      }
    }
  }

  ngOnInit() {
    console.log("int");
  }

}
