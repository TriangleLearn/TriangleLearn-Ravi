webpackJsonp([32],{2108:function(l,n,e){"use strict";function View_CoreUserProfilePage_2(l){return u._57(0,[(l()(),u._31(0,0,null,null,1,"ion-icon",[["class","core-icon-foreground"],["name","create"],["role","img"]],[[2,"hide",null]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.changeProfilePicture()&&u}return u},null,null)),u._30(1,147456,null,0,F.a,[M.a,u.t,u.V],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"create")},function(l,n){l(n,0,0,u._44(n,1)._hidden)})}function View_CoreUserProfilePage_3(l){return u._57(0,[(l()(),u._31(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u._55(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.user.address)})}function View_CoreUserProfilePage_4(l){return u._57(0,[(l()(),u._31(0,0,null,null,6,"p",[["text-wrap",""]],null,null,null,null,null)),(l()(),u._55(-1,null,["\n                    "])),(l()(),u._31(2,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),u._55(3,null,["",""])),u._47(131072,T.a,[A.a,u.j]),(l()(),u._55(5,null,["","\n                    ","\n                "])),u._47(131072,T.a,[A.a,u.j])],null,function(l,n){var e=n.component;l(n,3,0,u._56(n,3,0,u._44(n,4).transform("core.user.roles")));l(n,5,0,u._56(n,5,0,u._44(n,6).transform("core.labelsep")),e.user.roles)})}function View_CoreUserProfilePage_7(l){return u._57(0,[(l()(),u._31(0,0,null,null,15,"ion-col",[["align-self-center",""],["class","col"],["text-center",""]],null,null,null,null,null)),u._30(1,16384,null,0,N.a,[],null,null),(l()(),u._55(-1,null,["\n                        "])),(l()(),u._31(3,0,null,null,11,"a",[["tappable",""]],[[8,"title",0]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.handlerClicked(e,l.context.$implicit)&&u}return u},null,null)),u._30(4,278528,null,0,S.i,[u.E,u.F,u.t,u.W],{ngClass:[0,"ngClass"]},null),u._46(5,2),u._47(131072,T.a,[A.a,u.j]),(l()(),u._55(-1,null,["\n                            "])),(l()(),u._31(8,0,null,null,1,"core-icon",[],null,null,null,W.b,W.a)),u._30(9,704512,null,0,G.a,[u.t,M.a],{name:[0,"name"]},null),(l()(),u._55(-1,null,["\n                            "])),(l()(),u._31(11,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),u._55(12,null,["",""])),u._47(131072,T.a,[A.a,u.j]),(l()(),u._55(-1,null,["\n                        "])),(l()(),u._55(-1,null,["\n                    "]))],function(l,n){l(n,4,0,l(n,5,0,"core-user-profile-handler",n.context.$implicit.class));l(n,9,0,n.context.$implicit.icon)},function(l,n){l(n,3,0,u._34(1,"",u._56(n,3,0,u._44(n,6).transform(n.context.$implicit.title)),""));l(n,12,0,u._56(n,12,0,u._44(n,13).transform(n.context.$implicit.title)))})}function View_CoreUserProfilePage_6(l){return u._57(0,[(l()(),u._31(0,0,null,null,5,"ion-row",[["class","row"],["justify-content-between",""],["no-padding",""]],null,null,null,null,null)),u._30(1,16384,null,0,Y.a,[],null,null),(l()(),u._55(-1,null,["\n                    "])),(l()(),u._26(16777216,null,null,1,null,View_CoreUserProfilePage_7)),u._30(4,802816,null,0,S.j,[u._11,u._6,u.E],{ngForOf:[0,"ngForOf"]},null),(l()(),u._55(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.communicationHandlers)},null)}function View_CoreUserProfilePage_8(l){return u._57(0,[(l()(),u._31(0,0,null,null,5,"ion-col",[["class","core-loading-handlers col"],["text-center",""]],null,null,null,null,null)),u._30(1,16384,null,0,N.a,[],null,null),(l()(),u._55(-1,null,["\n                        "])),(l()(),u._31(3,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,J.b,J.a)),u._30(4,114688,null,0,K.a,[M.a,u.t,u.V],null,null),(l()(),u._55(-1,null,["\n                    "]))],function(l,n){l(n,4,0)},function(l,n){l(n,3,0,u._44(n,4)._paused)})}function View_CoreUserProfilePage_5(l){return u._57(0,[(l()(),u._31(0,0,null,null,12,"ion-grid",[["class","core-user-communication-handlers grid"]],null,null,null,null,null)),u._30(1,16384,null,0,q.a,[],null,null),(l()(),u._55(-1,null,["\n                "])),(l()(),u._26(16777216,null,null,1,null,View_CoreUserProfilePage_6)),u._30(4,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,null,["\n                "])),(l()(),u._31(6,0,null,null,5,"ion-row",[["class","row"],["no-padding",""]],null,null,null,null,null)),u._30(7,16384,null,0,Y.a,[],null,null),(l()(),u._55(-1,null,["\n                    "])),(l()(),u._26(16777216,null,null,1,null,View_CoreUserProfilePage_8)),u._30(10,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,null,["\n                "])),(l()(),u._55(-1,null,["\n            "]))],function(l,n){var e=n.component;l(n,4,0,e.communicationHandlers&&e.communicationHandlers.length);l(n,10,0,e.isLoadingHandlers)},null)}function View_CoreUserProfilePage_9(l){return u._57(0,[(l()(),u._31(0,0,null,null,9,"ion-item",[["class","core-loading-handlers item item-block"],["text-center",""]],null,null,null,z.b,z.a)),u._30(1,1097728,null,3,B.a,[Q.a,M.a,u.t,u.V,[2,X.a]],null,null),u._52(335544320,7,{contentLabel:0}),u._52(603979776,8,{_buttons:1}),u._52(603979776,9,{_icons:1}),u._30(5,16384,null,0,Z.a,[],null,null),(l()(),u._55(-1,2,["\n                "])),(l()(),u._31(7,0,null,2,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,J.b,J.a)),u._30(8,114688,null,0,K.a,[M.a,u.t,u.V],null,null),(l()(),u._55(-1,2,["\n            "]))],function(l,n){l(n,8,0)},function(l,n){l(n,7,0,u._44(n,8)._paused)})}function View_CoreUserProfilePage_11(l){return u._57(0,[(l()(),u._31(0,0,null,null,1,"core-icon",[["item-start",""]],null,null,null,W.b,W.a)),u._30(1,704512,null,0,G.a,[u.t,M.a],{name:[0,"name"]},null)],function(l,n){l(n,1,0,n.parent.context.$implicit.icon)},null)}function View_CoreUserProfilePage_10(l){return u._57(0,[(l()(),u._31(0,0,null,null,16,"a",[["class","item item-block"],["ion-item",""],["text-wrap",""]],[[8,"hidden",0],[8,"title",0]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.handlerClicked(e,l.context.$implicit)&&u}return u},z.b,z.a)),u._30(1,278528,null,0,S.i,[u.E,u.F,u.t,u.W],{ngClass:[0,"ngClass"]},null),u._46(2,2),u._30(3,1097728,null,3,B.a,[Q.a,M.a,u.t,u.V,[2,X.a]],null,null),u._52(335544320,10,{contentLabel:0}),u._52(603979776,11,{_buttons:1}),u._52(603979776,12,{_icons:1}),u._30(7,16384,null,0,Z.a,[],null,null),u._47(131072,T.a,[A.a,u.j]),(l()(),u._55(-1,2,["\n                "])),(l()(),u._26(16777216,null,0,1,null,View_CoreUserProfilePage_11)),u._30(11,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,2,["\n                "])),(l()(),u._31(13,0,null,2,2,"h2",[],null,null,null,null,null)),(l()(),u._55(14,null,["",""])),u._47(131072,T.a,[A.a,u.j]),(l()(),u._55(-1,2,["\n            "]))],function(l,n){l(n,1,0,l(n,2,0,"core-user-profile-handler",n.context.$implicit.class));l(n,11,0,n.context.$implicit.icon)},function(l,n){l(n,0,0,n.context.$implicit.hidden,u._34(1,"",u._56(n,0,1,u._44(n,8).transform(n.context.$implicit.title)),""));l(n,14,0,u._56(n,14,0,u._44(n,15).transform(n.context.$implicit.title)))})}function View_CoreUserProfilePage_14(l){return u._57(0,[(l()(),u._31(0,0,null,null,1,"core-icon",[["start",""]],null,null,null,W.b,W.a)),u._30(1,704512,null,0,G.a,[u.t,M.a],{name:[0,"name"]},null)],function(l,n){l(n,1,0,n.parent.context.$implicit.icon)},null)}function View_CoreUserProfilePage_15(l){return u._57(0,[(l()(),u._31(0,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,J.b,J.a)),u._30(1,114688,null,0,K.a,[M.a,u.t,u.V],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,u._44(n,1)._paused)})}function View_CoreUserProfilePage_13(l){return u._57(0,[(l()(),u._31(0,0,null,null,15,"button",[["block",""],["icon-start",""],["ion-button",""],["outline",""]],[[8,"hidden",0],[8,"title",0],[8,"disabled",0]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.handlerClicked(e,l.context.$implicit)&&u}return u},ll.b,ll.a)),u._30(1,278528,null,0,S.i,[u.E,u.F,u.t,u.W],{ngClass:[0,"ngClass"]},null),u._46(2,2),u._30(3,1097728,[[14,4]],0,nl.a,[[8,""],M.a,u.t,u.V],{outline:[0,"outline"],block:[1,"block"]},null),u._47(131072,T.a,[A.a,u.j]),(l()(),u._55(-1,0,["\n                    "])),(l()(),u._26(16777216,null,0,1,null,View_CoreUserProfilePage_14)),u._30(7,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,0,["\n                    "])),(l()(),u._31(9,0,null,0,2,"span",[],null,null,null,null,null)),(l()(),u._55(10,null,["",""])),u._47(131072,T.a,[A.a,u.j]),(l()(),u._55(-1,0,["\n                    "])),(l()(),u._26(16777216,null,0,1,null,View_CoreUserProfilePage_15)),u._30(14,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,0,["\n                "]))],function(l,n){l(n,1,0,l(n,2,0,"core-user-profile-handler",n.context.$implicit.class));l(n,3,0,"","");l(n,7,0,n.context.$implicit.icon);l(n,14,0,n.context.$implicit.spinner)},function(l,n){l(n,0,0,n.context.$implicit.hidden,u._34(1,"",u._56(n,0,1,u._44(n,4).transform(n.context.$implicit.title)),""),n.context.$implicit.spinner);l(n,10,0,u._56(n,10,0,u._44(n,11).transform(n.context.$implicit.title)))})}function View_CoreUserProfilePage_12(l){return u._57(0,[(l()(),u._31(0,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,z.b,z.a)),u._30(1,1097728,null,3,B.a,[Q.a,M.a,u.t,u.V,[2,X.a]],null,null),u._52(335544320,13,{contentLabel:0}),u._52(603979776,14,{_buttons:1}),u._52(603979776,15,{_icons:1}),u._30(5,16384,null,0,Z.a,[],null,null),(l()(),u._55(-1,2,["\n                "])),(l()(),u._26(16777216,null,2,1,null,View_CoreUserProfilePage_13)),u._30(8,802816,null,0,S.j,[u._11,u._6,u.E],{ngForOf:[0,"ngForOf"]},null),(l()(),u._55(-1,2,["\n            "]))],function(l,n){l(n,8,0,n.component.actionHandlers)},null)}function View_CoreUserProfilePage_1(l){return u._57(0,[(l()(),u._31(0,0,null,null,55,"ion-list",[],null,null,null,null,null)),u._30(1,16384,null,0,el.a,[M.a,u.t,u.V,ul.a,rl.l,tl.a],null,null),(l()(),u._55(-1,null,["\n            "])),(l()(),u._31(3,0,null,null,23,"ion-item",[["class","item item-block"],["text-center",""]],null,null,null,z.b,z.a)),u._30(4,1097728,null,3,B.a,[Q.a,M.a,u.t,u.V,[2,X.a]],null,null),u._52(335544320,1,{contentLabel:0}),u._52(603979776,2,{_buttons:1}),u._52(603979776,3,{_icons:1}),u._30(8,16384,null,0,Z.a,[],null,null),(l()(),u._55(-1,2,["\n                "])),(l()(),u._31(10,0,null,2,6,"ion-avatar",[["class","item-avatar-center"],["core-user-avatar",""]],null,null,null,il.b,il.a)),u._30(11,770048,null,0,ol.a,[al.a,c.a,sl.b,_l.b,_.b,[2,p.a]],{user:[0,"user"],linkProfile:[1,"linkProfile"],userId:[2,"userId"],checkOnline:[3,"checkOnline"]},null),u._30(12,16384,null,0,cl.a,[],null,null),(l()(),u._55(-1,0,["\n                    "])),(l()(),u._26(16777216,null,0,1,null,View_CoreUserProfilePage_2)),u._30(15,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,0,["\n                "])),(l()(),u._55(-1,2,["\n                "])),(l()(),u._31(18,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),u._55(19,null,["",""])),(l()(),u._55(-1,2,["\n                "])),(l()(),u._26(16777216,null,2,1,null,View_CoreUserProfilePage_3)),u._30(22,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,2,["\n                "])),(l()(),u._26(16777216,null,2,1,null,View_CoreUserProfilePage_4)),u._30(25,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,2,["\n            "])),(l()(),u._55(-1,null,["\n\n            "])),(l()(),u._26(16777216,null,null,1,null,View_CoreUserProfilePage_5)),u._30(29,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,null,["\n\n            "])),(l()(),u._31(31,0,null,null,14,"a",[["class","core-user-profile-handler item item-block"],["ion-item",""],["text-wrap",""]],[[8,"title",0]],[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==l.component.openUserDetails()&&u}return u},z.b,z.a)),u._30(32,1097728,null,3,B.a,[Q.a,M.a,u.t,u.V,[2,X.a]],null,null),u._52(335544320,4,{contentLabel:0}),u._52(603979776,5,{_buttons:1}),u._52(603979776,6,{_icons:1}),u._30(36,16384,null,0,Z.a,[],null,null),u._47(131072,T.a,[A.a,u.j]),(l()(),u._55(-1,2,["\n                "])),(l()(),u._31(39,0,null,0,1,"ion-icon",[["item-start",""],["name","person"],["role","img"]],[[2,"hide",null]],null,null,null,null)),u._30(40,147456,[[6,4]],0,F.a,[M.a,u.t,u.V],{name:[0,"name"]},null),(l()(),u._55(-1,2,["\n                "])),(l()(),u._31(42,0,null,2,2,"h2",[],null,null,null,null,null)),(l()(),u._55(43,null,["",""])),u._47(131072,T.a,[A.a,u.j]),(l()(),u._55(-1,2,["\n            "])),(l()(),u._55(-1,null,["\n            "])),(l()(),u._26(16777216,null,null,1,null,View_CoreUserProfilePage_9)),u._30(48,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,null,["\n\n            "])),(l()(),u._26(16777216,null,null,1,null,View_CoreUserProfilePage_10)),u._30(51,802816,null,0,S.j,[u._11,u._6,u.E],{ngForOf:[0,"ngForOf"]},null),(l()(),u._55(-1,null,["\n\n            "])),(l()(),u._26(16777216,null,null,1,null,View_CoreUserProfilePage_12)),u._30(54,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,null,["\n        "]))],function(l,n){var e=n.component;l(n,11,0,e.user,!1,e.user.id,!0);l(n,15,0,e.canChangeProfilePicture);l(n,22,0,e.user.address);l(n,25,0,e.user.roles);l(n,29,0,e.communicationHandlers&&e.communicationHandlers.length||e.isLoadingHandlers);l(n,40,0,"person");l(n,48,0,e.isLoadingHandlers);l(n,51,0,e.newPageHandlers);l(n,54,0,e.actionHandlers&&e.actionHandlers.length)},function(l,n){l(n,19,0,n.component.user.fullname);l(n,31,0,u._34(1,"",u._56(n,31,0,u._44(n,37).transform("core.user.details")),""));l(n,39,0,u._44(n,40)._hidden);l(n,43,0,u._56(n,43,0,u._44(n,44).transform("core.user.details")))})}function View_CoreUserProfilePage_16(l){return u._57(0,[(l()(),u._31(0,0,null,null,2,"core-empty-box",[["icon","person"]],null,null,null,fl.b,fl.a)),u._30(1,49152,null,0,dl.a,[],{message:[0,"message"],icon:[1,"icon"]},null),u._47(131072,T.a,[A.a,u.j])],function(l,n){l(n,1,0,u._56(n,1,0,u._44(n,2).transform("core.user.detailsnotavailable")),"person")},null)}function View_CoreUserProfilePage_17(l){return u._57(0,[(l()(),u._31(0,0,null,null,2,"core-empty-box",[["icon","person"]],null,null,null,fl.b,fl.a)),u._30(1,49152,null,0,dl.a,[],{message:[0,"message"],icon:[1,"icon"]},null),u._47(131072,T.a,[A.a,u.j])],function(l,n){l(n,1,0,u._56(n,1,0,u._44(n,2).transform("core.userdeleted")),"person")},null)}function View_CoreUserProfilePage_18(l){return u._57(0,[(l()(),u._31(0,0,null,null,2,"core-empty-box",[["icon","person"]],null,null,null,fl.b,fl.a)),u._30(1,49152,null,0,dl.a,[],{message:[0,"message"],icon:[1,"icon"]},null),u._47(131072,T.a,[A.a,u.j])],function(l,n){l(n,1,0,u._56(n,1,0,u._44(n,2).transform("core.notenrolledprofile")),"person")},null)}function View_CoreUserProfilePage_0(l){return u._57(0,[(l()(),u._31(0,0,null,null,11,"ion-header",[],null,null,null,null,null)),u._30(1,16384,null,0,gl.a,[M.a,u.t,u.V,[2,pl.a]],null,null),(l()(),u._55(-1,null,["\n    "])),(l()(),u._31(3,0,null,null,7,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Pl.b,Pl.a)),u._30(4,49152,null,0,hl.a,[ml.a,[2,pl.a],[2,al.a],M.a,u.t,u.V],null,null),u._30(5,212992,null,0,bl.a,[hl.a,ul.a,A.a,_.b],null,null),(l()(),u._55(-1,3,["\n        "])),(l()(),u._31(7,0,null,3,2,"ion-title",[],null,null,null,Il.b,Il.a)),u._30(8,49152,null,0,Ul.a,[M.a,u.t,u.V,[2,Cl.a],[2,hl.a]],null,null),(l()(),u._55(9,0,["",""])),(l()(),u._55(-1,3,["\n    "])),(l()(),u._55(-1,null,["\n"])),(l()(),u._55(-1,null,["\n"])),(l()(),u._31(13,0,null,null,26,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,vl.b,vl.a)),u._30(14,4374528,null,0,wl.a,[M.a,ul.a,tl.a,u.t,u.V,ml.a,Vl.a,u.M,[2,pl.a],[2,al.a]],null,null),(l()(),u._55(-1,1,["\n    "])),(l()(),u._31(16,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(l,n,e){var u=!0;if("ionRefresh"===n){u=!1!==l.component.refreshUser(e)&&u}return u},null,null)),u._30(17,212992,null,0,kl.a,[ul.a,wl.a,u.M,rl.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(l()(),u._55(-1,null,["\n        "])),(l()(),u._31(19,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,yl.b,yl.a)),u._30(20,114688,null,0,El.a,[kl.a,M.a],{pullingText:[0,"pullingText"]},null),u._47(131072,T.a,[A.a,u.j]),(l()(),u._55(-1,null,["\n    "])),(l()(),u._55(-1,1,["\n    "])),(l()(),u._31(24,0,null,1,14,"core-loading",[],null,null,null,xl.b,xl.a)),u._30(25,638976,null,0,Hl.a,[A.a,u.t,_.b,sl.b],{hideUntil:[0,"hideUntil"]},null),(l()(),u._55(-1,0,["\n        "])),(l()(),u._26(16777216,null,0,1,null,View_CoreUserProfilePage_1)),u._30(28,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,0,["\n        "])),(l()(),u._26(16777216,null,0,1,null,View_CoreUserProfilePage_16)),u._30(31,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,0,["\n\n        "])),(l()(),u._26(16777216,null,0,1,null,View_CoreUserProfilePage_17)),u._30(34,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,0,["\n        "])),(l()(),u._26(16777216,null,0,1,null,View_CoreUserProfilePage_18)),u._30(37,16384,null,0,S.k,[u._11,u._6],{ngIf:[0,"ngIf"]},null),(l()(),u._55(-1,0,["\n    "])),(l()(),u._55(-1,1,["\n"]))],function(l,n){var e=n.component;l(n,5,0);l(n,17,0,e.userLoaded);l(n,20,0,u._34(1,"",u._56(n,20,0,u._44(n,21).transform("core.pulltorefresh")),""));l(n,25,0,e.userLoaded);l(n,28,0,e.user&&!e.isDeleted&&e.isEnrolled);l(n,31,0,!e.user&&!e.isDeleted&&e.isEnrolled);l(n,34,0,e.isDeleted);l(n,37,0,!e.isEnrolled)},function(l,n){var e=n.component;l(n,3,0,u._44(n,4)._hidden,u._44(n,4)._sbPadding);l(n,9,0,e.title);l(n,13,0,u._44(n,14).statusbarPadding,u._44(n,14)._hasRefresher);l(n,16,0,"inactive"!==u._44(n,17).state,u._44(n,17)._top);l(n,19,0,u._44(n,20).r.state)})}Object.defineProperty(n,"__esModule",{value:!0});var u=e(0),r=e(5),t=e(3),i=e(46),o=e(741),a=e(4),s=e(51),_=e(9),c=e(1),f=e(67),d=e(152),g=e(107),p=e(28),P=this&&this.__decorate||function(l,n,e,u){var r,t=arguments.length,i=t<3?n:null===u?u=Object.getOwnPropertyDescriptor(n,e):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(l,n,e,u);else for(var o=l.length-1;o>=0;o--)(r=l[o])&&(i=(t<3?r(i):t>3?r(n,e,i):r(n,e))||i);return t>3&&i&&Object.defineProperty(n,e,i),i},h=this&&this.__metadata||function(l,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,n)},m=this&&this.__param||function(l,n){return function(e,u){n(e,u,l)}},b=function(){function CoreUserProfilePage(l,n,e,u,r,t,o,a,s,_,c,f,d){var g=this;this.userProvider=n,this.userHelper=e,this.domUtils=u,this.translate=r,this.eventsProvider=t,this.coursesProvider=o,this.sitesProvider=a,this.mimetypeUtils=s,this.fileUploaderHelper=_,this.userDelegate=c,this.navCtrl=f,this.svComponent=d,this.userLoaded=!1,this.isLoadingHandlers=!1,this.isDeleted=!1,this.isEnrolled=!0,this.canChangeProfilePicture=!1,this.actionHandlers=[],this.newPageHandlers=[],this.communicationHandlers=[],this.userId=l.get("userId"),this.courseId=l.get("courseId"),this.site=this.sitesProvider.getCurrentSite(),this.canChangeProfilePicture=(!this.courseId||this.courseId==this.site.getSiteHomeId())&&this.userId==this.site.getUserId()&&this.site.canUploadFiles()&&this.site.wsAvailable("core_user_update_picture")&&!this.userProvider.isUpdatePictureDisabledInSite(this.site),this.obsProfileRefreshed=t.on(i.a.PROFILE_REFRESHED,function(l){g.user&&void 0!==l.user&&(g.user.email=l.user.email,g.user.address=g.userHelper.formatAddress("",l.user.city,l.user.country))},a.getCurrentSiteId())}return CoreUserProfilePage.prototype.ionViewDidLoad=function(){var l=this;this.fetchUser().then(function(){return l.userProvider.logView(l.userId,l.courseId,l.user.fullname).catch(function(n){l.isDeleted="userdeleted"===n.errorcode,l.isEnrolled="notenrolledprofile"!==n.errorcode})}).finally(function(){l.userLoaded=!0})},CoreUserProfilePage.prototype.fetchUser=function(){var l=this;return this.userProvider.getProfile(this.userId,this.courseId).then(function(n){if(n.address=l.userHelper.formatAddress("",n.city,n.country),n.roles=l.userHelper.formatRoleList(n.roles),l.user=n,l.title=n.fullname,l.subscription&&l.subscription.unsubscribe(),l.subscription=l.userDelegate.getProfileHandlersFor(n,l.courseId).subscribe(function(e){l.actionHandlers=[],l.newPageHandlers=[],l.communicationHandlers=[],e.forEach(function(n){switch(n.type){case g.a.TYPE_COMMUNICATION:l.communicationHandlers.push(n.data);break;case g.a.TYPE_ACTION:l.actionHandlers.push(n.data);break;case g.a.TYPE_NEW_PAGE:default:l.newPageHandlers.push(n.data)}}),l.isLoadingHandlers=!l.userDelegate.areHandlersLoaded(n.id)}),l.userId==l.site.getUserId()&&n.profileimageurl!=l.site.getInfo().userpictureurl)return l.sitesProvider.updateSiteInfo(l.site.getId()).then(function(){if(n.profileimageurl!=l.site.getInfo().userpictureurl)return l.refreshUser();l.eventsProvider.trigger(i.a.PROFILE_PICTURE_UPDATED,{userId:l.userId,picture:n.profileimageurl},l.site.getId())},function(){l.eventsProvider.trigger(i.a.PROFILE_PICTURE_UPDATED,{userId:l.userId,picture:n.profileimageurl},l.site.getId())})}).catch(function(n){n&&l.domUtils.showErrorModal(n)})},CoreUserProfilePage.prototype.changeProfilePicture=function(){var l=this,n=this.translate.instant("core.user.newpicture"),e=this.mimetypeUtils.getGroupMimeInfo("image","mimetypes");return this.fileUploaderHelper.selectAndUploadFile(-1,n,e).then(function(n){var e=l.domUtils.showModalLoading("core.sending",!0);return l.userProvider.changeProfilePicture(n.itemid,l.userId).then(function(n){l.eventsProvider.trigger(i.a.PROFILE_PICTURE_UPDATED,{userId:l.userId,picture:n},l.site.getId()),l.sitesProvider.updateSiteInfo(l.site.getId()),l.refreshUser()}).finally(function(){e.dismiss()})}).catch(function(n){n&&l.domUtils.showErrorModal(n)})},CoreUserProfilePage.prototype.refreshUser=function(l){var n=this,e=[];e.push(this.userProvider.invalidateUserCache(this.userId)),e.push(this.coursesProvider.invalidateUserNavigationOptions()),e.push(this.coursesProvider.invalidateUserAdministrationOptions()),Promise.all(e).finally(function(){n.fetchUser().finally(function(){n.eventsProvider.trigger(i.a.PROFILE_REFRESHED,{courseId:n.courseId,userId:n.userId,user:n.user},n.site.getId()),l&&l.complete()})})},CoreUserProfilePage.prototype.openUserDetails=function(){(this.svComponent?this.svComponent.getMasterNav():this.navCtrl).push("CoreUserAboutPage",{courseId:this.courseId,userId:this.userId})},CoreUserProfilePage.prototype.handlerClicked=function(l,n){var e=this.svComponent?this.svComponent.getMasterNav():this.navCtrl;n.action(l,e,this.user,this.courseId)},CoreUserProfilePage.prototype.ngOnDestroy=function(){this.subscription&&this.subscription.unsubscribe(),this.obsProfileRefreshed&&this.obsProfileRefreshed.off()},CoreUserProfilePage=P([Object(u.m)({selector:"page-core-user-profile",templateUrl:"profile.html"}),m(12,Object(u.N)()),h("design:paramtypes",[r.t,i.a,o.a,a.a,t.c,_.b,s.a,c.a,f.a,d.a,g.a,r.s,p.a])],CoreUserProfilePage)}(),I=e(32),U=e(26),C=this&&this.__decorate||function(l,n,e,u){var r,t=arguments.length,i=t<3?n:null===u?u=Object.getOwnPropertyDescriptor(n,e):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(l,n,e,u);else for(var o=l.length-1;o>=0;o--)(r=l[o])&&(i=(t<3?r(i):t>3?r(n,e,i):r(n,e))||i);return t>3&&i&&Object.defineProperty(n,e,i),i},v=function(){function CoreUserProfilePageModule(){}return CoreUserProfilePageModule=C([Object(u.I)({declarations:[b],imports:[I.a,U.a,r.l.forChild(b),t.b.forChild()]})],CoreUserProfilePageModule)}(),w=e(1527),V=e(1528),k=e(1529),y=e(1530),E=e(1531),x=e(1532),H=e(1533),R=e(1534),j=e(1535),O=e(1536),D=e(1537),L=e(1538),$=e(1539),F=e(48),M=e(8),T=e(25),A=e(18),N=e(121),S=e(7),W=e(84),G=e(77),Y=e(122),J=e(124),K=e(104),q=e(166),z=e(31),B=e(21),Q=e(19),X=e(27),Z=e(33),ll=e(47),nl=e(44),el=e(89),ul=e(15),rl=e(45),tl=e(34),il=e(216),ol=e(184),al=e(20),sl=e(2),_l=e(10),cl=e(162),fl=e(127),dl=e(118),gl=e(373),pl=e(40),Pl=e(722),hl=e(214),ml=e(35),bl=e(472),Il=e(723),Ul=e(317),Cl=e(250),vl=e(183),wl=e(29),Vl=e(109),kl=e(161),yl=e(215),El=e(175),xl=e(56),Hl=e(53),Rl=e(70),jl=u._29({encapsulation:2,styles:[],data:{}}),Ol=u._27("page-core-user-profile",b,function View_CoreUserProfilePage_Host_0(l){return u._57(0,[(l()(),u._31(0,0,null,null,1,"page-core-user-profile",[],null,null,null,View_CoreUserProfilePage_0,jl)),u._30(1,180224,null,0,b,[Rl.a,i.a,o.a,a.a,A.a,_.b,s.a,c.a,f.a,d.a,g.a,al.a,[2,p.a]],null,null)],null,null)},{},{},[]),Dl=e(23),Ll=e(369),$l=e(370),Fl=e(372),Ml=e(371),Tl=e(471),Al=e(721),Nl=e(108),Sl=e(272);e.d(n,"CoreUserProfilePageModuleNgFactory",function(){return Wl});var Wl=u._28(v,[],function(l){return u._40([u._41(512,u.o,u._21,[[8,[w.a,V.a,k.a,y.a,E.a,x.a,H.a,R.a,j.a,O.a,D.a,L.a,$.a,Ol]],[3,u.o],u.K]),u._41(4608,S.m,S.l,[u.G,[2,S.w]]),u._41(4608,Dl.x,Dl.x,[]),u._41(4608,Dl.d,Dl.d,[]),u._41(4608,Ll.b,Ll.a,[]),u._41(4608,$l.a,$l.b,[]),u._41(4608,Fl.b,Fl.a,[]),u._41(4608,Ml.b,Ml.a,[]),u._41(4608,A.a,A.a,[Tl.a,Ll.b,$l.a,Fl.b,Ml.b,A.b,A.c]),u._41(512,I.a,I.a,[]),u._41(512,S.b,S.b,[]),u._41(512,Dl.v,Dl.v,[]),u._41(512,Dl.i,Dl.i,[]),u._41(512,Dl.s,Dl.s,[]),u._41(512,Al.a,Al.a,[]),u._41(512,t.b,t.b,[]),u._41(512,Nl.a,Nl.a,[]),u._41(512,U.a,U.a,[]),u._41(512,Al.b,Al.b,[]),u._41(512,v,v,[]),u._41(256,A.c,void 0,[]),u._41(256,A.b,void 0,[]),u._41(256,Sl.a,b,[])])})}});