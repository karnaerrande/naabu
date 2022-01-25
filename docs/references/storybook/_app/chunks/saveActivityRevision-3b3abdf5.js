import{S as We,i as Ye,s as Ze,e as k,t as C,k as B,c as V,a as z,g as j,d as u,n as S,b,f as E,H as h,h as ae,K as Xe,l as ie,O as we,r as Ke,u as K,w as Ue,x as P,Y as F,Z as L,j as ne,m as te,o as le,_ as G,v as fe,I as yi,J as vn,M as gn}from"./vendor-ef0a5b69.js";import{g as hn,a as bn,f as ii,b as ni,c as pn}from"./helper-83b9a453.js";import{d as pi,g as ti}from"./helper-821c0d77.js";import{g as ki}from"./navigation-51f4a605.js";import{R as In}from"./revision-573df816.js";import{s as yn}from"./stores-2d9a71bb.js";import{d as kn}from"./helper-9858c370.js";function Vi(i,n,e){const t=i.slice();return t[6]=n[e],t[8]=e,t}function zi(i,n,e){const t=i.slice();return t[6]=n[e],t[8]=e,t}function Ai(i){let n,e,t,l,d,f,s,o,c,g,p,v,a,w,m,D,T,Q,M=i[2],O=[];for(let N=0;N<M.length;N+=1)O[N]=Di(zi(i,M,N));let I=i[3],A=[];for(let N=0;N<I.length;N+=1)A[N]=Ni(Vi(i,I,N));return{c(){n=k("div"),e=k("div"),t=k("div"),l=k("div"),d=k("div"),f=k("div"),s=k("div"),o=k("p"),c=C(i[1]),g=B(),p=k("div"),v=B(),a=k("div"),w=k("div");for(let N=0;N<O.length;N+=1)O[N].c();D=B(),T=k("div");for(let N=0;N<A.length;N+=1)A[N].c();this.h()},l(N){n=V(N,"DIV",{class:!0});var U=z(n);e=V(U,"DIV",{class:!0});var q=z(e);t=V(q,"DIV",{class:!0});var H=z(t);l=V(H,"DIV",{class:!0});var re=z(l);d=V(re,"DIV",{class:!0});var ge=z(d);f=V(ge,"DIV",{class:!0});var de=z(f);s=V(de,"DIV",{class:!0});var W=z(s);o=V(W,"P",{class:!0});var he=z(o);c=j(he,i[1]),he.forEach(u),W.forEach(u),g=S(de),p=V(de,"DIV",{class:!0}),z(p).forEach(u),de.forEach(u),ge.forEach(u),v=S(re),a=V(re,"DIV",{class:!0});var ue=z(a);w=V(ue,"DIV",{"data-cy":!0});var Ie=z(w);for(let _e=0;_e<O.length;_e+=1)O[_e].l(Ie);Ie.forEach(u),D=S(ue),T=V(ue,"DIV",{"data-cy":!0});var oe=z(T);for(let _e=0;_e<A.length;_e+=1)A[_e].l(oe);oe.forEach(u),ue.forEach(u),re.forEach(u),H.forEach(u),q.forEach(u),U.forEach(u),this.h()},h(){b(o,"class","text-sm font-medium text-gray-900"),b(s,"class","min-w-0 flex-1"),b(p,"class","flex-shrink-0 self-center flex"),b(f,"class","flex space-x-3"),b(d,"class","bg-white border-b border-gray-200 px-4 py-5 sm:px-6"),b(w,"data-cy",m=""+(i[1]+"-old")),b(T,"data-cy",Q=""+(i[1]+"-new")),b(a,"class","grid gap-4 grid-cols-2 mt-4 px-4 pb-5 sm:p-6 sm:pt-0"),b(l,"class","bg-white overflow-hidden sm:rounded-lg sm:shadow"),b(t,"class","max-w-none mx-auto"),b(e,"class","max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"),b(n,"class","bg-gray-100")},m(N,U){E(N,n,U),h(n,e),h(e,t),h(t,l),h(l,d),h(d,f),h(f,s),h(s,o),h(o,c),h(f,g),h(f,p),h(l,v),h(l,a),h(a,w);for(let q=0;q<O.length;q+=1)O[q].m(w,null);h(a,D),h(a,T);for(let q=0;q<A.length;q+=1)A[q].m(T,null)},p(N,U){if(U&2&&ae(c,N[1]),U&20){M=N[2];let q;for(q=0;q<M.length;q+=1){const H=zi(N,M,q);O[q]?O[q].p(H,U):(O[q]=Di(H),O[q].c(),O[q].m(w,null))}for(;q<O.length;q+=1)O[q].d(1);O.length=M.length}if(U&2&&m!==(m=""+(N[1]+"-old"))&&b(w,"data-cy",m),U&40){I=N[3];let q;for(q=0;q<I.length;q+=1){const H=Vi(N,I,q);A[q]?A[q].p(H,U):(A[q]=Ni(H),A[q].c(),A[q].m(T,null))}for(;q<A.length;q+=1)A[q].d(1);A.length=I.length}U&2&&Q!==(Q=""+(N[1]+"-new"))&&b(T,"data-cy",Q)},d(N){N&&u(n),Xe(O,N),Xe(A,N)}}}function Ei(i){let n=i[4][i[8]]+"",e;return{c(){e=C(n)},l(t){e=j(t,n)},m(t,l){E(t,e,l)},p(t,l){l&16&&n!==(n=t[4][t[8]]+"")&&ae(e,n)},d(t){t&&u(e)}}}function Di(i){let n,e=i[6]+"",t,l,d,f,s=i[4]&&Ei(i);return{c(){n=k("div"),t=C(e),l=C(` -
                  `),s&&s.c(),d=B(),this.h()},l(o){n=V(o,"DIV",{"data-cy":!0});var c=z(n);t=j(c,e),l=j(c,` -
                  `),s&&s.l(c),d=S(c),c.forEach(u),this.h()},h(){b(n,"data-cy",f="old-index"+i[8])},m(o,c){E(o,n,c),h(n,t),h(n,l),s&&s.m(n,null),h(n,d)},p(o,c){c&4&&e!==(e=o[6]+"")&&ae(t,e),o[4]?s?s.p(o,c):(s=Ei(o),s.c(),s.m(n,d)):s&&(s.d(1),s=null)},d(o){o&&u(n),s&&s.d()}}}function qi(i){let n,e=i[5][i[8]]+"",t;return{c(){n=C(`-
                    `),t=C(e)},l(l){n=j(l,`-
                    `),t=j(l,e)},m(l,d){E(l,n,d),E(l,t,d)},p(l,d){d&32&&e!==(e=l[5][l[8]]+"")&&ae(t,e)},d(l){l&&u(n),l&&u(t)}}}function Ni(i){let n,e=i[6]+"",t,l,d,f,s=i[5]&&qi(i);return{c(){n=k("div"),t=C(e),l=B(),s&&s.c(),d=B(),this.h()},l(o){n=V(o,"DIV",{"data-cy":!0});var c=z(n);t=j(c,e),l=S(c),s&&s.l(c),d=S(c),c.forEach(u),this.h()},h(){b(n,"data-cy",f="new-index"+i[8])},m(o,c){E(o,n,c),h(n,t),h(n,l),s&&s.m(n,null),h(n,d)},p(o,c){c&8&&e!==(e=o[6]+"")&&ae(t,e),o[5]?s?s.p(o,c):(s=qi(o),s.c(),s.m(n,d)):s&&(s.d(1),s=null)},d(o){o&&u(n),s&&s.d()}}}function Vn(i){let n,e=i[0]&&Ai(i);return{c(){e&&e.c(),n=ie()},l(t){e&&e.l(t),n=ie()},m(t,l){e&&e.m(t,l),E(t,n,l)},p(t,[l]){t[0]?e?e.p(t,l):(e=Ai(t),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},i:we,o:we,d(t){e&&e.d(t),t&&u(n)}}}function zn(i,n,e){let{title:t="Verschil"}=n,{old:l}=n,{neww:d}=n,{old2:f=null}=n,{neww2:s=null}=n,{differs:o=!1}=n;return i.$$set=c=>{"title"in c&&e(1,t=c.title),"old"in c&&e(2,l=c.old),"neww"in c&&e(3,d=c.neww),"old2"in c&&e(4,f=c.old2),"neww2"in c&&e(5,s=c.neww2),"differs"in c&&e(0,o=c.differs)},i.$$.update=()=>{i.$$.dirty&60&&l&&d&&e(0,o=!pi(l,d,f,s))},[o,t,l,d,f,s]}class Te extends We{constructor(n){super();Ye(this,n,zn,Vn,Ze,{title:1,old:2,neww:3,old2:4,neww2:5,differs:0})}}function Ti(i){let n,e,t,l,d,f,s,o,c,g,p,v,a,w,m,D,T,Q,M,O;return{c(){n=k("div"),e=k("div"),t=k("div"),l=k("div"),d=k("div"),f=k("div"),s=k("div"),o=k("p"),c=C(i[3]),g=B(),p=k("div"),v=B(),a=k("div"),w=k("div"),m=C(i[1]),T=B(),Q=k("div"),M=C(i[2]),this.h()},l(I){n=V(I,"DIV",{class:!0});var A=z(n);e=V(A,"DIV",{class:!0});var N=z(e);t=V(N,"DIV",{class:!0});var U=z(t);l=V(U,"DIV",{class:!0});var q=z(l);d=V(q,"DIV",{class:!0});var H=z(d);f=V(H,"DIV",{class:!0});var re=z(f);s=V(re,"DIV",{class:!0});var ge=z(s);o=V(ge,"P",{class:!0});var de=z(o);c=j(de,i[3]),de.forEach(u),ge.forEach(u),g=S(re),p=V(re,"DIV",{class:!0}),z(p).forEach(u),re.forEach(u),H.forEach(u),v=S(q),a=V(q,"DIV",{class:!0});var W=z(a);w=V(W,"DIV",{"data-cy":!0});var he=z(w);m=j(he,i[1]),he.forEach(u),T=S(W),Q=V(W,"DIV",{"data-cy":!0});var ue=z(Q);M=j(ue,i[2]),ue.forEach(u),W.forEach(u),q.forEach(u),U.forEach(u),N.forEach(u),A.forEach(u),this.h()},h(){b(o,"class","text-sm font-medium text-gray-900"),b(s,"class","min-w-0 flex-1"),b(p,"class","flex-shrink-0 self-center flex"),b(f,"class","flex space-x-3"),b(d,"class","bg-white border-b border-gray-200 px-4 py-5 sm:px-6"),b(w,"data-cy",D=""+(i[3]+"-old")),b(Q,"data-cy",O=""+(i[3]+"-new")),b(a,"class","grid gap-4 grid-cols-2 mt-4 px-4 pb-5 sm:p-6 sm:pt-0"),b(l,"class","bg-white overflow-hidden sm:rounded-lg sm:shadow"),b(t,"class","max-w-none mx-auto"),b(e,"class","max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"),b(n,"class","bg-gray-100")},m(I,A){E(I,n,A),h(n,e),h(e,t),h(t,l),h(l,d),h(d,f),h(f,s),h(s,o),h(o,c),h(f,g),h(f,p),h(l,v),h(l,a),h(a,w),h(w,m),h(a,T),h(a,Q),h(Q,M)},p(I,A){A&8&&ae(c,I[3]),A&2&&ae(m,I[1]),A&8&&D!==(D=""+(I[3]+"-old"))&&b(w,"data-cy",D),A&4&&ae(M,I[2]),A&8&&O!==(O=""+(I[3]+"-new"))&&b(Q,"data-cy",O)},d(I){I&&u(n)}}}function An(i){let n,e=i[0]&&Ti(i);return{c(){e&&e.c(),n=ie()},l(t){e&&e.l(t),n=ie()},m(t,l){e&&e.m(t,l),E(t,n,l)},p(t,[l]){t[0]?e?e.p(t,l):(e=Ti(t),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},i:we,o:we,d(t){e&&e.d(t),t&&u(n)}}}function En(i,n,e){let{old:t=""}=n,{neww:l=""}=n,{title:d="difference"}=n,{differs:f}=n;return i.$$set=s=>{"old"in s&&e(1,t=s.old),"neww"in s&&e(2,l=s.neww),"title"in s&&e(3,d=s.title),"differs"in s&&e(0,f=s.differs)},i.$$.update=()=>{i.$$.dirty&6&&(e(0,f=!1),t!==l&&e(0,f=!0))},[f,t,l,d]}class Ae extends We{constructor(n){super();Ye(this,n,En,An,Ze,{old:1,neww:2,title:3,differs:0})}}function Qi(i,n,e){const t=i.slice();return t[8]=n[e],t[9]=n,t[10]=e,t}function Dn(i){let n,e;return{c(){n=k("div"),e=C("Loading..."),this.h()},l(t){n=V(t,"DIV",{class:!0});var l=z(n);e=j(l,"Loading..."),l.forEach(u),this.h()},h(){b(n,"class","mt-4")},m(t,l){E(t,n,l),h(n,e)},p:we,i:we,o:we,d(t){t&&u(n)}}}function qn(i){let n,e,t=i[1],l=[];for(let f=0;f<t.length;f+=1)l[f]=Oi(Qi(i,t,f));const d=f=>K(l[f],1,1,()=>{l[f]=null});return{c(){for(let f=0;f<l.length;f+=1)l[f].c();n=ie()},l(f){for(let s=0;s<l.length;s+=1)l[s].l(f);n=ie()},m(f,s){for(let o=0;o<l.length;o+=1)l[o].m(f,s);E(f,n,s),e=!0},p(f,s){if(s&2){t=f[1];let o;for(o=0;o<t.length;o+=1){const c=Qi(f,t,o);l[o]?(l[o].p(c,s),P(l[o],1)):(l[o]=Oi(c),l[o].c(),P(l[o],1),l[o].m(n.parentNode,n))}for(Ke(),o=t.length;o<l.length;o+=1)d(o);Ue()}},i(f){if(!e){for(let s=0;s<t.length;s+=1)P(l[s]);e=!0}},o(f){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)K(l[s]);e=!1},d(f){Xe(l,f),f&&u(n)}}}function Nn(i){let n,e,t,l;function d(o){i[5](o,i[8])}function f(o){i[6](o,i[8])}let s={title:ii(i[8].key)};return i[8].oldValue!==void 0&&(s.old=i[8].oldValue),i[8].newValue!==void 0&&(s.neww=i[8].newValue),n=new Te({props:s}),F.push(()=>L(n,"old",d)),F.push(()=>L(n,"neww",f)),{c(){ne(n.$$.fragment)},l(o){te(n.$$.fragment,o)},m(o,c){le(n,o,c),l=!0},p(o,c){i=o;const g={};c&2&&(g.title=ii(i[8].key)),!e&&c&2&&(e=!0,g.old=i[8].oldValue,G(()=>e=!1)),!t&&c&2&&(t=!0,g.neww=i[8].newValue,G(()=>t=!1)),n.$set(g)},i(o){l||(P(n.$$.fragment,o),l=!0)},o(o){K(n.$$.fragment,o),l=!1},d(o){fe(n,o)}}}function Tn(i){let n,e;return n=new Ae({props:{title:ii(i[8].keys),old:ni(i[8],i[8].oldValue),neww:ni(i[8],i[8].newValue)}}),{c(){ne(n.$$.fragment)},l(t){te(n.$$.fragment,t)},m(t,l){le(n,t,l),e=!0},p(t,l){const d={};l&2&&(d.title=ii(t[8].keys)),l&2&&(d.old=ni(t[8],t[8].oldValue)),l&2&&(d.neww=ni(t[8],t[8].newValue)),n.$set(d)},i(t){e||(P(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){fe(n,t)}}}function Oi(i){let n,e,t,l;const d=[Tn,Nn],f=[];function s(o,c){return o[8].type==="string"?0:o[8].type==="array"?1:-1}return~(n=s(i))&&(e=f[n]=d[n](i)),{c(){e&&e.c(),t=ie()},l(o){e&&e.l(o),t=ie()},m(o,c){~n&&f[n].m(o,c),E(o,t,c),l=!0},p(o,c){let g=n;n=s(o),n===g?~n&&f[n].p(o,c):(e&&(Ke(),K(f[g],1,1,()=>{f[g]=null}),Ue()),~n?(e=f[n],e?e.p(o,c):(e=f[n]=d[n](o),e.c()),P(e,1),e.m(t.parentNode,t)):e=null)},i(o){l||(P(e),l=!0)},o(o){K(e),l=!1},d(o){~n&&f[n].d(o),o&&u(t)}}}function Qn(i){let n,e,t,l;const d=[qn,Dn],f=[];function s(o,c){return o[0]?1:0}return n=s(i),e=f[n]=d[n](i),{c(){e.c(),t=ie()},l(o){e.l(o),t=ie()},m(o,c){f[n].m(o,c),E(o,t,c),l=!0},p(o,[c]){let g=n;n=s(o),n===g?f[n].p(o,c):(Ke(),K(f[g],1,1,()=>{f[g]=null}),Ue(),e=f[n],e?e.p(o,c):(e=f[n]=d[n](o),e.c()),P(e,1),e.m(t.parentNode,t))},i(o){l||(P(e),l=!0)},o(o){K(e),l=!1},d(o){f[n].d(o),o&&u(t)}}}function On(i,n,e){let{revisionOld:t}=n,{revisionNew:l}=n,{loading:d=!1}=n,{differences:f=[]}=n,s,o=bn();function c(p,v){i.$$.not_equal(v.oldValue,p)&&(v.oldValue=p,e(1,s),e(2,t),e(3,l),e(7,o))}function g(p,v){i.$$.not_equal(v.newValue,p)&&(v.newValue=p,e(1,s),e(2,t),e(3,l),e(7,o))}return i.$$set=p=>{"revisionOld"in p&&e(2,t=p.revisionOld),"revisionNew"in p&&e(3,l=p.revisionNew),"loading"in p&&e(0,d=p.loading),"differences"in p&&e(4,f=p.differences)},i.$$.update=()=>{i.$$.dirty&12&&t&&l&&e(1,s=hn(t,l,o))},[d,s,t,l,f,c,g]}class Mn extends We{constructor(n){super();Ye(this,n,On,Qn,Ze,{revisionOld:2,revisionNew:3,loading:0,differences:4})}}function Ri(i,n,e){const t=i.slice();return t[37]=n[e],t[38]=n,t[39]=e,t}function Ci(i,n,e){const t=i.slice();return t[40]=n[e],t[41]=n,t[42]=e,t}function Rn(i){let n,e;return{c(){n=k("div"),e=C("Loading..."),this.h()},l(t){n=V(t,"DIV",{class:!0});var l=z(n);e=j(l,"Loading..."),l.forEach(u),this.h()},h(){b(n,"class","mt-4")},m(t,l){E(t,n,l),h(n,e)},p:we,i:we,o:we,d(t){t&&u(n)}}}function Cn(i){let n,e,t,l,d,f,s,o,c,g,p,v,a,w,m,D,T,Q,M,O,I,A,N,U,q,H,re,ge,de,W,he,ue,Ie,oe,_e,He,Qe,me,Je,_,R,Y,Oe,ye,Ee,Z,De,Re,qe,ce,Ce,ve,se,$,li,fi,$e,be,ri,oi,xe,Be,ei,si,Ii,x=i[0]&&Bi(i),ee=i[1]&&Pi(i);function Wi(r){i[8](r)}function Yi(r){i[9](r)}let di={title:"Titel"};i[0].title!==void 0&&(di.old=i[0].title),i[1].title!==void 0&&(di.neww=i[1].title),A=new Ae({props:di}),F.push(()=>L(A,"old",Wi)),F.push(()=>L(A,"neww",Yi));function Zi(r){i[10](r)}function Xi(r){i[11](r)}let ai={title:"Omschrijving"};i[0].description!==void 0&&(ai.old=i[0].description),i[1].description!==void 0&&(ai.neww=i[1].description),H=new Ae({props:ai}),F.push(()=>L(H,"old",Zi)),F.push(()=>L(H,"neww",Xi));function $i(r){i[12](r)}function xi(r){i[13](r)}let ui={title:"Onderwerp"};i[0].unitopic!==void 0&&(ui.old=i[0].unitopic),i[1].unitopic!==void 0&&(ui.neww=i[1].unitopic),W=new Ae({props:ui}),F.push(()=>L(W,"old",$i)),F.push(()=>L(W,"neww",xi));function en(r){i[14](r)}function nn(r){i[15](r)}let _i={title:"from Text"};i[0].fromText!==void 0&&(_i.old=i[0].fromText),i[1].fromText!==void 0&&(_i.neww=i[1].fromText),oe=new Ae({props:_i}),F.push(()=>L(oe,"old",en)),F.push(()=>L(oe,"neww",nn));function tn(r){i[16](r)}function ln(r){i[17](r)}let ci={title:"Onderwerpen"};i[0].multitopics!==void 0&&(ci.old=i[0].multitopics),i[1].multitopics!==void 0&&(ci.neww=i[1].multitopics),me=new Te({props:ci}),F.push(()=>L(me,"old",tn)),F.push(()=>L(me,"neww",ln));function fn(r){i[18](r)}function rn(r){i[19](r)}let wi={title:"Werkwoorden"};i[0].selectedVerbs!==void 0&&(wi.old=i[0].selectedVerbs),i[1].selectedVerbs!==void 0&&(wi.neww=i[1].selectedVerbs),Y=new Te({props:wi}),F.push(()=>L(Y,"old",fn)),F.push(()=>L(Y,"neww",rn));function on(r){i[20](r)}function sn(r){i[21](r)}let mi={title:"Bloom's taxonomy"};i[0].taxonomy_bloom!==void 0&&(mi.old=i[0].taxonomy_bloom),i[1].taxonomy_bloom!==void 0&&(mi.neww=i[1].taxonomy_bloom),Z=new Te({props:mi}),F.push(()=>L(Z,"old",on)),F.push(()=>L(Z,"neww",sn));function dn(r){i[22](r)}function an(r){i[23](r)}let vi={title:"Solo's taxonomy"};i[0].taxonomy_solo!==void 0&&(vi.old=i[0].taxonomy_solo),i[1].taxonomy_solo!==void 0&&(vi.neww=i[1].taxonomy_solo),ce=new Ae({props:vi}),F.push(()=>L(ce,"old",dn)),F.push(()=>L(ce,"neww",an));function un(r){i[24](r)}function _n(r){i[25](r)}let gi={title:"Solo's taxonomy"};i[0].goals!==void 0&&(gi.old=i[0].goals),i[1].goals!==void 0&&(gi.neww=i[1].goals),$=new Ae({props:gi}),F.push(()=>L($,"old",un)),F.push(()=>L($,"neww",_n));function cn(r){i[26](r)}function wn(r){i[27](r)}let hi={title:"Battles"};i[0].battleNames!==void 0&&(hi.old=i[0].battleNames),i[1].battleNames!==void 0&&(hi.neww=i[1].battleNames),be=new Te({props:hi}),F.push(()=>L(be,"old",cn)),F.push(()=>L(be,"neww",wn));let Ne=i[5],J=[];for(let r=0;r<Ne.length;r+=1)J[r]=Hi(Ri(i,Ne,r));const mn=r=>K(J[r],1,1,()=>{J[r]=null});return{c(){n=k("div"),e=k("button"),t=C("Overleg deze wijzigingen"),l=B(),d=k("div"),f=k("div"),s=k("div"),o=k("div"),c=k("div"),g=k("div"),p=k("div"),v=k("p"),a=C("Verschil tussen versies"),w=B(),m=k("div"),D=B(),T=k("div"),Q=k("div"),x&&x.c(),M=B(),O=k("div"),ee&&ee.c(),I=B(),ne(A.$$.fragment),q=B(),ne(H.$$.fragment),de=B(),ne(W.$$.fragment),Ie=B(),ne(oe.$$.fragment),Qe=B(),ne(me.$$.fragment),R=B(),ne(Y.$$.fragment),Ee=B(),ne(Z.$$.fragment),qe=B(),ne(ce.$$.fragment),se=B(),ne($.$$.fragment),$e=B(),ne(be.$$.fragment),xe=B();for(let r=0;r<J.length;r+=1)J[r].c();Be=ie(),this.h()},l(r){n=V(r,"DIV",{class:!0});var y=z(n);e=V(y,"BUTTON",{"data-cy":!0,class:!0});var pe=z(e);t=j(pe,"Overleg deze wijzigingen"),pe.forEach(u),y.forEach(u),l=S(r),d=V(r,"DIV",{class:!0});var je=z(d);f=V(je,"DIV",{class:!0});var Se=z(f);s=V(Se,"DIV",{class:!0});var Pe=z(s);o=V(Pe,"DIV",{class:!0});var ke=z(o);c=V(ke,"DIV",{class:!0});var Fe=z(c);g=V(Fe,"DIV",{class:!0});var Ve=z(g);p=V(Ve,"DIV",{class:!0});var Le=z(p);v=V(Le,"P",{class:!0});var Ge=z(v);a=j(Ge,"Verschil tussen versies"),Ge.forEach(u),Le.forEach(u),w=S(Ve),m=V(Ve,"DIV",{class:!0}),z(m).forEach(u),Ve.forEach(u),Fe.forEach(u),D=S(ke),T=V(ke,"DIV",{class:!0});var ze=z(T);Q=V(ze,"DIV",{});var X=z(Q);x&&x.l(X),X.forEach(u),M=S(ze),O=V(ze,"DIV",{});var Me=z(O);ee&&ee.l(Me),Me.forEach(u),ze.forEach(u),ke.forEach(u),Pe.forEach(u),Se.forEach(u),je.forEach(u),I=S(r),te(A.$$.fragment,r),q=S(r),te(H.$$.fragment,r),de=S(r),te(W.$$.fragment,r),Ie=S(r),te(oe.$$.fragment,r),Qe=S(r),te(me.$$.fragment,r),R=S(r),te(Y.$$.fragment,r),Ee=S(r),te(Z.$$.fragment,r),qe=S(r),te(ce.$$.fragment,r),se=S(r),te($.$$.fragment,r),$e=S(r),te(be.$$.fragment,r),xe=S(r);for(let bi=0;bi<J.length;bi+=1)J[bi].l(r);Be=ie(),this.h()},h(){b(e,"data-cy","discuss-revision-button"),b(e,"class","mt-3 bg-white py-2 ml-auto px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),b(n,"class","max-w-7xl flex"),b(v,"class","text-sm font-medium text-gray-900"),b(p,"class","min-w-0 flex-1"),b(m,"class","flex-shrink-0 self-center flex"),b(g,"class","flex space-x-3"),b(c,"class","bg-white border-b border-gray-200 px-4 py-5 sm:px-6"),b(T,"class","grid gap-4 mt-2 grid-cols-2 px-4 pb-5 sm:p-6 sm:pt-0"),b(o,"class","overflow-hidden"),b(s,"class","max-w-none mx-auto"),b(f,"class","max-w-7xl mx-auto py-2 sm:px-6 lg:px-4"),b(d,"class","")},m(r,y){E(r,n,y),h(n,e),h(e,t),E(r,l,y),E(r,d,y),h(d,f),h(f,s),h(s,o),h(o,c),h(c,g),h(g,p),h(p,v),h(v,a),h(g,w),h(g,m),h(o,D),h(o,T),h(T,Q),x&&x.m(Q,null),h(T,M),h(T,O),ee&&ee.m(O,null),E(r,I,y),le(A,r,y),E(r,q,y),le(H,r,y),E(r,de,y),le(W,r,y),E(r,Ie,y),le(oe,r,y),E(r,Qe,y),le(me,r,y),E(r,R,y),le(Y,r,y),E(r,Ee,y),le(Z,r,y),E(r,qe,y),le(ce,r,y),E(r,se,y),le($,r,y),E(r,$e,y),le(be,r,y),E(r,xe,y);for(let pe=0;pe<J.length;pe+=1)J[pe].m(r,y);E(r,Be,y),ei=!0,si||(Ii=yi(e,"click",vn(i[6])),si=!0)},p(r,y){r[0]?x?x.p(r,y):(x=Bi(r),x.c(),x.m(Q,null)):x&&(x.d(1),x=null),r[1]?ee?ee.p(r,y):(ee=Pi(r),ee.c(),ee.m(O,null)):ee&&(ee.d(1),ee=null);const pe={};!N&&y[0]&1&&(N=!0,pe.old=r[0].title,G(()=>N=!1)),!U&&y[0]&2&&(U=!0,pe.neww=r[1].title,G(()=>U=!1)),A.$set(pe);const je={};!re&&y[0]&1&&(re=!0,je.old=r[0].description,G(()=>re=!1)),!ge&&y[0]&2&&(ge=!0,je.neww=r[1].description,G(()=>ge=!1)),H.$set(je);const Se={};!he&&y[0]&1&&(he=!0,Se.old=r[0].unitopic,G(()=>he=!1)),!ue&&y[0]&2&&(ue=!0,Se.neww=r[1].unitopic,G(()=>ue=!1)),W.$set(Se);const Pe={};!_e&&y[0]&1&&(_e=!0,Pe.old=r[0].fromText,G(()=>_e=!1)),!He&&y[0]&2&&(He=!0,Pe.neww=r[1].fromText,G(()=>He=!1)),oe.$set(Pe);const ke={};!Je&&y[0]&1&&(Je=!0,ke.old=r[0].multitopics,G(()=>Je=!1)),!_&&y[0]&2&&(_=!0,ke.neww=r[1].multitopics,G(()=>_=!1)),me.$set(ke);const Fe={};!Oe&&y[0]&1&&(Oe=!0,Fe.old=r[0].selectedVerbs,G(()=>Oe=!1)),!ye&&y[0]&2&&(ye=!0,Fe.neww=r[1].selectedVerbs,G(()=>ye=!1)),Y.$set(Fe);const Ve={};!De&&y[0]&1&&(De=!0,Ve.old=r[0].taxonomy_bloom,G(()=>De=!1)),!Re&&y[0]&2&&(Re=!0,Ve.neww=r[1].taxonomy_bloom,G(()=>Re=!1)),Z.$set(Ve);const Le={};!Ce&&y[0]&1&&(Ce=!0,Le.old=r[0].taxonomy_solo,G(()=>Ce=!1)),!ve&&y[0]&2&&(ve=!0,Le.neww=r[1].taxonomy_solo,G(()=>ve=!1)),ce.$set(Le);const Ge={};!li&&y[0]&1&&(li=!0,Ge.old=r[0].goals,G(()=>li=!1)),!fi&&y[0]&2&&(fi=!0,Ge.neww=r[1].goals,G(()=>fi=!1)),$.$set(Ge);const ze={};if(!ri&&y[0]&1&&(ri=!0,ze.old=r[0].battleNames,G(()=>ri=!1)),!oi&&y[0]&2&&(oi=!0,ze.neww=r[1].battleNames,G(()=>oi=!1)),be.$set(ze),y[0]&32){Ne=r[5];let X;for(X=0;X<Ne.length;X+=1){const Me=Ri(r,Ne,X);J[X]?(J[X].p(Me,y),P(J[X],1)):(J[X]=Hi(Me),J[X].c(),P(J[X],1),J[X].m(Be.parentNode,Be))}for(Ke(),X=Ne.length;X<J.length;X+=1)mn(X);Ue()}},i(r){if(!ei){P(A.$$.fragment,r),P(H.$$.fragment,r),P(W.$$.fragment,r),P(oe.$$.fragment,r),P(me.$$.fragment,r),P(Y.$$.fragment,r),P(Z.$$.fragment,r),P(ce.$$.fragment,r),P($.$$.fragment,r),P(be.$$.fragment,r);for(let y=0;y<Ne.length;y+=1)P(J[y]);ei=!0}},o(r){K(A.$$.fragment,r),K(H.$$.fragment,r),K(W.$$.fragment,r),K(oe.$$.fragment,r),K(me.$$.fragment,r),K(Y.$$.fragment,r),K(Z.$$.fragment,r),K(ce.$$.fragment,r),K($.$$.fragment,r),K(be.$$.fragment,r),J=J.filter(Boolean);for(let y=0;y<J.length;y+=1)K(J[y]);ei=!1},d(r){r&&u(n),r&&u(l),r&&u(d),x&&x.d(),ee&&ee.d(),r&&u(I),fe(A,r),r&&u(q),fe(H,r),r&&u(de),fe(W,r),r&&u(Ie),fe(oe,r),r&&u(Qe),fe(me,r),r&&u(R),fe(Y,r),r&&u(Ee),fe(Z,r),r&&u(qe),fe(ce,r),r&&u(se),fe($,r),r&&u($e),fe(be,r),r&&u(xe),Xe(J,r),r&&u(Be),si=!1,Ii()}}}function Bi(i){let n,e=ti(i[0].createdAt)+"",t,l,d,f,s,o,c,g,p,v=i[0].revisionAuthorId&&i[0].curriculumProfile&&ji(i),a=i[2]&&Si(i);return{c(){n=k("a"),t=C(e),d=C(`
                (`),f=k("a"),s=C("edit"),c=C(`)
                `),g=k("div"),v&&v.c(),p=B(),a&&a.c(),this.h()},l(w){n=V(w,"A",{class:!0,href:!0});var m=z(n);t=j(m,e),m.forEach(u),d=j(w,`
                (`),f=V(w,"A",{class:!0,href:!0});var D=z(f);s=j(D,"edit"),D.forEach(u),c=j(w,`)
                `),g=V(w,"DIV",{});var T=z(g);v&&v.l(T),p=S(T),a&&a.l(T),T.forEach(u),this.h()},h(){b(n,"class","underline"),b(n,"href",l="/revisie/"+i[0].revisionId),b(f,"class","underline"),b(f,"href",o="/revisie/"+i[0].revisionId+"/wijzigen")},m(w,m){E(w,n,m),h(n,t),E(w,d,m),E(w,f,m),h(f,s),E(w,c,m),E(w,g,m),v&&v.m(g,null),h(g,p),a&&a.m(g,null)},p(w,m){m[0]&1&&e!==(e=ti(w[0].createdAt)+"")&&ae(t,e),m[0]&1&&l!==(l="/revisie/"+w[0].revisionId)&&b(n,"href",l),m[0]&1&&o!==(o="/revisie/"+w[0].revisionId+"/wijzigen")&&b(f,"href",o),w[0].revisionAuthorId&&w[0].curriculumProfile?v?v.p(w,m):(v=ji(w),v.c(),v.m(g,p)):v&&(v.d(1),v=null),w[2]?a?a.p(w,m):(a=Si(w),a.c(),a.m(g,null)):a&&(a.d(1),a=null)},d(w){w&&u(n),w&&u(d),w&&u(f),w&&u(c),w&&u(g),v&&v.d(),a&&a.d()}}}function ji(i){let n,e,t=i[0].curriculumProfile.fullname+"",l,d;return{c(){n=k("div"),e=k("a"),l=C(t),this.h()},l(f){n=V(f,"DIV",{});var s=z(n);e=V(s,"A",{class:!0,href:!0});var o=z(e);l=j(o,t),o.forEach(u),s.forEach(u),this.h()},h(){b(e,"class","underline"),b(e,"href",d="/curriculum-profiel/"+i[0].revisionAuthorId)},m(f,s){E(f,n,s),h(n,e),h(e,l)},p(f,s){s[0]&1&&t!==(t=f[0].curriculumProfile.fullname+"")&&ae(l,t),s[0]&1&&d!==(d="/curriculum-profiel/"+f[0].revisionAuthorId)&&b(e,"href",d)},d(f){f&&u(n)}}}function Si(i){let n,e,t,l;return{c(){n=k("div"),e=k("a"),t=C("\u2190 Oudere bewerking"),this.h()},l(d){n=V(d,"DIV",{class:!0});var f=z(n);e=V(f,"A",{class:!0,href:!0});var s=z(e);t=j(s,"\u2190 Oudere bewerking"),s.forEach(u),f.forEach(u),this.h()},h(){b(e,"class","underline"),b(e,"href",l="/revisie/"+i[0].revisionId+"/diff/"+i[2].revisionId),b(n,"class","mt-6")},m(d,f){E(d,n,f),h(n,e),h(e,t)},p(d,f){f[0]&5&&l!==(l="/revisie/"+d[0].revisionId+"/diff/"+d[2].revisionId)&&b(e,"href",l)},d(d){d&&u(n)}}}function Pi(i){let n,e=ti(i[1].createdAt)+"",t,l,d,f,s,o,c,g,p,v=i[1].revisionAuthorId&&i[1].curriculumProfile&&Fi(i),a=i[3]&&Li(i);return{c(){n=k("a"),t=C(e),d=C(`
                (`),f=k("a"),s=C("edit"),c=C(`)
                `),g=k("div"),v&&v.c(),p=B(),a&&a.c(),this.h()},l(w){n=V(w,"A",{class:!0,href:!0});var m=z(n);t=j(m,e),m.forEach(u),d=j(w,`
                (`),f=V(w,"A",{class:!0,href:!0});var D=z(f);s=j(D,"edit"),D.forEach(u),c=j(w,`)
                `),g=V(w,"DIV",{});var T=z(g);v&&v.l(T),p=S(T),a&&a.l(T),T.forEach(u),this.h()},h(){b(n,"class","underline"),b(n,"href",l="/revisie/"+i[1].revisionId),b(f,"class","underline"),b(f,"href",o="/revisie/"+i[1].revisionId+"/wijzigen")},m(w,m){E(w,n,m),h(n,t),E(w,d,m),E(w,f,m),h(f,s),E(w,c,m),E(w,g,m),v&&v.m(g,null),h(g,p),a&&a.m(g,null)},p(w,m){m[0]&2&&e!==(e=ti(w[1].createdAt)+"")&&ae(t,e),m[0]&2&&l!==(l="/revisie/"+w[1].revisionId)&&b(n,"href",l),m[0]&2&&o!==(o="/revisie/"+w[1].revisionId+"/wijzigen")&&b(f,"href",o),w[1].revisionAuthorId&&w[1].curriculumProfile?v?v.p(w,m):(v=Fi(w),v.c(),v.m(g,p)):v&&(v.d(1),v=null),w[3]?a?a.p(w,m):(a=Li(w),a.c(),a.m(g,null)):a&&(a.d(1),a=null)},d(w){w&&u(n),w&&u(d),w&&u(f),w&&u(c),w&&u(g),v&&v.d(),a&&a.d()}}}function Fi(i){let n,e,t=i[1].curriculumProfile.fullname+"",l,d;return{c(){n=k("div"),e=k("a"),l=C(t),this.h()},l(f){n=V(f,"DIV",{});var s=z(n);e=V(s,"A",{class:!0,href:!0});var o=z(e);l=j(o,t),o.forEach(u),s.forEach(u),this.h()},h(){b(e,"class","underline"),b(e,"href",d="/curriculum-profiel/"+i[1].revisionAuthorId)},m(f,s){E(f,n,s),h(n,e),h(e,l)},p(f,s){s[0]&2&&t!==(t=f[1].curriculumProfile.fullname+"")&&ae(l,t),s[0]&2&&d!==(d="/curriculum-profiel/"+f[1].revisionAuthorId)&&b(e,"href",d)},d(f){f&&u(n)}}}function Li(i){let n,e,t,l;return{c(){n=k("div"),e=k("a"),t=C("Nieuwere bewerking \u2192"),this.h()},l(d){n=V(d,"DIV",{class:!0});var f=z(n);e=V(f,"A",{class:!0,href:!0});var s=z(e);t=j(s,"Nieuwere bewerking \u2192"),s.forEach(u),f.forEach(u),this.h()},h(){b(e,"class","underline"),b(e,"href",l="/revisie/"+i[3].revisionId+"/diff/"+i[1].revisionId),b(n,"class","mt-6")},m(d,f){E(d,n,f),h(n,e),h(e,t)},p(d,f){f[0]&10&&l!==(l="/revisie/"+d[3].revisionId+"/diff/"+d[1].revisionId)&&b(e,"href",l)},d(d){d&&u(n)}}}function Gi(i){let n,e,t=i[37].name+"",l;return{c(){n=k("b"),e=C("Veldslag "),l=C(t)},l(d){n=V(d,"B",{});var f=z(n);e=j(f,"Veldslag "),l=j(f,t),f.forEach(u)},m(d,f){E(d,n,f),h(n,e),h(n,l)},p(d,f){f[0]&32&&t!==(t=d[37].name+"")&&ae(l,t)},d(d){d&&u(n)}}}function Ki(i){let n,e,t=i[40].quizId+"",l;return{c(){n=k("b"),e=C("Quizz "),l=C(t)},l(d){n=V(d,"B",{});var f=z(n);e=j(f,"Quizz "),l=j(f,t),f.forEach(u)},m(d,f){E(d,n,f),h(n,e),h(n,l)},p(d,f){f[0]&32&&t!==(t=d[40].quizId+"")&&ae(l,t)},d(d){d&&u(n)}}}function Ui(i){let n,e,t,l,d,f,s,o,c,g,p,v=i[40].quizzDiffers&&Ki(i);function a(I){i[30](I,i[40])}function w(I){i[31](I,i[40])}let m={title:"Vraag"};i[40].oldQuestion!==void 0&&(m.old=i[40].oldQuestion),i[40].newQuestion!==void 0&&(m.neww=i[40].newQuestion),e=new Ae({props:m}),F.push(()=>L(e,"old",a)),F.push(()=>L(e,"neww",w));function D(I){i[32](I,i[40])}function T(I){i[33](I,i[40])}function Q(I){i[34](I,i[40])}function M(I){i[35](I,i[40])}let O={title:"Antwoorden"};return i[40].oldAnswerText!==void 0&&(O.old=i[40].oldAnswerText),i[40].newAnswerText!==void 0&&(O.neww=i[40].newAnswerText),i[40].oldAnswerCorrect!==void 0&&(O.old2=i[40].oldAnswerCorrect),i[40].newAnswerCorrect!==void 0&&(O.neww2=i[40].newAnswerCorrect),f=new Te({props:O}),F.push(()=>L(f,"old",D)),F.push(()=>L(f,"neww",T)),F.push(()=>L(f,"old2",Q)),F.push(()=>L(f,"neww2",M)),{c(){v&&v.c(),n=B(),ne(e.$$.fragment),d=B(),ne(f.$$.fragment)},l(I){v&&v.l(I),n=S(I),te(e.$$.fragment,I),d=S(I),te(f.$$.fragment,I)},m(I,A){v&&v.m(I,A),E(I,n,A),le(e,I,A),E(I,d,A),le(f,I,A),p=!0},p(I,A){i=I,i[40].quizzDiffers?v?v.p(i,A):(v=Ki(i),v.c(),v.m(n.parentNode,n)):v&&(v.d(1),v=null);const N={};!t&&A[0]&32&&(t=!0,N.old=i[40].oldQuestion,G(()=>t=!1)),!l&&A[0]&32&&(l=!0,N.neww=i[40].newQuestion,G(()=>l=!1)),e.$set(N);const U={};!s&&A[0]&32&&(s=!0,U.old=i[40].oldAnswerText,G(()=>s=!1)),!o&&A[0]&32&&(o=!0,U.neww=i[40].newAnswerText,G(()=>o=!1)),!c&&A[0]&32&&(c=!0,U.old2=i[40].oldAnswerCorrect,G(()=>c=!1)),!g&&A[0]&32&&(g=!0,U.neww2=i[40].newAnswerCorrect,G(()=>g=!1)),f.$set(U)},i(I){p||(P(e.$$.fragment,I),P(f.$$.fragment,I),p=!0)},o(I){K(e.$$.fragment,I),K(f.$$.fragment,I),p=!1},d(I){v&&v.d(I),I&&u(n),fe(e,I),I&&u(d),fe(f,I)}}}function Hi(i){let n,e,t,l,d,f,s,o=i[37].differs&&Gi(i);function c(m){i[28](m,i[37])}function g(m){i[29](m,i[37])}let p={title:"Quizzes"};i[37].oldQuizIds!==void 0&&(p.old=i[37].oldQuizIds),i[37].newQuizIds!==void 0&&(p.neww=i[37].newQuizIds),e=new Te({props:p}),F.push(()=>L(e,"old",c)),F.push(()=>L(e,"neww",g));let v=i[37].quizzes,a=[];for(let m=0;m<v.length;m+=1)a[m]=Ui(Ci(i,v,m));const w=m=>K(a[m],1,1,()=>{a[m]=null});return{c(){o&&o.c(),n=B(),ne(e.$$.fragment),d=B();for(let m=0;m<a.length;m+=1)a[m].c();f=ie()},l(m){o&&o.l(m),n=S(m),te(e.$$.fragment,m),d=S(m);for(let D=0;D<a.length;D+=1)a[D].l(m);f=ie()},m(m,D){o&&o.m(m,D),E(m,n,D),le(e,m,D),E(m,d,D);for(let T=0;T<a.length;T+=1)a[T].m(m,D);E(m,f,D),s=!0},p(m,D){i=m,i[37].differs?o?o.p(i,D):(o=Gi(i),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null);const T={};if(!t&&D[0]&32&&(t=!0,T.old=i[37].oldQuizIds,G(()=>t=!1)),!l&&D[0]&32&&(l=!0,T.neww=i[37].newQuizIds,G(()=>l=!1)),e.$set(T),D[0]&32){v=i[37].quizzes;let Q;for(Q=0;Q<v.length;Q+=1){const M=Ci(i,v,Q);a[Q]?(a[Q].p(M,D),P(a[Q],1)):(a[Q]=Ui(M),a[Q].c(),P(a[Q],1),a[Q].m(f.parentNode,f))}for(Ke(),Q=v.length;Q<a.length;Q+=1)w(Q);Ue()}},i(m){if(!s){P(e.$$.fragment,m);for(let D=0;D<v.length;D+=1)P(a[D]);s=!0}},o(m){K(e.$$.fragment,m),a=a.filter(Boolean);for(let D=0;D<a.length;D+=1)K(a[D]);s=!1},d(m){o&&o.d(m),m&&u(n),fe(e,m),m&&u(d),Xe(a,m),m&&u(f)}}}function Bn(i){let n,e,t,l,d,f,s;function o(a){i[7](a)}let c={subSelected:"read"};i[1]!==void 0&&(c.revision=i[1]),n=new In({props:c}),F.push(()=>L(n,"revision",o));const g=[Cn,Rn],p=[];function v(a,w){return a[4]?1:0}return l=v(i),d=p[l]=g[l](i),{c(){ne(n.$$.fragment),t=B(),d.c(),f=ie()},l(a){te(n.$$.fragment,a),t=S(a),d.l(a),f=ie()},m(a,w){le(n,a,w),E(a,t,w),p[l].m(a,w),E(a,f,w),s=!0},p(a,w){const m={};!e&&w[0]&2&&(e=!0,m.revision=a[1],G(()=>e=!1)),n.$set(m);let D=l;l=v(a),l===D?p[l].p(a,w):(Ke(),K(p[D],1,1,()=>{p[D]=null}),Ue(),d=p[l],d?d.p(a,w):(d=p[l]=g[l](a),d.c()),P(d,1),d.m(f.parentNode,f))},i(a){s||(P(n.$$.fragment,a),P(d),s=!0)},o(a){K(n.$$.fragment,a),K(d),s=!1},d(a){fe(n,a),a&&u(t),p[l].d(a),a&&u(f)}}}function Ji(i){let n=[];if(i.battles)for(let e=0;e<i.battles.length;e++)n.push(i.battles[e].name);i.battleNames=n}function Mi(i){let n=[];if(i.quizzes)for(let e=0;e<i.quizzes.length;e++)i.quizzes[e].id&&n.push(i.quizzes[e].id);i.quizIds=n}function jn(i,n,e){let{revisionOld:t}=n,{revisionNew:l}=n,{goBackRevision:d}=n,{goForwardRevision:f}=n,{loading:s=!1}=n,o=[];function c(){if(e(5,o=[]),l.battles)for(let _=0;_<l.battles.length;_++){let R=t.battleNames.indexOf(l.battles[_].name);if(R!==-1){Mi(l.battles[_]),Mi(t.battles[R]);let Y={name:l.battles[_].name,newQuizIds:l.battles[_].quizIds,oldQuizIds:t.battles[R].quizIds,differs:!1};pi(Y.newQuizIds,Y.oldQuizIds)||(Y.differs=!0);let Oe=[];for(let ye=0;ye<l.battles[_].quizzes.length;ye++){let Ee=Y.oldQuizIds.indexOf(l.battles[_].quizzes[ye].id);if(Ee!==-1){let Z=l.battles[_].quizzes[ye],De=t.battles[R].quizzes[Ee],Re=[],qe=[],ce=[],Ce=[];for(let se=0;se<Z.answers.length;se++){Re.push(Z.answers[se].answer);let $="Goede antwoord";Z.answers[se].correct||($="Fout antwoord"),qe.push($)}for(let se=0;se<De.answers.length;se++){ce.push(De.answers[se].answer);let $="Goede antwoord";Z.answers[se]&&!Z.answers[se].correct&&($="Fout antwoord"),Ce.push($)}let ve={newQuestion:Z.question,oldQuestion:De.question,newAnswerText:Re,oldAnswerText:ce,newAnswerCorrect:qe,oldAnswerCorrect:Ce,quizId:Z.id,quizzDiffers:!1};(!pi(ve.newAnswerText,ve.oldAnswerText,ve.newAnswerCorrect,ve.oldAnswerCorrect)||ve.newQuestion!==ve.oldQuestion)&&(ve.quizzDiffers=!0,Y.differs=!0),Oe.push(ve)}}Y.quizzes=Oe,e(5,o=[...o,Y])}}}async function g(){ki("/overleg/revisie/"+l.goalId+"/"+l.revisionId+"/"+t.revisionId+"/aanmaken")}function p(_){l=_,e(1,l)}function v(_){i.$$.not_equal(t.title,_)&&(t.title=_,e(0,t))}function a(_){i.$$.not_equal(l.title,_)&&(l.title=_,e(1,l))}function w(_){i.$$.not_equal(t.description,_)&&(t.description=_,e(0,t))}function m(_){i.$$.not_equal(l.description,_)&&(l.description=_,e(1,l))}function D(_){i.$$.not_equal(t.unitopic,_)&&(t.unitopic=_,e(0,t))}function T(_){i.$$.not_equal(l.unitopic,_)&&(l.unitopic=_,e(1,l))}function Q(_){i.$$.not_equal(t.fromText,_)&&(t.fromText=_,e(0,t))}function M(_){i.$$.not_equal(l.fromText,_)&&(l.fromText=_,e(1,l))}function O(_){i.$$.not_equal(t.multitopics,_)&&(t.multitopics=_,e(0,t))}function I(_){i.$$.not_equal(l.multitopics,_)&&(l.multitopics=_,e(1,l))}function A(_){i.$$.not_equal(t.selectedVerbs,_)&&(t.selectedVerbs=_,e(0,t))}function N(_){i.$$.not_equal(l.selectedVerbs,_)&&(l.selectedVerbs=_,e(1,l))}function U(_){i.$$.not_equal(t.taxonomy_bloom,_)&&(t.taxonomy_bloom=_,e(0,t))}function q(_){i.$$.not_equal(l.taxonomy_bloom,_)&&(l.taxonomy_bloom=_,e(1,l))}function H(_){i.$$.not_equal(t.taxonomy_solo,_)&&(t.taxonomy_solo=_,e(0,t))}function re(_){i.$$.not_equal(l.taxonomy_solo,_)&&(l.taxonomy_solo=_,e(1,l))}function ge(_){i.$$.not_equal(t.goals,_)&&(t.goals=_,e(0,t))}function de(_){i.$$.not_equal(l.goals,_)&&(l.goals=_,e(1,l))}function W(_){i.$$.not_equal(t.battleNames,_)&&(t.battleNames=_,e(0,t))}function he(_){i.$$.not_equal(l.battleNames,_)&&(l.battleNames=_,e(1,l))}function ue(_,R){i.$$.not_equal(R.oldQuizIds,_)&&(R.oldQuizIds=_,e(5,o))}function Ie(_,R){i.$$.not_equal(R.newQuizIds,_)&&(R.newQuizIds=_,e(5,o))}function oe(_,R){i.$$.not_equal(R.oldQuestion,_)&&(R.oldQuestion=_,e(5,o))}function _e(_,R){i.$$.not_equal(R.newQuestion,_)&&(R.newQuestion=_,e(5,o))}function He(_,R){i.$$.not_equal(R.oldAnswerText,_)&&(R.oldAnswerText=_,e(5,o))}function Qe(_,R){i.$$.not_equal(R.newAnswerText,_)&&(R.newAnswerText=_,e(5,o))}function me(_,R){i.$$.not_equal(R.oldAnswerCorrect,_)&&(R.oldAnswerCorrect=_,e(5,o))}function Je(_,R){i.$$.not_equal(R.newAnswerCorrect,_)&&(R.newAnswerCorrect=_,e(5,o))}return i.$$set=_=>{"revisionOld"in _&&e(0,t=_.revisionOld),"revisionNew"in _&&e(1,l=_.revisionNew),"goBackRevision"in _&&e(2,d=_.goBackRevision),"goForwardRevision"in _&&e(3,f=_.goForwardRevision),"loading"in _&&e(4,s=_.loading)},i.$$.update=()=>{i.$$.dirty[0]&3&&t&&l&&(Ji(t),Ji(l),c())},[t,l,d,f,s,o,g,p,v,a,w,m,D,T,Q,M,O,I,A,N,U,q,H,re,ge,de,W,he,ue,Ie,oe,_e,He,Qe,me,Je]}class Wn extends We{constructor(n){super();Ye(this,n,jn,Bn,Ze,{revisionOld:0,revisionNew:1,goBackRevision:2,goForwardRevision:3,loading:4},null,[-1,-1])}}function Sn(i){let n,e,t,l,d;return{c(){n=k("div"),e=k("button"),t=C("Activiteit terugzetten naar deze versie"),this.h()},l(f){n=V(f,"DIV",{class:!0});var s=z(n);e=V(s,"BUTTON",{"data-cy":!0,class:!0});var o=z(e);t=j(o,"Activiteit terugzetten naar deze versie"),o.forEach(u),s.forEach(u),this.h()},h(){b(e,"data-cy","reset-activity-to-revision-button"),b(e,"class","ml-auto mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),b(n,"class","w-full flex")},m(f,s){E(f,n,s),h(n,e),h(e,t),l||(d=yi(e,"click",i[0]),l=!0)},p:we,i:we,o:we,d(f){f&&u(n),l=!1,d()}}}function Pn(i,n,e){let t;gn(i,yn,g=>e(5,t=g));let{revision:l}=n,{firebase:d}=n,{latestRevisionId:f}=n,s;async function o(){if(await d.firestore(),t.user){let g=kn(s),p=await pn(d,s,g,t.user.uid);g.latestRevisionId=p.id,g.latestRevisionCreatedAt=d.firestore.Timestamp.now().seconds,s.latestRevisionId&&(g.previousRevisionId=s.latestRevisionId),g.authorId=t.user.uid,delete g.status;let a=d.firestore().collection("activities").doc(s.id);try{await a.update(g),ki("/lerarenkamer/activiteit/"+s.id)}catch(w){console.error("Error adding documfent: ",w)}}}async function c(){s=l,s.id=l.revisionSourceId,f&&(s.latestRevisionId=f),delete s.revisionAuthorId,delete s.revisionCreatedAt,delete s.revisionId,delete s.revisionSourceId,delete s.revisionType,await o()}return i.$$set=g=>{"revision"in g&&e(1,l=g.revision),"firebase"in g&&e(2,d=g.firebase),"latestRevisionId"in g&&e(3,f=g.latestRevisionId)},[c,l,d,f]}class Yn extends We{constructor(n){super();Ye(this,n,Pn,Sn,Ze,{revision:1,firebase:2,latestRevisionId:3})}}export{Mn as A,Wn as G,Yn as S};
