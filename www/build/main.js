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
            content: "Fecthing you best Price Please wait...",
            duration: 5000
        });
        loader.present();
    };
    DetailPage.prototype.CalculateTotal = function () {
        //console.log(this.USD_CUR.e_af);
        this.Total_Export_USD = Number(this.USD_CUR.e_thc)
            + Number(this.USD_CUR.e_sc)
            + Number(this.USD_CUR.e_blc)
            + Number(this.USD_CUR.e_surc)
            + Number(this.USD_CUR.e_wc)
            + Number(this.USD_CUR.e_ctoc)
            + Number(this.USD_CUR.e_tc)
            + Number(this.USD_CUR.e_muc);
        //console.log(this.Total_Import_USD);
        this.Total_Import_USD =
            Number(this.USD_CUR.i_thc)
                + Number(this.USD_CUR.i_edi)
                + Number(this.USD_CUR.i_arc)
                + Number(this.USD_CUR.i_doc)
                + Number(this.USD_CUR.i_wc)
                + Number(this.USD_CUR.i_af)
                + Number(this.USD_CUR.i_isps)
                + Number(this.USD_CUR.i_doc)
                + Number(this.USD_CUR.i_ef);
        this.Total_USD = this.Total_Export_USD + this.Total_Import_USD;
        this.Total_Export_POD = Number(this.POD_CUR.e_thc)
            + Number(this.POD_CUR.e_sc)
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
                + Number(this.POD_CUR.i_ef);
    };
    DetailPage.prototype.display = function () {
        var _this = this;
        this.net.getUSD().subscribe(function (data) {
            _this.USD_CUR = data;
            for (var i = 0; data.length > i; i++) {
                if (data[i].pol === _this.pol && data[i].pod === _this.pod) {
                    _this.USD_CUR.e_thc = data[i]['e.thc'];
                    _this.USD_CUR.e_sc = data[i]['e.sc'];
                    _this.USD_CUR.e_blc = data[i]['e.blc'];
                    _this.USD_CUR.e_surc = data[i]['e.surc'];
                    _this.USD_CUR.e_wc = data[i]['e.wc'];
                    _this.USD_CUR.e_ctoc = data[i]['e.ctoc'];
                    _this.USD_CUR.e_tc = data[i]['e.tc'];
                    _this.USD_CUR.e_muc = data[i]['e.muc'];
                    _this.USD_CUR.e_cur = data[i]['e.cur'];
                    _this.USD_CUR.frirght = data[i]['fright'];
                    _this.USD_CUR.i_thc = data[i]['i.thc'];
                    _this.USD_CUR.i_edi = data[i]['i.edi'];
                    _this.USD_CUR.i_currency = data[i]['i.currency'];
                    _this.USD_CUR.i_arc = data[i]['i.arc'];
                    _this.USD_CUR.i_doc = data[i]['i.doc'];
                    _this.USD_CUR.i_wc = data[i]['i.wc'];
                    _this.USD_CUR.i_af = data[i]['i.af'];
                    _this.USD_CUR.i_depc = data[i]['i.depc'];
                    _this.USD_CUR.i_isps = data[i]['i.isps'];
                    _this.USD_CUR.i_docf = data[i]['i.docf'];
                    _this.USD_CUR.i_ef = data[i]['i.ef'];
                    _this.USD_CUR.pod = data[i]['pod'];
                    _this.USD_CUR.pol = data[i]['pol'];
                    setTimeout(function () { return console.log(_this.USD_CUR); }, 3000);
                }
            }
            console.log(_this.USD_CUR.pod);
        });
        this.net.getPODCur().subscribe(function (data) {
            _this.POD_CUR = data;
            for (var i = 0; data.length > i; i++) {
                if (data[i].pol === _this.pol && data[i].pod === _this.pod) {
                    _this.POD_CUR = data[i];
                    setTimeout(function () { return console.log(_this.POD_CUR); }, 3000);
                    _this.POD_CUR.e_thc = data[i]['e.thc'];
                    _this.POD_CUR.e_sc = data[i]['e.sc'];
                    _this.POD_CUR.e_blc = data[i]['e.blc'];
                    _this.POD_CUR.e_surc = data[i]['e.surc'];
                    _this.POD_CUR.e_wc = data[i]['e.wc'];
                    _this.POD_CUR.e_ctoc = data[i]['e.ctoc'];
                    _this.POD_CUR.e_tc = data[i]['e.tc'];
                    _this.POD_CUR.e_muc = data[i]['e.muc'];
                    _this.POD_CUR.e_cur = data[i]['e.cur'];
                    _this.POD_CUR.frirght = data[i]['fright'];
                    _this.POD_CUR.i_thc = data[i]['i.thc'];
                    _this.POD_CUR.i_edi = data[i]['i.edi'];
                    _this.POD_CUR.i_currency = data[i]['i.currency'];
                    _this.POD_CUR.i_arc = data[i]['i.arc'];
                    _this.POD_CUR.i_doc = data[i]['i.doc'];
                    _this.POD_CUR.i_wc = data[i]['i.wc'];
                    _this.POD_CUR.i_af = data[i]['i.af'];
                    _this.POD_CUR.i_depc = data[i]['i.depc'];
                    _this.POD_CUR.i_isps = data[i]['i.isps'];
                    _this.POD_CUR.i_docf = data[i]['i.docf'];
                    _this.POD_CUR.i_ef = data[i]['i.ef'];
                    _this.POD_CUR.pod = data[i]['pod'];
                    _this.POD_CUR.pol = data[i]['pol'];
                }
            }
        });
        //this.CalculateTotal();
        setTimeout(function () { return _this.CalculateTotal(); }, 3000);
        //this.net.getPromise();
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\Users\Sam Joshuva\Documents\GitHub\PinkRoseLine\src\pages\detail\detail.html"*/' <!--\n\n  Generated template for the DetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-title>detail</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content  >\n\n\n\n   \n\n  \n\n    \n\n        <ion-grid>\n\n\n\n           <ion-row color="sucess">\n\n          <ion-col align="center" col-12 >Export Charges</ion-col>\n\n          \n\n        </ion-row>\n\n  \n\n          <ion-row>\n\n          <ion-col col-5>  </ion-col>\n\n          <ion-col col-4> INR </ion-col>\n\n          <ion-col col-3> USD </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>terminal handling Charges</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.e_thc }} </ion-col>\n\n          <ion-col col-3> {{ USD_CUR?.e_thc }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>Seal Charges</ion-col>\n\n  \n\n          <ion-col col-4> {{ POD_CUR?.e_sc }} </ion-col>\n\n          <ion-col col-3> {{ USD_CUR?.e_sc }} </ion-col>\n\n  \n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>BL Charges</ion-col>\n\n  \n\n          <ion-col col-4> {{ POD_CUR?.e_blc }} </ion-col>\n\n          <ion-col col-3> {{ USD_CUR?.e_blc }} </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>Surrender Charges</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.e_surc }} </ion-col>\n\n          <ion-col col-3> {{ USD_CUR?.e_surc }} </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>Weightment Charges</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.e_wc }} </ion-col>\n\n          <ion-col col-3> {{ USD_CUR?.e_wc}} </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>CTO Charges</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.e_ctoc }} </ion-col>\n\n          <ion-col col-3> {{ USD_CUR?.e_ctoc }} </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>Toll Charges</ion-col>\n\n          <ion-col col-4> {{POD_CUR?.e_tc }} </ion-col>\n\n          <ion-col col-3> {{USD_CUR?.e_tc}} </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>MUC</ion-col>\n\n          <ion-col col-4> {{POD_CUR?.e_muc }} </ion-col>\n\n          <ion-col col-3> {{USD_CUR?.e_muc}} </ion-col>\n\n        </ion-row>\n\n  \n\n        <ion-row>\n\n          <ion-col col-5 class="danger">Total</ion-col>\n\n          <ion-col col-4> {{Total_Export_USD}} </ion-col>\n\n          <ion-col col-3> {{Total_Export_USD}} </ion-col>\n\n        </ion-row>\n\n  \n\n        <ion-row>\n\n          <ion-col align="center" col-12 class="danger">Freight Charges</ion-col>\n\n          \n\n        </ion-row>\n\n  \n\n        <ion-row>\n\n          <ion-col col-5>  </ion-col>\n\n          <ion-col col-4> INR </ion-col>\n\n          <ion-col col-3> USD </ion-col>\n\n        </ion-row>\n\n  \n\n        <ion-row>\n\n          <ion-col col-5>Ocean Freight</ion-col>\n\n          <ion-col col-4>  </ion-col>\n\n          <ion-col col-3> 250 </ion-col>\n\n        </ion-row>\n\n  \n\n  \n\n        <ion-row>\n\n          <ion-col align="center" col-12 color="danger">import Charges</ion-col>\n\n          \n\n        </ion-row>\n\n  \n\n        <ion-row>\n\n          <ion-col col-5>  </ion-col>\n\n          <ion-col col-4> INR </ion-col>\n\n          <ion-col col-3> USD </ion-col>\n\n        </ion-row>\n\n  \n\n        <ion-row>\n\n          <ion-col col-5>Terminal Handling Cahrges Freight</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.i_thc }} </ion-col>\n\n          <ion-col col-3> {{ USD_CUR?.i_thc }} </ion-col>\n\n        </ion-row>\n\n  \n\n        <ion-row>\n\n          <ion-col col-5>EDI</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.i_edi }} </ion-col>\n\n          <ion-col col-3> {{ USD_CUR?.i_edi }} </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>ARC</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.i_arc }} </ion-col>\n\n          <ion-col col-3> {{ USD_CUR?.i_arc }} </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>D.O Charges</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.i_doc }} </ion-col>\n\n          <ion-col col-3> {{ USD_CUR?.i_doc }} </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>Washing Charges</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.i_wc }} </ion-col>\n\n          <ion-col col-3> {{USD_CUR?.i_wc }} </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>Agency Fee</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.i_af }} </ion-col>\n\n          <ion-col col-3> {{USD_CUR?.i_af }} </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>Deposit</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.i_depc }} </ion-col>\n\n          <ion-col col-3> {{USD_CUR?.i_depc }} </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>ISPS</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.i_isps }} </ion-col>\n\n          <ion-col col-3> {{USD_CUR?.i_isps }} </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>Documentaion</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.i_docf }} </ion-col>\n\n          <ion-col col-3> {{USD_CUR?.i_docf }} </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-5>Equipment Fee</ion-col>\n\n          <ion-col col-4> {{ POD_CUR?.i_ef }} </ion-col>\n\n          <ion-col col-3> {{USD_CUR?.i_ef }} </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col col-5 class="danger">Total</ion-col>\n\n          <ion-col col-4>  </ion-col>\n\n          <ion-col col-3> {{Total_Import_USD}} </ion-col>\n\n        </ion-row>\n\n        \n\n  \n\n        <ion-row>\n\n          <ion-col col-12>   </ion-col>\n\n          \n\n        </ion-row>\n\n  \n\n  \n\n  \n\n        <ion-row>\n\n          <ion-col col-5>Total Shipping Charge</ion-col>\n\n          <ion-col col-4> </ion-col>\n\n          <ion-col col-3> {{Total_USD}} </ion-col>\n\n        </ion-row>\n\n        \n\n  \n\n  \n\n  \n\n  \n\n        \n\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n      </ion-grid>\n\n  \n\n      \n\n  \n\n  \n\n  \n\n    \n\n  \n\n  </ion-content>\n\n  \n\n  \n\n  \n\n    <ion-footer>\n\n        <Button ion-button danger block color="danger" (click)="share()"  >Share</Button>\n\n      </ion-footer>\n\n  \n\n  \n\n  \n\n    '/*ion-inline-end:"C:\Users\Sam Joshuva\Documents\GitHub\PinkRoseLine\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], DetailPage);
    return DetailPage;
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
        this.displayPolPod();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SplashPage');
        setTimeout(function () { return _this.splash = false; }, 5000);
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
            console.log(data);
        });
        this.net.getPol().subscribe(function (data) {
            console.log("Data Loaded");
            _this.from = data;
            console.log(data);
        });
        this.net.getPod().subscribe(function (data) {
            console.log("Data Loaded");
            _this.to = data;
            console.log(data[0]['location']);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sam Joshuva\Documents\GitHub\PinkRoseLine\src\pages\home\home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n\n  <div class="flb">\n\n    <div class="Aligner-item Aligner-item--top"></div>\n\n    <img src="assets/imgs/splash.png" width="100%" height="100%">\n\n    <div class="Aligner-item Aligner-item--bottom"></div>\n\n  </div>\n\n</div>\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Pink Rose Liners\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  \n\n  <form [formGroup]="form" >\n\n  <ion-list inset> \n\n    <ion-item>\n\n      <ion-label>POL</ion-label>\n\n      <ion-select  formControlName="pol" [(ngModel)]="pol" multiple="false" cancelText="Cancel" okText="Select">\n\n        <ion-option *ngFor="let n of from" value="{{n.location}}">{{n.location}}</ion-option>\n\n        \n\n        \n\n        \n\n      </ion-select>\n\n    </ion-item>\n\n    <br>\n\n\n\n    <ion-item>\n\n      <ion-label>POD</ion-label>\n\n      <ion-select  formControlName="pod" [(ngModel)]="pod" multiple="false" cancelText="Cancel" okText="Select">\n\n        <ion-option  *ngFor="let n of to" value="{{n.location}}">{{n.location}}</ion-option>\n\n        \n\n        \n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <br>\n\n\n\n    <ion-item>\n\n        <ion-label>Start Date</ion-label>\n\n        <ion-datetime  formControlName="date" displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n\n      </ion-item>\n\n    <br>\n\n\n\n    <ion-item>\n\n      <ion-label>Size</ion-label>\n\n      <ion-select  formControlName="size" [(ngModel)]="size" multiple="false" cancelText="Cancel" okText="Select">\n\n        <ion-option value="20_feet">20 feet</ion-option>\n\n        \n\n        \n\n      </ion-select>\n\n    </ion-item>\n\n    <br>\n\n\n\n    <ion-item>\n\n      <ion-label>Commodity Type</ion-label>\n\n      <ion-select  formControlName="c_type" [(ngModel)]="c_type" multiple="false" cancelText="Cancel" okText="Select">\n\n        <ion-option *ngFor="let n of commoditytype" value="{{n.type}}">{{n.type}}</ion-option>\n\n        \n\n        \n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <br>\n\n\n\n    <ion-item>\n\n        \n\n        <ion-input  formControlName="c_name" [(ngModel)]="c_name" type="text" placeholder="Company Name " value=""></ion-input>\n\n    </ion-item>\n\n\n\n    <br>\n\n\n\n    <ion-item>\n\n        \n\n        <ion-input  formControlName="location"  [(ngModel)]="loc" type="text" placeholder="Location" value=""></ion-input>\n\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n\n        \n\n        <ion-input  formControlName="number" [(ngModel)]="mobile_num" type="number" placeholder="Mobile Number" value=""></ion-input>\n\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n\n        \n\n        <ion-input  formControlName="email" [(ngModel)]="email" type="email" placeholder="Email Address" value=""></ion-input>\n\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n\n       <Button ion-button color="danger" (click)="senddetail()" block>Submit</Button>\n\n    </ion-item>\n\n    </ion-list>\n\n    </form>\n\n\n\n    \n\n\n\n  \n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n   \n\n  </ion-footer>\n\n'/*ion-inline-end:"C:\Users\Sam Joshuva\Documents\GitHub\PinkRoseLine\src\pages\home\home.html"*/
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Sam Joshuva\Documents\GitHub\PinkRoseLine\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Sam Joshuva\Documents\GitHub\PinkRoseLine\src\app\app.html"*/
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