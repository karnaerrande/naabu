import{S as le,i as ue,s as ie,a3 as pe,Y as q,Z as G,j as Y,k as A,e as T,t as K,m as H,n as N,c as C,a as I,g as Q,d as _,b as v,o as J,f as E,H as P,I as x,J as de,_ as L,x as R,u as M,v as X,L as be,M as Z,A as _e,a6 as ge,N as $,h as ke,O as he,l as ae,w as ye,r as we}from"../../chunks/vendor-9a64f523.js";import{F as Pe}from"../../chunks/form-8f2710e2.js";import{s as S,p as je}from"../../chunks/stores-bd9665ba.js";import{g as V}from"../../chunks/navigation-51f4a605.js";/* empty css                                                      */import{R as Te}from"../../chunks/resultFeedback-6bde5315.js";import{l as Ce}from"../../chunks/helper-405801da.js";import{f as Ie}from"../../chunks/store-b78dac0d.js";import{B as ve}from"../../chunks/breadcrumbPageTitle-3eadeeda.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/helper-5c7a4c9b.js";import"../../chunks/show-4b835def.js";const{setTimeout:oe}=ge;function Ee(s){let r,e=s[0].user.email+"",t;return{c(){r=T("p"),t=K(e)},l(l){r=C(l,"P",{});var n=I(r);t=Q(n,e),n.forEach(_)},m(l,n){E(l,r,n),P(r,t)},p(l,n){n&1&&e!==(e=l[0].user.email+"")&&ke(t,e)},d(l){l&&_(r)}}}function Re(s){let r,e,t,l;return{c(){r=T("div"),e=T("button"),this.h()},l(n){r=C(n,"DIV",{});var a=I(r);e=C(a,"BUTTON",{id:!0,class:!0}),I(e).forEach(_),a.forEach(_),this.h()},h(){v(e,"id","linkGoogleButton"),v(e,"class","svelte-dd5ofr")},m(n,a){E(n,r,a),P(r,e),t||(l=x(e,"click",s[6]),t=!0)},p:he,d(n){n&&_(r),t=!1,l()}}}function Me(s){let r=!1,e=()=>{r=!1},t,l,n,a,f,o,u,c,p,b,g,k,D,F,h,m,w,j,z;pe(s[8]);function fe(i){s[9](i)}let ee={};s[4]!==void 0&&(ee.alert=s[4]),l=new Te({props:ee}),q.push(()=>G(l,"alert",fe));function re(i,d){return!i[0].user||i[0].user.isAnonymous?Re:Ee}let U=re(s),y=U(s);function me(i){s[10](i)}let te={};return s[1]!==void 0&&(te.curriculumProfile=s[1]),k=new Pe({props:te}),q.push(()=>G(k,"curriculumProfile",me)),{c(){Y(l.$$.fragment),a=A(),f=T("div"),o=T("p"),u=K("Profiel aanmaken met"),c=A(),p=T("div"),y.c(),b=A(),g=T("form"),Y(k.$$.fragment),F=A(),h=T("button"),m=K("Curriculum profiel aanmaken"),this.h()},l(i){H(l.$$.fragment,i),a=N(i),f=C(i,"DIV",{class:!0});var d=I(f);o=C(d,"P",{class:!0});var O=I(o);u=Q(O,"Profiel aanmaken met"),O.forEach(_),c=N(d),p=C(d,"DIV",{class:!0});var B=I(p);y.l(B),B.forEach(_),d.forEach(_),b=N(i),g=C(i,"FORM",{class:!0});var W=I(g);H(k.$$.fragment,W),F=N(W),h=C(W,"BUTTON",{"data-cy":!0,class:!0});var se=I(h);m=Q(se,"Curriculum profiel aanmaken"),se.forEach(_),W.forEach(_),this.h()},h(){v(o,"class","text-sm font-medium text-gray-700"),v(p,"class","mt-1 sm:mt-0 sm:col-span-2"),v(f,"class","sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"),h.disabled=s[2],v(h,"data-cy","submit-button"),v(h,"class","mt-4 float-right disabled:opacity-50 ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),v(g,"class","mt-8")},m(i,d){J(l,i,d),E(i,a,d),E(i,f,d),P(f,o),P(o,u),P(f,c),P(f,p),y.m(p,null),E(i,b,d),E(i,g,d),J(k,g,null),P(g,F),P(g,h),P(h,m),w=!0,j||(z=[x(window,"scroll",()=>{r=!0,clearTimeout(t),t=oe(e,100),s[8]()}),x(g,"submit",de(s[5]))],j=!0)},p(i,[d]){d&8&&!r&&(r=!0,clearTimeout(t),scrollTo(window.pageXOffset,i[3]),t=oe(e,100));const O={};!n&&d&16&&(n=!0,O.alert=i[4],L(()=>n=!1)),l.$set(O),U===(U=re(i))&&y?y.p(i,d):(y.d(1),y=U(i),y&&(y.c(),y.m(p,null)));const B={};!D&&d&2&&(D=!0,B.curriculumProfile=i[1],L(()=>D=!1)),k.$set(B),(!w||d&4)&&(h.disabled=i[2])},i(i){w||(R(l.$$.fragment,i),R(k.$$.fragment,i),w=!0)},o(i){M(l.$$.fragment,i),M(k.$$.fragment,i),w=!1},d(i){X(l,i),i&&_(a),i&&_(f),y.d(),i&&_(b),i&&_(g),X(k),j=!1,be(z)}}}function ne(){return{success:!1,successMessage:"",error:!1,errorCode:"",errorMessage:""}}function De(s,r,e){let t,l;Z(s,S,m=>e(0,t=m)),Z(s,je,m=>e(12,l=m));let{firebase:n}=r,a={fullname:"",institution:"",institutionEmail:"",credentials:""},f,o,u,c=ne(),p=l.query.get("redirect");async function b(){p?p==="/leerdoel/maken"?await V("/leerdoel/maken"):p.startsWith("/leerdoel")?await V(p):p.startsWith("/overleg")?await V(p):await V("/curriculum-profiel/mijn-profiel"):await V("/curriculum-profiel/mijn-profiel")}async function g(){e(2,f=!0);let m=a;delete m.id,e(4,c=ne());try{if(t.player.curriculumProfileId){let j=await u.collection("curriculumProfile").doc(t.player.curriculumProfileId).update(m);e(4,c.success=!0,c),e(4,c.successTitle="Curriculum profiel gemaakt",c)}else{let j=await u.collection("curriculumProfile").add(m);$(S,t.player.curriculumProfileId=j.id,t),await u.collection("players").doc(t.user.uid).update({curriculumProfileId:j.id}),e(4,c.success=!0,c),e(4,c.successTitle="Curriculum profiel gemaakt",c),e(4,c.successMessage="id: "+j.id,c)}await b()}catch(w){e(4,c.error=!0,c),e(4,c.errorCode=w.code,c),e(4,c.errorMessage=w.message,c)}e(3,o=0),setTimeout(()=>{e(2,f=!1)},5e3)}_e(async()=>{u=await n.firestore()});async function k(){let m=await Ce(n);m!==null&&($(S,t.user=m.user,t),$(S,t.player=m.player,t))}function D(){e(3,o=window.pageYOffset)}function F(m){c=m,e(4,c)}function h(m){a=m,e(1,a),e(0,t)}return s.$$set=m=>{"firebase"in m&&e(7,n=m.firebase)},s.$$.update=()=>{s.$$.dirty&1&&t.user&&e(1,a.uid=t.user.uid,a),s.$$.dirty&1&&(!t.user||t.user.isAnonymous?e(2,f=!0):e(2,f=!1))},[t,a,f,o,c,g,k,n,D,F,h]}class Fe extends le{constructor(r){super();ue(this,r,De,Me,ie,{firebase:7})}}function ce(s){let r,e,t;function l(a){s[6](a)}let n={};return s[0]!==void 0&&(n.firebase=s[0]),r=new Fe({props:n}),q.push(()=>G(r,"firebase",l)),{c(){Y(r.$$.fragment)},l(a){H(r.$$.fragment,a)},m(a,f){J(r,a,f),t=!0},p(a,f){const o={};!e&&f&1&&(e=!0,o.firebase=a[0],L(()=>e=!1)),r.$set(o)},i(a){t||(R(r.$$.fragment,a),t=!0)},o(a){M(r.$$.fragment,a),t=!1},d(a){X(r,a)}}}function Oe(s){let r,e,t,l,n;function a(u){s[5](u)}let f={title:"Curriculum profiel maken"};s[3]!==void 0&&(f.breadcrumbs=s[3]),r=new ve({props:f}),q.push(()=>G(r,"breadcrumbs",a));let o=s[2]&&!s[1]&&ce(s);return{c(){Y(r.$$.fragment),t=A(),o&&o.c(),l=ae()},l(u){H(r.$$.fragment,u),t=N(u),o&&o.l(u),l=ae()},m(u,c){J(r,u,c),E(u,t,c),o&&o.m(u,c),E(u,l,c),n=!0},p(u,[c]){const p={};!e&&c&8&&(e=!0,p.breadcrumbs=u[3],L(()=>e=!1)),r.$set(p),u[2]&&!u[1]?o?(o.p(u,c),c&6&&R(o,1)):(o=ce(u),o.c(),R(o,1),o.m(l.parentNode,l)):o&&(we(),M(o,1,1,()=>{o=null}),ye())},i(u){n||(R(r.$$.fragment,u),R(o),n=!0)},o(u){M(r.$$.fragment,u),M(o),n=!1},d(u){X(r,u),u&&_(t),o&&o.d(u),u&&_(l)}}}function Be(s,r,e){let t,l;Z(s,S,b=>e(7,t=b)),Z(s,Ie,b=>e(4,l=b));let n,a,f=!1;async function o(){let b=await n.firestore();if(t.user){let g=b.collection("curriculumProfile").doc(t.player.curriculumProfileId),k=await g.get();k.exists&&(e(1,a=k.data()),e(1,a.id=g.id,a))}}let u=[{url:"/curriculum",value:"Curriculum"},{url:"/curriculum-profiel/maken",value:"Curriculum profiel maken"}];function c(b){u=b,e(3,u)}function p(b){n=b,e(0,n),e(4,l)}return s.$$.update=()=>{s.$$.dirty&16&&(async()=>{l&&(e(0,n=l),await o(),e(2,f=!0))})()},[n,a,f,u,l,c,p]}class Xe extends le{constructor(r){super();ue(this,r,Be,Oe,ie,{})}}export{Xe as default};
