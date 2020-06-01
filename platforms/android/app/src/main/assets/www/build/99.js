<<<<<<< Updated upstream
webpackJsonp([99],{2020:function(n,e,l){"use strict";function View_AddonModLtiIndexPage_0(n){return t._57(0,[t._52(402653184,1,{ltiComponent:0}),(n()(),t._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),t._30(2,16384,null,0,D.a,[k.a,t.t,t.V,[2,T.a]],null,null),(n()(),t._55(-1,null,["\n    "])),(n()(),t._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,F.b,F.a)),t._30(5,49152,null,0,G.a,[H.a,[2,T.a],[2,J.a],k.a,t.t,t.V],null,null),t._30(6,212992,null,0,K.a,[G.a,N.a,U.a,q.b],null,null),(n()(),t._55(-1,3,["\n        "])),(n()(),t._31(8,0,null,3,3,"ion-title",[],null,null,null,z.b,z.a)),t._30(9,49152,null,0,B.a,[k.a,t.t,t.V,[2,E.a],[2,G.a]],null,null),(n()(),t._31(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),t._30(11,540672,null,0,Q.a,[t.t,S.a,W.a,X.b,U.a,N.a,Y.b,Z.b,$.b,nn.a,en.b,ln.a,[2,J.a],[2,tn.a],[2,an.a],on.a,q.b,un.a,dn.a,rn.a,t._11,_n.a],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(n()(),t._55(-1,3,["\n\n        "])),(n()(),t._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),t._30(14,16384,null,1,cn.a,[k.a,t.t,t.V,[2,E.a],[2,G.a]],null,null),t._52(603979776,2,{_buttons:1}),(n()(),t._55(-1,null,["\n            "])),(n()(),t._55(-1,null,["\n        "])),(n()(),t._55(-1,3,["\n    "])),(n()(),t._55(-1,null,["\n"])),(n()(),t._55(-1,null,["\n"])),(n()(),t._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,sn.b,sn.a)),t._30(22,4374528,null,0,tn.a,[k.a,N.a,fn.a,t.t,t.V,H.a,bn.a,t.M,[2,T.a],[2,J.a]],null,null),(n()(),t._55(-1,1,["\n    "])),(n()(),t._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,e,l){var t=!0;if("ionRefresh"===e){t=!1!==n.component.ltiComponent.doRefresh(l)&&t}return t},null,null)),t._30(25,212992,null,0,pn.a,[N.a,tn.a,t.M,hn.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),t._55(-1,null,["\n        "])),(n()(),t._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,mn.b,mn.a)),t._30(28,114688,null,0,gn.a,[pn.a,k.a],{pullingText:[0,"pullingText"]},null),t._47(131072,xn.a,[U.a,t.j]),(n()(),t._55(-1,null,["\n    "])),(n()(),t._55(-1,1,["\n\n    "])),(n()(),t._31(32,0,null,1,1,"addon-mod-lti-index",[],null,[[null,"dataRetrieved"]],function(n,e,l){var t=!0;if("dataRetrieved"===e){t=!1!==n.component.updateData(l)&&t}return t},C.c,C.b)),t._30(33,245760,[[1,4]],0,i.a,[t.C,[2,tn.a],vn.a],{module:[0,"module"],courseId:[1,"courseId"]},{dataRetrieved:"dataRetrieved"}),(n()(),t._55(-1,1,["\n"])),(n()(),t._55(-1,null,["\n"]))],function(n,e){var l=e.component;n(e,6,0);n(e,11,0,l.title,"module",l.module.id,l.courseId);n(e,25,0,l.ltiComponent.loaded);n(e,28,0,t._34(1,"",t._56(e,28,0,t._44(e,29).transform("core.pulltorefresh")),""));n(e,33,0,l.module,l.courseId)},function(n,e){n(e,4,0,t._44(e,5)._hidden,t._44(e,5)._sbPadding);n(e,21,0,t._44(e,22).statusbarPadding,t._44(e,22)._hasRefresher);n(e,24,0,"inactive"!==t._44(e,25).state,t._44(e,25)._top);n(e,27,0,t._44(e,28).r.state)})}Object.defineProperty(e,"__esModule",{value:!0});var t=l(0),a=l(5),o=l(3),u=l(32),d=l(761),i=l(510),r=this&&this.__decorate||function(n,e,l,t){var a,o=arguments.length,u=o<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,l):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(n,e,l,t);else for(var d=n.length-1;d>=0;d--)(a=n[d])&&(u=(o<3?a(u):o>3?a(e,l,u):a(e,l))||u);return o>3&&u&&Object.defineProperty(e,l,u),u},_=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},c=function(){function AddonModLtiIndexPage(n){this.module=n.get("module")||{},this.courseId=n.get("courseId"),this.title=this.module.name}return AddonModLtiIndexPage.prototype.updateData=function(n){this.title=n.name||this.title},r([Object(t._9)(i.a),_("design:type",i.a)],AddonModLtiIndexPage.prototype,"ltiComponent",void 0),AddonModLtiIndexPage=r([Object(t.m)({selector:"page-addon-mod-lti-index",templateUrl:"index.html"}),_("design:paramtypes",[a.t])],AddonModLtiIndexPage)}(),s=this&&this.__decorate||function(n,e,l,t){var a,o=arguments.length,u=o<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,l):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(n,e,l,t);else for(var d=n.length-1;d>=0;d--)(a=n[d])&&(u=(o<3?a(u):o>3?a(e,l,u):a(e,l))||u);return o>3&&u&&Object.defineProperty(e,l,u),u},f=function(){function AddonModLtiIndexPageModule(){}return AddonModLtiIndexPageModule=s([Object(t.I)({declarations:[c],imports:[u.a,d.a,a.l.forChild(c),o.b.forChild()]})],AddonModLtiIndexPageModule)}(),b=l(1527),p=l(1528),h=l(1529),m=l(1530),g=l(1531),x=l(1532),v=l(1533),I=l(1534),M=l(1535),P=l(1536),R=l(1537),y=l(1538),L=l(1539),j=l(1542),A=l(1543),O=l(1540),V=l(1541),w=l(1544),C=l(1602),D=l(373),k=l(8),T=l(40),F=l(722),G=l(214),H=l(35),J=l(20),K=l(472),N=l(15),U=l(18),q=l(9),z=l(723),B=l(317),E=l(250),Q=l(49),S=l(1),W=l(4),X=l(11),Y=l(2),Z=l(22),$=l(6),nn=l(17),en=l(10),ln=l(14),tn=l(29),an=l(28),on=l(43),un=l(41),dn=l(30),rn=l(36),_n=l(39),cn=l(374),sn=l(183),fn=l(34),bn=l(109),pn=l(161),hn=l(45),mn=l(215),gn=l(175),xn=l(25),vn=l(300),In=l(70),Mn=t._29({encapsulation:2,styles:[],data:{}}),Pn=t._27("page-addon-mod-lti-index",c,function View_AddonModLtiIndexPage_Host_0(n){return t._57(0,[(n()(),t._31(0,0,null,null,1,"page-addon-mod-lti-index",[],null,null,null,View_AddonModLtiIndexPage_0,Mn)),t._30(1,49152,null,0,c,[In.a],null,null)],null,null)},{},{},[]),Rn=l(7),yn=l(23),Ln=l(369),jn=l(370),An=l(372),On=l(371),Vn=l(471),wn=l(721),Cn=l(108),Dn=l(26),kn=l(273),Tn=l(76),Fn=l(272);l.d(e,"AddonModLtiIndexPageModuleNgFactory",function(){return Gn});var Gn=t._28(f,[],function(n){return t._40([t._41(512,t.o,t._21,[[8,[b.a,p.a,h.a,m.a,g.a,x.a,v.a,I.a,M.a,P.a,R.a,y.a,L.a,j.a,A.a,O.a,V.a,w.a,C.a,Pn]],[3,t.o],t.K]),t._41(4608,Rn.m,Rn.l,[t.G,[2,Rn.w]]),t._41(4608,yn.x,yn.x,[]),t._41(4608,yn.d,yn.d,[]),t._41(4608,Ln.b,Ln.a,[]),t._41(4608,jn.a,jn.b,[]),t._41(4608,An.b,An.a,[]),t._41(4608,On.b,On.a,[]),t._41(4608,U.a,U.a,[Vn.a,Ln.b,jn.a,An.b,On.b,U.b,U.c]),t._41(512,u.a,u.a,[]),t._41(512,Rn.b,Rn.b,[]),t._41(512,yn.v,yn.v,[]),t._41(512,yn.i,yn.i,[]),t._41(512,yn.s,yn.s,[]),t._41(512,wn.a,wn.a,[]),t._41(512,o.b,o.b,[]),t._41(512,Cn.a,Cn.a,[]),t._41(512,Dn.a,Dn.a,[]),t._41(512,kn.a,kn.a,[]),t._41(512,Tn.a,Tn.a,[]),t._41(512,d.a,d.a,[]),t._41(512,wn.b,wn.b,[]),t._41(512,f,f,[]),t._41(256,U.c,void 0,[]),t._41(256,U.b,void 0,[]),t._41(256,Fn.a,c,[])])})}});
=======
webpackJsonp([99],{

/***/ 1995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumIndexPageModule", function() { return AddonModForumIndexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(2147);
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






var AddonModForumIndexPageModule = /** @class */ (function () {
    function AddonModForumIndexPageModule() {
    }
    AddonModForumIndexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__index__["a" /* AddonModForumIndexPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* AddonModForumComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__index__["a" /* AddonModForumIndexPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModForumIndexPageModule);
    return AddonModForumIndexPageModule;
}());

//# sourceMappingURL=index.module.js.map

/***/ }),

/***/ 2147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModForumIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index__ = __webpack_require__(443);
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
 * Page that displays a forum.
 */
var AddonModForumIndexPage = /** @class */ (function () {
    function AddonModForumIndexPage(navParams) {
        this.module = navParams.get('module') || {};
        this.courseId = navParams.get('courseId');
        this.title = this.module.name;
    }
    /**
     * Update some data based on the forum instance.
     *
     * @param forum Forum instance.
     */
    AddonModForumIndexPage.prototype.updateData = function (forum) {
        this.title = forum.name || this.title;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__components_index_index__["a" /* AddonModForumIndexComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_index_index__["a" /* AddonModForumIndexComponent */])
    ], AddonModForumIndexPage.prototype, "forumComponent", void 0);
    AddonModForumIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-forum-index',template:/*ion-inline-start:"/home/ravijain/Documents/GitHub/TriangleLearn-Ravi/src/addon/mod/forum/pages/index/index.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title><core-format-text [text]="title" contextLevel="module" [contextInstanceId]="module.id" [courseId]="courseId"></core-format-text></ion-title>\n\n        <ion-buttons end>\n            <!-- The buttons defined by the component will be added in here. -->\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<addon-mod-forum-index [module]="module" [courseId]="courseId" (dataRetrieved)="updateData($event)"></addon-mod-forum-index>\n'/*ion-inline-end:"/home/ravijain/Documents/GitHub/TriangleLearn-Ravi/src/addon/mod/forum/pages/index/index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], AddonModForumIndexPage);
    return AddonModForumIndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=99.js.map
>>>>>>> Stashed changes
