import{S as M,i as w,s as N,t as d,l,g as u,f,e as S,c as j,a as P,d as a,b as D,H as I,O as y,M as _}from"../../chunks/vendor-ef0a5b69.js";import{s as R}from"../../chunks/stores-2d9a71bb.js";import{f as q}from"../../chunks/store-6c10047c.js";function b(s){let n,t,e=s[1]&&v();return{c(){n=d(`Now deleting the user map!
  `),e&&e.c(),t=l()},l(r){n=u(r,`Now deleting the user map!
  `),e&&e.l(r),t=l()},m(r,i){f(r,n,i),e&&e.m(r,i),f(r,t,i)},p(r,i){r[1]?e||(e=v(),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(r){r&&a(n),e&&e.d(r),r&&a(t)}}}function v(s){let n,t;return{c(){n=S("div"),t=d("Player map is deleted!"),this.h()},l(e){n=j(e,"DIV",{"data-test":!0});var r=P(n);t=u(r,"Player map is deleted!"),r.forEach(a),this.h()},h(){D(n,"data-test","complete")},m(e,r){f(e,n,r),I(n,t)},d(e){e&&a(n)}}}function C(s){let n,t=(s[0].environment==="cypress"||s[0].environment==="test"||s[0].environment==="development")&&b(s);return{c(){t&&t.c(),n=l()},l(e){t&&t.l(e),n=l()},m(e,r){t&&t.m(e,r),f(e,n,r)},p(e,[r]){e[0].environment==="cypress"||e[0].environment==="test"||e[0].environment==="development"?t?t.p(e,r):(t=b(e),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null)},i:y,o:y,d(e){t&&t.d(e),e&&a(n)}}}function E(s,n,t){let e,r;_(s,q,o=>t(4,e=o)),_(s,R,o=>t(0,r=o));let i,m=!1,c=!1,p;async function h(){let o=p.collection("maps").doc(r.player.currentMapId).collection("players").doc(r.player.id);try{await o.delete(),t(1,m=!0)}catch(k){console.error(k)}}return s.$$.update=()=>{s.$$.dirty&20&&(async()=>{e&&(t(2,i=e),p=await i.firestore(),t(3,c=!0))})(),s.$$.dirty&9&&c&&(r.environment==="cypress"||r.environment==="test"||r.environment==="development")&&r.player&&h()},[r,m,i,c,e]}class z extends M{constructor(n){super();w(this,n,E,C,N,{})}}export{z as default};
