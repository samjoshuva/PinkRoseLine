import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { NetworkProvider } from '../../providers/network/network';

import { SocialSharing } from '@ionic-native/social-sharing';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  pol: string;
  pod: string;
  size: string;
  commodity_type: string;
  company_name: string;
  location: string;
  mobile_num: string;
  email: string;


  data:Detail[];

  title = "test";
  description = "xxxyyyzzz";
  recipeUrl = "yyy";

  

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public net : NetworkProvider,
   public socialSharing: SocialSharing,
   public loadingCtrl: LoadingController) {

    this.pol = navParams.get('pol');
    this.pod = navParams.get('pod');
    this.size = navParams.get('size');
    this.commodity_type = navParams.get('commodity_type');
    this.company_name = navParams.get('company_name');
    this.location = navParams.get('location');
    this.mobile_num = navParams.get('mobile_num');
    this.email = navParams.get('email');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.presentLoading();
    this.display();
  }


  share() {
  this.socialSharing.shareWithOptions({
    message: `${this.title} - ${this.description}: ${this.recipeUrl}`
  }).then(() => {
    console.log('Shared!');
  }).catch((err) => {
    console.log('Oops, something went wrong:', err);
  });
}

presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
  USD_CUR:any;
  POD_CUR:any;

  display()
  {

    this.net.getUSD().subscribe((data) =>
      {
        this.USD_CUR = data;

        for(var i = 0; data.length > i ;i++)
        {
            if(data[i].pol === this.pol && data[i].pod === this.pod)
            {
              console.log(data[i]);
            }
        }

        
      });
    this.net.getPODCur().subscribe((data)=>
        {
          this.POD_CUR = data;
          for(var i = 0; data.length > i ;i++)
        {
            if(data[i].pol === this.pol && data[i].pod === this.pod)
            {
              console.log(data[i]);
            }
        }
          
        }
      );
  
  //this.net.getPromise();
  }

}


interface Detail
{
  pol: string,
  pod: string,
  size: number,
  commodity_type: string,
  company_name: string,
  location: string,
  mobile_num: string,
  email: string

}

