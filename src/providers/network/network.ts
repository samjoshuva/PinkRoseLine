import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import {HttpClient ,HttpHeaders} from '@angular/common/http';



/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkProvider {

      postResponse:any ;


  

  constructor(public http: Http,
    public net:HttpClient) {
  }


  getUSD()
  {
    let URI = "https://figurable-jack.000webhostapp.com/php/select_usd.php";

    return this.http.get(URI).map((res)=> res.json());
  }

  getPODCur()
  {
    //console.log("Working..!");
    let url = "https://figurable-jack.000webhostapp.com/php/insert.php";
    return this.http.get(url)
      .map(res1 => res1.json());
  }

  getPol()
  {

    let url = "https://figurable-jack.000webhostapp.com/php/front_end/pol.php";
    return this.http.get(url).map(res => res.json());
  }

  getPod()
  {

    let url = "https://figurable-jack.000webhostapp.com/php/front_end/pod.php";
    return this.http.get(url).map(res => res.json());
  }

  getCommodity()
  {

    let url = "https://figurable-jack.000webhostapp.com/php/front_end/commotity.php";
    return this.http.get(url).map(res => res.json());
  }

  sendinfo(pol:any,pod:any,size:any,commodity_type:any,company_name:any,location:any,mobile_num:any,email:any)
  {
    
    let url = "https://figurable-jack.000webhostapp.com/php/front_end/customer.php";
    return this.http.post (url,{
      pol,
      pod,
      size,
      commodity_type,
      company_name,
      location,
      mobile_num,
      email
    }).subscribe(()=>console.log("got data"),(error)=>console.log("error"));
  }

 

}
