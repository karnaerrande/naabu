import{S as O,i as T,s as Y,Y as b,Z as m,j as q,k as Z,l as D,m as H,n as z,o as S,f as I,_ as v,u as k,w as A,x as y,v as C,d as w,M as B,r as E,t as F,g as J,O as j}from"../../../../chunks/vendor-ef0a5b69.js";import{G as K,H as P}from"../../../../chunks/getListData-bc5f8110.js";import{p as M}from"../../../../chunks/stores-2d9a71bb.js";import"../../../../chunks/helper-821c0d77.js";import"../../../../chunks/store-6c10047c.js";import"../../../../chunks/helper-83b9a453.js";import"../../../../chunks/helper-9858c370.js";function Q(n){let s;return{c(){s=F("Loading...")},l(t){s=J(t,"Loading...")},m(t,a){I(t,s,a)},p:j,i:j,o:j,d(t){t&&w(s)}}}function R(n){let s,t,a,f;function l(e){n[6](e)}function r(e){n[7](e)}let o={};return n[0]!==void 0&&(o.firebase=n[0]),n[1]!==void 0&&(o.revisions=n[1]),s=new P({props:o}),b.push(()=>m(s,"firebase",l)),b.push(()=>m(s,"revisions",r)),{c(){q(s.$$.fragment)},l(e){H(s.$$.fragment,e)},m(e,_){S(s,e,_),f=!0},p(e,_){const d={};!t&&_&1&&(t=!0,d.firebase=e[0],v(()=>t=!1)),!a&&_&2&&(a=!0,d.revisions=e[1],v(()=>a=!1)),s.$set(d)},i(e){f||(y(s.$$.fragment,e),f=!0)},o(e){k(s.$$.fragment,e),f=!1},d(e){C(s,e)}}}function U(n){let s,t,a,f,l,r,o,e,_;function d(i){n[3](i)}function u(i){n[4](i)}function N(i){n[5](i)}let g={revisionType:"activity"};n[0]!==void 0&&(g.firebase=n[0]),n[1]!==void 0&&(g.revisions=n[1]),n[2].params.activityId!==void 0&&(g.sourceId=n[2].params.activityId),s=new K({props:g}),b.push(()=>m(s,"firebase",d)),b.push(()=>m(s,"revisions",u)),b.push(()=>m(s,"sourceId",N));const L=[R,Q],p=[];function G(i,c){return i[1]?0:1}return r=G(n),o=p[r]=L[r](n),{c(){q(s.$$.fragment),l=Z(),o.c(),e=D()},l(i){H(s.$$.fragment,i),l=z(i),o.l(i),e=D()},m(i,c){S(s,i,c),I(i,l,c),p[r].m(i,c),I(i,e,c),_=!0},p(i,[c]){const h={};!t&&c&1&&(t=!0,h.firebase=i[0],v(()=>t=!1)),!a&&c&2&&(a=!0,h.revisions=i[1],v(()=>a=!1)),!f&&c&4&&(f=!0,h.sourceId=i[2].params.activityId,v(()=>f=!1)),s.$set(h);let $=r;r=G(i),r===$?p[r].p(i,c):(E(),k(p[$],1,1,()=>{p[$]=null}),A(),o=p[r],o?o.p(i,c):(o=p[r]=L[r](i),o.c()),y(o,1),o.m(e.parentNode,e))},i(i){_||(y(s.$$.fragment,i),y(o),_=!0)},o(i){k(s.$$.fragment,i),k(o),_=!1},d(i){C(s,i),i&&w(l),p[r].d(i),i&&w(e)}}}function V(n,s,t){let a;B(n,M,u=>t(2,a=u));let f,l;function r(u){f=u,t(0,f)}function o(u){l=u,t(1,l)}function e(u){n.$$.not_equal(a.params.activityId,u)&&(a.params.activityId=u,M.set(a))}function _(u){f=u,t(0,f)}function d(u){l=u,t(1,l)}return[f,l,a,r,o,e,_,d]}class ti extends O{constructor(s){super();T(this,s,V,U,Y,{})}}export{ti as default};
