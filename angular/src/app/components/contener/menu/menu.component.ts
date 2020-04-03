import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../../services/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // menuService = new  MenuService();
  public menus = [ ];
  constructor(private _menuService: MenuService) { }

  ngOnInit() {
    this.getMenus();
  }
  setMenus(data ) {
    for (const m in data.menu) {
      if (data.menu.hasOwnProperty(m)) {
        const e = data.menu[m];

        this.menus.push (e);
      }
    }
  }
  getSubMenu(data, index): [] {
    return data[index].submenus;
  }

  getMenus() {
    this._menuService.getMenus().subscribe(
        data => {
          this.setMenus(data);
          } ,
        err => console.error(err),
        () => console.log('done loading menus')
      );
    }

}
