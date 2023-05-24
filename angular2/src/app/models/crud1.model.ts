export class TheadsModel {
  // {name: 'nombres', label: 'Nombres'},
  name: string;
  label: string;
  disable: boolean;
  visible: boolean;
  type: string;
  required: boolean;

  constructor(name: string, label: string, disable = true, visible = false, type= 'text', required= false ) {
    this.name = name;
    this.label = label;
    this.disable = disable;
    this.visible = visible;
    this.type = type;
    this.required = required;
  }


}

export class Crud1Model {


  url: string="";
  new: any = [];
  theads: TheadsModel[] = [];
  setCrud(crud: Crud1Model | undefined) {
    if (crud != undefined){
      this.url=crud.url;
      this.new=crud.new;
      this.theads=crud.theads;
    }

    //throw new Error('Method not implemented.');

  }
  constructor() {

  }
  
}
