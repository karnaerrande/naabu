import{S as A,i as G,s as I,Y as p,Z as v,e as q,j as k,c as B,a as C,m as w,d as b,b as E,f as g,o as j,_ as d,x as m,u as h,v as $,k as N,l as D,n as U,w as V,r as Y}from"../../../../chunks/vendor-9a64f523.js";import{S as Z}from"../../../../chunks/show-cb077780.js";import{G as z}from"../../../../chunks/getActivityData-7ca7fa60.js";import"../../../../chunks/stores-bd9665ba.js";import"../../../../chunks/show-4b835def.js";import"../../../../chunks/helper-e98ae755.js";import"../../../../chunks/helper-5c7a4c9b.js";import"../../../../chunks/navigation-51f4a605.js";import"../../../../chunks/singletons-12a22614.js";import"../../../../chunks/store-b78dac0d.js";function S(n){let e,s,c,o,r;function u(t){n[4](t)}function _(t){n[5](t)}let l={};return n[1]!==void 0&&(l.firebase=n[1]),n[0]!==void 0&&(l.activity=n[0]),s=new Z({props:l}),p.push(()=>v(s,"firebase",u)),p.push(()=>v(s,"activity",_)),{c(){e=q("div"),k(s.$$.fragment),this.h()},l(t){e=B(t,"DIV",{class:!0});var a=C(e);w(s.$$.fragment,a),a.forEach(b),this.h()},h(){E(e,"class","mt-8 mb-32")},m(t,a){g(t,e,a),j(s,e,null),r=!0},p(t,a){const i={};!c&&a&2&&(c=!0,i.firebase=t[1],d(()=>c=!1)),!o&&a&1&&(o=!0,i.activity=t[0],d(()=>o=!1)),s.$set(i)},i(t){r||(m(s.$$.fragment,t),r=!0)},o(t){h(s.$$.fragment,t),r=!1},d(t){t&&b(e),$(s)}}}function F(n){let e,s,c,o,r,u;function _(i){n[2](i)}function l(i){n[3](i)}let t={};n[1]!==void 0&&(t.firebase=n[1]),n[0]!==void 0&&(t.activity=n[0]),e=new z({props:t}),p.push(()=>v(e,"firebase",_)),p.push(()=>v(e,"activity",l));let a=n[0]&&S(n);return{c(){k(e.$$.fragment),o=N(),a&&a.c(),r=D()},l(i){w(e.$$.fragment,i),o=U(i),a&&a.l(i),r=D()},m(i,f){j(e,i,f),g(i,o,f),a&&a.m(i,f),g(i,r,f),u=!0},p(i,[f]){const y={};!s&&f&2&&(s=!0,y.firebase=i[1],d(()=>s=!1)),!c&&f&1&&(c=!0,y.activity=i[0],d(()=>c=!1)),e.$set(y),i[0]?a?(a.p(i,f),f&1&&m(a,1)):(a=S(i),a.c(),m(a,1),a.m(r.parentNode,r)):a&&(Y(),h(a,1,1,()=>{a=null}),V())},i(i){u||(m(e.$$.fragment,i),m(a),u=!0)},o(i){h(e.$$.fragment,i),h(a),u=!1},d(i){$(e,i),i&&b(o),a&&a.d(i),i&&b(r)}}}function H(n,e,s){let{activity:c}=e,o;function r(t){o=t,s(1,o)}function u(t){c=t,s(0,c)}function _(t){o=t,s(1,o)}function l(t){c=t,s(0,c)}return n.$$set=t=>{"activity"in t&&s(0,c=t.activity)},[c,o,r,u,_,l]}class X extends A{constructor(e){super();G(this,e,H,F,I,{activity:0})}}export{X as default};
