import{S as q,i as A,s as B,j as E,m as F,o as I,_,x as m,u as d,v as M,l as v,f as N,w as O,d as R,M as S,Y as h,Z as g,r as U}from"../chunks/vendor-9a64f523.js";import{S as Y}from"../chunks/show-cb077780.js";import{p as Z}from"../chunks/stores-bd9665ba.js";import{f as z}from"../chunks/store-b78dac0d.js";import"../chunks/show-4b835def.js";import"../chunks/helper-e98ae755.js";import"../chunks/helper-5c7a4c9b.js";import"../chunks/navigation-51f4a605.js";import"../chunks/singletons-12a22614.js";function C(o){let s,a,e,t,r;function n(i){o[5](i)}function p(i){o[6](i)}function b(i){o[7](i)}let f={};return o[1]!==void 0&&(f.activity=o[1]),o[3]!==void 0&&(f.breadcrumbs=o[3]),o[0]!==void 0&&(f.firebase=o[0]),s=new Y({props:f}),h.push(()=>g(s,"activity",n)),h.push(()=>g(s,"breadcrumbs",p)),h.push(()=>g(s,"firebase",b)),{c(){E(s.$$.fragment)},l(i){F(s.$$.fragment,i)},m(i,c){I(s,i,c),r=!0},p(i,c){const l={};!a&&c&2&&(a=!0,l.activity=i[1],_(()=>a=!1)),!e&&c&8&&(e=!0,l.breadcrumbs=i[3],_(()=>e=!1)),!t&&c&1&&(t=!0,l.firebase=i[0],_(()=>t=!1)),s.$set(l)},i(i){r||(m(s.$$.fragment,i),r=!0)},o(i){d(s.$$.fragment,i),r=!1},d(i){M(s,i)}}}function G(o){let s,a,e=o[2]&&o[1]&&C(o);return{c(){e&&e.c(),s=v()},l(t){e&&e.l(t),s=v()},m(t,r){e&&e.m(t,r),N(t,s,r),a=!0},p(t,[r]){t[2]&&t[1]?e?(e.p(t,r),r&6&&m(e,1)):(e=C(t),e.c(),m(e,1),e.m(s.parentNode,s)):e&&(U(),d(e,1,1,()=>{e=null}),O())},i(t){a||(m(e),a=!0)},o(t){d(e),a=!1},d(t){e&&e.d(t),t&&R(s)}}}function H(o,s,a){let e,t;S(o,Z,u=>a(8,e=u)),S(o,z,u=>a(4,t=u));let r,n,p=!1,b=[{url:"/",value:"Reis"},{url:"/"+e.params.id,value:"Activiteit bekijken"}];async function f(){let u=await r.firestore(),w=u.collection("activities").doc(e.params.id),k=await w.get();if(k.exists&&(a(1,n=k.data()),a(1,n.id=w.id,n),n.goals.length>0)){const D=await u.collection("goals/"+n.goals[0].objectID+"/battles").get();a(1,n.battles=[],n),D.forEach(j=>{let y=j.data();y.name=j.id,a(1,n.battles=[...n.battles,y],n)})}}function i(u){n=u,a(1,n)}function c(u){b=u,a(3,b)}function l(u){r=u,a(0,r),a(4,t)}return o.$$.update=()=>{o.$$.dirty&16&&(async()=>{t&&(a(0,r=t),await f(),a(2,p=!0))})()},[r,n,p,b,t,i,c,l]}class $ extends q{constructor(s){super();A(this,s,H,G,B,{})}}export{$ as default};
