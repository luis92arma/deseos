import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public deseosService: DeseosService,
    private router: Router,
    public alertCtrl: AlertController
  ) {

  }

  async agregarLista(){
    // funcion async funciona como una promesa
    //this.router.navigateByUrl('/tabs/tab1/agregar')
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar')
        }
      },
      {
        text: 'Crear',
        handler: ( data ) => {
          console.log(data)
          if (data.titulo.length === 0 ) {
              return
          }
          const listId = this.deseosService.crearLista(data.titulo);
          this.router.navigateByUrl(`/tabs/tab1/agregar/${listId}`)
        }
      }]
    });

    alert.present();

  }

}
