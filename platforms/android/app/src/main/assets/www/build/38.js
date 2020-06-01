<<<<<<< Updated upstream
webpackJsonp([38],{2074:function(e,n,l){"use strict";function View_CoreSitePluginsModuleIndexPage_0(e){return t._57(0,[t._52(402653184,1,{content:0}),(e()(),t._31(1,0,null,null,17,"ion-header",[],null,null,null,null,null)),t._30(2,16384,null,0,k.a,[G.a,t.t,t.V,[2,H.a]],null,null),(e()(),t._55(-1,null,["\n    "])),(e()(),t._31(4,0,null,null,13,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,J.b,J.a)),t._30(5,49152,null,0,K.a,[N.a,[2,H.a],[2,q.a],G.a,t.t,t.V],null,null),t._30(6,212992,null,0,z.a,[K.a,A.a,B.a,Q.b],null,null),(e()(),t._55(-1,3,["\n        "])),(e()(),t._31(8,0,null,3,2,"ion-title",[],null,null,null,X.b,X.a)),t._30(9,49152,null,0,Y.a,[G.a,t.t,t.V,[2,Z.a],[2,K.a]],null,null),(e()(),t._55(10,0,["",""])),(e()(),t._55(-1,3,["\n\n        "])),(e()(),t._31(12,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),t._30(13,16384,null,1,$.a,[G.a,t.t,t.V,[2,Z.a],[2,K.a]],null,null),t._52(603979776,2,{_buttons:1}),(e()(),t._55(-1,null,["\n            "])),(e()(),t._55(-1,null,["\n        "])),(e()(),t._55(-1,3,["\n    "])),(e()(),t._55(-1,null,["\n"])),(e()(),t._55(-1,null,["\n"])),(e()(),t._31(20,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,ee.b,ee.a)),t._30(21,4374528,null,0,ne.a,[G.a,A.a,le.a,t.t,t.V,N.a,te.a,t.M,[2,H.a],[2,q.a]],null,null),(e()(),t._55(-1,1,["\n    "])),(e()(),t._31(23,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(e,n,l){var t=!0;if("ionRefresh"===n){t=!1!==e.component.refreshData(l)&&t}return t},null,null)),t._30(24,212992,null,0,oe.a,[A.a,ne.a,t.M,ae.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(e()(),t._55(-1,null,["\n        "])),(e()(),t._31(26,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,ue.b,ue.a)),t._30(27,114688,null,0,ie.a,[oe.a,G.a],{pullingText:[0,"pullingText"]},null),t._47(131072,re.a,[B.a,t.j]),(e()(),t._55(-1,null,["\n    "])),(e()(),t._55(-1,1,["\n    "])),(e()(),t._31(31,0,null,1,1,"core-site-plugins-module-index",[],null,null,null,w.c,w.b)),t._30(32,245760,[[1,4]],0,i.a,[de.a,ce.a,_e.a,se.b,B.a,fe.b,ge.a],{module:[0,"module"],courseId:[1,"courseId"],pageTitle:[2,"pageTitle"]},null),(e()(),t._55(-1,1,["\n"])),(e()(),t._55(-1,null,["\n"]))],function(e,n){var l=n.component;e(n,6,0);e(n,24,0,l.content&&l.content.content&&l.content.content.dataLoaded);e(n,27,0,t._34(1,"",t._56(n,27,0,t._44(n,28).transform("core.pulltorefresh")),""));e(n,32,0,l.module,l.courseId,l.title)},function(e,n){var l=n.component;e(n,4,0,t._44(n,5)._hidden,t._44(n,5)._sbPadding);e(n,10,0,l.title);e(n,20,0,t._44(n,21).statusbarPadding,t._44(n,21)._hasRefresher);e(n,23,0,"inactive"!==t._44(n,24).state,t._44(n,24)._top);e(n,26,0,t._44(n,27).r.state)})}Object.defineProperty(n,"__esModule",{value:!0});var t=l(0),o=l(5),a=l(3),u=l(32),i=l(394),r=this&&this.__decorate||function(e,n,l,t){var o,a=arguments.length,u=a<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,l):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,l,t);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(a<3?o(u):a>3?o(n,l,u):o(n,l))||u);return a>3&&u&&Object.defineProperty(n,l,u),u},d=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},c=function(){function CoreSitePluginsModuleIndexPage(e){this.title=e.get("title"),this.module=e.get("module"),this.courseId=e.get("courseId")}return CoreSitePluginsModuleIndexPage.prototype.refreshData=function(e){this.content.doRefresh().finally(function(){e.complete()})},CoreSitePluginsModuleIndexPage.prototype.ionViewWillEnter=function(){this.content.callComponentFunction("ionViewWillEnter")},CoreSitePluginsModuleIndexPage.prototype.ionViewDidEnter=function(){this.content.callComponentFunction("ionViewDidEnter")},CoreSitePluginsModuleIndexPage.prototype.ionViewWillLeave=function(){this.content.callComponentFunction("ionViewWillLeave")},CoreSitePluginsModuleIndexPage.prototype.ionViewDidLeave=function(){this.content.callComponentFunction("ionViewDidLeave")},CoreSitePluginsModuleIndexPage.prototype.ionViewWillUnload=function(){this.content.callComponentFunction("ionViewWillUnload")},CoreSitePluginsModuleIndexPage.prototype.ionViewCanLeave=function(){return this.content.callComponentFunction("ionViewCanLeave")},r([Object(t._9)(i.a),d("design:type",i.a)],CoreSitePluginsModuleIndexPage.prototype,"content",void 0),CoreSitePluginsModuleIndexPage=r([Object(t.m)({selector:"page-core-site-plugins-module-index",templateUrl:"module-index.html"}),d("design:paramtypes",[o.t])],CoreSitePluginsModuleIndexPage)}(),_=l(743),s=this&&this.__decorate||function(e,n,l,t){var o,a=arguments.length,u=a<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,l):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,l,t);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(a<3?o(u):a>3?o(n,l,u):o(n,l))||u);return a>3&&u&&Object.defineProperty(n,l,u),u},f=function(){function CoreSitePluginsModuleIndexPageModule(){}return CoreSitePluginsModuleIndexPageModule=s([Object(t.I)({declarations:[c],imports:[u.a,_.a,o.l.forChild(c),a.b.forChild()]})],CoreSitePluginsModuleIndexPageModule)}(),g=l(1527),p=l(1528),b=l(1529),P=l(1530),h=l(1531),m=l(1532),C=l(1533),x=l(1534),M=l(1535),v=l(1536),y=l(1537),I=l(1538),V=l(1539),w=l(1583),S=l(1611),R=l(1612),j=l(1613),O=l(1614),D=l(1615),F=l(1616),L=l(1617),W=l(1618),E=l(1619),T=l(1620),U=l(1621),k=l(373),G=l(8),H=l(40),J=l(722),K=l(214),N=l(35),q=l(20),z=l(472),A=l(15),B=l(18),Q=l(9),X=l(723),Y=l(317),Z=l(250),$=l(374),ee=l(183),ne=l(29),le=l(34),te=l(109),oe=l(161),ae=l(45),ue=l(215),ie=l(175),re=l(25),de=l(59),ce=l(38),_e=l(52),se=l(11),fe=l(2),ge=l(62),pe=l(70),be=t._29({encapsulation:2,styles:[],data:{}}),Pe=t._27("page-core-site-plugins-module-index",c,function View_CoreSitePluginsModuleIndexPage_Host_0(e){return t._57(0,[(e()(),t._31(0,0,null,null,1,"page-core-site-plugins-module-index",[],null,null,null,View_CoreSitePluginsModuleIndexPage_0,be)),t._30(1,49152,null,0,c,[pe.a],null,null)],null,null)},{},{},[]),he=l(7),me=l(23),Ce=l(369),xe=l(370),Me=l(372),ve=l(371),ye=l(471),Ie=l(721),Ve=l(108),we=l(26),Se=l(476),Re=l(272);l.d(n,"CoreSitePluginsModuleIndexPageModuleNgFactory",function(){return je});var je=t._28(f,[],function(e){return t._40([t._41(512,t.o,t._21,[[8,[g.a,p.a,b.a,P.a,h.a,m.a,C.a,x.a,M.a,v.a,y.a,I.a,V.a,w.a,S.a,R.a,j.a,O.a,D.a,F.a,L.a,W.a,E.a,T.a,U.a,Pe]],[3,t.o],t.K]),t._41(4608,he.m,he.l,[t.G,[2,he.w]]),t._41(4608,me.x,me.x,[]),t._41(4608,me.d,me.d,[]),t._41(4608,Ce.b,Ce.a,[]),t._41(4608,xe.a,xe.b,[]),t._41(4608,Me.b,Me.a,[]),t._41(4608,ve.b,ve.a,[]),t._41(4608,B.a,B.a,[ye.a,Ce.b,xe.a,Me.b,ve.b,B.b,B.c]),t._41(512,u.a,u.a,[]),t._41(512,he.b,he.b,[]),t._41(512,me.v,me.v,[]),t._41(512,me.i,me.i,[]),t._41(512,me.s,me.s,[]),t._41(512,Ie.a,Ie.a,[]),t._41(512,a.b,a.b,[]),t._41(512,Ve.a,Ve.a,[]),t._41(512,we.a,we.a,[]),t._41(512,Se.a,Se.a,[]),t._41(512,_.a,_.a,[]),t._41(512,Ie.b,Ie.b,[]),t._41(512,f,f,[]),t._41(256,B.c,void 0,[]),t._41(256,B.b,void 0,[]),t._41(256,Re.a,c,[])])})}});
=======
webpackJsonp([38],{

/***/ 2042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSiteHelpPageModule", function() { return CoreLoginSiteHelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_help__ = __webpack_require__(2194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
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





var CoreLoginSiteHelpPageModule = /** @class */ (function () {
    function CoreLoginSiteHelpPageModule() {
    }
    CoreLoginSiteHelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__site_help__["a" /* CoreLoginSiteHelpPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__site_help__["a" /* CoreLoginSiteHelpPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ]
        })
    ], CoreLoginSiteHelpPageModule);
    return CoreLoginSiteHelpPageModule;
}());

//# sourceMappingURL=site-help.module.js.map

/***/ }),

/***/ 2194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginSiteHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(4);
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
 * Component that displays some help regarding the CoreLoginSitePage.
 */
var CoreLoginSiteHelpPage = /** @class */ (function () {
    function CoreLoginSiteHelpPage(viewCtrl, translate, utils) {
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.utils = utils;
        this.canScanQR = this.utils.canScanQR() && false; // @todo: Enable it for 3.9 release.
        this.urlImageHtml = __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* CoreLoginHelperProvider */].FAQ_URL_IMAGE_HTML;
        this.qrCodeImageHtml = __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* CoreLoginHelperProvider */].FAQ_QRCODE_IMAGE_HTML;
        this.setupLinkHtml = '<a href="https://moodle.com/getstarted/" title="' +
            this.translate.instant('core.login.faqsetupsitelinktitle') + '">https://moodle.com/getstarted/</a>';
    }
    /**
     * Close help modal.
     */
    CoreLoginSiteHelpPage.prototype.closeHelp = function () {
        this.viewCtrl.dismiss();
    };
    CoreLoginSiteHelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-site-help',template:/*ion-inline-start:"/home/ravijain/Documents/GitHub/TriangleLearn-Ravi/src/core/login/pages/site-help/site-help.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.login.help\' | translate }}</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeHelp()" [attr.aria-label]="\'core.close\' | translate">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item text-wrap>\n            <h2><b>{{ \'core.login.faqwhatisurlquestion\' | translate }}</b></h2>\n        </ion-item>\n        <ion-item text-wrap class="core-login-faqwhatisurlanswer">\n            <div [innerHTML]="\'core.login.faqwhatisurlanswer\' | translate: {$image: urlImageHtml}">\n            </div>\n        </ion-item>\n        <ion-item text-wrap>\n            <h2><b>{{ \'core.login.faqcannotconnectquestion\' | translate }}</b></h2>\n        </ion-item>\n        <ion-item text-wrap>\n            <p>{{ \'core.login.faqcannotconnectanswer\' | translate }} {{ \'core.whoissiteadmin\' | translate }}</p>\n        </ion-item>\n        <ion-item text-wrap>\n            <h2><b>{{ \'core.login.faqsetupsitequestion\' | translate }}</b></h2>\n        </ion-item>\n        <ion-item text-wrap>\n            <p><core-format-text [text]="\'core.login.faqsetupsiteanswer\' | translate:{$link: setupLinkHtml}" [filter]="false"></core-format-text></p>\n        </ion-item>\n        <ion-item text-wrap>\n            <h2><b>{{ \'core.login.faqtestappquestion\' | translate }}</b></h2>\n        </ion-item>\n        <ion-item text-wrap>\n            <p>{{ \'core.login.faqtestappanswer\' | translate }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="canScanQR">\n            <h2><b>{{ \'core.login.faqwhereisqrcode\' | translate }}</b></h2>\n        </ion-item>\n        <ion-item text-wrap *ngIf="canScanQR" class="core-login-faqwhereisqrcodeanswer">\n            <div [innerHTML]="\'core.login.faqwhereisqrcodeanswer\' | translate: {$image: qrCodeImageHtml}">\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ravijain/Documents/GitHub/TriangleLearn-Ravi/src/core/login/pages/site-help/site-help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["b" /* CoreUtilsProvider */]])
    ], CoreLoginSiteHelpPage);
    return CoreLoginSiteHelpPage;
}());

//# sourceMappingURL=site-help.js.map

/***/ })

});
//# sourceMappingURL=38.js.map
>>>>>>> Stashed changes
