import{S as we,i as Ee,s as xe,Y as re,Z as ie,t as C,g as L,f as M,h as oe,d as c,e as f,k as P,c as u,a as b,n as R,b as m,H as s,j as De,m as Te,o as Ve,_ as se,x as ee,u as le,v as Ie,K as Le,l as Se,w as Me,M as je,r as Pe}from"../../../../chunks/vendor-9a64f523.js";import{S as Re}from"../../../../chunks/show-4b835def.js";import{p as Ue}from"../../../../chunks/stores-bd9665ba.js";import{f as Ye}from"../../../../chunks/store-b78dac0d.js";function He(r,e,t){const a=r.slice();return a[4]=e[t],a}function Ae(r){let e=r[1].title+"",t;return{c(){t=C(e)},l(a){t=L(a,e)},m(a,i){M(a,t,i)},p(a,i){i&2&&e!==(e=a[1].title+"")&&oe(t,e)},d(a){a&&c(t)}}}function qe(r){let e;return{c(){e=C("Moeilijkheid")},l(t){e=L(t,"Moeilijkheid")},m(t,a){M(t,e,a)},d(t){t&&c(e)}}}function Ke(r){let e;return{c(){e=C("Te moeilijk")},l(t){e=L(t,"Te moeilijk")},m(t,a){M(t,e,a)},d(t){t&&c(e)}}}function Ne(r){let e;return{c(){e=C("Te makkelijk")},l(t){e=L(t,"Te makkelijk")},m(t,a){M(t,e,a)},d(t){t&&c(e)}}}function Oe(r){let e;return{c(){e=C("Precies goed")},l(t){e=L(t,"Precies goed")},m(t,a){M(t,e,a)},d(t){t&&c(e)}}}function Fe(r){let e,t,a,i,d,p,o,x,y,n=r[4].uid+"",g,j,A,h=r[4].dateString+"",H,q,I,F,_=r[4].feedbackType==="difficulty"&&qe();function D(E,v){if(E[4].feedbackValue==1)return Oe;if(E[4].feedbackValue==-.5)return Ne;if(E[4].feedbackValue==-1)return Ke}let w=D(r),k=w&&w(r);return{c(){e=f("tr"),t=f("td"),a=f("div"),i=f("div"),d=f("div"),_&&_.c(),p=P(),o=f("td"),x=f("div"),y=f("div"),g=C(n),j=P(),A=f("td"),H=C(h),q=P(),I=f("td"),k&&k.c(),F=P(),this.h()},l(E){e=u(E,"TR",{});var v=b(e);t=u(v,"TD",{class:!0});var z=b(t);a=u(z,"DIV",{class:!0});var G=b(a);i=u(G,"DIV",{class:!0});var U=b(i);d=u(U,"DIV",{class:!0});var J=b(d);_&&_.l(J),J.forEach(c),U.forEach(c),G.forEach(c),z.forEach(c),p=R(v),o=u(v,"TD",{class:!0});var Q=b(o);x=u(Q,"DIV",{class:!0});var Y=b(x);y=u(Y,"DIV",{class:!0});var W=b(y);g=L(W,n),W.forEach(c),Y.forEach(c),Q.forEach(c),j=R(v),A=u(v,"TD",{class:!0});var X=b(A);H=L(X,h),X.forEach(c),q=R(v),I=u(v,"TD",{class:!0});var K=b(I);k&&k.l(K),K.forEach(c),F=R(v),v.forEach(c),this.h()},h(){m(d,"class","text-sm font-medium text-gray-900"),m(i,"class","ml-4"),m(a,"class","flex items-center"),m(t,"class","px-6 py-4 whitespace-nowrap"),m(y,"class","text-sm font-medium text-gray-900"),m(x,"class","text-sm text-gray-200"),m(o,"class","px-6 py-4 whitespace-nowrap"),m(A,"class","px-6 py-4 whitespace-nowrap"),m(I,"class","px-6 py-4 whitespace-nowrap text-sm text-gray-500")},m(E,v){M(E,e,v),s(e,t),s(t,a),s(a,i),s(i,d),_&&_.m(d,null),s(e,p),s(e,o),s(o,x),s(x,y),s(y,g),s(e,j),s(e,A),s(A,H),s(e,q),s(e,I),k&&k.m(I,null),s(e,F)},p(E,v){E[4].feedbackType==="difficulty"?_||(_=qe(),_.c(),_.m(d,null)):_&&(_.d(1),_=null),v&4&&n!==(n=E[4].uid+"")&&oe(g,n),v&4&&h!==(h=E[4].dateString+"")&&oe(H,h),w!==(w=D(E))&&(k&&k.d(1),k=w&&w(E),k&&(k.c(),k.m(I,null)))},d(E){E&&c(e),_&&_.d(),k&&k.d()}}}function Ze(r){let e,t,a,i,d,p,o,x,y,n,g,j,A,h,H,q,I,F,_,D,w,k,E,v,z,G,U,J,Q,Y,W,X,K,te;function Ce(l){r[3](l)}let ne={};r[0]!==void 0&&(ne.breadcrumbs=r[0]),e=new Re({props:ne}),re.push(()=>ie(e,"breadcrumbs",Ce));let T=r[1]&&Ae(r),$=r[2],V=[];for(let l=0;l<$.length;l+=1)V[l]=Fe(He(r,$,l));return{c(){De(e.$$.fragment),a=P(),i=f("div"),d=f("div"),p=f("div"),o=f("div"),x=f("h3"),y=C("Activiteit dashboard"),n=P(),g=f("p"),j=C(`Dashboard van activiteit: 
          `),T&&T.c(),A=P(),h=f("div"),H=f("div"),q=f("div"),I=f("div"),F=f("table"),_=f("thead"),D=f("tr"),w=f("th"),k=C("Feedback type"),E=P(),v=f("th"),z=C("User id"),G=P(),U=f("th"),J=C("Time"),Q=P(),Y=f("th"),W=C("Feedback value"),X=P(),K=f("tbody");for(let l=0;l<V.length;l+=1)V[l].c();this.h()},l(l){Te(e.$$.fragment,l),a=R(l),i=u(l,"DIV",{});var B=b(i);d=u(B,"DIV",{class:!0});var N=b(d);p=u(N,"DIV",{class:!0});var S=b(p);o=u(S,"DIV",{});var Z=b(o);x=u(Z,"H3",{class:!0});var fe=b(x);y=L(fe,"Activiteit dashboard"),fe.forEach(c),n=R(Z),g=u(Z,"P",{class:!0});var ce=b(g);j=L(ce,`Dashboard van activiteit: 
          `),T&&T.l(ce),ce.forEach(c),Z.forEach(c),S.forEach(c),N.forEach(c),B.forEach(c),A=R(l),h=u(l,"DIV",{class:!0});var ue=b(h);H=u(ue,"DIV",{class:!0});var be=b(H);q=u(be,"DIV",{class:!0});var me=b(q);I=u(me,"DIV",{class:!0});var he=b(I);F=u(he,"TABLE",{class:!0});var ae=b(F);_=u(ae,"THEAD",{class:!0});var _e=b(_);D=u(_e,"TR",{});var O=b(D);w=u(O,"TH",{scope:!0,class:!0});var ve=b(w);k=L(ve,"Feedback type"),ve.forEach(c),E=R(O),v=u(O,"TH",{scope:!0,class:!0});var pe=b(v);z=L(pe,"User id"),pe.forEach(c),G=R(O),U=u(O,"TH",{scope:!0,class:!0});var ge=b(U);J=L(ge,"Time"),ge.forEach(c),Q=R(O),Y=u(O,"TH",{scope:!0,class:!0});var ke=b(Y);W=L(ke,"Feedback value"),ke.forEach(c),O.forEach(c),_e.forEach(c),X=R(ae),K=u(ae,"TBODY",{class:!0});var ye=b(K);for(let de=0;de<V.length;de+=1)V[de].l(ye);ye.forEach(c),ae.forEach(c),he.forEach(c),me.forEach(c),be.forEach(c),ue.forEach(c),this.h()},h(){m(x,"class","text-lg leading-6 font-medium text-gray-900"),m(g,"class","mt-1 max-w-2xl text-sm text-gray-500"),m(p,"class","flex-1 min-w-0"),m(d,"class","mt-2 md:flex md:items-center md:justify-between"),m(w,"scope","col"),m(w,"class","px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),m(v,"scope","col"),m(v,"class","px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),m(U,"scope","col"),m(U,"class","px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),m(Y,"scope","col"),m(Y,"class","px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"),m(_,"class","bg-gray-50"),m(K,"class","bg-white divide-y divide-gray-200"),m(F,"class","min-w-full divide-y divide-gray-200"),m(I,"class","shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"),m(q,"class","py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"),m(H,"class","-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"),m(h,"class","flex flex-col")},m(l,B){Ve(e,l,B),M(l,a,B),M(l,i,B),s(i,d),s(d,p),s(p,o),s(o,x),s(x,y),s(o,n),s(o,g),s(g,j),T&&T.m(g,null),M(l,A,B),M(l,h,B),s(h,H),s(H,q),s(q,I),s(I,F),s(F,_),s(_,D),s(D,w),s(w,k),s(D,E),s(D,v),s(v,z),s(D,G),s(D,U),s(U,J),s(D,Q),s(D,Y),s(Y,W),s(F,X),s(F,K);for(let N=0;N<V.length;N+=1)V[N].m(K,null);te=!0},p(l,[B]){const N={};if(!t&&B&1&&(t=!0,N.breadcrumbs=l[0],se(()=>t=!1)),e.$set(N),l[1]?T?T.p(l,B):(T=Ae(l),T.c(),T.m(g,null)):T&&(T.d(1),T=null),B&4){$=l[2];let S;for(S=0;S<$.length;S+=1){const Z=He(l,$,S);V[S]?V[S].p(Z,B):(V[S]=Fe(Z),V[S].c(),V[S].m(K,null))}for(;S<V.length;S+=1)V[S].d(1);V.length=$.length}},i(l){te||(ee(e.$$.fragment,l),te=!0)},o(l){le(e.$$.fragment,l),te=!1},d(l){Ie(e,l),l&&c(a),l&&c(i),T&&T.d(),l&&c(A),l&&c(h),Le(V,l)}}}function ze(r,e,t){let{breadcrumbs:a}=e,{activity:i}=e,{feedback:d}=e;function p(o){a=o,t(0,a)}return r.$$set=o=>{"breadcrumbs"in o&&t(0,a=o.breadcrumbs),"activity"in o&&t(1,i=o.activity),"feedback"in o&&t(2,d=o.feedback)},[a,i,d,p]}class Ge extends we{constructor(e){super();Ee(this,e,ze,Ze,xe,{breadcrumbs:0,activity:1,feedback:2})}}function Be(r){let e,t,a,i,d;function p(n){r[5](n)}function o(n){r[6](n)}function x(n){r[7](n)}let y={};return r[0]!==void 0&&(y.activity=r[0]),r[1]!==void 0&&(y.feedback=r[1]),r[3]!==void 0&&(y.breadcrumbs=r[3]),e=new Ge({props:y}),re.push(()=>ie(e,"activity",p)),re.push(()=>ie(e,"feedback",o)),re.push(()=>ie(e,"breadcrumbs",x)),{c(){De(e.$$.fragment)},l(n){Te(e.$$.fragment,n)},m(n,g){Ve(e,n,g),d=!0},p(n,g){const j={};!t&&g&1&&(t=!0,j.activity=n[0],se(()=>t=!1)),!a&&g&2&&(a=!0,j.feedback=n[1],se(()=>a=!1)),!i&&g&8&&(i=!0,j.breadcrumbs=n[3],se(()=>i=!1)),e.$set(j)},i(n){d||(ee(e.$$.fragment,n),d=!0)},o(n){le(e.$$.fragment,n),d=!1},d(n){Ie(e,n)}}}function Je(r){let e,t,a=r[2]&&Be(r);return{c(){a&&a.c(),e=Se()},l(i){a&&a.l(i),e=Se()},m(i,d){a&&a.m(i,d),M(i,e,d),t=!0},p(i,[d]){i[2]?a?(a.p(i,d),d&4&&ee(a,1)):(a=Be(i),a.c(),ee(a,1),a.m(e.parentNode,e)):a&&(Pe(),le(a,1,1,()=>{a=null}),Me())},i(i){t||(ee(a),t=!0)},o(i){le(a),t=!1},d(i){a&&a.d(i),i&&c(e)}}}function Qe(r,e,t){let a,i;je(r,Ue,h=>t(9,a=h)),je(r,Ye,h=>t(4,i=h));let d,p,o=[],x=!1,y=[{url:"/beheer",value:"Beheer"},{url:"/beheer/activiteit",value:"Activiteit"},{url:"/beheer/activiteit/"+a.params.id+"/dashboard",value:"Activiteit dashboard"}];async function n(){let h=await d.firestore(),H=h.collection("activities").doc(a.params.id),q=await H.get();q.exists&&(t(0,p=q.data()),t(0,p.id=H.id,p)),(await h.collection("feedback").where("activityId","==",a.params.id).orderBy("time").limit(100).get()).forEach(D=>{let w=D.data();w.id=D.id;let k=new Date(w.time);w.dateString=k.toLocaleDateString()+" "+k.toLocaleTimeString(),t(1,o=[...o,w])})}function g(h){p=h,t(0,p)}function j(h){o=h,t(1,o)}function A(h){y=h,t(3,y)}return r.$$.update=()=>{r.$$.dirty&16&&(async()=>{i&&(d=i,await n(),t(2,x=!0))})()},[p,o,x,y,i,g,j,A]}class tt extends we{constructor(e){super();Ee(this,e,Qe,Je,xe,{})}}export{tt as default};
