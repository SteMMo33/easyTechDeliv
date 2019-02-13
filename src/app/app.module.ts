import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ConsegnePage } from '../pages/consegne/consegne';
import { ImpostazioniPage } from '../pages/impostazioni/impostazioni';
import { ConsegnaAlClientePage } from '../pages/consegna-al-cliente/consegna-al-cliente';
import { LetturaCodiciABarrePage } from '../pages/lettura-codici-abarre/lettura-codici-abarre';
import { ScaricaDatiDalServerPage } from '../pages/scarica-dati-dal-server/scarica-dati-dal-server';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ConsegnePage,
    ImpostazioniPage,
    ConsegnaAlClientePage,
    LetturaCodiciABarrePage,
    ScaricaDatiDalServerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConsegnePage,
    ImpostazioniPage,
    ConsegnaAlClientePage,
    LetturaCodiciABarrePage,
    ScaricaDatiDalServerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}