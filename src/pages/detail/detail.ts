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

  usd_ef:any;
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
      content: "Fecthing you best Price Please wait...",
      duration: 500
    });
    loader.present();
  }
  public USD_CUR: USDCurrency;
  public POD_CUR: PODCurrency;
  public Total_Import_USD: number;


  public CalculateTotal()
  {
    //console.log(this.USD_CUR.e_af);
    this.Total_Import_USD = Number( this.USD_CUR.e_af) + Number(this.USD_CUR.e_arc  ) + Number(this.USD_CUR.e_depc)  + Number(this.USD_CUR.e_doc)  + Number(this.USD_CUR.e_docf)  + Number(this.USD_CUR.e_edi)  + Number(this.USD_CUR.e_isps)  + Number(this.USD_CUR.e_thc)  + Number(this.USD_CUR.e_wc) ;
    //console.log(this.Total_Import_USD);
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
               this.USD_CUR.e_af = data[i]['e.af'];
               this.USD_CUR.e_arc = data[i]['e.arc'];
               this.USD_CUR.e_cur = data[i]['e.cur'];
               this.USD_CUR.e_depc = data[i]['e.depc'];
               this.USD_CUR.e_doc = data[i]['e.doc'];
               this.USD_CUR.e_docf = data[i]['e.docf'];
               this.USD_CUR.e_edi = data[i]['e.edi'];
               this.USD_CUR.e_ef = data[i]['e.ef'];
               this.USD_CUR.e_isps = data[i]['e.isps'];
               this.USD_CUR.e_thc = data[i]['e.thc'];
               this.USD_CUR.e_wc = data[i]['e.wc'];
               this.USD_CUR.frirght = data[i]['fright'];
               this.USD_CUR.i_blc = data[i]['i.blc'];
               this.USD_CUR.i_ctoc = data[i]['i.ctoc'];
               this.USD_CUR.i_currency = data[i]['i.currency'];
               this.USD_CUR.i_muc = data[i]['i.muc'];
               this.USD_CUR.i_sc = data[i]['i.sc'];
               this.USD_CUR.i_surc = data[i]['i.surc'];
               this.USD_CUR.i_tc = data[i]['i.tc'];
               this.USD_CUR.i_thc = data[i]['i.thc'];
               this.USD_CUR.i_wc = data[i]['i.wc'];
               
               this.USD_CUR.pod = data[i]['pod'];
               this.USD_CUR.pol = data[i]['pol'];


               setTimeout(() => console.log(this.USD_CUR), 3000);
               
              
            }
        }
        console.log(this.USD_CUR.pod);
        
      });
    this.net.getPODCur().subscribe((data)=>
        {
          this.POD_CUR = data;
          for(var i = 0; data.length > i ;i++)
        {
            if(data[i].pol === this.pol && data[i].pod === this.pod)
            {
              this.POD_CUR = data[i];
              setTimeout(() => console.log(this.POD_CUR), 3000);
               this.POD_CUR.e_af = data[i]['e.af'];
               this.POD_CUR.e_arc = data[i]['e.arc'];
               this.POD_CUR.e_cur = data[i]['e.cur'];
               this.POD_CUR.e_depc = data[i]['e.depc'];
               this.POD_CUR.e_doc = data[i]['e.doc'];
               this.POD_CUR.e_docf = data[i]['e.docf'];
               this.POD_CUR.e_edi = data[i]['e.edi'];
               this.POD_CUR.e_ef = data[i]['e.ef'];
               this.POD_CUR.e_isps = data[i]['e.isps'];
               this.POD_CUR.e_thc = data[i]['e.thc'];
               this.POD_CUR.e_wc = data[i]['e.wc'];
               this.POD_CUR.frirght = data[i]['fright'];
               this.POD_CUR.i_blc = data[i]['i.blc'];
               this.POD_CUR.i_ctoc = data[i]['i.ctoc'];
               this.POD_CUR.i_currency = data[i]['i.currency'];
               this.POD_CUR.i_muc = data[i]['i.muc'];
               this.POD_CUR.i_sc = data[i]['i.sc'];
               this.POD_CUR.i_surc = data[i]['i.surc'];
               this.POD_CUR.i_tc = data[i]['i.tc'];
               this.POD_CUR.i_thc = data[i]['i.thc'];
               this.POD_CUR.i_wc = data[i]['i.wc'];
               
               this.POD_CUR.pod = data[i]['pod'];
               this.POD_CUR.pol = data[i]['pol'];
              
            }
        }
          
        }
      );
    //this.CalculateTotal();
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

