import{S as q,i as z,s as B,j as _,k as F,m as g,n as L,o as k,f as h,_ as j,x as l,u as m,v as $,d as v,l as w,w as M,M as T,Y as y,Z as C,r as H}from"../../chunks/vendor-9a64f523.js";import{C as N}from"../../chunks/create-b41a6755.js";import{f as Y}from"../../chunks/store-b78dac0d.js";import{B as Z}from"../../chunks/breadcrumbPageTitle-3eadeeda.js";import"../../chunks/stores-bd9665ba.js";import"../../chunks/checkPlayerHasProfile-b1851115.js";import"../../chunks/form-272bebbb.js";import"../../chunks/quizzesForm-adbab4ef.js";import"../../chunks/dialog-c021e43e.js";import"../../chunks/helper-e98ae755.js";import"../../chunks/resultFeedback-6bde5315.js";import"../../chunks/helper-d6a45b8d.js";import"../../chunks/navigation-51f4a605.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/show-4b835def.js";function P(t){let s,n,e,r,i,c;function f(a){t[3](a)}let o={title:"Leerdoel maken"};t[0]!==void 0&&(o.breadcrumbs=t[0]),s=new Z({props:o}),y.push(()=>C(s,"breadcrumbs",f));function S(a){t[4](a)}let b={};return t[1]!==void 0&&(b.firebase=t[1]),r=new N({props:b}),y.push(()=>C(r,"firebase",S)),{c(){_(s.$$.fragment),e=F(),_(r.$$.fragment)},l(a){g(s.$$.fragment,a),e=L(a),g(r.$$.fragment,a)},m(a,u){k(s,a,u),h(a,e,u),k(r,a,u),c=!0},p(a,u){const p={};!n&&u&1&&(n=!0,p.breadcrumbs=a[0],j(()=>n=!1)),s.$set(p);const d={};!i&&u&2&&(i=!0,d.firebase=a[1],j(()=>i=!1)),r.$set(d)},i(a){c||(l(s.$$.fragment,a),l(r.$$.fragment,a),c=!0)},o(a){m(s.$$.fragment,a),m(r.$$.fragment,a),c=!1},d(a){$(s,a),a&&v(e),$(r,a)}}}function A(t){let s,n,e=t[1]&&P(t);return{c(){e&&e.c(),s=w()},l(r){e&&e.l(r),s=w()},m(r,i){e&&e.m(r,i),h(r,s,i),n=!0},p(r,[i]){r[1]?e?(e.p(r,i),i&2&&l(e,1)):(e=P(r),e.c(),l(e,1),e.m(s.parentNode,s)):e&&(H(),m(e,1,1,()=>{e=null}),M())},i(r){n||(l(e),n=!0)},o(r){m(e),n=!1},d(r){e&&e.d(r),r&&v(s)}}}function D(t,s,n){let e;T(t,Y,o=>n(2,e=o));let r=[{url:"/curriculum",value:"Curriculum"},{url:"/leerdoel/maken",value:"Leerdoel maken"}],i;function c(o){r=o,n(0,r)}function f(o){i=o,n(1,i),n(2,e)}return t.$$.update=()=>{t.$$.dirty&4&&(async()=>{e&&n(1,i=e)})()},[r,i,e,c,f]}class ae extends q{constructor(s){super();z(this,s,D,A,B,{})}}export{ae as default};
