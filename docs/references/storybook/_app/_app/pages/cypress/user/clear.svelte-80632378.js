import{S as v,i as b,s as y,t as m,l as a,g as u,f as l,e as h,c as k,a as N,d as r,b as S,H as j,O as c,M as d}from"../../../chunks/vendor-9a64f523.js";import{s as w}from"../../../chunks/stores-bd9665ba.js";import{f as A}from"../../../chunks/store-b78dac0d.js";function p(i){let n,s,e=i[0].user&&i[0].user.isAnonymous&&_();return{c(){n=m(`Great success! Now logout!
  `),e&&e.c(),s=a()},l(t){n=u(t,`Great success! Now logout!
  `),e&&e.l(t),s=a()},m(t,o){l(t,n,o),e&&e.m(t,o),l(t,s,o)},p(t,o){t[0].user&&t[0].user.isAnonymous?e||(e=_(),e.c(),e.m(s.parentNode,s)):e&&(e.d(1),e=null)},d(t){t&&r(n),e&&e.d(t),t&&r(s)}}}function _(i){let n,s;return{c(){n=h("div"),s=m("Deleting user complete"),this.h()},l(e){n=k(e,"DIV",{"data-test":!0});var t=N(n);s=u(t,"Deleting user complete"),t.forEach(r),this.h()},h(){S(n,"data-test","complete")},m(e,t){l(e,n,t),j(n,s)},d(e){e&&r(n)}}}function D(i){let n,s=(i[0].environment==="cypress"||i[0].environment==="test"||i[0].environment==="development")&&p(i);return{c(){s&&s.c(),n=a()},l(e){s&&s.l(e),n=a()},m(e,t){s&&s.m(e,t),l(e,n,t)},p(e,[t]){e[0].environment==="cypress"||e[0].environment==="test"||e[0].environment==="development"?s?s.p(e,t):(s=p(e),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:c,o:c,d(e){s&&s.d(e),e&&r(n)}}}function C(i,n,s){let e,t;d(i,w,f=>s(0,e=f)),d(i,A,f=>s(2,t=f));let o;return i.$$.update=()=>{i.$$.dirty&7&&(async()=>{t&&(s(1,o=t),(e.environment==="cypress"||e.environment==="test"||e.environment==="development")&&e.user&&!e.user.isAnonymous&&await o.auth().currentUser.delete())})()},[e,o,t]}class H extends v{constructor(n){super();b(this,n,C,D,y,{})}}export{H as default};
