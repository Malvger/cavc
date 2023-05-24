import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../../services/menu/menu.service';
import { Tab } from './tabs.interface';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  public tabs: Tab[] = [];
  
  constructor(private menuService: MenuService) {
    this.tabs = this.menuService.tabs;
  }
  public  closeTab(index:number) {
    this.menuService.closeTab(index);
  }
  selectTab(tab:Tab){

    this.tabs.forEach(tab => tab.activate = false);
    tab.activate = true;
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

  ngOnInit(): void {
  }

}
