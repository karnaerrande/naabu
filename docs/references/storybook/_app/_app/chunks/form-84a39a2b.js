import{S as Qe,i as $e,s as et,Y as tt,Z as ot,l as st,f as le,d as r,e as d,t as Y,k as T,c as u,a as f,g as B,n as X,b as l,H as o,I as G,h as kt,j as at,m as lt,o as it,a7 as ee,J as xe,_ as nt,x as rt,u as ct,v as dt,K as Ye,L as ut,A as Et,af as Lt,O as wt,a3 as yt,a4 as mt,a5 as xt}from"./vendor-9a64f523.js";/* empty css                  */import{D as It}from"./dialog-c021e43e.js";function ft(t,a,s){const e=t.slice();return e[20]=a[s],e}function ht(t,a,s){const e=t.slice();return e[23]=a[s],e[25]=s,e}function Pt(t){let a,s,e=t[25]+1+"",i,n,_;function D(){return t[10](t[25])}return{c(){a=d("button"),s=Y("L"),i=Y(e),this.h()},l(h){a=u(h,"BUTTON",{class:!0});var m=f(a);s=B(m,"L"),i=B(m,e),m.forEach(r),this.h()},h(){l(a,"class","outline-none active:outline-none focus:outline-none border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(h,m){le(h,a,m),o(a,s),o(a,i),n||(_=G(a,"click",xe(D)),n=!0)},p(h,m){t=h},d(h){h&&r(a),n=!1,_()}}}function Tt(t){let a,s,e=t[25]+1+"",i,n,_;function D(){return t[9](t[25])}return{c(){a=d("button"),s=Y("L"),i=Y(e),this.h()},l(h){a=u(h,"BUTTON",{class:!0});var m=f(a);s=B(m,"L"),i=B(m,e),m.forEach(r),this.h()},h(){l(a,"class","outline-none active:outline-none focus:outline-none border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(h,m){le(h,a,m),o(a,s),o(a,i),n||(_=G(a,"click",xe(D)),n=!0)},p(h,m){t=h},d(h){h&&r(a),n=!1,_()}}}function pt(t){let a;function s(n,_){return n[1]!==n[25]?Tt:Pt}let e=s(t),i=e(t);return{c(){i.c(),a=st()},l(n){i.l(n),a=st()},m(n,_){i.m(n,_),le(n,a,_)},p(n,_){e===(e=s(n))&&i?i.p(n,_):(i.d(1),i=e(n),i&&(i.c(),i.m(a.parentNode,a)))},d(n){i.d(n),n&&r(a)}}}function gt(t){let a,s,e,i,n=t[20].index+"",_,D,h,m;return{c(){a=d("label"),s=d("input"),i=Y(`
              L`),_=Y(n),D=T(),this.h()},l(k){a=u(k,"LABEL",{});var p=f(a);s=u(p,"INPUT",{type:!0,name:!0}),i=B(p,`
              L`),_=B(p,n),D=X(p),p.forEach(r),this.h()},h(){l(s,"type","checkbox"),l(s,"name","accessLocations"),s.__value=e=t[20].id,s.value=s.__value,t[18][0].push(s)},m(k,p){le(k,a,p),o(a,s),s.checked=~t[0][t[1]].accessLocations.indexOf(s.__value),o(a,i),o(a,_),o(a,D),h||(m=G(s,"change",t[17]),h=!0)},p(k,p){p&4&&e!==(e=k[20].id)&&(s.__value=e,s.value=s.__value),p&3&&(s.checked=~k[0][k[1]].accessLocations.indexOf(s.__value)),p&4&&n!==(n=k[20].index+"")&&kt(_,n)},d(k){k&&r(a),t[18][0].splice(t[18][0].indexOf(s),1),h=!1,m()}}}function Xt(t){let a,s,e,i,n,_,D,h,m,k,p,S,C,g,x,V,W,A,I,ie,J,Q,v,N,L,H,F,ue,pe,Z,w,Ee,se,b,R,U,E,te,ae,ge,re,ne,M,_e,z,$,ve,oe,Ie,Pe,me,Te,Xe,fe,Ae,ce,De,Le,Ve,Be;function bt(c){t[8](c)}let Ne={};t[3]!==void 0&&(Ne.toggle=t[3]),a=new It({props:Ne}),tt.push(()=>ot(a,"toggle",bt)),a.$on("ok",t[4]);let be=t[0],q=[];for(let c=0;c<be.length;c+=1)q[c]=pt(ht(t,be,c));let ke=t[2],K=[];for(let c=0;c<ke.length;c+=1)K[c]=gt(ft(t,ke,c));return{c(){at(a.$$.fragment),e=T(),i=d("div"),n=d("div"),_=d("div"),D=d("div"),h=d("nav");for(let c=0;c<q.length;c+=1)q[c].c();m=T(),k=d("button"),p=Y("New Location"),S=T(),C=d("div"),g=d("div"),x=d("label"),V=Y("Name"),W=T(),A=d("div"),I=d("textarea"),ie=T(),J=d("label"),Q=Y("tekst position X"),v=T(),N=d("div"),L=d("textarea"),H=T(),F=d("label"),ue=Y("tekst position Y"),pe=T(),Z=d("div"),w=d("textarea"),Ee=T(),se=d("label"),b=Y("marker position X"),R=T(),U=d("div"),E=d("textarea"),te=T(),ae=d("label"),ge=Y("marker position Y"),re=T(),ne=d("div"),M=d("textarea"),_e=T(),z=d("div"),$=d("input"),ve=T(),oe=d("label"),Ie=Y("Start locatie op kaart"),Pe=T(),me=d("label"),Te=Y("Toegang tot locaties"),Xe=T(),fe=d("div");for(let c=0;c<K.length;c+=1)K[c].c();Ae=T(),ce=d("button"),De=Y("Locatie verwijderen"),this.h()},l(c){lt(a.$$.fragment,c),e=X(c),i=u(c,"DIV",{class:!0});var j=f(i);n=u(j,"DIV",{});var O=f(n);_=u(O,"DIV",{class:!0});var y=f(_);D=u(y,"DIV",{class:!0});var de=f(D);h=u(de,"NAV",{class:!0,"aria-label":!0});var we=f(h);for(let he=0;he<q.length;he+=1)q[he].l(we);m=X(we),k=u(we,"BUTTON",{class:!0});var je=f(k);p=B(je,"New Location"),je.forEach(r),we.forEach(r),de.forEach(r),y.forEach(r),S=X(O),C=u(O,"DIV",{});var Oe=f(C);g=u(Oe,"DIV",{class:!0});var P=f(g);x=u(P,"LABEL",{for:!0,class:!0});var Se=f(x);V=B(Se,"Name"),Se.forEach(r),W=X(P),A=u(P,"DIV",{class:!0});var Fe=f(A);I=u(Fe,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),f(I).forEach(r),Fe.forEach(r),ie=X(P),J=u(P,"LABEL",{for:!0,class:!0});var Re=f(J);Q=B(Re,"tekst position X"),Re.forEach(r),v=X(P),N=u(P,"DIV",{class:!0});var Ue=f(N);L=u(Ue,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),f(L).forEach(r),Ue.forEach(r),H=X(P),F=u(P,"LABEL",{for:!0,class:!0});var qe=f(F);ue=B(qe,"tekst position Y"),qe.forEach(r),pe=X(P),Z=u(P,"DIV",{class:!0});var Ke=f(Z);w=u(Ke,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),f(w).forEach(r),Ke.forEach(r),Ee=X(P),se=u(P,"LABEL",{for:!0,class:!0});var ze=f(se);b=B(ze,"marker position X"),ze.forEach(r),R=X(P),U=u(P,"DIV",{class:!0});var Ce=f(U);E=u(Ce,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),f(E).forEach(r),Ce.forEach(r),te=X(P),ae=u(P,"LABEL",{for:!0,class:!0});var He=f(ae);ge=B(He,"marker position Y"),He.forEach(r),re=X(P),ne=u(P,"DIV",{class:!0});var Me=f(ne);M=u(Me,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),f(M).forEach(r),Me.forEach(r),_e=X(P),z=u(P,"DIV",{class:!0});var ye=f(z);$=u(ye,"INPUT",{id:!0,type:!0,class:!0}),ve=X(ye),oe=u(ye,"LABEL",{class:!0,for:!0});var We=f(oe);Ie=B(We,"Start locatie op kaart"),We.forEach(r),ye.forEach(r),Pe=X(P),me=u(P,"LABEL",{for:!0,class:!0});var Je=f(me);Te=B(Je,"Toegang tot locaties"),Je.forEach(r),Xe=X(P),fe=u(P,"DIV",{class:!0});var Ze=f(fe);for(let he=0;he<K.length;he+=1)K[he].l(Ze);Ze.forEach(r),P.forEach(r),Oe.forEach(r),Ae=X(O),ce=u(O,"BUTTON",{type:!0,class:!0});var Ge=f(ce);De=B(Ge,"Locatie verwijderen"),Ge.forEach(r),O.forEach(r),j.forEach(r),this.h()},h(){l(k,"class","mb-1 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),l(h,"class","-mb-px flex space-x-8"),l(h,"aria-label","Tabs"),l(D,"class","border-b mb-3 border-gray-200"),l(_,"class","block tabs"),l(x,"for","title"),l(x,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),l(I,"id","title"),l(I,"name","title"),l(I,"rows","1"),l(I,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),l(A,"class","mt-1 sm:mt-0 sm:col-span-2"),l(J,"for","positionX"),l(J,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),l(L,"id","positionX"),l(L,"name","title"),l(L,"rows","1"),l(L,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),l(N,"class","mt-1 sm:mt-0 sm:col-span-2"),l(F,"for","positionX"),l(F,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),l(w,"id","positionX"),l(w,"name","title"),l(w,"rows","1"),l(w,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),l(Z,"class","mt-1 sm:mt-0 sm:col-span-2"),l(se,"for","positionX"),l(se,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),l(E,"id","positionX"),l(E,"name","title"),l(E,"rows","1"),l(E,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),l(U,"class","mt-1 sm:mt-0 sm:col-span-2"),l(ae,"for","positionX"),l(ae,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),l(M,"id","positionX"),l(M,"name","title"),l(M,"rows","1"),l(M,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),l(ne,"class","mt-1 sm:mt-0 sm:col-span-2"),l($,"id","answers_check"),l($,"type","checkbox"),l($,"class","focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"),l(oe,"class","font-medium text-gray-700"),l(oe,"for","answers_check"),l(z,"class","mt-3"),l(me,"for","accessLocations"),l(me,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),l(fe,"class","mt-1 sm:mt-0 sm:col-span-2"),l(g,"class","mt-6 sm:mt-5 space-y-6 sm:space-y-5"),l(ce,"type","button"),l(ce,"class","float-right mt-3 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),l(i,"class","space-y-3 sm:space-y-2")},m(c,j){it(a,c,j),le(c,e,j),le(c,i,j),o(i,n),o(n,_),o(_,D),o(D,h);for(let O=0;O<q.length;O+=1)q[O].m(h,null);o(h,m),o(h,k),o(k,p),o(n,S),o(n,C),o(C,g),o(g,x),o(x,V),o(g,W),o(g,A),o(A,I),ee(I,t[0][t[1]].name),o(g,ie),o(g,J),o(J,Q),o(g,v),o(g,N),o(N,L),ee(L,t[0][t[1]].textPositionX),o(g,H),o(g,F),o(F,ue),o(g,pe),o(g,Z),o(Z,w),ee(w,t[0][t[1]].textPositionY),o(g,Ee),o(g,se),o(se,b),o(g,R),o(g,U),o(U,E),ee(E,t[0][t[1]].markerPositionX),o(g,te),o(g,ae),o(ae,ge),o(g,re),o(g,ne),o(ne,M),ee(M,t[0][t[1]].markerPositionY),o(g,_e),o(g,z),o(z,$),$.checked=t[0][t[1]].isStartLocation,o(z,ve),o(z,oe),o(oe,Ie),o(g,Pe),o(g,me),o(me,Te),o(g,Xe),o(g,fe);for(let O=0;O<K.length;O+=1)K[O].m(fe,null);o(n,Ae),o(n,ce),o(ce,De),Le=!0,Ve||(Be=[G(k,"click",xe(t[7])),G(I,"input",t[11]),G(L,"input",t[12]),G(w,"input",t[13]),G(E,"input",t[14]),G(M,"input",t[15]),G($,"change",t[16]),G(ce,"click",xe(t[19]))],Ve=!0)},p(c,[j]){const O={};if(!s&&j&8&&(s=!0,O.toggle=c[3],nt(()=>s=!1)),a.$set(O),j&35){be=c[0];let y;for(y=0;y<be.length;y+=1){const de=ht(c,be,y);q[y]?q[y].p(de,j):(q[y]=pt(de),q[y].c(),q[y].m(h,m))}for(;y<q.length;y+=1)q[y].d(1);q.length=be.length}if(j&3&&ee(I,c[0][c[1]].name),j&3&&ee(L,c[0][c[1]].textPositionX),j&3&&ee(w,c[0][c[1]].textPositionY),j&3&&ee(E,c[0][c[1]].markerPositionX),j&3&&ee(M,c[0][c[1]].markerPositionY),j&3&&($.checked=c[0][c[1]].isStartLocation),j&7){ke=c[2];let y;for(y=0;y<ke.length;y+=1){const de=ft(c,ke,y);K[y]?K[y].p(de,j):(K[y]=gt(de),K[y].c(),K[y].m(fe,null))}for(;y<K.length;y+=1)K[y].d(1);K.length=ke.length}},i(c){Le||(rt(a.$$.fragment,c),Le=!0)},o(c){ct(a.$$.fragment,c),Le=!1},d(c){dt(a,c),c&&r(e),c&&r(i),Ye(q,c),Ye(K,c),Ve=!1,ut(Be)}}}function At(t,a,s){let{locations:e=[]}=a,{selectedIndex:i=0}=a,n=!1,_;function D(){e.splice(i,1),s(0,e),s(1,i=0)}function h(v){s(1,i=v)}function m(){s(3,n=!0)}function k(){let v="",N=!1;for(;!N;){v=Math.random().toString(36).substring(2,7),N=!0;for(let H=0;H<e.length;H++)e[H].id===v&&(N=!1);v.length<5&&(N=!1)}let L={id:v,isStartLocation:!1,accessLocations:[],name:"",textPositionX:"",textPositionY:"",markerPositionX:"",markerPositionY:"",goals:[]};s(0,e=[...e,L])}Et(()=>{});const p=[[]];function S(v){n=v,s(3,n)}const C=v=>h(v),g=v=>h(v);function x(){e[i].name=this.value,s(0,e),s(1,i)}function V(){e[i].textPositionX=this.value,s(0,e),s(1,i)}function W(){e[i].textPositionY=this.value,s(0,e),s(1,i)}function A(){e[i].markerPositionX=this.value,s(0,e),s(1,i)}function I(){e[i].markerPositionY=this.value,s(0,e),s(1,i)}function ie(){e[i].isStartLocation=this.checked,s(0,e),s(1,i)}function J(){e[i].accessLocations=Lt(p[0],this.__value,this.checked),s(0,e),s(1,i)}const Q=()=>m();return t.$$set=v=>{"locations"in v&&s(0,e=v.locations),"selectedIndex"in v&&s(1,i=v.selectedIndex)},t.$$.update=()=>{if(t.$$.dirty&1)for(let v=0;v<e.length;v++){let N=[];for(let L=0;L<e[v].accessLocations.length;L++){let H=!1;for(let F=0;F<e.length;F++)e[F].id===e[v].accessLocations[L]&&(H=!0);H&&N.push(e[v].accessLocations[L])}s(0,e[v].accessLocations=N,e)}if(t.$$.dirty&7){s(2,_=[]);for(let v=0;v<e.length;v++)v!==i&&_.push({id:e[v].id,index:v+1})}t.$$.dirty&1&&e.length===0&&k()},[e,i,_,n,D,h,m,k,S,C,g,x,V,W,A,I,ie,J,p,Q]}class Dt extends Qe{constructor(a){super();$e(this,a,At,Xt,et,{locations:0,selectedIndex:1})}}function _t(t,a,s){const e=t.slice();return e[6]=a[s],e}function vt(t){let a,s=t[6].name+"",e,i;return{c(){a=d("option"),e=Y(s),this.h()},l(n){a=u(n,"OPTION",{});var _=f(a);e=B(_,s),_.forEach(r),this.h()},h(){a.__value=i=t[6].url,a.value=a.__value},m(n,_){le(n,a,_),o(a,e)},p:wt,d(n){n&&r(a)}}}function Vt(t){let a,s,e,i,n,_,D,h,m,k,p,S,C,g,x,V,W,A,I,ie,J,Q,v,N,L,H,F,ue,pe,Z=t[1],w=[];for(let b=0;b<Z.length;b+=1)w[b]=vt(_t(t,Z,b));function Ee(b){t[4](b)}let se={};return t[0].locations!==void 0&&(se.locations=t[0].locations),L=new Dt({props:se}),tt.push(()=>ot(L,"locations",Ee)),{c(){a=d("div"),s=d("div"),e=d("div"),i=d("div"),n=d("label"),_=Y("Titel"),D=T(),h=d("div"),m=d("textarea"),k=T(),p=d("div"),S=d("label"),C=Y("Kaart afbeelding"),g=T(),x=d("div"),V=d("select");for(let b=0;b<w.length;b+=1)w[b].c();W=T(),A=d("div"),I=d("h3"),ie=Y("Locaties"),J=T(),Q=d("p"),v=Y("Welke locaties wil je op de kaart zetten?"),N=T(),at(L.$$.fragment),this.h()},l(b){a=u(b,"DIV",{class:!0});var R=f(a);s=u(R,"DIV",{});var U=f(s);e=u(U,"DIV",{class:!0});var E=f(e);i=u(E,"DIV",{class:!0});var te=f(i);n=u(te,"LABEL",{for:!0,class:!0});var ae=f(n);_=B(ae,"Titel"),ae.forEach(r),D=X(te),h=u(te,"DIV",{class:!0});var ge=f(h);m=u(ge,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),f(m).forEach(r),ge.forEach(r),te.forEach(r),k=X(E),p=u(E,"DIV",{class:!0});var re=f(p);S=u(re,"LABEL",{for:!0,class:!0});var ne=f(S);C=B(ne,"Kaart afbeelding"),ne.forEach(r),g=X(re),x=u(re,"DIV",{class:!0});var M=f(x);V=u(M,"SELECT",{id:!0});var _e=f(V);for(let oe=0;oe<w.length;oe+=1)w[oe].l(_e);_e.forEach(r),M.forEach(r),re.forEach(r),E.forEach(r),U.forEach(r),R.forEach(r),W=X(b),A=u(b,"DIV",{class:!0});var z=f(A);I=u(z,"H3",{class:!0});var $=f(I);ie=B($,"Locaties"),$.forEach(r),J=X(z),Q=u(z,"P",{class:!0});var ve=f(Q);v=B(ve,"Welke locaties wil je op de kaart zetten?"),ve.forEach(r),N=X(z),lt(L.$$.fragment,z),z.forEach(r),this.h()},h(){l(n,"for","title"),l(n,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),l(m,"id","title"),l(m,"name","title"),l(m,"rows","1"),l(m,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),l(h,"class","mt-1 sm:mt-0 sm:col-span-2"),l(i,"class","sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"),l(S,"for","mapimage"),l(S,"class","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"),l(V,"id","mapimage"),t[0].image===void 0&&yt(()=>t[3].call(V)),l(x,"class","mt-1 sm:mt-0 sm:col-span-2"),l(p,"class","sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"),l(e,"class","mt-6 sm:mt-5 space-y-6 sm:space-y-5"),l(a,"class","mb-44 space-y-8 divide-y divide-gray-200 sm:space-y-5"),l(I,"class","text-lg leading-6 font-medium text-gray-900"),l(Q,"class","mt-1 max-w-2xl text-sm text-gray-500"),l(A,"class","divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5")},m(b,R){le(b,a,R),o(a,s),o(s,e),o(e,i),o(i,n),o(n,_),o(i,D),o(i,h),o(h,m),ee(m,t[0].title),o(e,k),o(e,p),o(p,S),o(S,C),o(p,g),o(p,x),o(x,V);for(let U=0;U<w.length;U+=1)w[U].m(V,null);mt(V,t[0].image),le(b,W,R),le(b,A,R),o(A,I),o(I,ie),o(A,J),o(A,Q),o(Q,v),o(A,N),it(L,A,null),F=!0,ue||(pe=[G(m,"input",t[2]),G(V,"change",t[3])],ue=!0)},p(b,[R]){if(R&3&&ee(m,b[0].title),R&2){Z=b[1];let E;for(E=0;E<Z.length;E+=1){const te=_t(b,Z,E);w[E]?w[E].p(te,R):(w[E]=vt(te),w[E].c(),w[E].m(V,null))}for(;E<w.length;E+=1)w[E].d(1);w.length=Z.length}R&3&&mt(V,b[0].image);const U={};!H&&R&1&&(H=!0,U.locations=b[0].locations,nt(()=>H=!1)),L.$set(U)},i(b){F||(rt(L.$$.fragment,b),F=!0)},o(b){ct(L.$$.fragment,b),F=!1},d(b){b&&r(a),Ye(w,b),b&&r(W),b&&r(A),dt(L),ue=!1,ut(pe)}}}function Yt(t,a,s){let{map:e}=a;function i(m,k){for(let p=0;p<e.paths.length;p++)if(e.paths[p].startLocation===m&&e.paths[p].endLocation===k)return e.paths[p];return!1}let n=[{name:"Fantasy",url:"https://firebasestorage.googleapis.com/v0/b/expwis.appspot.com/o/map1.png?alt=media&token=12e1ee07-a782-40c1-addc-e2179fc89d95"},{name:"Fantasy2",url:"https://firebasestorage.googleapis.com/v0/b/expwis.appspot.com/o/map1.png?alt=media&token=12e1ee07-a782-40c1-addc-e2179fc8123"}];function _(){e.title=this.value,s(0,e),s(1,n)}function D(){e.image=xt(this),s(0,e),s(1,n)}function h(m){t.$$.not_equal(e.locations,m)&&(e.locations=m,s(0,e))}return t.$$set=m=>{"map"in m&&s(0,e=m.map)},t.$$.update=()=>{if(t.$$.dirty&1){let m=[];for(let k=0;k<e.locations.length;k++){let p=e.locations[k],S=p.markerPositionX,C=p.markerPositionY;for(let g=0;g<p.accessLocations.length;g++)for(let x=0;x<e.locations.length;x++)if(e.locations[x].id===p.accessLocations[g]){let V=e.locations[x].markerPositionX,W=e.locations[x].markerPositionY,A=[[C,S],[W,V]],I=i(p.id,e.locations[x].id);I&&(I.points[0]=[C,S],I.points[I.points.length-1]=[W,V],A=I.points),m.push({startLocation:p.id,startLocationName:p.name,endLocation:e.locations[x].id,endLocationName:e.locations[x].name,endLocationIndex:x,points:A})}}s(0,e.paths=m,e)}},[e,n,_,D,h]}class Ot extends Qe{constructor(a){super();$e(this,a,Yt,Vt,et,{map:0})}}export{Ot as F};