webpackJsonp([112],{2009:function(e,l,n){"use strict";function View_AddonModFolderIndexPage_0(e){return a._57(0,[a._52(402653184,1,{folderComponent:0}),(e()(),a._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),a._30(2,16384,null,0,D.a,[L.a,a.t,a.V,[2,k.a]],null,null),(e()(),a._55(-1,null,["\n    "])),(e()(),a._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,T.b,T.a)),a._30(5,49152,null,0,G.a,[H.a,[2,k.a],[2,J.a],L.a,a.t,a.V],null,null),a._30(6,212992,null,0,K.a,[G.a,N.a,U.a,q.b],null,null),(e()(),a._55(-1,3,["\n        "])),(e()(),a._31(8,0,null,3,3,"ion-title",[],null,null,null,z.b,z.a)),a._30(9,49152,null,0,B.a,[L.a,a.t,a.V,[2,E.a],[2,G.a]],null,null),(e()(),a._31(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),a._30(11,540672,null,0,Q.a,[a.t,S.a,W.a,X.b,U.a,N.a,Y.b,Z.b,$.b,ee.a,le.b,ne.a,[2,J.a],[2,ae.a],[2,te.a],oe.a,q.b,de.a,ue.a,re.a,a._11,_e.a],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(e()(),a._55(-1,3,["\n\n        "])),(e()(),a._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),a._30(14,16384,null,1,ie.a,[L.a,a.t,a.V,[2,E.a],[2,G.a]],null,null),a._52(603979776,2,{_buttons:1}),(e()(),a._55(-1,null,["\n            "])),(e()(),a._55(-1,null,["\n        "])),(e()(),a._55(-1,3,["\n    "])),(e()(),a._55(-1,null,["\n"])),(e()(),a._55(-1,null,["\n"])),(e()(),a._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,ce.b,ce.a)),a._30(22,4374528,null,0,ae.a,[L.a,N.a,se.a,a.t,a.V,H.a,fe.a,a.M,[2,k.a],[2,J.a]],null,null),(e()(),a._55(-1,1,["\n    "])),(e()(),a._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(e,l,n){var a=!0;if("ionRefresh"===l){a=!1!==e.component.folderComponent.doRefresh(n)&&a}return a},null,null)),a._30(25,212992,null,0,be.a,[N.a,ae.a,a.M,pe.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(e()(),a._55(-1,null,["\n        "])),(e()(),a._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,he.b,he.a)),a._30(28,114688,null,0,ge.a,[be.a,L.a],{pullingText:[0,"pullingText"]},null),a._47(131072,me.a,[U.a,a.j]),(e()(),a._55(-1,null,["\n    "])),(e()(),a._55(-1,1,["\n\n    "])),(e()(),a._31(32,0,null,1,1,"addon-mod-folder-index",[],null,[[null,"dataRetrieved"]],function(e,l,n){var a=!0;if("dataRetrieved"===l){a=!1!==e.component.updateData(n)&&a}return a},C.c,C.b)),a._30(33,245760,[[1,4]],0,r.a,[a.C,Ie.a,xe.a],{module:[0,"module"],courseId:[1,"courseId"],folderInstance:[2,"folderInstance"],subfolder:[3,"subfolder"]},{dataRetrieved:"dataRetrieved"}),(e()(),a._55(-1,1,["\n"])),(e()(),a._55(-1,null,["\n"]))],function(e,l){var n=l.component;e(l,6,0);e(l,11,0,n.title,"module",n.module.id,n.courseId);e(l,25,0,!n.subfolder&&n.folderComponent.loaded);e(l,28,0,a._34(1,"",a._56(l,28,0,a._44(l,29).transform("core.pulltorefresh")),""));e(l,33,0,n.module,n.courseId,n.folderInstance,n.subfolder)},function(e,l){e(l,4,0,a._44(l,5)._hidden,a._44(l,5)._sbPadding);e(l,21,0,a._44(l,22).statusbarPadding,a._44(l,22)._hasRefresher);e(l,24,0,"inactive"!==a._44(l,25).state,a._44(l,25)._top);e(l,27,0,a._44(l,28).r.state)})}Object.defineProperty(l,"__esModule",{value:!0});var a=n(0),t=n(5),o=n(3),d=n(32),u=n(757),r=n(504),_=this&&this.__decorate||function(e,l,n,a){var t,o=arguments.length,d=o<3?l:null===a?a=Object.getOwnPropertyDescriptor(l,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,l,n,a);else for(var u=e.length-1;u>=0;u--)(t=e[u])&&(d=(o<3?t(d):o>3?t(l,n,d):t(l,n))||d);return o>3&&d&&Object.defineProperty(l,n,d),d},i=this&&this.__metadata||function(e,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,l)},c=function(){function AddonModFolderIndexPage(e){this.module=e.get("module")||{},this.courseId=e.get("courseId"),this.folderInstance=e.get("folderInstance"),this.subfolder=e.get("subfolder"),this.title=this.subfolder?this.subfolder.name:this.module.name}return AddonModFolderIndexPage.prototype.updateData=function(e){this.title=e.name||this.title},_([Object(a._9)(r.a),i("design:type",r.a)],AddonModFolderIndexPage.prototype,"folderComponent",void 0),AddonModFolderIndexPage=_([Object(a.m)({selector:"page-addon-mod-folder-index",templateUrl:"index.html"}),i("design:paramtypes",[t.t])],AddonModFolderIndexPage)}(),s=this&&this.__decorate||function(e,l,n,a){var t,o=arguments.length,d=o<3?l:null===a?a=Object.getOwnPropertyDescriptor(l,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,l,n,a);else for(var u=e.length-1;u>=0;u--)(t=e[u])&&(d=(o<3?t(d):o>3?t(l,n,d):t(l,n))||d);return o>3&&d&&Object.defineProperty(l,n,d),d},f=function(){function AddonModFolderIndexPageModule(){}return AddonModFolderIndexPageModule=s([Object(a.I)({declarations:[c],imports:[d.a,u.a,t.l.forChild(c),o.b.forChild()]})],AddonModFolderIndexPageModule)}(),b=n(1527),p=n(1528),h=n(1529),g=n(1530),m=n(1531),I=n(1532),x=n(1533),v=n(1534),M=n(1535),P=n(1536),R=n(1537),y=n(1538),F=n(1539),j=n(1542),A=n(1543),O=n(1540),V=n(1541),w=n(1544),C=n(1598),D=n(373),L=n(8),k=n(40),T=n(722),G=n(214),H=n(35),J=n(20),K=n(472),N=n(15),U=n(18),q=n(9),z=n(723),B=n(317),E=n(250),Q=n(49),S=n(1),W=n(4),X=n(11),Y=n(2),Z=n(22),$=n(6),ee=n(17),le=n(10),ne=n(14),ae=n(29),te=n(28),oe=n(43),de=n(41),ue=n(30),re=n(36),_e=n(39),ie=n(374),ce=n(183),se=n(34),fe=n(109),be=n(161),pe=n(45),he=n(215),ge=n(175),me=n(25),Ie=n(333),xe=n(403),ve=n(70),Me=a._29({encapsulation:2,styles:[],data:{}}),Pe=a._27("page-addon-mod-folder-index",c,function View_AddonModFolderIndexPage_Host_0(e){return a._57(0,[(e()(),a._31(0,0,null,null,1,"page-addon-mod-folder-index",[],null,null,null,View_AddonModFolderIndexPage_0,Me)),a._30(1,49152,null,0,c,[ve.a],null,null)],null,null)},{},{},[]),Re=n(7),ye=n(23),Fe=n(369),je=n(370),Ae=n(372),Oe=n(371),Ve=n(471),we=n(721),Ce=n(108),De=n(26),Le=n(273),ke=n(76),Te=n(272);n.d(l,"AddonModFolderIndexPageModuleNgFactory",function(){return Ge});var Ge=a._28(f,[],function(e){return a._40([a._41(512,a.o,a._21,[[8,[b.a,p.a,h.a,g.a,m.a,I.a,x.a,v.a,M.a,P.a,R.a,y.a,F.a,j.a,A.a,O.a,V.a,w.a,C.a,Pe]],[3,a.o],a.K]),a._41(4608,Re.m,Re.l,[a.G,[2,Re.w]]),a._41(4608,ye.x,ye.x,[]),a._41(4608,ye.d,ye.d,[]),a._41(4608,Fe.b,Fe.a,[]),a._41(4608,je.a,je.b,[]),a._41(4608,Ae.b,Ae.a,[]),a._41(4608,Oe.b,Oe.a,[]),a._41(4608,U.a,U.a,[Ve.a,Fe.b,je.a,Ae.b,Oe.b,U.b,U.c]),a._41(512,d.a,d.a,[]),a._41(512,Re.b,Re.b,[]),a._41(512,ye.v,ye.v,[]),a._41(512,ye.i,ye.i,[]),a._41(512,ye.s,ye.s,[]),a._41(512,we.a,we.a,[]),a._41(512,o.b,o.b,[]),a._41(512,Ce.a,Ce.a,[]),a._41(512,De.a,De.a,[]),a._41(512,Le.a,Le.a,[]),a._41(512,ke.a,ke.a,[]),a._41(512,u.a,u.a,[]),a._41(512,we.b,we.b,[]),a._41(512,f,f,[]),a._41(256,U.c,void 0,[]),a._41(256,U.b,void 0,[]),a._41(256,Te.a,c,[])])})}});