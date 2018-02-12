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
  public USD_CUR:USDCurrency;
  public POD_CUR:PODCurrency;
  public Total_Import_USD:number;


  public CalculateTotal()
  {
    console.log(this.USD_CUR.e_af);
    this.Total_Import_USD = this.USD_CUR['e_af'] + this.USD_CUR['e_arc']  + this.USD_CUR['e_depc'] + this.USD_CUR['e_doc'] + this.USD_CUR['e_docf'] + this.USD_CUR['e_edi'] + this.USD_CUR['e_isps'] + this.USD_CUR['e_thc'] + this.USD_CUR['e_wc'];
    console.log(this.Total_Import_USD);
  }


  public display()
  {

    this.net.getUSD().subscribe((data) =>
      {
        this.USD_CUR = data;

        for(var i = 0; data.length > i ;i++)
        {
            if(data[i].pol === this.pol && data[i].pod === this.pod)
            {
               this.USD_CUR = data[i];
               console.log(this.USD_CUR['e.e_cur']);
              
            }
        }

        
      });
    this.net.getPODCur().subscribe((data)=>
        {
          this.POD_CUR = data;
          for(var i = 0; data.length > i ;i++)
        {
            if(data[i].pod === this.pod && data[i].pod === this.pod)
            {
              this.POD_CUR = data[i];
              console.log(this.POD_CUR['e_af']);
            }
        }
          
        }
      );
    setTimeout(()=>this.CalculateTotal(),3000) ;
  
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

interface USDCurrency
{
  e_af:number,
  e_arc:any,
  e_cur:any,
  e_depc:any,
  e_doc:any,
  e_docf:any,
  e_edi:any,
  e_ef:any,
  e_isps:any,
  e_thc:any,
  e_wc:any,
  frirght:any,
  i_blc:any,
  i_ctoc:any,
  i_currency:any,
  i_muc:any,
  i_sc:any,
  i_surc:any,
  i_tc:any,
  i_thc:any,
  i_wc:any,
  pod:any,
  pol:any
}

interface PODCurrency
{
  e_af:number,
  e_arc:number,
  e_cur:number,
  e_depc:number,
  e_doc:number,
  e_docf:number,
  e_edi:number,
  e_ef:number,
  e_isps:number,
  e_thc:number,
  e_wc:number,
  frirght:number,
  i_blc:number,
  i_ctoc:number,
  i_currency:string,
  i_muc:number,
  i_sc:number,
  i_surc:number,
  i_tc:number,
  i_thc:number,
  i_wc:number,
  pod:string,
  pol:string
}

