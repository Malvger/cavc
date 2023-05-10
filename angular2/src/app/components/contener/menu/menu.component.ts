import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu/menu.service';
import { Menu, Submenu } from './menu.interface';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menus:Menu[] = [ ];
  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.getMenus();
  }

  
  public  newTab(name: string, contener: string, data: any = '') {
    if (contener) {
      if (contener.length  !== 0) {
        const activate = true;
        this._menuService.newTab({name, contener, activate, data});
      }
    }
  }
  setMenus(data :Menu[]) {
    // for (const m in data.menu) {
    //   if (data.menu.hasOwnProperty(m)) {
    //     const e = data.menu[m];
    //      this.menus.push (e);
    //   }
    // }
    this.menus=data;
  }
  getSubMenu(data:any, index:any):Submenu [] {
    return data[index].submenus;
  }

  getMenus() {
    // this._menuService.getMenus().subscribe(
    //     data => {
    //       this.setMenus(data);
    //       } ,
    //     err => console.error(err),
    //     () => console.log('done loading menus')
    //   );
    // this._menuService.getMenus().subscribe(data=>{
    //   //dat=data;
    //   console.log(data);
    // });
    this.setMenus(this._menuService.getMenus());
    //console.log(this._menuService.getMenus());
    }


}
