import{S as be,i as ge,s as pe,Y as ve,Z as we,l as R,f as H,d as c,e as g,k as M,t as O,c as p,a as v,n as S,g as U,b as f,H as a,I as P,J as K,K as oe,L as x,j as ye,m as ke,o as Ee,_ as Te,x as Ie,u as Ve,v as ze,O as re,a7 as X,a9 as ne,a3 as Ne,a4 as le,a5 as qe}from"./vendor-9a64f523.js";import{D as Ae}from"./dialog-c021e43e.js";import{r as Be}from"./helper-e98ae755.js";function se(r,e,o){const n=r.slice();return n[31]=e[o],n[33]=o,n}function ie(r,e,o){const n=r.slice();return n[34]=e[o],n[33]=o,n}function De(r){let e,o,n=r[33]+1+"",s,t,i;function d(){return r[16](r[33])}return{c(){e=g("button"),o=O("Vraag "),s=O(n),this.h()},l(l){e=p(l,"BUTTON",{class:!0});var h=v(e);o=U(h,"Vraag "),s=U(h,n),h.forEach(c),this.h()},h(){f(e,"class","outline-none active:outline-none focus:outline-none border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(l,h){H(l,e,h),a(e,o),a(e,s),t||(i=P(e,"click",K(d)),t=!0)},p(l,h){r=l},d(l){l&&c(e),t=!1,i()}}}function Oe(r){let e,o,n=r[33]+1+"",s,t,i;function d(){return r[15](r[33])}return{c(){e=g("button"),o=O("Vraag "),s=O(n),this.h()},l(l){e=p(l,"BUTTON",{class:!0});var h=v(e);o=U(h,"Vraag "),s=U(h,n),h.forEach(c),this.h()},h(){f(e,"class","outline-none active:outline-none focus:outline-none border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(l,h){H(l,e,h),a(e,o),a(e,s),t||(i=P(e,"click",K(d)),t=!0)},p(l,h){r=l},d(l){l&&c(e),t=!1,i()}}}function ae(r){let e;function o(t,i){return t[1]!==t[33]?Oe:De}let n=o(r),s=n(r);return{c(){s.c(),e=R()},l(t){s.l(t),e=R()},m(t,i){s.m(t,i),H(t,e,i)},p(t,i){n===(n=o(t))&&s?s.p(t,i):(s.d(1),s=n(t),s&&(s.c(),s.m(e.parentNode,e)))},d(t){s.d(t),t&&c(e)}}}function ue(r){let e,o,n,s,t,i,d,l,h,_;function m(b,B){return b[2]!==-1?Le:Ue}let L=m(r),w=L(r),E=r[0][r[1]].answers,T=[];for(let b=0;b<E.length;b+=1)T[b]=fe(se(r,E,b));return{c(){e=g("nav"),w.c(),o=M();for(let b=0;b<T.length;b+=1)T[b].c();n=M(),s=g("button"),t=O("Nieuw antwoord"),i=M(),d=g("button"),l=O("Vraag verwijderen"),this.h()},l(b){e=p(b,"NAV",{class:!0,"aria-label":!0});var B=v(e);w.l(B),o=S(B);for(let N=0;N<T.length;N+=1)T[N].l(B);n=S(B),s=p(B,"BUTTON",{"data-cy":!0,class:!0});var I=v(s);t=U(I,"Nieuw antwoord"),I.forEach(c),i=S(B),d=p(B,"BUTTON",{"data-cy":!0,class:!0});var V=v(d);l=U(V,"Vraag verwijderen"),V.forEach(c),B.forEach(c),this.h()},h(){f(s,"data-cy","new-answer-button"),f(s,"class","mt-3 mb-1 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),f(d,"data-cy","remove-quiz-button"),f(d,"class","mt-3 float-right mb-1 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),f(e,"class","-mb-px flex space-x-8"),f(e,"aria-label","Tabs")},m(b,B){H(b,e,B),w.m(e,null),a(e,o);for(let I=0;I<T.length;I+=1)T[I].m(e,null);a(e,n),a(e,s),a(s,t),a(e,i),a(e,d),a(d,l),h||(_=[P(s,"click",K(r[21])),P(d,"click",K(r[22]))],h=!0)},p(b,B){if(L===(L=m(b))&&w?w.p(b,B):(w.d(1),w=L(b),w&&(w.c(),w.m(e,o))),B[0]&1031){E=b[0][b[1]].answers;let I;for(I=0;I<E.length;I+=1){const V=se(b,E,I);T[I]?T[I].p(V,B):(T[I]=fe(V),T[I].c(),T[I].m(e,n))}for(;I<T.length;I+=1)T[I].d(1);T.length=E.length}},d(b){b&&c(e),w.d(),oe(T,b),h=!1,x(_)}}}function Ue(r){let e,o,n,s;return{c(){e=g("button"),o=O("Vraag"),this.h()},l(t){e=p(t,"BUTTON",{class:!0});var i=v(e);o=U(i,"Vraag"),i.forEach(c),this.h()},h(){f(e,"class","outline-none active:outline-none focus:outline-none border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(t,i){H(t,e,i),a(e,o),n||(s=P(e,"click",K(r[18])),n=!0)},p:re,d(t){t&&c(e),n=!1,s()}}}function Le(r){let e,o,n,s;return{c(){e=g("button"),o=O("Vraag"),this.h()},l(t){e=p(t,"BUTTON",{class:!0});var i=v(e);o=U(i,"Vraag"),i.forEach(c),this.h()},h(){f(e,"class","outline-none active:outline-none focus:outline-none border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(t,i){H(t,e,i),a(e,o),n||(s=P(e,"click",K(r[17])),n=!0)},p:re,d(t){t&&c(e),n=!1,s()}}}function je(r){let e,o,n=r[33]+1+"",s,t,i,d,l=r[0][r[1]].answers[r[33]].correct&&de();function h(){return r[20](r[33])}return{c(){e=g("button"),o=O("Antwoord "),s=O(n),t=M(),l&&l.c(),this.h()},l(_){e=p(_,"BUTTON",{class:!0});var m=v(e);o=U(m,"Antwoord "),s=U(m,n),t=S(m),l&&l.l(m),m.forEach(c),this.h()},h(){f(e,"class","outline-none active:outline-none focus:outline-none border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(_,m){H(_,e,m),a(e,o),a(e,s),a(e,t),l&&l.m(e,null),i||(d=P(e,"click",K(h)),i=!0)},p(_,m){r=_,r[0][r[1]].answers[r[33]].correct?l||(l=de(),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(_){_&&c(e),l&&l.d(),i=!1,d()}}}function Qe(r){let e,o,n=r[33]+1+"",s,t,i,d,l=r[0][r[1]].answers[r[33]].correct&&ce();function h(){return r[19](r[33])}return{c(){e=g("button"),o=O("Antwoord "),s=O(n),t=M(),l&&l.c(),this.h()},l(_){e=p(_,"BUTTON",{"data-cy":!0,class:!0});var m=v(e);o=U(m,"Antwoord "),s=U(m,n),t=S(m),l&&l.l(m),m.forEach(c),this.h()},h(){f(e,"data-cy","A"+(r[33]+1)),f(e,"class","outline-none active:outline-none focus:outline-none border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")},m(_,m){H(_,e,m),a(e,o),a(e,s),a(e,t),l&&l.m(e,null),i||(d=P(e,"click",K(h)),i=!0)},p(_,m){r=_,r[0][r[1]].answers[r[33]].correct?l||(l=ce(),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(_){_&&c(e),l&&l.d(),i=!1,d()}}}function de(r){let e;return{c(){e=O("*")},l(o){e=U(o,"*")},m(o,n){H(o,e,n)},d(o){o&&c(e)}}}function ce(r){let e;return{c(){e=O("*")},l(o){e=U(o,"*")},m(o,n){H(o,e,n)},d(o){o&&c(e)}}}function fe(r){let e;function o(t,i){return t[2]!==t[33]?Qe:je}let n=o(r),s=n(r);return{c(){s.c(),e=R()},l(t){s.l(t),e=R()},m(t,i){s.m(t,i),H(t,e,i)},p(t,i){n===(n=o(t))&&s?s.p(t,i):(s.d(1),s=n(t),s&&(s.c(),s.m(e.parentNode,e)))},d(t){s.d(t),t&&c(e)}}}function _e(r){let e;function o(t,i){return t[2]===-1?Me:Fe}let n=o(r),s=n(r);return{c(){s.c(),e=R()},l(t){s.l(t),e=R()},m(t,i){s.m(t,i),H(t,e,i)},p(t,i){n===(n=o(t))&&s?s.p(t,i):(s.d(1),s=n(t),s&&(s.c(),s.m(e.parentNode,e)))},d(t){s.d(t),t&&c(e)}}}function Fe(r){let e,o,n,s,t,i,d,l,h,_,m,L,w,E,T,b,B,I,V,N,q;return{c(){e=g("div"),o=g("label"),n=O("Antwoord"),s=M(),t=g("textarea"),i=M(),d=g("div"),l=g("input"),h=M(),_=g("label"),m=O("Goed antwoord"),L=M(),w=g("button"),E=O("Update preview"),T=M(),b=g("button"),B=O("Antwoord verwijderen"),I=M(),V=g("div"),this.h()},l(y){e=p(y,"DIV",{class:!0});var u=v(e);o=p(u,"LABEL",{for:!0,class:!0});var D=v(o);n=U(D,"Antwoord"),D.forEach(c),s=S(u),t=p(u,"TEXTAREA",{rows:!0,id:!0,class:!0}),v(t).forEach(c),i=S(u),d=p(u,"DIV",{class:!0});var Q=v(d);l=p(Q,"INPUT",{id:!0,type:!0,class:!0}),h=S(Q),_=p(Q,"LABEL",{class:!0,for:!0});var j=v(_);m=U(j,"Goed antwoord"),j.forEach(c),Q.forEach(c),L=S(u),w=p(u,"BUTTON",{class:!0});var A=v(w);E=U(A,"Update preview"),A.forEach(c),T=S(u),b=p(u,"BUTTON",{"data-cy":!0,type:!0,class:!0});var k=v(b);B=U(k,"Antwoord verwijderen"),k.forEach(c),I=S(u),V=p(u,"DIV",{class:!0});var F=v(V);F.forEach(c),u.forEach(c),this.h()},h(){f(o,"for","answeranswer"),f(o,"class","mb-1 block text-sm font-medium text-gray-700"),f(t,"rows","3"),f(t,"id","answeranswer"),f(t,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),f(l,"id","answers_check"),f(l,"type","checkbox"),f(l,"class","focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"),f(_,"class","font-medium text-gray-700"),f(_,"for","answers_check"),f(d,"class","mt-3"),f(w,"class","float-left preview-button mt-3 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),f(b,"data-cy","remove-answer-button"),f(b,"type","button"),f(b,"class","float-right mt-3 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),f(V,"class","mt-14"),f(e,"class","mt-3")},m(y,u){H(y,e,u),a(e,o),a(o,n),a(e,s),a(e,t),X(t,r[0][r[1]].answers[r[2]].answer),a(e,i),a(e,d),a(d,l),l.checked=r[0][r[1]].answers[r[2]].correct,a(d,h),a(d,_),a(_,m),a(e,L),a(e,w),a(w,E),a(e,T),a(e,b),a(b,B),a(e,I),a(e,V),V.innerHTML=r[5],N||(q=[P(t,"input",r[27]),P(l,"change",r[28]),P(w,"click",K(r[29])),P(b,"click",K(r[30]))],N=!0)},p(y,u){u[0]&7&&X(t,y[0][y[1]].answers[y[2]].answer),u[0]&7&&(l.checked=y[0][y[1]].answers[y[2]].correct),u[0]&32&&(V.innerHTML=y[5])},d(y){y&&c(e),N=!1,x(q)}}}function Me(r){let e,o,n,s,t,i,d,l,h,_,m,L,w,E,T,b,B,I,V,N,q,y,u,D,Q,j,A=r[3]&&me(r);return{c(){A&&A.c(),e=M(),o=g("div"),n=g("label"),s=O("Type"),t=M(),i=g("div"),d=g("div"),l=g("select"),h=g("option"),_=O("Multiple choice"),m=g("option"),L=O("Quiz"),w=M(),E=g("div"),T=g("label"),b=O("Vraag"),B=M(),I=g("div"),V=g("textarea"),N=M(),q=g("button"),y=O("Update preview"),u=M(),D=g("div"),this.h()},l(k){A&&A.l(k),e=S(k),o=p(k,"DIV",{class:!0});var F=v(o);n=p(F,"LABEL",{for:!0,class:!0});var C=v(n);s=U(C,"Type"),C.forEach(c),t=S(F),i=p(F,"DIV",{});var Y=v(i);d=p(Y,"DIV",{});var Z=v(d);l=p(Z,"SELECT",{id:!0,name:!0,class:!0});var J=v(l);h=p(J,"OPTION",{});var z=v(h);_=U(z,"Multiple choice"),z.forEach(c),m=p(J,"OPTION",{});var W=v(m);L=U(W,"Quiz"),W.forEach(c),J.forEach(c),Z.forEach(c),Y.forEach(c),F.forEach(c),w=S(k),E=p(k,"DIV",{class:!0});var G=v(E);T=p(G,"LABEL",{for:!0,class:!0});var $=v(T);b=U($,"Vraag"),$.forEach(c),B=S(G),I=p(G,"DIV",{});var ee=v(I);V=p(ee,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),v(V).forEach(c),ee.forEach(c),N=S(G),q=p(G,"BUTTON",{class:!0});var te=v(q);y=U(te,"Update preview"),te.forEach(c),u=S(G),D=p(G,"DIV",{class:!0});var he=v(D);he.forEach(c),G.forEach(c),this.h()},h(){f(n,"for","quiz_type"),f(n,"class","mb-1 block text-sm font-medium text-gray-700"),h.__value="multiple_choice",h.value=h.__value,m.__value="quiz",m.value=m.__value,f(l,"id","quiz_type"),f(l,"name","quiz_type"),f(l,"class","max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"),r[0][r[1]].type===void 0&&Ne(()=>r[24].call(l)),f(o,"class","mt-3"),f(T,"for","quiz_question"),f(T,"class","mb-1 block text-sm font-medium text-gray-700"),f(V,"id","quiz_question"),f(V,"name","quiz_question"),f(V,"rows","3"),f(V,"class","max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"),f(q,"class","preview-button mt-3 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),f(D,"class","mt-3"),f(E,"class","mt-3")},m(k,F){A&&A.m(k,F),H(k,e,F),H(k,o,F),a(o,n),a(n,s),a(o,t),a(o,i),a(i,d),a(d,l),a(l,h),a(h,_),a(l,m),a(m,L),le(l,r[0][r[1]].type),H(k,w,F),H(k,E,F),a(E,T),a(T,b),a(E,B),a(E,I),a(I,V),X(V,r[0][r[1]].question),a(E,N),a(E,q),a(q,y),a(E,u),a(E,D),D.innerHTML=r[5],Q||(j=[P(l,"change",r[24]),P(V,"input",r[25]),P(q,"click",K(r[26]))],Q=!0)},p(k,F){k[3]?A?A.p(k,F):(A=me(k),A.c(),A.m(e.parentNode,e)):A&&(A.d(1),A=null),F[0]&3&&le(l,k[0][k[1]].type),F[0]&3&&X(V,k[0][k[1]].question),F[0]&32&&(D.innerHTML=k[5])},d(k){A&&A.d(k),k&&c(e),k&&c(o),k&&c(w),k&&c(E),Q=!1,x(j)}}}function me(r){let e,o,n,s,t,i,d,l,h;return{c(){e=g("div"),o=g("label"),n=O("Tijd in video"),s=M(),t=g("div"),i=g("div"),d=g("input"),this.h()},l(_){e=p(_,"DIV",{class:!0});var m=v(e);o=p(m,"LABEL",{for:!0,class:!0});var L=v(o);n=U(L,"Tijd in video"),L.forEach(c),s=S(m),t=p(m,"DIV",{});var w=v(t);i=p(w,"DIV",{});var E=v(i);d=p(E,"INPUT",{type:!0,step:!0,name:!0,id:!0,class:!0}),E.forEach(c),w.forEach(c),m.forEach(c),this.h()},h(){f(o,"for","quiz_video_time"),f(o,"class","mb-1 block text-sm font-medium text-gray-700"),f(d,"type","number"),f(d,"step","0.1"),f(d,"name","quiz_video_time"),f(d,"id","quiz_video_time"),f(d,"class","max-w-xs focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"),f(e,"class","mt-3")},m(_,m){H(_,e,m),a(e,o),a(o,n),a(e,s),a(e,t),a(t,i),a(i,d),X(d,r[0][r[1]].timeInVideo),l||(h=P(d,"input",r[23]),l=!0)},p(_,m){m[0]&3&&ne(d.value)!==_[0][_[1]].timeInVideo&&X(d,_[0][_[1]].timeInVideo)},d(_){_&&c(e),l=!1,h()}}}function Se(r){let e,o,n,s,t,i,d,l,h,_,m,L,w,E,T,b;function B(u){r[14](u)}let I={};r[4]!==void 0&&(I.toggle=r[4]),e=new Ae({props:I}),ve.push(()=>we(e,"toggle",B)),e.$on("ok",r[7]);let V=r[0],N=[];for(let u=0;u<V.length;u+=1)N[u]=ae(ie(r,V,u));let q=r[0].length>0&&ue(r),y=r[0].length>0&&_e(r);return{c(){ye(e.$$.fragment),n=M(),s=g("div"),t=g("div"),i=g("div"),d=g("div"),l=g("nav");for(let u=0;u<N.length;u+=1)N[u].c();h=M(),_=g("button"),m=O("Nieuwe vraag"),L=M(),q&&q.c(),w=M(),y&&y.c(),this.h()},l(u){ke(e.$$.fragment,u),n=S(u),s=p(u,"DIV",{class:!0});var D=v(s);t=p(D,"DIV",{});var Q=v(t);i=p(Q,"DIV",{class:!0});var j=v(i);d=p(j,"DIV",{class:!0});var A=v(d);l=p(A,"NAV",{class:!0,"aria-label":!0});var k=v(l);for(let C=0;C<N.length;C+=1)N[C].l(k);h=S(k),_=p(k,"BUTTON",{"data-cy":!0,class:!0});var F=v(_);m=U(F,"Nieuwe vraag"),F.forEach(c),k.forEach(c),L=S(A),q&&q.l(A),A.forEach(c),j.forEach(c),w=S(Q),y&&y.l(Q),Q.forEach(c),D.forEach(c),this.h()},h(){f(_,"data-cy","add-question-button"),f(_,"class","mt-3 mb-1 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),f(l,"class","-mb-px flex space-x-8"),f(l,"aria-label","Tabs"),f(d,"class","border-b mb-3 border-gray-200"),f(i,"class","block tabs"),f(s,"class","space-y-3 sm:space-y-2")},m(u,D){Ee(e,u,D),H(u,n,D),H(u,s,D),a(s,t),a(t,i),a(i,d),a(d,l);for(let Q=0;Q<N.length;Q+=1)N[Q].m(l,null);a(l,h),a(l,_),a(_,m),a(d,L),q&&q.m(d,null),a(t,w),y&&y.m(t,null),E=!0,T||(b=P(_,"click",K(r[12])),T=!0)},p(u,D){const Q={};if(!o&&D[0]&16&&(o=!0,Q.toggle=u[4],Te(()=>o=!1)),e.$set(Q),D[0]&515){V=u[0];let j;for(j=0;j<V.length;j+=1){const A=ie(u,V,j);N[j]?N[j].p(A,D):(N[j]=ae(A),N[j].c(),N[j].m(l,h))}for(;j<N.length;j+=1)N[j].d(1);N.length=V.length}u[0].length>0?q?q.p(u,D):(q=ue(u),q.c(),q.m(d,null)):q&&(q.d(1),q=null),u[0].length>0?y?y.p(u,D):(y=_e(u),y.c(),y.m(t,null)):y&&(y.d(1),y=null)},i(u){E||(Ie(e.$$.fragment,u),E=!0)},o(u){Ve(e.$$.fragment,u),E=!1},d(u){ze(e,u),u&&c(n),u&&c(s),oe(N,u),q&&q.d(),y&&y.d(),T=!1,b()}}}function He(r,e,o){let{quizzes:n=[]}=e,{showTimeInVideo:s=!1}=e,{selectedQuizIndex:t=0}=e,{selectedFieldIndex:i=-1}=e,d=!1,l="";function h(z){o(5,l=Be(z))}function _(){n.splice(t,1),o(0,n),o(1,t=0),o(2,i=-1)}function m(){n[t].answers.splice(i,1),o(2,i=-1),o(0,n)}function L(z){o(1,t=z),o(2,i=-1),o(5,l="")}function w(z){o(2,i=z),o(5,l="")}function E(){o(4,d=!0)}function T(){let z={id:Math.random().toString(36).substring(2,7),answers:[]};o(0,n=[...n,z])}function b(z){let W={answer:"",correct:!1};o(0,n[z].answers=[...n[z].answers,W],n)}function B(z){d=z,o(4,d)}const I=z=>L(z),V=z=>L(z),N=()=>w(-1),q=()=>w(-1),y=z=>w(z),u=z=>w(z),D=()=>b(t),Q=()=>E();function j(){n[t].timeInVideo=ne(this.value),o(0,n),o(1,t)}function A(){n[t].type=qe(this),o(0,n),o(1,t)}function k(){n[t].question=this.value,o(0,n),o(1,t)}const F=()=>h(n[t].question);function C(){n[t].answers[i].answer=this.value,o(0,n),o(1,t),o(2,i)}function Y(){n[t].answers[i].correct=this.checked,o(0,n),o(1,t),o(2,i)}const Z=()=>h(n[t].answers[i].answer),J=()=>m();return r.$$set=z=>{"quizzes"in z&&o(0,n=z.quizzes),"showTimeInVideo"in z&&o(3,s=z.showTimeInVideo),"selectedQuizIndex"in z&&o(1,t=z.selectedQuizIndex),"selectedFieldIndex"in z&&o(2,i=z.selectedFieldIndex)},[n,t,i,s,d,l,h,_,m,L,w,E,T,b,B,I,V,N,q,y,u,D,Q,j,A,k,F,C,Y,Z,J]}class Ge extends be{constructor(e){super();ge(this,e,He,Se,pe,{quizzes:0,showTimeInVideo:3,selectedQuizIndex:1,selectedFieldIndex:2},null,[-1,-1])}}export{Ge as Q};
