import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LetturaCodiciABarrePage } from '../lettura-codici-abarre/lettura-codici-abarre';

@Component({
  selector: 'page-consegna-al-cliente',
  templateUrl: 'consegna-al-cliente.html'
})
export class ConsegnaAlClientePage {

  constructor(public navCtrl: NavController) {
  }
  goToLetturaCodiciABarre(params){
    if (!params) params = {};
    this.navCtrl.push(LetturaCodiciABarrePage);
  }
}
