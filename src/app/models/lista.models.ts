import { ListaItem } from './lista-item.model';


export class Lista{

  id: number;
  title: string;
  create_date: Date;
  finish_date: Date;
  complate: boolean;
  items: ListaItem[];

  constructor( title: string ){
    this.title = title;
    this.create_date = new Date;
    this.complate = false;
    this.items = []
    this.id = new Date().getTime();
  }
}
