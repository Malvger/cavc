export interface Menu {
    id:number
    nombre: string;
    descripcion: string;
    class: string;
    style: string;
    estado: boolean;
    url: string;
    contener:string;
    submenus:Submenu[];
  };
  export interface Submenu {
    id:number
    nombre: string;
    descripcion: string;
    class: string;
    style: string;
    estado: boolean;
    contener:string;
    url: string;
  }