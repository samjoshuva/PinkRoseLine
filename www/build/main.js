webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_network_network__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = (function () {
    function DetailPage(navCtrl, navParams, net, socialSharing, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.net = net;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.title = "test";
        this.description = "xxxyyyzzz";
        this.recipeUrl = "yyy";
        this.pol = navParams.get('pol');
        this.pod = navParams.get('pod');
        this.size = navParams.get('size');
        this.commodity_type = navParams.get('commodity_type');
        this.company_name = navParams.get('company_name');
        this.location = navParams.get('location');
        this.mobile_num = navParams.get('mobile_num');
        this.email = navParams.get('email');
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
        this.presentLoading();
        this.display();
    };
    DetailPage.prototype.share = function () {
        this.socialSharing.shareWithOptions({
            message: this.title + " - " + this.description + ": " + this.recipeUrl
        }).then(function () {
            console.log('Shared!');
        }).catch(function (err) {
            console.log('Oops, something went wrong:', err);
        });
    };
    DetailPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    DetailPage.prototype.display = function () {
        var _this = this;
        this.net.getUSD().subscribe(function (data) {
            _this.USD_CUR = data;
            for (var i = 0; data.length > i; i++) {
                if (data[i].pol === _this.pol && data[i].pod === _this.pod) {
                    console.log(data[i]);
                }
            }
        });
        this.net.getPODCur().subscribe(function (data) {
            _this.POD_CUR = data;
            for (var i = 0; data.length > i; i++) {
                if (data[i].pol === _this.pol && data[i].pod === _this.pod) {
                    console.log(data[i]);
                }
            }
        });
        //this.net.getPromise();
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\Users\Sam Joshuva\Downloads\PinkRoseLine\PinkRoseLine\src\pages\detail\detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title>detail</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content  >\n\n   \n  \n    \n        <ion-grid>\n\n           <ion-row color="sucess">\n          <ion-col align="center" col-12 >Export Charges</ion-col>\n          \n        </ion-row>\n  \n          <ion-row>\n          <ion-col col-5>  </ion-col>\n          <ion-col col-4> INR </ion-col>\n          <ion-col col-3> USD </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>terminal handling Charges</ion-col>\n          <ion-col col-4> 5,200 </ion-col>\n          <ion-col col-3> 80 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Seal Charges</ion-col>\n  \n          <ion-col col-4> 350 </ion-col>\n          <ion-col col-3> 5 </ion-col>\n  \n        </ion-row>\n        <ion-row>\n          <ion-col col-5>BL Charges</ion-col>\n  \n          <ion-col col-4> 2,500 </ion-col>\n          <ion-col col-3> 38 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Surrender Charges</ion-col>\n          <ion-col col-4> 1,500 </ion-col>\n          <ion-col col-3> 23 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Weightment Charges</ion-col>\n          <ion-col col-4> 110 </ion-col>\n          <ion-col col-3> 2 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>CTO Charges</ion-col>\n          <ion-col col-4> 400 </ion-col>\n          <ion-col col-3> 6 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Toll Charges</ion-col>\n          <ion-col col-4> 0 </ion-col>\n          <ion-col col-3> 0 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>MUC</ion-col>\n          <ion-col col-4> 0 </ion-col>\n          <ion-col col-3> 0 </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-5 class="danger">Total</ion-col>\n          <ion-col col-4> 10,060 </ion-col>\n          <ion-col col-3> 154 </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col align="center" col-12 class="danger">Freight Charges</ion-col>\n          \n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-5>  </ion-col>\n          <ion-col col-4> INR </ion-col>\n          <ion-col col-3> USD </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-5>Ocean Freight</ion-col>\n          <ion-col col-4>  </ion-col>\n          <ion-col col-3> 250 </ion-col>\n        </ion-row>\n  \n  \n        <ion-row>\n          <ion-col align="center" col-12 class="danger">import Charges</ion-col>\n          \n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-5>  </ion-col>\n          <ion-col col-4> INR </ion-col>\n          <ion-col col-3> USD </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-5>Terminal Handling Cahrges Freight</ion-col>\n          <ion-col col-4> 430 </ion-col>\n          <ion-col col-3> 103 </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-5>EDI</ion-col>\n          <ion-col col-4> 30 </ion-col>\n          <ion-col col-3> 7 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>ARC</ion-col>\n          <ion-col col-4> 20 </ion-col>\n          <ion-col col-3> 5 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>D.O Charges</ion-col>\n          <ion-col col-4> 190 </ion-col>\n          <ion-col col-3> 46 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Washing Charges</ion-col>\n          <ion-col col-4> 30 </ion-col>\n          <ion-col col-3> 7 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Agency Fee</ion-col>\n          <ion-col col-4> 0 </ion-col>\n          <ion-col col-3> 0 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Deposit</ion-col>\n          <ion-col col-4> 7,500 </ion-col>\n          <ion-col col-3> 49 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>ISPS</ion-col>\n          <ion-col col-4> 90 </ion-col>\n          <ion-col col-3> 24 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Documentaion</ion-col>\n          <ion-col col-4> 80 </ion-col>\n          <ion-col col-3> 22 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Equipment Fee</ion-col>\n          <ion-col col-4> 0 </ion-col>\n          <ion-col col-3> 0 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Total</ion-col>\n          <ion-col col-4> 7,910 </ion-col>\n          <ion-col col-3> 153 </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-12>   </ion-col>\n          \n        </ion-row>\n  \n  \n  \n        <ion-row>\n          <ion-col col-5>Total Shipping Charge</ion-col>\n          <ion-col col-4> Sum of all </ion-col>\n          <ion-col col-3> Sum of all </ion-col>\n        </ion-row>\n        \n  \n  \n  \n  \n        \n  \n  \n  \n  \n  \n  \n      </ion-grid>\n  \n      \n  \n  \n  \n    \n  \n  </ion-content>\n  \n  \n  \n    <ion-footer>\n        <Button ion-button danger block color="danger" (click)="share()"  >Share</Button>\n      </ion-footer>\n  \n  \n  \n    '/*ion-inline-end:"C:\Users\Sam Joshuva\Downloads\PinkRoseLine\PinkRoseLine\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_network_network__["a" /* NetworkProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_network_network__["a" /* NetworkProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], DetailPage);
    return DetailPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail/detail.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_network_network__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_detail__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, http, loadingCtrl, net, fb, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.net = net;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.splash = true;
        this.event = {
            month: '2018-02-01',
        };
        this.baseURI = "https://figurable-jack.000webhostapp.com/php/";
        this.form = fb.group({
            "pol": ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            "pod": ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            "date": ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            "size": ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            "c_type": ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            "c_name": ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            "location": ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            "number": ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            "email": ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.presentLoading();
        this.displayPolPod();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SplashPage');
        setTimeout(function () { return _this.splash = false; }, 1000);
    };
    HomePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 500
        });
        loader.present();
    };
    HomePage.prototype.displayPolPod = function () {
        var _this = this;
        this.net.getCommodity().subscribe(function (data) {
            console.log("Data Loaded");
            _this.commoditytype = data;
            setTimeout(function () { return console.log(data); }, 2000);
        });
        this.net.getPol().subscribe(function (data) {
            console.log("Data Loaded");
            _this.from = data;
            setTimeout(function () { return console.log(data); }, 2000);
        });
        this.net.getPod().subscribe(function (data) {
            console.log("Data Loaded");
            _this.to = data;
            setTimeout(function () { return console.log(data); }, 2000);
        });
    };
    HomePage.prototype.senddetail = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "key": "create", "pol": this.pol, "pod": this.pod, "date": this.event.month, "commodity_type": this.c_type, "company_name": this.c_name, "location": this.loc, "mobile_number": this.mobile_num, "email": this.email, }, url = this.baseURI + "front_end/customer.php";
        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(function (data) {
            // If the request was successful notify the user
            _this.sendNotification("fecthing you best price ");
            setTimeout(function () { return _this.GetDetails(); }, 3000);
        }, function (error) {
            _this.sendNotification('Something went wrong!');
        });
    };
    HomePage.prototype.GetDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detail_detail__["a" /* DetailPage */], {
            pol: this.pol,
            pod: this.pod,
            size: this.size,
            commodity_type: this.c_type,
            company_name: this.c_name,
            location: this.loc,
            mobile_num: this.mobile_num,
            email: this.email
        });
    };
    HomePage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sam Joshuva\Downloads\PinkRoseLine\PinkRoseLine\src\pages\home\home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <img src="assets/imgs/1.png" width="100%" height="100%">\n    <div class="Aligner-item Aligner-item--bottom"></div>\n  </div>\n</div>\n\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pink Rose Liners\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  \n  <form [formGroup]="form" >\n  <ion-list> \n    <ion-item>\n      <ion-label>POL</ion-label>\n      <ion-select  formControlName="pol" [(ngModel)]="pol" multiple="false" cancelText="Cancel" okText="Select">\n        <ion-option *ngFor="let n of from" value="{{n.location}}">{{n.location}}</ion-option>\n        \n        \n        \n      </ion-select>\n    </ion-item>\n    <br>\n\n    <ion-item>\n      <ion-label>POD</ion-label>\n      <ion-select  formControlName="pod" [(ngModel)]="pod" multiple="false" cancelText="Cancel" okText="Select">\n        <ion-option  *ngFor="let n of to" value="{{n.location}}">{{n.location}}</ion-option>\n        \n        \n      </ion-select>\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n        <ion-label>Start Date</ion-label>\n        <ion-datetime  formControlName="date" displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n      </ion-item>\n    <br>\n\n    <ion-item>\n      <ion-label>Size</ion-label>\n      <ion-select  formControlName="size" [(ngModel)]="size" multiple="false" cancelText="Cancel" okText="Select">\n        <ion-option value="20_feet">20 feet</ion-option>\n        \n        \n      </ion-select>\n    </ion-item>\n    <br>\n\n    <ion-item>\n      <ion-label>Commodity Type</ion-label>\n      <ion-select  formControlName="c_type" [(ngModel)]="c_type" multiple="false" cancelText="Cancel" okText="Select">\n        <ion-option *ngFor="let n of commoditytype" value="{{n.type}}">{{n.type}}</ion-option>\n        \n        \n      </ion-select>\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n        \n        <ion-input  formControlName="c_name" [(ngModel)]="c_name" type="text" placeholder="Company Name " value=""></ion-input>\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n        \n        <ion-input  formControlName="location"  [(ngModel)]="loc" type="text" placeholder="Location" value=""></ion-input>\n    </ion-item>\n    <br>\n    <ion-item>\n        \n        <ion-input  formControlName="number" [(ngModel)]="mobile_num" type="number" placeholder="Mobile Number" value=""></ion-input>\n    </ion-item>\n    <br>\n    <ion-item>\n        \n        <ion-input  formControlName="email" [(ngModel)]="email" type="email" placeholder="Email Address" value=""></ion-input>\n    </ion-item>\n    <br>\n    <ion-item>\n       <Button ion-button color="danger" (click)="senddetail()" block>Submit</Button>\n    </ion-item>\n    </ion-list>\n    </form>\n\n    \n\n  \n</ion-content>\n\n\n<ion-footer>\n   \n  </ion-footer>\n'/*ion-inline-end:"C:\Users\Sam Joshuva\Downloads\PinkRoseLine\PinkRoseLine\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_detail_detail__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_network_network__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_detail_detail__["a" /* DetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_detail_detail__["a" /* DetailPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_network_network__["a" /* NetworkProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Sam Joshuva\Downloads\PinkRoseLine\PinkRoseLine\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Sam Joshuva\Downloads\PinkRoseLine\PinkRoseLine\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NetworkProvider = (function () {
    function NetworkProvider(http, net) {
        this.http = http;
        this.net = net;
    }
    NetworkProvider.prototype.getUSD = function () {
        var URI = "https://figurable-jack.000webhostapp.com/php/select_usd.php";
        return this.http.get(URI).map(function (res) { return res.json(); });
    };
    NetworkProvider.prototype.getPODCur = function () {
        //console.log("Working..!");
        var url = "https://figurable-jack.000webhostapp.com/php/insert.php";
        return this.http.get(url)
            .map(function (res1) { return res1.json(); });
    };
    NetworkProvider.prototype.getPol = function () {
        var url = "https://figurable-jack.000webhostapp.com/php/front_end/pol.php";
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    NetworkProvider.prototype.getPod = function () {
        var url = "https://figurable-jack.000webhostapp.com/php/front_end/pod.php";
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    NetworkProvider.prototype.getCommodity = function () {
        var url = "https://figurable-jack.000webhostapp.com/php/front_end/commotity.php";
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    NetworkProvider.prototype.sendinfo = function (pol, pod, size, commodity_type, company_name, location, mobile_num, email) {
        var url = "https://figurable-jack.000webhostapp.com/php/front_end/customer.php";
        return this.http.post(url, {
            pol: pol,
            pod: pod,
            size: size,
            commodity_type: commodity_type,
            company_name: company_name,
            location: location,
            mobile_num: mobile_num,
            email: email
        }).subscribe(function () { return console.log("got data"); }, function (error) { return console.log("error"); });
    };
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map