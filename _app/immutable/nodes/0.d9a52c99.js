import{S as xc,i as yc,s as Ai,e as xr,C as Fb,h as a,D as e,E as le,k as r,l as s,n as t,b as H,a as u,y as ki,c as f,z as Si,A as Ti,g as se,d as ue,B as Oi,F as wd,q as m,m as l,r as b,G as Y,H as Uf,u as Id,I as k_,J as da,v as kp,f as Sp,K as t3,L as r3,M as Xa,N as Qa,O as L,P as S_,Q as T_,R as O_,T as L_,p as S,o as Mb}from"../chunks/index.c425c6ae.js";import{g as s3}from"../chunks/posts.2c2126ab.js";import{f as ug,a as yd,h as Xh,p as Qh,b as Vp,s as j5,t as A_,c as ne,d as N5,H as a3,e as F_,g as kb,F as n3,P as l3}from"../chunks/footer.72a0ef75.js";import{_ as i3}from"../chunks/preload-helper.a4192956.js";import{p as M_}from"../chunks/stores.6554441a.js";const o3=!0,c3="always",d3=async({url:o,fetch:n})=>({path:o.pathname,res:await n("/posts.json").then(i=>i.json())}),$E=Object.freeze(Object.defineProperty({__proto__:null,load:d3,prerender:o3,trailingSlash:c3},Symbol.toStringTag,{value:"Module"}));function u3(o={}){const{immediate:n=!1,onNeedRefresh:i,onOfflineReady:c,onRegistered:d,onRegisteredSW:p,onRegisterError:h}=o;let v,g;const w=async(_=!0)=>{await g};async function y(){if("serviceWorker"in navigator){const{Workbox:_}=await i3(()=>import("../chunks/workbox-window.prod.es5.08b2315b.js"),[],import.meta.url);v=new _("./sw.js",{scope:"/",type:"classic"}),v.addEventListener("activated",E=>{(E.isUpdate||E.isExternal)&&window.location.reload()}),v.addEventListener("installed",E=>{E.isUpdate||c==null||c()}),v.register({immediate:n}).then(E=>{p?p("./sw.js",E):d==null||d(E)}).catch(E=>{h==null||h(E)})}}return g=y(),w}function f3(o){let n;return{c(){n=r("link"),this.h()},l(i){n=s(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(n,"rel","shortcut icon"),t(n,"href",ug.src),t(n,"sizes",ug.sizes),t(n,"type",ug.type)},m(i,c){H(i,n,c)},p:le,d(i){i&&a(n)}}}function p3(o){let n;return{c(){n=r("link"),this.h()},l(i){n=s(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(n,"rel","apple-touch-icon"),t(n,"href",yd[180].src),t(n,"sizes",yd[180].sizes),t(n,"type",yd[180].type)},m(i,c){H(i,n,c)},p:le,d(i){i&&a(n)}}}function v3(o){let n;return{c(){n=r("link"),this.h()},l(i){n=s(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(n,"rel","icon"),t(n,"href",yd[192].src),t(n,"sizes",yd[192].sizes),t(n,"type",yd[192].type)},m(i,c){H(i,n,c)},p:le,d(i){i&&a(n)}}}function g3(o){let n,i,c,d=ug&&f3(),p=yd[180]&&p3(),h=yd[192]&&v3();return{c(){d&&d.c(),n=xr(),p&&p.c(),i=xr(),h&&h.c(),c=xr()},l(v){const g=Fb("svelte-1kxdj3d",document.head);d&&d.l(g),n=xr(),p&&p.l(g),i=xr(),h&&h.l(g),c=xr(),g.forEach(a)},m(v,g){d&&d.m(document.head,null),e(document.head,n),p&&p.m(document.head,null),e(document.head,i),h&&h.m(document.head,null),e(document.head,c)},p(v,[g]){ug&&d.p(v,g),yd[180]&&p.p(v,g),yd[192]&&h.p(v,g)},i:le,o:le,d(v){d&&d.d(v),a(n),p&&p.d(v),a(i),h&&h.d(v),a(c)}}}class h3 extends xc{constructor(n){super(),yc(this,n,null,g3,Ai,{})}}function G5(o,n,i){const c=o.slice();return c[0]=n[i],c}function m3(o){let n,i=Xh.me,c=[];for(let d=0;d<i.length;d+=1)c[d]=B5(G5(o,i,d));return{c(){for(let d=0;d<c.length;d+=1)c[d].c();n=xr()},l(d){for(let p=0;p<c.length;p+=1)c[p].l(d);n=xr()},m(d,p){for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(d,p);H(d,n,p)},p(d,p){if(p&0){i=Xh.me;let h;for(h=0;h<i.length;h+=1){const v=G5(d,i,h);c[h]?c[h].p(v,p):(c[h]=B5(v),c[h].c(),c[h].m(n.parentNode,n))}for(;h<c.length;h+=1)c[h].d(1);c.length=i.length}},d(d){wd(c,d),d&&a(n)}}}function B5(o){let n;return{c(){n=r("link"),this.h()},l(i){n=s(i,"LINK",{rel:!0,href:!0}),this.h()},h(){t(n,"rel","me"),t(n,"href",o[0])},m(i,c){H(i,n,c)},p:le,d(i){i&&a(n)}}}function b3(o){let n,i,c;return{c(){n=r("link"),i=u(),c=r("link"),this.h()},l(d){n=s(d,"LINK",{rel:!0,href:!0}),i=f(d),c=s(d,"LINK",{rel:!0,href:!0}),this.h()},h(){t(n,"rel","webmention"),t(n,"href","https://webmention.io/"+Qh.comment.webmention.username+"/webmention"),t(c,"rel","pingback"),t(c,"href","https://webmention.io/"+Qh.comment.webmention.username+"/xmlrpc")},m(d,p){H(d,n,p),H(d,i,p),H(d,c,p)},p:le,d(d){d&&a(n),d&&a(i),d&&a(c)}}}function x3(o){var g,w;let n,i,c,d,p,h=Xh.me&&m3(o),v=((w=(g=Qh.comment)==null?void 0:g.webmention)==null?void 0:w.username)&&b3();return d=new h3({}),{c(){h&&h.c(),n=xr(),v&&v.c(),i=xr(),c=u(),ki(d.$$.fragment)},l(y){const _=Fb("svelte-1592q3p",document.head);h&&h.l(_),n=xr(),v&&v.l(_),i=xr(),_.forEach(a),c=f(y),Si(d.$$.fragment,y)},m(y,_){h&&h.m(document.head,null),e(document.head,n),v&&v.m(document.head,null),e(document.head,i),H(y,c,_),Ti(d,y,_),p=!0},p(y,[_]){var E,D;Xh.me&&h.p(y,_),(D=(E=Qh.comment)==null?void 0:E.webmention)!=null&&D.username&&v.p(y,_)},i(y){p||(se(d.$$.fragment,y),p=!0)},o(y){ue(d.$$.fragment,y),p=!1},d(y){h&&h.d(y),a(n),v&&v.d(y),a(i),y&&a(c),Oi(d,y)}}}class y3 extends xc{constructor(n){super(),yc(this,n,null,x3,Ai,{})}}const _3=(o,n,i,c=i/=100,d=n*Math.min(c,1-c)/100,p=(h,v=(h+o/30)%12)=>Math.round(255*(c-d*Math.max(Math.min(v-3,9-v,1),-1))).toString(16).padStart(2,"0"))=>`#${p(0)}${p(8)}${p(4)}`;function H5(o,n,i){const c=o.slice();return c[11]=n[i].text,c[12]=n[i].link,c[13]=n[i].children,c}function $5(o,n,i){const c=o.slice();return c[11]=n[i].text,c[12]=n[i].link,c}function R5(o,n,i){const c=o.slice();return c[11]=n[i].text,c[12]=n[i].link,c[13]=n[i].children,c}function U5(o,n,i){const c=o.slice();return c[11]=n[i].text,c[12]=n[i].link,c}function w3(o){let n,i,c=o[11]+"",d,p,h,v,g,w,y=o[13],_=[];for(let E=0;E<y.length;E+=1)_[E]=q5(U5(o,y,E));return{c(){n=r("li"),i=r("span"),d=m(c),p=u(),h=r("span"),v=u(),g=r("ul");for(let E=0;E<_.length;E+=1)_[E].c();w=u(),this.h()},l(E){n=s(E,"LI",{tabindex:!0});var D=l(n);i=s(D,"SPAN",{class:!0});var I=l(i);d=b(I,c),p=f(I),h=s(I,"SPAN",{class:!0}),l(h).forEach(a),I.forEach(a),v=f(D),g=s(D,"UL",{class:!0});var P=l(g);for(let V=0;V<_.length;V+=1)_[V].l(P);P.forEach(a),w=f(D),D.forEach(a),this.h()},h(){t(h,"class","i-heroicons-solid-chevron-right mr-2"),t(i,"class","justify-between gap-1 max-w-[13rem]"),Y(i,"font-bold",o[13].some(o[6])),t(g,"class","bg-base-100 text-base-content shadow-lg p-2"),t(n,"tabindex","0")},m(E,D){H(E,n,D),e(n,i),e(i,d),e(i,p),e(i,h),e(n,v),e(n,g);for(let I=0;I<_.length;I+=1)_[I]&&_[I].m(g,null);e(n,w)},p(E,D){if(D&1&&c!==(c=E[11]+"")&&Id(d,c),D&3&&Y(i,"font-bold",E[13].some(E[6])),D&3){y=E[13];let I;for(I=0;I<y.length;I+=1){const P=U5(E,y,I);_[I]?_[I].p(P,D):(_[I]=q5(P),_[I].c(),_[I].m(g,null))}for(;I<_.length;I+=1)_[I].d(1);_.length=y.length}},d(E){E&&a(n),wd(_,E)}}}function E3(o){let n,i,c=o[11]+"",d,p,h;return{c(){n=r("li"),i=r("a"),d=m(c),h=u(),this.h()},l(v){n=s(v,"LI",{});var g=l(n);i=s(g,"A",{href:!0});var w=l(i);d=b(w,c),w.forEach(a),h=f(g),g.forEach(a),this.h()},h(){t(i,"href",p=o[12]),Y(i,"font-bold",o[12]===o[1])},m(v,g){H(v,n,g),e(n,i),e(i,d),e(n,h)},p(v,g){g&1&&c!==(c=v[11]+"")&&Id(d,c),g&1&&p!==(p=v[12])&&t(i,"href",p),g&3&&Y(i,"font-bold",v[12]===v[1])},d(v){v&&a(n)}}}function q5(o){let n,i,c=o[11]+"",d,p,h;return{c(){n=r("li"),i=r("a"),d=m(c),h=u(),this.h()},l(v){n=s(v,"LI",{});var g=l(n);i=s(g,"A",{href:!0});var w=l(i);d=b(w,c),w.forEach(a),h=f(g),g.forEach(a),this.h()},h(){t(i,"href",p=o[12]),Y(i,"font-bold",o[12]===o[1])},m(v,g){H(v,n,g),e(n,i),e(i,d),e(n,h)},p(v,g){g&1&&c!==(c=v[11]+"")&&Id(d,c),g&1&&p!==(p=v[12])&&t(i,"href",p),g&3&&Y(i,"font-bold",v[12]===v[1])},d(v){v&&a(n)}}}function z5(o){let n;function i(p,h){if(p[12]&&!p[13])return E3;if(p[13])return w3}let c=i(o),d=c&&c(o);return{c(){d&&d.c(),n=xr()},l(p){d&&d.l(p),n=xr()},m(p,h){d&&d.m(p,h),H(p,n,h)},p(p,h){c===(c=i(p))&&d?d.p(p,h):(d&&d.d(1),d=c&&c(p),d&&(d.c(),d.m(n.parentNode,n)))},d(p){d&&d.d(p),p&&a(n)}}}function I3(o){return{c:le,l:le,m:le,d:le}}function D3(o){let n,i,c=o[11]+"",d,p,h,v,g,w,y=o[13],_=[];for(let E=0;E<y.length;E+=1)_[E]=Y5($5(o,y,E));return{c(){n=r("li"),i=r("span"),d=m(c),p=u(),h=r("span"),v=u(),g=r("ul");for(let E=0;E<_.length;E+=1)_[E].c();w=u(),this.h()},l(E){n=s(E,"LI",{});var D=l(n);i=s(D,"SPAN",{class:!0});var I=l(i);d=b(I,c),p=f(I),h=s(I,"SPAN",{class:!0}),l(h).forEach(a),I.forEach(a),v=f(D),g=s(D,"UL",{tabindex:!0,class:!0});var P=l(g);for(let V=0;V<_.length;V+=1)_[V].l(P);P.forEach(a),w=f(D),D.forEach(a),this.h()},h(){t(h,"class","i-heroicons-solid-chevron-down -mr-1"),t(i,"class","!rounded-btn gap-3"),Y(i,"font-bold",o[13].some(o[8])),Y(i,"text-pfp-green",o[13].some(o[9])),t(g,"tabindex","0"),t(g,"class","menu rounded-box bg-base-100 text-base-content shadow-lg p-2")},m(E,D){H(E,n,D),e(n,i),e(i,d),e(i,p),e(i,h),e(n,v),e(n,g);for(let I=0;I<_.length;I+=1)_[I]&&_[I].m(g,null);e(n,w)},p(E,D){if(D&1&&c!==(c=E[11]+"")&&Id(d,c),D&3&&Y(i,"font-bold",E[13].some(E[8])),D&3&&Y(i,"text-pfp-green",E[13].some(E[9])),D&3){y=E[13];let I;for(I=0;I<y.length;I+=1){const P=$5(E,y,I);_[I]?_[I].p(P,D):(_[I]=Y5(P),_[I].c(),_[I].m(g,null))}for(;I<_.length;I+=1)_[I].d(1);_.length=y.length}},d(E){E&&a(n),wd(_,E)}}}function V3(o){let n,i,c=o[11]+"",d,p,h;return{c(){n=r("li"),i=r("a"),d=m(c),h=u(),this.h()},l(v){n=s(v,"LI",{});var g=l(n);i=s(g,"A",{class:!0,href:!0});var w=l(i);d=b(w,c),w.forEach(a),h=f(g),g.forEach(a),this.h()},h(){t(i,"class","!rounded-btn"),t(i,"href",p=o[12]),Y(i,"font-bold",o[12]===o[1]),Y(i,"text-pfp-green",o[12]===o[1])},m(v,g){H(v,n,g),e(n,i),e(i,d),e(n,h)},p(v,g){g&1&&c!==(c=v[11]+"")&&Id(d,c),g&1&&p!==(p=v[12])&&t(i,"href",p),g&3&&Y(i,"font-bold",v[12]===v[1]),g&3&&Y(i,"text-pfp-green",v[12]===v[1])},d(v){v&&a(n)}}}function Y5(o){let n,i,c=o[11]+"",d,p,h;return{c(){n=r("li"),i=r("a"),d=m(c),h=u(),this.h()},l(v){n=s(v,"LI",{});var g=l(n);i=s(g,"A",{href:!0});var w=l(i);d=b(w,c),w.forEach(a),h=f(g),g.forEach(a),this.h()},h(){t(i,"href",p=o[12]),Y(i,"font-bold",o[12]===o[1]),Y(i,"text-pfp-green",o[12]===o[1])},m(v,g){H(v,n,g),e(n,i),e(i,d),e(n,h)},p(v,g){g&1&&c!==(c=v[11]+"")&&Id(d,c),g&1&&p!==(p=v[12])&&t(i,"href",p),g&3&&Y(i,"font-bold",v[12]===v[1]),g&3&&Y(i,"text-pfp-green",v[12]===v[1])},d(v){v&&a(n)}}}function W5(o){let n;function i(p,h){if(p[12]&&!p[13])return V3;if(p[13])return D3}let c=i(o),d=c&&c(o);return{c(){d&&d.c(),n=xr()},l(p){d&&d.l(p),n=xr()},m(p,h){d&&d.m(p,h),H(p,n,h)},p(p,h){c===(c=i(p))&&d?d.p(p,h):(d&&d.d(1),d=c&&c(p),d&&(d.c(),d.m(n.parentNode,n)))},d(p){d&&d.d(p),p&&a(n)}}}function P3(o){let n,i,c,d,p,h,v,g,w,y,_,E,D,I,P=o[0],V=[];for(let x=0;x<P.length;x+=1)V[x]=z5(R5(o,P,x));let T=o[5]&&I3(),A=o[0],M=[];for(let x=0;x<A.length;x+=1)M[x]=W5(H5(o,A,x));return{c(){n=r("div"),i=r("label"),c=r("span"),d=u(),p=r("ul");for(let x=0;x<V.length;x+=1)V[x].c();h=u(),v=r("div"),g=r("button"),T&&T.c(),w=u(),y=m(o[2]),_=u(),E=r("ul");for(let x=0;x<M.length;x+=1)M[x].c();this.h()},l(x){n=s(x,"DIV",{class:!0});var F=l(n);i=s(F,"LABEL",{for:!0,tabindex:!0,class:!0});var k=l(i);c=s(k,"SPAN",{class:!0}),l(c).forEach(a),k.forEach(a),d=f(F),p=s(F,"UL",{id:!0,tabindex:!0,class:!0});var N=l(p);for(let $=0;$<V.length;$+=1)V[$].l(N);N.forEach(a),F.forEach(a),h=f(x),v=s(x,"DIV",{class:!0});var C=l(v);g=s(C,"BUTTON",{class:!0});var G=l(g);T&&T.l(G),w=f(G),y=b(G,o[2]),G.forEach(a),_=f(C),E=s(C,"UL",{class:!0});var U=l(E);for(let $=0;$<M.length;$+=1)M[$].l(U);U.forEach(a),C.forEach(a),this.h()},h(){t(c,"class","i-heroicons-outline-menu-alt-1"),t(i,"for","navbar-dropdown"),t(i,"tabindex","0"),t(i,"class","btn btn-square btn-ghost"),t(p,"id","navbar-dropdown"),t(p,"tabindex","0"),t(p,"class","menu menu-compact dropdown-content bg-base-100 text-base-content shadow-lg rounded-box min-w-max max-w-52 p-2 "),Y(p,"hidden",!o[4]),t(n,"class","dropdown lg:hidden"),t(g,"class","swap-on btn btn-ghost text-base font-normal normal-case transition-all duration-200"),Y(g,"hidden",o[3]<32||!o[2]),t(E,"class","swap-off menu menu-horizontal p-0"),Y(E,"hidden",o[3]>64&&o[2]),t(v,"class","pl-16 swap order-last hidden lg:inline-grid"),Y(v,"swap-active",o[3]>32&&o[2])},m(x,F){H(x,n,F),e(n,i),e(i,c),e(n,d),e(n,p);for(let k=0;k<V.length;k+=1)V[k]&&V[k].m(p,null);H(x,h,F),H(x,v,F),e(v,g),T&&T.m(g,null),e(g,w),e(g,y),e(v,_),e(v,E);for(let k=0;k<M.length;k+=1)M[k]&&M[k].m(E,null);D||(I=Uf(g,"click",o[7]),D=!0)},p(x,[F]){if(F&3){P=x[0];let k;for(k=0;k<P.length;k+=1){const N=R5(x,P,k);V[k]?V[k].p(N,F):(V[k]=z5(N),V[k].c(),V[k].m(p,null))}for(;k<V.length;k+=1)V[k].d(1);V.length=P.length}if(F&16&&Y(p,"hidden",!x[4]),F&4&&Id(y,x[2]),F&12&&Y(g,"hidden",x[3]<32||!x[2]),F&3){A=x[0];let k;for(k=0;k<A.length;k+=1){const N=H5(x,A,k);M[k]?M[k].p(N,F):(M[k]=W5(N),M[k].c(),M[k].m(E,null))}for(;k<M.length;k+=1)M[k].d(1);M.length=A.length}F&12&&Y(E,"hidden",x[3]>64&&x[2]),F&12&&Y(v,"swap-active",x[3]>32&&x[2])},i:le,o:le,d(x){x&&a(n),wd(V,x),x&&a(h),x&&a(v),T&&T.d(),wd(M,x),D=!1,I()}}}function k3(o,n,i){let c;k_(o,M_,I=>i(10,c=I));let{nav:d}=n,{path:p}=n,{title:h}=n,{scrollY:v}=n,{pin:g}=n,w=c.url.toString().split("/")[3];const y=({link:I})=>I===p,_=()=>window.scrollTo(0,0),E=({link:I})=>I===p,D=({link:I})=>I===p;return o.$$set=I=>{"nav"in I&&i(0,d=I.nav),"path"in I&&i(1,p=I.path),"title"in I&&i(2,h=I.title),"scrollY"in I&&i(3,v=I.scrollY),"pin"in I&&i(4,g=I.pin)},[d,p,h,v,g,w,y,_,E,D]}class S3 extends xc{constructor(n){super(),yc(this,n,k3,P3,Ai,{nav:0,path:1,title:2,scrollY:3,pin:4})}}function T3(o){let n,i,c,d,p,h,v;return{c(){n=r("form"),i=r("input"),c=u(),d=r("input"),p=u(),h=r("button"),v=r("span"),this.h()},l(g){n=s(g,"FORM",{action:!0,method:!0,class:!0});var w=l(n);i=s(w,"INPUT",{type:!0,name:!0,class:!0}),c=f(w),d=s(w,"INPUT",{type:!0,name:!0}),p=f(w),h=s(w,"BUTTON",{type:!0,class:!0});var y=l(h);v=s(y,"SPAN",{class:!0}),l(v).forEach(a),y.forEach(a),w.forEach(a),this.h()},h(){var g,w,y,_;t(i,"type","text"),t(i,"name","q"),t(i,"class","input input-ghost input-bordered xl:bg-base-100 xl:text-base-content transition-all w-full h-12"),t(d,"type","hidden"),t(d,"name",((w=(g=Vp)==null?void 0:g.search)==null?void 0:w.provider)==="duckduckgo"?"sites":"sitesearch"),d.value=j5.protocol+j5.domain,t(v,"class","i-heroicons-outline-search"),t(h,"type","submit"),t(h,"class","btn btn-square btn-ghost ml-2"),t(n,"action",((_=(y=Vp)==null?void 0:y.search)==null?void 0:_.provider)==="duckduckgo"?"//duckduckgo.com/":"//google.com/search"),t(n,"method","get"),t(n,"class","flex-1")},m(g,w){H(g,n,w),e(n,i),e(n,c),e(n,d),e(n,p),e(n,h),e(h,v)},p:le,i:le,o:le,d(g){g&&a(n)}}}class O3 extends xc{constructor(n){super(),yc(this,n,null,T3,Ai,{})}}const{document:K5,window:Sb}=r3;function J5(o,n,i){const c=o.slice();return c[14]=n[i].name,c[15]=n[i].text,c}function L3(o,n,i){const c=o.slice();return c[18]=n[i],c}function A3(o){let n,i,c,d,p,h,v,g,w,y;return i=new O3({}),{c(){n=r("div"),ki(i.$$.fragment),c=u(),d=r("button"),p=r("span"),this.h()},l(_){n=s(_,"DIV",{class:!0});var E=l(n);Si(i.$$.fragment,E),c=f(E),d=s(E,"BUTTON",{tabindex:!0,class:!0});var D=l(d);p=s(D,"SPAN",{class:!0}),l(p).forEach(a),D.forEach(a),E.forEach(a),this.h()},h(){t(p,"class","i-heroicons-outline-x"),t(d,"tabindex","0"),t(d,"class","btn btn-square btn-ghost mr-8"),t(n,"class","navbar")},m(_,E){H(_,n,E),Ti(i,n,null),e(n,c),e(n,d),e(d,p),g=!0,w||(y=Uf(d,"click",o[12]),w=!0)},p:le,i(_){g||(se(i.$$.fragment,_),da(()=>{g&&(v&&v.end(1),h=Xa(n,ne,{x:50,duration:300,delay:300}),h.start())}),g=!0)},o(_){ue(i.$$.fragment,_),h&&h.invalidate(),v=Qa(n,ne,{x:50,duration:300}),g=!1},d(_){_&&a(n),Oi(i),_&&v&&v.end(),w=!1,y()}}}function F3(o){let n,i,c,d,p,h,v,g,w,y,_,E,D,I,P,V,T,A=Vp.nav&&M3(o),M=Vp.search&&C3(o),x=N5,F=[];for(let k=0;k<x.length;k+=1)F[k]=X5(J5(o,x,k));return{c(){n=r("div"),i=r("div"),A&&A.c(),c=u(),d=r("a"),p=r("img"),v=u(),g=r("div"),M&&M.c(),w=u(),y=r("div"),_=r("div"),E=r("span"),D=u(),I=r("ul");for(let k=0;k<F.length;k+=1)F[k].c();this.h()},l(k){n=s(k,"DIV",{class:!0});var N=l(n);i=s(N,"DIV",{class:!0});var C=l(i);A&&A.l(C),c=f(C),d=s(C,"A",{href:!0,class:!0});var G=l(d);p=s(G,"IMG",{src:!0,alt:!0,class:!0}),G.forEach(a),C.forEach(a),v=f(N),g=s(N,"DIV",{class:!0});var U=l(g);M&&M.l(U),w=f(U),y=s(U,"DIV",{id:!0,class:!0});var $=l(y);_=s($,"DIV",{tabindex:!0,class:!0});var q=l(_);E=s(q,"SPAN",{class:!0}),l(E).forEach(a),q.forEach(a),D=f($),I=s($,"UL",{tabindex:!0,class:!0});var J=l(I);for(let ae=0;ae<F.length;ae+=1)F[ae].l(J);J.forEach(a),$.forEach(a),U.forEach(a),N.forEach(a),this.h()},h(){L(p.src,h="/assets/pfp.png")||t(p,"src",h),t(p,"alt","logo"),t(p,"class","u-photo z-14 h-14"),t(d,"href","/"),t(d,"class","btn btn-ghost normal-case text-lg gap-3"),t(i,"class","navbar-start"),t(E,"class","i-heroicons-outline-color-swatch"),t(_,"tabindex","0"),t(_,"class","btn btn-square btn-ghost"),t(I,"tabindex","0"),t(I,"class","flex flex-nowrap shadow-2xl menu dropdown-content bg-base-100 text-base-content rounded-box w-52 p-2 gap-2 overflow-y-auto max-h-[21.5rem]"),Y(I,"hidden",!o[6]),t(y,"id","change-theme"),t(y,"class","dropdown dropdown-end"),t(g,"class","navbar-end mr-8"),t(n,"class","navbar pl-16")},m(k,N){H(k,n,N),e(n,i),A&&A.m(i,null),e(i,c),e(i,d),e(d,p),e(n,v),e(n,g),M&&M.m(g,null),e(g,w),e(g,y),e(y,_),e(_,E),e(y,D),e(y,I);for(let C=0;C<F.length;C+=1)F[C]&&F[C].m(I,null);T=!0},p(k,N){if(Vp.nav&&A.p(k,N),Vp.search&&M.p(k,N),N&2){x=N5;let C;for(C=0;C<x.length;C+=1){const G=J5(k,x,C);F[C]?F[C].p(G,N):(F[C]=X5(G),F[C].c(),F[C].m(I,null))}for(;C<F.length;C+=1)F[C].d(1);F.length=x.length}(!T||N&64)&&Y(I,"hidden",!k[6])},i(k){T||(se(A),da(()=>{T&&(V&&V.end(1),P=Xa(n,ne,{x:-50,duration:300,delay:300}),P.start())}),T=!0)},o(k){ue(A),P&&P.invalidate(),V=Qa(n,ne,{x:-50,duration:300}),T=!1},d(k){k&&a(n),A&&A.d(),M&&M.d(),wd(F,k),k&&V&&V.end()}}}function M3(o){let n,i;return n=new S3({props:{path:o[0],title:o[3],pin:o[6],scrollY:o[2],nav:Vp.nav}}),{c(){ki(n.$$.fragment)},l(c){Si(n.$$.fragment,c)},m(c,d){Ti(n,c,d),i=!0},p(c,d){const p={};d&1&&(p.path=c[0]),d&8&&(p.title=c[3]),d&64&&(p.pin=c[6]),d&4&&(p.scrollY=c[2]),n.$set(p)},i(c){i||(se(n.$$.fragment,c),i=!0)},o(c){ue(n.$$.fragment,c),i=!1},d(c){Oi(n,c)}}}function C3(o){let n,i,c,d;return{c(){n=r("button"),i=r("span"),this.h()},l(p){n=s(p,"BUTTON",{"aria-label":!0,tabindex:!0,class:!0});var h=l(n);i=s(h,"SPAN",{class:!0}),l(i).forEach(a),h.forEach(a),this.h()},h(){t(i,"class","i-heroicons-outline-search"),t(n,"aria-label","search"),t(n,"tabindex","0"),t(n,"class","btn btn-square btn-ghost")},m(p,h){H(p,n,h),e(n,i),c||(d=Uf(n,"click",o[10]),c=!0)},p:le,d(p){p&&a(n),c=!1,d()}}}function j3(o){let n;return{c(){n=r("div"),this.h()},l(i){n=s(i,"DIV",{class:!0}),l(n).forEach(a),this.h()},h(){t(n,"class",`${o[18]} w-1 h-4 rounded-btn`)},m(i,c){H(i,n,c)},p:le,d(i){i&&a(n)}}}function X5(o){let n,i,c=(o[15]??o[14])+"",d,p,h,v,g,w,y=["bg-primary","bg-secondary","bg-accent","bg-neutral"],_=[];for(let D=0;D<4;D+=1)_[D]=j3(L3(o,y,D));function E(){return o[11](o[14])}return{c(){n=r("button"),i=r("p"),d=m(c),p=u(),h=r("div");for(let D=0;D<4;D+=1)_[D].c();v=u(),this.h()},l(D){n=s(D,"BUTTON",{"data-theme":!0,class:!0});var I=l(n);i=s(I,"P",{class:!0});var P=l(i);d=b(P,c),P.forEach(a),p=f(I),h=s(I,"DIV",{class:!0});var V=l(h);for(let T=0;T<4;T+=1)_[T].l(V);V.forEach(a),v=f(I),I.forEach(a),this.h()},h(){t(i,"class","flex-1 text-left text-base-content group-hover:text-primary-content transition-color"),t(h,"class","grid grid-cols-4 gap-0.5 m-auto"),t(n,"data-theme",o[14]),t(n,"class","btn btn-ghost w-full hover:bg-primary group rounded-lg flex bg-base-100 p-2 transition-all"),Y(n,"border-2",o[1]===o[14]),Y(n,"border-primary",o[1]===o[14])},m(D,I){H(D,n,I),e(n,i),e(i,d),e(n,p),e(n,h);for(let P=0;P<4;P+=1)_[P]&&_[P].m(h,null);e(n,v),g||(w=Uf(n,"click",E),g=!0)},p(D,I){o=D,I&2&&Y(n,"border-2",o[1]===o[14]),I&2&&Y(n,"border-primary",o[1]===o[14])},d(D){D&&a(n),wd(_,D),g=!1,w()}}}function N3(o){let n=!1,i=()=>{n=!1},c,d,p,h,v,g,w,y,_,E,D,I,P,V,T,A,M,x;da(o[9]);const F=[F3,A3],k=[];function N(C,G){return C[5]?1:0}return v=N(o),g=k[v]=F[v](o),{c(){d=r("meta"),p=u(),h=r("header"),g.c(),y=u(),_=r("button"),E=r("div"),I=u(),P=r("div"),V=r("span"),this.h()},l(C){const G=Fb("svelte-1g590ms",K5.head);d=s(G,"META",{name:!0,content:!0}),G.forEach(a),p=f(C),h=s(C,"HEADER",{id:!0,class:!0});var U=l(h);g.l(U),U.forEach(a),y=f(C),_=s(C,"BUTTON",{id:!0,"aria-label":!0,class:!0});var $=l(_);E=s($,"DIV",{class:!0,style:!0}),l(E).forEach(a),I=f($),P=s($,"DIV",{class:!0});var q=l(P);V=s(q,"SPAN",{class:!0}),l(V).forEach(a),q.forEach(a),$.forEach(a),this.h()},h(){t(d,"name","theme-color"),t(d,"content",o[4]),t(h,"id","header"),t(h,"class",w="fixed z-50 w-screen transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[6.5rem] bg-pfp-navy text-white tracking-menu pb-5 pt-5 "+(o[2]>32&&"backdrop-blur border-base-content/10 bg-pfp-navy-100/30 md:bg-pfp-navy/30 text-pfp-navy")),Y(h,"-translate-y-32",!o[6]&&o[2]>0),t(E,"class","radial-progress text-accent transition-all duration-500 ease-in-out group-hover:text-accent-focus col-start-1 row-start-1"),t(E,"style",D=`--size:4rem; --thickness: 0.25rem; --value:${o[7]};`),t(V,"class","i-heroicons-solid-chevron-up !w-6 !h-6"),t(P,"class","border-4 border-base-content/10 group-hover:border-transparent col-start-1 row-start-1 rounded-full w-full h-full p-4 grid duration-500 ease-in-out"),Y(P,"border-transparent",o[7]>95),t(_,"id","totop"),t(_,"aria-label","scroll to top"),t(_,"class",T="fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out "+(o[7]>95?"btn-accent shadow-lg":"btn-ghost bg-base-100/30 md:bg-base-200/30")),Y(_,"translate-y-24",!o[6]||o[2]===0),Y(_,"opacity-100",o[2])},m(C,G){e(K5.head,d),H(C,p,G),H(C,h,G),k[v].m(h,null),H(C,y,G),H(C,_,G),e(_,E),e(_,I),e(_,P),e(P,V),A=!0,M||(x=[Uf(Sb,"scroll",()=>{n=!0,clearTimeout(c),c=setTimeout(i,100),o[9]()}),Uf(_,"click",o[13])],M=!0)},p(C,[G]){G&4&&!n&&(n=!0,clearTimeout(c),scrollTo(Sb.pageXOffset,C[2]),c=setTimeout(i,100)),(!A||G&16)&&t(d,"content",C[4]);let U=v;v=N(C),v===U?k[v].p(C,G):(kp(),ue(k[U],1,1,()=>{k[U]=null}),Sp(),g=k[v],g?g.p(C,G):(g=k[v]=F[v](C),g.c()),se(g,1),g.m(h,null)),(!A||G&4&&w!==(w="fixed z-50 w-screen transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[6.5rem] bg-pfp-navy text-white tracking-menu pb-5 pt-5 "+(C[2]>32&&"backdrop-blur border-base-content/10 bg-pfp-navy-100/30 md:bg-pfp-navy/30 text-pfp-navy")))&&t(h,"class",w),(!A||G&68)&&Y(h,"-translate-y-32",!C[6]&&C[2]>0),(!A||G&128&&D!==(D=`--size:4rem; --thickness: 0.25rem; --value:${C[7]};`))&&t(E,"style",D),(!A||G&128)&&Y(P,"border-transparent",C[7]>95),(!A||G&128&&T!==(T="fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out "+(C[7]>95?"btn-accent shadow-lg":"btn-ghost bg-base-100/30 md:bg-base-200/30")))&&t(_,"class",T),(!A||G&196)&&Y(_,"translate-y-24",!C[6]||C[2]===0),(!A||G&132)&&Y(_,"opacity-100",C[2])},i(C){A||(se(g),A=!0)},o(C){ue(g),A=!1},d(C){a(d),C&&a(p),C&&a(h),k[v].d(),C&&a(y),C&&a(_),M=!1,t3(x)}}}function G3(o,n,i){let{path:c}=n,d,p,h,v=!1,g=!0,w,[y,_]=[0,0];A_.subscribe(T=>i(3,d=T));function E(){i(2,y=Sb.pageYOffset)}const D=()=>i(5,v=!v),I=T=>{i(1,p=T),localStorage.setItem("theme",T)},P=()=>i(5,v=!v),V=()=>window.scrollTo(0,0);return o.$$set=T=>{"path"in T&&i(0,c=T.path)},o.$$.update=()=>{o.$$.dirty&2&&p&&(document.documentElement.setAttribute("data-theme",p),i(4,h=_3(...getComputedStyle(document.documentElement).getPropertyValue("--b1").slice(0).replaceAll("%","").split(" ").map(Number)))),o.$$.dirty&260&&y&&(i(6,g=_-y>0||y===0),i(8,_=y),i(7,w=Math.round(y/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*1e4)/100))},[c,p,y,d,h,v,g,w,_,E,D,I,P,V]}class B3 extends xc{constructor(n){super(),yc(this,n,G3,N3,Ai,{path:0})}}function Q5(o){let n,i,c,d;const p=o[2].default,h=S_(p,o,o[1],null);return{c(){n=r("div"),h&&h.c(),this.h()},l(v){n=s(v,"DIV",{class:!0});var g=l(n);h&&h.l(g),g.forEach(a),this.h()},h(){t(n,"class","bg-base-100 md:bg-base-200 min-h-screen pt-16 md:pb-8 lg:pb-16")},m(v,g){H(v,n,g),h&&h.m(n,null),d=!0},p(v,g){h&&h.p&&(!d||g&2)&&T_(h,p,v,v[1],d?L_(p,v[1],g,null):O_(v[1]),null)},i(v){d||(se(h,v),da(()=>{d&&(c&&c.end(1),i=Xa(n,ne,{y:100,duration:300,delay:300}),i.start())}),d=!0)},o(v){ue(h,v),i&&i.invalidate(),c=Qa(n,ne,{y:-100,duration:300}),d=!1},d(v){v&&a(n),h&&h.d(v),v&&c&&c.end()}}}function H3(o){let n=o[0],i,c,d=Q5(o);return{c(){d.c(),i=xr()},l(p){d.l(p),i=xr()},m(p,h){d.m(p,h),H(p,i,h),c=!0},p(p,[h]){h&1&&Ai(n,n=p[0])?(kp(),ue(d,1,1,le),Sp(),d=Q5(p),d.c(),se(d,1),d.m(i.parentNode,i)):d.p(p,h)},i(p){c||(se(d),c=!0)},o(p){ue(d),c=!1},d(p){p&&a(i),d.d(p)}}}function $3(o,n,i){let{$$slots:c={},$$scope:d}=n,{path:p=""}=n;return o.$$set=h=>{"path"in h&&i(0,p=h.path),"$$scope"in h&&i(1,d=h.$$scope)},[p,d,c]}class R3 extends xc{constructor(n){super(),yc(this,n,$3,H3,Ai,{path:0})}}function U3(o){let n,i,c,d,p,h,v,g,w,y,_,E,D,I,P,V,T,A,M,x,F,k,N,C,G,U,$,q,J,ae,ie,Q,Z,ee,fe,Ge,vt,R,ke,yr,et,ce,we,Be,Xt,He,re,_r=" ",St,tt,gt,pe,wr,Ts,Tt,De,oe,Ot,rt,$e,Se,Re,Za,Qt,Te,Ve,Er,en,qn,O,j,B,W,z,ve,Ee,X,Lt,Ie,At,tn,K,st,ht,Ft,Mt,Os,Cl,me,Ct,Ir,zn,_c,ua,Yn,Vo,at,Ue,Zt,jl,wc,Ls,fa,Po,Wn,qe,Zr,Kn,Ec,pa,Jn,ko,es,ts,Dr,ze,rs,rn,Nl,Xn,va,jt,er,As,sn,Vr,Fs,So,Qn,tr,rr,To,Oe,ga,Oo,Zn,Gl,an,Pr,Nt,mt,ss,nn,Bl,el,ha,kr,Gt,Hl,Le,Ms,$l,Lo,Cs,Sr,as,ns,Ic,tl,js,Ao,Rl,ma,ls,sr,Tr,ln,Fi,rl,Ns,is,sl,al,Or,Gs,ba,bt,ar,xa,nl,nr,Dd,Fo,be,nt,Bt,lr,Bs,Mo,ll,Ae,Fe,Co,jo,il,on,No,ol,ge,Ul,ql,Dc,Ye,xe,lt,Lr,Vd,os,Ht,cn,cl,Me,it,Ar,Hs,Vc,ya,cs,dn,un,Pc,$s,xt,ds,fn,dl,pn,Fr,ot,Mr,us,Rs,zl,$t,yt,ir,kc,Go,_a,Us,vn,We,Cr,fs,wa,qs,ps,Mi,zs,Bo,or,Ys,Pd,Ho,ul,Ke,cr,Ws,Ea,Ks,jr,Ci,Sc,vs,_t,Nr,Rt,Yl,fl,pl,Ut,Gr,Ia,gn,hn,$o,Wl,Js,Da,ct,dr,Kl,Tc,Br,ye,dt,mn,Oc,gs,Va,Pa,wt,Hr,Et,Xs,Lc,Jl,vl,Qs,It,hs,bn,ms,Ac,$r,ut,xn,Ro,bs,Pe,Rr,kd,ka,de,Je,ur,Zs,Fc,ea,xs,yn,qt,Sa,Dt,Ur,ji,Uo,Ce,Ta,qo,Oa,Xe,ta,zo,Yo,je,fr,gl,Xl,pr,_n,Vt,ft,qu;return{c(){n=r("div"),i=r("div"),c=r("div"),d=r("div"),p=r("div"),h=m("About us"),v=u(),g=r("div"),w=r("img"),_=u(),E=r("div"),D=r("div"),I=r("div"),P=m("Purpose"),V=u(),T=r("img"),M=u(),x=r("div"),F=r("div"),k=r("div"),N=u(),C=r("div"),G=m(`Our mission is to empower communities and businesses by helping them take control of their energy and
                environmental footprint.`),U=u(),$=r("div"),q=r("div"),J=r("div"),ae=m(`By choosing to generate power from non-recycled waste, you can achieve supply security, cost control, and
                    environmental improvements while reducing dependence on the grid. Our projects operate continuously,
                    ensuring uninterrupted energy supply. They enable you to establish your own energy pricing while providing
                    eco-friendly electricity, biogas, and hydrogen. Our approach eliminates landfill waste, ocean dumping, and
                    open burning for a greener future.`),ie=u(),Q=r("div"),Z=r("div"),ee=r("div"),fe=m("Mission"),Ge=u(),vt=r("div"),R=r("div"),ke=r("img"),et=u(),ce=r("div"),we=r("div"),Be=r("div"),Xt=u(),He=r("div"),re=m(`Our innovative digital ecosystem enables you to discover the potential of power generation from non-recycled
                waste across various sectors, including agriculture, food services, manufacturing, and distribution chains.`),St=m(_r),tt=u(),gt=r("div"),pe=r("div"),wr=r("div"),Ts=m(`We’ll collaborate with you to develop a tailored project. Our platform streamlines your journey from
                    feasibility to operation by connecting you with essential partners, such as technology providers, materials
                    analysts, funders, permit specialists, and construction and operation teams. No matter the size of your
                    waste output, from thousands of tonnes annually to just a few kilograms daily, we have a technology solution
                    designed to meet your needs.`),Tt=u(),De=r("div"),oe=r("div"),Ot=r("div"),rt=m("Vision"),$e=u(),Se=r("img"),Za=u(),Qt=r("div"),Te=r("div"),Ve=r("div"),Er=u(),en=r("div"),qn=m("Our vision is founded on the “6R” principles: Reduce, Reuse, Recycle, Repurpose, Regenerate, and Regrowth."),O=u(),j=r("div"),B=r("div"),W=r("div"),z=m(`Reduce consumption and resource use in our daily lives Reuse items until they no longer serve a purpose
                    Recycle all recyclable materials Repurpose non-recycled waste to generate green energy locally Regenerate
                    our environment by adopting circular models focused on nature, including our own by-products like organic
                    fertilizers, char, and biochar Regrowth involves fostering an economy that harmonizes our biosphere and
                    financial ecosystem after applying the first five principles`),ve=u(),Ee=r("div"),X=r("div"),Lt=r("div"),Ie=r("div"),At=m("Meet the team"),tn=u(),K=r("div"),st=r("div"),ht=r("div"),Ft=r("div"),Mt=r("img"),Cl=u(),me=r("div"),Ct=r("div"),Ir=r("div"),zn=m("Dermot McKeever"),_c=u(),ua=r("div"),Yn=m("PFP Co-Founder and CEO"),Vo=u(),at=r("div"),Ue=r("div"),Zt=r("div"),jl=m("BSc"),wc=u(),Ls=r("div"),fa=r("div"),Po=m("Dip"),Wn=u(),qe=r("div"),Zr=r("div"),Kn=m("PFS"),Ec=u(),pa=r("div"),Jn=m(`Dermot studied climatology at Leicester University and has extensive experience in the renewable space.
                  Throughout his career, Dermot has demonstrated expertise in business development by holding senior leadership
                  positions across a wide range of business models, from global enterprises to start-ups such as Nutmeg, a
                  leading digital wealth management platform. He has also held numerous consultancy, board adviser and NED roles
                  and is a published author on leadership.`),ko=u(),es=r("img"),Dr=u(),ze=r("div"),rs=r("div"),rn=r("img"),Xn=u(),va=r("div"),jt=r("div"),er=r("div"),As=m("James Cole"),sn=u(),Vr=r("div"),Fs=m("PFP Co-Founder and Chairman"),So=u(),Qn=r("div"),tr=r("div"),rr=r("div"),To=m("BSc"),Oe=u(),ga=r("div"),Oo=m(`James has over 30 years of experience in real estate development and consultancy for multinational groups in
                  Asia, North America, Continental Europe and the UK. Furthermore, he has invested in and guided businesses in
                  private aviation, real estate investment, and renewable energy. Graduated from the Royal Military Academy
                  Sandhurst, after which he served in The Royal Green Jackets (now Rifles). He co-founded PFP to facilitate and
                  encourage a quantum shift in utilising waste as a green renewable energy source.`),Zn=u(),Gl=r("img"),Pr=u(),Nt=r("div"),mt=r("div"),ss=r("div"),nn=r("img"),el=u(),ha=r("div"),kr=r("div"),Gt=r("div"),Hl=m("Simon Edwards"),Le=u(),Ms=r("div"),$l=m("Senior Consultant"),Lo=u(),Cs=r("div"),Sr=r("div"),as=r("div"),ns=m("BSc"),Ic=u(),tl=r("div"),js=m(`Simon, a University of Warwick alumnus, has 30+ years’ experience providing clients across all sectors of the
                  economy with energy reduction/management solutions and electricity/ gas procurement advice. Simon is utilising
                  his vast experience and connections in the energy sector to advise PFP’s clients on the cost savings and
                  impacts of utilising waste as a power source. Additionally, he runs the PFP introducer network, consisting of
                  industry heavyweights tasked with identifying potential projects.`),Ao=u(),Rl=r("img"),ls=u(),sr=r("div"),Tr=r("div"),ln=r("img"),rl=u(),Ns=r("div"),is=r("div"),sl=r("div"),al=m("Alice Chave"),Or=u(),Gs=r("div"),ba=m("Environmental and Technical Engineer"),bt=u(),ar=r("div"),xa=m(`Alice holds a Master of Science in Engineering for International Development from the University College
                  London, complemented with a Bachelors in Environmental Engineering. Throughout her academic and professional
                  journey, she has been involved in international development projects, focusing on designing off-grid solutions
                  to benefit communities in the developing world.`),nl=u(),nr=r("img"),Fo=u(),be=r("div"),nt=r("div"),Bt=r("div"),lr=r("img"),Mo=u(),ll=r("div"),Ae=r("div"),Fe=r("div"),Co=m("Tim Edwards"),jo=u(),il=r("div"),on=m("Strategy Executive"),No=u(),ol=r("div"),ge=m(`Tim is an economist with specialised skills in data, analytics, and strategy. He applies his understanding of
                  economic principles to analyse data and develop effective strategies for PFP’s clients. A University of
                  Bristol graduate, Tim boasts an accolade from The Chartered Banker Institute’s essay competition, where his
                  piece on how finance professionals can help achieve society’s goals on climate change was published alongside
                  distinguished academics, business leaders, and politicians.`),Ul=u(),ql=r("img"),Ye=u(),xe=r("div"),lt=r("div"),Lr=r("img"),os=u(),Ht=r("div"),cn=r("div"),cl=r("div"),Me=m("Paul Lee"),it=u(),Ar=r("div"),Hs=m("Chief Resilience Officer"),Vc=u(),ya=r("div"),cs=m(`Paul is an experienced Information Security Leader with expertise in FinTech and cryptocurrency. With 19 years
                  of experience in the UK and US, he has directed the infrastructure for a leading Security Certificate
                  Authority. Passionate about renewable energy and carbon-negative initiatives, he holds degrees from the
                  universities of Leeds and Liverpool, making a valuable asset to our team.`),dn=u(),un=r("img"),$s=u(),xt=r("div"),ds=r("div"),fn=m("Advisory board"),dl=u(),pn=r("div"),Fr=r("div"),ot=r("div"),Mr=r("div"),us=r("img"),zl=u(),$t=r("div"),yt=r("div"),ir=r("div"),kc=m("Dr. Linda Hilton"),Go=u(),_a=r("div"),Us=m("Board Advisor"),vn=u(),We=r("div"),Cr=r("div"),fs=r("div"),wa=m("PhD"),qs=u(),ps=r("div"),Mi=r("div"),zs=m("CChem"),Bo=u(),or=r("div"),Ys=r("div"),Pd=m("FRSC"),Ho=u(),ul=r("div"),Ke=r("div"),cr=m("CSci"),Ws=u(),Ea=r("div"),Ks=m(`Linda brings a unique blend of strategy, science, technology and management expertise gained across various
                  sectors including FMCG, IT, engineering, nuclear, environmental and renewables. Capable of offering both
                  strategic and operational insight, Linda has worked in a variety of different roles and environments around
                  the world for large corporates, research organisations, SME’s, spin-offs and start-ups (social enterprise) and
                  is passionate about using this experience to help people to mitigate climate change.`),jr=u(),Ci=r("img"),vs=u(),_t=r("div"),Nr=r("div"),Rt=r("img"),fl=u(),pl=r("div"),Ut=r("div"),Gr=r("div"),Ia=m("Alexandre Chavarot"),gn=u(),hn=r("div"),$o=m("Board Advisor"),Wl=u(),Js=r("div"),Da=m(`Alexandre, a UK-based independent climate and energy transition finance professional offers expert advisory
                  services to a diverse range of clients, including corporates, asset owners and managers, government entities,
                  and foundations. His background spans project and corporate acquisitions, risk assessments, investments, and
                  financings in the energy, infrastructure, and maritime sectors, working with leading investment banks,
                  foundations, and advisory firms. Alexandre holds degrees from prestigious institutions, including Sciences Po,
                  Harvard, and INSEAD. His passion for addressing climate change and sustainable development make him a vital
                  contributor to the ongoing global transition to a more sustainable future.`),ct=u(),dr=r("img"),Tc=u(),Br=r("div"),ye=r("div"),dt=r("div"),mn=r("img"),gs=u(),Va=r("div"),Pa=r("div"),wt=r("div"),Hr=m("Jayne Walters"),Et=u(),Xs=r("div"),Lc=m("Board Advisor"),Jl=u(),vl=r("div"),Qs=r("div"),It=r("div"),hs=m("BSc"),bn=u(),ms=r("div"),Ac=m(`Jayne is a lawyer with extensive legal experience having been a partner in a major City law firm and General
                  Counsel for property investment, development and financing businesses. Jayne oversees PFP’s compliance with
                  the business’s legal requirements and advises on the contracts required for individual projects. Jayne holds a
                  degree from The University of Cambridge.`),$r=u(),ut=r("img"),Ro=u(),bs=r("div"),Pe=r("div"),Rr=r("img"),ka=u(),de=r("div"),Je=r("div"),ur=r("div"),Zs=m("Shanika Amarasekara"),Fc=u(),ea=r("div"),xs=m("Board advisor"),yn=u(),qt=r("div"),Sa=m(`Shanika was Chief Impact Officer at British Business Bank and an Executive Committee member responsible for
                  ESG, Economics, Policy and Strategy. Recently, Shanika was involved in the creation of both the Coronavirus
                  Business Interruption Loan Scheme (CBILS) and the Future Fund. The scale of both schemes expanded the bank’s
                  balance sheet by ten times. She was appointed General Counsel and Company Secretary and was a founder member
                  of the Senior Management Team which established and launched the bank in 2014. The bank was set up to increase
                  the supply of credit and finance to SMEs, enabling these companies to contribute effectively to the UK
                  economy.`),Dt=u(),Ur=r("img"),Uo=u(),Ce=r("div"),Ta=r("div"),qo=m("Copyright © 2023 Power for Planet"),Oa=u(),Xe=r("div"),ta=r("div"),zo=m("Privacy Policy"),Yo=u(),je=r("div"),fr=r("img"),Xl=u(),pr=r("img"),Vt=u(),ft=r("img"),this.h()},l(Ql){n=s(Ql,"DIV",{class:!0});var wn=l(n);i=s(wn,"DIV",{class:!0});var En=l(i);c=s(En,"DIV",{class:!0});var Pt=l(c);d=s(Pt,"DIV",{class:!0});var ra=l(d);p=s(ra,"DIV",{});var La=l(p);h=b(La,"About us"),La.forEach(a),ra.forEach(a),v=f(Pt),g=s(Pt,"DIV",{class:!0});var ys=l(g);w=s(ys,"IMG",{src:!0,alt:!0,class:!0}),_=f(ys),E=s(ys,"DIV",{class:!0});var Ni=l(E);D=s(Ni,"DIV",{class:!0});var _s=l(D);I=s(_s,"DIV",{});var Aa=l(I);P=b(Aa,"Purpose"),Aa.forEach(a),V=f(_s),T=s(_s,"IMG",{src:!0,alt:!0,class:!0}),_s.forEach(a),M=f(Ni),x=s(Ni,"DIV",{class:!0});var Sd=l(x);F=s(Sd,"DIV",{class:!0});var hl=l(F);k=s(hl,"DIV",{class:!0}),l(k).forEach(a),N=f(hl),C=s(hl,"DIV",{class:!0});var Gi=l(C);G=b(Gi,`Our mission is to empower communities and businesses by helping them take control of their energy and
                environmental footprint.`),Gi.forEach(a),U=f(hl),$=s(hl,"DIV",{class:!0});var sa=l($);q=s(sa,"DIV",{class:!0});var ml=l(q);J=s(ml,"DIV",{class:!0});var bl=l(J);ae=b(bl,`By choosing to generate power from non-recycled waste, you can achieve supply security, cost control, and
                    environmental improvements while reducing dependence on the grid. Our projects operate continuously,
                    ensuring uninterrupted energy supply. They enable you to establish your own energy pricing while providing
                    eco-friendly electricity, biogas, and hydrogen. Our approach eliminates landfill waste, ocean dumping, and
                    open burning for a greener future.`),bl.forEach(a),ml.forEach(a),sa.forEach(a),hl.forEach(a),Sd.forEach(a),Ni.forEach(a),ie=f(ys),Q=s(ys,"DIV",{class:!0});var aa=l(Q);Z=s(aa,"DIV",{class:!0});var vr=l(Z);ee=s(vr,"DIV",{class:!0});var Zl=l(ee);fe=b(Zl,"Mission"),Zl.forEach(a),Ge=f(vr),vt=s(vr,"DIV",{class:!0});var Mc=l(vt);R=s(Mc,"DIV",{});var ei=l(R);ke=s(ei,"IMG",{src:!0,alt:!0,class:!0}),ei.forEach(a),Mc.forEach(a),vr.forEach(a),et=f(aa),ce=s(aa,"DIV",{class:!0});var xl=l(ce);we=s(xl,"DIV",{class:!0});var ti=l(we);Be=s(ti,"DIV",{class:!0}),l(Be).forEach(a),Xt=f(ti),He=s(ti,"DIV",{class:!0});var yl=l(He);re=b(yl,`Our innovative digital ecosystem enables you to discover the potential of power generation from non-recycled
                waste across various sectors, including agriculture, food services, manufacturing, and distribution chains.`),St=b(yl,_r),yl.forEach(a),tt=f(ti),gt=s(ti,"DIV",{class:!0});var Ne=l(gt);pe=s(Ne,"DIV",{class:!0});var In=l(pe);wr=s(In,"DIV",{class:!0});var Cc=l(wr);Ts=b(Cc,`We’ll collaborate with you to develop a tailored project. Our platform streamlines your journey from
                    feasibility to operation by connecting you with essential partners, such as technology providers, materials
                    analysts, funders, permit specialists, and construction and operation teams. No matter the size of your
                    waste output, from thousands of tonnes annually to just a few kilograms daily, we have a technology solution
                    designed to meet your needs.`),Cc.forEach(a),In.forEach(a),Ne.forEach(a),ti.forEach(a),xl.forEach(a),aa.forEach(a),Tt=f(ys),De=s(ys,"DIV",{class:!0});var Bi=l(De);oe=s(Bi,"DIV",{class:!0});var qr=l(oe);Ot=s(qr,"DIV",{});var Hi=l(Ot);rt=b(Hi,"Vision"),Hi.forEach(a),$e=f(qr),Se=s(qr,"IMG",{src:!0,alt:!0,class:!0}),qr.forEach(a),Za=f(Bi),Qt=s(Bi,"DIV",{class:!0});var jc=l(Qt);Te=s(jc,"DIV",{class:!0});var Fa=l(Te);Ve=s(Fa,"DIV",{class:!0}),l(Ve).forEach(a),Er=f(Fa),en=s(Fa,"DIV",{class:!0});var $i=l(en);qn=b($i,"Our vision is founded on the “6R” principles: Reduce, Reuse, Recycle, Repurpose, Regenerate, and Regrowth."),$i.forEach(a),O=f(Fa),j=s(Fa,"DIV",{class:!0});var Nc=l(j);B=s(Nc,"DIV",{class:!0});var Ri=l(B);W=s(Ri,"DIV",{class:!0});var ri=l(W);z=b(ri,`Reduce consumption and resource use in our daily lives Reuse items until they no longer serve a purpose
                    Recycle all recyclable materials Repurpose non-recycled waste to generate green energy locally Regenerate
                    our environment by adopting circular models focused on nature, including our own by-products like organic
                    fertilizers, char, and biochar Regrowth involves fostering an economy that harmonizes our biosphere and
                    financial ecosystem after applying the first five principles`),ri.forEach(a),Ri.forEach(a),Nc.forEach(a),Fa.forEach(a),jc.forEach(a),Bi.forEach(a),ys.forEach(a),ve=f(Pt),Ee=s(Pt,"DIV",{class:!0});var Dn=l(Ee);X=s(Dn,"DIV",{class:!0});var Qe=l(X);Lt=s(Qe,"DIV",{class:!0});var ws=l(Lt);Ie=s(ws,"DIV",{});var na=l(Ie);At=b(na,"Meet the team"),na.forEach(a),ws.forEach(a),tn=f(Qe),K=s(Qe,"DIV",{class:!0});var Vn=l(K);st=s(Vn,"DIV",{class:!0});var Ui=l(st);ht=s(Ui,"DIV",{class:!0});var Ze=l(ht);Ft=s(Ze,"DIV",{class:!0});var zr=l(Ft);Mt=s(zr,"IMG",{src:!0,alt:!0,class:!0}),Cl=f(zr),me=s(zr,"DIV",{class:!0});var qi=l(me);Ct=s(qi,"DIV",{class:!0});var zi=l(Ct);Ir=s(zi,"DIV",{class:!0});var Yr=l(Ir);zn=b(Yr,"Dermot McKeever"),Yr.forEach(a),_c=f(zi),ua=s(zi,"DIV",{class:!0});var si=l(ua);Yn=b(si,"PFP Co-Founder and CEO"),si.forEach(a),zi.forEach(a),Vo=f(qi),at=s(qi,"DIV",{class:!0});var _l=l(at);Ue=s(_l,"DIV",{class:!0});var Pn=l(Ue);Zt=s(Pn,"DIV",{});var kn=l(Zt);jl=b(kn,"BSc"),kn.forEach(a),Pn.forEach(a),wc=f(_l),Ls=s(_l,"DIV",{class:!0});var Ma=l(Ls);fa=s(Ma,"DIV",{});var wl=l(fa);Po=b(wl,"Dip"),wl.forEach(a),Ma.forEach(a),Wn=f(_l),qe=s(_l,"DIV",{class:!0});var Yi=l(qe);Zr=s(Yi,"DIV",{});var Sn=l(Zr);Kn=b(Sn,"PFS"),Sn.forEach(a),Yi.forEach(a),_l.forEach(a),qi.forEach(a),zr.forEach(a),Ec=f(Ze),pa=s(Ze,"DIV",{class:!0});var ai=l(pa);Jn=b(ai,`Dermot studied climatology at Leicester University and has extensive experience in the renewable space.
                  Throughout his career, Dermot has demonstrated expertise in business development by holding senior leadership
                  positions across a wide range of business models, from global enterprises to start-ups such as Nutmeg, a
                  leading digital wealth management platform. He has also held numerous consultancy, board adviser and NED roles
                  and is a published author on leadership.`),ai.forEach(a),ko=f(Ze),es=s(Ze,"IMG",{src:!0}),Ze.forEach(a),Dr=f(Ui),ze=s(Ui,"DIV",{class:!0});var Wr=l(ze);rs=s(Wr,"DIV",{class:!0});var Es=l(rs);rn=s(Es,"IMG",{src:!0,alt:!0,class:!0}),Xn=f(Es),va=s(Es,"DIV",{class:!0});var zt=l(va);jt=s(zt,"DIV",{class:!0});var El=l(jt);er=s(El,"DIV",{class:!0});var Gc=l(er);As=b(Gc,"James Cole"),Gc.forEach(a),sn=f(El),Vr=s(El,"DIV",{class:!0});var Bc=l(Vr);Fs=b(Bc,"PFP Co-Founder and Chairman"),Bc.forEach(a),El.forEach(a),So=f(zt),Qn=s(zt,"DIV",{class:!0});var pt=l(Qn);tr=s(pt,"DIV",{class:!0});var Is=l(tr);rr=s(Is,"DIV",{});var Wi=l(rr);To=b(Wi,"BSc"),Wi.forEach(a),Is.forEach(a),pt.forEach(a),zt.forEach(a),Es.forEach(a),Oe=f(Wr),ga=s(Wr,"DIV",{class:!0});var Hc=l(ga);Oo=b(Hc,`James has over 30 years of experience in real estate development and consultancy for multinational groups in
                  Asia, North America, Continental Europe and the UK. Furthermore, he has invested in and guided businesses in
                  private aviation, real estate investment, and renewable energy. Graduated from the Royal Military Academy
                  Sandhurst, after which he served in The Royal Green Jackets (now Rifles). He co-founded PFP to facilitate and
                  encourage a quantum shift in utilising waste as a green renewable energy source.`),Hc.forEach(a),Zn=f(Wr),Gl=s(Wr,"IMG",{src:!0}),Wr.forEach(a),Ui.forEach(a),Pr=f(Vn),Nt=s(Vn,"DIV",{class:!0});var Il=l(Nt);mt=s(Il,"DIV",{class:!0});var gr=l(mt);ss=s(gr,"DIV",{class:!0});var Ca=l(ss);nn=s(Ca,"IMG",{src:!0,alt:!0,class:!0}),el=f(Ca),ha=s(Ca,"DIV",{class:!0});var ja=l(ha);kr=s(ja,"DIV",{class:!0});var Tn=l(kr);Gt=s(Tn,"DIV",{class:!0});var Yt=l(Gt);Hl=b(Yt,"Simon Edwards"),Yt.forEach(a),Le=f(Tn),Ms=s(Tn,"DIV",{class:!0});var On=l(Ms);$l=b(On,"Senior Consultant"),On.forEach(a),Tn.forEach(a),Lo=f(ja),Cs=s(ja,"DIV",{class:!0});var Ds=l(Cs);Sr=s(Ds,"DIV",{class:!0});var Kr=l(Sr);as=s(Kr,"DIV",{});var Td=l(as);ns=b(Td,"BSc"),Td.forEach(a),Kr.forEach(a),Ds.forEach(a),ja.forEach(a),Ca.forEach(a),Ic=f(gr),tl=s(gr,"DIV",{class:!0});var $c=l(tl);js=b($c,`Simon, a University of Warwick alumnus, has 30+ years’ experience providing clients across all sectors of the
                  economy with energy reduction/management solutions and electricity/ gas procurement advice. Simon is utilising
                  his vast experience and connections in the energy sector to advise PFP’s clients on the cost savings and
                  impacts of utilising waste as a power source. Additionally, he runs the PFP introducer network, consisting of
                  industry heavyweights tasked with identifying potential projects.`),$c.forEach(a),Ao=f(gr),Rl=s(gr,"IMG",{src:!0}),gr.forEach(a),ls=f(Il),sr=s(Il,"DIV",{class:!0});var _e=l(sr);Tr=s(_e,"DIV",{class:!0});var hr=l(Tr);ln=s(hr,"IMG",{src:!0,alt:!0,class:!0}),rl=f(hr),Ns=s(hr,"DIV",{class:!0});var Od=l(Ns);is=s(Od,"DIV",{class:!0});var Ki=l(is);sl=s(Ki,"DIV",{class:!0});var mr=l(sl);al=b(mr,"Alice Chave"),mr.forEach(a),Or=f(Ki),Gs=s(Ki,"DIV",{class:!0});var Ji=l(Gs);ba=b(Ji,"Environmental and Technical Engineer"),Ji.forEach(a),Ki.forEach(a),Od.forEach(a),hr.forEach(a),bt=f(_e),ar=s(_e,"DIV",{class:!0});var Rc=l(ar);xa=b(Rc,`Alice holds a Master of Science in Engineering for International Development from the University College
                  London, complemented with a Bachelors in Environmental Engineering. Throughout her academic and professional
                  journey, she has been involved in international development projects, focusing on designing off-grid solutions
                  to benefit communities in the developing world.`),Rc.forEach(a),nl=f(_e),nr=s(_e,"IMG",{src:!0}),_e.forEach(a),Il.forEach(a),Fo=f(Vn),be=s(Vn,"DIV",{class:!0});var Na=l(be);nt=s(Na,"DIV",{class:!0});var la=l(nt);Bt=s(la,"DIV",{class:!0});var ni=l(Bt);lr=s(ni,"IMG",{src:!0,alt:!0,class:!0}),Mo=f(ni),ll=s(ni,"DIV",{class:!0});var li=l(ll);Ae=s(li,"DIV",{class:!0});var br=l(Ae);Fe=s(br,"DIV",{class:!0});var Ga=l(Fe);Co=b(Ga,"Tim Edwards"),Ga.forEach(a),jo=f(br),il=s(br,"DIV",{class:!0});var Ld=l(il);on=b(Ld,"Strategy Executive"),Ld.forEach(a),br.forEach(a),li.forEach(a),ni.forEach(a),No=f(la),ol=s(la,"DIV",{class:!0});var Ad=l(ol);ge=b(Ad,`Tim is an economist with specialised skills in data, analytics, and strategy. He applies his understanding of
                  economic principles to analyse data and develop effective strategies for PFP’s clients. A University of
                  Bristol graduate, Tim boasts an accolade from The Chartered Banker Institute’s essay competition, where his
                  piece on how finance professionals can help achieve society’s goals on climate change was published alongside
                  distinguished academics, business leaders, and politicians.`),Ad.forEach(a),Ul=f(la),ql=s(la,"IMG",{src:!0}),la.forEach(a),Ye=f(Na),xe=s(Na,"DIV",{class:!0});var ii=l(xe);lt=s(ii,"DIV",{class:!0});var Vs=l(lt);Lr=s(Vs,"IMG",{src:!0,alt:!0,class:!0}),os=f(Vs),Ht=s(Vs,"DIV",{class:!0});var Ln=l(Ht);cn=s(Ln,"DIV",{class:!0});var An=l(cn);cl=s(An,"DIV",{class:!0});var zu=l(cl);Me=b(zu,"Paul Lee"),zu.forEach(a),it=f(An),Ar=s(An,"DIV",{class:!0});var Wo=l(Ar);Hs=b(Wo,"Chief Resilience Officer"),Wo.forEach(a),An.forEach(a),Ln.forEach(a),Vs.forEach(a),Vc=f(ii),ya=s(ii,"DIV",{class:!0});var Ko=l(ya);cs=b(Ko,`Paul is an experienced Information Security Leader with expertise in FinTech and cryptocurrency. With 19 years
                  of experience in the UK and US, he has directed the infrastructure for a leading Security Certificate
                  Authority. Passionate about renewable energy and carbon-negative initiatives, he holds degrees from the
                  universities of Leeds and Liverpool, making a valuable asset to our team.`),Ko.forEach(a),dn=f(ii),un=s(ii,"IMG",{src:!0}),ii.forEach(a),Na.forEach(a),Vn.forEach(a),$s=f(Qe),xt=s(Qe,"DIV",{class:!0});var Fn=l(xt);ds=s(Fn,"DIV",{});var oi=l(ds);fn=b(oi,"Advisory board"),oi.forEach(a),Fn.forEach(a),dl=f(Qe),pn=s(Qe,"DIV",{class:!0});var Dl=l(pn);Fr=s(Dl,"DIV",{class:!0});var Jo=l(Fr);ot=s(Jo,"DIV",{class:!0});var ci=l(ot);Mr=s(ci,"DIV",{class:!0});var Ba=l(Mr);us=s(Ba,"IMG",{src:!0,alt:!0,class:!0}),zl=f(Ba),$t=s(Ba,"DIV",{class:!0});var ia=l($t);yt=s(ia,"DIV",{class:!0});var Mn=l(yt);ir=s(Mn,"DIV",{class:!0});var Uc=l(ir);kc=b(Uc,"Dr. Linda Hilton"),Uc.forEach(a),Go=f(Mn),_a=s(Mn,"DIV",{class:!0});var di=l(_a);Us=b(di,"Board Advisor"),di.forEach(a),Mn.forEach(a),vn=f(ia),We=s(ia,"DIV",{class:!0});var Cn=l(We);Cr=s(Cn,"DIV",{class:!0});var Wt=l(Cr);fs=s(Wt,"DIV",{});var jn=l(fs);wa=b(jn,"PhD"),jn.forEach(a),Wt.forEach(a),qs=f(Cn),ps=s(Cn,"DIV",{class:!0});var Yu=l(ps);Mi=s(Yu,"DIV",{});var Xo=l(Mi);zs=b(Xo,"CChem"),Xo.forEach(a),Yu.forEach(a),Bo=f(Cn),or=s(Cn,"DIV",{class:!0});var Fd=l(or);Ys=s(Fd,"DIV",{});var Ha=l(Ys);Pd=b(Ha,"FRSC"),Ha.forEach(a),Fd.forEach(a),Ho=f(Cn),ul=s(Cn,"DIV",{class:!0});var ui=l(ul);Ke=s(ui,"DIV",{});var Wu=l(Ke);cr=b(Wu,"CSci"),Wu.forEach(a),ui.forEach(a),Cn.forEach(a),ia.forEach(a),Ba.forEach(a),Ws=f(ci),Ea=s(ci,"DIV",{class:!0});var Md=l(Ea);Ks=b(Md,`Linda brings a unique blend of strategy, science, technology and management expertise gained across various
                  sectors including FMCG, IT, engineering, nuclear, environmental and renewables. Capable of offering both
                  strategic and operational insight, Linda has worked in a variety of different roles and environments around
                  the world for large corporates, research organisations, SME’s, spin-offs and start-ups (social enterprise) and
                  is passionate about using this experience to help people to mitigate climate change.`),Md.forEach(a),jr=f(ci),Ci=s(ci,"IMG",{src:!0}),ci.forEach(a),vs=f(Jo),_t=s(Jo,"DIV",{class:!0});var Jr=l(_t);Nr=s(Jr,"DIV",{class:!0});var oa=l(Nr);Rt=s(oa,"IMG",{src:!0,alt:!0,class:!0}),fl=f(oa),pl=s(oa,"DIV",{class:!0});var Cd=l(pl);Ut=s(Cd,"DIV",{class:!0});var Qo=l(Ut);Gr=s(Qo,"DIV",{class:!0});var Kt=l(Gr);Ia=b(Kt,"Alexandre Chavarot"),Kt.forEach(a),gn=f(Qo),hn=s(Qo,"DIV",{class:!0});var qc=l(hn);$o=b(qc,"Board Advisor"),qc.forEach(a),Qo.forEach(a),Cd.forEach(a),oa.forEach(a),Wl=f(Jr),Js=s(Jr,"DIV",{class:!0});var Zo=l(Js);Da=b(Zo,`Alexandre, a UK-based independent climate and energy transition finance professional offers expert advisory
                  services to a diverse range of clients, including corporates, asset owners and managers, government entities,
                  and foundations. His background spans project and corporate acquisitions, risk assessments, investments, and
                  financings in the energy, infrastructure, and maritime sectors, working with leading investment banks,
                  foundations, and advisory firms. Alexandre holds degrees from prestigious institutions, including Sciences Po,
                  Harvard, and INSEAD. His passion for addressing climate change and sustainable development make him a vital
                  contributor to the ongoing global transition to a more sustainable future.`),Zo.forEach(a),ct=f(Jr),dr=s(Jr,"IMG",{src:!0}),Jr.forEach(a),Jo.forEach(a),Tc=f(Dl),Br=s(Dl,"DIV",{class:!0});var Xr=l(Br);ye=s(Xr,"DIV",{class:!0});var $a=l(ye);dt=s($a,"DIV",{class:!0});var ec=l(dt);mn=s(ec,"IMG",{src:!0,alt:!0,class:!0}),gs=f(ec),Va=s(ec,"DIV",{class:!0});var Nn=l(Va);Pa=s(Nn,"DIV",{class:!0});var Ra=l(Pa);wt=s(Ra,"DIV",{class:!0});var tc=l(wt);Hr=b(tc,"Jayne Walters"),tc.forEach(a),Et=f(Ra),Xs=s(Ra,"DIV",{class:!0});var jd=l(Xs);Lc=b(jd,"Board Advisor"),jd.forEach(a),Ra.forEach(a),Jl=f(Nn),vl=s(Nn,"DIV",{class:!0});var rc=l(vl);Qs=s(rc,"DIV",{class:!0});var fi=l(Qs);It=s(fi,"DIV",{});var Nd=l(It);hs=b(Nd,"BSc"),Nd.forEach(a),fi.forEach(a),rc.forEach(a),Nn.forEach(a),ec.forEach(a),bn=f($a),ms=s($a,"DIV",{class:!0});var Gd=l(ms);Ac=b(Gd,`Jayne is a lawyer with extensive legal experience having been a partner in a major City law firm and General
                  Counsel for property investment, development and financing businesses. Jayne oversees PFP’s compliance with
                  the business’s legal requirements and advises on the contracts required for individual projects. Jayne holds a
                  degree from The University of Cambridge.`),Gd.forEach(a),$r=f($a),ut=s($a,"IMG",{src:!0}),$a.forEach(a),Ro=f(Xr),bs=s(Xr,"DIV",{class:!0});var Ps=l(bs);Pe=s(Ps,"DIV",{class:!0});var Ua=l(Pe);Rr=s(Ua,"IMG",{src:!0,alt:!0,class:!0}),ka=f(Ua),de=s(Ua,"DIV",{class:!0});var Vl=l(de);Je=s(Vl,"DIV",{class:!0});var qa=l(Je);ur=s(qa,"DIV",{class:!0});var pi=l(ur);Zs=b(pi,"Shanika Amarasekara"),pi.forEach(a),Fc=f(qa),ea=s(qa,"DIV",{class:!0});var zc=l(ea);xs=b(zc,"Board advisor"),zc.forEach(a),qa.forEach(a),Vl.forEach(a),Ua.forEach(a),yn=f(Ps),qt=s(Ps,"DIV",{class:!0});var Bd=l(qt);Sa=b(Bd,`Shanika was Chief Impact Officer at British Business Bank and an Executive Committee member responsible for
                  ESG, Economics, Policy and Strategy. Recently, Shanika was involved in the creation of both the Coronavirus
                  Business Interruption Loan Scheme (CBILS) and the Future Fund. The scale of both schemes expanded the bank’s
                  balance sheet by ten times. She was appointed General Counsel and Company Secretary and was a founder member
                  of the Senior Management Team which established and launched the bank in 2014. The bank was set up to increase
                  the supply of credit and finance to SMEs, enabling these companies to contribute effectively to the UK
                  economy.`),Bd.forEach(a),Dt=f(Ps),Ur=s(Ps,"IMG",{src:!0}),Ps.forEach(a),Xr.forEach(a),Dl.forEach(a),Qe.forEach(a),Dn.forEach(a),Uo=f(Pt),Ce=s(Pt,"DIV",{class:!0});var za=l(Ce);Ta=s(za,"DIV",{class:!0});var vi=l(Ta);qo=b(vi,"Copyright © 2023 Power for Planet"),vi.forEach(a),Oa=f(za),Xe=s(za,"DIV",{class:!0});var sc=l(Xe);ta=s(sc,"DIV",{class:!0});var Hd=l(ta);zo=b(Hd,"Privacy Policy"),Hd.forEach(a),Yo=f(sc),je=s(sc,"DIV",{class:!0});var Qr=l(je);fr=s(Qr,"IMG",{src:!0,alt:!0,class:!0}),Xl=f(Qr),pr=s(Qr,"IMG",{src:!0,alt:!0,class:!0}),Vt=f(Qr),ft=s(Qr,"IMG",{src:!0,alt:!0,class:!0}),Qr.forEach(a),sc.forEach(a),za.forEach(a),Pt.forEach(a),En.forEach(a),wn.forEach(a),this.h()},h(){t(d,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),L(w.src,y="/assets/new/Line-1.svg")||t(w,"src",y),t(w,"alt","Line 1"),t(w,"class","h-[670px] w-2.5 left-[130px] bottom-[-130px] relative mb-[-700px] z-1"),L(T.src,A="/assets/new/graphic.svg")||t(T,"src",A),t(T,"alt","graphic"),t(T,"class","h-[110px] w-[65px]"),t(D,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),t(k,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(C,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t(J,"class","w-[690px]"),t(q,"class","w-full flex-col flex items-start gap-[18px]"),t($,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(F,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(x,"class","flex-1 flex items-start gap-5"),t(E,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),t(ee,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),L(ke.src,yr="/assets/new/graphic-45.svg")||t(ke,"src",yr),t(ke,"alt","graphic"),t(ke,"class","h-[120px] w-[120px]"),t(vt,"class","flex justify-center items-center gap-2.5 pr-[13px]"),t(Z,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full"),t(Be,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(He,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t(wr,"class","w-[690px]"),t(pe,"class","w-full flex-col flex items-start gap-[18px]"),t(gt,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(we,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(ce,"class","flex-1 flex items-start gap-5"),t(Q,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),L(Se.src,Re="/assets/new/graphic-10.svg")||t(Se,"src",Re),t(Se,"alt","graphic"),t(Se,"class","h-[120px] w-[120px]"),t(oe,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),t(Ve,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(en,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t(W,"class","w-[690px]"),t(B,"class","w-full flex-col flex items-start gap-[18px]"),t(j,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(Te,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(Qt,"class","flex-1 flex items-start gap-5"),t(De,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),t(g,"class","w-full flex-col flex items-start gap-[30px]"),t(Lt,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),L(Mt.src,Os="/assets/new/Vector-11.svg")||t(Mt,"src",Os),t(Mt,"alt","Vector"),t(Mt,"class","h-[100px] w-[100px]"),t(Ir,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(ua,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Ct,"class","w-full flex-col flex items-start font-bold"),t(Ue,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Ls,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(qe,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(at,"class","flex items-start gap-1.5 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(me,"class","flex-1 flex-col flex items-start gap-2"),t(Ft,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(pa,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),L(es.src,ts="/assets/LI.png")||t(es,"src",ts),t(ht,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),L(rn.src,Nl="/assets/new/Vector-12.svg")||t(rn,"src",Nl),t(rn,"alt","Vector"),t(rn,"class","h-[100px] w-[100px]"),t(er,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Vr,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(jt,"class","w-full flex-col flex items-start font-bold"),t(tr,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Qn,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(va,"class","flex-1 flex-col flex items-start gap-2"),t(rs,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(ga,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),L(Gl.src,an="/assets/LI.png")||t(Gl,"src",an),t(ze,"class","bg-[#e7f5f5] flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(st,"class","w-full flex items-start gap-5"),L(nn.src,Bl="/assets/new/Vector-13.svg")||t(nn,"src",Bl),t(nn,"alt","Vector"),t(nn,"class","h-[100px] w-[100px]"),t(Gt,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Ms,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(kr,"class","w-full flex-col flex items-start font-bold"),t(Sr,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Cs,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(ha,"class","flex-1 flex-col flex items-start gap-2"),t(ss,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(tl,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),L(Rl.src,ma="/assets/LI.png")||t(Rl,"src",ma),t(mt,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),L(ln.src,Fi="/assets/new/Vector-14.svg")||t(ln,"src",Fi),t(ln,"alt","Vector"),t(ln,"class","h-[100px] w-[100px]"),t(sl,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Gs,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(is,"class","w-full flex-col flex items-start font-bold"),t(Ns,"class","flex-1 flex-col flex items-start gap-2"),t(Tr,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(ar,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),L(nr.src,Dd="/assets/LI.png")||t(nr,"src",Dd),t(sr,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(Nt,"class","w-full flex items-start gap-5"),L(lr.src,Bs="/assets/new/Vector-15.svg")||t(lr,"src",Bs),t(lr,"alt","Vector"),t(lr,"class","h-[100px] w-[100px]"),t(Fe,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(il,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Ae,"class","w-full flex-col flex items-start font-bold"),t(ll,"class","flex-1 flex-col flex items-start gap-2"),t(Bt,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(ol,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),L(ql.src,Dc="/assets/LI.png")||t(ql,"src",Dc),t(nt,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),L(Lr.src,Vd="/assets/new/Vector-16.svg")||t(Lr,"src",Vd),t(Lr,"alt","Vector"),t(Lr,"class","h-[100px] w-[100px]"),t(cl,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Ar,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(cn,"class","w-full flex-col flex items-start font-bold"),t(Ht,"class","flex-1 flex-col flex items-start gap-2"),t(lt,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(ya,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),L(un.src,Pc="/assets/LI.png")||t(un,"src",Pc),t(xe,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(be,"class","w-full flex items-start gap-5"),t(K,"class","w-full h-[1550px] flex-col flex items-center gap-5"),t(xt,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),L(us.src,Rs="/assets/new/Vector-17.svg")||t(us,"src",Rs),t(us,"alt","Vector"),t(us,"class","h-[100px] w-[100px]"),t(ir,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(_a,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(yt,"class","w-full flex-col flex items-start font-bold"),t(Cr,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(ps,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(or,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(ul,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(We,"class","w-full flex items-start gap-1.5 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t($t,"class","flex-1 flex-col flex items-start gap-2"),t(Mr,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Ea,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),L(Ci.src,Sc="/assets/LI.png")||t(Ci,"src",Sc),t(ot,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),L(Rt.src,Yl="/assets/new/Vector-18.svg")||t(Rt,"src",Yl),t(Rt,"alt","Vector"),t(Rt,"class","h-[100px] w-[100px]"),t(Gr,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(hn,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Ut,"class","w-full flex-col flex items-start font-bold"),t(pl,"class","flex-1 flex-col flex items-start gap-2"),t(Nr,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Js,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),L(dr.src,Kl="/assets/LI.png")||t(dr,"src",Kl),t(_t,"class","bg-[#e7f5f5] flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(Fr,"class","w-full flex items-start gap-5"),L(mn.src,Oc="/assets/new/Vector-19.svg")||t(mn,"src",Oc),t(mn,"alt","Vector"),t(mn,"class","h-[100px] w-[100px]"),t(wt,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Xs,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Pa,"class","w-full flex-col flex items-start font-bold"),t(Qs,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(vl,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(Va,"class","flex-1 flex-col flex items-start gap-2"),t(dt,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(ms,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),L(ut.src,xn="/assets/LI.png")||t(ut,"src",xn),t(ye,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),L(Rr.src,kd="/assets/new/Vector-20.svg")||t(Rr,"src",kd),t(Rr,"alt","Vector"),t(Rr,"class","h-[100px] w-[100px]"),t(ur,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(ea,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Je,"class","w-full flex-col flex items-start font-bold"),t(de,"class","flex-1 flex-col flex items-start gap-2"),t(Pe,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(qt,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),L(Ur.src,ji="/assets/LI.png")||t(Ur,"src",ji),t(bs,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(Br,"class","w-full flex items-start gap-5"),t(pn,"class","w-full h-[1200px] flex-col flex items-center gap-5"),t(X,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(Ee,"class","w-full flex-col flex items-start gap-10"),t(Ta,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(ta,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),L(fr.src,gl="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(fr,"src",gl),t(fr,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(fr,"class","h-6 w-6"),L(pr.src,_n="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(pr,"src",_n),t(pr,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(pr,"class","h-6 w-6"),L(ft.src,qu="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ft,"src",qu),t(ft,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(ft,"class","h-6 w-6"),t(je,"class","flex items-center gap-5"),t(Xe,"class","flex-1 flex justify-end items-center gap-10"),t(Ce,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(c,"class","flex-col mw-[1060px] flex items-start gap-[50px]"),t(i,"class","bg-[#e4eaea] flex-col flex items-center gap-[50px] h-fit mt-20"),t(n,"class","w-full")},m(Ql,wn){H(Ql,n,wn),e(n,i),e(i,c),e(c,d),e(d,p),e(p,h),e(c,v),e(c,g),e(g,w),e(g,_),e(g,E),e(E,D),e(D,I),e(I,P),e(D,V),e(D,T),e(E,M),e(E,x),e(x,F),e(F,k),e(F,N),e(F,C),e(C,G),e(F,U),e(F,$),e($,q),e(q,J),e(J,ae),e(g,ie),e(g,Q),e(Q,Z),e(Z,ee),e(ee,fe),e(Z,Ge),e(Z,vt),e(vt,R),e(R,ke),e(Q,et),e(Q,ce),e(ce,we),e(we,Be),e(we,Xt),e(we,He),e(He,re),e(He,St),e(we,tt),e(we,gt),e(gt,pe),e(pe,wr),e(wr,Ts),e(g,Tt),e(g,De),e(De,oe),e(oe,Ot),e(Ot,rt),e(oe,$e),e(oe,Se),e(De,Za),e(De,Qt),e(Qt,Te),e(Te,Ve),e(Te,Er),e(Te,en),e(en,qn),e(Te,O),e(Te,j),e(j,B),e(B,W),e(W,z),e(c,ve),e(c,Ee),e(Ee,X),e(X,Lt),e(Lt,Ie),e(Ie,At),e(X,tn),e(X,K),e(K,st),e(st,ht),e(ht,Ft),e(Ft,Mt),e(Ft,Cl),e(Ft,me),e(me,Ct),e(Ct,Ir),e(Ir,zn),e(Ct,_c),e(Ct,ua),e(ua,Yn),e(me,Vo),e(me,at),e(at,Ue),e(Ue,Zt),e(Zt,jl),e(at,wc),e(at,Ls),e(Ls,fa),e(fa,Po),e(at,Wn),e(at,qe),e(qe,Zr),e(Zr,Kn),e(ht,Ec),e(ht,pa),e(pa,Jn),e(ht,ko),e(ht,es),e(st,Dr),e(st,ze),e(ze,rs),e(rs,rn),e(rs,Xn),e(rs,va),e(va,jt),e(jt,er),e(er,As),e(jt,sn),e(jt,Vr),e(Vr,Fs),e(va,So),e(va,Qn),e(Qn,tr),e(tr,rr),e(rr,To),e(ze,Oe),e(ze,ga),e(ga,Oo),e(ze,Zn),e(ze,Gl),e(K,Pr),e(K,Nt),e(Nt,mt),e(mt,ss),e(ss,nn),e(ss,el),e(ss,ha),e(ha,kr),e(kr,Gt),e(Gt,Hl),e(kr,Le),e(kr,Ms),e(Ms,$l),e(ha,Lo),e(ha,Cs),e(Cs,Sr),e(Sr,as),e(as,ns),e(mt,Ic),e(mt,tl),e(tl,js),e(mt,Ao),e(mt,Rl),e(Nt,ls),e(Nt,sr),e(sr,Tr),e(Tr,ln),e(Tr,rl),e(Tr,Ns),e(Ns,is),e(is,sl),e(sl,al),e(is,Or),e(is,Gs),e(Gs,ba),e(sr,bt),e(sr,ar),e(ar,xa),e(sr,nl),e(sr,nr),e(K,Fo),e(K,be),e(be,nt),e(nt,Bt),e(Bt,lr),e(Bt,Mo),e(Bt,ll),e(ll,Ae),e(Ae,Fe),e(Fe,Co),e(Ae,jo),e(Ae,il),e(il,on),e(nt,No),e(nt,ol),e(ol,ge),e(nt,Ul),e(nt,ql),e(be,Ye),e(be,xe),e(xe,lt),e(lt,Lr),e(lt,os),e(lt,Ht),e(Ht,cn),e(cn,cl),e(cl,Me),e(cn,it),e(cn,Ar),e(Ar,Hs),e(xe,Vc),e(xe,ya),e(ya,cs),e(xe,dn),e(xe,un),e(X,$s),e(X,xt),e(xt,ds),e(ds,fn),e(X,dl),e(X,pn),e(pn,Fr),e(Fr,ot),e(ot,Mr),e(Mr,us),e(Mr,zl),e(Mr,$t),e($t,yt),e(yt,ir),e(ir,kc),e(yt,Go),e(yt,_a),e(_a,Us),e($t,vn),e($t,We),e(We,Cr),e(Cr,fs),e(fs,wa),e(We,qs),e(We,ps),e(ps,Mi),e(Mi,zs),e(We,Bo),e(We,or),e(or,Ys),e(Ys,Pd),e(We,Ho),e(We,ul),e(ul,Ke),e(Ke,cr),e(ot,Ws),e(ot,Ea),e(Ea,Ks),e(ot,jr),e(ot,Ci),e(Fr,vs),e(Fr,_t),e(_t,Nr),e(Nr,Rt),e(Nr,fl),e(Nr,pl),e(pl,Ut),e(Ut,Gr),e(Gr,Ia),e(Ut,gn),e(Ut,hn),e(hn,$o),e(_t,Wl),e(_t,Js),e(Js,Da),e(_t,ct),e(_t,dr),e(pn,Tc),e(pn,Br),e(Br,ye),e(ye,dt),e(dt,mn),e(dt,gs),e(dt,Va),e(Va,Pa),e(Pa,wt),e(wt,Hr),e(Pa,Et),e(Pa,Xs),e(Xs,Lc),e(Va,Jl),e(Va,vl),e(vl,Qs),e(Qs,It),e(It,hs),e(ye,bn),e(ye,ms),e(ms,Ac),e(ye,$r),e(ye,ut),e(Br,Ro),e(Br,bs),e(bs,Pe),e(Pe,Rr),e(Pe,ka),e(Pe,de),e(de,Je),e(Je,ur),e(ur,Zs),e(Je,Fc),e(Je,ea),e(ea,xs),e(bs,yn),e(bs,qt),e(qt,Sa),e(bs,Dt),e(bs,Ur),e(c,Uo),e(c,Ce),e(Ce,Ta),e(Ta,qo),e(Ce,Oa),e(Ce,Xe),e(Xe,ta),e(ta,zo),e(Xe,Yo),e(Xe,je),e(je,fr),e(je,Xl),e(je,pr),e(je,Vt),e(je,ft)},p:le,i:le,o:le,d(Ql){Ql&&a(n)}}}class q3 extends xc{constructor(n){super(),yc(this,n,null,U3,Ai,{})}}function z3(o){let n,i,c,d,p,h,v,g,w,y,_,E,D,I,P,V,T,A,M,x,F,k,N,C,G,U,$,q,J,ae,ie,Q,Z,ee,fe,Ge,vt,R,ke,yr=" ",et,ce,we,Be,Xt,He,re,_r,St,tt,gt,pe,wr,Ts,Tt,De,oe,Ot,rt,$e,Se,Re,Za,Qt,Te,Ve,Er,en,qn,O,j,B,W,z,ve,Ee,X,Lt,Ie,At,tn,K,st,ht,Ft,Mt,Os,Cl,me,Ct,Ir,zn,_c,ua,Yn,Vo,at,Ue,Zt,jl,wc,Ls,fa,Po,Wn,qe,Zr,Kn,Ec,pa,Jn,ko,es,ts,Dr,ze,rs,rn,Nl,Xn,va,jt,er,As,sn,Vr,Fs,So,Qn,tr,rr,To,Oe,ga,Oo,Zn,Gl,an,Pr,Nt,mt,ss,nn,Bl,el,ha,kr,Gt,Hl,Le,Ms,$l,Lo,Cs,Sr,as,ns,Ic,tl,js,Ao,Rl,ma,ls,sr,Tr,ln,Fi,rl,Ns,is,sl,al,Or,Gs,ba,bt,ar,xa,nl,nr,Dd,Fo,be,nt,Bt,lr,Bs,Mo,ll,Ae,Fe,Co,jo,il,on,No,ol,ge,Ul,ql,Dc,Ye,xe,lt,Lr,Vd,os,Ht,cn,cl,Me,it,Ar,Hs,Vc,ya,cs,dn,un,Pc,$s,xt,ds,fn,dl,pn,Fr,ot,Mr,us,Rs,zl,$t,yt,ir,kc,Go,_a,Us,vn,We,Cr,fs,wa,qs,ps,Mi,zs,Bo,or,Ys,Pd=" ",Ho,ul,Ke,cr,Ws,Ea,Ks,jr,Ci,Sc,vs,_t,Nr,Rt,Yl,fl,pl,Ut,Gr,Ia,gn,hn,$o,Wl,Js,Da,ct,dr,Kl,Tc,Br,ye,dt,mn,Oc,gs,Va,Pa,wt,Hr,Et,Xs,Lc,Jl,vl,Qs,It,hs,bn,ms,Ac,$r,ut,xn,Ro,bs,Pe,Rr,kd,ka,de,Je,ur,Zs,Fc,ea,xs,yn,qt,Sa,Dt,Ur,ji,Uo,Ce,Ta,qo,Oa,Xe,ta,zo,Yo,je,fr,gl,Xl,pr,_n,Vt,ft,qu,Ql,wn,En,Pt,ra,La,ys,Ni,_s,Aa,Sd,hl,Gi,sa,ml,bl,aa,vr,Zl,Mc,ei,xl,ti,yl,Ne,In,Cc,Bi,qr,Hi,jc,Fa,$i,Nc,Ri,ri,Dn,Qe,ws,na,Vn,Ui,Ze,zr,qi,zi,Yr,si,_l,Pn,kn,Ma,wl,Yi,Sn,ai,Wr,Es,zt,El,Gc,Bc,pt,Is,Wi,Hc,Il,gr,Ca,ja,Tn,Yt,On,Ds,Kr,Td,$c,_e,hr,Od,Ki,mr,Ji,Rc,Na,la;return{c(){n=r("div"),i=r("div"),c=r("div"),d=r("div"),p=r("div"),h=r("div"),v=m("Green energy"),g=u(),w=r("div"),y=r("div"),_=r("div"),E=m("Power from waste"),D=u(),I=r("div"),P=m("Non-recycled waste is the ideal renewable energy source"),V=u(),T=r("div"),A=r("div"),M=r("div"),x=u(),F=r("div"),k=r("div"),N=r("div"),C=r("span"),G=m("Unlike solar and wind, it provides"),U=u(),$=r("span"),q=m("continuous"),J=u(),ae=r("span"),ie=m("power 24/7."),Q=u(),Z=r("div"),ee=r("div"),fe=r("div"),Ge=r("div"),vt=u(),R=r("div"),ke=m("Using non-recycled waste"),et=m(yr),ce=u(),we=r("span"),Be=m("prevents it from polluting"),Xt=m(`
                our soil, water, and atmosphere in uncontrolled ways.`),He=u(),re=r("div"),_r=r("div"),St=r("div"),tt=r("div"),gt=r("div"),pe=r("div"),wr=m("Power from waste"),Ts=u(),Tt=r("div"),De=m("Slurry covers for farms with livestock"),oe=u(),Ot=r("div"),rt=r("div"),$e=r("div"),Se=r("div"),Re=r("div"),Za=m("How it works"),Qt=u(),Te=r("div"),Ve=r("div"),Er=m(`Covering slurry stores helps keep rain out while containing odorous gases like ammonia, which result from
                    microbial activity. Ammonia emissions from manure storage contribute 9% of the UK’s agricultural ammonia
                    emissions. By covering your slurry store, you can substantially reduce these emissions. Conventional slurry
                    store covers aren’t airtight like anaerobic digester covers, so gas escapes at a reduced rate compared to
                    open stores.
                    `),en=r("br"),qn=u(),O=r("br"),j=m(`
                    Slurry store covers can be impermeable or permeable, fixed or floating. Impermeable covers prevent rainwater
                    from entering, reducing slurry volume and increasing storage capacity. In areas with moderate to high rainfall,
                    these covers can be cost-effective.
                    `),B=r("br"),W=u(),z=r("br"),ve=m(`
                    Captured fugitive emissions can be converted into biomethane to power onsite tractors or be sold to the transport
                    industry.`),Ee=u(),X=r("div"),Lt=r("div"),Ie=r("div"),At=r("img"),K=u(),st=r("div"),ht=m("Pros"),Ft=u(),Mt=r("div"),Os=r("ul"),Cl=r("li"),me=m("Relatively low-cost and quick deployment."),Ct=u(),Ir=r("li"),zn=m("In some countries, like the UK, government grants may cover"),_c=m(`
                      initial costs.
                      `),ua=r("li"),Yn=m("Effective in reducing emissions."),Vo=u(),at=r("div"),Ue=r("div"),Zt=r("img"),wc=u(),Ls=r("div"),fa=m("Cons"),Po=u(),Wn=r("div"),qe=r("ul"),Zr=r("li"),Kn=m("Covers are not airtight, so some methane may still escape."),Ec=u(),pa=r("li"),Jn=m("If biogas cannot be used on site, finding an off-taker is necessary."),ko=u(),es=r("div"),ts=r("div"),Dr=r("div"),ze=r("div"),rs=r("div"),rn=m("Power from waste"),Nl=u(),Xn=r("div"),va=m("Anaerobic digestion"),jt=u(),er=r("div"),As=r("div"),sn=r("div"),Vr=r("div"),Fs=r("div"),So=m("How it works"),Qn=u(),tr=r("div"),rr=r("div"),To=m(`Anaerobic digestion (AD) is a process where microorganisms break down biodegradable material without oxygen.
                    This produces biogas, which can be used for electricity, heat, renewable natural gas, or transportation
                    fuels. Various AD technologies convert diverse organic waste streams into biogas continuously.
                    `),Oe=r("br"),ga=u(),Oo=r("br"),Zn=m(`
                    Digested solids can be composted, used for bedding, applied to cropland, or made into other products. Nutrients
                    in the liquid stream serve as agricultural fertilizers. AD is applicable across the human food supply chain,
                    from farm animal waste to restaurant food waste. The scale can range from thousands of tonnes per annum to just
                    a few kilograms per day.`),Gl=u(),an=r("div"),Pr=r("div"),Nt=r("div"),mt=r("img"),nn=u(),Bl=r("div"),el=m("Pros"),ha=u(),kr=r("div"),Gt=r("ul"),Hl=r("li"),Le=m("Suitable for most parts of the human food supply chain, significantly reducing environmental impact."),Ms=u(),$l=r("li"),Lo=m("Smaller units for food waste are relatively affordable and usually don’t require planning consent."),Cs=u(),Sr=r("div"),as=r("div"),ns=r("img"),tl=u(),js=r("div"),Ao=m("Cons"),Rl=u(),ma=r("div"),ls=r("ul"),sr=r("li"),Tr=m(`Larger units for sizable operations can be expensive, take 12-18 months from feasibility to operation,
                        and may face local objections due to odor.`),ln=u(),Fi=r("li"),rl=m("Bigger units require planning consent, necessitating expert support."),Ns=u(),is=r("li"),sl=m("We have partners who can help with this process."),al=u(),Or=r("div"),Gs=r("div"),ba=r("div"),bt=r("div"),ar=r("div"),xa=m("Power from waste"),nl=u(),nr=r("div"),Dd=m("Pyrolysis"),Fo=u(),be=r("div"),nt=r("div"),Bt=r("div"),lr=r("div"),Bs=r("div"),Mo=m("How it works"),ll=u(),Ae=r("div"),Fe=r("div"),Co=m(`Pyrolysis is a thermochemical process applied to any organic material, involving chemical and physical
                    separation into different molecules at high temperatures and without oxygen. Unlike combustion and
                    gasification, which involve oxidation, pyrolysis is an endothermic process resulting in high-energy
                    products. `),jo=r("br"),il=u(),on=r("br"),No=m(`
                    Pyrolysis products include solid (charcoal, biochar), liquid, and non-condensable gases (H2, CH4, CnHm, CO, CO2,
                    and N). In some applications, liquid and gas phases can be used together when supplying hot syngas directly to
                    a burner or oxidation chamber.
                    `),ol=r("br"),ge=u(),Ul=r("br"),ql=m(`
                    During pyrolysis, materials are heated to a specific temperature inside a pyrolysis unit until the process is
                    complete. The chosen temperature influences the composition and yields of pyrolysis oil, syngas, and char.`),Dc=u(),Ye=r("div"),xe=r("div"),lt=r("div"),Lr=r("img"),os=u(),Ht=r("div"),cn=m("Pros"),cl=u(),Me=r("div"),it=r("ul"),Ar=r("li"),Hs=m("Versatile application across multiple industries: agriculture, energy, and transportation."),Vc=u(),ya=r("li"),cs=m("Carbon sequestration through biochar production, aiding in climate change mitigation."),dn=u(),un=r("li"),Pc=m("Eco-friendly approach to managing organic waste, reducing landfill usage."),$s=u(),xt=r("div"),ds=r("div"),fn=r("img"),pn=u(),Fr=r("div"),ot=m("Cons"),Mr=u(),us=r("div"),Rs=r("ul"),zl=r("li"),$t=m("High initial investment, especially for larger operations."),yt=u(),ir=r("li"),kc=m("Demand for technical expertise and skilled personnel."),Go=u(),_a=r("li"),Us=m("Emission monitoring and management required to minimize environmental impacts."),vn=u(),We=r("div"),Cr=r("div"),fs=r("div"),wa=m("We see waste as a fuel opportunity "),qs=r("br"),ps=m(`
            – and it’s already yours!`),Mi=u(),zs=r("div"),Bo=m(`Use our online tools to explore over 150 technology partners
            `),or=r("br"),Ys=m(`
            solutions and start your power-from-waste project`),Ho=m(Pd),ul=u(),Ke=r("div"),cr=r("div"),Ws=r("div"),Ea=r("div"),Ks=r("div"),jr=r("img"),Sc=u(),vs=r("div"),_t=r("div"),Nr=r("div"),Rt=m("Exploration station"),Yl=u(),fl=r("div"),pl=m("Discover if your waste type is suitable for a project or learn more about power-from-waste"),Ut=u(),Gr=r("a"),Ia=r("div"),gn=r("img"),$o=u(),Wl=r("div"),Js=m("Explore the possibilities"),Da=u(),ct=r("div"),dr=r("img"),Tc=u(),Br=r("div"),ye=r("div"),dt=r("div"),mn=m("Calculator tool"),Oc=u(),gs=r("div"),Va=m("Discover if your waste type is suitable for a project or learn more about power-from-waste"),Pa=u(),wt=r("a"),Hr=r("div"),Et=r("img"),Lc=u(),Jl=r("div"),vl=m("Calculate now"),Qs=u(),It=r("div"),hs=r("div"),bn=r("div"),ms=r("img"),$r=u(),ut=r("div"),xn=r("div"),Ro=m("Concerned about costs?"),bs=u(),Pe=r("div"),Rr=m(`Even our larger projects have payback periods under five years, with some as low as two. After that, you
                    only cover the annual facility maintenance cost, with no grid or standing charges.`),kd=u(),ka=r("div"),de=r("div"),Je=r("div"),ur=r("div"),Zs=m("Other green energy sources"),Fc=u(),ea=r("div"),xs=m("Different renewable energy sources can be combined to find the perfect solution for your project"),yn=u(),qt=r("div"),Sa=r("div"),Dt=r("div"),Ur=r("div"),ji=r("div"),Uo=u(),Ce=r("div"),Ta=r("div"),qo=m("Solar power"),Oa=u(),Xe=r("div"),ta=r("div"),zo=m(`Solar power converts the Sun’s photons into electricity through solar panels. It works in most locations and
                  has several benefits.`),Yo=u(),je=r("img"),gl=u(),Xl=r("div"),pr=r("div"),_n=r("div"),Vt=r("div"),ft=r("img"),Ql=u(),wn=r("div"),En=m("Pros"),Pt=u(),ra=r("div"),La=r("ul"),ys=r("li"),Ni=m("Often cheaper than fossil fuels by 2023"),_s=u(),Aa=r("li"),Sd=m("Environmentally friendly Low maintenance and long-lasting"),hl=u(),Gi=r("li"),sa=m("Emissions-free during use"),ml=u(),bl=r("div"),aa=r("div"),vr=r("img"),Mc=u(),ei=r("div"),xl=m("Cons"),ti=u(),yl=r("div"),Ne=r("ul"),In=r("li"),Cc=m("High initial costs"),Bi=u(),qr=r("li"),Hi=m("Intermittent power supply, requiring grid connection or battery storage"),jc=u(),Fa=r("li"),$i=m("Environmental impacts during production and disposal"),Nc=u(),Ri=r("li"),ri=m("Potential local resistance to solar farm installations near habitation"),Dn=u(),Qe=r("div"),ws=r("div"),na=r("div"),Vn=r("div"),Ui=u(),Ze=r("div"),zr=r("div"),qi=m("Wind power"),zi=u(),Yr=r("div"),si=r("div"),_l=m("Wind power, also called “Eolic” energy, generates electricity using wind turbines."),Pn=u(),kn=r("img"),wl=u(),Yi=r("div"),Sn=r("div"),ai=r("div"),Wr=r("div"),Es=u(),zt=r("div"),El=r("div"),Gc=m("Energy storage"),Bc=u(),pt=r("div"),Is=r("div"),Wi=m("Energy storage is a crucial technology that allows us to store excess energy for future use."),Hc=u(),Il=r("img"),Ca=u(),ja=r("div"),Tn=r("div"),Yt=m("Copyright © 2023 Power for Planet"),On=u(),Ds=r("div"),Kr=r("div"),Td=m("Privacy Policy"),$c=u(),_e=r("div"),hr=r("img"),Ki=u(),mr=r("img"),Rc=u(),Na=r("img"),this.h()},l(ni){n=s(ni,"DIV",{class:!0});var li=l(n);i=s(li,"DIV",{class:!0});var br=l(i);c=s(br,"DIV",{class:!0});var Ga=l(c);d=s(Ga,"DIV",{class:!0});var Ld=l(d);p=s(Ld,"DIV",{class:!0});var Ad=l(p);h=s(Ad,"DIV",{});var ii=l(h);v=b(ii,"Green energy"),ii.forEach(a),Ad.forEach(a),Ld.forEach(a),g=f(Ga),w=s(Ga,"DIV",{class:!0});var Vs=l(w);y=s(Vs,"DIV",{class:!0});var Ln=l(y);_=s(Ln,"DIV",{class:!0});var An=l(_);E=b(An,"Power from waste"),An.forEach(a),Ln.forEach(a),D=f(Vs),I=s(Vs,"DIV",{class:!0});var zu=l(I);P=b(zu,"Non-recycled waste is the ideal renewable energy source"),zu.forEach(a),Vs.forEach(a),V=f(Ga),T=s(Ga,"DIV",{class:!0});var Wo=l(T);A=s(Wo,"DIV",{class:!0});var Ko=l(A);M=s(Ko,"DIV",{class:!0}),l(M).forEach(a),x=f(Ko),F=s(Ko,"DIV",{class:!0});var Fn=l(F);k=s(Fn,"DIV",{class:!0});var oi=l(k);N=s(oi,"DIV",{class:!0});var Dl=l(N);C=s(Dl,"SPAN",{class:!0});var Jo=l(C);G=b(Jo,"Unlike solar and wind, it provides"),Jo.forEach(a),U=f(Dl),$=s(Dl,"SPAN",{class:!0});var ci=l($);q=b(ci,"continuous"),ci.forEach(a),J=f(Dl),ae=s(Dl,"SPAN",{class:!0});var Ba=l(ae);ie=b(Ba,"power 24/7."),Ba.forEach(a),Dl.forEach(a),oi.forEach(a),Fn.forEach(a),Ko.forEach(a),Q=f(Wo),Z=s(Wo,"DIV",{class:!0});var ia=l(Z);ee=s(ia,"DIV",{class:!0});var Mn=l(ee);fe=s(Mn,"DIV",{class:!0});var Uc=l(fe);Ge=s(Uc,"DIV",{class:!0}),l(Ge).forEach(a),vt=f(Uc),R=s(Uc,"DIV",{class:!0});var di=l(R);ke=b(di,"Using non-recycled waste"),et=b(di,yr),ce=f(di),we=s(di,"SPAN",{class:!0});var Cn=l(we);Be=b(Cn,"prevents it from polluting"),Cn.forEach(a),Xt=b(di,`
                our soil, water, and atmosphere in uncontrolled ways.`),di.forEach(a),Uc.forEach(a),Mn.forEach(a),ia.forEach(a),Wo.forEach(a),Ga.forEach(a),He=f(br),re=s(br,"DIV",{class:!0});var Wt=l(re);_r=s(Wt,"DIV",{class:!0});var jn=l(_r);St=s(jn,"DIV",{class:!0});var Yu=l(St);tt=s(Yu,"DIV",{class:!0});var Xo=l(tt);gt=s(Xo,"DIV",{class:!0});var Fd=l(gt);pe=s(Fd,"DIV",{class:!0});var Ha=l(pe);wr=b(Ha,"Power from waste"),Ha.forEach(a),Fd.forEach(a),Ts=f(Xo),Tt=s(Xo,"DIV",{class:!0});var ui=l(Tt);De=b(ui,"Slurry covers for farms with livestock"),ui.forEach(a),Xo.forEach(a),Yu.forEach(a),oe=f(jn),Ot=s(jn,"DIV",{class:!0});var Wu=l(Ot);rt=s(Wu,"DIV",{class:!0});var Md=l(rt);$e=s(Md,"DIV",{class:!0});var Jr=l($e);Se=s(Jr,"DIV",{class:!0});var oa=l(Se);Re=s(oa,"DIV",{class:!0});var Cd=l(Re);Za=b(Cd,"How it works"),Cd.forEach(a),Qt=f(oa),Te=s(oa,"DIV",{class:!0});var Qo=l(Te);Ve=s(Qo,"DIV",{class:!0});var Kt=l(Ve);Er=b(Kt,`Covering slurry stores helps keep rain out while containing odorous gases like ammonia, which result from
                    microbial activity. Ammonia emissions from manure storage contribute 9% of the UK’s agricultural ammonia
                    emissions. By covering your slurry store, you can substantially reduce these emissions. Conventional slurry
                    store covers aren’t airtight like anaerobic digester covers, so gas escapes at a reduced rate compared to
                    open stores.
                    `),en=s(Kt,"BR",{}),qn=f(Kt),O=s(Kt,"BR",{}),j=b(Kt,`
                    Slurry store covers can be impermeable or permeable, fixed or floating. Impermeable covers prevent rainwater
                    from entering, reducing slurry volume and increasing storage capacity. In areas with moderate to high rainfall,
                    these covers can be cost-effective.
                    `),B=s(Kt,"BR",{}),W=f(Kt),z=s(Kt,"BR",{}),ve=b(Kt,`
                    Captured fugitive emissions can be converted into biomethane to power onsite tractors or be sold to the transport
                    industry.`),Kt.forEach(a),Qo.forEach(a),oa.forEach(a),Ee=f(Jr),X=s(Jr,"DIV",{class:!0});var qc=l(X);Lt=s(qc,"DIV",{class:!0});var Zo=l(Lt);Ie=s(Zo,"DIV",{class:!0});var Xr=l(Ie);At=s(Xr,"IMG",{src:!0,alt:!0,class:!0}),K=f(Xr),st=s(Xr,"DIV",{class:!0});var $a=l(st);ht=b($a,"Pros"),$a.forEach(a),Xr.forEach(a),Ft=f(Zo),Mt=s(Zo,"DIV",{class:!0});var ec=l(Mt);Os=s(ec,"UL",{class:!0});var Nn=l(Os);Cl=s(Nn,"LI",{});var Ra=l(Cl);me=b(Ra,"Relatively low-cost and quick deployment."),Ra.forEach(a),Ct=f(Nn),Ir=s(Nn,"LI",{});var tc=l(Ir);zn=b(tc,"In some countries, like the UK, government grants may cover"),tc.forEach(a),_c=b(Nn,`
                      initial costs.
                      `),ua=s(Nn,"LI",{});var jd=l(ua);Yn=b(jd,"Effective in reducing emissions."),jd.forEach(a),Nn.forEach(a),ec.forEach(a),Zo.forEach(a),Vo=f(qc),at=s(qc,"DIV",{class:!0});var rc=l(at);Ue=s(rc,"DIV",{class:!0});var fi=l(Ue);Zt=s(fi,"IMG",{src:!0,alt:!0,class:!0}),wc=f(fi),Ls=s(fi,"DIV",{class:!0});var Nd=l(Ls);fa=b(Nd,"Cons"),Nd.forEach(a),fi.forEach(a),Po=f(rc),Wn=s(rc,"DIV",{class:!0});var Gd=l(Wn);qe=s(Gd,"UL",{class:!0});var Ps=l(qe);Zr=s(Ps,"LI",{});var Ua=l(Zr);Kn=b(Ua,"Covers are not airtight, so some methane may still escape."),Ua.forEach(a),Ec=f(Ps),pa=s(Ps,"LI",{});var Vl=l(pa);Jn=b(Vl,"If biogas cannot be used on site, finding an off-taker is necessary."),Vl.forEach(a),Ps.forEach(a),Gd.forEach(a),rc.forEach(a),qc.forEach(a),Jr.forEach(a),Md.forEach(a),Wu.forEach(a),jn.forEach(a),ko=f(Wt),es=s(Wt,"DIV",{class:!0});var qa=l(es);ts=s(qa,"DIV",{class:!0});var pi=l(ts);Dr=s(pi,"DIV",{class:!0});var zc=l(Dr);ze=s(zc,"DIV",{class:!0});var Bd=l(ze);rs=s(Bd,"DIV",{class:!0});var za=l(rs);rn=b(za,"Power from waste"),za.forEach(a),Bd.forEach(a),Nl=f(zc),Xn=s(zc,"DIV",{class:!0});var vi=l(Xn);va=b(vi,"Anaerobic digestion"),vi.forEach(a),zc.forEach(a),pi.forEach(a),jt=f(qa),er=s(qa,"DIV",{class:!0});var sc=l(er);As=s(sc,"DIV",{class:!0});var Hd=l(As);sn=s(Hd,"DIV",{class:!0});var Qr=l(sn);Vr=s(Qr,"DIV",{class:!0});var Ku=l(Vr);Fs=s(Ku,"DIV",{class:!0});var Op=l(Fs);So=b(Op,"How it works"),Op.forEach(a),Qn=f(Ku),tr=s(Ku,"DIV",{class:!0});var ac=l(tr);rr=s(ac,"DIV",{class:!0});var gi=l(rr);To=b(gi,`Anaerobic digestion (AD) is a process where microorganisms break down biodegradable material without oxygen.
                    This produces biogas, which can be used for electricity, heat, renewable natural gas, or transportation
                    fuels. Various AD technologies convert diverse organic waste streams into biogas continuously.
                    `),Oe=s(gi,"BR",{}),ga=f(gi),Oo=s(gi,"BR",{}),Zn=b(gi,`
                    Digested solids can be composted, used for bedding, applied to cropland, or made into other products. Nutrients
                    in the liquid stream serve as agricultural fertilizers. AD is applicable across the human food supply chain,
                    from farm animal waste to restaurant food waste. The scale can range from thousands of tonnes per annum to just
                    a few kilograms per day.`),gi.forEach(a),ac.forEach(a),Ku.forEach(a),Gl=f(Qr),an=s(Qr,"DIV",{class:!0});var Gn=l(an);Pr=s(Gn,"DIV",{class:!0});var Xi=l(Pr);Nt=s(Xi,"DIV",{class:!0});var zf=l(Nt);mt=s(zf,"IMG",{src:!0,alt:!0,class:!0}),nn=f(zf),Bl=s(zf,"DIV",{class:!0});var Lp=l(Bl);el=b(Lp,"Pros"),Lp.forEach(a),zf.forEach(a),ha=f(Xi),kr=s(Xi,"DIV",{class:!0});var Ap=l(kr);Gt=s(Ap,"UL",{class:!0});var nc=l(Gt);Hl=s(nc,"LI",{});var Qi=l(Hl);Le=b(Qi,"Suitable for most parts of the human food supply chain, significantly reducing environmental impact."),Qi.forEach(a),Ms=f(nc),$l=s(nc,"LI",{});var Yc=l($l);Lo=b(Yc,"Smaller units for food waste are relatively affordable and usually don’t require planning consent."),Yc.forEach(a),nc.forEach(a),Ap.forEach(a),Xi.forEach(a),Cs=f(Gn),Sr=s(Gn,"DIV",{class:!0});var Yf=l(Sr);as=s(Yf,"DIV",{class:!0});var Ju=l(as);ns=s(Ju,"IMG",{src:!0,alt:!0,class:!0}),tl=f(Ju),js=s(Ju,"DIV",{class:!0});var Fp=l(js);Ao=b(Fp,"Cons"),Fp.forEach(a),Ju.forEach(a),Rl=f(Yf),ma=s(Yf,"DIV",{class:!0});var Pl=l(ma);ls=s(Pl,"UL",{class:!0});var Bn=l(ls);sr=s(Bn,"LI",{});var Xu=l(sr);Tr=b(Xu,`Larger units for sizable operations can be expensive, take 12-18 months from feasibility to operation,
                        and may face local objections due to odor.`),Xu.forEach(a),ln=f(Bn),Fi=s(Bn,"LI",{});var Mp=l(Fi);rl=b(Mp,"Bigger units require planning consent, necessitating expert support."),Mp.forEach(a),Ns=f(Bn),is=s(Bn,"LI",{});var Cp=l(is);sl=b(Cp,"We have partners who can help with this process."),Cp.forEach(a),Bn.forEach(a),Pl.forEach(a),Yf.forEach(a),Gn.forEach(a),Qr.forEach(a),Hd.forEach(a),sc.forEach(a),qa.forEach(a),al=f(Wt),Or=s(Wt,"DIV",{class:!0});var Hn=l(Or);Gs=s(Hn,"DIV",{class:!0});var Wc=l(Gs);ba=s(Wc,"DIV",{class:!0});var Wf=l(ba);bt=s(Wf,"DIV",{class:!0});var jp=l(bt);ar=s(jp,"DIV",{class:!0});var ca=l(ar);xa=b(ca,"Power from waste"),ca.forEach(a),jp.forEach(a),nl=f(Wf),nr=s(Wf,"DIV",{class:!0});var lc=l(nr);Dd=b(lc,"Pyrolysis"),lc.forEach(a),Wf.forEach(a),Wc.forEach(a),Fo=f(Hn),be=s(Hn,"DIV",{class:!0});var $d=l(be);nt=s($d,"DIV",{class:!0});var Zi=l(nt);Bt=s(Zi,"DIV",{class:!0});var Kf=l(Bt);lr=s(Kf,"DIV",{class:!0});var Qu=l(lr);Bs=s(Qu,"DIV",{class:!0});var hi=l(Bs);Mo=b(hi,"How it works"),hi.forEach(a),ll=f(Qu),Ae=s(Qu,"DIV",{class:!0});var Kc=l(Ae);Fe=s(Kc,"DIV",{class:!0});var kl=l(Fe);Co=b(kl,`Pyrolysis is a thermochemical process applied to any organic material, involving chemical and physical
                    separation into different molecules at high temperatures and without oxygen. Unlike combustion and
                    gasification, which involve oxidation, pyrolysis is an endothermic process resulting in high-energy
                    products. `),jo=s(kl,"BR",{}),il=f(kl),on=s(kl,"BR",{}),No=b(kl,`
                    Pyrolysis products include solid (charcoal, biochar), liquid, and non-condensable gases (H2, CH4, CnHm, CO, CO2,
                    and N). In some applications, liquid and gas phases can be used together when supplying hot syngas directly to
                    a burner or oxidation chamber.
                    `),ol=s(kl,"BR",{}),ge=f(kl),Ul=s(kl,"BR",{}),ql=b(kl,`
                    During pyrolysis, materials are heated to a specific temperature inside a pyrolysis unit until the process is
                    complete. The chosen temperature influences the composition and yields of pyrolysis oil, syngas, and char.`),kl.forEach(a),Kc.forEach(a),Qu.forEach(a),Dc=f(Kf),Ye=s(Kf,"DIV",{class:!0});var Zu=l(Ye);xe=s(Zu,"DIV",{class:!0});var Sl=l(xe);lt=s(Sl,"DIV",{class:!0});var ic=l(lt);Lr=s(ic,"IMG",{src:!0,alt:!0,class:!0}),os=f(ic),Ht=s(ic,"DIV",{class:!0});var Np=l(Ht);cn=b(Np,"Pros"),Np.forEach(a),ic.forEach(a),cl=f(Sl),Me=s(Sl,"DIV",{class:!0});var Gp=l(Me);it=s(Gp,"UL",{class:!0});var Tl=l(it);Ar=s(Tl,"LI",{});var qv=l(Ar);Hs=b(qv,"Versatile application across multiple industries: agriculture, energy, and transportation."),qv.forEach(a),Vc=f(Tl),ya=s(Tl,"LI",{});var Bp=l(ya);cs=b(Bp,"Carbon sequestration through biochar production, aiding in climate change mitigation."),Bp.forEach(a),dn=f(Tl),un=s(Tl,"LI",{});var oc=l(un);Pc=b(oc,"Eco-friendly approach to managing organic waste, reducing landfill usage."),oc.forEach(a),Tl.forEach(a),Gp.forEach(a),Sl.forEach(a),$s=f(Zu),xt=s(Zu,"DIV",{class:!0});var cc=l(xt);ds=s(cc,"DIV",{class:!0});var ef=l(ds);fn=s(ef,"IMG",{src:!0,alt:!0,class:!0}),pn=f(ef),Fr=s(ef,"DIV",{class:!0});var Hp=l(Fr);ot=b(Hp,"Cons"),Hp.forEach(a),ef.forEach(a),Mr=f(cc),us=s(cc,"DIV",{class:!0});var $p=l(us);Rs=s($p,"UL",{class:!0});var $n=l(Rs);zl=s($n,"LI",{});var eo=l(zl);$t=b(eo,"High initial investment, especially for larger operations."),eo.forEach(a),yt=f($n),ir=s($n,"LI",{});var Jc=l(ir);kc=b(Jc,"Demand for technical expertise and skilled personnel."),Jc.forEach(a),Go=f($n),_a=s($n,"LI",{});var zv=l(_a);Us=b(zv,"Emission monitoring and management required to minimize environmental impacts."),zv.forEach(a),$n.forEach(a),$p.forEach(a),cc.forEach(a),Zu.forEach(a),Kf.forEach(a),Zi.forEach(a),$d.forEach(a),Hn.forEach(a),vn=f(Wt),We=s(Wt,"DIV",{class:!0});var tf=l(We);Cr=s(tf,"DIV",{class:!0});var rf=l(Cr);fs=s(rf,"DIV",{class:!0});var Ol=l(fs);wa=b(Ol,"We see waste as a fuel opportunity "),qs=s(Ol,"BR",{}),ps=b(Ol,`
            – and it’s already yours!`),Ol.forEach(a),Mi=f(rf),zs=s(rf,"DIV",{class:!0});var mi=l(zs);Bo=b(mi,`Use our online tools to explore over 150 technology partners
            `),or=s(mi,"BR",{}),Ys=b(mi,`
            solutions and start your power-from-waste project`),Ho=b(mi,Pd),mi.forEach(a),rf.forEach(a),ul=f(tf),Ke=s(tf,"DIV",{});var Jf=l(Ke);cr=s(Jf,"DIV",{class:!0});var sf=l(cr);Ws=s(sf,"DIV",{class:!0});var Xc=l(Ws);Ea=s(Xc,"DIV",{});var dc=l(Ea);Ks=s(dc,"DIV",{});var to=l(Ks);jr=s(to,"IMG",{src:!0,alt:!0,class:!0}),to.forEach(a),dc.forEach(a),Sc=f(Xc),vs=s(Xc,"DIV",{class:!0});var Qc=l(vs);_t=s(Qc,"DIV",{class:!0});var Xf=l(_t);Nr=s(Xf,"DIV",{class:!0});var Rp=l(Nr);Rt=b(Rp,"Exploration station"),Rp.forEach(a),Yl=f(Xf),fl=s(Xf,"DIV",{class:!0});var Up=l(fl);pl=b(Up,"Discover if your waste type is suitable for a project or learn more about power-from-waste"),Up.forEach(a),Xf.forEach(a),Qc.forEach(a),Ut=f(Xc),Gr=s(Xc,"A",{href:!0});var ro=l(Gr);Ia=s(ro,"DIV",{class:!0});var so=l(Ia);gn=s(so,"IMG",{src:!0,alt:!0,class:!0}),$o=f(so),Wl=s(so,"DIV",{});var Yv=l(Wl);Js=b(Yv,"Explore the possibilities"),Yv.forEach(a),so.forEach(a),ro.forEach(a),Xc.forEach(a),Da=f(sf),ct=s(sf,"DIV",{class:!0});var Zc=l(ct);dr=s(Zc,"IMG",{class:!0,alt:!0,src:!0}),Tc=f(Zc),Br=s(Zc,"DIV",{class:!0});var qp=l(Br);ye=s(qp,"DIV",{class:!0});var Rn=l(ye);dt=s(Rn,"DIV",{class:!0});var ed=l(dt);mn=b(ed,"Calculator tool"),ed.forEach(a),Oc=f(Rn),gs=s(Rn,"DIV",{class:!0});var Wv=l(gs);Va=b(Wv,"Discover if your waste type is suitable for a project or learn more about power-from-waste"),Wv.forEach(a),Rn.forEach(a),qp.forEach(a),Pa=f(Zc),wt=s(Zc,"A",{href:!0});var zp=l(wt);Hr=s(zp,"DIV",{class:!0});var ao=l(Hr);Et=s(ao,"IMG",{src:!0,alt:!0,class:!0}),Lc=f(ao),Jl=s(ao,"DIV",{});var td=l(Jl);vl=b(td,"Calculate now"),td.forEach(a),ao.forEach(a),zp.forEach(a),Zc.forEach(a),sf.forEach(a),Qs=f(Jf),It=s(Jf,"DIV",{class:!0});var Yp=l(It);hs=s(Yp,"DIV",{class:!0});var Wp=l(hs);bn=s(Wp,"DIV",{class:!0});var no=l(bn);ms=s(no,"IMG",{src:!0,alt:!0,class:!0}),$r=f(no),ut=s(no,"DIV",{class:!0});var Qf=l(ut);xn=s(Qf,"DIV",{class:!0});var Kp=l(xn);Ro=b(Kp,"Concerned about costs?"),Kp.forEach(a),bs=f(Qf),Pe=s(Qf,"DIV",{class:!0});var lo=l(Pe);Rr=b(lo,`Even our larger projects have payback periods under five years, with some as low as two. After that, you
                    only cover the annual facility maintenance cost, with no grid or standing charges.`),lo.forEach(a),Qf.forEach(a),no.forEach(a),Wp.forEach(a),Yp.forEach(a),Jf.forEach(a),tf.forEach(a),Wt.forEach(a),kd=f(br),ka=s(br,"DIV",{class:!0});var uc=l(ka);de=s(uc,"DIV",{class:!0});var af=l(de);Je=s(af,"DIV",{class:!0});var Jp=l(Je);ur=s(Jp,"DIV",{class:!0});var fc=l(ur);Zs=b(fc,"Other green energy sources"),fc.forEach(a),Jp.forEach(a),Fc=f(af),ea=s(af,"DIV",{class:!0});var nf=l(ea);xs=b(nf,"Different renewable energy sources can be combined to find the perfect solution for your project"),nf.forEach(a),af.forEach(a),yn=f(uc),qt=s(uc,"DIV",{class:!0});var rd=l(qt);Sa=s(rd,"DIV",{class:!0});var lf=l(Sa);Dt=s(lf,"DIV",{class:!0});var sd=l(Dt);Ur=s(sd,"DIV",{class:!0});var Xp=l(Ur);ji=s(Xp,"DIV",{class:!0}),l(ji).forEach(a),Xp.forEach(a),Uo=f(sd),Ce=s(sd,"DIV",{class:!0});var of=l(Ce);Ta=s(of,"DIV",{class:!0});var Rd=l(Ta);qo=b(Rd,"Solar power"),Rd.forEach(a),Oa=f(of),Xe=s(of,"DIV",{class:!0});var bi=l(Xe);ta=s(bi,"DIV",{class:!0});var pc=l(ta);zo=b(pc,`Solar power converts the Sun’s photons into electricity through solar panels. It works in most locations and
                  has several benefits.`),pc.forEach(a),Yo=f(bi),je=s(bi,"IMG",{src:!0}),bi.forEach(a),of.forEach(a),sd.forEach(a),gl=f(lf),Xl=s(lf,"DIV",{class:!0});var Ud=l(Xl);pr=s(Ud,"DIV",{class:!0});var io=l(pr);_n=s(io,"DIV",{class:!0});var Zf=l(_n);Vt=s(Zf,"DIV",{class:!0});var cf=l(Vt);ft=s(cf,"IMG",{src:!0,alt:!0,class:!0}),Ql=f(cf),wn=s(cf,"DIV",{class:!0});var vc=l(wn);En=b(vc,"Pros"),vc.forEach(a),cf.forEach(a),Pt=f(Zf),ra=s(Zf,"DIV",{class:!0});var ad=l(ra);La=s(ad,"UL",{class:!0});var nd=l(La);ys=s(nd,"LI",{});var Qp=l(ys);Ni=b(Qp,"Often cheaper than fossil fuels by 2023"),Qp.forEach(a),_s=f(nd),Aa=s(nd,"LI",{});var ld=l(Aa);Sd=b(ld,"Environmentally friendly Low maintenance and long-lasting"),ld.forEach(a),hl=f(nd),Gi=s(nd,"LI",{});var Zp=l(Gi);sa=b(Zp,"Emissions-free during use"),Zp.forEach(a),nd.forEach(a),ad.forEach(a),Zf.forEach(a),ml=f(io),bl=s(io,"DIV",{class:!0});var df=l(bl);aa=s(df,"DIV",{class:!0});var xi=l(aa);vr=s(xi,"IMG",{src:!0,alt:!0,class:!0}),Mc=f(xi),ei=s(xi,"DIV",{class:!0});var qd=l(ei);xl=b(qd,"Cons"),qd.forEach(a),xi.forEach(a),ti=f(df),yl=s(df,"DIV",{class:!0});var yi=l(yl);Ne=s(yi,"UL",{class:!0});var Ya=l(Ne);In=s(Ya,"LI",{});var Kv=l(In);Cc=b(Kv,"High initial costs"),Kv.forEach(a),Bi=f(Ya),qr=s(Ya,"LI",{});var ev=l(qr);Hi=b(ev,"Intermittent power supply, requiring grid connection or battery storage"),ev.forEach(a),jc=f(Ya),Fa=s(Ya,"LI",{});var tv=l(Fa);$i=b(tv,"Environmental impacts during production and disposal"),tv.forEach(a),Nc=f(Ya),Ri=s(Ya,"LI",{});var zd=l(Ri);ri=b(zd,"Potential local resistance to solar farm installations near habitation"),zd.forEach(a),Ya.forEach(a),yi.forEach(a),df.forEach(a),io.forEach(a),Ud.forEach(a),lf.forEach(a),Dn=f(rd),Qe=s(rd,"DIV",{class:!0});var oo=l(Qe);ws=s(oo,"DIV",{class:!0});var co=l(ws);na=s(co,"DIV",{class:!0});var Jv=l(na);Vn=s(Jv,"DIV",{class:!0}),l(Vn).forEach(a),Jv.forEach(a),Ui=f(co),Ze=s(co,"DIV",{class:!0});var uf=l(Ze);zr=s(uf,"DIV",{class:!0});var rv=l(zr);qi=b(rv,"Wind power"),rv.forEach(a),zi=f(uf),Yr=s(uf,"DIV",{class:!0});var ks=l(Yr);si=s(ks,"DIV",{class:!0});var sv=l(si);_l=b(sv,"Wind power, also called “Eolic” energy, generates electricity using wind turbines."),sv.forEach(a),Pn=f(ks),kn=s(ks,"IMG",{src:!0}),ks.forEach(a),uf.forEach(a),co.forEach(a),oo.forEach(a),wl=f(rd),Yi=s(rd,"DIV",{class:!0});var Yd=l(Yi);Sn=s(Yd,"DIV",{class:!0});var Un=l(Sn);ai=s(Un,"DIV",{class:!0});var uo=l(ai);Wr=s(uo,"DIV",{class:!0}),l(Wr).forEach(a),uo.forEach(a),Es=f(Un),zt=s(Un,"DIV",{class:!0});var kt=l(zt);El=s(kt,"DIV",{class:!0});var Ll=l(El);Gc=b(Ll,"Energy storage"),Ll.forEach(a),Bc=f(kt),pt=s(kt,"DIV",{class:!0});var fo=l(pt);Is=s(fo,"DIV",{class:!0});var Xv=l(Is);Wi=b(Xv,"Energy storage is a crucial technology that allows us to store excess energy for future use."),Xv.forEach(a),Hc=f(fo),Il=s(fo,"IMG",{src:!0}),fo.forEach(a),kt.forEach(a),Un.forEach(a),Yd.forEach(a),rd.forEach(a),uc.forEach(a),br.forEach(a),Ca=f(li),ja=s(li,"DIV",{class:!0});var ff=l(ja);Tn=s(ff,"DIV",{class:!0});var Al=l(Tn);Yt=b(Al,"Copyright © 2023 Power for Planet"),Al.forEach(a),On=f(ff),Ds=s(ff,"DIV",{class:!0});var po=l(Ds);Kr=s(po,"DIV",{class:!0});var Qv=l(Kr);Td=b(Qv,"Privacy Policy"),Qv.forEach(a),$c=f(po),_e=s(po,"DIV",{class:!0});var id=l(_e);hr=s(id,"IMG",{src:!0,alt:!0,class:!0}),Ki=f(id),mr=s(id,"IMG",{src:!0,alt:!0,class:!0}),Rc=f(id),Na=s(id,"IMG",{src:!0,alt:!0,class:!0}),id.forEach(a),po.forEach(a),ff.forEach(a),li.forEach(a),this.h()},h(){t(p,"class","w-full flex-col flex justify-center items-center gap-2.5 text-[44px] leading-[46px] font-bold"),t(d,"class","bg-cover bg-center bg-[url('/assets/new/E2.jpg')] h-[240px] bg-[#2e3855] bg-blend-darken bg-opacity-[0.2] w-full flex-col h-2/5 flex justify-center items-center gap-5 px-[50px] py-10 rounded-[20px] text-center text-white font-Poppins"),t(_,"class","uppercase tracking-wider"),t(y,"class","bg-white flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-[#3f9378]"),t(I,"class","text-4xl leading-[46px] font-bold text-[#2e3855] h-[92px] w-[660px]"),t(w,"class","w-full flex-col flex items-center gap-5 text-center font-Poppins"),t(M,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(C,"class","font-bold text-xl leading-[34px] font-Poppins"),t($,"class","font-bold text-xl leading-[34px] text-[#3f9378] font-Poppins"),t(ae,"class","font-bold text-xl leading-[34px] font-Poppins"),t(N,"class","w-[440px]"),t(k,"class","w-full flex items-start gap-[18px]"),t(F,"class","w-full flex-col flex items-start gap-6 text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins"),t(A,"class","bg-white h-full flex-1 flex-col flex items-start gap-[18px] p-10 rounded-[20px]"),t(Ge,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(we,"class","font-bold text-xl leading-[34px] text-[#3f9378] font-Poppins"),t(R,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[440px]"),t(fe,"class","w-full flex-col flex items-start gap-[18px]"),t(ee,"class","w-full flex-col flex items-start gap-5"),t(Z,"class","bg-white h-full flex-1 flex-col flex items-start gap-[60px] p-10 rounded-[20px]"),t(T,"class","w-full h-[208px] flex items-start gap-5"),t(c,"class","flex-col w-full flex items-start gap-10 rounded-[20px]"),t(pe,"class","uppercase tracking-wider"),t(gt,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(Tt,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(tt,"class","flex-col flex items-center gap-5"),t(St,"class","bg-cover bg-[url('/assets/new/E3.jpg')] bg-blend-darken bg-center bg-[#2e3855] bg-opacity-[0.4] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(Re,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(Ve,"class","w-[700px]"),t(Te,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(Se,"class","flex-col w-[700px] flex items-center gap-4"),L(At.src,tn="/assets/new/badge-plus.svg")||t(At,"src",tn),t(At,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Slurrycovers-31-Frame32-31-wrapper-31-03Greenenergy"),t(At,"class","h-6 w-6"),t(st,"class","uppercase"),t(Ie,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Os,"class","list-disc"),t(Mt,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Lt,"class","flex-1 flex-col flex items-start gap-4"),L(Zt.src,jl="/assets/new/badge-minus.svg")||t(Zt,"src",jl),t(Zt,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Slurrycovers-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Zt,"class","h-6 w-6"),t(Ls,"class","uppercase"),t(Ue,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(qe,"class","list-disc"),t(Wn,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(at,"class","h-full flex-1 flex-col flex items-start gap-4"),t(X,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t($e,"class","w-full flex-col flex justify-center items-center gap-10"),t(rt,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(Ot,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(_r,"class","w-full flex-col flex items-start"),t(rs,"class","uppercase tracking-wider"),t(ze,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(Xn,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(Dr,"class","flex-col flex items-center gap-5"),t(ts,"class","bg-cover bg-[url('/assets/new/E4.jpg')] bg-center bg-blend-darken bg-[#2e3855] bg-opacity-[0.4] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(Fs,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(rr,"class","w-[700px]"),t(tr,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(Vr,"class","flex-col w-[700px] flex items-center gap-4"),L(mt.src,ss="/assets/new/badge-plus.svg")||t(mt,"src",ss),t(mt,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Anaerobicdigestion-31-Frame32-31-wrapper-31-03Greenenergy"),t(mt,"class","h-6 w-6"),t(Bl,"class","uppercase"),t(Nt,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Gt,"class","list-disc"),t(kr,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Pr,"class","flex-1 flex-col flex items-start gap-4"),L(ns.src,Ic="/assets/new/badge-minus.svg")||t(ns,"src",Ic),t(ns,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Anaerobicdigestion-31-Frame32-31-wrapper-31-03Greenenergy0"),t(ns,"class","h-6 w-6"),t(js,"class","uppercase"),t(as,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(ls,"class","list-disc"),t(ma,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Sr,"class","h-full flex-1 flex-col flex items-start gap-4"),t(an,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(sn,"class","w-full flex-col flex justify-center items-center gap-10"),t(As,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(er,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(es,"class","w-full flex-col flex items-start"),t(ar,"class","uppercase tracking-wider"),t(bt,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(nr,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(ba,"class","flex-col flex items-center gap-5"),t(Gs,"class","bg-cover bg-[url('/assets/new/E5.png')] bg-[center_top_400px] bg-blend-darken bg-[#2e3855] bg-opacity-[0.5] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(Bs,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(Fe,"class","w-[700px]"),t(Ae,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(lr,"class","flex-col w-[700px] flex items-center gap-4"),L(Lr.src,Vd="/assets/new/badge-plus.svg")||t(Lr,"src",Vd),t(Lr,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Pyrolysis-31-Frame32-31-wrapper-31-03Greenenergy"),t(Lr,"class","h-6 w-6"),t(Ht,"class","uppercase"),t(lt,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(it,"class","list-disc"),t(Me,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(xe,"class","flex-1 flex-col flex items-start gap-4"),L(fn.src,dl="/assets/new/badge-minus.svg")||t(fn,"src",dl),t(fn,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Pyrolysis-31-Frame32-31-wrapper-31-03Greenenergy0"),t(fn,"class","h-6 w-6"),t(Fr,"class","uppercase"),t(ds,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Rs,"class","list-disc"),t(us,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(xt,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Ye,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(Bt,"class","w-full flex-col flex justify-center items-center gap-10"),t(nt,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(be,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(Or,"class","w-full flex-col flex items-start"),t(fs,"class","text-3xl leading-[46px] font-bold font-Poppins"),t(zs,"class","text-sm leading-[26px] font-light font-PublicSans w-[498px]"),t(Cr,"class","flex-col flex items-center gap-2 text-center text-[#2e3855]"),L(jr.src,Ci="/assets/new/E6.png")||t(jr,"src",Ci),t(jr,"alt","Group7-31-Group21-31-img-31-Frame19-31-PFPtools-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),t(jr,"class","h-[150px]"),t(Nr,"class","text-2xl leading-[33px] font-bold font-Poppins w-[390px]"),t(fl,"class","text-md leading-[26px] font-light font-PublicSans w-[390px]"),t(_t,"class","w-full flex-col flex items-start gap-2 text-center text-white"),t(vs,"class","w-full flex-col flex items-center gap-3"),L(gn.src,hn="/assets/new/arrow-right-circle.svg")||t(gn,"src",hn),t(gn,"alt","arrow-right-circle-31-CTA-31-ctas-31-Frame25-31-Frame24-31-Hero-31-wrapper-31-03Greenenergy"),t(gn,"class","h-5 w-5"),t(Ia,"class","bg-[#eb8b5a] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-white"),t(Gr,"href","/explore#map"),t(Ws,"class","bg-[#2e3855] flex-1 flex-col flex justify-center items-center gap-6 p-10 rounded-[20px]"),t(dr,"class","object-cover h-[150px]"),t(dr,"alt","calculator-31-Frame26-31-PFPtools-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),L(dr.src,Kl="/assets/new/calc.png")||t(dr,"src",Kl),t(dt,"class","text-2xl leading-[33px] font-bold font-Poppins w-[390px]"),t(gs,"class","text-md leading-[26px] font-light font-PublicSans w-[390px]"),t(ye,"class","w-full flex-col flex items-start gap-2 text-center text-[#2e3855]"),t(Br,"class","w-full flex-col flex items-center gap-3"),L(Et.src,Xs="/assets/new/arrow-right-circle.svg")||t(Et,"src",Xs),t(Et,"alt","arrow-right-circle-31-CTA-31-ctas-31-Frame25-31-Frame24-31-Hero-31-wrapper-31-03Greenenergy"),t(Et,"class","h-5 w-5"),t(Hr,"class","bg-[#eb8b5a] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-white"),t(wt,"href","/explore#calculator"),t(ct,"class","bg-[#d0e6f2] flex-1 flex-col flex justify-center items-center gap-6 p-10 rounded-[20px]"),t(cr,"class","w-full flex items-start gap-5"),L(ms.src,Ac="/assets/new/costs.png")||t(ms,"src",Ac),t(ms,"alt","illu-costs-31-Frame24-31-Frame18-31-costs-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),t(ms,"class","h-[120px]"),t(xn,"class","text-2xl leading-[33px] font-bold font-Poppins"),t(Pe,"class","text-md leading-[26px] font-light font-PublicSans"),t(ut,"class","flex-col flex items-start gap-4"),t(bn,"class","flex items-center gap-10"),t(hs,"class","w-full flex-col flex justify-center items-center gap-[30px] text-[#2e3855]"),t(It,"class","bg-[#e7f5f5] flex-col w-full flex items-start gap-10 px-10 pt-10 pb-[50px] rounded-[20px]"),t(We,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(re,"class","w-full flex-col flex items-start gap-10"),t(ur,"class","uppercase tracking-wider"),t(Je,"class","bg-white flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-[#3f9378]"),t(ea,"class","text-4xl leading-[46px] font-bold text-[#2e3855] w-[700px]"),t(de,"class","w-full flex-col flex items-center gap-4 pb-[50px] text-center font-Poppins"),t(ji,"class","flex-col flex items-center gap-5"),t(Ur,"class","bg-cover bg-[url('/assets/new/E11.jpg')] bg-center flex-col h-[240px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-tl-[20px]"),t(Ta,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(ta,"class","w-[520px]"),L(je.src,fr="/assets/new/rl.png")||t(je,"src",fr),t(Xe,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(Ce,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(Dt,"class","bg-white w-full flex items-center rounded-t-[20px]"),L(ft.src,qu="/assets/new/badge-plus.svg")||t(ft,"src",qu),t(ft,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy0"),t(ft,"class","h-6 w-6"),t(wn,"class","uppercase"),t(Vt,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(La,"class","list-disc"),t(ra,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(_n,"class","flex-1 flex-col flex items-start gap-4"),L(vr.src,Zl="/assets/new/badge-minus.svg")||t(vr,"src",Zl),t(vr,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy00"),t(vr,"class","h-6 w-6"),t(ei,"class","uppercase"),t(aa,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Ne,"class","list-disc"),t(yl,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(bl,"class","h-full flex-1 flex-col flex items-start gap-4"),t(pr,"class","bg-[#e7f5f5] w-full flex items-start gap-10 px-[60px] pt-[30px] pb-[50px]"),t(Xl,"class","bg-white w-full flex-col flex items-start gap-10 rounded-b-[20px] text-sm text-[#2e3855]"),t(Sa,"class","flex-col w-[1060px] flex items-start rounded-[20px]"),t(Vn,"class","flex-col flex items-center gap-5"),t(na,"class","bg-cover bg-[url('/assets/new/E12.jpg')] bg-center flex-col h-[240px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-l-[20px]"),t(zr,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(si,"class","w-[520px]"),L(kn.src,Ma="/assets/new/rm.png")||t(kn,"src",Ma),t(Yr,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(Ze,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(ws,"class","bg-white w-full flex items-center rounded-t-[20px]"),t(Qe,"class","flex-col w-[1060px] flex items-start rounded-[20px]"),t(Wr,"class","flex-col flex items-center gap-5"),t(ai,"class","bg-cover bg-[url('/assets/new/E13.jpg')] bg-center flex-col h-[240px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-l-[20px]"),t(El,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(Is,"class","w-[520px]"),L(Il.src,gr="/assets/new/rm.png")||t(Il,"src",gr),t(pt,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(zt,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(Sn,"class","bg-white w-full flex items-center rounded-t-[20px]"),t(Yi,"class","flex-col w-[1060px] flex items-start rounded-[20px]"),t(qt,"class","flex-col flex items-start gap-[30px]"),t(ka,"class","w-full flex-col flex items-start gap-2.5"),t(i,"class","flex-col w-[1060px] flex items-center gap-10"),t(Tn,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Kr,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),L(hr.src,Od="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(hr,"src",Od),t(hr,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(hr,"class","h-6 w-6"),L(mr.src,Ji="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(mr,"src",Ji),t(mr,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(mr,"class","h-6 w-6"),L(Na.src,la="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Na,"src",la),t(Na,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Na,"class","h-6 w-6"),t(_e,"class","flex items-center gap-5"),t(Ds,"class","flex-1 flex justify-end items-center gap-10"),t(ja,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(n,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 mw-[1060px]")},m(ni,li){H(ni,n,li),e(n,i),e(i,c),e(c,d),e(d,p),e(p,h),e(h,v),e(c,g),e(c,w),e(w,y),e(y,_),e(_,E),e(w,D),e(w,I),e(I,P),e(c,V),e(c,T),e(T,A),e(A,M),e(A,x),e(A,F),e(F,k),e(k,N),e(N,C),e(C,G),e(N,U),e(N,$),e($,q),e(N,J),e(N,ae),e(ae,ie),e(T,Q),e(T,Z),e(Z,ee),e(ee,fe),e(fe,Ge),e(fe,vt),e(fe,R),e(R,ke),e(R,et),e(R,ce),e(R,we),e(we,Be),e(R,Xt),e(i,He),e(i,re),e(re,_r),e(_r,St),e(St,tt),e(tt,gt),e(gt,pe),e(pe,wr),e(tt,Ts),e(tt,Tt),e(Tt,De),e(_r,oe),e(_r,Ot),e(Ot,rt),e(rt,$e),e($e,Se),e(Se,Re),e(Re,Za),e(Se,Qt),e(Se,Te),e(Te,Ve),e(Ve,Er),e(Ve,en),e(Ve,qn),e(Ve,O),e(Ve,j),e(Ve,B),e(Ve,W),e(Ve,z),e(Ve,ve),e($e,Ee),e($e,X),e(X,Lt),e(Lt,Ie),e(Ie,At),e(Ie,K),e(Ie,st),e(st,ht),e(Lt,Ft),e(Lt,Mt),e(Mt,Os),e(Os,Cl),e(Cl,me),e(Os,Ct),e(Os,Ir),e(Ir,zn),e(Os,_c),e(Os,ua),e(ua,Yn),e(X,Vo),e(X,at),e(at,Ue),e(Ue,Zt),e(Ue,wc),e(Ue,Ls),e(Ls,fa),e(at,Po),e(at,Wn),e(Wn,qe),e(qe,Zr),e(Zr,Kn),e(qe,Ec),e(qe,pa),e(pa,Jn),e(re,ko),e(re,es),e(es,ts),e(ts,Dr),e(Dr,ze),e(ze,rs),e(rs,rn),e(Dr,Nl),e(Dr,Xn),e(Xn,va),e(es,jt),e(es,er),e(er,As),e(As,sn),e(sn,Vr),e(Vr,Fs),e(Fs,So),e(Vr,Qn),e(Vr,tr),e(tr,rr),e(rr,To),e(rr,Oe),e(rr,ga),e(rr,Oo),e(rr,Zn),e(sn,Gl),e(sn,an),e(an,Pr),e(Pr,Nt),e(Nt,mt),e(Nt,nn),e(Nt,Bl),e(Bl,el),e(Pr,ha),e(Pr,kr),e(kr,Gt),e(Gt,Hl),e(Hl,Le),e(Gt,Ms),e(Gt,$l),e($l,Lo),e(an,Cs),e(an,Sr),e(Sr,as),e(as,ns),e(as,tl),e(as,js),e(js,Ao),e(Sr,Rl),e(Sr,ma),e(ma,ls),e(ls,sr),e(sr,Tr),e(ls,ln),e(ls,Fi),e(Fi,rl),e(ls,Ns),e(ls,is),e(is,sl),e(re,al),e(re,Or),e(Or,Gs),e(Gs,ba),e(ba,bt),e(bt,ar),e(ar,xa),e(ba,nl),e(ba,nr),e(nr,Dd),e(Or,Fo),e(Or,be),e(be,nt),e(nt,Bt),e(Bt,lr),e(lr,Bs),e(Bs,Mo),e(lr,ll),e(lr,Ae),e(Ae,Fe),e(Fe,Co),e(Fe,jo),e(Fe,il),e(Fe,on),e(Fe,No),e(Fe,ol),e(Fe,ge),e(Fe,Ul),e(Fe,ql),e(Bt,Dc),e(Bt,Ye),e(Ye,xe),e(xe,lt),e(lt,Lr),e(lt,os),e(lt,Ht),e(Ht,cn),e(xe,cl),e(xe,Me),e(Me,it),e(it,Ar),e(Ar,Hs),e(it,Vc),e(it,ya),e(ya,cs),e(it,dn),e(it,un),e(un,Pc),e(Ye,$s),e(Ye,xt),e(xt,ds),e(ds,fn),e(ds,pn),e(ds,Fr),e(Fr,ot),e(xt,Mr),e(xt,us),e(us,Rs),e(Rs,zl),e(zl,$t),e(Rs,yt),e(Rs,ir),e(ir,kc),e(Rs,Go),e(Rs,_a),e(_a,Us),e(re,vn),e(re,We),e(We,Cr),e(Cr,fs),e(fs,wa),e(fs,qs),e(fs,ps),e(Cr,Mi),e(Cr,zs),e(zs,Bo),e(zs,or),e(zs,Ys),e(zs,Ho),e(We,ul),e(We,Ke),e(Ke,cr),e(cr,Ws),e(Ws,Ea),e(Ea,Ks),e(Ks,jr),e(Ws,Sc),e(Ws,vs),e(vs,_t),e(_t,Nr),e(Nr,Rt),e(_t,Yl),e(_t,fl),e(fl,pl),e(Ws,Ut),e(Ws,Gr),e(Gr,Ia),e(Ia,gn),e(Ia,$o),e(Ia,Wl),e(Wl,Js),e(cr,Da),e(cr,ct),e(ct,dr),e(ct,Tc),e(ct,Br),e(Br,ye),e(ye,dt),e(dt,mn),e(ye,Oc),e(ye,gs),e(gs,Va),e(ct,Pa),e(ct,wt),e(wt,Hr),e(Hr,Et),e(Hr,Lc),e(Hr,Jl),e(Jl,vl),e(Ke,Qs),e(Ke,It),e(It,hs),e(hs,bn),e(bn,ms),e(bn,$r),e(bn,ut),e(ut,xn),e(xn,Ro),e(ut,bs),e(ut,Pe),e(Pe,Rr),e(i,kd),e(i,ka),e(ka,de),e(de,Je),e(Je,ur),e(ur,Zs),e(de,Fc),e(de,ea),e(ea,xs),e(ka,yn),e(ka,qt),e(qt,Sa),e(Sa,Dt),e(Dt,Ur),e(Ur,ji),e(Dt,Uo),e(Dt,Ce),e(Ce,Ta),e(Ta,qo),e(Ce,Oa),e(Ce,Xe),e(Xe,ta),e(ta,zo),e(Xe,Yo),e(Xe,je),e(Sa,gl),e(Sa,Xl),e(Xl,pr),e(pr,_n),e(_n,Vt),e(Vt,ft),e(Vt,Ql),e(Vt,wn),e(wn,En),e(_n,Pt),e(_n,ra),e(ra,La),e(La,ys),e(ys,Ni),e(La,_s),e(La,Aa),e(Aa,Sd),e(La,hl),e(La,Gi),e(Gi,sa),e(pr,ml),e(pr,bl),e(bl,aa),e(aa,vr),e(aa,Mc),e(aa,ei),e(ei,xl),e(bl,ti),e(bl,yl),e(yl,Ne),e(Ne,In),e(In,Cc),e(Ne,Bi),e(Ne,qr),e(qr,Hi),e(Ne,jc),e(Ne,Fa),e(Fa,$i),e(Ne,Nc),e(Ne,Ri),e(Ri,ri),e(qt,Dn),e(qt,Qe),e(Qe,ws),e(ws,na),e(na,Vn),e(ws,Ui),e(ws,Ze),e(Ze,zr),e(zr,qi),e(Ze,zi),e(Ze,Yr),e(Yr,si),e(si,_l),e(Yr,Pn),e(Yr,kn),e(qt,wl),e(qt,Yi),e(Yi,Sn),e(Sn,ai),e(ai,Wr),e(Sn,Es),e(Sn,zt),e(zt,El),e(El,Gc),e(zt,Bc),e(zt,pt),e(pt,Is),e(Is,Wi),e(pt,Hc),e(pt,Il),e(n,Ca),e(n,ja),e(ja,Tn),e(Tn,Yt),e(ja,On),e(ja,Ds),e(Ds,Kr),e(Kr,Td),e(Ds,$c),e(Ds,_e),e(_e,hr),e(_e,Ki),e(_e,mr),e(_e,Rc),e(_e,Na)},p:le,i:le,o:le,d(ni){ni&&a(n)}}}class Y3 extends xc{constructor(n){super(),yc(this,n,null,z3,Ai,{})}}var Fl="top",Io="bottom",Do="right",Ml="left",Cb="auto",mg=[Fl,Io,Do,Ml],Hv="start",gg="end",W3="clippingParents",C_="viewport",dg="popper",K3="reference",Z5=mg.reduce(function(o,n){return o.concat([n+"-"+Hv,n+"-"+gg])},[]),j_=[].concat(mg,[Cb]).reduce(function(o,n){return o.concat([n,n+"-"+Hv,n+"-"+gg])},[]),J3="beforeRead",X3="read",Q3="afterRead",Z3="beforeMain",ew="main",tw="afterMain",rw="beforeWrite",sw="write",aw="afterWrite",nw=[J3,X3,Q3,Z3,ew,tw,rw,sw,aw];function Ed(o){return o?(o.nodeName||"").toLowerCase():null}function Li(o){if(o==null)return window;if(o.toString()!=="[object Window]"){var n=o.ownerDocument;return n&&n.defaultView||window}return o}function Tp(o){var n=Li(o).Element;return o instanceof n||o instanceof Element}function Eo(o){var n=Li(o).HTMLElement;return o instanceof n||o instanceof HTMLElement}function jb(o){if(typeof ShadowRoot>"u")return!1;var n=Li(o).ShadowRoot;return o instanceof n||o instanceof ShadowRoot}function lw(o){var n=o.state;Object.keys(n.elements).forEach(function(i){var c=n.styles[i]||{},d=n.attributes[i]||{},p=n.elements[i];!Eo(p)||!Ed(p)||(Object.assign(p.style,c),Object.keys(d).forEach(function(h){var v=d[h];v===!1?p.removeAttribute(h):p.setAttribute(h,v===!0?"":v)}))})}function iw(o){var n=o.state,i={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(n.elements.popper.style,i.popper),n.styles=i,n.elements.arrow&&Object.assign(n.elements.arrow.style,i.arrow),function(){Object.keys(n.elements).forEach(function(c){var d=n.elements[c],p=n.attributes[c]||{},h=Object.keys(n.styles.hasOwnProperty(c)?n.styles[c]:i[c]),v=h.reduce(function(g,w){return g[w]="",g},{});!Eo(d)||!Ed(d)||(Object.assign(d.style,v),Object.keys(p).forEach(function(g){d.removeAttribute(g)}))})}}const N_={name:"applyStyles",enabled:!0,phase:"write",fn:lw,effect:iw,requires:["computeStyles"]};function _d(o){return o.split("-")[0]}var Pp=Math.max,Zh=Math.min,$v=Math.round;function Tb(){var o=navigator.userAgentData;return o!=null&&o.brands&&Array.isArray(o.brands)?o.brands.map(function(n){return n.brand+"/"+n.version}).join(" "):navigator.userAgent}function G_(){return!/^((?!chrome|android).)*safari/i.test(Tb())}function Rv(o,n,i){n===void 0&&(n=!1),i===void 0&&(i=!1);var c=o.getBoundingClientRect(),d=1,p=1;n&&Eo(o)&&(d=o.offsetWidth>0&&$v(c.width)/o.offsetWidth||1,p=o.offsetHeight>0&&$v(c.height)/o.offsetHeight||1);var h=Tp(o)?Li(o):window,v=h.visualViewport,g=!G_()&&i,w=(c.left+(g&&v?v.offsetLeft:0))/d,y=(c.top+(g&&v?v.offsetTop:0))/p,_=c.width/d,E=c.height/p;return{width:_,height:E,top:y,right:w+_,bottom:y+E,left:w,x:w,y}}function Nb(o){var n=Rv(o),i=o.offsetWidth,c=o.offsetHeight;return Math.abs(n.width-i)<=1&&(i=n.width),Math.abs(n.height-c)<=1&&(c=n.height),{x:o.offsetLeft,y:o.offsetTop,width:i,height:c}}function B_(o,n){var i=n.getRootNode&&n.getRootNode();if(o.contains(n))return!0;if(i&&jb(i)){var c=n;do{if(c&&o.isSameNode(c))return!0;c=c.parentNode||c.host}while(c)}return!1}function Uu(o){return Li(o).getComputedStyle(o)}function ow(o){return["table","td","th"].indexOf(Ed(o))>=0}function qf(o){return((Tp(o)?o.ownerDocument:o.document)||window.document).documentElement}function tm(o){return Ed(o)==="html"?o:o.assignedSlot||o.parentNode||(jb(o)?o.host:null)||qf(o)}function e_(o){return!Eo(o)||Uu(o).position==="fixed"?null:o.offsetParent}function cw(o){var n=/firefox/i.test(Tb()),i=/Trident/i.test(Tb());if(i&&Eo(o)){var c=Uu(o);if(c.position==="fixed")return null}var d=tm(o);for(jb(d)&&(d=d.host);Eo(d)&&["html","body"].indexOf(Ed(d))<0;){var p=Uu(d);if(p.transform!=="none"||p.perspective!=="none"||p.contain==="paint"||["transform","perspective"].indexOf(p.willChange)!==-1||n&&p.willChange==="filter"||n&&p.filter&&p.filter!=="none")return d;d=d.parentNode}return null}function bg(o){for(var n=Li(o),i=e_(o);i&&ow(i)&&Uu(i).position==="static";)i=e_(i);return i&&(Ed(i)==="html"||Ed(i)==="body"&&Uu(i).position==="static")?n:i||cw(o)||n}function Gb(o){return["top","bottom"].indexOf(o)>=0?"x":"y"}function fg(o,n,i){return Pp(o,Zh(n,i))}function dw(o,n,i){var c=fg(o,n,i);return c>i?i:c}function H_(){return{top:0,right:0,bottom:0,left:0}}function $_(o){return Object.assign({},H_(),o)}function R_(o,n){return n.reduce(function(i,c){return i[c]=o,i},{})}var uw=function(n,i){return n=typeof n=="function"?n(Object.assign({},i.rects,{placement:i.placement})):n,$_(typeof n!="number"?n:R_(n,mg))};function fw(o){var n,i=o.state,c=o.name,d=o.options,p=i.elements.arrow,h=i.modifiersData.popperOffsets,v=_d(i.placement),g=Gb(v),w=[Ml,Do].indexOf(v)>=0,y=w?"height":"width";if(!(!p||!h)){var _=uw(d.padding,i),E=Nb(p),D=g==="y"?Fl:Ml,I=g==="y"?Io:Do,P=i.rects.reference[y]+i.rects.reference[g]-h[g]-i.rects.popper[y],V=h[g]-i.rects.reference[g],T=bg(p),A=T?g==="y"?T.clientHeight||0:T.clientWidth||0:0,M=P/2-V/2,x=_[D],F=A-E[y]-_[I],k=A/2-E[y]/2+M,N=fg(x,k,F),C=g;i.modifiersData[c]=(n={},n[C]=N,n.centerOffset=N-k,n)}}function pw(o){var n=o.state,i=o.options,c=i.element,d=c===void 0?"[data-popper-arrow]":c;d!=null&&(typeof d=="string"&&(d=n.elements.popper.querySelector(d),!d)||B_(n.elements.popper,d)&&(n.elements.arrow=d))}const vw={name:"arrow",enabled:!0,phase:"main",fn:fw,effect:pw,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Uv(o){return o.split("-")[1]}var gw={top:"auto",right:"auto",bottom:"auto",left:"auto"};function hw(o,n){var i=o.x,c=o.y,d=n.devicePixelRatio||1;return{x:$v(i*d)/d||0,y:$v(c*d)/d||0}}function t_(o){var n,i=o.popper,c=o.popperRect,d=o.placement,p=o.variation,h=o.offsets,v=o.position,g=o.gpuAcceleration,w=o.adaptive,y=o.roundOffsets,_=o.isFixed,E=h.x,D=E===void 0?0:E,I=h.y,P=I===void 0?0:I,V=typeof y=="function"?y({x:D,y:P}):{x:D,y:P};D=V.x,P=V.y;var T=h.hasOwnProperty("x"),A=h.hasOwnProperty("y"),M=Ml,x=Fl,F=window;if(w){var k=bg(i),N="clientHeight",C="clientWidth";if(k===Li(i)&&(k=qf(i),Uu(k).position!=="static"&&v==="absolute"&&(N="scrollHeight",C="scrollWidth")),k=k,d===Fl||(d===Ml||d===Do)&&p===gg){x=Io;var G=_&&k===F&&F.visualViewport?F.visualViewport.height:k[N];P-=G-c.height,P*=g?1:-1}if(d===Ml||(d===Fl||d===Io)&&p===gg){M=Do;var U=_&&k===F&&F.visualViewport?F.visualViewport.width:k[C];D-=U-c.width,D*=g?1:-1}}var $=Object.assign({position:v},w&&gw),q=y===!0?hw({x:D,y:P},Li(i)):{x:D,y:P};if(D=q.x,P=q.y,g){var J;return Object.assign({},$,(J={},J[x]=A?"0":"",J[M]=T?"0":"",J.transform=(F.devicePixelRatio||1)<=1?"translate("+D+"px, "+P+"px)":"translate3d("+D+"px, "+P+"px, 0)",J))}return Object.assign({},$,(n={},n[x]=A?P+"px":"",n[M]=T?D+"px":"",n.transform="",n))}function mw(o){var n=o.state,i=o.options,c=i.gpuAcceleration,d=c===void 0?!0:c,p=i.adaptive,h=p===void 0?!0:p,v=i.roundOffsets,g=v===void 0?!0:v,w={placement:_d(n.placement),variation:Uv(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:d,isFixed:n.options.strategy==="fixed"};n.modifiersData.popperOffsets!=null&&(n.styles.popper=Object.assign({},n.styles.popper,t_(Object.assign({},w,{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:h,roundOffsets:g})))),n.modifiersData.arrow!=null&&(n.styles.arrow=Object.assign({},n.styles.arrow,t_(Object.assign({},w,{offsets:n.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:g})))),n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-placement":n.placement})}const bw={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mw,data:{}};var Wh={passive:!0};function xw(o){var n=o.state,i=o.instance,c=o.options,d=c.scroll,p=d===void 0?!0:d,h=c.resize,v=h===void 0?!0:h,g=Li(n.elements.popper),w=[].concat(n.scrollParents.reference,n.scrollParents.popper);return p&&w.forEach(function(y){y.addEventListener("scroll",i.update,Wh)}),v&&g.addEventListener("resize",i.update,Wh),function(){p&&w.forEach(function(y){y.removeEventListener("scroll",i.update,Wh)}),v&&g.removeEventListener("resize",i.update,Wh)}}const yw={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:xw,data:{}};var _w={left:"right",right:"left",bottom:"top",top:"bottom"};function Jh(o){return o.replace(/left|right|bottom|top/g,function(n){return _w[n]})}var ww={start:"end",end:"start"};function r_(o){return o.replace(/start|end/g,function(n){return ww[n]})}function Bb(o){var n=Li(o),i=n.pageXOffset,c=n.pageYOffset;return{scrollLeft:i,scrollTop:c}}function Hb(o){return Rv(qf(o)).left+Bb(o).scrollLeft}function Ew(o,n){var i=Li(o),c=qf(o),d=i.visualViewport,p=c.clientWidth,h=c.clientHeight,v=0,g=0;if(d){p=d.width,h=d.height;var w=G_();(w||!w&&n==="fixed")&&(v=d.offsetLeft,g=d.offsetTop)}return{width:p,height:h,x:v+Hb(o),y:g}}function Iw(o){var n,i=qf(o),c=Bb(o),d=(n=o.ownerDocument)==null?void 0:n.body,p=Pp(i.scrollWidth,i.clientWidth,d?d.scrollWidth:0,d?d.clientWidth:0),h=Pp(i.scrollHeight,i.clientHeight,d?d.scrollHeight:0,d?d.clientHeight:0),v=-c.scrollLeft+Hb(o),g=-c.scrollTop;return Uu(d||i).direction==="rtl"&&(v+=Pp(i.clientWidth,d?d.clientWidth:0)-p),{width:p,height:h,x:v,y:g}}function $b(o){var n=Uu(o),i=n.overflow,c=n.overflowX,d=n.overflowY;return/auto|scroll|overlay|hidden/.test(i+d+c)}function U_(o){return["html","body","#document"].indexOf(Ed(o))>=0?o.ownerDocument.body:Eo(o)&&$b(o)?o:U_(tm(o))}function pg(o,n){var i;n===void 0&&(n=[]);var c=U_(o),d=c===((i=o.ownerDocument)==null?void 0:i.body),p=Li(c),h=d?[p].concat(p.visualViewport||[],$b(c)?c:[]):c,v=n.concat(h);return d?v:v.concat(pg(tm(h)))}function Ob(o){return Object.assign({},o,{left:o.x,top:o.y,right:o.x+o.width,bottom:o.y+o.height})}function Dw(o,n){var i=Rv(o,!1,n==="fixed");return i.top=i.top+o.clientTop,i.left=i.left+o.clientLeft,i.bottom=i.top+o.clientHeight,i.right=i.left+o.clientWidth,i.width=o.clientWidth,i.height=o.clientHeight,i.x=i.left,i.y=i.top,i}function s_(o,n,i){return n===C_?Ob(Ew(o,i)):Tp(n)?Dw(n,i):Ob(Iw(qf(o)))}function Vw(o){var n=pg(tm(o)),i=["absolute","fixed"].indexOf(Uu(o).position)>=0,c=i&&Eo(o)?bg(o):o;return Tp(c)?n.filter(function(d){return Tp(d)&&B_(d,c)&&Ed(d)!=="body"}):[]}function Pw(o,n,i,c){var d=n==="clippingParents"?Vw(o):[].concat(n),p=[].concat(d,[i]),h=p[0],v=p.reduce(function(g,w){var y=s_(o,w,c);return g.top=Pp(y.top,g.top),g.right=Zh(y.right,g.right),g.bottom=Zh(y.bottom,g.bottom),g.left=Pp(y.left,g.left),g},s_(o,h,c));return v.width=v.right-v.left,v.height=v.bottom-v.top,v.x=v.left,v.y=v.top,v}function q_(o){var n=o.reference,i=o.element,c=o.placement,d=c?_d(c):null,p=c?Uv(c):null,h=n.x+n.width/2-i.width/2,v=n.y+n.height/2-i.height/2,g;switch(d){case Fl:g={x:h,y:n.y-i.height};break;case Io:g={x:h,y:n.y+n.height};break;case Do:g={x:n.x+n.width,y:v};break;case Ml:g={x:n.x-i.width,y:v};break;default:g={x:n.x,y:n.y}}var w=d?Gb(d):null;if(w!=null){var y=w==="y"?"height":"width";switch(p){case Hv:g[w]=g[w]-(n[y]/2-i[y]/2);break;case gg:g[w]=g[w]+(n[y]/2-i[y]/2);break}}return g}function hg(o,n){n===void 0&&(n={});var i=n,c=i.placement,d=c===void 0?o.placement:c,p=i.strategy,h=p===void 0?o.strategy:p,v=i.boundary,g=v===void 0?W3:v,w=i.rootBoundary,y=w===void 0?C_:w,_=i.elementContext,E=_===void 0?dg:_,D=i.altBoundary,I=D===void 0?!1:D,P=i.padding,V=P===void 0?0:P,T=$_(typeof V!="number"?V:R_(V,mg)),A=E===dg?K3:dg,M=o.rects.popper,x=o.elements[I?A:E],F=Pw(Tp(x)?x:x.contextElement||qf(o.elements.popper),g,y,h),k=Rv(o.elements.reference),N=q_({reference:k,element:M,strategy:"absolute",placement:d}),C=Ob(Object.assign({},M,N)),G=E===dg?C:k,U={top:F.top-G.top+T.top,bottom:G.bottom-F.bottom+T.bottom,left:F.left-G.left+T.left,right:G.right-F.right+T.right},$=o.modifiersData.offset;if(E===dg&&$){var q=$[d];Object.keys(U).forEach(function(J){var ae=[Do,Io].indexOf(J)>=0?1:-1,ie=[Fl,Io].indexOf(J)>=0?"y":"x";U[J]+=q[ie]*ae})}return U}function kw(o,n){n===void 0&&(n={});var i=n,c=i.placement,d=i.boundary,p=i.rootBoundary,h=i.padding,v=i.flipVariations,g=i.allowedAutoPlacements,w=g===void 0?j_:g,y=Uv(c),_=y?v?Z5:Z5.filter(function(I){return Uv(I)===y}):mg,E=_.filter(function(I){return w.indexOf(I)>=0});E.length===0&&(E=_);var D=E.reduce(function(I,P){return I[P]=hg(o,{placement:P,boundary:d,rootBoundary:p,padding:h})[_d(P)],I},{});return Object.keys(D).sort(function(I,P){return D[I]-D[P]})}function Sw(o){if(_d(o)===Cb)return[];var n=Jh(o);return[r_(o),n,r_(n)]}function Tw(o){var n=o.state,i=o.options,c=o.name;if(!n.modifiersData[c]._skip){for(var d=i.mainAxis,p=d===void 0?!0:d,h=i.altAxis,v=h===void 0?!0:h,g=i.fallbackPlacements,w=i.padding,y=i.boundary,_=i.rootBoundary,E=i.altBoundary,D=i.flipVariations,I=D===void 0?!0:D,P=i.allowedAutoPlacements,V=n.options.placement,T=_d(V),A=T===V,M=g||(A||!I?[Jh(V)]:Sw(V)),x=[V].concat(M).reduce(function(yr,et){return yr.concat(_d(et)===Cb?kw(n,{placement:et,boundary:y,rootBoundary:_,padding:w,flipVariations:I,allowedAutoPlacements:P}):et)},[]),F=n.rects.reference,k=n.rects.popper,N=new Map,C=!0,G=x[0],U=0;U<x.length;U++){var $=x[U],q=_d($),J=Uv($)===Hv,ae=[Fl,Io].indexOf(q)>=0,ie=ae?"width":"height",Q=hg(n,{placement:$,boundary:y,rootBoundary:_,altBoundary:E,padding:w}),Z=ae?J?Do:Ml:J?Io:Fl;F[ie]>k[ie]&&(Z=Jh(Z));var ee=Jh(Z),fe=[];if(p&&fe.push(Q[q]<=0),v&&fe.push(Q[Z]<=0,Q[ee]<=0),fe.every(function(yr){return yr})){G=$,C=!1;break}N.set($,fe)}if(C)for(var Ge=I?3:1,vt=function(et){var ce=x.find(function(we){var Be=N.get(we);if(Be)return Be.slice(0,et).every(function(Xt){return Xt})});if(ce)return G=ce,"break"},R=Ge;R>0;R--){var ke=vt(R);if(ke==="break")break}n.placement!==G&&(n.modifiersData[c]._skip=!0,n.placement=G,n.reset=!0)}}const Ow={name:"flip",enabled:!0,phase:"main",fn:Tw,requiresIfExists:["offset"],data:{_skip:!1}};function a_(o,n,i){return i===void 0&&(i={x:0,y:0}),{top:o.top-n.height-i.y,right:o.right-n.width+i.x,bottom:o.bottom-n.height+i.y,left:o.left-n.width-i.x}}function n_(o){return[Fl,Do,Io,Ml].some(function(n){return o[n]>=0})}function Lw(o){var n=o.state,i=o.name,c=n.rects.reference,d=n.rects.popper,p=n.modifiersData.preventOverflow,h=hg(n,{elementContext:"reference"}),v=hg(n,{altBoundary:!0}),g=a_(h,c),w=a_(v,d,p),y=n_(g),_=n_(w);n.modifiersData[i]={referenceClippingOffsets:g,popperEscapeOffsets:w,isReferenceHidden:y,hasPopperEscaped:_},n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-reference-hidden":y,"data-popper-escaped":_})}const Aw={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Lw};function Fw(o,n,i){var c=_d(o),d=[Ml,Fl].indexOf(c)>=0?-1:1,p=typeof i=="function"?i(Object.assign({},n,{placement:o})):i,h=p[0],v=p[1];return h=h||0,v=(v||0)*d,[Ml,Do].indexOf(c)>=0?{x:v,y:h}:{x:h,y:v}}function Mw(o){var n=o.state,i=o.options,c=o.name,d=i.offset,p=d===void 0?[0,0]:d,h=j_.reduce(function(y,_){return y[_]=Fw(_,n.rects,p),y},{}),v=h[n.placement],g=v.x,w=v.y;n.modifiersData.popperOffsets!=null&&(n.modifiersData.popperOffsets.x+=g,n.modifiersData.popperOffsets.y+=w),n.modifiersData[c]=h}const Cw={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Mw};function jw(o){var n=o.state,i=o.name;n.modifiersData[i]=q_({reference:n.rects.reference,element:n.rects.popper,strategy:"absolute",placement:n.placement})}const Nw={name:"popperOffsets",enabled:!0,phase:"read",fn:jw,data:{}};function Gw(o){return o==="x"?"y":"x"}function Bw(o){var n=o.state,i=o.options,c=o.name,d=i.mainAxis,p=d===void 0?!0:d,h=i.altAxis,v=h===void 0?!1:h,g=i.boundary,w=i.rootBoundary,y=i.altBoundary,_=i.padding,E=i.tether,D=E===void 0?!0:E,I=i.tetherOffset,P=I===void 0?0:I,V=hg(n,{boundary:g,rootBoundary:w,padding:_,altBoundary:y}),T=_d(n.placement),A=Uv(n.placement),M=!A,x=Gb(T),F=Gw(x),k=n.modifiersData.popperOffsets,N=n.rects.reference,C=n.rects.popper,G=typeof P=="function"?P(Object.assign({},n.rects,{placement:n.placement})):P,U=typeof G=="number"?{mainAxis:G,altAxis:G}:Object.assign({mainAxis:0,altAxis:0},G),$=n.modifiersData.offset?n.modifiersData.offset[n.placement]:null,q={x:0,y:0};if(k){if(p){var J,ae=x==="y"?Fl:Ml,ie=x==="y"?Io:Do,Q=x==="y"?"height":"width",Z=k[x],ee=Z+V[ae],fe=Z-V[ie],Ge=D?-C[Q]/2:0,vt=A===Hv?N[Q]:C[Q],R=A===Hv?-C[Q]:-N[Q],ke=n.elements.arrow,yr=D&&ke?Nb(ke):{width:0,height:0},et=n.modifiersData["arrow#persistent"]?n.modifiersData["arrow#persistent"].padding:H_(),ce=et[ae],we=et[ie],Be=fg(0,N[Q],yr[Q]),Xt=M?N[Q]/2-Ge-Be-ce-U.mainAxis:vt-Be-ce-U.mainAxis,He=M?-N[Q]/2+Ge+Be+we+U.mainAxis:R+Be+we+U.mainAxis,re=n.elements.arrow&&bg(n.elements.arrow),_r=re?x==="y"?re.clientTop||0:re.clientLeft||0:0,St=(J=$==null?void 0:$[x])!=null?J:0,tt=Z+Xt-St-_r,gt=Z+He-St,pe=fg(D?Zh(ee,tt):ee,Z,D?Pp(fe,gt):fe);k[x]=pe,q[x]=pe-Z}if(v){var wr,Ts=x==="x"?Fl:Ml,Tt=x==="x"?Io:Do,De=k[F],oe=F==="y"?"height":"width",Ot=De+V[Ts],rt=De-V[Tt],$e=[Fl,Ml].indexOf(T)!==-1,Se=(wr=$==null?void 0:$[F])!=null?wr:0,Re=$e?Ot:De-N[oe]-C[oe]-Se+U.altAxis,Za=$e?De+N[oe]+C[oe]-Se-U.altAxis:rt,Qt=D&&$e?dw(Re,De,Za):fg(D?Re:Ot,De,D?Za:rt);k[F]=Qt,q[F]=Qt-De}n.modifiersData[c]=q}}const Hw={name:"preventOverflow",enabled:!0,phase:"main",fn:Bw,requiresIfExists:["offset"]};function $w(o){return{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}}function Rw(o){return o===Li(o)||!Eo(o)?Bb(o):$w(o)}function Uw(o){var n=o.getBoundingClientRect(),i=$v(n.width)/o.offsetWidth||1,c=$v(n.height)/o.offsetHeight||1;return i!==1||c!==1}function qw(o,n,i){i===void 0&&(i=!1);var c=Eo(n),d=Eo(n)&&Uw(n),p=qf(n),h=Rv(o,d,i),v={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(c||!c&&!i)&&((Ed(n)!=="body"||$b(p))&&(v=Rw(n)),Eo(n)?(g=Rv(n,!0),g.x+=n.clientLeft,g.y+=n.clientTop):p&&(g.x=Hb(p))),{x:h.left+v.scrollLeft-g.x,y:h.top+v.scrollTop-g.y,width:h.width,height:h.height}}function zw(o){var n=new Map,i=new Set,c=[];o.forEach(function(p){n.set(p.name,p)});function d(p){i.add(p.name);var h=[].concat(p.requires||[],p.requiresIfExists||[]);h.forEach(function(v){if(!i.has(v)){var g=n.get(v);g&&d(g)}}),c.push(p)}return o.forEach(function(p){i.has(p.name)||d(p)}),c}function Yw(o){var n=zw(o);return nw.reduce(function(i,c){return i.concat(n.filter(function(d){return d.phase===c}))},[])}function Ww(o){var n;return function(){return n||(n=new Promise(function(i){Promise.resolve().then(function(){n=void 0,i(o())})})),n}}function Kw(o){var n=o.reduce(function(i,c){var d=i[c.name];return i[c.name]=d?Object.assign({},d,c,{options:Object.assign({},d.options,c.options),data:Object.assign({},d.data,c.data)}):c,i},{});return Object.keys(n).map(function(i){return n[i]})}var l_={placement:"bottom",modifiers:[],strategy:"absolute"};function i_(){for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return!n.some(function(c){return!(c&&typeof c.getBoundingClientRect=="function")})}function Jw(o){o===void 0&&(o={});var n=o,i=n.defaultModifiers,c=i===void 0?[]:i,d=n.defaultOptions,p=d===void 0?l_:d;return function(v,g,w){w===void 0&&(w=p);var y={placement:"bottom",orderedModifiers:[],options:Object.assign({},l_,p),modifiersData:{},elements:{reference:v,popper:g},attributes:{},styles:{}},_=[],E=!1,D={state:y,setOptions:function(T){var A=typeof T=="function"?T(y.options):T;P(),y.options=Object.assign({},p,y.options,A),y.scrollParents={reference:Tp(v)?pg(v):v.contextElement?pg(v.contextElement):[],popper:pg(g)};var M=Yw(Kw([].concat(c,y.options.modifiers)));return y.orderedModifiers=M.filter(function(x){return x.enabled}),I(),D.update()},forceUpdate:function(){if(!E){var T=y.elements,A=T.reference,M=T.popper;if(i_(A,M)){y.rects={reference:qw(A,bg(M),y.options.strategy==="fixed"),popper:Nb(M)},y.reset=!1,y.placement=y.options.placement,y.orderedModifiers.forEach(function(U){return y.modifiersData[U.name]=Object.assign({},U.data)});for(var x=0;x<y.orderedModifiers.length;x++){if(y.reset===!0){y.reset=!1,x=-1;continue}var F=y.orderedModifiers[x],k=F.fn,N=F.options,C=N===void 0?{}:N,G=F.name;typeof k=="function"&&(y=k({state:y,options:C,name:G,instance:D})||y)}}}},update:Ww(function(){return new Promise(function(V){D.forceUpdate(),V(y)})}),destroy:function(){P(),E=!0}};if(!i_(v,g))return D;D.setOptions(w).then(function(V){!E&&w.onFirstUpdate&&w.onFirstUpdate(V)});function I(){y.orderedModifiers.forEach(function(V){var T=V.name,A=V.options,M=A===void 0?{}:A,x=V.effect;if(typeof x=="function"){var F=x({state:y,name:T,instance:D,options:M}),k=function(){};_.push(F||k)}})}function P(){_.forEach(function(V){return V()}),_=[]}return D}}var Xw=[yw,Nw,bw,N_,Cw,Ow,Hw,vw,Aw],Qw=Jw({defaultModifiers:Xw}),Zw="tippy-box",z_="tippy-content",eE="tippy-backdrop",Y_="tippy-arrow",W_="tippy-svg-arrow",Dp={passive:!0,capture:!0},K_=function(){return document.body};function Ib(o,n,i){if(Array.isArray(o)){var c=o[n];return c??(Array.isArray(i)?i[n]:i)}return o}function Rb(o,n){var i={}.toString.call(o);return i.indexOf("[object")===0&&i.indexOf(n+"]")>-1}function J_(o,n){return typeof o=="function"?o.apply(void 0,n):o}function o_(o,n){if(n===0)return o;var i;return function(c){clearTimeout(i),i=setTimeout(function(){o(c)},n)}}function tE(o){return o.split(/\s+/).filter(Boolean)}function Bv(o){return[].concat(o)}function c_(o,n){o.indexOf(n)===-1&&o.push(n)}function rE(o){return o.filter(function(n,i){return o.indexOf(n)===i})}function sE(o){return o.split("-")[0]}function em(o){return[].slice.call(o)}function d_(o){return Object.keys(o).reduce(function(n,i){return o[i]!==void 0&&(n[i]=o[i]),n},{})}function vg(){return document.createElement("div")}function rm(o){return["Element","Fragment"].some(function(n){return Rb(o,n)})}function aE(o){return Rb(o,"NodeList")}function nE(o){return Rb(o,"MouseEvent")}function lE(o){return!!(o&&o._tippy&&o._tippy.reference===o)}function iE(o){return rm(o)?[o]:aE(o)?em(o):Array.isArray(o)?o:em(document.querySelectorAll(o))}function Db(o,n){o.forEach(function(i){i&&(i.style.transitionDuration=n+"ms")})}function u_(o,n){o.forEach(function(i){i&&i.setAttribute("data-state",n)})}function oE(o){var n,i=Bv(o),c=i[0];return c!=null&&(n=c.ownerDocument)!=null&&n.body?c.ownerDocument:document}function cE(o,n){var i=n.clientX,c=n.clientY;return o.every(function(d){var p=d.popperRect,h=d.popperState,v=d.props,g=v.interactiveBorder,w=sE(h.placement),y=h.modifiersData.offset;if(!y)return!0;var _=w==="bottom"?y.top.y:0,E=w==="top"?y.bottom.y:0,D=w==="right"?y.left.x:0,I=w==="left"?y.right.x:0,P=p.top-c+_>g,V=c-p.bottom-E>g,T=p.left-i+D>g,A=i-p.right-I>g;return P||V||T||A})}function Vb(o,n,i){var c=n+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(d){o[c](d,i)})}function f_(o,n){for(var i=n;i;){var c;if(o.contains(i))return!0;i=i.getRootNode==null||(c=i.getRootNode())==null?void 0:c.host}return!1}var xd={isTouch:!1},p_=0;function dE(){xd.isTouch||(xd.isTouch=!0,window.performance&&document.addEventListener("mousemove",X_))}function X_(){var o=performance.now();o-p_<20&&(xd.isTouch=!1,document.removeEventListener("mousemove",X_)),p_=o}function uE(){var o=document.activeElement;if(lE(o)){var n=o._tippy;o.blur&&!n.state.isVisible&&o.blur()}}function fE(){document.addEventListener("touchstart",dE,Dp),window.addEventListener("blur",uE)}var pE=typeof window<"u"&&typeof document<"u",vE=pE?!!window.msCrypto:!1,gE={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},hE={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},bc=Object.assign({appendTo:K_,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},gE,hE),mE=Object.keys(bc),bE=function(n){var i=Object.keys(n);i.forEach(function(c){bc[c]=n[c]})};function Q_(o){var n=o.plugins||[],i=n.reduce(function(c,d){var p=d.name,h=d.defaultValue;if(p){var v;c[p]=o[p]!==void 0?o[p]:(v=bc[p])!=null?v:h}return c},{});return Object.assign({},o,i)}function xE(o,n){var i=n?Object.keys(Q_(Object.assign({},bc,{plugins:n}))):mE,c=i.reduce(function(d,p){var h=(o.getAttribute("data-tippy-"+p)||"").trim();if(!h)return d;if(p==="content")d[p]=h;else try{d[p]=JSON.parse(h)}catch{d[p]=h}return d},{});return c}function v_(o,n){var i=Object.assign({},n,{content:J_(n.content,[o])},n.ignoreAttributes?{}:xE(o,n.plugins));return i.aria=Object.assign({},bc.aria,i.aria),i.aria={expanded:i.aria.expanded==="auto"?n.interactive:i.aria.expanded,content:i.aria.content==="auto"?n.interactive?null:"describedby":i.aria.content},i}var yE=function(){return"innerHTML"};function Lb(o,n){o[yE()]=n}function g_(o){var n=vg();return o===!0?n.className=Y_:(n.className=W_,rm(o)?n.appendChild(o):Lb(n,o)),n}function h_(o,n){rm(n.content)?(Lb(o,""),o.appendChild(n.content)):typeof n.content!="function"&&(n.allowHTML?Lb(o,n.content):o.textContent=n.content)}function Ab(o){var n=o.firstElementChild,i=em(n.children);return{box:n,content:i.find(function(c){return c.classList.contains(z_)}),arrow:i.find(function(c){return c.classList.contains(Y_)||c.classList.contains(W_)}),backdrop:i.find(function(c){return c.classList.contains(eE)})}}function Z_(o){var n=vg(),i=vg();i.className=Zw,i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var c=vg();c.className=z_,c.setAttribute("data-state","hidden"),h_(c,o.props),n.appendChild(i),i.appendChild(c),d(o.props,o.props);function d(p,h){var v=Ab(n),g=v.box,w=v.content,y=v.arrow;h.theme?g.setAttribute("data-theme",h.theme):g.removeAttribute("data-theme"),typeof h.animation=="string"?g.setAttribute("data-animation",h.animation):g.removeAttribute("data-animation"),h.inertia?g.setAttribute("data-inertia",""):g.removeAttribute("data-inertia"),g.style.maxWidth=typeof h.maxWidth=="number"?h.maxWidth+"px":h.maxWidth,h.role?g.setAttribute("role",h.role):g.removeAttribute("role"),(p.content!==h.content||p.allowHTML!==h.allowHTML)&&h_(w,o.props),h.arrow?y?p.arrow!==h.arrow&&(g.removeChild(y),g.appendChild(g_(h.arrow))):g.appendChild(g_(h.arrow)):y&&g.removeChild(y)}return{popper:n,onUpdate:d}}Z_.$$tippy=!0;var _E=1,Kh=[],Pb=[];function wE(o,n){var i=v_(o,Object.assign({},bc,Q_(d_(n)))),c,d,p,h=!1,v=!1,g=!1,w=!1,y,_,E,D=[],I=o_(tt,i.interactiveDebounce),P,V=_E++,T=null,A=rE(i.plugins),M={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},x={id:V,reference:o,popper:vg(),popperInstance:T,props:i,state:M,plugins:A,clearDelayTimeouts:Re,setProps:Za,setContent:Qt,show:Te,hide:Ve,hideWithInteractivity:Er,enable:$e,disable:Se,unmount:en,destroy:qn};if(!i.render)return x;var F=i.render(x),k=F.popper,N=F.onUpdate;k.setAttribute("data-tippy-root",""),k.id="tippy-"+x.id,x.popper=k,o._tippy=x,k._tippy=x;var C=A.map(function(O){return O.fn(x)}),G=o.hasAttribute("aria-expanded");return re(),Ge(),Z(),ee("onCreate",[x]),i.showOnCreate&&Ot(),k.addEventListener("mouseenter",function(){x.props.interactive&&x.state.isVisible&&x.clearDelayTimeouts()}),k.addEventListener("mouseleave",function(){x.props.interactive&&x.props.trigger.indexOf("mouseenter")>=0&&ae().addEventListener("mousemove",I)}),x;function U(){var O=x.props.touch;return Array.isArray(O)?O:[O,0]}function $(){return U()[0]==="hold"}function q(){var O;return!!((O=x.props.render)!=null&&O.$$tippy)}function J(){return P||o}function ae(){var O=J().parentNode;return O?oE(O):document}function ie(){return Ab(k)}function Q(O){return x.state.isMounted&&!x.state.isVisible||xd.isTouch||y&&y.type==="focus"?0:Ib(x.props.delay,O?0:1,bc.delay)}function Z(O){O===void 0&&(O=!1),k.style.pointerEvents=x.props.interactive&&!O?"":"none",k.style.zIndex=""+x.props.zIndex}function ee(O,j,B){if(B===void 0&&(B=!0),C.forEach(function(z){z[O]&&z[O].apply(z,j)}),B){var W;(W=x.props)[O].apply(W,j)}}function fe(){var O=x.props.aria;if(O.content){var j="aria-"+O.content,B=k.id,W=Bv(x.props.triggerTarget||o);W.forEach(function(z){var ve=z.getAttribute(j);if(x.state.isVisible)z.setAttribute(j,ve?ve+" "+B:B);else{var Ee=ve&&ve.replace(B,"").trim();Ee?z.setAttribute(j,Ee):z.removeAttribute(j)}})}}function Ge(){if(!(G||!x.props.aria.expanded)){var O=Bv(x.props.triggerTarget||o);O.forEach(function(j){x.props.interactive?j.setAttribute("aria-expanded",x.state.isVisible&&j===J()?"true":"false"):j.removeAttribute("aria-expanded")})}}function vt(){ae().removeEventListener("mousemove",I),Kh=Kh.filter(function(O){return O!==I})}function R(O){if(!(xd.isTouch&&(g||O.type==="mousedown"))){var j=O.composedPath&&O.composedPath()[0]||O.target;if(!(x.props.interactive&&f_(k,j))){if(Bv(x.props.triggerTarget||o).some(function(B){return f_(B,j)})){if(xd.isTouch||x.state.isVisible&&x.props.trigger.indexOf("click")>=0)return}else ee("onClickOutside",[x,O]);x.props.hideOnClick===!0&&(x.clearDelayTimeouts(),x.hide(),v=!0,setTimeout(function(){v=!1}),x.state.isMounted||ce())}}}function ke(){g=!0}function yr(){g=!1}function et(){var O=ae();O.addEventListener("mousedown",R,!0),O.addEventListener("touchend",R,Dp),O.addEventListener("touchstart",yr,Dp),O.addEventListener("touchmove",ke,Dp)}function ce(){var O=ae();O.removeEventListener("mousedown",R,!0),O.removeEventListener("touchend",R,Dp),O.removeEventListener("touchstart",yr,Dp),O.removeEventListener("touchmove",ke,Dp)}function we(O,j){Xt(O,function(){!x.state.isVisible&&k.parentNode&&k.parentNode.contains(k)&&j()})}function Be(O,j){Xt(O,j)}function Xt(O,j){var B=ie().box;function W(z){z.target===B&&(Vb(B,"remove",W),j())}if(O===0)return j();Vb(B,"remove",_),Vb(B,"add",W),_=W}function He(O,j,B){B===void 0&&(B=!1);var W=Bv(x.props.triggerTarget||o);W.forEach(function(z){z.addEventListener(O,j,B),D.push({node:z,eventType:O,handler:j,options:B})})}function re(){$()&&(He("touchstart",St,{passive:!0}),He("touchend",gt,{passive:!0})),tE(x.props.trigger).forEach(function(O){if(O!=="manual")switch(He(O,St),O){case"mouseenter":He("mouseleave",gt);break;case"focus":He(vE?"focusout":"blur",pe);break;case"focusin":He("focusout",pe);break}})}function _r(){D.forEach(function(O){var j=O.node,B=O.eventType,W=O.handler,z=O.options;j.removeEventListener(B,W,z)}),D=[]}function St(O){var j,B=!1;if(!(!x.state.isEnabled||wr(O)||v)){var W=((j=y)==null?void 0:j.type)==="focus";y=O,P=O.currentTarget,Ge(),!x.state.isVisible&&nE(O)&&Kh.forEach(function(z){return z(O)}),O.type==="click"&&(x.props.trigger.indexOf("mouseenter")<0||h)&&x.props.hideOnClick!==!1&&x.state.isVisible?B=!0:Ot(O),O.type==="click"&&(h=!B),B&&!W&&rt(O)}}function tt(O){var j=O.target,B=J().contains(j)||k.contains(j);if(!(O.type==="mousemove"&&B)){var W=oe().concat(k).map(function(z){var ve,Ee=z._tippy,X=(ve=Ee.popperInstance)==null?void 0:ve.state;return X?{popperRect:z.getBoundingClientRect(),popperState:X,props:i}:null}).filter(Boolean);cE(W,O)&&(vt(),rt(O))}}function gt(O){var j=wr(O)||x.props.trigger.indexOf("click")>=0&&h;if(!j){if(x.props.interactive){x.hideWithInteractivity(O);return}rt(O)}}function pe(O){x.props.trigger.indexOf("focusin")<0&&O.target!==J()||x.props.interactive&&O.relatedTarget&&k.contains(O.relatedTarget)||rt(O)}function wr(O){return xd.isTouch?$()!==O.type.indexOf("touch")>=0:!1}function Ts(){Tt();var O=x.props,j=O.popperOptions,B=O.placement,W=O.offset,z=O.getReferenceClientRect,ve=O.moveTransition,Ee=q()?Ab(k).arrow:null,X=z?{getBoundingClientRect:z,contextElement:z.contextElement||J()}:o,Lt={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(tn){var K=tn.state;if(q()){var st=ie(),ht=st.box;["placement","reference-hidden","escaped"].forEach(function(Ft){Ft==="placement"?ht.setAttribute("data-placement",K.placement):K.attributes.popper["data-popper-"+Ft]?ht.setAttribute("data-"+Ft,""):ht.removeAttribute("data-"+Ft)}),K.attributes.popper={}}}},Ie=[{name:"offset",options:{offset:W}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!ve}},Lt];q()&&Ee&&Ie.push({name:"arrow",options:{element:Ee,padding:3}}),Ie.push.apply(Ie,(j==null?void 0:j.modifiers)||[]),x.popperInstance=Qw(X,k,Object.assign({},j,{placement:B,onFirstUpdate:E,modifiers:Ie}))}function Tt(){x.popperInstance&&(x.popperInstance.destroy(),x.popperInstance=null)}function De(){var O=x.props.appendTo,j,B=J();x.props.interactive&&O===K_||O==="parent"?j=B.parentNode:j=J_(O,[B]),j.contains(k)||j.appendChild(k),x.state.isMounted=!0,Ts()}function oe(){return em(k.querySelectorAll("[data-tippy-root]"))}function Ot(O){x.clearDelayTimeouts(),O&&ee("onTrigger",[x,O]),et();var j=Q(!0),B=U(),W=B[0],z=B[1];xd.isTouch&&W==="hold"&&z&&(j=z),j?c=setTimeout(function(){x.show()},j):x.show()}function rt(O){if(x.clearDelayTimeouts(),ee("onUntrigger",[x,O]),!x.state.isVisible){ce();return}if(!(x.props.trigger.indexOf("mouseenter")>=0&&x.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(O.type)>=0&&h)){var j=Q(!1);j?d=setTimeout(function(){x.state.isVisible&&x.hide()},j):p=requestAnimationFrame(function(){x.hide()})}}function $e(){x.state.isEnabled=!0}function Se(){x.hide(),x.state.isEnabled=!1}function Re(){clearTimeout(c),clearTimeout(d),cancelAnimationFrame(p)}function Za(O){if(!x.state.isDestroyed){ee("onBeforeUpdate",[x,O]),_r();var j=x.props,B=v_(o,Object.assign({},j,d_(O),{ignoreAttributes:!0}));x.props=B,re(),j.interactiveDebounce!==B.interactiveDebounce&&(vt(),I=o_(tt,B.interactiveDebounce)),j.triggerTarget&&!B.triggerTarget?Bv(j.triggerTarget).forEach(function(W){W.removeAttribute("aria-expanded")}):B.triggerTarget&&o.removeAttribute("aria-expanded"),Ge(),Z(),N&&N(j,B),x.popperInstance&&(Ts(),oe().forEach(function(W){requestAnimationFrame(W._tippy.popperInstance.forceUpdate)})),ee("onAfterUpdate",[x,O])}}function Qt(O){x.setProps({content:O})}function Te(){var O=x.state.isVisible,j=x.state.isDestroyed,B=!x.state.isEnabled,W=xd.isTouch&&!x.props.touch,z=Ib(x.props.duration,0,bc.duration);if(!(O||j||B||W)&&!J().hasAttribute("disabled")&&(ee("onShow",[x],!1),x.props.onShow(x)!==!1)){if(x.state.isVisible=!0,q()&&(k.style.visibility="visible"),Z(),et(),x.state.isMounted||(k.style.transition="none"),q()){var ve=ie(),Ee=ve.box,X=ve.content;Db([Ee,X],0)}E=function(){var Ie;if(!(!x.state.isVisible||w)){if(w=!0,k.offsetHeight,k.style.transition=x.props.moveTransition,q()&&x.props.animation){var At=ie(),tn=At.box,K=At.content;Db([tn,K],z),u_([tn,K],"visible")}fe(),Ge(),c_(Pb,x),(Ie=x.popperInstance)==null||Ie.forceUpdate(),ee("onMount",[x]),x.props.animation&&q()&&Be(z,function(){x.state.isShown=!0,ee("onShown",[x])})}},De()}}function Ve(){var O=!x.state.isVisible,j=x.state.isDestroyed,B=!x.state.isEnabled,W=Ib(x.props.duration,1,bc.duration);if(!(O||j||B)&&(ee("onHide",[x],!1),x.props.onHide(x)!==!1)){if(x.state.isVisible=!1,x.state.isShown=!1,w=!1,h=!1,q()&&(k.style.visibility="hidden"),vt(),ce(),Z(!0),q()){var z=ie(),ve=z.box,Ee=z.content;x.props.animation&&(Db([ve,Ee],W),u_([ve,Ee],"hidden"))}fe(),Ge(),x.props.animation?q()&&we(W,x.unmount):x.unmount()}}function Er(O){ae().addEventListener("mousemove",I),c_(Kh,I),I(O)}function en(){x.state.isVisible&&x.hide(),x.state.isMounted&&(Tt(),oe().forEach(function(O){O._tippy.unmount()}),k.parentNode&&k.parentNode.removeChild(k),Pb=Pb.filter(function(O){return O!==x}),x.state.isMounted=!1,ee("onHidden",[x]))}function qn(){x.state.isDestroyed||(x.clearDelayTimeouts(),x.unmount(),_r(),delete o._tippy,x.state.isDestroyed=!0,ee("onDestroy",[x]))}}function wo(o,n){n===void 0&&(n={});var i=bc.plugins.concat(n.plugins||[]);fE();var c=Object.assign({},n,{plugins:i}),d=iE(o),p=d.reduce(function(h,v){var g=v&&wE(v,c);return g&&h.push(g),h},[]);return rm(o)?p[0]:p}wo.defaultProps=bc;wo.setDefaultProps=bE;wo.currentInput=xd;Object.assign({},N_,{effect:function(n){var i=n.state,c={popper:{position:i.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(i.elements.popper.style,c.popper),i.styles=c,i.elements.arrow&&Object.assign(i.elements.arrow.style,c.arrow)}});wo.setDefaultProps({render:Z_});function EE(o){let n,i,c,d,p,h,v,g,w,y,_,E,D,I,P,V,T,A,M,x,F,k,N,C,G,U,$,q,J,ae,ie,Q,Z,ee,fe,Ge,vt,R,ke,yr,et,ce,we,Be,Xt,He,re,_r,St,tt,gt,pe,wr,Ts,Tt,De,oe,Ot,rt,$e,Se,Re,Za,Qt,Te,Ve,Er,en,qn,O,j,B,W,z,ve,Ee,X,Lt,Ie,At,tn,K,st,ht,Ft,Mt,Os,Cl,me,Ct,Ir,zn,_c,ua,Yn,Vo,at,Ue,Zt,jl,wc,Ls,fa,Po,Wn,qe,Zr,Kn,Ec,pa,Jn,ko,es,ts,Dr,ze,rs,rn,Nl,Xn,va,jt,er,As,sn,Vr,Fs,So,Qn,tr,rr,To,Oe,ga,Oo,Zn,Gl,an,Pr,Nt,mt,ss,nn,Bl,el,ha,kr,Gt,Hl,Le,Ms,$l,Lo,Cs,Sr,as,ns,Ic,tl,js,Ao,Rl,ma,ls,sr,Tr,ln,Fi,rl,Ns,is,sl,al,Or,Gs,ba,bt,ar,xa,nl,nr,Dd,Fo,be,nt,Bt,lr,Bs,Mo,ll,Ae,Fe,Co,jo,il,on,No,ol,ge,Ul,ql,Dc,Ye,xe,lt,Lr,Vd,os,Ht,cn,cl,Me,it,Ar,Hs,Vc,ya,cs,dn,un,Pc,$s,xt,ds,fn,dl,pn,Fr,ot,Mr,us,Rs,zl,$t,yt,ir,kc,Go,_a,Us,vn,We,Cr,fs,wa,qs,ps,Mi,zs,Bo,or,Ys,Pd,Ho,ul,Ke,cr,Ws,Ea,Ks,jr,Ci,Sc,vs,_t,Nr,Rt,Yl,fl,pl,Ut,Gr,Ia,gn,hn,$o,Wl,Js,Da,ct,dr,Kl,Tc,Br,ye,dt,mn,Oc,gs,Va,Pa,wt,Hr,Et,Xs,Lc,Jl,vl,Qs,It,hs,bn,ms,Ac,$r,ut,xn,Ro,bs,Pe,Rr,kd,ka,de,Je,ur,Zs,Fc,ea,xs,yn,qt,Sa,Dt,Ur,ji,Uo,Ce,Ta,qo,Oa,Xe,ta,zo,Yo,je,fr,gl,Xl,pr,_n,Vt,ft,qu,Ql,wn,En,Pt,ra,La,ys,Ni,_s,Aa,Sd,hl,Gi,sa,ml,bl,aa,vr,Zl,Mc,ei,xl,ti,yl,Ne,In,Cc,Bi,qr,Hi,jc,Fa,$i,Nc,Ri,ri,Dn,Qe,ws,na,Vn,Ui,Ze,zr,qi,zi,Yr,si,_l,Pn,kn,Ma,wl,Yi,Sn,ai,Wr,Es,zt,El,Gc,Bc,pt,Is,Wi,Hc,Il,gr,Ca,ja,Tn,Yt,On,Ds,Kr,Td,$c,_e,hr,Od,Ki,mr,Ji,Rc,Na,la,ni,li,br,Ga,Ld,Ad,ii,Vs,Ln,An,zu,Wo,Ko,Fn,oi,Dl,Jo,ci,Ba,ia,Mn,Uc,di,Cn,Wt,jn,Yu,Xo,Fd,Ha,ui,Wu,Md,Jr,oa,Cd,Qo,Kt,qc,Zo,Xr,$a,ec,Nn,Ra,tc,jd,rc,fi,Nd,Gd,Ps,Ua,Vl,qa,pi,zc,Bd,za,vi,sc,Hd,Qr,Ku,Op,ac,gi,Gn,Xi,zf,Lp,Ap,nc,Qi,Yc,Yf,Ju,Fp,Pl,Bn,Xu,Mp,Cp,Hn,Wc,Wf,jp,ca,lc,$d,Zi,Kf,Qu,hi,Kc,kl,Zu,Sl,ic,Np,Gp,Tl,qv,Bp,oc,cc,ef,Hp,$p,$n,eo,Jc,zv,tf,rf,Ol,mi,Jf,sf,Xc,dc,to,Qc,Xf,Rp,Up,ro,so,Yv,Zc,qp,Rn,ed,Wv,zp,ao,td,Yp,Wp,no,Qf,Kp,lo,uc,af,Jp,fc,nf,rd,lf,sd,Xp,of,Rd,bi,pc,Ud,io,Zf,cf,vc,ad,nd,Qp,ld,Zp,df,xi,qd,yi,Ya,Kv,ev,tv,zd,oo,co,Jv,uf,rv,ks,sv,Yd,Un,uo,kt,Ll,fo,Xv,ff,Al,po,Qv,id,gc,ep,Ub,sm,vo,pf,am,nm,Zv,lm,im,eg,om,cm,tg,dm,um,_i,vf,av,fm,tp,rg,pm,Wd,Kd,qb,vm,hc,nv,gf,lv,rp,zb,gm,go,sg,hm,mm,sp,bm,xm,Jd,ym,_m,wm,Em,ap,Im,Dm,wi,Vm,Ei,Pm,np,hf,Xd,mf,iv,km,Sm,od,ov,Tm,Om,Lm,Am,cv,Fm,Mm,bf,dv,xf,Yb,Cm,yf,uv,jm,Nm,lp,Gm,Bm,Wa,_f,wf,Hm,ip,Wb,$m,op,fv,Rm,Um,qm,Ef,If,zm,cp,Kb,Ym,dp,pv,Wm,Km,Jm,Df,Vf,Xm,up,Jb,Qm,Pf,Zm,vv,e0,t0,r0,kf,Sf,s0,fp,Xb,a0,pp,gv,n0,l0,i0,Tf,Of,o0,vp,Qb,c0,Lf,d0,hv,u0,f0,p0,Af,Ff,v0,gp,Zb,g0,hp,mv,h0,m0,b0,Mf,Ii,Cf,mp,x0,y0,Qd,_0,w0,E0,I0,Zd,bv,jf,ex,D0,Di,eu,bp,V0,P0,xv,te,tu,k0,ru,S0,su,T0,au,O0,nu,L0,lu,A0,iu,F0,ou,M0,cu,C0,du,j0,uu,N0,fu,G0,pu,B0,vu,H0,gu,$0,hu,R0,mu,U0,bu,q0,xu,z0,yu,Y0,_u,W0,wu,K0,Eu,J0,Iu,X0,Du,Q0,Vu,Z0,Pu,e1,ku,t1,r1,Su,xp,s1,a1,yv,Vi,Tu,n1,Ou,l1,Lu,i1,Au,o1,Fu,c1,Mu,d1,Cu,u1,f1,ju,yp,p1,v1,_v,cd,Nu,g1,Gu,h1,Bu,m1,Hu,b1,x1,xg,y1,$u,_p,_1,w1,Ru,E1,I1,D1,V1,dd,ud,wp,tx,P1,ag,k1,S1,fd,Ep,rx,T1,ng,O1,L1,mc,Ip,sx,A1,lg,F1,M1,Pi,C1,ig,j1,N1,og,G1,ho;return{c(){n=r("div"),i=r("div"),c=r("div"),d=u(),p=r("button"),h=m("Expand"),v=u(),g=r("style"),w=m(`#expandElement {
      display: none;
    }

    .after\\:border-solid::after {
      transform: scale(2) translate(-2px, 2px);
    }

    .glow {
      animation: glowing 2s infinite;
    }

    @keyframes glowing {
      0% {
        box-shadow: 0 0 5px #fff;
      }
      50% {
        box-shadow: 0 0 50px #ec8b5a;
      }
      100% {
        box-shadow: 0 0 5px #fff;
      }
    }

    .info-pop {
      cursor: pointer;
    }

    .tippy-box[data-theme~='tomato'] {
      background-color: #e7f5f5;
      color: #2e3855;
      font-size: 1.2rem;
      padding: 5px;
      box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      font-family: 'Poppins', sans-serif;
    }

    .tippy-box[data-theme~='tomato'][data-placement^='top'] > .tippy-arrow::before {
      border-top-color: #e7f5f5;
    }
    .tippy-box[data-theme~='tomato'][data-placement^='bottom'] > .tippy-arrow::before {
      border-bottom-color: #e7f5f5;
    }
    .tippy-box[data-theme~='tomato'][data-placement^='left'] > .tippy-arrow::before {
      border-left-color: #e7f5f5;
    }
    .tippy-box[data-theme~='tomato'][data-placement^='right'] > .tippy-arrow::before {
      border-right-color: #e7f5f5;
    }`),y=u(),_=r("script"),E=m(`const expandElement = document.getElementById('expandElement')
    const expandButton = document.getElementById('expandButton')

    expandButton.addEventListener('click', () => {
      expandElement.style.display = 'block'
      setTimeout(() => {
        expandElement.classList.add('opacity-100')
      }, 0)
    })

    expandElement.addEventListener('click', e => {
      if (e.target === expandElement) {
        expandElement.classList.remove('opacity-100')
        setTimeout(() => {
          expandElement.style.display = 'none'
        }, 300)
      }
    })`),D=u(),I=r("div"),P=r("style"),V=m(`p {
      font-size: 1.2rem;
    }`),T=u(),A=r("div"),M=r("section"),x=r("div"),F=r("div"),k=r("h2"),N=m("Exploration station"),C=u(),G=r("h2"),U=m("Green power from non-recycled waste"),$=u(),q=r("p"),J=m(`Power-from-waste technology can convert non-recycled waste into a myriad of different outputs, including
            electricity, heating, cooling, and biochar, among others`),ae=u(),ie=r("a"),Q=r("img"),ee=u(),fe=r("span"),Ge=m("Explore the possibilites"),vt=u(),R=r("div"),ke=r("style"),yr=m(`#topRightCluster {
              background-image: url('/assets/Group 14.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              padding: 50px;
              background-origin: content-box;
            }
            #topRightCluster img {
              visibility: hidden;
            }`),et=u(),ce=r("img"),He=u(),re=r("img"),gt=u(),pe=r("img"),De=u(),oe=r("img"),Se=u(),Re=r("img"),Ve=u(),Er=r("img"),j=u(),B=r("img"),Ee=u(),X=r("img"),tn=u(),K=r("section"),st=r("style"),ht=m(`#thegrid div {
          padding: 10px 0px 10px 10px;
        }
        #thegrid div.flex {
          padding: 20px 10px 20px 10px;
        }
        #thegrid2 div {
          padding: 15px 40px 15px 40px;
          line-height: 1.5;
          vertical-align: middle;
        }`),Ft=u(),Mt=r("h2"),Os=m("How it works"),Cl=u(),me=r("div"),Ct=r("div"),Ir=r("div"),zn=r("img"),ua=u(),Yn=r("div"),Vo=m("Plastic waste"),at=u(),Ue=r("div"),Zt=r("div"),jl=r("img"),Ls=u(),fa=r("div"),Po=m("Food waste"),Wn=u(),qe=r("div"),Zr=r("div"),Kn=r("img"),pa=u(),Jn=r("div"),ko=m("Animal waste"),es=u(),ts=r("div"),Dr=r("div"),ze=r("img"),rn=u(),Nl=r("div"),Xn=m("Agricultural waste"),va=u(),jt=r("div"),er=r("div"),As=r("img"),Vr=u(),Fs=r("div"),So=m("Wood waste"),Qn=u(),tr=r("div"),rr=m("Power from waste technology"),To=u(),Oe=r("div"),ga=r("div"),Oo=u(),Zn=r("div"),Gl=m(" "),an=u(),Pr=r("div"),Nt=m(" "),mt=u(),ss=r("div"),nn=m(" "),Bl=u(),el=r("div"),ha=m(" "),kr=u(),Gt=r("div"),Hl=u(),Le=r("div"),Ms=r("div"),$l=m("Liquid fertiliser"),Lo=u(),Cs=r("div"),Sr=m("Solid digestate"),as=u(),ns=r("div"),Ic=m("Biogas"),tl=u(),js=r("div"),Ao=m("Syngas"),Rl=u(),ma=r("div"),ls=m("Bio-oil"),sr=u(),Tr=r("div"),ln=m("Biochar"),Fi=u(),rl=r("div"),Ns=r("div"),is=m("Heat / Cool"),sl=u(),al=r("div"),Or=r("div"),Gs=m("Electricity"),ba=u(),bt=r("h1"),ar=r("div"),xa=r("div"),nl=r("div"),nr=r("img"),Fo=u(),be=r("div"),nt=r("style"),Bt=m(`p {
                font-size: 1.2rem;
              }`),lr=u(),Bs=r("h2"),Mo=m("Exploration station"),ll=u(),Ae=r("div"),Fe=m("Interact with our exploration "),Co=r("br"),jo=m(`
              station to learn more`),il=u(),on=r("p"),No=m(`Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you`),ol=u(),ge=r("div"),Ul=r("style"),ql=m(`.cow-element {
            /* overflow: visible !important; */
            box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
          }`),Dc=u(),Ye=r("div"),xe=r("div"),lt=r("script"),Lr=m(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),Vd=u(),os=r("button"),Ht=r("img"),cl=u(),Me=r("div"),it=r("div"),Ar=r("div"),Hs=r("img"),ya=u(),cs=r("div"),dn=r("h1"),un=m("Cow manure"),Pc=u(),$s=r("p"),xt=r("span"),ds=m("GCV:"),fn=m(`
                  15 MJ/kg
                  `),dl=r("img"),Fr=u(),ot=r("p"),Mr=r("span"),us=m("Energy content:"),Rs=m(`
                  Low`),zl=u(),$t=r("div"),yt=r("button"),ir=r("img"),Go=m(`
                High organic content`),_a=u(),Us=r("button"),vn=r("img"),Cr=m(`
                High nutrient content`),fs=u(),wa=r("div"),qs=r("button"),ps=r("img"),zs=m(`
                High nitrogen content`),Bo=u(),or=r("button"),Ys=r("img"),Ho=m(`
                Low pH levels`),ul=u(),Ke=r("div"),cr=r("img"),Ea=u(),Ks=r("h1"),jr=r("a"),Ci=m("Case study"),Sc=u(),vs=r("img"),Nr=u(),Rt=r("div"),Yl=r("h2"),fl=m("600 dairy cows or 3500 tonnes of cow manure per year"),pl=u(),Ut=r("ul"),Gr=r("li"),Ia=m("Produces 656m³ biogas every day"),gn=u(),hn=r("li"),$o=m("Ability to power 187 UK households every day"),Wl=u(),Js=r("div"),Da=r("div"),ct=r("div"),dr=r("div"),Kl=r("img"),Br=u(),ye=r("div"),dt=r("h1"),mn=m("Most appropriate technology"),Oc=u(),gs=r("p"),Va=m("Anaerobic Digestion"),Pa=u(),wt=r("div"),Hr=r("a"),Et=r("button"),Xs=r("img"),Jl=m(`
                    Start your project`),vl=u(),Qs=r("a"),It=r("button"),hs=r("img"),ms=m(`
                    Learn more`),Ac=u(),$r=r("div"),ut=r("div"),xn=r("script"),Ro=m(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),bs=u(),Pe=r("button"),Rr=r("img"),ka=u(),de=r("div"),Je=r("div"),ur=r("div"),Zs=r("img"),ea=u(),xs=r("div"),yn=r("h1"),qt=m("Food waste"),Sa=u(),Dt=r("p"),Ur=r("span"),ji=m("GCV:"),Uo=m(`
                  17 MJ/kg
                  `),Ce=r("img"),qo=u(),Oa=r("p"),Xe=r("span"),ta=m("Energy content:"),zo=m(`
                  High`),Yo=u(),je=r("div"),fr=r("button"),gl=r("img"),pr=m(`
                High organic content`),_n=u(),Vt=r("button"),ft=r("img"),Ql=m(`
                High nutrient content`),wn=u(),En=r("div"),Pt=r("button"),ra=r("img"),ys=m(`
                Medium nitrogen content`),Ni=u(),_s=r("button"),Aa=r("img"),hl=m(`
                Low pH levels`),Gi=u(),sa=r("div"),ml=r("img"),aa=u(),vr=r("h1"),Zl=r("a"),Mc=m("Case study"),ei=u(),xl=r("img"),yl=u(),Ne=r("div"),In=r("h2"),Cc=m("100 people or 250 tonnes of food waste per year"),Bi=u(),qr=r("ul"),Hi=r("li"),jc=m("Produces 156m³ biogas every day"),Fa=u(),$i=r("li"),Nc=m("Ability to power 19 UK households every day"),Ri=u(),ri=r("div"),Dn=r("div"),Qe=r("div"),ws=r("div"),na=r("img"),Ui=u(),Ze=r("div"),zr=r("h1"),qi=m("Most appropriate technology"),zi=u(),Yr=r("p"),si=m("Anaerobic Digestion"),_l=u(),Pn=r("div"),kn=r("a"),Ma=r("button"),wl=r("img"),Sn=m(`
                    Start your project`),ai=u(),Wr=r("a"),Es=r("button"),zt=r("img"),Gc=m(`
                    Learn more`),Bc=u(),pt=r("div"),Is=r("div"),Wi=r("script"),Hc=m(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),Il=u(),gr=r("button"),Ca=r("img"),Tn=u(),Yt=r("div"),On=r("div"),Ds=r("div"),Kr=r("img"),$c=u(),_e=r("div"),hr=r("h1"),Od=m("PE plastic"),Ki=u(),mr=r("p"),Ji=r("span"),Rc=m("GCV:"),Na=m(`
                  46 MJ/kg
                  `),la=r("img"),li=u(),br=r("p"),Ga=r("span"),Ld=m("Energy content:"),Ad=m(`
                  Very high`),ii=u(),Vs=r("div"),Ln=r("button"),An=r("img"),Wo=m(`
                Very low organic content`),Ko=u(),Fn=r("button"),oi=r("img"),Jo=m(`
                Very low nutrient content`),ci=u(),Ba=r("div"),ia=r("button"),Mn=r("img"),di=m(`
                Very low nitrogen content`),Cn=u(),Wt=r("button"),jn=r("img"),Xo=m(`
                PET bottles`),Fd=u(),Ha=r("div"),ui=r("img"),Md=u(),Jr=r("h1"),oa=r("a"),Cd=m("Case study"),Qo=u(),Kt=r("img"),Zo=u(),Xr=r("div"),$a=r("h2"),ec=m("10000 PET bottles or 100 tonnes of plastic per year"),Nn=u(),Ra=r("ul"),tc=r("li"),jd=m("Produces 75kWh every day"),rc=u(),fi=r("li"),Nd=m("Ability to power 63 UK households every day"),Gd=u(),Ps=r("div"),Ua=r("div"),Vl=r("div"),qa=r("div"),pi=r("img"),Bd=u(),za=r("div"),vi=r("h1"),sc=m("Most appropriate technology"),Hd=u(),Qr=r("p"),Ku=m("Pyrolysis"),Op=u(),ac=r("div"),gi=r("a"),Gn=r("button"),Xi=r("img"),Lp=m(`
                    Start your project`),Ap=u(),nc=r("a"),Qi=r("button"),Yc=r("img"),Ju=m(`
                    Learn more`),Fp=u(),Pl=r("div"),Bn=r("div"),Xu=r("script"),Mp=m(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),Cp=u(),Hn=r("button"),Wc=r("img"),jp=u(),ca=r("div"),lc=r("div"),$d=r("div"),Zi=r("img"),Qu=u(),hi=r("div"),Kc=r("h1"),kl=m("Technology"),Zu=u(),Sl=r("p"),ic=r("span"),Np=m("GCV:"),Gp=m(`
                  N/A MJ/kg
                  `),Tl=r("img"),Bp=u(),oc=r("p"),cc=r("span"),ef=m("Energy content:"),Hp=m(`
                  High`),$p=u(),$n=r("div"),eo=r("button"),Jc=r("img"),tf=m(`
                High organic content`),rf=u(),Ol=r("button"),mi=r("img"),sf=m(`
                High nutrient content`),Xc=u(),dc=r("div"),to=r("button"),Qc=r("img"),Rp=m(`
                High nitrogen content`),Up=u(),ro=r("button"),so=r("img"),Zc=m(`
                Latest technology`),qp=u(),Rn=r("div"),ed=r("img"),zp=u(),ao=r("h1"),td=r("a"),Yp=m("Case study"),Wp=u(),no=r("img"),Kp=u(),lo=r("div"),uc=r("h2"),af=m("600 dairy cows or 3500 tonnes of cow manure per year"),Jp=u(),fc=r("ul"),nf=r("li"),rd=m("Produces 656m³ biogas every day"),lf=u(),sd=r("li"),Xp=m("Ability to power 187 UK households every day"),of=u(),Rd=r("div"),bi=r("div"),pc=r("div"),Ud=r("div"),io=r("img"),cf=u(),vc=r("div"),ad=r("h1"),nd=m("Most appropriate technology"),Qp=u(),ld=r("p"),Zp=m("New Technology"),df=u(),xi=r("div"),qd=r("a"),yi=r("button"),Ya=r("img"),ev=m(`
                    Start your project`),tv=u(),zd=r("a"),oo=r("button"),co=r("img"),uf=m(`
                    Learn more`),rv=u(),ks=r("div"),sv=u(),Yd=r("section"),Un=r("div"),uo=r("div"),kt=r("div"),Ll=r("button"),fo=r("img"),ff=u(),Al=r("button"),po=r("img"),id=u(),gc=r("button"),ep=r("img"),sm=u(),vo=r("button"),pf=r("div"),am=m("Technology"),nm=u(),Zv=r("style"),lm=m(`@keyframes bounce {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
              }

              @keyframes scale {
                0% {
                  transform: scale(1);
                }
                100% {
                  transform: scale(1.1);
                }
              }

              .techbutton img {
                /* width: 50px; */
                height: 66px;
                margin: -10px 0px -5px -5px;
              }
              .techbuttons {
                /* transform: scale(0.6); */
                position: relative;
                animation: bounce 1s infinite;
              }

              .techbuttons:hover {
                animation: scale 1s infinite alternate;
              }

              .techbutton::after {
                content: '';
                position: absolute;
                bottom: -20px;
                left: 45px;
                /* transform: translateX(-10px) translateY(50px); */
                border-width: 10px;
                border-style: solid;
                border-color: #ffffffdd transparent transparent transparent;
              }
              .techbutton-dark::after {
                content: '';
                position: absolute;
                bottom: -20px;
                left: 70px;
                /* transform: translateX(-10px) translateY(50px); */
                border-width: 10px;
                border-style: solid;
                border-color: #2e3855dd transparent transparent transparent;
              }
              .techbuttons {
                box-shadow: 0 0 10px 5px #d8e6f2ff;
              }
              .fullw {
                animation: growAnimation 1s;
                max-width: 100%;
                min-height: 100%;
                padding-left: 250px;
                padding-top: 650px !important;
              }
              @keyframes growAnimation {
                100% {
                  min-height: 100%;
                }
              }
              .fullb {
                top: calc(100% - 65px) !important;
                left: calc(100% - 300px) !important;
                position: fixed !important;
              }
              .fullc {
                top: 100px !important;
                left: 0px !important;
                position: fixed !important;
              }
              .fulld {
                margin-top: 100px !important;
              }`),im=u(),eg=r("script"),om=m("const animatedElements = document.querySelectorAll('.techbuttons')\n\n              animatedElements.forEach(element => {\n                const randomDelay = Math.floor(Math.random() * 1000) // Generate a random delay between 0 and 1000 milliseconds\n                element.style.animationDelay = `${randomDelay}ms`\n                element.style.animationDuration = `${1000 + randomDelay}ms`\n              })"),cm=u(),tg=r("style"),dm=m(`.growbutton:hover {
              box-shadow: 0 0 5px 1px white;
            }
            .growbutton img {
              max-width: 190%;
            }`),um=u(),_i=r("div"),vf=r("div"),av=r("input"),fm=u(),tp=r("button"),rg=r("span"),pm=u(),Wd=r("button"),Kd=r("img"),vm=u(),hc=r("h1"),nv=r("div"),gf=r("div"),lv=r("div"),rp=r("img"),gm=u(),go=r("div"),sg=r("style"),hm=m(`p {
                font-size: 1.2rem;
              }`),mm=u(),sp=r("h2"),bm=m("The PFP Calculator"),xm=u(),Jd=r("div"),ym=m(`Find the right technology
              `),_m=r("br"),wm=m(`
              for your needs`),Em=u(),ap=r("p"),Im=m(`We will assist you every step of the way to ensure a smooth and successful implementation of your power-from-waste
              project`),Dm=u(),wi=r("div"),Vm=u(),Ei=r("div"),Pm=u(),np=r("section"),hf=r("div"),Xd=r("div"),mf=r("div"),iv=r("p"),km=m("Waste type"),Sm=u(),od=r("h2"),ov=r("span"),Tm=m("PE Plastic"),Om=u(),Lm=r("br"),Am=u(),cv=r("span"),Fm=m("10,000 tonnes"),Mm=u(),bf=r("div"),dv=r("div"),xf=r("img"),Cm=u(),yf=r("div"),uv=r("h3"),jm=m("Most appropriate technology"),Nm=u(),lp=r("h2"),Gm=m("Pyrolysis"),Bm=u(),Wa=r("div"),_f=r("div"),wf=r("div"),Hm=m("Energy content "),ip=r("img"),$m=u(),op=r("div"),fv=r("span"),Rm=m("18"),Um=m(`
              MJ/kg`),qm=u(),Ef=r("div"),If=r("div"),zm=m("Heat produced "),cp=r("img"),Ym=u(),dp=r("div"),pv=r("span"),Wm=m("11,200"),Km=m(`
              MWh per year`),Jm=u(),Df=r("div"),Vf=r("div"),Xm=m("Heat savings "),up=r("img"),Qm=u(),Pf=r("div"),Zm=m(`£
              `),vv=r("span"),e0=m("48,000"),t0=m(`
              per year`),r0=u(),kf=r("div"),Sf=r("div"),s0=m("Electricity produced "),fp=r("img"),a0=u(),pp=r("div"),gv=r("span"),n0=m("4,800"),l0=m(`
              MWh per year`),i0=u(),Tf=r("div"),Of=r("div"),o0=m("Electrical savings "),vp=r("img"),c0=u(),Lf=r("div"),d0=m(`£
              `),hv=r("span"),u0=m("70,000"),f0=m(`
              per year`),p0=u(),Af=r("div"),Ff=r("div"),v0=m("Char produced "),gp=r("img"),g0=u(),hp=r("div"),mv=r("span"),h0=m("500"),m0=m(`
              tonnes`),b0=u(),Mf=r("section"),Ii=r("div"),Cf=r("div"),mp=r("h1"),x0=m("The PFP Calculator"),y0=u(),Qd=r("p"),_0=m(`Our user-friendly calculator is designed to evaluate your project's
            `),w0=r("br"),E0=m(`
            feasibility, relevant technology and energy output`),I0=u(),Zd=r("div"),bv=r("div"),jf=r("img"),D0=u(),Di=r("div"),eu=r("div"),bp=r("button"),V0=m("Waste type"),P0=u(),xv=r("div"),te=r("select"),tu=r("option"),k0=m("Cow manure"),ru=r("option"),S0=m("Pig slurry"),su=r("option"),T0=m("Food waste"),au=r("option"),O0=m("Fish waste"),nu=r("option"),L0=m("Poultry litter"),lu=r("option"),A0=m("Brewery waste"),iu=r("option"),F0=m("Pulp & paper waste"),ou=r("option"),M0=m("Textile waste"),cu=r("option"),C0=m("PE plastic"),du=r("option"),j0=m("SRF and RDF"),uu=r("option"),N0=m("Coffee grounds"),fu=r("option"),G0=m("Crop residues"),pu=r("option"),B0=m("Maize silage"),vu=r("option"),H0=m("Cereal"),gu=r("option"),$0=m("Grass silage"),hu=r("option"),R0=m("PP Plastic"),mu=r("option"),U0=m("PS Plastic"),bu=r("option"),q0=m("PVC Plastic"),xu=r("option"),z0=m("PET Plastic"),yu=r("option"),Y0=m("Rubber"),_u=r("option"),W0=m("Wood waste"),wu=r("option"),K0=m("Municipal Solid Waste"),Eu=r("option"),J0=m("Medical Waste"),Iu=r("option"),X0=m("Ceramics"),Du=r("option"),Q0=m("Sand"),Vu=r("option"),Z0=m("Dust"),Pu=r("option"),e1=m("Glass"),ku=r("option"),t1=m("Metals"),r1=u(),Su=r("div"),xp=r("button"),s1=m("Tonnes per year"),a1=u(),yv=r("div"),Vi=r("select"),Tu=r("option"),n1=m("< 5 t"),Ou=r("option"),l1=m("5 - 100 t"),Lu=r("option"),i1=m("100 - 1000 t"),Au=r("option"),o1=m("1000 - 10,000 t"),Fu=r("option"),c1=m("10,000 - 20,000 t"),Mu=r("option"),d1=m("20,000 - 60,000 t"),Cu=r("option"),u1=m("> 60,000 t"),f1=u(),ju=r("div"),yp=r("button"),p1=m("Client needs"),v1=u(),_v=r("div"),cd=r("select"),Nu=r("option"),g1=m("Electricity"),Gu=r("option"),h1=m("Heating / Cooling"),Bu=r("option"),m1=m("Carbon credits"),Hu=r("option"),b1=m("Fertiliser"),x1=u(),xg=r("div"),y1=u(),$u=r("div"),_p=r("div"),_1=m("Your project is feasible"),w1=u(),Ru=r("p"),E1=m(`Review your results to explore the different possibilities and
            `),I1=r("br"),D1=m(`
            book a slot with us for personalised guidance on next steps`),V1=u(),dd=r("div"),ud=r("a"),wp=r("img"),P1=u(),ag=r("span"),k1=m("Book a call with us"),S1=u(),fd=r("a"),Ep=r("img"),T1=u(),ng=r("span"),O1=m("Learn more"),L1=u(),mc=r("button"),Ip=r("img"),A1=u(),lg=r("span"),F1=m("Calculate"),M1=u(),Pi=r("div"),C1=u(),ig=r("script"),j1=m(`function calculate() {
        const data = {
          'cow-manure': {
            tech: 'anaerobic-digestion',
            gcv: 15.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 15000.0,
            'heat-savings': 1050000.0,
            'electricity-produced': 3000.0,
            'electrical-savings': 1050000.0,
            char: 50.0
          },
          'food-waste': {
            tech: 'anaerobic-digestion',
            gcv: 17.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 17000.0,
            'heat-savings': 1190000.0,
            'electricity-produced': 3400.0,
            'electrical-savings': 1190000.0,
            char: 60.0
          },
          'pig-slurry': {
            tech: 'anaerobic-digestion',
            gcv: 13.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 11380.0,
            'heat-savings': 797600.0,
            'electricity-produced': 2276.0,
            'electrical-savings': 796600.0,
            char: 40.0
          },
          'fish-waste': {
            tech: 'anaerobic-digestion',
            gcv: 15.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 13140.0,
            'heat-savings': 919800.0,
            'electricity-produced': 2628.0,
            'electrical-savings': 919800.0,
            char: 60.0
          },
          'poultry-litter': {
            tech: 'anaerobic-digestion',
            gcv: 14.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 12260.0,
            'heat-savings': 858200.0,
            'electricity-produced': 2452.0,
            'electrical-savings': 858200.0,
            char: 50.0
          },
          'brewery-waste': {
            tech: 'anaerobic-digestion',
            gcv: 12.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 10512.0,
            'heat-savings': 736840.0,
            'electricity-produced': 2102.0,
            'electrical-savings': 736840.0,
            char: 45.0
          },
          'pulp-paper-waste': {
            tech: 'pyrolysis',
            gcv: 15.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 13140.0,
            'heat-savings': 919800.0,
            'electricity-produced': 2628.0,
            'electrical-savings': 919800.0,
            char: 55.0
          },
          'textile-waste': {
            tech: 'pyrolysis',
            gcv: 20.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 17520.0,
            'heat-savings': 1226400.0,
            'electricity-produced': 3504.0,
            'electrical-savings': 1226400.0,
            char: 80.0
          },
          'pe-plastic': {
            tech: 'pyrolysis',
            gcv: 46.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 40336.0,
            'heat-savings': 2823520.0,
            'electricity-produced': 8067.0,
            'electrical-savings': 2823520.0,
            char: 200.0
          },
          'srf-rdf': {
            tech: 'pyrolysis',
            gcv: 18.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 15768.0,
            'heat-savings': 1103760.0,
            'electricity-produced': 3154.0,
            'electrical-savings': 1103760.0,
            char: 75.0
          },
          'coffee-grounds': {
            tech: 'anaerobic-digestion',
            gcv: 16.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 14016.0,
            'heat-savings': 981120.0,
            'electricity-produced': 2803.0,
            'electrical-savings': 981120.0,
            char: 60.0
          },
          'crop-residues': {
            tech: 'anaerobic-digestion',
            gcv: 17.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 14904.0,
            'heat-savings': 1043280.0,
            'electricity-produced': 2981.0,
            'electrical-savings': 1043280.0,
            char: 65.0
          },
          'maize-silage': {
            tech: 'anaerobic-digestion',
            gcv: 17.51,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 17500.0,
            'heat-savings': 1225000.0,
            'electricity-produced': 4375.0,
            'electrical-savings': 1531250.0,
            char: 50.0
          },
          cereal: {
            tech: 'anaerobic-digestion',
            gcv: 15.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 15000.0,
            'heat-savings': 1050000.0,
            'electricity-produced': 3750.0,
            'electrical-savings': 1312500.0,
            char: 40.0
          },
          'grass-silage': {
            tech: 'anaerobic-digestion',
            gcv: 18.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 18000.0,
            'heat-savings': 1260000.0,
            'electricity-produced': 4500.0,
            'electrical-savings': 1575000.0,
            char: 60.0
          },
          'pp-plastic': {
            tech: 'pyrolysis',
            gcv: 44.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 44000.0,
            'heat-savings': 3080000.0,
            'electricity-produced': 11000.0,
            'electrical-savings': 3850000.0,
            char: 50.0
          },
          'ps-plastic': {
            tech: 'pyrolysis',
            gcv: 41.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 41000.0,
            'heat-savings': 2870000.0,
            'electricity-produced': 10250.0,
            'electrical-savings': 3587500.0,
            char: 40.0
          },
          'pvc-plastic': {
            tech: 'pyrolysis',
            gcv: 18.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 18000.0,
            'heat-savings': 1260000.0,
            'electricity-produced': 4500.0,
            'electrical-savings': 1575000.0,
            char: 20.0
          },
          'pet-plastic': {
            tech: 'pyrolysis',
            gcv: 21.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 21000.0,
            'heat-savings': 1470000.0,
            'electricity-produced': 5250.0,
            'electrical-savings': 1837500.0,
            char: 30.0
          },
          rubber: {
            tech: 'pyrolysis',
            gcv: 32.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 32000.0,
            'heat-savings': 2240000.0,
            'electricity-produced': 8000.0,
            'electrical-savings': 2800000.0,
            char: 40.0
          },
          'wood-waste': {
            tech: 'pyrolysis',
            gcv: 15.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 15000.0,
            'heat-savings': 1050000.0,
            'electricity-produced': 3750.0,
            'electrical-savings': 1312500.0,
            char: 40.0
          },
          'municipal-solid-waste': {
            tech: 'pyrolysis',
            gcv: 10.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 10000.0,
            'heat-savings': 700000.0,
            'electricity-produced': 2500.0,
            'electrical-savings': 875000.0,
            char: null
          },
          'medical-waste': {
            tech: 'pyrolysis',
            gcv: 13.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 13000.0,
            'heat-savings': 910000.0,
            'electricity-produced': 3250.0,
            'electrical-savings': 1137500.0,
            char: null
          },
          ceramics: {
            tech: null,
            gcv: 0.0,
            feasibility: 'N',
            tonnes: null,
            'heat-produced': null,
            'heat-savings': null,
            'electricity-produced': null,
            'electrical-savings': null,
            char: null
          },
          sand: {
            tech: null,
            gcv: 0.0,
            feasibility: 'N',
            tonnes: null,
            'heat-produced': null,
            'heat-savings': null,
            'electricity-produced': null,
            'electrical-savings': null,
            char: null
          },
          dust: {
            tech: null,
            gcv: 0.0,
            feasibility: 'N',
            tonnes: null,
            'heat-produced': null,
            'heat-savings': null,
            'electricity-produced': null,
            'electrical-savings': null,
            char: null
          },
          glass: {
            tech: null,
            gcv: 0.0,
            feasibility: 'N',
            tonnes: null,
            'heat-produced': null,
            'heat-savings': null,
            'electricity-produced': null,
            'electrical-savings': null,
            char: null
          },
          metals: {
            tech: null,
            gcv: 0.0,
            feasibility: 'N',
            tonnes: null,
            'heat-produced': null,
            'heat-savings': null,
            'electricity-produced': null,
            'electrical-savings': null,
            char: null
          }
        }

        var d = data[document.querySelector('#colorselector').value]
        var feasible = d['feasibility'] == 'Y'
        document.querySelector('#feasible').innerHTML = 'Your project is ' + (feasible ? '' : '<u>not</u> ') + 'feasible'

        if (feasible) {
          var calcimg = document.querySelector('#calc-img')
          if (calcimg.src.includes('Group14.png')) {
            calcimg.src = '/assets/cow 1 (1).png'
          } else {
            setTimeout(() => {
              calcimg.src = '/assets/Group14.png'
            }, 150)
          }

          var results = document.querySelector('#results')
          if (results.classList.contains('opacity-0')) {
            setTimeout(() => {
              document.getElementById('calculate').scrollIntoView({ behavior: 'smooth' })
            }, 500)
            results.classList.toggle('translate-y-full')
            setTimeout(() => {
              results.classList.toggle('opacity-0')
            }, 100)
          } else {
            results.classList.toggle('opacity-0')
            setTimeout(() => {
              results.classList.toggle('translate-y-full')
            }, 100)
            setTimeout(() => {
              document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })
            }, 20)
          }

          var wt1 = document.querySelector('#colorselector')
          document.querySelector('#waste-type1').innerHTML = wt1.options[wt1.selectedIndex].text

          var wt2 = document.querySelector('#colorselector2')
          document.querySelector('#waste-type2').innerHTML = wt2.options[wt2.selectedIndex].text

          const techs = { 'anaerobic-digestion': 'Anaerobic Digestion', pyrolysis: 'Pyrolysis' }
          document.querySelector('#matched-tech').innerHTML = techs[d['tech']]
          document.querySelector('#matched-img').src = '/assets/medres/' + d['tech'] + '.jpg'

          for (var key in d) {
            if (key != 'feasibility') {
              var el = document.querySelector('#' + key)
              if (el) {
                el.innerHTML = (d[key] * (key == 'gcv' ? 1 : Math.round(wt2.value / 8760, 2))).toLocaleString()
              }
            }
          }
        }

        var calcselectors = document.querySelector('#calc-selectors')
        calcselectors.classList.toggle('translate-x-full')
        calcselectors.classList.toggle('opacity-0')

        var calcmessage = document.querySelector('#calc-message')
        calcmessage.classList.toggle('-translate-x-full')
        calcmessage.classList.toggle('opacity-0')

        var calcbutton = document.querySelector('#calc-button')
        // calcbutton.classList.toggle('-translate-x-full')
        calcbutton.classList.toggle('-translate-x-[338px]')
        var calctext = document.querySelector('#calc-button span').innerHTML
        if (calctext == 'Calculate') {
          document.querySelector('#calc-button span').innerHTML = 'Start over'
        } else {
          document.querySelector('#calc-button span').innerHTML = 'Calculate'
        }
        calcbutton.classList.toggle('w-1/4')
        calcbutton.classList.toggle('w-1/3')

        var callbutton = document.querySelector('#call-button')
        callbutton.classList.toggle('-translate-x-full')
        callbutton.classList.toggle('opacity-0')
        setTimeout(() => {
          callbutton.classList.toggle('glow')
        }, 3000)

        var callbutton2 = document.querySelector('#call-button2')
        callbutton2.classList.toggle('-translate-x-full')
        callbutton2.classList.toggle('opacity-0')
      }`),N1=u(),og=r("script"),G1=m(`function toggleElement(k) {
      var element = document.querySelector('#' + k)
      toggleAlOff()
      // element.classList.contains('opacity-0')
      setTimeout(() => {
        element.classList.toggle('-translate-x-full')
        element.classList.toggle('opacity-0')
      }, 10)
    }

    function toggleElementOff(k) {
      var element = document.querySelector('#' + k)
      // element.classList.toggle('hidden')
      element.classList.add('-translate-x-full')
      element.classList.add('opacity-0')
    }

    function toggleAlOff() {
      toggleElementOff('food')
      toggleElementOff('cow')
      toggleElementOff('bottle')
      toggleElementOff('technology')
    }

    function toggleAll() {
      toggleElement('food')
      toggleElement('cow')
      toggleElement('bottle')
      toggleElement('technology')
    }

    function grow() {
      var element = document.querySelector('#field')
      element.classList.toggle('fixed')
      element.classList.toggle('top-0')
      element.classList.toggle('left-0')
      element.classList.toggle('fullw')

      var growbuttons = document.querySelector('.growbuttons')
      growbuttons.classList.toggle('fullb')

      var cowpanel = document.querySelector('#cow-panel')
      cowpanel.classList.toggle('fullc')

      var techbuttons = document.querySelector('.techbuttons')
      techbuttons.classList.toggle('fulld')

      document.querySelector('#cow-shadow').classList.toggle('hidden')
    }

    setTimeout(() => {
      toggleAll()
      toggleAll()
    }, 100)`),this.h()},l(Jt){n=s(Jt,"DIV",{style:!0});var mo=l(n);i=s(mo,"DIV",{class:!0});var ax=l(i);c=s(ax,"DIV",{id:!0,class:!0});var e3=l(c);e3.forEach(a),ax.forEach(a),d=f(mo),p=s(mo,"BUTTON",{id:!0,class:!0});var nx=l(p);h=b(nx,"Expand"),nx.forEach(a),v=f(mo),g=s(mo,"STYLE",{});var lx=l(g);w=b(lx,`#expandElement {
      display: none;
    }

    .after\\:border-solid::after {
      transform: scale(2) translate(-2px, 2px);
    }

    .glow {
      animation: glowing 2s infinite;
    }

    @keyframes glowing {
      0% {
        box-shadow: 0 0 5px #fff;
      }
      50% {
        box-shadow: 0 0 50px #ec8b5a;
      }
      100% {
        box-shadow: 0 0 5px #fff;
      }
    }

    .info-pop {
      cursor: pointer;
    }

    .tippy-box[data-theme~='tomato'] {
      background-color: #e7f5f5;
      color: #2e3855;
      font-size: 1.2rem;
      padding: 5px;
      box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      font-family: 'Poppins', sans-serif;
    }

    .tippy-box[data-theme~='tomato'][data-placement^='top'] > .tippy-arrow::before {
      border-top-color: #e7f5f5;
    }
    .tippy-box[data-theme~='tomato'][data-placement^='bottom'] > .tippy-arrow::before {
      border-bottom-color: #e7f5f5;
    }
    .tippy-box[data-theme~='tomato'][data-placement^='left'] > .tippy-arrow::before {
      border-left-color: #e7f5f5;
    }
    .tippy-box[data-theme~='tomato'][data-placement^='right'] > .tippy-arrow::before {
      border-right-color: #e7f5f5;
    }`),lx.forEach(a),y=f(mo),_=s(mo,"SCRIPT",{});var ix=l(_);E=b(ix,`const expandElement = document.getElementById('expandElement')
    const expandButton = document.getElementById('expandButton')

    expandButton.addEventListener('click', () => {
      expandElement.style.display = 'block'
      setTimeout(() => {
        expandElement.classList.add('opacity-100')
      }, 0)
    })

    expandElement.addEventListener('click', e => {
      if (e.target === expandElement) {
        expandElement.classList.remove('opacity-100')
        setTimeout(() => {
          expandElement.style.display = 'none'
        }, 300)
      }
    })`),ix.forEach(a),mo.forEach(a),D=f(Jt),I=s(Jt,"DIV",{class:!0});var wv=l(I);P=s(wv,"STYLE",{});var ox=l(P);V=b(ox,`p {
      font-size: 1.2rem;
    }`),ox.forEach(a),T=f(wv),A=s(wv,"DIV",{class:!0});var Ka=l(A);M=s(Ka,"SECTION",{class:!0});var cx=l(M);x=s(cx,"DIV",{class:!0});var yg=l(x);F=s(yg,"DIV",{class:!0});var Nf=l(F);k=s(Nf,"H2",{class:!0});var dx=l(k);N=b(dx,"Exploration station"),dx.forEach(a),C=f(Nf),G=s(Nf,"H2",{class:!0});var ux=l(G);U=b(ux,"Green power from non-recycled waste"),ux.forEach(a),$=f(Nf),q=s(Nf,"P",{class:!0});var fx=l(q);J=b(fx,`Power-from-waste technology can convert non-recycled waste into a myriad of different outputs, including
            electricity, heating, cooling, and biochar, among others`),fx.forEach(a),ae=f(Nf),ie=s(Nf,"A",{class:!0,href:!0});var _g=l(ie);Q=s(_g,"IMG",{class:!0,src:!0,alt:!0}),ee=f(_g),fe=s(_g,"SPAN",{});var px=l(fe);Ge=b(px,"Explore the possibilites"),px.forEach(a),_g.forEach(a),Nf.forEach(a),vt=f(yg),R=s(yg,"DIV",{class:!0,id:!0});var Ss=l(R);ke=s(Ss,"STYLE",{});var vx=l(ke);yr=b(vx,`#topRightCluster {
              background-image: url('/assets/Group 14.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              padding: 50px;
              background-origin: content-box;
            }
            #topRightCluster img {
              visibility: hidden;
            }`),vx.forEach(a),et=f(Ss),ce=s(Ss,"IMG",{class:!0,src:!0,alt:!0}),He=f(Ss),re=s(Ss,"IMG",{class:!0,src:!0,alt:!0}),gt=f(Ss),pe=s(Ss,"IMG",{class:!0,src:!0,alt:!0}),De=f(Ss),oe=s(Ss,"IMG",{class:!0,src:!0,alt:!0}),Se=f(Ss),Re=s(Ss,"IMG",{class:!0,src:!0,alt:!0}),Ve=f(Ss),Er=s(Ss,"IMG",{class:!0,src:!0,alt:!0}),j=f(Ss),B=s(Ss,"IMG",{class:!0,src:!0,alt:!0}),Ee=f(Ss),X=s(Ss,"IMG",{class:!0,src:!0,alt:!0}),Ss.forEach(a),yg.forEach(a),cx.forEach(a),tn=f(Ka),K=s(Ka,"SECTION",{class:!0,style:!0});var Ja=l(K);st=s(Ja,"STYLE",{});var gx=l(st);ht=b(gx,`#thegrid div {
          padding: 10px 0px 10px 10px;
        }
        #thegrid div.flex {
          padding: 20px 10px 20px 10px;
        }
        #thegrid2 div {
          padding: 15px 40px 15px 40px;
          line-height: 1.5;
          vertical-align: middle;
        }`),gx.forEach(a),Ft=f(Ja),Mt=s(Ja,"H2",{class:!0});var hx=l(Mt);Os=b(hx,"How it works"),hx.forEach(a),Cl=f(Ja),me=s(Ja,"DIV",{class:!0,id:!0});var pd=l(me);Ct=s(pd,"DIV",{class:!0});var wg=l(Ct);Ir=s(wg,"DIV",{class:!0});var mx=l(Ir);zn=s(mx,"IMG",{src:!0,alt:!0}),mx.forEach(a),ua=f(wg),Yn=s(wg,"DIV",{class:!0});var bx=l(Yn);Vo=b(bx,"Plastic waste"),bx.forEach(a),wg.forEach(a),at=f(pd),Ue=s(pd,"DIV",{class:!0});var Eg=l(Ue);Zt=s(Eg,"DIV",{class:!0});var xx=l(Zt);jl=s(xx,"IMG",{src:!0,alt:!0}),xx.forEach(a),Ls=f(Eg),fa=s(Eg,"DIV",{class:!0});var yx=l(fa);Po=b(yx,"Food waste"),yx.forEach(a),Eg.forEach(a),Wn=f(pd),qe=s(pd,"DIV",{class:!0});var Ig=l(qe);Zr=s(Ig,"DIV",{class:!0});var _x=l(Zr);Kn=s(_x,"IMG",{src:!0,alt:!0}),_x.forEach(a),pa=f(Ig),Jn=s(Ig,"DIV",{class:!0});var wx=l(Jn);ko=b(wx,"Animal waste"),wx.forEach(a),Ig.forEach(a),es=f(pd),ts=s(pd,"DIV",{class:!0});var Dg=l(ts);Dr=s(Dg,"DIV",{class:!0});var Ex=l(Dr);ze=s(Ex,"IMG",{src:!0,alt:!0}),Ex.forEach(a),rn=f(Dg),Nl=s(Dg,"DIV",{class:!0});var Ix=l(Nl);Xn=b(Ix,"Agricultural waste"),Ix.forEach(a),Dg.forEach(a),va=f(pd),jt=s(pd,"DIV",{class:!0});var Vg=l(jt);er=s(Vg,"DIV",{class:!0});var Dx=l(er);As=s(Dx,"IMG",{src:!0,alt:!0}),Dx.forEach(a),Vr=f(Vg),Fs=s(Vg,"DIV",{class:!0});var Vx=l(Fs);So=b(Vx,"Wood waste"),Vx.forEach(a),Vg.forEach(a),pd.forEach(a),Qn=f(Ja),tr=s(Ja,"DIV",{class:!0});var Px=l(tr);rr=b(Px,"Power from waste technology"),Px.forEach(a),To=f(Ja),Oe=s(Ja,"DIV",{class:!0,style:!0});var bo=l(Oe);ga=s(bo,"DIV",{class:!0}),l(ga).forEach(a),Oo=f(bo),Zn=s(bo,"DIV",{class:!0});var kx=l(Zn);Gl=b(kx," "),kx.forEach(a),an=f(bo),Pr=s(bo,"DIV",{class:!0});var Sx=l(Pr);Nt=b(Sx," "),Sx.forEach(a),mt=f(bo),ss=s(bo,"DIV",{class:!0});var Tx=l(ss);nn=b(Tx," "),Tx.forEach(a),Bl=f(bo),el=s(bo,"DIV",{class:!0});var Ox=l(el);ha=b(Ox," "),Ox.forEach(a),kr=f(bo),Gt=s(bo,"DIV",{class:!0}),l(Gt).forEach(a),bo.forEach(a),Hl=f(Ja),Le=s(Ja,"DIV",{class:!0,id:!0});var xo=l(Le);Ms=s(xo,"DIV",{class:!0});var Lx=l(Ms);$l=b(Lx,"Liquid fertiliser"),Lx.forEach(a),Lo=f(xo),Cs=s(xo,"DIV",{class:!0});var Ax=l(Cs);Sr=b(Ax,"Solid digestate"),Ax.forEach(a),as=f(xo),ns=s(xo,"DIV",{class:!0});var Fx=l(ns);Ic=b(Fx,"Biogas"),Fx.forEach(a),tl=f(xo),js=s(xo,"DIV",{class:!0});var Mx=l(js);Ao=b(Mx,"Syngas"),Mx.forEach(a),Rl=f(xo),ma=s(xo,"DIV",{class:!0});var Cx=l(ma);ls=b(Cx,"Bio-oil"),Cx.forEach(a),sr=f(xo),Tr=s(xo,"DIV",{class:!0});var jx=l(Tr);ln=b(jx,"Biochar"),jx.forEach(a),xo.forEach(a),Fi=f(Ja),rl=s(Ja,"DIV",{class:!0});var Nx=l(rl);Ns=s(Nx,"DIV",{class:!0});var Gx=l(Ns);is=b(Gx,"Heat / Cool"),Gx.forEach(a),Nx.forEach(a),sl=f(Ja),al=s(Ja,"DIV",{class:!0});var Bx=l(al);Or=s(Bx,"DIV",{class:!0});var Hx=l(Or);Gs=b(Hx,"Electricity"),Hx.forEach(a),Bx.forEach(a),Ja.forEach(a),ba=f(Ka),bt=s(Ka,"H1",{id:!0,class:!0});var Ev=l(bt);ar=s(Ev,"DIV",{class:!0});var $x=l(ar);xa=s($x,"DIV",{class:!0});var Pg=l(xa);nl=s(Pg,"DIV",{class:!0});var Rx=l(nl);nr=s(Rx,"IMG",{class:!0,src:!0,alt:!0}),Rx.forEach(a),Fo=f(Pg),be=s(Pg,"DIV",{class:!0});var Gf=l(be);nt=s(Gf,"STYLE",{});var Ux=l(nt);Bt=b(Ux,`p {
                font-size: 1.2rem;
              }`),Ux.forEach(a),lr=f(Gf),Bs=s(Gf,"H2",{style:!0,class:!0});var qx=l(Bs);Mo=b(qx,"Exploration station"),qx.forEach(a),ll=f(Gf),Ae=s(Gf,"DIV",{style:!0,class:!0});var kg=l(Ae);Fe=b(kg,"Interact with our exploration "),Co=s(kg,"BR",{}),jo=b(kg,`
              station to learn more`),kg.forEach(a),il=f(Gf),on=s(Gf,"P",{style:!0,class:!0});var zx=l(on);No=b(zx,`Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you`),zx.forEach(a),Gf.forEach(a),Pg.forEach(a),$x.forEach(a),ol=f(Ev),ge=s(Ev,"DIV",{class:!0,id:!0,style:!0});var vd=l(ge);Ul=s(vd,"STYLE",{});var Yx=l(Ul);ql=b(Yx,`.cow-element {
            /* overflow: visible !important; */
            box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
          }`),Yx.forEach(a),Dc=f(vd),Ye=s(vd,"DIV",{class:!0,id:!0});var Iv=l(Ye);xe=s(Iv,"DIV",{class:!0});var Sg=l(xe);lt=s(Sg,"SCRIPT",{});var Wx=l(lt);Lr=b(Wx,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),Wx.forEach(a),Vd=f(Sg),os=s(Sg,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Kx=l(os);Ht=s(Kx,"IMG",{class:!0,src:!0,alt:!0}),Kx.forEach(a),Sg.forEach(a),cl=f(Iv),Me=s(Iv,"DIV",{class:!0});var gd=l(Me);it=s(gd,"DIV",{class:!0});var Tg=l(it);Ar=s(Tg,"DIV",{class:!0});var Jx=l(Ar);Hs=s(Jx,"IMG",{style:!0,src:!0,alt:!0}),Jx.forEach(a),ya=f(Tg),cs=s(Tg,"DIV",{class:!0});var Dv=l(cs);dn=s(Dv,"H1",{style:!0,class:!0});var Xx=l(dn);un=b(Xx,"Cow manure"),Xx.forEach(a),Pc=f(Dv),$s=s(Dv,"P",{style:!0,class:!0});var Og=l($s);xt=s(Og,"SPAN",{class:!0});var Qx=l(xt);ds=b(Qx,"GCV:"),Qx.forEach(a),fn=b(Og,`
                  15 MJ/kg
                  `),dl=s(Og,"IMG",{class:!0,src:!0,alt:!0}),Og.forEach(a),Fr=f(Dv),ot=s(Dv,"P",{style:!0,class:!0});var B1=l(ot);Mr=s(B1,"SPAN",{class:!0});var Zx=l(Mr);us=b(Zx,"Energy content:"),Zx.forEach(a),Rs=b(B1,`
                  Low`),B1.forEach(a),Dv.forEach(a),Tg.forEach(a),zl=f(gd),$t=s(gd,"DIV",{class:!0});var Lg=l($t);yt=s(Lg,"BUTTON",{type:!0,style:!0,class:!0});var H1=l(yt);ir=s(H1,"IMG",{class:!0,src:!0,alt:!0}),Go=b(H1,`
                High organic content`),H1.forEach(a),_a=f(Lg),Us=s(Lg,"BUTTON",{type:!0,style:!0,class:!0});var $1=l(Us);vn=s($1,"IMG",{class:!0,src:!0,alt:!0}),Cr=b($1,`
                High nutrient content`),$1.forEach(a),Lg.forEach(a),fs=f(gd),wa=s(gd,"DIV",{class:!0});var Ag=l(wa);qs=s(Ag,"BUTTON",{type:!0,style:!0,class:!0});var R1=l(qs);ps=s(R1,"IMG",{class:!0,src:!0,alt:!0}),zs=b(R1,`
                High nitrogen content`),R1.forEach(a),Bo=f(Ag),or=s(Ag,"BUTTON",{type:!0,style:!0,class:!0});var U1=l(or);Ys=s(U1,"IMG",{class:!0,src:!0,alt:!0}),Ho=b(U1,`
                Low pH levels`),U1.forEach(a),Ag.forEach(a),ul=f(gd),Ke=s(gd,"DIV",{class:!0});var Vv=l(Ke);cr=s(Vv,"IMG",{class:!0,src:!0,alt:!0}),Ea=f(Vv),Ks=s(Vv,"H1",{style:!0,class:!0});var ey=l(Ks);jr=s(ey,"A",{href:!0,target:!0});var ty=l(jr);Ci=b(ty,"Case study"),ty.forEach(a),ey.forEach(a),Sc=f(Vv),vs=s(Vv,"IMG",{class:!0,src:!0,alt:!0}),Vv.forEach(a),Nr=f(gd),Rt=s(gd,"DIV",{style:!0,class:!0});var Fg=l(Rt);Yl=s(Fg,"H2",{class:!0});var ry=l(Yl);fl=b(ry,"600 dairy cows or 3500 tonnes of cow manure per year"),ry.forEach(a),pl=f(Fg),Ut=s(Fg,"UL",{class:!0});var Mg=l(Ut);Gr=s(Mg,"LI",{});var sy=l(Gr);Ia=b(sy,"Produces 656m³ biogas every day"),sy.forEach(a),gn=f(Mg),hn=s(Mg,"LI",{});var ay=l(hn);$o=b(ay,"Ability to power 187 UK households every day"),ay.forEach(a),Mg.forEach(a),Fg.forEach(a),gd.forEach(a),Wl=f(Iv),Js=s(Iv,"DIV",{class:!0});var ny=l(Js);Da=s(ny,"DIV",{class:!0});var Cg=l(Da);ct=s(Cg,"DIV",{class:!0});var jg=l(ct);dr=s(jg,"DIV",{class:!0});var ly=l(dr);Kl=s(ly,"IMG",{src:!0,class:!0,alt:!0}),ly.forEach(a),Br=f(jg),ye=s(jg,"DIV",{class:!0});var Ng=l(ye);dt=s(Ng,"H1",{style:!0,class:!0});var iy=l(dt);mn=b(iy,"Most appropriate technology"),iy.forEach(a),Oc=f(Ng),gs=s(Ng,"P",{style:!0,class:!0});var oy=l(gs);Va=b(oy,"Anaerobic Digestion"),oy.forEach(a),Ng.forEach(a),jg.forEach(a),Pa=f(Cg),wt=s(Cg,"DIV",{class:!0});var Gg=l(wt);Hr=s(Gg,"A",{href:!0});var cy=l(Hr);Et=s(cy,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var q1=l(Et);Xs=s(q1,"IMG",{class:!0,src:!0,alt:!0}),Jl=b(q1,`
                    Start your project`),q1.forEach(a),cy.forEach(a),vl=f(Gg),Qs=s(Gg,"A",{href:!0});var dy=l(Qs);It=s(dy,"BUTTON",{type:!0,style:!0,class:!0});var z1=l(It);hs=s(z1,"IMG",{class:!0,src:!0,alt:!0}),ms=b(z1,`
                    Learn more`),z1.forEach(a),dy.forEach(a),Gg.forEach(a),Cg.forEach(a),ny.forEach(a),Iv.forEach(a),Ac=f(vd),$r=s(vd,"DIV",{class:!0,id:!0});var Pv=l($r);ut=s(Pv,"DIV",{class:!0});var Bg=l(ut);xn=s(Bg,"SCRIPT",{});var uy=l(xn);Ro=b(uy,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),uy.forEach(a),bs=f(Bg),Pe=s(Bg,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var fy=l(Pe);Rr=s(fy,"IMG",{class:!0,src:!0,alt:!0}),fy.forEach(a),Bg.forEach(a),ka=f(Pv),de=s(Pv,"DIV",{class:!0});var hd=l(de);Je=s(hd,"DIV",{class:!0});var Hg=l(Je);ur=s(Hg,"DIV",{class:!0});var py=l(ur);Zs=s(py,"IMG",{style:!0,src:!0,alt:!0}),py.forEach(a),ea=f(Hg),xs=s(Hg,"DIV",{class:!0});var kv=l(xs);yn=s(kv,"H1",{style:!0,class:!0});var vy=l(yn);qt=b(vy,"Food waste"),vy.forEach(a),Sa=f(kv),Dt=s(kv,"P",{style:!0,class:!0});var $g=l(Dt);Ur=s($g,"SPAN",{class:!0});var gy=l(Ur);ji=b(gy,"GCV:"),gy.forEach(a),Uo=b($g,`
                  17 MJ/kg
                  `),Ce=s($g,"IMG",{class:!0,src:!0,alt:!0}),$g.forEach(a),qo=f(kv),Oa=s(kv,"P",{style:!0,class:!0});var Y1=l(Oa);Xe=s(Y1,"SPAN",{class:!0});var hy=l(Xe);ta=b(hy,"Energy content:"),hy.forEach(a),zo=b(Y1,`
                  High`),Y1.forEach(a),kv.forEach(a),Hg.forEach(a),Yo=f(hd),je=s(hd,"DIV",{class:!0});var Rg=l(je);fr=s(Rg,"BUTTON",{type:!0,style:!0,class:!0});var W1=l(fr);gl=s(W1,"IMG",{class:!0,src:!0,alt:!0}),pr=b(W1,`
                High organic content`),W1.forEach(a),_n=f(Rg),Vt=s(Rg,"BUTTON",{type:!0,style:!0,class:!0});var K1=l(Vt);ft=s(K1,"IMG",{class:!0,src:!0,alt:!0}),Ql=b(K1,`
                High nutrient content`),K1.forEach(a),Rg.forEach(a),wn=f(hd),En=s(hd,"DIV",{class:!0});var Ug=l(En);Pt=s(Ug,"BUTTON",{type:!0,style:!0,class:!0});var J1=l(Pt);ra=s(J1,"IMG",{class:!0,src:!0,alt:!0}),ys=b(J1,`
                Medium nitrogen content`),J1.forEach(a),Ni=f(Ug),_s=s(Ug,"BUTTON",{type:!0,style:!0,class:!0});var X1=l(_s);Aa=s(X1,"IMG",{class:!0,src:!0,alt:!0}),hl=b(X1,`
                Low pH levels`),X1.forEach(a),Ug.forEach(a),Gi=f(hd),sa=s(hd,"DIV",{class:!0});var Sv=l(sa);ml=s(Sv,"IMG",{class:!0,src:!0,alt:!0}),aa=f(Sv),vr=s(Sv,"H1",{style:!0,class:!0});var my=l(vr);Zl=s(my,"A",{href:!0,target:!0});var by=l(Zl);Mc=b(by,"Case study"),by.forEach(a),my.forEach(a),ei=f(Sv),xl=s(Sv,"IMG",{class:!0,src:!0,alt:!0}),Sv.forEach(a),yl=f(hd),Ne=s(hd,"DIV",{style:!0,class:!0});var qg=l(Ne);In=s(qg,"H2",{class:!0});var xy=l(In);Cc=b(xy,"100 people or 250 tonnes of food waste per year"),xy.forEach(a),Bi=f(qg),qr=s(qg,"UL",{class:!0});var zg=l(qr);Hi=s(zg,"LI",{});var yy=l(Hi);jc=b(yy,"Produces 156m³ biogas every day"),yy.forEach(a),Fa=f(zg),$i=s(zg,"LI",{});var _y=l($i);Nc=b(_y,"Ability to power 19 UK households every day"),_y.forEach(a),zg.forEach(a),qg.forEach(a),hd.forEach(a),Ri=f(Pv),ri=s(Pv,"DIV",{class:!0});var wy=l(ri);Dn=s(wy,"DIV",{class:!0});var Yg=l(Dn);Qe=s(Yg,"DIV",{class:!0});var Wg=l(Qe);ws=s(Wg,"DIV",{class:!0});var Ey=l(ws);na=s(Ey,"IMG",{src:!0,class:!0,alt:!0}),Ey.forEach(a),Ui=f(Wg),Ze=s(Wg,"DIV",{class:!0});var Kg=l(Ze);zr=s(Kg,"H1",{style:!0,class:!0});var Iy=l(zr);qi=b(Iy,"Most appropriate technology"),Iy.forEach(a),zi=f(Kg),Yr=s(Kg,"P",{style:!0,class:!0});var Dy=l(Yr);si=b(Dy,"Anaerobic Digestion"),Dy.forEach(a),Kg.forEach(a),Wg.forEach(a),_l=f(Yg),Pn=s(Yg,"DIV",{class:!0});var Jg=l(Pn);kn=s(Jg,"A",{href:!0});var Vy=l(kn);Ma=s(Vy,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Q1=l(Ma);wl=s(Q1,"IMG",{class:!0,src:!0,alt:!0}),Sn=b(Q1,`
                    Start your project`),Q1.forEach(a),Vy.forEach(a),ai=f(Jg),Wr=s(Jg,"A",{href:!0});var Py=l(Wr);Es=s(Py,"BUTTON",{type:!0,style:!0,class:!0});var Z1=l(Es);zt=s(Z1,"IMG",{class:!0,src:!0,alt:!0}),Gc=b(Z1,`
                    Learn more`),Z1.forEach(a),Py.forEach(a),Jg.forEach(a),Yg.forEach(a),wy.forEach(a),Pv.forEach(a),Bc=f(vd),pt=s(vd,"DIV",{class:!0,id:!0});var Tv=l(pt);Is=s(Tv,"DIV",{class:!0});var Xg=l(Is);Wi=s(Xg,"SCRIPT",{});var ky=l(Wi);Hc=b(ky,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),ky.forEach(a),Il=f(Xg),gr=s(Xg,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Sy=l(gr);Ca=s(Sy,"IMG",{class:!0,src:!0,alt:!0}),Sy.forEach(a),Xg.forEach(a),Tn=f(Tv),Yt=s(Tv,"DIV",{class:!0});var md=l(Yt);On=s(md,"DIV",{class:!0});var Qg=l(On);Ds=s(Qg,"DIV",{class:!0});var Ty=l(Ds);Kr=s(Ty,"IMG",{style:!0,src:!0,alt:!0}),Ty.forEach(a),$c=f(Qg),_e=s(Qg,"DIV",{class:!0});var Ov=l(_e);hr=s(Ov,"H1",{style:!0,class:!0});var Oy=l(hr);Od=b(Oy,"PE plastic"),Oy.forEach(a),Ki=f(Ov),mr=s(Ov,"P",{style:!0,class:!0});var Zg=l(mr);Ji=s(Zg,"SPAN",{class:!0});var Ly=l(Ji);Rc=b(Ly,"GCV:"),Ly.forEach(a),Na=b(Zg,`
                  46 MJ/kg
                  `),la=s(Zg,"IMG",{class:!0,src:!0,alt:!0}),Zg.forEach(a),li=f(Ov),br=s(Ov,"P",{style:!0,class:!0});var eb=l(br);Ga=s(eb,"SPAN",{class:!0});var Ay=l(Ga);Ld=b(Ay,"Energy content:"),Ay.forEach(a),Ad=b(eb,`
                  Very high`),eb.forEach(a),Ov.forEach(a),Qg.forEach(a),ii=f(md),Vs=s(md,"DIV",{class:!0});var eh=l(Vs);Ln=s(eh,"BUTTON",{type:!0,style:!0,class:!0});var tb=l(Ln);An=s(tb,"IMG",{class:!0,src:!0,alt:!0}),Wo=b(tb,`
                Very low organic content`),tb.forEach(a),Ko=f(eh),Fn=s(eh,"BUTTON",{type:!0,style:!0,class:!0});var rb=l(Fn);oi=s(rb,"IMG",{class:!0,src:!0,alt:!0}),Jo=b(rb,`
                Very low nutrient content`),rb.forEach(a),eh.forEach(a),ci=f(md),Ba=s(md,"DIV",{class:!0});var th=l(Ba);ia=s(th,"BUTTON",{type:!0,style:!0,class:!0});var sb=l(ia);Mn=s(sb,"IMG",{class:!0,src:!0,alt:!0}),di=b(sb,`
                Very low nitrogen content`),sb.forEach(a),Cn=f(th),Wt=s(th,"BUTTON",{type:!0,style:!0,class:!0});var ab=l(Wt);jn=s(ab,"IMG",{class:!0,src:!0,alt:!0}),Xo=b(ab,`
                PET bottles`),ab.forEach(a),th.forEach(a),Fd=f(md),Ha=s(md,"DIV",{class:!0});var Lv=l(Ha);ui=s(Lv,"IMG",{class:!0,src:!0,alt:!0}),Md=f(Lv),Jr=s(Lv,"H1",{style:!0,class:!0});var Fy=l(Jr);oa=s(Fy,"A",{href:!0,target:!0});var My=l(oa);Cd=b(My,"Case study"),My.forEach(a),Fy.forEach(a),Qo=f(Lv),Kt=s(Lv,"IMG",{class:!0,src:!0,alt:!0}),Lv.forEach(a),Zo=f(md),Xr=s(md,"DIV",{style:!0,class:!0});var rh=l(Xr);$a=s(rh,"H2",{class:!0});var Cy=l($a);ec=b(Cy,"10000 PET bottles or 100 tonnes of plastic per year"),Cy.forEach(a),Nn=f(rh),Ra=s(rh,"UL",{class:!0});var sh=l(Ra);tc=s(sh,"LI",{});var jy=l(tc);jd=b(jy,"Produces 75kWh every day"),jy.forEach(a),rc=f(sh),fi=s(sh,"LI",{});var Ny=l(fi);Nd=b(Ny,"Ability to power 63 UK households every day"),Ny.forEach(a),sh.forEach(a),rh.forEach(a),md.forEach(a),Gd=f(Tv),Ps=s(Tv,"DIV",{class:!0});var Gy=l(Ps);Ua=s(Gy,"DIV",{class:!0});var ah=l(Ua);Vl=s(ah,"DIV",{class:!0});var nh=l(Vl);qa=s(nh,"DIV",{class:!0});var By=l(qa);pi=s(By,"IMG",{src:!0,class:!0,alt:!0}),By.forEach(a),Bd=f(nh),za=s(nh,"DIV",{class:!0});var lh=l(za);vi=s(lh,"H1",{style:!0,class:!0});var Hy=l(vi);sc=b(Hy,"Most appropriate technology"),Hy.forEach(a),Hd=f(lh),Qr=s(lh,"P",{style:!0,class:!0});var $y=l(Qr);Ku=b($y,"Pyrolysis"),$y.forEach(a),lh.forEach(a),nh.forEach(a),Op=f(ah),ac=s(ah,"DIV",{class:!0});var ih=l(ac);gi=s(ih,"A",{href:!0});var Ry=l(gi);Gn=s(Ry,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var nb=l(Gn);Xi=s(nb,"IMG",{class:!0,src:!0,alt:!0}),Lp=b(nb,`
                    Start your project`),nb.forEach(a),Ry.forEach(a),Ap=f(ih),nc=s(ih,"A",{href:!0});var Uy=l(nc);Qi=s(Uy,"BUTTON",{type:!0,style:!0,class:!0});var lb=l(Qi);Yc=s(lb,"IMG",{class:!0,src:!0,alt:!0}),Ju=b(lb,`
                    Learn more`),lb.forEach(a),Uy.forEach(a),ih.forEach(a),ah.forEach(a),Gy.forEach(a),Tv.forEach(a),Fp=f(vd),Pl=s(vd,"DIV",{class:!0,id:!0});var Av=l(Pl);Bn=s(Av,"DIV",{class:!0});var oh=l(Bn);Xu=s(oh,"SCRIPT",{});var qy=l(Xu);Mp=b(qy,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),qy.forEach(a),Cp=f(oh),Hn=s(oh,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var zy=l(Hn);Wc=s(zy,"IMG",{class:!0,src:!0,alt:!0}),zy.forEach(a),oh.forEach(a),jp=f(Av),ca=s(Av,"DIV",{class:!0});var bd=l(ca);lc=s(bd,"DIV",{class:!0});var ch=l(lc);$d=s(ch,"DIV",{class:!0});var Yy=l($d);Zi=s(Yy,"IMG",{style:!0,src:!0,alt:!0}),Yy.forEach(a),Qu=f(ch),hi=s(ch,"DIV",{class:!0});var Fv=l(hi);Kc=s(Fv,"H1",{style:!0,class:!0});var Wy=l(Kc);kl=b(Wy,"Technology"),Wy.forEach(a),Zu=f(Fv),Sl=s(Fv,"P",{style:!0,class:!0});var dh=l(Sl);ic=s(dh,"SPAN",{class:!0});var Ky=l(ic);Np=b(Ky,"GCV:"),Ky.forEach(a),Gp=b(dh,`
                  N/A MJ/kg
                  `),Tl=s(dh,"IMG",{class:!0,src:!0,alt:!0}),dh.forEach(a),Bp=f(Fv),oc=s(Fv,"P",{style:!0,class:!0});var ib=l(oc);cc=s(ib,"SPAN",{class:!0});var Jy=l(cc);ef=b(Jy,"Energy content:"),Jy.forEach(a),Hp=b(ib,`
                  High`),ib.forEach(a),Fv.forEach(a),ch.forEach(a),$p=f(bd),$n=s(bd,"DIV",{class:!0});var uh=l($n);eo=s(uh,"BUTTON",{type:!0,style:!0,class:!0});var ob=l(eo);Jc=s(ob,"IMG",{class:!0,src:!0,alt:!0}),tf=b(ob,`
                High organic content`),ob.forEach(a),rf=f(uh),Ol=s(uh,"BUTTON",{type:!0,style:!0,class:!0});var cb=l(Ol);mi=s(cb,"IMG",{class:!0,src:!0,alt:!0}),sf=b(cb,`
                High nutrient content`),cb.forEach(a),uh.forEach(a),Xc=f(bd),dc=s(bd,"DIV",{class:!0});var fh=l(dc);to=s(fh,"BUTTON",{type:!0,style:!0,class:!0});var db=l(to);Qc=s(db,"IMG",{class:!0,src:!0,alt:!0}),Rp=b(db,`
                High nitrogen content`),db.forEach(a),Up=f(fh),ro=s(fh,"BUTTON",{type:!0,style:!0,class:!0});var ub=l(ro);so=s(ub,"IMG",{class:!0,src:!0,alt:!0}),Zc=b(ub,`
                Latest technology`),ub.forEach(a),fh.forEach(a),qp=f(bd),Rn=s(bd,"DIV",{class:!0});var Mv=l(Rn);ed=s(Mv,"IMG",{class:!0,src:!0,alt:!0}),zp=f(Mv),ao=s(Mv,"H1",{style:!0,class:!0});var Xy=l(ao);td=s(Xy,"A",{href:!0,target:!0});var Qy=l(td);Yp=b(Qy,"Case study"),Qy.forEach(a),Xy.forEach(a),Wp=f(Mv),no=s(Mv,"IMG",{class:!0,src:!0,alt:!0}),Mv.forEach(a),Kp=f(bd),lo=s(bd,"DIV",{style:!0,class:!0});var ph=l(lo);uc=s(ph,"H2",{class:!0});var Zy=l(uc);af=b(Zy,"600 dairy cows or 3500 tonnes of cow manure per year"),Zy.forEach(a),Jp=f(ph),fc=s(ph,"UL",{class:!0});var vh=l(fc);nf=s(vh,"LI",{});var e2=l(nf);rd=b(e2,"Produces 656m³ biogas every day"),e2.forEach(a),lf=f(vh),sd=s(vh,"LI",{});var t2=l(sd);Xp=b(t2,"Ability to power 187 UK households every day"),t2.forEach(a),vh.forEach(a),ph.forEach(a),bd.forEach(a),of=f(Av),Rd=s(Av,"DIV",{class:!0});var r2=l(Rd);bi=s(r2,"DIV",{class:!0});var gh=l(bi);pc=s(gh,"DIV",{class:!0});var hh=l(pc);Ud=s(hh,"DIV",{class:!0});var s2=l(Ud);io=s(s2,"IMG",{src:!0,class:!0,alt:!0}),s2.forEach(a),cf=f(hh),vc=s(hh,"DIV",{class:!0});var mh=l(vc);ad=s(mh,"H1",{style:!0,class:!0});var a2=l(ad);nd=b(a2,"Most appropriate technology"),a2.forEach(a),Qp=f(mh),ld=s(mh,"P",{style:!0,class:!0});var n2=l(ld);Zp=b(n2,"New Technology"),n2.forEach(a),mh.forEach(a),hh.forEach(a),df=f(gh),xi=s(gh,"DIV",{class:!0});var bh=l(xi);qd=s(bh,"A",{href:!0});var l2=l(qd);yi=s(l2,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var fb=l(yi);Ya=s(fb,"IMG",{class:!0,src:!0,alt:!0}),ev=b(fb,`
                    Start your project`),fb.forEach(a),l2.forEach(a),tv=f(bh),zd=s(bh,"A",{href:!0});var i2=l(zd);oo=s(i2,"BUTTON",{type:!0,style:!0,class:!0});var pb=l(oo);co=s(pb,"IMG",{class:!0,src:!0,alt:!0}),uf=b(pb,`
                    Learn more`),pb.forEach(a),i2.forEach(a),bh.forEach(a),gh.forEach(a),r2.forEach(a),Av.forEach(a),vd.forEach(a),rv=f(Ev),ks=s(Ev,"DIV",{id:!0,class:!0,style:!0}),l(ks).forEach(a),Ev.forEach(a),sv=f(Ka),Yd=s(Ka,"SECTION",{class:!0});var o2=l(Yd);Un=s(o2,"DIV",{class:!0,style:!0,id:!0,onclick:!0});var c2=l(Un);uo=s(c2,"DIV",{});var Cv=l(uo);kt=s(Cv,"DIV",{id:!0,style:!0});var yo=l(kt);Ll=s(yo,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var d2=l(Ll);fo=s(d2,"IMG",{class:!0,src:!0,alt:!0}),d2.forEach(a),ff=f(yo),Al=s(yo,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var u2=l(Al);po=s(u2,"IMG",{class:!0,src:!0,alt:!0}),u2.forEach(a),id=f(yo),gc=s(yo,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var f2=l(gc);ep=s(f2,"IMG",{class:!0,src:!0,alt:!0}),f2.forEach(a),sm=f(yo),vo=s(yo,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var p2=l(vo);pf=s(p2,"DIV",{style:!0});var v2=l(pf);am=b(v2,"Technology"),v2.forEach(a),p2.forEach(a),nm=f(yo),Zv=s(yo,"STYLE",{});var g2=l(Zv);lm=b(g2,`@keyframes bounce {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
              }

              @keyframes scale {
                0% {
                  transform: scale(1);
                }
                100% {
                  transform: scale(1.1);
                }
              }

              .techbutton img {
                /* width: 50px; */
                height: 66px;
                margin: -10px 0px -5px -5px;
              }
              .techbuttons {
                /* transform: scale(0.6); */
                position: relative;
                animation: bounce 1s infinite;
              }

              .techbuttons:hover {
                animation: scale 1s infinite alternate;
              }

              .techbutton::after {
                content: '';
                position: absolute;
                bottom: -20px;
                left: 45px;
                /* transform: translateX(-10px) translateY(50px); */
                border-width: 10px;
                border-style: solid;
                border-color: #ffffffdd transparent transparent transparent;
              }
              .techbutton-dark::after {
                content: '';
                position: absolute;
                bottom: -20px;
                left: 70px;
                /* transform: translateX(-10px) translateY(50px); */
                border-width: 10px;
                border-style: solid;
                border-color: #2e3855dd transparent transparent transparent;
              }
              .techbuttons {
                box-shadow: 0 0 10px 5px #d8e6f2ff;
              }
              .fullw {
                animation: growAnimation 1s;
                max-width: 100%;
                min-height: 100%;
                padding-left: 250px;
                padding-top: 650px !important;
              }
              @keyframes growAnimation {
                100% {
                  min-height: 100%;
                }
              }
              .fullb {
                top: calc(100% - 65px) !important;
                left: calc(100% - 300px) !important;
                position: fixed !important;
              }
              .fullc {
                top: 100px !important;
                left: 0px !important;
                position: fixed !important;
              }
              .fulld {
                margin-top: 100px !important;
              }`),g2.forEach(a),im=f(yo),eg=s(yo,"SCRIPT",{});var h2=l(eg);om=b(h2,"const animatedElements = document.querySelectorAll('.techbuttons')\n\n              animatedElements.forEach(element => {\n                const randomDelay = Math.floor(Math.random() * 1000) // Generate a random delay between 0 and 1000 milliseconds\n                element.style.animationDelay = `${randomDelay}ms`\n                element.style.animationDuration = `${1000 + randomDelay}ms`\n              })"),h2.forEach(a),yo.forEach(a),cm=f(Cv),tg=s(Cv,"STYLE",{});var m2=l(tg);dm=b(m2,`.growbutton:hover {
              box-shadow: 0 0 5px 1px white;
            }
            .growbutton img {
              max-width: 190%;
            }`),m2.forEach(a),um=f(Cv),_i=s(Cv,"DIV",{class:!0,id:!0,style:!0});var xh=l(_i);vf=s(xh,"DIV",{class:!0});var yh=l(vf);av=s(yh,"INPUT",{type:!0,placeholder:!0,class:!0}),fm=f(yh),tp=s(yh,"BUTTON",{"aria-label":!0,class:!0});var b2=l(tp);rg=s(b2,"SPAN",{class:!0}),l(rg).forEach(a),b2.forEach(a),yh.forEach(a),pm=f(xh),Wd=s(xh,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var x2=l(Wd);Kd=s(x2,"IMG",{class:!0,src:!0,alt:!0,style:!0}),x2.forEach(a),xh.forEach(a),Cv.forEach(a),c2.forEach(a),o2.forEach(a),vm=f(Ka),hc=s(Ka,"H1",{class:!0,id:!0});var jv=l(hc);nv=s(jv,"DIV",{class:!0});var y2=l(nv);gf=s(y2,"DIV",{class:!0});var _h=l(gf);lv=s(_h,"DIV",{class:!0});var _2=l(lv);rp=s(_2,"IMG",{class:!0,src:!0,alt:!0}),_2.forEach(a),gm=f(_h),go=s(_h,"DIV",{class:!0});var Bf=l(go);sg=s(Bf,"STYLE",{});var w2=l(sg);hm=b(w2,`p {
                font-size: 1.2rem;
              }`),w2.forEach(a),mm=f(Bf),sp=s(Bf,"H2",{style:!0,class:!0});var E2=l(sp);bm=b(E2,"The PFP Calculator"),E2.forEach(a),xm=f(Bf),Jd=s(Bf,"DIV",{style:!0,class:!0});var wh=l(Jd);ym=b(wh,`Find the right technology
              `),_m=s(wh,"BR",{}),wm=b(wh,`
              for your needs`),wh.forEach(a),Em=f(Bf),ap=s(Bf,"P",{style:!0,class:!0});var I2=l(ap);Im=b(I2,`We will assist you every step of the way to ensure a smooth and successful implementation of your power-from-waste
              project`),I2.forEach(a),Bf.forEach(a),_h.forEach(a),y2.forEach(a),Dm=f(jv),wi=s(jv,"DIV",{id:!0,class:!0,style:!0}),l(wi).forEach(a),Vm=f(jv),Ei=s(jv,"DIV",{id:!0,class:!0,style:!0}),l(Ei).forEach(a),jv.forEach(a),Pm=f(Ka),np=s(Ka,"SECTION",{class:!0,id:!0});var D2=l(np);hf=s(D2,"DIV",{class:!0});var Eh=l(hf);Xd=s(Eh,"DIV",{class:!0,style:!0});var Ih=l(Xd);mf=s(Ih,"DIV",{class:!0});var Dh=l(mf);iv=s(Dh,"P",{class:!0});var V2=l(iv);km=b(V2,"Waste type"),V2.forEach(a),Sm=f(Dh),od=s(Dh,"H2",{class:!0});var Nv=l(od);ov=s(Nv,"SPAN",{id:!0});var P2=l(ov);Tm=b(P2,"PE Plastic"),P2.forEach(a),Om=f(Nv),Lm=s(Nv,"BR",{}),Am=f(Nv),cv=s(Nv,"SPAN",{id:!0});var k2=l(cv);Fm=b(k2,"10,000 tonnes"),k2.forEach(a),Nv.forEach(a),Dh.forEach(a),Mm=f(Ih),bf=s(Ih,"DIV",{class:!0});var Vh=l(bf);dv=s(Vh,"DIV",{class:!0});var S2=l(dv);xf=s(S2,"IMG",{src:!0,class:!0,id:!0,alt:!0}),S2.forEach(a),Cm=f(Vh),yf=s(Vh,"DIV",{class:!0});var Ph=l(yf);uv=s(Ph,"H3",{class:!0});var T2=l(uv);jm=b(T2,"Most appropriate technology"),T2.forEach(a),Nm=f(Ph),lp=s(Ph,"H2",{class:!0,id:!0});var O2=l(lp);Gm=b(O2,"Pyrolysis"),O2.forEach(a),Ph.forEach(a),Vh.forEach(a),Ih.forEach(a),Bm=f(Eh),Wa=s(Eh,"DIV",{class:!0});var _o=l(Wa);_f=s(_o,"DIV",{class:!0});var kh=l(_f);wf=s(kh,"DIV",{style:!0,class:!0});var vb=l(wf);Hm=b(vb,"Energy content "),ip=s(vb,"IMG",{class:!0,src:!0,alt:!0}),vb.forEach(a),$m=f(kh),op=s(kh,"DIV",{class:!0});var gb=l(op);fv=s(gb,"SPAN",{id:!0});var L2=l(fv);Rm=b(L2,"18"),L2.forEach(a),Um=b(gb,`
              MJ/kg`),gb.forEach(a),kh.forEach(a),qm=f(_o),Ef=s(_o,"DIV",{class:!0});var Sh=l(Ef);If=s(Sh,"DIV",{style:!0,class:!0});var hb=l(If);zm=b(hb,"Heat produced "),cp=s(hb,"IMG",{class:!0,src:!0,alt:!0}),hb.forEach(a),Ym=f(Sh),dp=s(Sh,"DIV",{class:!0});var mb=l(dp);pv=s(mb,"SPAN",{id:!0});var A2=l(pv);Wm=b(A2,"11,200"),A2.forEach(a),Km=b(mb,`
              MWh per year`),mb.forEach(a),Sh.forEach(a),Jm=f(_o),Df=s(_o,"DIV",{class:!0});var Th=l(Df);Vf=s(Th,"DIV",{style:!0,class:!0});var bb=l(Vf);Xm=b(bb,"Heat savings "),up=s(bb,"IMG",{class:!0,src:!0,alt:!0}),bb.forEach(a),Qm=f(Th),Pf=s(Th,"DIV",{class:!0});var Oh=l(Pf);Zm=b(Oh,`£
              `),vv=s(Oh,"SPAN",{id:!0});var F2=l(vv);e0=b(F2,"48,000"),F2.forEach(a),t0=b(Oh,`
              per year`),Oh.forEach(a),Th.forEach(a),r0=f(_o),kf=s(_o,"DIV",{class:!0});var Lh=l(kf);Sf=s(Lh,"DIV",{style:!0,class:!0});var xb=l(Sf);s0=b(xb,"Electricity produced "),fp=s(xb,"IMG",{class:!0,src:!0,alt:!0}),xb.forEach(a),a0=f(Lh),pp=s(Lh,"DIV",{class:!0});var yb=l(pp);gv=s(yb,"SPAN",{id:!0});var M2=l(gv);n0=b(M2,"4,800"),M2.forEach(a),l0=b(yb,`
              MWh per year`),yb.forEach(a),Lh.forEach(a),i0=f(_o),Tf=s(_o,"DIV",{class:!0});var Ah=l(Tf);Of=s(Ah,"DIV",{style:!0,class:!0});var _b=l(Of);o0=b(_b,"Electrical savings "),vp=s(_b,"IMG",{class:!0,src:!0,alt:!0}),_b.forEach(a),c0=f(Ah),Lf=s(Ah,"DIV",{class:!0});var Fh=l(Lf);d0=b(Fh,`£
              `),hv=s(Fh,"SPAN",{id:!0});var C2=l(hv);u0=b(C2,"70,000"),C2.forEach(a),f0=b(Fh,`
              per year`),Fh.forEach(a),Ah.forEach(a),p0=f(_o),Af=s(_o,"DIV",{class:!0});var Mh=l(Af);Ff=s(Mh,"DIV",{style:!0,class:!0});var wb=l(Ff);v0=b(wb,"Char produced "),gp=s(wb,"IMG",{class:!0,src:!0,alt:!0}),wb.forEach(a),g0=f(Mh),hp=s(Mh,"DIV",{class:!0});var Eb=l(hp);mv=s(Eb,"SPAN",{id:!0});var j2=l(mv);h0=b(j2,"500"),j2.forEach(a),m0=b(Eb,`
              tonnes`),Eb.forEach(a),Mh.forEach(a),_o.forEach(a),Eh.forEach(a),D2.forEach(a),b0=f(Ka),Mf=s(Ka,"SECTION",{id:!0});var Ch=l(Mf);Ii=s(Ch,"DIV",{class:!0,id:!0});var Hf=l(Ii);Cf=s(Hf,"DIV",{class:!0});var jh=l(Cf);mp=s(jh,"H1",{style:!0,class:!0});var N2=l(mp);x0=b(N2,"The PFP Calculator"),N2.forEach(a),y0=f(jh),Qd=s(jh,"P",{style:!0,class:!0});var Nh=l(Qd);_0=b(Nh,`Our user-friendly calculator is designed to evaluate your project's
            `),w0=s(Nh,"BR",{}),E0=b(Nh,`
            feasibility, relevant technology and energy output`),Nh.forEach(a),jh.forEach(a),I0=f(Hf),Zd=s(Hf,"DIV",{style:!0,class:!0});var Gh=l(Zd);bv=s(Gh,"DIV",{class:!0});var G2=l(bv);jf=s(G2,"IMG",{class:!0,id:!0,src:!0,alt:!0}),G2.forEach(a),D0=f(Gh),Di=s(Gh,"DIV",{class:!0,id:!0});var $f=l(Di);eu=s($f,"DIV",{class:!0,role:!0});var Bh=l(eu);bp=s(Bh,"BUTTON",{type:!0,class:!0});var B2=l(bp);V0=b(B2,"Waste type"),B2.forEach(a),P0=f(Bh),xv=s(Bh,"DIV",{class:!0});var H2=l(xv);te=s(H2,"SELECT",{id:!0,class:!0});var he=l(te);tu=s(he,"OPTION",{class:!0});var $2=l(tu);k0=b($2,"Cow manure"),$2.forEach(a),ru=s(he,"OPTION",{class:!0});var R2=l(ru);S0=b(R2,"Pig slurry"),R2.forEach(a),su=s(he,"OPTION",{class:!0});var U2=l(su);T0=b(U2,"Food waste"),U2.forEach(a),au=s(he,"OPTION",{class:!0});var q2=l(au);O0=b(q2,"Fish waste"),q2.forEach(a),nu=s(he,"OPTION",{class:!0});var z2=l(nu);L0=b(z2,"Poultry litter"),z2.forEach(a),lu=s(he,"OPTION",{class:!0});var Y2=l(lu);A0=b(Y2,"Brewery waste"),Y2.forEach(a),iu=s(he,"OPTION",{class:!0});var W2=l(iu);F0=b(W2,"Pulp & paper waste"),W2.forEach(a),ou=s(he,"OPTION",{class:!0});var K2=l(ou);M0=b(K2,"Textile waste"),K2.forEach(a),cu=s(he,"OPTION",{class:!0});var J2=l(cu);C0=b(J2,"PE plastic"),J2.forEach(a),du=s(he,"OPTION",{class:!0});var X2=l(du);j0=b(X2,"SRF and RDF"),X2.forEach(a),uu=s(he,"OPTION",{class:!0});var Q2=l(uu);N0=b(Q2,"Coffee grounds"),Q2.forEach(a),fu=s(he,"OPTION",{class:!0});var Z2=l(fu);G0=b(Z2,"Crop residues"),Z2.forEach(a),pu=s(he,"OPTION",{class:!0});var e5=l(pu);B0=b(e5,"Maize silage"),e5.forEach(a),vu=s(he,"OPTION",{class:!0});var t5=l(vu);H0=b(t5,"Cereal"),t5.forEach(a),gu=s(he,"OPTION",{class:!0});var r5=l(gu);$0=b(r5,"Grass silage"),r5.forEach(a),hu=s(he,"OPTION",{class:!0});var s5=l(hu);R0=b(s5,"PP Plastic"),s5.forEach(a),mu=s(he,"OPTION",{class:!0});var a5=l(mu);U0=b(a5,"PS Plastic"),a5.forEach(a),bu=s(he,"OPTION",{class:!0});var n5=l(bu);q0=b(n5,"PVC Plastic"),n5.forEach(a),xu=s(he,"OPTION",{class:!0});var l5=l(xu);z0=b(l5,"PET Plastic"),l5.forEach(a),yu=s(he,"OPTION",{class:!0});var i5=l(yu);Y0=b(i5,"Rubber"),i5.forEach(a),_u=s(he,"OPTION",{class:!0});var o5=l(_u);W0=b(o5,"Wood waste"),o5.forEach(a),wu=s(he,"OPTION",{class:!0});var c5=l(wu);K0=b(c5,"Municipal Solid Waste"),c5.forEach(a),Eu=s(he,"OPTION",{class:!0});var d5=l(Eu);J0=b(d5,"Medical Waste"),d5.forEach(a),Iu=s(he,"OPTION",{class:!0});var u5=l(Iu);X0=b(u5,"Ceramics"),u5.forEach(a),Du=s(he,"OPTION",{class:!0});var f5=l(Du);Q0=b(f5,"Sand"),f5.forEach(a),Vu=s(he,"OPTION",{class:!0});var p5=l(Vu);Z0=b(p5,"Dust"),p5.forEach(a),Pu=s(he,"OPTION",{class:!0});var v5=l(Pu);e1=b(v5,"Glass"),v5.forEach(a),ku=s(he,"OPTION",{class:!0});var g5=l(ku);t1=b(g5,"Metals"),g5.forEach(a),he.forEach(a),H2.forEach(a),Bh.forEach(a),r1=f($f),Su=s($f,"DIV",{class:!0,role:!0});var Hh=l(Su);xp=s(Hh,"BUTTON",{type:!0,class:!0});var h5=l(xp);s1=b(h5,"Tonnes per year"),h5.forEach(a),a1=f(Hh),yv=s(Hh,"DIV",{class:!0});var m5=l(yv);Vi=s(m5,"SELECT",{id:!0,class:!0});var Rf=l(Vi);Tu=s(Rf,"OPTION",{class:!0});var b5=l(Tu);n1=b(b5,"< 5 t"),b5.forEach(a),Ou=s(Rf,"OPTION",{class:!0});var x5=l(Ou);l1=b(x5,"5 - 100 t"),x5.forEach(a),Lu=s(Rf,"OPTION",{class:!0});var y5=l(Lu);i1=b(y5,"100 - 1000 t"),y5.forEach(a),Au=s(Rf,"OPTION",{class:!0});var _5=l(Au);o1=b(_5,"1000 - 10,000 t"),_5.forEach(a),Fu=s(Rf,"OPTION",{class:!0});var w5=l(Fu);c1=b(w5,"10,000 - 20,000 t"),w5.forEach(a),Mu=s(Rf,"OPTION",{class:!0});var E5=l(Mu);d1=b(E5,"20,000 - 60,000 t"),E5.forEach(a),Cu=s(Rf,"OPTION",{class:!0});var I5=l(Cu);u1=b(I5,"> 60,000 t"),I5.forEach(a),Rf.forEach(a),m5.forEach(a),Hh.forEach(a),f1=f($f),ju=s($f,"DIV",{class:!0,role:!0});var $h=l(ju);yp=s($h,"BUTTON",{type:!0,class:!0});var D5=l(yp);p1=b(D5,"Client needs"),D5.forEach(a),v1=f($h),_v=s($h,"DIV",{class:!0});var V5=l(_v);cd=s(V5,"SELECT",{id:!0,class:!0});var cg=l(cd);Nu=s(cg,"OPTION",{class:!0});var P5=l(Nu);g1=b(P5,"Electricity"),P5.forEach(a),Gu=s(cg,"OPTION",{class:!0});var k5=l(Gu);h1=b(k5,"Heating / Cooling"),k5.forEach(a),Bu=s(cg,"OPTION",{class:!0});var S5=l(Bu);m1=b(S5,"Carbon credits"),S5.forEach(a),Hu=s(cg,"OPTION",{class:!0});var T5=l(Hu);b1=b(T5,"Fertiliser"),T5.forEach(a),cg.forEach(a),V5.forEach(a),$h.forEach(a),x1=f($f),xg=s($f,"DIV",{}),l(xg).forEach(a),$f.forEach(a),Gh.forEach(a),y1=f(Hf),$u=s(Hf,"DIV",{class:!0,id:!0});var Rh=l($u);_p=s(Rh,"DIV",{class:!0,id:!0});var O5=l(_p);_1=b(O5,"Your project is feasible"),O5.forEach(a),w1=f(Rh),Ru=s(Rh,"P",{style:!0,class:!0});var Uh=l(Ru);E1=b(Uh,`Review your results to explore the different possibilities and
            `),I1=s(Uh,"BR",{}),D1=b(Uh,`
            book a slot with us for personalised guidance on next steps`),Uh.forEach(a),Rh.forEach(a),V1=f(Hf),dd=s(Hf,"DIV",{class:!0});var Gv=l(dd);ud=s(Gv,"A",{id:!0,class:!0,href:!0});var qh=l(ud);wp=s(qh,"IMG",{class:!0,src:!0,alt:!0}),P1=f(qh),ag=s(qh,"SPAN",{});var L5=l(ag);k1=b(L5,"Book a call with us"),L5.forEach(a),qh.forEach(a),S1=f(Gv),fd=s(Gv,"A",{id:!0,class:!0,href:!0});var zh=l(fd);Ep=s(zh,"IMG",{class:!0,src:!0,alt:!0}),T1=f(zh),ng=s(zh,"SPAN",{});var A5=l(ng);O1=b(A5,"Learn more"),A5.forEach(a),zh.forEach(a),L1=f(Gv),mc=s(Gv,"BUTTON",{id:!0,class:!0,href:!0,onclick:!0});var Yh=l(mc);Ip=s(Yh,"IMG",{class:!0,src:!0,alt:!0}),A1=f(Yh),lg=s(Yh,"SPAN",{});var F5=l(lg);F1=b(F5,"Calculate"),F5.forEach(a),Yh.forEach(a),Gv.forEach(a),Hf.forEach(a),M1=f(Ch),Pi=s(Ch,"DIV",{id:!0,class:!0,style:!0}),l(Pi).forEach(a),Ch.forEach(a),C1=f(Ka),ig=s(Ka,"SCRIPT",{});var M5=l(ig);j1=b(M5,`function calculate() {
        const data = {
          'cow-manure': {
            tech: 'anaerobic-digestion',
            gcv: 15.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 15000.0,
            'heat-savings': 1050000.0,
            'electricity-produced': 3000.0,
            'electrical-savings': 1050000.0,
            char: 50.0
          },
          'food-waste': {
            tech: 'anaerobic-digestion',
            gcv: 17.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 17000.0,
            'heat-savings': 1190000.0,
            'electricity-produced': 3400.0,
            'electrical-savings': 1190000.0,
            char: 60.0
          },
          'pig-slurry': {
            tech: 'anaerobic-digestion',
            gcv: 13.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 11380.0,
            'heat-savings': 797600.0,
            'electricity-produced': 2276.0,
            'electrical-savings': 796600.0,
            char: 40.0
          },
          'fish-waste': {
            tech: 'anaerobic-digestion',
            gcv: 15.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 13140.0,
            'heat-savings': 919800.0,
            'electricity-produced': 2628.0,
            'electrical-savings': 919800.0,
            char: 60.0
          },
          'poultry-litter': {
            tech: 'anaerobic-digestion',
            gcv: 14.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 12260.0,
            'heat-savings': 858200.0,
            'electricity-produced': 2452.0,
            'electrical-savings': 858200.0,
            char: 50.0
          },
          'brewery-waste': {
            tech: 'anaerobic-digestion',
            gcv: 12.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 10512.0,
            'heat-savings': 736840.0,
            'electricity-produced': 2102.0,
            'electrical-savings': 736840.0,
            char: 45.0
          },
          'pulp-paper-waste': {
            tech: 'pyrolysis',
            gcv: 15.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 13140.0,
            'heat-savings': 919800.0,
            'electricity-produced': 2628.0,
            'electrical-savings': 919800.0,
            char: 55.0
          },
          'textile-waste': {
            tech: 'pyrolysis',
            gcv: 20.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 17520.0,
            'heat-savings': 1226400.0,
            'electricity-produced': 3504.0,
            'electrical-savings': 1226400.0,
            char: 80.0
          },
          'pe-plastic': {
            tech: 'pyrolysis',
            gcv: 46.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 40336.0,
            'heat-savings': 2823520.0,
            'electricity-produced': 8067.0,
            'electrical-savings': 2823520.0,
            char: 200.0
          },
          'srf-rdf': {
            tech: 'pyrolysis',
            gcv: 18.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 15768.0,
            'heat-savings': 1103760.0,
            'electricity-produced': 3154.0,
            'electrical-savings': 1103760.0,
            char: 75.0
          },
          'coffee-grounds': {
            tech: 'anaerobic-digestion',
            gcv: 16.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 14016.0,
            'heat-savings': 981120.0,
            'electricity-produced': 2803.0,
            'electrical-savings': 981120.0,
            char: 60.0
          },
          'crop-residues': {
            tech: 'anaerobic-digestion',
            gcv: 17.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 14904.0,
            'heat-savings': 1043280.0,
            'electricity-produced': 2981.0,
            'electrical-savings': 1043280.0,
            char: 65.0
          },
          'maize-silage': {
            tech: 'anaerobic-digestion',
            gcv: 17.51,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 17500.0,
            'heat-savings': 1225000.0,
            'electricity-produced': 4375.0,
            'electrical-savings': 1531250.0,
            char: 50.0
          },
          cereal: {
            tech: 'anaerobic-digestion',
            gcv: 15.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 15000.0,
            'heat-savings': 1050000.0,
            'electricity-produced': 3750.0,
            'electrical-savings': 1312500.0,
            char: 40.0
          },
          'grass-silage': {
            tech: 'anaerobic-digestion',
            gcv: 18.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 18000.0,
            'heat-savings': 1260000.0,
            'electricity-produced': 4500.0,
            'electrical-savings': 1575000.0,
            char: 60.0
          },
          'pp-plastic': {
            tech: 'pyrolysis',
            gcv: 44.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 44000.0,
            'heat-savings': 3080000.0,
            'electricity-produced': 11000.0,
            'electrical-savings': 3850000.0,
            char: 50.0
          },
          'ps-plastic': {
            tech: 'pyrolysis',
            gcv: 41.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 41000.0,
            'heat-savings': 2870000.0,
            'electricity-produced': 10250.0,
            'electrical-savings': 3587500.0,
            char: 40.0
          },
          'pvc-plastic': {
            tech: 'pyrolysis',
            gcv: 18.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 18000.0,
            'heat-savings': 1260000.0,
            'electricity-produced': 4500.0,
            'electrical-savings': 1575000.0,
            char: 20.0
          },
          'pet-plastic': {
            tech: 'pyrolysis',
            gcv: 21.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 21000.0,
            'heat-savings': 1470000.0,
            'electricity-produced': 5250.0,
            'electrical-savings': 1837500.0,
            char: 30.0
          },
          rubber: {
            tech: 'pyrolysis',
            gcv: 32.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 32000.0,
            'heat-savings': 2240000.0,
            'electricity-produced': 8000.0,
            'electrical-savings': 2800000.0,
            char: 40.0
          },
          'wood-waste': {
            tech: 'pyrolysis',
            gcv: 15.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 15000.0,
            'heat-savings': 1050000.0,
            'electricity-produced': 3750.0,
            'electrical-savings': 1312500.0,
            char: 40.0
          },
          'municipal-solid-waste': {
            tech: 'pyrolysis',
            gcv: 10.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 10000.0,
            'heat-savings': 700000.0,
            'electricity-produced': 2500.0,
            'electrical-savings': 875000.0,
            char: null
          },
          'medical-waste': {
            tech: 'pyrolysis',
            gcv: 13.0,
            feasibility: 'Y',
            tonnes: 8760.0,
            'heat-produced': 13000.0,
            'heat-savings': 910000.0,
            'electricity-produced': 3250.0,
            'electrical-savings': 1137500.0,
            char: null
          },
          ceramics: {
            tech: null,
            gcv: 0.0,
            feasibility: 'N',
            tonnes: null,
            'heat-produced': null,
            'heat-savings': null,
            'electricity-produced': null,
            'electrical-savings': null,
            char: null
          },
          sand: {
            tech: null,
            gcv: 0.0,
            feasibility: 'N',
            tonnes: null,
            'heat-produced': null,
            'heat-savings': null,
            'electricity-produced': null,
            'electrical-savings': null,
            char: null
          },
          dust: {
            tech: null,
            gcv: 0.0,
            feasibility: 'N',
            tonnes: null,
            'heat-produced': null,
            'heat-savings': null,
            'electricity-produced': null,
            'electrical-savings': null,
            char: null
          },
          glass: {
            tech: null,
            gcv: 0.0,
            feasibility: 'N',
            tonnes: null,
            'heat-produced': null,
            'heat-savings': null,
            'electricity-produced': null,
            'electrical-savings': null,
            char: null
          },
          metals: {
            tech: null,
            gcv: 0.0,
            feasibility: 'N',
            tonnes: null,
            'heat-produced': null,
            'heat-savings': null,
            'electricity-produced': null,
            'electrical-savings': null,
            char: null
          }
        }

        var d = data[document.querySelector('#colorselector').value]
        var feasible = d['feasibility'] == 'Y'
        document.querySelector('#feasible').innerHTML = 'Your project is ' + (feasible ? '' : '<u>not</u> ') + 'feasible'

        if (feasible) {
          var calcimg = document.querySelector('#calc-img')
          if (calcimg.src.includes('Group14.png')) {
            calcimg.src = '/assets/cow 1 (1).png'
          } else {
            setTimeout(() => {
              calcimg.src = '/assets/Group14.png'
            }, 150)
          }

          var results = document.querySelector('#results')
          if (results.classList.contains('opacity-0')) {
            setTimeout(() => {
              document.getElementById('calculate').scrollIntoView({ behavior: 'smooth' })
            }, 500)
            results.classList.toggle('translate-y-full')
            setTimeout(() => {
              results.classList.toggle('opacity-0')
            }, 100)
          } else {
            results.classList.toggle('opacity-0')
            setTimeout(() => {
              results.classList.toggle('translate-y-full')
            }, 100)
            setTimeout(() => {
              document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })
            }, 20)
          }

          var wt1 = document.querySelector('#colorselector')
          document.querySelector('#waste-type1').innerHTML = wt1.options[wt1.selectedIndex].text

          var wt2 = document.querySelector('#colorselector2')
          document.querySelector('#waste-type2').innerHTML = wt2.options[wt2.selectedIndex].text

          const techs = { 'anaerobic-digestion': 'Anaerobic Digestion', pyrolysis: 'Pyrolysis' }
          document.querySelector('#matched-tech').innerHTML = techs[d['tech']]
          document.querySelector('#matched-img').src = '/assets/medres/' + d['tech'] + '.jpg'

          for (var key in d) {
            if (key != 'feasibility') {
              var el = document.querySelector('#' + key)
              if (el) {
                el.innerHTML = (d[key] * (key == 'gcv' ? 1 : Math.round(wt2.value / 8760, 2))).toLocaleString()
              }
            }
          }
        }

        var calcselectors = document.querySelector('#calc-selectors')
        calcselectors.classList.toggle('translate-x-full')
        calcselectors.classList.toggle('opacity-0')

        var calcmessage = document.querySelector('#calc-message')
        calcmessage.classList.toggle('-translate-x-full')
        calcmessage.classList.toggle('opacity-0')

        var calcbutton = document.querySelector('#calc-button')
        // calcbutton.classList.toggle('-translate-x-full')
        calcbutton.classList.toggle('-translate-x-[338px]')
        var calctext = document.querySelector('#calc-button span').innerHTML
        if (calctext == 'Calculate') {
          document.querySelector('#calc-button span').innerHTML = 'Start over'
        } else {
          document.querySelector('#calc-button span').innerHTML = 'Calculate'
        }
        calcbutton.classList.toggle('w-1/4')
        calcbutton.classList.toggle('w-1/3')

        var callbutton = document.querySelector('#call-button')
        callbutton.classList.toggle('-translate-x-full')
        callbutton.classList.toggle('opacity-0')
        setTimeout(() => {
          callbutton.classList.toggle('glow')
        }, 3000)

        var callbutton2 = document.querySelector('#call-button2')
        callbutton2.classList.toggle('-translate-x-full')
        callbutton2.classList.toggle('opacity-0')
      }`),M5.forEach(a),Ka.forEach(a),N1=f(wv),og=s(wv,"SCRIPT",{});var C5=l(og);G1=b(C5,`function toggleElement(k) {
      var element = document.querySelector('#' + k)
      toggleAlOff()
      // element.classList.contains('opacity-0')
      setTimeout(() => {
        element.classList.toggle('-translate-x-full')
        element.classList.toggle('opacity-0')
      }, 10)
    }

    function toggleElementOff(k) {
      var element = document.querySelector('#' + k)
      // element.classList.toggle('hidden')
      element.classList.add('-translate-x-full')
      element.classList.add('opacity-0')
    }

    function toggleAlOff() {
      toggleElementOff('food')
      toggleElementOff('cow')
      toggleElementOff('bottle')
      toggleElementOff('technology')
    }

    function toggleAll() {
      toggleElement('food')
      toggleElement('cow')
      toggleElement('bottle')
      toggleElement('technology')
    }

    function grow() {
      var element = document.querySelector('#field')
      element.classList.toggle('fixed')
      element.classList.toggle('top-0')
      element.classList.toggle('left-0')
      element.classList.toggle('fullw')

      var growbuttons = document.querySelector('.growbuttons')
      growbuttons.classList.toggle('fullb')

      var cowpanel = document.querySelector('#cow-panel')
      cowpanel.classList.toggle('fullc')

      var techbuttons = document.querySelector('.techbuttons')
      techbuttons.classList.toggle('fulld')

      document.querySelector('#cow-shadow').classList.toggle('hidden')
    }

    setTimeout(() => {
      toggleAll()
      toggleAll()
    }, 100)`),C5.forEach(a),wv.forEach(a),this.h()},h(){t(c,"id","expandElement"),t(c,"class","fixed inset-0 bg-blue-500 text-white flex items-center justify-center"),t(i,"class","relative"),t(p,"id","expandButton"),t(p,"class","bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"),S(n,"display","none"),t(k,"class","uppercase pb-5 text-pfp-green font-bold"),t(G,"class","card-title text-3xl"),t(q,"class","pt-6"),t(Q,"class","mr-3"),L(Q.src,Z="/assets/arrow-right-circle.png")||t(Q,"src",Z),t(Q,"alt",""),t(ie,"class","mt-10 w-fit p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"),t(ie,"href","/explore/#map"),t(F,"class","w-3/5 p-10 pr-12 bg-white"),t(ce,"class","absolute top-[30%] h-36 left-[72%] z-0"),L(ce.src,we="/assets/cow 1.png")||t(ce,"src",we),t(ce,"alt",""),t(re,"class","absolute top-[35%] h-40 left-[68%] z-10"),L(re.src,_r="/assets/manure 1.png")||t(re,"src",_r),t(re,"alt",""),t(pe,"class","absolute top-[35%] h-28 left-[75%] z-30"),L(pe.src,wr="/assets/apple 1.png")||t(pe,"src",wr),t(pe,"alt",""),t(oe,"class","absolute top-60 h-20 left-200 ml-10 z-0"),L(oe.src,Ot="/assets/leaf2 1.png")||t(oe,"src",Ot),t(oe,"alt",""),t(Re,"class","absolute top-[35%] h-48 left-[65%] z-30"),L(Re.src,Za="/assets/pet bottle 1.png")||t(Re,"src",Za),t(Re,"alt",""),t(Er,"class","absolute top-[35%] h-48 left-[65%] z-20"),L(Er.src,en="/assets/woodchips 1.png")||t(Er,"src",en),t(Er,"alt",""),t(B,"class","absolute top-96 h-30 left-200 ml-80 z-0"),L(B.src,W="/assets/leaf1 1.png")||t(B,"src",W),t(B,"alt",""),t(X,"class","absolute top-50 h-30 left-200 ml-80 z-0"),L(X.src,Lt="/assets/fish 1.png")||t(X,"src",Lt),t(X,"alt",""),t(R,"class","w-2/5 p-4 bg-light-green"),t(R,"id","topRightCluster"),t(x,"class","flex rounded-2xl overflow-hidden mt-12"),t(M,"class","w-[1530px]"),t(Mt,"class","card-title text-3xl pb-10 justify-center"),L(zn.src,_c="/assets/pet bottle 1.png")||t(zn,"src",_c),t(zn,"alt",""),t(Ir,"class","flex justify-center h-40"),t(Yn,"class","w-2/4"),t(Ct,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),L(jl.src,wc="/assets/Group 7 (2).png")||t(jl,"src",wc),t(jl,"alt",""),t(Zt,"class","flex justify-center h-40"),t(fa,"class","w-2/4"),t(Ue,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),L(Kn.src,Ec="/assets/Group 7 (3).png")||t(Kn,"src",Ec),t(Kn,"alt",""),t(Zr,"class","flex justify-center h-40"),t(Jn,"class","w-2/4"),t(qe,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),L(ze.src,rs="/assets/Group 7.png")||t(ze,"src",rs),t(ze,"alt",""),t(Dr,"class","flex justify-center h-40"),t(Nl,"class","w-2/4"),t(ts,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),L(As.src,sn="/assets/Group 7 (1).png")||t(As,"src",sn),t(As,"alt",""),t(er,"class","flex justify-center h-40"),t(Fs,"class","w-2/4"),t(jt,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(me,"class","grid gap-6 md:grid-cols-5 grid-cols-2 w-full"),t(me,"id","thegrid"),t(tr,"class","relative z-10 w-full text-white mb-[-90px] mt-16 text-center font-semibold text-xl tracking-wider uppercase"),t(ga,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent"),t(Zn,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-end after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase"),t(Pr,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase"),t(ss,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase"),t(el,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-start after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase"),t(Gt,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent"),t(Oe,"class","flex w-full mt-10 pt-4 rounded-2xl mb-10 bg-[#2E3855]"),S(Oe,"height","70px"),t(Ms,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(Cs,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(ns,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(js,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(ma,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(Tr,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(Le,"class","grid gap-6 grid-cols-6 w-full"),t(Le,"id","thegrid2"),t(Ns,"class","p-3 text-white arrow arrow-bottom relative w-1/3 bg-gradient-to-r from-[#FF5252] to-[#59AFFF] rounded-2xl font-bold text-xl leading-10 text-[#2E3855] mb-0 text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-[#AD85AC] after:border-r-transparent after:border-l-transparent"),t(rl,"class","flex justify-center mt-6 p-6"),t(Or,"class","p-3 relative w-1/3 bg-[#D0E6F2] leading-10 text-[#2E3855] mb-0 rounded-2xl font-bold text-xl text-center"),t(al,"class","flex justify-center mt-[-10px] p-6 mb-[-20px]"),t(K,"class","mb-10 bg-white mt-8 container mx-auto p-10 rounded-2xl"),S(K,"font-family","'Poppins', sans-serif"),t(nr,"class","h-80 p-6"),L(nr.src,Dd="/assets/Frame 19 (1).png")||t(nr,"src",Dd),t(nr,"alt",""),t(nl,"class","bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-l-2xl"),S(Bs,"font-family","'Poppins', sans-serif"),t(Bs,"class","uppercase pb-0 text-pfp-green font-bold"),S(Ae,"font-family","'Poppins', sans-serif"),t(Ae,"class","card-title text-3xl leading-10 text-[#2E3855] mt-5"),S(on,"font-family","'Public Sans', sans-serif"),t(on,"class","text-[#2E3855] tracking-wider mt-5"),t(be,"class","md:w-3/5 w-full p-14 pt-8 pb-6"),t(xa,"class","flex md:flex-row flex-col items-center rounded-2xl bg-white w-full"),t(ar,"class","container mx-auto rounded-2xl"),t(Ht,"class","mr-2"),L(Ht.src,cn="/assets/x-circle.png")||t(Ht,"src",cn),t(Ht,"alt",""),t(os,"type","button"),t(os,"onclick","toggleElementOff('cow')"),S(os,"font-family","'Public Sans', sans-serif"),S(os,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(os,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(xe,"class","relative left-[98%] rounded-r-2xl"),S(Hs,"height","70%"),S(Hs,"padding","20px"),S(Hs,"margin-left","5%"),L(Hs.src,Vc="/assets/cow 1.png")||t(Hs,"src",Vc),t(Hs,"alt",""),t(Ar,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),S(dn,"font-family","'Poppins', sans-serif"),t(dn,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(xt,"class","font-bold text-xl"),t(dl,"class","ml-5 map-gcv info-pop"),L(dl.src,pn="/assets/Frame 15.png")||t(dl,"src",pn),t(dl,"alt",""),S($s,"font-family","'Public Sans', sans-serif"),t($s,"class","flex items-center text-[#2E3855] text-lg"),t(Mr,"class","font-bold text-xl"),S(ot,"font-family","'Public Sans', sans-serif"),t(ot,"class","text-[#2E3855] text-lg"),t(cs,"class","w-1/2"),t(it,"class","flex justify-between items-center w-full mt-[-50px]"),t(ir,"class","mr-3"),L(ir.src,kc="/assets/bar-chart.png")||t(ir,"src",kc),t(ir,"alt",""),t(yt,"type","button"),S(yt,"font-family","'Public Sans', sans-serif"),t(yt,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(vn,"class","mr-3"),L(vn.src,We="/assets/bar-chart.png")||t(vn,"src",We),t(vn,"alt",""),t(Us,"type","button"),S(Us,"font-family","'Public Sans', sans-serif"),t(Us,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t($t,"class","flex"),t(ps,"class","mr-3"),L(ps.src,Mi="/assets/bar-chart.png")||t(ps,"src",Mi),t(ps,"alt",""),t(qs,"type","button"),S(qs,"font-family","'Public Sans', sans-serif"),t(qs,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Ys,"class","mr-3"),L(Ys.src,Pd="/assets/bar-chart (1).png")||t(Ys,"src",Pd),t(Ys,"alt",""),t(or,"type","button"),S(or,"font-family","'Public Sans', sans-serif"),t(or,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(wa,"class","flex justify-start"),t(cr,"class","mr-3"),L(cr.src,Ws="/assets/book-open.png")||t(cr,"src",Ws),t(cr,"alt",""),t(jr,"href","https://www.host.nl/en/case/guichen-france/"),t(jr,"target","_blank"),S(Ks,"font-family","'Poppins', sans-serif"),t(Ks,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(vs,"class","ml-5 map-case-study info-pop"),L(vs.src,_t="/assets/Frame 15.png")||t(vs,"src",_t),t(vs,"alt",""),t(Ke,"class","flex justify-start items-center mt-8 pl-2"),t(Yl,"class","mb-2 text-lg font-light text-[#2E3855]"),t(Ut,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),S(Rt,"font-family","'Public Sans', sans-serif"),t(Rt,"class","mt-3 pl-2"),t(Me,"class","p-6"),L(Kl.src,Tc="/assets/medres/anaerobic-digestion.jpg")||t(Kl,"src",Tc),t(Kl,"class","rounded-full w-16 h-16"),t(Kl,"alt",""),t(dr,"class","mt-2"),S(dt,"font-family","'Poppins', sans-serif"),t(dt,"class","mt-0 font-bold text-lg leading-10 text-white"),S(gs,"font-family","'Public Sans', sans-serif"),t(gs,"class","text-white text-xl mt-1 tracking-wider"),t(ye,"class","ml-5"),t(ct,"class","flex"),t(Xs,"class","mr-3"),L(Xs.src,Lc="/assets/arrow-right-circle.png")||t(Xs,"src",Lc),t(Xs,"alt",""),t(Et,"type","button"),t(Et,"onclick","toggleAlOff();"),S(Et,"font-family","'Public Sans', sans-serif"),t(Et,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(Hr,"href","#calculator"),t(hs,"class","mr-3"),L(hs.src,bn="/assets/arrow-right-circle.png")||t(hs,"src",bn),t(hs,"alt",""),t(It,"type","button"),S(It,"font-family","'Public Sans', sans-serif"),t(It,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(Qs,"href","/green-energy/"),t(wt,"class","flex w-full"),t(Da,"class","flex flex-col p-5"),t(Js,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(Ye,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(Ye,"id","cow"),t(Rr,"class","mr-2"),L(Rr.src,kd="/assets/x-circle.png")||t(Rr,"src",kd),t(Rr,"alt",""),t(Pe,"type","button"),t(Pe,"onclick","toggleElementOff('food')"),S(Pe,"font-family","'Public Sans', sans-serif"),S(Pe,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(Pe,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(ut,"class","relative left-[98%] rounded-r-2xl"),S(Zs,"height","130px"),S(Zs,"padding","20px"),S(Zs,"margin-left","17%"),L(Zs.src,Fc="/assets/Group 7 (2).png")||t(Zs,"src",Fc),t(Zs,"alt",""),t(ur,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),S(yn,"font-family","'Poppins', sans-serif"),t(yn,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(Ur,"class","font-bold text-xl"),t(Ce,"class","ml-5 map-gcv info-pop"),L(Ce.src,Ta="/assets/Frame 15.png")||t(Ce,"src",Ta),t(Ce,"alt",""),S(Dt,"font-family","'Public Sans', sans-serif"),t(Dt,"class","flex items-center text-[#2E3855] text-lg"),t(Xe,"class","font-bold text-xl"),S(Oa,"font-family","'Public Sans', sans-serif"),t(Oa,"class","text-[#2E3855] text-lg"),t(xs,"class","w-1/2"),t(Je,"class","flex justify-between items-center w-full mt-[-50px]"),t(gl,"class","mr-3"),L(gl.src,Xl="/assets/bar-chart.png")||t(gl,"src",Xl),t(gl,"alt",""),t(fr,"type","button"),S(fr,"font-family","'Public Sans', sans-serif"),t(fr,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(ft,"class","mr-3"),L(ft.src,qu="/assets/bar-chart.png")||t(ft,"src",qu),t(ft,"alt",""),t(Vt,"type","button"),S(Vt,"font-family","'Public Sans', sans-serif"),t(Vt,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(je,"class","flex"),t(ra,"class","mr-3"),L(ra.src,La="/assets/bar-chart.png")||t(ra,"src",La),t(ra,"alt",""),t(Pt,"type","button"),S(Pt,"font-family","'Public Sans', sans-serif"),t(Pt,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Aa,"class","mr-3"),L(Aa.src,Sd="/assets/bar-chart (1).png")||t(Aa,"src",Sd),t(Aa,"alt",""),t(_s,"type","button"),S(_s,"font-family","'Public Sans', sans-serif"),t(_s,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(En,"class","flex justify-start"),t(ml,"class","mr-3"),L(ml.src,bl="/assets/book-open.png")||t(ml,"src",bl),t(ml,"alt",""),t(Zl,"href","https://www.host.nl/en/case/guichen-france/"),t(Zl,"target","_blank"),S(vr,"font-family","'Poppins', sans-serif"),t(vr,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(xl,"class","ml-5 map-case-study info-pop"),L(xl.src,ti="/assets/Frame 15.png")||t(xl,"src",ti),t(xl,"alt",""),t(sa,"class","flex justify-start items-center mt-8 pl-2"),t(In,"class","mb-2 text-lg font-light text-[#2E3855]"),t(qr,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),S(Ne,"font-family","'Public Sans', sans-serif"),t(Ne,"class","mt-3 pl-2"),t(de,"class","p-6"),L(na.src,Vn="/assets/medres/anaerobic-digestion.jpg")||t(na,"src",Vn),t(na,"class","rounded-full w-16 h-16"),t(na,"alt",""),t(ws,"class","mt-2"),S(zr,"font-family","'Poppins', sans-serif"),t(zr,"class","mt-0 font-bold text-lg leading-10 text-white"),S(Yr,"font-family","'Public Sans', sans-serif"),t(Yr,"class","text-white text-xl mt-1 tracking-wider"),t(Ze,"class","ml-5"),t(Qe,"class","flex"),t(wl,"class","mr-3"),L(wl.src,Yi="/assets/arrow-right-circle.png")||t(wl,"src",Yi),t(wl,"alt",""),t(Ma,"type","button"),t(Ma,"onclick","toggleAlOff();"),S(Ma,"font-family","'Public Sans', sans-serif"),t(Ma,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(kn,"href","#calculator"),t(zt,"class","mr-3"),L(zt.src,El="/assets/arrow-right-circle.png")||t(zt,"src",El),t(zt,"alt",""),t(Es,"type","button"),S(Es,"font-family","'Public Sans', sans-serif"),t(Es,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(Wr,"href","/green-energy/"),t(Pn,"class","flex w-full"),t(Dn,"class","flex flex-col p-5"),t(ri,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t($r,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t($r,"id","food"),t(Ca,"class","mr-2"),L(Ca.src,ja="/assets/x-circle.png")||t(Ca,"src",ja),t(Ca,"alt",""),t(gr,"type","button"),t(gr,"onclick","toggleElementOff('bottle')"),S(gr,"font-family","'Public Sans', sans-serif"),S(gr,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(gr,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(Is,"class","relative left-[98%] rounded-r-2xl"),S(Kr,"height","130px"),S(Kr,"padding","20px"),S(Kr,"margin-left","30%"),L(Kr.src,Td="/assets/pet bottle 1.png")||t(Kr,"src",Td),t(Kr,"alt",""),t(Ds,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),S(hr,"font-family","'Poppins', sans-serif"),t(hr,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(Ji,"class","font-bold text-xl"),t(la,"class","ml-5 map-gcv info-pop"),L(la.src,ni="/assets/Frame 15.png")||t(la,"src",ni),t(la,"alt",""),S(mr,"font-family","'Public Sans', sans-serif"),t(mr,"class","flex items-center text-[#2E3855] text-lg"),t(Ga,"class","font-bold text-xl"),S(br,"font-family","'Public Sans', sans-serif"),t(br,"class","text-[#2E3855] text-lg"),t(_e,"class","w-1/2"),t(On,"class","flex justify-between items-center w-full mt-[-50px]"),t(An,"class","mr-3"),L(An.src,zu="/assets/bar-chart.png")||t(An,"src",zu),t(An,"alt",""),t(Ln,"type","button"),S(Ln,"font-family","'Public Sans', sans-serif"),t(Ln,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(oi,"class","mr-3"),L(oi.src,Dl="/assets/bar-chart.png")||t(oi,"src",Dl),t(oi,"alt",""),t(Fn,"type","button"),S(Fn,"font-family","'Public Sans', sans-serif"),t(Fn,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Vs,"class","flex"),t(Mn,"class","mr-3"),L(Mn.src,Uc="/assets/bar-chart.png")||t(Mn,"src",Uc),t(Mn,"alt",""),t(ia,"type","button"),S(ia,"font-family","'Public Sans', sans-serif"),t(ia,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(jn,"class","mr-3"),L(jn.src,Yu="/assets/bar-chart (1).png")||t(jn,"src",Yu),t(jn,"alt",""),t(Wt,"type","button"),S(Wt,"font-family","'Public Sans', sans-serif"),t(Wt,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Ba,"class","flex justify-start"),t(ui,"class","mr-3"),L(ui.src,Wu="/assets/book-open.png")||t(ui,"src",Wu),t(ui,"alt",""),t(oa,"href","https://www.host.nl/en/case/guichen-france/"),t(oa,"target","_blank"),S(Jr,"font-family","'Poppins', sans-serif"),t(Jr,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(Kt,"class","ml-5 map-case-study info-pop"),L(Kt.src,qc="/assets/Frame 15.png")||t(Kt,"src",qc),t(Kt,"alt",""),t(Ha,"class","flex justify-start items-center mt-8 pl-2"),t($a,"class","mb-2 text-lg font-light text-[#2E3855]"),t(Ra,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),S(Xr,"font-family","'Public Sans', sans-serif"),t(Xr,"class","mt-3 pl-2"),t(Yt,"class","p-6"),L(pi.src,zc="/assets/medres/pyrolysis.jpg")||t(pi,"src",zc),t(pi,"class","rounded-full w-16 h-16"),t(pi,"alt",""),t(qa,"class","mt-2 w-16"),S(vi,"font-family","'Poppins', sans-serif"),t(vi,"class","mt-0 font-bold text-lg leading-10 text-white"),S(Qr,"font-family","'Public Sans', sans-serif"),t(Qr,"class","text-white text-xl mt-1 tracking-wider"),t(za,"class","ml-5"),t(Vl,"class","flex"),t(Xi,"class","mr-3"),L(Xi.src,zf="/assets/arrow-right-circle.png")||t(Xi,"src",zf),t(Xi,"alt",""),t(Gn,"type","button"),t(Gn,"onclick","toggleAlOff();"),S(Gn,"font-family","'Public Sans', sans-serif"),t(Gn,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(gi,"href","#calculator"),t(Yc,"class","mr-3"),L(Yc.src,Yf="/assets/arrow-right-circle.png")||t(Yc,"src",Yf),t(Yc,"alt",""),t(Qi,"type","button"),S(Qi,"font-family","'Public Sans', sans-serif"),t(Qi,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(nc,"href","/green-energy/"),t(ac,"class","flex w-full"),t(Ua,"class","flex flex-col p-5"),t(Ps,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(pt,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(pt,"id","bottle"),t(Wc,"class","mr-2"),L(Wc.src,Wf="/assets/x-circle.png")||t(Wc,"src",Wf),t(Wc,"alt",""),t(Hn,"type","button"),t(Hn,"onclick","toggleElementOff('technology')"),S(Hn,"font-family","'Public Sans', sans-serif"),S(Hn,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(Hn,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(Bn,"class","relative left-[98%] rounded-r-2xl"),S(Zi,"height","130px"),S(Zi,"padding","20px"),S(Zi,"margin-left","10%"),L(Zi.src,Kf="/assets/Group14.png")||t(Zi,"src",Kf),t(Zi,"alt",""),t($d,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),S(Kc,"font-family","'Poppins', sans-serif"),t(Kc,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(ic,"class","font-bold text-xl"),t(Tl,"class","ml-5 map-gcv info-pop"),L(Tl.src,qv="/assets/Frame 15.png")||t(Tl,"src",qv),t(Tl,"alt",""),S(Sl,"font-family","'Public Sans', sans-serif"),t(Sl,"class","flex items-center text-[#2E3855] text-lg"),t(cc,"class","font-bold text-xl"),S(oc,"font-family","'Public Sans', sans-serif"),t(oc,"class","text-[#2E3855] text-lg"),t(hi,"class","w-1/2"),t(lc,"class","flex justify-between items-center w-full mt-[-50px]"),t(Jc,"class","mr-3"),L(Jc.src,zv="/assets/bar-chart.png")||t(Jc,"src",zv),t(Jc,"alt",""),t(eo,"type","button"),S(eo,"font-family","'Public Sans', sans-serif"),t(eo,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(mi,"class","mr-3"),L(mi.src,Jf="/assets/bar-chart.png")||t(mi,"src",Jf),t(mi,"alt",""),t(Ol,"type","button"),S(Ol,"font-family","'Public Sans', sans-serif"),t(Ol,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t($n,"class","flex"),t(Qc,"class","mr-3"),L(Qc.src,Xf="/assets/bar-chart.png")||t(Qc,"src",Xf),t(Qc,"alt",""),t(to,"type","button"),S(to,"font-family","'Public Sans', sans-serif"),t(to,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(so,"class","mr-3"),L(so.src,Yv="/assets/bar-chart (1).png")||t(so,"src",Yv),t(so,"alt",""),t(ro,"type","button"),S(ro,"font-family","'Public Sans', sans-serif"),t(ro,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(dc,"class","flex justify-start"),t(ed,"class","mr-3"),L(ed.src,Wv="/assets/book-open.png")||t(ed,"src",Wv),t(ed,"alt",""),t(td,"href","https://www.host.nl/en/case/guichen-france/"),t(td,"target","_blank"),S(ao,"font-family","'Poppins', sans-serif"),t(ao,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(no,"class","ml-5 map-case-study info-pop"),L(no.src,Qf="/assets/Frame 15.png")||t(no,"src",Qf),t(no,"alt",""),t(Rn,"class","flex justify-start items-center mt-8 pl-2"),t(uc,"class","mb-2 text-lg font-light text-[#2E3855]"),t(fc,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),S(lo,"font-family","'Public Sans', sans-serif"),t(lo,"class","mt-3 pl-2"),t(ca,"class","p-6"),L(io.src,Zf="/assets/medres/pyrolysis.jpg")||t(io,"src",Zf),t(io,"class","rounded-full w-16 h-16"),t(io,"alt",""),t(Ud,"class","mt-2 w-16"),S(ad,"font-family","'Poppins', sans-serif"),t(ad,"class","mt-0 font-bold text-lg leading-10 text-white"),S(ld,"font-family","'Public Sans', sans-serif"),t(ld,"class","text-white text-xl mt-1 tracking-wider"),t(vc,"class","ml-5"),t(pc,"class","flex"),t(Ya,"class","mr-3"),L(Ya.src,Kv="/assets/arrow-right-circle.png")||t(Ya,"src",Kv),t(Ya,"alt",""),t(yi,"type","button"),t(yi,"onclick","toggleAlOff();"),S(yi,"font-family","'Public Sans', sans-serif"),t(yi,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(qd,"href","#calculator"),t(co,"class","mr-3"),L(co.src,Jv="/assets/arrow-right-circle.png")||t(co,"src",Jv),t(co,"alt",""),t(oo,"type","button"),S(oo,"font-family","'Public Sans', sans-serif"),t(oo,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(zd,"href","/green-energy/"),t(xi,"class","flex w-full"),t(bi,"class","flex flex-col p-5"),t(Rd,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(Pl,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(Pl,"id","technology"),t(ge,"class","items-center rounded-2xl"),t(ge,"id","cow-panel"),S(ge,"z-index","30"),S(ge,"position","relative"),S(ge,"top","0px"),S(ge,"left","0px"),S(ge,"width","700px"),S(ge,"height","0px"),t(ks,"id","cow-shadow"),t(ks,"class","bg-base-100"),S(ks,"width","1000px"),S(ks,"height","750px"),S(ks,"position","relative"),S(ks,"left","-1000px"),S(ks,"top","0px"),S(ks,"margin-bottom","-750px"),S(ks,"z-index","99"),t(bt,"id","map"),t(bt,"class","pt-10"),t(fo,"class","mr-3"),L(fo.src,Xv="/assets/Group 7 (2).png")||t(fo,"src",Xv),t(fo,"alt",""),t(Ll,"type","button"),t(Ll,"onclick","toggleElement('food')"),S(Ll,"font-family","'Public Sans', sans-serif"),S(Ll,"left","520px"),S(Ll,"top","-430px"),t(Ll,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(po,"class","mr-3"),L(po.src,Qv="/assets/manure 1.png")||t(po,"src",Qv),t(po,"alt",""),t(Al,"type","button"),t(Al,"onclick","toggleElement('cow')"),S(Al,"font-family","'Public Sans', sans-serif"),S(Al,"left","780px"),S(Al,"top","-200px"),t(Al,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(ep,"class","mr-3"),L(ep.src,Ub="/assets/pet bottle 1.png")||t(ep,"src",Ub),t(ep,"alt",""),t(gc,"type","button"),t(gc,"onclick","toggleElement('bottle')"),S(gc,"font-family","'Public Sans', sans-serif"),S(gc,"left","120px"),S(gc,"top","-70px"),t(gc,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-2 mb-2"),S(pf,"color","#ffffff"),S(pf,"font-size","18px"),S(pf,"margin","-5px 0px -5px -5px"),t(vo,"type","button"),t(vo,"onclick","toggleElement('technology')"),S(vo,"font-family","'Public Sans', sans-serif"),S(vo,"background","#2e3855"),S(vo,"left","560px"),S(vo,"top","-530px"),t(vo,"class","techbuttons techbutton-dark w-40 h-12 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-base rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2 uppercase"),t(kt,"id","buttons"),S(kt,"z-index","99"),t(av,"type","text"),t(av,"placeholder","Search up waste..."),t(av,"class","px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"),t(rg,"class","i-heroicons-outline-search"),t(tp,"aria-label","search"),t(tp,"class","btn btn-square btn-ghost ml-[-45px]"),t(vf,"class","inline-flex items-center justify-center"),t(Kd,"class","w-20 mr-3"),L(Kd.src,qb="/assets/Frame 19.svg")||t(Kd,"src",qb),t(Kd,"alt",""),S(Kd,"width","50px"),S(Kd,"height","50px"),t(Wd,"type","button"),t(Wd,"onclick","grow()"),S(Wd,"font-family","'Public Sans', sans-serif"),t(Wd,"class","growbutton ml-[10px] w-10 h-10 inline-flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mt-1"),t(_i,"class","growbuttons inline-flex"),t(_i,"id","full-screen-buttons"),S(_i,"width","200px"),S(_i,"position","relative"),S(_i,"top","-10px"),S(_i,"left","calc(100% - 300px)"),t(Un,"class","container duration-300 transform mx-auto w-full bg-cover bg-center bg-no-repeat bg-[url(/assets/field.png)] rounded-2xl"),S(Un,"padding-top","520px"),S(Un,"z-index","29"),t(Un,"id","field"),t(Un,"onclick","toggleAlOff();"),t(Yd,"class","pt-10 rounded-2xl mb-10"),t(rp,"class","h-80 p-6"),L(rp.src,zb="/assets/tech.png")||t(rp,"src",zb),t(rp,"alt",""),t(lv,"class","bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-l-2xl"),S(sp,"font-family","'Poppins', sans-serif"),t(sp,"class","uppercase pb-0 text-pfp-green font-bold"),S(Jd,"font-family","'Poppins', sans-serif"),t(Jd,"class","card-title text-3xl leading-10 text-[#2E3855] mt-5"),S(ap,"font-family","'Public Sans', sans-serif"),t(ap,"class","text-[#2E3855] tracking-wider mt-5"),t(go,"class","md:w-3/5 w-full p-14 pt-8 pb-6"),t(gf,"class","flex md:flex-row flex-col items-center rounded-2xl bg-white w-full"),t(nv,"class","container mx-auto rounded-2xl"),t(wi,"id","calc-shadow-l"),t(wi,"class","bg-base-100"),S(wi,"width","1000px"),S(wi,"height","750px"),S(wi,"position","relative"),S(wi,"left","-1000px"),S(wi,"top","0px"),S(wi,"margin-bottom","-750px"),S(wi,"z-index","9"),t(Ei,"id","calc-shadow-r"),t(Ei,"class","bg-base-100"),S(Ei,"width","1000px"),S(Ei,"height","750px"),S(Ei,"position","relative"),S(Ei,"right","-100%"),S(Ei,"top","0px"),S(Ei,"margin-bottom","-750px"),S(Ei,"z-index","9"),t(hc,"class","rounded-2xl pt-10"),t(hc,"id","calculator"),t(iv,"class","uppercase text-xl m-5"),t(ov,"id","waste-type1"),t(cv,"id","waste-type2"),t(od,"class","text-2xl font-bold leading-10"),t(mf,"class","bg-[#E7F5F5] rounded-2xl text-center p-6 mb-10 text-[#2E3855]"),L(xf.src,Yb="/assets/medres/pyrolysis.jpg")||t(xf,"src",Yb),t(xf,"class","rounded-full w-24 h-24"),t(xf,"id","matched-img"),t(xf,"alt",""),t(dv,"class","mx-auto"),t(uv,"class","uppercase text-xl m-5 mt-6"),t(lp,"class","text-2xl font-bold leading-6"),t(lp,"id","matched-tech"),t(yf,"class","text-center text-white"),t(bf,"class","bg-[#2E3855] rounded-2xl flex flex-col justify-center p-6 py-12 mb-6"),t(Xd,"class","w-1/3 flex-col justify-center"),S(Xd,"font-family","'Poppins', sans-serif"),t(ip,"class","ml-5 calc-gcv info-pop"),L(ip.src,Wb="/assets/info.png")||t(ip,"src",Wb),t(ip,"alt",""),S(wf,"font-family","'Poppins', sans-serif"),t(wf,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(fv,"id","gcv"),t(op,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(_f,"class","flex justify-center"),t(cp,"class","ml-5 calc-heat-produced info-pop"),L(cp.src,Kb="/assets/info.png")||t(cp,"src",Kb),t(cp,"alt",""),S(If,"font-family","'Poppins', sans-serif"),t(If,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(pv,"id","heat-produced"),t(dp,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(Ef,"class","flex justify-center mb-2"),t(up,"class","ml-5 calc-heat-savings info-pop"),L(up.src,Jb="/assets/info.png")||t(up,"src",Jb),t(up,"alt",""),S(Vf,"font-family","'Poppins', sans-serif"),t(Vf,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(vv,"id","heat-savings"),t(Pf,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(Df,"class","flex justify-center mb-6"),t(fp,"class","ml-5 calc-electricity-produced info-pop"),L(fp.src,Xb="/assets/info.png")||t(fp,"src",Xb),t(fp,"alt",""),S(Sf,"font-family","'Poppins', sans-serif"),t(Sf,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(gv,"id","electricity-produced"),t(pp,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(kf,"class","flex justify-center mb-2"),t(vp,"class","ml-5 calc-electrical-savings info-pop"),L(vp.src,Qb="/assets/info.png")||t(vp,"src",Qb),t(vp,"alt",""),S(Of,"font-family","'Poppins', sans-serif"),t(Of,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(hv,"id","electrical-savings"),t(Lf,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(Tf,"class","flex justify-center mb-6"),t(gp,"class","ml-5 calc-char info-pop"),L(gp.src,Zb="/assets/info.png")||t(gp,"src",Zb),t(gp,"alt",""),S(Ff,"font-family","'Poppins', sans-serif"),t(Ff,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(mv,"id","char"),t(hp,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(Af,"class","flex justify-center mb-6"),t(Wa,"class","w-2/3 flex-col justify-center mx-auto pl-10 mt-0"),t(hf,"class","flex flex-row gap-8 items-center p-5 pt-1 mt-[-20px]"),t(np,"class","duration-300 transition opacity-0 container mb-[-630px] bg-white p-16 pb-6 rounded-b-2xl"),t(np,"id","results"),S(mp,"font-family","'Poppins', sans-serif"),t(mp,"class","card card-title text-3xl leading-10 text-[#2E3855]"),S(Qd,"font-family","'Public Sans', sans-serif"),t(Qd,"class","text-[#2E3855] tracking-wider mt-5 pl-24 pr-24"),t(Cf,"class","text-center pb-10"),t(jf,"class","h-60"),t(jf,"id","calc-img"),L(jf.src,ex="/assets/cow 1 (1).png")||t(jf,"src",ex),t(jf,"alt",""),t(bv,"class","bg-[#E7F5F5] w-1/3 flex justify-center rounded-2xl mr-8"),t(bp,"type","button"),t(bp,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(tu,"class","bg-[#E7F5F5]"),tu.__value="cow-manure",tu.value=tu.__value,t(ru,"class","bg-[#E7F5F5]"),ru.__value="pig-slurry",ru.value=ru.__value,t(su,"class","bg-[#E7F5F5]"),su.__value="food-waste",su.value=su.__value,t(au,"class","bg-[#E7F5F5]"),au.__value="fish-waste",au.value=au.__value,t(nu,"class","bg-[#E7F5F5]"),nu.__value="poultry-litter",nu.value=nu.__value,t(lu,"class","bg-[#E7F5F5]"),lu.__value="brewery-waste",lu.value=lu.__value,t(iu,"class","bg-[#E7F5F5]"),iu.__value="pulp-paper-waste",iu.value=iu.__value,t(ou,"class","bg-[#E7F5F5]"),ou.__value="textile-waste",ou.value=ou.__value,t(cu,"class","bg-[#E7F5F5]"),cu.__value="pe-plastic",cu.value=cu.__value,t(du,"class","bg-[#E7F5F5]"),du.__value="srf-rdf",du.value=du.__value,t(uu,"class","bg-[#E7F5F5]"),uu.__value="coffee-grounds",uu.value=uu.__value,t(fu,"class","bg-[#E7F5F5]"),fu.__value="crop-residues",fu.value=fu.__value,t(pu,"class","bg-[#E7F5F5]"),pu.__value="maize-silage",pu.value=pu.__value,t(vu,"class","bg-[#E7F5F5]"),vu.__value="cereal",vu.value=vu.__value,t(gu,"class","bg-[#E7F5F5]"),gu.__value="grass-silage",gu.value=gu.__value,t(hu,"class","bg-[#E7F5F5]"),hu.__value="pp-plastic",hu.value=hu.__value,t(mu,"class","bg-[#E7F5F5]"),mu.__value="ps-plastic",mu.value=mu.__value,t(bu,"class","bg-[#E7F5F5]"),bu.__value="pvc-plastic",bu.value=bu.__value,t(xu,"class","bg-[#E7F5F5]"),xu.__value="pet-plastic",xu.value=xu.__value,t(yu,"class","bg-[#E7F5F5]"),yu.__value="rubber",yu.value=yu.__value,t(_u,"class","bg-[#E7F5F5]"),_u.__value="wood-waste",_u.value=_u.__value,t(wu,"class","bg-[#E7F5F5]"),wu.__value="municipal-solid-waste",wu.value=wu.__value,t(Eu,"class","bg-[#E7F5F5]"),Eu.__value="medical-waste",Eu.value=Eu.__value,t(Iu,"class","bg-[#E7F5F5]"),Iu.__value="ceramics",Iu.value=Iu.__value,t(Du,"class","bg-[#E7F5F5]"),Du.__value="sand",Du.value=Du.__value,t(Vu,"class","bg-[#E7F5F5]"),Vu.__value="dust",Vu.value=Vu.__value,t(Pu,"class","bg-[#E7F5F5]"),Pu.__value="glass",Pu.value=Pu.__value,t(ku,"class","bg-[#E7F5F5]"),ku.__value="metals",ku.value=ku.__value,t(te,"id","colorselector"),t(te,"class","w-full bg-transparent text-center border-0"),t(xv,"class","button dropdown w-1/2 flex justify-between z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(eu,"class","inline-flex rounded-xl shadow-sm w-full"),t(eu,"role","group"),t(xp,"type","button"),t(xp,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Tu,"class","bg-[#E7F5F5]"),Tu.__value="2.5",Tu.value=Tu.__value,t(Ou,"class","bg-[#E7F5F5]"),Ou.__value="50",Ou.value=Ou.__value,t(Lu,"class","bg-[#E7F5F5]"),Lu.__value="500",Lu.value=Lu.__value,t(Au,"class","bg-[#E7F5F5]"),Au.__value="5000",Au.value=Au.__value,t(Fu,"class","bg-[#E7F5F5]"),Fu.__value="15000",Fu.value=Fu.__value,t(Mu,"class","bg-[#E7F5F5]"),Mu.__value="40000",Mu.value=Mu.__value,t(Cu,"class","bg-[#E7F5F5]"),Cu.__value="60000",Cu.value=Cu.__value,t(Vi,"id","colorselector2"),t(Vi,"class","w-full bg-transparent text-center focus-0 after:border-0 before:border-0 after:border-[#E7F5F5]"),t(yv,"class","button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(Su,"class","inline-flex rounded-xl shadow-sm w-full mt-5"),t(Su,"role","group"),t(yp,"type","button"),t(yp,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Nu,"class","bg-[#E7F5F5]"),Nu.__value="electricity",Nu.value=Nu.__value,t(Gu,"class","bg-[#E7F5F5]"),Gu.__value="heating-cooling",Gu.value=Gu.__value,t(Bu,"class","bg-[#E7F5F5]"),Bu.__value="carbon-credits",Bu.value=Bu.__value,t(Hu,"class","bg-[#E7F5F5]"),Hu.__value="fertiliser",Hu.value=Hu.__value,t(cd,"id","colorselector3"),t(cd,"class","w-full bg-transparent text-center"),t(_v,"class","button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(ju,"class","inline-flex rounded-xl shadow-sm w-full mt-5"),t(ju,"role","group"),t(Di,"class","w-2/3 pl-12 pr-0 md:mt-0 mt-5 duration-300 transform"),t(Di,"id","calc-selectors"),S(Zd,"font-family","'Poppins', sans-serif"),t(Zd,"class","flex md:flex-row flex-col items-center rounded-lg bg-white w-full mt-5"),t(_p,"class","text-4xl font-bold"),t(_p,"id","feasible"),S(Ru,"font-family","'Public Sans', sans-serif"),t(Ru,"class","text-[#2E3855] tracking-wider mt-5"),t($u,"class","w-[784px] ml-80 pl-16 h-60 p-10 pt-16 md:mt-0 mt-5 duration-300 transform absolute -translate-x-full opacity-0 -translate-y-full bg-[#E7F5F5] rounded-2xl"),t($u,"id","calc-message"),t(wp,"class","mr-3"),L(wp.src,tx="/assets/arrow-right-circle.png")||t(wp,"src",tx),t(wp,"alt",""),t(ud,"id","call-button"),t(ud,"class","duration-300 transform -translate-x-full opacity-0 font-bold mt-16 w-[375px] p-4 hover:bg-pfp-green bg-pfp-orange rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(ud,"href","/contact"),t(Ep,"class","mr-3"),L(Ep.src,rx="/assets/arrow-right-circle.png")||t(Ep,"src",rx),t(Ep,"alt",""),t(fd,"id","call-button2"),t(fd,"class","duration-300 transform -translate-x-full opacity-0 font-bold mt-16 ml-1 w-[350px] p-4 hover:bg-pfp-green bg-pfp-navy rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(fd,"href","/green-energy/"),t(Ip,"class","mr-4 h-6"),L(Ip.src,sx="/assets/calculator.png")||t(Ip,"src",sx),t(Ip,"alt",""),t(mc,"id","calc-button"),t(mc,"class","duration-300 transform -translate-x-[338px] font-bold mt-16 w-1/3 p-4 hover:bg-pfp-green bg-pfp-orange rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(mc,"href","/explore/#calculate"),t(mc,"onclick","calculate();"),t(dd,"class","flex justify gap-16 w-full"),t(Ii,"class","container rounded-2xl bg-white p-20 pt-12 pb-16 z-23"),t(Ii,"id","growcalc"),t(Pi,"id","calc-spacer"),t(Pi,"class","bg-base-100"),S(Pi,"width","1000px"),S(Pi,"height","750px"),S(Pi,"position","relative"),S(Pi,"right","-100%"),S(Pi,"top","0px"),S(Pi,"margin-bottom","-750px"),S(Pi,"z-index","9"),t(Mf,"id","calculate"),t(A,"class","h-full mw-[1060px]"),t(I,"class","flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap mt-8")},m(Jt,mo){H(Jt,n,mo),e(n,i),e(i,c),e(n,d),e(n,p),e(p,h),e(n,v),e(n,g),e(g,w),e(n,y),e(n,_),e(_,E),H(Jt,D,mo),H(Jt,I,mo),e(I,P),e(P,V),e(I,T),e(I,A),e(A,M),e(M,x),e(x,F),e(F,k),e(k,N),e(F,C),e(F,G),e(G,U),e(F,$),e(F,q),e(q,J),e(F,ae),e(F,ie),e(ie,Q),e(ie,ee),e(ie,fe),e(fe,Ge),e(x,vt),e(x,R),e(R,ke),e(ke,yr),e(R,et),e(R,ce),e(R,He),e(R,re),e(R,gt),e(R,pe),e(R,De),e(R,oe),e(R,Se),e(R,Re),e(R,Ve),e(R,Er),e(R,j),e(R,B),e(R,Ee),e(R,X),e(A,tn),e(A,K),e(K,st),e(st,ht),e(K,Ft),e(K,Mt),e(Mt,Os),e(K,Cl),e(K,me),e(me,Ct),e(Ct,Ir),e(Ir,zn),e(Ct,ua),e(Ct,Yn),e(Yn,Vo),e(me,at),e(me,Ue),e(Ue,Zt),e(Zt,jl),e(Ue,Ls),e(Ue,fa),e(fa,Po),e(me,Wn),e(me,qe),e(qe,Zr),e(Zr,Kn),e(qe,pa),e(qe,Jn),e(Jn,ko),e(me,es),e(me,ts),e(ts,Dr),e(Dr,ze),e(ts,rn),e(ts,Nl),e(Nl,Xn),e(me,va),e(me,jt),e(jt,er),e(er,As),e(jt,Vr),e(jt,Fs),e(Fs,So),e(K,Qn),e(K,tr),e(tr,rr),e(K,To),e(K,Oe),e(Oe,ga),e(Oe,Oo),e(Oe,Zn),e(Zn,Gl),e(Oe,an),e(Oe,Pr),e(Pr,Nt),e(Oe,mt),e(Oe,ss),e(ss,nn),e(Oe,Bl),e(Oe,el),e(el,ha),e(Oe,kr),e(Oe,Gt),e(K,Hl),e(K,Le),e(Le,Ms),e(Ms,$l),e(Le,Lo),e(Le,Cs),e(Cs,Sr),e(Le,as),e(Le,ns),e(ns,Ic),e(Le,tl),e(Le,js),e(js,Ao),e(Le,Rl),e(Le,ma),e(ma,ls),e(Le,sr),e(Le,Tr),e(Tr,ln),e(K,Fi),e(K,rl),e(rl,Ns),e(Ns,is),e(K,sl),e(K,al),e(al,Or),e(Or,Gs),e(A,ba),e(A,bt),e(bt,ar),e(ar,xa),e(xa,nl),e(nl,nr),e(xa,Fo),e(xa,be),e(be,nt),e(nt,Bt),e(be,lr),e(be,Bs),e(Bs,Mo),e(be,ll),e(be,Ae),e(Ae,Fe),e(Ae,Co),e(Ae,jo),e(be,il),e(be,on),e(on,No),e(bt,ol),e(bt,ge),e(ge,Ul),e(Ul,ql),e(ge,Dc),e(ge,Ye),e(Ye,xe),e(xe,lt),e(lt,Lr),e(xe,Vd),e(xe,os),e(os,Ht),e(Ye,cl),e(Ye,Me),e(Me,it),e(it,Ar),e(Ar,Hs),e(it,ya),e(it,cs),e(cs,dn),e(dn,un),e(cs,Pc),e(cs,$s),e($s,xt),e(xt,ds),e($s,fn),e($s,dl),e(cs,Fr),e(cs,ot),e(ot,Mr),e(Mr,us),e(ot,Rs),e(Me,zl),e(Me,$t),e($t,yt),e(yt,ir),e(yt,Go),e($t,_a),e($t,Us),e(Us,vn),e(Us,Cr),e(Me,fs),e(Me,wa),e(wa,qs),e(qs,ps),e(qs,zs),e(wa,Bo),e(wa,or),e(or,Ys),e(or,Ho),e(Me,ul),e(Me,Ke),e(Ke,cr),e(Ke,Ea),e(Ke,Ks),e(Ks,jr),e(jr,Ci),e(Ke,Sc),e(Ke,vs),e(Me,Nr),e(Me,Rt),e(Rt,Yl),e(Yl,fl),e(Rt,pl),e(Rt,Ut),e(Ut,Gr),e(Gr,Ia),e(Ut,gn),e(Ut,hn),e(hn,$o),e(Ye,Wl),e(Ye,Js),e(Js,Da),e(Da,ct),e(ct,dr),e(dr,Kl),e(ct,Br),e(ct,ye),e(ye,dt),e(dt,mn),e(ye,Oc),e(ye,gs),e(gs,Va),e(Da,Pa),e(Da,wt),e(wt,Hr),e(Hr,Et),e(Et,Xs),e(Et,Jl),e(wt,vl),e(wt,Qs),e(Qs,It),e(It,hs),e(It,ms),e(ge,Ac),e(ge,$r),e($r,ut),e(ut,xn),e(xn,Ro),e(ut,bs),e(ut,Pe),e(Pe,Rr),e($r,ka),e($r,de),e(de,Je),e(Je,ur),e(ur,Zs),e(Je,ea),e(Je,xs),e(xs,yn),e(yn,qt),e(xs,Sa),e(xs,Dt),e(Dt,Ur),e(Ur,ji),e(Dt,Uo),e(Dt,Ce),e(xs,qo),e(xs,Oa),e(Oa,Xe),e(Xe,ta),e(Oa,zo),e(de,Yo),e(de,je),e(je,fr),e(fr,gl),e(fr,pr),e(je,_n),e(je,Vt),e(Vt,ft),e(Vt,Ql),e(de,wn),e(de,En),e(En,Pt),e(Pt,ra),e(Pt,ys),e(En,Ni),e(En,_s),e(_s,Aa),e(_s,hl),e(de,Gi),e(de,sa),e(sa,ml),e(sa,aa),e(sa,vr),e(vr,Zl),e(Zl,Mc),e(sa,ei),e(sa,xl),e(de,yl),e(de,Ne),e(Ne,In),e(In,Cc),e(Ne,Bi),e(Ne,qr),e(qr,Hi),e(Hi,jc),e(qr,Fa),e(qr,$i),e($i,Nc),e($r,Ri),e($r,ri),e(ri,Dn),e(Dn,Qe),e(Qe,ws),e(ws,na),e(Qe,Ui),e(Qe,Ze),e(Ze,zr),e(zr,qi),e(Ze,zi),e(Ze,Yr),e(Yr,si),e(Dn,_l),e(Dn,Pn),e(Pn,kn),e(kn,Ma),e(Ma,wl),e(Ma,Sn),e(Pn,ai),e(Pn,Wr),e(Wr,Es),e(Es,zt),e(Es,Gc),e(ge,Bc),e(ge,pt),e(pt,Is),e(Is,Wi),e(Wi,Hc),e(Is,Il),e(Is,gr),e(gr,Ca),e(pt,Tn),e(pt,Yt),e(Yt,On),e(On,Ds),e(Ds,Kr),e(On,$c),e(On,_e),e(_e,hr),e(hr,Od),e(_e,Ki),e(_e,mr),e(mr,Ji),e(Ji,Rc),e(mr,Na),e(mr,la),e(_e,li),e(_e,br),e(br,Ga),e(Ga,Ld),e(br,Ad),e(Yt,ii),e(Yt,Vs),e(Vs,Ln),e(Ln,An),e(Ln,Wo),e(Vs,Ko),e(Vs,Fn),e(Fn,oi),e(Fn,Jo),e(Yt,ci),e(Yt,Ba),e(Ba,ia),e(ia,Mn),e(ia,di),e(Ba,Cn),e(Ba,Wt),e(Wt,jn),e(Wt,Xo),e(Yt,Fd),e(Yt,Ha),e(Ha,ui),e(Ha,Md),e(Ha,Jr),e(Jr,oa),e(oa,Cd),e(Ha,Qo),e(Ha,Kt),e(Yt,Zo),e(Yt,Xr),e(Xr,$a),e($a,ec),e(Xr,Nn),e(Xr,Ra),e(Ra,tc),e(tc,jd),e(Ra,rc),e(Ra,fi),e(fi,Nd),e(pt,Gd),e(pt,Ps),e(Ps,Ua),e(Ua,Vl),e(Vl,qa),e(qa,pi),e(Vl,Bd),e(Vl,za),e(za,vi),e(vi,sc),e(za,Hd),e(za,Qr),e(Qr,Ku),e(Ua,Op),e(Ua,ac),e(ac,gi),e(gi,Gn),e(Gn,Xi),e(Gn,Lp),e(ac,Ap),e(ac,nc),e(nc,Qi),e(Qi,Yc),e(Qi,Ju),e(ge,Fp),e(ge,Pl),e(Pl,Bn),e(Bn,Xu),e(Xu,Mp),e(Bn,Cp),e(Bn,Hn),e(Hn,Wc),e(Pl,jp),e(Pl,ca),e(ca,lc),e(lc,$d),e($d,Zi),e(lc,Qu),e(lc,hi),e(hi,Kc),e(Kc,kl),e(hi,Zu),e(hi,Sl),e(Sl,ic),e(ic,Np),e(Sl,Gp),e(Sl,Tl),e(hi,Bp),e(hi,oc),e(oc,cc),e(cc,ef),e(oc,Hp),e(ca,$p),e(ca,$n),e($n,eo),e(eo,Jc),e(eo,tf),e($n,rf),e($n,Ol),e(Ol,mi),e(Ol,sf),e(ca,Xc),e(ca,dc),e(dc,to),e(to,Qc),e(to,Rp),e(dc,Up),e(dc,ro),e(ro,so),e(ro,Zc),e(ca,qp),e(ca,Rn),e(Rn,ed),e(Rn,zp),e(Rn,ao),e(ao,td),e(td,Yp),e(Rn,Wp),e(Rn,no),e(ca,Kp),e(ca,lo),e(lo,uc),e(uc,af),e(lo,Jp),e(lo,fc),e(fc,nf),e(nf,rd),e(fc,lf),e(fc,sd),e(sd,Xp),e(Pl,of),e(Pl,Rd),e(Rd,bi),e(bi,pc),e(pc,Ud),e(Ud,io),e(pc,cf),e(pc,vc),e(vc,ad),e(ad,nd),e(vc,Qp),e(vc,ld),e(ld,Zp),e(bi,df),e(bi,xi),e(xi,qd),e(qd,yi),e(yi,Ya),e(yi,ev),e(xi,tv),e(xi,zd),e(zd,oo),e(oo,co),e(oo,uf),e(bt,rv),e(bt,ks),e(A,sv),e(A,Yd),e(Yd,Un),e(Un,uo),e(uo,kt),e(kt,Ll),e(Ll,fo),e(kt,ff),e(kt,Al),e(Al,po),e(kt,id),e(kt,gc),e(gc,ep),e(kt,sm),e(kt,vo),e(vo,pf),e(pf,am),e(kt,nm),e(kt,Zv),e(Zv,lm),e(kt,im),e(kt,eg),e(eg,om),e(uo,cm),e(uo,tg),e(tg,dm),e(uo,um),e(uo,_i),e(_i,vf),e(vf,av),e(vf,fm),e(vf,tp),e(tp,rg),e(_i,pm),e(_i,Wd),e(Wd,Kd),e(A,vm),e(A,hc),e(hc,nv),e(nv,gf),e(gf,lv),e(lv,rp),e(gf,gm),e(gf,go),e(go,sg),e(sg,hm),e(go,mm),e(go,sp),e(sp,bm),e(go,xm),e(go,Jd),e(Jd,ym),e(Jd,_m),e(Jd,wm),e(go,Em),e(go,ap),e(ap,Im),e(hc,Dm),e(hc,wi),e(hc,Vm),e(hc,Ei),e(A,Pm),e(A,np),e(np,hf),e(hf,Xd),e(Xd,mf),e(mf,iv),e(iv,km),e(mf,Sm),e(mf,od),e(od,ov),e(ov,Tm),e(od,Om),e(od,Lm),e(od,Am),e(od,cv),e(cv,Fm),e(Xd,Mm),e(Xd,bf),e(bf,dv),e(dv,xf),e(bf,Cm),e(bf,yf),e(yf,uv),e(uv,jm),e(yf,Nm),e(yf,lp),e(lp,Gm),e(hf,Bm),e(hf,Wa),e(Wa,_f),e(_f,wf),e(wf,Hm),e(wf,ip),e(_f,$m),e(_f,op),e(op,fv),e(fv,Rm),e(op,Um),e(Wa,qm),e(Wa,Ef),e(Ef,If),e(If,zm),e(If,cp),e(Ef,Ym),e(Ef,dp),e(dp,pv),e(pv,Wm),e(dp,Km),e(Wa,Jm),e(Wa,Df),e(Df,Vf),e(Vf,Xm),e(Vf,up),e(Df,Qm),e(Df,Pf),e(Pf,Zm),e(Pf,vv),e(vv,e0),e(Pf,t0),e(Wa,r0),e(Wa,kf),e(kf,Sf),e(Sf,s0),e(Sf,fp),e(kf,a0),e(kf,pp),e(pp,gv),e(gv,n0),e(pp,l0),e(Wa,i0),e(Wa,Tf),e(Tf,Of),e(Of,o0),e(Of,vp),e(Tf,c0),e(Tf,Lf),e(Lf,d0),e(Lf,hv),e(hv,u0),e(Lf,f0),e(Wa,p0),e(Wa,Af),e(Af,Ff),e(Ff,v0),e(Ff,gp),e(Af,g0),e(Af,hp),e(hp,mv),e(mv,h0),e(hp,m0),e(A,b0),e(A,Mf),e(Mf,Ii),e(Ii,Cf),e(Cf,mp),e(mp,x0),e(Cf,y0),e(Cf,Qd),e(Qd,_0),e(Qd,w0),e(Qd,E0),e(Ii,I0),e(Ii,Zd),e(Zd,bv),e(bv,jf),e(Zd,D0),e(Zd,Di),e(Di,eu),e(eu,bp),e(bp,V0),e(eu,P0),e(eu,xv),e(xv,te),e(te,tu),e(tu,k0),e(te,ru),e(ru,S0),e(te,su),e(su,T0),e(te,au),e(au,O0),e(te,nu),e(nu,L0),e(te,lu),e(lu,A0),e(te,iu),e(iu,F0),e(te,ou),e(ou,M0),e(te,cu),e(cu,C0),e(te,du),e(du,j0),e(te,uu),e(uu,N0),e(te,fu),e(fu,G0),e(te,pu),e(pu,B0),e(te,vu),e(vu,H0),e(te,gu),e(gu,$0),e(te,hu),e(hu,R0),e(te,mu),e(mu,U0),e(te,bu),e(bu,q0),e(te,xu),e(xu,z0),e(te,yu),e(yu,Y0),e(te,_u),e(_u,W0),e(te,wu),e(wu,K0),e(te,Eu),e(Eu,J0),e(te,Iu),e(Iu,X0),e(te,Du),e(Du,Q0),e(te,Vu),e(Vu,Z0),e(te,Pu),e(Pu,e1),e(te,ku),e(ku,t1),e(Di,r1),e(Di,Su),e(Su,xp),e(xp,s1),e(Su,a1),e(Su,yv),e(yv,Vi),e(Vi,Tu),e(Tu,n1),e(Vi,Ou),e(Ou,l1),e(Vi,Lu),e(Lu,i1),e(Vi,Au),e(Au,o1),e(Vi,Fu),e(Fu,c1),e(Vi,Mu),e(Mu,d1),e(Vi,Cu),e(Cu,u1),e(Di,f1),e(Di,ju),e(ju,yp),e(yp,p1),e(ju,v1),e(ju,_v),e(_v,cd),e(cd,Nu),e(Nu,g1),e(cd,Gu),e(Gu,h1),e(cd,Bu),e(Bu,m1),e(cd,Hu),e(Hu,b1),e(Di,x1),e(Di,xg),e(Ii,y1),e(Ii,$u),e($u,_p),e(_p,_1),e($u,w1),e($u,Ru),e(Ru,E1),e(Ru,I1),e(Ru,D1),e(Ii,V1),e(Ii,dd),e(dd,ud),e(ud,wp),e(ud,P1),e(ud,ag),e(ag,k1),e(dd,S1),e(dd,fd),e(fd,Ep),e(fd,T1),e(fd,ng),e(ng,O1),e(dd,L1),e(dd,mc),e(mc,Ip),e(mc,A1),e(mc,lg),e(lg,F1),e(Mf,M1),e(Mf,Pi),e(A,C1),e(A,ig),e(ig,j1),e(I,N1),e(I,og),e(og,G1),ho=!0},p:le,i(Jt){ho||(da(()=>{ho&&(Xt&&Xt.end(1),Be=Xa(ce,ne,{x:100,duration:300,delay:500}),Be.start())}),da(()=>{ho&&(tt&&tt.end(1),St=Xa(re,ne,{x:-100,duration:300,delay:500}),St.start())}),da(()=>{ho&&(Tt&&Tt.end(1),Ts=Xa(pe,ne,{x:-100,y:-100,duration:300,delay:500}),Ts.start())}),da(()=>{ho&&($e&&$e.end(1),rt=Xa(oe,ne,{y:-100,duration:300,delay:500}),rt.start())}),da(()=>{ho&&(Te&&Te.end(1),Qt=Xa(Re,ne,{x:-100,duration:300,delay:500}),Qt.start())}),da(()=>{ho&&(O&&O.end(1),qn=Xa(Er,ne,{x:50,duration:300,delay:500}),qn.start())}),da(()=>{ho&&(ve&&ve.end(1),z=Xa(B,ne,{x:-70,duration:300,delay:500}),z.start())}),da(()=>{ho&&(At&&At.end(1),Ie=Xa(X,ne,{y:-100,duration:300,delay:500}),Ie.start())}),ho=!0)},o(Jt){Be&&Be.invalidate(),Xt=Qa(ce,ne,{x:-100,duration:300}),St&&St.invalidate(),tt=Qa(re,ne,{x:100,duration:300}),Ts&&Ts.invalidate(),Tt=Qa(pe,ne,{x:100,duration:300}),rt&&rt.invalidate(),$e=Qa(oe,ne,{x:100,duration:300}),Qt&&Qt.invalidate(),Te=Qa(Re,ne,{x:100,duration:300}),qn&&qn.invalidate(),O=Qa(Er,ne,{x:-100,duration:300}),z&&z.invalidate(),ve=Qa(B,ne,{y:100,duration:300}),Ie&&Ie.invalidate(),At=Qa(X,ne,{x:100,duration:300}),ho=!1},d(Jt){Jt&&a(n),Jt&&a(D),Jt&&a(I),Jt&&Xt&&Xt.end(),Jt&&tt&&tt.end(),Jt&&Tt&&Tt.end(),Jt&&$e&&$e.end(),Jt&&Te&&Te.end(),Jt&&O&&O.end(),Jt&&ve&&ve.end(),Jt&&At&&At.end()}}}function IE(o){return Mb(()=>{wo(".map-gcv",{theme:"tomato",allowHTML:!0,content:"This is the amount of heat energy that could be released if a certain amount of waste is completely burnt. It's like a measure of the <i>energy potential</i> of waste. A higher GCV means the waste can produce more energy."}),wo(".map-case-study",{theme:"tomato",content:"Project Reference Biogas Plant: Guichen, France | HoSt"}),wo(".calc-gcv",{theme:"tomato",allowHTML:!0,content:"Energy content is the total amount of energy stored in waste. But instead of just heat energy, it also includes the energy that can be converted into electricity or other forms. It's the total <i>energy resource</i> the waste could provide."}),wo(".calc-heat-produced",{theme:"tomato",content:"This is the actual amount of heat energy generated when the waste is processed, like when you burn wood in a fireplace. This heat can be used directly (like to warm buildings) or can be converted into other forms of energy, like electricity."}),wo(".calc-heat-savings",{theme:"tomato",content:"This indicates how much heat energy a company can save by using the heat produced from waste processing, instead of getting it from conventional sources. This is assuming you're currently paying 0.7p/kWh"}),wo(".calc-electricity-produced",{theme:"tomato",allowHTML:!0,content:"This is the amount of electrical energy generated from processing the waste. This could be through burning the waste to generate steam, which drives a turbine to produce electricity, or through other methods. It's like the <i>power output</i> from the waste."}),wo(".calc-electrical-savings",{theme:"tomato",content:"This shows how much a company can save on electricity costs by using the electricity produced from waste processing, instead of purchasing it from the grid. This is based off the assumption you are paying 0.35p/kWh"}),wo(".calc-char",{theme:"tomato",content:"Char is the solid material that's left over after some waste processing methods, like pyrolysis and gasification. It can sometimes be used as a fuel or soil conditioner. This value shows how much char would be produced from the waste."})}),[]}class DE extends xc{constructor(n){super(),yc(this,n,IE,EE,Ai,{})}}function m_(o,n,i){const c=o.slice();return c[9]=n[i],c}function b_(o,n,i){const c=o.slice();c[12]=n[i],c[15]=i;const d=new Date(c[12].published??c[12].created).getFullYear();return c[13]=d,c}function x_(o,n,i){const c=o.slice();return c[9]=n[i],c[17]=i,c}function y_(o){let n,i,c,d,p,h,v,g,w,y,_,E,D,I,P=o[1],V=[];for(let T=0;T<P.length;T+=1)V[T]=w_(x_(o,P,T));return{c(){n=r("div"),i=r("div"),c=r("h2"),d=m("Not found: [");for(let T=0;T<V.length;T+=1)V[T].c();p=m("]"),h=u(),v=r("button"),g=r("span"),w=m(`
                  tags = []`),this.h()},l(T){n=s(T,"DIV",{class:!0});var A=l(n);i=s(A,"DIV",{class:!0});var M=l(i);c=s(M,"H2",{});var x=l(c);d=b(x,"Not found: [");for(let k=0;k<V.length;k+=1)V[k].l(x);p=b(x,"]"),x.forEach(a),h=f(M),v=s(M,"BUTTON",{class:!0});var F=l(v);g=s(F,"SPAN",{class:!0}),l(g).forEach(a),w=b(F,`
                  tags = []`),F.forEach(a),M.forEach(a),A.forEach(a),this.h()},h(){t(g,"class","i-heroicons-outline-trash mr-2"),t(v,"class","btn btn-secondary"),t(i,"class","prose items-center"),t(n,"class","border text-base-content shadow-inner text-center md:rounded-box p-10 -mb-2 md:mb-0 relative z-10")},m(T,A){H(T,n,A),e(n,i),e(i,c),e(c,d);for(let M=0;M<V.length;M+=1)V[M]&&V[M].m(c,null);e(c,p),e(i,h),e(i,v),e(v,g),e(v,w),E=!0,D||(I=Uf(v,"click",o[7]),D=!0)},p(T,A){if(A&2){P=T[1];let M;for(M=0;M<P.length;M+=1){const x=x_(T,P,M);V[M]?V[M].p(x,A):(V[M]=w_(x),V[M].c(),V[M].m(c,p))}for(;M<V.length;M+=1)V[M].d(1);V.length=P.length}},i(T){E||(da(()=>{E&&(_&&_.end(1),y=Xa(n,ne,{x:100,duration:300,delay:500}),y.start())}),E=!0)},o(T){y&&y.invalidate(),_=Qa(n,ne,{x:-100,duration:300}),E=!1},d(T){T&&a(n),wd(V,T),T&&_&&_.end(),D=!1,I()}}}function __(o){let n;return{c(){n=m(",")},l(i){n=b(i,",")},m(i,c){H(i,n,c)},d(i){i&&a(n)}}}function w_(o){let n,i=o[9]+"",c,d,p,h=o[17]+1<o[1].length&&__();return{c(){n=m("'"),c=m(i),d=m("'"),h&&h.c(),p=u()},l(v){n=b(v,"'"),c=b(v,i),d=b(v,"'"),h&&h.l(v),p=f(v)},m(v,g){H(v,n,g),H(v,c,g),H(v,d,g),h&&h.m(v,g),H(v,p,g)},p(v,g){g&2&&i!==(i=v[9]+"")&&Id(c,i),v[17]+1<v[1].length?h||(h=__(),h.c(),h.m(p.parentNode,p)):h&&(h.d(1),h=null)},d(v){v&&a(n),v&&a(c),v&&a(d),h&&h.d(v),v&&a(p)}}}function E_(o){let n,i=(o[4].push(o[13])&&o[13])+"",c,d,p,h;return{c(){n=r("div"),c=m(i),this.h()},l(v){n=s(v,"DIV",{class:!0});var g=l(n);c=b(g,i),g.forEach(a),this.h()},h(){t(n,"class","divider my-4 md:my-0")},m(v,g){H(v,n,g),e(n,c),h=!0},p(v,g){(!h||g&17)&&i!==(i=(v[4].push(v[13])&&v[13])+"")&&Id(c,i)},i(v){h||(da(()=>{h&&(p&&p.end(1),d=Xa(n,ne,{x:o[15]%2?100:-100,duration:300,delay:500}),d.start())}),h=!0)},o(v){d&&d.invalidate(),p=Qa(n,ne,{x:o[15]%2?-100:100,duration:300}),h=!1},d(v){v&&a(n),v&&p&&p.end()}}}function I_(o){let n=!o[4].includes(o[13]),i,c,d,p,h,v,g,w=n&&E_(o);return d=new l3({props:{post:o[12],preview:!0,loading:o[15]<5?"eager":"lazy",decoding:o[15]<5?"auto":"async"}}),{c(){w&&w.c(),i=u(),c=r("div"),ki(d.$$.fragment),p=u(),this.h()},l(y){w&&w.l(y),i=f(y),c=s(y,"DIV",{class:!0});var _=l(c);Si(d.$$.fragment,_),p=f(_),_.forEach(a),this.h()},h(){t(c,"class","rounded-box transition-all duration-500 ease-in-out hover:z-30 hover:shadow-lg md:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-0.5")},m(y,_){w&&w.m(y,_),H(y,i,_),H(y,c,_),Ti(d,c,null),e(c,p),g=!0},p(y,_){_&17&&(n=!y[4].includes(y[13])),n?w?(w.p(y,_),_&17&&se(w,1)):(w=E_(y),w.c(),se(w,1),w.m(i.parentNode,i)):w&&(kp(),ue(w,1,1,()=>{w=null}),Sp());const E={};_&1&&(E.post=y[12]),d.$set(E)},i(y){g||(se(w),se(d.$$.fragment,y),da(()=>{g&&(v&&v.end(1),h=Xa(c,ne,{x:o[15]%2?100:-100,duration:300,delay:500}),h.start())}),g=!0)},o(y){ue(w),ue(d.$$.fragment,y),h&&h.invalidate(),v=Qa(c,ne,{x:o[15]%2?-100:100,duration:300}),g=!1},d(y){w&&w.d(y),y&&a(i),y&&a(c),Oi(d),y&&v&&v.end()}}}function D_(o){let n,i,c,d,p,h,v,g,w,y,_=o[3]&&o[0].length===0&&y_(o),E=o[0],D=[];for(let P=0;P<E.length;P+=1)D[P]=I_(b_(o,E,P));const I=P=>ue(D[P],1,1,()=>{D[P]=null});return v=new n3({}),{c(){_&&_.c(),n=u(),i=r("main");for(let P=0;P<D.length;P+=1)D[P].c();c=u(),d=r("div"),p=r("div"),h=u(),ki(v.$$.fragment),this.h()},l(P){_&&_.l(P),n=f(P),i=s(P,"MAIN",{class:!0,itemprop:!0,itemscope:!0,itemtype:!0});var V=l(i);for(let A=0;A<D.length;A+=1)D[A].l(V);V.forEach(a),c=f(P),d=s(P,"DIV",{class:!0});var T=l(d);p=s(T,"DIV",{class:!0}),l(p).forEach(a),h=f(T),Si(v.$$.fragment,T),T.forEach(a),this.h()},h(){t(i,"class","flex pt-8 flex-col relative bg-transparent md:bg-100 md:gap-8 z-10"),t(i,"itemprop","mainEntityOfPage"),t(i,"itemscope",""),t(i,"itemtype","https://schema.org/Blog"),t(p,"class","divider mt-0 mb-8 hidden lg:flex"),t(d,"class","sticky bottom-0 md:static md:mt-8"),Y(d,"hidden",!o[3])},m(P,V){_&&_.m(P,V),H(P,n,V),H(P,i,V);for(let T=0;T<D.length;T+=1)D[T]&&D[T].m(i,null);H(P,c,V),H(P,d,V),e(d,p),e(d,h),Ti(v,d,null),y=!0},p(P,V){if(o=P,o[3]&&o[0].length===0?_?(_.p(o,V),V&9&&se(_,1)):(_=y_(o),_.c(),se(_,1),_.m(n.parentNode,n)):_&&(kp(),ue(_,1,1,()=>{_=null}),Sp()),V&17){E=o[0];let T;for(T=0;T<E.length;T+=1){const A=b_(o,E,T);D[T]?(D[T].p(A,V),se(D[T],1)):(D[T]=I_(A),D[T].c(),se(D[T],1),D[T].m(i,null))}for(kp(),T=E.length;T<D.length;T+=1)I(T);Sp()}(!y||V&8)&&Y(d,"hidden",!o[3])},i(P){if(!y){se(_);for(let V=0;V<E.length;V+=1)se(D[V]);se(v.$$.fragment,P),da(()=>{y&&(w&&w.end(1),g=Xa(d,ne,{x:o[0].length+1%2?100:-100,duration:300,delay:500}),g.start())}),y=!0}},o(P){ue(_),D=D.filter(Boolean);for(let V=0;V<D.length;V+=1)ue(D[V]);ue(v.$$.fragment,P),g&&g.invalidate(),w=Qa(d,ne,{x:o[0].length+1%2?-100:100,duration:300}),y=!1},d(P){_&&_.d(P),P&&a(n),P&&a(i),wd(D,P),P&&a(c),P&&a(d),Oi(v),P&&w&&w.end()}}}function V_(o){let n,i=o[2],c=[];for(let d=0;d<i.length;d+=1)c[d]=P_(m_(o,i,d));return{c(){n=r("div");for(let d=0;d<c.length;d+=1)c[d].c();this.h()},l(d){n=s(d,"DIV",{class:!0});var p=l(n);for(let h=0;h<c.length;h+=1)c[h].l(p);p.forEach(a),this.h()},h(){t(n,"class","flex xl:flex-wrap gap-2 overflow-x-auto xl:overflow-x-hidden overflow-y-hidden max-h-24 my-auto xl:max-h-fit max-w-fit xl:max-w-full pl-8 md:px-0 xl:pl-8 xl:pt-10")},m(d,p){H(d,n,p);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(n,null)},p(d,p){if(p&6){i=d[2];let h;for(h=0;h<i.length;h+=1){const v=m_(d,i,h);c[h]?c[h].p(v,p):(c[h]=P_(v),c[h].c(),c[h].m(n,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=i.length}},d(d){d&&a(n),wd(c,d)}}}function P_(o){let n,i,c=o[9]+"",d,p,h,v,g;function w(){return o[8](o[9])}return{c(){n=r("button"),i=m("#"),d=m(c),p=u(),this.h()},l(y){n=s(y,"BUTTON",{id:!0,class:!0});var _=l(n);i=b(_,"#"),d=b(_,c),p=f(_),_.forEach(a),this.h()},h(){t(n,"id",h=o[9]),t(n,"class","btn btn-sm btn-ghost normal-case border-dotted border-base-content/20 border-2 mt-4 mb-8 xl:m-0"),Y(n,"!btn-secondary",o[1].includes(o[9])),Y(n,"shadow-lg",o[1].includes(o[9]))},m(y,_){H(y,n,_),e(n,i),e(n,d),e(n,p),v||(g=Uf(n,"click",w),v=!0)},p(y,_){o=y,_&4&&c!==(c=o[9]+"")&&Id(d,c),_&4&&h!==(h=o[9])&&t(n,"id",h),_&6&&Y(n,"!btn-secondary",o[1].includes(o[9])),_&6&&Y(n,"shadow-lg",o[1].includes(o[9]))},d(y){y&&a(n),v=!1,g()}}}function VE(o){let n,i,c,d,p,h,v=o[0],g,w,y=o[2]&&Object.keys(o[2]).length>0,_,E,D;n=new a3({});let I=D_(o),P=y&&V_(o);return{c(){ki(n.$$.fragment),i=u(),c=r("div"),d=r("div"),p=r("div"),h=r("div"),I.c(),g=u(),w=r("div"),P&&P.c(),this.h()},l(V){Si(n.$$.fragment,V),i=f(V),c=s(V,"DIV",{class:!0});var T=l(c);d=s(T,"DIV",{class:!0});var A=l(d);p=s(A,"DIV",{class:!0});var M=l(p);h=s(M,"DIV",{class:!0});var x=l(h);I.l(x),x.forEach(a),g=f(M),w=s(M,"DIV",{class:!0});var F=l(w);P&&P.l(F),F.forEach(a),M.forEach(a),A.forEach(a),T.forEach(a),this.h()},h(){t(h,"class","w-7/8 p-4 pt-2"),t(w,"class","w-1/3"),t(p,"class","flex rounded-lg overflow-hidden"),t(d,"class","w-5/6 pt-10 pb-10 pr-10"),t(c,"class","flex flex-col flex-nowrap justify-left ml-auto w-5/6 xl:flex-row xl:flex-wrap h-feed")},m(V,T){Ti(n,V,T),H(V,i,T),H(V,c,T),e(c,d),e(d,p),e(p,h),I.m(h,null),e(p,g),e(p,w),P&&P.m(w,null),D=!0},p(V,[T]){T&1&&Ai(v,v=V[0])?(kp(),ue(I,1,1,le),Sp(),I=D_(V),I.c(),se(I,1),I.m(h,null)):I.p(V,T),T&4&&(y=V[2]&&Object.keys(V[2]).length>0),y?P?P.p(V,T):(P=V_(V),P.c(),P.m(w,null)):P&&(P.d(1),P=null)},i(V){D||(se(n.$$.fragment,V),se(I),da(()=>{D&&(E&&E.end(1),_=Xa(w,ne,{x:-25,duration:300,delay:500}),_.start())}),D=!0)},o(V){ue(n.$$.fragment,V),ue(I),_&&_.invalidate(),E=Qa(w,ne,{x:-25,duration:300}),D=!1},d(V){Oi(n,V),V&&a(i),V&&a(c),I.d(V),P&&P.d(),V&&E&&E.end()}}}function PE(o,n,i){let c;k_(o,M_,E=>i(6,c=E));let d,p,h,[v,g,w]=[[],[],[]];A_.set(""),Mb(()=>{var E;c.url.searchParams.get("tags")&&i(1,g=((E=c.url.searchParams.get("tags"))==null?void 0:E.split(","))??[]),i(3,h=!0)});const y=()=>i(1,g=[]),_=E=>g.includes(E)?i(1,g=g.filter(D=>D!=E)):i(1,g=[...g,E]);return o.$$.update=()=>{o.$$.dirty&64&&F_.subscribe(E=>i(5,d=E.filter(D=>{var I;return!((I=D.flags)!=null&&I.includes("unlisted"))}).filter(D=>D.slug.slice(1).split("/")[0]==c.url.toString().split("/")[3]))),o.$$.dirty&32&&kb.subscribe(E=>i(2,p=Array.from(new Set(d.filter(D=>D.tags).map(D=>D.tags).flat())))),o.$$.dirty&98&&g&&(i(0,v=g?d.filter(E=>E.slug.slice(1).split("/")[0]==c.url.toString().split("/")[3]).filter(E=>g.every(D=>{var I;return(I=E.tags)==null?void 0:I.includes(D)})):d),window.location.pathname==="/"&&window.history.replaceState({},"",g.length>0?`?tags=${g.toString()}`:"/")),o.$$.dirty&1&&v.length>1&&i(4,w=[new Date(v[0].published??v[0].created).getFullYear()])},kb.subscribe(E=>i(2,p=E)),[v,g,p,h,w,d,c,y,_]}class kE extends xc{constructor(n){super(),yc(this,n,PE,VE,Ai,{})}}function SE(o){let n;const i=o[2].default,c=S_(i,o,o[3],null);return{c(){c&&c.c()},l(d){c&&c.l(d)},m(d,p){c&&c.m(d,p),n=!0},p(d,p){c&&c.p&&(!n||p&8)&&T_(c,i,d,d[3],n?L_(i,d[3],p,null):O_(d[3]),null)},i(d){n||(se(c,d),n=!0)},o(d){ue(c,d),n=!1},d(d){c&&c.d(d)}}}function TE(o){let n,i;return n=new Y3({}),{c(){ki(n.$$.fragment)},l(c){Si(n.$$.fragment,c)},m(c,d){Ti(n,c,d),i=!0},p:le,i(c){i||(se(n.$$.fragment,c),i=!0)},o(c){ue(n.$$.fragment,c),i=!1},d(c){Oi(n,c)}}}function OE(o){let n,i;return n=new q3({}),{c(){ki(n.$$.fragment)},l(c){Si(n.$$.fragment,c)},m(c,d){Ti(n,c,d),i=!0},p:le,i(c){i||(se(n.$$.fragment,c),i=!0)},o(c){ue(n.$$.fragment,c),i=!1},d(c){Oi(n,c)}}}function LE(o){let n,i;return n=new DE({}),{c(){ki(n.$$.fragment)},l(c){Si(n.$$.fragment,c)},m(c,d){Ti(n,c,d),i=!0},p:le,i(c){i||(se(n.$$.fragment,c),i=!0)},o(c){ue(n.$$.fragment,c),i=!1},d(c){Oi(n,c)}}}function AE(o){let n,i;return n=new kE({}),{c(){ki(n.$$.fragment)},l(c){Si(n.$$.fragment,c)},m(c,d){Ti(n,c,d),i=!0},p:le,i(c){i||(se(n.$$.fragment,c),i=!0)},o(c){ue(n.$$.fragment,c),i=!1},d(c){Oi(n,c)}}}function FE(o){let n,i,c,d;const p=[AE,LE,OE,TE,SE],h=[];function v(g,w){return g[0]=="/news"||g[0]=="/news/"?0:g[0]=="/explore"||g[0]=="/explore/"?1:g[0]=="/about"||g[0]=="/about/"?2:g[0]=="/green-energy"||g[0]=="/green-energy/"?3:4}return n=v(o),i=h[n]=p[n](o),{c(){i.c(),c=xr()},l(g){i.l(g),c=xr()},m(g,w){h[n].m(g,w),H(g,c,w),d=!0},p(g,w){let y=n;n=v(g),n===y?h[n].p(g,w):(kp(),ue(h[y],1,1,()=>{h[y]=null}),Sp(),i=h[n],i?i.p(g,w):(i=h[n]=p[n](g),i.c()),se(i,1),i.m(c.parentNode,c))},i(g){d||(se(i),d=!0)},o(g){ue(i),d=!1},d(g){h[n].d(g),g&&a(c)}}}function ME(o){let n,i,c,d,p,h;return n=new y3({}),c=new B3({props:{path:o[0]}}),p=new R3({props:{path:o[0],$$slots:{default:[FE]},$$scope:{ctx:o}}}),{c(){ki(n.$$.fragment),i=u(),ki(c.$$.fragment),d=u(),ki(p.$$.fragment)},l(v){Si(n.$$.fragment,v),i=f(v),Si(c.$$.fragment,v),d=f(v),Si(p.$$.fragment,v)},m(v,g){Ti(n,v,g),H(v,i,g),Ti(c,v,g),H(v,d,g),Ti(p,v,g),h=!0},p(v,[g]){const w={};g&1&&(w.path=v[0]),c.$set(w);const y={};g&1&&(y.path=v[0]),g&9&&(y.$$scope={dirty:g,ctx:v}),p.$set(y)},i(v){h||(se(n.$$.fragment,v),se(c.$$.fragment,v),se(p.$$.fragment,v),h=!0)},o(v){ue(n.$$.fragment,v),ue(c.$$.fragment,v),ue(p.$$.fragment,v),h=!1},d(v){Oi(n,v),v&&a(i),Oi(c,v),v&&a(d),Oi(p,v)}}}function CE(o,n,i){let{$$slots:c={},$$scope:d}=n,{data:p}=n,{res:h,path:v}=p;return F_.set(h),kb.set(s3(h)),Mb(()=>u3({immediate:!0,onRegistered:g=>g&&setInterval(async()=>await g.update(),198964),onRegisterError:g=>console.error(g)})),v[v.length-1]=="/"&&(v=v.slice(0,-1)),o.$$set=g=>{"data"in g&&i(1,p=g.data),"$$scope"in g&&i(3,d=g.$$scope)},o.$$.update=()=>{o.$$.dirty&2&&p&&i(0,v=p.path)},[v,p,c,d]}class RE extends xc{constructor(n){super(),yc(this,n,CE,ME,Ai,{data:1})}}export{RE as component,$E as universal};
