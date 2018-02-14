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
      duration: 5000
    });
    loader.present();
  }
  public USD_CUR: USDCurrency;
  public POD_CUR: PODCurrency;

  public Total_Export_USD: number;
  public Total_Import_USD:number;
  public Total_USD:number;

  public Total_Export_POD:number;
  public Total_Import_POD:number;
  


  public CalculateTotal()
  {
    //console.log(this.USD_CUR.e_af);
    this.Total_Export_USD =     Number( this.USD_CUR.e_thc) 
                              + Number(this.USD_CUR.e_sc  ) 
                              + Number(this.USD_CUR.e_blc)  
                              + Number(this.USD_CUR.e_surc)  
                              + Number(this.USD_CUR.e_wc)  
                              + Number(this.USD_CUR.e_ctoc)  
                              + Number(this.USD_CUR.e_tc)  
                              + Number(this.USD_CUR.e_muc);

    //console.log(this.Total_Import_USD);
    this.Total_Import_USD = 
                                Number( this.USD_CUR.i_thc) 
                              + Number(this.USD_CUR.i_edi  ) 
                              + Number(this.USD_CUR.i_arc)  
                              + Number(this.USD_CUR.i_doc)  
                              + Number(this.USD_CUR.i_wc)  
                              + Number(this.USD_CUR.i_af)  
                              + Number(this.USD_CUR.i_isps)  
                              + Number(this.USD_CUR.i_doc) 
                              +Number(this.USD_CUR.i_ef);

    this.Total_USD = this.Total_Export_USD + this.Total_Import_USD;

    
    this.Total_Export_POD =     Number( this.POD_CUR.e_thc) 
                              + Number(this.POD_CUR.e_sc ) 
                              + Number(this.POD_CUR.e_blc)  
                              + Number(this.POD_CUR.e_surc)  
                              + Number(this.POD_CUR.e_wc)  
                              + Number(this.POD_CUR.e_ctoc)  
                              + Number(this.POD_CUR.e_tc)  
                              + Number(this.POD_CUR.e_muc);

    //console.log(this.Total_Import_USD);
    this.Total_Import_POD = 
                                Number(this.POD_CUR.i_thc) 
                              + Number(this.POD_CUR.i_edi) 
                              + Number(this.POD_CUR.i_arc)  
                              + Number(this.POD_CUR.i_doc)  
                              + Number(this.POD_CUR.i_wc)  
                              + Number(this.POD_CUR.i_af)  
                              + Number(this.POD_CUR.i_isps)  
                              + Number(this.POD_CUR.i_doc) 
                              +Number(this.POD_CUR.i_ef);
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
               this.USD_CUR.e_thc = data[i]['e.thc'];
               this.USD_CUR.e_sc = data[i]['e.sc'];
               this.USD_CUR.e_blc = data[i]['e.blc'];
               this.USD_CUR.e_surc = data[i]['e.surc'];
               this.USD_CUR.e_wc = data[i]['e.wc'];
               this.USD_CUR.e_ctoc = data[i]['e.ctoc'];
               this.USD_CUR.e_tc = data[i]['e.tc'];
               this.USD_CUR.e_muc = data[i]['e.muc'];
               this.USD_CUR.e_cur = data[i]['e.cur'];

               this.USD_CUR.frirght = data[i]['fright'];

               this.USD_CUR.i_thc = data[i]['i.thc'];
               this.USD_CUR.i_edi = data[i]['i.edi'];
               this.USD_CUR.i_currency = data[i]['i.currency'];
               this.USD_CUR.i_arc = data[i]['i.arc'];
               this.USD_CUR.i_doc = data[i]['i.doc'];
               this.USD_CUR.i_wc = data[i]['i.wc'];
               this.USD_CUR.i_af = data[i]['i.af'];
               this.USD_CUR.i_depc = data[i]['i.depc'];
               this.USD_CUR.i_isps = data[i]['i.isps'];
               this.USD_CUR.i_docf = data[i]['i.docf'];
               this.USD_CUR.i_ef = data[i]['i.ef'];

               
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
               this.POD_CUR.e_thc = data[i]['e.thc'];
               this.POD_CUR.e_sc = data[i]['e.sc'];
               this.POD_CUR.e_blc = data[i]['e.blc'];
               this.POD_CUR.e_surc = data[i]['e.surc'];
               this.POD_CUR.e_wc = data[i]['e.wc'];
               this.POD_CUR.e_ctoc = data[i]['e.ctoc'];
               this.POD_CUR.e_tc = data[i]['e.tc'];
               this.POD_CUR.e_muc = data[i]['e.muc'];
               this.POD_CUR.e_cur = data[i]['e.cur'];
               this.POD_CUR.frirght = data[i]['fright'];
               this.POD_CUR.i_thc = data[i]['i.thc'];
               this.POD_CUR.i_edi = data[i]['i.edi'];
               this.POD_CUR.i_currency = data[i]['i.currency'];
               this.POD_CUR.i_arc = data[i]['i.arc'];
               this.POD_CUR.i_doc = data[i]['i.doc'];
               this.POD_CUR.i_wc = data[i]['i.wc'];
               this.POD_CUR.i_af = data[i]['i.af'];
               this.POD_CUR.i_depc = data[i]['i.depc'];
               this.POD_CUR.i_isps = data[i]['i.isps'];
               this.POD_CUR.i_docf = data[i]['i.docf'];
               this.POD_CUR.i_ef = data[i]['i.ef'];
               
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
  e_thc:number,
  e_sc:any,
  e_blc:any,
  e_surc:any,
  e_wc:any,
  e_ctoc:any,
  e_tc:any,
  e_muc:any,
  e_cur:any,
  
  frirght:any,
  i_thc:any,
  i_edi:any,
  i_currency:any,
  i_arc:any,
  i_doc:any,
  i_wc:any,
  i_af:any,
  i_depc:any,
  i_isps:any,
  i_docf:any,
  i_ef:any,
  
  pod:any,
  pol:any
}

interface PODCurrency
{
  e_thc:number,
  e_sc:any,
  e_blc:any,
  e_surc:any,
  e_wc:any,
  e_ctoc:any,
  e_tc:any,
  e_muc:any,
  e_cur:any,
  
  frirght:any,
  i_thc:any,
  i_edi:any,
  i_currency:any,
  i_arc:any,
  i_doc:any,
  i_wc:any,
  i_af:any,
  i_depc:any,
  i_isps:any,
  i_docf:any,
  i_ef:any,
  
  pod:any,
  pol:any
}

