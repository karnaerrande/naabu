import{S as O,i as T,s as Y,Y as b,Z as m,j as q,k as Z,l as D,m as H,n as z,o as S,f as I,_ as v,u as k,w as A,x as y,v as C,d as w,M as B,r as E,t as F,g as J,O as j}from"../../../../chunks/vendor-9a64f523.js";import{G as K,H as P}from"../../../../chunks/getListData-e449bc7a.js";import{p as M}from"../../../../chunks/stores-bd9665ba.js";import"../../../../chunks/helper-e98ae755.js";import"../../../../chunks/store-b78dac0d.js";import"../../../../chunks/helper-de78ef5d.js";import"../../../../chunks/helper-13ceec00.js";function Q(n){let i;return{c(){i=F("Loading...")},l(t){i=J(t,"Loading...")},m(t,a){I(t,i,a)},p:j,i:j,o:j,d(t){t&&w(i)}}}function R(n){let i,t,a,f;function l(s){n[6](s)}function r(s){n[7](s)}let o={};return n[0]!==void 0&&(o.firebase=n[0]),n[1]!==void 0&&(o.revisions=n[1]),i=new P({props:o}),b.push(()=>m(i,"firebase",l)),b.push(()=>m(i,"revisions",r)),{c(){q(i.$$.fragment)},l(s){H(i.$$.fragment,s)},m(s,_){S(i,s,_),f=!0},p(s,_){const d={};!t&&_&1&&(t=!0,d.firebase=s[0],v(()=>t=!1)),!a&&_&2&&(a=!0,d.revisions=s[1],v(()=>a=!1)),i.$set(d)},i(s){f||(y(i.$$.fragment,s),f=!0)},o(s){k(i.$$.fragment,s),f=!1},d(s){C(i,s)}}}function U(n){let i,t,a,f,l,r,o,s,_;function d(e){n[3](e)}function u(e){n[4](e)}function N(e){n[5](e)}let g={revisionType:"activity"};n[0]!==void 0&&(g.firebase=n[0]),n[1]!==void 0&&(g.revisions=n[1]),n[2].params.activityId!==void 0&&(g.sourceId=n[2].params.activityId),i=new K({props:g}),b.push(()=>m(i,"firebase",d)),b.push(()=>m(i,"revisions",u)),b.push(()=>m(i,"sourceId",N));const L=[R,Q],p=[];function G(e,c){return e[1]?0:1}return r=G(n),o=p[r]=L[r](n),{c(){q(i.$$.fragment),l=Z(),o.c(),s=D()},l(e){H(i.$$.fragment,e),l=z(e),o.l(e),s=D()},m(e,c){S(i,e,c),I(e,l,c),p[r].m(e,c),I(e,s,c),_=!0},p(e,[c]){const h={};!t&&c&1&&(t=!0,h.firebase=e[0],v(()=>t=!1)),!a&&c&2&&(a=!0,h.revisions=e[1],v(()=>a=!1)),!f&&c&4&&(f=!0,h.sourceId=e[2].params.activityId,v(()=>f=!1)),i.$set(h);let $=r;r=G(e),r===$?p[r].p(e,c):(E(),k(p[$],1,1,()=>{p[$]=null}),A(),o=p[r],o?o.p(e,c):(o=p[r]=L[r](e),o.c()),y(o,1),o.m(s.parentNode,s))},i(e){_||(y(i.$$.fragment,e),y(o),_=!0)},o(e){k(i.$$.fragment,e),k(o),_=!1},d(e){C(i,e),e&&w(l),p[r].d(e),e&&w(s)}}}function V(n,i,t){let a;B(n,M,u=>t(2,a=u));let f,l;function r(u){f=u,t(0,f)}function o(u){l=u,t(1,l)}function s(u){n.$$.not_equal(a.params.activityId,u)&&(a.params.activityId=u,M.set(a))}function _(u){f=u,t(0,f)}function d(u){l=u,t(1,l)}return[f,l,a,r,o,s,_,d]}class te extends O{constructor(i){super();T(this,i,V,U,Y,{})}}export{te as default};
