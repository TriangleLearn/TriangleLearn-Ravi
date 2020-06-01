<<<<<<< Updated upstream
webpackJsonp([58],{2056:function(e,t,n){"use strict";function View_CoreLoginInitPage_0(e){return i._57(0,[(e()(),i._31(0,0,null,null,8,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,R.b,R.a)),i._30(1,4374528,null,0,O.a,[j.a,w.a,S.a,i.t,i.V,D.a,H.a,i.M,[2,M.a],[2,V.a]],null,null),(e()(),i._55(-1,1,["\n    "])),(e()(),i._31(3,0,null,1,4,"div",[["class","core-bglogo"]],null,null,null,null,null)),(e()(),i._55(-1,null,["\n        "])),(e()(),i._31(5,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,T.b,T.a)),i._30(6,114688,null,0,N.a,[j.a,i.t,i.V],null,null),(e()(),i._55(-1,null,["\n    "])),(e()(),i._55(-1,1,["\n"])),(e()(),i._55(-1,null,["\n"]))],function(e,t){e(t,6,0)},function(e,t){e(t,0,0,i._44(t,1).statusbarPadding,i._44(t,1)._hasRefresher);e(t,5,0,i._44(t,6)._paused)})}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=n(5),l=n(755),a=n(10),r=n(157),u=n(1),s=n(42),c=n(128),g=this&&this.__decorate||function(e,t,n,i){var o,l=arguments.length,a=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(l<3?o(a):l>3?o(t,n,a):o(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function CoreLoginInitPage(e,t,n,i,o,l){this.navCtrl=e,this.appProvider=t,this.initDelegate=n,this.sitesProvider=i,this.loginHelper=o,this.splashScreen=l}return CoreLoginInitPage.prototype.ionViewDidLoad=function(){var e=this;this.initDelegate.ready().then(function(){var t=e.appProvider.getRedirect();return t.siteId&&(e.appProvider.storeRedirect("","",""),Date.now()-t.timemodified<2e4)?t.siteId!=s.a.NO_SITE_ID?e.sitesProvider.loadSite(t.siteId,t.page,t.params).then(function(n){if(n)return e.loginHelper.goToSiteInitialPage(e.navCtrl,t.page,t.params,{animate:!1})}).catch(function(){return e.loadPage()}):e.loginHelper.goToNoSitePage(e.navCtrl,t.page,t.params):e.loadPage()}).then(function(){setTimeout(function(){e.splashScreen.hide()},100)})},CoreLoginInitPage.prototype.loadPage=function(){var e=this;return this.sitesProvider.isLoggedIn()?this.loginHelper.isSiteLoggedOut()?this.sitesProvider.logout().then(function(){return e.loadPage()}):this.loginHelper.goToSiteInitialPage():this.navCtrl.setRoot("CoreLoginSitesPage")},CoreLoginInitPage=g([Object(i.m)({selector:"page-core-login-init",templateUrl:"init.html"}),d("design:paramtypes",[o.s,a.b,r.a,u.a,c.a,l.a])],CoreLoginInitPage)}(),_=this&&this.__decorate||function(e,t,n,i){var o,l=arguments.length,a=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(l<3?o(a):l>3?o(t,n,a):o(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},p=function(){function CoreLoginInitPageModule(){}return CoreLoginInitPageModule=_([Object(i.I)({declarations:[f],imports:[o.l.forChild(f)]})],CoreLoginInitPageModule)}(),h=n(1527),P=n(1528),v=n(1529),b=n(1530),I=n(1531),C=n(1532),y=n(1533),m=n(1534),L=n(1535),R=n(183),O=n(29),j=n(8),w=n(15),S=n(34),D=n(35),H=n(109),M=n(40),V=n(20),T=n(124),N=n(104),x=i._29({encapsulation:2,styles:[],data:{}}),k=i._27("page-core-login-init",f,function View_CoreLoginInitPage_Host_0(e){return i._57(0,[(e()(),i._31(0,0,null,null,1,"page-core-login-init",[],null,null,null,View_CoreLoginInitPage_0,x)),i._30(1,49152,null,0,f,[V.a,a.b,r.a,u.a,c.a,l.a],null,null)],null,null)},{},{},[]),E=n(7),F=n(23),G=n(721),J=n(272);n.d(t,"CoreLoginInitPageModuleNgFactory",function(){return K});var K=i._28(p,[],function(e){return i._40([i._41(512,i.o,i._21,[[8,[h.a,P.a,v.a,b.a,I.a,C.a,y.a,m.a,L.a,k]],[3,i.o],i.K]),i._41(4608,E.m,E.l,[i.G,[2,E.w]]),i._41(4608,F.x,F.x,[]),i._41(4608,F.d,F.d,[]),i._41(512,E.b,E.b,[]),i._41(512,F.v,F.v,[]),i._41(512,F.i,F.i,[]),i._41(512,F.s,F.s,[]),i._41(512,G.a,G.a,[]),i._41(512,G.b,G.b,[]),i._41(512,p,p,[]),i._41(256,J.a,f,[])])})}});
=======
webpackJsonp([58],{

/***/ 2027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseSectionSelectorPageModule", function() { return CoreCourseSectionSelectorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__section_selector__ = __webpack_require__(2179);
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






var CoreCourseSectionSelectorPageModule = /** @class */ (function () {
    function CoreCourseSectionSelectorPageModule() {
    }
    CoreCourseSectionSelectorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__section_selector__["a" /* CoreCourseSectionSelectorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__section_selector__["a" /* CoreCourseSectionSelectorPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreCourseSectionSelectorPageModule);
    return CoreCourseSectionSelectorPageModule;
}());

//# sourceMappingURL=section-selector.module.js.map

/***/ }),

/***/ 2179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreCourseSectionSelectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_course__ = __webpack_require__(12);
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
 * Page that displays course section selector.
 */
var CoreCourseSectionSelectorPage = /** @class */ (function () {
    function CoreCourseSectionSelectorPage(navParams, courseHelper, viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.stealthModulesSectionId = __WEBPACK_IMPORTED_MODULE_3__providers_course__["a" /* CoreCourseProvider */].STEALTH_MODULES_SECTION_ID;
        this.sections = navParams.get('sections');
        this.selected = navParams.get('selected');
        var course = navParams.get('course');
        this.courseId = course && course.id;
        if (course && course.enablecompletion && course.courseformatoptions && course.courseformatoptions.coursedisplay == 1 &&
            course.completionusertracked !== false) {
            this.sections.forEach(function (section) {
                var complete = 0, total = 0;
                section.modules && section.modules.forEach(function (module) {
                    if (module.uservisible && typeof module.completiondata != 'undefined' &&
                        module.completiondata.tracking > __WEBPACK_IMPORTED_MODULE_3__providers_course__["a" /* CoreCourseProvider */].COMPLETION_TRACKING_NONE) {
                        total++;
                        if (module.completiondata.state == __WEBPACK_IMPORTED_MODULE_3__providers_course__["a" /* CoreCourseProvider */].COMPLETION_COMPLETE ||
                            module.completiondata.state == __WEBPACK_IMPORTED_MODULE_3__providers_course__["a" /* CoreCourseProvider */].COMPLETION_COMPLETE_PASS) {
                            complete++;
                        }
                    }
                });
                if (total > 0) {
                    section.progress = complete / total * 100;
                }
            });
        }
    }
    /**
     * Close the modal.
     */
    CoreCourseSectionSelectorPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Select a section.
     *
     * @param section Selected section object.
     */
    CoreCourseSectionSelectorPage.prototype.selectSection = function (section) {
        if (section.uservisible !== false) {
            this.viewCtrl.dismiss(section);
        }
    };
    CoreCourseSectionSelectorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-course-section-selector',template:/*ion-inline-start:"/home/ravijain/Documents/GitHub/TriangleLearn-Ravi/src/core/course/pages/section-selector/section-selector.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.course.sections\' | translate }}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list id="core-course-section-selector" role="menu" aria-labelledby="core-course-section-button">\n        <ng-container *ngFor="let section of sections">\n            <a ion-item *ngIf="!section.hiddenbynumsections && section.id != stealthModulesSectionId" text-wrap (click)="selectSection(section)" [class.core-primary-selected-item]="selected.id == section.id" [class.item-dimmed]="section.visible === 0 || section.uservisible === false" detail-none role="menuitem" [attr.aria-hidden]="section.uservisible === false" [attr.aria-label]="section.formattedName || section.name">\n                <core-icon name="fa-folder" item-start></core-icon>\n                <h2><core-format-text [text]="section.formattedName || section.name" contextLevel="course" [contextInstanceId]="courseId"></core-format-text></h2>\n                <core-progress-bar *ngIf="section.progress >= 0" [progress]="section.progress"></core-progress-bar>\n                <ion-badge color="secondary" *ngIf="section.visible === 0 && section.uservisible !== false" text-wrap>{{ \'core.course.hiddenfromstudents\' | translate }}</ion-badge>\n                <ion-badge color="secondary" *ngIf="section.availabilityinfo" text-wrap><core-format-text [text]=" section.availabilityinfo" contextLevel="course" [contextInstanceId]="courseId"></core-format-text></ion-badge>\n            </a>\n        </ng-container>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ravijain/Documents/GitHub/TriangleLearn-Ravi/src/core/course/pages/section-selector/section-selector.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_helper__["a" /* CoreCourseHelperProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */]])
    ], CoreCourseSectionSelectorPage);
    return CoreCourseSectionSelectorPage;
}());

//# sourceMappingURL=section-selector.js.map

/***/ })

});
//# sourceMappingURL=58.js.map
>>>>>>> Stashed changes
