import{S as ji,i as Ni,s as Ti,t as x,k as Z,l as J,g as ii,n as K,f as E,h as Bi,u as O,w as ei,x as j,d as N,M as ui,r as si,Y as y,Z as R,j as H,m as z,o as L,_ as I,v as M,e as U,c as V,a as W,b as D,H as P,I as Oi}from"../../../../../chunks/vendor-9a64f523.js";import{G as Fi,A as Ai,S as Ei}from"../../../../../chunks/saveActivityRevision-62a284ee.js";import{p as Di}from"../../../../../chunks/stores-bd9665ba.js";import{f as Pi}from"../../../../../chunks/store-b78dac0d.js";import{e as qi}from"../../../../../chunks/helper-de78ef5d.js";import{B as Ci}from"../../../../../chunks/breadcrumbPageTitle-3eadeeda.js";import{a as Gi}from"../../../../../chunks/helper-d6a45b8d.js";import{G as Hi,H as zi}from"../../../../../chunks/getListData-e449bc7a.js";import{S as Li,g as Mi}from"../../../../../chunks/helper-4844646d.js";import"../../../../../chunks/helper-e98ae755.js";import"../../../../../chunks/navigation-51f4a605.js";import"../../../../../chunks/singletons-12a22614.js";import"../../../../../chunks/revision-4f4fadae.js";import"../../../../../chunks/tabs-ee43e290.js";/* empty css                                                               */import"../../../../../chunks/helper-13ceec00.js";import"../../../../../chunks/show-4b835def.js";function di(e){let o=e[3].revisionType+"",i,n,s,t,_,p;const b=[Vi,Ui],l=[];function g(u,c){return!u[3].revisionType||u[3].revisionType=="goal"?0:u[3].revisionType=="activity"?1:-1}return~(s=g(e))&&(t=l[s]=b[s](e)),{c(){i=x(o),n=Z(),t&&t.c(),_=J()},l(u){i=ii(u,o),n=K(u),t&&t.l(u),_=J()},m(u,c){E(u,i,c),E(u,n,c),~s&&l[s].m(u,c),E(u,_,c),p=!0},p(u,c){(!p||c[0]&8)&&o!==(o=u[3].revisionType+"")&&Bi(i,o);let r=s;s=g(u),s===r?~s&&l[s].p(u,c):(t&&(si(),O(l[r],1,1,()=>{l[r]=null}),ei()),~s?(t=l[s],t?t.p(u,c):(t=l[s]=b[s](u),t.c()),j(t,1),t.m(_.parentNode,_)):t=null)},i(u){p||(j(t),p=!0)},o(u){O(t),p=!1},d(u){u&&N(i),u&&N(n),~s&&l[s].d(u),u&&N(_)}}}function Ui(e){let o,i,n,s,t,_,p,b;function l(f){e[22](f)}function g(f){e[23](f)}function u(f){e[24](f)}let c={revisionType:"activity"};e[6]!==void 0&&(c.firebase=e[6]),e[2]!==void 0&&(c.revisions=e[2]),e[3].revisionSourceId!==void 0&&(c.sourceId=e[3].revisionSourceId),o=new Hi({props:c}),y.push(()=>R(o,"firebase",l)),y.push(()=>R(o,"revisions",g)),y.push(()=>R(o,"sourceId",u));function r(f){e[38](f)}let m={$$slots:{content:[Zi],"cta-button":[Yi],title:[Wi]},$$scope:{ctx:e}};return e[5]!==void 0&&(m.menuitems=e[5]),_=new Li({props:m}),y.push(()=>R(_,"menuitems",r)),{c(){H(o.$$.fragment),t=Z(),H(_.$$.fragment)},l(f){z(o.$$.fragment,f),t=K(f),z(_.$$.fragment,f)},m(f,h){L(o,f,h),E(f,t,h),L(_,f,h),b=!0},p(f,h){const B={};!i&&h[0]&64&&(i=!0,B.firebase=f[6],I(()=>i=!1)),!n&&h[0]&4&&(n=!0,B.revisions=f[2],I(()=>n=!1)),!s&&h[0]&8&&(s=!0,B.sourceId=f[3].revisionSourceId,I(()=>s=!1)),o.$set(B);const S={};h[0]&8140|h[1]&1024&&(S.$$scope={dirty:h,ctx:f}),!p&&h[0]&32&&(p=!0,S.menuitems=f[5],I(()=>p=!1)),_.$set(S)},i(f){b||(j(o.$$.fragment,f),j(_.$$.fragment,f),b=!0)},o(f){O(o.$$.fragment,f),O(_.$$.fragment,f),b=!1},d(f){M(o,f),f&&N(t),M(_,f)}}}function Vi(e){let o,i,n=e[0]&&vi(e);return{c(){n&&n.c(),o=J()},l(s){n&&n.l(s),o=J()},m(s,t){n&&n.m(s,t),E(s,o,t),i=!0},p(s,t){s[0]?n?(n.p(s,t),t[0]&1&&j(n,1)):(n=vi(s),n.c(),j(n,1),n.m(o.parentNode,o)):n&&(si(),O(n,1,1,()=>{n=null}),ei())},i(s){i||(j(n),i=!0)},o(s){O(n),i=!1},d(s){n&&n.d(s),s&&N(o)}}}function Wi(e){let o,i;return{c(){o=U("span"),i=x("Wijzigingen activiteit"),this.h()},l(n){o=V(n,"SPAN",{slot:!0});var s=W(o);i=ii(s,"Wijzigingen activiteit"),s.forEach(N),this.h()},h(){D(o,"slot","title")},m(n,s){E(n,o,s),P(o,i)},d(n){n&&N(o)}}}function Yi(e){let o,i,n,s,t,_,p,b,l,g,u;return{c(){o=U("span"),i=U("div"),n=U("p"),s=U("a"),t=x("Terug naar activiteit"),p=Z(),b=U("button"),l=x("Bekijk hele geschiedenis"),this.h()},l(c){o=V(c,"SPAN",{slot:!0});var r=W(o);i=V(r,"DIV",{class:!0});var m=W(i);n=V(m,"P",{class:!0});var f=W(n);s=V(f,"A",{href:!0,class:!0});var h=W(s);t=ii(h,"Terug naar activiteit"),h.forEach(N),f.forEach(N),p=K(m),b=V(m,"BUTTON",{"data-cy":!0,class:!0});var B=W(b);l=ii(B,"Bekijk hele geschiedenis"),B.forEach(N),m.forEach(N),r.forEach(N),this.h()},h(){D(s,"href",_="/lerarenkamer/activiteit/"+e[3].revisionSourceId),D(s,"class","hover:underline"),D(n,"class","pt-2 text-sm text-gray-500"),D(b,"data-cy","show-all-activity-revisions-button"),D(b,"class","z-10 ml-auto mr-4 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),D(i,"class","ml-4 mr-auto w-full flex"),D(o,"slot","cta-button")},m(c,r){E(c,o,r),P(o,i),P(i,n),P(n,s),P(s,t),P(i,p),P(i,b),P(b,l),g||(u=Oi(b,"click",e[37]),g=!0)},p(c,r){r[0]&8&&_!==(_="/lerarenkamer/activiteit/"+c[3].revisionSourceId)&&D(s,"href",_)},d(c){c&&N(o),g=!1,u()}}}function gi(e){let o,i,n,s,t;function _(g){e[34](g)}function p(g){e[35](g)}function b(g){e[36](g)}let l={};return e[6]!==void 0&&(l.firebase=e[6]),e[8]!==void 0&&(l.latestRevisionId=e[8]),e[3]!==void 0&&(l.revision=e[3]),o=new Ei({props:l}),y.push(()=>R(o,"firebase",_)),y.push(()=>R(o,"latestRevisionId",p)),y.push(()=>R(o,"revision",b)),{c(){H(o.$$.fragment)},l(g){z(o.$$.fragment,g)},m(g,u){L(o,g,u),t=!0},p(g,u){const c={};!i&&u[0]&64&&(i=!0,c.firebase=g[6],I(()=>i=!1)),!n&&u[0]&256&&(n=!0,c.latestRevisionId=g[8],I(()=>n=!1)),!s&&u[0]&8&&(s=!0,c.revision=g[3],I(()=>s=!1)),o.$set(c)},i(g){t||(j(o.$$.fragment,g),t=!0)},o(g){O(o.$$.fragment,g),t=!1},d(g){M(o,g)}}}function Zi(e){let o,i,n,s,t,_,p,b,l,g,u,c,r,m,f;function h(d){e[25](d)}function B(d){e[26](d)}function S(d){e[27](d)}function v(d){e[28](d)}function T(d){e[29](d)}let F={};e[3]!==void 0&&(F.revisionNew=e[3]),e[9]!==void 0&&(F.revisionOld=e[9]),e[11]!==void 0&&(F.goForwardRevision=e[11]),e[10]!==void 0&&(F.goBackRevision=e[10]),e[12]!==void 0&&(F.loading=e[12]),i=new Ai({props:F}),y.push(()=>R(i,"revisionNew",h)),y.push(()=>R(i,"revisionOld",B)),y.push(()=>R(i,"goForwardRevision",S)),y.push(()=>R(i,"goBackRevision",v)),y.push(()=>R(i,"loading",T));function A(d){e[30](d)}function ni(d){e[31](d)}function oi(d){e[32](d)}function ti(d){e[33](d)}let C={};e[6]!==void 0&&(C.firebase=e[6]),e[2]!==void 0&&(C.revisions=e[2]),e[7]!==void 0&&(C.toggle=e[7]),e[3].revisionId!==void 0&&(C.activeRevisionId=e[3].revisionId),l=new zi({props:C}),y.push(()=>R(l,"firebase",A)),y.push(()=>R(l,"revisions",ni)),y.push(()=>R(l,"toggle",oi)),y.push(()=>R(l,"activeRevisionId",ti));let w=e[8]&&e[3].revisionId!==e[8]&&gi(e);return{c(){o=U("span"),H(i.$$.fragment),b=Z(),H(l.$$.fragment),m=Z(),w&&w.c(),this.h()},l(d){o=V(d,"SPAN",{slot:!0});var k=W(o);z(i.$$.fragment,k),b=K(k),z(l.$$.fragment,k),m=K(k),w&&w.l(k),k.forEach(N),this.h()},h(){D(o,"slot","content")},m(d,k){E(d,o,k),L(i,o,null),P(o,b),L(l,o,null),P(o,m),w&&w.m(o,null),f=!0},p(d,k){const q={};!n&&k[0]&8&&(n=!0,q.revisionNew=d[3],I(()=>n=!1)),!s&&k[0]&512&&(s=!0,q.revisionOld=d[9],I(()=>s=!1)),!t&&k[0]&2048&&(t=!0,q.goForwardRevision=d[11],I(()=>t=!1)),!_&&k[0]&1024&&(_=!0,q.goBackRevision=d[10],I(()=>_=!1)),!p&&k[0]&4096&&(p=!0,q.loading=d[12],I(()=>p=!1)),i.$set(q);const G={};!g&&k[0]&64&&(g=!0,G.firebase=d[6],I(()=>g=!1)),!u&&k[0]&4&&(u=!0,G.revisions=d[2],I(()=>u=!1)),!c&&k[0]&128&&(c=!0,G.toggle=d[7],I(()=>c=!1)),!r&&k[0]&8&&(r=!0,G.activeRevisionId=d[3].revisionId,I(()=>r=!1)),l.$set(G),d[8]&&d[3].revisionId!==d[8]?w?(w.p(d,k),k[0]&264&&j(w,1)):(w=gi(d),w.c(),j(w,1),w.m(o,null)):w&&(si(),O(w,1,1,()=>{w=null}),ei())},i(d){f||(j(i.$$.fragment,d),j(l.$$.fragment,d),j(w),f=!0)},o(d){O(i.$$.fragment,d),O(l.$$.fragment,d),O(w),f=!1},d(d){d&&N(o),M(i),M(l),w&&w.d()}}}function vi(e){let o,i,n,s,t,_,p,b,l,g;function u(v){e[16](v)}let c={title:e[0].title};e[1]!==void 0&&(c.breadcrumbs=e[1]),o=new Ci({props:c}),y.push(()=>R(o,"breadcrumbs",u));function r(v){e[17](v)}function m(v){e[18](v)}function f(v){e[19](v)}function h(v){e[20](v)}function B(v){e[21](v)}let S={};return e[3]!==void 0&&(S.revisionNew=e[3]),e[9]!==void 0&&(S.revisionOld=e[9]),e[11]!==void 0&&(S.goForwardRevision=e[11]),e[10]!==void 0&&(S.goBackRevision=e[10]),e[12]!==void 0&&(S.loading=e[12]),s=new Fi({props:S}),y.push(()=>R(s,"revisionNew",r)),y.push(()=>R(s,"revisionOld",m)),y.push(()=>R(s,"goForwardRevision",f)),y.push(()=>R(s,"goBackRevision",h)),y.push(()=>R(s,"loading",B)),{c(){H(o.$$.fragment),n=Z(),H(s.$$.fragment)},l(v){z(o.$$.fragment,v),n=K(v),z(s.$$.fragment,v)},m(v,T){L(o,v,T),E(v,n,T),L(s,v,T),g=!0},p(v,T){const F={};T[0]&1&&(F.title=v[0].title),!i&&T[0]&2&&(i=!0,F.breadcrumbs=v[1],I(()=>i=!1)),o.$set(F);const A={};!t&&T[0]&8&&(t=!0,A.revisionNew=v[3],I(()=>t=!1)),!_&&T[0]&512&&(_=!0,A.revisionOld=v[9],I(()=>_=!1)),!p&&T[0]&2048&&(p=!0,A.goForwardRevision=v[11],I(()=>p=!1)),!b&&T[0]&1024&&(b=!0,A.goBackRevision=v[10],I(()=>b=!1)),!l&&T[0]&4096&&(l=!0,A.loading=v[12],I(()=>l=!1)),s.$set(A)},i(v){g||(j(o.$$.fragment,v),j(s.$$.fragment,v),g=!0)},o(v){O(o.$$.fragment,v),O(s.$$.fragment,v),g=!1},d(v){M(o,v),v&&N(n),M(s,v)}}}function Ji(e){let o,i,n=e[4]&&e[3]&&e[9]&&di(e);return{c(){n&&n.c(),o=J()},l(s){n&&n.l(s),o=J()},m(s,t){n&&n.m(s,t),E(s,o,t),i=!0},p(s,t){s[4]&&s[3]&&s[9]?n?(n.p(s,t),t[0]&536&&j(n,1)):(n=di(s),n.c(),j(n,1),n.m(o.parentNode,o)):n&&(si(),O(n,1,1,()=>{n=null}),ei())},i(s){i||(j(n),i=!0)},o(s){O(n),i=!1},d(s){n&&n.d(s),s&&N(o)}}}function Ki(e,o,i){let n,s;ui(e,Di,a=>i(14,n=a)),ui(e,Pi,a=>i(15,s=a));let t,_,p,b,l,g=!1,u,c,r,m,f,h,B=!1,S=!1;const v=async()=>{i(12,S=!0),i(10,f=null),i(11,h=null),await T(),i(12,S=!1)};async function T(){let a=await p.firestore(),ri=a.collection("revisions").doc(n.params.id),ai=await ri.get();if(ai.exists&&(i(3,r=ai.data()),i(3,r.revisionId=ri.id,r),!r.revisionType||r.revisionType==="goal")){const Y=await a.collection("revisions").doc(r.revisionId).collection("battles").get();i(3,r.battles=[],r),Y.forEach(Q=>{let X=Q.data();X.name=Q.id,i(3,r.battles=[...r.battles,X],r)})}let fi=a.collection("revisions").doc(n.params.oldId),li=await fi.get();if(li.exists&&(i(9,m=li.data()),i(9,m.revisionId=fi.id,m),!m.revisionType||r.revisionType==="goal")){const Y=await a.collection("revisions").doc(m.revisionId).collection("battles").get();i(9,m.battles=[],m),Y.forEach(Q=>{let X=Q.data();X.name=Q.id,i(9,m.battles=[...m.battles,X],m)})}if(r&&(!r.revisionType||r.revisionType==="goal")){let $=await a.collection("goals").doc(r.goalId).get();if($.exists){i(0,_=$.data()),i(0,_.id=r.goalId,_);let Y=qi(_.revisionList,r.revisionId);i(11,h=Y.nextRevision),i(10,f=Y.previousPreviousRevision)}}r&&r.revisionType==="activity"}function F(a){b=a,i(1,b),i(0,_),i(14,n)}function A(a){r=a,i(3,r)}function ni(a){m=a,i(9,m)}function oi(a){h=a,i(11,h)}function ti(a){f=a,i(10,f)}function C(a){S=a,i(12,S)}function w(a){p=a,i(6,p),i(15,s)}function d(a){l=a,i(2,l)}function k(a){e.$$.not_equal(r.revisionSourceId,a)&&(r.revisionSourceId=a,i(3,r))}function q(a){r=a,i(3,r)}function G(a){m=a,i(9,m)}function _i(a){h=a,i(11,h)}function ci(a){f=a,i(10,f)}function pi(a){S=a,i(12,S)}function bi(a){p=a,i(6,p),i(15,s)}function mi(a){l=a,i(2,l)}function hi(a){g=a,i(7,g)}function wi(a){e.$$.not_equal(r.revisionId,a)&&(r.revisionId=a,i(3,r))}function ki(a){p=a,i(6,p),i(15,s)}function yi(a){u=a,i(8,u),i(2,l)}function Ri(a){r=a,i(3,r)}const Ii=()=>i(7,g=!g);function Si(a){t=a,i(5,t),i(3,r),i(14,n),i(13,c),i(2,l)}return e.$$.update=()=>{e.$$.dirty[0]&4&&l&&l.length>0&&(i(8,u=l[0].revisionId),i(13,c=l[0].status)),e.$$.dirty[0]&16387&&_&&(i(1,b=Gi(_)),i(1,b=[...b,{url:n.path,value:"Verschil versies"}])),e.$$.dirty[0]&32768&&(async()=>{s&&(i(6,p=s),await T(),i(4,B=!0))})(),e.$$.dirty[0]&16400&&n.params.id&&n.params.oldId&&B&&v(),e.$$.dirty[0]&24584&&r&&r.revisionType==="activity"&&i(5,t=Mi(n.path,c))},[_,b,l,r,B,t,p,g,u,m,f,h,S,c,n,s,F,A,ni,oi,ti,C,w,d,k,q,G,_i,ci,pi,bi,mi,hi,wi,ki,yi,Ri,Ii,Si]}class ve extends ji{constructor(o){super();Ni(this,o,Ki,Ji,Ti,{},null,[-1,-1])}}export{ve as default};