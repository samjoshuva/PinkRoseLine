import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';


import { NetworkProvider } from '../../providers/network/network';
import { LoadingController } from 'ionic-angular';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { DetailPage } from '../detail/detail';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {


  splash = true;


  pol: string;
  pod: string;
  size: number;
  c_type: string;
  c_name: string;
  loc: string;
  mobile_num: string;
  email: string;

  from:from[];
  to:any[];
  commoditytype:com_type[];

  public form: FormGroup;
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
    setTimeout(() => this.splash = false, 1000);    
  }
  


  constructor(
    public navCtrl     : NavController,
     public alertCtrl  : AlertController,
     public http       : HttpClient,
     public loadingCtrl: LoadingController,
     public net        : NetworkProvider,
     public fb         : FormBuilder,
     public toastCtrl  : ToastController)
   {
     this.form = fb.group({
         "pol": ["", Validators.required],
         "pod": ["", Validators.required],
         "date": ["", Validators.required],
         "size": ["", Validators.required],
         "c_type": ["", Validators.required],
         "c_name": ["", Validators.required],
         "location": ["", Validators.required],
         "number": ["", Validators.required],
         "email": ["", Validators.required]
      });
     this.presentLoading();
     this.displayPolPod();
    
  }
  public event = {
    month: '2018-02-01',
  }


  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    });
    loader.present();
  }

  displayPolPod()
  {

    this.net.getCommodity().subscribe((data) =>
      {
        console.log("Data Loaded");
        this.commoditytype = data;
        
        
        setTimeout(() => console.log(data), 2000);
      });
    this.net.getPol().subscribe((data) =>
      {
        console.log("Data Loaded");
        this.from = data;
        
        
        setTimeout(() => console.log(data), 2000);
      });

    this.net.getPod().subscribe((data) =>
      {
        console.log("Data Loaded");
        this.to = data;

        
        setTimeout(() => console.log(data), 2000);
      });

    
  }

  baseURI = "https://figurable-jack.000webhostapp.com/php/";


  senddetail():void
  {
    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "create", "pol" : this.pol , "pod" : this.pod, "date" : this.event.month, "commodity_type" : this.c_type, "company_name" : this.c_name, "location" : this.loc, "mobile_number" : this.mobile_num,"email" : this.email,  },
          url       : any        = this.baseURI + "front_end/customer.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         this.sendNotification(`fecthing you best price `);
         setTimeout(()=>this.GetDetails(),3000); 
      },
      (error : any) =>
      {
         this.sendNotification('Something went wrong!');
      });

    
    
      
  }




  GetDetails()
  {
    this.navCtrl.push(DetailPage, {
      pol:this.pol,
      pod: this.pod,
      size: this.size,
      commodity_type: this.c_type,
      company_name: this.c_name,
      location: this.loc,
      mobile_num: this.mobile_num,
      email: this.email

    });
  }

    sendNotification(message : string)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 3000
      });
      notification.present();
   }



  

}


export interface from
{

  location:string;
}
export interface com_type
{
  type:string;
}

