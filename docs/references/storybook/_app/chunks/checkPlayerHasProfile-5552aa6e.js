import{S as q,i as N,s as O,e as g,D as H,k as W,t as C,c as k,a as p,E as j,d as u,n as F,g as M,b as a,f as w,H as m,l as A,O as B,M as G,A as J}from"./vendor-ef0a5b69.js";import{p as K,s as L}from"./stores-2d9a71bb.js";function S(s){let r,e,l,t,c,h,d,i,x,f,y;function P(n,_){if(n[2]==="goal")return R;if(n[2]==="discuss")return Q}let v=P(s),o=v&&v(s);return{c(){r=g("div"),e=g("div"),l=g("div"),t=H("svg"),c=H("path"),h=W(),d=g("div"),i=g("p"),x=C(`Geen curriculum profiel gevonden
          `),f=g("a"),o&&o.c(),this.h()},l(n){r=k(n,"DIV",{class:!0});var _=p(r);e=k(_,"DIV",{class:!0});var b=p(e);l=k(b,"DIV",{class:!0});var D=p(l);t=j(D,"svg",{class:!0,xmlns:!0,viewBox:!0,fill:!0,"aria-hidden":!0});var I=p(t);c=j(I,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),p(c).forEach(u),I.forEach(u),D.forEach(u),h=F(b),d=k(b,"DIV",{class:!0});var V=p(d);i=k(V,"P",{class:!0});var E=p(i);x=M(E,`Geen curriculum profiel gevonden
          `),f=k(E,"A",{"data-test":!0,href:!0,class:!0});var z=p(f);o&&o.l(z),z.forEach(u),E.forEach(u),V.forEach(u),b.forEach(u),_.forEach(u),this.h()},h(){a(c,"fill-rule","evenodd"),a(c,"d","M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"),a(c,"clip-rule","evenodd"),a(t,"class","h-5 w-5 text-yellow-400"),a(t,"xmlns","http://www.w3.org/2000/svg"),a(t,"viewBox","0 0 20 20"),a(t,"fill","currentColor"),a(t,"aria-hidden","true"),a(l,"class","flex-shrink-0"),a(f,"data-test","create-curriculum-profile-message"),a(f,"href",y="/curriculum-profiel/maken?redirect="+s[1].path),a(f,"class","font-medium underline text-yellow-700 hover:text-yellow-600"),a(i,"class","text-sm text-yellow-700"),a(d,"class","ml-3"),a(e,"class","flex"),a(r,"class","bg-yellow-50 border-l-4 border-yellow-400 p-4")},m(n,_){w(n,r,_),m(r,e),m(e,l),m(l,t),m(t,c),m(e,h),m(e,d),m(d,i),m(i,x),m(i,f),o&&o.m(f,null)},p(n,_){v!==(v=P(n))&&(o&&o.d(1),o=v&&v(n),o&&(o.c(),o.m(f,null))),_&2&&y!==(y="/curriculum-profiel/maken?redirect="+n[1].path)&&a(f,"href",y)},d(n){n&&u(r),o&&o.d()}}}function Q(s){let r;return{c(){r=C(`Maak eerst een curriculum profiel aan om te overleggen over
              leerdoelen`)},l(e){r=M(e,`Maak eerst een curriculum profiel aan om te overleggen over
              leerdoelen`)},m(e,l){w(e,r,l)},d(e){e&&u(r)}}}function R(s){let r;return{c(){r=C("Maak eerst een curriculum profiel aan om aan leerdoelen te werken")},l(e){r=M(e,"Maak eerst een curriculum profiel aan om aan leerdoelen te werken")},m(e,l){w(e,r,l)},d(e){e&&u(r)}}}function T(s){let r,e=!s[0]&&S(s);return{c(){e&&e.c(),r=A()},l(l){e&&e.l(l),r=A()},m(l,t){e&&e.m(l,t),w(l,r,t)},p(l,[t]){l[0]?e&&(e.d(1),e=null):e?e.p(l,t):(e=S(l),e.c(),e.m(r.parentNode,r))},i:B,o:B,d(l){e&&e.d(l),l&&u(r)}}}function U(s,r,e){let l,t;G(s,K,i=>e(1,l=i)),G(s,L,i=>e(4,t=i));let{hasCurriculumProfile:c}=r,h=!1;J(async()=>{e(3,h=!0)});let d="goal";return s.$$set=i=>{"hasCurriculumProfile"in i&&e(0,c=i.hasCurriculumProfile)},s.$$.update=()=>{s.$$.dirty&24&&h&&(t.player&&t.player.curriculumProfileId?e(0,c=!0):e(0,c=!1)),s.$$.dirty&2&&l.path.startsWith("/overleg")&&e(2,d="discuss")},[c,l,d,h,t]}class Z extends q{constructor(r){super();N(this,r,U,T,O,{hasCurriculumProfile:0})}}export{Z as C};
