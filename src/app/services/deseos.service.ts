import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.models';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  public listas: Lista[] = [];

  constructor() {
    console.log('service started...')
    this.cargarStorage()
    //const Lista1 = new Lista('Recolectar piedras del infinito')
    //const Lista2 = new Lista('Heroes a desaparecer')

    //this.listas.push(Lista1, Lista2)
  }

  crearLista( titulo: string){
    var lista = new Lista(titulo);
    this.listas.push(lista);
    this.gurdarStorage();
    return lista.id
  }

  obtenerLista( id: string | number){
    id = Number(id);
    return this.listas.find( data => data.id === id )
  }

  gurdarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage(){
    var data = JSON.parse(localStorage.getItem('data'));
    if( data ){
      this.listas = data
    }else{
      this.listas = []
    }
  }


}
