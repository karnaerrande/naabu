import{S as Ne,i as Pe,s as Ae,l as ge,f as M,d,e as h,t as V,c as _,a as p,g as N,b as i,H as r,k as B,n as j,a7 as Q,I as W,J as ce,a9 as Ie,K as ke,L as we,O as de,h as he,Y as Le,Z as Te,j as Be,m as je,o as Oe,_ as De,r as Ye,u as ye,w as Ge,x as ve,v as Xe,M as st,A as nt,ae as at,af as rt,ag as it,G as Re,a3 as ct,a4 as Fe,a5 as ut}from"./vendor-9a64f523.js";/* empty css                  */import{s as dt}from"./stores-bd9665ba.js";import{g as ft,a as mt}from"./algolia-177da4a5.js";import{D as ht}from"./dialog-c021e43e.js";import{a as _t}from"./helper-69e97bf9.js";import{f as pt}from"./helper-36963086.js";function Me(s,e,t){const l=s.slice();return l[17]=e[t],l[18]=e,l[19]=t,l}function Ce(s,e,t){const l=s.slice();return l[20]=e[t],l[19]=t,l}function bt(s){let e,t,l=s[20].endLocationIndex+1+"",a,n,o=s[20].endLocationName+"",f,c,u,v;function b(){return s[11](s[19])}return{c(){e=h("button"),t=V("L"),a=V(l),n=V(" - "),f=V(o),this.h()},l(y){e=_(y,"BUTTON",{"data-cy":!0,class:!0});var m=p(e);t=N(m,"L"),a=N(m,l),n=N(m," - "),f=N(m,o),m.forEach(d),this.h()},h(){i(e,"data-cy",c="path-to-location-button-"+(s[20].endLocationIndex+1)),i(e,"class","outline-none active:outline-none focus:outline-none border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(y,m){M(y,e,m),r(e,t),r(e,a),r(e,n),r(e,f),u||(v=W(e,"click",ce(b)),u=!0)},p(y,m){s=y,m&1&&l!==(l=s[20].endLocationIndex+1+"")&&he(a,l),m&1&&o!==(o=s[20].endLocationName+"")&&he(f,o),m&1&&c!==(c="path-to-location-button-"+(s[20].endLocationIndex+1))&&i(e,"data-cy",c)},d(y){y&&d(e),u=!1,v()}}}function gt(s){let e,t,l=s[20].endLocationIndex+1+"",a,n,o,f;function c(){return s[10](s[19])}return{c(){e=h("button"),t=V("L"),a=V(l),this.h()},l(u){e=_(u,"BUTTON",{"data-cy":!0,class:!0});var v=p(e);t=N(v,"L"),a=N(v,l),v.forEach(d),this.h()},h(){i(e,"data-cy",n="path-to-location-button-"+(s[20].endLocationIndex+1)),i(e,"class","outline-none active:outline-none focus:outline-none border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(u,v){M(u,e,v),r(e,t),r(e,a),o||(f=W(e,"click",ce(c)),o=!0)},p(u,v){s=u,v&1&&l!==(l=s[20].endLocationIndex+1+"")&&he(a,l),v&1&&n!==(n="path-to-location-button-"+(s[20].endLocationIndex+1))&&i(e,"data-cy",n)},d(u){u&&d(e),o=!1,f()}}}function We(s){let e;function t(n,o){return n[1]!==n[19]?gt:bt}let l=t(s),a=l(s);return{c(){a.c(),e=ge()},l(n){a.l(n),e=ge()},m(n,o){a.m(n,o),M(n,e,o)},p(n,o){l===(l=t(n))&&a?a.p(n,o):(a.d(1),a=l(n),a&&(a.c(),a.m(e.parentNode,e)))},d(n){a.d(n),n&&d(e)}}}function qe(s){let e,t;return{c(){e=h("div"),t=V("Geen paden gevonden voor start locatie"),this.h()},l(l){e=_(l,"DIV",{class:!0});var a=p(e);t=N(a,"Geen paden gevonden voor start locatie"),a.forEach(d),this.h()},h(){i(e,"class","mt-6 mb-6")},m(l,a){M(l,e,a),r(e,t)},d(l){l&&d(e)}}}function Ke(s){let e,t,l,a,n,o,f,c,u,v,b,y,m,w,L,X,G,R,q=s[2].points,k=[];for(let E=0;E<q.length;E+=1)k[E]=He(Me(s,q,E));return{c(){for(let E=0;E<k.length;E+=1)k[E].c();e=B(),t=h("div"),l=h("label"),a=V("X"),n=B(),o=h("div"),f=h("input"),c=B(),u=h("label"),v=V("Y"),b=B(),y=h("div"),m=h("input"),w=B(),L=h("button"),X=V("Punt toevoegen"),this.h()},l(E){for(let Y=0;Y<k.length;Y+=1)k[Y].l(E);e=j(E),t=_(E,"DIV",{class:!0});var P=p(t);l=_(P,"LABEL",{for:!0,class:!0});var O=p(l);a=N(O,"X"),O.forEach(d),n=j(P),o=_(P,"DIV",{class:!0});var K=p(o);f=_(K,"INPUT",{type:!0,id:!0,name:!0,class:!0}),K.forEach(d),c=j(P),u=_(P,"LABEL",{for:!0,class:!0});var J=p(u);v=N(J,"Y"),J.forEach(d),b=j(P),y=_(P,"DIV",{class:!0});var S=p(y);m=_(S,"INPUT",{type:!0,id:!0,name:!0,class:!0}),S.forEach(d),w=j(P),L=_(P,"BUTTON",{"data-cy":!0,class:!0});var U=p(L);X=N(U,"Punt toevoegen"),U.forEach(d),P.forEach(d),this.h()},h(){i(l,"for","pointX"),i(l,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),i(f,"type","number"),i(f,"id","pointX"),i(f,"name","pointX"),i(f,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),i(o,"class","mt-1 sm:mt-0 sm:col-span-2"),i(u,"for","pointY"),i(u,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),i(m,"type","number"),i(m,"id","pointY"),i(m,"name","pointY"),i(m,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),i(y,"class","mt-1 sm:mt-0 sm:col-span-2"),i(L,"data-cy","add-path-point-button"),i(L,"class","mb-1 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),i(t,"class","mt-6 sm:mt-5 space-y-6 sm:space-y-5")},m(E,P){for(let O=0;O<k.length;O+=1)k[O].m(E,P);M(E,e,P),M(E,t,P),r(t,l),r(l,a),r(t,n),r(t,o),r(o,f),Q(f,s[3]),r(t,c),r(t,u),r(u,v),r(t,b),r(t,y),r(y,m),Q(m,s[4]),r(t,w),r(t,L),r(L,X),G||(R=[W(f,"input",s[15]),W(m,"input",s[16]),W(L,"click",ce(s[6]))],G=!0)},p(E,P){if(P&36){q=E[2].points;let O;for(O=0;O<q.length;O+=1){const K=Me(E,q,O);k[O]?k[O].p(K,P):(k[O]=He(K),k[O].c(),k[O].m(e.parentNode,e))}for(;O<k.length;O+=1)k[O].d(1);k.length=q.length}P&8&&Ie(f.value)!==E[3]&&Q(f,E[3]),P&16&&Ie(m.value)!==E[4]&&Q(m,E[4])},d(E){ke(k,E),E&&d(e),E&&d(t),G=!1,we(R)}}}function vt(s){let e,t,l,a,n,o,f,c,u;function v(){s[12].call(t,s[18],s[19])}function b(){s[13].call(a,s[18],s[19])}function y(){return s[14](s[19])}return{c(){e=h("div"),t=h("input"),l=B(),a=h("input"),n=B(),o=h("button"),f=V("Remove"),this.h()},l(m){e=_(m,"DIV",{});var w=p(e);t=_(w,"INPUT",{"data-cy":!0,type:!0}),l=j(w),a=_(w,"INPUT",{"data-cy":!0,type:!0}),n=j(w),o=_(w,"BUTTON",{"data-cy":!0,class:!0});var L=p(o);f=N(L,"Remove"),L.forEach(d),w.forEach(d),this.h()},h(){i(t,"data-cy","path-input-x-"+s[19]),i(t,"type","text"),i(a,"data-cy","path-input-y-"+s[19]),i(a,"type","text"),i(o,"data-cy","remove-path-point-button-"+s[19]),i(o,"class","mb-1 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")},m(m,w){M(m,e,w),r(e,t),Q(t,s[17][1]),r(e,l),r(e,a),Q(a,s[17][0]),r(e,n),r(e,o),r(o,f),c||(u=[W(t,"input",v),W(a,"input",b),W(o,"click",ce(y))],c=!0)},p(m,w){s=m,w&4&&t.value!==s[17][1]&&Q(t,s[17][1]),w&4&&a.value!==s[17][0]&&Q(a,s[17][0])},d(m){m&&d(e),c=!1,we(u)}}}function yt(s){let e,t,l=s[17][1]+"",a,n,o=s[17][0]+"",f;return{c(){e=h("div"),t=V("Eind locatie: "),a=V(l),n=V(" - "),f=V(o),this.h()},l(c){e=_(c,"DIV",{"data-cy":!0});var u=p(e);t=N(u,"Eind locatie: "),a=N(u,l),n=N(u," - "),f=N(u,o),u.forEach(d),this.h()},h(){i(e,"data-cy","end-location-point")},m(c,u){M(c,e,u),r(e,t),r(e,a),r(e,n),r(e,f)},p(c,u){u&4&&l!==(l=c[17][1]+"")&&he(a,l),u&4&&o!==(o=c[17][0]+"")&&he(f,o)},d(c){c&&d(e)}}}function kt(s){let e,t,l=s[17][1]+"",a,n,o=s[17][0]+"",f;return{c(){e=h("div"),t=V("Start locatie: "),a=V(l),n=V(" - "),f=V(o),this.h()},l(c){e=_(c,"DIV",{"data-cy":!0});var u=p(e);t=N(u,"Start locatie: "),a=N(u,l),n=N(u," - "),f=N(u,o),u.forEach(d),this.h()},h(){i(e,"data-cy","start-location-point")},m(c,u){M(c,e,u),r(e,t),r(e,a),r(e,n),r(e,f)},p(c,u){u&4&&l!==(l=c[17][1]+"")&&he(a,l),u&4&&o!==(o=c[17][0]+"")&&he(f,o)},d(c){c&&d(e)}}}function He(s){let e;function t(n,o){return n[19]==0?kt:n[19]==n[2].points.length-1?yt:vt}let l=t(s),a=l(s);return{c(){a.c(),e=ge()},l(n){a.l(n),e=ge()},m(n,o){a.m(n,o),M(n,e,o)},p(n,o){l===(l=t(n))&&a?a.p(n,o):(a.d(1),a=l(n),a&&(a.c(),a.m(e.parentNode,e)))},d(n){a.d(n),n&&d(e)}}}function Et(s){let e,t,l,a,n,o,f=s[0],c=[];for(let b=0;b<f.length;b+=1)c[b]=We(Ce(s,f,b));let u=s[0].length===0&&qe(),v=s[2]&&Ke(s);return{c(){e=h("div"),t=h("div"),l=h("nav");for(let b=0;b<c.length;b+=1)c[b].c();a=B(),u&&u.c(),n=B(),v&&v.c(),o=ge(),this.h()},l(b){e=_(b,"DIV",{class:!0});var y=p(e);t=_(y,"DIV",{class:!0});var m=p(t);l=_(m,"NAV",{class:!0,"aria-label":!0});var w=p(l);for(let L=0;L<c.length;L+=1)c[L].l(w);a=j(w),u&&u.l(w),w.forEach(d),m.forEach(d),y.forEach(d),n=j(b),v&&v.l(b),o=ge(),this.h()},h(){i(l,"class","-mb-px flex space-x-8"),i(l,"aria-label","Tabs"),i(t,"class","border-b mb-3 border-gray-200"),i(e,"class","block tabs")},m(b,y){M(b,e,y),r(e,t),r(t,l);for(let m=0;m<c.length;m+=1)c[m].m(l,null);r(l,a),u&&u.m(l,null),M(b,n,y),v&&v.m(b,y),M(b,o,y)},p(b,[y]){if(y&131){f=b[0];let m;for(m=0;m<f.length;m+=1){const w=Ce(b,f,m);c[m]?c[m].p(w,y):(c[m]=We(w),c[m].c(),c[m].m(l,a))}for(;m<c.length;m+=1)c[m].d(1);c.length=f.length}b[0].length===0?u||(u=qe(),u.c(),u.m(l,null)):u&&(u.d(1),u=null),b[2]?v?v.p(b,y):(v=Ke(b),v.c(),v.m(o.parentNode,o)):v&&(v.d(1),v=null)},i:de,o:de,d(b){b&&d(e),ke(c,b),u&&u.d(),b&&d(n),v&&v.d(b),b&&d(o)}}}function wt(s,e,t){let{map:l}=e,{selectedIndex:a}=e,n=[],o,f=null,c=0,u=0;function v(k){f.points.splice(k,1),t(2,f),t(1,o),t(0,n),t(9,a),t(8,l)}function b(){let k=[],E=[""+u,""+c];for(let P=0;P<f.points.length;P++)P===f.points.length-1&&k.push(E),k.push(f.points[P]);t(2,f.points=k,f)}function y(k){t(1,o=k)}const m=k=>y(k),w=k=>y(k);function L(k,E){k[E][1]=this.value,t(2,f),t(1,o),t(0,n),t(9,a),t(8,l)}function X(k,E){k[E][0]=this.value,t(2,f),t(1,o),t(0,n),t(9,a),t(8,l)}const G=k=>v(k);function R(){c=Ie(this.value),t(3,c)}function q(){u=Ie(this.value),t(4,u)}return s.$$set=k=>{"map"in k&&t(8,l=k.map),"selectedIndex"in k&&t(9,a=k.selectedIndex)},s.$$.update=()=>{if(s.$$.dirty&769&&a>=0){t(0,n=[]);for(let k=0;k<l.paths.length;k++)l.paths[k].startLocation===l.locations[a].id&&n.push(l.paths[k]);y(0)}s.$$.dirty&3&&o>=0&&(t(2,f=null),n.length>o&&t(2,f=n[o]))},[n,o,f,c,u,v,b,y,l,a,m,w,L,X,G,R,q]}class It extends Ne{constructor(e){super();Pe(this,e,wt,Et,Ae,{map:8,selectedIndex:9})}}function Ze(s,e,t){const l=s.slice();return l[43]=e[t],l}function Je(s,e,t){const l=s.slice();return l[40]=e[t],l[42]=t,l}function ze(s,e,t){const l=s.slice();return l[46]=e[t],l[42]=t,l}function Lt(s){let e,t,l=s[42]+1+"",a,n,o;function f(){return s[15](s[42])}return{c(){e=h("button"),t=V("L"),a=V(l),this.h()},l(c){e=_(c,"BUTTON",{"data-cy":!0,class:!0});var u=p(e);t=N(u,"L"),a=N(u,l),u.forEach(d),this.h()},h(){i(e,"data-cy","location-tab-l"+(s[42]+1)),i(e,"class","outline-none active:outline-none focus:outline-none border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(c,u){M(c,e,u),r(e,t),r(e,a),n||(o=W(e,"click",ce(f)),n=!0)},p(c,u){s=c},d(c){c&&d(e),n=!1,o()}}}function Tt(s){let e,t,l=s[42]+1+"",a,n,o;function f(){return s[14](s[42])}return{c(){e=h("button"),t=V("L"),a=V(l),this.h()},l(c){e=_(c,"BUTTON",{"data-cy":!0,class:!0});var u=p(e);t=N(u,"L"),a=N(u,l),u.forEach(d),this.h()},h(){i(e,"data-cy","location-tab-l"+(s[42]+1)),i(e,"class","outline-none active:outline-none focus:outline-none border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(c,u){M(c,e,u),r(e,t),r(e,a),n||(o=W(e,"click",ce(f)),n=!0)},p(c,u){s=c},d(c){c&&d(e),n=!1,o()}}}function Qe(s){let e;function t(n,o){return n[1]!==n[42]?Tt:Lt}let l=t(s),a=l(s);return{c(){a.c(),e=ge()},l(n){a.l(n),e=ge()},m(n,o){a.m(n,o),M(n,e,o)},p(n,o){l===(l=t(n))&&a?a.p(n,o):(a.d(1),a=l(n),a&&(a.c(),a.m(e.parentNode,e)))},d(n){a.d(n),n&&d(e)}}}function Dt(s){let e,t,l,a;return{c(){e=h("button"),t=V("Inhoud"),this.h()},l(n){e=_(n,"BUTTON",{"data-cy":!0,class:!0});var o=p(e);t=N(o,"Inhoud"),o.forEach(d),this.h()},h(){i(e,"data-cy","inhoud-button"),i(e,"class","outline-none active:outline-none focus:outline-none border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(n,o){M(n,e,o),r(e,t),l||(a=W(e,"click",ce(s[17])),l=!0)},p:de,d(n){n&&d(e),l=!1,a()}}}function xt(s){let e,t,l,a;return{c(){e=h("button"),t=V("Inhoud"),this.h()},l(n){e=_(n,"BUTTON",{"data-cy":!0,class:!0});var o=p(e);t=N(o,"Inhoud"),o.forEach(d),this.h()},h(){i(e,"data-cy","inhoud-button"),i(e,"class","outline-none active:outline-none focus:outline-none border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(n,o){M(n,e,o),r(e,t),l||(a=W(e,"click",ce(s[16])),l=!0)},p:de,d(n){n&&d(e),l=!1,a()}}}function Vt(s){let e,t,l,a;return{c(){e=h("button"),t=V("Waypoints"),this.h()},l(n){e=_(n,"BUTTON",{"data-cy":!0,class:!0});var o=p(e);t=N(o,"Waypoints"),o.forEach(d),this.h()},h(){i(e,"data-cy","waypoints-button"),i(e,"class","outline-none active:outline-none focus:outline-none border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(n,o){M(n,e,o),r(e,t),l||(a=W(e,"click",ce(s[19])),l=!0)},p:de,d(n){n&&d(e),l=!1,a()}}}function Nt(s){let e,t,l,a;return{c(){e=h("button"),t=V("Waypoints"),this.h()},l(n){e=_(n,"BUTTON",{"data-cy":!0,class:!0});var o=p(e);t=N(o,"Waypoints"),o.forEach(d),this.h()},h(){i(e,"data-cy","waypoints-button"),i(e,"class","outline-none active:outline-none focus:outline-none border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(n,o){M(n,e,o),r(e,t),l||(a=W(e,"click",ce(s[18])),l=!0)},p:de,d(n){n&&d(e),l=!1,a()}}}function Pt(s){let e,t,l,a;return{c(){e=h("button"),t=V("Paden"),this.h()},l(n){e=_(n,"BUTTON",{"data-cy":!0,class:!0});var o=p(e);t=N(o,"Paden"),o.forEach(d),this.h()},h(){i(e,"data-cy","paths-button"),i(e,"class","outline-none active:outline-none focus:outline-none border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(n,o){M(n,e,o),r(e,t),l||(a=W(e,"click",ce(s[21])),l=!0)},p:de,d(n){n&&d(e),l=!1,a()}}}function At(s){let e,t,l,a;return{c(){e=h("button"),t=V("Paden"),this.h()},l(n){e=_(n,"BUTTON",{"data-cy":!0,class:!0});var o=p(e);t=N(o,"Paden"),o.forEach(d),this.h()},h(){i(e,"data-cy","paths-button"),i(e,"class","outline-none active:outline-none focus:outline-none border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(n,o){M(n,e,o),r(e,t),l||(a=W(e,"click",ce(s[20])),l=!0)},p:de,d(n){n&&d(e),l=!1,a()}}}function Bt(s){let e,t,l,a;function n(c){s[31](c)}function o(c){s[32](c)}let f={};return s[0]!==void 0&&(f.map=s[0]),s[1]!==void 0&&(f.selectedIndex=s[1]),e=new It({props:f}),Le.push(()=>Te(e,"map",n)),Le.push(()=>Te(e,"selectedIndex",o)),{c(){Be(e.$$.fragment)},l(c){je(e.$$.fragment,c)},m(c,u){Oe(e,c,u),a=!0},p(c,u){const v={};!t&&u[0]&1&&(t=!0,v.map=c[0],De(()=>t=!1)),!l&&u[0]&2&&(l=!0,v.selectedIndex=c[1],De(()=>l=!1)),e.$set(v)},i(c){a||(ve(e.$$.fragment,c),a=!0)},o(c){ye(e.$$.fragment,c),a=!1},d(c){Xe(e,c)}}}function jt(s){let e,t,l,a,n,o,f,c,u,v,b,y,m,w,L,X,G,R,q,k,E,P,O,K,J,S,U,Y,$,se,Z,F,te,z,ne,le,ee,ae=s[2],H=[];for(let T=0;T<ae.length;T+=1)H[T]=$e(Ze(s,ae,T));return{c(){e=h("div"),t=h("label"),l=V("tekst position X"),a=B(),n=h("div"),o=h("textarea"),f=B(),c=h("label"),u=V("tekst position Y"),v=B(),b=h("div"),y=h("textarea"),m=B(),w=h("label"),L=V("marker position X"),X=B(),G=h("div"),R=h("textarea"),q=B(),k=h("label"),E=V("marker position Y"),P=B(),O=h("div"),K=h("textarea"),J=B(),S=h("div"),U=h("input"),Y=B(),$=h("label"),se=V("Start locatie op kaart"),Z=B(),F=h("label"),te=V("Toegang tot locaties"),z=B(),ne=h("div");for(let T=0;T<H.length;T+=1)H[T].c();this.h()},l(T){e=_(T,"DIV",{class:!0});var D=p(e);t=_(D,"LABEL",{for:!0,class:!0});var x=p(t);l=N(x,"tekst position X"),x.forEach(d),a=j(D),n=_(D,"DIV",{class:!0});var I=p(n);o=_(I,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),p(o).forEach(d),I.forEach(d),f=j(D),c=_(D,"LABEL",{for:!0,class:!0});var g=p(c);u=N(g,"tekst position Y"),g.forEach(d),v=j(D),b=_(D,"DIV",{class:!0});var A=p(b);y=_(A,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),p(y).forEach(d),A.forEach(d),m=j(D),w=_(D,"LABEL",{for:!0,class:!0});var C=p(w);L=N(C,"marker position X"),C.forEach(d),X=j(D),G=_(D,"DIV",{class:!0});var re=p(G);R=_(re,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),p(R).forEach(d),re.forEach(d),q=j(D),k=_(D,"LABEL",{for:!0,class:!0});var oe=p(k);E=N(oe,"marker position Y"),oe.forEach(d),P=j(D),O=_(D,"DIV",{class:!0});var ie=p(O);K=_(ie,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),p(K).forEach(d),ie.forEach(d),J=j(D),S=_(D,"DIV",{class:!0});var fe=p(S);U=_(fe,"INPUT",{id:!0,type:!0,class:!0}),Y=j(fe),$=_(fe,"LABEL",{class:!0,for:!0});var me=p($);se=N(me,"Start locatie op kaart"),me.forEach(d),fe.forEach(d),Z=j(D),F=_(D,"LABEL",{for:!0,class:!0});var pe=p(F);te=N(pe,"Toegang tot locaties"),pe.forEach(d),z=j(D),ne=_(D,"DIV",{class:!0});var ue=p(ne);for(let _e=0;_e<H.length;_e+=1)H[_e].l(ue);ue.forEach(d),D.forEach(d),this.h()},h(){i(t,"for","text_position_x"),i(t,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),i(o,"id","text_position_x"),i(o,"name","title"),i(o,"rows","1"),i(o,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),i(n,"class","mt-1 sm:mt-0 sm:col-span-2"),i(c,"for","text_position_y"),i(c,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),i(y,"id","text_position_y"),i(y,"name","title"),i(y,"rows","1"),i(y,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),i(b,"class","mt-1 sm:mt-0 sm:col-span-2"),i(w,"for","marker_position_x"),i(w,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),i(R,"id","marker_position_x"),i(R,"name","title"),i(R,"rows","1"),i(R,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),i(G,"class","mt-1 sm:mt-0 sm:col-span-2"),i(k,"for","marker_position_y"),i(k,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),i(K,"id","marker_position_y"),i(K,"name","title"),i(K,"rows","1"),i(K,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),i(O,"class","mt-1 sm:mt-0 sm:col-span-2"),i(U,"id","start_locations_check"),i(U,"type","checkbox"),i(U,"class","focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"),i($,"class","font-medium text-gray-700"),i($,"for","start_locations_check"),i(S,"class","mt-3"),i(F,"for","accessLocations"),i(F,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),i(ne,"class","mt-1 sm:mt-0 sm:col-span-2"),i(e,"class","mt-6 sm:mt-5 space-y-6 sm:space-y-5")},m(T,D){M(T,e,D),r(e,t),r(t,l),r(e,a),r(e,n),r(n,o),Q(o,s[0].locations[s[1]].textPositionX),r(e,f),r(e,c),r(c,u),r(e,v),r(e,b),r(b,y),Q(y,s[0].locations[s[1]].textPositionY),r(e,m),r(e,w),r(w,L),r(e,X),r(e,G),r(G,R),Q(R,s[0].locations[s[1]].markerPositionX),r(e,q),r(e,k),r(k,E),r(e,P),r(e,O),r(O,K),Q(K,s[0].locations[s[1]].markerPositionY),r(e,J),r(e,S),r(S,U),U.checked=s[0].locations[s[1]].isStartLocation,r(S,Y),r(S,$),r($,se),r(e,Z),r(e,F),r(F,te),r(e,z),r(e,ne);for(let x=0;x<H.length;x+=1)H[x].m(ne,null);le||(ee=[W(o,"input",s[24]),W(y,"input",s[25]),W(R,"input",s[26]),W(K,"input",s[27]),W(U,"change",s[28])],le=!0)},p(T,D){if(D[0]&3&&Q(o,T[0].locations[T[1]].textPositionX),D[0]&3&&Q(y,T[0].locations[T[1]].textPositionY),D[0]&3&&Q(R,T[0].locations[T[1]].markerPositionX),D[0]&3&&Q(K,T[0].locations[T[1]].markerPositionY),D[0]&3&&(U.checked=T[0].locations[T[1]].isStartLocation),D[0]&7){ae=T[2];let x;for(x=0;x<ae.length;x+=1){const I=Ze(T,ae,x);H[x]?H[x].p(I,D):(H[x]=$e(I),H[x].c(),H[x].m(ne,null))}for(;x<H.length;x+=1)H[x].d(1);H.length=ae.length}},i:de,o:de,d(T){T&&d(e),ke(H,T),le=!1,we(ee)}}}function Ot(s){let e,t,l,a,n,o,f,c,u,v,b,y,m,w,L,X,G,R,q,k,E,P,O;function K(U,Y){return U[0].locations[U[1]].goals.length===0?St:Xt}let J=K(s),S=J(s);return{c(){e=h("div"),t=h("label"),l=V("Name"),a=B(),n=h("div"),o=h("textarea"),f=B(),c=h("div"),u=h("div"),v=h("label"),b=V("Gekoppelde leerdoelen"),y=B(),m=h("div"),S.c(),w=B(),L=h("div"),X=h("div"),G=h("label"),R=V("Leerdoel toevoegen"),q=B(),k=h("div"),E=h("div"),this.h()},l(U){e=_(U,"DIV",{class:!0});var Y=p(e);t=_(Y,"LABEL",{for:!0,class:!0});var $=p(t);l=N($,"Name"),$.forEach(d),a=j(Y),n=_(Y,"DIV",{class:!0});var se=p(n);o=_(se,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),p(o).forEach(d),se.forEach(d),f=j(Y),c=_(Y,"DIV",{class:!0});var Z=p(c);u=_(Z,"DIV",{class:!0});var F=p(u);v=_(F,"LABEL",{for:!0,class:!0});var te=p(v);b=N(te,"Gekoppelde leerdoelen"),te.forEach(d),y=j(F),m=_(F,"DIV",{id:!0,class:!0});var z=p(m);S.l(z),z.forEach(d),F.forEach(d),Z.forEach(d),w=j(Y),L=_(Y,"DIV",{class:!0});var ne=p(L);X=_(ne,"DIV",{class:!0});var le=p(X);G=_(le,"LABEL",{for:!0,class:!0});var ee=p(G);R=N(ee,"Leerdoel toevoegen"),ee.forEach(d),q=j(le),k=_(le,"DIV",{class:!0});var ae=p(k);E=_(ae,"DIV",{id:!0,class:!0}),p(E).forEach(d),ae.forEach(d),le.forEach(d),ne.forEach(d),Y.forEach(d),this.h()},h(){i(t,"for","location_name"),i(t,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),i(o,"id","location_name"),i(o,"name","location_name"),i(o,"rows","1"),i(o,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),i(n,"class","mt-1 sm:mt-0 sm:col-span-2"),i(v,"for","learning-goals"),i(v,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),i(m,"id","learning-goals"),i(m,"class","mt-1 sm:mt-0 sm:col-span-2"),i(u,"class","sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"),i(c,"class","mt-6 sm:mt-5 space-y-6 sm:space-y-5"),i(G,"for","autocomplete-leerdoelen"),i(G,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),i(E,"id","autocomplete-leerdoelen"),i(E,"class","max-w-lg"),i(k,"class","mt-1 sm:mt-0 sm:col-span-2"),i(X,"class","sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"),i(L,"class","mt-6 sm:mt-5 space-y-6 sm:space-y-5"),i(e,"class","mt-6 sm:mt-5 space-y-6 sm:space-y-5")},m(U,Y){M(U,e,Y),r(e,t),r(t,l),r(e,a),r(e,n),r(n,o),Q(o,s[0].locations[s[1]].name),r(e,f),r(e,c),r(c,u),r(u,v),r(v,b),r(u,y),r(u,m),S.m(m,null),r(e,w),r(e,L),r(L,X),r(X,G),r(G,R),r(X,q),r(X,k),r(k,E),P||(O=W(o,"input",s[22]),P=!0)},p(U,Y){Y[0]&3&&Q(o,U[0].locations[U[1]].name),J===(J=K(U))&&S?S.p(U,Y):(S.d(1),S=J(U),S&&(S.c(),S.m(m,null)))},i:de,o:de,d(U){U&&d(e),S.d(),P=!1,O()}}}function $e(s){let e,t,l,a,n,o=s[43].index+"",f,c,u,v;return{c(){e=h("label"),t=h("input"),n=V(`
                L`),f=V(o),c=B(),this.h()},l(b){e=_(b,"LABEL",{});var y=p(e);t=_(y,"INPUT",{"data-cy":!0,type:!0,name:!0}),n=N(y,`
                L`),f=N(y,o),c=j(y),y.forEach(d),this.h()},h(){i(t,"data-cy",l="access-location-"+s[43].index),i(t,"type","checkbox"),i(t,"name","accessLocations"),t.__value=a=s[43].id,t.value=t.__value,s[30][0].push(t)},m(b,y){M(b,e,y),r(e,t),t.checked=~s[0].locations[s[1]].accessLocations.indexOf(t.__value),r(e,n),r(e,f),r(e,c),u||(v=W(t,"change",s[29]),u=!0)},p(b,y){y[0]&4&&l!==(l="access-location-"+b[43].index)&&i(t,"data-cy",l),y[0]&4&&a!==(a=b[43].id)&&(t.__value=a,t.value=t.__value),y[0]&3&&(t.checked=~b[0].locations[b[1]].accessLocations.indexOf(t.__value)),y[0]&4&&o!==(o=b[43].index+"")&&he(f,o)},d(b){b&&d(e),s[30][0].splice(s[30][0].indexOf(t),1),u=!1,v()}}}function Xt(s){let e,t=s[0].locations[s[1]].goals,l=[];for(let a=0;a<t.length;a+=1)l[a]=et(Je(s,t,a));return{c(){e=h("ul");for(let a=0;a<l.length;a+=1)l[a].c()},l(a){e=_(a,"UL",{});var n=p(e);for(let o=0;o<l.length;o+=1)l[o].l(n);n.forEach(d)},m(a,n){M(a,e,n);for(let o=0;o<l.length;o+=1)l[o].m(e,null)},p(a,n){if(n[0]&515){t=a[0].locations[a[1]].goals;let o;for(o=0;o<t.length;o+=1){const f=Je(a,t,o);l[o]?l[o].p(f,n):(l[o]=et(f),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},d(a){a&&d(e),ke(l,a)}}}function St(s){let e,t;return{c(){e=h("p"),t=V("Nog geen leerdoelen aan activiteit toegevoegd"),this.h()},l(l){e=_(l,"P",{class:!0});var a=p(e);t=N(a,"Nog geen leerdoelen aan activiteit toegevoegd"),a.forEach(d),this.h()},h(){i(e,"class","mt-1 max-w-2xl text-sm text-gray-500")},m(l,a){M(l,e,a),r(e,t)},p:de,d(l){l&&d(e)}}}function et(s){let e,t=s[40].title+"",l,a,n,o,f,c,u,v,b;function y(){return s[23](s[42])}return{c(){e=h("li"),l=V(t),a=B(),n=h("button"),o=V("Weghalen"),c=B(),this.h()},l(m){e=_(m,"LI",{"data-cy":!0});var w=p(e);l=N(w,t),a=j(w),n=_(w,"BUTTON",{"data-cy":!0,class:!0});var L=p(n);o=N(L,"Weghalen"),L.forEach(d),c=j(w),w.forEach(d),this.h()},h(){i(n,"data-cy",f="remove-goal-button-"+s[42]),i(n,"class","inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),i(e,"data-cy",u="added-learning-goal-"+s[42])},m(m,w){M(m,e,w),r(e,l),r(e,a),r(e,n),r(n,o),r(e,c),v||(b=W(n,"click",ce(y)),v=!0)},p(m,w){s=m,w[0]&3&&t!==(t=s[40].title+"")&&he(l,t)},d(m){m&&d(e),v=!1,b()}}}function Ut(s){let e,t,l,a,n,o,f,c,u,v,b,y,m,w,L,X,G,R,q,k,E,P,O,K,J,S,U;function Y(g){s[13](g)}let $={};s[4]!==void 0&&($.toggle=s[4]),e=new ht({props:$}),Le.push(()=>Te(e,"toggle",Y)),e.$on("ok",s[5]);let se=s[0].locations,Z=[];for(let g=0;g<se.length;g+=1)Z[g]=Qe(ze(s,se,g));function F(g,A){return g[3]!=="content"?xt:Dt}let te=F(s),z=te(s);function ne(g,A){return g[3]!=="waypoints"?Nt:Vt}let le=ne(s),ee=le(s);function ae(g,A){return g[3]!=="paths"?At:Pt}let H=ae(s),T=H(s);const D=[Ot,jt,Bt],x=[];function I(g,A){return g[3]==="content"?0:g[3]==="waypoints"?1:g[3]==="paths"?2:-1}return~(k=I(s))&&(E=x[k]=D[k](s)),{c(){Be(e.$$.fragment),l=B(),a=h("div"),n=h("div"),o=h("div"),f=h("div"),c=h("nav");for(let g=0;g<Z.length;g+=1)Z[g].c();u=B(),v=h("button"),b=V("New Location"),y=B(),m=h("div"),w=h("div"),L=h("nav"),z.c(),X=B(),ee.c(),G=B(),T.c(),R=B(),q=h("div"),E&&E.c(),P=B(),O=h("button"),K=V("Locatie verwijderen"),this.h()},l(g){je(e.$$.fragment,g),l=j(g),a=_(g,"DIV",{class:!0});var A=p(a);n=_(A,"DIV",{});var C=p(n);o=_(C,"DIV",{class:!0});var re=p(o);f=_(re,"DIV",{class:!0});var oe=p(f);c=_(oe,"NAV",{class:!0,"aria-label":!0});var ie=p(c);for(let be=0;be<Z.length;be+=1)Z[be].l(ie);u=j(ie),v=_(ie,"BUTTON",{"data-cy":!0,class:!0});var fe=p(v);b=N(fe,"New Location"),fe.forEach(d),ie.forEach(d),oe.forEach(d),re.forEach(d),y=j(C),m=_(C,"DIV",{class:!0});var me=p(m);w=_(me,"DIV",{class:!0});var pe=p(w);L=_(pe,"NAV",{class:!0,"aria-label":!0});var ue=p(L);z.l(ue),X=j(ue),ee.l(ue),G=j(ue),T.l(ue),ue.forEach(d),pe.forEach(d),me.forEach(d),R=j(C),q=_(C,"DIV",{});var _e=p(q);E&&E.l(_e),_e.forEach(d),P=j(C),O=_(C,"BUTTON",{"data-cy":!0,type:!0,class:!0});var Ee=p(O);K=N(Ee,"Locatie verwijderen"),Ee.forEach(d),C.forEach(d),A.forEach(d),this.h()},h(){i(v,"data-cy","new-location-button"),i(v,"class","mb-1 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),i(c,"class","-mb-px flex space-x-8"),i(c,"aria-label","Tabs"),i(f,"class","border-bborder-gray-200"),i(o,"class","block tabs"),i(L,"class","-mb-px flex space-x-8"),i(L,"aria-label","Tabs"),i(w,"class","border-b mb-3 border-gray-200"),i(m,"class","block tabs"),i(O,"data-cy","remove-location-button"),i(O,"type","button"),i(O,"class","float-right mt-3 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),i(a,"class","space-y-3 sm:space-y-2")},m(g,A){Oe(e,g,A),M(g,l,A),M(g,a,A),r(a,n),r(n,o),r(o,f),r(f,c);for(let C=0;C<Z.length;C+=1)Z[C].m(c,null);r(c,u),r(c,v),r(v,b),r(n,y),r(n,m),r(m,w),r(w,L),z.m(L,null),r(L,X),ee.m(L,null),r(L,G),T.m(L,null),r(n,R),r(n,q),~k&&x[k].m(q,null),r(n,P),r(n,O),r(O,K),J=!0,S||(U=[W(v,"click",ce(s[8])),W(O,"click",ce(s[33]))],S=!0)},p(g,A){const C={};if(!t&&A[0]&16&&(t=!0,C.toggle=g[4],De(()=>t=!1)),e.$set(C),A[0]&67){se=g[0].locations;let oe;for(oe=0;oe<se.length;oe+=1){const ie=ze(g,se,oe);Z[oe]?Z[oe].p(ie,A):(Z[oe]=Qe(ie),Z[oe].c(),Z[oe].m(c,u))}for(;oe<Z.length;oe+=1)Z[oe].d(1);Z.length=se.length}te===(te=F(g))&&z?z.p(g,A):(z.d(1),z=te(g),z&&(z.c(),z.m(L,X))),le===(le=ne(g))&&ee?ee.p(g,A):(ee.d(1),ee=le(g),ee&&(ee.c(),ee.m(L,G))),H===(H=ae(g))&&T?T.p(g,A):(T.d(1),T=H(g),T&&(T.c(),T.m(L,null)));let re=k;k=I(g),k===re?~k&&x[k].p(g,A):(E&&(Ye(),ye(x[re],1,1,()=>{x[re]=null}),Ge()),~k?(E=x[k],E?E.p(g,A):(E=x[k]=D[k](g),E.c()),ve(E,1),E.m(q,null)):E=null)},i(g){J||(ve(e.$$.fragment,g),ve(E),J=!0)},o(g){ye(e.$$.fragment,g),ye(E),J=!1},d(g){Xe(e,g),g&&d(l),g&&d(a),ke(Z,g),z.d(),ee.d(),T.d(),~k&&x[k].d(),S=!1,we(U)}}}function Yt(s,e,t){let l;st(s,dt,I=>t(35,l=I));let a="",n=ft(l.environment),{map:o}=e,{selectedIndex:f=0}=e,c=!1,u,v="content",b=null,y;function m(){o.locations.splice(f,1),t(0,o),t(1,f=0)}function w(I){t(1,f=I)}function L(){t(4,c=!0)}function X(){let I="",g=!1;for(;!g;){I=Math.random().toString(36).substring(2,7),g=!0;for(let C=0;C<o.locations.length;C++)o.locations[C].id===I&&(g=!1);I.length<5&&(g=!1)}let A={id:I,isStartLocation:!1,accessLocations:[],name:"",textPositionX:"",textPositionY:"",markerPositionX:"",markerPositionY:"",goals:[]};t(0,o.locations=[...o.locations,A],o),G()}function G(){a=o.locations[f].goals.map(g=>"NOT objectID:"+(g.objectID?g.objectID:g.id)).join(" AND ")}function R(I){t(0,o.locations[f].goals=[...o.locations[f].goals,I],o),G()}function q(I){o.locations[f].goals.splice(I,1),t(0,o),G()}nt(()=>{});function k(){if(o.locations.length>0){const I=mt();at({container:"#autocomplete-leerdoelen",placeholder:"Zoek voor leerdoelen",onSubmit({state:g}){console.log(g)},getSources({query:g}){return[{sourceId:n,onSelect({state:A,item:C}){R(C)},getItems(){return it({searchClient:I,queries:[{indexName:n,query:g,params:{hitsPerPage:5},filters:a}]})},templates:{item({item:A}){return A.title},noResults(){return"Geen leerdoelen gevonden"}}}]}})}}function E(I){t(3,v=I),t(11,b=null)}const P=[[]];function O(I){c=I,t(4,c)}const K=I=>w(I),J=I=>w(I),S=()=>E("content"),U=()=>E("content"),Y=()=>E("waypoints"),$=()=>E("waypoints"),se=()=>E("paths"),Z=()=>E("paths");function F(){o.locations[f].name=this.value,t(0,o),t(1,f)}const te=I=>q(I);function z(){o.locations[f].textPositionX=this.value,t(0,o),t(1,f)}function ne(){o.locations[f].textPositionY=this.value,t(0,o),t(1,f)}function le(){o.locations[f].markerPositionX=this.value,t(0,o),t(1,f)}function ee(){o.locations[f].markerPositionY=this.value,t(0,o),t(1,f)}function ae(){o.locations[f].isStartLocation=this.checked,t(0,o),t(1,f)}function H(){o.locations[f].accessLocations=rt(P[0],this.__value,this.checked),t(0,o),t(1,f)}function T(I){o=I,t(0,o)}function D(I){f=I,t(1,f)}const x=()=>L();return s.$$set=I=>{"map"in I&&t(0,o=I.map),"selectedIndex"in I&&t(1,f=I.selectedIndex)},s.$$.update=()=>{if(s.$$.dirty[0]&1)for(let I=0;I<o.locations.length;I++){let g=[];for(let A=0;A<o.locations[I].accessLocations.length;A++){let C=!1;for(let re=0;re<o.locations.length;re++)o.locations[re].id===o.locations[I].accessLocations[A]&&(C=!0);C&&g.push(o.locations[I].accessLocations[A])}t(0,o.locations[I].accessLocations=g,o)}if(s.$$.dirty[0]&1&&o&&_t(o),s.$$.dirty[0]&7){t(2,u=[]);for(let I=0;I<o.locations.length;I++)I!==f&&u.push({id:o.locations[I].id,index:I+1})}s.$$.dirty[0]&3&&f>=0&&o.locations.length>0&&G(),s.$$.dirty[0]&1&&o.locations.length===0&&X(),s.$$.dirty[0]&8&&v==="content"&&t(12,y=setInterval(()=>{t(11,b=document.getElementById("autocomplete-leerdoelen"))},100)),s.$$.dirty[0]&6144&&b!==null&&y&&(clearInterval(y),k())},[o,f,u,v,c,m,w,L,X,q,E,b,y,O,K,J,S,U,Y,$,se,Z,F,te,z,ne,le,ee,ae,H,P,T,D,x]}class Gt extends Ne{constructor(e){super();Pe(this,e,Yt,Ut,Ae,{map:0,selectedIndex:1},null,[-1,-1])}}function tt(s,e,t){const l=s.slice();return l[8]=e[t],l}function ot(s){let e,t=s[8].title+"",l,a;return{c(){e=h("option"),l=V(t),this.h()},l(n){e=_(n,"OPTION",{});var o=p(e);l=N(o,t),o.forEach(d),this.h()},h(){e.__value=a=s[8],e.value=e.__value,Re(e,"selected",s[0].map===s[8])},m(n,o){M(n,e,o),r(e,l)},p(n,o){o&2&&t!==(t=n[8].title+"")&&he(l,t),o&2&&a!==(a=n[8])&&(e.__value=a,e.value=e.__value),o&3&&Re(e,"selected",n[0].map===n[8])},d(n){n&&d(e)}}}function lt(s){let e,t,l,a,n,o,f,c,u,v;function b(m){s[7](m)}let y={};return s[0]!==void 0&&(y.map=s[0]),c=new Gt({props:y}),Le.push(()=>Te(c,"map",b)),{c(){e=h("div"),t=h("h3"),l=V("Locaties"),a=B(),n=h("p"),o=V("Locaties op de kaart?"),f=B(),Be(c.$$.fragment),this.h()},l(m){e=_(m,"DIV",{class:!0});var w=p(e);t=_(w,"H3",{class:!0});var L=p(t);l=N(L,"Locaties"),L.forEach(d),a=j(w),n=_(w,"P",{class:!0});var X=p(n);o=N(X,"Locaties op de kaart?"),X.forEach(d),f=j(w),je(c.$$.fragment,w),w.forEach(d),this.h()},h(){i(t,"class","text-lg leading-6 font-medium text-gray-900"),i(n,"class","mt-1 max-w-2xl text-sm text-gray-500"),i(e,"class","divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5")},m(m,w){M(m,e,w),r(e,t),r(t,l),r(e,a),r(e,n),r(n,o),r(e,f),Oe(c,e,null),v=!0},p(m,w){const L={};!u&&w&1&&(u=!0,L.map=m[0],De(()=>u=!1)),c.$set(L)},i(m){v||(ve(c.$$.fragment,m),v=!0)},o(m){ye(c.$$.fragment,m),v=!1},d(m){m&&d(e),Xe(c)}}}function Rt(s){let e,t,l,a,n,o,f,c,u,v,b,y,m,w,L,X,G,R,q,k,E,P,O,K,J,S,U,Y,$,se,Z,F,te,z,ne,le,ee,ae,H=s[1],T=[];for(let x=0;x<H.length;x+=1)T[x]=ot(tt(s,H,x));let D=s[0].locations&&lt(s);return{c(){e=h("div"),t=h("div"),l=h("div"),a=h("div"),n=h("label"),o=V("Naam"),f=B(),c=h("div"),u=h("textarea"),v=B(),b=h("div"),y=h("label"),m=V("Beschrijving"),w=B(),L=h("div"),X=h("textarea"),G=B(),R=h("p"),q=V("Beschrijf kort de lesmodule."),k=B(),E=h("div"),P=h("label"),O=V("SVG afbeelding"),K=B(),J=h("div"),S=h("textarea"),U=B(),Y=h("div"),$=h("label"),se=V("Kaart"),Z=B(),F=h("select"),te=h("option"),z=V("Geen kaart");for(let x=0;x<T.length;x+=1)T[x].c();ne=B(),D&&D.c(),this.h()},l(x){e=_(x,"DIV",{class:!0});var I=p(e);t=_(I,"DIV",{});var g=p(t);l=_(g,"DIV",{class:!0});var A=p(l);a=_(A,"DIV",{class:!0});var C=p(a);n=_(C,"LABEL",{for:!0,class:!0});var re=p(n);o=N(re,"Naam"),re.forEach(d),f=j(C),c=_(C,"DIV",{class:!0});var oe=p(c);u=_(oe,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),p(u).forEach(d),oe.forEach(d),C.forEach(d),v=j(A),b=_(A,"DIV",{class:!0});var ie=p(b);y=_(ie,"LABEL",{for:!0,class:!0});var fe=p(y);m=N(fe,"Beschrijving"),fe.forEach(d),w=j(ie),L=_(ie,"DIV",{class:!0});var me=p(L);X=_(me,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),p(X).forEach(d),G=j(me),R=_(me,"P",{class:!0});var pe=p(R);q=N(pe,"Beschrijf kort de lesmodule."),pe.forEach(d),me.forEach(d),ie.forEach(d),k=j(A),E=_(A,"DIV",{class:!0});var ue=p(E);P=_(ue,"LABEL",{for:!0,class:!0});var _e=p(P);O=N(_e,"SVG afbeelding"),_e.forEach(d),K=j(ue),J=_(ue,"DIV",{class:!0});var Ee=p(J);S=_(Ee,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),p(S).forEach(d),Ee.forEach(d),ue.forEach(d),U=j(A),Y=_(A,"DIV",{class:!0});var be=p(Y);$=_(be,"LABEL",{for:!0,class:!0});var Se=p($);se=N(Se,"Kaart"),Se.forEach(d),Z=j(be),F=_(be,"SELECT",{id:!0,name:!0,class:!0});var xe=p(F);te=_(xe,"OPTION",{});var Ue=p(te);z=N(Ue,"Geen kaart"),Ue.forEach(d);for(let Ve=0;Ve<T.length;Ve+=1)T[Ve].l(xe);xe.forEach(d),be.forEach(d),ne=j(A),D&&D.l(A),A.forEach(d),g.forEach(d),I.forEach(d),this.h()},h(){i(n,"for","name"),i(n,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),i(u,"id","name"),i(u,"name","name"),i(u,"rows","1"),i(u,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),i(c,"class","mt-1 sm:mt-0 sm:col-span-2"),i(a,"class","sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"),i(y,"for","description"),i(y,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),i(X,"id","description"),i(X,"name","description"),i(X,"rows","3"),i(X,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),i(R,"class","mt-2 text-sm text-gray-500"),i(L,"class","mt-1 sm:mt-0 sm:col-span-2"),i(b,"class","sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"),i(P,"for","svg"),i(P,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),i(S,"id","svg"),i(S,"name","svg"),i(S,"rows","5"),i(S,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),i(J,"class","mt-1 sm:mt-0 sm:col-span-2"),i(E,"class","sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"),i($,"for","maps"),i($,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),te.__value=void 0,te.value=te.__value,i(F,"id","maps"),i(F,"name","maps"),i(F,"class","max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"),s[0].map===void 0&&ct(()=>s[6].call(F)),i(Y,"class","sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5"),i(l,"class","mt-6 sm:mt-5 space-y-6 sm:space-y-5"),i(e,"class","mb-44 space-y-8 divide-y divide-gray-200 sm:space-y-5")},m(x,I){M(x,e,I),r(e,t),r(t,l),r(l,a),r(a,n),r(n,o),r(a,f),r(a,c),r(c,u),Q(u,s[0].moduleName),r(l,v),r(l,b),r(b,y),r(y,m),r(b,w),r(b,L),r(L,X),Q(X,s[0].moduleDescription),r(L,G),r(L,R),r(R,q),r(l,k),r(l,E),r(E,P),r(P,O),r(E,K),r(E,J),r(J,S),Q(S,s[0].moduleSvg),r(l,U),r(l,Y),r(Y,$),r($,se),r(Y,Z),r(Y,F),r(F,te),r(te,z);for(let g=0;g<T.length;g+=1)T[g].m(F,null);Fe(F,s[0].map),r(l,ne),D&&D.m(l,null),le=!0,ee||(ae=[W(u,"input",s[3]),W(X,"input",s[4]),W(S,"input",s[5]),W(F,"change",s[6]),W(F,"change",s[2])],ee=!0)},p(x,[I]){if(I&3&&Q(u,x[0].moduleName),I&3&&Q(X,x[0].moduleDescription),I&3&&Q(S,x[0].moduleSvg),I&3){H=x[1];let g;for(g=0;g<H.length;g+=1){const A=tt(x,H,g);T[g]?T[g].p(A,I):(T[g]=ot(A),T[g].c(),T[g].m(F,null))}for(;g<T.length;g+=1)T[g].d(1);T.length=H.length}I&3&&Fe(F,x[0].map),x[0].locations?D?(D.p(x,I),I&1&&ve(D,1)):(D=lt(x),D.c(),ve(D,1),D.m(l,null)):D&&(Ye(),ye(D,1,1,()=>{D=null}),Ge())},i(x){le||(ve(D),le=!0)},o(x){ye(D),le=!1},d(x){x&&d(e),ke(T,x),D&&D.d(),ee=!1,we(ae)}}}function Ft(s,e,t){let{module:l}=e,{allMaps:a}=e;function n(){t(0,l=pt(l,!0,!1))}function o(){l.moduleName=this.value,t(0,l),t(1,a)}function f(){l.moduleDescription=this.value,t(0,l),t(1,a)}function c(){l.moduleSvg=this.value,t(0,l),t(1,a)}function u(){l.map=ut(this),t(0,l),t(1,a)}function v(b){l=b,t(0,l)}return s.$$set=b=>{"module"in b&&t(0,l=b.module),"allMaps"in b&&t(1,a=b.allMaps)},[l,a,n,o,f,c,u,v]}class Jt extends Ne{constructor(e){super();Pe(this,e,Ft,Rt,Ae,{module:0,allMaps:1})}}export{Jt as F};
