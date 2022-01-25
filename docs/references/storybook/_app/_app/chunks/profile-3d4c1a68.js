import{S as ve,i as _e,s as he,e as h,t as B,k as C,c as m,a as p,g as z,d as o,n as M,b as u,f as O,H as n,K as Ee,l as W,O as oe,h as J,$ as we,a0 as ke,j as me,m as pe,o as ge,_ as ne,x as ee,u as re,v as be,r as je,w as Re,Y as fe,Z as ue}from"./vendor-9a64f523.js";import{t as Z,g as le}from"./helper-e98ae755.js";import{s as Pe}from"./helper-de78ef5d.js";import{C as Be}from"./curriculum-68ed0062.js";function ye(r,e,i){const l=r.slice();return l[1]=e[i],l}function Te(r){let e,i,l,t,s,a,b,T,v,y,P=r[0].revisionList,I=[];for(let _=0;_<P.length;_+=1)I[_]=Le(ye(r,P,_));return{c(){e=h("h3"),i=B("Revisies"),l=C(),t=h("div"),s=h("div"),a=h("div"),b=h("div"),T=h("div"),v=h("table"),y=h("tbody");for(let _=0;_<I.length;_+=1)I[_].c();this.h()},l(_){e=m(_,"H3",{class:!0});var L=p(e);i=z(L,"Revisies"),L.forEach(o),l=M(_),t=m(_,"DIV",{});var E=p(t);s=m(E,"DIV",{class:!0});var V=p(s);a=m(V,"DIV",{class:!0});var w=p(a);b=m(w,"DIV",{class:!0});var c=p(b);T=m(c,"DIV",{class:!0});var f=p(T);v=m(f,"TABLE",{class:!0});var g=p(v);y=m(g,"TBODY",{class:!0});var H=p(y);for(let A=0;A<I.length;A+=1)I[A].l(H);H.forEach(o),g.forEach(o),f.forEach(o),c.forEach(o),w.forEach(o),V.forEach(o),E.forEach(o),this.h()},h(){u(e,"class","mt-5 mb-5 text-lg leading-6 font-medium text-gray-900"),u(y,"class","bg-white divide-y divide-gray-200"),u(v,"class","min-w-full divide-y divide-gray-200"),u(T,"class","shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"),u(b,"class","py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"),u(a,"class","-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"),u(s,"class","flex flex-col w-full")},m(_,L){O(_,e,L),n(e,i),O(_,l,L),O(_,t,L),n(t,s),n(s,a),n(a,b),n(b,T),n(T,v),n(v,y);for(let E=0;E<I.length;E+=1)I[E].m(y,null)},p(_,L){if(L&1){P=_[0].revisionList;let E;for(E=0;E<P.length;E+=1){const V=ye(_,P,E);I[E]?I[E].p(V,L):(I[E]=Le(V),I[E].c(),I[E].m(y,null))}for(;E<I.length;E+=1)I[E].d(1);I.length=P.length}},d(_){_&&o(e),_&&o(l),_&&o(t),Ee(I,_)}}}function Ce(r){let e=le(r[1].createdAt)+"",i;return{c(){i=B(e)},l(l){i=z(l,e)},m(l,t){O(l,i,t)},p(l,t){t&1&&e!==(e=le(l[1].createdAt)+"")&&J(i,e)},d(l){l&&o(i)}}}function ze(r){let e,i=le(r[1].createdAt)+"",l,t;return{c(){e=h("a"),l=B(i),this.h()},l(s){e=m(s,"A",{class:!0,href:!0});var a=p(e);l=z(a,i),a.forEach(o),this.h()},h(){u(e,"class","underline"),u(e,"href",t="/revisie/"+r[1].previousRevisionId+"/diff/"+r[1].revisionId)},m(s,a){O(s,e,a),n(e,l)},p(s,a){a&1&&i!==(i=le(s[1].createdAt)+"")&&J(l,i),a&1&&t!==(t="/revisie/"+s[1].previousRevisionId+"/diff/"+s[1].revisionId)&&u(e,"href",t)},d(s){s&&o(e)}}}function De(r){let e,i,l=Z(r[1].goalTitle,70)+"",t;return{c(){e=h("div"),i=h("a"),this.h()},l(s){e=m(s,"DIV",{class:!0});var a=p(e);i=m(a,"A",{class:!0,href:!0});var b=p(i);b.forEach(o),a.forEach(o),this.h()},h(){u(i,"class","underline"),u(i,"href",t="/revisie/"+r[1].revisionId),u(e,"class","text-sm text-gray-900")},m(s,a){O(s,e,a),n(e,i),i.innerHTML=l},p(s,a){a&1&&l!==(l=Z(s[1].goalTitle,70)+"")&&(i.innerHTML=l),a&1&&t!==(t="/revisie/"+s[1].revisionId)&&u(i,"href",t)},d(s){s&&o(e)}}}function Le(r){let e,i,l,t,s,a,b,T,v,y,P,I,_,L;function E(f,g){return f[1].previousRevisionId?ze:Ce}let V=E(r),w=V(r),c=r[1].revisionId&&r[1].goalTitle&&De(r);return{c(){e=h("tr"),i=h("td"),w.c(),l=C(),t=h("td"),c&&c.c(),s=C(),a=h("td"),b=h("a"),T=B("Bekijken"),y=C(),P=h("a"),I=B("Wijzig"),L=C(),this.h()},l(f){e=m(f,"TR",{});var g=p(e);i=m(g,"TD",{class:!0});var H=p(i);w.l(H),H.forEach(o),l=M(g),t=m(g,"TD",{class:!0});var A=p(t);c&&c.l(A),A.forEach(o),s=M(g),a=m(g,"TD",{class:!0});var D=p(a);b=m(D,"A",{href:!0,class:!0});var k=p(b);T=z(k,"Bekijken"),k.forEach(o),y=M(D),P=m(D,"A",{href:!0,class:!0});var j=p(P);I=z(j,"Wijzig"),j.forEach(o),D.forEach(o),L=M(g),g.forEach(o),this.h()},h(){u(i,"class","px-6 py-4 whitespace-nowrap"),u(t,"class","px-6 py-4"),u(b,"href",v="/revisie/"+r[1].revisionId),u(b,"class","text-indigo-600 hover:text-indigo-900"),u(P,"href",_="/revisie/"+r[1].revisionId+"/wijzigen"),u(P,"class","text-indigo-600 hover:text-indigo-900"),u(a,"class","px-6 py-4 whitespace-nowrap text-right text-sm font-medium")},m(f,g){O(f,e,g),n(e,i),w.m(i,null),n(e,l),n(e,t),c&&c.m(t,null),n(e,s),n(e,a),n(a,b),n(b,T),n(a,y),n(a,P),n(P,I),n(e,L)},p(f,g){V===(V=E(f))&&w?w.p(f,g):(w.d(1),w=V(f),w&&(w.c(),w.m(i,null))),f[1].revisionId&&f[1].goalTitle?c?c.p(f,g):(c=De(f),c.c(),c.m(t,null)):c&&(c.d(1),c=null),g&1&&v!==(v="/revisie/"+f[1].revisionId)&&u(b,"href",v),g&1&&_!==(_="/revisie/"+f[1].revisionId+"/wijzigen")&&u(P,"href",_)},d(f){f&&o(e),w.d(),c&&c.d()}}}function Me(r){let e,i=r[0].revisionList&&Te(r);return{c(){i&&i.c(),e=W()},l(l){i&&i.l(l),e=W()},m(l,t){i&&i.m(l,t),O(l,e,t)},p(l,[t]){l[0].revisionList?i?i.p(l,t):(i=Te(l),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},i:oe,o:oe,d(l){i&&i.d(l),l&&o(e)}}}function Ne(r,e,i){let{curriculumProfile:l}=e;return r.$$set=t=>{"curriculumProfile"in t&&i(0,l=t.curriculumProfile)},r.$$.update=()=>{if(r.$$.dirty&1&&l.revisionList){for(let t of l.revisionList)t.revisionId=t.id;Pe(l.revisionList)}},[l]}class Se extends ve{constructor(e){super();_e(this,e,Ne,Me,he,{curriculumProfile:0})}}function $e(r,e,i){const l=r.slice();return l[1]=e[i],l}function Ve(r){let e,i,l,t,s,a,b,T,v,y,P,I,_,L,E,V,w,c,f,g,H,A=r[0].postList,D=[];for(let k=0;k<A.length;k+=1)D[k]=Oe($e(r,A,k));return{c(){e=h("h3"),i=B("Posts en antwoorden"),l=C(),t=h("div"),s=h("div"),a=h("div"),b=h("div"),T=h("div"),v=h("table"),y=h("thead"),P=h("tr"),I=h("th"),_=B("Gemaakt op"),L=C(),E=h("th"),V=B("Post title"),w=C(),c=h("th"),f=B("Leerdoel title"),g=C(),H=h("tbody");for(let k=0;k<D.length;k+=1)D[k].c();this.h()},l(k){e=m(k,"H3",{class:!0});var j=p(e);i=z(j,"Posts en antwoorden"),j.forEach(o),l=M(k),t=m(k,"DIV",{});var $=p(t);s=m($,"DIV",{class:!0});var N=p(s);a=m(N,"DIV",{class:!0});var Q=p(a);b=m(Q,"DIV",{class:!0});var F=p(b);T=m(F,"DIV",{class:!0});var S=p(T);v=m(S,"TABLE",{class:!0});var q=p(v);y=m(q,"THEAD",{class:!0});var G=p(y);P=m(G,"TR",{});var K=p(P);I=m(K,"TH",{scope:!0,class:!0});var se=p(I);_=z(se,"Gemaakt op"),se.forEach(o),L=M(K),E=m(K,"TH",{scope:!0,class:!0});var U=p(E);V=z(U,"Post title"),U.forEach(o),w=M(K),c=m(K,"TH",{scope:!0,class:!0});var ae=p(c);f=z(ae,"Leerdoel title"),ae.forEach(o),K.forEach(o),G.forEach(o),g=M(q),H=m(q,"TBODY",{class:!0});var ie=p(H);for(let te=0;te<D.length;te+=1)D[te].l(ie);ie.forEach(o),q.forEach(o),S.forEach(o),F.forEach(o),Q.forEach(o),N.forEach(o),$.forEach(o),this.h()},h(){u(e,"class","mt-5 mb-5 text-lg leading-6 font-medium text-gray-900"),u(I,"scope","col"),u(I,"class","px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),u(E,"scope","col"),u(E,"class","px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),u(c,"scope","col"),u(c,"class","px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),u(y,"class","bg-gray-50"),u(H,"class","bg-white divide-y divide-gray-200"),u(v,"class","min-w-full divide-y divide-gray-200"),u(T,"class","shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"),u(b,"class","py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"),u(a,"class","-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"),u(s,"class","flex flex-col w-full")},m(k,j){O(k,e,j),n(e,i),O(k,l,j),O(k,t,j),n(t,s),n(s,a),n(a,b),n(b,T),n(T,v),n(v,y),n(y,P),n(P,I),n(I,_),n(P,L),n(P,E),n(E,V),n(P,w),n(P,c),n(c,f),n(v,g),n(v,H);for(let $=0;$<D.length;$+=1)D[$].m(H,null)},p(k,j){if(j&1){A=k[0].postList;let $;for($=0;$<A.length;$+=1){const N=$e(k,A,$);D[$]?D[$].p(N,j):(D[$]=Oe(N),D[$].c(),D[$].m(H,null))}for(;$<D.length;$+=1)D[$].d(1);D.length=A.length}},d(k){k&&o(e),k&&o(l),k&&o(t),Ee(D,k)}}}function Ye(r){let e,i=Z(r[1].replyText,70)+"",l;return{c(){e=new we,l=W(),this.h()},l(t){e=ke(t),l=W(),this.h()},h(){e.a=l},m(t,s){e.m(i,t,s),O(t,l,s)},p(t,s){s&1&&i!==(i=Z(t[1].replyText,70)+"")&&e.p(i)},d(t){t&&o(l),t&&e.d()}}}function Ge(r){let e,i=Z(r[1].postTitle,70)+"",l;return{c(){e=new we,l=W(),this.h()},l(t){e=ke(t),l=W(),this.h()},h(){e.a=l},m(t,s){e.m(i,t,s),O(t,l,s)},p(t,s){s&1&&i!==(i=Z(t[1].postTitle,70)+"")&&e.p(i)},d(t){t&&o(l),t&&e.d()}}}function Ae(r){let e,i,l=Z(r[1].goalTitle,70)+"",t;return{c(){e=h("div"),i=h("a"),this.h()},l(s){e=m(s,"DIV",{class:!0});var a=p(e);i=m(a,"A",{class:!0,href:!0});var b=p(i);b.forEach(o),a.forEach(o),this.h()},h(){u(i,"class","underline"),u(i,"href",t="/overleg/"+r[1].goalId+"/"+r[1].talkId),u(e,"class","text-sm text-gray-900")},m(s,a){O(s,e,a),n(e,i),i.innerHTML=l},p(s,a){a&1&&l!==(l=Z(s[1].goalTitle,70)+"")&&(i.innerHTML=l),a&1&&t!==(t="/overleg/"+s[1].goalId+"/"+s[1].talkId)&&u(i,"href",t)},d(s){s&&o(e)}}}function Oe(r){let e,i,l,t=le(r[1].createdAt)+"",s,a,b,T,v,y,P,I,_,L;function E(f,g){return f[1].type==="post"&&f[1].postTitle?Ge:Ye}let V=E(r),w=V(r),c=r[1].goalId&&r[1].goalTitle&&Ae(r);return{c(){e=h("tr"),i=h("td"),l=h("a"),s=B(t),b=C(),T=h("td"),v=h("div"),y=h("a"),w.c(),I=C(),_=h("td"),c&&c.c(),L=C(),this.h()},l(f){e=m(f,"TR",{});var g=p(e);i=m(g,"TD",{class:!0});var H=p(i);l=m(H,"A",{class:!0,href:!0});var A=p(l);s=z(A,t),A.forEach(o),H.forEach(o),b=M(g),T=m(g,"TD",{class:!0});var D=p(T);v=m(D,"DIV",{class:!0});var k=p(v);y=m(k,"A",{class:!0,href:!0});var j=p(y);w.l(j),j.forEach(o),k.forEach(o),D.forEach(o),I=M(g),_=m(g,"TD",{class:!0});var $=p(_);c&&c.l($),$.forEach(o),L=M(g),g.forEach(o),this.h()},h(){u(l,"class","underline"),u(l,"href",a="/overleg/"+r[1].goalId+"/"+r[1].talkId+"/"+r[1].postId),u(i,"class","px-6 py-4 whitespace-nowrap"),u(y,"class","underline"),u(y,"href",P="/overleg/"+r[1].goalId+"/"+r[1].talkId+"/"+r[1].postId),u(v,"class","text-sm text-gray-900"),u(T,"class","px-6 py-4"),u(_,"class","px-6 py-4")},m(f,g){O(f,e,g),n(e,i),n(i,l),n(l,s),n(e,b),n(e,T),n(T,v),n(v,y),w.m(y,null),n(e,I),n(e,_),c&&c.m(_,null),n(e,L)},p(f,g){g&1&&t!==(t=le(f[1].createdAt)+"")&&J(s,t),g&1&&a!==(a="/overleg/"+f[1].goalId+"/"+f[1].talkId+"/"+f[1].postId)&&u(l,"href",a),V===(V=E(f))&&w?w.p(f,g):(w.d(1),w=V(f),w&&(w.c(),w.m(y,null))),g&1&&P!==(P="/overleg/"+f[1].goalId+"/"+f[1].talkId+"/"+f[1].postId)&&u(y,"href",P),f[1].goalId&&f[1].goalTitle?c?c.p(f,g):(c=Ae(f),c.c(),c.m(_,null)):c&&(c.d(1),c=null)},d(f){f&&o(e),w.d(),c&&c.d()}}}function We(r){let e,i=r[0].postList&&Ve(r);return{c(){i&&i.c(),e=W()},l(l){i&&i.l(l),e=W()},m(l,t){i&&i.m(l,t),O(l,e,t)},p(l,[t]){l[0].postList?i?i.p(l,t):(i=Ve(l),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null)},i:oe,o:oe,d(l){i&&i.d(l),l&&o(e)}}}function qe(r,e,i){let{curriculumProfile:l}=e;return r.$$set=t=>{"curriculumProfile"in t&&i(0,l=t.curriculumProfile)},r.$$.update=()=>{r.$$.dirty&1&&l.postList&&Pe(l.postList)},[l]}class Ke extends ve{constructor(e){super();_e(this,e,qe,We,he,{curriculumProfile:0})}}function He(r){let e,i,l,t,s,a,b,T,v=r[0].fullname+"",y,P,I,_,L=r[0].institution+"",E,V,w,c,f=r[0].institutionEmail+"",g,H,A,D,k=r[0].credentials+"",j,$,N,Q,F,S,q,G;function K(d){r[2](d)}function se(d){r[3](d)}let U={};r[0]!==void 0&&(U.curriculumProfile=r[0]),r[1]!==void 0&&(U.isOwnProfile=r[1]),e=new Be({props:U}),fe.push(()=>ue(e,"curriculumProfile",K)),fe.push(()=>ue(e,"isOwnProfile",se));function ae(d){r[4](d)}let ie={};r[0]!==void 0&&(ie.curriculumProfile=r[0]),N=new Se({props:ie}),fe.push(()=>ue(N,"curriculumProfile",ae));function te(d){r[5](d)}let Ie={};return r[0]!==void 0&&(Ie.curriculumProfile=r[0]),S=new Ke({props:Ie}),fe.push(()=>ue(S,"curriculumProfile",te)),{c(){me(e.$$.fragment),t=C(),s=h("div"),a=h("div"),b=h("div"),T=B("Volledige naam: "),y=B(v),P=C(),I=h("div"),_=B("Instutie: "),E=B(L),V=C(),w=h("div"),c=B("Email van institutie: "),g=B(f),H=C(),A=h("div"),D=B("Credenties: "),j=B(k),$=C(),me(N.$$.fragment),F=C(),me(S.$$.fragment),this.h()},l(d){pe(e.$$.fragment,d),t=M(d),s=m(d,"DIV",{"data-test":!0,class:!0});var R=p(s);a=m(R,"DIV",{class:!0});var Y=p(a);b=m(Y,"DIV",{});var X=p(b);T=z(X,"Volledige naam: "),y=z(X,v),X.forEach(o),P=M(Y),I=m(Y,"DIV",{});var x=p(I);_=z(x,"Instutie: "),E=z(x,L),x.forEach(o),V=M(Y),w=m(Y,"DIV",{});var ce=p(w);c=z(ce,"Email van institutie: "),g=z(ce,f),ce.forEach(o),H=M(Y),A=m(Y,"DIV",{});var de=p(A);D=z(de,"Credenties: "),j=z(de,k),de.forEach(o),Y.forEach(o),R.forEach(o),$=M(d),pe(N.$$.fragment,d),F=M(d),pe(S.$$.fragment,d),this.h()},h(){u(a,"class","mt-3"),u(s,"data-test","profile-view"),u(s,"class","flex justify-between items-start")},m(d,R){ge(e,d,R),O(d,t,R),O(d,s,R),n(s,a),n(a,b),n(b,T),n(b,y),n(a,P),n(a,I),n(I,_),n(I,E),n(a,V),n(a,w),n(w,c),n(w,g),n(a,H),n(a,A),n(A,D),n(A,j),O(d,$,R),ge(N,d,R),O(d,F,R),ge(S,d,R),G=!0},p(d,R){const Y={};!i&&R&1&&(i=!0,Y.curriculumProfile=d[0],ne(()=>i=!1)),!l&&R&2&&(l=!0,Y.isOwnProfile=d[1],ne(()=>l=!1)),e.$set(Y),(!G||R&1)&&v!==(v=d[0].fullname+"")&&J(y,v),(!G||R&1)&&L!==(L=d[0].institution+"")&&J(E,L),(!G||R&1)&&f!==(f=d[0].institutionEmail+"")&&J(g,f),(!G||R&1)&&k!==(k=d[0].credentials+"")&&J(j,k);const X={};!Q&&R&1&&(Q=!0,X.curriculumProfile=d[0],ne(()=>Q=!1)),N.$set(X);const x={};!q&&R&1&&(q=!0,x.curriculumProfile=d[0],ne(()=>q=!1)),S.$set(x)},i(d){G||(ee(e.$$.fragment,d),ee(N.$$.fragment,d),ee(S.$$.fragment,d),G=!0)},o(d){re(e.$$.fragment,d),re(N.$$.fragment,d),re(S.$$.fragment,d),G=!1},d(d){be(e,d),d&&o(t),d&&o(s),d&&o($),be(N,d),d&&o(F),be(S,d)}}}function Ze(r){let e,i,l=r[0]&&He(r);return{c(){l&&l.c(),e=W()},l(t){l&&l.l(t),e=W()},m(t,s){l&&l.m(t,s),O(t,e,s),i=!0},p(t,[s]){t[0]?l?(l.p(t,s),s&1&&ee(l,1)):(l=He(t),l.c(),ee(l,1),l.m(e.parentNode,e)):l&&(je(),re(l,1,1,()=>{l=null}),Re())},i(t){i||(ee(l),i=!0)},o(t){re(l),i=!1},d(t){l&&l.d(t),t&&o(e)}}}function Fe(r,e,i){let{curriculumProfile:l}=e,{isOwnProfile:t=!1}=e;function s(v){l=v,i(0,l)}function a(v){t=v,i(1,t)}function b(v){l=v,i(0,l)}function T(v){l=v,i(0,l)}return r.$$set=v=>{"curriculumProfile"in v&&i(0,l=v.curriculumProfile),"isOwnProfile"in v&&i(1,t=v.isOwnProfile)},[l,t,s,a,b,T]}class xe extends ve{constructor(e){super();_e(this,e,Fe,Ze,he,{curriculumProfile:0,isOwnProfile:1})}}export{xe as P};
