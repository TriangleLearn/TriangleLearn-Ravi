<<<<<<< Updated upstream
webpackJsonp([37],{2073:function(n,e,l){"use strict";function View_CoreSitePluginsPluginPage_0(n){return t._57(0,[t._52(402653184,1,{content:0}),(n()(),t._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),t._30(2,16384,null,0,G.a,[H.a,t.t,t.V,[2,I.a]],null,null),(n()(),t._55(-1,null,["\n    "])),(n()(),t._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,J.b,J.a)),t._30(5,49152,null,0,K.a,[N.a,[2,I.a],[2,q.a],H.a,t.t,t.V],null,null),t._30(6,212992,null,0,z.a,[K.a,A.a,B.a,Q.b],null,null),(n()(),t._55(-1,3,["\n        "])),(n()(),t._31(8,0,null,3,3,"ion-title",[],null,null,null,X.b,X.a)),t._30(9,49152,null,0,Y.a,[H.a,t.t,t.V,[2,Z.a],[2,K.a]],null,null),(n()(),t._55(10,0,["",""])),t._47(131072,$.a,[B.a,t.j]),(n()(),t._55(-1,3,["\n\n        "])),(n()(),t._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),t._30(14,16384,null,1,nn.a,[H.a,t.t,t.V,[2,Z.a],[2,K.a]],null,null),t._52(603979776,2,{_buttons:1}),(n()(),t._55(-1,null,["\n            "])),(n()(),t._55(-1,null,["\n        "])),(n()(),t._55(-1,3,["\n    "])),(n()(),t._55(-1,null,["\n"])),(n()(),t._55(-1,null,["\n"])),(n()(),t._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,en.b,en.a)),t._30(22,4374528,null,0,ln.a,[H.a,A.a,tn.a,t.t,t.V,N.a,an.a,t.M,[2,I.a],[2,q.a]],null,null),(n()(),t._55(-1,1,["\n    "])),(n()(),t._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,e,l){var t=!0;if("ionRefresh"===e){t=!1!==n.component.refreshData(l)&&t}return t},null,null)),t._30(25,212992,null,0,on.a,[A.a,ln.a,t.M,un.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),t._55(-1,null,["\n        "])),(n()(),t._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,rn.b,rn.a)),t._30(28,114688,null,0,sn.a,[on.a,H.a],{pullingText:[0,"pullingText"]},null),t._47(131072,$.a,[B.a,t.j]),(n()(),t._55(-1,null,["\n    "])),(n()(),t._55(-1,1,["\n    "])),(n()(),t._31(32,0,null,1,1,"core-site-plugins-plugin-content",[],null,null,null,cn.b,cn.a)),t._30(33,376832,[[1,4]],0,u.a,[_n.a,gn.a,[2,q.a],t.F],{component:[0,"component"],method:[1,"method"],args:[2,"args"],initResult:[3,"initResult"],data:[4,"data"],preSets:[5,"preSets"],pageTitle:[6,"pageTitle"]},null),(n()(),t._55(-1,1,["\n"])),(n()(),t._55(-1,null,["\n"]))],function(n,e){var l=e.component;n(e,6,0);n(e,25,0,l.content&&l.content.dataLoaded);n(e,28,0,t._34(1,"",t._56(e,28,0,t._44(e,29).transform("core.pulltorefresh")),""));n(e,33,0,l.component,l.method,l.args,l.initResult,l.jsData,l.preSets,l.title)},function(n,e){var l=e.component;n(e,4,0,t._44(e,5)._hidden,t._44(e,5)._sbPadding);n(e,10,0,t._56(e,10,0,t._44(e,11).transform(l.title)));n(e,21,0,t._44(e,22).statusbarPadding,t._44(e,22)._hasRefresher);n(e,24,0,"inactive"!==t._44(e,25).state,t._44(e,25)._top);n(e,27,0,t._44(e,28).r.state)})}Object.defineProperty(e,"__esModule",{value:!0});var t=l(0),a=l(5),i=l(3),o=l(32),u=l(159),r=this&&this.__decorate||function(n,e,l,t){var a,i=arguments.length,o=i<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,l):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,e,l,t);else for(var u=n.length-1;u>=0;u--)(a=n[u])&&(o=(i<3?a(o):i>3?a(e,l,o):a(e,l))||o);return i>3&&o&&Object.defineProperty(e,l,o),o},s=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},c=function(){function CoreSitePluginsPluginPage(n){this.title=n.get("title"),this.component=n.get("component"),this.method=n.get("method"),this.args=n.get("args"),this.initResult=n.get("initResult"),this.jsData=n.get("jsData"),this.preSets=n.get("preSets")}return CoreSitePluginsPluginPage.prototype.refreshData=function(n){this.content.refreshContent(!1).finally(function(){n.complete()})},CoreSitePluginsPluginPage.prototype.ionViewWillEnter=function(){this.content.callComponentFunction("ionViewWillEnter")},CoreSitePluginsPluginPage.prototype.ionViewDidEnter=function(){this.content.callComponentFunction("ionViewDidEnter")},CoreSitePluginsPluginPage.prototype.ionViewWillLeave=function(){this.content.callComponentFunction("ionViewWillLeave")},CoreSitePluginsPluginPage.prototype.ionViewDidLeave=function(){this.content.callComponentFunction("ionViewDidLeave")},CoreSitePluginsPluginPage.prototype.ionViewWillUnload=function(){this.content.callComponentFunction("ionViewWillUnload")},CoreSitePluginsPluginPage.prototype.ionViewCanLeave=function(){return this.content.callComponentFunction("ionViewCanLeave")},r([Object(t._9)(u.a),s("design:type",u.a)],CoreSitePluginsPluginPage.prototype,"content",void 0),CoreSitePluginsPluginPage=r([Object(t.m)({selector:"page-core-site-plugins-plugin",templateUrl:"plugin-page.html"}),s("design:paramtypes",[a.t])],CoreSitePluginsPluginPage)}(),_=l(743),g=this&&this.__decorate||function(n,e,l,t){var a,i=arguments.length,o=i<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,l):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,e,l,t);else for(var u=n.length-1;u>=0;u--)(a=n[u])&&(o=(i<3?a(o):i>3?a(e,l,o):a(e,l))||o);return i>3&&o&&Object.defineProperty(e,l,o),o},p=function(){function CoreSitePluginsPluginPageModule(){}return CoreSitePluginsPluginPageModule=g([Object(t.I)({declarations:[c],imports:[o.a,_.a,a.l.forChild(c),i.b.forChild()]})],CoreSitePluginsPluginPageModule)}(),f=l(1527),d=l(1528),P=l(1529),h=l(1530),b=l(1531),m=l(1532),C=l(1533),v=l(1534),y=l(1535),S=l(1536),V=l(1537),w=l(1538),R=l(1539),j=l(1583),D=l(1611),O=l(1612),F=l(1613),L=l(1614),M=l(1615),W=l(1616),x=l(1617),E=l(1618),T=l(1619),U=l(1620),k=l(1621),G=l(373),H=l(8),I=l(40),J=l(722),K=l(214),N=l(35),q=l(20),z=l(472),A=l(15),B=l(18),Q=l(9),X=l(723),Y=l(317),Z=l(250),$=l(25),nn=l(374),en=l(183),ln=l(29),tn=l(34),an=l(109),on=l(161),un=l(45),rn=l(215),sn=l(175),cn=l(406),_n=l(4),gn=l(59),pn=l(70),fn=t._29({encapsulation:2,styles:[],data:{}}),dn=t._27("page-core-site-plugins-plugin",c,function View_CoreSitePluginsPluginPage_Host_0(n){return t._57(0,[(n()(),t._31(0,0,null,null,1,"page-core-site-plugins-plugin",[],null,null,null,View_CoreSitePluginsPluginPage_0,fn)),t._30(1,49152,null,0,c,[pn.a],null,null)],null,null)},{},{},[]),Pn=l(7),hn=l(23),bn=l(369),mn=l(370),Cn=l(372),vn=l(371),yn=l(471),Sn=l(721),Vn=l(108),wn=l(26),Rn=l(476),jn=l(272);l.d(e,"CoreSitePluginsPluginPageModuleNgFactory",function(){return Dn});var Dn=t._28(p,[],function(n){return t._40([t._41(512,t.o,t._21,[[8,[f.a,d.a,P.a,h.a,b.a,m.a,C.a,v.a,y.a,S.a,V.a,w.a,R.a,j.a,D.a,O.a,F.a,L.a,M.a,W.a,x.a,E.a,T.a,U.a,k.a,dn]],[3,t.o],t.K]),t._41(4608,Pn.m,Pn.l,[t.G,[2,Pn.w]]),t._41(4608,hn.x,hn.x,[]),t._41(4608,hn.d,hn.d,[]),t._41(4608,bn.b,bn.a,[]),t._41(4608,mn.a,mn.b,[]),t._41(4608,Cn.b,Cn.a,[]),t._41(4608,vn.b,vn.a,[]),t._41(4608,B.a,B.a,[yn.a,bn.b,mn.a,Cn.b,vn.b,B.b,B.c]),t._41(512,o.a,o.a,[]),t._41(512,Pn.b,Pn.b,[]),t._41(512,hn.v,hn.v,[]),t._41(512,hn.i,hn.i,[]),t._41(512,hn.s,hn.s,[]),t._41(512,Sn.a,Sn.a,[]),t._41(512,i.b,i.b,[]),t._41(512,Vn.a,Vn.a,[]),t._41(512,wn.a,wn.a,[]),t._41(512,Rn.a,Rn.a,[]),t._41(512,_.a,_.a,[]),t._41(512,Sn.b,Sn.b,[]),t._41(512,p,p,[]),t._41(256,B.c,void 0,[]),t._41(256,B.b,void 0,[]),t._41(256,jn.a,c,[])])})}});
=======
webpackJsonp([37],{

/***/ 2045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSiteOnboardingPageModule", function() { return CoreLoginSiteOnboardingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_onboarding__ = __webpack_require__(2197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(13);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreLoginSiteOnboardingPageModule = /** @class */ (function () {
    function CoreLoginSiteOnboardingPageModule() {
    }
    CoreLoginSiteOnboardingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__site_onboarding__["a" /* CoreLoginSiteOnboardingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__site_onboarding__["a" /* CoreLoginSiteOnboardingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ]
        })
    ], CoreLoginSiteOnboardingPageModule);
    return CoreLoginSiteOnboardingPageModule;
}());

//# sourceMappingURL=site-onboarding.module.js.map

/***/ }),

/***/ 2197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginSiteOnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(87);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
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
 * Component that displays onboarding help regarding the CoreLoginSitePage.
 */
var CoreLoginSiteOnboardingPage = /** @class */ (function () {
    function CoreLoginSiteOnboardingPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.step = 0;
    }
    /**
     * Go to next step.
     *
     * @param e Click event.
     */
    CoreLoginSiteOnboardingPage.prototype.next = function (e) {
        e.stopPropagation();
        this.step++;
    };
    /**
     * Go to previous step.
     *
     * @param e Click event.
     */
    CoreLoginSiteOnboardingPage.prototype.previous = function (e) {
        e.stopPropagation();
        if (this.step == 0) {
            this.viewCtrl.dismiss();
        }
        else {
            this.step--;
        }
    };
    /**
     * Close modal.
     *
     * @param e Click event.
     */
    CoreLoginSiteOnboardingPage.prototype.skip = function (e) {
        e.stopPropagation();
        this.saveOnboardingDone();
        this.viewCtrl.dismiss();
    };
    /**
     * Create a site.
     *
     * @param e Click event.
     */
    CoreLoginSiteOnboardingPage.prototype.gotoWeb = function (e) {
        e.stopPropagation();
        this.saveOnboardingDone();
        __WEBPACK_IMPORTED_MODULE_2__providers_utils_utils__["a" /* CoreUtils */].instance.openInBrowser('https://moodle.com/getstarted/');
        this.viewCtrl.dismiss();
    };
    /**
     * Saves the onboarding has finished.
     */
    CoreLoginSiteOnboardingPage.prototype.saveOnboardingDone = function () {
        __WEBPACK_IMPORTED_MODULE_3__providers_config__["a" /* CoreConfig */].instance.set(__WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* CoreLoginHelperProvider */].ONBOARDING_DONE, 1);
    };
    CoreLoginSiteOnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-site-onboarding',template:/*ion-inline-start:"/home/ravijain/Documents/GitHub/TriangleLearn-Ravi/src/core/login/pages/site-onboarding/site-onboarding.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons step>\n            <button ion-button icon-only (click)="previous($event)" [attr.aria-label]="\'core.back\' | translate">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end>\n            <button ion-button (click)="skip($event)" [attr.aria-label]="\'core.skip\' | translate">\n                {{\'core.skip\' | translate}}\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div>\n        <div text-center padding class="core-login-site-logo">\n            <img src="assets/img/login_logo.png" class="avatar-full login-logo" role="presentation">\n        </div>\n\n        <h3 class="core-login-onboarding-step">\n            {{\'core.login.onboardingwelcome\' | translate}}\n        </h3>\n\n        <div *ngIf="step == 0" class="core-login-onboarding-step">\n            <a ion-button block (click)="skip($event)" margin-bottom color="light">{{\'core.login.onboardingimalearner\' | translate}}</a>\n            <a ion-button block (click)="next($event)" margin-bottom color="light">{{\'core.login.onboardingimaneducator\' | translate}}</a>\n        </div>\n\n        <div *ngIf="step == 1" class="core-login-onboarding-step">\n            <p class="core-login-onboarding-text">\n                {{ \'core.login.onboardingtoconnect\' | translate }}\n            </p>\n            <a ion-button block (click)="skip($event)" margin-bottom color="light">{{ \'core.login.onboardingialreadyhaveasite\' | translate }}</a>\n            <a ion-button block (click)="next($event)" margin-bottom>{{ \'core.login.onboardingineedasite\' | translate }}</a>\n        </div>\n\n        <div *ngIf="step == 2" class="core-login-onboarding-step">\n            <ul class="core-login-onboarding-text">\n                <li><core-icon name="fa-check-circle-o"></core-icon> {{ \'core.login.onboardingcreatemanagecourses\' | translate }}</li>\n                <li><core-icon name="fa-check-circle-o"></core-icon> {{ \'core.login.onboardingenrolmanagestudents\' | translate }}</li>\n                <li><core-icon name="fa-check-circle-o"></core-icon> {{ \'core.login.onboardingprovidefeedback\' | translate }}</li>\n            </ul>\n\n            <a ion-button block (click)="gotoWeb($event)" margin-bottom>{{ \'core.login.onboardinggetstarted\' | translate }}</a>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/ravijain/Documents/GitHub/TriangleLearn-Ravi/src/core/login/pages/site-onboarding/site-onboarding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */]])
    ], CoreLoginSiteOnboardingPage);
    return CoreLoginSiteOnboardingPage;
}());

//# sourceMappingURL=site-onboarding.js.map

/***/ })

});
//# sourceMappingURL=37.js.map
>>>>>>> Stashed changes
