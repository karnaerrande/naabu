import{S as q,i as A,s as C,l as d,f as p,u as m,w as h,x as _,d as f,M as g,r as y,e as v,t as j,k as H,c as S,a as w,g as I,n as M,b as J,H as N,I as O,J as P,O as b,Q,R,U as T,V as U,N as E}from"../../chunks/vendor-9a64f523.js";import{s as k}from"../../chunks/stores-bd9665ba.js";import{f as V}from"../../chunks/store-b78dac0d.js";import{l as z}from"../../chunks/helper-405801da.js";import"../../chunks/helper-5c7a4c9b.js";function $(n){let l,r,e,t;const o=[D,B],i=[];function c(s,a){return s[0].user?0:1}return l=c(n),r=i[l]=o[l](n),{c(){r.c(),e=d()},l(s){r.l(s),e=d()},m(s,a){i[l].m(s,a),p(s,e,a),t=!0},p(s,a){let u=l;l=c(s),l===u?i[l].p(s,a):(y(),m(i[u],1,1,()=>{i[u]=null}),h(),r=i[l],r?r.p(s,a):(r=i[l]=o[l](s),r.c()),_(r,1),r.m(e.parentNode,e))},i(s){t||(_(r),t=!0)},o(s){m(r),t=!1},d(s){i[l].d(s),s&&f(e)}}}function B(n){let l,r,e,t,o,i,c;return{c(){l=v("p"),r=j("Je moet eerst inloggen om naar de lerarenkamer te gaan"),e=H(),t=v("a"),o=j("Inloggen"),this.h()},l(s){l=S(s,"P",{});var a=w(l);r=I(a,"Je moet eerst inloggen om naar de lerarenkamer te gaan"),a.forEach(f),e=M(s),t=S(s,"A",{href:!0,class:!0});var u=w(t);o=I(u,"Inloggen"),u.forEach(f),this.h()},h(){J(t,"href","#"),J(t,"class","inline-block mt-4 bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75")},m(s,a){p(s,l,a),N(l,r),p(s,e,a),p(s,t,a),N(t,o),i||(c=O(t,"click",P(n[2])),i=!0)},p:b,i:b,o:b,d(s){s&&f(l),s&&f(e),s&&f(t),i=!1,c()}}}function D(n){let l;const r=n[4].default,e=Q(r,n,n[3],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,o){e&&e.m(t,o),l=!0},p(t,o){e&&e.p&&(!l||o&8)&&R(e,r,t,t[3],l?U(r,t[3],o,null):T(t[3]),null)},i(t){l||(_(e,t),l=!0)},o(t){m(e,t),l=!1},d(t){e&&e.d(t)}}}function F(n){let l,r,e=n[1]&&$(n);return{c(){e&&e.c(),l=d()},l(t){e&&e.l(t),l=d()},m(t,o){e&&e.m(t,o),p(t,l,o),r=!0},p(t,[o]){t[1]?e?(e.p(t,o),o&2&&_(e,1)):(e=$(t),e.c(),_(e,1),e.m(l.parentNode,l)):e&&(y(),m(e,1,1,()=>{e=null}),h())},i(t){r||(_(e),r=!0)},o(t){m(e),r=!1},d(t){e&&e.d(t),t&&f(l)}}}function G(n,l,r){let e,t;g(n,k,s=>r(0,e=s)),g(n,V,s=>r(1,t=s));let{$$slots:o={},$$scope:i}=l;async function c(){let s=t;if(s)try{let a=await z(s);a!==null&&(E(k,e.user=a.user,e),E(k,e.player=a.player,e))}catch(a){console.log(a)}}return n.$$set=s=>{"$$scope"in s&&r(3,i=s.$$scope)},[e,t,c,i,o]}class Z extends q{constructor(l){super();A(this,l,G,F,C,{})}}export{Z as default};
