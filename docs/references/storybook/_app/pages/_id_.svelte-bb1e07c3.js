import{S as q,i as A,s as B,j as E,m as F,o as I,_,x as m,u as d,v as M,l as v,f as N,w as O,d as R,M as S,Y as h,Z as g,r as U}from"../chunks/vendor-ef0a5b69.js";import{S as Y}from"../chunks/show-9ab02d74.js";import{p as Z}from"../chunks/stores-2d9a71bb.js";import{f as z}from"../chunks/store-6c10047c.js";import"../chunks/show-4db925d1.js";import"../chunks/helper-821c0d77.js";import"../chunks/helper-5c7a4c9b.js";import"../chunks/navigation-51f4a605.js";import"../chunks/singletons-12a22614.js";function C(o){let s,a,e,t,r;function n(i){o[5](i)}function p(i){o[6](i)}function b(i){o[7](i)}let f={};return o[1]!==void 0&&(f.activity=o[1]),o[3]!==void 0&&(f.breadcrumbs=o[3]),o[0]!==void 0&&(f.firebase=o[0]),s=new Y({props:f}),h.push(()=>g(s,"activity",n)),h.push(()=>g(s,"breadcrumbs",p)),h.push(()=>g(s,"firebase",b)),{c(){E(s.$$.fragment)},l(i){F(s.$$.fragment,i)},m(i,u){I(s,i,u),r=!0},p(i,u){const l={};!a&&u&2&&(a=!0,l.activity=i[1],_(()=>a=!1)),!e&&u&8&&(e=!0,l.breadcrumbs=i[3],_(()=>e=!1)),!t&&u&1&&(t=!0,l.firebase=i[0],_(()=>t=!1)),s.$set(l)},i(i){r||(m(s.$$.fragment,i),r=!0)},o(i){d(s.$$.fragment,i),r=!1},d(i){M(s,i)}}}function G(o){let s,a,e=o[2]&&o[1]&&C(o);return{c(){e&&e.c(),s=v()},l(t){e&&e.l(t),s=v()},m(t,r){e&&e.m(t,r),N(t,s,r),a=!0},p(t,[r]){t[2]&&t[1]?e?(e.p(t,r),r&6&&m(e,1)):(e=C(t),e.c(),m(e,1),e.m(s.parentNode,s)):e&&(U(),d(e,1,1,()=>{e=null}),O())},i(t){a||(m(e),a=!0)},o(t){d(e),a=!1},d(t){e&&e.d(t),t&&R(s)}}}function H(o,s,a){let e,t;S(o,Z,c=>a(8,e=c)),S(o,z,c=>a(4,t=c));let r,n,p=!1,b=[{url:"/",value:"Reis"},{url:"/"+e.params.id,value:"Activiteit bekijken"}];async function f(){let c=await r.firestore(),w=c.collection("activities").doc(e.params.id),k=await w.get();if(k.exists&&(a(1,n=k.data()),a(1,n.id=w.id,n),n.goals.length>0)){const D=await c.collection("goals/"+n.goals[0].objectID+"/battles").get();a(1,n.battles=[],n),D.forEach(j=>{let y=j.data();y.name=j.id,a(1,n.battles=[...n.battles,y],n)})}}function i(c){n=c,a(1,n)}function u(c){b=c,a(3,b)}function l(c){r=c,a(0,r),a(4,t)}return o.$$.update=()=>{o.$$.dirty&16&&(async()=>{t&&(a(0,r=t),await f(),a(2,p=!0))})()},[r,n,p,b,t,i,u,l]}class $ extends q{constructor(s){super();A(this,s,H,G,B,{})}}export{$ as default};