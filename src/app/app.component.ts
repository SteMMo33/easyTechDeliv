import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConsegnaAlClientePage } from '../pages/consegna-al-cliente/consegna-al-cliente';
import { LetturaCodiciABarrePage } from '../pages/lettura-codici-abarre/lettura-codici-abarre';
import { ImpostazioniPage } from '../pages/impostazioni/impostazioni';
import { ScaricaDatiDalServerPage } from '../pages/scarica-dati-dal-server/scarica-dati-dal-server';


import { ConsegnePage } from '../pages/consegne/consegne';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = ConsegnePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToConsegne(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConsegnePage);
  }goToConsegnaAlCliente(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConsegnaAlClientePage);
  }goToLetturaCodiciABarre(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LetturaCodiciABarrePage);
  }goToImpostazioni(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ImpostazioniPage);
  }goToScaricaDatiDalServer(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ScaricaDatiDalServerPage);
  }
}
