import{S as Z,i as Q,s as W,j as J,m as L,o as U,_ as I,x as h,u as k,v as M,k as G,l as O,n as K,f as v,r as X,w as $,d as _,M as ae,A as re,Y as j,Z as R,t as A,g as T,O as C,e as P,c as z,a as B,b as w,H as D,I as q,J as F}from"../../../../chunks/vendor-9a64f523.js";import{S as ce}from"../../../../chunks/show-cb077780.js";import{s as le}from"../../../../chunks/stores-bd9665ba.js";import{g as H}from"../../../../chunks/navigation-51f4a605.js";/* empty css                                                            */import{g as fe}from"../../../../chunks/helper-62c526cc.js";import{a as ue,g as de}from"../../../../chunks/helper-13ceec00.js";import{a as x,g as ee}from"../../../../chunks/helper-de78ef5d.js";import{G as pe}from"../../../../chunks/getActivityData-7ca7fa60.js";import"../../../../chunks/show-4b835def.js";import"../../../../chunks/helper-e98ae755.js";import"../../../../chunks/helper-5c7a4c9b.js";import"../../../../chunks/singletons-12a22614.js";import"../../../../chunks/store-b78dac0d.js";function te(s){let e,n,a,i;function r(t){s[8](t)}function o(t){s[9](t)}let l={showFeedback:!1};return s[0]!==void 0&&(l.firebase=s[0]),s[1]!==void 0&&(l.activity=s[1]),e=new ce({props:l}),j.push(()=>R(e,"firebase",r)),j.push(()=>R(e,"activity",o)),{c(){J(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,c){U(e,t,c),i=!0},p(t,c){const f={};!n&&c&1&&(n=!0,f.firebase=t[0],I(()=>n=!1)),!a&&c&2&&(a=!0,f.activity=t[1],I(()=>a=!1)),e.$set(f)},i(t){i||(h(e.$$.fragment,t),i=!0)},o(t){k(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function me(s){let e;return{c(){e=A("Je moet ingelogd zijn om deze activiteit te kunnen koppelen.")},l(n){e=T(n,"Je moet ingelogd zijn om deze activiteit te kunnen koppelen.")},m(n,a){v(n,e,a)},p:C,d(n){n&&_(e)}}}function _e(s){let e,n,a,i,r,o;function l(f,p){return f[2].connectionId?ve:be}let t=l(s),c=t(s);return{c(){e=P("div"),n=P("button"),a=A("Terug"),i=G(),c.c(),this.h()},l(f){e=z(f,"DIV",{class:!0});var p=B(e);n=z(p,"BUTTON",{"data-cy":!0,class:!0});var g=B(n);a=T(g,"Terug"),g.forEach(_),i=K(p),c.l(p),p.forEach(_),this.h()},h(){w(n,"data-cy","back-to-form-button"),w(n,"class","float-left mt-3bg-white py-2 ml-auto px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),w(e,"class","mt-8 mb-32")},m(f,p){v(f,e,p),D(e,n),D(n,a),D(e,i),c.m(e,null),r||(o=q(n,"click",F(s[5])),r=!0)},p(f,p){t===(t=l(f))&&c?c.p(f,p):(c.d(1),c=t(f),c&&(c.c(),c.m(e,null)))},d(f){f&&_(e),c.d(),r=!1,o()}}}function be(s){let e,n,a,i;return{c(){e=P("button"),n=A("Deze activiteit koppelen met leerdoel"),this.h()},l(r){e=z(r,"BUTTON",{"data-cy":!0,class:!0});var o=B(e);n=T(o,"Deze activiteit koppelen met leerdoel"),o.forEach(_),this.h()},h(){w(e,"data-cy","connect-activity-learning-goal-button"),e.disabled=s[4],w(e,"class","float-right disabled:opacity-50 ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")},m(r,o){v(r,e,o),D(e,n),a||(i=q(e,"click",F(s[7])),a=!0)},p(r,o){o&16&&(e.disabled=r[4])},d(r){r&&_(e),a=!1,i()}}}function ve(s){let e,n,a,i;return{c(){e=P("button"),n=A("Koppeling met leerdoel updaten"),this.h()},l(r){e=z(r,"BUTTON",{"data-cy":!0,class:!0});var o=B(e);n=T(o,"Koppeling met leerdoel updaten"),o.forEach(_),this.h()},h(){w(e,"data-cy","update-activity-learning-goal-button"),e.disabled=s[4],w(e,"class","float-right disabled:opacity-50 ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")},m(r,o){v(r,e,o),D(e,n),a||(i=q(e,"click",F(s[6])),a=!0)},p(r,o){o&16&&(e.disabled=r[4])},d(r){r&&_(e),a=!1,i()}}}function ge(s){let e,n,a,i=s[1]&&te(s);function r(t,c){return t[3].user?_e:me}let o=r(s),l=o(s);return{c(){i&&i.c(),e=G(),l.c(),n=O()},l(t){i&&i.l(t),e=K(t),l.l(t),n=O()},m(t,c){i&&i.m(t,c),v(t,e,c),l.m(t,c),v(t,n,c),a=!0},p(t,[c]){t[1]?i?(i.p(t,c),c&2&&h(i,1)):(i=te(t),i.c(),h(i,1),i.m(e.parentNode,e)):i&&(X(),k(i,1,1,()=>{i=null}),$()),o===(o=r(t))&&l?l.p(t,c):(l.d(1),l=o(t),l&&(l.c(),l.m(n.parentNode,n)))},i(t){a||(h(i),a=!0)},o(t){k(i),a=!1},d(t){i&&i.d(t),t&&_(e),l.d(t),t&&_(n)}}}function ye(s,e,n){let a;ae(s,le,d=>n(3,a=d));let{firebase:i}=e,{showActivity:r}=e,{activity:o}=e,l=!1,t,c;re(async()=>{t=await i.firestore()});function f(){H("/lerarenkamer/activiteit/"+o.id)}async function p(){if(n(4,l=!0),a.user.uid){let d=t.collection("connections");try{let m=d.doc(o.connectionId),y=await m.get();if(y.exists){let E=y.data().lastRevisionId;c.lastRevisionId=o.latestRevisionId,await m.update(c);let N=await t.collection("revisions").doc(E).get();if(N.exists){let ne=N.data(),oe=x(),Y=ee(ne,o,oe);if(Y.length>0){let se={type:"activity-updated-teacher",differences:Y,authorId:a.user.uid,createdAt:i.firestore.Timestamp.now().seconds,connectionId:o.connectionId};await g(se)}H("/leerdoel/"+o.goalId+"/activiteiten/"+o.connectionId)}}}catch(m){console.log(m)}}}async function g(d){a.player.curriculumProfileId&&(d.curriculumProfile=await fe(t,a.player.curriculumProfileId)),await t.collection("updates").add(d)}async function b(){if(n(4,l=!0),a.user.uid){let d=t.collection("connections");try{c.createdAt=i.firestore.Timestamp.now().seconds,c.status="in-progress",c.lastRevisionId=o.latestRevisionId;let m=await d.add(c),y={status:"open",connectionId:m.id,connectionStatus:"in-progress"};t.collection("activities").doc(o.id).update(y);let E=x(),V=ee({},o,E),N={type:"created-teacher",differences:V,authorId:a.user.uid,createdAt:i.firestore.Timestamp.now().seconds,connectionId:m.id};await g(N),H("/leerdoel/"+o.goalId+"/activiteiten/"+m.id)}catch(m){console.error(m)}}}function S(d){i=d,n(0,i)}function u(d){r=d,n(1,r)}return s.$$set=d=>{"firebase"in d&&n(0,i=d.firebase),"showActivity"in d&&n(1,r=d.showActivity),"activity"in d&&n(2,o=d.activity)},s.$$.update=()=>{s.$$.dirty&13&&o&&(c={type:"goal-activity",sourceId:o.goalId,linkId:o.id,updatedAt:i.firestore.Timestamp.now().seconds,inProgressAt:i.firestore.Timestamp.now().seconds,authorId:a.user.uid,title:o.title,fields:[{title:"Beschrijving",value:o.description},{title:"Moeilijkheid",value:ue(o.difficulty)},{title:"Type",value:de(o.type)}]})},[i,r,o,a,l,f,p,b,S,u]}class he extends Z{constructor(e){super();Q(this,e,ye,ge,W,{firebase:0,showActivity:1,activity:2})}}function ke(s){let e;return{c(){e=A("Loading...")},l(n){e=T(n,"Loading...")},m(n,a){v(n,e,a)},p:C,i:C,o:C,d(n){n&&_(e)}}}function we(s){let e,n,a,i;function r(t){s[5](t)}function o(t){s[6](t)}let l={showActivity:s[2]};return s[1]!==void 0&&(l.firebase=s[1]),s[0]!==void 0&&(l.activity=s[0]),e=new he({props:l}),j.push(()=>R(e,"firebase",r)),j.push(()=>R(e,"activity",o)),{c(){J(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,c){U(e,t,c),i=!0},p(t,c){const f={};c&4&&(f.showActivity=t[2]),!n&&c&2&&(n=!0,f.firebase=t[1],I(()=>n=!1)),!a&&c&1&&(a=!0,f.activity=t[0],I(()=>a=!1)),e.$set(f)},i(t){i||(h(e.$$.fragment,t),i=!0)},o(t){k(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function Ie(s){let e,n,a,i,r,o,l,t;function c(u){s[3](u)}function f(u){s[4](u)}let p={};s[1]!==void 0&&(p.firebase=s[1]),s[0]!==void 0&&(p.activity=s[0]),e=new pe({props:p}),j.push(()=>R(e,"firebase",c)),j.push(()=>R(e,"activity",f));const g=[we,ke],b=[];function S(u,d){return u[0]?0:1}return r=S(s),o=b[r]=g[r](s),{c(){J(e.$$.fragment),i=G(),o.c(),l=O()},l(u){L(e.$$.fragment,u),i=K(u),o.l(u),l=O()},m(u,d){U(e,u,d),v(u,i,d),b[r].m(u,d),v(u,l,d),t=!0},p(u,[d]){const m={};!n&&d&2&&(n=!0,m.firebase=u[1],I(()=>n=!1)),!a&&d&1&&(a=!0,m.activity=u[0],I(()=>a=!1)),e.$set(m);let y=r;r=S(u),r===y?b[r].p(u,d):(X(),k(b[y],1,1,()=>{b[y]=null}),$(),o=b[r],o?o.p(u,d):(o=b[r]=g[r](u),o.c()),h(o,1),o.m(l.parentNode,l))},i(u){t||(h(e.$$.fragment,u),h(o),t=!0)},o(u){k(e.$$.fragment,u),k(o),t=!1},d(u){M(e,u),u&&_(i),b[r].d(u),u&&_(l)}}}function je(s,e,n){let a,i,r;function o(f){a=f,n(1,a)}function l(f){i=f,n(0,i)}function t(f){a=f,n(1,a)}function c(f){i=f,n(0,i)}return s.$$.update=()=>{s.$$.dirty&1&&i&&n(2,r=JSON.parse(JSON.stringify(i)))},[i,a,r,o,l,t,c]}class Ue extends Z{constructor(e){super();Q(this,e,je,Ie,W,{})}}export{Ue as default};
