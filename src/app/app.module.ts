import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';

import { SocialSharing } from '@ionic-native/social-sharing';

import { NetworkProvider } from '../providers/network/network';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    
  ],
  providers: [
    StatusBar,
    SocialSharing,
    
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkProvider
  ]
})
export class AppModule {}
