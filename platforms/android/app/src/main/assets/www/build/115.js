webpackJsonp([115],{2006:function(e,n,l){"use strict";function View_AddonModFeedbackIndexPage_0(e){return a._57(0,[a._52(402653184,1,{feedbackComponent:0}),(e()(),a._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),a._30(2,16384,null,0,C.a,[D.a,a.t,a.V,[2,T.a]],null,null),(e()(),a._55(-1,null,["\n    "])),(e()(),a._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,G.b,G.a)),a._30(5,49152,null,0,L.a,[H.a,[2,T.a],[2,J.a],D.a,a.t,a.V],null,null),a._30(6,212992,null,0,K.a,[L.a,N.a,U.a,q.b],null,null),(e()(),a._55(-1,3,["\n        "])),(e()(),a._31(8,0,null,3,3,"ion-title",[],null,null,null,z.b,z.a)),a._30(9,49152,null,0,B.a,[D.a,a.t,a.V,[2,E.a],[2,L.a]],null,null),(e()(),a._31(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),a._30(11,540672,null,0,Q.a,[a.t,S.a,W.a,X.b,U.a,N.a,Y.b,Z.b,$.b,ee.a,ne.b,le.a,[2,J.a],[2,ae.a],[2,te.a],oe.a,q.b,de.a,ue.a,re.a,a._11,ce.a],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(e()(),a._55(-1,3,["\n\n        "])),(e()(),a._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),a._30(14,16384,null,1,_e.a,[D.a,a.t,a.V,[2,E.a],[2,L.a]],null,null),a._52(603979776,2,{_buttons:1}),(e()(),a._55(-1,null,["\n            "])),(e()(),a._55(-1,null,["\n        "])),(e()(),a._55(-1,3,["\n    "])),(e()(),a._55(-1,null,["\n"])),(e()(),a._55(-1,null,["\n"])),(e()(),a._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,ie.b,ie.a)),a._30(22,4374528,null,0,ae.a,[D.a,N.a,be.a,a.t,a.V,H.a,se.a,a.M,[2,T.a],[2,J.a]],null,null),(e()(),a._55(-1,1,["\n    "])),(e()(),a._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(e,n,l){var a=!0;if("ionRefresh"===n){a=!1!==e.component.feedbackComponent.doRefresh(l)&&a}return a},null,null)),a._30(25,212992,null,0,fe.a,[N.a,ae.a,a.M,pe.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(e()(),a._55(-1,null,["\n        "])),(e()(),a._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,ge.b,ge.a)),a._30(28,114688,null,0,he.a,[fe.a,D.a],{pullingText:[0,"pullingText"]},null),a._47(131072,me.a,[U.a,a.j]),(e()(),a._55(-1,null,["\n    "])),(e()(),a._55(-1,1,["\n\n    "])),(e()(),a._31(32,0,null,1,1,"addon-mod-feedback-index",[],null,[[null,"dataRetrieved"]],function(e,n,l){var a=!0;if("dataRetrieved"===n){a=!1!==e.component.updateData(l)&&a}return a},V.c,V.b)),a._30(33,245760,[[1,4]],0,r.a,[a.C,xe.a,[2,ae.a],ve.a,Ie.a,ke.a,J.a,Me.a,Pe.a],{module:[0,"module"],courseId:[1,"courseId"],group:[2,"group"],tab:[3,"tab"]},{dataRetrieved:"dataRetrieved"}),(e()(),a._55(-1,1,["\n"])),(e()(),a._55(-1,null,["\n"]))],function(e,n){var l=n.component;e(n,6,0);e(n,11,0,l.title,"module",l.module.id,l.courseId);e(n,25,0,l.feedbackComponent.loaded);e(n,28,0,a._34(1,"",a._56(n,28,0,a._44(n,29).transform("core.pulltorefresh")),""));e(n,33,0,l.module,l.courseId,l.selectedGroup,l.selectedTab)},function(e,n){e(n,4,0,a._44(n,5)._hidden,a._44(n,5)._sbPadding);e(n,21,0,a._44(n,22).statusbarPadding,a._44(n,22)._hasRefresher);e(n,24,0,"inactive"!==a._44(n,25).state,a._44(n,25)._top);e(n,27,0,a._44(n,28).r.state)})}Object.defineProperty(n,"__esModule",{value:!0});var a=l(0),t=l(5),o=l(3),d=l(32),u=l(727),r=l(503),c=this&&this.__decorate||function(e,n,l,a){var t,o=arguments.length,d=o<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,n,l,a);else for(var u=e.length-1;u>=0;u--)(t=e[u])&&(d=(o<3?t(d):o>3?t(n,l,d):t(n,l))||d);return o>3&&d&&Object.defineProperty(n,l,d),d},_=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},i=function(){function AddonModFeedbackIndexPage(e){this.module=e.get("module")||{},this.courseId=e.get("courseId"),this.selectedGroup=e.get("group")||0,this.selectedTab=e.get("tab")||"overview",this.title=this.module.name}return AddonModFeedbackIndexPage.prototype.updateData=function(e){this.title=e.name||this.title},c([Object(a._9)(r.a),_("design:type",r.a)],AddonModFeedbackIndexPage.prototype,"feedbackComponent",void 0),AddonModFeedbackIndexPage=c([Object(a.m)({selector:"page-addon-mod-feedback-index",templateUrl:"index.html"}),_("design:paramtypes",[t.t])],AddonModFeedbackIndexPage)}(),b=this&&this.__decorate||function(e,n,l,a){var t,o=arguments.length,d=o<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,n,l,a);else for(var u=e.length-1;u>=0;u--)(t=e[u])&&(d=(o<3?t(d):o>3?t(n,l,d):t(n,l))||d);return o>3&&d&&Object.defineProperty(n,l,d),d},s=function(){function AddonModFeedbackIndexPageModule(){}return AddonModFeedbackIndexPageModule=b([Object(a.I)({declarations:[i],imports:[d.a,u.a,t.l.forChild(i),o.b.forChild()]})],AddonModFeedbackIndexPageModule)}(),f=l(1527),p=l(1528),g=l(1529),h=l(1530),m=l(1531),x=l(1532),v=l(1533),I=l(1534),k=l(1535),M=l(1536),P=l(1537),R=l(1538),y=l(1539),F=l(1542),j=l(1543),A=l(1540),O=l(1541),w=l(1544),V=l(1553),C=l(373),D=l(8),T=l(40),G=l(722),L=l(214),H=l(35),J=l(20),K=l(472),N=l(15),U=l(18),q=l(9),z=l(723),B=l(317),E=l(250),Q=l(49),S=l(1),W=l(4),X=l(11),Y=l(2),Z=l(22),$=l(6),ee=l(17),ne=l(10),le=l(14),ae=l(29),te=l(28),oe=l(43),de=l(41),ue=l(30),re=l(36),ce=l(39),_e=l(374),ie=l(183),be=l(34),se=l(109),fe=l(161),pe=l(45),ge=l(215),he=l(175),me=l(25),xe=l(136),ve=l(299),Ie=l(73),ke=l(287),Me=l(255),Pe=l(24),Re=l(70),ye=a._29({encapsulation:2,styles:[],data:{}}),Fe=a._27("page-addon-mod-feedback-index",i,function View_AddonModFeedbackIndexPage_Host_0(e){return a._57(0,[(e()(),a._31(0,0,null,null,1,"page-addon-mod-feedback-index",[],null,null,null,View_AddonModFeedbackIndexPage_0,ye)),a._30(1,49152,null,0,i,[Re.a],null,null)],null,null)},{},{},[]),je=l(7),Ae=l(23),Oe=l(369),we=l(370),Ve=l(372),Ce=l(371),De=l(471),Te=l(721),Ge=l(108),Le=l(26),He=l(273),Je=l(76),Ke=l(272);l.d(n,"AddonModFeedbackIndexPageModuleNgFactory",function(){return Ne});var Ne=a._28(s,[],function(e){return a._40([a._41(512,a.o,a._21,[[8,[f.a,p.a,g.a,h.a,m.a,x.a,v.a,I.a,k.a,M.a,P.a,R.a,y.a,F.a,j.a,A.a,O.a,w.a,V.a,Fe]],[3,a.o],a.K]),a._41(4608,je.m,je.l,[a.G,[2,je.w]]),a._41(4608,Ae.x,Ae.x,[]),a._41(4608,Ae.d,Ae.d,[]),a._41(4608,Oe.b,Oe.a,[]),a._41(4608,we.a,we.b,[]),a._41(4608,Ve.b,Ve.a,[]),a._41(4608,Ce.b,Ce.a,[]),a._41(4608,U.a,U.a,[De.a,Oe.b,we.a,Ve.b,Ce.b,U.b,U.c]),a._41(512,d.a,d.a,[]),a._41(512,je.b,je.b,[]),a._41(512,Ae.v,Ae.v,[]),a._41(512,Ae.i,Ae.i,[]),a._41(512,Ae.s,Ae.s,[]),a._41(512,Te.a,Te.a,[]),a._41(512,o.b,o.b,[]),a._41(512,Ge.a,Ge.a,[]),a._41(512,Le.a,Le.a,[]),a._41(512,He.a,He.a,[]),a._41(512,Je.a,Je.a,[]),a._41(512,u.a,u.a,[]),a._41(512,Te.b,Te.b,[]),a._41(512,s,s,[]),a._41(256,U.c,void 0,[]),a._41(256,U.b,void 0,[]),a._41(256,Ke.a,i,[])])})}});