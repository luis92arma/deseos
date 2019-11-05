import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.models';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  public listas: Lista[] = [];

  constructor() {
    console.log('service started...')
    const Lista1 = new Lista('Recolectar piedras del infinito')
    const Lista2 = new Lista('Heroes a desaparecer')

    this.listas.push(Lista1, Lista2)
  }


}
