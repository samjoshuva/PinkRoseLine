webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(99);
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
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.splash = true;
        this.event = {
            month: '2018-02-01',
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SplashPage');
        setTimeout(function () { return _this.splash = false; }, 1000);
    };
    HomePage.prototype.GetDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], {});
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Projects\Ionic\PinkRoseLine\src\pages\home\home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <img src="assets/imgs/1.png" width="100%" height="100%">\n    <div class="Aligner-item Aligner-item--bottom"></div>\n  </div>\n</div>\n\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pink Rose Liners\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <p>{{id}}</p>\n  \n    <ion-item>\n      <ion-label>POL</ion-label>\n      <ion-select [(ngModel)]="pol" multiple="true" cancelText="Cancel" okText="Select">\n        <ion-option value="Chennai">Chennai</ion-option>\n        <ion-option value="Nava_Sheva">Nava Sheva</ion-option>\n        \n        \n      </ion-select>\n    </ion-item>\n    <br>\n\n    <ion-item>\n      <ion-label>POD</ion-label>\n      <ion-select [(ngModel)]="pod" multiple="true" cancelText="Cancel" okText="Select">\n        <ion-option value="Singapore">Singapore</ion-option>\n        <ion-option value="Port_Klang">Port Klang</ion-option>\n        <ion-option value="Colombo" >Colombo</ion-option>\n        <ion-option value="Jebel_Ali">Jebel Ali</ion-option>\n        <ion-option value="Chitta_Gong">Chitta Gong</ion-option>\n        \n      </ion-select>\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n        <ion-label>Start Date</ion-label>\n        <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n      </ion-item>\n    <br>\n\n    <ion-item>\n      <ion-label>Size</ion-label>\n      <ion-select [(ngModel)]="size" multiple="true" cancelText="Cancel" okText="Select">\n        <ion-option value="20_feet">20 feet</ion-option>\n        \n        \n      </ion-select>\n    </ion-item>\n    <br>\n\n    <ion-item>\n      <ion-label>Commodity Type</ion-label>\n      <ion-select [(ngModel)]="commodity_type" multiple="true" cancelText="Cancel" okText="Select">\n        <ion-option value="Dry_Cargo">Dry Cargo</ion-option>\n        <ion-option value="Reefer_Chilled_Cargo">Reefer Chilled Cargo</ion-option>\n        <ion-option value="Reefer_Frozen_Cargo" >Reefer Frozen Cargo</ion-option>\n        \n        \n      </ion-select>\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n        \n        <ion-input [(ngModel)]="company_name" type="text" placeholder="Company Name " value=""></ion-input>\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n        \n        <ion-input [(ngModel)]="location" type="text" placeholder="Location" value=""></ion-input>\n    </ion-item>\n    <br>\n    <ion-item>\n        \n        <ion-input [(ngModel)]="mobile_num" type="number" placeholder="Mobile Number" value=""></ion-input>\n    </ion-item>\n    <br>\n    <ion-item>\n        \n        <ion-input [(ngModel)]="email" type="email" placeholder="Email Address" value=""></ion-input>\n    </ion-item>\n    <br>\n\n    \n\n  \n</ion-content>\n\n\n<ion-footer>\n    <Button ion-button color="danger" (click)="GetDetails()" block>Submit</Button>\n  </ion-footer>\n'/*ion-inline-end:"D:\Projects\Ionic\PinkRoseLine\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail/detail.module": [
		275,
		1
	],
	"../pages/splash/splash.module": [
		276,
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
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(155);
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
    function NetworkProvider(http) {
        this.http = http;
    }
    NetworkProvider.prototype.getPromise = function () {
        var url = "http://localhost/Test/select.php";
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_detail_detail__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_network_network__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(155);
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
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] }
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

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(100);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Projects\Ionic\PinkRoseLine\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Projects\Ionic\PinkRoseLine\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_network_network__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(156);
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
    function DetailPage(navCtrl, navParams, net, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.net = net;
        this.socialSharing = socialSharing;
        this.title = "test";
        this.description = "xxxyyyzzz";
        this.recipeUrl = "yyy";
        this.parameter1 = navParams.get('param1');
        this.parameter2 = navParams.get('param2');
        this.parameter3 = navParams.get('param3');
        this.parameter4 = navParams.get('param4');
        this.parameter5 = navParams.get('param5');
        this.parameter6 = navParams.get('param6');
        this.parameter7 = navParams.get('param7');
        this.parameter8 = navParams.get('param8');
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
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
    DetailPage.prototype.display = function () {
        var _this = this;
        this.net.getPromise().subscribe(function (data) {
            _this.data = data[0]['Player_name'];
            setTimeout(function () { return console.log(_this.data); }, 2000);
        });
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"D:\Projects\Ionic\PinkRoseLine\src\pages\detail\detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title>detail</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content  >\n\n   \n  \n    \n        <ion-grid>\n          <ion-row>\n          <ion-col col-5>  </ion-col>\n          <ion-col col-4> INR </ion-col>\n          <ion-col col-3> USD </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>terminal handling Charges</ion-col>\n          <ion-col col-4> 5,200 </ion-col>\n          <ion-col col-3> 80 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Seal Charges</ion-col>\n  \n          <ion-col col-4> 350 </ion-col>\n          <ion-col col-3> 5 </ion-col>\n  \n        </ion-row>\n        <ion-row>\n          <ion-col col-5>BL Charges</ion-col>\n  \n          <ion-col col-4> 2,500 </ion-col>\n          <ion-col col-3> 38 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Surrender Charges</ion-col>\n          <ion-col col-4> 1,500 </ion-col>\n          <ion-col col-3> 23 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Weightment Charges</ion-col>\n          <ion-col col-4> 110 </ion-col>\n          <ion-col col-3> 2 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>CTO Charges</ion-col>\n          <ion-col col-4> 400 </ion-col>\n          <ion-col col-3> 6 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Toll Charges</ion-col>\n          <ion-col col-4> 0 </ion-col>\n          <ion-col col-3> 0 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>MUC</ion-col>\n          <ion-col col-4> 0 </ion-col>\n          <ion-col col-3> 0 </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-5 class="danger">Total</ion-col>\n          <ion-col col-4> 10,060 </ion-col>\n          <ion-col col-3> 154 </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col align="center" col-12 class="danger">Freight Charges</ion-col>\n          \n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-5>  </ion-col>\n          <ion-col col-4> INR </ion-col>\n          <ion-col col-3> USD </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-5>Ocean Freight</ion-col>\n          <ion-col col-4>  </ion-col>\n          <ion-col col-3> 250 </ion-col>\n        </ion-row>\n  \n  \n        <ion-row>\n          <ion-col align="center" col-12 class="danger">import Charges</ion-col>\n          \n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-5>  </ion-col>\n          <ion-col col-4> INR </ion-col>\n          <ion-col col-3> USD </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-5>Terminal Handling Cahrges Freight</ion-col>\n          <ion-col col-4> 430 </ion-col>\n          <ion-col col-3> 103 </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-5>EDI</ion-col>\n          <ion-col col-4> 30 </ion-col>\n          <ion-col col-3> 7 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>ARC</ion-col>\n          <ion-col col-4> 20 </ion-col>\n          <ion-col col-3> 5 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>D.O Charges</ion-col>\n          <ion-col col-4> 190 </ion-col>\n          <ion-col col-3> 46 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Washing Charges</ion-col>\n          <ion-col col-4> 30 </ion-col>\n          <ion-col col-3> 7 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Agency Fee</ion-col>\n          <ion-col col-4> 0 </ion-col>\n          <ion-col col-3> 0 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Deposit</ion-col>\n          <ion-col col-4> 7,500 </ion-col>\n          <ion-col col-3> 49 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>ISPS</ion-col>\n          <ion-col col-4> 90 </ion-col>\n          <ion-col col-3> 24 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Documentaion</ion-col>\n          <ion-col col-4> 80 </ion-col>\n          <ion-col col-3> 22 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Equipment Fee</ion-col>\n          <ion-col col-4> 0 </ion-col>\n          <ion-col col-3> 0 </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-5>Total</ion-col>\n          <ion-col col-4> 7,910 </ion-col>\n          <ion-col col-3> 153 </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-12>   </ion-col>\n          \n        </ion-row>\n  \n  \n  \n        <ion-row>\n          <ion-col col-5>Total Shipping Charge</ion-col>\n          <ion-col col-4> Sum of all </ion-col>\n          <ion-col col-3> Sum of all </ion-col>\n        </ion-row>\n        \n  \n  \n  \n  \n        \n  \n  \n  \n  \n  \n  \n      </ion-grid>\n  \n      \n  \n  \n  \n    \n  \n  </ion-content>\n  \n  \n  \n    <ion-footer>\n        <Button ion-button danger block color="danger" (click)="share()"  >Share</Button>\n      </ion-footer>\n  \n  \n  \n    '/*ion-inline-end:"D:\Projects\Ionic\PinkRoseLine\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map