import{S as Pn,i as Vn,s as Ha,e as xa,C as q2,h as a,D as e,E as We,k as s,l as r,n as t,b as nt,a as o,y as al,c,z as nl,A as ll,g as Rs,d as Us,B as il,F as Ag,q as f,m as n,r as p,G as Wt,H as wm,u as Fg,I as PE,J as Wc,v as R2,f as U2,K as VE,L as kE,M as Jd,N as Xd,O as S,P as sE,Q as rE,R as aE,T as nE,p as T,o as lE}from"../chunks/index.6a262c57.js";import{g as SE}from"../chunks/posts.cfa4cb00.js";import{f as Um,a as rf,h as C0,p as G0,b as Sg,s as __,t as TE,c as Or,d as E_,e as AE,g as OE}from"../chunks/icon.b37f3b3b.js";import{_ as FE}from"../chunks/preload-helper.a4192956.js";import{p as LE}from"../chunks/stores.c498cff4.js";const CE=!0,GE="always",ME=async({url:d,fetch:l})=>({path:d.pathname,res:await l("/posts.json").then(i=>i.json())}),CI=Object.freeze(Object.defineProperty({__proto__:null,load:ME,prerender:CE,trailingSlash:GE},Symbol.toStringTag,{value:"Module"}));function jE(d={}){const{immediate:l=!1,onNeedRefresh:i,onOfflineReady:u,onRegistered:v,onRegisteredSW:g,onRegisterError:x}=d;let m,h;const I=async(V=!0)=>{await h};async function w(){if("serviceWorker"in navigator){const{Workbox:V}=await FE(()=>import("../chunks/workbox-window.prod.es5.08b2315b.js"),[],import.meta.url);m=new V("./sw.js",{scope:"/",type:"classic"}),m.addEventListener("activated",y=>{(y.isUpdate||y.isExternal)&&window.location.reload()}),m.addEventListener("installed",y=>{y.isUpdate||u==null||u()}),m.register({immediate:l}).then(y=>{g?g("./sw.js",y):v==null||v(y)}).catch(y=>{x==null||x(y)})}}return h=w(),I}function NE(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(l,"rel","shortcut icon"),t(l,"href",Um.src),t(l,"sizes",Um.sizes),t(l,"type",Um.type)},m(i,u){nt(i,l,u)},p:We,d(i){i&&a(l)}}}function BE(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(l,"rel","apple-touch-icon"),t(l,"href",rf[180].src),t(l,"sizes",rf[180].sizes),t(l,"type",rf[180].type)},m(i,u){nt(i,l,u)},p:We,d(i){i&&a(l)}}}function qE(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(l,"rel","icon"),t(l,"href",rf[192].src),t(l,"sizes",rf[192].sizes),t(l,"type",rf[192].type)},m(i,u){nt(i,l,u)},p:We,d(i){i&&a(l)}}}function RE(d){let l,i,u,v=Um&&NE(),g=rf[180]&&BE(),x=rf[192]&&qE();return{c(){v&&v.c(),l=xa(),g&&g.c(),i=xa(),x&&x.c(),u=xa()},l(m){const h=q2("svelte-1kxdj3d",document.head);v&&v.l(h),l=xa(),g&&g.l(h),i=xa(),x&&x.l(h),u=xa(),h.forEach(a)},m(m,h){v&&v.m(document.head,null),e(document.head,l),g&&g.m(document.head,null),e(document.head,i),x&&x.m(document.head,null),e(document.head,u)},p(m,[h]){Um&&v.p(m,h),rf[180]&&g.p(m,h),rf[192]&&x.p(m,h)},i:We,o:We,d(m){v&&v.d(m),a(l),g&&g.d(m),a(i),x&&x.d(m),a(u)}}}class UE extends Pn{constructor(l){super(),Vn(this,l,null,RE,Ha,{})}}function I_(d,l,i){const u=d.slice();return u[0]=l[i],u}function $E(d){let l,i=C0.me,u=[];for(let v=0;v<i.length;v+=1)u[v]=D_(I_(d,i,v));return{c(){for(let v=0;v<u.length;v+=1)u[v].c();l=xa()},l(v){for(let g=0;g<u.length;g+=1)u[g].l(v);l=xa()},m(v,g){for(let x=0;x<u.length;x+=1)u[x]&&u[x].m(v,g);nt(v,l,g)},p(v,g){if(g&0){i=C0.me;let x;for(x=0;x<i.length;x+=1){const m=I_(v,i,x);u[x]?u[x].p(m,g):(u[x]=D_(m),u[x].c(),u[x].m(l.parentNode,l))}for(;x<u.length;x+=1)u[x].d(1);u.length=i.length}},d(v){Ag(u,v),v&&a(l)}}}function D_(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0}),this.h()},h(){t(l,"rel","me"),t(l,"href",d[0])},m(i,u){nt(i,l,u)},p:We,d(i){i&&a(l)}}}function HE(d){let l,i,u;return{c(){l=s("link"),i=o(),u=s("link"),this.h()},l(v){l=r(v,"LINK",{rel:!0,href:!0}),i=c(v),u=r(v,"LINK",{rel:!0,href:!0}),this.h()},h(){t(l,"rel","webmention"),t(l,"href","https://webmention.io/"+G0.comment.webmention.username+"/webmention"),t(u,"rel","pingback"),t(u,"href","https://webmention.io/"+G0.comment.webmention.username+"/xmlrpc")},m(v,g){nt(v,l,g),nt(v,i,g),nt(v,u,g)},p:We,d(v){v&&a(l),v&&a(i),v&&a(u)}}}function WE(d){var h,I;let l,i,u,v,g,x=C0.me&&$E(d),m=((I=(h=G0.comment)==null?void 0:h.webmention)==null?void 0:I.username)&&HE();return v=new UE({}),{c(){x&&x.c(),l=xa(),m&&m.c(),i=xa(),u=o(),al(v.$$.fragment)},l(w){const V=q2("svelte-1592q3p",document.head);x&&x.l(V),l=xa(),m&&m.l(V),i=xa(),V.forEach(a),u=c(w),nl(v.$$.fragment,w)},m(w,V){x&&x.m(document.head,null),e(document.head,l),m&&m.m(document.head,null),e(document.head,i),nt(w,u,V),ll(v,w,V),g=!0},p(w,[V]){var y,D;C0.me&&x.p(w,V),(D=(y=G0.comment)==null?void 0:y.webmention)!=null&&D.username&&m.p(w,V)},i(w){g||(Rs(v.$$.fragment,w),g=!0)},o(w){Us(v.$$.fragment,w),g=!1},d(w){x&&x.d(w),a(l),m&&m.d(w),a(i),w&&a(u),il(v,w)}}}class YE extends Pn{constructor(l){super(),Vn(this,l,null,WE,Ha,{})}}const zE=(d,l,i,u=i/=100,v=l*Math.min(u,1-u)/100,g=(x,m=(x+d/30)%12)=>Math.round(255*(u-v*Math.max(Math.min(m-3,9-m,1),-1))).toString(16).padStart(2,"0"))=>`#${g(0)}${g(8)}${g(4)}`;function P_(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u[13]=l[i].children,u}function V_(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u}function k_(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u[13]=l[i].children,u}function S_(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u}function KE(d){let l,i,u=d[11]+"",v,g,x,m,h,I,w=d[13],V=[];for(let y=0;y<w.length;y+=1)V[y]=T_(S_(d,w,y));return{c(){l=s("li"),i=s("span"),v=f(u),g=o(),x=s("span"),m=o(),h=s("ul");for(let y=0;y<V.length;y+=1)V[y].c();I=o(),this.h()},l(y){l=r(y,"LI",{tabindex:!0});var D=n(l);i=r(D,"SPAN",{class:!0});var E=n(i);v=p(E,u),g=c(E),x=r(E,"SPAN",{class:!0}),n(x).forEach(a),E.forEach(a),m=c(D),h=r(D,"UL",{class:!0});var F=n(h);for(let k=0;k<V.length;k+=1)V[k].l(F);F.forEach(a),I=c(D),D.forEach(a),this.h()},h(){t(x,"class","i-heroicons-solid-chevron-right mr-2"),t(i,"class","justify-between gap-1 max-w-[13rem]"),Wt(i,"font-bold",d[13].some(d[6])),t(h,"class","bg-base-100 text-base-content shadow-lg p-2"),t(l,"tabindex","0")},m(y,D){nt(y,l,D),e(l,i),e(i,v),e(i,g),e(i,x),e(l,m),e(l,h);for(let E=0;E<V.length;E+=1)V[E]&&V[E].m(h,null);e(l,I)},p(y,D){if(D&1&&u!==(u=y[11]+"")&&Fg(v,u),D&3&&Wt(i,"font-bold",y[13].some(y[6])),D&3){w=y[13];let E;for(E=0;E<w.length;E+=1){const F=S_(y,w,E);V[E]?V[E].p(F,D):(V[E]=T_(F),V[E].c(),V[E].m(h,null))}for(;E<V.length;E+=1)V[E].d(1);V.length=w.length}},d(y){y&&a(l),Ag(V,y)}}}function JE(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{href:!0});var I=n(i);v=p(I,u),I.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"href",g=d[12]),Wt(i,"font-bold",d[12]===d[1])},m(m,h){nt(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&Fg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&Wt(i,"font-bold",m[12]===m[1])},d(m){m&&a(l)}}}function T_(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{href:!0});var I=n(i);v=p(I,u),I.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"href",g=d[12]),Wt(i,"font-bold",d[12]===d[1])},m(m,h){nt(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&Fg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&Wt(i,"font-bold",m[12]===m[1])},d(m){m&&a(l)}}}function A_(d){let l;function i(g,x){if(g[12]&&!g[13])return JE;if(g[13])return KE}let u=i(d),v=u&&u(d);return{c(){v&&v.c(),l=xa()},l(g){v&&v.l(g),l=xa()},m(g,x){v&&v.m(g,x),nt(g,l,x)},p(g,x){u===(u=i(g))&&v?v.p(g,x):(v&&v.d(1),v=u&&u(g),v&&(v.c(),v.m(l.parentNode,l)))},d(g){v&&v.d(g),g&&a(l)}}}function XE(d){return{c:We,l:We,m:We,d:We}}function QE(d){let l,i,u=d[11]+"",v,g,x,m,h,I,w=d[13],V=[];for(let y=0;y<w.length;y+=1)V[y]=O_(V_(d,w,y));return{c(){l=s("li"),i=s("span"),v=f(u),g=o(),x=s("span"),m=o(),h=s("ul");for(let y=0;y<V.length;y+=1)V[y].c();I=o(),this.h()},l(y){l=r(y,"LI",{});var D=n(l);i=r(D,"SPAN",{class:!0});var E=n(i);v=p(E,u),g=c(E),x=r(E,"SPAN",{class:!0}),n(x).forEach(a),E.forEach(a),m=c(D),h=r(D,"UL",{tabindex:!0,class:!0});var F=n(h);for(let k=0;k<V.length;k+=1)V[k].l(F);F.forEach(a),I=c(D),D.forEach(a),this.h()},h(){t(x,"class","i-heroicons-solid-chevron-down -mr-1"),t(i,"class","!rounded-btn gap-3"),Wt(i,"font-bold",d[13].some(d[8])),Wt(i,"text-pfp-green",d[13].some(d[9])),t(h,"tabindex","0"),t(h,"class","menu rounded-box bg-base-100 text-base-content shadow-lg p-2")},m(y,D){nt(y,l,D),e(l,i),e(i,v),e(i,g),e(i,x),e(l,m),e(l,h);for(let E=0;E<V.length;E+=1)V[E]&&V[E].m(h,null);e(l,I)},p(y,D){if(D&1&&u!==(u=y[11]+"")&&Fg(v,u),D&3&&Wt(i,"font-bold",y[13].some(y[8])),D&3&&Wt(i,"text-pfp-green",y[13].some(y[9])),D&3){w=y[13];let E;for(E=0;E<w.length;E+=1){const F=V_(y,w,E);V[E]?V[E].p(F,D):(V[E]=O_(F),V[E].c(),V[E].m(h,null))}for(;E<V.length;E+=1)V[E].d(1);V.length=w.length}},d(y){y&&a(l),Ag(V,y)}}}function ZE(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{class:!0,href:!0});var I=n(i);v=p(I,u),I.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"class","!rounded-btn"),t(i,"href",g=d[12]),Wt(i,"font-bold",d[12]===d[1]),Wt(i,"text-pfp-green",d[12]===d[1])},m(m,h){nt(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&Fg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&Wt(i,"font-bold",m[12]===m[1]),h&3&&Wt(i,"text-pfp-green",m[12]===m[1])},d(m){m&&a(l)}}}function O_(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{href:!0});var I=n(i);v=p(I,u),I.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"href",g=d[12]),Wt(i,"font-bold",d[12]===d[1]),Wt(i,"text-pfp-green",d[12]===d[1])},m(m,h){nt(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&Fg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&Wt(i,"font-bold",m[12]===m[1]),h&3&&Wt(i,"text-pfp-green",m[12]===m[1])},d(m){m&&a(l)}}}function F_(d){let l;function i(g,x){if(g[12]&&!g[13])return ZE;if(g[13])return QE}let u=i(d),v=u&&u(d);return{c(){v&&v.c(),l=xa()},l(g){v&&v.l(g),l=xa()},m(g,x){v&&v.m(g,x),nt(g,l,x)},p(g,x){u===(u=i(g))&&v?v.p(g,x):(v&&v.d(1),v=u&&u(g),v&&(v.c(),v.m(l.parentNode,l)))},d(g){v&&v.d(g),g&&a(l)}}}function e6(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,F=d[0],k=[];for(let b=0;b<F.length;b+=1)k[b]=A_(k_(d,F,b));let A=d[5]&&XE(),G=d[0],M=[];for(let b=0;b<G.length;b+=1)M[b]=F_(P_(d,G,b));return{c(){l=s("div"),i=s("label"),u=s("span"),v=o(),g=s("ul");for(let b=0;b<k.length;b+=1)k[b].c();x=o(),m=s("div"),h=s("button"),A&&A.c(),I=o(),w=f(d[2]),V=o(),y=s("ul");for(let b=0;b<M.length;b+=1)M[b].c();this.h()},l(b){l=r(b,"DIV",{class:!0});var C=n(l);i=r(C,"LABEL",{for:!0,tabindex:!0,class:!0});var _=n(i);u=r(_,"SPAN",{class:!0}),n(u).forEach(a),_.forEach(a),v=c(C),g=r(C,"UL",{id:!0,tabindex:!0,class:!0});var q=n(g);for(let Y=0;Y<k.length;Y+=1)k[Y].l(q);q.forEach(a),C.forEach(a),x=c(b),m=r(b,"DIV",{class:!0});var O=n(m);h=r(O,"BUTTON",{class:!0});var L=n(h);A&&A.l(L),I=c(L),w=p(L,d[2]),L.forEach(a),V=c(O),y=r(O,"UL",{class:!0});var j=n(y);for(let Y=0;Y<M.length;Y+=1)M[Y].l(j);j.forEach(a),O.forEach(a),this.h()},h(){t(u,"class","i-heroicons-outline-menu-alt-1"),t(i,"for","navbar-dropdown"),t(i,"tabindex","0"),t(i,"class","btn btn-square btn-ghost"),t(g,"id","navbar-dropdown"),t(g,"tabindex","0"),t(g,"class","menu menu-compact dropdown-content bg-base-100 text-base-content shadow-lg rounded-box min-w-max max-w-52 p-2 "),Wt(g,"hidden",!d[4]),t(l,"class","dropdown lg:hidden"),t(h,"class","swap-on btn btn-ghost text-base font-normal normal-case transition-all duration-200"),Wt(h,"hidden",d[3]<32||!d[2]),t(y,"class","swap-off menu menu-horizontal p-0"),Wt(y,"hidden",d[3]>64&&d[2]),t(m,"class","pl-16 swap order-last hidden lg:inline-grid"),Wt(m,"swap-active",d[3]>32&&d[2])},m(b,C){nt(b,l,C),e(l,i),e(i,u),e(l,v),e(l,g);for(let _=0;_<k.length;_+=1)k[_]&&k[_].m(g,null);nt(b,x,C),nt(b,m,C),e(m,h),A&&A.m(h,null),e(h,I),e(h,w),e(m,V),e(m,y);for(let _=0;_<M.length;_+=1)M[_]&&M[_].m(y,null);D||(E=wm(h,"click",d[7]),D=!0)},p(b,[C]){if(C&3){F=b[0];let _;for(_=0;_<F.length;_+=1){const q=k_(b,F,_);k[_]?k[_].p(q,C):(k[_]=A_(q),k[_].c(),k[_].m(g,null))}for(;_<k.length;_+=1)k[_].d(1);k.length=F.length}if(C&16&&Wt(g,"hidden",!b[4]),C&4&&Fg(w,b[2]),C&12&&Wt(h,"hidden",b[3]<32||!b[2]),C&3){G=b[0];let _;for(_=0;_<G.length;_+=1){const q=P_(b,G,_);M[_]?M[_].p(q,C):(M[_]=F_(q),M[_].c(),M[_].m(y,null))}for(;_<M.length;_+=1)M[_].d(1);M.length=G.length}C&12&&Wt(y,"hidden",b[3]>64&&b[2]),C&12&&Wt(m,"swap-active",b[3]>32&&b[2])},i:We,o:We,d(b){b&&a(l),Ag(k,b),b&&a(x),b&&a(m),A&&A.d(),Ag(M,b),D=!1,E()}}}function t6(d,l,i){let u;PE(d,LE,E=>i(10,u=E));let{nav:v}=l,{path:g}=l,{title:x}=l,{scrollY:m}=l,{pin:h}=l,I=u.url.toString().split("/")[3];const w=({link:E})=>E===g,V=()=>window.scrollTo(0,0),y=({link:E})=>E===g,D=({link:E})=>E===g;return d.$$set=E=>{"nav"in E&&i(0,v=E.nav),"path"in E&&i(1,g=E.path),"title"in E&&i(2,x=E.title),"scrollY"in E&&i(3,m=E.scrollY),"pin"in E&&i(4,h=E.pin)},[v,g,x,m,h,I,w,V,y,D]}class s6 extends Pn{constructor(l){super(),Vn(this,l,t6,e6,Ha,{nav:0,path:1,title:2,scrollY:3,pin:4})}}function r6(d){let l,i,u,v,g,x,m;return{c(){l=s("form"),i=s("input"),u=o(),v=s("input"),g=o(),x=s("button"),m=s("span"),this.h()},l(h){l=r(h,"FORM",{action:!0,method:!0,class:!0});var I=n(l);i=r(I,"INPUT",{type:!0,name:!0,class:!0}),u=c(I),v=r(I,"INPUT",{type:!0,name:!0}),g=c(I),x=r(I,"BUTTON",{type:!0,class:!0});var w=n(x);m=r(w,"SPAN",{class:!0}),n(m).forEach(a),w.forEach(a),I.forEach(a),this.h()},h(){var h,I,w,V;t(i,"type","text"),t(i,"name","q"),t(i,"class","input input-ghost input-bordered xl:bg-base-100 xl:text-base-content transition-all w-full h-12"),t(v,"type","hidden"),t(v,"name",((I=(h=Sg)==null?void 0:h.search)==null?void 0:I.provider)==="duckduckgo"?"sites":"sitesearch"),v.value=__.protocol+__.domain,t(m,"class","i-heroicons-outline-search"),t(x,"type","submit"),t(x,"class","btn btn-square btn-ghost ml-2"),t(l,"action",((V=(w=Sg)==null?void 0:w.search)==null?void 0:V.provider)==="duckduckgo"?"//duckduckgo.com/":"//google.com/search"),t(l,"method","get"),t(l,"class","flex-1")},m(h,I){nt(h,l,I),e(l,i),e(l,u),e(l,v),e(l,g),e(l,x),e(x,m)},p:We,i:We,o:We,d(h){h&&a(l)}}}class a6 extends Pn{constructor(l){super(),Vn(this,l,null,r6,Ha,{})}}const{document:L_,window:G2}=kE;function C_(d,l,i){const u=d.slice();return u[14]=l[i].name,u[15]=l[i].text,u}function n6(d,l,i){const u=d.slice();return u[18]=l[i],u}function l6(d){let l,i,u,v,g,x,m,h,I,w;return i=new a6({}),{c(){l=s("div"),al(i.$$.fragment),u=o(),v=s("button"),g=s("span"),this.h()},l(V){l=r(V,"DIV",{class:!0});var y=n(l);nl(i.$$.fragment,y),u=c(y),v=r(y,"BUTTON",{tabindex:!0,class:!0});var D=n(v);g=r(D,"SPAN",{class:!0}),n(g).forEach(a),D.forEach(a),y.forEach(a),this.h()},h(){t(g,"class","i-heroicons-outline-x"),t(v,"tabindex","0"),t(v,"class","btn btn-square btn-ghost mr-8"),t(l,"class","navbar")},m(V,y){nt(V,l,y),ll(i,l,null),e(l,u),e(l,v),e(v,g),h=!0,I||(w=wm(v,"click",d[12]),I=!0)},p:We,i(V){h||(Rs(i.$$.fragment,V),Wc(()=>{h&&(m&&m.end(1),x=Jd(l,Or,{x:50,duration:300,delay:300}),x.start())}),h=!0)},o(V){Us(i.$$.fragment,V),x&&x.invalidate(),m=Xd(l,Or,{x:50,duration:300}),h=!1},d(V){V&&a(l),il(i),V&&m&&m.end(),I=!1,w()}}}function i6(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,F,k,A,G=Sg.nav&&o6(d),M=Sg.search&&c6(d),b=E_,C=[];for(let _=0;_<b.length;_+=1)C[_]=G_(C_(d,b,_));return{c(){l=s("div"),i=s("div"),G&&G.c(),u=o(),v=s("a"),g=s("img"),m=o(),h=s("div"),M&&M.c(),I=o(),w=s("div"),V=s("div"),y=s("span"),D=o(),E=s("ul");for(let _=0;_<C.length;_+=1)C[_].c();this.h()},l(_){l=r(_,"DIV",{class:!0});var q=n(l);i=r(q,"DIV",{class:!0});var O=n(i);G&&G.l(O),u=c(O),v=r(O,"A",{href:!0,class:!0});var L=n(v);g=r(L,"IMG",{src:!0,alt:!0,class:!0}),L.forEach(a),O.forEach(a),m=c(q),h=r(q,"DIV",{class:!0});var j=n(h);M&&M.l(j),I=c(j),w=r(j,"DIV",{id:!0,class:!0});var Y=n(w);V=r(Y,"DIV",{tabindex:!0,class:!0});var R=n(V);y=r(R,"SPAN",{class:!0}),n(y).forEach(a),R.forEach(a),D=c(Y),E=r(Y,"UL",{tabindex:!0,class:!0});var U=n(E);for(let ge=0;ge<C.length;ge+=1)C[ge].l(U);U.forEach(a),Y.forEach(a),j.forEach(a),q.forEach(a),this.h()},h(){S(g.src,x="/assets/pfp.png")||t(g,"src",x),t(g,"alt","logo"),t(g,"class","u-photo z-14 h-14"),t(v,"href","/"),t(v,"class","btn btn-ghost normal-case text-lg gap-3"),t(i,"class","navbar-start"),t(y,"class","i-heroicons-outline-color-swatch"),t(V,"tabindex","0"),t(V,"class","btn btn-square btn-ghost"),t(E,"tabindex","0"),t(E,"class","flex flex-nowrap shadow-2xl menu dropdown-content bg-base-100 text-base-content rounded-box w-52 p-2 gap-2 overflow-y-auto max-h-[21.5rem]"),Wt(E,"hidden",!d[6]),t(w,"id","change-theme"),t(w,"class","dropdown dropdown-end"),t(h,"class","navbar-end mr-8"),t(l,"class","navbar pl-16")},m(_,q){nt(_,l,q),e(l,i),G&&G.m(i,null),e(i,u),e(i,v),e(v,g),e(l,m),e(l,h),M&&M.m(h,null),e(h,I),e(h,w),e(w,V),e(V,y),e(w,D),e(w,E);for(let O=0;O<C.length;O+=1)C[O]&&C[O].m(E,null);A=!0},p(_,q){if(Sg.nav&&G.p(_,q),Sg.search&&M.p(_,q),q&2){b=E_;let O;for(O=0;O<b.length;O+=1){const L=C_(_,b,O);C[O]?C[O].p(L,q):(C[O]=G_(L),C[O].c(),C[O].m(E,null))}for(;O<C.length;O+=1)C[O].d(1);C.length=b.length}(!A||q&64)&&Wt(E,"hidden",!_[6])},i(_){A||(Rs(G),Wc(()=>{A&&(k&&k.end(1),F=Jd(l,Or,{x:-50,duration:300,delay:300}),F.start())}),A=!0)},o(_){Us(G),F&&F.invalidate(),k=Xd(l,Or,{x:-50,duration:300}),A=!1},d(_){_&&a(l),G&&G.d(),M&&M.d(),Ag(C,_),_&&k&&k.end()}}}function o6(d){let l,i;return l=new s6({props:{path:d[0],title:d[3],pin:d[6],scrollY:d[2],nav:Sg.nav}}),{c(){al(l.$$.fragment)},l(u){nl(l.$$.fragment,u)},m(u,v){ll(l,u,v),i=!0},p(u,v){const g={};v&1&&(g.path=u[0]),v&8&&(g.title=u[3]),v&64&&(g.pin=u[6]),v&4&&(g.scrollY=u[2]),l.$set(g)},i(u){i||(Rs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){il(l,u)}}}function c6(d){let l,i,u,v;return{c(){l=s("button"),i=s("span"),this.h()},l(g){l=r(g,"BUTTON",{"aria-label":!0,tabindex:!0,class:!0});var x=n(l);i=r(x,"SPAN",{class:!0}),n(i).forEach(a),x.forEach(a),this.h()},h(){t(i,"class","i-heroicons-outline-search"),t(l,"aria-label","search"),t(l,"tabindex","0"),t(l,"class","btn btn-square btn-ghost")},m(g,x){nt(g,l,x),e(l,i),u||(v=wm(l,"click",d[10]),u=!0)},p:We,d(g){g&&a(l),u=!1,v()}}}function d6(d){let l;return{c(){l=s("div"),this.h()},l(i){l=r(i,"DIV",{class:!0}),n(l).forEach(a),this.h()},h(){t(l,"class",`${d[18]} w-1 h-4 rounded-btn`)},m(i,u){nt(i,l,u)},p:We,d(i){i&&a(l)}}}function G_(d){let l,i,u=(d[15]??d[14])+"",v,g,x,m,h,I,w=["bg-primary","bg-secondary","bg-accent","bg-neutral"],V=[];for(let D=0;D<4;D+=1)V[D]=d6(n6(d,w,D));function y(){return d[11](d[14])}return{c(){l=s("button"),i=s("p"),v=f(u),g=o(),x=s("div");for(let D=0;D<4;D+=1)V[D].c();m=o(),this.h()},l(D){l=r(D,"BUTTON",{"data-theme":!0,class:!0});var E=n(l);i=r(E,"P",{class:!0});var F=n(i);v=p(F,u),F.forEach(a),g=c(E),x=r(E,"DIV",{class:!0});var k=n(x);for(let A=0;A<4;A+=1)V[A].l(k);k.forEach(a),m=c(E),E.forEach(a),this.h()},h(){t(i,"class","flex-1 text-left text-base-content group-hover:text-primary-content transition-color"),t(x,"class","grid grid-cols-4 gap-0.5 m-auto"),t(l,"data-theme",d[14]),t(l,"class","btn btn-ghost w-full hover:bg-primary group rounded-lg flex bg-base-100 p-2 transition-all"),Wt(l,"border-2",d[1]===d[14]),Wt(l,"border-primary",d[1]===d[14])},m(D,E){nt(D,l,E),e(l,i),e(i,v),e(l,g),e(l,x);for(let F=0;F<4;F+=1)V[F]&&V[F].m(x,null);e(l,m),h||(I=wm(l,"click",y),h=!0)},p(D,E){d=D,E&2&&Wt(l,"border-2",d[1]===d[14]),E&2&&Wt(l,"border-primary",d[1]===d[14])},d(D){D&&a(l),Ag(V,D),h=!1,I()}}}function u6(d){let l=!1,i=()=>{l=!1},u,v,g,x,m,h,I,w,V,y,D,E,F,k,A,G,M,b;Wc(d[9]);const C=[i6,l6],_=[];function q(O,L){return O[5]?1:0}return m=q(d),h=_[m]=C[m](d),{c(){v=s("meta"),g=o(),x=s("header"),h.c(),w=o(),V=s("button"),y=s("div"),E=o(),F=s("div"),k=s("span"),this.h()},l(O){const L=q2("svelte-1g590ms",L_.head);v=r(L,"META",{name:!0,content:!0}),L.forEach(a),g=c(O),x=r(O,"HEADER",{id:!0,class:!0});var j=n(x);h.l(j),j.forEach(a),w=c(O),V=r(O,"BUTTON",{id:!0,"aria-label":!0,class:!0});var Y=n(V);y=r(Y,"DIV",{class:!0,style:!0}),n(y).forEach(a),E=c(Y),F=r(Y,"DIV",{class:!0});var R=n(F);k=r(R,"SPAN",{class:!0}),n(k).forEach(a),R.forEach(a),Y.forEach(a),this.h()},h(){t(v,"name","theme-color"),t(v,"content",d[4]),t(x,"id","header"),t(x,"class",I="fixed z-50 w-screen transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[6.5rem] bg-pfp-navy text-white tracking-menu pb-5 pt-5 "+(d[2]>32&&"backdrop-blur border-base-content/10 bg-pfp-navy-100/30 md:bg-pfp-navy/30 text-pfp-navy")),Wt(x,"-translate-y-32",!d[6]&&d[2]>0),t(y,"class","radial-progress text-accent transition-all duration-500 ease-in-out group-hover:text-accent-focus col-start-1 row-start-1"),t(y,"style",D=`--size:4rem; --thickness: 0.25rem; --value:${d[7]};`),t(k,"class","i-heroicons-solid-chevron-up !w-6 !h-6"),t(F,"class","border-4 border-base-content/10 group-hover:border-transparent col-start-1 row-start-1 rounded-full w-full h-full p-4 grid duration-500 ease-in-out"),Wt(F,"border-transparent",d[7]>95),t(V,"id","totop"),t(V,"aria-label","scroll to top"),t(V,"class",A="fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out "+(d[7]>95?"btn-accent shadow-lg":"btn-ghost bg-base-100/30 md:bg-base-200/30")),Wt(V,"translate-y-24",!d[6]||d[2]===0),Wt(V,"opacity-100",d[2])},m(O,L){e(L_.head,v),nt(O,g,L),nt(O,x,L),_[m].m(x,null),nt(O,w,L),nt(O,V,L),e(V,y),e(V,E),e(V,F),e(F,k),G=!0,M||(b=[wm(G2,"scroll",()=>{l=!0,clearTimeout(u),u=setTimeout(i,100),d[9]()}),wm(V,"click",d[13])],M=!0)},p(O,[L]){L&4&&!l&&(l=!0,clearTimeout(u),scrollTo(G2.pageXOffset,O[2]),u=setTimeout(i,100)),(!G||L&16)&&t(v,"content",O[4]);let j=m;m=q(O),m===j?_[m].p(O,L):(R2(),Us(_[j],1,1,()=>{_[j]=null}),U2(),h=_[m],h?h.p(O,L):(h=_[m]=C[m](O),h.c()),Rs(h,1),h.m(x,null)),(!G||L&4&&I!==(I="fixed z-50 w-screen transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[6.5rem] bg-pfp-navy text-white tracking-menu pb-5 pt-5 "+(O[2]>32&&"backdrop-blur border-base-content/10 bg-pfp-navy-100/30 md:bg-pfp-navy/30 text-pfp-navy")))&&t(x,"class",I),(!G||L&68)&&Wt(x,"-translate-y-32",!O[6]&&O[2]>0),(!G||L&128&&D!==(D=`--size:4rem; --thickness: 0.25rem; --value:${O[7]};`))&&t(y,"style",D),(!G||L&128)&&Wt(F,"border-transparent",O[7]>95),(!G||L&128&&A!==(A="fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out "+(O[7]>95?"btn-accent shadow-lg":"btn-ghost bg-base-100/30 md:bg-base-200/30")))&&t(V,"class",A),(!G||L&196)&&Wt(V,"translate-y-24",!O[6]||O[2]===0),(!G||L&132)&&Wt(V,"opacity-100",O[2])},i(O){G||(Rs(h),G=!0)},o(O){Us(h),G=!1},d(O){a(v),O&&a(g),O&&a(x),_[m].d(),O&&a(w),O&&a(V),M=!1,VE(b)}}}function f6(d,l,i){let{path:u}=l,v,g,x,m=!1,h=!0,I,[w,V]=[0,0];TE.subscribe(A=>i(3,v=A));function y(){i(2,w=G2.pageYOffset)}const D=()=>i(5,m=!m),E=A=>{i(1,g=A),localStorage.setItem("theme",A)},F=()=>i(5,m=!m),k=()=>window.scrollTo(0,0);return d.$$set=A=>{"path"in A&&i(0,u=A.path)},d.$$.update=()=>{d.$$.dirty&2&&g&&(document.documentElement.setAttribute("data-theme",g),i(4,x=zE(...getComputedStyle(document.documentElement).getPropertyValue("--b1").slice(0).replaceAll("%","").split(" ").map(Number)))),d.$$.dirty&260&&w&&(i(6,h=V-w>0||w===0),i(8,V=w),i(7,I=Math.round(w/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*1e4)/100))},[u,g,w,v,x,m,h,I,V,y,D,E,F,k]}class p6 extends Pn{constructor(l){super(),Vn(this,l,f6,u6,Ha,{path:0})}}function M_(d){let l,i,u,v;const g=d[2].default,x=sE(g,d,d[1],null);return{c(){l=s("div"),x&&x.c(),this.h()},l(m){l=r(m,"DIV",{class:!0});var h=n(l);x&&x.l(h),h.forEach(a),this.h()},h(){t(l,"class","bg-base-100 md:bg-base-200 min-h-screen pt-16 md:pb-8 lg:pb-16")},m(m,h){nt(m,l,h),x&&x.m(l,null),v=!0},p(m,h){x&&x.p&&(!v||h&2)&&rE(x,g,m,m[1],v?nE(g,m[1],h,null):aE(m[1]),null)},i(m){v||(Rs(x,m),Wc(()=>{v&&(u&&u.end(1),i=Jd(l,Or,{y:100,duration:300,delay:300}),i.start())}),v=!0)},o(m){Us(x,m),i&&i.invalidate(),u=Xd(l,Or,{y:-100,duration:300}),v=!1},d(m){m&&a(l),x&&x.d(m),m&&u&&u.end()}}}function v6(d){let l=d[0],i,u,v=M_(d);return{c(){v.c(),i=xa()},l(g){v.l(g),i=xa()},m(g,x){v.m(g,x),nt(g,i,x),u=!0},p(g,[x]){x&1&&Ha(l,l=g[0])?(R2(),Us(v,1,1,We),U2(),v=M_(g),v.c(),Rs(v,1),v.m(i.parentNode,i)):v.p(g,x)},i(g){u||(Rs(v),u=!0)},o(g){Us(v),u=!1},d(g){g&&a(i),v.d(g)}}}function g6(d,l,i){let{$$slots:u={},$$scope:v}=l,{path:g=""}=l;return d.$$set=x=>{"path"in x&&i(0,g=x.path),"$$scope"in x&&i(1,v=x.$$scope)},[g,v,u]}class h6 extends Pn{constructor(l){super(),Vn(this,l,g6,v6,Ha,{path:0})}}function m6(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,F,k,A,G,M,b,C,_,q,O,L,j,Y,R,U,ge,ue,K,H,re,Fe,he,ze,we,ae,fe,qe,Ee,de,Ue,Le,N,Q,Ie=" ",_e,Ce,me,ie,Z,et,De,Se,ne,Re,Te,ee,Ne,Pe,$e,Be,Ge,xe,Ze,Qe,it,P,B,$,z,X,oe,J,Ve,ke,le,be,It,pe,te,Ke,Me,He,ye,Ye,ft,Ae,je,qt,Lt,Oe,yt,Vt,ce,ct,tt,pt,gt,Ct,dt,Rt,Dt,se,vt,kt,Gt,ut,ht,Mt,St,Je,Tt,Xe,wt,st,jt,Qt,mt,ve,rt,Nt,_t,at,ot,Ht,xt,Et,Jt,Ut,At,zt,Ot,Bt,bt,Ms,as,Yt,lt,Xt,ns,vs,W,gs,Pt,os,es,ls,Zs,Fr,ts,cs,ir,Vs,$s,Kt,hs,ks,Lr,Er,Ir,er,ws,or,ds,us,Zr,Cr,ss,Ss,kn,Gr,Ts,Sn,Mr,rs,Dr,Hs,ms,js,ba,Pr,$t,tr,cr,dr,ur,jr,_s,xs,ol,pi,ea,is,vi,Nr,ta,gi,cl,fo,fs,As,Br,Wa,Zt,fr,Vr,pr,Ns,qr,ya,Tn,dl,sr,ps,$l,hi,bs,sa,An,vr,Ya,mi,gr,Es,rr,Os,Bs,Rr,za,xi,hr,Ws,Fs,Ur,On,Fn,Ka,bi,Is,Ls,ra,po,yi,Ln,ar,mr,kr,nr,ul,$r,aa,Ys,Ja,Jc,Xc,na,wi,Zd,vo,_i,xr,ys,Cn,Gn,Xa,Ei,Ii,wa,br,go,Qc,la,Mn,Zc,Di,_a,Qa,jn,lf,ho,Za,en,Ea,Cs,Ia,mo,ia,tn,Da,Pa,Hl,Pi,Vi,Wl,ki,Nn,yr,sn,Bn,rn,ac,ed,xo,fl,oa,Gs,Va,Si,eu,lr,Sr,an,Ti,Ai,nn,ln,Yl,pl,Ds,ka,Oi,Sa,nc,td,wr,zs,vl,qn,qs,Ta,sd,gl,Ks,Fi,tu,Hr,Wr,su,rd,Yr,on;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=f("About us"),m=o(),h=s("div"),I=s("img"),V=o(),y=s("div"),D=s("div"),E=s("div"),F=f("Purpose"),k=o(),A=s("img"),M=o(),b=s("div"),C=s("div"),_=s("div"),q=o(),O=s("div"),L=f(`Our mission is to empower communities and businesses by helping them take control of their energy and
                environmental footprint.`),j=o(),Y=s("div"),R=s("div"),U=s("div"),ge=f(`By choosing to generate power from non-recycled waste, you can achieve supply security, cost control, and
                    environmental improvements while reducing dependence on the grid. Our projects operate continuously,
                    ensuring uninterrupted energy supply. They enable you to establish your own energy pricing while providing
                    eco-friendly electricity, biogas, and hydrogen. Our approach eliminates landfill waste, ocean dumping, and
                    open burning for a greener future.`),ue=o(),K=s("div"),H=s("div"),re=s("div"),Fe=f("Mission"),he=o(),ze=s("div"),we=s("div"),ae=s("img"),qe=o(),Ee=s("div"),de=s("div"),Ue=s("div"),Le=o(),N=s("div"),Q=f(`Our innovative digital ecosystem enables you to discover the potential of power generation from non-recycled
                waste across various sectors, including agriculture, food services, manufacturing, and distribution chains.`),_e=f(Ie),Ce=o(),me=s("div"),ie=s("div"),Z=s("div"),et=f(`We’ll collaborate with you to develop a tailored project. Our platform streamlines your journey from
                    feasibility to operation by connecting you with essential partners, such as technology providers, materials
                    analysts, funders, permit specialists, and construction and operation teams. No matter the size of your
                    waste output, from thousands of tonnes annually to just a few kilograms daily, we have a technology solution
                    designed to meet your needs.`),De=o(),Se=s("div"),ne=s("div"),Re=s("div"),Te=f("Vision"),ee=o(),Ne=s("img"),$e=o(),Be=s("div"),Ge=s("div"),xe=s("div"),Ze=o(),Qe=s("div"),it=f("Our vision is founded on the “6R” principles: Reduce, Reuse, Recycle, Repurpose, Regenerate, and Regrowth."),P=o(),B=s("div"),$=s("div"),z=s("div"),X=f(`Reduce consumption and resource use in our daily lives Reuse items until they no longer serve a purpose
                    Recycle all recyclable materials Repurpose non-recycled waste to generate green energy locally Regenerate
                    our environment by adopting circular models focused on nature, including our own by-products like organic
                    fertilizers, char, and biochar Regrowth involves fostering an economy that harmonizes our biosphere and
                    financial ecosystem after applying the first five principles`),oe=o(),J=s("div"),Ve=s("div"),ke=s("div"),le=s("div"),be=f("Meet the team"),It=o(),pe=s("div"),te=s("div"),Ke=s("div"),Me=s("div"),He=s("img"),Ye=o(),ft=s("div"),Ae=s("div"),je=s("div"),qt=f("Dermot McKeever"),Lt=o(),Oe=s("div"),yt=f("PFP Co-Founder and CEO"),Vt=o(),ce=s("div"),ct=s("div"),tt=s("div"),pt=f("BSc"),gt=o(),Ct=s("div"),dt=s("div"),Rt=f("Dip"),Dt=o(),se=s("div"),vt=s("div"),kt=f("PFS"),Gt=o(),ut=s("div"),ht=f(`Dermot studied climatology at Leicester University and has extensive experience in the renewable space.
                  Throughout his career, Dermot has demonstrated expertise in business development by holding senior leadership
                  positions across a wide range of business models, from global enterprises to start-ups such as Nutmeg, a
                  leading digital wealth management platform. He has also held numerous consultancy, board adviser and NED roles
                  and is a published author on leadership.`),Mt=o(),St=s("img"),Tt=o(),Xe=s("div"),wt=s("div"),st=s("img"),Qt=o(),mt=s("div"),ve=s("div"),rt=s("div"),Nt=f("James Cole"),_t=o(),at=s("div"),ot=f("PFP Co-Founder and Chairman"),Ht=o(),xt=s("div"),Et=s("div"),Jt=s("div"),Ut=f("BSc"),At=o(),zt=s("div"),Ot=f(`James has over 30 years of experience in real estate development and consultancy for multinational groups in
                  Asia, North America, Continental Europe and the UK. Furthermore, he has invested in and guided businesses in
                  private aviation, real estate investment, and renewable energy. Graduated from the Royal Military Academy
                  Sandhurst, after which he served in The Royal Green Jackets (now Rifles). He co-founded PFP to facilitate and
                  encourage a quantum shift in utilising waste as a green renewable energy source.`),Bt=o(),bt=s("img"),as=o(),Yt=s("div"),lt=s("div"),Xt=s("div"),ns=s("img"),W=o(),gs=s("div"),Pt=s("div"),os=s("div"),es=f("Simon Edwards"),ls=o(),Zs=s("div"),Fr=f("Senior Consultant"),ts=o(),cs=s("div"),ir=s("div"),Vs=s("div"),$s=f("BSc"),Kt=o(),hs=s("div"),ks=f(`Simon, a University of Warwick alumnus, has 30+ years’ experience providing clients across all sectors of the
                  economy with energy reduction/management solutions and electricity/ gas procurement advice. Simon is utilising
                  his vast experience and connections in the energy sector to advise PFP’s clients on the cost savings and
                  impacts of utilising waste as a power source. Additionally, he runs the PFP introducer network, consisting of
                  industry heavyweights tasked with identifying potential projects.`),Lr=o(),Er=s("img"),er=o(),ws=s("div"),or=s("div"),ds=s("img"),Zr=o(),Cr=s("div"),ss=s("div"),Ss=s("div"),kn=f("Alice Chave"),Gr=o(),Ts=s("div"),Sn=f("Environmental and Technical Engineer"),Mr=o(),rs=s("div"),Dr=f(`Alice holds a Master of Science in Engineering for International Development from the University College
                  London, complemented with a Bachelors in Environmental Engineering. Throughout her academic and professional
                  journey, she has been involved in international development projects, focusing on designing off-grid solutions
                  to benefit communities in the developing world.`),Hs=o(),ms=s("img"),ba=o(),Pr=s("div"),$t=s("div"),tr=s("div"),cr=s("img"),ur=o(),jr=s("div"),_s=s("div"),xs=s("div"),ol=f("Tim Edwards"),pi=o(),ea=s("div"),is=f("Strategy Executive"),vi=o(),Nr=s("div"),ta=f(`Tim is an economist with specialised skills in data, analytics, and strategy. He applies his understanding of
                  economic principles to analyse data and develop effective strategies for PFP’s clients. A University of
                  Bristol graduate, Tim boasts an accolade from The Chartered Banker Institute’s essay competition, where his
                  piece on how finance professionals can help achieve society’s goals on climate change was published alongside
                  distinguished academics, business leaders, and politicians.`),gi=o(),cl=s("img"),fs=o(),As=s("div"),Br=s("div"),Wa=s("img"),fr=o(),Vr=s("div"),pr=s("div"),Ns=s("div"),qr=f("Paul Lee"),ya=o(),Tn=s("div"),dl=f("Chief Resilience Officer"),sr=o(),ps=s("div"),$l=f(`Paul is an experienced Information Security Leader with expertise in FinTech and cryptocurrency. With 19 years
                  of experience in the UK and US, he has directed the infrastructure for a leading Security Certificate
                  Authority. Passionate about renewable energy and carbon-negative initiatives, he holds degrees from the
                  universities of Leeds and Liverpool, making a valuable asset to our team.`),hi=o(),bs=s("img"),An=o(),vr=s("div"),Ya=s("div"),mi=f("Advisory board"),gr=o(),Es=s("div"),rr=s("div"),Os=s("div"),Bs=s("div"),Rr=s("img"),xi=o(),hr=s("div"),Ws=s("div"),Fs=s("div"),Ur=f("Dr. Linda Hilton"),On=o(),Fn=s("div"),Ka=f("Board Advisor"),bi=o(),Is=s("div"),Ls=s("div"),ra=s("div"),po=f("PhD"),yi=o(),Ln=s("div"),ar=s("div"),mr=f("CChem"),kr=o(),nr=s("div"),ul=s("div"),$r=f("FRSC"),aa=o(),Ys=s("div"),Ja=s("div"),Jc=f("CSci"),Xc=o(),na=s("div"),wi=f(`Linda brings a unique blend of strategy, science, technology and management expertise gained across various
                  sectors including FMCG, IT, engineering, nuclear, environmental and renewables. Capable of offering both
                  strategic and operational insight, Linda has worked in a variety of different roles and environments around
                  the world for large corporates, research organisations, SME’s, spin-offs and start-ups (social enterprise) and
                  is passionate about using this experience to help people to mitigate climate change.`),Zd=o(),vo=s("img"),xr=o(),ys=s("div"),Cn=s("div"),Gn=s("img"),Ei=o(),Ii=s("div"),wa=s("div"),br=s("div"),go=f("Alexandre Chavarot"),Qc=o(),la=s("div"),Mn=f("Board Advisor"),Zc=o(),Di=s("div"),_a=f(`Alexandre, a UK-based independent climate and energy transition finance professional offers expert advisory
                  services to a diverse range of clients, including corporates, asset owners and managers, government entities,
                  and foundations. His background spans project and corporate acquisitions, risk assessments, investments, and
                  financings in the energy, infrastructure, and maritime sectors, working with leading investment banks,
                  foundations, and advisory firms. Alexandre holds degrees from prestigious institutions, including Sciences Po,
                  Harvard, and INSEAD. His passion for addressing climate change and sustainable development make him a vital
                  contributor to the ongoing global transition to a more sustainable future.`),Qa=o(),jn=s("img"),ho=o(),Za=s("div"),en=s("div"),Ea=s("div"),Cs=s("img"),mo=o(),ia=s("div"),tn=s("div"),Da=s("div"),Pa=f("Jayne Walters"),Hl=o(),Pi=s("div"),Vi=f("Board Advisor"),Wl=o(),ki=s("div"),Nn=s("div"),yr=s("div"),sn=f("BSc"),Bn=o(),rn=s("div"),ac=f(`Jayne is a lawyer with extensive legal experience having been a partner in a major City law firm and General
                  Counsel for property investment, development and financing businesses. Jayne oversees PFP’s compliance with
                  the business’s legal requirements and advises on the contracts required for individual projects. Jayne holds a
                  degree from The University of Cambridge.`),ed=o(),xo=s("img"),oa=o(),Gs=s("div"),Va=s("div"),Si=s("img"),lr=o(),Sr=s("div"),an=s("div"),Ti=s("div"),Ai=f("Shanika Amarasekara"),nn=o(),ln=s("div"),Yl=f("Board advisor"),pl=o(),Ds=s("div"),ka=f(`Shanika was Chief Impact Officer at British Business Bank and an Executive Committee member responsible for
                  ESG, Economics, Policy and Strategy. Recently, Shanika was involved in the creation of both the Coronavirus
                  Business Interruption Loan Scheme (CBILS) and the Future Fund. The scale of both schemes expanded the bank’s
                  balance sheet by ten times. She was appointed General Counsel and Company Secretary and was a founder member
                  of the Senior Management Team which established and launched the bank in 2014. The bank was set up to increase
                  the supply of credit and finance to SMEs, enabling these companies to contribute effectively to the UK
                  economy.`),Oi=o(),Sa=s("img"),td=o(),wr=s("div"),zs=s("div"),vl=f("Copyright © 2023 Power for Planet"),qn=o(),qs=s("div"),Ta=s("div"),sd=f("Privacy Policy"),gl=o(),Ks=s("div"),Fi=s("img"),Hr=o(),Wr=s("img"),rd=o(),Yr=s("img"),this.h()},l(cn){l=r(cn,"DIV",{class:!0});var hl=n(l);i=r(hl,"DIV",{class:!0});var bo=n(i);u=r(bo,"DIV",{class:!0});var zl=n(u);v=r(zl,"DIV",{class:!0});var ru=n(v);g=r(ru,"DIV",{});var ca=n(g);x=p(ca,"About us"),ca.forEach(a),ru.forEach(a),m=c(zl),h=r(zl,"DIV",{class:!0});var Js=n(h);I=r(Js,"IMG",{src:!0,alt:!0,class:!0}),V=c(Js),y=r(Js,"DIV",{class:!0});var ml=n(y);D=r(ml,"DIV",{class:!0});var Rn=n(D);E=r(Rn,"DIV",{});var Li=n(E);F=p(Li,"Purpose"),Li.forEach(a),k=c(Rn),A=r(Rn,"IMG",{src:!0,alt:!0,class:!0}),Rn.forEach(a),M=c(ml),b=r(ml,"DIV",{class:!0});var Ci=n(b);C=r(Ci,"DIV",{class:!0});var da=n(C);_=r(da,"DIV",{class:!0}),n(_).forEach(a),q=c(da),O=r(da,"DIV",{class:!0});var Un=n(O);L=p(Un,`Our mission is to empower communities and businesses by helping them take control of their energy and
                environmental footprint.`),Un.forEach(a),j=c(da),Y=r(da,"DIV",{class:!0});var of=n(Y);R=r(of,"DIV",{class:!0});var au=n(R);U=r(au,"DIV",{class:!0});var yo=n(U);ge=p(yo,`By choosing to generate power from non-recycled waste, you can achieve supply security, cost control, and
                    environmental improvements while reducing dependence on the grid. Our projects operate continuously,
                    ensuring uninterrupted energy supply. They enable you to establish your own energy pricing while providing
                    eco-friendly electricity, biogas, and hydrogen. Our approach eliminates landfill waste, ocean dumping, and
                    open burning for a greener future.`),yo.forEach(a),au.forEach(a),of.forEach(a),da.forEach(a),Ci.forEach(a),ml.forEach(a),ue=c(Js),K=r(Js,"DIV",{class:!0});var Xs=n(K);H=r(Xs,"DIV",{class:!0});var dn=n(H);re=r(dn,"DIV",{class:!0});var cf=n(re);Fe=p(cf,"Mission"),cf.forEach(a),he=c(dn),ze=r(dn,"DIV",{class:!0});var nu=n(ze);we=r(nu,"DIV",{});var lc=n(we);ae=r(lc,"IMG",{src:!0,alt:!0,class:!0}),lc.forEach(a),nu.forEach(a),dn.forEach(a),qe=c(Xs),Ee=r(Xs,"DIV",{class:!0});var $n=n(Ee);de=r($n,"DIV",{class:!0});var un=n(de);Ue=r(un,"DIV",{class:!0}),n(Ue).forEach(a),Le=c(un),N=r(un,"DIV",{class:!0});var ic=n(N);Q=p(ic,`Our innovative digital ecosystem enables you to discover the potential of power generation from non-recycled
                waste across various sectors, including agriculture, food services, manufacturing, and distribution chains.`),_e=p(ic,Ie),ic.forEach(a),Ce=c(un),me=r(un,"DIV",{class:!0});var lu=n(me);ie=r(lu,"DIV",{class:!0});var Gi=n(ie);Z=r(Gi,"DIV",{class:!0});var Aa=n(Z);et=p(Aa,`We’ll collaborate with you to develop a tailored project. Our platform streamlines your journey from
                    feasibility to operation by connecting you with essential partners, such as technology providers, materials
                    analysts, funders, permit specialists, and construction and operation teams. No matter the size of your
                    waste output, from thousands of tonnes annually to just a few kilograms daily, we have a technology solution
                    designed to meet your needs.`),Aa.forEach(a),Gi.forEach(a),lu.forEach(a),un.forEach(a),$n.forEach(a),Xs.forEach(a),De=c(Js),Se=r(Js,"DIV",{class:!0});var Hn=n(Se);ne=r(Hn,"DIV",{class:!0});var xl=n(ne);Re=r(xl,"DIV",{});var wo=n(Re);Te=p(wo,"Vision"),wo.forEach(a),ee=c(xl),Ne=r(xl,"IMG",{src:!0,alt:!0,class:!0}),xl.forEach(a),$e=c(Hn),Be=r(Hn,"DIV",{class:!0});var df=n(Be);Ge=r(df,"DIV",{class:!0});var Wn=n(Ge);xe=r(Wn,"DIV",{class:!0}),n(xe).forEach(a),Ze=c(Wn),Qe=r(Wn,"DIV",{class:!0});var bl=n(Qe);it=p(bl,"Our vision is founded on the “6R” principles: Reduce, Reuse, Recycle, Repurpose, Regenerate, and Regrowth."),bl.forEach(a),P=c(Wn),B=r(Wn,"DIV",{class:!0});var _o=n(B);$=r(_o,"DIV",{class:!0});var Eo=n($);z=r(Eo,"DIV",{class:!0});var Oa=n(z);X=p(Oa,`Reduce consumption and resource use in our daily lives Reuse items until they no longer serve a purpose
                    Recycle all recyclable materials Repurpose non-recycled waste to generate green energy locally Regenerate
                    our environment by adopting circular models focused on nature, including our own by-products like organic
                    fertilizers, char, and biochar Regrowth involves fostering an economy that harmonizes our biosphere and
                    financial ecosystem after applying the first five principles`),Oa.forEach(a),Eo.forEach(a),_o.forEach(a),Wn.forEach(a),df.forEach(a),Hn.forEach(a),Js.forEach(a),oe=c(zl),J=r(zl,"DIV",{class:!0});var Yn=n(J);Ve=r(Yn,"DIV",{class:!0});var fn=n(Ve);ke=r(fn,"DIV",{class:!0});var iu=n(ke);le=r(iu,"DIV",{});var oc=n(le);be=p(oc,"Meet the team"),oc.forEach(a),iu.forEach(a),It=c(fn),pe=r(fn,"DIV",{class:!0});var yl=n(pe);te=r(yl,"DIV",{class:!0});var cc=n(te);Ke=r(cc,"DIV",{class:!0});var wl=n(Ke);Me=r(wl,"DIV",{class:!0});var Kl=n(Me);He=r(Kl,"IMG",{src:!0,alt:!0,class:!0}),Ye=c(Kl),ft=r(Kl,"DIV",{class:!0});var zn=n(ft);Ae=r(zn,"DIV",{class:!0});var Fa=n(Ae);je=r(Fa,"DIV",{class:!0});var Io=n(je);qt=p(Io,"Dermot McKeever"),Io.forEach(a),Lt=c(Fa),Oe=r(Fa,"DIV",{class:!0});var Mi=n(Oe);yt=p(Mi,"PFP Co-Founder and CEO"),Mi.forEach(a),Fa.forEach(a),Vt=c(zn),ce=r(zn,"DIV",{class:!0});var pn=n(ce);ct=r(pn,"DIV",{class:!0});var _l=n(ct);tt=r(_l,"DIV",{});var La=n(tt);pt=p(La,"BSc"),La.forEach(a),_l.forEach(a),gt=c(pn),Ct=r(pn,"DIV",{class:!0});var El=n(Ct);dt=r(El,"DIV",{});var ou=n(dt);Rt=p(ou,"Dip"),ou.forEach(a),El.forEach(a),Dt=c(pn),se=r(pn,"DIV",{class:!0});var Jl=n(se);vt=r(Jl,"DIV",{});var Kn=n(vt);kt=p(Kn,"PFS"),Kn.forEach(a),Jl.forEach(a),pn.forEach(a),zn.forEach(a),Kl.forEach(a),Gt=c(wl),ut=r(wl,"DIV",{class:!0});var cu=n(ut);ht=p(cu,`Dermot studied climatology at Leicester University and has extensive experience in the renewable space.
                  Throughout his career, Dermot has demonstrated expertise in business development by holding senior leadership
                  positions across a wide range of business models, from global enterprises to start-ups such as Nutmeg, a
                  leading digital wealth management platform. He has also held numerous consultancy, board adviser and NED roles
                  and is a published author on leadership.`),cu.forEach(a),Mt=c(wl),St=r(wl,"IMG",{src:!0}),wl.forEach(a),Tt=c(cc),Xe=r(cc,"DIV",{class:!0});var ji=n(Xe);wt=r(ji,"DIV",{class:!0});var Tr=n(wt);st=r(Tr,"IMG",{src:!0,alt:!0,class:!0}),Qt=c(Tr),mt=r(Tr,"DIV",{class:!0});var vn=n(mt);ve=r(vn,"DIV",{class:!0});var Ca=n(ve);rt=r(Ca,"DIV",{class:!0});var Ni=n(rt);Nt=p(Ni,"James Cole"),Ni.forEach(a),_t=c(Ca),at=r(Ca,"DIV",{class:!0});var Xl=n(at);ot=p(Xl,"PFP Co-Founder and Chairman"),Xl.forEach(a),Ca.forEach(a),Ht=c(vn),xt=r(vn,"DIV",{class:!0});var Bi=n(xt);Et=r(Bi,"DIV",{class:!0});var uf=n(Et);Jt=r(uf,"DIV",{});var Do=n(Jt);Ut=p(Do,"BSc"),Do.forEach(a),uf.forEach(a),Bi.forEach(a),vn.forEach(a),Tr.forEach(a),At=c(ji),zt=r(ji,"DIV",{class:!0});var Ga=n(zt);Ot=p(Ga,`James has over 30 years of experience in real estate development and consultancy for multinational groups in
                  Asia, North America, Continental Europe and the UK. Furthermore, he has invested in and guided businesses in
                  private aviation, real estate investment, and renewable energy. Graduated from the Royal Military Academy
                  Sandhurst, after which he served in The Royal Green Jackets (now Rifles). He co-founded PFP to facilitate and
                  encourage a quantum shift in utilising waste as a green renewable energy source.`),Ga.forEach(a),Bt=c(ji),bt=r(ji,"IMG",{src:!0}),ji.forEach(a),cc.forEach(a),as=c(yl),Yt=r(yl,"DIV",{class:!0});var Ql=n(Yt);lt=r(Ql,"DIV",{class:!0});var Po=n(lt);Xt=r(Po,"DIV",{class:!0});var Il=n(Xt);ns=r(Il,"IMG",{src:!0,alt:!0,class:!0}),W=c(Il),gs=r(Il,"DIV",{class:!0});var Jn=n(gs);Pt=r(Jn,"DIV",{class:!0});var Qs=n(Pt);os=r(Qs,"DIV",{class:!0});var ua=n(os);es=p(ua,"Simon Edwards"),ua.forEach(a),ls=c(Qs),Zs=r(Qs,"DIV",{class:!0});var Dl=n(Zs);Fr=p(Dl,"Senior Consultant"),Dl.forEach(a),Qs.forEach(a),ts=c(Jn),cs=r(Jn,"DIV",{class:!0});var ff=n(cs);ir=r(ff,"DIV",{class:!0});var du=n(ir);Vs=r(du,"DIV",{});var fa=n(Vs);$s=p(fa,"BSc"),fa.forEach(a),du.forEach(a),ff.forEach(a),Jn.forEach(a),Il.forEach(a),Kt=c(Po),hs=r(Po,"DIV",{class:!0});var qi=n(hs);ks=p(qi,`Simon, a University of Warwick alumnus, has 30+ years’ experience providing clients across all sectors of the
                  economy with energy reduction/management solutions and electricity/ gas procurement advice. Simon is utilising
                  his vast experience and connections in the energy sector to advise PFP’s clients on the cost savings and
                  impacts of utilising waste as a power source. Additionally, he runs the PFP introducer network, consisting of
                  industry heavyweights tasked with identifying potential projects.`),qi.forEach(a),Lr=c(Po),Er=r(Po,"IMG",{src:!0}),Po.forEach(a),er=c(Ql),ws=r(Ql,"DIV",{class:!0});var Vo=n(ws);or=r(Vo,"DIV",{class:!0});var Zl=n(or);ds=r(Zl,"IMG",{src:!0,alt:!0,class:!0}),Zr=c(Zl),Cr=r(Zl,"DIV",{class:!0});var Ps=n(Cr);ss=r(Ps,"DIV",{class:!0});var Ma=n(ss);Ss=r(Ma,"DIV",{class:!0});var ko=n(Ss);kn=p(ko,"Alice Chave"),ko.forEach(a),Gr=c(Ma),Ts=r(Ma,"DIV",{class:!0});var Pl=n(Ts);Sn=p(Pl,"Environmental and Technical Engineer"),Pl.forEach(a),Ma.forEach(a),Ps.forEach(a),Zl.forEach(a),Mr=c(Vo),rs=r(Vo,"DIV",{class:!0});var ad=n(rs);Dr=p(ad,`Alice holds a Master of Science in Engineering for International Development from the University College
                  London, complemented with a Bachelors in Environmental Engineering. Throughout her academic and professional
                  journey, she has been involved in international development projects, focusing on designing off-grid solutions
                  to benefit communities in the developing world.`),ad.forEach(a),Hs=c(Vo),ms=r(Vo,"IMG",{src:!0}),Vo.forEach(a),Ql.forEach(a),ba=c(yl),Pr=r(yl,"DIV",{class:!0});var dc=n(Pr);$t=r(dc,"DIV",{class:!0});var zr=n($t);tr=r(zr,"DIV",{class:!0});var gn=n(tr);cr=r(gn,"IMG",{src:!0,alt:!0,class:!0}),ur=c(gn),jr=r(gn,"DIV",{class:!0});var uu=n(jr);_s=r(uu,"DIV",{class:!0});var uc=n(_s);xs=r(uc,"DIV",{class:!0});var Kr=n(xs);ol=p(Kr,"Tim Edwards"),Kr.forEach(a),pi=c(uc),ea=r(uc,"DIV",{class:!0});var hn=n(ea);is=p(hn,"Strategy Executive"),hn.forEach(a),uc.forEach(a),uu.forEach(a),gn.forEach(a),vi=c(zr),Nr=r(zr,"DIV",{class:!0});var Ri=n(Nr);ta=p(Ri,`Tim is an economist with specialised skills in data, analytics, and strategy. He applies his understanding of
                  economic principles to analyse data and develop effective strategies for PFP’s clients. A University of
                  Bristol graduate, Tim boasts an accolade from The Chartered Banker Institute’s essay competition, where his
                  piece on how finance professionals can help achieve society’s goals on climate change was published alongside
                  distinguished academics, business leaders, and politicians.`),Ri.forEach(a),gi=c(zr),cl=r(zr,"IMG",{src:!0}),zr.forEach(a),fs=c(dc),As=r(dc,"DIV",{class:!0});var So=n(As);Br=r(So,"DIV",{class:!0});var Vl=n(Br);Wa=r(Vl,"IMG",{src:!0,alt:!0,class:!0}),fr=c(Vl),Vr=r(Vl,"DIV",{class:!0});var fc=n(Vr);pr=r(fc,"DIV",{class:!0});var pc=n(pr);Ns=r(pc,"DIV",{class:!0});var ei=n(Ns);qr=p(ei,"Paul Lee"),ei.forEach(a),ya=c(pc),Tn=r(pc,"DIV",{class:!0});var kl=n(Tn);dl=p(kl,"Chief Resilience Officer"),kl.forEach(a),pc.forEach(a),fc.forEach(a),Vl.forEach(a),sr=c(So),ps=r(So,"DIV",{class:!0});var ja=n(ps);$l=p(ja,`Paul is an experienced Information Security Leader with expertise in FinTech and cryptocurrency. With 19 years
                  of experience in the UK and US, he has directed the infrastructure for a leading Security Certificate
                  Authority. Passionate about renewable energy and carbon-negative initiatives, he holds degrees from the
                  universities of Leeds and Liverpool, making a valuable asset to our team.`),ja.forEach(a),hi=c(So),bs=r(So,"IMG",{src:!0}),So.forEach(a),dc.forEach(a),yl.forEach(a),An=c(fn),vr=r(fn,"DIV",{class:!0});var vc=n(vr);Ya=r(vc,"DIV",{});var fu=n(Ya);mi=p(fu,"Advisory board"),fu.forEach(a),vc.forEach(a),gr=c(fn),Es=r(fn,"DIV",{class:!0});var Xn=n(Es);rr=r(Xn,"DIV",{class:!0});var pa=n(rr);Os=r(pa,"DIV",{class:!0});var mn=n(Os);Bs=r(mn,"DIV",{class:!0});var nd=n(Bs);Rr=r(nd,"IMG",{src:!0,alt:!0,class:!0}),xi=c(nd),hr=r(nd,"DIV",{class:!0});var Ui=n(hr);Ws=r(Ui,"DIV",{class:!0});var gc=n(Ws);Fs=r(gc,"DIV",{class:!0});var Sl=n(Fs);Ur=p(Sl,"Dr. Linda Hilton"),Sl.forEach(a),On=c(gc),Fn=r(gc,"DIV",{class:!0});var Tl=n(Fn);Ka=p(Tl,"Board Advisor"),Tl.forEach(a),gc.forEach(a),bi=c(Ui),Is=r(Ui,"DIV",{class:!0});var ti=n(Is);Ls=r(ti,"DIV",{class:!0});var pu=n(Ls);ra=r(pu,"DIV",{});var si=n(ra);po=p(si,"PhD"),si.forEach(a),pu.forEach(a),yi=c(ti),Ln=r(ti,"DIV",{class:!0});var Jr=n(Ln);ar=r(Jr,"DIV",{});var va=n(ar);mr=p(va,"CChem"),va.forEach(a),Jr.forEach(a),kr=c(ti),nr=r(ti,"DIV",{class:!0});var Al=n(nr);ul=r(Al,"DIV",{});var pf=n(ul);$r=p(pf,"FRSC"),pf.forEach(a),Al.forEach(a),aa=c(ti),Ys=r(ti,"DIV",{class:!0});var ri=n(Ys);Ja=r(ri,"DIV",{});var To=n(Ja);Jc=p(To,"CSci"),To.forEach(a),ri.forEach(a),ti.forEach(a),Ui.forEach(a),nd.forEach(a),Xc=c(mn),na=r(mn,"DIV",{class:!0});var Ol=n(na);wi=p(Ol,`Linda brings a unique blend of strategy, science, technology and management expertise gained across various
                  sectors including FMCG, IT, engineering, nuclear, environmental and renewables. Capable of offering both
                  strategic and operational insight, Linda has worked in a variety of different roles and environments around
                  the world for large corporates, research organisations, SME’s, spin-offs and start-ups (social enterprise) and
                  is passionate about using this experience to help people to mitigate climate change.`),Ol.forEach(a),Zd=c(mn),vo=r(mn,"IMG",{src:!0}),mn.forEach(a),xr=c(pa),ys=r(pa,"DIV",{class:!0});var xn=n(ys);Cn=r(xn,"DIV",{class:!0});var Fl=n(Cn);Gn=r(Fl,"IMG",{src:!0,alt:!0,class:!0}),Ei=c(Fl),Ii=r(Fl,"DIV",{class:!0});var Ao=n(Ii);wa=r(Ao,"DIV",{class:!0});var hc=n(wa);br=r(hc,"DIV",{class:!0});var Qn=n(br);go=p(Qn,"Alexandre Chavarot"),Qn.forEach(a),Qc=c(hc),la=r(hc,"DIV",{class:!0});var ga=n(la);Mn=p(ga,"Board Advisor"),ga.forEach(a),hc.forEach(a),Ao.forEach(a),Fl.forEach(a),Zc=c(xn),Di=r(xn,"DIV",{class:!0});var Oo=n(Di);_a=p(Oo,`Alexandre, a UK-based independent climate and energy transition finance professional offers expert advisory
                  services to a diverse range of clients, including corporates, asset owners and managers, government entities,
                  and foundations. His background spans project and corporate acquisitions, risk assessments, investments, and
                  financings in the energy, infrastructure, and maritime sectors, working with leading investment banks,
                  foundations, and advisory firms. Alexandre holds degrees from prestigious institutions, including Sciences Po,
                  Harvard, and INSEAD. His passion for addressing climate change and sustainable development make him a vital
                  contributor to the ongoing global transition to a more sustainable future.`),Oo.forEach(a),Qa=c(xn),jn=r(xn,"IMG",{src:!0}),xn.forEach(a),pa.forEach(a),ho=c(Xn),Za=r(Xn,"DIV",{class:!0});var ld=n(Za);en=r(ld,"DIV",{class:!0});var bn=n(en);Ea=r(bn,"DIV",{class:!0});var Na=n(Ea);Cs=r(Na,"IMG",{src:!0,alt:!0,class:!0}),mo=c(Na),ia=r(Na,"DIV",{class:!0});var id=n(ia);tn=r(id,"DIV",{class:!0});var mc=n(tn);Da=r(mc,"DIV",{class:!0});var yn=n(Da);Pa=p(yn,"Jayne Walters"),yn.forEach(a),Hl=c(mc),Pi=r(mc,"DIV",{class:!0});var $i=n(Pi);Vi=p($i,"Board Advisor"),$i.forEach(a),mc.forEach(a),Wl=c(id),ki=r(id,"DIV",{class:!0});var ai=n(ki);Nn=r(ai,"DIV",{class:!0});var Xr=n(Nn);yr=r(Xr,"DIV",{});var Zn=n(yr);sn=p(Zn,"BSc"),Zn.forEach(a),Xr.forEach(a),ai.forEach(a),id.forEach(a),Na.forEach(a),Bn=c(bn),rn=r(bn,"DIV",{class:!0});var vf=n(rn);ac=p(vf,`Jayne is a lawyer with extensive legal experience having been a partner in a major City law firm and General
                  Counsel for property investment, development and financing businesses. Jayne oversees PFP’s compliance with
                  the business’s legal requirements and advises on the contracts required for individual projects. Jayne holds a
                  degree from The University of Cambridge.`),vf.forEach(a),ed=c(bn),xo=r(bn,"IMG",{src:!0}),bn.forEach(a),oa=c(ld),Gs=r(ld,"DIV",{class:!0});var Hi=n(Gs);Va=r(Hi,"DIV",{class:!0});var ha=n(Va);Si=r(ha,"IMG",{src:!0,alt:!0,class:!0}),lr=c(ha),Sr=r(ha,"DIV",{class:!0});var xc=n(Sr);an=r(xc,"DIV",{class:!0});var bc=n(an);Ti=r(bc,"DIV",{class:!0});var Fo=n(Ti);Ai=p(Fo,"Shanika Amarasekara"),Fo.forEach(a),nn=c(bc),ln=r(bc,"DIV",{class:!0});var Ba=n(ln);Yl=p(Ba,"Board advisor"),Ba.forEach(a),bc.forEach(a),xc.forEach(a),ha.forEach(a),pl=c(Hi),Ds=r(Hi,"DIV",{class:!0});var yc=n(Ds);ka=p(yc,`Shanika was Chief Impact Officer at British Business Bank and an Executive Committee member responsible for
                  ESG, Economics, Policy and Strategy. Recently, Shanika was involved in the creation of both the Coronavirus
                  Business Interruption Loan Scheme (CBILS) and the Future Fund. The scale of both schemes expanded the bank’s
                  balance sheet by ten times. She was appointed General Counsel and Company Secretary and was a founder member
                  of the Senior Management Team which established and launched the bank in 2014. The bank was set up to increase
                  the supply of credit and finance to SMEs, enabling these companies to contribute effectively to the UK
                  economy.`),yc.forEach(a),Oi=c(Hi),Sa=r(Hi,"IMG",{src:!0}),Hi.forEach(a),ld.forEach(a),Xn.forEach(a),fn.forEach(a),Yn.forEach(a),td=c(zl),wr=r(zl,"DIV",{class:!0});var wc=n(wr);zs=r(wc,"DIV",{class:!0});var Lo=n(zs);vl=p(Lo,"Copyright © 2023 Power for Planet"),Lo.forEach(a),qn=c(wc),qs=r(wc,"DIV",{class:!0});var qa=n(qs);Ta=r(qa,"DIV",{class:!0});var ni=n(Ta);sd=p(ni,"Privacy Policy"),ni.forEach(a),gl=c(qa),Ks=r(qa,"DIV",{class:!0});var el=n(Ks);Fi=r(el,"IMG",{src:!0,alt:!0,class:!0}),Hr=c(el),Wr=r(el,"IMG",{src:!0,alt:!0,class:!0}),rd=c(el),Yr=r(el,"IMG",{src:!0,alt:!0,class:!0}),el.forEach(a),qa.forEach(a),wc.forEach(a),zl.forEach(a),bo.forEach(a),hl.forEach(a),this.h()},h(){t(v,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),S(I.src,w="/assets/new/Line-1.svg")||t(I,"src",w),t(I,"alt","Line 1"),t(I,"class","h-[670px] w-2.5 left-[130px] bottom-[-130px] relative mb-[-700px] z-1"),S(A.src,G="/assets/new/graphic.svg")||t(A,"src",G),t(A,"alt","graphic"),t(A,"class","h-[110px] w-[65px]"),t(D,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),t(_,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(O,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t(U,"class","w-[690px]"),t(R,"class","w-full flex-col flex items-start gap-[18px]"),t(Y,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(C,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(b,"class","flex-1 flex items-start gap-5"),t(y,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),t(re,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(ae.src,fe="/assets/new/graphic-45.svg")||t(ae,"src",fe),t(ae,"alt","graphic"),t(ae,"class","h-[120px] w-[120px]"),t(ze,"class","flex justify-center items-center gap-2.5 pr-[13px]"),t(H,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full"),t(Ue,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(N,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t(Z,"class","w-[690px]"),t(ie,"class","w-full flex-col flex items-start gap-[18px]"),t(me,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(de,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(Ee,"class","flex-1 flex items-start gap-5"),t(K,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),S(Ne.src,Pe="/assets/new/graphic-10.svg")||t(Ne,"src",Pe),t(Ne,"alt","graphic"),t(Ne,"class","h-[120px] w-[120px]"),t(ne,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),t(xe,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(Qe,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t(z,"class","w-[690px]"),t($,"class","w-full flex-col flex items-start gap-[18px]"),t(B,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(Ge,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(Be,"class","flex-1 flex items-start gap-5"),t(Se,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),t(h,"class","w-full flex-col flex items-start gap-[30px]"),t(ke,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(He.src,ye="/assets/new/Vector-11.svg")||t(He,"src",ye),t(He,"alt","Vector"),t(He,"class","h-[100px] w-[100px]"),t(je,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Oe,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Ae,"class","w-full flex-col flex items-start font-bold"),t(ct,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Ct,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(se,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(ce,"class","flex items-start gap-1.5 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(ft,"class","flex-1 flex-col flex items-start gap-2"),t(Me,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(ut,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(St.src,Je="/assets/LI.png")||t(St,"src",Je),t(Ke,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(st.src,jt="/assets/new/Vector-12.svg")||t(st,"src",jt),t(st,"alt","Vector"),t(st,"class","h-[100px] w-[100px]"),t(rt,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(at,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(ve,"class","w-full flex-col flex items-start font-bold"),t(Et,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(xt,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(mt,"class","flex-1 flex-col flex items-start gap-2"),t(wt,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(zt,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(bt.src,Ms="/assets/LI.png")||t(bt,"src",Ms),t(Xe,"class","bg-[#e7f5f5] flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(te,"class","w-full flex items-start gap-5"),S(ns.src,vs="/assets/new/Vector-13.svg")||t(ns,"src",vs),t(ns,"alt","Vector"),t(ns,"class","h-[100px] w-[100px]"),t(os,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Zs,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Pt,"class","w-full flex-col flex items-start font-bold"),t(ir,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(cs,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(gs,"class","flex-1 flex-col flex items-start gap-2"),t(Xt,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(hs,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(Er.src,Ir="/assets/LI.png")||t(Er,"src",Ir),t(lt,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(ds.src,us="/assets/new/Vector-14.svg")||t(ds,"src",us),t(ds,"alt","Vector"),t(ds,"class","h-[100px] w-[100px]"),t(Ss,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Ts,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(ss,"class","w-full flex-col flex items-start font-bold"),t(Cr,"class","flex-1 flex-col flex items-start gap-2"),t(or,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(rs,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(ms.src,js="/assets/LI.png")||t(ms,"src",js),t(ws,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(Yt,"class","w-full flex items-start gap-5"),S(cr.src,dr="/assets/new/Vector-15.svg")||t(cr,"src",dr),t(cr,"alt","Vector"),t(cr,"class","h-[100px] w-[100px]"),t(xs,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(ea,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(_s,"class","w-full flex-col flex items-start font-bold"),t(jr,"class","flex-1 flex-col flex items-start gap-2"),t(tr,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Nr,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(cl.src,fo="/assets/LI.png")||t(cl,"src",fo),t($t,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(Wa.src,Zt="/assets/new/Vector-16.svg")||t(Wa,"src",Zt),t(Wa,"alt","Vector"),t(Wa,"class","h-[100px] w-[100px]"),t(Ns,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Tn,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(pr,"class","w-full flex-col flex items-start font-bold"),t(Vr,"class","flex-1 flex-col flex items-start gap-2"),t(Br,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(ps,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(bs.src,sa="/assets/LI.png")||t(bs,"src",sa),t(As,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(Pr,"class","w-full flex items-start gap-5"),t(pe,"class","w-full h-[1550px] flex-col flex items-center gap-5"),t(vr,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(Rr.src,za="/assets/new/Vector-17.svg")||t(Rr,"src",za),t(Rr,"alt","Vector"),t(Rr,"class","h-[100px] w-[100px]"),t(Fs,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Fn,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Ws,"class","w-full flex-col flex items-start font-bold"),t(Ls,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Ln,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(nr,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Ys,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Is,"class","w-full flex items-start gap-1.5 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(hr,"class","flex-1 flex-col flex items-start gap-2"),t(Bs,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(na,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(vo.src,_i="/assets/LI.png")||t(vo,"src",_i),t(Os,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(Gn.src,Xa="/assets/new/Vector-18.svg")||t(Gn,"src",Xa),t(Gn,"alt","Vector"),t(Gn,"class","h-[100px] w-[100px]"),t(br,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(la,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(wa,"class","w-full flex-col flex items-start font-bold"),t(Ii,"class","flex-1 flex-col flex items-start gap-2"),t(Cn,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Di,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(jn.src,lf="/assets/LI.png")||t(jn,"src",lf),t(ys,"class","bg-[#e7f5f5] flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(rr,"class","w-full flex items-start gap-5"),S(Cs.src,Ia="/assets/new/Vector-19.svg")||t(Cs,"src",Ia),t(Cs,"alt","Vector"),t(Cs,"class","h-[100px] w-[100px]"),t(Da,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Pi,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(tn,"class","w-full flex-col flex items-start font-bold"),t(Nn,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(ki,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(ia,"class","flex-1 flex-col flex items-start gap-2"),t(Ea,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(rn,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(xo.src,fl="/assets/LI.png")||t(xo,"src",fl),t(en,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(Si.src,eu="/assets/new/Vector-20.svg")||t(Si,"src",eu),t(Si,"alt","Vector"),t(Si,"class","h-[100px] w-[100px]"),t(Ti,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(ln,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(an,"class","w-full flex-col flex items-start font-bold"),t(Sr,"class","flex-1 flex-col flex items-start gap-2"),t(Va,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Ds,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(Sa.src,nc="/assets/LI.png")||t(Sa,"src",nc),t(Gs,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(Za,"class","w-full flex items-start gap-5"),t(Es,"class","w-full h-[1200px] flex-col flex items-center gap-5"),t(Ve,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(J,"class","w-full flex-col flex items-start gap-10"),t(zs,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ta,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Fi.src,tu="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Fi,"src",tu),t(Fi,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Fi,"class","h-6 w-6"),S(Wr.src,su="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Wr,"src",su),t(Wr,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Wr,"class","h-6 w-6"),S(Yr.src,on="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Yr,"src",on),t(Yr,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Yr,"class","h-6 w-6"),t(Ks,"class","flex items-center gap-5"),t(qs,"class","flex-1 flex justify-end items-center gap-10"),t(wr,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(u,"class","flex-col mw-[1060px] flex items-start gap-[50px]"),t(i,"class","bg-[#e4eaea] flex-col flex items-center gap-[50px] h-fit mt-20"),t(l,"class","w-full")},m(cn,hl){nt(cn,l,hl),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(u,m),e(u,h),e(h,I),e(h,V),e(h,y),e(y,D),e(D,E),e(E,F),e(D,k),e(D,A),e(y,M),e(y,b),e(b,C),e(C,_),e(C,q),e(C,O),e(O,L),e(C,j),e(C,Y),e(Y,R),e(R,U),e(U,ge),e(h,ue),e(h,K),e(K,H),e(H,re),e(re,Fe),e(H,he),e(H,ze),e(ze,we),e(we,ae),e(K,qe),e(K,Ee),e(Ee,de),e(de,Ue),e(de,Le),e(de,N),e(N,Q),e(N,_e),e(de,Ce),e(de,me),e(me,ie),e(ie,Z),e(Z,et),e(h,De),e(h,Se),e(Se,ne),e(ne,Re),e(Re,Te),e(ne,ee),e(ne,Ne),e(Se,$e),e(Se,Be),e(Be,Ge),e(Ge,xe),e(Ge,Ze),e(Ge,Qe),e(Qe,it),e(Ge,P),e(Ge,B),e(B,$),e($,z),e(z,X),e(u,oe),e(u,J),e(J,Ve),e(Ve,ke),e(ke,le),e(le,be),e(Ve,It),e(Ve,pe),e(pe,te),e(te,Ke),e(Ke,Me),e(Me,He),e(Me,Ye),e(Me,ft),e(ft,Ae),e(Ae,je),e(je,qt),e(Ae,Lt),e(Ae,Oe),e(Oe,yt),e(ft,Vt),e(ft,ce),e(ce,ct),e(ct,tt),e(tt,pt),e(ce,gt),e(ce,Ct),e(Ct,dt),e(dt,Rt),e(ce,Dt),e(ce,se),e(se,vt),e(vt,kt),e(Ke,Gt),e(Ke,ut),e(ut,ht),e(Ke,Mt),e(Ke,St),e(te,Tt),e(te,Xe),e(Xe,wt),e(wt,st),e(wt,Qt),e(wt,mt),e(mt,ve),e(ve,rt),e(rt,Nt),e(ve,_t),e(ve,at),e(at,ot),e(mt,Ht),e(mt,xt),e(xt,Et),e(Et,Jt),e(Jt,Ut),e(Xe,At),e(Xe,zt),e(zt,Ot),e(Xe,Bt),e(Xe,bt),e(pe,as),e(pe,Yt),e(Yt,lt),e(lt,Xt),e(Xt,ns),e(Xt,W),e(Xt,gs),e(gs,Pt),e(Pt,os),e(os,es),e(Pt,ls),e(Pt,Zs),e(Zs,Fr),e(gs,ts),e(gs,cs),e(cs,ir),e(ir,Vs),e(Vs,$s),e(lt,Kt),e(lt,hs),e(hs,ks),e(lt,Lr),e(lt,Er),e(Yt,er),e(Yt,ws),e(ws,or),e(or,ds),e(or,Zr),e(or,Cr),e(Cr,ss),e(ss,Ss),e(Ss,kn),e(ss,Gr),e(ss,Ts),e(Ts,Sn),e(ws,Mr),e(ws,rs),e(rs,Dr),e(ws,Hs),e(ws,ms),e(pe,ba),e(pe,Pr),e(Pr,$t),e($t,tr),e(tr,cr),e(tr,ur),e(tr,jr),e(jr,_s),e(_s,xs),e(xs,ol),e(_s,pi),e(_s,ea),e(ea,is),e($t,vi),e($t,Nr),e(Nr,ta),e($t,gi),e($t,cl),e(Pr,fs),e(Pr,As),e(As,Br),e(Br,Wa),e(Br,fr),e(Br,Vr),e(Vr,pr),e(pr,Ns),e(Ns,qr),e(pr,ya),e(pr,Tn),e(Tn,dl),e(As,sr),e(As,ps),e(ps,$l),e(As,hi),e(As,bs),e(Ve,An),e(Ve,vr),e(vr,Ya),e(Ya,mi),e(Ve,gr),e(Ve,Es),e(Es,rr),e(rr,Os),e(Os,Bs),e(Bs,Rr),e(Bs,xi),e(Bs,hr),e(hr,Ws),e(Ws,Fs),e(Fs,Ur),e(Ws,On),e(Ws,Fn),e(Fn,Ka),e(hr,bi),e(hr,Is),e(Is,Ls),e(Ls,ra),e(ra,po),e(Is,yi),e(Is,Ln),e(Ln,ar),e(ar,mr),e(Is,kr),e(Is,nr),e(nr,ul),e(ul,$r),e(Is,aa),e(Is,Ys),e(Ys,Ja),e(Ja,Jc),e(Os,Xc),e(Os,na),e(na,wi),e(Os,Zd),e(Os,vo),e(rr,xr),e(rr,ys),e(ys,Cn),e(Cn,Gn),e(Cn,Ei),e(Cn,Ii),e(Ii,wa),e(wa,br),e(br,go),e(wa,Qc),e(wa,la),e(la,Mn),e(ys,Zc),e(ys,Di),e(Di,_a),e(ys,Qa),e(ys,jn),e(Es,ho),e(Es,Za),e(Za,en),e(en,Ea),e(Ea,Cs),e(Ea,mo),e(Ea,ia),e(ia,tn),e(tn,Da),e(Da,Pa),e(tn,Hl),e(tn,Pi),e(Pi,Vi),e(ia,Wl),e(ia,ki),e(ki,Nn),e(Nn,yr),e(yr,sn),e(en,Bn),e(en,rn),e(rn,ac),e(en,ed),e(en,xo),e(Za,oa),e(Za,Gs),e(Gs,Va),e(Va,Si),e(Va,lr),e(Va,Sr),e(Sr,an),e(an,Ti),e(Ti,Ai),e(an,nn),e(an,ln),e(ln,Yl),e(Gs,pl),e(Gs,Ds),e(Ds,ka),e(Gs,Oi),e(Gs,Sa),e(u,td),e(u,wr),e(wr,zs),e(zs,vl),e(wr,qn),e(wr,qs),e(qs,Ta),e(Ta,sd),e(qs,gl),e(qs,Ks),e(Ks,Fi),e(Ks,Hr),e(Ks,Wr),e(Ks,rd),e(Ks,Yr)},p:We,i:We,o:We,d(cn){cn&&a(l)}}}class x6 extends Pn{constructor(l){super(),Vn(this,l,null,m6,Ha,{})}}function b6(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,F,k,A,G,M,b,C,_,q,O,L,j,Y,R,U,ge,ue,K,H,re,Fe,he,ze,we,ae,fe=" ",qe,Ee,de,Ue,Le,N,Q,Ie,_e,Ce,me,ie,Z,et,De,Se,ne,Re,Te,ee,Ne,Pe,$e,Be,Ge,xe,Ze,Qe,it,P,B,$,z,X,oe,J,Ve,ke,le,be,It,pe,te,Ke,Me,He,ye,Ye,ft,Ae,je,qt,Lt,Oe,yt,Vt,ce,ct,tt,pt,gt,Ct,dt,Rt,Dt,se,vt,kt,Gt,ut,ht,Mt,St,Je,Tt,Xe,wt,st,jt,Qt,mt,ve,rt,Nt,_t,at,ot,Ht,xt,Et,Jt,Ut,At,zt,Ot,Bt,bt,Ms,as,Yt,lt,Xt,ns,vs,W,gs,Pt,os,es,ls,Zs,Fr,ts,cs,ir,Vs,$s,Kt,hs,ks,Lr,Er,Ir,er,ws,or,ds,us,Zr,Cr,ss,Ss,kn,Gr,Ts,Sn,Mr,rs,Dr,Hs,ms,js,ba,Pr,$t,tr,cr,dr,ur,jr,_s,xs,ol,pi,ea,is,vi,Nr,ta,gi,cl,fo,fs,As,Br,Wa,Zt,fr,Vr,pr,Ns,qr,ya,Tn,dl,sr,ps,$l,hi,bs,sa,An,vr,Ya,mi,gr,Es,rr,Os,Bs,Rr,za,xi,hr,Ws,Fs,Ur,On,Fn,Ka,bi,Is,Ls,ra,po,yi,Ln,ar,mr,kr,nr,ul,$r,aa,Ys,Ja,Jc,Xc,na,wi=" ",Zd,vo,_i,xr,ys,Cn,Gn,Xa,Ei,Ii,wa,br,go,Qc,la,Mn,Zc,Di,_a,Qa,jn,lf,ho,Za,en,Ea,Cs,Ia,mo,ia,tn,Da,Pa,Hl,Pi,Vi,Wl,ki,Nn,yr,sn,Bn,rn,ac,ed,xo,fl,oa,Gs,Va,Si,eu,lr,Sr,an,Ti,Ai,nn,ln,Yl,pl,Ds,ka,Oi,Sa,nc,td,wr,zs,vl,qn,qs,Ta,sd,gl,Ks,Fi,tu,Hr,Wr,su,rd,Yr,on,cn,hl,bo,zl,ru,ca,Js,ml,Rn,Li,Ci,da,Un,of,au,yo,Xs,dn,cf,nu,lc,$n,un,ic,lu,Gi,Aa,Hn,xl,wo,df,Wn,bl,_o,Eo,Oa,Yn,fn,iu,oc,yl,cc,wl,Kl,zn,Fa,Io,Mi,pn,_l,La,El,ou,Jl,Kn,cu,ji,Tr,vn,Ca,Ni,Xl,Bi,uf,Do,Ga,Ql,Po,Il,Jn,Qs,ua,Dl,ff,du,fa,qi,Vo,Zl,Ps,Ma,ko,Pl,ad,dc,zr,gn,uu,uc,Kr,hn,Ri,So,Vl,fc,pc,ei,kl,ja,vc,fu,Xn,pa,mn,nd,Ui,gc,Sl,Tl,ti,pu,si,Jr,va,Al,pf,ri,To,Ol,xn,Fl,Ao,hc,Qn,ga,Oo,ld,bn,Na,id,mc,yn,$i,ai,Xr,Zn,vf,Hi,ha,xc,bc,Fo,Ba,yc,wc,Lo,qa,ni,el,Co,Lg,Yv,tl,Ll,od,Cg,cd,vu,zv,_c,Go,_r,Mo,Gg,Kv,gf,gu,jo,No,Mg,Jv,hf,li,Ec,Wi,hu,Xv,Yi,Cl,mf,Qv,wn,Ra,zi,Ic,jg,dd,Bo,ud,fd,Ng,qo,Dc,Zv;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("div"),m=f("Green energy"),h=o(),I=s("div"),w=s("div"),V=s("div"),y=f("Power from waste"),D=o(),E=s("div"),F=f("Non-recycled waste is the ideal renewable energy source"),k=o(),A=s("div"),G=s("div"),M=s("div"),b=o(),C=s("div"),_=s("div"),q=s("div"),O=s("span"),L=f("Unlike solar and wind, it provides"),j=o(),Y=s("span"),R=f("continuous"),U=o(),ge=s("span"),ue=f("power 24/7"),K=o(),H=s("div"),re=s("div"),Fe=s("div"),he=s("div"),ze=o(),we=s("div"),ae=f("Using non-recycled waste"),qe=f(fe),Ee=o(),de=s("span"),Ue=f("prevents it from polluting"),Le=f(`
                our soil, water, and atmosphere in uncontrolled ways`),N=o(),Q=s("div"),Ie=s("div"),_e=s("div"),Ce=s("div"),me=s("div"),ie=s("div"),Z=f("Power from waste"),et=o(),De=s("div"),Se=f("Slurry covers for farms with livestock"),ne=o(),Re=s("div"),Te=s("div"),ee=s("div"),Ne=s("div"),Pe=s("div"),$e=f("How it works"),Be=o(),Ge=s("div"),xe=s("div"),Ze=f(`Covering slurry stores helps keep rain out while containing odorous gases like ammonia, which result from
                    microbial activity. Ammonia emissions from manure storage contribute 9% of the UK’s agricultural ammonia
                    emissions. By covering your slurry store, you can substantially reduce these emissions. Conventional slurry
                    store covers aren’t airtight like anaerobic digester covers, so gas escapes at a reduced rate compared to
                    open stores.
                    `),Qe=s("br"),it=o(),P=s("br"),B=f(`
                    Slurry store covers can be impermeable or permeable, fixed or floating. Impermeable covers prevent rainwater
                    from entering, reducing slurry volume and increasing storage capacity. In areas with moderate to high rainfall,
                    these covers can be cost-effective.
                    `),$=s("br"),z=o(),X=s("br"),oe=f(`
                    Captured fugitive emissions can be converted into biomethane to power onsite tractors or be sold to the transport
                    industry.`),J=o(),Ve=s("div"),ke=s("div"),le=s("div"),be=s("img"),pe=o(),te=s("div"),Ke=f("Pros"),Me=o(),He=s("div"),ye=s("ul"),Ye=s("li"),ft=f("Relatively low-cost and quick deployment."),Ae=o(),je=s("li"),qt=f("In some countries, like the UK, government grants may cover"),Lt=f(`
                      initial costs.
                      `),Oe=s("li"),yt=f("Effective in reducing emissions."),Vt=o(),ce=s("div"),ct=s("div"),tt=s("img"),gt=o(),Ct=s("div"),dt=f("Cons"),Rt=o(),Dt=s("div"),se=s("ul"),vt=s("li"),kt=f("Covers are not airtight, so some methane may still escape."),Gt=o(),ut=s("li"),ht=f("If biogas cannot be used on site, finding an off-taker is necessary."),Mt=f(`
                      
                       `),St=o(),Je=s("div"),Tt=s("div"),Xe=s("div"),wt=s("div"),st=s("div"),jt=f("Power from waste"),Qt=o(),mt=s("div"),ve=f("Anaerobic digestion"),rt=o(),Nt=s("div"),_t=s("div"),at=s("div"),ot=s("div"),Ht=s("div"),xt=f("How it works"),Et=o(),Jt=s("div"),Ut=s("div"),At=f(`Anaerobic digestion (AD) is a process where microorganisms break down biodegradable material without oxygen.
                    This produces biogas, which can be used for electricity, heat, renewable natural gas, or transportation
                    fuels. Various AD technologies convert diverse organic waste streams into biogas continuously.
                    `),zt=s("br"),Ot=o(),Bt=s("br"),bt=f(`
                    Digested solids can be composted, used for bedding, applied to cropland, or made into other products. Nutrients
                    in the liquid stream serve as agricultural fertilizers. AD is applicable across the human food supply chain,
                    from farm animal waste to restaurant food waste. The scale can range from thousands of tonnes per annum to just
                    a few kilograms per day.`),Ms=o(),as=s("div"),Yt=s("div"),lt=s("div"),Xt=s("img"),vs=o(),W=s("div"),gs=f("Pros"),Pt=o(),os=s("div"),es=s("ul"),ls=s("li"),Zs=f("Suitable for most parts of the human food supply chain, significantly reducing environmental impact."),Fr=o(),ts=s("li"),cs=f("Smaller units for food waste are relatively affordable and usually don’t require planning consent."),ir=f(`
                       `),Vs=s("br"),$s=f(" "),Kt=o(),hs=s("div"),ks=s("div"),Lr=s("img"),Ir=o(),er=s("div"),ws=f("Cons"),or=o(),ds=s("div"),us=s("ul"),Zr=s("li"),Cr=f(`Larger units for sizable operations can be expensive, take 12-18 months from feasibility to operation,
                        and may face local objections due to odor.`),ss=o(),Ss=s("li"),kn=f("Bigger units require planning consent, necessitating expert support."),Gr=o(),Ts=s("li"),Sn=f("We have partners who can help with this process."),Mr=o(),rs=s("div"),Dr=s("div"),Hs=s("div"),ms=s("div"),js=s("div"),ba=f("Power from waste"),Pr=o(),$t=s("div"),tr=f("Pyrolysis"),cr=o(),dr=s("div"),ur=s("div"),jr=s("div"),_s=s("div"),xs=s("div"),ol=f("How it works"),pi=o(),ea=s("div"),is=s("div"),vi=f(`Pyrolysis is a thermochemical process applied to any organic material, involving chemical and physical
                    separation into different molecules at high temperatures and without oxygen. Unlike combustion and
                    gasification, which involve oxidation, pyrolysis is an endothermic process resulting in high-energy
                    products. `),Nr=s("br"),ta=o(),gi=s("br"),cl=f(`
                    Pyrolysis products include solid (charcoal, biochar), liquid, and non-condensable gases (H2, CH4, CnHm, CO, CO2,
                    and N). In some applications, liquid and gas phases can be used together when supplying hot syngas directly to
                    a burner or oxidation chamber.
                    `),fo=s("br"),fs=o(),As=s("br"),Br=f(`
                    During pyrolysis, materials are heated to a specific temperature inside a pyrolysis unit until the process is
                    complete. The chosen temperature influences the composition and yields of pyrolysis oil, syngas, and char.`),Wa=o(),Zt=s("div"),fr=s("div"),Vr=s("div"),pr=s("img"),qr=o(),ya=s("div"),Tn=f("Pros"),dl=o(),sr=s("div"),ps=s("ul"),$l=s("li"),hi=f("Versatile application across multiple industries: agriculture, energy, and transportation."),bs=o(),sa=s("li"),An=f("Carbon sequestration through biochar production, aiding in climate change mitigation."),vr=o(),Ya=s("li"),mi=f("Eco-friendly approach to managing organic waste, reducing landfill usage."),gr=o(),Es=s("div"),rr=s("div"),Os=s("img"),Rr=o(),za=s("div"),xi=f("Cons"),hr=o(),Ws=s("div"),Fs=s("ul"),Ur=s("li"),On=f("High initial investment, especially for larger operations."),Fn=o(),Ka=s("li"),bi=f("Demand for technical expertise and skilled personnel."),Is=o(),Ls=s("li"),ra=f("Emission monitoring and management required to minimize environmental impacts."),po=f(`
                       `),yi=s("br"),Ln=f(" "),ar=o(),mr=s("div"),kr=s("div"),nr=s("div"),ul=f("We see waste as a fuel opportunity "),$r=s("br"),aa=f(`
            – and it’s already yours!`),Ys=o(),Ja=s("div"),Jc=f(`Use our online tools to explore over 150 technology partners
            `),Xc=s("br"),na=f(`
            solutions and start your power-from-waste project`),Zd=f(wi),vo=o(),_i=s("div"),xr=s("div"),ys=s("div"),Cn=s("div"),Gn=s("div"),Xa=s("img"),Ii=o(),wa=s("div"),br=s("div"),go=s("div"),Qc=f("Exploration station"),la=o(),Mn=s("div"),Zc=f("Discover if your waste type is suitable for a project or learn more about power-from-waste"),Di=o(),_a=s("a"),Qa=s("div"),jn=s("img"),ho=o(),Za=s("div"),en=f("Explore the possibilities"),Ea=o(),Cs=s("div"),Ia=s("img"),ia=o(),tn=s("div"),Da=s("div"),Pa=s("div"),Hl=f("Calculator tool"),Pi=o(),Vi=s("div"),Wl=f("Discover if your waste type is suitable for a project or learn more about power-from-waste"),ki=o(),Nn=s("a"),yr=s("div"),sn=s("img"),rn=o(),ac=s("div"),ed=f("Calculate now"),xo=o(),fl=s("div"),oa=s("div"),Gs=s("div"),Va=s("img"),eu=o(),lr=s("div"),Sr=s("div"),an=f("Concerned about costs?"),Ti=o(),Ai=s("div"),nn=f(`Even our larger projects have payback periods under five years, with some as low as two. After that, you
                    only cover the annual facility maintenance cost, with no grid or standing charges.`),ln=o(),Yl=s("div"),pl=s("div"),Ds=s("div"),ka=s("div"),Oi=f("Other green energy sources"),Sa=o(),nc=s("div"),td=f("Different renewable energy sources can be combined to find the perfect solution for your project"),wr=o(),zs=s("div"),vl=s("div"),qn=s("div"),qs=s("div"),Ta=s("div"),sd=o(),gl=s("div"),Ks=s("div"),Fi=f("Solar power"),tu=o(),Hr=s("div"),Wr=s("div"),su=f(`Solar power converts the Sun’s photons into electricity through solar panels. It works in most locations and
                  has several benefits.`),rd=o(),Yr=s("button"),on=s("img"),hl=o(),bo=s("img"),ru=o(),ca=s("div"),Js=s("div"),ml=s("div"),Rn=s("div"),Li=s("img"),da=o(),Un=s("div"),of=f("Pros"),au=o(),yo=s("div"),Xs=s("ul"),dn=s("li"),cf=f("Often cheaper than fossil fuels by 2023"),nu=o(),lc=s("li"),$n=f("Environmentally friendly Low maintenance and long-lasting"),un=o(),ic=s("li"),lu=f("Emissions-free during use"),Gi=o(),Aa=s("div"),Hn=s("div"),xl=s("img"),df=o(),Wn=s("div"),bl=f("Cons"),_o=o(),Eo=s("div"),Oa=s("ul"),Yn=s("li"),fn=f("High initial costs"),iu=o(),oc=s("li"),yl=f("Intermittent power supply, requiring grid connection or battery storage"),cc=o(),wl=s("li"),Kl=f("Environmental impacts during production and disposal"),zn=o(),Fa=s("li"),Io=f("Potential local resistance to solar farm installations near habitation"),Mi=o(),pn=s("div"),_l=s("div"),La=s("div"),El=s("div"),ou=o(),Jl=s("div"),Kn=s("div"),cu=f("Wind power"),ji=o(),Tr=s("div"),vn=s("div"),Ca=f("Wind power, also called “Eolic” energy, generates electricity using wind turbines."),Ni=o(),Xl=s("button"),Bi=s("img"),Do=o(),Ga=s("img"),Po=o(),Il=s("div"),Jn=s("div"),Qs=s("div"),ua=s("div"),Dl=s("img"),du=o(),fa=s("div"),qi=f("Pros"),Vo=o(),Zl=s("div"),Ps=s("ul"),Ma=s("li"),ko=f("Often cheaper than fossil fuels by 2023"),Pl=o(),ad=s("li"),dc=f("Environmentally friendly Low maintenance and long-lasting"),zr=o(),gn=s("li"),uu=f("Emissions-free during use"),uc=o(),Kr=s("div"),hn=s("div"),Ri=s("img"),Vl=o(),fc=s("div"),pc=f("Cons"),ei=o(),kl=s("div"),ja=s("ul"),vc=s("li"),fu=f("High initial costs"),Xn=o(),pa=s("li"),mn=f("Intermittent power supply, requiring grid connection or battery storage"),nd=o(),Ui=s("li"),gc=f("Environmental impacts during production and disposal"),Sl=o(),Tl=s("li"),ti=f("Potential local resistance to solar farm installations near habitation"),pu=o(),si=s("div"),Jr=s("div"),va=s("div"),Al=s("div"),pf=o(),ri=s("div"),To=s("div"),Ol=f("Energy storage"),xn=o(),Fl=s("div"),Ao=s("div"),hc=f("Energy storage is a crucial technology that allows us to store excess energy for future use."),Qn=o(),ga=s("button"),Oo=s("img"),bn=o(),Na=s("img"),mc=o(),yn=s("div"),$i=s("div"),ai=s("div"),Xr=s("div"),Zn=s("img"),Hi=o(),ha=s("div"),xc=f("Pros"),bc=o(),Fo=s("div"),Ba=s("ul"),yc=s("li"),wc=f("Often cheaper than fossil fuels by 2023"),Lo=o(),qa=s("li"),ni=f("Environmentally friendly Low maintenance and long-lasting"),el=o(),Co=s("li"),Lg=f("Emissions-free during use"),Yv=o(),tl=s("div"),Ll=s("div"),od=s("img"),cd=o(),vu=s("div"),zv=f("Cons"),_c=o(),Go=s("div"),_r=s("ul"),Mo=s("li"),Gg=f("High initial costs"),Kv=o(),gf=s("li"),gu=f("Intermittent power supply, requiring grid connection or battery storage"),jo=o(),No=s("li"),Mg=f("Environmental impacts during production and disposal"),Jv=o(),hf=s("li"),li=f("Potential local resistance to solar farm installations near habitation"),Ec=o(),Wi=s("div"),hu=s("div"),Xv=f("Copyright © 2023 Power for Planet"),Yi=o(),Cl=s("div"),mf=s("div"),Qv=f("Privacy Policy"),wn=o(),Ra=s("div"),zi=s("img"),jg=o(),dd=s("img"),ud=o(),fd=s("img"),qo=o(),Dc=s("script"),Zv=f(`function toggleElement(k) {
      var element = document.querySelector('#' + k)

      element.classList.toggle('-translate-y-full')
      element.classList.toggle('opacity-0')
      setTimeout(() => {
        element.classList.toggle('h-[250px]')
        document.querySelector('#' + k + 'a').classList.toggle('hidden')
        document.querySelector('#' + k + 'b').classList.toggle('hidden')
        document.querySelector('#' + k + 'box').classList.toggle('rounded-b-[20px]')
        document.querySelector('#' + k + 'img').classList.toggle('rounded-bl-[20px]')
      }, 50)
    }`),this.h()},l(xf){l=r(xf,"DIV",{class:!0});var Gl=n(l);i=r(Gl,"DIV",{class:!0});var bf=n(i);u=r(bf,"DIV",{class:!0});var mu=n(u);v=r(mu,"DIV",{class:!0});var pd=n(v);g=r(pd,"DIV",{class:!0});var yf=n(g);x=r(yf,"DIV",{});var Bg=n(x);m=p(Bg,"Green energy"),Bg.forEach(a),yf.forEach(a),pd.forEach(a),h=c(mu),I=r(mu,"DIV",{class:!0});var ev=n(I);w=r(ev,"DIV",{class:!0});var qg=n(w);V=r(qg,"DIV",{class:!0});var vd=n(V);y=p(vd,"Power from waste"),vd.forEach(a),qg.forEach(a),D=c(ev),E=r(ev,"DIV",{class:!0});var Pc=n(E);F=p(Pc,"Non-recycled waste is the ideal renewable energy source"),Pc.forEach(a),ev.forEach(a),k=c(mu),A=r(mu,"DIV",{class:!0});var Vc=n(A);G=r(Vc,"DIV",{class:!0});var eg=n(G);M=r(eg,"DIV",{class:!0}),n(M).forEach(a),b=c(eg),C=r(eg,"DIV",{class:!0});var Rg=n(C);_=r(Rg,"DIV",{class:!0});var Ug=n(_);q=r(Ug,"DIV",{class:!0});var Ml=n(q);O=r(Ml,"SPAN",{class:!0});var xu=n(O);L=p(xu,"Unlike solar and wind, it provides"),xu.forEach(a),j=c(Ml),Y=r(Ml,"SPAN",{class:!0});var Pm=n(Y);R=p(Pm,"continuous"),Pm.forEach(a),U=c(Ml),ge=r(Ml,"SPAN",{class:!0});var $g=n(ge);ue=p($g,"power 24/7"),$g.forEach(a),Ml.forEach(a),Ug.forEach(a),Rg.forEach(a),eg.forEach(a),K=c(Vc),H=r(Vc,"DIV",{class:!0});var Hg=n(H);re=r(Hg,"DIV",{class:!0});var gd=n(re);Fe=r(gd,"DIV",{class:!0});var Ki=n(Fe);he=r(Ki,"DIV",{class:!0}),n(he).forEach(a),ze=c(Ki),we=r(Ki,"DIV",{class:!0});var Ji=n(we);ae=p(Ji,"Using non-recycled waste"),qe=p(Ji,fe),Ee=c(Ji),de=r(Ji,"SPAN",{class:!0});var Vm=n(de);Ue=p(Vm,"prevents it from polluting"),Vm.forEach(a),Le=p(Ji,`
                our soil, water, and atmosphere in uncontrolled ways`),Ji.forEach(a),Ki.forEach(a),gd.forEach(a),Hg.forEach(a),Vc.forEach(a),mu.forEach(a),N=c(bf),Q=r(bf,"DIV",{class:!0});var kc=n(Q);Ie=r(kc,"DIV",{class:!0});var tv=n(Ie);_e=r(tv,"DIV",{class:!0});var Sc=n(_e);Ce=r(Sc,"DIV",{class:!0});var Tc=n(Ce);me=r(Tc,"DIV",{class:!0});var km=n(me);ie=r(km,"DIV",{class:!0});var Wg=n(ie);Z=p(Wg,"Power from waste"),Wg.forEach(a),km.forEach(a),et=c(Tc),De=r(Tc,"DIV",{class:!0});var Yg=n(De);Se=p(Yg,"Slurry covers for farms with livestock"),Yg.forEach(a),Tc.forEach(a),Sc.forEach(a),ne=c(tv),Re=r(tv,"DIV",{class:!0});var Ro=n(Re);Te=r(Ro,"DIV",{class:!0});var bu=n(Te);ee=r(bu,"DIV",{class:!0});var tg=n(ee);Ne=r(tg,"DIV",{class:!0});var sv=n(Ne);Pe=r(sv,"DIV",{class:!0});var yu=n(Pe);$e=p(yu,"How it works"),yu.forEach(a),Be=c(sv),Ge=r(sv,"DIV",{class:!0});var wu=n(Ge);xe=r(wu,"DIV",{class:!0});var Xi=n(xe);Ze=p(Xi,`Covering slurry stores helps keep rain out while containing odorous gases like ammonia, which result from
                    microbial activity. Ammonia emissions from manure storage contribute 9% of the UK’s agricultural ammonia
                    emissions. By covering your slurry store, you can substantially reduce these emissions. Conventional slurry
                    store covers aren’t airtight like anaerobic digester covers, so gas escapes at a reduced rate compared to
                    open stores.
                    `),Qe=r(Xi,"BR",{}),it=c(Xi),P=r(Xi,"BR",{}),B=p(Xi,`
                    Slurry store covers can be impermeable or permeable, fixed or floating. Impermeable covers prevent rainwater
                    from entering, reducing slurry volume and increasing storage capacity. In areas with moderate to high rainfall,
                    these covers can be cost-effective.
                    `),$=r(Xi,"BR",{}),z=c(Xi),X=r(Xi,"BR",{}),oe=p(Xi,`
                    Captured fugitive emissions can be converted into biomethane to power onsite tractors or be sold to the transport
                    industry.`),Xi.forEach(a),wu.forEach(a),sv.forEach(a),J=c(tg),Ve=r(tg,"DIV",{class:!0});var rv=n(Ve);ke=r(rv,"DIV",{class:!0});var Ac=n(ke);le=r(Ac,"DIV",{class:!0});var sg=n(le);be=r(sg,"IMG",{src:!0,alt:!0,class:!0}),pe=c(sg),te=r(sg,"DIV",{class:!0});var zg=n(te);Ke=p(zg,"Pros"),zg.forEach(a),sg.forEach(a),Me=c(Ac),He=r(Ac,"DIV",{class:!0});var Oc=n(He);ye=r(Oc,"UL",{class:!0});var Uo=n(ye);Ye=r(Uo,"LI",{});var Kg=n(Ye);ft=p(Kg,"Relatively low-cost and quick deployment."),Kg.forEach(a),Ae=c(Uo),je=r(Uo,"LI",{});var Jg=n(je);qt=p(Jg,"In some countries, like the UK, government grants may cover"),Jg.forEach(a),Lt=p(Uo,`
                      initial costs.
                      `),Oe=r(Uo,"LI",{});var hd=n(Oe);yt=p(hd,"Effective in reducing emissions."),hd.forEach(a),Uo.forEach(a),Oc.forEach(a),Ac.forEach(a),Vt=c(rv),ce=r(rv,"DIV",{class:!0});var _u=n(ce);ct=r(_u,"DIV",{class:!0});var av=n(ct);tt=r(av,"IMG",{src:!0,alt:!0,class:!0}),gt=c(av),Ct=r(av,"DIV",{class:!0});var Xg=n(Ct);dt=p(Xg,"Cons"),Xg.forEach(a),av.forEach(a),Rt=c(_u),Dt=r(_u,"DIV",{class:!0});var nv=n(Dt);se=r(nv,"UL",{class:!0});var wf=n(se);vt=r(wf,"LI",{});var Qg=n(vt);kt=p(Qg,"Covers are not airtight, so some methane may still escape."),Qg.forEach(a),Gt=c(wf),ut=r(wf,"LI",{});var _f=n(ut);ht=p(_f,"If biogas cannot be used on site, finding an off-taker is necessary."),_f.forEach(a),Mt=p(wf,`
                      
                       `),wf.forEach(a),nv.forEach(a),_u.forEach(a),rv.forEach(a),tg.forEach(a),bu.forEach(a),Ro.forEach(a),tv.forEach(a),St=c(kc),Je=r(kc,"DIV",{class:!0});var $o=n(Je);Tt=r($o,"DIV",{class:!0});var md=n(Tt);Xe=r(md,"DIV",{class:!0});var xd=n(Xe);wt=r(xd,"DIV",{class:!0});var Eu=n(wt);st=r(Eu,"DIV",{class:!0});var Sm=n(st);jt=p(Sm,"Power from waste"),Sm.forEach(a),Eu.forEach(a),Qt=c(xd),mt=r(xd,"DIV",{class:!0});var Zg=n(mt);ve=p(Zg,"Anaerobic digestion"),Zg.forEach(a),xd.forEach(a),md.forEach(a),rt=c($o),Nt=r($o,"DIV",{class:!0});var bd=n(Nt);_t=r(bd,"DIV",{class:!0});var Iu=n(_t);at=r(Iu,"DIV",{class:!0});var lv=n(at);ot=r(lv,"DIV",{class:!0});var iv=n(ot);Ht=r(iv,"DIV",{class:!0});var Du=n(Ht);xt=p(Du,"How it works"),Du.forEach(a),Et=c(iv),Jt=r(iv,"DIV",{class:!0});var eh=n(Jt);Ut=r(eh,"DIV",{class:!0});var Pu=n(Ut);At=p(Pu,`Anaerobic digestion (AD) is a process where microorganisms break down biodegradable material without oxygen.
                    This produces biogas, which can be used for electricity, heat, renewable natural gas, or transportation
                    fuels. Various AD technologies convert diverse organic waste streams into biogas continuously.
                    `),zt=r(Pu,"BR",{}),Ot=c(Pu),Bt=r(Pu,"BR",{}),bt=p(Pu,`
                    Digested solids can be composted, used for bedding, applied to cropland, or made into other products. Nutrients
                    in the liquid stream serve as agricultural fertilizers. AD is applicable across the human food supply chain,
                    from farm animal waste to restaurant food waste. The scale can range from thousands of tonnes per annum to just
                    a few kilograms per day.`),Pu.forEach(a),eh.forEach(a),iv.forEach(a),Ms=c(lv),as=r(lv,"DIV",{class:!0});var Ho=n(as);Yt=r(Ho,"DIV",{class:!0});var yd=n(Yt);lt=r(yd,"DIV",{class:!0});var ii=n(lt);Xt=r(ii,"IMG",{src:!0,alt:!0,class:!0}),vs=c(ii),W=r(ii,"DIV",{class:!0});var Vu=n(W);gs=p(Vu,"Pros"),Vu.forEach(a),ii.forEach(a),Pt=c(yd),os=r(yd,"DIV",{class:!0});var Tm=n(os);es=r(Tm,"UL",{class:!0});var wd=n(es);ls=r(wd,"LI",{});var th=n(ls);Zs=p(th,"Suitable for most parts of the human food supply chain, significantly reducing environmental impact."),th.forEach(a),Fr=c(wd),ts=r(wd,"LI",{});var Ef=n(ts);cs=p(Ef,"Smaller units for food waste are relatively affordable and usually don’t require planning consent."),Ef.forEach(a),ir=p(wd,`
                       `),Vs=r(wd,"BR",{}),$s=p(wd," "),wd.forEach(a),Tm.forEach(a),yd.forEach(a),Kt=c(Ho),hs=r(Ho,"DIV",{class:!0});var Qi=n(hs);ks=r(Qi,"DIV",{class:!0});var Fc=n(ks);Lr=r(Fc,"IMG",{src:!0,alt:!0,class:!0}),Ir=c(Fc),er=r(Fc,"DIV",{class:!0});var Am=n(er);ws=p(Am,"Cons"),Am.forEach(a),Fc.forEach(a),or=c(Qi),ds=r(Qi,"DIV",{class:!0});var sh=n(ds);us=r(sh,"UL",{class:!0});var ku=n(us);Zr=r(ku,"LI",{});var jl=n(Zr);Cr=p(jl,`Larger units for sizable operations can be expensive, take 12-18 months from feasibility to operation,
                        and may face local objections due to odor.`),jl.forEach(a),ss=c(ku),Ss=r(ku,"LI",{});var rh=n(Ss);kn=p(rh,"Bigger units require planning consent, necessitating expert support."),rh.forEach(a),Gr=c(ku),Ts=r(ku,"LI",{});var If=n(Ts);Sn=p(If,"We have partners who can help with this process."),If.forEach(a),ku.forEach(a),sh.forEach(a),Qi.forEach(a),Ho.forEach(a),lv.forEach(a),Iu.forEach(a),bd.forEach(a),$o.forEach(a),Mr=c(kc),rs=r(kc,"DIV",{class:!0});var oi=n(rs);Dr=r(oi,"DIV",{class:!0});var Lc=n(Dr);Hs=r(Lc,"DIV",{class:!0});var Ar=n(Hs);ms=r(Ar,"DIV",{class:!0});var Zi=n(ms);js=r(Zi,"DIV",{class:!0});var Su=n(js);ba=p(Su,"Power from waste"),Su.forEach(a),Zi.forEach(a),Pr=c(Ar),$t=r(Ar,"DIV",{class:!0});var Om=n($t);tr=p(Om,"Pyrolysis"),Om.forEach(a),Ar.forEach(a),Lc.forEach(a),cr=c(oi),dr=r(oi,"DIV",{class:!0});var ah=n(dr);ur=r(ah,"DIV",{class:!0});var eo=n(ur);jr=r(eo,"DIV",{class:!0});var Cc=n(jr);_s=r(Cc,"DIV",{class:!0});var rg=n(_s);xs=r(rg,"DIV",{class:!0});var nh=n(xs);ol=p(nh,"How it works"),nh.forEach(a),pi=c(rg),ea=r(rg,"DIV",{class:!0});var to=n(ea);is=r(to,"DIV",{class:!0});var _n=n(is);vi=p(_n,`Pyrolysis is a thermochemical process applied to any organic material, involving chemical and physical
                    separation into different molecules at high temperatures and without oxygen. Unlike combustion and
                    gasification, which involve oxidation, pyrolysis is an endothermic process resulting in high-energy
                    products. `),Nr=r(_n,"BR",{}),ta=c(_n),gi=r(_n,"BR",{}),cl=p(_n,`
                    Pyrolysis products include solid (charcoal, biochar), liquid, and non-condensable gases (H2, CH4, CnHm, CO, CO2,
                    and N). In some applications, liquid and gas phases can be used together when supplying hot syngas directly to
                    a burner or oxidation chamber.
                    `),fo=r(_n,"BR",{}),fs=c(_n),As=r(_n,"BR",{}),Br=p(_n,`
                    During pyrolysis, materials are heated to a specific temperature inside a pyrolysis unit until the process is
                    complete. The chosen temperature influences the composition and yields of pyrolysis oil, syngas, and char.`),_n.forEach(a),to.forEach(a),rg.forEach(a),Wa=c(Cc),Zt=r(Cc,"DIV",{class:!0});var ag=n(Zt);fr=r(ag,"DIV",{class:!0});var ov=n(fr);Vr=r(ov,"DIV",{class:!0});var sl=n(Vr);pr=r(sl,"IMG",{src:!0,alt:!0,class:!0}),qr=c(sl),ya=r(sl,"DIV",{class:!0});var _d=n(ya);Tn=p(_d,"Pros"),_d.forEach(a),sl.forEach(a),dl=c(ov),sr=r(ov,"DIV",{class:!0});var lh=n(sr);ps=r(lh,"UL",{class:!0});var Tu=n(ps);$l=r(Tu,"LI",{});var cv=n($l);hi=p(cv,"Versatile application across multiple industries: agriculture, energy, and transportation."),cv.forEach(a),bs=c(Tu),sa=r(Tu,"LI",{});var ih=n(sa);An=p(ih,"Carbon sequestration through biochar production, aiding in climate change mitigation."),ih.forEach(a),vr=c(Tu),Ya=r(Tu,"LI",{});var oh=n(Ya);mi=p(oh,"Eco-friendly approach to managing organic waste, reducing landfill usage."),oh.forEach(a),Tu.forEach(a),lh.forEach(a),ov.forEach(a),gr=c(ag),Es=r(ag,"DIV",{class:!0});var Au=n(Es);rr=r(Au,"DIV",{class:!0});var dv=n(rr);Os=r(dv,"IMG",{src:!0,alt:!0,class:!0}),Rr=c(dv),za=r(dv,"DIV",{class:!0});var ch=n(za);xi=p(ch,"Cons"),ch.forEach(a),dv.forEach(a),hr=c(Au),Ws=r(Au,"DIV",{class:!0});var uv=n(Ws);Fs=r(uv,"UL",{class:!0});var Wo=n(Fs);Ur=r(Wo,"LI",{});var dh=n(Ur);On=p(dh,"High initial investment, especially for larger operations."),dh.forEach(a),Fn=c(Wo),Ka=r(Wo,"LI",{});var Nl=n(Ka);bi=p(Nl,"Demand for technical expertise and skilled personnel."),Nl.forEach(a),Is=c(Wo),Ls=r(Wo,"LI",{});var Ed=n(Ls);ra=p(Ed,"Emission monitoring and management required to minimize environmental impacts."),Ed.forEach(a),po=p(Wo,`
                       `),yi=r(Wo,"BR",{}),Ln=p(Wo," "),Wo.forEach(a),uv.forEach(a),Au.forEach(a),ag.forEach(a),Cc.forEach(a),eo.forEach(a),ah.forEach(a),oi.forEach(a),ar=c(kc),mr=r(kc,"DIV",{class:!0});var Id=n(mr);kr=r(Id,"DIV",{class:!0});var fv=n(kr);nr=r(fv,"DIV",{class:!0});var Gc=n(nr);ul=p(Gc,"We see waste as a fuel opportunity "),$r=r(Gc,"BR",{}),aa=p(Gc,`
            – and it’s already yours!`),Gc.forEach(a),Ys=c(fv),Ja=r(fv,"DIV",{class:!0});var Dd=n(Ja);Jc=p(Dd,`Use our online tools to explore over 150 technology partners
            `),Xc=r(Dd,"BR",{}),na=p(Dd,`
            solutions and start your power-from-waste project`),Zd=p(Dd,wi),Dd.forEach(a),fv.forEach(a),vo=c(Id),_i=r(Id,"DIV",{});var pv=n(_i);xr=r(pv,"DIV",{class:!0});var so=n(xr);ys=r(so,"DIV",{class:!0});var Bl=n(ys);Cn=r(Bl,"DIV",{});var Fm=n(Cn);Gn=r(Fm,"DIV",{});var uh=n(Gn);Xa=r(uh,"IMG",{src:!0,alt:!0,class:!0}),uh.forEach(a),Fm.forEach(a),Ii=c(Bl),wa=r(Bl,"DIV",{class:!0});var ro=n(wa);br=r(ro,"DIV",{class:!0});var Pd=n(br);go=r(Pd,"DIV",{class:!0});var Vd=n(go);Qc=p(Vd,"Exploration station"),Vd.forEach(a),la=c(Pd),Mn=r(Pd,"DIV",{class:!0});var Df=n(Mn);Zc=p(Df,"Discover if your waste type is suitable for a project or learn more about power-from-waste"),Df.forEach(a),Pd.forEach(a),ro.forEach(a),Di=c(Bl),_a=r(Bl,"A",{href:!0});var Ou=n(_a);Qa=r(Ou,"DIV",{class:!0});var ng=n(Qa);jn=r(ng,"IMG",{src:!0,alt:!0,class:!0}),ho=c(ng),Za=r(ng,"DIV",{});var fh=n(Za);en=p(fh,"Explore the possibilities"),fh.forEach(a),ng.forEach(a),Ou.forEach(a),Bl.forEach(a),Ea=c(so),Cs=r(so,"DIV",{class:!0});var Ua=n(Cs);Ia=r(Ua,"IMG",{class:!0,alt:!0,src:!0}),ia=c(Ua),tn=r(Ua,"DIV",{class:!0});var vv=n(tn);Da=r(vv,"DIV",{class:!0});var gv=n(Da);Pa=r(gv,"DIV",{class:!0});var ph=n(Pa);Hl=p(ph,"Calculator tool"),ph.forEach(a),Pi=c(gv),Vi=r(gv,"DIV",{class:!0});var Fu=n(Vi);Wl=p(Fu,"Discover if your waste type is suitable for a project or learn more about power-from-waste"),Fu.forEach(a),gv.forEach(a),vv.forEach(a),ki=c(Ua),Nn=r(Ua,"A",{href:!0});var vh=n(Nn);yr=r(vh,"DIV",{class:!0});var hv=n(yr);sn=r(hv,"IMG",{src:!0,alt:!0,class:!0}),rn=c(hv),ac=r(hv,"DIV",{});var Mc=n(ac);ed=p(Mc,"Calculate now"),Mc.forEach(a),hv.forEach(a),vh.forEach(a),Ua.forEach(a),so.forEach(a),xo=c(pv),fl=r(pv,"DIV",{class:!0});var gh=n(fl);oa=r(gh,"DIV",{class:!0});var hh=n(oa);Gs=r(hh,"DIV",{class:!0});var mv=n(Gs);Va=r(mv,"IMG",{src:!0,alt:!0,class:!0}),eu=c(mv),lr=r(mv,"DIV",{class:!0});var xv=n(lr);Sr=r(xv,"DIV",{class:!0});var Lu=n(Sr);an=p(Lu,"Concerned about costs?"),Lu.forEach(a),Ti=c(xv),Ai=r(xv,"DIV",{class:!0});var mh=n(Ai);nn=p(mh,`Even our larger projects have payback periods under five years, with some as low as two. After that, you
                    only cover the annual facility maintenance cost, with no grid or standing charges.`),mh.forEach(a),xv.forEach(a),mv.forEach(a),hh.forEach(a),gh.forEach(a),pv.forEach(a),Id.forEach(a),kc.forEach(a),ln=c(bf),Yl=r(bf,"DIV",{class:!0});var bv=n(Yl);pl=r(bv,"DIV",{class:!0});var En=n(pl);Ds=r(En,"DIV",{class:!0});var xh=n(Ds);ka=r(xh,"DIV",{class:!0});var ql=n(ka);Oi=p(ql,"Other green energy sources"),ql.forEach(a),xh.forEach(a),Sa=c(En),nc=r(En,"DIV",{class:!0});var bh=n(nc);td=p(bh,"Different renewable energy sources can be combined to find the perfect solution for your project"),bh.forEach(a),En.forEach(a),wr=c(bv),zs=r(bv,"DIV",{class:!0});var ao=n(zs);vl=r(ao,"DIV",{class:!0});var Yo=n(vl);qn=r(Yo,"DIV",{class:!0,id:!0});var no=n(qn);qs=r(no,"DIV",{class:!0,id:!0});var kd=n(qs);Ta=r(kd,"DIV",{class:!0}),n(Ta).forEach(a),kd.forEach(a),sd=c(no),gl=r(no,"DIV",{class:!0});var Sd=n(gl);Ks=r(Sd,"DIV",{class:!0});var yh=n(Ks);Fi=p(yh,"Solar power"),yh.forEach(a),tu=c(Sd),Hr=r(Sd,"DIV",{class:!0});var yv=n(Hr);Wr=r(yv,"DIV",{class:!0});var lo=n(Wr);su=p(lo,`Solar power converts the Sun’s photons into electricity through solar panels. It works in most locations and
                  has several benefits.`),lo.forEach(a),rd=c(yv),Yr=r(yv,"BUTTON",{onclick:!0,href:!0});var Td=n(Yr);on=r(Td,"IMG",{id:!0,src:!0}),hl=c(Td),bo=r(Td,"IMG",{id:!0,class:!0,src:!0}),Td.forEach(a),yv.forEach(a),Sd.forEach(a),no.forEach(a),ru=c(Yo),ca=r(Yo,"DIV",{id:!0,class:!0});var wh=n(ca);Js=r(wh,"DIV",{class:!0});var wv=n(Js);ml=r(wv,"DIV",{class:!0});var _v=n(ml);Rn=r(_v,"DIV",{class:!0});var Ev=n(Rn);Li=r(Ev,"IMG",{src:!0,alt:!0,class:!0}),da=c(Ev),Un=r(Ev,"DIV",{class:!0});var Pf=n(Un);of=p(Pf,"Pros"),Pf.forEach(a),Ev.forEach(a),au=c(_v),yo=r(_v,"DIV",{class:!0});var _h=n(yo);Xs=r(_h,"UL",{class:!0});var Cu=n(Xs);dn=r(Cu,"LI",{});var Eh=n(dn);cf=p(Eh,"Often cheaper than fossil fuels by 2023"),Eh.forEach(a),nu=c(Cu),lc=r(Cu,"LI",{});var Ad=n(lc);$n=p(Ad,"Environmentally friendly Low maintenance and long-lasting"),Ad.forEach(a),un=c(Cu),ic=r(Cu,"LI",{});var Vf=n(ic);lu=p(Vf,"Emissions-free during use"),Vf.forEach(a),Cu.forEach(a),_h.forEach(a),_v.forEach(a),Gi=c(wv),Aa=r(wv,"DIV",{class:!0});var zo=n(Aa);Hn=r(zo,"DIV",{class:!0});var lg=n(Hn);xl=r(lg,"IMG",{src:!0,alt:!0,class:!0}),df=c(lg),Wn=r(lg,"DIV",{class:!0});var Ih=n(Wn);bl=p(Ih,"Cons"),Ih.forEach(a),lg.forEach(a),_o=c(zo),Eo=r(zo,"DIV",{class:!0});var Od=n(Eo);Oa=r(Od,"UL",{class:!0});var ci=n(Oa);Yn=r(ci,"LI",{});var Dh=n(Yn);fn=p(Dh,"High initial costs"),Dh.forEach(a),iu=c(ci),oc=r(ci,"LI",{});var Ph=n(oc);yl=p(Ph,"Intermittent power supply, requiring grid connection or battery storage"),Ph.forEach(a),cc=c(ci),wl=r(ci,"LI",{});var Gu=n(wl);Kl=p(Gu,"Environmental impacts during production and disposal"),Gu.forEach(a),zn=c(ci),Fa=r(ci,"LI",{});var Vh=n(Fa);Io=p(Vh,"Potential local resistance to solar farm installations near habitation"),Vh.forEach(a),ci.forEach(a),Od.forEach(a),zo.forEach(a),wv.forEach(a),wh.forEach(a),Yo.forEach(a),Mi=c(ao),pn=r(ao,"DIV",{class:!0});var Iv=n(pn);_l=r(Iv,"DIV",{class:!0,id:!0});var Qr=n(_l);La=r(Qr,"DIV",{class:!0,id:!0});var Fd=n(La);El=r(Fd,"DIV",{class:!0}),n(El).forEach(a),Fd.forEach(a),ou=c(Qr),Jl=r(Qr,"DIV",{class:!0});var Ko=n(Jl);Kn=r(Ko,"DIV",{class:!0});var kh=n(Kn);cu=p(kh,"Wind power"),kh.forEach(a),ji=c(Ko),Tr=r(Ko,"DIV",{class:!0});var jc=n(Tr);vn=r(jc,"DIV",{class:!0});var Lm=n(vn);Ca=p(Lm,"Wind power, also called “Eolic” energy, generates electricity using wind turbines."),Lm.forEach(a),Ni=c(jc),Xl=r(jc,"BUTTON",{onclick:!0,href:!0});var Dv=n(Xl);Bi=r(Dv,"IMG",{id:!0,class:!0,src:!0}),Do=c(Dv),Ga=r(Dv,"IMG",{id:!0,src:!0}),Dv.forEach(a),jc.forEach(a),Ko.forEach(a),Qr.forEach(a),Po=c(Iv),Il=r(Iv,"DIV",{id:!0,class:!0});var Ld=n(Il);Jn=r(Ld,"DIV",{class:!0});var Cd=n(Jn);Qs=r(Cd,"DIV",{class:!0});var Pv=n(Qs);ua=r(Pv,"DIV",{class:!0});var Vv=n(ua);Dl=r(Vv,"IMG",{src:!0,alt:!0,class:!0}),du=c(Vv),fa=r(Vv,"DIV",{class:!0});var kf=n(fa);qi=p(kf,"Pros"),kf.forEach(a),Vv.forEach(a),Vo=c(Pv),Zl=r(Pv,"DIV",{class:!0});var Sh=n(Zl);Ps=r(Sh,"UL",{class:!0});var Mu=n(Ps);Ma=r(Mu,"LI",{});var Gd=n(Ma);ko=p(Gd,"Often cheaper than fossil fuels by 2023"),Gd.forEach(a),Pl=c(Mu),ad=r(Mu,"LI",{});var Md=n(ad);dc=p(Md,"Environmentally friendly Low maintenance and long-lasting"),Md.forEach(a),zr=c(Mu),gn=r(Mu,"LI",{});var Th=n(gn);uu=p(Th,"Emissions-free during use"),Th.forEach(a),Mu.forEach(a),Sh.forEach(a),Pv.forEach(a),uc=c(Cd),Kr=r(Cd,"DIV",{class:!0});var Nc=n(Kr);hn=r(Nc,"DIV",{class:!0});var ig=n(hn);Ri=r(ig,"IMG",{src:!0,alt:!0,class:!0}),Vl=c(ig),fc=r(ig,"DIV",{class:!0});var Ah=n(fc);pc=p(Ah,"Cons"),Ah.forEach(a),ig.forEach(a),ei=c(Nc),kl=r(Nc,"DIV",{class:!0});var ju=n(kl);ja=r(ju,"UL",{class:!0});var di=n(ja);vc=r(di,"LI",{});var Oh=n(vc);fu=p(Oh,"High initial costs"),Oh.forEach(a),Xn=c(di),pa=r(di,"LI",{});var Fh=n(pa);mn=p(Fh,"Intermittent power supply, requiring grid connection or battery storage"),Fh.forEach(a),nd=c(di),Ui=r(di,"LI",{});var Lh=n(Ui);gc=p(Lh,"Environmental impacts during production and disposal"),Lh.forEach(a),Sl=c(di),Tl=r(di,"LI",{});var jd=n(Tl);ti=p(jd,"Potential local resistance to solar farm installations near habitation"),jd.forEach(a),di.forEach(a),ju.forEach(a),Nc.forEach(a),Cd.forEach(a),Ld.forEach(a),Iv.forEach(a),pu=c(ao),si=r(ao,"DIV",{class:!0});var Jo=n(si);Jr=r(Jo,"DIV",{class:!0,id:!0});var kv=n(Jr);va=r(kv,"DIV",{class:!0,id:!0});var Nu=n(va);Al=r(Nu,"DIV",{class:!0}),n(Al).forEach(a),Nu.forEach(a),pf=c(kv),ri=r(kv,"DIV",{class:!0});var og=n(ri);To=r(og,"DIV",{class:!0});var Ch=n(To);Ol=p(Ch,"Energy storage"),Ch.forEach(a),xn=c(og),Fl=r(og,"DIV",{class:!0});var Xo=n(Fl);Ao=r(Xo,"DIV",{class:!0});var Gh=n(Ao);hc=p(Gh,"Energy storage is a crucial technology that allows us to store excess energy for future use."),Gh.forEach(a),Qn=c(Xo),ga=r(Xo,"BUTTON",{onclick:!0,href:!0});var Nd=n(ga);Oo=r(Nd,"IMG",{id:!0,src:!0,class:!0}),bn=c(Nd),Na=r(Nd,"IMG",{id:!0,src:!0}),Nd.forEach(a),Xo.forEach(a),og.forEach(a),kv.forEach(a),mc=c(Jo),yn=r(Jo,"DIV",{id:!0,class:!0});var Mh=n(yn);$i=r(Mh,"DIV",{class:!0});var Sv=n($i);ai=r(Sv,"DIV",{class:!0});var Tv=n(ai);Xr=r(Tv,"DIV",{class:!0});var Qo=n(Xr);Zn=r(Qo,"IMG",{src:!0,alt:!0,class:!0}),Hi=c(Qo),ha=r(Qo,"DIV",{class:!0});var Bd=n(ha);xc=p(Bd,"Pros"),Bd.forEach(a),Qo.forEach(a),bc=c(Tv),Fo=r(Tv,"DIV",{class:!0});var jh=n(Fo);Ba=r(jh,"UL",{class:!0});var io=n(Ba);yc=r(io,"LI",{});var Cm=n(yc);wc=p(Cm,"Often cheaper than fossil fuels by 2023"),Cm.forEach(a),Lo=c(io),qa=r(io,"LI",{});var Nh=n(qa);ni=p(Nh,"Environmentally friendly Low maintenance and long-lasting"),Nh.forEach(a),el=c(io),Co=r(io,"LI",{});var Bu=n(Co);Lg=p(Bu,"Emissions-free during use"),Bu.forEach(a),io.forEach(a),jh.forEach(a),Tv.forEach(a),Yv=c(Sv),tl=r(Sv,"DIV",{class:!0});var qd=n(tl);Ll=r(qd,"DIV",{class:!0});var Av=n(Ll);od=r(Av,"IMG",{src:!0,alt:!0,class:!0}),cd=c(Av),vu=r(Av,"DIV",{class:!0});var Bh=n(vu);zv=p(Bh,"Cons"),Bh.forEach(a),Av.forEach(a),_c=c(qd),Go=r(qd,"DIV",{class:!0});var qh=n(Go);_r=r(qh,"UL",{class:!0});var rl=n(_r);Mo=r(rl,"LI",{});var Rd=n(Mo);Gg=p(Rd,"High initial costs"),Rd.forEach(a),Kv=c(rl),gf=r(rl,"LI",{});var Rh=n(gf);gu=p(Rh,"Intermittent power supply, requiring grid connection or battery storage"),Rh.forEach(a),jo=c(rl),No=r(rl,"LI",{});var qu=n(No);Mg=p(qu,"Environmental impacts during production and disposal"),qu.forEach(a),Jv=c(rl),hf=r(rl,"LI",{});var Gm=n(hf);li=p(Gm,"Potential local resistance to solar farm installations near habitation"),Gm.forEach(a),rl.forEach(a),qh.forEach(a),qd.forEach(a),Sv.forEach(a),Mh.forEach(a),Jo.forEach(a),ao.forEach(a),bv.forEach(a),bf.forEach(a),Ec=c(Gl),Wi=r(Gl,"DIV",{class:!0});var Ov=n(Wi);hu=r(Ov,"DIV",{class:!0});var Ud=n(hu);Xv=p(Ud,"Copyright © 2023 Power for Planet"),Ud.forEach(a),Yi=c(Ov),Cl=r(Ov,"DIV",{class:!0});var Fv=n(Cl);mf=r(Fv,"DIV",{class:!0});var Sf=n(mf);Qv=p(Sf,"Privacy Policy"),Sf.forEach(a),wn=c(Fv),Ra=r(Fv,"DIV",{class:!0});var Ru=n(Ra);zi=r(Ru,"IMG",{src:!0,alt:!0,class:!0}),jg=c(Ru),dd=r(Ru,"IMG",{src:!0,alt:!0,class:!0}),ud=c(Ru),fd=r(Ru,"IMG",{src:!0,alt:!0,class:!0}),Ru.forEach(a),Fv.forEach(a),Ov.forEach(a),qo=c(Gl),Dc=r(Gl,"SCRIPT",{});var Uh=n(Dc);Zv=p(Uh,`function toggleElement(k) {
      var element = document.querySelector('#' + k)

      element.classList.toggle('-translate-y-full')
      element.classList.toggle('opacity-0')
      setTimeout(() => {
        element.classList.toggle('h-[250px]')
        document.querySelector('#' + k + 'a').classList.toggle('hidden')
        document.querySelector('#' + k + 'b').classList.toggle('hidden')
        document.querySelector('#' + k + 'box').classList.toggle('rounded-b-[20px]')
        document.querySelector('#' + k + 'img').classList.toggle('rounded-bl-[20px]')
      }, 50)
    }`),Uh.forEach(a),Gl.forEach(a),this.h()},h(){t(g,"class","w-full flex-col flex justify-center items-center gap-2.5 text-[44px] leading-[46px] font-bold"),t(v,"class","bg-cover bg-center bg-[url('/assets/new/E2.jpg')] h-[240px] bg-[#2e3855] bg-blend-darken bg-opacity-[0.2] w-full flex-col h-2/5 flex justify-center items-center gap-5 px-[50px] py-10 rounded-[20px] text-center text-white font-Poppins"),t(V,"class","uppercase tracking-wider"),t(w,"class","bg-white flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-[#3f9378]"),t(E,"class","text-4xl leading-[46px] font-bold text-[#2e3855] h-[92px] w-[660px]"),t(I,"class","w-full flex-col flex items-center gap-5 text-center font-Poppins"),t(M,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(O,"class","font-bold text-xl leading-[34px] font-Poppins"),t(Y,"class","font-bold text-xl leading-[34px] text-[#3f9378] font-Poppins"),t(ge,"class","font-bold text-xl leading-[34px] font-Poppins"),t(q,"class","w-[440px]"),t(_,"class","w-full flex items-start gap-[18px]"),t(C,"class","w-full flex-col flex items-start gap-6 text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins"),t(G,"class","bg-white h-full flex-1 flex-col flex items-start gap-[18px] p-10 rounded-[20px]"),t(he,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(de,"class","font-bold text-xl leading-[34px] text-[#3f9378] font-Poppins"),t(we,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[440px]"),t(Fe,"class","w-full flex-col flex items-start gap-[18px]"),t(re,"class","w-full flex-col flex items-start gap-5"),t(H,"class","bg-white h-full flex-1 flex-col flex items-start gap-[60px] p-10 rounded-[20px]"),t(A,"class","w-full h-[208px] flex items-start gap-5"),t(u,"class","flex-col w-full flex items-start gap-10 rounded-[20px]"),t(ie,"class","uppercase tracking-wider"),t(me,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(De,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(Ce,"class","flex-col flex items-center gap-5"),t(_e,"class","bg-cover bg-[url('/assets/new/E3.jpg')] bg-blend-darken bg-center bg-[#2e3855] bg-opacity-[0.4] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(Pe,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(xe,"class","w-[700px]"),t(Ge,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(Ne,"class","flex-col w-[700px] flex items-center gap-4"),S(be.src,It="/assets/new/badge-plus.svg")||t(be,"src",It),t(be,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Slurrycovers-31-Frame32-31-wrapper-31-03Greenenergy"),t(be,"class","h-6 w-6"),t(te,"class","uppercase"),t(le,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(ye,"class","list-disc"),t(He,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(ke,"class","flex-1 flex-col flex items-start gap-4 align-top"),S(tt.src,pt="/assets/new/badge-minus.svg")||t(tt,"src",pt),t(tt,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Slurrycovers-31-Frame32-31-wrapper-31-03Greenenergy0"),t(tt,"class","h-6 w-6"),t(Ct,"class","uppercase"),t(ct,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(se,"class","list-disc"),t(Dt,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(ce,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Ve,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(ee,"class","w-full flex-col flex justify-center items-center gap-10"),t(Te,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(Re,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(Ie,"class","w-full flex-col flex items-start"),t(st,"class","uppercase tracking-wider"),t(wt,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(mt,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(Xe,"class","flex-col flex items-center gap-5"),t(Tt,"class","bg-cover bg-[url('/assets/new/E4.jpg')] bg-center bg-blend-darken bg-[#2e3855] bg-opacity-[0.4] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(Ht,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(Ut,"class","w-[700px]"),t(Jt,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(ot,"class","flex-col w-[700px] flex items-center gap-4"),S(Xt.src,ns="/assets/new/badge-plus.svg")||t(Xt,"src",ns),t(Xt,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Anaerobicdigestion-31-Frame32-31-wrapper-31-03Greenenergy"),t(Xt,"class","h-6 w-6"),t(W,"class","uppercase"),t(lt,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(es,"class","list-disc"),t(os,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Yt,"class","flex-1 flex-col flex items-start gap-4"),S(Lr.src,Er="/assets/new/badge-minus.svg")||t(Lr,"src",Er),t(Lr,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Anaerobicdigestion-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Lr,"class","h-6 w-6"),t(er,"class","uppercase"),t(ks,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(us,"class","list-disc"),t(ds,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(hs,"class","h-full flex-1 flex-col flex items-start gap-4"),t(as,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(at,"class","w-full flex-col flex justify-center items-center gap-10"),t(_t,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(Nt,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(Je,"class","w-full flex-col flex items-start"),t(js,"class","uppercase tracking-wider"),t(ms,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t($t,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(Hs,"class","flex-col flex items-center gap-5"),t(Dr,"class","bg-cover bg-[url('/assets/new/E5.png')] bg-[center_top_400px] bg-blend-darken bg-[#2e3855] bg-opacity-[0.5] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(xs,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(is,"class","w-[700px]"),t(ea,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(_s,"class","flex-col w-[700px] flex items-center gap-4"),S(pr.src,Ns="/assets/new/badge-plus.svg")||t(pr,"src",Ns),t(pr,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Pyrolysis-31-Frame32-31-wrapper-31-03Greenenergy"),t(pr,"class","h-6 w-6"),t(ya,"class","uppercase"),t(Vr,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(ps,"class","list-disc"),t(sr,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(fr,"class","flex-1 flex-col flex items-start gap-4"),S(Os.src,Bs="/assets/new/badge-minus.svg")||t(Os,"src",Bs),t(Os,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Pyrolysis-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Os,"class","h-6 w-6"),t(za,"class","uppercase"),t(rr,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Fs,"class","list-disc"),t(Ws,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Es,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Zt,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(jr,"class","w-full flex-col flex justify-center items-center gap-10"),t(ur,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(dr,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(rs,"class","w-full flex-col flex items-start"),t(nr,"class","text-3xl leading-[46px] font-bold font-Poppins"),t(Ja,"class","text-sm leading-[26px] font-light font-PublicSans w-[498px]"),t(kr,"class","flex-col flex items-center gap-2 text-center text-[#2e3855]"),S(Xa.src,Ei="/assets/new/E6.png")||t(Xa,"src",Ei),t(Xa,"alt","Group7-31-Group21-31-img-31-Frame19-31-PFPtools-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),t(Xa,"class","h-[150px]"),t(go,"class","text-2xl leading-[33px] font-bold font-Poppins w-[390px]"),t(Mn,"class","text-md leading-[26px] font-light font-PublicSans w-[390px]"),t(br,"class","w-full flex-col flex items-start gap-2 text-center text-white"),t(wa,"class","w-full flex-col flex items-center gap-3"),S(jn.src,lf="/assets/new/arrow-right-circle.svg")||t(jn,"src",lf),t(jn,"alt","arrow-right-circle-31-CTA-31-ctas-31-Frame25-31-Frame24-31-Hero-31-wrapper-31-03Greenenergy"),t(jn,"class","h-5 w-5"),t(Qa,"class","bg-[#eb8b5a] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-white"),t(_a,"href","/explore#map3"),t(ys,"class","bg-[#2e3855] flex-1 flex-col flex justify-center items-center gap-6 p-10 rounded-[20px]"),t(Ia,"class","object-cover h-[150px]"),t(Ia,"alt","calculator-31-Frame26-31-PFPtools-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),S(Ia.src,mo="/assets/new/calc.png")||t(Ia,"src",mo),t(Pa,"class","text-2xl leading-[33px] font-bold font-Poppins w-[390px]"),t(Vi,"class","text-md leading-[26px] font-light font-PublicSans w-[390px]"),t(Da,"class","w-full flex-col flex items-start gap-2 text-center text-[#2e3855]"),t(tn,"class","w-full flex-col flex items-center gap-3"),S(sn.src,Bn="/assets/new/arrow-right-circle.svg")||t(sn,"src",Bn),t(sn,"alt","arrow-right-circle-31-CTA-31-ctas-31-Frame25-31-Frame24-31-Hero-31-wrapper-31-03Greenenergy"),t(sn,"class","h-5 w-5"),t(yr,"class","bg-[#eb8b5a] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-white"),t(Nn,"href","/explore#calculator3"),t(Cs,"class","bg-[#d0e6f2] flex-1 flex-col flex justify-center items-center gap-6 p-10 rounded-[20px]"),t(xr,"class","w-full flex items-start gap-5"),S(Va.src,Si="/assets/new/costs.png")||t(Va,"src",Si),t(Va,"alt","illu-costs-31-Frame24-31-Frame18-31-costs-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),t(Va,"class","h-[120px]"),t(Sr,"class","text-2xl leading-[33px] font-bold font-Poppins"),t(Ai,"class","text-md leading-[26px] font-light font-PublicSans"),t(lr,"class","flex-col flex items-start gap-4"),t(Gs,"class","flex items-center gap-10"),t(oa,"class","w-full flex-col flex justify-center items-center gap-[30px] text-[#2e3855]"),t(fl,"class","bg-[#e7f5f5] flex-col w-full flex items-start gap-10 px-10 pt-10 pb-[50px] rounded-[20px] mt-5"),t(mr,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(Q,"class","w-full flex-col flex items-start gap-10"),t(ka,"class","uppercase tracking-wider"),t(Ds,"class","bg-white flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-[#3f9378]"),t(nc,"class","text-4xl leading-[46px] font-bold text-[#2e3855] w-[700px]"),t(pl,"class","w-full flex-col flex items-center gap-4 pb-[50px] text-center font-Poppins"),t(Ta,"class","flex-col flex items-center gap-5"),t(qs,"class","bg-cover bg-[url('/assets/new/E11.jpg')] bg-center flex-col h-[245px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-tl-[20px]"),t(qs,"id","xsp1img"),t(Ks,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(Wr,"class","w-[520px]"),t(on,"id","xsp1a"),S(on.src,cn="/assets/new/rl.png")||t(on,"src",cn),t(bo,"id","xsp1b"),t(bo,"class","hidden"),S(bo.src,zl="/assets/new/rm.png")||t(bo,"src",zl),t(Yr,"onclick","toggleElement('xsp1')"),t(Yr,"href","#"),t(Hr,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(gl,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(qn,"class","bg-white w-full flex items-center rounded-t-[20px]"),t(qn,"id","xsp1box"),S(Li.src,Ci="/assets/new/badge-plus.svg")||t(Li,"src",Ci),t(Li,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Li,"class","h-6 w-6"),t(Un,"class","uppercase"),t(Rn,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Xs,"class","list-disc"),t(yo,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(ml,"class","flex-1 flex-col flex items-start gap-4"),S(xl.src,wo="/assets/new/badge-minus.svg")||t(xl,"src",wo),t(xl,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy00"),t(xl,"class","h-6 w-6"),t(Wn,"class","uppercase"),t(Hn,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Oa,"class","list-disc"),t(Eo,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(Aa,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Js,"class","bg-[#e7f5f5] w-full h-full flex items-start gap-10 px-[60px] rounded-b-[20px] pt-[30px]"),t(ca,"id","xsp1"),t(ca,"class","h-[250px] h-[0px] duration-300 bg-none w-full flex-col flex items-start gap-10 rounded-b-[20px] text-sm text-[#2e3855]"),t(vl,"class","flex-col w-[1060px] flex items-start rounded-[20px]"),t(El,"class","flex-col flex items-center gap-5"),t(La,"class","bg-cover bg-[url('/assets/new/E12.jpg')] bg-center flex-col h-[245px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-tl-[20px] rounded-bl-[20px]"),t(La,"id","xsp2img"),t(Kn,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(vn,"class","w-[520px]"),t(Bi,"id","xsp2a"),t(Bi,"class","hidden"),S(Bi.src,uf="/assets/new/rl.png")||t(Bi,"src",uf),t(Ga,"id","xsp2b"),S(Ga.src,Ql="/assets/new/rm.png")||t(Ga,"src",Ql),t(Xl,"onclick","toggleElement('xsp2')"),t(Xl,"href","#"),t(Tr,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(Jl,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(_l,"class","bg-white w-full flex items-center rounded-t-[20px] rounded-b-[20px]"),t(_l,"id","xsp2box"),S(Dl.src,ff="/assets/new/badge-plus.svg")||t(Dl,"src",ff),t(Dl,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Dl,"class","h-6 w-6"),t(fa,"class","uppercase"),t(ua,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Ps,"class","list-disc"),t(Zl,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(Qs,"class","flex-1 flex-col flex items-start gap-4"),S(Ri.src,So="/assets/new/badge-minus.svg")||t(Ri,"src",So),t(Ri,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy00"),t(Ri,"class","h-6 w-6"),t(fc,"class","uppercase"),t(hn,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(ja,"class","list-disc"),t(kl,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(Kr,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Jn,"class","bg-[#e7f5f5] w-full h-full flex items-start gap-10 px-[60px] rounded-b-[20px] pt-[30px]"),t(Il,"id","xsp2"),t(Il,"class","-translate-y-full opacity-0 duration-300 h-[0px] bg-white w-full flex-col flex items-start gap-10 rounded-b-[20px] text-sm text-[#2e3855]"),t(pn,"class","flex-col w-[1060px] flex items-start rounded-[20px]"),t(Al,"class","flex-col flex items-center gap-5"),t(va,"class","bg-cover bg-[url('/assets/new/E13.jpg')] bg-center flex-col h-[245px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-tl-[20px] rounded-bl-[20px]"),t(va,"id","xsp3img"),t(To,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(Ao,"class","w-[520px]"),t(Oo,"id","xsp3a"),S(Oo.src,ld="/assets/new/rl.png")||t(Oo,"src",ld),t(Oo,"class","hidden"),t(Na,"id","xsp3b"),S(Na.src,id="/assets/new/rm.png")||t(Na,"src",id),t(ga,"onclick","toggleElement('xsp3')"),t(ga,"href","#"),t(Fl,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(ri,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(Jr,"class","bg-white w-full flex items-center rounded-t-[20px] rounded-b-[20px]"),t(Jr,"id","xsp3box"),S(Zn.src,vf="/assets/new/badge-plus.svg")||t(Zn,"src",vf),t(Zn,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Zn,"class","h-6 w-6"),t(ha,"class","uppercase"),t(Xr,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Ba,"class","list-disc"),t(Fo,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(ai,"class","flex-1 flex-col flex items-start gap-4"),S(od.src,Cg="/assets/new/badge-minus.svg")||t(od,"src",Cg),t(od,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy00"),t(od,"class","h-6 w-6"),t(vu,"class","uppercase"),t(Ll,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(_r,"class","list-disc"),t(Go,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(tl,"class","h-full flex-1 flex-col flex items-start gap-4"),t($i,"class","bg-[#e7f5f5] w-full h-full flex items-start gap-10 px-[60px] pt-[30px] rounded-b-[20px]"),t(yn,"id","xsp3"),t(yn,"class","-translate-y-full opacity-0 duration-300 h-[0px] bg-white w-full flex-col flex items-start gap-10 rounded-b-[20px] text-sm text-[#2e3855]"),t(si,"class","flex-col w-[1060px] flex items-start rounded-[20px] mt-[10px]"),t(zs,"class","flex-col flex items-start gap-[30px]"),t(Yl,"class","w-full flex-col flex items-start gap-2.5"),t(i,"class","flex-col w-[1060px] flex items-center gap-10"),t(hu,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(mf,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(zi.src,Ic="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(zi,"src",Ic),t(zi,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(zi,"class","h-6 w-6"),S(dd.src,Bo="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(dd,"src",Bo),t(dd,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(dd,"class","h-6 w-6"),S(fd.src,Ng="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(fd,"src",Ng),t(fd,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(fd,"class","h-6 w-6"),t(Ra,"class","flex items-center gap-5"),t(Cl,"class","flex-1 flex justify-end items-center gap-10"),t(Wi,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 mw-[1060px]")},m(xf,Gl){nt(xf,l,Gl),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(u,h),e(u,I),e(I,w),e(w,V),e(V,y),e(I,D),e(I,E),e(E,F),e(u,k),e(u,A),e(A,G),e(G,M),e(G,b),e(G,C),e(C,_),e(_,q),e(q,O),e(O,L),e(q,j),e(q,Y),e(Y,R),e(q,U),e(q,ge),e(ge,ue),e(A,K),e(A,H),e(H,re),e(re,Fe),e(Fe,he),e(Fe,ze),e(Fe,we),e(we,ae),e(we,qe),e(we,Ee),e(we,de),e(de,Ue),e(we,Le),e(i,N),e(i,Q),e(Q,Ie),e(Ie,_e),e(_e,Ce),e(Ce,me),e(me,ie),e(ie,Z),e(Ce,et),e(Ce,De),e(De,Se),e(Ie,ne),e(Ie,Re),e(Re,Te),e(Te,ee),e(ee,Ne),e(Ne,Pe),e(Pe,$e),e(Ne,Be),e(Ne,Ge),e(Ge,xe),e(xe,Ze),e(xe,Qe),e(xe,it),e(xe,P),e(xe,B),e(xe,$),e(xe,z),e(xe,X),e(xe,oe),e(ee,J),e(ee,Ve),e(Ve,ke),e(ke,le),e(le,be),e(le,pe),e(le,te),e(te,Ke),e(ke,Me),e(ke,He),e(He,ye),e(ye,Ye),e(Ye,ft),e(ye,Ae),e(ye,je),e(je,qt),e(ye,Lt),e(ye,Oe),e(Oe,yt),e(Ve,Vt),e(Ve,ce),e(ce,ct),e(ct,tt),e(ct,gt),e(ct,Ct),e(Ct,dt),e(ce,Rt),e(ce,Dt),e(Dt,se),e(se,vt),e(vt,kt),e(se,Gt),e(se,ut),e(ut,ht),e(se,Mt),e(Q,St),e(Q,Je),e(Je,Tt),e(Tt,Xe),e(Xe,wt),e(wt,st),e(st,jt),e(Xe,Qt),e(Xe,mt),e(mt,ve),e(Je,rt),e(Je,Nt),e(Nt,_t),e(_t,at),e(at,ot),e(ot,Ht),e(Ht,xt),e(ot,Et),e(ot,Jt),e(Jt,Ut),e(Ut,At),e(Ut,zt),e(Ut,Ot),e(Ut,Bt),e(Ut,bt),e(at,Ms),e(at,as),e(as,Yt),e(Yt,lt),e(lt,Xt),e(lt,vs),e(lt,W),e(W,gs),e(Yt,Pt),e(Yt,os),e(os,es),e(es,ls),e(ls,Zs),e(es,Fr),e(es,ts),e(ts,cs),e(es,ir),e(es,Vs),e(es,$s),e(as,Kt),e(as,hs),e(hs,ks),e(ks,Lr),e(ks,Ir),e(ks,er),e(er,ws),e(hs,or),e(hs,ds),e(ds,us),e(us,Zr),e(Zr,Cr),e(us,ss),e(us,Ss),e(Ss,kn),e(us,Gr),e(us,Ts),e(Ts,Sn),e(Q,Mr),e(Q,rs),e(rs,Dr),e(Dr,Hs),e(Hs,ms),e(ms,js),e(js,ba),e(Hs,Pr),e(Hs,$t),e($t,tr),e(rs,cr),e(rs,dr),e(dr,ur),e(ur,jr),e(jr,_s),e(_s,xs),e(xs,ol),e(_s,pi),e(_s,ea),e(ea,is),e(is,vi),e(is,Nr),e(is,ta),e(is,gi),e(is,cl),e(is,fo),e(is,fs),e(is,As),e(is,Br),e(jr,Wa),e(jr,Zt),e(Zt,fr),e(fr,Vr),e(Vr,pr),e(Vr,qr),e(Vr,ya),e(ya,Tn),e(fr,dl),e(fr,sr),e(sr,ps),e(ps,$l),e($l,hi),e(ps,bs),e(ps,sa),e(sa,An),e(ps,vr),e(ps,Ya),e(Ya,mi),e(Zt,gr),e(Zt,Es),e(Es,rr),e(rr,Os),e(rr,Rr),e(rr,za),e(za,xi),e(Es,hr),e(Es,Ws),e(Ws,Fs),e(Fs,Ur),e(Ur,On),e(Fs,Fn),e(Fs,Ka),e(Ka,bi),e(Fs,Is),e(Fs,Ls),e(Ls,ra),e(Fs,po),e(Fs,yi),e(Fs,Ln),e(Q,ar),e(Q,mr),e(mr,kr),e(kr,nr),e(nr,ul),e(nr,$r),e(nr,aa),e(kr,Ys),e(kr,Ja),e(Ja,Jc),e(Ja,Xc),e(Ja,na),e(Ja,Zd),e(mr,vo),e(mr,_i),e(_i,xr),e(xr,ys),e(ys,Cn),e(Cn,Gn),e(Gn,Xa),e(ys,Ii),e(ys,wa),e(wa,br),e(br,go),e(go,Qc),e(br,la),e(br,Mn),e(Mn,Zc),e(ys,Di),e(ys,_a),e(_a,Qa),e(Qa,jn),e(Qa,ho),e(Qa,Za),e(Za,en),e(xr,Ea),e(xr,Cs),e(Cs,Ia),e(Cs,ia),e(Cs,tn),e(tn,Da),e(Da,Pa),e(Pa,Hl),e(Da,Pi),e(Da,Vi),e(Vi,Wl),e(Cs,ki),e(Cs,Nn),e(Nn,yr),e(yr,sn),e(yr,rn),e(yr,ac),e(ac,ed),e(_i,xo),e(_i,fl),e(fl,oa),e(oa,Gs),e(Gs,Va),e(Gs,eu),e(Gs,lr),e(lr,Sr),e(Sr,an),e(lr,Ti),e(lr,Ai),e(Ai,nn),e(i,ln),e(i,Yl),e(Yl,pl),e(pl,Ds),e(Ds,ka),e(ka,Oi),e(pl,Sa),e(pl,nc),e(nc,td),e(Yl,wr),e(Yl,zs),e(zs,vl),e(vl,qn),e(qn,qs),e(qs,Ta),e(qn,sd),e(qn,gl),e(gl,Ks),e(Ks,Fi),e(gl,tu),e(gl,Hr),e(Hr,Wr),e(Wr,su),e(Hr,rd),e(Hr,Yr),e(Yr,on),e(Yr,hl),e(Yr,bo),e(vl,ru),e(vl,ca),e(ca,Js),e(Js,ml),e(ml,Rn),e(Rn,Li),e(Rn,da),e(Rn,Un),e(Un,of),e(ml,au),e(ml,yo),e(yo,Xs),e(Xs,dn),e(dn,cf),e(Xs,nu),e(Xs,lc),e(lc,$n),e(Xs,un),e(Xs,ic),e(ic,lu),e(Js,Gi),e(Js,Aa),e(Aa,Hn),e(Hn,xl),e(Hn,df),e(Hn,Wn),e(Wn,bl),e(Aa,_o),e(Aa,Eo),e(Eo,Oa),e(Oa,Yn),e(Yn,fn),e(Oa,iu),e(Oa,oc),e(oc,yl),e(Oa,cc),e(Oa,wl),e(wl,Kl),e(Oa,zn),e(Oa,Fa),e(Fa,Io),e(zs,Mi),e(zs,pn),e(pn,_l),e(_l,La),e(La,El),e(_l,ou),e(_l,Jl),e(Jl,Kn),e(Kn,cu),e(Jl,ji),e(Jl,Tr),e(Tr,vn),e(vn,Ca),e(Tr,Ni),e(Tr,Xl),e(Xl,Bi),e(Xl,Do),e(Xl,Ga),e(pn,Po),e(pn,Il),e(Il,Jn),e(Jn,Qs),e(Qs,ua),e(ua,Dl),e(ua,du),e(ua,fa),e(fa,qi),e(Qs,Vo),e(Qs,Zl),e(Zl,Ps),e(Ps,Ma),e(Ma,ko),e(Ps,Pl),e(Ps,ad),e(ad,dc),e(Ps,zr),e(Ps,gn),e(gn,uu),e(Jn,uc),e(Jn,Kr),e(Kr,hn),e(hn,Ri),e(hn,Vl),e(hn,fc),e(fc,pc),e(Kr,ei),e(Kr,kl),e(kl,ja),e(ja,vc),e(vc,fu),e(ja,Xn),e(ja,pa),e(pa,mn),e(ja,nd),e(ja,Ui),e(Ui,gc),e(ja,Sl),e(ja,Tl),e(Tl,ti),e(zs,pu),e(zs,si),e(si,Jr),e(Jr,va),e(va,Al),e(Jr,pf),e(Jr,ri),e(ri,To),e(To,Ol),e(ri,xn),e(ri,Fl),e(Fl,Ao),e(Ao,hc),e(Fl,Qn),e(Fl,ga),e(ga,Oo),e(ga,bn),e(ga,Na),e(si,mc),e(si,yn),e(yn,$i),e($i,ai),e(ai,Xr),e(Xr,Zn),e(Xr,Hi),e(Xr,ha),e(ha,xc),e(ai,bc),e(ai,Fo),e(Fo,Ba),e(Ba,yc),e(yc,wc),e(Ba,Lo),e(Ba,qa),e(qa,ni),e(Ba,el),e(Ba,Co),e(Co,Lg),e($i,Yv),e($i,tl),e(tl,Ll),e(Ll,od),e(Ll,cd),e(Ll,vu),e(vu,zv),e(tl,_c),e(tl,Go),e(Go,_r),e(_r,Mo),e(Mo,Gg),e(_r,Kv),e(_r,gf),e(gf,gu),e(_r,jo),e(_r,No),e(No,Mg),e(_r,Jv),e(_r,hf),e(hf,li),e(l,Ec),e(l,Wi),e(Wi,hu),e(hu,Xv),e(Wi,Yi),e(Wi,Cl),e(Cl,mf),e(mf,Qv),e(Cl,wn),e(Cl,Ra),e(Ra,zi),e(Ra,jg),e(Ra,dd),e(Ra,ud),e(Ra,fd),e(l,qo),e(l,Dc),e(Dc,Zv)},p:We,i:We,o:We,d(xf){xf&&a(l)}}}class y6 extends Pn{constructor(l){super(),Vn(this,l,null,b6,Ha,{})}}var co="top",zc="bottom",Kc="right",uo="left",$2="auto",Km=[co,zc,Kc,uo],_m="start",Ym="end",w6="clippingParents",iE="viewport",Rm="popper",_6="reference",j_=Km.reduce(function(d,l){return d.concat([l+"-"+_m,l+"-"+Ym])},[]),oE=[].concat(Km,[$2]).reduce(function(d,l){return d.concat([l,l+"-"+_m,l+"-"+Ym])},[]),E6="beforeRead",I6="read",D6="afterRead",P6="beforeMain",V6="main",k6="afterMain",S6="beforeWrite",T6="write",A6="afterWrite",O6=[E6,I6,D6,P6,V6,k6,S6,T6,A6];function nf(d){return d?(d.nodeName||"").toLowerCase():null}function rc(d){if(d==null)return window;if(d.toString()!=="[object Window]"){var l=d.ownerDocument;return l&&l.defaultView||window}return d}function Og(d){var l=rc(d).Element;return d instanceof l||d instanceof Element}function Yc(d){var l=rc(d).HTMLElement;return d instanceof l||d instanceof HTMLElement}function H2(d){if(typeof ShadowRoot>"u")return!1;var l=rc(d).ShadowRoot;return d instanceof l||d instanceof ShadowRoot}function F6(d){var l=d.state;Object.keys(l.elements).forEach(function(i){var u=l.styles[i]||{},v=l.attributes[i]||{},g=l.elements[i];!Yc(g)||!nf(g)||(Object.assign(g.style,u),Object.keys(v).forEach(function(x){var m=v[x];m===!1?g.removeAttribute(x):g.setAttribute(x,m===!0?"":m)}))})}function L6(d){var l=d.state,i={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,i.popper),l.styles=i,l.elements.arrow&&Object.assign(l.elements.arrow.style,i.arrow),function(){Object.keys(l.elements).forEach(function(u){var v=l.elements[u],g=l.attributes[u]||{},x=Object.keys(l.styles.hasOwnProperty(u)?l.styles[u]:i[u]),m=x.reduce(function(h,I){return h[I]="",h},{});!Yc(v)||!nf(v)||(Object.assign(v.style,m),Object.keys(g).forEach(function(h){v.removeAttribute(h)}))})}}const cE={name:"applyStyles",enabled:!0,phase:"write",fn:F6,effect:L6,requires:["computeStyles"]};function af(d){return d.split("-")[0]}var Tg=Math.max,M0=Math.min,Em=Math.round;function M2(){var d=navigator.userAgentData;return d!=null&&d.brands&&Array.isArray(d.brands)?d.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function dE(){return!/^((?!chrome|android).)*safari/i.test(M2())}function Im(d,l,i){l===void 0&&(l=!1),i===void 0&&(i=!1);var u=d.getBoundingClientRect(),v=1,g=1;l&&Yc(d)&&(v=d.offsetWidth>0&&Em(u.width)/d.offsetWidth||1,g=d.offsetHeight>0&&Em(u.height)/d.offsetHeight||1);var x=Og(d)?rc(d):window,m=x.visualViewport,h=!dE()&&i,I=(u.left+(h&&m?m.offsetLeft:0))/v,w=(u.top+(h&&m?m.offsetTop:0))/g,V=u.width/v,y=u.height/g;return{width:V,height:y,top:w,right:I+V,bottom:w+y,left:I,x:I,y:w}}function W2(d){var l=Im(d),i=d.offsetWidth,u=d.offsetHeight;return Math.abs(l.width-i)<=1&&(i=l.width),Math.abs(l.height-u)<=1&&(u=l.height),{x:d.offsetLeft,y:d.offsetTop,width:i,height:u}}function uE(d,l){var i=l.getRootNode&&l.getRootNode();if(d.contains(l))return!0;if(i&&H2(i)){var u=l;do{if(u&&d.isSameNode(u))return!0;u=u.parentNode||u.host}while(u)}return!1}function Zp(d){return rc(d).getComputedStyle(d)}function C6(d){return["table","td","th"].indexOf(nf(d))>=0}function Wv(d){return((Og(d)?d.ownerDocument:d.document)||window.document).documentElement}function N0(d){return nf(d)==="html"?d:d.assignedSlot||d.parentNode||(H2(d)?d.host:null)||Wv(d)}function N_(d){return!Yc(d)||Zp(d).position==="fixed"?null:d.offsetParent}function G6(d){var l=/firefox/i.test(M2()),i=/Trident/i.test(M2());if(i&&Yc(d)){var u=Zp(d);if(u.position==="fixed")return null}var v=N0(d);for(H2(v)&&(v=v.host);Yc(v)&&["html","body"].indexOf(nf(v))<0;){var g=Zp(v);if(g.transform!=="none"||g.perspective!=="none"||g.contain==="paint"||["transform","perspective"].indexOf(g.willChange)!==-1||l&&g.willChange==="filter"||l&&g.filter&&g.filter!=="none")return v;v=v.parentNode}return null}function Jm(d){for(var l=rc(d),i=N_(d);i&&C6(i)&&Zp(i).position==="static";)i=N_(i);return i&&(nf(i)==="html"||nf(i)==="body"&&Zp(i).position==="static")?l:i||G6(d)||l}function Y2(d){return["top","bottom"].indexOf(d)>=0?"x":"y"}function $m(d,l,i){return Tg(d,M0(l,i))}function M6(d,l,i){var u=$m(d,l,i);return u>i?i:u}function fE(){return{top:0,right:0,bottom:0,left:0}}function pE(d){return Object.assign({},fE(),d)}function vE(d,l){return l.reduce(function(i,u){return i[u]=d,i},{})}var j6=function(l,i){return l=typeof l=="function"?l(Object.assign({},i.rects,{placement:i.placement})):l,pE(typeof l!="number"?l:vE(l,Km))};function N6(d){var l,i=d.state,u=d.name,v=d.options,g=i.elements.arrow,x=i.modifiersData.popperOffsets,m=af(i.placement),h=Y2(m),I=[uo,Kc].indexOf(m)>=0,w=I?"height":"width";if(!(!g||!x)){var V=j6(v.padding,i),y=W2(g),D=h==="y"?co:uo,E=h==="y"?zc:Kc,F=i.rects.reference[w]+i.rects.reference[h]-x[h]-i.rects.popper[w],k=x[h]-i.rects.reference[h],A=Jm(g),G=A?h==="y"?A.clientHeight||0:A.clientWidth||0:0,M=F/2-k/2,b=V[D],C=G-y[w]-V[E],_=G/2-y[w]/2+M,q=$m(b,_,C),O=h;i.modifiersData[u]=(l={},l[O]=q,l.centerOffset=q-_,l)}}function B6(d){var l=d.state,i=d.options,u=i.element,v=u===void 0?"[data-popper-arrow]":u;v!=null&&(typeof v=="string"&&(v=l.elements.popper.querySelector(v),!v)||uE(l.elements.popper,v)&&(l.elements.arrow=v))}const q6={name:"arrow",enabled:!0,phase:"main",fn:N6,effect:B6,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Dm(d){return d.split("-")[1]}var R6={top:"auto",right:"auto",bottom:"auto",left:"auto"};function U6(d,l){var i=d.x,u=d.y,v=l.devicePixelRatio||1;return{x:Em(i*v)/v||0,y:Em(u*v)/v||0}}function B_(d){var l,i=d.popper,u=d.popperRect,v=d.placement,g=d.variation,x=d.offsets,m=d.position,h=d.gpuAcceleration,I=d.adaptive,w=d.roundOffsets,V=d.isFixed,y=x.x,D=y===void 0?0:y,E=x.y,F=E===void 0?0:E,k=typeof w=="function"?w({x:D,y:F}):{x:D,y:F};D=k.x,F=k.y;var A=x.hasOwnProperty("x"),G=x.hasOwnProperty("y"),M=uo,b=co,C=window;if(I){var _=Jm(i),q="clientHeight",O="clientWidth";if(_===rc(i)&&(_=Wv(i),Zp(_).position!=="static"&&m==="absolute"&&(q="scrollHeight",O="scrollWidth")),_=_,v===co||(v===uo||v===Kc)&&g===Ym){b=zc;var L=V&&_===C&&C.visualViewport?C.visualViewport.height:_[q];F-=L-u.height,F*=h?1:-1}if(v===uo||(v===co||v===zc)&&g===Ym){M=Kc;var j=V&&_===C&&C.visualViewport?C.visualViewport.width:_[O];D-=j-u.width,D*=h?1:-1}}var Y=Object.assign({position:m},I&&R6),R=w===!0?U6({x:D,y:F},rc(i)):{x:D,y:F};if(D=R.x,F=R.y,h){var U;return Object.assign({},Y,(U={},U[b]=G?"0":"",U[M]=A?"0":"",U.transform=(C.devicePixelRatio||1)<=1?"translate("+D+"px, "+F+"px)":"translate3d("+D+"px, "+F+"px, 0)",U))}return Object.assign({},Y,(l={},l[b]=G?F+"px":"",l[M]=A?D+"px":"",l.transform="",l))}function $6(d){var l=d.state,i=d.options,u=i.gpuAcceleration,v=u===void 0?!0:u,g=i.adaptive,x=g===void 0?!0:g,m=i.roundOffsets,h=m===void 0?!0:m,I={placement:af(l.placement),variation:Dm(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:v,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,B_(Object.assign({},I,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:x,roundOffsets:h})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,B_(Object.assign({},I,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})}const H6={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:$6,data:{}};var O0={passive:!0};function W6(d){var l=d.state,i=d.instance,u=d.options,v=u.scroll,g=v===void 0?!0:v,x=u.resize,m=x===void 0?!0:x,h=rc(l.elements.popper),I=[].concat(l.scrollParents.reference,l.scrollParents.popper);return g&&I.forEach(function(w){w.addEventListener("scroll",i.update,O0)}),m&&h.addEventListener("resize",i.update,O0),function(){g&&I.forEach(function(w){w.removeEventListener("scroll",i.update,O0)}),m&&h.removeEventListener("resize",i.update,O0)}}const Y6={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:W6,data:{}};var z6={left:"right",right:"left",bottom:"top",top:"bottom"};function L0(d){return d.replace(/left|right|bottom|top/g,function(l){return z6[l]})}var K6={start:"end",end:"start"};function q_(d){return d.replace(/start|end/g,function(l){return K6[l]})}function z2(d){var l=rc(d),i=l.pageXOffset,u=l.pageYOffset;return{scrollLeft:i,scrollTop:u}}function K2(d){return Im(Wv(d)).left+z2(d).scrollLeft}function J6(d,l){var i=rc(d),u=Wv(d),v=i.visualViewport,g=u.clientWidth,x=u.clientHeight,m=0,h=0;if(v){g=v.width,x=v.height;var I=dE();(I||!I&&l==="fixed")&&(m=v.offsetLeft,h=v.offsetTop)}return{width:g,height:x,x:m+K2(d),y:h}}function X6(d){var l,i=Wv(d),u=z2(d),v=(l=d.ownerDocument)==null?void 0:l.body,g=Tg(i.scrollWidth,i.clientWidth,v?v.scrollWidth:0,v?v.clientWidth:0),x=Tg(i.scrollHeight,i.clientHeight,v?v.scrollHeight:0,v?v.clientHeight:0),m=-u.scrollLeft+K2(d),h=-u.scrollTop;return Zp(v||i).direction==="rtl"&&(m+=Tg(i.clientWidth,v?v.clientWidth:0)-g),{width:g,height:x,x:m,y:h}}function J2(d){var l=Zp(d),i=l.overflow,u=l.overflowX,v=l.overflowY;return/auto|scroll|overlay|hidden/.test(i+v+u)}function gE(d){return["html","body","#document"].indexOf(nf(d))>=0?d.ownerDocument.body:Yc(d)&&J2(d)?d:gE(N0(d))}function Hm(d,l){var i;l===void 0&&(l=[]);var u=gE(d),v=u===((i=d.ownerDocument)==null?void 0:i.body),g=rc(u),x=v?[g].concat(g.visualViewport||[],J2(u)?u:[]):u,m=l.concat(x);return v?m:m.concat(Hm(N0(x)))}function j2(d){return Object.assign({},d,{left:d.x,top:d.y,right:d.x+d.width,bottom:d.y+d.height})}function Q6(d,l){var i=Im(d,!1,l==="fixed");return i.top=i.top+d.clientTop,i.left=i.left+d.clientLeft,i.bottom=i.top+d.clientHeight,i.right=i.left+d.clientWidth,i.width=d.clientWidth,i.height=d.clientHeight,i.x=i.left,i.y=i.top,i}function R_(d,l,i){return l===iE?j2(J6(d,i)):Og(l)?Q6(l,i):j2(X6(Wv(d)))}function Z6(d){var l=Hm(N0(d)),i=["absolute","fixed"].indexOf(Zp(d).position)>=0,u=i&&Yc(d)?Jm(d):d;return Og(u)?l.filter(function(v){return Og(v)&&uE(v,u)&&nf(v)!=="body"}):[]}function e4(d,l,i,u){var v=l==="clippingParents"?Z6(d):[].concat(l),g=[].concat(v,[i]),x=g[0],m=g.reduce(function(h,I){var w=R_(d,I,u);return h.top=Tg(w.top,h.top),h.right=M0(w.right,h.right),h.bottom=M0(w.bottom,h.bottom),h.left=Tg(w.left,h.left),h},R_(d,x,u));return m.width=m.right-m.left,m.height=m.bottom-m.top,m.x=m.left,m.y=m.top,m}function hE(d){var l=d.reference,i=d.element,u=d.placement,v=u?af(u):null,g=u?Dm(u):null,x=l.x+l.width/2-i.width/2,m=l.y+l.height/2-i.height/2,h;switch(v){case co:h={x,y:l.y-i.height};break;case zc:h={x,y:l.y+l.height};break;case Kc:h={x:l.x+l.width,y:m};break;case uo:h={x:l.x-i.width,y:m};break;default:h={x:l.x,y:l.y}}var I=v?Y2(v):null;if(I!=null){var w=I==="y"?"height":"width";switch(g){case _m:h[I]=h[I]-(l[w]/2-i[w]/2);break;case Ym:h[I]=h[I]+(l[w]/2-i[w]/2);break}}return h}function zm(d,l){l===void 0&&(l={});var i=l,u=i.placement,v=u===void 0?d.placement:u,g=i.strategy,x=g===void 0?d.strategy:g,m=i.boundary,h=m===void 0?w6:m,I=i.rootBoundary,w=I===void 0?iE:I,V=i.elementContext,y=V===void 0?Rm:V,D=i.altBoundary,E=D===void 0?!1:D,F=i.padding,k=F===void 0?0:F,A=pE(typeof k!="number"?k:vE(k,Km)),G=y===Rm?_6:Rm,M=d.rects.popper,b=d.elements[E?G:y],C=e4(Og(b)?b:b.contextElement||Wv(d.elements.popper),h,w,x),_=Im(d.elements.reference),q=hE({reference:_,element:M,strategy:"absolute",placement:v}),O=j2(Object.assign({},M,q)),L=y===Rm?O:_,j={top:C.top-L.top+A.top,bottom:L.bottom-C.bottom+A.bottom,left:C.left-L.left+A.left,right:L.right-C.right+A.right},Y=d.modifiersData.offset;if(y===Rm&&Y){var R=Y[v];Object.keys(j).forEach(function(U){var ge=[Kc,zc].indexOf(U)>=0?1:-1,ue=[co,zc].indexOf(U)>=0?"y":"x";j[U]+=R[ue]*ge})}return j}function t4(d,l){l===void 0&&(l={});var i=l,u=i.placement,v=i.boundary,g=i.rootBoundary,x=i.padding,m=i.flipVariations,h=i.allowedAutoPlacements,I=h===void 0?oE:h,w=Dm(u),V=w?m?j_:j_.filter(function(E){return Dm(E)===w}):Km,y=V.filter(function(E){return I.indexOf(E)>=0});y.length===0&&(y=V);var D=y.reduce(function(E,F){return E[F]=zm(d,{placement:F,boundary:v,rootBoundary:g,padding:x})[af(F)],E},{});return Object.keys(D).sort(function(E,F){return D[E]-D[F]})}function s4(d){if(af(d)===$2)return[];var l=L0(d);return[q_(d),l,q_(l)]}function r4(d){var l=d.state,i=d.options,u=d.name;if(!l.modifiersData[u]._skip){for(var v=i.mainAxis,g=v===void 0?!0:v,x=i.altAxis,m=x===void 0?!0:x,h=i.fallbackPlacements,I=i.padding,w=i.boundary,V=i.rootBoundary,y=i.altBoundary,D=i.flipVariations,E=D===void 0?!0:D,F=i.allowedAutoPlacements,k=l.options.placement,A=af(k),G=A===k,M=h||(G||!E?[L0(k)]:s4(k)),b=[k].concat(M).reduce(function(fe,qe){return fe.concat(af(qe)===$2?t4(l,{placement:qe,boundary:w,rootBoundary:V,padding:I,flipVariations:E,allowedAutoPlacements:F}):qe)},[]),C=l.rects.reference,_=l.rects.popper,q=new Map,O=!0,L=b[0],j=0;j<b.length;j++){var Y=b[j],R=af(Y),U=Dm(Y)===_m,ge=[co,zc].indexOf(R)>=0,ue=ge?"width":"height",K=zm(l,{placement:Y,boundary:w,rootBoundary:V,altBoundary:y,padding:I}),H=ge?U?Kc:uo:U?zc:co;C[ue]>_[ue]&&(H=L0(H));var re=L0(H),Fe=[];if(g&&Fe.push(K[R]<=0),m&&Fe.push(K[H]<=0,K[re]<=0),Fe.every(function(fe){return fe})){L=Y,O=!1;break}q.set(Y,Fe)}if(O)for(var he=E?3:1,ze=function(qe){var Ee=b.find(function(de){var Ue=q.get(de);if(Ue)return Ue.slice(0,qe).every(function(Le){return Le})});if(Ee)return L=Ee,"break"},we=he;we>0;we--){var ae=ze(we);if(ae==="break")break}l.placement!==L&&(l.modifiersData[u]._skip=!0,l.placement=L,l.reset=!0)}}const a4={name:"flip",enabled:!0,phase:"main",fn:r4,requiresIfExists:["offset"],data:{_skip:!1}};function U_(d,l,i){return i===void 0&&(i={x:0,y:0}),{top:d.top-l.height-i.y,right:d.right-l.width+i.x,bottom:d.bottom-l.height+i.y,left:d.left-l.width-i.x}}function $_(d){return[co,Kc,zc,uo].some(function(l){return d[l]>=0})}function n4(d){var l=d.state,i=d.name,u=l.rects.reference,v=l.rects.popper,g=l.modifiersData.preventOverflow,x=zm(l,{elementContext:"reference"}),m=zm(l,{altBoundary:!0}),h=U_(x,u),I=U_(m,v,g),w=$_(h),V=$_(I);l.modifiersData[i]={referenceClippingOffsets:h,popperEscapeOffsets:I,isReferenceHidden:w,hasPopperEscaped:V},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":w,"data-popper-escaped":V})}const l4={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:n4};function i4(d,l,i){var u=af(d),v=[uo,co].indexOf(u)>=0?-1:1,g=typeof i=="function"?i(Object.assign({},l,{placement:d})):i,x=g[0],m=g[1];return x=x||0,m=(m||0)*v,[uo,Kc].indexOf(u)>=0?{x:m,y:x}:{x,y:m}}function o4(d){var l=d.state,i=d.options,u=d.name,v=i.offset,g=v===void 0?[0,0]:v,x=oE.reduce(function(w,V){return w[V]=i4(V,l.rects,g),w},{}),m=x[l.placement],h=m.x,I=m.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=h,l.modifiersData.popperOffsets.y+=I),l.modifiersData[u]=x}const c4={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:o4};function d4(d){var l=d.state,i=d.name;l.modifiersData[i]=hE({reference:l.rects.reference,element:l.rects.popper,strategy:"absolute",placement:l.placement})}const u4={name:"popperOffsets",enabled:!0,phase:"read",fn:d4,data:{}};function f4(d){return d==="x"?"y":"x"}function p4(d){var l=d.state,i=d.options,u=d.name,v=i.mainAxis,g=v===void 0?!0:v,x=i.altAxis,m=x===void 0?!1:x,h=i.boundary,I=i.rootBoundary,w=i.altBoundary,V=i.padding,y=i.tether,D=y===void 0?!0:y,E=i.tetherOffset,F=E===void 0?0:E,k=zm(l,{boundary:h,rootBoundary:I,padding:V,altBoundary:w}),A=af(l.placement),G=Dm(l.placement),M=!G,b=Y2(A),C=f4(b),_=l.modifiersData.popperOffsets,q=l.rects.reference,O=l.rects.popper,L=typeof F=="function"?F(Object.assign({},l.rects,{placement:l.placement})):F,j=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),Y=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,R={x:0,y:0};if(_){if(g){var U,ge=b==="y"?co:uo,ue=b==="y"?zc:Kc,K=b==="y"?"height":"width",H=_[b],re=H+k[ge],Fe=H-k[ue],he=D?-O[K]/2:0,ze=G===_m?q[K]:O[K],we=G===_m?-O[K]:-q[K],ae=l.elements.arrow,fe=D&&ae?W2(ae):{width:0,height:0},qe=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:fE(),Ee=qe[ge],de=qe[ue],Ue=$m(0,q[K],fe[K]),Le=M?q[K]/2-he-Ue-Ee-j.mainAxis:ze-Ue-Ee-j.mainAxis,N=M?-q[K]/2+he+Ue+de+j.mainAxis:we+Ue+de+j.mainAxis,Q=l.elements.arrow&&Jm(l.elements.arrow),Ie=Q?b==="y"?Q.clientTop||0:Q.clientLeft||0:0,_e=(U=Y==null?void 0:Y[b])!=null?U:0,Ce=H+Le-_e-Ie,me=H+N-_e,ie=$m(D?M0(re,Ce):re,H,D?Tg(Fe,me):Fe);_[b]=ie,R[b]=ie-H}if(m){var Z,et=b==="x"?co:uo,De=b==="x"?zc:Kc,Se=_[C],ne=C==="y"?"height":"width",Re=Se+k[et],Te=Se-k[De],ee=[co,uo].indexOf(A)!==-1,Ne=(Z=Y==null?void 0:Y[C])!=null?Z:0,Pe=ee?Re:Se-q[ne]-O[ne]-Ne+j.altAxis,$e=ee?Se+q[ne]+O[ne]-Ne-j.altAxis:Te,Be=D&&ee?M6(Pe,Se,$e):$m(D?Pe:Re,Se,D?$e:Te);_[C]=Be,R[C]=Be-Se}l.modifiersData[u]=R}}const v4={name:"preventOverflow",enabled:!0,phase:"main",fn:p4,requiresIfExists:["offset"]};function g4(d){return{scrollLeft:d.scrollLeft,scrollTop:d.scrollTop}}function h4(d){return d===rc(d)||!Yc(d)?z2(d):g4(d)}function m4(d){var l=d.getBoundingClientRect(),i=Em(l.width)/d.offsetWidth||1,u=Em(l.height)/d.offsetHeight||1;return i!==1||u!==1}function x4(d,l,i){i===void 0&&(i=!1);var u=Yc(l),v=Yc(l)&&m4(l),g=Wv(l),x=Im(d,v,i),m={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(u||!u&&!i)&&((nf(l)!=="body"||J2(g))&&(m=h4(l)),Yc(l)?(h=Im(l,!0),h.x+=l.clientLeft,h.y+=l.clientTop):g&&(h.x=K2(g))),{x:x.left+m.scrollLeft-h.x,y:x.top+m.scrollTop-h.y,width:x.width,height:x.height}}function b4(d){var l=new Map,i=new Set,u=[];d.forEach(function(g){l.set(g.name,g)});function v(g){i.add(g.name);var x=[].concat(g.requires||[],g.requiresIfExists||[]);x.forEach(function(m){if(!i.has(m)){var h=l.get(m);h&&v(h)}}),u.push(g)}return d.forEach(function(g){i.has(g.name)||v(g)}),u}function y4(d){var l=b4(d);return O6.reduce(function(i,u){return i.concat(l.filter(function(v){return v.phase===u}))},[])}function w4(d){var l;return function(){return l||(l=new Promise(function(i){Promise.resolve().then(function(){l=void 0,i(d())})})),l}}function _4(d){var l=d.reduce(function(i,u){var v=i[u.name];return i[u.name]=v?Object.assign({},v,u,{options:Object.assign({},v.options,u.options),data:Object.assign({},v.data,u.data)}):u,i},{});return Object.keys(l).map(function(i){return l[i]})}var H_={placement:"bottom",modifiers:[],strategy:"absolute"};function W_(){for(var d=arguments.length,l=new Array(d),i=0;i<d;i++)l[i]=arguments[i];return!l.some(function(u){return!(u&&typeof u.getBoundingClientRect=="function")})}function E4(d){d===void 0&&(d={});var l=d,i=l.defaultModifiers,u=i===void 0?[]:i,v=l.defaultOptions,g=v===void 0?H_:v;return function(m,h,I){I===void 0&&(I=g);var w={placement:"bottom",orderedModifiers:[],options:Object.assign({},H_,g),modifiersData:{},elements:{reference:m,popper:h},attributes:{},styles:{}},V=[],y=!1,D={state:w,setOptions:function(A){var G=typeof A=="function"?A(w.options):A;F(),w.options=Object.assign({},g,w.options,G),w.scrollParents={reference:Og(m)?Hm(m):m.contextElement?Hm(m.contextElement):[],popper:Hm(h)};var M=y4(_4([].concat(u,w.options.modifiers)));return w.orderedModifiers=M.filter(function(b){return b.enabled}),E(),D.update()},forceUpdate:function(){if(!y){var A=w.elements,G=A.reference,M=A.popper;if(W_(G,M)){w.rects={reference:x4(G,Jm(M),w.options.strategy==="fixed"),popper:W2(M)},w.reset=!1,w.placement=w.options.placement,w.orderedModifiers.forEach(function(j){return w.modifiersData[j.name]=Object.assign({},j.data)});for(var b=0;b<w.orderedModifiers.length;b++){if(w.reset===!0){w.reset=!1,b=-1;continue}var C=w.orderedModifiers[b],_=C.fn,q=C.options,O=q===void 0?{}:q,L=C.name;typeof _=="function"&&(w=_({state:w,options:O,name:L,instance:D})||w)}}}},update:w4(function(){return new Promise(function(k){D.forceUpdate(),k(w)})}),destroy:function(){F(),y=!0}};if(!W_(m,h))return D;D.setOptions(I).then(function(k){!y&&I.onFirstUpdate&&I.onFirstUpdate(k)});function E(){w.orderedModifiers.forEach(function(k){var A=k.name,G=k.options,M=G===void 0?{}:G,b=k.effect;if(typeof b=="function"){var C=b({state:w,name:A,instance:D,options:M}),_=function(){};V.push(C||_)}})}function F(){V.forEach(function(k){return k()}),V=[]}return D}}var I4=[Y6,u4,H6,cE,c4,a4,v4,q6,l4],D4=E4({defaultModifiers:I4}),P4="tippy-box",mE="tippy-content",V4="tippy-backdrop",xE="tippy-arrow",bE="tippy-svg-arrow",kg={passive:!0,capture:!0},yE=function(){return document.body};function O2(d,l,i){if(Array.isArray(d)){var u=d[l];return u??(Array.isArray(i)?i[l]:i)}return d}function X2(d,l){var i={}.toString.call(d);return i.indexOf("[object")===0&&i.indexOf(l+"]")>-1}function wE(d,l){return typeof d=="function"?d.apply(void 0,l):d}function Y_(d,l){if(l===0)return d;var i;return function(u){clearTimeout(i),i=setTimeout(function(){d(u)},l)}}function k4(d){return d.split(/\s+/).filter(Boolean)}function ym(d){return[].concat(d)}function z_(d,l){d.indexOf(l)===-1&&d.push(l)}function S4(d){return d.filter(function(l,i){return d.indexOf(l)===i})}function T4(d){return d.split("-")[0]}function j0(d){return[].slice.call(d)}function K_(d){return Object.keys(d).reduce(function(l,i){return d[i]!==void 0&&(l[i]=d[i]),l},{})}function Wm(){return document.createElement("div")}function B0(d){return["Element","Fragment"].some(function(l){return X2(d,l)})}function A4(d){return X2(d,"NodeList")}function O4(d){return X2(d,"MouseEvent")}function F4(d){return!!(d&&d._tippy&&d._tippy.reference===d)}function L4(d){return B0(d)?[d]:A4(d)?j0(d):Array.isArray(d)?d:j0(document.querySelectorAll(d))}function F2(d,l){d.forEach(function(i){i&&(i.style.transitionDuration=l+"ms")})}function J_(d,l){d.forEach(function(i){i&&i.setAttribute("data-state",l)})}function C4(d){var l,i=ym(d),u=i[0];return u!=null&&(l=u.ownerDocument)!=null&&l.body?u.ownerDocument:document}function G4(d,l){var i=l.clientX,u=l.clientY;return d.every(function(v){var g=v.popperRect,x=v.popperState,m=v.props,h=m.interactiveBorder,I=T4(x.placement),w=x.modifiersData.offset;if(!w)return!0;var V=I==="bottom"?w.top.y:0,y=I==="top"?w.bottom.y:0,D=I==="right"?w.left.x:0,E=I==="left"?w.right.x:0,F=g.top-u+V>h,k=u-g.bottom-y>h,A=g.left-i+D>h,G=i-g.right-E>h;return F||k||A||G})}function L2(d,l,i){var u=l+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(v){d[u](v,i)})}function X_(d,l){for(var i=l;i;){var u;if(d.contains(i))return!0;i=i.getRootNode==null||(u=i.getRootNode())==null?void 0:u.host}return!1}var sf={isTouch:!1},Q_=0;function M4(){sf.isTouch||(sf.isTouch=!0,window.performance&&document.addEventListener("mousemove",_E))}function _E(){var d=performance.now();d-Q_<20&&(sf.isTouch=!1,document.removeEventListener("mousemove",_E)),Q_=d}function j4(){var d=document.activeElement;if(F4(d)){var l=d._tippy;d.blur&&!l.state.isVisible&&d.blur()}}function N4(){document.addEventListener("touchstart",M4,kg),window.addEventListener("blur",j4)}var B4=typeof window<"u"&&typeof document<"u",q4=B4?!!window.msCrypto:!1,R4={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},U4={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},Qd=Object.assign({appendTo:yE,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},R4,U4),$4=Object.keys(Qd),H4=function(l){var i=Object.keys(l);i.forEach(function(u){Qd[u]=l[u]})};function EE(d){var l=d.plugins||[],i=l.reduce(function(u,v){var g=v.name,x=v.defaultValue;if(g){var m;u[g]=d[g]!==void 0?d[g]:(m=Qd[g])!=null?m:x}return u},{});return Object.assign({},d,i)}function W4(d,l){var i=l?Object.keys(EE(Object.assign({},Qd,{plugins:l}))):$4,u=i.reduce(function(v,g){var x=(d.getAttribute("data-tippy-"+g)||"").trim();if(!x)return v;if(g==="content")v[g]=x;else try{v[g]=JSON.parse(x)}catch{v[g]=x}return v},{});return u}function Z_(d,l){var i=Object.assign({},l,{content:wE(l.content,[d])},l.ignoreAttributes?{}:W4(d,l.plugins));return i.aria=Object.assign({},Qd.aria,i.aria),i.aria={expanded:i.aria.expanded==="auto"?l.interactive:i.aria.expanded,content:i.aria.content==="auto"?l.interactive?null:"describedby":i.aria.content},i}var Y4=function(){return"innerHTML"};function N2(d,l){d[Y4()]=l}function eE(d){var l=Wm();return d===!0?l.className=xE:(l.className=bE,B0(d)?l.appendChild(d):N2(l,d)),l}function tE(d,l){B0(l.content)?(N2(d,""),d.appendChild(l.content)):typeof l.content!="function"&&(l.allowHTML?N2(d,l.content):d.textContent=l.content)}function B2(d){var l=d.firstElementChild,i=j0(l.children);return{box:l,content:i.find(function(u){return u.classList.contains(mE)}),arrow:i.find(function(u){return u.classList.contains(xE)||u.classList.contains(bE)}),backdrop:i.find(function(u){return u.classList.contains(V4)})}}function IE(d){var l=Wm(),i=Wm();i.className=P4,i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var u=Wm();u.className=mE,u.setAttribute("data-state","hidden"),tE(u,d.props),l.appendChild(i),i.appendChild(u),v(d.props,d.props);function v(g,x){var m=B2(l),h=m.box,I=m.content,w=m.arrow;x.theme?h.setAttribute("data-theme",x.theme):h.removeAttribute("data-theme"),typeof x.animation=="string"?h.setAttribute("data-animation",x.animation):h.removeAttribute("data-animation"),x.inertia?h.setAttribute("data-inertia",""):h.removeAttribute("data-inertia"),h.style.maxWidth=typeof x.maxWidth=="number"?x.maxWidth+"px":x.maxWidth,x.role?h.setAttribute("role",x.role):h.removeAttribute("role"),(g.content!==x.content||g.allowHTML!==x.allowHTML)&&tE(I,d.props),x.arrow?w?g.arrow!==x.arrow&&(h.removeChild(w),h.appendChild(eE(x.arrow))):h.appendChild(eE(x.arrow)):w&&h.removeChild(w)}return{popper:l,onUpdate:v}}IE.$$tippy=!0;var z4=1,F0=[],C2=[];function K4(d,l){var i=Z_(d,Object.assign({},Qd,EE(K_(l)))),u,v,g,x=!1,m=!1,h=!1,I=!1,w,V,y,D=[],E=Y_(Ce,i.interactiveDebounce),F,k=z4++,A=null,G=S4(i.plugins),M={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},b={id:k,reference:d,popper:Wm(),popperInstance:A,props:i,state:M,plugins:G,clearDelayTimeouts:Pe,setProps:$e,setContent:Be,show:Ge,hide:xe,hideWithInteractivity:Ze,enable:ee,disable:Ne,unmount:Qe,destroy:it};if(!i.render)return b;var C=i.render(b),_=C.popper,q=C.onUpdate;_.setAttribute("data-tippy-root",""),_.id="tippy-"+b.id,b.popper=_,d._tippy=b,_._tippy=b;var O=G.map(function(P){return P.fn(b)}),L=d.hasAttribute("aria-expanded");return Q(),he(),H(),re("onCreate",[b]),i.showOnCreate&&Re(),_.addEventListener("mouseenter",function(){b.props.interactive&&b.state.isVisible&&b.clearDelayTimeouts()}),_.addEventListener("mouseleave",function(){b.props.interactive&&b.props.trigger.indexOf("mouseenter")>=0&&ge().addEventListener("mousemove",E)}),b;function j(){var P=b.props.touch;return Array.isArray(P)?P:[P,0]}function Y(){return j()[0]==="hold"}function R(){var P;return!!((P=b.props.render)!=null&&P.$$tippy)}function U(){return F||d}function ge(){var P=U().parentNode;return P?C4(P):document}function ue(){return B2(_)}function K(P){return b.state.isMounted&&!b.state.isVisible||sf.isTouch||w&&w.type==="focus"?0:O2(b.props.delay,P?0:1,Qd.delay)}function H(P){P===void 0&&(P=!1),_.style.pointerEvents=b.props.interactive&&!P?"":"none",_.style.zIndex=""+b.props.zIndex}function re(P,B,$){if($===void 0&&($=!0),O.forEach(function(X){X[P]&&X[P].apply(X,B)}),$){var z;(z=b.props)[P].apply(z,B)}}function Fe(){var P=b.props.aria;if(P.content){var B="aria-"+P.content,$=_.id,z=ym(b.props.triggerTarget||d);z.forEach(function(X){var oe=X.getAttribute(B);if(b.state.isVisible)X.setAttribute(B,oe?oe+" "+$:$);else{var J=oe&&oe.replace($,"").trim();J?X.setAttribute(B,J):X.removeAttribute(B)}})}}function he(){if(!(L||!b.props.aria.expanded)){var P=ym(b.props.triggerTarget||d);P.forEach(function(B){b.props.interactive?B.setAttribute("aria-expanded",b.state.isVisible&&B===U()?"true":"false"):B.removeAttribute("aria-expanded")})}}function ze(){ge().removeEventListener("mousemove",E),F0=F0.filter(function(P){return P!==E})}function we(P){if(!(sf.isTouch&&(h||P.type==="mousedown"))){var B=P.composedPath&&P.composedPath()[0]||P.target;if(!(b.props.interactive&&X_(_,B))){if(ym(b.props.triggerTarget||d).some(function($){return X_($,B)})){if(sf.isTouch||b.state.isVisible&&b.props.trigger.indexOf("click")>=0)return}else re("onClickOutside",[b,P]);b.props.hideOnClick===!0&&(b.clearDelayTimeouts(),b.hide(),m=!0,setTimeout(function(){m=!1}),b.state.isMounted||Ee())}}}function ae(){h=!0}function fe(){h=!1}function qe(){var P=ge();P.addEventListener("mousedown",we,!0),P.addEventListener("touchend",we,kg),P.addEventListener("touchstart",fe,kg),P.addEventListener("touchmove",ae,kg)}function Ee(){var P=ge();P.removeEventListener("mousedown",we,!0),P.removeEventListener("touchend",we,kg),P.removeEventListener("touchstart",fe,kg),P.removeEventListener("touchmove",ae,kg)}function de(P,B){Le(P,function(){!b.state.isVisible&&_.parentNode&&_.parentNode.contains(_)&&B()})}function Ue(P,B){Le(P,B)}function Le(P,B){var $=ue().box;function z(X){X.target===$&&(L2($,"remove",z),B())}if(P===0)return B();L2($,"remove",V),L2($,"add",z),V=z}function N(P,B,$){$===void 0&&($=!1);var z=ym(b.props.triggerTarget||d);z.forEach(function(X){X.addEventListener(P,B,$),D.push({node:X,eventType:P,handler:B,options:$})})}function Q(){Y()&&(N("touchstart",_e,{passive:!0}),N("touchend",me,{passive:!0})),k4(b.props.trigger).forEach(function(P){if(P!=="manual")switch(N(P,_e),P){case"mouseenter":N("mouseleave",me);break;case"focus":N(q4?"focusout":"blur",ie);break;case"focusin":N("focusout",ie);break}})}function Ie(){D.forEach(function(P){var B=P.node,$=P.eventType,z=P.handler,X=P.options;B.removeEventListener($,z,X)}),D=[]}function _e(P){var B,$=!1;if(!(!b.state.isEnabled||Z(P)||m)){var z=((B=w)==null?void 0:B.type)==="focus";w=P,F=P.currentTarget,he(),!b.state.isVisible&&O4(P)&&F0.forEach(function(X){return X(P)}),P.type==="click"&&(b.props.trigger.indexOf("mouseenter")<0||x)&&b.props.hideOnClick!==!1&&b.state.isVisible?$=!0:Re(P),P.type==="click"&&(x=!$),$&&!z&&Te(P)}}function Ce(P){var B=P.target,$=U().contains(B)||_.contains(B);if(!(P.type==="mousemove"&&$)){var z=ne().concat(_).map(function(X){var oe,J=X._tippy,Ve=(oe=J.popperInstance)==null?void 0:oe.state;return Ve?{popperRect:X.getBoundingClientRect(),popperState:Ve,props:i}:null}).filter(Boolean);G4(z,P)&&(ze(),Te(P))}}function me(P){var B=Z(P)||b.props.trigger.indexOf("click")>=0&&x;if(!B){if(b.props.interactive){b.hideWithInteractivity(P);return}Te(P)}}function ie(P){b.props.trigger.indexOf("focusin")<0&&P.target!==U()||b.props.interactive&&P.relatedTarget&&_.contains(P.relatedTarget)||Te(P)}function Z(P){return sf.isTouch?Y()!==P.type.indexOf("touch")>=0:!1}function et(){De();var P=b.props,B=P.popperOptions,$=P.placement,z=P.offset,X=P.getReferenceClientRect,oe=P.moveTransition,J=R()?B2(_).arrow:null,Ve=X?{getBoundingClientRect:X,contextElement:X.contextElement||U()}:d,ke={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(It){var pe=It.state;if(R()){var te=ue(),Ke=te.box;["placement","reference-hidden","escaped"].forEach(function(Me){Me==="placement"?Ke.setAttribute("data-placement",pe.placement):pe.attributes.popper["data-popper-"+Me]?Ke.setAttribute("data-"+Me,""):Ke.removeAttribute("data-"+Me)}),pe.attributes.popper={}}}},le=[{name:"offset",options:{offset:z}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!oe}},ke];R()&&J&&le.push({name:"arrow",options:{element:J,padding:3}}),le.push.apply(le,(B==null?void 0:B.modifiers)||[]),b.popperInstance=D4(Ve,_,Object.assign({},B,{placement:$,onFirstUpdate:y,modifiers:le}))}function De(){b.popperInstance&&(b.popperInstance.destroy(),b.popperInstance=null)}function Se(){var P=b.props.appendTo,B,$=U();b.props.interactive&&P===yE||P==="parent"?B=$.parentNode:B=wE(P,[$]),B.contains(_)||B.appendChild(_),b.state.isMounted=!0,et()}function ne(){return j0(_.querySelectorAll("[data-tippy-root]"))}function Re(P){b.clearDelayTimeouts(),P&&re("onTrigger",[b,P]),qe();var B=K(!0),$=j(),z=$[0],X=$[1];sf.isTouch&&z==="hold"&&X&&(B=X),B?u=setTimeout(function(){b.show()},B):b.show()}function Te(P){if(b.clearDelayTimeouts(),re("onUntrigger",[b,P]),!b.state.isVisible){Ee();return}if(!(b.props.trigger.indexOf("mouseenter")>=0&&b.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(P.type)>=0&&x)){var B=K(!1);B?v=setTimeout(function(){b.state.isVisible&&b.hide()},B):g=requestAnimationFrame(function(){b.hide()})}}function ee(){b.state.isEnabled=!0}function Ne(){b.hide(),b.state.isEnabled=!1}function Pe(){clearTimeout(u),clearTimeout(v),cancelAnimationFrame(g)}function $e(P){if(!b.state.isDestroyed){re("onBeforeUpdate",[b,P]),Ie();var B=b.props,$=Z_(d,Object.assign({},B,K_(P),{ignoreAttributes:!0}));b.props=$,Q(),B.interactiveDebounce!==$.interactiveDebounce&&(ze(),E=Y_(Ce,$.interactiveDebounce)),B.triggerTarget&&!$.triggerTarget?ym(B.triggerTarget).forEach(function(z){z.removeAttribute("aria-expanded")}):$.triggerTarget&&d.removeAttribute("aria-expanded"),he(),H(),q&&q(B,$),b.popperInstance&&(et(),ne().forEach(function(z){requestAnimationFrame(z._tippy.popperInstance.forceUpdate)})),re("onAfterUpdate",[b,P])}}function Be(P){b.setProps({content:P})}function Ge(){var P=b.state.isVisible,B=b.state.isDestroyed,$=!b.state.isEnabled,z=sf.isTouch&&!b.props.touch,X=O2(b.props.duration,0,Qd.duration);if(!(P||B||$||z)&&!U().hasAttribute("disabled")&&(re("onShow",[b],!1),b.props.onShow(b)!==!1)){if(b.state.isVisible=!0,R()&&(_.style.visibility="visible"),H(),qe(),b.state.isMounted||(_.style.transition="none"),R()){var oe=ue(),J=oe.box,Ve=oe.content;F2([J,Ve],0)}y=function(){var le;if(!(!b.state.isVisible||I)){if(I=!0,_.offsetHeight,_.style.transition=b.props.moveTransition,R()&&b.props.animation){var be=ue(),It=be.box,pe=be.content;F2([It,pe],X),J_([It,pe],"visible")}Fe(),he(),z_(C2,b),(le=b.popperInstance)==null||le.forceUpdate(),re("onMount",[b]),b.props.animation&&R()&&Ue(X,function(){b.state.isShown=!0,re("onShown",[b])})}},Se()}}function xe(){var P=!b.state.isVisible,B=b.state.isDestroyed,$=!b.state.isEnabled,z=O2(b.props.duration,1,Qd.duration);if(!(P||B||$)&&(re("onHide",[b],!1),b.props.onHide(b)!==!1)){if(b.state.isVisible=!1,b.state.isShown=!1,I=!1,x=!1,R()&&(_.style.visibility="hidden"),ze(),Ee(),H(!0),R()){var X=ue(),oe=X.box,J=X.content;b.props.animation&&(F2([oe,J],z),J_([oe,J],"hidden"))}Fe(),he(),b.props.animation?R()&&de(z,b.unmount):b.unmount()}}function Ze(P){ge().addEventListener("mousemove",E),z_(F0,E),E(P)}function Qe(){b.state.isVisible&&b.hide(),b.state.isMounted&&(De(),ne().forEach(function(P){P._tippy.unmount()}),_.parentNode&&_.parentNode.removeChild(_),C2=C2.filter(function(P){return P!==b}),b.state.isMounted=!1,re("onHidden",[b]))}function it(){b.state.isDestroyed||(b.clearDelayTimeouts(),b.unmount(),Ie(),delete d._tippy,b.state.isDestroyed=!0,re("onDestroy",[b]))}}function sc(d,l){l===void 0&&(l={});var i=Qd.plugins.concat(l.plugins||[]);N4();var u=Object.assign({},l,{plugins:i}),v=L4(d),g=v.reduce(function(x,m){var h=m&&K4(m,u);return h&&x.push(h),x},[]);return B0(d)?g[0]:g}sc.defaultProps=Qd;sc.setDefaultProps=H4;sc.currentInput=sf;Object.assign({},cE,{effect:function(l){var i=l.state,u={popper:{position:i.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(i.elements.popper.style,u.popper),i.styles=u,i.elements.arrow&&Object.assign(i.elements.arrow.style,u.arrow)}});sc.setDefaultProps({render:IE});function J4(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,F,k,A,G,M,b,C,_,q,O,L,j,Y,R,U,ge,ue,K,H,re,Fe,he,ze,we,ae,fe,qe,Ee,de,Ue,Le,N,Q,Ie,_e,Ce,me,ie,Z,et,De,Se,ne,Re,Te,ee,Ne,Pe,$e,Be,Ge,xe,Ze,Qe,it,P,B,$,z,X,oe,J,Ve,ke,le,be,It,pe,te,Ke,Me,He,ye,Ye,ft,Ae,je,qt,Lt,Oe,yt,Vt,ce,ct,tt,pt,gt,Ct,dt,Rt,Dt,se,vt,kt,Gt,ut,ht,Mt,St,Je,Tt,Xe,wt,st,jt,Qt,mt,ve,rt,Nt,_t,at,ot,Ht,xt,Et,Jt,Ut,At,zt,Ot,Bt,bt,Ms,as,Yt,lt,Xt,ns,vs,W,gs,Pt,os,es,ls,Zs,Fr,ts,cs,ir,Vs,$s,Kt,hs,ks,Lr,Er,Ir,er,ws,or,ds,us,Zr,Cr,ss,Ss,kn,Gr,Ts,Sn,Mr,rs,Dr,Hs,ms,js,ba,Pr,$t,tr,cr,dr,ur,jr,_s,xs,ol,pi,ea,is,vi,Nr,ta,gi,cl,fo,fs,As,Br,Wa,Zt,fr,Vr,pr,Ns,qr,ya,Tn,dl,sr,ps,$l,hi,bs,sa,An,vr,Ya,mi,gr,Es,rr,Os,Bs,Rr,za,xi,hr,Ws,Fs,Ur,On,Fn,Ka,bi,Is,Ls,ra,po,yi,Ln,ar,mr,kr,nr,ul,$r,aa,Ys,Ja,Jc,Xc,na,wi,Zd,vo,_i,xr,ys,Cn,Gn,Xa,Ei,Ii,wa,br,go,Qc,la,Mn,Zc,Di,_a,Qa,jn,lf,ho,Za,en,Ea,Cs,Ia,mo,ia,tn,Da,Pa,Hl,Pi,Vi,Wl,ki,Nn,yr,sn,Bn,rn,ac,ed,xo,fl,oa,Gs,Va,Si,eu,lr,Sr,an,Ti,Ai,nn,ln,Yl,pl,Ds,ka,Oi,Sa,nc,td,wr,zs,vl,qn,qs,Ta,sd,gl,Ks,Fi,tu,Hr,Wr,su,rd,Yr,on,cn,hl,bo,zl,ru,ca,Js,ml,Rn,Li,Ci,da,Un,of,au,yo,Xs,dn,cf,nu,lc,$n,un,ic,lu,Gi,Aa,Hn,xl,wo,df,Wn,bl,_o,Eo,Oa,Yn,fn,iu,oc,yl,cc,wl,Kl,zn,Fa,Io,Mi,pn,_l,La,El,ou,Jl,Kn,cu,ji,Tr,vn,Ca,Ni,Xl,Bi,uf,Do,Ga,Ql,Po,Il,Jn,Qs,ua,Dl,ff,du,fa,qi,Vo,Zl,Ps,Ma,ko,Pl,ad,dc,zr,gn,uu,uc,Kr,hn,Ri,So,Vl,fc,pc,ei,kl,ja,vc,fu,Xn,pa,mn,nd,Ui,gc,Sl,Tl,ti,pu,si,Jr,va,Al,pf,ri,To,Ol,xn,Fl,Ao,hc,Qn,ga,Oo,ld,bn,Na,id,mc,yn,$i,ai,Xr,Zn,vf,Hi,ha,xc,bc,Fo,Ba,yc,wc,Lo,qa,ni,el,Co,Lg,Yv,tl,Ll,od,Cg,cd,vu,zv,_c,Go,_r,Mo,Gg,Kv,gf,gu,jo,No,Mg,Jv,hf,li,Ec,Wi,hu,Xv,Yi,Cl,mf,Qv,wn,Ra,zi,Ic,jg,dd,Bo,ud,fd,Ng,qo,Dc,Zv,xf,Gl,bf,mu,pd,yf,Bg,ev,qg,vd,Pc,Vc,eg,Rg,Ug,Ml,xu,Pm,$g,Hg,gd,Ki,Ji,Vm,kc,tv,Sc,Tc,km,Wg,Yg,Ro,bu,tg,sv,yu,wu,Xi,rv,Ac,sg,zg,Oc,Uo,Kg,Jg,hd,_u,av,Xg,nv,wf,Qg,_f,$o,md,xd,Eu,Sm,Zg,bd,Iu,lv,iv,Du,eh,Pu,Ho,yd,ii,Vu,Tm,wd,th,Ef,Qi,Fc,Am,sh,ku,jl,rh,If,oi,Lc,Ar,Zi,Su,Om,ah,eo,Cc,rg,nh,to,_n,ag,ov,sl,_d,lh,Tu,cv,ih,oh,Au,dv,ch,uv,Wo,dh,Nl,Ed,Id,fv,Gc,Dd,pv,so,Bl,Fm,uh,ro,Pd,Vd,Df,Ou,ng,fh,Ua,vv,gv,ph,Fu,vh,hv,Mc,gh,hh,mv,xv,Lu,mh,bv,En,xh,ql,bh,ao,Yo,no,kd,Sd,yh,yv,lo,Td,wh,wv,_v,Ev,Pf,_h,Cu,Eh,Ad,Vf,zo,lg,Ih,Od,ci,Dh,Ph,Gu,Vh,Iv,Qr,Fd,Ko,kh,jc,Lm,Dv,Ld,Cd,Pv,Vv,kf,Sh,Mu,Gd,Md,Th,Nc,ig,Ah,ju,di,Oh,Fh,Lh,jd,Jo,kv,Nu,og,Ch,Xo,Gh,Nd,Mh,Sv,Tv,Qo,Bd,jh,io,Cm,Nh,Bu,qd,Av,Bh,qh,rl,Rd,Rh,qu,Gm,Ov,Ud,Fv,Sf,Ru,Uh,q0,Lv,Tf,$h,R0,U0,cg,Q2,$0,dg,Hh,H0,W0,Y0,Cv,Zo,Gv,ug,z0,K0,fg,J0,X0,Af,Wh,Mv,Z2,Q0,ec,Of,pg,Z0,ex,Yh,$a,$d,Ff,tx,Lf,sx,Cf,rx,Gf,ax,Mf,nx,vg,jf,lx,Nf,Bf,ix,qf,ox,Rf,cx,Uf,$f,dx,Hf,ux,Wf,fx,ui,Yf,px,zf,vx,Kf,gx,Jf,hx,Xf,mx,Qf,xx,Zf,bx,ep,yx,tp,wx,Hd,sp,_x,rp,Ex,ap,Ix,np,Dx,lp,Px,Bc,ip,Vx,op,kx,cp,Sx,dp,Tx,up,Ax,fp,Ox,fi,pp,Fx,vp,Lx,gp,Cx,hp,Gx,mp,Mx,xp,jx,bp,Nx,yp,Bx,wp,qx,_p,Ep,Rx,Ip,Ux,Dp,$x,gg,Pp,Hx,hg,Vp,Wx,Wd,kp,Yx,Sp,zx,Tp,Kx,Ap,Jx,Op,Xx,jv,Fp,Qx,Lp,Zx,eb,Cp,mg,tb,sb,zh,Rl,Gp,rb,Mp,ab,jp,nb,Np,lb,Bp,ib,qp,ob,Rp,cb,Up,db,$p,ub,Hp,fb,pb,Wp,xg,vb,gb,Kh,Yd,Yp,hb,zp,mb,Kp,xb,Jp,bb,Xp,yb,wb,Xm,_b,Qp,bg,Eb,Ib,Uu,Db,Pb,Vb,kb,$u,Hu,yg,ey,Sb,Mm,Tb,Ab,Wu,wg,ty,Ob,jm,Fb,Lb,zd,_g,sy,Cb,Nm,Gb,Mb,tc,jb,Bm,Nb,Bb,Nv,Jh,qb,Rb,Bv,Xh,Ub,$b,Yu,Eg,ry,Hb,Ig,ay,Wb,Dg,ny,Yb,qm,zb,qc;return{c(){l=s("div"),i=s("div"),u=s("div"),v=o(),g=s("button"),x=f("Expand"),m=o(),h=s("style"),I=f(`#expandElement {
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
    }`),w=o(),V=s("script"),y=f(`const expandElement = document.getElementById('expandElement')
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
    })`),D=o(),E=s("div"),F=o(),k=s("div"),A=o(),G=s("div"),M=o(),b=s("div"),C=o(),_=s("div"),q=s("style"),O=f(`p {
      font-size: 1.2rem;
    }`),L=o(),j=s("div"),Y=s("section"),R=s("div"),U=s("div"),ge=s("h2"),ue=f("Exploration station"),K=o(),H=s("h2"),re=f("Green power from non-recycled waste"),Fe=o(),he=s("p"),ze=f(`Power-from-waste technology can convert non-recycled waste into a myriad of different outputs, including
            electricity, heating, cooling, and biochar, among others`),we=o(),ae=s("a"),fe=s("img"),Ee=o(),de=s("span"),Ue=f("Explore the possibilites"),Le=o(),N=s("div"),Q=s("style"),Ie=f(`#topRightCluster {
              background-image: url('/assets/Group 14.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              padding: 50px;
              background-origin: content-box;
            }
            #topRightCluster img {
              visibility: hidden;
            }`),_e=o(),Ce=s("img"),et=o(),De=s("img"),Te=o(),ee=s("img"),Be=o(),Ge=s("img"),it=o(),P=s("img"),X=o(),oe=s("img"),le=o(),be=s("img"),Ke=o(),Me=s("img"),ft=o(),Ae=s("section"),je=s("style"),qt=f(`#thegrid div {
          padding: 10px 0px 10px 10px;
        }
        #thegrid div.flex {
          padding: 20px 10px 20px 10px;
        }
        #thegrid2 div {
          padding: 15px 40px 15px 40px;
          line-height: 1.5;
          vertical-align: middle;
        }`),Lt=o(),Oe=s("h2"),yt=f("How it works"),Vt=o(),ce=s("div"),ct=s("div"),tt=s("div"),pt=s("img"),Ct=o(),dt=s("div"),Rt=f("Plastic waste"),Dt=o(),se=s("div"),vt=s("div"),kt=s("img"),ut=o(),ht=s("div"),Mt=f("Food waste"),St=o(),Je=s("div"),Tt=s("div"),Xe=s("img"),st=o(),jt=s("div"),Qt=f("Animal waste"),mt=o(),ve=s("div"),rt=s("div"),Nt=s("img"),at=o(),ot=s("div"),Ht=f("Agricultural waste"),xt=o(),Et=s("div"),Jt=s("div"),Ut=s("img"),zt=o(),Ot=s("div"),Bt=f("Wood waste"),bt=o(),Ms=s("div"),as=f("Power from waste technology"),Yt=o(),lt=s("div"),Xt=s("div"),ns=o(),vs=s("div"),W=f(" "),gs=o(),Pt=s("div"),os=f(" "),es=o(),ls=s("div"),Zs=f(" "),Fr=o(),ts=s("div"),cs=f(" "),ir=o(),Vs=s("div"),$s=o(),Kt=s("div"),hs=s("div"),ks=f("Liquid fertiliser"),Lr=o(),Er=s("div"),Ir=f("Solid digestate"),er=o(),ws=s("div"),or=f("Biogas"),ds=o(),us=s("div"),Zr=f("Syngas"),Cr=o(),ss=s("div"),Ss=f("Bio-oil"),kn=o(),Gr=s("div"),Ts=f("Biochar"),Sn=o(),Mr=s("div"),rs=s("div"),Dr=f("Heat / Cool"),Hs=o(),ms=s("div"),js=s("div"),ba=f("Electricity"),Pr=o(),$t=s("h1"),tr=s("div"),cr=s("div"),dr=s("div"),ur=s("img"),_s=o(),xs=s("div"),ol=s("style"),pi=f(`p {
                font-size: 1.2rem;
              }`),ea=o(),is=s("h2"),vi=f("Exploration station"),Nr=o(),ta=s("div"),gi=f("Interact with our exploration "),cl=s("br"),fo=f(`
              station to learn more`),fs=o(),As=s("p"),Br=f(`Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you!`),Wa=o(),Zt=s("div"),fr=s("style"),Vr=f(`.cow-element {
            /* overflow: visible !important; */
            box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
          }`),pr=o(),Ns=s("div"),qr=s("div"),ya=s("script"),Tn=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),dl=o(),sr=s("button"),ps=s("img"),hi=o(),bs=s("div"),sa=s("div"),An=s("div"),vr=s("img"),mi=o(),gr=s("div"),Es=s("h1"),rr=f("Cow manure"),Os=o(),Bs=s("p"),Rr=s("span"),za=f("Biogas Yield:"),xi=f(`
                  0.18m³/kg
                  `),hr=s("img"),Fs=o(),Ur=s("p"),On=s("span"),Fn=f("Energy content:"),Ka=f(`
                  Low`),bi=o(),Is=s("div"),Ls=s("button"),ra=s("img"),yi=f(`
                High organic content`),Ln=o(),ar=s("button"),mr=s("img"),nr=f(`
                High nutrient content`),ul=o(),$r=s("div"),aa=s("button"),Ys=s("img"),Jc=f(`
                High nitrogen content`),Xc=o(),na=s("button"),wi=s("img"),vo=f(`
                Low pH levels`),_i=o(),xr=s("div"),ys=s("img"),Gn=o(),Xa=s("h1"),Ei=s("a"),Ii=f("Case study"),wa=o(),br=s("img"),Qc=o(),la=s("div"),Mn=s("h2"),Zc=f("600 dairy cows or 3500 tonnes of cow manure per year"),Di=o(),_a=s("ul"),Qa=s("li"),jn=f("Produces 656m³ biogas every day"),lf=o(),ho=s("li"),Za=f("Ability to power 187 UK households every day"),en=o(),Ea=s("div"),Cs=s("div"),Ia=s("div"),mo=s("div"),ia=s("img"),Da=o(),Pa=s("div"),Hl=s("h1"),Pi=f("Most appropriate technology"),Vi=o(),Wl=s("p"),ki=f("Anaerobic Digestion"),Nn=o(),yr=s("div"),sn=s("a"),Bn=s("button"),rn=s("img"),ed=f(`
                    Start your project`),xo=o(),fl=s("a"),oa=s("button"),Gs=s("img"),Si=f(`
                    Learn more`),eu=o(),lr=s("div"),Sr=s("div"),an=s("script"),Ti=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),Ai=o(),nn=s("button"),ln=s("img"),pl=o(),Ds=s("div"),ka=s("div"),Oi=s("div"),Sa=s("img"),td=o(),wr=s("div"),zs=s("h1"),vl=f("Food waste"),qn=o(),qs=s("p"),Ta=s("span"),sd=f("Biogas Yield:"),gl=f(`
                  0.45m³/kg
                  `),Ks=s("img"),tu=o(),Hr=s("p"),Wr=s("span"),su=f("Energy content:"),rd=f(`
                  High`),Yr=o(),on=s("div"),cn=s("button"),hl=s("img"),zl=f(`
                High organic content`),ru=o(),ca=s("button"),Js=s("img"),Rn=f(`
                High nutrient content`),Li=o(),Ci=s("div"),da=s("button"),Un=s("img"),au=f(`
                Medium nitrogen content`),yo=o(),Xs=s("button"),dn=s("img"),nu=f(`
                Low pH levels`),lc=o(),$n=s("div"),un=s("img"),lu=o(),Gi=s("h1"),Aa=s("a"),Hn=f("Case study"),xl=o(),wo=s("img"),Wn=o(),bl=s("div"),_o=s("h2"),Eo=f("100 people or 250 tonnes of food waste per year"),Oa=o(),Yn=s("ul"),fn=s("li"),iu=f("Produces 156m³ biogas every day"),oc=o(),yl=s("li"),cc=f("Ability to power 19 UK households every day"),wl=o(),Kl=s("div"),zn=s("div"),Fa=s("div"),Io=s("div"),Mi=s("img"),_l=o(),La=s("div"),El=s("h1"),ou=f("Most appropriate technology"),Jl=o(),Kn=s("p"),cu=f("Anaerobic Digestion"),ji=o(),Tr=s("div"),vn=s("a"),Ca=s("button"),Ni=s("img"),Bi=f(`
                    Start your project`),uf=o(),Do=s("a"),Ga=s("button"),Ql=s("img"),Il=f(`
                    Learn more`),Jn=o(),Qs=s("div"),ua=s("div"),Dl=s("script"),ff=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),du=o(),fa=s("button"),qi=s("img"),Zl=o(),Ps=s("div"),Ma=s("div"),ko=s("div"),Pl=s("img"),dc=o(),zr=s("div"),gn=s("h1"),uu=f("PE plastic"),uc=o(),Kr=s("p"),hn=s("span"),Ri=f("GCV:"),So=f(`
                  46 MJ/kg
                  `),Vl=s("img"),pc=o(),ei=s("p"),kl=s("span"),ja=f("Energy content:"),vc=f(`
                  Very high`),fu=o(),Xn=s("div"),pa=s("button"),mn=s("img"),Ui=f(`
                Very low organic content`),gc=o(),Sl=s("button"),Tl=s("img"),pu=f(`
                Very low nutrient content`),si=o(),Jr=s("div"),va=s("button"),Al=s("img"),ri=f(`
                Very low nitrogen content`),To=o(),Ol=s("button"),xn=s("img"),Ao=f(`
                PET bottles`),hc=o(),Qn=s("div"),ga=s("img"),ld=o(),bn=s("h1"),Na=s("a"),id=f("Case study"),mc=o(),yn=s("img"),ai=o(),Xr=s("div"),Zn=s("h2"),vf=f("10000 PET bottles or 100 tonnes of plastic per year"),Hi=o(),ha=s("ul"),xc=s("li"),bc=f("Produces 75kWh every day"),Fo=o(),Ba=s("li"),yc=f("Ability to power 63 UK households every day"),wc=o(),Lo=s("div"),qa=s("div"),ni=s("div"),el=s("div"),Co=s("img"),Yv=o(),tl=s("div"),Ll=s("h1"),od=f("Most appropriate technology"),Cg=o(),cd=s("p"),vu=f("Pyrolysis"),zv=o(),_c=s("div"),Go=s("a"),_r=s("button"),Mo=s("img"),Kv=f(`
                    Start your project`),gf=o(),gu=s("a"),jo=s("button"),No=s("img"),Jv=f(`
                    Learn more`),hf=o(),li=s("div"),Ec=s("div"),Wi=s("script"),hu=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),Xv=o(),Yi=s("button"),Cl=s("img"),Qv=o(),wn=s("div"),Ra=s("div"),zi=s("div"),Ic=s("img"),dd=o(),Bo=s("div"),ud=s("h1"),fd=f("Technology"),Ng=o(),qo=s("p"),Dc=s("span"),Zv=f("GCV:"),xf=f(`
                  N/A MJ/kg
                  `),Gl=s("img"),mu=o(),pd=s("p"),yf=s("span"),Bg=f("Energy content:"),ev=f(`
                  High`),qg=o(),vd=s("div"),Pc=s("button"),Vc=s("img"),Rg=f(`
                High organic content`),Ug=o(),Ml=s("button"),xu=s("img"),$g=f(`
                High nutrient content`),Hg=o(),gd=s("div"),Ki=s("button"),Ji=s("img"),kc=f(`
                High nitrogen content`),tv=o(),Sc=s("button"),Tc=s("img"),Wg=f(`
                Latest technology`),Yg=o(),Ro=s("div"),bu=s("img"),sv=o(),yu=s("h1"),wu=s("a"),Xi=f("Case study"),rv=o(),Ac=s("img"),zg=o(),Oc=s("div"),Uo=s("h2"),Kg=f("600 dairy cows or 3500 tonnes of cow manure per year"),Jg=o(),hd=s("ul"),_u=s("li"),av=f("Produces 656m³ biogas every day"),Xg=o(),nv=s("li"),wf=f("Ability to power 187 UK households every day"),Qg=o(),_f=s("div"),$o=s("div"),md=s("div"),xd=s("div"),Eu=s("img"),Zg=o(),bd=s("div"),Iu=s("h1"),lv=f("Most appropriate technology"),iv=o(),Du=s("p"),eh=f("New Technology"),Pu=o(),Ho=s("div"),yd=s("a"),ii=s("button"),Vu=s("img"),wd=f(`
                    Start your project`),th=o(),Ef=s("a"),Qi=s("button"),Fc=s("img"),sh=f(`
                    Learn more`),ku=o(),jl=s("div"),rh=o(),If=s("section"),oi=s("div"),Lc=s("div"),Ar=s("div"),Zi=s("button"),Su=s("img"),ah=o(),eo=s("button"),Cc=s("img"),nh=o(),to=s("button"),_n=s("img"),ov=o(),sl=s("button"),_d=s("div"),lh=f("Technology"),Tu=o(),cv=s("style"),ih=f(`@keyframes bounce {
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
              }`),oh=o(),Au=s("script"),dv=f("const animatedElements = document.querySelectorAll('.techbuttons')\n\n              animatedElements.forEach(element => {\n                const randomDelay = Math.floor(Math.random() * 1000) // Generate a random delay between 0 and 1000 milliseconds\n                element.style.animationDelay = `${randomDelay}ms`\n                element.style.animationDuration = `${1000 + randomDelay}ms`\n              })"),ch=o(),uv=s("style"),Wo=f(`.growbutton:hover {
              box-shadow: 0 0 5px 1px white;
            }
            .growbutton img {
              max-width: 190%;
            }`),dh=o(),Nl=s("div"),Ed=s("div"),Id=s("input"),fv=o(),Gc=s("button"),Dd=s("span"),pv=o(),so=s("button"),Bl=s("img"),uh=o(),ro=s("h1"),Pd=s("div"),Vd=s("div"),Df=s("div"),Ou=s("img"),fh=o(),Ua=s("div"),vv=s("style"),gv=f(`p {
                font-size: 1.2rem;
              }`),ph=o(),Fu=s("h2"),vh=f("The PFP Calculator"),hv=o(),Mc=s("div"),gh=f(`Find the right technology
              `),hh=s("br"),mv=f(`
              for your needs`),xv=o(),Lu=s("p"),mh=f(`We will assist you every step of the way to ensure a smooth and successful implementation of your power-from-waste
              project`),bv=o(),En=s("div"),xh=o(),ql=s("div"),bh=o(),ao=s("section"),Yo=s("div"),no=s("div"),kd=s("div"),Sd=s("p"),yh=f("Waste type"),yv=o(),lo=s("h2"),Td=s("span"),wh=f("PE Plastic"),wv=o(),_v=s("br"),Ev=o(),Pf=s("span"),_h=f("10,000 tonnes"),Cu=f(`
               per day`),Eh=o(),Ad=s("div"),Vf=s("div"),zo=s("img"),Ih=o(),Od=s("div"),ci=s("h3"),Dh=f("Most appropriate technology"),Ph=o(),Gu=s("h2"),Vh=f("Pyrolysis"),Iv=o(),Qr=s("div"),Fd=s("div"),Ko=s("div"),kh=f("Energy content "),jc=s("img"),Dv=o(),Ld=s("div"),Cd=s("span"),Pv=f("18"),Vv=o(),kf=s("span"),Sh=f("MJ/kg"),Mu=o(),Gd=s("div"),Md=s("div"),Th=f("Heat produced "),Nc=s("img"),Ah=o(),ju=s("div"),di=s("span"),Oh=f("11,200"),Fh=f(`
              kWh per year`),Lh=o(),jd=s("div"),Jo=s("div"),kv=f("Heat savings "),Nu=s("img"),Ch=o(),Xo=s("div"),Gh=f(`£
              `),Nd=s("span"),Mh=f("48,000"),Sv=f(`
              per year`),Tv=o(),Qo=s("div"),Bd=s("div"),jh=f("Electricity produced "),io=s("img"),Nh=o(),Bu=s("div"),qd=s("span"),Av=f("4,800"),Bh=f(`
              kWh per year`),qh=o(),rl=s("div"),Rd=s("div"),Rh=f("Electrical savings "),qu=s("img"),Ov=o(),Ud=s("div"),Fv=f(`£
              `),Sf=s("span"),Ru=f("70,000"),Uh=f(`
              per year`),q0=o(),Lv=s("div"),Tf=s("div"),$h=s("span"),R0=f("Char"),U0=f(`
               produced
              `),cg=s("img"),$0=o(),dg=s("div"),Hh=s("span"),H0=f("500"),W0=f(`
              kg per year`),Y0=o(),Cv=s("section"),Zo=s("div"),Gv=s("div"),ug=s("h1"),z0=f("The PFP Calculator"),K0=o(),fg=s("p"),J0=f(`Our easy-to-use calculator is here to give you a quick snapshot of what your waste-to-energy project could look
            like. It helps you identify the most suitable technology and estimate energy output, serving as a valuable first
            step in your journey to green power. Think of it as a helpful starting point!`),X0=o(),Af=s("div"),Wh=s("div"),Mv=s("img"),Q0=o(),ec=s("div"),Of=s("div"),pg=s("button"),Z0=f("Waste type"),ex=o(),Yh=s("div"),$a=s("select"),$d=s("optgroup"),Ff=s("option"),tx=f("Beer production"),Lf=s("option"),sx=f("Wine production"),Cf=s("option"),rx=f("Spirits production"),Gf=s("option"),ax=f("Ethanol production"),Mf=s("option"),nx=f("Juice production"),vg=s("optgroup"),jf=s("option"),lx=f("Biodiesel production"),Nf=s("optgroup"),Bf=s("option"),ix=f("Ceramics"),qf=s("option"),ox=f("Sand"),Rf=s("option"),cx=f("Dust"),Uf=s("optgroup"),$f=s("option"),dx=f("Cheese production"),Hf=s("option"),ux=f("Butter production"),Wf=s("option"),fx=f("Ice cream"),ui=s("optgroup"),Yf=s("option"),px=f("Pulp production"),zf=s("option"),vx=f("Tomato ketchup"),Kf=s("option"),gx=f("Frozen potatoes"),Jf=s("option"),hx=f("Prepared potatoes (crisps)"),Xf=s("option"),mx=f("Potato starch"),Qf=s("option"),xx=f("Dried potatoes"),Zf=s("option"),bx=f("Sugar production"),ep=s("option"),yx=f("Yeast production"),tp=s("option"),wx=f("Vegetable oils production"),Hd=s("optgroup"),sp=s("option"),_x=f("Coffee grounds"),rp=s("option"),Ex=f("Crop residues"),ap=s("option"),Ix=f("Maize silage"),np=s("option"),Dx=f("Cereal"),lp=s("option"),Px=f("Grass silage"),Bc=s("optgroup"),ip=s("option"),Vx=f("Pulp & Paper Waste"),op=s("option"),kx=f("Textile Waste"),cp=s("option"),Sx=f("SRF"),dp=s("option"),Tx=f("RDF"),up=s("option"),Ax=f("Rubber"),fp=s("option"),Ox=f("Wood waste"),fi=s("optgroup"),pp=s("option"),Fx=f("Pig manure"),vp=s("option"),Lx=f("Dairy Cattle"),gp=s("option"),Cx=f("Non diary cattle"),hp=s("option"),Gx=f("Buffalo"),mp=s("option"),Mx=f("Chicken layer manure"),xp=s("option"),jx=f("Chicken broiler manure"),bp=s("option"),Nx=f("Sheep"),yp=s("option"),Bx=f("Food waste"),wp=s("option"),qx=f("Fish waste"),_p=s("optgroup"),Ep=s("option"),Rx=f("Bovine meat"),Ip=s("option"),Ux=f("Pig meat"),Dp=s("option"),$x=f("Sheep meat"),gg=s("optgroup"),Pp=s("option"),Hx=f("Medical Waste"),hg=s("optgroup"),Vp=s("option"),Wx=f("Municipal Solid Waste (MSW)"),Wd=s("optgroup"),kp=s("option"),Yx=f("PE Plastic"),Sp=s("option"),zx=f("PP Plastic"),Tp=s("option"),Kx=f("PS Plastic"),Ap=s("option"),Jx=f("PVC Plastic"),Op=s("option"),Xx=f("PET Plastic"),jv=s("optgroup"),Fp=s("option"),Qx=f("Glass"),Lp=s("option"),Zx=f("Metals"),eb=o(),Cp=s("div"),mg=s("button"),tb=f("Kilograms per day"),sb=o(),zh=s("div"),Rl=s("select"),Gp=s("option"),rb=f("5 kg"),Mp=s("option"),ab=f("10 kg"),jp=s("option"),nb=f("100 kg"),Np=s("option"),lb=f("400 kg"),Bp=s("option"),ib=f("1000 kg"),qp=s("option"),ob=f("4000 kg"),Rp=s("option"),cb=f("10,000 kg"),Up=s("option"),db=f("20,000 kg"),$p=s("option"),ub=f("40,000 kg"),Hp=s("option"),fb=f("> 40,000 kg"),pb=o(),Wp=s("div"),xg=s("button"),vb=f("Client needs"),gb=o(),Kh=s("div"),Yd=s("select"),Yp=s("option"),hb=f("Electricity"),zp=s("option"),mb=f("Heating / Cooling"),Kp=s("option"),xb=f("Carbon credits"),Jp=s("option"),bb=f("Cooking biogas"),Xp=s("option"),yb=f("Fertiliser"),wb=o(),Xm=s("div"),_b=o(),Qp=s("div"),bg=s("div"),Eb=f("Your project is feasible"),Ib=o(),Uu=s("p"),Db=f(`Review your results to explore the different possibilities and
            `),Pb=s("br"),Vb=f(`
            book a slot with us for personalised guidance on next steps`),kb=o(),$u=s("div"),Hu=s("a"),yg=s("img"),Sb=o(),Mm=s("span"),Tb=f("Book a call with us"),Ab=o(),Wu=s("a"),wg=s("img"),Ob=o(),jm=s("span"),Fb=f("Learn more"),Lb=o(),zd=s("button"),_g=s("img"),Cb=o(),Nm=s("span"),Gb=f("Calculate"),Mb=o(),tc=s("div"),jb=o(),Bm=s("script"),Nb=f(`function calculate() {
        const data = {
          Ceramics: {
            feasibility: 'N'
          },
          Sand: { feasibility: 'N' },
          Dust: { feasibility: 'N' },
          Glass: { feasibility: 'N' },
          Metals: { feasibility: 'N' },
          'Cheese production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Butter production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Ice cream': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Beer production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Wine production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Spirits production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Ethanol production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Pulp production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Juice production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 45.0,
            electricityproduced: 35469.29475,
            heatproduced: 32631.75117,
            electricitysavingspa: 12414.2531625,
            heatsavingspa: 2284.2225819,
            fertiliser: 28835
          },
          'Tomato ketchup': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 45.0,
            electricityproduced: 35469.29475,
            heatproduced: 32631.75117,
            electricitysavingspa: 12414.2531625,
            heatsavingspa: 2284.2225819,
            fertiliser: 28835
          },
          'Bovine meat': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Pig meat': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Sheep meat': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Frozen potatoes': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Prepared potatoes (crisps)': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Potato starch': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Dried potatoes': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Sugar production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Yeast production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 35.0,
            electricityproduced: 27587.22925,
            heatproduced: 25380.25091,
            electricitysavingspa: 9655.5302375,
            heatsavingspa: 1776.6175637,
            fertiliser: 28835
          },
          'Vegetable oils production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 40.0,
            electricityproduced: 31528.262,
            heatproduced: 29006.00104,
            electricitysavingspa: 11034.8917,
            heatsavingspa: 2030.4200728,
            fertiliser: 28835
          },
          'Biodiesel production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Pig manure': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 45.0,
            electricityproduced: 35469.29475,
            heatproduced: 32631.75117,
            electricitysavingspa: 12414.2531625,
            heatsavingspa: 2284.2225819,
            fertiliser: 28835
          },
          'Dairy Cattle': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 24.0,
            electricityproduced: 18916.9572,
            heatproduced: 17403.600624,
            electricitysavingspa: 6620.93502,
            heatsavingspa: 1218.25204368,
            fertiliser: 28835
          },
          'Non diary cattle': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 18.0,
            electricityproduced: 14187.7179,
            heatproduced: 13052.700468,
            electricitysavingspa: 4965.701265,
            heatsavingspa: 913.68903276,
            fertiliser: 28835
          },
          Buffalo: {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 10.0,
            electricityproduced: 7882.0655,
            heatproduced: 7251.50026,
            electricitysavingspa: 2758.722925,
            heatsavingspa: 507.6050182,
            fertiliser: 28835
          },
          'Chicken layer manure': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 39.0,
            electricityproduced: 30740.05545,
            heatproduced: 28280.851014,
            electricitysavingspa: 10759.0194075,
            heatsavingspa: 1979.65957098,
            fertiliser: 28835
          },
          'Chicken broiler manure': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 36.0,
            electricityproduced: 28375.4358,
            heatproduced: 26105.400936,
            electricitysavingspa: 9931.40253,
            heatsavingspa: 1827.37806552,
            fertiliser: 28835
          },
          Sheep: {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 19.0,
            electricityproduced: 14975.92445,
            heatproduced: 13777.850494,
            electricitysavingspa: 5241.5735575,
            heatsavingspa: 964.44953458,
            fertiliser: 28835
          },
          'Food waste': {
            feasibility: 'Y',
            limit: 5,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 45.0,
            electricityproduced: 35469.29,
            heatproduced: 32631.75,
            electricitysavingspa: 12414.25,
            heatsavingspa: 2284.22,
            fertiliser: 28835
          },
          'Fish waste': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Coffee grounds': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Crop residues': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Maize silage': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          Cereal: {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Grass silage': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Pulp & Paper Waste': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 13.5,
            electricityproduced: 410953.5,
            heatproduced: 684922.5,
            electricitysavingspa: 143833.725,
            heatsavingspa: 47944.575,
            fertiliser: 91250
          },
          'Textile Waste': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 17.0,
            electricityproduced: 517497.0,
            heatproduced: 862495.0,
            electricitysavingspa: 181123.95,
            heatsavingspa: 60374.65,
            fertiliser: 91250
          },
          'PE Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 46.0,
            electricityproduced: 1400286.0,
            heatproduced: 2333810.0,
            electricitysavingspa: 490100.1,
            heatsavingspa: 163366.7,
            fertiliser: 91250
          },
          SRF: {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 22.0,
            electricityproduced: 669702.0,
            heatproduced: 1116170.0,
            electricitysavingspa: 234395.7,
            heatsavingspa: 78131.9,
            fertiliser: 91250
          },
          RDF: {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 18.0,
            electricityproduced: 547938.0,
            heatproduced: 913230.0000000001,
            electricitysavingspa: 191778.3,
            heatsavingspa: 63926.1,
            fertiliser: 91250
          },
          'PP Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 46.0,
            electricityproduced: 1400286.0,
            heatproduced: 2333810.0,
            electricitysavingspa: 490100.1,
            heatsavingspa: 163366.7,
            fertiliser: 91250
          },
          'PS Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 46.0,
            electricityproduced: 1400286.0,
            heatproduced: 2333810.0,
            electricitysavingspa: 490100.1,
            heatsavingspa: 163366.7,
            fertiliser: 91250
          },
          'PVC Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 25.0,
            electricityproduced: 761025.0,
            heatproduced: 1268375.0,
            electricitysavingspa: 266358.75,
            heatsavingspa: 88786.25,
            fertiliser: 91250
          },
          'PET Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 18.0,
            electricityproduced: 547938.0,
            heatproduced: 913230.0000000001,
            electricitysavingspa: 191778.3,
            heatsavingspa: 63926.1,
            fertiliser: 91250
          },
          Rubber: {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 17.0,
            electricityproduced: 517497.0,
            heatproduced: 862495.0,
            electricitysavingspa: 181123.95,
            heatsavingspa: 60374.65,
            fertiliser: 91250
          },
          'Wood waste': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 14.0,
            electricityproduced: 426174.0,
            heatproduced: 710290.0,
            electricitysavingspa: 149160.9,
            heatsavingspa: 49720.3,
            fertiliser: 91250
          },
          'Municipal Solid Waste (MSW)': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 2.0,
            electricityproduced: 60882.0,
            heatproduced: 101470.0,
            electricitysavingspa: 21308.7,
            heatsavingspa: 7102.9,
            fertiliser: 91250
          },
          'Medical Waste': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 18.0,
            electricityproduced: 547938.0,
            heatproduced: 913230.0000000001,
            electricitysavingspa: 191778.3,
            heatsavingspa: 63926.1,
            fertiliser: 91250
          }
        }

        var d = data[document.querySelector('#colorselector').value]
        var feasible = d['feasibility'] == 'Y'
        var wt1 = document.querySelector('#colorselector')
        document.querySelector('#waste-type1').innerHTML = wt1.options[wt1.selectedIndex].text

        var wt2 = document.querySelector('#colorselector2')
        document.querySelector('#waste-type2').innerHTML = wt2.options[wt2.selectedIndex].text

        var minlimit = d['limit'] <= wt2.options[wt2.selectedIndex].value

        document.querySelector('#feasible').innerHTML = feasible
          ? minlimit
            ? 'Your project is feasible'
            : 'This feedstock amount is <u style="color:#ec8b5a;">too small</u>'
          : wt1.options[wt1.selectedIndex].text + ' feedstock is <u style="color:#ec8b5a;">not</u> feasible'

        // document.querySelectorAll('.nofood').classList.toggle('hidden', wt1.value != 'Food waste')
        // document.querySelectorAll('.food').classList.toggle('hidden', wt1.value == 'Food waste')
        
        document.querySelector('#feasible-results').innerHTML =
          !feasible || minlimit
            ? // ? 'Review your results to explore the different possibilities and<br />book a slot with us for personalised guidance on next steps'
              "Take a look at the results below to find out how much you could save on energy bills, not to mention waste disposal costs! If you're curious about the investment (CAPEX), reach out and we'll dive deeper with a comprehensive feasibility study!"
            : d['technology'] == 'Pyrolysis'
            ? "To get the best out of <b>Pyrolysis</b>, you'll need at least<br /><b>" +
              d['limit'] +
              '</b> kilograms of <b>' +
              wt1.options[wt1.selectedIndex].text +
              '</b> waste per day.'
            : 'For cost-effective <b>Anaerobic Digestion</b> of <b>' +
              wt1.options[wt1.selectedIndex].text +
              "</b><br />waste you'll need a daily input of at least <b>" +
              d['limit'] +
              '</b> kilograms.'

        if (!feasible || minlimit) document.querySelector('#feasible').classList.toggle('mt-[-24px]')

        if (feasible & minlimit) {
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

          const techs = { 'Anaerobic Digestion': 'Anaerobic Digestion', Pyrolysis: 'Pyrolysis' }
          document.querySelector('#matched-tech').innerHTML = techs[d['technology']]
          document.querySelector('#matched-img').src = '/assets/medres/' + d['technology'] + '1.jpg'

          for (var key in d) {
            if (key != 'feasibility') {
              var el = document.querySelector('#' + key)
              if (el) {
                el.innerHTML = Math.round(d[key] * (key == 'energycontent' ? 1 : wt2.value / d['kgperday']), 0).toLocaleString()
              }
            }
          }

          document.querySelector('#energycontent-unit').innerHTML = d['technology'] == 'Pyrolysis' ? 'MJ/kg' : 'm³ biogas'
          document.querySelector('#char-fert').innerHTML = d['technology'] == 'Pyrolysis' ? 'Char' : 'Fertiliser'
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
      }`),Bb=o(),Nv=s("div"),Jh=s("div"),qb=f("Copyright © 2023 Power for Planet"),Rb=o(),Bv=s("div"),Xh=s("div"),Ub=f("Privacy Policy"),$b=o(),Yu=s("div"),Eg=s("img"),Hb=o(),Ig=s("img"),Wb=o(),Dg=s("img"),Yb=o(),qm=s("script"),zb=f(`function toggleElement(k) {
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
    }, 100)

    function sortCombo(comboBoxId) {
      //get drop down
      let comboBox = document.getElementById(comboBoxId)

      //create array for storage
      let optionsText = []
      let optionsTextSorted = []
      let optionsValues = []
      let sortedOptionsAll = []

      //store in the array
      Array.from(comboBox.options).forEach(x => {
        optionsText.push(x.text)
        optionsValues.push(x.value)
      })

      optionsTextSorted = [...optionsText]
      optionsTextSorted.sort()
      optionsTextSorted.forEach(x => {
        sortedOptionsAll.push({ value: optionsValues[optionsText.indexOf(x)], text: x })
      })

      //clear the combo box
      Array.from(comboBox.options).forEach(x => (x.text = ''))

      //fill the combobox
      for (let i = 0; i < sortedOptionsAll.length; i++) {
        document.getElementById(comboBoxId)[i].text = sortedOptionsAll[i].text
        document.getElementById(comboBoxId)[i].value = sortedOptionsAll[i].value
      }
    }

    // setTimeout(() => {
    //   sortCombo('colorselector')
    // }, 200)`),this.h()},l(Ft){l=r(Ft,"DIV",{style:!0});var ma=n(l);i=r(ma,"DIV",{class:!0});var ly=n(i);u=r(ly,"DIV",{id:!0,class:!0});var DE=n(u);DE.forEach(a),ly.forEach(a),v=c(ma),g=r(ma,"BUTTON",{id:!0,class:!0});var iy=n(g);x=p(iy,"Expand"),iy.forEach(a),m=c(ma),h=r(ma,"STYLE",{});var oy=n(h);I=p(oy,`#expandElement {
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
    }`),oy.forEach(a),w=c(ma),V=r(ma,"SCRIPT",{});var cy=n(V);y=p(cy,`const expandElement = document.getElementById('expandElement')
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
    })`),cy.forEach(a),ma.forEach(a),D=c(Ft),E=r(Ft,"DIV",{class:!0,id:!0}),n(E).forEach(a),F=c(Ft),k=r(Ft,"DIV",{class:!0,id:!0}),n(k).forEach(a),A=c(Ft),G=r(Ft,"DIV",{class:!0,id:!0}),n(G).forEach(a),M=c(Ft),b=r(Ft,"DIV",{class:!0,id:!0}),n(b).forEach(a),C=c(Ft),_=r(Ft,"DIV",{class:!0});var Qh=n(_);q=r(Qh,"STYLE",{});var dy=n(q);O=p(dy,`p {
      font-size: 1.2rem;
    }`),dy.forEach(a),L=c(Qh),j=r(Qh,"DIV",{class:!0});var In=n(j);Y=r(In,"SECTION",{class:!0});var uy=n(Y);R=r(uy,"DIV",{class:!0});var Qm=n(R);U=r(Qm,"DIV",{class:!0});var qv=n(U);ge=r(qv,"H2",{class:!0});var fy=n(ge);ue=p(fy,"Exploration station"),fy.forEach(a),K=c(qv),H=r(qv,"H2",{class:!0});var py=n(H);re=p(py,"Green power from non-recycled waste"),py.forEach(a),Fe=c(qv),he=r(qv,"P",{class:!0});var vy=n(he);ze=p(vy,`Power-from-waste technology can convert non-recycled waste into a myriad of different outputs, including
            electricity, heating, cooling, and biochar, among others`),vy.forEach(a),we=c(qv),ae=r(qv,"A",{class:!0,href:!0});var Zm=n(ae);fe=r(Zm,"IMG",{class:!0,src:!0,alt:!0}),Ee=c(Zm),de=r(Zm,"SPAN",{});var gy=n(de);Ue=p(gy,"Explore the possibilites"),gy.forEach(a),Zm.forEach(a),qv.forEach(a),Le=c(Qm),N=r(Qm,"DIV",{class:!0,id:!0});var Dn=n(N);Q=r(Dn,"STYLE",{});var hy=n(Q);Ie=p(hy,`#topRightCluster {
              background-image: url('/assets/Group 14.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              padding: 50px;
              background-origin: content-box;
            }
            #topRightCluster img {
              visibility: hidden;
            }`),hy.forEach(a),_e=c(Dn),Ce=r(Dn,"IMG",{class:!0,src:!0,alt:!0}),et=c(Dn),De=r(Dn,"IMG",{class:!0,src:!0,alt:!0}),Te=c(Dn),ee=r(Dn,"IMG",{class:!0,src:!0,alt:!0}),Be=c(Dn),Ge=r(Dn,"IMG",{class:!0,src:!0,alt:!0}),it=c(Dn),P=r(Dn,"IMG",{class:!0,src:!0,alt:!0}),X=c(Dn),oe=r(Dn,"IMG",{class:!0,src:!0,alt:!0}),le=c(Dn),be=r(Dn,"IMG",{class:!0,src:!0,alt:!0}),Ke=c(Dn),Me=r(Dn,"IMG",{class:!0,src:!0,alt:!0}),Dn.forEach(a),Qm.forEach(a),uy.forEach(a),ft=c(In),Ae=r(In,"SECTION",{class:!0,style:!0});var Ul=n(Ae);je=r(Ul,"STYLE",{});var my=n(je);qt=p(my,`#thegrid div {
          padding: 10px 0px 10px 10px;
        }
        #thegrid div.flex {
          padding: 20px 10px 20px 10px;
        }
        #thegrid2 div {
          padding: 15px 40px 15px 40px;
          line-height: 1.5;
          vertical-align: middle;
        }`),my.forEach(a),Lt=c(Ul),Oe=r(Ul,"H2",{class:!0});var xy=n(Oe);yt=p(xy,"How it works"),xy.forEach(a),Vt=c(Ul),ce=r(Ul,"DIV",{class:!0,id:!0});var zu=n(ce);ct=r(zu,"DIV",{class:!0});var e1=n(ct);tt=r(e1,"DIV",{class:!0});var by=n(tt);pt=r(by,"IMG",{src:!0,alt:!0}),by.forEach(a),Ct=c(e1),dt=r(e1,"DIV",{class:!0});var yy=n(dt);Rt=p(yy,"Plastic waste"),yy.forEach(a),e1.forEach(a),Dt=c(zu),se=r(zu,"DIV",{class:!0});var t1=n(se);vt=r(t1,"DIV",{class:!0});var wy=n(vt);kt=r(wy,"IMG",{src:!0,alt:!0}),wy.forEach(a),ut=c(t1),ht=r(t1,"DIV",{class:!0});var _y=n(ht);Mt=p(_y,"Food waste"),_y.forEach(a),t1.forEach(a),St=c(zu),Je=r(zu,"DIV",{class:!0});var s1=n(Je);Tt=r(s1,"DIV",{class:!0});var Ey=n(Tt);Xe=r(Ey,"IMG",{src:!0,alt:!0}),Ey.forEach(a),st=c(s1),jt=r(s1,"DIV",{class:!0});var Iy=n(jt);Qt=p(Iy,"Animal waste"),Iy.forEach(a),s1.forEach(a),mt=c(zu),ve=r(zu,"DIV",{class:!0});var r1=n(ve);rt=r(r1,"DIV",{class:!0});var Dy=n(rt);Nt=r(Dy,"IMG",{src:!0,alt:!0}),Dy.forEach(a),at=c(r1),ot=r(r1,"DIV",{class:!0});var Py=n(ot);Ht=p(Py,"Agricultural waste"),Py.forEach(a),r1.forEach(a),xt=c(zu),Et=r(zu,"DIV",{class:!0});var a1=n(Et);Jt=r(a1,"DIV",{class:!0});var Vy=n(Jt);Ut=r(Vy,"IMG",{src:!0,alt:!0}),Vy.forEach(a),zt=c(a1),Ot=r(a1,"DIV",{class:!0});var ky=n(Ot);Bt=p(ky,"Wood waste"),ky.forEach(a),a1.forEach(a),zu.forEach(a),bt=c(Ul),Ms=r(Ul,"DIV",{class:!0});var Sy=n(Ms);as=p(Sy,"Power from waste technology"),Sy.forEach(a),Yt=c(Ul),lt=r(Ul,"DIV",{class:!0,style:!0});var Rc=n(lt);Xt=r(Rc,"DIV",{class:!0}),n(Xt).forEach(a),ns=c(Rc),vs=r(Rc,"DIV",{class:!0});var Ty=n(vs);W=p(Ty," "),Ty.forEach(a),gs=c(Rc),Pt=r(Rc,"DIV",{class:!0});var Ay=n(Pt);os=p(Ay," "),Ay.forEach(a),es=c(Rc),ls=r(Rc,"DIV",{class:!0});var Oy=n(ls);Zs=p(Oy," "),Oy.forEach(a),Fr=c(Rc),ts=r(Rc,"DIV",{class:!0});var Fy=n(ts);cs=p(Fy," "),Fy.forEach(a),ir=c(Rc),Vs=r(Rc,"DIV",{class:!0}),n(Vs).forEach(a),Rc.forEach(a),$s=c(Ul),Kt=r(Ul,"DIV",{class:!0,id:!0});var Uc=n(Kt);hs=r(Uc,"DIV",{class:!0});var Ly=n(hs);ks=p(Ly,"Liquid fertiliser"),Ly.forEach(a),Lr=c(Uc),Er=r(Uc,"DIV",{class:!0});var Cy=n(Er);Ir=p(Cy,"Solid digestate"),Cy.forEach(a),er=c(Uc),ws=r(Uc,"DIV",{class:!0});var Gy=n(ws);or=p(Gy,"Biogas"),Gy.forEach(a),ds=c(Uc),us=r(Uc,"DIV",{class:!0});var My=n(us);Zr=p(My,"Syngas"),My.forEach(a),Cr=c(Uc),ss=r(Uc,"DIV",{class:!0});var jy=n(ss);Ss=p(jy,"Bio-oil"),jy.forEach(a),kn=c(Uc),Gr=r(Uc,"DIV",{class:!0});var Ny=n(Gr);Ts=p(Ny,"Biochar"),Ny.forEach(a),Uc.forEach(a),Sn=c(Ul),Mr=r(Ul,"DIV",{class:!0});var By=n(Mr);rs=r(By,"DIV",{class:!0});var qy=n(rs);Dr=p(qy,"Heat / Cool"),qy.forEach(a),By.forEach(a),Hs=c(Ul),ms=r(Ul,"DIV",{class:!0});var Ry=n(ms);js=r(Ry,"DIV",{class:!0});var Uy=n(js);ba=p(Uy,"Electricity"),Uy.forEach(a),Ry.forEach(a),Ul.forEach(a),Pr=c(In),$t=r(In,"H1",{id:!0,class:!0});var Zh=n($t);tr=r(Zh,"DIV",{class:!0});var $y=n(tr);cr=r($y,"DIV",{class:!0});var n1=n(cr);dr=r(n1,"DIV",{class:!0});var Hy=n(dr);ur=r(Hy,"IMG",{class:!0,src:!0,alt:!0}),Hy.forEach(a),_s=c(n1),xs=r(n1,"DIV",{class:!0});var Rv=n(xs);ol=r(Rv,"STYLE",{});var Wy=n(ol);pi=p(Wy,`p {
                font-size: 1.2rem;
              }`),Wy.forEach(a),ea=c(Rv),is=r(Rv,"H2",{style:!0,class:!0});var Yy=n(is);vi=p(Yy,"Exploration station"),Yy.forEach(a),Nr=c(Rv),ta=r(Rv,"DIV",{style:!0,class:!0});var l1=n(ta);gi=p(l1,"Interact with our exploration "),cl=r(l1,"BR",{}),fo=p(l1,`
              station to learn more`),l1.forEach(a),fs=c(Rv),As=r(Rv,"P",{style:!0,class:!0});var zy=n(As);Br=p(zy,`Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you!`),zy.forEach(a),Rv.forEach(a),n1.forEach(a),$y.forEach(a),Wa=c(Zh),Zt=r(Zh,"DIV",{class:!0,id:!0,style:!0});var Ku=n(Zt);fr=r(Ku,"STYLE",{});var Ky=n(fr);Vr=p(Ky,`.cow-element {
            /* overflow: visible !important; */
            box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
          }`),Ky.forEach(a),pr=c(Ku),Ns=r(Ku,"DIV",{class:!0,id:!0});var em=n(Ns);qr=r(em,"DIV",{class:!0});var i1=n(qr);ya=r(i1,"SCRIPT",{});var Jy=n(ya);Tn=p(Jy,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),Jy.forEach(a),dl=c(i1),sr=r(i1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Xy=n(sr);ps=r(Xy,"IMG",{class:!0,src:!0,alt:!0}),Xy.forEach(a),i1.forEach(a),hi=c(em),bs=r(em,"DIV",{class:!0});var Ju=n(bs);sa=r(Ju,"DIV",{class:!0});var o1=n(sa);An=r(o1,"DIV",{class:!0});var Qy=n(An);vr=r(Qy,"IMG",{style:!0,src:!0,alt:!0}),Qy.forEach(a),mi=c(o1),gr=r(o1,"DIV",{class:!0});var tm=n(gr);Es=r(tm,"H1",{style:!0,class:!0});var Zy=n(Es);rr=p(Zy,"Cow manure"),Zy.forEach(a),Os=c(tm),Bs=r(tm,"P",{style:!0,class:!0});var c1=n(Bs);Rr=r(c1,"SPAN",{class:!0});var e3=n(Rr);za=p(e3,"Biogas Yield:"),e3.forEach(a),xi=p(c1,`
                  0.18m³/kg
                  `),hr=r(c1,"IMG",{class:!0,src:!0,alt:!0}),c1.forEach(a),Fs=c(tm),Ur=r(tm,"P",{style:!0,class:!0});var Kb=n(Ur);On=r(Kb,"SPAN",{class:!0});var t3=n(On);Fn=p(t3,"Energy content:"),t3.forEach(a),Ka=p(Kb,`
                  Low`),Kb.forEach(a),tm.forEach(a),o1.forEach(a),bi=c(Ju),Is=r(Ju,"DIV",{class:!0});var d1=n(Is);Ls=r(d1,"BUTTON",{type:!0,style:!0,class:!0});var Jb=n(Ls);ra=r(Jb,"IMG",{class:!0,src:!0,alt:!0}),yi=p(Jb,`
                High organic content`),Jb.forEach(a),Ln=c(d1),ar=r(d1,"BUTTON",{type:!0,style:!0,class:!0});var Xb=n(ar);mr=r(Xb,"IMG",{class:!0,src:!0,alt:!0}),nr=p(Xb,`
                High nutrient content`),Xb.forEach(a),d1.forEach(a),ul=c(Ju),$r=r(Ju,"DIV",{class:!0});var u1=n($r);aa=r(u1,"BUTTON",{type:!0,style:!0,class:!0});var Qb=n(aa);Ys=r(Qb,"IMG",{class:!0,src:!0,alt:!0}),Jc=p(Qb,`
                High nitrogen content`),Qb.forEach(a),Xc=c(u1),na=r(u1,"BUTTON",{type:!0,style:!0,class:!0});var Zb=n(na);wi=r(Zb,"IMG",{class:!0,src:!0,alt:!0}),vo=p(Zb,`
                Low pH levels`),Zb.forEach(a),u1.forEach(a),_i=c(Ju),xr=r(Ju,"DIV",{class:!0});var sm=n(xr);ys=r(sm,"IMG",{class:!0,src:!0,alt:!0}),Gn=c(sm),Xa=r(sm,"H1",{style:!0,class:!0});var s3=n(Xa);Ei=r(s3,"A",{href:!0,target:!0});var r3=n(Ei);Ii=p(r3,"Case study"),r3.forEach(a),s3.forEach(a),wa=c(sm),br=r(sm,"IMG",{class:!0,src:!0,alt:!0}),sm.forEach(a),Qc=c(Ju),la=r(Ju,"DIV",{style:!0,class:!0});var f1=n(la);Mn=r(f1,"H2",{class:!0});var a3=n(Mn);Zc=p(a3,"600 dairy cows or 3500 tonnes of cow manure per year"),a3.forEach(a),Di=c(f1),_a=r(f1,"UL",{class:!0});var p1=n(_a);Qa=r(p1,"LI",{});var n3=n(Qa);jn=p(n3,"Produces 656m³ biogas every day"),n3.forEach(a),lf=c(p1),ho=r(p1,"LI",{});var l3=n(ho);Za=p(l3,"Ability to power 187 UK households every day"),l3.forEach(a),p1.forEach(a),f1.forEach(a),Ju.forEach(a),en=c(em),Ea=r(em,"DIV",{class:!0});var i3=n(Ea);Cs=r(i3,"DIV",{class:!0});var v1=n(Cs);Ia=r(v1,"DIV",{class:!0});var g1=n(Ia);mo=r(g1,"DIV",{class:!0});var o3=n(mo);ia=r(o3,"IMG",{src:!0,class:!0,alt:!0}),o3.forEach(a),Da=c(g1),Pa=r(g1,"DIV",{class:!0});var h1=n(Pa);Hl=r(h1,"H1",{style:!0,class:!0});var c3=n(Hl);Pi=p(c3,"Most appropriate technology"),c3.forEach(a),Vi=c(h1),Wl=r(h1,"P",{style:!0,class:!0});var d3=n(Wl);ki=p(d3,"Anaerobic Digestion"),d3.forEach(a),h1.forEach(a),g1.forEach(a),Nn=c(v1),yr=r(v1,"DIV",{class:!0});var m1=n(yr);sn=r(m1,"A",{href:!0});var u3=n(sn);Bn=r(u3,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var e2=n(Bn);rn=r(e2,"IMG",{class:!0,src:!0,alt:!0}),ed=p(e2,`
                    Start your project`),e2.forEach(a),u3.forEach(a),xo=c(m1),fl=r(m1,"A",{href:!0});var f3=n(fl);oa=r(f3,"BUTTON",{type:!0,style:!0,class:!0});var t2=n(oa);Gs=r(t2,"IMG",{class:!0,src:!0,alt:!0}),Si=p(t2,`
                    Learn more`),t2.forEach(a),f3.forEach(a),m1.forEach(a),v1.forEach(a),i3.forEach(a),em.forEach(a),eu=c(Ku),lr=r(Ku,"DIV",{class:!0,id:!0});var rm=n(lr);Sr=r(rm,"DIV",{class:!0});var x1=n(Sr);an=r(x1,"SCRIPT",{});var p3=n(an);Ti=p(p3,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),p3.forEach(a),Ai=c(x1),nn=r(x1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var v3=n(nn);ln=r(v3,"IMG",{class:!0,src:!0,alt:!0}),v3.forEach(a),x1.forEach(a),pl=c(rm),Ds=r(rm,"DIV",{class:!0});var Xu=n(Ds);ka=r(Xu,"DIV",{class:!0});var b1=n(ka);Oi=r(b1,"DIV",{class:!0});var g3=n(Oi);Sa=r(g3,"IMG",{style:!0,src:!0,alt:!0}),g3.forEach(a),td=c(b1),wr=r(b1,"DIV",{class:!0});var am=n(wr);zs=r(am,"H1",{style:!0,class:!0});var h3=n(zs);vl=p(h3,"Food waste"),h3.forEach(a),qn=c(am),qs=r(am,"P",{style:!0,class:!0});var y1=n(qs);Ta=r(y1,"SPAN",{class:!0});var m3=n(Ta);sd=p(m3,"Biogas Yield:"),m3.forEach(a),gl=p(y1,`
                  0.45m³/kg
                  `),Ks=r(y1,"IMG",{class:!0,src:!0,alt:!0}),y1.forEach(a),tu=c(am),Hr=r(am,"P",{style:!0,class:!0});var s2=n(Hr);Wr=r(s2,"SPAN",{class:!0});var x3=n(Wr);su=p(x3,"Energy content:"),x3.forEach(a),rd=p(s2,`
                  High`),s2.forEach(a),am.forEach(a),b1.forEach(a),Yr=c(Xu),on=r(Xu,"DIV",{class:!0});var w1=n(on);cn=r(w1,"BUTTON",{type:!0,style:!0,class:!0});var r2=n(cn);hl=r(r2,"IMG",{class:!0,src:!0,alt:!0}),zl=p(r2,`
                High organic content`),r2.forEach(a),ru=c(w1),ca=r(w1,"BUTTON",{type:!0,style:!0,class:!0});var a2=n(ca);Js=r(a2,"IMG",{class:!0,src:!0,alt:!0}),Rn=p(a2,`
                High nutrient content`),a2.forEach(a),w1.forEach(a),Li=c(Xu),Ci=r(Xu,"DIV",{class:!0});var _1=n(Ci);da=r(_1,"BUTTON",{type:!0,style:!0,class:!0});var n2=n(da);Un=r(n2,"IMG",{class:!0,src:!0,alt:!0}),au=p(n2,`
                Medium nitrogen content`),n2.forEach(a),yo=c(_1),Xs=r(_1,"BUTTON",{type:!0,style:!0,class:!0});var l2=n(Xs);dn=r(l2,"IMG",{class:!0,src:!0,alt:!0}),nu=p(l2,`
                Low pH levels`),l2.forEach(a),_1.forEach(a),lc=c(Xu),$n=r(Xu,"DIV",{class:!0});var nm=n($n);un=r(nm,"IMG",{class:!0,src:!0,alt:!0}),lu=c(nm),Gi=r(nm,"H1",{style:!0,class:!0});var b3=n(Gi);Aa=r(b3,"A",{href:!0,target:!0});var y3=n(Aa);Hn=p(y3,"Case study"),y3.forEach(a),b3.forEach(a),xl=c(nm),wo=r(nm,"IMG",{class:!0,src:!0,alt:!0}),nm.forEach(a),Wn=c(Xu),bl=r(Xu,"DIV",{style:!0,class:!0});var E1=n(bl);_o=r(E1,"H2",{class:!0});var w3=n(_o);Eo=p(w3,"100 people or 250 tonnes of food waste per year"),w3.forEach(a),Oa=c(E1),Yn=r(E1,"UL",{class:!0});var I1=n(Yn);fn=r(I1,"LI",{});var _3=n(fn);iu=p(_3,"Produces 156m³ biogas every day"),_3.forEach(a),oc=c(I1),yl=r(I1,"LI",{});var E3=n(yl);cc=p(E3,"Ability to power 19 UK households every day"),E3.forEach(a),I1.forEach(a),E1.forEach(a),Xu.forEach(a),wl=c(rm),Kl=r(rm,"DIV",{class:!0});var I3=n(Kl);zn=r(I3,"DIV",{class:!0});var D1=n(zn);Fa=r(D1,"DIV",{class:!0});var P1=n(Fa);Io=r(P1,"DIV",{class:!0});var D3=n(Io);Mi=r(D3,"IMG",{src:!0,class:!0,alt:!0}),D3.forEach(a),_l=c(P1),La=r(P1,"DIV",{class:!0});var V1=n(La);El=r(V1,"H1",{style:!0,class:!0});var P3=n(El);ou=p(P3,"Most appropriate technology"),P3.forEach(a),Jl=c(V1),Kn=r(V1,"P",{style:!0,class:!0});var V3=n(Kn);cu=p(V3,"Anaerobic Digestion"),V3.forEach(a),V1.forEach(a),P1.forEach(a),ji=c(D1),Tr=r(D1,"DIV",{class:!0});var k1=n(Tr);vn=r(k1,"A",{href:!0});var k3=n(vn);Ca=r(k3,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var i2=n(Ca);Ni=r(i2,"IMG",{class:!0,src:!0,alt:!0}),Bi=p(i2,`
                    Start your project`),i2.forEach(a),k3.forEach(a),uf=c(k1),Do=r(k1,"A",{href:!0});var S3=n(Do);Ga=r(S3,"BUTTON",{type:!0,style:!0,class:!0});var o2=n(Ga);Ql=r(o2,"IMG",{class:!0,src:!0,alt:!0}),Il=p(o2,`
                    Learn more`),o2.forEach(a),S3.forEach(a),k1.forEach(a),D1.forEach(a),I3.forEach(a),rm.forEach(a),Jn=c(Ku),Qs=r(Ku,"DIV",{class:!0,id:!0});var lm=n(Qs);ua=r(lm,"DIV",{class:!0});var S1=n(ua);Dl=r(S1,"SCRIPT",{});var T3=n(Dl);ff=p(T3,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),T3.forEach(a),du=c(S1),fa=r(S1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var A3=n(fa);qi=r(A3,"IMG",{class:!0,src:!0,alt:!0}),A3.forEach(a),S1.forEach(a),Zl=c(lm),Ps=r(lm,"DIV",{class:!0});var Qu=n(Ps);Ma=r(Qu,"DIV",{class:!0});var T1=n(Ma);ko=r(T1,"DIV",{class:!0});var O3=n(ko);Pl=r(O3,"IMG",{style:!0,src:!0,alt:!0}),O3.forEach(a),dc=c(T1),zr=r(T1,"DIV",{class:!0});var im=n(zr);gn=r(im,"H1",{style:!0,class:!0});var F3=n(gn);uu=p(F3,"PE plastic"),F3.forEach(a),uc=c(im),Kr=r(im,"P",{style:!0,class:!0});var A1=n(Kr);hn=r(A1,"SPAN",{class:!0});var L3=n(hn);Ri=p(L3,"GCV:"),L3.forEach(a),So=p(A1,`
                  46 MJ/kg
                  `),Vl=r(A1,"IMG",{class:!0,src:!0,alt:!0}),A1.forEach(a),pc=c(im),ei=r(im,"P",{style:!0,class:!0});var c2=n(ei);kl=r(c2,"SPAN",{class:!0});var C3=n(kl);ja=p(C3,"Energy content:"),C3.forEach(a),vc=p(c2,`
                  Very high`),c2.forEach(a),im.forEach(a),T1.forEach(a),fu=c(Qu),Xn=r(Qu,"DIV",{class:!0});var O1=n(Xn);pa=r(O1,"BUTTON",{type:!0,style:!0,class:!0});var d2=n(pa);mn=r(d2,"IMG",{class:!0,src:!0,alt:!0}),Ui=p(d2,`
                Very low organic content`),d2.forEach(a),gc=c(O1),Sl=r(O1,"BUTTON",{type:!0,style:!0,class:!0});var u2=n(Sl);Tl=r(u2,"IMG",{class:!0,src:!0,alt:!0}),pu=p(u2,`
                Very low nutrient content`),u2.forEach(a),O1.forEach(a),si=c(Qu),Jr=r(Qu,"DIV",{class:!0});var F1=n(Jr);va=r(F1,"BUTTON",{type:!0,style:!0,class:!0});var f2=n(va);Al=r(f2,"IMG",{class:!0,src:!0,alt:!0}),ri=p(f2,`
                Very low nitrogen content`),f2.forEach(a),To=c(F1),Ol=r(F1,"BUTTON",{type:!0,style:!0,class:!0});var p2=n(Ol);xn=r(p2,"IMG",{class:!0,src:!0,alt:!0}),Ao=p(p2,`
                PET bottles`),p2.forEach(a),F1.forEach(a),hc=c(Qu),Qn=r(Qu,"DIV",{class:!0});var om=n(Qn);ga=r(om,"IMG",{class:!0,src:!0,alt:!0}),ld=c(om),bn=r(om,"H1",{style:!0,class:!0});var G3=n(bn);Na=r(G3,"A",{href:!0,target:!0});var M3=n(Na);id=p(M3,"Case study"),M3.forEach(a),G3.forEach(a),mc=c(om),yn=r(om,"IMG",{class:!0,src:!0,alt:!0}),om.forEach(a),ai=c(Qu),Xr=r(Qu,"DIV",{style:!0,class:!0});var L1=n(Xr);Zn=r(L1,"H2",{class:!0});var j3=n(Zn);vf=p(j3,"10000 PET bottles or 100 tonnes of plastic per year"),j3.forEach(a),Hi=c(L1),ha=r(L1,"UL",{class:!0});var C1=n(ha);xc=r(C1,"LI",{});var N3=n(xc);bc=p(N3,"Produces 75kWh every day"),N3.forEach(a),Fo=c(C1),Ba=r(C1,"LI",{});var B3=n(Ba);yc=p(B3,"Ability to power 63 UK households every day"),B3.forEach(a),C1.forEach(a),L1.forEach(a),Qu.forEach(a),wc=c(lm),Lo=r(lm,"DIV",{class:!0});var q3=n(Lo);qa=r(q3,"DIV",{class:!0});var G1=n(qa);ni=r(G1,"DIV",{class:!0});var M1=n(ni);el=r(M1,"DIV",{class:!0});var R3=n(el);Co=r(R3,"IMG",{src:!0,class:!0,alt:!0}),R3.forEach(a),Yv=c(M1),tl=r(M1,"DIV",{class:!0});var j1=n(tl);Ll=r(j1,"H1",{style:!0,class:!0});var U3=n(Ll);od=p(U3,"Most appropriate technology"),U3.forEach(a),Cg=c(j1),cd=r(j1,"P",{style:!0,class:!0});var $3=n(cd);vu=p($3,"Pyrolysis"),$3.forEach(a),j1.forEach(a),M1.forEach(a),zv=c(G1),_c=r(G1,"DIV",{class:!0});var N1=n(_c);Go=r(N1,"A",{href:!0});var H3=n(Go);_r=r(H3,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var v2=n(_r);Mo=r(v2,"IMG",{class:!0,src:!0,alt:!0}),Kv=p(v2,`
                    Start your project`),v2.forEach(a),H3.forEach(a),gf=c(N1),gu=r(N1,"A",{href:!0});var W3=n(gu);jo=r(W3,"BUTTON",{type:!0,style:!0,class:!0});var g2=n(jo);No=r(g2,"IMG",{class:!0,src:!0,alt:!0}),Jv=p(g2,`
                    Learn more`),g2.forEach(a),W3.forEach(a),N1.forEach(a),G1.forEach(a),q3.forEach(a),lm.forEach(a),hf=c(Ku),li=r(Ku,"DIV",{class:!0,id:!0});var cm=n(li);Ec=r(cm,"DIV",{class:!0});var B1=n(Ec);Wi=r(B1,"SCRIPT",{});var Y3=n(Wi);hu=p(Y3,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),Y3.forEach(a),Xv=c(B1),Yi=r(B1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var z3=n(Yi);Cl=r(z3,"IMG",{class:!0,src:!0,alt:!0}),z3.forEach(a),B1.forEach(a),Qv=c(cm),wn=r(cm,"DIV",{class:!0});var Zu=n(wn);Ra=r(Zu,"DIV",{class:!0});var q1=n(Ra);zi=r(q1,"DIV",{class:!0});var K3=n(zi);Ic=r(K3,"IMG",{style:!0,src:!0,alt:!0}),K3.forEach(a),dd=c(q1),Bo=r(q1,"DIV",{class:!0});var dm=n(Bo);ud=r(dm,"H1",{style:!0,class:!0});var J3=n(ud);fd=p(J3,"Technology"),J3.forEach(a),Ng=c(dm),qo=r(dm,"P",{style:!0,class:!0});var R1=n(qo);Dc=r(R1,"SPAN",{class:!0});var X3=n(Dc);Zv=p(X3,"GCV:"),X3.forEach(a),xf=p(R1,`
                  N/A MJ/kg
                  `),Gl=r(R1,"IMG",{class:!0,src:!0,alt:!0}),R1.forEach(a),mu=c(dm),pd=r(dm,"P",{style:!0,class:!0});var h2=n(pd);yf=r(h2,"SPAN",{class:!0});var Q3=n(yf);Bg=p(Q3,"Energy content:"),Q3.forEach(a),ev=p(h2,`
                  High`),h2.forEach(a),dm.forEach(a),q1.forEach(a),qg=c(Zu),vd=r(Zu,"DIV",{class:!0});var U1=n(vd);Pc=r(U1,"BUTTON",{type:!0,style:!0,class:!0});var m2=n(Pc);Vc=r(m2,"IMG",{class:!0,src:!0,alt:!0}),Rg=p(m2,`
                High organic content`),m2.forEach(a),Ug=c(U1),Ml=r(U1,"BUTTON",{type:!0,style:!0,class:!0});var x2=n(Ml);xu=r(x2,"IMG",{class:!0,src:!0,alt:!0}),$g=p(x2,`
                High nutrient content`),x2.forEach(a),U1.forEach(a),Hg=c(Zu),gd=r(Zu,"DIV",{class:!0});var $1=n(gd);Ki=r($1,"BUTTON",{type:!0,style:!0,class:!0});var b2=n(Ki);Ji=r(b2,"IMG",{class:!0,src:!0,alt:!0}),kc=p(b2,`
                High nitrogen content`),b2.forEach(a),tv=c($1),Sc=r($1,"BUTTON",{type:!0,style:!0,class:!0});var y2=n(Sc);Tc=r(y2,"IMG",{class:!0,src:!0,alt:!0}),Wg=p(y2,`
                Latest technology`),y2.forEach(a),$1.forEach(a),Yg=c(Zu),Ro=r(Zu,"DIV",{class:!0});var um=n(Ro);bu=r(um,"IMG",{class:!0,src:!0,alt:!0}),sv=c(um),yu=r(um,"H1",{style:!0,class:!0});var Z3=n(yu);wu=r(Z3,"A",{href:!0,target:!0});var e5=n(wu);Xi=p(e5,"Case study"),e5.forEach(a),Z3.forEach(a),rv=c(um),Ac=r(um,"IMG",{class:!0,src:!0,alt:!0}),um.forEach(a),zg=c(Zu),Oc=r(Zu,"DIV",{style:!0,class:!0});var H1=n(Oc);Uo=r(H1,"H2",{class:!0});var t5=n(Uo);Kg=p(t5,"600 dairy cows or 3500 tonnes of cow manure per year"),t5.forEach(a),Jg=c(H1),hd=r(H1,"UL",{class:!0});var W1=n(hd);_u=r(W1,"LI",{});var s5=n(_u);av=p(s5,"Produces 656m³ biogas every day"),s5.forEach(a),Xg=c(W1),nv=r(W1,"LI",{});var r5=n(nv);wf=p(r5,"Ability to power 187 UK households every day"),r5.forEach(a),W1.forEach(a),H1.forEach(a),Zu.forEach(a),Qg=c(cm),_f=r(cm,"DIV",{class:!0});var a5=n(_f);$o=r(a5,"DIV",{class:!0});var Y1=n($o);md=r(Y1,"DIV",{class:!0});var z1=n(md);xd=r(z1,"DIV",{class:!0});var n5=n(xd);Eu=r(n5,"IMG",{src:!0,class:!0,alt:!0}),n5.forEach(a),Zg=c(z1),bd=r(z1,"DIV",{class:!0});var K1=n(bd);Iu=r(K1,"H1",{style:!0,class:!0});var l5=n(Iu);lv=p(l5,"Most appropriate technology"),l5.forEach(a),iv=c(K1),Du=r(K1,"P",{style:!0,class:!0});var i5=n(Du);eh=p(i5,"New Technology"),i5.forEach(a),K1.forEach(a),z1.forEach(a),Pu=c(Y1),Ho=r(Y1,"DIV",{class:!0});var J1=n(Ho);yd=r(J1,"A",{href:!0});var o5=n(yd);ii=r(o5,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var w2=n(ii);Vu=r(w2,"IMG",{class:!0,src:!0,alt:!0}),wd=p(w2,`
                    Start your project`),w2.forEach(a),o5.forEach(a),th=c(J1),Ef=r(J1,"A",{href:!0});var c5=n(Ef);Qi=r(c5,"BUTTON",{type:!0,style:!0,class:!0});var _2=n(Qi);Fc=r(_2,"IMG",{class:!0,src:!0,alt:!0}),sh=p(_2,`
                    Learn more`),_2.forEach(a),c5.forEach(a),J1.forEach(a),Y1.forEach(a),a5.forEach(a),cm.forEach(a),Ku.forEach(a),ku=c(Zh),jl=r(Zh,"DIV",{id:!0,class:!0,style:!0}),n(jl).forEach(a),Zh.forEach(a),rh=c(In),If=r(In,"SECTION",{class:!0});var d5=n(If);oi=r(d5,"DIV",{class:!0,style:!0,id:!0,onclick:!0});var u5=n(oi);Lc=r(u5,"DIV",{});var fm=n(Lc);Ar=r(fm,"DIV",{id:!0,style:!0});var $c=n(Ar);Zi=r($c,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var f5=n(Zi);Su=r(f5,"IMG",{class:!0,src:!0,alt:!0}),f5.forEach(a),ah=c($c),eo=r($c,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var p5=n(eo);Cc=r(p5,"IMG",{class:!0,src:!0,alt:!0}),p5.forEach(a),nh=c($c),to=r($c,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var v5=n(to);_n=r(v5,"IMG",{class:!0,src:!0,alt:!0}),v5.forEach(a),ov=c($c),sl=r($c,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var g5=n(sl);_d=r(g5,"DIV",{style:!0});var h5=n(_d);lh=p(h5,"Technology"),h5.forEach(a),g5.forEach(a),Tu=c($c),cv=r($c,"STYLE",{});var m5=n(cv);ih=p(m5,`@keyframes bounce {
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
              }`),m5.forEach(a),oh=c($c),Au=r($c,"SCRIPT",{});var x5=n(Au);dv=p(x5,"const animatedElements = document.querySelectorAll('.techbuttons')\n\n              animatedElements.forEach(element => {\n                const randomDelay = Math.floor(Math.random() * 1000) // Generate a random delay between 0 and 1000 milliseconds\n                element.style.animationDelay = `${randomDelay}ms`\n                element.style.animationDuration = `${1000 + randomDelay}ms`\n              })"),x5.forEach(a),$c.forEach(a),ch=c(fm),uv=r(fm,"STYLE",{});var b5=n(uv);Wo=p(b5,`.growbutton:hover {
              box-shadow: 0 0 5px 1px white;
            }
            .growbutton img {
              max-width: 190%;
            }`),b5.forEach(a),dh=c(fm),Nl=r(fm,"DIV",{class:!0,id:!0,style:!0});var X1=n(Nl);Ed=r(X1,"DIV",{class:!0});var Q1=n(Ed);Id=r(Q1,"INPUT",{type:!0,placeholder:!0,class:!0}),fv=c(Q1),Gc=r(Q1,"BUTTON",{"aria-label":!0,class:!0});var y5=n(Gc);Dd=r(y5,"SPAN",{class:!0}),n(Dd).forEach(a),y5.forEach(a),Q1.forEach(a),pv=c(X1),so=r(X1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var w5=n(so);Bl=r(w5,"IMG",{class:!0,src:!0,alt:!0,style:!0}),w5.forEach(a),X1.forEach(a),fm.forEach(a),u5.forEach(a),d5.forEach(a),uh=c(In),ro=r(In,"H1",{class:!0,id:!0});var pm=n(ro);Pd=r(pm,"DIV",{class:!0});var _5=n(Pd);Vd=r(_5,"DIV",{class:!0});var Z1=n(Vd);Df=r(Z1,"DIV",{class:!0});var E5=n(Df);Ou=r(E5,"IMG",{class:!0,src:!0,alt:!0}),E5.forEach(a),fh=c(Z1),Ua=r(Z1,"DIV",{class:!0});var Uv=n(Ua);vv=r(Uv,"STYLE",{});var I5=n(vv);gv=p(I5,`p {
                font-size: 1.2rem;
              }`),I5.forEach(a),ph=c(Uv),Fu=r(Uv,"H2",{style:!0,class:!0});var D5=n(Fu);vh=p(D5,"The PFP Calculator"),D5.forEach(a),hv=c(Uv),Mc=r(Uv,"DIV",{style:!0,class:!0});var e0=n(Mc);gh=p(e0,`Find the right technology
              `),hh=r(e0,"BR",{}),mv=p(e0,`
              for your needs`),e0.forEach(a),xv=c(Uv),Lu=r(Uv,"P",{style:!0,class:!0});var P5=n(Lu);mh=p(P5,`We will assist you every step of the way to ensure a smooth and successful implementation of your power-from-waste
              project`),P5.forEach(a),Uv.forEach(a),Z1.forEach(a),_5.forEach(a),bv=c(pm),En=r(pm,"DIV",{id:!0,class:!0,style:!0}),n(En).forEach(a),xh=c(pm),ql=r(pm,"DIV",{id:!0,class:!0,style:!0}),n(ql).forEach(a),pm.forEach(a),bh=c(In),ao=r(In,"SECTION",{class:!0,id:!0});var V5=n(ao);Yo=r(V5,"DIV",{class:!0});var t0=n(Yo);no=r(t0,"DIV",{class:!0,style:!0});var s0=n(no);kd=r(s0,"DIV",{class:!0});var r0=n(kd);Sd=r(r0,"P",{class:!0});var k5=n(Sd);yh=p(k5,"Waste type"),k5.forEach(a),yv=c(r0),lo=r(r0,"H2",{class:!0});var Pg=n(lo);Td=r(Pg,"SPAN",{id:!0});var S5=n(Td);wh=p(S5,"PE Plastic"),S5.forEach(a),wv=c(Pg),_v=r(Pg,"BR",{}),Ev=c(Pg),Pf=r(Pg,"SPAN",{id:!0});var T5=n(Pf);_h=p(T5,"10,000 tonnes"),T5.forEach(a),Cu=p(Pg,`
               per day`),Pg.forEach(a),r0.forEach(a),Eh=c(s0),Ad=r(s0,"DIV",{class:!0});var a0=n(Ad);Vf=r(a0,"DIV",{class:!0});var A5=n(Vf);zo=r(A5,"IMG",{src:!0,class:!0,id:!0,alt:!0}),A5.forEach(a),Ih=c(a0),Od=r(a0,"DIV",{class:!0});var n0=n(Od);ci=r(n0,"H3",{class:!0});var O5=n(ci);Dh=p(O5,"Most appropriate technology"),O5.forEach(a),Ph=c(n0),Gu=r(n0,"H2",{class:!0,id:!0});var F5=n(Gu);Vh=p(F5,"Pyrolysis"),F5.forEach(a),n0.forEach(a),a0.forEach(a),s0.forEach(a),Iv=c(t0),Qr=r(t0,"DIV",{class:!0});var Hc=n(Qr);Fd=r(Hc,"DIV",{class:!0});var l0=n(Fd);Ko=r(l0,"DIV",{style:!0,class:!0});var E2=n(Ko);kh=p(E2,"Energy content "),jc=r(E2,"IMG",{class:!0,src:!0,alt:!0}),E2.forEach(a),Dv=c(l0),Ld=r(l0,"DIV",{class:!0});var i0=n(Ld);Cd=r(i0,"SPAN",{id:!0});var L5=n(Cd);Pv=p(L5,"18"),L5.forEach(a),Vv=c(i0),kf=r(i0,"SPAN",{id:!0});var C5=n(kf);Sh=p(C5,"MJ/kg"),C5.forEach(a),i0.forEach(a),l0.forEach(a),Mu=c(Hc),Gd=r(Hc,"DIV",{class:!0});var o0=n(Gd);Md=r(o0,"DIV",{style:!0,class:!0});var I2=n(Md);Th=p(I2,"Heat produced "),Nc=r(I2,"IMG",{class:!0,src:!0,alt:!0}),I2.forEach(a),Ah=c(o0),ju=r(o0,"DIV",{class:!0});var D2=n(ju);di=r(D2,"SPAN",{id:!0});var G5=n(di);Oh=p(G5,"11,200"),G5.forEach(a),Fh=p(D2,`
              kWh per year`),D2.forEach(a),o0.forEach(a),Lh=c(Hc),jd=r(Hc,"DIV",{class:!0});var c0=n(jd);Jo=r(c0,"DIV",{style:!0,class:!0});var P2=n(Jo);kv=p(P2,"Heat savings "),Nu=r(P2,"IMG",{class:!0,src:!0,alt:!0}),P2.forEach(a),Ch=c(c0),Xo=r(c0,"DIV",{class:!0});var d0=n(Xo);Gh=p(d0,`£
              `),Nd=r(d0,"SPAN",{id:!0});var M5=n(Nd);Mh=p(M5,"48,000"),M5.forEach(a),Sv=p(d0,`
              per year`),d0.forEach(a),c0.forEach(a),Tv=c(Hc),Qo=r(Hc,"DIV",{class:!0});var u0=n(Qo);Bd=r(u0,"DIV",{style:!0,class:!0});var V2=n(Bd);jh=p(V2,"Electricity produced "),io=r(V2,"IMG",{class:!0,src:!0,alt:!0}),V2.forEach(a),Nh=c(u0),Bu=r(u0,"DIV",{class:!0});var k2=n(Bu);qd=r(k2,"SPAN",{id:!0});var j5=n(qd);Av=p(j5,"4,800"),j5.forEach(a),Bh=p(k2,`
              kWh per year`),k2.forEach(a),u0.forEach(a),qh=c(Hc),rl=r(Hc,"DIV",{class:!0});var f0=n(rl);Rd=r(f0,"DIV",{style:!0,class:!0});var S2=n(Rd);Rh=p(S2,"Electrical savings "),qu=r(S2,"IMG",{class:!0,src:!0,alt:!0}),S2.forEach(a),Ov=c(f0),Ud=r(f0,"DIV",{class:!0});var p0=n(Ud);Fv=p(p0,`£
              `),Sf=r(p0,"SPAN",{id:!0});var N5=n(Sf);Ru=p(N5,"70,000"),N5.forEach(a),Uh=p(p0,`
              per year`),p0.forEach(a),f0.forEach(a),q0=c(Hc),Lv=r(Hc,"DIV",{class:!0});var v0=n(Lv);Tf=r(v0,"DIV",{style:!0,class:!0});var g0=n(Tf);$h=r(g0,"SPAN",{id:!0});var B5=n($h);R0=p(B5,"Char"),B5.forEach(a),U0=p(g0,`
               produced
              `),cg=r(g0,"IMG",{class:!0,src:!0,alt:!0}),g0.forEach(a),$0=c(v0),dg=r(v0,"DIV",{class:!0});var T2=n(dg);Hh=r(T2,"SPAN",{id:!0});var q5=n(Hh);H0=p(q5,"500"),q5.forEach(a),W0=p(T2,`
              kg per year`),T2.forEach(a),v0.forEach(a),Hc.forEach(a),t0.forEach(a),V5.forEach(a),Y0=c(In),Cv=r(In,"SECTION",{id:!0});var h0=n(Cv);Zo=r(h0,"DIV",{class:!0,id:!0});var $v=n(Zo);Gv=r($v,"DIV",{class:!0});var m0=n(Gv);ug=r(m0,"H1",{style:!0,class:!0});var R5=n(ug);z0=p(R5,"The PFP Calculator"),R5.forEach(a),K0=c(m0),fg=r(m0,"P",{style:!0,class:!0});var U5=n(fg);J0=p(U5,`Our easy-to-use calculator is here to give you a quick snapshot of what your waste-to-energy project could look
            like. It helps you identify the most suitable technology and estimate energy output, serving as a valuable first
            step in your journey to green power. Think of it as a helpful starting point!`),U5.forEach(a),m0.forEach(a),X0=c($v),Af=r($v,"DIV",{style:!0,class:!0});var x0=n(Af);Wh=r(x0,"DIV",{class:!0});var $5=n(Wh);Mv=r($5,"IMG",{class:!0,id:!0,src:!0,alt:!0}),$5.forEach(a),Q0=c(x0),ec=r(x0,"DIV",{class:!0,id:!0});var Hv=n(ec);Of=r(Hv,"DIV",{class:!0,role:!0});var b0=n(Of);pg=r(b0,"BUTTON",{type:!0,class:!0});var H5=n(pg);Z0=p(H5,"Waste type"),H5.forEach(a),ex=c(b0),Yh=r(b0,"DIV",{class:!0});var W5=n(Yh);$a=r(W5,"SELECT",{id:!0,class:!0});var oo=n($a);$d=r(oo,"OPTGROUP",{class:!0,label:!0});var vm=n($d);Ff=r(vm,"OPTION",{class:!0});var Y5=n(Ff);tx=p(Y5,"Beer production"),Y5.forEach(a),Lf=r(vm,"OPTION",{class:!0});var z5=n(Lf);sx=p(z5,"Wine production"),z5.forEach(a),Cf=r(vm,"OPTION",{class:!0});var K5=n(Cf);rx=p(K5,"Spirits production"),K5.forEach(a),Gf=r(vm,"OPTION",{class:!0});var J5=n(Gf);ax=p(J5,"Ethanol production"),J5.forEach(a),Mf=r(vm,"OPTION",{class:!0});var X5=n(Mf);nx=p(X5,"Juice production"),X5.forEach(a),vm.forEach(a),vg=r(oo,"OPTGROUP",{class:!0,label:!0});var Q5=n(vg);jf=r(Q5,"OPTION",{class:!0});var Z5=n(jf);lx=p(Z5,"Biodiesel production"),Z5.forEach(a),Q5.forEach(a),Nf=r(oo,"OPTGROUP",{class:!0,label:!0});var y0=n(Nf);Bf=r(y0,"OPTION",{class:!0});var ew=n(Bf);ix=p(ew,"Ceramics"),ew.forEach(a),qf=r(y0,"OPTION",{class:!0});var tw=n(qf);ox=p(tw,"Sand"),tw.forEach(a),Rf=r(y0,"OPTION",{class:!0});var sw=n(Rf);cx=p(sw,"Dust"),sw.forEach(a),y0.forEach(a),Uf=r(oo,"OPTGROUP",{class:!0,label:!0});var w0=n(Uf);$f=r(w0,"OPTION",{class:!0});var rw=n($f);dx=p(rw,"Cheese production"),rw.forEach(a),Hf=r(w0,"OPTION",{class:!0});var aw=n(Hf);ux=p(aw,"Butter production"),aw.forEach(a),Wf=r(w0,"OPTION",{class:!0});var nw=n(Wf);fx=p(nw,"Ice cream"),nw.forEach(a),w0.forEach(a),ui=r(oo,"OPTGROUP",{class:!0,label:!0});var ef=n(ui);Yf=r(ef,"OPTION",{class:!0});var lw=n(Yf);px=p(lw,"Pulp production"),lw.forEach(a),zf=r(ef,"OPTION",{class:!0});var iw=n(zf);vx=p(iw,"Tomato ketchup"),iw.forEach(a),Kf=r(ef,"OPTION",{class:!0});var ow=n(Kf);gx=p(ow,"Frozen potatoes"),ow.forEach(a),Jf=r(ef,"OPTION",{class:!0});var cw=n(Jf);hx=p(cw,"Prepared potatoes (crisps)"),cw.forEach(a),Xf=r(ef,"OPTION",{class:!0});var dw=n(Xf);mx=p(dw,"Potato starch"),dw.forEach(a),Qf=r(ef,"OPTION",{class:!0});var uw=n(Qf);xx=p(uw,"Dried potatoes"),uw.forEach(a),Zf=r(ef,"OPTION",{class:!0});var fw=n(Zf);bx=p(fw,"Sugar production"),fw.forEach(a),ep=r(ef,"OPTION",{class:!0});var pw=n(ep);yx=p(pw,"Yeast production"),pw.forEach(a),tp=r(ef,"OPTION",{class:!0});var vw=n(tp);wx=p(vw,"Vegetable oils production"),vw.forEach(a),ef.forEach(a),Hd=r(oo,"OPTGROUP",{class:!0,label:!0});var gm=n(Hd);sp=r(gm,"OPTION",{class:!0});var gw=n(sp);_x=p(gw,"Coffee grounds"),gw.forEach(a),rp=r(gm,"OPTION",{class:!0});var hw=n(rp);Ex=p(hw,"Crop residues"),hw.forEach(a),ap=r(gm,"OPTION",{class:!0});var mw=n(ap);Ix=p(mw,"Maize silage"),mw.forEach(a),np=r(gm,"OPTION",{class:!0});var xw=n(np);Dx=p(xw,"Cereal"),xw.forEach(a),lp=r(gm,"OPTION",{class:!0});var bw=n(lp);Px=p(bw,"Grass silage"),bw.forEach(a),gm.forEach(a),Bc=r(oo,"OPTGROUP",{class:!0,label:!0});var Vg=n(Bc);ip=r(Vg,"OPTION",{class:!0});var yw=n(ip);Vx=p(yw,"Pulp & Paper Waste"),yw.forEach(a),op=r(Vg,"OPTION",{class:!0});var ww=n(op);kx=p(ww,"Textile Waste"),ww.forEach(a),cp=r(Vg,"OPTION",{class:!0});var _w=n(cp);Sx=p(_w,"SRF"),_w.forEach(a),dp=r(Vg,"OPTION",{class:!0});var Ew=n(dp);Tx=p(Ew,"RDF"),Ew.forEach(a),up=r(Vg,"OPTION",{class:!0});var Iw=n(up);Ax=p(Iw,"Rubber"),Iw.forEach(a),fp=r(Vg,"OPTION",{class:!0});var Dw=n(fp);Ox=p(Dw,"Wood waste"),Dw.forEach(a),Vg.forEach(a),fi=r(oo,"OPTGROUP",{class:!0,label:!0});var tf=n(fi);pp=r(tf,"OPTION",{class:!0});var Pw=n(pp);Fx=p(Pw,"Pig manure"),Pw.forEach(a),vp=r(tf,"OPTION",{class:!0});var Vw=n(vp);Lx=p(Vw,"Dairy Cattle"),Vw.forEach(a),gp=r(tf,"OPTION",{class:!0});var kw=n(gp);Cx=p(kw,"Non diary cattle"),kw.forEach(a),hp=r(tf,"OPTION",{class:!0});var Sw=n(hp);Gx=p(Sw,"Buffalo"),Sw.forEach(a),mp=r(tf,"OPTION",{class:!0});var Tw=n(mp);Mx=p(Tw,"Chicken layer manure"),Tw.forEach(a),xp=r(tf,"OPTION",{class:!0});var Aw=n(xp);jx=p(Aw,"Chicken broiler manure"),Aw.forEach(a),bp=r(tf,"OPTION",{class:!0});var Ow=n(bp);Nx=p(Ow,"Sheep"),Ow.forEach(a),yp=r(tf,"OPTION",{class:!0});var Fw=n(yp);Bx=p(Fw,"Food waste"),Fw.forEach(a),wp=r(tf,"OPTION",{class:!0});var Lw=n(wp);qx=p(Lw,"Fish waste"),Lw.forEach(a),tf.forEach(a),_p=r(oo,"OPTGROUP",{class:!0,label:!0});var _0=n(_p);Ep=r(_0,"OPTION",{class:!0});var Cw=n(Ep);Rx=p(Cw,"Bovine meat"),Cw.forEach(a),Ip=r(_0,"OPTION",{class:!0});var Gw=n(Ip);Ux=p(Gw,"Pig meat"),Gw.forEach(a),Dp=r(_0,"OPTION",{class:!0});var Mw=n(Dp);$x=p(Mw,"Sheep meat"),Mw.forEach(a),_0.forEach(a),gg=r(oo,"OPTGROUP",{class:!0,label:!0});var jw=n(gg);Pp=r(jw,"OPTION",{class:!0});var Nw=n(Pp);Hx=p(Nw,"Medical Waste"),Nw.forEach(a),jw.forEach(a),hg=r(oo,"OPTGROUP",{class:!0,label:!0});var Bw=n(hg);Vp=r(Bw,"OPTION",{class:!0});var qw=n(Vp);Wx=p(qw,"Municipal Solid Waste (MSW)"),qw.forEach(a),Bw.forEach(a),Wd=r(oo,"OPTGROUP",{class:!0,label:!0});var hm=n(Wd);kp=r(hm,"OPTION",{class:!0});var Rw=n(kp);Yx=p(Rw,"PE Plastic"),Rw.forEach(a),Sp=r(hm,"OPTION",{class:!0});var Uw=n(Sp);zx=p(Uw,"PP Plastic"),Uw.forEach(a),Tp=r(hm,"OPTION",{class:!0});var $w=n(Tp);Kx=p($w,"PS Plastic"),$w.forEach(a),Ap=r(hm,"OPTION",{class:!0});var Hw=n(Ap);Jx=p(Hw,"PVC Plastic"),Hw.forEach(a),Op=r(hm,"OPTION",{class:!0});var Ww=n(Op);Xx=p(Ww,"PET Plastic"),Ww.forEach(a),hm.forEach(a),jv=r(oo,"OPTGROUP",{class:!0,label:!0});var A2=n(jv);Fp=r(A2,"OPTION",{class:!0});var Yw=n(Fp);Qx=p(Yw,"Glass"),Yw.forEach(a),Lp=r(A2,"OPTION",{class:!0});var zw=n(Lp);Zx=p(zw,"Metals"),zw.forEach(a),A2.forEach(a),oo.forEach(a),W5.forEach(a),b0.forEach(a),eb=c(Hv),Cp=r(Hv,"DIV",{class:!0,role:!0});var E0=n(Cp);mg=r(E0,"BUTTON",{type:!0,class:!0});var Kw=n(mg);tb=p(Kw,"Kilograms per day"),Kw.forEach(a),sb=c(E0),zh=r(E0,"DIV",{class:!0});var Jw=n(zh);Rl=r(Jw,"SELECT",{id:!0,class:!0});var Kd=n(Rl);Gp=r(Kd,"OPTION",{class:!0});var Xw=n(Gp);rb=p(Xw,"5 kg"),Xw.forEach(a),Mp=r(Kd,"OPTION",{class:!0});var Qw=n(Mp);ab=p(Qw,"10 kg"),Qw.forEach(a),jp=r(Kd,"OPTION",{class:!0});var Zw=n(jp);nb=p(Zw,"100 kg"),Zw.forEach(a),Np=r(Kd,"OPTION",{class:!0});var e_=n(Np);lb=p(e_,"400 kg"),e_.forEach(a),Bp=r(Kd,"OPTION",{class:!0});var t_=n(Bp);ib=p(t_,"1000 kg"),t_.forEach(a),qp=r(Kd,"OPTION",{class:!0});var s_=n(qp);ob=p(s_,"4000 kg"),s_.forEach(a),Rp=r(Kd,"OPTION",{class:!0});var r_=n(Rp);cb=p(r_,"10,000 kg"),r_.forEach(a),Up=r(Kd,"OPTION",{class:!0});var a_=n(Up);db=p(a_,"20,000 kg"),a_.forEach(a),$p=r(Kd,"OPTION",{class:!0});var n_=n($p);ub=p(n_,"40,000 kg"),n_.forEach(a),Hp=r(Kd,"OPTION",{class:!0});var l_=n(Hp);fb=p(l_,"> 40,000 kg"),l_.forEach(a),Kd.forEach(a),Jw.forEach(a),E0.forEach(a),pb=c(Hv),Wp=r(Hv,"DIV",{class:!0,role:!0});var I0=n(Wp);xg=r(I0,"BUTTON",{type:!0,class:!0});var i_=n(xg);vb=p(i_,"Client needs"),i_.forEach(a),gb=c(I0),Kh=r(I0,"DIV",{class:!0});var o_=n(Kh);Yd=r(o_,"SELECT",{id:!0,class:!0});var mm=n(Yd);Yp=r(mm,"OPTION",{class:!0});var c_=n(Yp);hb=p(c_,"Electricity"),c_.forEach(a),zp=r(mm,"OPTION",{class:!0});var d_=n(zp);mb=p(d_,"Heating / Cooling"),d_.forEach(a),Kp=r(mm,"OPTION",{class:!0});var u_=n(Kp);xb=p(u_,"Carbon credits"),u_.forEach(a),Jp=r(mm,"OPTION",{class:!0});var f_=n(Jp);bb=p(f_,"Cooking biogas"),f_.forEach(a),Xp=r(mm,"OPTION",{class:!0});var p_=n(Xp);yb=p(p_,"Fertiliser"),p_.forEach(a),mm.forEach(a),o_.forEach(a),I0.forEach(a),wb=c(Hv),Xm=r(Hv,"DIV",{}),n(Xm).forEach(a),Hv.forEach(a),x0.forEach(a),_b=c($v),Qp=r($v,"DIV",{class:!0,id:!0});var D0=n(Qp);bg=r(D0,"DIV",{class:!0,id:!0});var v_=n(bg);Eb=p(v_,"Your project is feasible"),v_.forEach(a),Ib=c(D0),Uu=r(D0,"P",{style:!0,class:!0,id:!0});var P0=n(Uu);Db=p(P0,`Review your results to explore the different possibilities and
            `),Pb=r(P0,"BR",{}),Vb=p(P0,`
            book a slot with us for personalised guidance on next steps`),P0.forEach(a),D0.forEach(a),kb=c($v),$u=r($v,"DIV",{class:!0});var xm=n($u);Hu=r(xm,"A",{id:!0,class:!0,href:!0});var V0=n(Hu);yg=r(V0,"IMG",{class:!0,src:!0,alt:!0}),Sb=c(V0),Mm=r(V0,"SPAN",{});var g_=n(Mm);Tb=p(g_,"Book a call with us"),g_.forEach(a),V0.forEach(a),Ab=c(xm),Wu=r(xm,"A",{id:!0,class:!0,href:!0});var k0=n(Wu);wg=r(k0,"IMG",{class:!0,src:!0,alt:!0}),Ob=c(k0),jm=r(k0,"SPAN",{});var h_=n(jm);Fb=p(h_,"Learn more"),h_.forEach(a),k0.forEach(a),Lb=c(xm),zd=r(xm,"BUTTON",{id:!0,class:!0,href:!0,onclick:!0});var S0=n(zd);_g=r(S0,"IMG",{class:!0,src:!0,alt:!0}),Cb=c(S0),Nm=r(S0,"SPAN",{});var m_=n(Nm);Gb=p(m_,"Calculate"),m_.forEach(a),S0.forEach(a),xm.forEach(a),$v.forEach(a),Mb=c(h0),tc=r(h0,"DIV",{id:!0,class:!0,style:!0}),n(tc).forEach(a),h0.forEach(a),jb=c(In),Bm=r(In,"SCRIPT",{});var x_=n(Bm);Nb=p(x_,`function calculate() {
        const data = {
          Ceramics: {
            feasibility: 'N'
          },
          Sand: { feasibility: 'N' },
          Dust: { feasibility: 'N' },
          Glass: { feasibility: 'N' },
          Metals: { feasibility: 'N' },
          'Cheese production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Butter production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Ice cream': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Beer production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Wine production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Spirits production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Ethanol production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Pulp production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Juice production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 45.0,
            electricityproduced: 35469.29475,
            heatproduced: 32631.75117,
            electricitysavingspa: 12414.2531625,
            heatsavingspa: 2284.2225819,
            fertiliser: 28835
          },
          'Tomato ketchup': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 45.0,
            electricityproduced: 35469.29475,
            heatproduced: 32631.75117,
            electricitysavingspa: 12414.2531625,
            heatsavingspa: 2284.2225819,
            fertiliser: 28835
          },
          'Bovine meat': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Pig meat': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Sheep meat': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Frozen potatoes': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Prepared potatoes (crisps)': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Potato starch': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Dried potatoes': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Sugar production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Yeast production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 35.0,
            electricityproduced: 27587.22925,
            heatproduced: 25380.25091,
            electricitysavingspa: 9655.5302375,
            heatsavingspa: 1776.6175637,
            fertiliser: 28835
          },
          'Vegetable oils production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 40.0,
            electricityproduced: 31528.262,
            heatproduced: 29006.00104,
            electricitysavingspa: 11034.8917,
            heatsavingspa: 2030.4200728,
            fertiliser: 28835
          },
          'Biodiesel production': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 50.0,
            electricityproduced: 39410.3275,
            heatproduced: 36257.5013,
            electricitysavingspa: 13793.614625,
            heatsavingspa: 2538.025091,
            fertiliser: 28835
          },
          'Pig manure': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 45.0,
            electricityproduced: 35469.29475,
            heatproduced: 32631.75117,
            electricitysavingspa: 12414.2531625,
            heatsavingspa: 2284.2225819,
            fertiliser: 28835
          },
          'Dairy Cattle': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 24.0,
            electricityproduced: 18916.9572,
            heatproduced: 17403.600624,
            electricitysavingspa: 6620.93502,
            heatsavingspa: 1218.25204368,
            fertiliser: 28835
          },
          'Non diary cattle': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 18.0,
            electricityproduced: 14187.7179,
            heatproduced: 13052.700468,
            electricitysavingspa: 4965.701265,
            heatsavingspa: 913.68903276,
            fertiliser: 28835
          },
          Buffalo: {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 10.0,
            electricityproduced: 7882.0655,
            heatproduced: 7251.50026,
            electricitysavingspa: 2758.722925,
            heatsavingspa: 507.6050182,
            fertiliser: 28835
          },
          'Chicken layer manure': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 39.0,
            electricityproduced: 30740.05545,
            heatproduced: 28280.851014,
            electricitysavingspa: 10759.0194075,
            heatsavingspa: 1979.65957098,
            fertiliser: 28835
          },
          'Chicken broiler manure': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 36.0,
            electricityproduced: 28375.4358,
            heatproduced: 26105.400936,
            electricitysavingspa: 9931.40253,
            heatsavingspa: 1827.37806552,
            fertiliser: 28835
          },
          Sheep: {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 19.0,
            electricityproduced: 14975.92445,
            heatproduced: 13777.850494,
            electricitysavingspa: 5241.5735575,
            heatsavingspa: 964.44953458,
            fertiliser: 28835
          },
          'Food waste': {
            feasibility: 'Y',
            limit: 5,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 45.0,
            electricityproduced: 35469.29,
            heatproduced: 32631.75,
            electricitysavingspa: 12414.25,
            heatsavingspa: 2284.22,
            fertiliser: 28835
          },
          'Fish waste': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Coffee grounds': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Crop residues': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Maize silage': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          Cereal: {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Grass silage': {
            feasibility: 'Y',
            limit: 400,
            technology: 'Anaerobic Digestion',
            kgperday: 100,
            energycontent: 59.0,
            electricityproduced: 46504.18645,
            heatproduced: 42783.851534,
            electricitysavingspa: 16276.4652575,
            heatsavingspa: 2994.86960738,
            fertiliser: 28835
          },
          'Pulp & Paper Waste': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 13.5,
            electricityproduced: 410953.5,
            heatproduced: 684922.5,
            electricitysavingspa: 143833.725,
            heatsavingspa: 47944.575,
            fertiliser: 91250
          },
          'Textile Waste': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 17.0,
            electricityproduced: 517497.0,
            heatproduced: 862495.0,
            electricitysavingspa: 181123.95,
            heatsavingspa: 60374.65,
            fertiliser: 91250
          },
          'PE Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 46.0,
            electricityproduced: 1400286.0,
            heatproduced: 2333810.0,
            electricitysavingspa: 490100.1,
            heatsavingspa: 163366.7,
            fertiliser: 91250
          },
          SRF: {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 22.0,
            electricityproduced: 669702.0,
            heatproduced: 1116170.0,
            electricitysavingspa: 234395.7,
            heatsavingspa: 78131.9,
            fertiliser: 91250
          },
          RDF: {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 18.0,
            electricityproduced: 547938.0,
            heatproduced: 913230.0000000001,
            electricitysavingspa: 191778.3,
            heatsavingspa: 63926.1,
            fertiliser: 91250
          },
          'PP Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 46.0,
            electricityproduced: 1400286.0,
            heatproduced: 2333810.0,
            electricitysavingspa: 490100.1,
            heatsavingspa: 163366.7,
            fertiliser: 91250
          },
          'PS Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 46.0,
            electricityproduced: 1400286.0,
            heatproduced: 2333810.0,
            electricitysavingspa: 490100.1,
            heatsavingspa: 163366.7,
            fertiliser: 91250
          },
          'PVC Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 25.0,
            electricityproduced: 761025.0,
            heatproduced: 1268375.0,
            electricitysavingspa: 266358.75,
            heatsavingspa: 88786.25,
            fertiliser: 91250
          },
          'PET Plastic': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 18.0,
            electricityproduced: 547938.0,
            heatproduced: 913230.0000000001,
            electricitysavingspa: 191778.3,
            heatsavingspa: 63926.1,
            fertiliser: 91250
          },
          Rubber: {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 17.0,
            electricityproduced: 517497.0,
            heatproduced: 862495.0,
            electricitysavingspa: 181123.95,
            heatsavingspa: 60374.65,
            fertiliser: 91250
          },
          'Wood waste': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 14.0,
            electricityproduced: 426174.0,
            heatproduced: 710290.0,
            electricitysavingspa: 149160.9,
            heatsavingspa: 49720.3,
            fertiliser: 91250
          },
          'Municipal Solid Waste (MSW)': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 2.0,
            electricityproduced: 60882.0,
            heatproduced: 101470.0,
            electricitysavingspa: 21308.7,
            heatsavingspa: 7102.9,
            fertiliser: 91250
          },
          'Medical Waste': {
            feasibility: 'Y',
            limit: 4000,
            technology: 'Pyrolysis',
            kgperday: 1000,
            energycontent: 18.0,
            electricityproduced: 547938.0,
            heatproduced: 913230.0000000001,
            electricitysavingspa: 191778.3,
            heatsavingspa: 63926.1,
            fertiliser: 91250
          }
        }

        var d = data[document.querySelector('#colorselector').value]
        var feasible = d['feasibility'] == 'Y'
        var wt1 = document.querySelector('#colorselector')
        document.querySelector('#waste-type1').innerHTML = wt1.options[wt1.selectedIndex].text

        var wt2 = document.querySelector('#colorselector2')
        document.querySelector('#waste-type2').innerHTML = wt2.options[wt2.selectedIndex].text

        var minlimit = d['limit'] <= wt2.options[wt2.selectedIndex].value

        document.querySelector('#feasible').innerHTML = feasible
          ? minlimit
            ? 'Your project is feasible'
            : 'This feedstock amount is <u style="color:#ec8b5a;">too small</u>'
          : wt1.options[wt1.selectedIndex].text + ' feedstock is <u style="color:#ec8b5a;">not</u> feasible'

        // document.querySelectorAll('.nofood').classList.toggle('hidden', wt1.value != 'Food waste')
        // document.querySelectorAll('.food').classList.toggle('hidden', wt1.value == 'Food waste')
        
        document.querySelector('#feasible-results').innerHTML =
          !feasible || minlimit
            ? // ? 'Review your results to explore the different possibilities and<br />book a slot with us for personalised guidance on next steps'
              "Take a look at the results below to find out how much you could save on energy bills, not to mention waste disposal costs! If you're curious about the investment (CAPEX), reach out and we'll dive deeper with a comprehensive feasibility study!"
            : d['technology'] == 'Pyrolysis'
            ? "To get the best out of <b>Pyrolysis</b>, you'll need at least<br /><b>" +
              d['limit'] +
              '</b> kilograms of <b>' +
              wt1.options[wt1.selectedIndex].text +
              '</b> waste per day.'
            : 'For cost-effective <b>Anaerobic Digestion</b> of <b>' +
              wt1.options[wt1.selectedIndex].text +
              "</b><br />waste you'll need a daily input of at least <b>" +
              d['limit'] +
              '</b> kilograms.'

        if (!feasible || minlimit) document.querySelector('#feasible').classList.toggle('mt-[-24px]')

        if (feasible & minlimit) {
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

          const techs = { 'Anaerobic Digestion': 'Anaerobic Digestion', Pyrolysis: 'Pyrolysis' }
          document.querySelector('#matched-tech').innerHTML = techs[d['technology']]
          document.querySelector('#matched-img').src = '/assets/medres/' + d['technology'] + '1.jpg'

          for (var key in d) {
            if (key != 'feasibility') {
              var el = document.querySelector('#' + key)
              if (el) {
                el.innerHTML = Math.round(d[key] * (key == 'energycontent' ? 1 : wt2.value / d['kgperday']), 0).toLocaleString()
              }
            }
          }

          document.querySelector('#energycontent-unit').innerHTML = d['technology'] == 'Pyrolysis' ? 'MJ/kg' : 'm³ biogas'
          document.querySelector('#char-fert').innerHTML = d['technology'] == 'Pyrolysis' ? 'Char' : 'Fertiliser'
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
      }`),x_.forEach(a),Bb=c(In),Nv=r(In,"DIV",{class:!0});var T0=n(Nv);Jh=r(T0,"DIV",{class:!0});var b_=n(Jh);qb=p(b_,"Copyright © 2023 Power for Planet"),b_.forEach(a),Rb=c(T0),Bv=r(T0,"DIV",{class:!0});var A0=n(Bv);Xh=r(A0,"DIV",{class:!0});var y_=n(Xh);Ub=p(y_,"Privacy Policy"),y_.forEach(a),$b=c(A0),Yu=r(A0,"DIV",{class:!0});var bm=n(Yu);Eg=r(bm,"IMG",{src:!0,alt:!0,class:!0}),Hb=c(bm),Ig=r(bm,"IMG",{src:!0,alt:!0,class:!0}),Wb=c(bm),Dg=r(bm,"IMG",{src:!0,alt:!0,class:!0}),bm.forEach(a),A0.forEach(a),T0.forEach(a),In.forEach(a),Yb=c(Qh),qm=r(Qh,"SCRIPT",{});var w_=n(qm);zb=p(w_,`function toggleElement(k) {
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
    }, 100)

    function sortCombo(comboBoxId) {
      //get drop down
      let comboBox = document.getElementById(comboBoxId)

      //create array for storage
      let optionsText = []
      let optionsTextSorted = []
      let optionsValues = []
      let sortedOptionsAll = []

      //store in the array
      Array.from(comboBox.options).forEach(x => {
        optionsText.push(x.text)
        optionsValues.push(x.value)
      })

      optionsTextSorted = [...optionsText]
      optionsTextSorted.sort()
      optionsTextSorted.forEach(x => {
        sortedOptionsAll.push({ value: optionsValues[optionsText.indexOf(x)], text: x })
      })

      //clear the combo box
      Array.from(comboBox.options).forEach(x => (x.text = ''))

      //fill the combobox
      for (let i = 0; i < sortedOptionsAll.length; i++) {
        document.getElementById(comboBoxId)[i].text = sortedOptionsAll[i].text
        document.getElementById(comboBoxId)[i].value = sortedOptionsAll[i].value
      }
    }

    // setTimeout(() => {
    //   sortCombo('colorselector')
    // }, 200)`),w_.forEach(a),Qh.forEach(a),this.h()},h(){t(u,"id","expandElement"),t(u,"class","fixed inset-0 bg-blue-500 text-white flex items-center justify-center"),t(i,"class","relative"),t(g,"id","expandButton"),t(g,"class","bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"),T(l,"display","none"),t(E,"class","mt-[-2000px] pt-[2000px]"),t(E,"id","map2"),t(k,"class","mt-[-840px] pt-[840px]"),t(k,"id","calculator2"),t(G,"class","mt-[-5000px] pt-[5000px]"),t(G,"id","map3"),t(b,"class","mt-[-3900px] pt-[3900px]"),t(b,"id","calculator3"),t(ge,"class","uppercase pb-5 text-pfp-green font-bold"),t(H,"class","text-3xl leading-[33px] font-bold text-[#2e3855] font-Poppins"),t(he,"class","pt-6"),t(fe,"class","mr-3"),S(fe.src,qe="/assets/arrow-right-circle.png")||t(fe,"src",qe),t(fe,"alt",""),t(ae,"class","mt-10 w-fit p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"),t(ae,"href","/explore/#map"),t(U,"class","w-3/5 p-10 pr-12 bg-white"),t(Ce,"class","absolute top-[30%] h-36 left-[72%] z-0"),S(Ce.src,me="/assets/cow 1.png")||t(Ce,"src",me),t(Ce,"alt",""),t(De,"class","absolute top-[35%] h-40 left-[68%] z-10"),S(De.src,Se="/assets/manure 1.png")||t(De,"src",Se),t(De,"alt",""),t(ee,"class","absolute top-[35%] h-28 left-[75%] z-30"),S(ee.src,Ne="/assets/apple 1.png")||t(ee,"src",Ne),t(ee,"alt",""),t(Ge,"class","absolute top-60 h-20 left-200 ml-10 z-0"),S(Ge.src,xe="/assets/leaf2 1.png")||t(Ge,"src",xe),t(Ge,"alt",""),t(P,"class","absolute top-[35%] h-48 left-[65%] z-30"),S(P.src,B="/assets/pet bottle 1.png")||t(P,"src",B),t(P,"alt",""),t(oe,"class","absolute top-[35%] h-48 left-[65%] z-20"),S(oe.src,J="/assets/woodchips 1.png")||t(oe,"src",J),t(oe,"alt",""),t(be,"class","absolute top-96 h-30 left-200 ml-80 z-0"),S(be.src,It="/assets/leaf1 1.png")||t(be,"src",It),t(be,"alt",""),t(Me,"class","absolute top-50 h-30 left-200 ml-80 z-0"),S(Me.src,He="/assets/fish 1.png")||t(Me,"src",He),t(Me,"alt",""),t(N,"class","w-2/5 p-4 bg-light-green"),t(N,"id","topRightCluster"),t(R,"class","flex rounded-2xl overflow-hidden mt-12"),t(Y,"class","w-full"),t(Oe,"class","text-3xl font-bold text-[#2e3855] font-Poppins text-center justify-center mb-10"),S(pt.src,gt="/assets/pet bottle 1.png")||t(pt,"src",gt),t(pt,"alt",""),t(tt,"class","flex justify-center h-40"),t(dt,"class","w-2/4"),t(ct,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(kt.src,Gt="/assets/Group 7 (2).png")||t(kt,"src",Gt),t(kt,"alt",""),t(vt,"class","flex justify-center h-40"),t(ht,"class","w-2/4"),t(se,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(Xe.src,wt="/assets/Group 7 (3).png")||t(Xe,"src",wt),t(Xe,"alt",""),t(Tt,"class","flex justify-center h-40"),t(jt,"class","w-2/4"),t(Je,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(Nt.src,_t="/assets/Group 7.png")||t(Nt,"src",_t),t(Nt,"alt",""),t(rt,"class","flex justify-center h-40"),t(ot,"class","w-2/4"),t(ve,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(Ut.src,At="/assets/Group 7 (1).png")||t(Ut,"src",At),t(Ut,"alt",""),t(Jt,"class","flex justify-center h-40"),t(Ot,"class","w-2/4"),t(Et,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(ce,"class","grid gap-6 md:grid-cols-5 grid-cols-2 w-full"),t(ce,"id","thegrid"),t(Ms,"class","relative z-10 w-full text-white mb-[-90px] mt-16 text-center font-semibold text-xl tracking-wider uppercase"),t(Xt,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent"),t(vs,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-end after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase"),t(Pt,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase"),t(ls,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase"),t(ts,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-start after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase"),t(Vs,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent"),t(lt,"class","flex w-full mt-10 pt-4 rounded-2xl mb-10 bg-[#2E3855]"),T(lt,"height","70px"),t(hs,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(Er,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(ws,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(us,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(ss,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(Gr,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(Kt,"class","grid gap-6 grid-cols-6 w-full"),t(Kt,"id","thegrid2"),t(rs,"class","p-3 text-white arrow arrow-bottom relative w-1/3 bg-gradient-to-r from-[#FF5252] to-[#59AFFF] rounded-2xl font-bold text-xl leading-10 text-[#2E3855] mb-0 text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-[#AD85AC] after:border-r-transparent after:border-l-transparent"),t(Mr,"class","flex justify-center mt-6 p-6"),t(js,"class","p-3 relative w-1/3 bg-[#D0E6F2] leading-10 text-[#2E3855] mb-0 rounded-2xl font-bold text-xl text-center"),t(ms,"class","flex justify-center mt-[-10px] p-6 mb-[-20px]"),t(Ae,"class","mb-10 bg-white mt-8 container mx-auto p-10 rounded-2xl"),T(Ae,"font-family","'Poppins', sans-serif"),t(ur,"class","h-80 p-6"),S(ur.src,jr="/assets/Frame 19 (1).png")||t(ur,"src",jr),t(ur,"alt",""),t(dr,"class","bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-l-2xl"),T(is,"font-family","'Poppins', sans-serif"),t(is,"class","uppercase pb-0 text-pfp-green font-bold"),T(ta,"font-family","'Poppins', sans-serif"),t(ta,"class","text-3xl font-bold text-[#2e3855] font-Poppins mt-5"),T(As,"font-family","'Public Sans', sans-serif"),t(As,"class","text-[#2E3855] tracking-wider mt-5"),t(xs,"class","md:w-3/5 w-full p-14 pt-8 pb-6"),t(cr,"class","flex md:flex-row flex-col items-center rounded-2xl bg-white w-full"),t(tr,"class","container mx-auto rounded-2xl"),t(ps,"class","mr-2"),S(ps.src,$l="/assets/x-circle.png")||t(ps,"src",$l),t(ps,"alt",""),t(sr,"type","button"),t(sr,"onclick","toggleElementOff('cow')"),T(sr,"font-family","'Public Sans', sans-serif"),T(sr,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(sr,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(qr,"class","relative left-[98%] rounded-r-2xl"),T(vr,"height","70%"),T(vr,"padding","20px"),T(vr,"margin-left","5%"),S(vr.src,Ya="/assets/cow 1.png")||t(vr,"src",Ya),t(vr,"alt",""),t(An,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(Es,"font-family","'Poppins', sans-serif"),t(Es,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(Rr,"class","font-bold text-xl pr-3"),t(hr,"class","ml-5 map-biogas info-pop"),S(hr.src,Ws="/assets/Frame 15.png")||t(hr,"src",Ws),t(hr,"alt",""),T(Bs,"font-family","'Public Sans', sans-serif"),t(Bs,"class","flex items-center text-[#2E3855] text-lg"),t(On,"class","font-bold text-xl"),T(Ur,"font-family","'Public Sans', sans-serif"),t(Ur,"class","text-[#2E3855] text-lg"),t(gr,"class","w-1/2"),t(sa,"class","flex justify-between items-center w-full mt-[-50px]"),t(ra,"class","mr-3"),S(ra.src,po="/assets/bar-chart.png")||t(ra,"src",po),t(ra,"alt",""),t(Ls,"type","button"),T(Ls,"font-family","'Public Sans', sans-serif"),t(Ls,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(mr,"class","mr-3"),S(mr.src,kr="/assets/bar-chart.png")||t(mr,"src",kr),t(mr,"alt",""),t(ar,"type","button"),T(ar,"font-family","'Public Sans', sans-serif"),t(ar,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Is,"class","flex"),t(Ys,"class","mr-3"),S(Ys.src,Ja="/assets/bar-chart.png")||t(Ys,"src",Ja),t(Ys,"alt",""),t(aa,"type","button"),T(aa,"font-family","'Public Sans', sans-serif"),t(aa,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(wi,"class","mr-3"),S(wi.src,Zd="/assets/bar-chart (1).png")||t(wi,"src",Zd),t(wi,"alt",""),t(na,"type","button"),T(na,"font-family","'Public Sans', sans-serif"),t(na,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t($r,"class","flex justify-start"),t(ys,"class","mr-3"),S(ys.src,Cn="/assets/book-open.png")||t(ys,"src",Cn),t(ys,"alt",""),t(Ei,"href","https://www.host.nl/en/case/guichen-france/"),t(Ei,"target","_blank"),T(Xa,"font-family","'Poppins', sans-serif"),t(Xa,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(br,"class","ml-5 map-case-study info-pop"),S(br.src,go="/assets/Frame 15.png")||t(br,"src",go),t(br,"alt",""),t(xr,"class","flex justify-start items-center mt-8 pl-2"),t(Mn,"class","mb-2 text-lg font-light text-[#2E3855]"),t(_a,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(la,"font-family","'Public Sans', sans-serif"),t(la,"class","mt-3 pl-2"),t(bs,"class","p-6"),S(ia.src,tn="/assets/medres/Anaerobic Digestion1.jpg")||t(ia,"src",tn),t(ia,"class","rounded-full w-16 h-16"),t(ia,"alt",""),t(mo,"class","mt-2"),T(Hl,"font-family","'Poppins', sans-serif"),t(Hl,"class","mt-0 font-bold text-lg leading-10 text-white"),T(Wl,"font-family","'Public Sans', sans-serif"),t(Wl,"class","text-white text-xl mt-1 tracking-wider"),t(Pa,"class","ml-5"),t(Ia,"class","flex"),t(rn,"class","mr-3"),S(rn.src,ac="/assets/arrow-right-circle.png")||t(rn,"src",ac),t(rn,"alt",""),t(Bn,"type","button"),t(Bn,"onclick","toggleAlOff();"),T(Bn,"font-family","'Public Sans', sans-serif"),t(Bn,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(sn,"href","#calculator"),t(Gs,"class","mr-3"),S(Gs.src,Va="/assets/arrow-right-circle.png")||t(Gs,"src",Va),t(Gs,"alt",""),t(oa,"type","button"),T(oa,"font-family","'Public Sans', sans-serif"),t(oa,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(fl,"href","/green-energy/"),t(yr,"class","flex w-full"),t(Cs,"class","flex flex-col p-5"),t(Ea,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(Ns,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(Ns,"id","cow"),t(ln,"class","mr-2"),S(ln.src,Yl="/assets/x-circle.png")||t(ln,"src",Yl),t(ln,"alt",""),t(nn,"type","button"),t(nn,"onclick","toggleElementOff('food')"),T(nn,"font-family","'Public Sans', sans-serif"),T(nn,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(nn,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(Sr,"class","relative left-[98%] rounded-r-2xl"),T(Sa,"height","130px"),T(Sa,"padding","20px"),T(Sa,"margin-left","17%"),S(Sa.src,nc="/assets/Group 7 (2).png")||t(Sa,"src",nc),t(Sa,"alt",""),t(Oi,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(zs,"font-family","'Poppins', sans-serif"),t(zs,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(Ta,"class","font-bold text-xl pr-3"),t(Ks,"class","ml-5 map-biogas info-pop"),S(Ks.src,Fi="/assets/Frame 15.png")||t(Ks,"src",Fi),t(Ks,"alt",""),T(qs,"font-family","'Public Sans', sans-serif"),t(qs,"class","flex items-center text-[#2E3855] text-lg"),t(Wr,"class","font-bold text-xl"),T(Hr,"font-family","'Public Sans', sans-serif"),t(Hr,"class","text-[#2E3855] text-lg"),t(wr,"class","w-1/2"),t(ka,"class","flex justify-between items-center w-full mt-[-50px]"),t(hl,"class","mr-3"),S(hl.src,bo="/assets/bar-chart.png")||t(hl,"src",bo),t(hl,"alt",""),t(cn,"type","button"),T(cn,"font-family","'Public Sans', sans-serif"),t(cn,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Js,"class","mr-3"),S(Js.src,ml="/assets/bar-chart.png")||t(Js,"src",ml),t(Js,"alt",""),t(ca,"type","button"),T(ca,"font-family","'Public Sans', sans-serif"),t(ca,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(on,"class","flex"),t(Un,"class","mr-3"),S(Un.src,of="/assets/bar-chart.png")||t(Un,"src",of),t(Un,"alt",""),t(da,"type","button"),T(da,"font-family","'Public Sans', sans-serif"),t(da,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(dn,"class","mr-3"),S(dn.src,cf="/assets/bar-chart (1).png")||t(dn,"src",cf),t(dn,"alt",""),t(Xs,"type","button"),T(Xs,"font-family","'Public Sans', sans-serif"),t(Xs,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Ci,"class","flex justify-start"),t(un,"class","mr-3"),S(un.src,ic="/assets/book-open.png")||t(un,"src",ic),t(un,"alt",""),t(Aa,"href","https://www.host.nl/en/case/guichen-france/"),t(Aa,"target","_blank"),T(Gi,"font-family","'Poppins', sans-serif"),t(Gi,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(wo,"class","ml-5 map-case-study info-pop"),S(wo.src,df="/assets/Frame 15.png")||t(wo,"src",df),t(wo,"alt",""),t($n,"class","flex justify-start items-center mt-8 pl-2"),t(_o,"class","mb-2 text-lg font-light text-[#2E3855]"),t(Yn,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(bl,"font-family","'Public Sans', sans-serif"),t(bl,"class","mt-3 pl-2"),t(Ds,"class","p-6"),S(Mi.src,pn="/assets/medres/Anaerobic Digestion1.jpg")||t(Mi,"src",pn),t(Mi,"class","rounded-full w-16 h-16"),t(Mi,"alt",""),t(Io,"class","mt-2"),T(El,"font-family","'Poppins', sans-serif"),t(El,"class","mt-0 font-bold text-lg leading-10 text-white"),T(Kn,"font-family","'Public Sans', sans-serif"),t(Kn,"class","text-white text-xl mt-1 tracking-wider"),t(La,"class","ml-5"),t(Fa,"class","flex"),t(Ni,"class","mr-3"),S(Ni.src,Xl="/assets/arrow-right-circle.png")||t(Ni,"src",Xl),t(Ni,"alt",""),t(Ca,"type","button"),t(Ca,"onclick","toggleAlOff();"),T(Ca,"font-family","'Public Sans', sans-serif"),t(Ca,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(vn,"href","#calculator"),t(Ql,"class","mr-3"),S(Ql.src,Po="/assets/arrow-right-circle.png")||t(Ql,"src",Po),t(Ql,"alt",""),t(Ga,"type","button"),T(Ga,"font-family","'Public Sans', sans-serif"),t(Ga,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(Do,"href","/green-energy/"),t(Tr,"class","flex w-full"),t(zn,"class","flex flex-col p-5"),t(Kl,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(lr,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(lr,"id","food"),t(qi,"class","mr-2"),S(qi.src,Vo="/assets/x-circle.png")||t(qi,"src",Vo),t(qi,"alt",""),t(fa,"type","button"),t(fa,"onclick","toggleElementOff('bottle')"),T(fa,"font-family","'Public Sans', sans-serif"),T(fa,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(fa,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(ua,"class","relative left-[98%] rounded-r-2xl"),T(Pl,"height","130px"),T(Pl,"padding","20px"),T(Pl,"margin-left","30%"),S(Pl.src,ad="/assets/pet bottle 1.png")||t(Pl,"src",ad),t(Pl,"alt",""),t(ko,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(gn,"font-family","'Poppins', sans-serif"),t(gn,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(hn,"class","font-bold text-xl pr-3"),t(Vl,"class","ml-5 map-gcv info-pop"),S(Vl.src,fc="/assets/Frame 15.png")||t(Vl,"src",fc),t(Vl,"alt",""),T(Kr,"font-family","'Public Sans', sans-serif"),t(Kr,"class","flex items-center text-[#2E3855] text-lg"),t(kl,"class","font-bold text-xl"),T(ei,"font-family","'Public Sans', sans-serif"),t(ei,"class","text-[#2E3855] text-lg"),t(zr,"class","w-1/2"),t(Ma,"class","flex justify-between items-center w-full mt-[-50px]"),t(mn,"class","mr-3"),S(mn.src,nd="/assets/bar-chart.png")||t(mn,"src",nd),t(mn,"alt",""),t(pa,"type","button"),T(pa,"font-family","'Public Sans', sans-serif"),t(pa,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Tl,"class","mr-3"),S(Tl.src,ti="/assets/bar-chart.png")||t(Tl,"src",ti),t(Tl,"alt",""),t(Sl,"type","button"),T(Sl,"font-family","'Public Sans', sans-serif"),t(Sl,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Xn,"class","flex"),t(Al,"class","mr-3"),S(Al.src,pf="/assets/bar-chart.png")||t(Al,"src",pf),t(Al,"alt",""),t(va,"type","button"),T(va,"font-family","'Public Sans', sans-serif"),t(va,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(xn,"class","mr-3"),S(xn.src,Fl="/assets/bar-chart (1).png")||t(xn,"src",Fl),t(xn,"alt",""),t(Ol,"type","button"),T(Ol,"font-family","'Public Sans', sans-serif"),t(Ol,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Jr,"class","flex justify-start"),t(ga,"class","mr-3"),S(ga.src,Oo="/assets/book-open.png")||t(ga,"src",Oo),t(ga,"alt",""),t(Na,"href","https://www.host.nl/en/case/guichen-france/"),t(Na,"target","_blank"),T(bn,"font-family","'Poppins', sans-serif"),t(bn,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(yn,"class","ml-5 map-case-study info-pop"),S(yn.src,$i="/assets/Frame 15.png")||t(yn,"src",$i),t(yn,"alt",""),t(Qn,"class","flex justify-start items-center mt-8 pl-2"),t(Zn,"class","mb-2 text-lg font-light text-[#2E3855]"),t(ha,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(Xr,"font-family","'Public Sans', sans-serif"),t(Xr,"class","mt-3 pl-2"),t(Ps,"class","p-6"),S(Co.src,Lg="/assets/medres/Pyrolysis1.jpg")||t(Co,"src",Lg),t(Co,"class","rounded-full w-16 h-16"),t(Co,"alt",""),t(el,"class","mt-2 w-16"),T(Ll,"font-family","'Poppins', sans-serif"),t(Ll,"class","mt-0 font-bold text-lg leading-10 text-white"),T(cd,"font-family","'Public Sans', sans-serif"),t(cd,"class","text-white text-xl mt-1 tracking-wider"),t(tl,"class","ml-5"),t(ni,"class","flex"),t(Mo,"class","mr-3"),S(Mo.src,Gg="/assets/arrow-right-circle.png")||t(Mo,"src",Gg),t(Mo,"alt",""),t(_r,"type","button"),t(_r,"onclick","toggleAlOff();"),T(_r,"font-family","'Public Sans', sans-serif"),t(_r,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(Go,"href","#calculator"),t(No,"class","mr-3"),S(No.src,Mg="/assets/arrow-right-circle.png")||t(No,"src",Mg),t(No,"alt",""),t(jo,"type","button"),T(jo,"font-family","'Public Sans', sans-serif"),t(jo,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(gu,"href","/green-energy/"),t(_c,"class","flex w-full"),t(qa,"class","flex flex-col p-5"),t(Lo,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(Qs,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(Qs,"id","bottle"),t(Cl,"class","mr-2"),S(Cl.src,mf="/assets/x-circle.png")||t(Cl,"src",mf),t(Cl,"alt",""),t(Yi,"type","button"),t(Yi,"onclick","toggleElementOff('technology')"),T(Yi,"font-family","'Public Sans', sans-serif"),T(Yi,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(Yi,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(Ec,"class","relative left-[98%] rounded-r-2xl"),T(Ic,"height","130px"),T(Ic,"padding","20px"),T(Ic,"margin-left","10%"),S(Ic.src,jg="/assets/Group14.png")||t(Ic,"src",jg),t(Ic,"alt",""),t(zi,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(ud,"font-family","'Poppins', sans-serif"),t(ud,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(Dc,"class","font-bold text-xl"),t(Gl,"class","ml-5 map-gcv info-pop"),S(Gl.src,bf="/assets/Frame 15.png")||t(Gl,"src",bf),t(Gl,"alt",""),T(qo,"font-family","'Public Sans', sans-serif"),t(qo,"class","flex items-center text-[#2E3855] text-lg"),t(yf,"class","font-bold text-xl"),T(pd,"font-family","'Public Sans', sans-serif"),t(pd,"class","text-[#2E3855] text-lg"),t(Bo,"class","w-1/2"),t(Ra,"class","flex justify-between items-center w-full mt-[-50px]"),t(Vc,"class","mr-3"),S(Vc.src,eg="/assets/bar-chart.png")||t(Vc,"src",eg),t(Vc,"alt",""),t(Pc,"type","button"),T(Pc,"font-family","'Public Sans', sans-serif"),t(Pc,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(xu,"class","mr-3"),S(xu.src,Pm="/assets/bar-chart.png")||t(xu,"src",Pm),t(xu,"alt",""),t(Ml,"type","button"),T(Ml,"font-family","'Public Sans', sans-serif"),t(Ml,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(vd,"class","flex"),t(Ji,"class","mr-3"),S(Ji.src,Vm="/assets/bar-chart.png")||t(Ji,"src",Vm),t(Ji,"alt",""),t(Ki,"type","button"),T(Ki,"font-family","'Public Sans', sans-serif"),t(Ki,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Tc,"class","mr-3"),S(Tc.src,km="/assets/bar-chart (1).png")||t(Tc,"src",km),t(Tc,"alt",""),t(Sc,"type","button"),T(Sc,"font-family","'Public Sans', sans-serif"),t(Sc,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(gd,"class","flex justify-start"),t(bu,"class","mr-3"),S(bu.src,tg="/assets/book-open.png")||t(bu,"src",tg),t(bu,"alt",""),t(wu,"href","https://www.host.nl/en/case/guichen-france/"),t(wu,"target","_blank"),T(yu,"font-family","'Poppins', sans-serif"),t(yu,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(Ac,"class","ml-5 map-case-study info-pop"),S(Ac.src,sg="/assets/Frame 15.png")||t(Ac,"src",sg),t(Ac,"alt",""),t(Ro,"class","flex justify-start items-center mt-8 pl-2"),t(Uo,"class","mb-2 text-lg font-light text-[#2E3855]"),t(hd,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(Oc,"font-family","'Public Sans', sans-serif"),t(Oc,"class","mt-3 pl-2"),t(wn,"class","p-6"),S(Eu.src,Sm="/assets/medres/Pyrolysis1.jpg")||t(Eu,"src",Sm),t(Eu,"class","rounded-full w-16 h-16"),t(Eu,"alt",""),t(xd,"class","mt-2 w-16"),T(Iu,"font-family","'Poppins', sans-serif"),t(Iu,"class","mt-0 font-bold text-lg leading-10 text-white"),T(Du,"font-family","'Public Sans', sans-serif"),t(Du,"class","text-white text-xl mt-1 tracking-wider"),t(bd,"class","ml-5"),t(md,"class","flex"),t(Vu,"class","mr-3"),S(Vu.src,Tm="/assets/arrow-right-circle.png")||t(Vu,"src",Tm),t(Vu,"alt",""),t(ii,"type","button"),t(ii,"onclick","toggleAlOff();"),T(ii,"font-family","'Public Sans', sans-serif"),t(ii,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(yd,"href","#calculator"),t(Fc,"class","mr-3"),S(Fc.src,Am="/assets/arrow-right-circle.png")||t(Fc,"src",Am),t(Fc,"alt",""),t(Qi,"type","button"),T(Qi,"font-family","'Public Sans', sans-serif"),t(Qi,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(Ef,"href","/green-energy/"),t(Ho,"class","flex w-full"),t($o,"class","flex flex-col p-5"),t(_f,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(li,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(li,"id","technology"),t(Zt,"class","items-center rounded-2xl"),t(Zt,"id","cow-panel"),T(Zt,"z-index","30"),T(Zt,"position","relative"),T(Zt,"top","0px"),T(Zt,"left","0px"),T(Zt,"width","700px"),T(Zt,"height","0px"),t(jl,"id","cow-shadow"),t(jl,"class","bg-base-100"),T(jl,"width","1000px"),T(jl,"height","750px"),T(jl,"position","relative"),T(jl,"left","-1000px"),T(jl,"top","0px"),T(jl,"margin-bottom","-750px"),T(jl,"z-index","39"),t($t,"id","map"),t($t,"class","pt-10"),t(Su,"class","mr-3"),S(Su.src,Om="/assets/Group 7 (2).png")||t(Su,"src",Om),t(Su,"alt",""),t(Zi,"type","button"),t(Zi,"onclick","toggleElement('food')"),T(Zi,"font-family","'Public Sans', sans-serif"),T(Zi,"left","520px"),T(Zi,"top","-430px"),t(Zi,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(Cc,"class","mr-3"),S(Cc.src,rg="/assets/manure 1.png")||t(Cc,"src",rg),t(Cc,"alt",""),t(eo,"type","button"),t(eo,"onclick","toggleElement('cow')"),T(eo,"font-family","'Public Sans', sans-serif"),T(eo,"left","780px"),T(eo,"top","-200px"),t(eo,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(_n,"class","mr-3"),S(_n.src,ag="/assets/pet bottle 1.png")||t(_n,"src",ag),t(_n,"alt",""),t(to,"type","button"),t(to,"onclick","toggleElement('bottle')"),T(to,"font-family","'Public Sans', sans-serif"),T(to,"left","120px"),T(to,"top","-70px"),t(to,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-2 mb-2"),T(_d,"color","#ffffff"),T(_d,"font-size","18px"),T(_d,"margin","-5px 0px -5px -5px"),t(sl,"type","button"),t(sl,"onclick","toggleElement('technology')"),T(sl,"font-family","'Public Sans', sans-serif"),T(sl,"background","#2e3855"),T(sl,"left","560px"),T(sl,"top","-530px"),t(sl,"class","techbuttons techbutton-dark w-40 h-12 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-base rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2 uppercase"),t(Ar,"id","buttons"),T(Ar,"z-index","99"),t(Id,"type","text"),t(Id,"placeholder","Search up waste..."),t(Id,"class","px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"),t(Dd,"class","i-heroicons-outline-search"),t(Gc,"aria-label","search"),t(Gc,"class","btn btn-square btn-ghost ml-[-45px]"),t(Ed,"class","inline-flex items-center justify-center"),t(Bl,"class","w-20 mr-3"),S(Bl.src,Fm="/assets/Frame 19.svg")||t(Bl,"src",Fm),t(Bl,"alt",""),T(Bl,"width","50px"),T(Bl,"height","50px"),t(so,"type","button"),t(so,"onclick","grow()"),T(so,"font-family","'Public Sans', sans-serif"),t(so,"class","growbutton ml-[10px] w-10 h-10 inline-flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mt-1"),t(Nl,"class","growbuttons inline-flex"),t(Nl,"id","full-screen-buttons"),T(Nl,"width","200px"),T(Nl,"position","relative"),T(Nl,"top","-10px"),T(Nl,"left","calc(100% - 300px)"),t(oi,"class","container duration-300 transform mx-auto w-full bg-cover bg-center bg-no-repeat bg-[url(/assets/field.png)] rounded-2xl"),T(oi,"padding-top","520px"),T(oi,"z-index","29"),t(oi,"id","field"),t(oi,"onclick","toggleAlOff();"),t(If,"class","pt-10 rounded-2xl mb-10"),t(Ou,"class","h-80 p-6"),S(Ou.src,ng="/assets/tech.png")||t(Ou,"src",ng),t(Ou,"alt",""),t(Df,"class","bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-l-2xl"),T(Fu,"font-family","'Poppins', sans-serif"),t(Fu,"class","uppercase pb-0 text-pfp-green font-bold"),T(Mc,"font-family","'Poppins', sans-serif"),t(Mc,"class","text-3xl font-bold text-[#2e3855] font-Poppins mt-5"),T(Lu,"font-family","'Public Sans', sans-serif"),t(Lu,"class","text-[#2E3855] tracking-wider mt-5"),t(Ua,"class","md:w-3/5 w-full p-14 pt-8 pb-6"),t(Vd,"class","flex md:flex-row flex-col items-center rounded-2xl bg-white w-full"),t(Pd,"class","container mx-auto rounded-2xl"),t(En,"id","calc-shadow-l"),t(En,"class","bg-base-100"),T(En,"width","1000px"),T(En,"height","750px"),T(En,"position","relative"),T(En,"left","-1000px"),T(En,"top","0px"),T(En,"margin-bottom","-750px"),T(En,"z-index","9"),t(ql,"id","calc-shadow-r"),t(ql,"class","bg-base-100"),T(ql,"width","1000px"),T(ql,"height","750px"),T(ql,"position","relative"),T(ql,"right","-100%"),T(ql,"top","0px"),T(ql,"margin-bottom","-750px"),T(ql,"z-index","9"),t(ro,"class","rounded-2xl pt-10"),t(ro,"id","calculator"),t(Sd,"class","uppercase text-xl m-5"),t(Td,"id","waste-type1"),t(Pf,"id","waste-type2"),t(lo,"class","text-2xl font-bold leading-10"),t(kd,"class","bg-[#E7F5F5] rounded-2xl text-center p-6 mb-10 text-[#2E3855]"),S(zo.src,lg="/assets/medres/Pyrolysis1.jpg")||t(zo,"src",lg),t(zo,"class","rounded-full w-24 h-24"),t(zo,"id","matched-img"),t(zo,"alt",""),t(Vf,"class","mx-auto"),t(ci,"class","uppercase text-xl m-5 mt-6"),t(Gu,"class","text-2xl font-bold leading-6"),t(Gu,"id","matched-tech"),t(Od,"class","text-center text-white"),t(Ad,"class","bg-[#2E3855] rounded-2xl flex flex-col justify-center p-6 py-12 mb-6"),t(no,"class","w-1/3 flex-col justify-center"),T(no,"font-family","'Poppins', sans-serif"),t(jc,"class","ml-5 calc-gcv info-pop"),S(jc.src,Lm="/assets/info.png")||t(jc,"src",Lm),t(jc,"alt",""),T(Ko,"font-family","'Poppins', sans-serif"),t(Ko,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(Cd,"id","energycontent"),t(kf,"id","energycontent-unit"),t(Ld,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(Fd,"class","flex justify-center"),t(Nc,"class","ml-5 calc-heat-produced info-pop"),S(Nc.src,ig="/assets/info.png")||t(Nc,"src",ig),t(Nc,"alt",""),T(Md,"font-family","'Poppins', sans-serif"),t(Md,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(di,"id","heatproduced"),t(ju,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(Gd,"class","flex justify-center mb-2"),t(Nu,"class","ml-5 calc-heat-savings info-pop"),S(Nu.src,og="/assets/info.png")||t(Nu,"src",og),t(Nu,"alt",""),T(Jo,"font-family","'Poppins', sans-serif"),t(Jo,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(Nd,"id","heatsavingspa"),t(Xo,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(jd,"class","flex justify-center mb-6"),t(io,"class","ml-5 calc-electricity-produced info-pop"),S(io.src,Cm="/assets/info.png")||t(io,"src",Cm),t(io,"alt",""),T(Bd,"font-family","'Poppins', sans-serif"),t(Bd,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(qd,"id","electricityproduced"),t(Bu,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(Qo,"class","flex justify-center mb-2"),t(qu,"class","ml-5 calc-electrical-savings info-pop"),S(qu.src,Gm="/assets/info.png")||t(qu,"src",Gm),t(qu,"alt",""),T(Rd,"font-family","'Poppins', sans-serif"),t(Rd,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(Sf,"id","electricitysavingspa"),t(Ud,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(rl,"class","flex justify-center mb-6"),t($h,"id","char-fert"),t(cg,"class","ml-5 calc-char info-pop"),S(cg.src,Q2="/assets/info.png")||t(cg,"src",Q2),t(cg,"alt",""),T(Tf,"font-family","'Poppins', sans-serif"),t(Tf,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(Hh,"id","fertiliser"),t(dg,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(Lv,"class","flex justify-center mb-6"),t(Qr,"class","w-2/3 flex-col justify-center mx-auto pl-10 mt-0"),t(Yo,"class","flex flex-row gap-8 items-center p-5 pt-16 mt-[-20px]"),t(ao,"class","duration-300 transition opacity-0 container mb-[-630px] bg-white p-16 pb-6 rounded-b-2xl"),t(ao,"id","results"),T(ug,"font-family","'Poppins', sans-serif"),t(ug,"class","card text-3xl font-bold text-[#2e3855] font-Poppins text-center"),T(fg,"font-family","'Public Sans', sans-serif"),t(fg,"class","text-[#2E3855] tracking-wider mt-5 px-0"),t(Gv,"class","text-center pb-10"),t(Mv,"class","h-60"),t(Mv,"id","calc-img"),S(Mv.src,Z2="/assets/cow 1 (1).png")||t(Mv,"src",Z2),t(Mv,"alt",""),t(Wh,"class","bg-[#E7F5F5] w-1/3 flex justify-center rounded-2xl mr-8"),t(pg,"type","button"),t(pg,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Ff,"class","bg-[#E7F5F5]"),Ff.__value="Beer production",Ff.value=Ff.__value,t(Lf,"class","bg-[#E7F5F5]"),Lf.__value="Wine production",Lf.value=Lf.__value,t(Cf,"class","bg-[#E7F5F5]"),Cf.__value="Spirits production",Cf.value=Cf.__value,t(Gf,"class","bg-[#E7F5F5]"),Gf.__value="Ethanol production",Gf.value=Gf.__value,t(Mf,"class","bg-[#E7F5F5]"),Mf.__value="Juice production",Mf.value=Mf.__value,t($d,"class","bg-[#e2e6e6]"),t($d,"label","Alcohol and Beverages Industry"),t(jf,"class","bg-[#E7F5F5]"),jf.__value="Biodiesel production",jf.value=jf.__value,t(vg,"class","bg-[#e2e6e6]"),t(vg,"label","Biofuels Industry"),t(Bf,"class","bg-[#E7F5F5]"),Bf.__value="Ceramics",Bf.value=Bf.__value,t(qf,"class","bg-[#E7F5F5]"),qf.__value="Sand",qf.value=qf.__value,t(Rf,"class","bg-[#E7F5F5]"),Rf.__value="Dust",Rf.value=Rf.__value,t(Nf,"class","bg-[#e2e6e6]"),t(Nf,"label","Construction and Demolition Waste"),t($f,"class","bg-[#E7F5F5]"),$f.__value="Cheese production",$f.value=$f.__value,t(Hf,"class","bg-[#E7F5F5]"),Hf.__value="Butter production",Hf.value=Hf.__value,t(Wf,"class","bg-[#E7F5F5]"),Wf.__value="Ice cream",Wf.value=Wf.__value,t(Uf,"class","bg-[#e2e6e6]"),t(Uf,"label","Dairy Industry"),t(Yf,"class","bg-[#E7F5F5]"),Yf.__value="Pulp production",Yf.value=Yf.__value,t(zf,"class","bg-[#E7F5F5]"),zf.__value="Tomato ketchup",zf.value=zf.__value,t(Kf,"class","bg-[#E7F5F5]"),Kf.__value="Frozen potatoes",Kf.value=Kf.__value,t(Jf,"class","bg-[#E7F5F5]"),Jf.__value="Prepared potatoes (crisps)",Jf.value=Jf.__value,t(Xf,"class","bg-[#E7F5F5]"),Xf.__value="Potato starch",Xf.value=Xf.__value,t(Qf,"class","bg-[#E7F5F5]"),Qf.__value="Dried potatoes",Qf.value=Qf.__value,t(Zf,"class","bg-[#E7F5F5]"),Zf.__value="Sugar production",Zf.value=Zf.__value,t(ep,"class","bg-[#E7F5F5]"),ep.__value="Yeast production",ep.value=ep.__value,t(tp,"class","bg-[#E7F5F5]"),tp.__value="Vegetable oils production",tp.value=tp.__value,t(ui,"class","bg-[#e2e6e6]"),t(ui,"label","Food Processing Industry"),t(sp,"class","bg-[#E7F5F5]"),sp.__value="Coffee grounds",sp.value=sp.__value,t(rp,"class","bg-[#E7F5F5]"),rp.__value="Crop residues",rp.value=rp.__value,t(ap,"class","bg-[#E7F5F5]"),ap.__value="Maize silage",ap.value=ap.__value,t(np,"class","bg-[#E7F5F5]"),np.__value="Cereal",np.value=np.__value,t(lp,"class","bg-[#E7F5F5]"),lp.__value="Grass silage",lp.value=lp.__value,t(Hd,"class","bg-[#e2e6e6]"),t(Hd,"label","Hospitality"),t(ip,"class","bg-[#E7F5F5]"),ip.__value="Pulp & Paper Waste",ip.value=ip.__value,t(op,"class","bg-[#E7F5F5]"),op.__value="Textile Waste",op.value=op.__value,t(cp,"class","bg-[#E7F5F5]"),cp.__value="SRF",cp.value=cp.__value,t(dp,"class","bg-[#E7F5F5]"),dp.__value="RDF",dp.value=dp.__value,t(up,"class","bg-[#E7F5F5]"),up.__value="Rubber",up.value=up.__value,t(fp,"class","bg-[#E7F5F5]"),fp.__value="Wood waste",fp.value=fp.__value,t(Bc,"class","bg-[#e2e6e6]"),t(Bc,"label","Industrial Waste"),t(pp,"class","bg-[#E7F5F5]"),pp.__value="Pig manure",pp.value=pp.__value,t(vp,"class","bg-[#E7F5F5]"),vp.__value="Dairy Cattle",vp.value=vp.__value,t(gp,"class","bg-[#E7F5F5]"),gp.__value="Non diary cattle",gp.value=gp.__value,t(hp,"class","bg-[#E7F5F5]"),hp.__value="Buffalo",hp.value=hp.__value,t(mp,"class","bg-[#E7F5F5]"),mp.__value="Chicken layer manure",mp.value=mp.__value,t(xp,"class","bg-[#E7F5F5]"),xp.__value="Chicken broiler manure",xp.value=xp.__value,t(bp,"class","bg-[#E7F5F5]"),bp.__value="Sheep",bp.value=bp.__value,t(yp,"class","bg-[#E7F5F5]"),yp.__value="Food waste",yp.value=yp.__value,t(wp,"class","bg-[#E7F5F5]"),wp.__value="Fish waste",wp.value=wp.__value,t(fi,"class","bg-[#e2e6e6]"),t(fi,"label","Manure and Animal Waste"),t(Ep,"class","bg-[#E7F5F5]"),Ep.__value="Bovine meat",Ep.value=Ep.__value,t(Ip,"class","bg-[#E7F5F5]"),Ip.__value="Pig meat",Ip.value=Ip.__value,t(Dp,"class","bg-[#E7F5F5]"),Dp.__value="Sheep meat",Dp.value=Dp.__value,t(_p,"class","bg-[#e2e6e6]"),t(_p,"label","Meat Industry"),t(Pp,"class","bg-[#E7F5F5]"),Pp.__value="Medical Waste",Pp.value=Pp.__value,t(gg,"class","bg-[#e2e6e6]"),t(gg,"label","Medical Waste"),t(Vp,"class","bg-[#E7F5F5]"),Vp.__value="Municipal Solid Waste (MSW)",Vp.value=Vp.__value,t(hg,"class","bg-[#e2e6e6]"),t(hg,"label","Municipal Waste"),t(kp,"class","bg-[#E7F5F5]"),kp.__value="PE Plastic",kp.value=kp.__value,t(Sp,"class","bg-[#E7F5F5]"),Sp.__value="PP Plastic",Sp.value=Sp.__value,t(Tp,"class","bg-[#E7F5F5]"),Tp.__value="PS Plastic",Tp.value=Tp.__value,t(Ap,"class","bg-[#E7F5F5]"),Ap.__value="PVC Plastic",Ap.value=Ap.__value,t(Op,"class","bg-[#E7F5F5]"),Op.__value="PET Plastic",Op.value=Op.__value,t(Wd,"class","bg-[#e2e6e6]"),t(Wd,"label","Plastic Waste"),t(Fp,"class","bg-[#E7F5F5]"),Fp.__value="Glass",Fp.value=Fp.__value,t(Lp,"class","bg-[#E7F5F5]"),Lp.__value="Metals",Lp.value=Lp.__value,t(jv,"class","bg-[#e2e6e6]"),t(jv,"label","Recyclable Materials"),t($a,"id","colorselector"),t($a,"class","w-full bg-transparent text-left border-0 line-h-20"),t(Yh,"class","button dropdown w-1/2 flex justify-between z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(Of,"class","inline-flex rounded-xl shadow-sm w-full"),t(Of,"role","group"),t(mg,"type","button"),t(mg,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Gp,"class","bg-[#E7F5F5]"),Gp.__value="5",Gp.value=Gp.__value,t(Mp,"class","bg-[#E7F5F5]"),Mp.__value="10",Mp.value=Mp.__value,t(jp,"class","bg-[#E7F5F5]"),jp.__value="100",jp.value=jp.__value,t(Np,"class","bg-[#E7F5F5]"),Np.__value="400",Np.value=Np.__value,t(Bp,"class","bg-[#E7F5F5]"),Bp.__value="1000",Bp.value=Bp.__value,t(qp,"class","bg-[#E7F5F5]"),qp.__value="4000",qp.value=qp.__value,t(Rp,"class","bg-[#E7F5F5]"),Rp.__value="10000",Rp.value=Rp.__value,t(Up,"class","bg-[#E7F5F5]"),Up.__value="20000",Up.value=Up.__value,t($p,"class","bg-[#E7F5F5]"),$p.__value="40000",$p.value=$p.__value,t(Hp,"class","bg-[#E7F5F5]"),Hp.__value="60000",Hp.value=Hp.__value,t(Rl,"id","colorselector2"),t(Rl,"class","w-full bg-transparent text-center focus-0 after:border-0 before:border-0 after:border-[#E7F5F5]"),t(zh,"class","button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(Cp,"class","inline-flex rounded-xl shadow-sm w-full mt-5"),t(Cp,"role","group"),t(xg,"type","button"),t(xg,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Yp,"class","bg-[#E7F5F5] nofood"),Yp.__value="electricity",Yp.value=Yp.__value,t(zp,"class","bg-[#E7F5F5] nofood"),zp.__value="heating-cooling",zp.value=zp.__value,t(Kp,"class","bg-[#E7F5F5] nofood"),Kp.__value="carbon-credits",Kp.value=Kp.__value,t(Jp,"class","bg-[#E7F5F5] food"),Jp.__value="cooking-biogas",Jp.value=Jp.__value,t(Xp,"class","bg-[#E7F5F5] nofood food"),Xp.__value="fertiliser",Xp.value=Xp.__value,t(Yd,"id","colorselector3"),t(Yd,"class","w-full bg-transparent text-center"),t(Kh,"class","button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(Wp,"class","inline-flex rounded-xl shadow-sm w-full mt-5"),t(Wp,"role","group"),t(ec,"class","w-2/3 pl-12 pr-0 md:mt-0 mt-5 duration-300 transform"),t(ec,"id","calc-selectors"),T(Af,"font-family","'Poppins', sans-serif"),t(Af,"class","flex md:flex-row flex-col items-center rounded-lg bg-white w-full mt-5"),t(bg,"class","text-4xl font-bold"),t(bg,"id","feasible"),T(Uu,"font-family","'Public Sans', sans-serif"),t(Uu,"class","text-[#2E3855] tracking-wider mt-5"),t(Uu,"id","feasible-results"),t(Qp,"class","w-[784px] ml-80 pl-16 h-60 p-10 pt-16 md:mt-0 mt-5 duration-300 transform absolute -translate-x-full opacity-0 -translate-y-full bg-[#E7F5F5] rounded-2xl"),t(Qp,"id","calc-message"),t(yg,"class","mr-3"),S(yg.src,ey="/assets/arrow-right-circle.png")||t(yg,"src",ey),t(yg,"alt",""),t(Hu,"id","call-button"),t(Hu,"class","duration-300 transform -translate-x-full opacity-0 font-bold mt-16 w-[375px] p-4 hover:bg-pfp-green bg-pfp-orange rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(Hu,"href","/contact"),t(wg,"class","mr-3"),S(wg.src,ty="/assets/arrow-right-circle.png")||t(wg,"src",ty),t(wg,"alt",""),t(Wu,"id","call-button2"),t(Wu,"class","duration-300 transform -translate-x-full opacity-0 font-bold mt-16 ml-1 w-[350px] p-4 hover:bg-pfp-green bg-pfp-navy rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(Wu,"href","/green-energy/"),t(_g,"class","mr-4 h-6"),S(_g.src,sy="/assets/calculator.png")||t(_g,"src",sy),t(_g,"alt",""),t(zd,"id","calc-button"),t(zd,"class","duration-300 transform -translate-x-[338px] font-bold mt-16 w-1/3 p-4 hover:bg-pfp-green bg-pfp-orange rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(zd,"href","/explore/#calculate"),t(zd,"onclick","calculate();"),t($u,"class","flex justify gap-16 w-full"),t(Zo,"class","container rounded-2xl bg-white p-20 pt-12 pb-16 z-23"),t(Zo,"id","growcalc"),t(tc,"id","calc-spacer"),t(tc,"class","bg-base-100"),T(tc,"width","1000px"),T(tc,"height","750px"),T(tc,"position","relative"),T(tc,"right","-100%"),T(tc,"top","0px"),T(tc,"margin-bottom","-750px"),T(tc,"z-index","9"),t(Cv,"id","calculate"),t(Jh,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Xh,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Eg.src,ry="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Eg,"src",ry),t(Eg,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Eg,"class","h-6 w-6"),S(Ig.src,ay="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ig,"src",ay),t(Ig,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Ig,"class","h-6 w-6"),S(Dg.src,ny="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Dg,"src",ny),t(Dg,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Dg,"class","h-6 w-6"),t(Yu,"class","flex items-center gap-5"),t(Bv,"class","flex-1 flex justify-end items-center gap-10"),t(Nv,"class","w-[1260px] flex justify-between items-center pt-[30px] pb-[50px]"),t(j,"class","h-full max-w-[1260px]"),t(_,"class","flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap mt-8")},m(Ft,ma){nt(Ft,l,ma),e(l,i),e(i,u),e(l,v),e(l,g),e(g,x),e(l,m),e(l,h),e(h,I),e(l,w),e(l,V),e(V,y),nt(Ft,D,ma),nt(Ft,E,ma),nt(Ft,F,ma),nt(Ft,k,ma),nt(Ft,A,ma),nt(Ft,G,ma),nt(Ft,M,ma),nt(Ft,b,ma),nt(Ft,C,ma),nt(Ft,_,ma),e(_,q),e(q,O),e(_,L),e(_,j),e(j,Y),e(Y,R),e(R,U),e(U,ge),e(ge,ue),e(U,K),e(U,H),e(H,re),e(U,Fe),e(U,he),e(he,ze),e(U,we),e(U,ae),e(ae,fe),e(ae,Ee),e(ae,de),e(de,Ue),e(R,Le),e(R,N),e(N,Q),e(Q,Ie),e(N,_e),e(N,Ce),e(N,et),e(N,De),e(N,Te),e(N,ee),e(N,Be),e(N,Ge),e(N,it),e(N,P),e(N,X),e(N,oe),e(N,le),e(N,be),e(N,Ke),e(N,Me),e(j,ft),e(j,Ae),e(Ae,je),e(je,qt),e(Ae,Lt),e(Ae,Oe),e(Oe,yt),e(Ae,Vt),e(Ae,ce),e(ce,ct),e(ct,tt),e(tt,pt),e(ct,Ct),e(ct,dt),e(dt,Rt),e(ce,Dt),e(ce,se),e(se,vt),e(vt,kt),e(se,ut),e(se,ht),e(ht,Mt),e(ce,St),e(ce,Je),e(Je,Tt),e(Tt,Xe),e(Je,st),e(Je,jt),e(jt,Qt),e(ce,mt),e(ce,ve),e(ve,rt),e(rt,Nt),e(ve,at),e(ve,ot),e(ot,Ht),e(ce,xt),e(ce,Et),e(Et,Jt),e(Jt,Ut),e(Et,zt),e(Et,Ot),e(Ot,Bt),e(Ae,bt),e(Ae,Ms),e(Ms,as),e(Ae,Yt),e(Ae,lt),e(lt,Xt),e(lt,ns),e(lt,vs),e(vs,W),e(lt,gs),e(lt,Pt),e(Pt,os),e(lt,es),e(lt,ls),e(ls,Zs),e(lt,Fr),e(lt,ts),e(ts,cs),e(lt,ir),e(lt,Vs),e(Ae,$s),e(Ae,Kt),e(Kt,hs),e(hs,ks),e(Kt,Lr),e(Kt,Er),e(Er,Ir),e(Kt,er),e(Kt,ws),e(ws,or),e(Kt,ds),e(Kt,us),e(us,Zr),e(Kt,Cr),e(Kt,ss),e(ss,Ss),e(Kt,kn),e(Kt,Gr),e(Gr,Ts),e(Ae,Sn),e(Ae,Mr),e(Mr,rs),e(rs,Dr),e(Ae,Hs),e(Ae,ms),e(ms,js),e(js,ba),e(j,Pr),e(j,$t),e($t,tr),e(tr,cr),e(cr,dr),e(dr,ur),e(cr,_s),e(cr,xs),e(xs,ol),e(ol,pi),e(xs,ea),e(xs,is),e(is,vi),e(xs,Nr),e(xs,ta),e(ta,gi),e(ta,cl),e(ta,fo),e(xs,fs),e(xs,As),e(As,Br),e($t,Wa),e($t,Zt),e(Zt,fr),e(fr,Vr),e(Zt,pr),e(Zt,Ns),e(Ns,qr),e(qr,ya),e(ya,Tn),e(qr,dl),e(qr,sr),e(sr,ps),e(Ns,hi),e(Ns,bs),e(bs,sa),e(sa,An),e(An,vr),e(sa,mi),e(sa,gr),e(gr,Es),e(Es,rr),e(gr,Os),e(gr,Bs),e(Bs,Rr),e(Rr,za),e(Bs,xi),e(Bs,hr),e(gr,Fs),e(gr,Ur),e(Ur,On),e(On,Fn),e(Ur,Ka),e(bs,bi),e(bs,Is),e(Is,Ls),e(Ls,ra),e(Ls,yi),e(Is,Ln),e(Is,ar),e(ar,mr),e(ar,nr),e(bs,ul),e(bs,$r),e($r,aa),e(aa,Ys),e(aa,Jc),e($r,Xc),e($r,na),e(na,wi),e(na,vo),e(bs,_i),e(bs,xr),e(xr,ys),e(xr,Gn),e(xr,Xa),e(Xa,Ei),e(Ei,Ii),e(xr,wa),e(xr,br),e(bs,Qc),e(bs,la),e(la,Mn),e(Mn,Zc),e(la,Di),e(la,_a),e(_a,Qa),e(Qa,jn),e(_a,lf),e(_a,ho),e(ho,Za),e(Ns,en),e(Ns,Ea),e(Ea,Cs),e(Cs,Ia),e(Ia,mo),e(mo,ia),e(Ia,Da),e(Ia,Pa),e(Pa,Hl),e(Hl,Pi),e(Pa,Vi),e(Pa,Wl),e(Wl,ki),e(Cs,Nn),e(Cs,yr),e(yr,sn),e(sn,Bn),e(Bn,rn),e(Bn,ed),e(yr,xo),e(yr,fl),e(fl,oa),e(oa,Gs),e(oa,Si),e(Zt,eu),e(Zt,lr),e(lr,Sr),e(Sr,an),e(an,Ti),e(Sr,Ai),e(Sr,nn),e(nn,ln),e(lr,pl),e(lr,Ds),e(Ds,ka),e(ka,Oi),e(Oi,Sa),e(ka,td),e(ka,wr),e(wr,zs),e(zs,vl),e(wr,qn),e(wr,qs),e(qs,Ta),e(Ta,sd),e(qs,gl),e(qs,Ks),e(wr,tu),e(wr,Hr),e(Hr,Wr),e(Wr,su),e(Hr,rd),e(Ds,Yr),e(Ds,on),e(on,cn),e(cn,hl),e(cn,zl),e(on,ru),e(on,ca),e(ca,Js),e(ca,Rn),e(Ds,Li),e(Ds,Ci),e(Ci,da),e(da,Un),e(da,au),e(Ci,yo),e(Ci,Xs),e(Xs,dn),e(Xs,nu),e(Ds,lc),e(Ds,$n),e($n,un),e($n,lu),e($n,Gi),e(Gi,Aa),e(Aa,Hn),e($n,xl),e($n,wo),e(Ds,Wn),e(Ds,bl),e(bl,_o),e(_o,Eo),e(bl,Oa),e(bl,Yn),e(Yn,fn),e(fn,iu),e(Yn,oc),e(Yn,yl),e(yl,cc),e(lr,wl),e(lr,Kl),e(Kl,zn),e(zn,Fa),e(Fa,Io),e(Io,Mi),e(Fa,_l),e(Fa,La),e(La,El),e(El,ou),e(La,Jl),e(La,Kn),e(Kn,cu),e(zn,ji),e(zn,Tr),e(Tr,vn),e(vn,Ca),e(Ca,Ni),e(Ca,Bi),e(Tr,uf),e(Tr,Do),e(Do,Ga),e(Ga,Ql),e(Ga,Il),e(Zt,Jn),e(Zt,Qs),e(Qs,ua),e(ua,Dl),e(Dl,ff),e(ua,du),e(ua,fa),e(fa,qi),e(Qs,Zl),e(Qs,Ps),e(Ps,Ma),e(Ma,ko),e(ko,Pl),e(Ma,dc),e(Ma,zr),e(zr,gn),e(gn,uu),e(zr,uc),e(zr,Kr),e(Kr,hn),e(hn,Ri),e(Kr,So),e(Kr,Vl),e(zr,pc),e(zr,ei),e(ei,kl),e(kl,ja),e(ei,vc),e(Ps,fu),e(Ps,Xn),e(Xn,pa),e(pa,mn),e(pa,Ui),e(Xn,gc),e(Xn,Sl),e(Sl,Tl),e(Sl,pu),e(Ps,si),e(Ps,Jr),e(Jr,va),e(va,Al),e(va,ri),e(Jr,To),e(Jr,Ol),e(Ol,xn),e(Ol,Ao),e(Ps,hc),e(Ps,Qn),e(Qn,ga),e(Qn,ld),e(Qn,bn),e(bn,Na),e(Na,id),e(Qn,mc),e(Qn,yn),e(Ps,ai),e(Ps,Xr),e(Xr,Zn),e(Zn,vf),e(Xr,Hi),e(Xr,ha),e(ha,xc),e(xc,bc),e(ha,Fo),e(ha,Ba),e(Ba,yc),e(Qs,wc),e(Qs,Lo),e(Lo,qa),e(qa,ni),e(ni,el),e(el,Co),e(ni,Yv),e(ni,tl),e(tl,Ll),e(Ll,od),e(tl,Cg),e(tl,cd),e(cd,vu),e(qa,zv),e(qa,_c),e(_c,Go),e(Go,_r),e(_r,Mo),e(_r,Kv),e(_c,gf),e(_c,gu),e(gu,jo),e(jo,No),e(jo,Jv),e(Zt,hf),e(Zt,li),e(li,Ec),e(Ec,Wi),e(Wi,hu),e(Ec,Xv),e(Ec,Yi),e(Yi,Cl),e(li,Qv),e(li,wn),e(wn,Ra),e(Ra,zi),e(zi,Ic),e(Ra,dd),e(Ra,Bo),e(Bo,ud),e(ud,fd),e(Bo,Ng),e(Bo,qo),e(qo,Dc),e(Dc,Zv),e(qo,xf),e(qo,Gl),e(Bo,mu),e(Bo,pd),e(pd,yf),e(yf,Bg),e(pd,ev),e(wn,qg),e(wn,vd),e(vd,Pc),e(Pc,Vc),e(Pc,Rg),e(vd,Ug),e(vd,Ml),e(Ml,xu),e(Ml,$g),e(wn,Hg),e(wn,gd),e(gd,Ki),e(Ki,Ji),e(Ki,kc),e(gd,tv),e(gd,Sc),e(Sc,Tc),e(Sc,Wg),e(wn,Yg),e(wn,Ro),e(Ro,bu),e(Ro,sv),e(Ro,yu),e(yu,wu),e(wu,Xi),e(Ro,rv),e(Ro,Ac),e(wn,zg),e(wn,Oc),e(Oc,Uo),e(Uo,Kg),e(Oc,Jg),e(Oc,hd),e(hd,_u),e(_u,av),e(hd,Xg),e(hd,nv),e(nv,wf),e(li,Qg),e(li,_f),e(_f,$o),e($o,md),e(md,xd),e(xd,Eu),e(md,Zg),e(md,bd),e(bd,Iu),e(Iu,lv),e(bd,iv),e(bd,Du),e(Du,eh),e($o,Pu),e($o,Ho),e(Ho,yd),e(yd,ii),e(ii,Vu),e(ii,wd),e(Ho,th),e(Ho,Ef),e(Ef,Qi),e(Qi,Fc),e(Qi,sh),e($t,ku),e($t,jl),e(j,rh),e(j,If),e(If,oi),e(oi,Lc),e(Lc,Ar),e(Ar,Zi),e(Zi,Su),e(Ar,ah),e(Ar,eo),e(eo,Cc),e(Ar,nh),e(Ar,to),e(to,_n),e(Ar,ov),e(Ar,sl),e(sl,_d),e(_d,lh),e(Ar,Tu),e(Ar,cv),e(cv,ih),e(Ar,oh),e(Ar,Au),e(Au,dv),e(Lc,ch),e(Lc,uv),e(uv,Wo),e(Lc,dh),e(Lc,Nl),e(Nl,Ed),e(Ed,Id),e(Ed,fv),e(Ed,Gc),e(Gc,Dd),e(Nl,pv),e(Nl,so),e(so,Bl),e(j,uh),e(j,ro),e(ro,Pd),e(Pd,Vd),e(Vd,Df),e(Df,Ou),e(Vd,fh),e(Vd,Ua),e(Ua,vv),e(vv,gv),e(Ua,ph),e(Ua,Fu),e(Fu,vh),e(Ua,hv),e(Ua,Mc),e(Mc,gh),e(Mc,hh),e(Mc,mv),e(Ua,xv),e(Ua,Lu),e(Lu,mh),e(ro,bv),e(ro,En),e(ro,xh),e(ro,ql),e(j,bh),e(j,ao),e(ao,Yo),e(Yo,no),e(no,kd),e(kd,Sd),e(Sd,yh),e(kd,yv),e(kd,lo),e(lo,Td),e(Td,wh),e(lo,wv),e(lo,_v),e(lo,Ev),e(lo,Pf),e(Pf,_h),e(lo,Cu),e(no,Eh),e(no,Ad),e(Ad,Vf),e(Vf,zo),e(Ad,Ih),e(Ad,Od),e(Od,ci),e(ci,Dh),e(Od,Ph),e(Od,Gu),e(Gu,Vh),e(Yo,Iv),e(Yo,Qr),e(Qr,Fd),e(Fd,Ko),e(Ko,kh),e(Ko,jc),e(Fd,Dv),e(Fd,Ld),e(Ld,Cd),e(Cd,Pv),e(Ld,Vv),e(Ld,kf),e(kf,Sh),e(Qr,Mu),e(Qr,Gd),e(Gd,Md),e(Md,Th),e(Md,Nc),e(Gd,Ah),e(Gd,ju),e(ju,di),e(di,Oh),e(ju,Fh),e(Qr,Lh),e(Qr,jd),e(jd,Jo),e(Jo,kv),e(Jo,Nu),e(jd,Ch),e(jd,Xo),e(Xo,Gh),e(Xo,Nd),e(Nd,Mh),e(Xo,Sv),e(Qr,Tv),e(Qr,Qo),e(Qo,Bd),e(Bd,jh),e(Bd,io),e(Qo,Nh),e(Qo,Bu),e(Bu,qd),e(qd,Av),e(Bu,Bh),e(Qr,qh),e(Qr,rl),e(rl,Rd),e(Rd,Rh),e(Rd,qu),e(rl,Ov),e(rl,Ud),e(Ud,Fv),e(Ud,Sf),e(Sf,Ru),e(Ud,Uh),e(Qr,q0),e(Qr,Lv),e(Lv,Tf),e(Tf,$h),e($h,R0),e(Tf,U0),e(Tf,cg),e(Lv,$0),e(Lv,dg),e(dg,Hh),e(Hh,H0),e(dg,W0),e(j,Y0),e(j,Cv),e(Cv,Zo),e(Zo,Gv),e(Gv,ug),e(ug,z0),e(Gv,K0),e(Gv,fg),e(fg,J0),e(Zo,X0),e(Zo,Af),e(Af,Wh),e(Wh,Mv),e(Af,Q0),e(Af,ec),e(ec,Of),e(Of,pg),e(pg,Z0),e(Of,ex),e(Of,Yh),e(Yh,$a),e($a,$d),e($d,Ff),e(Ff,tx),e($d,Lf),e(Lf,sx),e($d,Cf),e(Cf,rx),e($d,Gf),e(Gf,ax),e($d,Mf),e(Mf,nx),e($a,vg),e(vg,jf),e(jf,lx),e($a,Nf),e(Nf,Bf),e(Bf,ix),e(Nf,qf),e(qf,ox),e(Nf,Rf),e(Rf,cx),e($a,Uf),e(Uf,$f),e($f,dx),e(Uf,Hf),e(Hf,ux),e(Uf,Wf),e(Wf,fx),e($a,ui),e(ui,Yf),e(Yf,px),e(ui,zf),e(zf,vx),e(ui,Kf),e(Kf,gx),e(ui,Jf),e(Jf,hx),e(ui,Xf),e(Xf,mx),e(ui,Qf),e(Qf,xx),e(ui,Zf),e(Zf,bx),e(ui,ep),e(ep,yx),e(ui,tp),e(tp,wx),e($a,Hd),e(Hd,sp),e(sp,_x),e(Hd,rp),e(rp,Ex),e(Hd,ap),e(ap,Ix),e(Hd,np),e(np,Dx),e(Hd,lp),e(lp,Px),e($a,Bc),e(Bc,ip),e(ip,Vx),e(Bc,op),e(op,kx),e(Bc,cp),e(cp,Sx),e(Bc,dp),e(dp,Tx),e(Bc,up),e(up,Ax),e(Bc,fp),e(fp,Ox),e($a,fi),e(fi,pp),e(pp,Fx),e(fi,vp),e(vp,Lx),e(fi,gp),e(gp,Cx),e(fi,hp),e(hp,Gx),e(fi,mp),e(mp,Mx),e(fi,xp),e(xp,jx),e(fi,bp),e(bp,Nx),e(fi,yp),e(yp,Bx),e(fi,wp),e(wp,qx),e($a,_p),e(_p,Ep),e(Ep,Rx),e(_p,Ip),e(Ip,Ux),e(_p,Dp),e(Dp,$x),e($a,gg),e(gg,Pp),e(Pp,Hx),e($a,hg),e(hg,Vp),e(Vp,Wx),e($a,Wd),e(Wd,kp),e(kp,Yx),e(Wd,Sp),e(Sp,zx),e(Wd,Tp),e(Tp,Kx),e(Wd,Ap),e(Ap,Jx),e(Wd,Op),e(Op,Xx),e($a,jv),e(jv,Fp),e(Fp,Qx),e(jv,Lp),e(Lp,Zx),e(ec,eb),e(ec,Cp),e(Cp,mg),e(mg,tb),e(Cp,sb),e(Cp,zh),e(zh,Rl),e(Rl,Gp),e(Gp,rb),e(Rl,Mp),e(Mp,ab),e(Rl,jp),e(jp,nb),e(Rl,Np),e(Np,lb),e(Rl,Bp),e(Bp,ib),e(Rl,qp),e(qp,ob),e(Rl,Rp),e(Rp,cb),e(Rl,Up),e(Up,db),e(Rl,$p),e($p,ub),e(Rl,Hp),e(Hp,fb),e(ec,pb),e(ec,Wp),e(Wp,xg),e(xg,vb),e(Wp,gb),e(Wp,Kh),e(Kh,Yd),e(Yd,Yp),e(Yp,hb),e(Yd,zp),e(zp,mb),e(Yd,Kp),e(Kp,xb),e(Yd,Jp),e(Jp,bb),e(Yd,Xp),e(Xp,yb),e(ec,wb),e(ec,Xm),e(Zo,_b),e(Zo,Qp),e(Qp,bg),e(bg,Eb),e(Qp,Ib),e(Qp,Uu),e(Uu,Db),e(Uu,Pb),e(Uu,Vb),e(Zo,kb),e(Zo,$u),e($u,Hu),e(Hu,yg),e(Hu,Sb),e(Hu,Mm),e(Mm,Tb),e($u,Ab),e($u,Wu),e(Wu,wg),e(Wu,Ob),e(Wu,jm),e(jm,Fb),e($u,Lb),e($u,zd),e(zd,_g),e(zd,Cb),e(zd,Nm),e(Nm,Gb),e(Cv,Mb),e(Cv,tc),e(j,jb),e(j,Bm),e(Bm,Nb),e(j,Bb),e(j,Nv),e(Nv,Jh),e(Jh,qb),e(Nv,Rb),e(Nv,Bv),e(Bv,Xh),e(Xh,Ub),e(Bv,$b),e(Bv,Yu),e(Yu,Eg),e(Yu,Hb),e(Yu,Ig),e(Yu,Wb),e(Yu,Dg),e(_,Yb),e(_,qm),e(qm,zb),qc=!0},p:We,i(Ft){qc||(Wc(()=>{qc&&(Z&&Z.end(1),ie=Jd(Ce,Or,{x:100,duration:300,delay:500}),ie.start())}),Wc(()=>{qc&&(Re&&Re.end(1),ne=Jd(De,Or,{x:-100,duration:300,delay:500}),ne.start())}),Wc(()=>{qc&&($e&&$e.end(1),Pe=Jd(ee,Or,{x:-100,y:-100,duration:300,delay:500}),Pe.start())}),Wc(()=>{qc&&(Qe&&Qe.end(1),Ze=Jd(Ge,Or,{y:-100,duration:300,delay:500}),Ze.start())}),Wc(()=>{qc&&(z&&z.end(1),$=Jd(P,Or,{x:-100,duration:300,delay:500}),$.start())}),Wc(()=>{qc&&(ke&&ke.end(1),Ve=Jd(oe,Or,{x:50,duration:300,delay:500}),Ve.start())}),Wc(()=>{qc&&(te&&te.end(1),pe=Jd(be,Or,{x:-70,duration:300,delay:500}),pe.start())}),Wc(()=>{qc&&(Ye&&Ye.end(1),ye=Jd(Me,Or,{y:-100,duration:300,delay:500}),ye.start())}),qc=!0)},o(Ft){ie&&ie.invalidate(),Z=Xd(Ce,Or,{x:-100,duration:300}),ne&&ne.invalidate(),Re=Xd(De,Or,{x:100,duration:300}),Pe&&Pe.invalidate(),$e=Xd(ee,Or,{x:100,duration:300}),Ze&&Ze.invalidate(),Qe=Xd(Ge,Or,{x:100,duration:300}),$&&$.invalidate(),z=Xd(P,Or,{x:100,duration:300}),Ve&&Ve.invalidate(),ke=Xd(oe,Or,{x:-100,duration:300}),pe&&pe.invalidate(),te=Xd(be,Or,{y:100,duration:300}),ye&&ye.invalidate(),Ye=Xd(Me,Or,{x:100,duration:300}),qc=!1},d(Ft){Ft&&a(l),Ft&&a(D),Ft&&a(E),Ft&&a(F),Ft&&a(k),Ft&&a(A),Ft&&a(G),Ft&&a(M),Ft&&a(b),Ft&&a(C),Ft&&a(_),Ft&&Z&&Z.end(),Ft&&Re&&Re.end(),Ft&&$e&&$e.end(),Ft&&Qe&&Qe.end(),Ft&&z&&z.end(),Ft&&ke&&ke.end(),Ft&&te&&te.end(),Ft&&Ye&&Ye.end()}}}function X4(d){return lE(()=>{sc(".map-gcv",{theme:"tomato",allowHTML:!0,content:"This is the amount of heat energy that could be released if a certain amount of waste is completely burnt. It's like a measure of the <i>energy potential</i> of waste. A higher GCV means the waste can produce more energy."}),sc(".map-biogas",{theme:"tomato",allowHTML:!0,content:"This is the volume of biogas produced per unit of organic material during anaerobic digestion."}),sc(".map-case-study",{theme:"tomato",content:"Project Reference Biogas Plant: Guichen, France | HoSt"}),sc(".calc-gcv",{theme:"tomato",allowHTML:!0,content:"Energy content is the total amount of energy stored in waste. But instead of just heat energy, it also includes the energy that can be converted into electricity or other forms. It's the total <i>energy resource</i> the waste could provide."}),sc(".calc-heat-produced",{theme:"tomato",content:"This is the actual amount of heat energy generated when the waste is processed, like when you burn wood in a fireplace. This heat can be used directly (like to warm buildings) or can be converted into other forms of energy, like electricity."}),sc(".calc-heat-savings",{theme:"tomato",content:"This indicates how much heat energy a company can save by using the heat produced from waste processing, instead of getting it from conventional sources. This is assuming you're currently paying 6p/kWh"}),sc(".calc-electricity-produced",{theme:"tomato",allowHTML:!0,content:"This is the amount of electrical energy generated from processing the waste. This could be through burning the waste to generate steam, which drives a turbine to produce electricity, or through other methods. It's like the <i>power output</i> from the waste."}),sc(".calc-electrical-savings",{theme:"tomato",content:"This shows how much a company can save on electricity costs by using the electricity produced from waste processing, instead of purchasing it from the grid. This is based off the assumption you are paying 27p/kWh"}),sc(".calc-char",{theme:"tomato",content:"Char is the solid material that's left over after some waste processing methods, like pyrolysis and gasification. It can sometimes be used as a fuel or soil conditioner. This value shows how much char would be produced from the waste."})}),[]}class Q4 extends Pn{constructor(l){super(),Vn(this,l,X4,J4,Ha,{})}}function Z4(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,F,k,A,G,M,b,C,_,q,O,L,j,Y,R,U,ge,ue,K,H,re,Fe,he,ze,we,ae,fe,qe,Ee,de,Ue,Le,N,Q,Ie,_e,Ce,me,ie,Z,et,De,Se,ne,Re,Te,ee,Ne,Pe,$e,Be,Ge,xe,Ze,Qe,it,P,B,$,z,X,oe,J,Ve,ke,le,be,It,pe,te,Ke,Me,He,ye,Ye,ft,Ae,je,qt,Lt,Oe,yt,Vt,ce,ct,tt,pt,gt,Ct;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("News"),x=o(),m=s("div"),h=s("div"),I=s("div"),w=s("div"),V=o(),y=s("div"),D=s("div"),E=s("div"),F=f("June 15, 2023"),k=o(),A=s("div"),G=f("Examining the global impact of food production and mitigation strategies"),M=o(),b=s("a"),C=s("div"),_=s("img"),O=o(),L=s("div"),j=f("Read more"),Y=o(),R=s("div"),U=s("div"),ge=o(),ue=s("div"),K=s("div"),H=s("div"),re=f("May 9, 2023"),Fe=o(),he=s("div"),ze=f("A war worth fighting"),we=o(),ae=s("a"),fe=s("div"),qe=s("img"),de=o(),Ue=s("div"),Le=f("Read more"),N=o(),Q=s("div"),Ie=s("div"),_e=s("div"),Ce=o(),me=s("div"),ie=s("div"),Z=s("div"),et=f("April 6, 2023"),De=o(),Se=s("div"),ne=f("One ecosystem, one overall solution"),Re=o(),Te=s("a"),ee=s("div"),Ne=s("img"),$e=o(),Be=s("div"),Ge=f("Read more"),xe=o(),Ze=s("div"),Qe=s("div"),it=o(),P=s("div"),B=s("div"),$=s("div"),z=f("March 6, 2023"),X=o(),oe=s("div"),J=f("The “Great Greenwashing” of 2023"),Ve=o(),ke=s("a"),le=s("div"),be=s("img"),pe=o(),te=s("div"),Ke=f("Read more"),Me=o(),He=s("div"),ye=s("div"),Ye=f("Copyright © 2023 Power for Planet"),ft=o(),Ae=s("div"),je=s("div"),qt=f("Privacy Policy"),Lt=o(),Oe=s("div"),yt=s("img"),ce=o(),ct=s("img"),pt=o(),gt=s("img"),this.h()},l(dt){l=r(dt,"DIV",{class:!0});var Rt=n(l);i=r(Rt,"DIV",{class:!0});var Dt=n(i);u=r(Dt,"DIV",{class:!0});var se=n(u);v=r(se,"DIV",{});var vt=n(v);g=p(vt,"News"),vt.forEach(a),se.forEach(a),x=c(Dt),m=r(Dt,"DIV",{class:!0});var kt=n(m);h=r(kt,"DIV",{class:!0});var Gt=n(h);I=r(Gt,"DIV",{class:!0});var ut=n(I);w=r(ut,"DIV",{class:!0}),n(w).forEach(a),V=c(ut),y=r(ut,"DIV",{class:!0});var ht=n(y);D=r(ht,"DIV",{class:!0});var Mt=n(D);E=r(Mt,"DIV",{class:!0});var St=n(E);F=p(St,"June 15, 2023"),St.forEach(a),Mt.forEach(a),k=c(ht),A=r(ht,"DIV",{class:!0});var Je=n(A);G=p(Je,"Examining the global impact of food production and mitigation strategies"),Je.forEach(a),M=c(ht),b=r(ht,"A",{href:!0});var Tt=n(b);C=r(Tt,"DIV",{class:!0});var Xe=n(C);_=r(Xe,"IMG",{src:!0,alt:!0,class:!0}),O=c(Xe),L=r(Xe,"DIV",{});var wt=n(L);j=p(wt,"Read more"),wt.forEach(a),Xe.forEach(a),Tt.forEach(a),ht.forEach(a),ut.forEach(a),Y=c(Gt),R=r(Gt,"DIV",{class:!0});var st=n(R);U=r(st,"DIV",{class:!0}),n(U).forEach(a),ge=c(st),ue=r(st,"DIV",{class:!0});var jt=n(ue);K=r(jt,"DIV",{class:!0});var Qt=n(K);H=r(Qt,"DIV",{class:!0});var mt=n(H);re=p(mt,"May 9, 2023"),mt.forEach(a),Qt.forEach(a),Fe=c(jt),he=r(jt,"DIV",{class:!0});var ve=n(he);ze=p(ve,"A war worth fighting"),ve.forEach(a),we=c(jt),ae=r(jt,"A",{href:!0});var rt=n(ae);fe=r(rt,"DIV",{class:!0});var Nt=n(fe);qe=r(Nt,"IMG",{src:!0,alt:!0,class:!0}),de=c(Nt),Ue=r(Nt,"DIV",{});var _t=n(Ue);Le=p(_t,"Read more"),_t.forEach(a),Nt.forEach(a),rt.forEach(a),jt.forEach(a),st.forEach(a),Gt.forEach(a),N=c(kt),Q=r(kt,"DIV",{class:!0});var at=n(Q);Ie=r(at,"DIV",{class:!0});var ot=n(Ie);_e=r(ot,"DIV",{class:!0}),n(_e).forEach(a),Ce=c(ot),me=r(ot,"DIV",{class:!0});var Ht=n(me);ie=r(Ht,"DIV",{class:!0});var xt=n(ie);Z=r(xt,"DIV",{class:!0});var Et=n(Z);et=p(Et,"April 6, 2023"),Et.forEach(a),xt.forEach(a),De=c(Ht),Se=r(Ht,"DIV",{class:!0});var Jt=n(Se);ne=p(Jt,"One ecosystem, one overall solution"),Jt.forEach(a),Re=c(Ht),Te=r(Ht,"A",{href:!0});var Ut=n(Te);ee=r(Ut,"DIV",{class:!0});var At=n(ee);Ne=r(At,"IMG",{src:!0,alt:!0,class:!0}),$e=c(At),Be=r(At,"DIV",{});var zt=n(Be);Ge=p(zt,"Read more"),zt.forEach(a),At.forEach(a),Ut.forEach(a),Ht.forEach(a),ot.forEach(a),xe=c(at),Ze=r(at,"DIV",{class:!0});var Ot=n(Ze);Qe=r(Ot,"DIV",{class:!0}),n(Qe).forEach(a),it=c(Ot),P=r(Ot,"DIV",{class:!0});var Bt=n(P);B=r(Bt,"DIV",{class:!0});var bt=n(B);$=r(bt,"DIV",{class:!0});var Ms=n($);z=p(Ms,"March 6, 2023"),Ms.forEach(a),bt.forEach(a),X=c(Bt),oe=r(Bt,"DIV",{class:!0});var as=n(oe);J=p(as,"The “Great Greenwashing” of 2023"),as.forEach(a),Ve=c(Bt),ke=r(Bt,"A",{href:!0});var Yt=n(ke);le=r(Yt,"DIV",{class:!0});var lt=n(le);be=r(lt,"IMG",{src:!0,alt:!0,class:!0}),pe=c(lt),te=r(lt,"DIV",{});var Xt=n(te);Ke=p(Xt,"Read more"),Xt.forEach(a),lt.forEach(a),Yt.forEach(a),Bt.forEach(a),Ot.forEach(a),at.forEach(a),kt.forEach(a),Me=c(Dt),He=r(Dt,"DIV",{class:!0});var ns=n(He);ye=r(ns,"DIV",{class:!0});var vs=n(ye);Ye=p(vs,"Copyright © 2023 Power for Planet"),vs.forEach(a),ft=c(ns),Ae=r(ns,"DIV",{class:!0});var W=n(Ae);je=r(W,"DIV",{class:!0});var gs=n(je);qt=p(gs,"Privacy Policy"),gs.forEach(a),Lt=c(W),Oe=r(W,"DIV",{class:!0});var Pt=n(Oe);yt=r(Pt,"IMG",{src:!0,alt:!0,class:!0}),ce=c(Pt),ct=r(Pt,"IMG",{src:!0,alt:!0,class:!0}),pt=c(Pt),gt=r(Pt,"IMG",{src:!0,alt:!0,class:!0}),Pt.forEach(a),W.forEach(a),ns.forEach(a),Dt.forEach(a),Rt.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),t(w,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/1.jpg')] w-full flex-col h-[220px] flex items-start p-5"),t(E,"class","uppercase"),t(D,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(A,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[462px]"),S(_.src,q="/assets/new/arrow-right-circle.svg")||t(_,"src",q),t(_,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(_,"class","h-5 w-5"),t(C,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(b,"href","/news-item"),t(y,"class","rounded-b-[20px] bg-white w-full flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(I,"class","flex-1 flex-col flex items-start rounded-[20px]"),t(U,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/3.jpg')] w-full flex-col h-[220px] flex items-start p-5"),t(H,"class","uppercase"),t(K,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(he,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins h-[68px] w-[462px]"),S(qe.src,Ee="/assets/new/arrow-right-circle.svg")||t(qe,"src",Ee),t(qe,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(qe,"class","h-5 w-5"),t(fe,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(ae,"href","/news-item2"),t(ue,"class","rounded-b-[20px] bg-white w-full flex-1 flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(R,"class","h-full flex-1 flex-col flex items-start rounded-[20px]"),t(h,"class","w-full flex items-start gap-10"),t(_e,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/2.jpg')] w-full flex-col h-[220px] flex items-start p-5"),t(Z,"class","uppercase"),t(ie,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(Se,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[462px]"),S(Ne.src,Pe="/assets/new/arrow-right-circle.svg")||t(Ne,"src",Pe),t(Ne,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(Ne,"class","h-5 w-5"),t(ee,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(Te,"href","/news-item3"),t(me,"class","rounded-b-[20px] bg-white w-full flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(Ie,"class","flex-1 flex-col flex items-start rounded-[20px]"),t(Qe,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/4.png')] w-full flex-col h-[220px] flex items-start p-5"),t($,"class","uppercase"),t(B,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(oe,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[462px]"),S(be.src,It="/assets/new/arrow-right-circle.svg")||t(be,"src",It),t(be,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(be,"class","h-5 w-5"),t(le,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(ke,"href","/news-item4"),t(P,"class","rounded-b-[20px] bg-white w-full flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(Ze,"class","flex-1 flex-col flex items-start rounded-[20px]"),t(Q,"class","w-full flex items-start gap-10"),t(m,"class","w-full flex-col flex items-start gap-10"),t(ye,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(je,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(yt.src,Vt="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(yt,"src",Vt),t(yt,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(yt,"class","h-6 w-6"),S(ct.src,tt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ct,"src",tt),t(ct,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(ct,"class","h-6 w-6"),S(gt.src,Ct="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(gt,"src",Ct),t(gt,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(gt,"class","h-6 w-6"),t(Oe,"class","flex items-center gap-5"),t(Ae,"class","flex-1 flex justify-end items-center gap-10"),t(He,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col max-w-[1060px] flex items-start gap-[60px]"),t(l,"class","flex-col flex items-center gap-[50px] h-fit mt-20")},m(dt,Rt){nt(dt,l,Rt),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,I),e(I,w),e(I,V),e(I,y),e(y,D),e(D,E),e(E,F),e(y,k),e(y,A),e(A,G),e(y,M),e(y,b),e(b,C),e(C,_),e(C,O),e(C,L),e(L,j),e(h,Y),e(h,R),e(R,U),e(R,ge),e(R,ue),e(ue,K),e(K,H),e(H,re),e(ue,Fe),e(ue,he),e(he,ze),e(ue,we),e(ue,ae),e(ae,fe),e(fe,qe),e(fe,de),e(fe,Ue),e(Ue,Le),e(m,N),e(m,Q),e(Q,Ie),e(Ie,_e),e(Ie,Ce),e(Ie,me),e(me,ie),e(ie,Z),e(Z,et),e(me,De),e(me,Se),e(Se,ne),e(me,Re),e(me,Te),e(Te,ee),e(ee,Ne),e(ee,$e),e(ee,Be),e(Be,Ge),e(Q,xe),e(Q,Ze),e(Ze,Qe),e(Ze,it),e(Ze,P),e(P,B),e(B,$),e($,z),e(P,X),e(P,oe),e(oe,J),e(P,Ve),e(P,ke),e(ke,le),e(le,be),e(le,pe),e(le,te),e(te,Ke),e(i,Me),e(i,He),e(He,ye),e(ye,Ye),e(He,ft),e(He,Ae),e(Ae,je),e(je,qt),e(Ae,Lt),e(Ae,Oe),e(Oe,yt),e(Oe,ce),e(Oe,ct),e(Oe,pt),e(Oe,gt)},p:We,i:We,o:We,d(dt){dt&&a(l)}}}class eI extends Pn{constructor(l){super(),Vn(this,l,null,Z4,Ha,{})}}function tI(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,F,k,A,G,M,b,C,_,q,O,L,j,Y,R,U,ge,ue,K,H,re,Fe,he,ze,we,ae,fe,qe,Ee,de,Ue,Le,N,Q,Ie,_e,Ce,me,ie,Z,et,De,Se,ne,Re,Te,ee,Ne,Pe,$e,Be,Ge,xe,Ze,Qe,it,P,B,$,z,X,oe,J,Ve,ke,le,be,It,pe,te,Ke,Me,He,ye,Ye,ft,Ae;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),I=o(),w=s("div"),V=f("Examining the global impact of food production and mitigation strategies"),y=o(),D=s("div"),E=s("div"),F=o(),k=s("div"),A=s("div"),G=s("div"),M=s("div"),b=f("June 15, 2023"),C=o(),_=s("div"),q=f("Examining the global impact of food production and mitigation strategies"),O=o(),L=s("div"),j=s("div"),Y=f(`Food consumption accounts for 28% of the world's ecological footprint according to the US Environmental
              Protection Agency (EPA). As a consequence, our feeding habits yield profound and sometimes irreversible
              environmental impact. Alarmingly, we squander approximately 25% of global calorie production amidst a staggering
              822 million people suffering from undernourishment worldwide. The required actions for mitigating these impacts
              include lifestyle and dietary changes, particularly in the Global North; transformative global farming practices;
              and the utilisation of innovative technologies within existing supply chains. Success lies in implementing these
              actions harmoniously.`),R=o(),U=s("div"),ge=s("div"),ue=f("Food production's environmental impacts are wide-ranging:"),K=o(),H=s("div"),re=s("span"),Fe=f("Water usage"),he=f(`
                : Food production consumes 70% of global water usage. Water scarcity currently plagues 1.1 billion people lacking
                sufficient clean water.
                `),ze=s("span"),we=f("Soil degradation"),ae=f(`
                : Intensive agriculture and monoculture farming practices contribute to the annual loss of 24 billion tonnes of fertile
                soil, as per a recent UN study.
                `),fe=s("span"),qe=f("Use of chemical fertilisers and agrochemicals"),Ee=f(`
                : Increased land yield efforts have led to escalated chemical usage and consequential environmental impacts.`),de=o(),Ue=s("div"),Le=s("img"),Q=o(),Ie=s("div"),_e=f(`Monoculture farming: a short-term yield with long-term environmental implications (photo by Tim Hüfner on
                Unsplash)`),Ce=o(),me=s("div"),ie=s("div"),Z=f("Quote example"),et=o(),De=s("div"),Se=f("Someone explains:"),ne=o(),Re=s("div"),Te=s("div"),ee=f(`“To address these challenges, the industry needs to invest in research and development to develop new and more
                  effective technologies. Additionally, there needs to be more collaboration between industry stakeholders,
                  technology developers, and regulatory bodies.”`),Ne=o(),Pe=s("div"),$e=s("div"),Be=f("Technology Challenge"),Ge=o(),xe=s("div"),Ze=f(`Another challenge facing the power from waste industry is technology. While there have been significant
                `),Qe=s("span"),it=o(),P=s("span"),B=f("link example"),$=f(`
                in waste-to-energy technology, there is still room for improvement. Some of the key areas where technology needs
                to evolve include waste sorting, emissions control, and energy efficiency. To address these challenges, the industry
                needs to invest in research and development to develop new and more effective technologies. Additionally, there needs
                to be more collaboration between industry stakeholders, technology developers, and regulatory bodies.`),z=o(),X=s("div"),oe=s("div"),J=f("Copyright © 2023 Power for Planet"),Ve=o(),ke=s("div"),le=s("div"),be=f("Privacy Policy"),It=o(),pe=s("div"),te=s("img"),Me=o(),He=s("img"),Ye=o(),ft=s("img"),this.h()},l(je){l=r(je,"DIV",{class:!0});var qt=n(l);i=r(qt,"DIV",{class:!0});var Lt=n(i);u=r(Lt,"DIV",{class:!0});var Oe=n(u);v=r(Oe,"DIV",{class:!0});var yt=n(v);g=r(yt,"DIV",{class:!0});var Vt=n(g);x=r(Vt,"A",{href:!0});var ce=n(x);m=r(ce,"DIV",{class:!0});var ct=n(m);h=p(ct,"News"),ct.forEach(a),ce.forEach(a),I=c(Vt),w=r(Vt,"DIV",{class:!0});var tt=n(w);V=p(tt,"Examining the global impact of food production and mitigation strategies"),tt.forEach(a),Vt.forEach(a),yt.forEach(a),y=c(Oe),D=r(Oe,"DIV",{class:!0});var pt=n(D);E=r(pt,"DIV",{class:!0}),n(E).forEach(a),F=c(pt),k=r(pt,"DIV",{class:!0});var gt=n(k);A=r(gt,"DIV",{class:!0});var Ct=n(A);G=r(Ct,"DIV",{class:!0});var dt=n(G);M=r(dt,"DIV",{class:!0});var Rt=n(M);b=p(Rt,"June 15, 2023"),Rt.forEach(a),dt.forEach(a),C=c(Ct),_=r(Ct,"DIV",{class:!0});var Dt=n(_);q=p(Dt,"Examining the global impact of food production and mitigation strategies"),Dt.forEach(a),Ct.forEach(a),O=c(gt),L=r(gt,"DIV",{class:!0});var se=n(L);j=r(se,"DIV",{class:!0});var vt=n(j);Y=p(vt,`Food consumption accounts for 28% of the world's ecological footprint according to the US Environmental
              Protection Agency (EPA). As a consequence, our feeding habits yield profound and sometimes irreversible
              environmental impact. Alarmingly, we squander approximately 25% of global calorie production amidst a staggering
              822 million people suffering from undernourishment worldwide. The required actions for mitigating these impacts
              include lifestyle and dietary changes, particularly in the Global North; transformative global farming practices;
              and the utilisation of innovative technologies within existing supply chains. Success lies in implementing these
              actions harmoniously.`),vt.forEach(a),R=c(se),U=r(se,"DIV",{class:!0});var kt=n(U);ge=r(kt,"DIV",{class:!0});var Gt=n(ge);ue=p(Gt,"Food production's environmental impacts are wide-ranging:"),Gt.forEach(a),K=c(kt),H=r(kt,"DIV",{class:!0});var ut=n(H);re=r(ut,"SPAN",{class:!0});var ht=n(re);Fe=p(ht,"Water usage"),ht.forEach(a),he=p(ut,`
                : Food production consumes 70% of global water usage. Water scarcity currently plagues 1.1 billion people lacking
                sufficient clean water.
                `),ze=r(ut,"SPAN",{class:!0});var Mt=n(ze);we=p(Mt,"Soil degradation"),Mt.forEach(a),ae=p(ut,`
                : Intensive agriculture and monoculture farming practices contribute to the annual loss of 24 billion tonnes of fertile
                soil, as per a recent UN study.
                `),fe=r(ut,"SPAN",{class:!0});var St=n(fe);qe=p(St,"Use of chemical fertilisers and agrochemicals"),St.forEach(a),Ee=p(ut,`
                : Increased land yield efforts have led to escalated chemical usage and consequential environmental impacts.`),ut.forEach(a),kt.forEach(a),de=c(se),Ue=r(se,"DIV",{class:!0});var Je=n(Ue);Le=r(Je,"IMG",{class:!0,alt:!0,src:!0}),Q=c(Je),Ie=r(Je,"DIV",{class:!0});var Tt=n(Ie);_e=p(Tt,`Monoculture farming: a short-term yield with long-term environmental implications (photo by Tim Hüfner on
                Unsplash)`),Tt.forEach(a),Je.forEach(a),Ce=c(se),me=r(se,"DIV",{class:!0});var Xe=n(me);ie=r(Xe,"DIV",{class:!0});var wt=n(ie);Z=p(wt,"Quote example"),wt.forEach(a),et=c(Xe),De=r(Xe,"DIV",{class:!0});var st=n(De);Se=p(st,"Someone explains:"),st.forEach(a),ne=c(Xe),Re=r(Xe,"DIV",{class:!0});var jt=n(Re);Te=r(jt,"DIV",{class:!0});var Qt=n(Te);ee=p(Qt,`“To address these challenges, the industry needs to invest in research and development to develop new and more
                  effective technologies. Additionally, there needs to be more collaboration between industry stakeholders,
                  technology developers, and regulatory bodies.”`),Qt.forEach(a),jt.forEach(a),Xe.forEach(a),Ne=c(se),Pe=r(se,"DIV",{class:!0});var mt=n(Pe);$e=r(mt,"DIV",{class:!0});var ve=n($e);Be=p(ve,"Technology Challenge"),ve.forEach(a),Ge=c(mt),xe=r(mt,"DIV",{class:!0});var rt=n(xe);Ze=p(rt,`Another challenge facing the power from waste industry is technology. While there have been significant
                `),Qe=r(rt,"SPAN",{class:!0}),n(Qe).forEach(a),it=c(rt),P=r(rt,"SPAN",{class:!0});var Nt=n(P);B=p(Nt,"link example"),Nt.forEach(a),$=p(rt,`
                in waste-to-energy technology, there is still room for improvement. Some of the key areas where technology needs
                to evolve include waste sorting, emissions control, and energy efficiency. To address these challenges, the industry
                needs to invest in research and development to develop new and more effective technologies. Additionally, there needs
                to be more collaboration between industry stakeholders, technology developers, and regulatory bodies.`),rt.forEach(a),mt.forEach(a),se.forEach(a),gt.forEach(a),pt.forEach(a),Oe.forEach(a),z=c(Lt),X=r(Lt,"DIV",{class:!0});var _t=n(X);oe=r(_t,"DIV",{class:!0});var at=n(oe);J=p(at,"Copyright © 2023 Power for Planet"),at.forEach(a),Ve=c(_t),ke=r(_t,"DIV",{class:!0});var ot=n(ke);le=r(ot,"DIV",{class:!0});var Ht=n(le);be=p(Ht,"Privacy Policy"),Ht.forEach(a),It=c(ot),pe=r(ot,"DIV",{class:!0});var xt=n(pe);te=r(xt,"IMG",{src:!0,alt:!0,class:!0}),Me=c(xt),He=r(xt,"IMG",{src:!0,alt:!0,class:!0}),Ye=c(xt),ft=r(xt,"IMG",{src:!0,alt:!0,class:!0}),xt.forEach(a),ot.forEach(a),_t.forEach(a),Lt.forEach(a),qt.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(w,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(E,"class","bg-cover bg-center bg-[url('/assets/new/XN2.jpg')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(M,"class","uppercase"),t(G,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(_,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(j,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ge,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(re,"class","font-bold text-sm leading-[25px] font-PublicSans"),t(ze,"class","font-bold text-sm leading-[25px] font-PublicSans"),t(fe,"class","font-bold text-sm leading-[25px] font-PublicSans"),t(H,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(U,"class","w-full flex-col flex items-start gap-3"),t(Le,"class","object-cover w-full h-[350px] rounded-2xl"),t(Le,"alt","1686828442283 1"),S(Le.src,N="/assets/new/XN3.png")||t(Le,"src",N),t(Ie,"class","italic w-[680px]"),t(Ue,"class","w-full flex-col flex items-start gap-4 text-sm leading-[25px] font-light font-PublicSans"),t(ie,"class","text-xl leading-[34px] font-bold font-Poppins"),t(De,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Te,"class","w-[656px]"),t(Re,"class","w-full flex items-start gap-2.5 pl-6 border-l-[3px] border-[#3f9378] text-sm leading-[25px] font-semibold font-PublicSans"),t(me,"class","w-full flex-col flex items-start gap-3"),t($e,"class","text-xl leading-[34px] font-bold font-Poppins"),t(Qe,"class","font-light text-sm leading-[25px] font-PublicSans"),t(P,"class","font-bold text-sm leading-[25px] text-[#3f9378] font-PublicSans"),t(xe,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Pe,"class","w-full flex-col flex items-start gap-3"),t(L,"class","w-full flex-col flex items-start gap-6"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(D,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(oe,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(le,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(te.src,Ke="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(te,"src",Ke),t(te,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(te,"class","h-6 w-6"),S(He.src,ye="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(He,"src",ye),t(He,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(He,"class","h-6 w-6"),S(ft.src,Ae="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ft,"src",Ae),t(ft,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(ft,"class","h-6 w-6"),t(pe,"class","flex items-center gap-5"),t(ke,"class","flex-1 flex justify-end items-center gap-10"),t(X,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(je,qt){nt(je,l,qt),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,I),e(g,w),e(w,V),e(u,y),e(u,D),e(D,E),e(D,F),e(D,k),e(k,A),e(A,G),e(G,M),e(M,b),e(A,C),e(A,_),e(_,q),e(k,O),e(k,L),e(L,j),e(j,Y),e(L,R),e(L,U),e(U,ge),e(ge,ue),e(U,K),e(U,H),e(H,re),e(re,Fe),e(H,he),e(H,ze),e(ze,we),e(H,ae),e(H,fe),e(fe,qe),e(H,Ee),e(L,de),e(L,Ue),e(Ue,Le),e(Ue,Q),e(Ue,Ie),e(Ie,_e),e(L,Ce),e(L,me),e(me,ie),e(ie,Z),e(me,et),e(me,De),e(De,Se),e(me,ne),e(me,Re),e(Re,Te),e(Te,ee),e(L,Ne),e(L,Pe),e(Pe,$e),e($e,Be),e(Pe,Ge),e(Pe,xe),e(xe,Ze),e(xe,Qe),e(xe,it),e(xe,P),e(P,B),e(xe,$),e(i,z),e(i,X),e(X,oe),e(oe,J),e(X,Ve),e(X,ke),e(ke,le),e(le,be),e(ke,It),e(ke,pe),e(pe,te),e(pe,Me),e(pe,He),e(pe,Ye),e(pe,ft)},p:We,i:We,o:We,d(je){je&&a(l)}}}class sI extends Pn{constructor(l){super(),Vn(this,l,null,tI,Ha,{})}}function rI(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,F,k,A,G,M,b,C,_,q,O,L,j,Y,R,U,ge,ue,K,H,re,Fe,he,ze,we,ae,fe,qe,Ee,de,Ue,Le,N,Q,Ie,_e,Ce,me,ie,Z,et,De,Se,ne,Re,Te,ee,Ne,Pe,$e,Be,Ge,xe,Ze,Qe,it,P,B,$,z,X,oe,J,Ve,ke,le,be,It,pe,te,Ke,Me,He,ye,Ye,ft,Ae,je,qt,Lt,Oe,yt;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),I=o(),w=s("div"),V=f("A war worth fighting"),y=o(),D=s("div"),E=s("div"),F=o(),k=s("div"),A=s("div"),G=s("div"),M=s("div"),b=f("May 9, 2023"),C=o(),_=s("div"),q=f("A war worth fighting"),O=o(),L=s("div"),j=s("div"),Y=f("Uniting as individuals to make a change for a greener future"),R=o(),U=s("div"),ge=f(`In today's world, it seems we're stuck in a battle between the natural ecosystem and our current financial models.
              Case in point: BP's recent financial report, declared a record profit of $28 billion for 2022 without accounting
              for environmental damage caused. This infuriated climate activists as the company scaled back on plans to cut oil
              and gas output and reduce carbon emissions by 2030. While companies continue to report high profits, the
              environmental impact of their activities is often left out of the equation. Why is this the case? And what can we,
              as individuals, do to make a difference?`),ue=o(),K=s("div"),H=s("div"),re=f("The war at hand"),Fe=o(),he=s("div"),ze=f(`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),we=o(),ae=s("div"),fe=s("div"),qe=f("The role of companies"),Ee=o(),de=s("div"),Ue=f(`Companies have started integrating sustainable development goals (SDGs) and environmental, social, and corporate
              governance (ESG) models into their operations. However, a disconnect still exists between profit and
              sustainability. Only when businesses prioritise the environment in their decision-making will we see true change.`),Le=o(),N=s("div"),Q=s("div"),Ie=f("Individuals hold the power"),_e=o(),Ce=s("div"),me=f(`PFP believes that individuals have the power to make a difference. By engaging with brands, politicians,
              employers, and other stakeholders, we can demand change and make a positive impact on our planet.`),ie=o(),Z=s("div"),et=s("div"),De=f("Action steps for individuals:"),Se=o(),ne=s("ul"),Re=s("li"),Te=f("As a consumer, demand brands prioritise nature in their operations"),ee=o(),Ne=s("li"),Pe=f("As a voter, support candidates who advocate for renewable energy and reject fossil fuels"),$e=o(),Be=s("li"),Ge=f("As an employee, encourage business leaders to take immediate action to protect the planet"),xe=o(),Ze=s("li"),Qe=f("As a business owner, require suppliers to demonstrate their green credentials"),it=o(),P=s("li"),B=f("As a shareholder, hold executives accountable for meeting ESG goals"),$=o(),z=s("li"),X=f("As a politician, listen to the people and take action to address their concerns"),oe=o(),J=s("div"),Ve=f(`The battle for a greener future is ongoing, but the power to make a change lies within us. By taking action as
              individuals, we can contribute to a more sustainable world and support our planet's natural ecosystem. It's time
              to unite and fight for a cause that truly matters.`),ke=o(),le=s("div"),be=s("div"),It=f("Copyright © 2023 Power for Planet"),pe=o(),te=s("div"),Ke=s("div"),Me=f("Privacy Policy"),He=o(),ye=s("div"),Ye=s("img"),Ae=o(),je=s("img"),Lt=o(),Oe=s("img"),this.h()},l(Vt){l=r(Vt,"DIV",{class:!0});var ce=n(l);i=r(ce,"DIV",{class:!0});var ct=n(i);u=r(ct,"DIV",{class:!0});var tt=n(u);v=r(tt,"DIV",{class:!0});var pt=n(v);g=r(pt,"DIV",{class:!0});var gt=n(g);x=r(gt,"A",{href:!0});var Ct=n(x);m=r(Ct,"DIV",{class:!0});var dt=n(m);h=p(dt,"News"),dt.forEach(a),Ct.forEach(a),I=c(gt),w=r(gt,"DIV",{class:!0});var Rt=n(w);V=p(Rt,"A war worth fighting"),Rt.forEach(a),gt.forEach(a),pt.forEach(a),y=c(tt),D=r(tt,"DIV",{class:!0});var Dt=n(D);E=r(Dt,"DIV",{class:!0}),n(E).forEach(a),F=c(Dt),k=r(Dt,"DIV",{class:!0});var se=n(k);A=r(se,"DIV",{class:!0});var vt=n(A);G=r(vt,"DIV",{class:!0});var kt=n(G);M=r(kt,"DIV",{class:!0});var Gt=n(M);b=p(Gt,"May 9, 2023"),Gt.forEach(a),kt.forEach(a),C=c(vt),_=r(vt,"DIV",{class:!0});var ut=n(_);q=p(ut,"A war worth fighting"),ut.forEach(a),vt.forEach(a),O=c(se),L=r(se,"DIV",{class:!0});var ht=n(L);j=r(ht,"DIV",{class:!0});var Mt=n(j);Y=p(Mt,"Uniting as individuals to make a change for a greener future"),Mt.forEach(a),R=c(ht),U=r(ht,"DIV",{class:!0});var St=n(U);ge=p(St,`In today's world, it seems we're stuck in a battle between the natural ecosystem and our current financial models.
              Case in point: BP's recent financial report, declared a record profit of $28 billion for 2022 without accounting
              for environmental damage caused. This infuriated climate activists as the company scaled back on plans to cut oil
              and gas output and reduce carbon emissions by 2030. While companies continue to report high profits, the
              environmental impact of their activities is often left out of the equation. Why is this the case? And what can we,
              as individuals, do to make a difference?`),St.forEach(a),ue=c(ht),K=r(ht,"DIV",{class:!0});var Je=n(K);H=r(Je,"DIV",{class:!0});var Tt=n(H);re=p(Tt,"The war at hand"),Tt.forEach(a),Fe=c(Je),he=r(Je,"DIV",{class:!0});var Xe=n(he);ze=p(Xe,`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),Xe.forEach(a),Je.forEach(a),ht.forEach(a),we=c(se),ae=r(se,"DIV",{class:!0});var wt=n(ae);fe=r(wt,"DIV",{class:!0});var st=n(fe);qe=p(st,"The role of companies"),st.forEach(a),Ee=c(wt),de=r(wt,"DIV",{class:!0});var jt=n(de);Ue=p(jt,`Companies have started integrating sustainable development goals (SDGs) and environmental, social, and corporate
              governance (ESG) models into their operations. However, a disconnect still exists between profit and
              sustainability. Only when businesses prioritise the environment in their decision-making will we see true change.`),jt.forEach(a),wt.forEach(a),Le=c(se),N=r(se,"DIV",{class:!0});var Qt=n(N);Q=r(Qt,"DIV",{class:!0});var mt=n(Q);Ie=p(mt,"Individuals hold the power"),mt.forEach(a),_e=c(Qt),Ce=r(Qt,"DIV",{class:!0});var ve=n(Ce);me=p(ve,`PFP believes that individuals have the power to make a difference. By engaging with brands, politicians,
              employers, and other stakeholders, we can demand change and make a positive impact on our planet.`),ve.forEach(a),Qt.forEach(a),ie=c(se),Z=r(se,"DIV",{class:!0});var rt=n(Z);et=r(rt,"DIV",{class:!0});var Nt=n(et);De=p(Nt,"Action steps for individuals:"),Nt.forEach(a),Se=c(rt),ne=r(rt,"UL",{class:!0});var _t=n(ne);Re=r(_t,"LI",{});var at=n(Re);Te=p(at,"As a consumer, demand brands prioritise nature in their operations"),at.forEach(a),ee=c(_t),Ne=r(_t,"LI",{});var ot=n(Ne);Pe=p(ot,"As a voter, support candidates who advocate for renewable energy and reject fossil fuels"),ot.forEach(a),$e=c(_t),Be=r(_t,"LI",{});var Ht=n(Be);Ge=p(Ht,"As an employee, encourage business leaders to take immediate action to protect the planet"),Ht.forEach(a),xe=c(_t),Ze=r(_t,"LI",{});var xt=n(Ze);Qe=p(xt,"As a business owner, require suppliers to demonstrate their green credentials"),xt.forEach(a),it=c(_t),P=r(_t,"LI",{});var Et=n(P);B=p(Et,"As a shareholder, hold executives accountable for meeting ESG goals"),Et.forEach(a),$=c(_t),z=r(_t,"LI",{});var Jt=n(z);X=p(Jt,"As a politician, listen to the people and take action to address their concerns"),Jt.forEach(a),_t.forEach(a),oe=c(rt),J=r(rt,"DIV",{class:!0});var Ut=n(J);Ve=p(Ut,`The battle for a greener future is ongoing, but the power to make a change lies within us. By taking action as
              individuals, we can contribute to a more sustainable world and support our planet's natural ecosystem. It's time
              to unite and fight for a cause that truly matters.`),Ut.forEach(a),rt.forEach(a),se.forEach(a),Dt.forEach(a),tt.forEach(a),ct.forEach(a),ke=c(ce),le=r(ce,"DIV",{class:!0});var At=n(le);be=r(At,"DIV",{class:!0});var zt=n(be);It=p(zt,"Copyright © 2023 Power for Planet"),zt.forEach(a),pe=c(At),te=r(At,"DIV",{class:!0});var Ot=n(te);Ke=r(Ot,"DIV",{class:!0});var Bt=n(Ke);Me=p(Bt,"Privacy Policy"),Bt.forEach(a),He=c(Ot),ye=r(Ot,"DIV",{class:!0});var bt=n(ye);Ye=r(bt,"IMG",{src:!0,alt:!0,class:!0}),Ae=c(bt),je=r(bt,"IMG",{src:!0,alt:!0,class:!0}),Lt=c(bt),Oe=r(bt,"IMG",{src:!0,alt:!0,class:!0}),bt.forEach(a),Ot.forEach(a),At.forEach(a),ce.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(w,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(E,"class","bg-cover bg-center bg-[url('/assets/new/3.jpg')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(M,"class","uppercase"),t(G,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(_,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(j,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(U,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(H,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(he,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(K,"class","w-full flex-col flex items-start gap-3"),t(L,"class","w-full flex-col flex items-start gap-6"),t(fe,"class","text-xl leading-[34px] font-bold font-Poppins"),t(de,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ae,"class","w-full flex-col flex items-start gap-3"),t(Q,"class","text-xl leading-[34px] font-bold font-Poppins"),t(Ce,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(N,"class","w-full flex-col flex items-start gap-3"),t(et,"class","text-xl leading-[34px] font-bold font-Poppins"),t(ne,"class","list-disc pl-4"),t(J,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Z,"class","w-full flex-col flex items-start gap-3"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(D,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(be,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ke,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Ye.src,ft="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ye,"src",ft),t(Ye,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Ye,"class","h-6 w-6"),S(je.src,qt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(je,"src",qt),t(je,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(je,"class","h-6 w-6"),S(Oe.src,yt="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Oe,"src",yt),t(Oe,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Oe,"class","h-6 w-6"),t(ye,"class","flex items-center gap-5"),t(te,"class","flex-1 flex justify-end items-center gap-10"),t(le,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(Vt,ce){nt(Vt,l,ce),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,I),e(g,w),e(w,V),e(u,y),e(u,D),e(D,E),e(D,F),e(D,k),e(k,A),e(A,G),e(G,M),e(M,b),e(A,C),e(A,_),e(_,q),e(k,O),e(k,L),e(L,j),e(j,Y),e(L,R),e(L,U),e(U,ge),e(L,ue),e(L,K),e(K,H),e(H,re),e(K,Fe),e(K,he),e(he,ze),e(k,we),e(k,ae),e(ae,fe),e(fe,qe),e(ae,Ee),e(ae,de),e(de,Ue),e(k,Le),e(k,N),e(N,Q),e(Q,Ie),e(N,_e),e(N,Ce),e(Ce,me),e(k,ie),e(k,Z),e(Z,et),e(et,De),e(Z,Se),e(Z,ne),e(ne,Re),e(Re,Te),e(ne,ee),e(ne,Ne),e(Ne,Pe),e(ne,$e),e(ne,Be),e(Be,Ge),e(ne,xe),e(ne,Ze),e(Ze,Qe),e(ne,it),e(ne,P),e(P,B),e(ne,$),e(ne,z),e(z,X),e(Z,oe),e(Z,J),e(J,Ve),e(l,ke),e(l,le),e(le,be),e(be,It),e(le,pe),e(le,te),e(te,Ke),e(Ke,Me),e(te,He),e(te,ye),e(ye,Ye),e(ye,Ae),e(ye,je),e(ye,Lt),e(ye,Oe)},p:We,i:We,o:We,d(Vt){Vt&&a(l)}}}class aI extends Pn{constructor(l){super(),Vn(this,l,null,rI,Ha,{})}}function nI(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,F,k,A,G,M,b,C,_,q,O,L,j,Y,R,U,ge,ue,K,H,re,Fe,he,ze,we,ae,fe,qe,Ee,de,Ue,Le,N,Q,Ie,_e,Ce,me,ie,Z,et,De,Se,ne,Re,Te,ee,Ne,Pe,$e,Be,Ge,xe,Ze,Qe,it,P,B,$,z,X,oe,J,Ve,ke,le,be,It,pe,te,Ke,Me,He,ye,Ye,ft,Ae,je,qt,Lt,Oe,yt,Vt,ce,ct,tt,pt,gt,Ct,dt,Rt,Dt,se,vt,kt,Gt,ut,ht;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),I=o(),w=s("div"),V=f("One ecosystem, one overall solution"),y=o(),D=s("div"),E=s("div"),F=o(),k=s("div"),A=s("div"),G=s("div"),M=s("div"),b=f("April 6, 2023"),C=o(),_=s("div"),q=f("One ecosystem, one overall solution"),O=o(),L=s("div"),j=s("div"),Y=f("We must adopt a total system approach that does not focus simply on the headline issues of the day"),R=o(),U=s("div"),ge=f(`Recent headlines have focused on the UK's new net zero strategy, announced on March 30th. While the plan
              highlights the need to transition away from fossil fuels, it falls short in terms of providing a comprehensive
              approach to sustainability. Instead, it invests heavily in Carbon Capture and Storage (CCS) technology, which some
              experts argue has yet to prove its large-scale effectiveness.`),ue=o(),K=s("div"),H=s("div"),re=f("The war at hand"),Fe=o(),he=s("div"),ze=f(`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),we=o(),ae=s("div"),fe=s("div"),qe=f("Individuals hold the power"),Ee=o(),de=s("div"),Ue=f("A few notable reactions to the strategy:"),Le=o(),N=s("div"),Q=s("ul"),Ie=s("li"),_e=f(`Dr. Peter Connor, Associate Professor of Sustainable Energy Policy at the University of Exeter, expresses
                concerns about the £20 billion commitment to CCS, citing its limited impact on reducing atmospheric carbon.`),Ce=o(),me=s("li"),ie=f(`Josh Burke, Senior Policy Fellow at the London School of Economics and Political Science, laments the absence of
                a long-term investment plan for greener solutions.`),Z=o(),et=s("li"),De=f(`Matthew Paterson, Professor of International and Climate Change Politics at the University of Manchester,
                critiques the plan's inadequate focus on retrofitting the UK's inefficient homes.`),Se=o(),ne=s("li"),Re=f(`Christophe Williams, CEO of Naked Energy, calls for increased awareness and support for existing clean
                technologies that could help businesses and communities save money while reducing environmental impact.`),Te=o(),ee=s("div"),Ne=f(`Naturally we agree!
              `),Pe=s("br"),$e=f(`
              These aren’t the reasons, however, that make us assert that the document and the UK government are missing the point,
              as damning as they are.`),Be=o(),Ge=s("div"),xe=s("div"),Ze=f("Th 6R Approach"),Qe=o(),it=s("div"),P=f(`At PFP, we believe in a "6 R" approach to address global environmental challenges, with "regrowth" as the ultimate
              goal. By focusing on reducing waste and re-engineering processes in line with ESG goals, we can have a newly
              defined type of growth and make a positive impact on our planet and future generations.`),B=o(),$=s("div"),z=s("img"),oe=o(),J=s("div"),Ve=s("div"),ke=f("PFP News"),le=o(),be=s("div"),It=f(`As we continue to develop our power from waste platform to fulfil our global commitment to creating energy from
              non-recyclable waste, we are also creating our network of collaborative partners to work with us to support our
              clients to re-engineer their entire process in line with their ESG goals.`),pe=o(),te=s("div"),Ke=f("We're delighted to announce a new partnership with Rafinex, found at "),Me=s("a"),He=f("www.rafinex.com"),ye=f(`
               Specialising in advanced numerical models for engineering applications, Rafinex will work alongside PFP and our clients
              to reduce waste and develop sustainable solutions designs across various industries.`),Ye=o(),ft=s("div"),Ae=f(`Rafinex' innovative cloud SaaS product Möbius embeds the latest breakthroughs in stochastic optimisation
              mathematics. It is able to compute highly optimised and reliably trustworthy product designs that remain safe in
              real-life variable operating conditions in a matter of hours - making sustainable designs both scalable and
              profitable at the same time. Rafinex enables companies to substantially save on material usage for creating
              products, as well as on the subsequent energy required to use or operate these products.`),je=o(),qt=s("div"),Lt=f(`As we continue to connect businesses and communities with the best technology partners for power-from-waste
              projects, our mission is to reduce the strain on our planet caused by the pursuit of financial growth at any cost.
              Together, we can build a sustainable future.`),Oe=o(),yt=s("div"),Vt=s("div"),ce=f("Copyright © 2023 Power for Planet"),ct=o(),tt=s("div"),pt=s("div"),gt=f("Privacy Policy"),Ct=o(),dt=s("div"),Rt=s("img"),se=o(),vt=s("img"),Gt=o(),ut=s("img"),this.h()},l(Mt){l=r(Mt,"DIV",{class:!0});var St=n(l);i=r(St,"DIV",{class:!0});var Je=n(i);u=r(Je,"DIV",{class:!0});var Tt=n(u);v=r(Tt,"DIV",{class:!0});var Xe=n(v);g=r(Xe,"DIV",{class:!0});var wt=n(g);x=r(wt,"A",{href:!0});var st=n(x);m=r(st,"DIV",{class:!0});var jt=n(m);h=p(jt,"News"),jt.forEach(a),st.forEach(a),I=c(wt),w=r(wt,"DIV",{class:!0});var Qt=n(w);V=p(Qt,"One ecosystem, one overall solution"),Qt.forEach(a),wt.forEach(a),Xe.forEach(a),y=c(Tt),D=r(Tt,"DIV",{class:!0});var mt=n(D);E=r(mt,"DIV",{class:!0}),n(E).forEach(a),F=c(mt),k=r(mt,"DIV",{class:!0});var ve=n(k);A=r(ve,"DIV",{class:!0});var rt=n(A);G=r(rt,"DIV",{class:!0});var Nt=n(G);M=r(Nt,"DIV",{class:!0});var _t=n(M);b=p(_t,"April 6, 2023"),_t.forEach(a),Nt.forEach(a),C=c(rt),_=r(rt,"DIV",{class:!0});var at=n(_);q=p(at,"One ecosystem, one overall solution"),at.forEach(a),rt.forEach(a),O=c(ve),L=r(ve,"DIV",{class:!0});var ot=n(L);j=r(ot,"DIV",{class:!0});var Ht=n(j);Y=p(Ht,"We must adopt a total system approach that does not focus simply on the headline issues of the day"),Ht.forEach(a),R=c(ot),U=r(ot,"DIV",{class:!0});var xt=n(U);ge=p(xt,`Recent headlines have focused on the UK's new net zero strategy, announced on March 30th. While the plan
              highlights the need to transition away from fossil fuels, it falls short in terms of providing a comprehensive
              approach to sustainability. Instead, it invests heavily in Carbon Capture and Storage (CCS) technology, which some
              experts argue has yet to prove its large-scale effectiveness.`),xt.forEach(a),ue=c(ot),K=r(ot,"DIV",{class:!0});var Et=n(K);H=r(Et,"DIV",{class:!0});var Jt=n(H);re=p(Jt,"The war at hand"),Jt.forEach(a),Fe=c(Et),he=r(Et,"DIV",{class:!0});var Ut=n(he);ze=p(Ut,`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),Ut.forEach(a),Et.forEach(a),ot.forEach(a),we=c(ve),ae=r(ve,"DIV",{class:!0});var At=n(ae);fe=r(At,"DIV",{class:!0});var zt=n(fe);qe=p(zt,"Individuals hold the power"),zt.forEach(a),Ee=c(At),de=r(At,"DIV",{class:!0});var Ot=n(de);Ue=p(Ot,"A few notable reactions to the strategy:"),Ot.forEach(a),At.forEach(a),Le=c(ve),N=r(ve,"DIV",{class:!0});var Bt=n(N);Q=r(Bt,"UL",{class:!0});var bt=n(Q);Ie=r(bt,"LI",{});var Ms=n(Ie);_e=p(Ms,`Dr. Peter Connor, Associate Professor of Sustainable Energy Policy at the University of Exeter, expresses
                concerns about the £20 billion commitment to CCS, citing its limited impact on reducing atmospheric carbon.`),Ms.forEach(a),Ce=c(bt),me=r(bt,"LI",{});var as=n(me);ie=p(as,`Josh Burke, Senior Policy Fellow at the London School of Economics and Political Science, laments the absence of
                a long-term investment plan for greener solutions.`),as.forEach(a),Z=c(bt),et=r(bt,"LI",{});var Yt=n(et);De=p(Yt,`Matthew Paterson, Professor of International and Climate Change Politics at the University of Manchester,
                critiques the plan's inadequate focus on retrofitting the UK's inefficient homes.`),Yt.forEach(a),Se=c(bt),ne=r(bt,"LI",{});var lt=n(ne);Re=p(lt,`Christophe Williams, CEO of Naked Energy, calls for increased awareness and support for existing clean
                technologies that could help businesses and communities save money while reducing environmental impact.`),lt.forEach(a),bt.forEach(a),Te=c(Bt),ee=r(Bt,"DIV",{class:!0});var Xt=n(ee);Ne=p(Xt,`Naturally we agree!
              `),Pe=r(Xt,"BR",{}),$e=p(Xt,`
              These aren’t the reasons, however, that make us assert that the document and the UK government are missing the point,
              as damning as they are.`),Xt.forEach(a),Bt.forEach(a),Be=c(ve),Ge=r(ve,"DIV",{class:!0});var ns=n(Ge);xe=r(ns,"DIV",{class:!0});var vs=n(xe);Ze=p(vs,"Th 6R Approach"),vs.forEach(a),Qe=c(ns),it=r(ns,"DIV",{class:!0});var W=n(it);P=p(W,`At PFP, we believe in a "6 R" approach to address global environmental challenges, with "regrowth" as the ultimate
              goal. By focusing on reducing waste and re-engineering processes in line with ESG goals, we can have a newly
              defined type of growth and make a positive impact on our planet and future generations.`),W.forEach(a),ns.forEach(a),B=c(ve),$=r(ve,"DIV",{class:!0});var gs=n($);z=r(gs,"IMG",{class:!0,alt:!0,src:!0}),gs.forEach(a),oe=c(ve),J=r(ve,"DIV",{class:!0});var Pt=n(J);Ve=r(Pt,"DIV",{class:!0});var os=n(Ve);ke=p(os,"PFP News"),os.forEach(a),le=c(Pt),be=r(Pt,"DIV",{class:!0});var es=n(be);It=p(es,`As we continue to develop our power from waste platform to fulfil our global commitment to creating energy from
              non-recyclable waste, we are also creating our network of collaborative partners to work with us to support our
              clients to re-engineer their entire process in line with their ESG goals.`),es.forEach(a),pe=c(Pt),te=r(Pt,"DIV",{class:!0});var ls=n(te);Ke=p(ls,"We're delighted to announce a new partnership with Rafinex, found at "),Me=r(ls,"A",{href:!0,target:!0});var Zs=n(Me);He=p(Zs,"www.rafinex.com"),Zs.forEach(a),ye=p(ls,`
               Specialising in advanced numerical models for engineering applications, Rafinex will work alongside PFP and our clients
              to reduce waste and develop sustainable solutions designs across various industries.`),ls.forEach(a),Ye=c(Pt),ft=r(Pt,"DIV",{class:!0});var Fr=n(ft);Ae=p(Fr,`Rafinex' innovative cloud SaaS product Möbius embeds the latest breakthroughs in stochastic optimisation
              mathematics. It is able to compute highly optimised and reliably trustworthy product designs that remain safe in
              real-life variable operating conditions in a matter of hours - making sustainable designs both scalable and
              profitable at the same time. Rafinex enables companies to substantially save on material usage for creating
              products, as well as on the subsequent energy required to use or operate these products.`),Fr.forEach(a),je=c(Pt),qt=r(Pt,"DIV",{class:!0});var ts=n(qt);Lt=p(ts,`As we continue to connect businesses and communities with the best technology partners for power-from-waste
              projects, our mission is to reduce the strain on our planet caused by the pursuit of financial growth at any cost.
              Together, we can build a sustainable future.`),ts.forEach(a),Pt.forEach(a),ve.forEach(a),mt.forEach(a),Tt.forEach(a),Je.forEach(a),Oe=c(St),yt=r(St,"DIV",{class:!0});var cs=n(yt);Vt=r(cs,"DIV",{class:!0});var ir=n(Vt);ce=p(ir,"Copyright © 2023 Power for Planet"),ir.forEach(a),ct=c(cs),tt=r(cs,"DIV",{class:!0});var Vs=n(tt);pt=r(Vs,"DIV",{class:!0});var $s=n(pt);gt=p($s,"Privacy Policy"),$s.forEach(a),Ct=c(Vs),dt=r(Vs,"DIV",{class:!0});var Kt=n(dt);Rt=r(Kt,"IMG",{src:!0,alt:!0,class:!0}),se=c(Kt),vt=r(Kt,"IMG",{src:!0,alt:!0,class:!0}),Gt=c(Kt),ut=r(Kt,"IMG",{src:!0,alt:!0,class:!0}),Kt.forEach(a),Vs.forEach(a),cs.forEach(a),St.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(w,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(E,"class","bg-cover bg-center bg-[url('/assets/new/2.jpg')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(M,"class","uppercase"),t(G,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(_,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(j,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(U,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(H,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(he,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(K,"class","w-full flex-col flex items-start gap-3"),t(L,"class","w-full flex-col flex items-start gap-6"),t(fe,"class","text-xl leading-[34px] font-bold font-Poppins"),t(de,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ae,"class","w-full flex-col flex items-start gap-3"),t(Q,"class","list-disc pl-4"),t(ee,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(N,"class","w-full flex-col flex items-start gap-3"),t(xe,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(it,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Ge,"class","w-full flex-col flex items-start gap-3"),t(z,"class","object-cover w-full h-[2000px] rounded-2xl"),t(z,"alt","1680532545699"),S(z.src,X="/assets/new/1680532545699.png")||t(z,"src",X),t($,"class","w-full flex-col flex items-start gap-4 text-sm leading-[25px] font-light font-PublicSans"),t(Ve,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(be,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Me,"href","//www.rafinex.com"),t(Me,"target","_blank"),t(te,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ft,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(qt,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(J,"class","w-full flex-col flex items-start gap-3"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(D,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(Vt,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(pt,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Rt.src,Dt="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Rt,"src",Dt),t(Rt,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Rt,"class","h-6 w-6"),S(vt.src,kt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(vt,"src",kt),t(vt,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(vt,"class","h-6 w-6"),S(ut.src,ht="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ut,"src",ht),t(ut,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(ut,"class","h-6 w-6"),t(dt,"class","flex items-center gap-5"),t(tt,"class","flex-1 flex justify-end items-center gap-10"),t(yt,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(Mt,St){nt(Mt,l,St),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,I),e(g,w),e(w,V),e(u,y),e(u,D),e(D,E),e(D,F),e(D,k),e(k,A),e(A,G),e(G,M),e(M,b),e(A,C),e(A,_),e(_,q),e(k,O),e(k,L),e(L,j),e(j,Y),e(L,R),e(L,U),e(U,ge),e(L,ue),e(L,K),e(K,H),e(H,re),e(K,Fe),e(K,he),e(he,ze),e(k,we),e(k,ae),e(ae,fe),e(fe,qe),e(ae,Ee),e(ae,de),e(de,Ue),e(k,Le),e(k,N),e(N,Q),e(Q,Ie),e(Ie,_e),e(Q,Ce),e(Q,me),e(me,ie),e(Q,Z),e(Q,et),e(et,De),e(Q,Se),e(Q,ne),e(ne,Re),e(N,Te),e(N,ee),e(ee,Ne),e(ee,Pe),e(ee,$e),e(k,Be),e(k,Ge),e(Ge,xe),e(xe,Ze),e(Ge,Qe),e(Ge,it),e(it,P),e(k,B),e(k,$),e($,z),e(k,oe),e(k,J),e(J,Ve),e(Ve,ke),e(J,le),e(J,be),e(be,It),e(J,pe),e(J,te),e(te,Ke),e(te,Me),e(Me,He),e(te,ye),e(J,Ye),e(J,ft),e(ft,Ae),e(J,je),e(J,qt),e(qt,Lt),e(l,Oe),e(l,yt),e(yt,Vt),e(Vt,ce),e(yt,ct),e(yt,tt),e(tt,pt),e(pt,gt),e(tt,Ct),e(tt,dt),e(dt,Rt),e(dt,se),e(dt,vt),e(dt,Gt),e(dt,ut)},p:We,i:We,o:We,d(Mt){Mt&&a(l)}}}class lI extends Pn{constructor(l){super(),Vn(this,l,null,nI,Ha,{})}}function iI(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,F,k,A,G,M,b,C,_,q,O,L,j,Y,R,U,ge,ue,K,H,re,Fe,he,ze,we,ae,fe,qe,Ee,de,Ue,Le,N,Q,Ie,_e,Ce,me,ie,Z,et,De,Se,ne,Re,Te,ee,Ne,Pe,$e,Be,Ge,xe,Ze,Qe,it,P,B,$,z,X,oe,J,Ve,ke,le,be,It,pe,te,Ke,Me,He,ye,Ye,ft,Ae,je,qt,Lt,Oe,yt;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),I=o(),w=s("div"),V=f('The "Great Greenwashing” of 2023'),y=o(),D=s("div"),E=s("div"),F=o(),k=s("div"),A=s("div"),G=s("div"),M=s("div"),b=f("March 6, 2023"),C=o(),_=s("div"),q=f('The "Great Greenwashing” of 2023'),O=o(),L=s("div"),j=s("div"),Y=f("From Euronews green"),R=o(),U=s("div"),ge=f(`In recent news, Lufthansa released a poster reading "Protecting the Planet", featuring a plane overlaid on an
              image of the Earth, which was rapidly banned in the UK for misleading consumers about the airline's environmental
              impact. While Lufthansa has set a goal to become carbon neutral by 2050 and has invested in sustainable aviation
              fuel and carbon offset programs, there are currently no environmental initiatives or commercially viable
              technologies in the aviation industry which would substantiate the green claim "protecting the future".`),ue=o(),K=s("div"),H=s("div"),re=f("From the Guardian"),Fe=o(),he=s("div"),ze=f(`A recent investigation has revealed troubling news about forest carbon offsets. The world's leading certifier,
                Verra, relied upon by major corporations like Disney, Shell, Gucci have been approving offset projects that are
                largely ineffective at combating climate change.`),we=o(),ae=s("div"),fe=f(`The investigation analysed a significant percentage of Verra's projects and found that over 90% of the
                rainforest offset credits - which are among the most commonly used by companies - are likely to be "phantom
                credits". These credits do not represent genuine carbon reductions, which means that the purported benefits of
                these offsets are largely worthless.`),qe=o(),Ee=s("div"),de=s("div"),Ue=f("From journalist Robin Hicks"),Le=o(),N=s("div"),Q=f(`Meanwhile, the South Korean government has said it will start taking action against companies that make misleading
              sustainability claims. It is a first-of-its-kind move in Asia and other governments and regulatory bodies should
              take note and follow suit.`),Ie=o(),_e=s("div"),Ce=f(`Under a draft new law, companies that mislead the public about their environmental impact will face fines of up to
              KRW3 million (£1,920). The news comes four months after the country’s largest oil and gas company SK E&C was
              forced to modify a marketing campaign that claimed the firm would produce “CO2-free” liquefied natural gas at a
              planned plant in northern Australia.`),me=o(),ie=s("div"),Z=s("div"),et=f("From the Planet"),De=o(),Se=s("div"),ne=f(`The environmental harm caused by humans has led to a rapid acceleration of natural changes in my climate system.
              Of course, as a planet, I will still be here for quite some time - around 7.5 billion years, give or take a
              millennium. But unfortunately, the same cannot be said for the multitude of life forms, particularly the human
              species. Climate extremes will soon become the norm and coping with them will be a tremendous challenge.`),Re=o(),Te=s("div"),ee=f(`However, if humanity chooses to prioritise environmental repair over damage, there is a chance we can mitigate the
              worst effects of climate change. It will require more than just PR stunts and lip service. Real, substantive
              action is what's necessary - action that shows a genuine concern for the environment and a willingness to do what
              it takes to preserve our planet for future generations.`),Ne=o(),Pe=s("div"),$e=s("div"),Be=f("From the People"),Ge=o(),xe=s("div"),Ze=f(`We are no longer falling for flashy ad campaigns and PR-led trickery. We are wise to the tactics that corporations
              use to distract from their harmful actions. We are keeping a close eye on the leaders who perpetuate this cycle of
              deception, and they will be held accountable for their actions. In fact, the charge for corporate manslaughter is
              not out of the question - what about charges for the countless lives affected on earth?`),Qe=o(),it=s("div"),P=s("div"),B=f("From PFP"),$=o(),z=s("div"),X=f("Dear Shell et al,"),oe=o(),J=s("div"),Ve=f(`You have the power to make a real difference. Instead of spending millions of dollars on PR campaigns that only
              serve to create the impression that you care about the environment, why not put your resources to work on projects
              that actually remove CO2 from the atmosphere? You could take non-recyclable waste and turn it into green energy,
              providing a secure supply of energy while also enhancing the environment. Your brand could be the one that
              sponsors this initiative. The time for action is now - let us make a difference before it's too late.`),ke=o(),le=s("div"),be=s("div"),It=f("Copyright © 2023 Power for Planet"),pe=o(),te=s("div"),Ke=s("div"),Me=f("Privacy Policy"),He=o(),ye=s("div"),Ye=s("img"),Ae=o(),je=s("img"),Lt=o(),Oe=s("img"),this.h()},l(Vt){l=r(Vt,"DIV",{class:!0});var ce=n(l);i=r(ce,"DIV",{class:!0});var ct=n(i);u=r(ct,"DIV",{class:!0});var tt=n(u);v=r(tt,"DIV",{class:!0});var pt=n(v);g=r(pt,"DIV",{class:!0});var gt=n(g);x=r(gt,"A",{href:!0});var Ct=n(x);m=r(Ct,"DIV",{class:!0});var dt=n(m);h=p(dt,"News"),dt.forEach(a),Ct.forEach(a),I=c(gt),w=r(gt,"DIV",{class:!0});var Rt=n(w);V=p(Rt,'The "Great Greenwashing” of 2023'),Rt.forEach(a),gt.forEach(a),pt.forEach(a),y=c(tt),D=r(tt,"DIV",{class:!0});var Dt=n(D);E=r(Dt,"DIV",{class:!0}),n(E).forEach(a),F=c(Dt),k=r(Dt,"DIV",{class:!0});var se=n(k);A=r(se,"DIV",{class:!0});var vt=n(A);G=r(vt,"DIV",{class:!0});var kt=n(G);M=r(kt,"DIV",{class:!0});var Gt=n(M);b=p(Gt,"March 6, 2023"),Gt.forEach(a),kt.forEach(a),C=c(vt),_=r(vt,"DIV",{class:!0});var ut=n(_);q=p(ut,'The "Great Greenwashing” of 2023'),ut.forEach(a),vt.forEach(a),O=c(se),L=r(se,"DIV",{class:!0});var ht=n(L);j=r(ht,"DIV",{class:!0});var Mt=n(j);Y=p(Mt,"From Euronews green"),Mt.forEach(a),R=c(ht),U=r(ht,"DIV",{class:!0});var St=n(U);ge=p(St,`In recent news, Lufthansa released a poster reading "Protecting the Planet", featuring a plane overlaid on an
              image of the Earth, which was rapidly banned in the UK for misleading consumers about the airline's environmental
              impact. While Lufthansa has set a goal to become carbon neutral by 2050 and has invested in sustainable aviation
              fuel and carbon offset programs, there are currently no environmental initiatives or commercially viable
              technologies in the aviation industry which would substantiate the green claim "protecting the future".`),St.forEach(a),ue=c(ht),K=r(ht,"DIV",{class:!0});var Je=n(K);H=r(Je,"DIV",{class:!0});var Tt=n(H);re=p(Tt,"From the Guardian"),Tt.forEach(a),Fe=c(Je),he=r(Je,"DIV",{class:!0});var Xe=n(he);ze=p(Xe,`A recent investigation has revealed troubling news about forest carbon offsets. The world's leading certifier,
                Verra, relied upon by major corporations like Disney, Shell, Gucci have been approving offset projects that are
                largely ineffective at combating climate change.`),Xe.forEach(a),we=c(Je),ae=r(Je,"DIV",{class:!0});var wt=n(ae);fe=p(wt,`The investigation analysed a significant percentage of Verra's projects and found that over 90% of the
                rainforest offset credits - which are among the most commonly used by companies - are likely to be "phantom
                credits". These credits do not represent genuine carbon reductions, which means that the purported benefits of
                these offsets are largely worthless.`),wt.forEach(a),Je.forEach(a),ht.forEach(a),qe=c(se),Ee=r(se,"DIV",{class:!0});var st=n(Ee);de=r(st,"DIV",{class:!0});var jt=n(de);Ue=p(jt,"From journalist Robin Hicks"),jt.forEach(a),Le=c(st),N=r(st,"DIV",{class:!0});var Qt=n(N);Q=p(Qt,`Meanwhile, the South Korean government has said it will start taking action against companies that make misleading
              sustainability claims. It is a first-of-its-kind move in Asia and other governments and regulatory bodies should
              take note and follow suit.`),Qt.forEach(a),Ie=c(st),_e=r(st,"DIV",{class:!0});var mt=n(_e);Ce=p(mt,`Under a draft new law, companies that mislead the public about their environmental impact will face fines of up to
              KRW3 million (£1,920). The news comes four months after the country’s largest oil and gas company SK E&C was
              forced to modify a marketing campaign that claimed the firm would produce “CO2-free” liquefied natural gas at a
              planned plant in northern Australia.`),mt.forEach(a),st.forEach(a),me=c(se),ie=r(se,"DIV",{class:!0});var ve=n(ie);Z=r(ve,"DIV",{class:!0});var rt=n(Z);et=p(rt,"From the Planet"),rt.forEach(a),De=c(ve),Se=r(ve,"DIV",{class:!0});var Nt=n(Se);ne=p(Nt,`The environmental harm caused by humans has led to a rapid acceleration of natural changes in my climate system.
              Of course, as a planet, I will still be here for quite some time - around 7.5 billion years, give or take a
              millennium. But unfortunately, the same cannot be said for the multitude of life forms, particularly the human
              species. Climate extremes will soon become the norm and coping with them will be a tremendous challenge.`),Nt.forEach(a),Re=c(ve),Te=r(ve,"DIV",{class:!0});var _t=n(Te);ee=p(_t,`However, if humanity chooses to prioritise environmental repair over damage, there is a chance we can mitigate the
              worst effects of climate change. It will require more than just PR stunts and lip service. Real, substantive
              action is what's necessary - action that shows a genuine concern for the environment and a willingness to do what
              it takes to preserve our planet for future generations.`),_t.forEach(a),ve.forEach(a),Ne=c(se),Pe=r(se,"DIV",{class:!0});var at=n(Pe);$e=r(at,"DIV",{class:!0});var ot=n($e);Be=p(ot,"From the People"),ot.forEach(a),Ge=c(at),xe=r(at,"DIV",{class:!0});var Ht=n(xe);Ze=p(Ht,`We are no longer falling for flashy ad campaigns and PR-led trickery. We are wise to the tactics that corporations
              use to distract from their harmful actions. We are keeping a close eye on the leaders who perpetuate this cycle of
              deception, and they will be held accountable for their actions. In fact, the charge for corporate manslaughter is
              not out of the question - what about charges for the countless lives affected on earth?`),Ht.forEach(a),at.forEach(a),Qe=c(se),it=r(se,"DIV",{class:!0});var xt=n(it);P=r(xt,"DIV",{class:!0});var Et=n(P);B=p(Et,"From PFP"),Et.forEach(a),$=c(xt),z=r(xt,"DIV",{class:!0});var Jt=n(z);X=p(Jt,"Dear Shell et al,"),Jt.forEach(a),oe=c(xt),J=r(xt,"DIV",{class:!0});var Ut=n(J);Ve=p(Ut,`You have the power to make a real difference. Instead of spending millions of dollars on PR campaigns that only
              serve to create the impression that you care about the environment, why not put your resources to work on projects
              that actually remove CO2 from the atmosphere? You could take non-recyclable waste and turn it into green energy,
              providing a secure supply of energy while also enhancing the environment. Your brand could be the one that
              sponsors this initiative. The time for action is now - let us make a difference before it's too late.`),Ut.forEach(a),xt.forEach(a),se.forEach(a),Dt.forEach(a),tt.forEach(a),ct.forEach(a),ke=c(ce),le=r(ce,"DIV",{class:!0});var At=n(le);be=r(At,"DIV",{class:!0});var zt=n(be);It=p(zt,"Copyright © 2023 Power for Planet"),zt.forEach(a),pe=c(At),te=r(At,"DIV",{class:!0});var Ot=n(te);Ke=r(Ot,"DIV",{class:!0});var Bt=n(Ke);Me=p(Bt,"Privacy Policy"),Bt.forEach(a),He=c(Ot),ye=r(Ot,"DIV",{class:!0});var bt=n(ye);Ye=r(bt,"IMG",{src:!0,alt:!0,class:!0}),Ae=c(bt),je=r(bt,"IMG",{src:!0,alt:!0,class:!0}),Lt=c(bt),Oe=r(bt,"IMG",{src:!0,alt:!0,class:!0}),bt.forEach(a),Ot.forEach(a),At.forEach(a),ce.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(w,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(E,"class","bg-cover bg-center bg-[url('/assets/new/4.png')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(M,"class","uppercase"),t(G,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(_,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(j,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(U,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(H,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(he,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ae,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(K,"class","w-full flex-col flex items-start gap-3"),t(L,"class","w-full flex-col flex items-start gap-6"),t(de,"class","text-xl leading-[34px] font-bold font-Poppins"),t(N,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(_e,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Ee,"class","w-full flex-col flex items-start gap-3"),t(Z,"class","text-xl leading-[34px] font-bold font-Poppins"),t(Se,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Te,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ie,"class","w-full flex-col flex items-start gap-3"),t($e,"class","text-xl leading-[34px] font-bold font-Poppins"),t(xe,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Pe,"class","w-full flex-col flex items-start gap-3"),t(P,"class","text-xl leading-[34px] font-bold font-Poppins"),t(z,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(J,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(it,"class","w-full flex-col flex items-start gap-3"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(D,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(be,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ke,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Ye.src,ft="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ye,"src",ft),t(Ye,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Ye,"class","h-6 w-6"),S(je.src,qt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(je,"src",qt),t(je,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(je,"class","h-6 w-6"),S(Oe.src,yt="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Oe,"src",yt),t(Oe,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Oe,"class","h-6 w-6"),t(ye,"class","flex items-center gap-5"),t(te,"class","flex-1 flex justify-end items-center gap-10"),t(le,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(Vt,ce){nt(Vt,l,ce),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,I),e(g,w),e(w,V),e(u,y),e(u,D),e(D,E),e(D,F),e(D,k),e(k,A),e(A,G),e(G,M),e(M,b),e(A,C),e(A,_),e(_,q),e(k,O),e(k,L),e(L,j),e(j,Y),e(L,R),e(L,U),e(U,ge),e(L,ue),e(L,K),e(K,H),e(H,re),e(K,Fe),e(K,he),e(he,ze),e(K,we),e(K,ae),e(ae,fe),e(k,qe),e(k,Ee),e(Ee,de),e(de,Ue),e(Ee,Le),e(Ee,N),e(N,Q),e(Ee,Ie),e(Ee,_e),e(_e,Ce),e(k,me),e(k,ie),e(ie,Z),e(Z,et),e(ie,De),e(ie,Se),e(Se,ne),e(ie,Re),e(ie,Te),e(Te,ee),e(k,Ne),e(k,Pe),e(Pe,$e),e($e,Be),e(Pe,Ge),e(Pe,xe),e(xe,Ze),e(k,Qe),e(k,it),e(it,P),e(P,B),e(it,$),e(it,z),e(z,X),e(it,oe),e(it,J),e(J,Ve),e(l,ke),e(l,le),e(le,be),e(be,It),e(le,pe),e(le,te),e(te,Ke),e(Ke,Me),e(te,He),e(te,ye),e(ye,Ye),e(ye,Ae),e(ye,je),e(ye,Lt),e(ye,Oe)},p:We,i:We,o:We,d(Vt){Vt&&a(l)}}}class oI extends Pn{constructor(l){super(),Vn(this,l,null,iI,Ha,{})}}function cI(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,F,k,A,G,M,b,C,_,q,O,L,j,Y,R,U,ge,ue,K,H,re,Fe,he,ze,we,ae,fe,qe,Ee,de,Ue,Le,N,Q,Ie,_e,Ce,me,ie,Z,et,De,Se,ne,Re,Te,ee,Ne,Pe,$e,Be,Ge,xe,Ze,Qe,it,P,B,$,z,X,oe,J,Ve,ke,le,be,It,pe,te,Ke,Me,He,ye,Ye,ft,Ae,je,qt,Lt,Oe,yt,Vt,ce,ct,tt,pt,gt,Ct,dt,Rt,Dt,se,vt,kt,Gt,ut,ht,Mt,St,Je,Tt,Xe,wt,st,jt,Qt,mt,ve,rt,Nt,_t,at,ot,Ht,xt,Et,Jt,Ut,At,zt,Ot,Bt,bt,Ms,as,Yt,lt,Xt,ns,vs,W,gs,Pt,os,es,ls,Zs,Fr,ts,cs,ir,Vs,$s,Kt,hs,ks,Lr,Er,Ir,er,ws,or,ds,us,Zr,Cr,ss,Ss,kn,Gr,Ts,Sn,Mr,rs,Dr;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("Contact us"),x=o(),m=s("div"),h=s("div"),I=s("div"),w=f("Contact us and turn your green energy vision into reality"),V=o(),y=s("div"),D=s("div"),E=s("button"),F=s("div"),k=s("div"),A=s("img"),M=o(),b=s("div"),C=f("Schedule a conversation with us"),_=o(),q=s("div"),O=s("img"),j=o(),Y=s("div"),R=s("iframe"),ge=o(),ue=s("div"),K=s("button"),H=s("div"),re=s("div"),Fe=s("img"),ze=o(),we=s("div"),ae=f("Message us through our contact form"),fe=o(),qe=s("div"),Ee=s("img"),Ue=o(),Le=s("form"),N=s("div"),Q=s("div"),Ie=s("div"),_e=s("div"),Ce=f("Name*"),me=o(),ie=s("div"),Z=s("input"),et=o(),De=s("div"),Se=s("div"),ne=f("Email*"),Re=o(),Te=s("div"),ee=s("input"),Ne=o(),Pe=s("div"),$e=s("div"),Be=s("div"),Ge=f("Organization/Company name (optional)"),xe=o(),Ze=s("div"),Qe=s("input"),it=o(),P=s("div"),B=s("div"),$=f("Type of query/contact*"),z=o(),X=s("div"),oe=s("div"),J=f("Select..."),Ve=o(),ke=s("img"),be=o(),It=s("div"),pe=s("div"),te=s("div"),Ke=f("Your message*"),Me=o(),He=s("div"),ye=s("textarea"),Ye=o(),ft=s("input"),Ae=o(),je=s("input"),qt=o(),Lt=s("input"),Oe=o(),yt=s("input"),Vt=o(),ce=s("input"),ct=o(),tt=s("button"),pt=s("div"),gt=s("img"),dt=f(`
                    Send message`),Rt=o(),Dt=s("script"),se=f(`function toggleElement(k) {
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[1000px]')
              toggleElementX(k)
            }

            function toggleElement2(k) {
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[540px]')
              toggleElementX(k)
            }

            function toggleElementX(k) {
              document.querySelector('#' + k + '-chevron').classList.toggle('rotate-180')
              document.querySelector('#' + k + '-heading').classList.toggle('bg-pfp-green')
              document.querySelector('#' + k + '-heading').classList.toggle('grayscale')
              document.querySelector('#' + k + '-heading').classList.toggle('contrast-200')
              document.querySelector('#' + k + '-heading').classList.toggle('invert')
            }

            setTimeout(() => {
              document.querySelector('#redirect').value = window.location.href
            }, 1000)`),vt=o(),kt=s("div"),Gt=s("div"),ut=s("div"),ht=f("Find us"),Mt=o(),St=s("div"),Je=s("div"),Tt=s("div"),Xe=s("div"),wt=s("div"),st=s("img"),Qt=o(),mt=s("div"),ve=s("div"),rt=s("div"),Nt=f("Power for Planet"),_t=o(),at=s("div"),ot=f("78 Pall Mall SW1Y 5ES London, United Kingdom"),Ht=o(),xt=s("a"),Et=s("img"),Ut=o(),At=s("div"),zt=s("div"),Ot=s("div"),Bt=s("img"),Ms=o(),as=s("div"),Yt=s("div"),lt=s("div"),Xt=f("Contact us"),ns=o(),vs=s("div"),W=f("+44 7796 302 102 dermot@powerforplanet.com"),gs=o(),Pt=s("div"),os=s("div"),es=s("div"),ls=s("div"),Zs=f("Follow us on social media"),Fr=o(),ts=s("div"),cs=s("img"),Vs=o(),$s=s("img"),hs=o(),ks=s("img"),Er=o(),Ir=s("div"),er=s("div"),ws=f("Copyright © 2023 Power for Planet"),or=o(),ds=s("div"),us=s("div"),Zr=f("Privacy Policy"),Cr=o(),ss=s("div"),Ss=s("img"),Gr=o(),Ts=s("img"),Mr=o(),rs=s("img"),this.h()},l(Hs){l=r(Hs,"DIV",{class:!0});var ms=n(l);i=r(ms,"DIV",{class:!0});var js=n(i);u=r(js,"DIV",{class:!0});var ba=n(u);v=r(ba,"DIV",{});var Pr=n(v);g=p(Pr,"Contact us"),Pr.forEach(a),ba.forEach(a),x=c(js),m=r(js,"DIV",{class:!0});var $t=n(m);h=r($t,"DIV",{class:!0});var tr=n(h);I=r(tr,"DIV",{class:!0});var cr=n(I);w=p(cr,"Contact us and turn your green energy vision into reality"),cr.forEach(a),V=c(tr),y=r(tr,"DIV",{class:!0});var dr=n(y);D=r(dr,"DIV",{class:!0});var ur=n(D);E=r(ur,"BUTTON",{onclick:!0});var jr=n(E);F=r(jr,"DIV",{class:!0});var _s=n(F);k=r(_s,"DIV",{id:!0,class:!0});var xs=n(k);A=r(xs,"IMG",{src:!0,alt:!0,class:!0}),xs.forEach(a),M=c(_s),b=r(_s,"DIV",{class:!0});var ol=n(b);C=p(ol,"Schedule a conversation with us"),ol.forEach(a),_=c(_s),q=r(_s,"DIV",{class:!0});var pi=n(q);O=r(pi,"IMG",{id:!0,src:!0,alt:!0,class:!0}),pi.forEach(a),_s.forEach(a),jr.forEach(a),j=c(ur),Y=r(ur,"DIV",{id:!0,class:!0});var ea=n(Y);R=r(ea,"IFRAME",{style:!0,height:!0,width:!0,frameborder:!0,src:!0,title:!0}),n(R).forEach(a),ea.forEach(a),ur.forEach(a),ge=c(dr),ue=r(dr,"DIV",{class:!0});var is=n(ue);K=r(is,"BUTTON",{onclick:!0});var vi=n(K);H=r(vi,"DIV",{class:!0});var Nr=n(H);re=r(Nr,"DIV",{id:!0,class:!0});var ta=n(re);Fe=r(ta,"IMG",{src:!0,alt:!0,class:!0}),ta.forEach(a),ze=c(Nr),we=r(Nr,"DIV",{class:!0});var gi=n(we);ae=p(gi,"Message us through our contact form"),gi.forEach(a),fe=c(Nr),qe=r(Nr,"DIV",{class:!0});var cl=n(qe);Ee=r(cl,"IMG",{id:!0,src:!0,alt:!0,class:!0}),cl.forEach(a),Nr.forEach(a),vi.forEach(a),Ue=c(is),Le=r(is,"FORM",{id:!0,class:!0,action:!0,method:!0});var fo=n(Le);N=r(fo,"DIV",{class:!0});var fs=n(N);Q=r(fs,"DIV",{class:!0});var As=n(Q);Ie=r(As,"DIV",{class:!0});var Br=n(Ie);_e=r(Br,"DIV",{class:!0});var Wa=n(_e);Ce=p(Wa,"Name*"),Wa.forEach(a),me=c(Br),ie=r(Br,"DIV",{class:!0});var Zt=n(ie);Z=r(Zt,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),Zt.forEach(a),Br.forEach(a),et=c(As),De=r(As,"DIV",{class:!0});var fr=n(De);Se=r(fr,"DIV",{class:!0});var Vr=n(Se);ne=p(Vr,"Email*"),Vr.forEach(a),Re=c(fr),Te=r(fr,"DIV",{class:!0});var pr=n(Te);ee=r(pr,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),pr.forEach(a),fr.forEach(a),As.forEach(a),Ne=c(fs),Pe=r(fs,"DIV",{class:!0});var Ns=n(Pe);$e=r(Ns,"DIV",{class:!0});var qr=n($e);Be=r(qr,"DIV",{class:!0});var ya=n(Be);Ge=p(ya,"Organization/Company name (optional)"),ya.forEach(a),xe=c(qr),Ze=r(qr,"DIV",{class:!0});var Tn=n(Ze);Qe=r(Tn,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),Tn.forEach(a),qr.forEach(a),it=c(Ns),P=r(Ns,"DIV",{class:!0});var dl=n(P);B=r(dl,"DIV",{class:!0});var sr=n(B);$=p(sr,"Type of query/contact*"),sr.forEach(a),z=c(dl),X=r(dl,"DIV",{class:!0});var ps=n(X);oe=r(ps,"DIV",{class:!0});var $l=n(oe);J=p($l,"Select..."),$l.forEach(a),Ve=c(ps),ke=r(ps,"IMG",{src:!0,alt:!0,class:!0}),ps.forEach(a),dl.forEach(a),Ns.forEach(a),be=c(fs),It=r(fs,"DIV",{class:!0});var hi=n(It);pe=r(hi,"DIV",{class:!0});var bs=n(pe);te=r(bs,"DIV",{class:!0});var sa=n(te);Ke=p(sa,"Your message*"),sa.forEach(a),Me=c(bs),He=r(bs,"DIV",{class:!0});var An=n(He);ye=r(An,"TEXTAREA",{class:!0,name:!0}),n(ye).forEach(a),An.forEach(a),bs.forEach(a),hi.forEach(a),Ye=c(fs),ft=r(fs,"INPUT",{type:!0,name:!0,style:!0}),Ae=c(fs),je=r(fs,"INPUT",{type:!0,name:!0}),qt=c(fs),Lt=r(fs,"INPUT",{type:!0,name:!0}),Oe=c(fs),yt=r(fs,"INPUT",{type:!0,name:!0}),Vt=c(fs),ce=r(fs,"INPUT",{type:!0,name:!0,id:!0}),ct=c(fs),tt=r(fs,"BUTTON",{type:!0});var vr=n(tt);pt=r(vr,"DIV",{class:!0});var Ya=n(pt);gt=r(Ya,"IMG",{src:!0,alt:!0,class:!0}),dt=p(Ya,`
                    Send message`),Ya.forEach(a),vr.forEach(a),fs.forEach(a),fo.forEach(a),is.forEach(a),Rt=c(dr),Dt=r(dr,"SCRIPT",{});var mi=n(Dt);se=p(mi,`function toggleElement(k) {
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[1000px]')
              toggleElementX(k)
            }

            function toggleElement2(k) {
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[540px]')
              toggleElementX(k)
            }

            function toggleElementX(k) {
              document.querySelector('#' + k + '-chevron').classList.toggle('rotate-180')
              document.querySelector('#' + k + '-heading').classList.toggle('bg-pfp-green')
              document.querySelector('#' + k + '-heading').classList.toggle('grayscale')
              document.querySelector('#' + k + '-heading').classList.toggle('contrast-200')
              document.querySelector('#' + k + '-heading').classList.toggle('invert')
            }

            setTimeout(() => {
              document.querySelector('#redirect').value = window.location.href
            }, 1000)`),mi.forEach(a),dr.forEach(a),tr.forEach(a),vt=c($t),kt=r($t,"DIV",{class:!0});var gr=n(kt);Gt=r(gr,"DIV",{class:!0});var Es=n(Gt);ut=r(Es,"DIV",{});var rr=n(ut);ht=p(rr,"Find us"),rr.forEach(a),Es.forEach(a),Mt=c(gr),St=r(gr,"DIV",{class:!0});var Os=n(St);Je=r(Os,"DIV",{class:!0});var Bs=n(Je);Tt=r(Bs,"DIV",{class:!0});var Rr=n(Tt);Xe=r(Rr,"DIV",{class:!0});var za=n(Xe);wt=r(za,"DIV",{class:!0});var xi=n(wt);st=r(xi,"IMG",{src:!0,alt:!0,class:!0}),xi.forEach(a),Qt=c(za),mt=r(za,"DIV",{class:!0});var hr=n(mt);ve=r(hr,"DIV",{class:!0});var Ws=n(ve);rt=r(Ws,"DIV",{class:!0});var Fs=n(rt);Nt=p(Fs,"Power for Planet"),Fs.forEach(a),_t=c(Ws),at=r(Ws,"DIV",{class:!0});var Ur=n(at);ot=p(Ur,"78 Pall Mall SW1Y 5ES London, United Kingdom"),Ur.forEach(a),Ht=c(Ws),xt=r(Ws,"A",{href:!0,target:!0});var On=n(xt);Et=r(On,"IMG",{src:!0,class:!0}),On.forEach(a),Ws.forEach(a),hr.forEach(a),za.forEach(a),Rr.forEach(a),Ut=c(Bs),At=r(Bs,"DIV",{class:!0});var Fn=n(At);zt=r(Fn,"DIV",{class:!0});var Ka=n(zt);Ot=r(Ka,"DIV",{class:!0});var bi=n(Ot);Bt=r(bi,"IMG",{src:!0,alt:!0,class:!0}),bi.forEach(a),Ms=c(Ka),as=r(Ka,"DIV",{class:!0});var Is=n(as);Yt=r(Is,"DIV",{class:!0});var Ls=n(Yt);lt=r(Ls,"DIV",{class:!0});var ra=n(lt);Xt=p(ra,"Contact us"),ra.forEach(a),ns=c(Ls),vs=r(Ls,"DIV",{class:!0});var po=n(vs);W=p(po,"+44 7796 302 102 dermot@powerforplanet.com"),po.forEach(a),Ls.forEach(a),Is.forEach(a),Ka.forEach(a),Fn.forEach(a),Bs.forEach(a),gs=c(Os),Pt=r(Os,"DIV",{class:!0});var yi=n(Pt);os=r(yi,"DIV",{class:!0});var Ln=n(os);es=r(Ln,"DIV",{class:!0});var ar=n(es);ls=r(ar,"DIV",{class:!0});var mr=n(ls);Zs=p(mr,"Follow us on social media"),mr.forEach(a),Fr=c(ar),ts=r(ar,"DIV",{class:!0});var kr=n(ts);cs=r(kr,"IMG",{src:!0,alt:!0,class:!0}),Vs=c(kr),$s=r(kr,"IMG",{src:!0,alt:!0,class:!0}),hs=c(kr),ks=r(kr,"IMG",{src:!0,alt:!0,class:!0}),kr.forEach(a),ar.forEach(a),Ln.forEach(a),yi.forEach(a),Os.forEach(a),gr.forEach(a),$t.forEach(a),Er=c(js),Ir=r(js,"DIV",{class:!0});var nr=n(Ir);er=r(nr,"DIV",{class:!0});var ul=n(er);ws=p(ul,"Copyright © 2023 Power for Planet"),ul.forEach(a),or=c(nr),ds=r(nr,"DIV",{class:!0});var $r=n(ds);us=r($r,"DIV",{class:!0});var aa=n(us);Zr=p(aa,"Privacy Policy"),aa.forEach(a),Cr=c($r),ss=r($r,"DIV",{class:!0});var Ys=n(ss);Ss=r(Ys,"IMG",{src:!0,alt:!0,class:!0}),Gr=c(Ys),Ts=r(Ys,"IMG",{src:!0,alt:!0,class:!0}),Mr=c(Ys),rs=r(Ys,"IMG",{src:!0,alt:!0,class:!0}),Ys.forEach(a),$r.forEach(a),nr.forEach(a),js.forEach(a),ms.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),t(I,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(A.src,G="/assets/new/calendar-days.svg")||t(A,"src",G),t(A,"alt","calendar-days"),t(A,"class","h-10 w-10 grayscale contrast-200 invert"),t(k,"id","calendar-heading"),t(k,"class","bg-pfp-green bg-none duration-100 flex justify-center items-center gap-2.5 px-[50px] py-8 rounded-l-[20px]"),t(b,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins w-[596px]"),t(O,"id","calendar-chevron"),S(O.src,L="/assets/new/chevron-down.svg")||t(O,"src",L),t(O,"alt","chevron-down"),t(O,"class","h-6 w-6 rotate-180 duration-180"),t(q,"class","flex items-center gap-2.5 pl-[50px]"),t(F,"class","w-full flex items-center gap-[50px] pr-[50px]"),t(E,"onclick","toggleElement('calendar')"),T(R,"background","none"),T(R,"filter","contrast(1.07)"),T(R,"margin-bottom","-100px"),t(R,"height","1100"),t(R,"width","100%"),t(R,"frameborder","0"),R.allowFullscreen="",S(R.src,U="https://calendly.com/csaladenes-6ee/30min?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=394e6a&primary_color=3f9378&back=1&month=2023-07")||t(R,"src",U),t(R,"title","book"),t(Y,"id","calendar"),t(Y,"class","bg-none overflow-hidden duration-300 h-[0px] w-full"),t(D,"class","bg-[#e7f5f5] w-full pt-[0px] flex-col flex justify-center items-center rounded-[20px] align-top"),S(Fe.src,he="/assets/new/mail.svg")||t(Fe,"src",he),t(Fe,"alt","mail"),t(Fe,"class","h-10 w-10 grayscale contrast-200 invert"),t(re,"id","contactform-heading"),t(re,"class","bg-pfp-green bg-none duration-100 flex justify-center items-center gap-2.5 px-[50px] py-8 rounded-l-[20px]"),t(we,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins w-[596px]"),t(Ee,"id","contactform-chevron"),S(Ee.src,de="/assets/new/chevron-down.svg")||t(Ee,"src",de),t(Ee,"alt","chevron-down"),t(Ee,"class","h-6 w-6 rotate-180 duration-180"),t(qe,"class","flex items-center gap-2.5 pl-[50px]"),t(H,"class","w-full flex items-center gap-[50px] pr-[50px]"),t(K,"onclick","toggleElement2('contactform')"),t(_e,"class","text-sm font-bold"),t(Z,"class","w-[299px]"),t(Z,"type","text"),t(Z,"name","name"),t(Z,"placeholder","Your Name"),Z.required=!0,t(ie,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium"),t(Ie,"class","flex-1 flex-col flex items-start gap-2"),t(Se,"class","text-sm font-bold"),t(ee,"class","w-[299px]"),t(ee,"type","email"),t(ee,"name","email"),t(ee,"placeholder","Your email"),ee.required=!0,t(Te,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium"),t(De,"class","flex-1 flex-col flex items-start gap-2"),t(Q,"class","w-[600px] flex justify-center items-center gap-[30px] leading-[26px] text-[#2e3855] font-PublicSans"),t(Be,"class","text-sm font-bold"),t(Qe,"class","w-[299px]"),t(Qe,"type","text"),t(Qe,"name","company"),t(Qe,"placeholder","Your company"),t(Ze,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium"),t($e,"class","flex-1 flex-col flex items-start gap-2 leading-[26px] text-[#2e3855] font-PublicSans"),t(B,"class","text-sm leading-[26px] font-bold text-[#2e3855] font-PublicSans"),t(oe,"class","text-base leading-[26px] font-medium text-[#909090] font-PublicSans w-[265px]"),S(ke.src,le="/assets/new/chevron-down.svg")||t(ke,"src",le),t(ke,"alt","chevron-down"),t(ke,"class","h-6 w-6"),t(X,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855]"),t(P,"class","flex-1 flex-col flex items-start gap-2"),t(Pe,"class","w-[700px] flex justify-center items-center gap-[30px]"),t(te,"class","text-sm font-bold text-[#2e3855]"),t(ye,"class","w-[664px] min-h-[150px] "),t(ye,"name","message"),ye.required=!0,t(He,"class","bg-white min-h-[150px] w-full flex-1 flex items-start gap-2.5 rounded-[6px] p-4 border border-[#2e3855] text-base font-medium text-[#909090]"),t(pe,"class","h-full flex-1 flex-col flex items-start gap-2"),t(It,"class","w-[600px] h-5/12 flex justify-center items-center gap-[30px] leading-[26px] font-PublicSans"),t(ft,"type","text"),t(ft,"name","honeypot"),T(ft,"display","none"),t(je,"type","hidden"),t(je,"name","accessKey"),je.value="b3ab5267-ffe0-4a59-be25-07b9a27e4335",t(Lt,"type","hidden"),t(Lt,"name","subject"),Lt.value="PFP Contact us form submission",t(yt,"type","hidden"),t(yt,"name","replyTo"),yt.value="@",t(ce,"type","hidden"),t(ce,"name","redirectTo"),t(ce,"id","redirect"),S(gt.src,Ct="/assets/new/arrow-right-circle.svg")||t(gt,"src",Ct),t(gt,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(gt,"class","h-5 w-5"),t(pt,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(tt,"type","submit"),t(N,"class","overflow-hidden flex-col flex justify-center items-center gap-[30px] pb-10 rounded-[20px] z-[2]"),t(Le,"id","contactform"),t(Le,"class","bg-none overflow-hidden duration-300 h-[0px] w-full"),t(Le,"action","https://api.staticforms.xyz/submit"),t(Le,"method","post"),t(ue,"class","bg-[#e7f5f5] w-full pt-[0px] flex-col flex justify-center items-center rounded-[20px] align-top"),t(y,"class","w-full flex-col gap-5 flex items-center"),t(h,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(Gt,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(st.src,jt="/assets/new/map-pin.svg")||t(st,"src",jt),t(st,"alt","map-pin"),t(st,"class","h-10 w-10"),t(wt,"class","bg-[#2e3855] flex justify-center items-center gap-2.5 p-5 rounded-[40px]"),t(rt,"class","text-xl leading-[34px] font-Poppins w-[390px]"),t(at,"class","text-sm leading-[26px] font-PublicSans w-[390px]"),S(Et.src,Jt="/assets/new/map.png")||t(Et,"src",Jt),t(Et,"class","mt-5"),t(xt,"href","https://www.google.com/maps/place/78+Pall+Mall,+St.+James's,+London+SW1Y+5ES/@51.5057924,-0.1362653,19z/data=!4m6!3m5!1s0x487604d7477ba0bb:0x5ecb442822d2e0e!8m2!3d51.5056999!4d-0.1359853!16s%2Fg%2F1tj90_zr?entry=ttu"),t(xt,"target","_blank"),t(ve,"class","w-full flex-col flex items-center"),t(mt,"class","w-full flex-col flex items-start gap-2 font-bold text-center text-[#2e3855]"),t(Xe,"class","w-full flex-col flex justify-center items-center gap-6"),t(Tt,"class","h-full bg-[#e7f5f5] flex-1 flex-col flex items-center gap-6 p-10 rounded-[20px]"),S(Bt.src,bt="/assets/new/message-circle.svg")||t(Bt,"src",bt),t(Bt,"alt","message-circle"),t(Bt,"class","h-10 w-10"),t(Ot,"class","bg-[#2e3855] flex justify-center items-center gap-2.5 p-5 rounded-[40px]"),t(lt,"class","text-xl leading-[34px] font-Poppins w-[390px]"),t(vs,"class","text-sm leading-[26px] font-PublicSans h-[52px] w-[390px]"),t(Yt,"class","w-full flex-col h-full flex items-start"),t(as,"class","w-full flex-col flex items-start gap-2 font-bold text-center text-[#2e3855]"),t(zt,"class","w-full flex-1 flex-col flex items-center gap-6"),t(At,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-center gap-6 p-10 pb-20 rounded-[20px]"),t(Je,"class","w-full flex items-start gap-5"),t(ls,"class","text-xl leading-[34px] font-bold text-center text-[#2e3855] font-Poppins"),S(cs.src,ir="/assets/new/mdi_linkedin.svg")||t(cs,"src",ir),t(cs,"alt","mdi:linkedin"),t(cs,"class","h-10 w-10"),S($s.src,Kt="/assets/new/mdi_twitter.svg")||t($s,"src",Kt),t($s,"alt","mdi:twitter"),t($s,"class","h-10 w-10"),S(ks.src,Lr="/assets/new/mdi_instagram.svg")||t(ks,"src",Lr),t(ks,"alt","mdi:instagram"),t(ks,"class","h-10 w-10"),t(ts,"class","flex justify-center items-center gap-4"),t(es,"class","w-full flex justify-center items-center gap-10"),t(os,"class","bg-[#e7f5f5] flex-1 flex-col flex items-center gap-6 p-10 rounded-[20px]"),t(Pt,"class","w-full flex items-start gap-5"),t(St,"class","w-full flex-col flex items-center gap-5"),t(kt,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(m,"class","w-full flex-col flex items-start gap-5"),t(er,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(us,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Ss.src,kn="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ss,"src",kn),t(Ss,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Ss,"class","h-6 w-6"),S(Ts.src,Sn="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ts,"src",Sn),t(Ts,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Ts,"class","h-6 w-6"),S(rs.src,Dr="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(rs,"src",Dr),t(rs,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(rs,"class","h-6 w-6"),t(ss,"class","flex items-center gap-5"),t(ds,"class","flex-1 flex justify-end items-center gap-10"),t(Ir,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col w-full flex items-start gap-[60px] max-w-[1060px] rounded-[20px]"),t(l,"class","flex-col flex items-center gap-10 h-fit mt-20")},m(Hs,ms){nt(Hs,l,ms),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,I),e(I,w),e(h,V),e(h,y),e(y,D),e(D,E),e(E,F),e(F,k),e(k,A),e(F,M),e(F,b),e(b,C),e(F,_),e(F,q),e(q,O),e(D,j),e(D,Y),e(Y,R),e(y,ge),e(y,ue),e(ue,K),e(K,H),e(H,re),e(re,Fe),e(H,ze),e(H,we),e(we,ae),e(H,fe),e(H,qe),e(qe,Ee),e(ue,Ue),e(ue,Le),e(Le,N),e(N,Q),e(Q,Ie),e(Ie,_e),e(_e,Ce),e(Ie,me),e(Ie,ie),e(ie,Z),e(Q,et),e(Q,De),e(De,Se),e(Se,ne),e(De,Re),e(De,Te),e(Te,ee),e(N,Ne),e(N,Pe),e(Pe,$e),e($e,Be),e(Be,Ge),e($e,xe),e($e,Ze),e(Ze,Qe),e(Pe,it),e(Pe,P),e(P,B),e(B,$),e(P,z),e(P,X),e(X,oe),e(oe,J),e(X,Ve),e(X,ke),e(N,be),e(N,It),e(It,pe),e(pe,te),e(te,Ke),e(pe,Me),e(pe,He),e(He,ye),e(N,Ye),e(N,ft),e(N,Ae),e(N,je),e(N,qt),e(N,Lt),e(N,Oe),e(N,yt),e(N,Vt),e(N,ce),e(N,ct),e(N,tt),e(tt,pt),e(pt,gt),e(pt,dt),e(y,Rt),e(y,Dt),e(Dt,se),e(m,vt),e(m,kt),e(kt,Gt),e(Gt,ut),e(ut,ht),e(kt,Mt),e(kt,St),e(St,Je),e(Je,Tt),e(Tt,Xe),e(Xe,wt),e(wt,st),e(Xe,Qt),e(Xe,mt),e(mt,ve),e(ve,rt),e(rt,Nt),e(ve,_t),e(ve,at),e(at,ot),e(ve,Ht),e(ve,xt),e(xt,Et),e(Je,Ut),e(Je,At),e(At,zt),e(zt,Ot),e(Ot,Bt),e(zt,Ms),e(zt,as),e(as,Yt),e(Yt,lt),e(lt,Xt),e(Yt,ns),e(Yt,vs),e(vs,W),e(St,gs),e(St,Pt),e(Pt,os),e(os,es),e(es,ls),e(ls,Zs),e(es,Fr),e(es,ts),e(ts,cs),e(ts,Vs),e(ts,$s),e(ts,hs),e(ts,ks),e(i,Er),e(i,Ir),e(Ir,er),e(er,ws),e(Ir,or),e(Ir,ds),e(ds,us),e(us,Zr),e(ds,Cr),e(ds,ss),e(ss,Ss),e(ss,Gr),e(ss,Ts),e(ss,Mr),e(ss,rs)},p:We,i:We,o:We,d(Hs){Hs&&a(l)}}}class dI extends Pn{constructor(l){super(),Vn(this,l,null,cI,Ha,{})}}function uI(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,F,k,A,G,M,b,C,_,q,O,L,j,Y,R,U,ge,ue,K,H,re,Fe,he,ze,we,ae,fe,qe,Ee,de,Ue,Le,N,Q,Ie,_e,Ce,me,ie,Z,et,De,Se,ne,Re,Te,ee,Ne;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("Financial options"),x=o(),m=s("div"),h=s("div"),I=s("div"),w=s("img"),y=o(),D=s("div"),E=s("div"),F=s("div"),k=s("div"),A=s("div"),G=f("Funding solutions"),M=o(),b=s("div"),C=f(`If you’re in adopting a power-from-waste project to make use of your current waste and feedback heat and
                  electricity, there are several funding options available to cover the initial costs (CAPEX) required to take
                  your project from feasibility to operation. These options include:
                  `),_=s("ul"),q=s("li"),O=f("Self-funding"),L=o(),j=s("li"),Y=f("Asset finance"),R=o(),U=s("li"),ge=f("Equity funding"),ue=o(),K=s("li"),H=f("Grants"),re=o(),Fe=s("li"),he=f("Government subsidies"),ze=o(),we=s("li"),ae=f("Carbon credits"),fe=o(),qe=s("li"),Ee=f("Plastic credits"),de=f(`
                  Choose the option that best fits your business needs and get your power-from-waste project off the ground today.`),Ue=o(),Le=s("div"),N=s("div"),Q=f("Copyright © 2023 Power for Planet"),Ie=o(),_e=s("div"),Ce=s("div"),me=f("Privacy Policy"),ie=o(),Z=s("div"),et=s("img"),Se=o(),ne=s("img"),Te=o(),ee=s("img"),this.h()},l(Pe){l=r(Pe,"DIV",{class:!0});var $e=n(l);i=r($e,"DIV",{class:!0});var Be=n(i);u=r(Be,"DIV",{class:!0});var Ge=n(u);v=r(Ge,"DIV",{});var xe=n(v);g=p(xe,"Financial options"),xe.forEach(a),Ge.forEach(a),x=c(Be),m=r(Be,"DIV",{class:!0});var Ze=n(m);h=r(Ze,"DIV",{class:!0});var Qe=n(h);I=r(Qe,"DIV",{class:!0});var it=n(I);w=r(it,"IMG",{src:!0,alt:!0,class:!0}),it.forEach(a),y=c(Qe),D=r(Qe,"DIV",{class:!0});var P=n(D);E=r(P,"DIV",{class:!0});var B=n(E);F=r(B,"DIV",{class:!0});var $=n(F);k=r($,"DIV",{class:!0});var z=n(k);A=r(z,"DIV",{class:!0});var X=n(A);G=p(X,"Funding solutions"),X.forEach(a),M=c(z),b=r(z,"DIV",{class:!0});var oe=n(b);C=p(oe,`If you’re in adopting a power-from-waste project to make use of your current waste and feedback heat and
                  electricity, there are several funding options available to cover the initial costs (CAPEX) required to take
                  your project from feasibility to operation. These options include:
                  `),_=r(oe,"UL",{class:!0});var J=n(_);q=r(J,"LI",{});var Ve=n(q);O=p(Ve,"Self-funding"),Ve.forEach(a),L=c(J),j=r(J,"LI",{});var ke=n(j);Y=p(ke,"Asset finance"),ke.forEach(a),R=c(J),U=r(J,"LI",{});var le=n(U);ge=p(le,"Equity funding"),le.forEach(a),ue=c(J),K=r(J,"LI",{});var be=n(K);H=p(be,"Grants"),be.forEach(a),re=c(J),Fe=r(J,"LI",{});var It=n(Fe);he=p(It,"Government subsidies"),It.forEach(a),ze=c(J),we=r(J,"LI",{});var pe=n(we);ae=p(pe,"Carbon credits"),pe.forEach(a),fe=c(J),qe=r(J,"LI",{});var te=n(qe);Ee=p(te,"Plastic credits"),te.forEach(a),J.forEach(a),de=p(oe,`
                  Choose the option that best fits your business needs and get your power-from-waste project off the ground today.`),oe.forEach(a),z.forEach(a),$.forEach(a),B.forEach(a),P.forEach(a),Qe.forEach(a),Ze.forEach(a),Ue=c(Be),Le=r(Be,"DIV",{class:!0});var Ke=n(Le);N=r(Ke,"DIV",{class:!0});var Me=n(N);Q=p(Me,"Copyright © 2023 Power for Planet"),Me.forEach(a),Ie=c(Ke),_e=r(Ke,"DIV",{class:!0});var He=n(_e);Ce=r(He,"DIV",{class:!0});var ye=n(Ce);me=p(ye,"Privacy Policy"),ye.forEach(a),ie=c(He),Z=r(He,"DIV",{class:!0});var Ye=n(Z);et=r(Ye,"IMG",{src:!0,alt:!0,class:!0}),Se=c(Ye),ne=r(Ye,"IMG",{src:!0,alt:!0,class:!0}),Te=c(Ye),ee=r(Ye,"IMG",{src:!0,alt:!0,class:!0}),Ye.forEach(a),He.forEach(a),Ke.forEach(a),Be.forEach(a),$e.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),S(w.src,V="/assets/new/illu-costs-31-Frame24-31-Frame24-31-Frame18-31-Savecosts-31-blockrow2-31-wrapper-31-03Greenenergy.svg")||t(w,"src",V),t(w,"alt","illu-costs-31-Frame32-31-Purpose-31-blockrow1-31-Intro-31-wrapper-31-03Greenenergy"),t(w,"class","h-40 w-[186px] mt-28"),t(I,"class","h-full flex-1 flex-col flex justify-center items-center"),t(A,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(_,"class","list-disc p-5 pl-10"),t(b,"class","text-md leading-[26px] font-light font-PublicSans w-[650px]"),t(k,"class","h-full flex-1 flex-col flex items-start gap-[18px]"),t(F,"class","w-full flex justify-end items-start gap-[18px]"),t(E,"class","w-full flex-col flex items-start gap-[18px]"),t(D,"class","flex-1 flex-col flex items-start gap-6 text-[#2e3855]"),t(h,"class","bg-white w-full flex items-start gap-[60px] p-10 rounded-[20px]"),t(m,"class","w-full flex-col flex items-start gap-5"),t(N,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ce,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(et.src,De="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(et,"src",De),t(et,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(et,"class","h-6 w-6"),S(ne.src,Re="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ne,"src",Re),t(ne,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(ne,"class","h-6 w-6"),S(ee.src,Ne="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ee,"src",Ne),t(ee,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(ee,"class","h-6 w-6"),t(Z,"class","flex items-center gap-5"),t(_e,"class","flex-1 flex justify-end items-center gap-10"),t(Le,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col w-full flex items-start gap-[60px] rounded-[20px] max-w-[1060px]"),t(l,"class","flex-col flex items-center gap-[50px] h-fit mt-20")},m(Pe,$e){nt(Pe,l,$e),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,I),e(I,w),e(h,y),e(h,D),e(D,E),e(E,F),e(F,k),e(k,A),e(A,G),e(k,M),e(k,b),e(b,C),e(b,_),e(_,q),e(q,O),e(_,L),e(_,j),e(j,Y),e(_,R),e(_,U),e(U,ge),e(_,ue),e(_,K),e(K,H),e(_,re),e(_,Fe),e(Fe,he),e(_,ze),e(_,we),e(we,ae),e(_,fe),e(_,qe),e(qe,Ee),e(b,de),e(i,Ue),e(i,Le),e(Le,N),e(N,Q),e(Le,Ie),e(Le,_e),e(_e,Ce),e(Ce,me),e(_e,ie),e(_e,Z),e(Z,et),e(Z,Se),e(Z,ne),e(Z,Te),e(Z,ee)},p:We,i:We,o:We,d(Pe){Pe&&a(l)}}}class fI extends Pn{constructor(l){super(),Vn(this,l,null,uI,Ha,{})}}function pI(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,F,k,A,G,M,b,C,_,q,O,L,j,Y,R,U,ge,ue,K,H,re,Fe,he,ze,we,ae,fe,qe,Ee,de,Ue,Le,N,Q,Ie,_e,Ce,me,ie,Z,et,De,Se,ne,Re,Te,ee,Ne,Pe,$e,Be,Ge,xe,Ze,Qe,it,P,B,$,z,X,oe,J,Ve,ke,le,be,It,pe,te,Ke,Me,He,ye,Ye,ft,Ae,je,qt,Lt,Oe,yt,Vt,ce,ct,tt,pt,gt,Ct,dt,Rt,Dt,se,vt,kt,Gt,ut,ht,Mt,St,Je,Tt,Xe,wt,st,jt,Qt,mt,ve,rt,Nt,_t,at,ot,Ht,xt,Et,Jt,Ut,At,zt;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("Frequently Asked Questions"),x=o(),m=s("div"),h=s("div"),I=s("div"),w=s("div"),V=s("div"),y=s("div"),D=s("div"),E=f("General Questions"),F=o(),k=s("div"),A=f("1. What does your company do?"),G=o(),M=s("div"),b=f(`We facilitate power-from-waste projects by matching businesses with the right technology providers. Our goal
                  is to turn non-recyclable waste into low-cost, green power, and we offer a range of technologies such as
                  anaerobic digestion units, pyrolysis, gasification and AD slurry covers.`),C=o(),_=s("div"),q=f("2. What is power-from-waste?"),O=o(),L=s("div"),j=f(`Power-from-waste refers to the process of generating electricity or heat by treating waste materials. These
                  processes aim to divert waste from landfills while creating a sustainable energy source.`),Y=o(),R=s("div"),U=f("3. Why should I consider power-from-waste solutions?"),ge=o(),ue=s("div"),K=f(`Power-from-waste solutions offer a sustainable way to manage waste and generate green power, reducing both
                  your carbon footprint and your operational costs.`),H=o(),re=s("div"),Fe=f("4. What types of waste can be used?"),he=o(),ze=s("div"),we=f(`We can facilitate solutions for a broad spectrum of non-recyclable waste materials including industrial waste,
                  organic waste, and much more. However, it's worth noting that we are unable to work with e-waste, sand, glass,
                  or ceramics.`),ae=o(),fe=s("div"),qe=f("5. How do I know which technology is best for me?"),Ee=o(),de=s("div"),Ue=f(`We have in-house expertise with a deep understanding of a variety of technologies and an extensive network of
                  150+ technology providers. When you provide us with your project parameters, our team will assess your unique
                  requirements. Leveraging our technology-agnostic approach, we will match you with the most appropriate
                  technology and provider for your specific needs, ensuring the best fit for your waste management and power
                  generation goals.`),Le=o(),N=s("div"),Q=f("Calculator Tool"),Ie=o(),_e=s("div"),Ce=f("6. How does the calculator tool work?"),me=o(),ie=s("div"),Z=f(`Our advanced calculator tool is designed to provide you with a comprehensive understanding of your project's
                  scope. By inputting various parameters such as the type and volume of waste, and your energy needs, the tool
                  estimates crucial variables. These include the scale of the project, potential savings, and expected returns
                  on investment (ROI). This helps you to quickly gauge the feasibility and profitability of a power-from-waste
                  solution.`),et=o(),De=s("div"),Se=f("7. What parameters do I need to input into the calculator?"),ne=o(),Re=s("div"),Te=f("Typically, you'll need to input details like the type and amount of waste generated and your energy needs."),ee=o(),Ne=s("div"),Pe=f("8. Is the calculator free to use?"),$e=o(),Be=s("div"),Ge=f(`Yes, the calculator is free and open for anyone to use. We understand that obtaining such estimates from
                  technology providers can be a lengthy and cumbersome process. Our tool aims to simplify this, giving you fast,
                  reliable figures to aid in your decision-making.`),xe=o(),Ze=s("div"),Qe=f("Technology Providers"),it=o(),P=s("div"),B=f("9. How do you select technology providers?"),$=o(),z=s("div"),X=f(`We have a rigorous selection process that involves comprehensive due diligence, site visits, and performance
                  evaluations. Our team assesses each provider's track record, technology reliability, customer satisfaction,
                  and compliance with environmental regulations. This exhaustive vetting process ensures that we only recommend
                  technology providers who meet our stringent criteria for quality and reliability.`),oe=o(),J=s("div"),Ve=f("10. Can I choose my own technology provider?"),ke=o(),le=s("div"),be=f(`Absolutely. While our platform is optimised to find the best match for your specific needs, we present you
                  with multiple options. This enables you to be a significant part of the decision-making process. If you prefer
                  a particular technology provider, we can certainly incorporate that into the project planning.`),It=o(),pe=s("div"),te=f("Costs and Financing"),Ke=o(),Me=s("div"),He=f("13. What are the costs involved?"),ye=o(),Ye=s("div"),ft=f(`Costs can vary widely depending on factors such as the technology used and the scale of the project.
                  Typically, there's an initial cost for a feasibility study, which includes lab analysis of the waste material
                  to determine its suitability for power generation. Other costs include planning & permissions, equipment,
                  installation, and operational expenses.`),Ae=o(),je=s("div"),qt=f("14. Do you offer financing options?"),Lt=o(),Oe=s("div"),yt=f(`We work with financial partners to provide various financing options that can be customised to meet your
                  needs. Please get in contact with us to discuss further.`),Vt=o(),ce=s("div"),ct=f("Project Implementation"),tt=o(),pt=s("div"),gt=f("15. How long does it take to implement a project?"),Ct=o(),dt=s("div"),Rt=f(`The timeline for project implementation can vary based on its complexity and scale. Smaller projects, such as
                  AD slurry covers and anaerobic digestion units, might take as few as 3-6 months to complete. For larger, more
                  complex installations like pyrolysis or gasification plants, the timeline may extend to 12-24 months. This
                  includes the time needed for feasibility studies, procurement, construction, and commissioning of the
                  facility.`),Dt=o(),se=s("div"),vt=f("16. What is the process after we decide to proceed?"),kt=o(),Gt=s("div"),ut=f(`After you decide to proceed, we will facilitate the contract, oversee the implementation, and provide ongoing
                  support to ensure the project's success.`),ht=o(),Mt=s("div"),St=f("If you have any more questions, feel free to "),Je=s("a"),Tt=f("reach out to us"),Xe=f(`
                  . We're here to assist you!`),wt=o(),st=s("div"),jt=s("div"),Qt=f("Copyright © 2023 Power for Planet"),mt=o(),ve=s("div"),rt=s("div"),Nt=f("Privacy Policy"),_t=o(),at=s("div"),ot=s("img"),xt=o(),Et=s("img"),Ut=o(),At=s("img"),this.h()},l(Ot){l=r(Ot,"DIV",{class:!0});var Bt=n(l);i=r(Bt,"DIV",{class:!0});var bt=n(i);u=r(bt,"DIV",{class:!0});var Ms=n(u);v=r(Ms,"DIV",{});var as=n(v);g=p(as,"Frequently Asked Questions"),as.forEach(a),Ms.forEach(a),x=c(bt),m=r(bt,"DIV",{class:!0});var Yt=n(m);h=r(Yt,"DIV",{class:!0});var lt=n(h);I=r(lt,"DIV",{class:!0});var Xt=n(I);w=r(Xt,"DIV",{class:!0});var ns=n(w);V=r(ns,"DIV",{class:!0});var vs=n(V);y=r(vs,"DIV",{class:!0});var W=n(y);D=r(W,"DIV",{class:!0});var gs=n(D);E=p(gs,"General Questions"),gs.forEach(a),F=c(W),k=r(W,"DIV",{class:!0});var Pt=n(k);A=p(Pt,"1. What does your company do?"),Pt.forEach(a),G=c(W),M=r(W,"DIV",{class:!0});var os=n(M);b=p(os,`We facilitate power-from-waste projects by matching businesses with the right technology providers. Our goal
                  is to turn non-recyclable waste into low-cost, green power, and we offer a range of technologies such as
                  anaerobic digestion units, pyrolysis, gasification and AD slurry covers.`),os.forEach(a),C=c(W),_=r(W,"DIV",{class:!0});var es=n(_);q=p(es,"2. What is power-from-waste?"),es.forEach(a),O=c(W),L=r(W,"DIV",{class:!0});var ls=n(L);j=p(ls,`Power-from-waste refers to the process of generating electricity or heat by treating waste materials. These
                  processes aim to divert waste from landfills while creating a sustainable energy source.`),ls.forEach(a),Y=c(W),R=r(W,"DIV",{class:!0});var Zs=n(R);U=p(Zs,"3. Why should I consider power-from-waste solutions?"),Zs.forEach(a),ge=c(W),ue=r(W,"DIV",{class:!0});var Fr=n(ue);K=p(Fr,`Power-from-waste solutions offer a sustainable way to manage waste and generate green power, reducing both
                  your carbon footprint and your operational costs.`),Fr.forEach(a),H=c(W),re=r(W,"DIV",{class:!0});var ts=n(re);Fe=p(ts,"4. What types of waste can be used?"),ts.forEach(a),he=c(W),ze=r(W,"DIV",{class:!0});var cs=n(ze);we=p(cs,`We can facilitate solutions for a broad spectrum of non-recyclable waste materials including industrial waste,
                  organic waste, and much more. However, it's worth noting that we are unable to work with e-waste, sand, glass,
                  or ceramics.`),cs.forEach(a),ae=c(W),fe=r(W,"DIV",{class:!0});var ir=n(fe);qe=p(ir,"5. How do I know which technology is best for me?"),ir.forEach(a),Ee=c(W),de=r(W,"DIV",{class:!0});var Vs=n(de);Ue=p(Vs,`We have in-house expertise with a deep understanding of a variety of technologies and an extensive network of
                  150+ technology providers. When you provide us with your project parameters, our team will assess your unique
                  requirements. Leveraging our technology-agnostic approach, we will match you with the most appropriate
                  technology and provider for your specific needs, ensuring the best fit for your waste management and power
                  generation goals.`),Vs.forEach(a),Le=c(W),N=r(W,"DIV",{class:!0});var $s=n(N);Q=p($s,"Calculator Tool"),$s.forEach(a),Ie=c(W),_e=r(W,"DIV",{class:!0});var Kt=n(_e);Ce=p(Kt,"6. How does the calculator tool work?"),Kt.forEach(a),me=c(W),ie=r(W,"DIV",{class:!0});var hs=n(ie);Z=p(hs,`Our advanced calculator tool is designed to provide you with a comprehensive understanding of your project's
                  scope. By inputting various parameters such as the type and volume of waste, and your energy needs, the tool
                  estimates crucial variables. These include the scale of the project, potential savings, and expected returns
                  on investment (ROI). This helps you to quickly gauge the feasibility and profitability of a power-from-waste
                  solution.`),hs.forEach(a),et=c(W),De=r(W,"DIV",{class:!0});var ks=n(De);Se=p(ks,"7. What parameters do I need to input into the calculator?"),ks.forEach(a),ne=c(W),Re=r(W,"DIV",{class:!0});var Lr=n(Re);Te=p(Lr,"Typically, you'll need to input details like the type and amount of waste generated and your energy needs."),Lr.forEach(a),ee=c(W),Ne=r(W,"DIV",{class:!0});var Er=n(Ne);Pe=p(Er,"8. Is the calculator free to use?"),Er.forEach(a),$e=c(W),Be=r(W,"DIV",{class:!0});var Ir=n(Be);Ge=p(Ir,`Yes, the calculator is free and open for anyone to use. We understand that obtaining such estimates from
                  technology providers can be a lengthy and cumbersome process. Our tool aims to simplify this, giving you fast,
                  reliable figures to aid in your decision-making.`),Ir.forEach(a),xe=c(W),Ze=r(W,"DIV",{class:!0});var er=n(Ze);Qe=p(er,"Technology Providers"),er.forEach(a),it=c(W),P=r(W,"DIV",{class:!0});var ws=n(P);B=p(ws,"9. How do you select technology providers?"),ws.forEach(a),$=c(W),z=r(W,"DIV",{class:!0});var or=n(z);X=p(or,`We have a rigorous selection process that involves comprehensive due diligence, site visits, and performance
                  evaluations. Our team assesses each provider's track record, technology reliability, customer satisfaction,
                  and compliance with environmental regulations. This exhaustive vetting process ensures that we only recommend
                  technology providers who meet our stringent criteria for quality and reliability.`),or.forEach(a),oe=c(W),J=r(W,"DIV",{class:!0});var ds=n(J);Ve=p(ds,"10. Can I choose my own technology provider?"),ds.forEach(a),ke=c(W),le=r(W,"DIV",{class:!0});var us=n(le);be=p(us,`Absolutely. While our platform is optimised to find the best match for your specific needs, we present you
                  with multiple options. This enables you to be a significant part of the decision-making process. If you prefer
                  a particular technology provider, we can certainly incorporate that into the project planning.`),us.forEach(a),It=c(W),pe=r(W,"DIV",{class:!0});var Zr=n(pe);te=p(Zr,"Costs and Financing"),Zr.forEach(a),Ke=c(W),Me=r(W,"DIV",{class:!0});var Cr=n(Me);He=p(Cr,"13. What are the costs involved?"),Cr.forEach(a),ye=c(W),Ye=r(W,"DIV",{class:!0});var ss=n(Ye);ft=p(ss,`Costs can vary widely depending on factors such as the technology used and the scale of the project.
                  Typically, there's an initial cost for a feasibility study, which includes lab analysis of the waste material
                  to determine its suitability for power generation. Other costs include planning & permissions, equipment,
                  installation, and operational expenses.`),ss.forEach(a),Ae=c(W),je=r(W,"DIV",{class:!0});var Ss=n(je);qt=p(Ss,"14. Do you offer financing options?"),Ss.forEach(a),Lt=c(W),Oe=r(W,"DIV",{class:!0});var kn=n(Oe);yt=p(kn,`We work with financial partners to provide various financing options that can be customised to meet your
                  needs. Please get in contact with us to discuss further.`),kn.forEach(a),Vt=c(W),ce=r(W,"DIV",{class:!0});var Gr=n(ce);ct=p(Gr,"Project Implementation"),Gr.forEach(a),tt=c(W),pt=r(W,"DIV",{class:!0});var Ts=n(pt);gt=p(Ts,"15. How long does it take to implement a project?"),Ts.forEach(a),Ct=c(W),dt=r(W,"DIV",{class:!0});var Sn=n(dt);Rt=p(Sn,`The timeline for project implementation can vary based on its complexity and scale. Smaller projects, such as
                  AD slurry covers and anaerobic digestion units, might take as few as 3-6 months to complete. For larger, more
                  complex installations like pyrolysis or gasification plants, the timeline may extend to 12-24 months. This
                  includes the time needed for feasibility studies, procurement, construction, and commissioning of the
                  facility.`),Sn.forEach(a),Dt=c(W),se=r(W,"DIV",{class:!0});var Mr=n(se);vt=p(Mr,"16. What is the process after we decide to proceed?"),Mr.forEach(a),kt=c(W),Gt=r(W,"DIV",{class:!0});var rs=n(Gt);ut=p(rs,`After you decide to proceed, we will facilitate the contract, oversee the implementation, and provide ongoing
                  support to ensure the project's success.`),rs.forEach(a),ht=c(W),Mt=r(W,"DIV",{class:!0});var Dr=n(Mt);St=p(Dr,"If you have any more questions, feel free to "),Je=r(Dr,"A",{class:!0,href:!0});var Hs=n(Je);Tt=p(Hs,"reach out to us"),Hs.forEach(a),Xe=p(Dr,`
                  . We're here to assist you!`),Dr.forEach(a),W.forEach(a),vs.forEach(a),ns.forEach(a),Xt.forEach(a),lt.forEach(a),Yt.forEach(a),wt=c(bt),st=r(bt,"DIV",{class:!0});var ms=n(st);jt=r(ms,"DIV",{class:!0});var js=n(jt);Qt=p(js,"Copyright © 2023 Power for Planet"),js.forEach(a),mt=c(ms),ve=r(ms,"DIV",{class:!0});var ba=n(ve);rt=r(ba,"DIV",{class:!0});var Pr=n(rt);Nt=p(Pr,"Privacy Policy"),Pr.forEach(a),_t=c(ba),at=r(ba,"DIV",{class:!0});var $t=n(at);ot=r($t,"IMG",{src:!0,alt:!0,class:!0}),xt=c($t),Et=r($t,"IMG",{src:!0,alt:!0,class:!0}),Ut=c($t),At=r($t,"IMG",{src:!0,alt:!0,class:!0}),$t.forEach(a),ba.forEach(a),ms.forEach(a),bt.forEach(a),Bt.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),t(D,"class","text-3xl leading-[33px] font-bold font-Poppins w-[650px]"),t(k,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(M,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(_,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(L,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(R,"class","text-2xl leading-[33px] font-bold font-Poppins"),t(ue,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(re,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(ze,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(fe,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(de,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(N,"class","text-3xl pt-10 leading-[33px] font-bold font-Poppins w-[650px]"),t(_e,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(ie,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(De,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(Re,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(Ne,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(Be,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(Ze,"class","text-3xl pt-10 leading-[33px] font-bold font-Poppins w-[650px]"),t(P,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(z,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(J,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(le,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(pe,"class","text-3xl pt-10 leading-[33px] font-bold font-Poppins w-[650px]"),t(Me,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(Ye,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(je,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(Oe,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(ce,"class","text-3xl pt-10 leading-[33px] font-bold font-Poppins w-[650px]"),t(pt,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(dt,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(se,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(Gt,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(Je,"class","underline text-pfp-green"),t(Je,"href","/contact"),t(Mt,"class","pt-10 text-md leading-[26px] font-light font-PublicSans w-full"),t(y,"class","h-full flex-1 flex-col flex items-start gap-[18px]"),t(V,"class","w-full flex justify-end items-start gap-[18px]"),t(w,"class","w-full flex-col flex items-start gap-[18px]"),t(I,"class","flex-1 flex-col flex items-start gap-6 text-[#2e3855]"),t(h,"class","bg-white w-full flex items-start gap-[60px] p-10 rounded-[20px]"),t(m,"class","w-full flex-col flex items-start gap-5"),t(jt,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(rt,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(ot.src,Ht="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ot,"src",Ht),t(ot,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(ot,"class","h-6 w-6"),S(Et.src,Jt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Et,"src",Jt),t(Et,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Et,"class","h-6 w-6"),S(At.src,zt="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(At,"src",zt),t(At,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(At,"class","h-6 w-6"),t(at,"class","flex items-center gap-5"),t(ve,"class","flex-1 flex justify-end items-center gap-10"),t(st,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col w-full flex items-start gap-[60px] rounded-[20px] max-w-[1060px]"),t(l,"class","flex-col flex items-center gap-[50px] h-fit mt-20")},m(Ot,Bt){nt(Ot,l,Bt),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,I),e(I,w),e(w,V),e(V,y),e(y,D),e(D,E),e(y,F),e(y,k),e(k,A),e(y,G),e(y,M),e(M,b),e(y,C),e(y,_),e(_,q),e(y,O),e(y,L),e(L,j),e(y,Y),e(y,R),e(R,U),e(y,ge),e(y,ue),e(ue,K),e(y,H),e(y,re),e(re,Fe),e(y,he),e(y,ze),e(ze,we),e(y,ae),e(y,fe),e(fe,qe),e(y,Ee),e(y,de),e(de,Ue),e(y,Le),e(y,N),e(N,Q),e(y,Ie),e(y,_e),e(_e,Ce),e(y,me),e(y,ie),e(ie,Z),e(y,et),e(y,De),e(De,Se),e(y,ne),e(y,Re),e(Re,Te),e(y,ee),e(y,Ne),e(Ne,Pe),e(y,$e),e(y,Be),e(Be,Ge),e(y,xe),e(y,Ze),e(Ze,Qe),e(y,it),e(y,P),e(P,B),e(y,$),e(y,z),e(z,X),e(y,oe),e(y,J),e(J,Ve),e(y,ke),e(y,le),e(le,be),e(y,It),e(y,pe),e(pe,te),e(y,Ke),e(y,Me),e(Me,He),e(y,ye),e(y,Ye),e(Ye,ft),e(y,Ae),e(y,je),e(je,qt),e(y,Lt),e(y,Oe),e(Oe,yt),e(y,Vt),e(y,ce),e(ce,ct),e(y,tt),e(y,pt),e(pt,gt),e(y,Ct),e(y,dt),e(dt,Rt),e(y,Dt),e(y,se),e(se,vt),e(y,kt),e(y,Gt),e(Gt,ut),e(y,ht),e(y,Mt),e(Mt,St),e(Mt,Je),e(Je,Tt),e(Mt,Xe),e(i,wt),e(i,st),e(st,jt),e(jt,Qt),e(st,mt),e(st,ve),e(ve,rt),e(rt,Nt),e(ve,_t),e(ve,at),e(at,ot),e(at,xt),e(at,Et),e(at,Ut),e(at,At)},p:We,i:We,o:We,d(Ot){Ot&&a(l)}}}class vI extends Pn{constructor(l){super(),Vn(this,l,null,pI,Ha,{})}}function gI(d){let l;const i=d[2].default,u=sE(i,d,d[3],null);return{c(){u&&u.c()},l(v){u&&u.l(v)},m(v,g){u&&u.m(v,g),l=!0},p(v,g){u&&u.p&&(!l||g&8)&&rE(u,i,v,v[3],l?nE(i,v[3],g,null):aE(v[3]),null)},i(v){l||(Rs(u,v),l=!0)},o(v){Us(u,v),l=!1},d(v){u&&u.d(v)}}}function hI(d){let l,i;return l=new vI({}),{c(){al(l.$$.fragment)},l(u){nl(l.$$.fragment,u)},m(u,v){ll(l,u,v),i=!0},p:We,i(u){i||(Rs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){il(l,u)}}}function mI(d){let l,i;return l=new fI({}),{c(){al(l.$$.fragment)},l(u){nl(l.$$.fragment,u)},m(u,v){ll(l,u,v),i=!0},p:We,i(u){i||(Rs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){il(l,u)}}}function xI(d){let l,i;return l=new dI({}),{c(){al(l.$$.fragment)},l(u){nl(l.$$.fragment,u)},m(u,v){ll(l,u,v),i=!0},p:We,i(u){i||(Rs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){il(l,u)}}}function bI(d){let l,i;return l=new y6({}),{c(){al(l.$$.fragment)},l(u){nl(l.$$.fragment,u)},m(u,v){ll(l,u,v),i=!0},p:We,i(u){i||(Rs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){il(l,u)}}}function yI(d){let l,i;return l=new x6({}),{c(){al(l.$$.fragment)},l(u){nl(l.$$.fragment,u)},m(u,v){ll(l,u,v),i=!0},p:We,i(u){i||(Rs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){il(l,u)}}}function wI(d){let l,i;return l=new Q4({}),{c(){al(l.$$.fragment)},l(u){nl(l.$$.fragment,u)},m(u,v){ll(l,u,v),i=!0},p:We,i(u){i||(Rs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){il(l,u)}}}function _I(d){let l,i;return l=new oI({}),{c(){al(l.$$.fragment)},l(u){nl(l.$$.fragment,u)},m(u,v){ll(l,u,v),i=!0},p:We,i(u){i||(Rs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){il(l,u)}}}function EI(d){let l,i;return l=new lI({}),{c(){al(l.$$.fragment)},l(u){nl(l.$$.fragment,u)},m(u,v){ll(l,u,v),i=!0},p:We,i(u){i||(Rs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){il(l,u)}}}function II(d){let l,i;return l=new aI({}),{c(){al(l.$$.fragment)},l(u){nl(l.$$.fragment,u)},m(u,v){ll(l,u,v),i=!0},p:We,i(u){i||(Rs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){il(l,u)}}}function DI(d){let l,i;return l=new sI({}),{c(){al(l.$$.fragment)},l(u){nl(l.$$.fragment,u)},m(u,v){ll(l,u,v),i=!0},p:We,i(u){i||(Rs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){il(l,u)}}}function PI(d){let l,i;return l=new eI({}),{c(){al(l.$$.fragment)},l(u){nl(l.$$.fragment,u)},m(u,v){ll(l,u,v),i=!0},p:We,i(u){i||(Rs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){il(l,u)}}}function VI(d){let l,i,u,v;const g=[PI,DI,II,EI,_I,wI,yI,bI,xI,mI,hI,gI],x=[];function m(h,I){return h[0]=="/news"||h[0]=="/news/"?0:h[0]=="/news-item"||h[0]=="/news-item/"?1:h[0]=="/news-item2"||h[0]=="/news-item2/"?2:h[0]=="/news-item3"||h[0]=="/news-item3/"?3:h[0]=="/news-item4"||h[0]=="/news-item4/"?4:h[0]=="/explore"||h[0]=="/explore/"?5:h[0]=="/about"||h[0]=="/about/"?6:h[0]=="/green-energy"||h[0]=="/green-energy/"?7:h[0]=="/contact"||h[0]=="/contact/"?8:h[0]=="/resources/financial-options"||h[0]=="/resources/financial-options/"?9:h[0]=="/resources/articles"||h[0]=="/resources/articles/"?10:11}return l=m(d),i=x[l]=g[l](d),{c(){i.c(),u=xa()},l(h){i.l(h),u=xa()},m(h,I){x[l].m(h,I),nt(h,u,I),v=!0},p(h,I){let w=l;l=m(h),l===w?x[l].p(h,I):(R2(),Us(x[w],1,1,()=>{x[w]=null}),U2(),i=x[l],i?i.p(h,I):(i=x[l]=g[l](h),i.c()),Rs(i,1),i.m(u.parentNode,u))},i(h){v||(Rs(i),v=!0)},o(h){Us(i),v=!1},d(h){x[l].d(h),h&&a(u)}}}function kI(d){let l,i,u,v,g,x;return l=new YE({}),u=new p6({props:{path:d[0]}}),g=new h6({props:{path:d[0],$$slots:{default:[VI]},$$scope:{ctx:d}}}),{c(){al(l.$$.fragment),i=o(),al(u.$$.fragment),v=o(),al(g.$$.fragment)},l(m){nl(l.$$.fragment,m),i=c(m),nl(u.$$.fragment,m),v=c(m),nl(g.$$.fragment,m)},m(m,h){ll(l,m,h),nt(m,i,h),ll(u,m,h),nt(m,v,h),ll(g,m,h),x=!0},p(m,[h]){const I={};h&1&&(I.path=m[0]),u.$set(I);const w={};h&1&&(w.path=m[0]),h&9&&(w.$$scope={dirty:h,ctx:m}),g.$set(w)},i(m){x||(Rs(l.$$.fragment,m),Rs(u.$$.fragment,m),Rs(g.$$.fragment,m),x=!0)},o(m){Us(l.$$.fragment,m),Us(u.$$.fragment,m),Us(g.$$.fragment,m),x=!1},d(m){il(l,m),m&&a(i),il(u,m),m&&a(v),il(g,m)}}}function SI(d,l,i){let{$$slots:u={},$$scope:v}=l,{data:g}=l,{res:x,path:m}=g;return AE.set(x),OE.set(SE(x)),lE(()=>jE({immediate:!0,onRegistered:h=>h&&setInterval(async()=>await h.update(),198964),onRegisterError:h=>console.error(h)})),m[m.length-1]=="/"&&(m=m.slice(0,-1)),d.$$set=h=>{"data"in h&&i(1,g=h.data),"$$scope"in h&&i(3,v=h.$$scope)},d.$$.update=()=>{d.$$.dirty&2&&g&&i(0,m=g.path)},[m,g,u,v]}class GI extends Pn{constructor(l){super(),Vn(this,l,SI,kI,Ha,{data:1})}}export{GI as component,CI as universal};
