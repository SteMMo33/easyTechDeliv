import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsegnaAlClientePage } from '../consegna-al-cliente/consegna-al-cliente';
import { LetturaCodiciABarrePage } from '../lettura-codici-abarre/lettura-codici-abarre';

@Component({
  selector: 'page-consegne',
  templateUrl: 'consegne.html'
})
export class ConsegnePage {

  constructor(public navCtrl: NavController) {
  }
  goToConsegnaAlCliente(params){
    if (!params) params = {};
    this.navCtrl.push(ConsegnaAlClientePage);
  }goToLetturaCodiciABarre(params){
    if (!params) params = {};
    this.navCtrl.push(LetturaCodiciABarrePage);
  }
}
