import{S as k,i as h,s as L,t as u,e as c,k as S,l as m,g as p,c as d,n as j,f as a,a as A,d as f,b as g,H as N,O as _,M as b}from"../../../chunks/vendor-9a64f523.js";import{s as O}from"../../../chunks/stores-bd9665ba.js";import{f as q}from"../../../chunks/store-b78dac0d.js";function v(r){let n,s,e,i,o=r[0].user&&r[0].user.isAnonymous&&y();return{c(){n=u("Logging out current user "),s=c("br"),e=S(),o&&o.c(),i=m()},l(t){n=p(t,"Logging out current user "),s=d(t,"BR",{}),e=j(t),o&&o.l(t),i=m()},m(t,l){a(t,n,l),a(t,s,l),a(t,e,l),o&&o.m(t,l),a(t,i,l)},p(t,l){t[0].user&&t[0].user.isAnonymous?o||(o=y(),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},d(t){t&&f(n),t&&f(s),t&&f(e),o&&o.d(t),t&&f(i)}}}function y(r){let n,s;return{c(){n=c("div"),s=u("Logout complete"),this.h()},l(e){n=d(e,"DIV",{"data-test":!0});var i=A(n);s=p(i,"Logout complete"),i.forEach(f),this.h()},h(){g(n,"data-test","complete")},m(e,i){a(e,n,i),N(n,s)},d(e){e&&f(n)}}}function B(r){let n,s=(r[0].environment==="cypress"||r[0].environment==="test"||r[0].environment==="development")&&v(r);return{c(){s&&s.c(),n=m()},l(e){s&&s.l(e),n=m()},m(e,i){s&&s.m(e,i),a(e,n,i)},p(e,[i]){e[0].environment==="cypress"||e[0].environment==="test"||e[0].environment==="development"?s?s.p(e,i):(s=v(e),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:_,o:_,d(e){s&&s.d(e),e&&f(n)}}}function C(r,n,s){let e,i;b(r,O,t=>s(0,e=t)),b(r,q,t=>s(2,i=t));let o;return r.$$.update=()=>{r.$$.dirty&7&&(async()=>{i&&(s(1,o=i),(e.environment==="cypress"||e.environment==="test"||e.environment==="development")&&e.user&&!e.user.isAnonymous&&o.auth().signOut())})()},[e,o,i]}class I extends k{constructor(n){super();h(this,n,C,B,L,{})}}export{I as default};
