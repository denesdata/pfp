import{S as Vn,i as kn,s as Wa,e as ya,C as w2,h as a,D as e,E as We,k as s,l as r,n as t,b as lt,a as o,y as nl,c,z as ll,A as il,g as Hs,d as Us,B as ol,F as vg,q as f,m as n,r as p,G as zt,H as tm,u as hg,I as tE,J as $c,v as _2,f as E2,K as sE,L as rE,M as Hd,N as Ud,O as S,P as A_,Q as F_,R as O_,T as L_,p as T,o as C_}from"../chunks/index.6a262c57.js";import{g as aE}from"../chunks/posts.b42a2119.js";import{f as Im,a as Ju,h as p0,p as v0,b as fg,s as Xw,t as nE,c as Lr,d as Qw,e as lE,g as iE}from"../chunks/icon.2a308809.js";import{_ as oE}from"../chunks/preload-helper.a4192956.js";import{p as cE}from"../chunks/stores.0c20e247.js";const dE=!0,uE="always",fE=async({url:d,fetch:l})=>({path:d.pathname,res:await l("/posts.json").then(i=>i.json())}),d8=Object.freeze(Object.defineProperty({__proto__:null,load:fE,prerender:dE,trailingSlash:uE},Symbol.toStringTag,{value:"Module"}));function pE(d={}){const{immediate:l=!1,onNeedRefresh:i,onOfflineReady:u,onRegistered:v,onRegisteredSW:g,onRegisterError:x}=d;let m,h;const I=async(V=!0)=>{await h};async function w(){if("serviceWorker"in navigator){const{Workbox:V}=await oE(()=>import("../chunks/workbox-window.prod.es5.08b2315b.js"),[],import.meta.url);m=new V("./sw.js",{scope:"/",type:"classic"}),m.addEventListener("activated",y=>{(y.isUpdate||y.isExternal)&&window.location.reload()}),m.addEventListener("installed",y=>{y.isUpdate||u==null||u()}),m.register({immediate:l}).then(y=>{g?g("./sw.js",y):v==null||v(y)}).catch(y=>{x==null||x(y)})}}return h=w(),I}function vE(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(l,"rel","shortcut icon"),t(l,"href",Im.src),t(l,"sizes",Im.sizes),t(l,"type",Im.type)},m(i,u){lt(i,l,u)},p:We,d(i){i&&a(l)}}}function gE(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(l,"rel","apple-touch-icon"),t(l,"href",Ju[180].src),t(l,"sizes",Ju[180].sizes),t(l,"type",Ju[180].type)},m(i,u){lt(i,l,u)},p:We,d(i){i&&a(l)}}}function hE(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(l,"rel","icon"),t(l,"href",Ju[192].src),t(l,"sizes",Ju[192].sizes),t(l,"type",Ju[192].type)},m(i,u){lt(i,l,u)},p:We,d(i){i&&a(l)}}}function mE(d){let l,i,u,v=Im&&vE(),g=Ju[180]&&gE(),x=Ju[192]&&hE();return{c(){v&&v.c(),l=ya(),g&&g.c(),i=ya(),x&&x.c(),u=ya()},l(m){const h=w2("svelte-1kxdj3d",document.head);v&&v.l(h),l=ya(),g&&g.l(h),i=ya(),x&&x.l(h),u=ya(),h.forEach(a)},m(m,h){v&&v.m(document.head,null),e(document.head,l),g&&g.m(document.head,null),e(document.head,i),x&&x.m(document.head,null),e(document.head,u)},p(m,[h]){Im&&v.p(m,h),Ju[180]&&g.p(m,h),Ju[192]&&x.p(m,h)},i:We,o:We,d(m){v&&v.d(m),a(l),g&&g.d(m),a(i),x&&x.d(m),a(u)}}}class xE extends Vn{constructor(l){super(),kn(this,l,null,mE,Wa,{})}}function Zw(d,l,i){const u=d.slice();return u[0]=l[i],u}function bE(d){let l,i=p0.me,u=[];for(let v=0;v<i.length;v+=1)u[v]=e_(Zw(d,i,v));return{c(){for(let v=0;v<u.length;v+=1)u[v].c();l=ya()},l(v){for(let g=0;g<u.length;g+=1)u[g].l(v);l=ya()},m(v,g){for(let x=0;x<u.length;x+=1)u[x]&&u[x].m(v,g);lt(v,l,g)},p(v,g){if(g&0){i=p0.me;let x;for(x=0;x<i.length;x+=1){const m=Zw(v,i,x);u[x]?u[x].p(m,g):(u[x]=e_(m),u[x].c(),u[x].m(l.parentNode,l))}for(;x<u.length;x+=1)u[x].d(1);u.length=i.length}},d(v){vg(u,v),v&&a(l)}}}function e_(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0}),this.h()},h(){t(l,"rel","me"),t(l,"href",d[0])},m(i,u){lt(i,l,u)},p:We,d(i){i&&a(l)}}}function yE(d){let l,i,u;return{c(){l=s("link"),i=o(),u=s("link"),this.h()},l(v){l=r(v,"LINK",{rel:!0,href:!0}),i=c(v),u=r(v,"LINK",{rel:!0,href:!0}),this.h()},h(){t(l,"rel","webmention"),t(l,"href","https://webmention.io/"+v0.comment.webmention.username+"/webmention"),t(u,"rel","pingback"),t(u,"href","https://webmention.io/"+v0.comment.webmention.username+"/xmlrpc")},m(v,g){lt(v,l,g),lt(v,i,g),lt(v,u,g)},p:We,d(v){v&&a(l),v&&a(i),v&&a(u)}}}function wE(d){var h,I;let l,i,u,v,g,x=p0.me&&bE(d),m=((I=(h=v0.comment)==null?void 0:h.webmention)==null?void 0:I.username)&&yE();return v=new xE({}),{c(){x&&x.c(),l=ya(),m&&m.c(),i=ya(),u=o(),nl(v.$$.fragment)},l(w){const V=w2("svelte-1592q3p",document.head);x&&x.l(V),l=ya(),m&&m.l(V),i=ya(),V.forEach(a),u=c(w),ll(v.$$.fragment,w)},m(w,V){x&&x.m(document.head,null),e(document.head,l),m&&m.m(document.head,null),e(document.head,i),lt(w,u,V),il(v,w,V),g=!0},p(w,[V]){var y,D;p0.me&&x.p(w,V),(D=(y=v0.comment)==null?void 0:y.webmention)!=null&&D.username&&m.p(w,V)},i(w){g||(Hs(v.$$.fragment,w),g=!0)},o(w){Us(v.$$.fragment,w),g=!1},d(w){x&&x.d(w),a(l),m&&m.d(w),a(i),w&&a(u),ol(v,w)}}}class _E extends Vn{constructor(l){super(),kn(this,l,null,wE,Wa,{})}}const EE=(d,l,i,u=i/=100,v=l*Math.min(u,1-u)/100,g=(x,m=(x+d/30)%12)=>Math.round(255*(u-v*Math.max(Math.min(m-3,9-m,1),-1))).toString(16).padStart(2,"0"))=>`#${g(0)}${g(8)}${g(4)}`;function t_(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u[13]=l[i].children,u}function s_(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u}function r_(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u[13]=l[i].children,u}function a_(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u}function IE(d){let l,i,u=d[11]+"",v,g,x,m,h,I,w=d[13],V=[];for(let y=0;y<w.length;y+=1)V[y]=n_(a_(d,w,y));return{c(){l=s("li"),i=s("span"),v=f(u),g=o(),x=s("span"),m=o(),h=s("ul");for(let y=0;y<V.length;y+=1)V[y].c();I=o(),this.h()},l(y){l=r(y,"LI",{tabindex:!0});var D=n(l);i=r(D,"SPAN",{class:!0});var E=n(i);v=p(E,u),g=c(E),x=r(E,"SPAN",{class:!0}),n(x).forEach(a),E.forEach(a),m=c(D),h=r(D,"UL",{class:!0});var O=n(h);for(let k=0;k<V.length;k+=1)V[k].l(O);O.forEach(a),I=c(D),D.forEach(a),this.h()},h(){t(x,"class","i-heroicons-solid-chevron-right mr-2"),t(i,"class","justify-between gap-1 max-w-[13rem]"),zt(i,"font-bold",d[13].some(d[6])),t(h,"class","bg-base-100 text-base-content shadow-lg p-2"),t(l,"tabindex","0")},m(y,D){lt(y,l,D),e(l,i),e(i,v),e(i,g),e(i,x),e(l,m),e(l,h);for(let E=0;E<V.length;E+=1)V[E]&&V[E].m(h,null);e(l,I)},p(y,D){if(D&1&&u!==(u=y[11]+"")&&hg(v,u),D&3&&zt(i,"font-bold",y[13].some(y[6])),D&3){w=y[13];let E;for(E=0;E<w.length;E+=1){const O=a_(y,w,E);V[E]?V[E].p(O,D):(V[E]=n_(O),V[E].c(),V[E].m(h,null))}for(;E<V.length;E+=1)V[E].d(1);V.length=w.length}},d(y){y&&a(l),vg(V,y)}}}function DE(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{href:!0});var I=n(i);v=p(I,u),I.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"href",g=d[12]),zt(i,"font-bold",d[12]===d[1])},m(m,h){lt(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&hg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&zt(i,"font-bold",m[12]===m[1])},d(m){m&&a(l)}}}function n_(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{href:!0});var I=n(i);v=p(I,u),I.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"href",g=d[12]),zt(i,"font-bold",d[12]===d[1])},m(m,h){lt(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&hg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&zt(i,"font-bold",m[12]===m[1])},d(m){m&&a(l)}}}function l_(d){let l;function i(g,x){if(g[12]&&!g[13])return DE;if(g[13])return IE}let u=i(d),v=u&&u(d);return{c(){v&&v.c(),l=ya()},l(g){v&&v.l(g),l=ya()},m(g,x){v&&v.m(g,x),lt(g,l,x)},p(g,x){u===(u=i(g))&&v?v.p(g,x):(v&&v.d(1),v=u&&u(g),v&&(v.c(),v.m(l.parentNode,l)))},d(g){v&&v.d(g),g&&a(l)}}}function PE(d){return{c:We,l:We,m:We,d:We}}function VE(d){let l,i,u=d[11]+"",v,g,x,m,h,I,w=d[13],V=[];for(let y=0;y<w.length;y+=1)V[y]=i_(s_(d,w,y));return{c(){l=s("li"),i=s("span"),v=f(u),g=o(),x=s("span"),m=o(),h=s("ul");for(let y=0;y<V.length;y+=1)V[y].c();I=o(),this.h()},l(y){l=r(y,"LI",{});var D=n(l);i=r(D,"SPAN",{class:!0});var E=n(i);v=p(E,u),g=c(E),x=r(E,"SPAN",{class:!0}),n(x).forEach(a),E.forEach(a),m=c(D),h=r(D,"UL",{tabindex:!0,class:!0});var O=n(h);for(let k=0;k<V.length;k+=1)V[k].l(O);O.forEach(a),I=c(D),D.forEach(a),this.h()},h(){t(x,"class","i-heroicons-solid-chevron-down -mr-1"),t(i,"class","!rounded-btn gap-3"),zt(i,"font-bold",d[13].some(d[8])),zt(i,"text-pfp-green",d[13].some(d[9])),t(h,"tabindex","0"),t(h,"class","menu rounded-box bg-base-100 text-base-content shadow-lg p-2")},m(y,D){lt(y,l,D),e(l,i),e(i,v),e(i,g),e(i,x),e(l,m),e(l,h);for(let E=0;E<V.length;E+=1)V[E]&&V[E].m(h,null);e(l,I)},p(y,D){if(D&1&&u!==(u=y[11]+"")&&hg(v,u),D&3&&zt(i,"font-bold",y[13].some(y[8])),D&3&&zt(i,"text-pfp-green",y[13].some(y[9])),D&3){w=y[13];let E;for(E=0;E<w.length;E+=1){const O=s_(y,w,E);V[E]?V[E].p(O,D):(V[E]=i_(O),V[E].c(),V[E].m(h,null))}for(;E<V.length;E+=1)V[E].d(1);V.length=w.length}},d(y){y&&a(l),vg(V,y)}}}function kE(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{class:!0,href:!0});var I=n(i);v=p(I,u),I.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"class","!rounded-btn"),t(i,"href",g=d[12]),zt(i,"font-bold",d[12]===d[1]),zt(i,"text-pfp-green",d[12]===d[1])},m(m,h){lt(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&hg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&zt(i,"font-bold",m[12]===m[1]),h&3&&zt(i,"text-pfp-green",m[12]===m[1])},d(m){m&&a(l)}}}function i_(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{href:!0});var I=n(i);v=p(I,u),I.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"href",g=d[12]),zt(i,"font-bold",d[12]===d[1]),zt(i,"text-pfp-green",d[12]===d[1])},m(m,h){lt(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&hg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&zt(i,"font-bold",m[12]===m[1]),h&3&&zt(i,"text-pfp-green",m[12]===m[1])},d(m){m&&a(l)}}}function o_(d){let l;function i(g,x){if(g[12]&&!g[13])return kE;if(g[13])return VE}let u=i(d),v=u&&u(d);return{c(){v&&v.c(),l=ya()},l(g){v&&v.l(g),l=ya()},m(g,x){v&&v.m(g,x),lt(g,l,x)},p(g,x){u===(u=i(g))&&v?v.p(g,x):(v&&v.d(1),v=u&&u(g),v&&(v.c(),v.m(l.parentNode,l)))},d(g){v&&v.d(g),g&&a(l)}}}function SE(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,O=d[0],k=[];for(let b=0;b<O.length;b+=1)k[b]=l_(r_(d,O,b));let A=d[5]&&PE(),M=d[0],G=[];for(let b=0;b<M.length;b+=1)G[b]=o_(t_(d,M,b));return{c(){l=s("div"),i=s("label"),u=s("span"),v=o(),g=s("ul");for(let b=0;b<k.length;b+=1)k[b].c();x=o(),m=s("div"),h=s("button"),A&&A.c(),I=o(),w=f(d[2]),V=o(),y=s("ul");for(let b=0;b<G.length;b+=1)G[b].c();this.h()},l(b){l=r(b,"DIV",{class:!0});var C=n(l);i=r(C,"LABEL",{for:!0,tabindex:!0,class:!0});var _=n(i);u=r(_,"SPAN",{class:!0}),n(u).forEach(a),_.forEach(a),v=c(C),g=r(C,"UL",{id:!0,tabindex:!0,class:!0});var q=n(g);for(let Y=0;Y<k.length;Y+=1)k[Y].l(q);q.forEach(a),C.forEach(a),x=c(b),m=r(b,"DIV",{class:!0});var F=n(m);h=r(F,"BUTTON",{class:!0});var L=n(h);A&&A.l(L),I=c(L),w=p(L,d[2]),L.forEach(a),V=c(F),y=r(F,"UL",{class:!0});var j=n(y);for(let Y=0;Y<G.length;Y+=1)G[Y].l(j);j.forEach(a),F.forEach(a),this.h()},h(){t(u,"class","i-heroicons-outline-menu-alt-1"),t(i,"for","navbar-dropdown"),t(i,"tabindex","0"),t(i,"class","btn btn-square btn-ghost"),t(g,"id","navbar-dropdown"),t(g,"tabindex","0"),t(g,"class","menu menu-compact dropdown-content bg-base-100 text-base-content shadow-lg rounded-box min-w-max max-w-52 p-2 "),zt(g,"hidden",!d[4]),t(l,"class","dropdown lg:hidden"),t(h,"class","swap-on btn btn-ghost text-base font-normal normal-case transition-all duration-200"),zt(h,"hidden",d[3]<32||!d[2]),t(y,"class","swap-off menu menu-horizontal p-0"),zt(y,"hidden",d[3]>64&&d[2]),t(m,"class","pl-16 swap order-last hidden lg:inline-grid"),zt(m,"swap-active",d[3]>32&&d[2])},m(b,C){lt(b,l,C),e(l,i),e(i,u),e(l,v),e(l,g);for(let _=0;_<k.length;_+=1)k[_]&&k[_].m(g,null);lt(b,x,C),lt(b,m,C),e(m,h),A&&A.m(h,null),e(h,I),e(h,w),e(m,V),e(m,y);for(let _=0;_<G.length;_+=1)G[_]&&G[_].m(y,null);D||(E=tm(h,"click",d[7]),D=!0)},p(b,[C]){if(C&3){O=b[0];let _;for(_=0;_<O.length;_+=1){const q=r_(b,O,_);k[_]?k[_].p(q,C):(k[_]=l_(q),k[_].c(),k[_].m(g,null))}for(;_<k.length;_+=1)k[_].d(1);k.length=O.length}if(C&16&&zt(g,"hidden",!b[4]),C&4&&hg(w,b[2]),C&12&&zt(h,"hidden",b[3]<32||!b[2]),C&3){M=b[0];let _;for(_=0;_<M.length;_+=1){const q=t_(b,M,_);G[_]?G[_].p(q,C):(G[_]=o_(q),G[_].c(),G[_].m(y,null))}for(;_<G.length;_+=1)G[_].d(1);G.length=M.length}C&12&&zt(y,"hidden",b[3]>64&&b[2]),C&12&&zt(m,"swap-active",b[3]>32&&b[2])},i:We,o:We,d(b){b&&a(l),vg(k,b),b&&a(x),b&&a(m),A&&A.d(),vg(G,b),D=!1,E()}}}function TE(d,l,i){let u;tE(d,cE,E=>i(10,u=E));let{nav:v}=l,{path:g}=l,{title:x}=l,{scrollY:m}=l,{pin:h}=l,I=u.url.toString().split("/")[3];const w=({link:E})=>E===g,V=()=>window.scrollTo(0,0),y=({link:E})=>E===g,D=({link:E})=>E===g;return d.$$set=E=>{"nav"in E&&i(0,v=E.nav),"path"in E&&i(1,g=E.path),"title"in E&&i(2,x=E.title),"scrollY"in E&&i(3,m=E.scrollY),"pin"in E&&i(4,h=E.pin)},[v,g,x,m,h,I,w,V,y,D]}class AE extends Vn{constructor(l){super(),kn(this,l,TE,SE,Wa,{nav:0,path:1,title:2,scrollY:3,pin:4})}}function FE(d){let l,i,u,v,g,x,m;return{c(){l=s("form"),i=s("input"),u=o(),v=s("input"),g=o(),x=s("button"),m=s("span"),this.h()},l(h){l=r(h,"FORM",{action:!0,method:!0,class:!0});var I=n(l);i=r(I,"INPUT",{type:!0,name:!0,class:!0}),u=c(I),v=r(I,"INPUT",{type:!0,name:!0}),g=c(I),x=r(I,"BUTTON",{type:!0,class:!0});var w=n(x);m=r(w,"SPAN",{class:!0}),n(m).forEach(a),w.forEach(a),I.forEach(a),this.h()},h(){var h,I,w,V;t(i,"type","text"),t(i,"name","q"),t(i,"class","input input-ghost input-bordered xl:bg-base-100 xl:text-base-content transition-all w-full h-12"),t(v,"type","hidden"),t(v,"name",((I=(h=fg)==null?void 0:h.search)==null?void 0:I.provider)==="duckduckgo"?"sites":"sitesearch"),v.value=Xw.protocol+Xw.domain,t(m,"class","i-heroicons-outline-search"),t(x,"type","submit"),t(x,"class","btn btn-square btn-ghost ml-2"),t(l,"action",((V=(w=fg)==null?void 0:w.search)==null?void 0:V.provider)==="duckduckgo"?"//duckduckgo.com/":"//google.com/search"),t(l,"method","get"),t(l,"class","flex-1")},m(h,I){lt(h,l,I),e(l,i),e(l,u),e(l,v),e(l,g),e(l,x),e(x,m)},p:We,i:We,o:We,d(h){h&&a(l)}}}class OE extends Vn{constructor(l){super(),kn(this,l,null,FE,Wa,{})}}const{document:c_,window:h2}=rE;function d_(d,l,i){const u=d.slice();return u[14]=l[i].name,u[15]=l[i].text,u}function LE(d,l,i){const u=d.slice();return u[18]=l[i],u}function CE(d){let l,i,u,v,g,x,m,h,I,w;return i=new OE({}),{c(){l=s("div"),nl(i.$$.fragment),u=o(),v=s("button"),g=s("span"),this.h()},l(V){l=r(V,"DIV",{class:!0});var y=n(l);ll(i.$$.fragment,y),u=c(y),v=r(y,"BUTTON",{tabindex:!0,class:!0});var D=n(v);g=r(D,"SPAN",{class:!0}),n(g).forEach(a),D.forEach(a),y.forEach(a),this.h()},h(){t(g,"class","i-heroicons-outline-x"),t(v,"tabindex","0"),t(v,"class","btn btn-square btn-ghost mr-8"),t(l,"class","navbar")},m(V,y){lt(V,l,y),il(i,l,null),e(l,u),e(l,v),e(v,g),h=!0,I||(w=tm(v,"click",d[12]),I=!0)},p:We,i(V){h||(Hs(i.$$.fragment,V),$c(()=>{h&&(m&&m.end(1),x=Hd(l,Lr,{x:50,duration:300,delay:300}),x.start())}),h=!0)},o(V){Us(i.$$.fragment,V),x&&x.invalidate(),m=Ud(l,Lr,{x:50,duration:300}),h=!1},d(V){V&&a(l),ol(i),V&&m&&m.end(),I=!1,w()}}}function ME(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,O,k,A,M=fg.nav&&GE(d),G=fg.search&&jE(d),b=Qw,C=[];for(let _=0;_<b.length;_+=1)C[_]=u_(d_(d,b,_));return{c(){l=s("div"),i=s("div"),M&&M.c(),u=o(),v=s("a"),g=s("img"),m=o(),h=s("div"),G&&G.c(),I=o(),w=s("div"),V=s("div"),y=s("span"),D=o(),E=s("ul");for(let _=0;_<C.length;_+=1)C[_].c();this.h()},l(_){l=r(_,"DIV",{class:!0});var q=n(l);i=r(q,"DIV",{class:!0});var F=n(i);M&&M.l(F),u=c(F),v=r(F,"A",{href:!0,class:!0});var L=n(v);g=r(L,"IMG",{src:!0,alt:!0,class:!0}),L.forEach(a),F.forEach(a),m=c(q),h=r(q,"DIV",{class:!0});var j=n(h);G&&G.l(j),I=c(j),w=r(j,"DIV",{id:!0,class:!0});var Y=n(w);V=r(Y,"DIV",{tabindex:!0,class:!0});var R=n(V);y=r(R,"SPAN",{class:!0}),n(y).forEach(a),R.forEach(a),D=c(Y),E=r(Y,"UL",{tabindex:!0,class:!0});var $=n(E);for(let ge=0;ge<C.length;ge+=1)C[ge].l($);$.forEach(a),Y.forEach(a),j.forEach(a),q.forEach(a),this.h()},h(){S(g.src,x="/assets/pfp.png")||t(g,"src",x),t(g,"alt","logo"),t(g,"class","u-photo z-14 h-14"),t(v,"href","/"),t(v,"class","btn btn-ghost normal-case text-lg gap-3"),t(i,"class","navbar-start"),t(y,"class","i-heroicons-outline-color-swatch"),t(V,"tabindex","0"),t(V,"class","btn btn-square btn-ghost"),t(E,"tabindex","0"),t(E,"class","flex flex-nowrap shadow-2xl menu dropdown-content bg-base-100 text-base-content rounded-box w-52 p-2 gap-2 overflow-y-auto max-h-[21.5rem]"),zt(E,"hidden",!d[6]),t(w,"id","change-theme"),t(w,"class","dropdown dropdown-end"),t(h,"class","navbar-end mr-8"),t(l,"class","navbar pl-16")},m(_,q){lt(_,l,q),e(l,i),M&&M.m(i,null),e(i,u),e(i,v),e(v,g),e(l,m),e(l,h),G&&G.m(h,null),e(h,I),e(h,w),e(w,V),e(V,y),e(w,D),e(w,E);for(let F=0;F<C.length;F+=1)C[F]&&C[F].m(E,null);A=!0},p(_,q){if(fg.nav&&M.p(_,q),fg.search&&G.p(_,q),q&2){b=Qw;let F;for(F=0;F<b.length;F+=1){const L=d_(_,b,F);C[F]?C[F].p(L,q):(C[F]=u_(L),C[F].c(),C[F].m(E,null))}for(;F<C.length;F+=1)C[F].d(1);C.length=b.length}(!A||q&64)&&zt(E,"hidden",!_[6])},i(_){A||(Hs(M),$c(()=>{A&&(k&&k.end(1),O=Hd(l,Lr,{x:-50,duration:300,delay:300}),O.start())}),A=!0)},o(_){Us(M),O&&O.invalidate(),k=Ud(l,Lr,{x:-50,duration:300}),A=!1},d(_){_&&a(l),M&&M.d(),G&&G.d(),vg(C,_),_&&k&&k.end()}}}function GE(d){let l,i;return l=new AE({props:{path:d[0],title:d[3],pin:d[6],scrollY:d[2],nav:fg.nav}}),{c(){nl(l.$$.fragment)},l(u){ll(l.$$.fragment,u)},m(u,v){il(l,u,v),i=!0},p(u,v){const g={};v&1&&(g.path=u[0]),v&8&&(g.title=u[3]),v&64&&(g.pin=u[6]),v&4&&(g.scrollY=u[2]),l.$set(g)},i(u){i||(Hs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){ol(l,u)}}}function jE(d){let l,i,u,v;return{c(){l=s("button"),i=s("span"),this.h()},l(g){l=r(g,"BUTTON",{"aria-label":!0,tabindex:!0,class:!0});var x=n(l);i=r(x,"SPAN",{class:!0}),n(i).forEach(a),x.forEach(a),this.h()},h(){t(i,"class","i-heroicons-outline-search"),t(l,"aria-label","search"),t(l,"tabindex","0"),t(l,"class","btn btn-square btn-ghost")},m(g,x){lt(g,l,x),e(l,i),u||(v=tm(l,"click",d[10]),u=!0)},p:We,d(g){g&&a(l),u=!1,v()}}}function NE(d){let l;return{c(){l=s("div"),this.h()},l(i){l=r(i,"DIV",{class:!0}),n(l).forEach(a),this.h()},h(){t(l,"class",`${d[18]} w-1 h-4 rounded-btn`)},m(i,u){lt(i,l,u)},p:We,d(i){i&&a(l)}}}function u_(d){let l,i,u=(d[15]??d[14])+"",v,g,x,m,h,I,w=["bg-primary","bg-secondary","bg-accent","bg-neutral"],V=[];for(let D=0;D<4;D+=1)V[D]=NE(LE(d,w,D));function y(){return d[11](d[14])}return{c(){l=s("button"),i=s("p"),v=f(u),g=o(),x=s("div");for(let D=0;D<4;D+=1)V[D].c();m=o(),this.h()},l(D){l=r(D,"BUTTON",{"data-theme":!0,class:!0});var E=n(l);i=r(E,"P",{class:!0});var O=n(i);v=p(O,u),O.forEach(a),g=c(E),x=r(E,"DIV",{class:!0});var k=n(x);for(let A=0;A<4;A+=1)V[A].l(k);k.forEach(a),m=c(E),E.forEach(a),this.h()},h(){t(i,"class","flex-1 text-left text-base-content group-hover:text-primary-content transition-color"),t(x,"class","grid grid-cols-4 gap-0.5 m-auto"),t(l,"data-theme",d[14]),t(l,"class","btn btn-ghost w-full hover:bg-primary group rounded-lg flex bg-base-100 p-2 transition-all"),zt(l,"border-2",d[1]===d[14]),zt(l,"border-primary",d[1]===d[14])},m(D,E){lt(D,l,E),e(l,i),e(i,v),e(l,g),e(l,x);for(let O=0;O<4;O+=1)V[O]&&V[O].m(x,null);e(l,m),h||(I=tm(l,"click",y),h=!0)},p(D,E){d=D,E&2&&zt(l,"border-2",d[1]===d[14]),E&2&&zt(l,"border-primary",d[1]===d[14])},d(D){D&&a(l),vg(V,D),h=!1,I()}}}function BE(d){let l=!1,i=()=>{l=!1},u,v,g,x,m,h,I,w,V,y,D,E,O,k,A,M,G,b;$c(d[9]);const C=[ME,CE],_=[];function q(F,L){return F[5]?1:0}return m=q(d),h=_[m]=C[m](d),{c(){v=s("meta"),g=o(),x=s("header"),h.c(),w=o(),V=s("button"),y=s("div"),E=o(),O=s("div"),k=s("span"),this.h()},l(F){const L=w2("svelte-1g590ms",c_.head);v=r(L,"META",{name:!0,content:!0}),L.forEach(a),g=c(F),x=r(F,"HEADER",{id:!0,class:!0});var j=n(x);h.l(j),j.forEach(a),w=c(F),V=r(F,"BUTTON",{id:!0,"aria-label":!0,class:!0});var Y=n(V);y=r(Y,"DIV",{class:!0,style:!0}),n(y).forEach(a),E=c(Y),O=r(Y,"DIV",{class:!0});var R=n(O);k=r(R,"SPAN",{class:!0}),n(k).forEach(a),R.forEach(a),Y.forEach(a),this.h()},h(){t(v,"name","theme-color"),t(v,"content",d[4]),t(x,"id","header"),t(x,"class",I="fixed z-50 w-screen transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[6.5rem] bg-pfp-navy text-white tracking-menu pb-5 pt-5 "+(d[2]>32&&"backdrop-blur border-base-content/10 bg-pfp-navy-100/30 md:bg-pfp-navy/30 text-pfp-navy")),zt(x,"-translate-y-32",!d[6]&&d[2]>0),t(y,"class","radial-progress text-accent transition-all duration-500 ease-in-out group-hover:text-accent-focus col-start-1 row-start-1"),t(y,"style",D=`--size:4rem; --thickness: 0.25rem; --value:${d[7]};`),t(k,"class","i-heroicons-solid-chevron-up !w-6 !h-6"),t(O,"class","border-4 border-base-content/10 group-hover:border-transparent col-start-1 row-start-1 rounded-full w-full h-full p-4 grid duration-500 ease-in-out"),zt(O,"border-transparent",d[7]>95),t(V,"id","totop"),t(V,"aria-label","scroll to top"),t(V,"class",A="fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out "+(d[7]>95?"btn-accent shadow-lg":"btn-ghost bg-base-100/30 md:bg-base-200/30")),zt(V,"translate-y-24",!d[6]||d[2]===0),zt(V,"opacity-100",d[2])},m(F,L){e(c_.head,v),lt(F,g,L),lt(F,x,L),_[m].m(x,null),lt(F,w,L),lt(F,V,L),e(V,y),e(V,E),e(V,O),e(O,k),M=!0,G||(b=[tm(h2,"scroll",()=>{l=!0,clearTimeout(u),u=setTimeout(i,100),d[9]()}),tm(V,"click",d[13])],G=!0)},p(F,[L]){L&4&&!l&&(l=!0,clearTimeout(u),scrollTo(h2.pageXOffset,F[2]),u=setTimeout(i,100)),(!M||L&16)&&t(v,"content",F[4]);let j=m;m=q(F),m===j?_[m].p(F,L):(_2(),Us(_[j],1,1,()=>{_[j]=null}),E2(),h=_[m],h?h.p(F,L):(h=_[m]=C[m](F),h.c()),Hs(h,1),h.m(x,null)),(!M||L&4&&I!==(I="fixed z-50 w-screen transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[6.5rem] bg-pfp-navy text-white tracking-menu pb-5 pt-5 "+(F[2]>32&&"backdrop-blur border-base-content/10 bg-pfp-navy-100/30 md:bg-pfp-navy/30 text-pfp-navy")))&&t(x,"class",I),(!M||L&68)&&zt(x,"-translate-y-32",!F[6]&&F[2]>0),(!M||L&128&&D!==(D=`--size:4rem; --thickness: 0.25rem; --value:${F[7]};`))&&t(y,"style",D),(!M||L&128)&&zt(O,"border-transparent",F[7]>95),(!M||L&128&&A!==(A="fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out "+(F[7]>95?"btn-accent shadow-lg":"btn-ghost bg-base-100/30 md:bg-base-200/30")))&&t(V,"class",A),(!M||L&196)&&zt(V,"translate-y-24",!F[6]||F[2]===0),(!M||L&132)&&zt(V,"opacity-100",F[2])},i(F){M||(Hs(h),M=!0)},o(F){Us(h),M=!1},d(F){a(v),F&&a(g),F&&a(x),_[m].d(),F&&a(w),F&&a(V),G=!1,sE(b)}}}function qE(d,l,i){let{path:u}=l,v,g,x,m=!1,h=!0,I,[w,V]=[0,0];nE.subscribe(A=>i(3,v=A));function y(){i(2,w=h2.pageYOffset)}const D=()=>i(5,m=!m),E=A=>{i(1,g=A),localStorage.setItem("theme",A)},O=()=>i(5,m=!m),k=()=>window.scrollTo(0,0);return d.$$set=A=>{"path"in A&&i(0,u=A.path)},d.$$.update=()=>{d.$$.dirty&2&&g&&(document.documentElement.setAttribute("data-theme",g),i(4,x=EE(...getComputedStyle(document.documentElement).getPropertyValue("--b1").slice(0).replaceAll("%","").split(" ").map(Number)))),d.$$.dirty&260&&w&&(i(6,h=V-w>0||w===0),i(8,V=w),i(7,I=Math.round(w/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*1e4)/100))},[u,g,w,v,x,m,h,I,V,y,D,E,O,k]}class RE extends Vn{constructor(l){super(),kn(this,l,qE,BE,Wa,{path:0})}}function f_(d){let l,i,u,v;const g=d[2].default,x=A_(g,d,d[1],null);return{c(){l=s("div"),x&&x.c(),this.h()},l(m){l=r(m,"DIV",{class:!0});var h=n(l);x&&x.l(h),h.forEach(a),this.h()},h(){t(l,"class","bg-base-100 md:bg-base-200 min-h-screen pt-16 md:pb-8 lg:pb-16")},m(m,h){lt(m,l,h),x&&x.m(l,null),v=!0},p(m,h){x&&x.p&&(!v||h&2)&&F_(x,g,m,m[1],v?L_(g,m[1],h,null):O_(m[1]),null)},i(m){v||(Hs(x,m),$c(()=>{v&&(u&&u.end(1),i=Hd(l,Lr,{y:100,duration:300,delay:300}),i.start())}),v=!0)},o(m){Us(x,m),i&&i.invalidate(),u=Ud(l,Lr,{y:-100,duration:300}),v=!1},d(m){m&&a(l),x&&x.d(m),m&&u&&u.end()}}}function $E(d){let l=d[0],i,u,v=f_(d);return{c(){v.c(),i=ya()},l(g){v.l(g),i=ya()},m(g,x){v.m(g,x),lt(g,i,x),u=!0},p(g,[x]){x&1&&Wa(l,l=g[0])?(_2(),Us(v,1,1,We),E2(),v=f_(g),v.c(),Hs(v,1),v.m(i.parentNode,i)):v.p(g,x)},i(g){u||(Hs(v),u=!0)},o(g){Us(v),u=!1},d(g){g&&a(i),v.d(g)}}}function HE(d,l,i){let{$$slots:u={},$$scope:v}=l,{path:g=""}=l;return d.$$set=x=>{"path"in x&&i(0,g=x.path),"$$scope"in x&&i(1,v=x.$$scope)},[g,v,u]}class UE extends Vn{constructor(l){super(),kn(this,l,HE,$E,Wa,{path:0})}}function WE(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,O,k,A,M,G,b,C,_,q,F,L,j,Y,R,$,ge,ue,K,U,re,Oe,he,ze,we,ae,fe,qe,Ee,de,$e,Le,N,Q,Ie=" ",_e,Ce,me,ie,Z,tt,De,Se,ne,Re,Te,ee,Ne,Pe,He,Be,Me,xe,et,Qe,ot,P,B,H,z,X,oe,J,Ve,ke,le,be,Pt,pe,te,Ke,Ge,Ue,ye,Ye,vt,Ae,je,$t,Mt,Fe,_t,St,ce,ut,st,gt,mt,Gt,ft,Ht,Vt,se,ht,Tt,jt,pt,xt,Nt,At,Je,Ft,Xe,Et,rt,Bt,es,bt,ve,at,qt,It,nt,ct,Yt,yt,Dt,Qt,Ut,Ot,Jt,Lt,Rt,wt,Ns,ls,Kt,it,Zt,is,hs,W,ms,kt,ds,ss,os,tr,Cr,rs,us,cr,Ss,Ws,Xt,xs,Ts,Mr,Dr,Pr,sr,Es,dr,fs,ps,ta,Gr,as,As,Sn,jr,Fs,Tn,Nr,ns,Vr,Ys,bs,Bs,wa,kr,Wt,rr,ur,fr,pr,Br,Is,ys,cl,fi,sa,cs,pi,qr,ra,vi,dl,co,vs,Os,Rr,Ya,ts,vr,Sr,gr,qs,$r,_a,An,ul,ar,gs,Ul,gi,ws,aa,Fn,hr,za,hi,mr,Ds,nr,Ls,Rs,Hr,Ka,mi,xr,zs,Cs,Ur,On,Ln,Ja,xi,Ps,Ms,na,uo,bi,Cn,lr,br,Tr,ir,fl,Wr,la,Ks,Xa,Yc,zc,ia,yi,Yd,fo,wi,yr,_s,Mn,Gn,Qa,_i,Ei,Ea,wr,po,Kc,oa,jn,Jc,Ii,Ia,Za,Nn,Zu,vo,en,tn,Da,Gs,Pa,go,ca,sn,Va,ka,Wl,Di,Pi,Yl,Vi,Bn,_r,rn,qn,an,sc,Xc,ho,pl,da,js,Sa,ki,zd,or,Ar,nn,Si,Ti,ln,on,zl,vl,Vs,Ta,Ai,Aa,rc,Qc,Er,Js,gl,Rn,$s,Fa,Zc,hl,Xs,Fi,Kd,Yr,zr,Jd,ed,Kr,cn;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=f("About us"),m=o(),h=s("div"),I=s("img"),V=o(),y=s("div"),D=s("div"),E=s("div"),O=f("Purpose"),k=o(),A=s("img"),G=o(),b=s("div"),C=s("div"),_=s("div"),q=o(),F=s("div"),L=f(`Our mission is to empower communities and businesses by helping them take control of their energy and
                environmental footprint.`),j=o(),Y=s("div"),R=s("div"),$=s("div"),ge=f(`By choosing to generate power from non-recycled waste, you can achieve supply security, cost control, and
                    environmental improvements while reducing dependence on the grid. Our projects operate continuously,
                    ensuring uninterrupted energy supply. They enable you to establish your own energy pricing while providing
                    eco-friendly electricity, biogas, and hydrogen. Our approach eliminates landfill waste, ocean dumping, and
                    open burning for a greener future.`),ue=o(),K=s("div"),U=s("div"),re=s("div"),Oe=f("Mission"),he=o(),ze=s("div"),we=s("div"),ae=s("img"),qe=o(),Ee=s("div"),de=s("div"),$e=s("div"),Le=o(),N=s("div"),Q=f(`Our innovative digital ecosystem enables you to discover the potential of power generation from non-recycled
                waste across various sectors, including agriculture, food services, manufacturing, and distribution chains.`),_e=f(Ie),Ce=o(),me=s("div"),ie=s("div"),Z=s("div"),tt=f(`We’ll collaborate with you to develop a tailored project. Our platform streamlines your journey from
                    feasibility to operation by connecting you with essential partners, such as technology providers, materials
                    analysts, funders, permit specialists, and construction and operation teams. No matter the size of your
                    waste output, from thousands of tonnes annually to just a few kilograms daily, we have a technology solution
                    designed to meet your needs.`),De=o(),Se=s("div"),ne=s("div"),Re=s("div"),Te=f("Vision"),ee=o(),Ne=s("img"),He=o(),Be=s("div"),Me=s("div"),xe=s("div"),et=o(),Qe=s("div"),ot=f("Our vision is founded on the “6R” principles: Reduce, Reuse, Recycle, Repurpose, Regenerate, and Regrowth."),P=o(),B=s("div"),H=s("div"),z=s("div"),X=f(`Reduce consumption and resource use in our daily lives Reuse items until they no longer serve a purpose
                    Recycle all recyclable materials Repurpose non-recycled waste to generate green energy locally Regenerate
                    our environment by adopting circular models focused on nature, including our own by-products like organic
                    fertilizers, char, and biochar Regrowth involves fostering an economy that harmonizes our biosphere and
                    financial ecosystem after applying the first five principles`),oe=o(),J=s("div"),Ve=s("div"),ke=s("div"),le=s("div"),be=f("Meet the team"),Pt=o(),pe=s("div"),te=s("div"),Ke=s("div"),Ge=s("div"),Ue=s("img"),Ye=o(),vt=s("div"),Ae=s("div"),je=s("div"),$t=f("Dermot McKeever"),Mt=o(),Fe=s("div"),_t=f("PFP Co-Founder and CEO"),St=o(),ce=s("div"),ut=s("div"),st=s("div"),gt=f("BSc"),mt=o(),Gt=s("div"),ft=s("div"),Ht=f("Dip"),Vt=o(),se=s("div"),ht=s("div"),Tt=f("PFS"),jt=o(),pt=s("div"),xt=f(`Dermot studied climatology at Leicester University and has extensive experience in the renewable space.
                  Throughout his career, Dermot has demonstrated expertise in business development by holding senior leadership
                  positions across a wide range of business models, from global enterprises to start-ups such as Nutmeg, a
                  leading digital wealth management platform. He has also held numerous consultancy, board adviser and NED roles
                  and is a published author on leadership.`),Nt=o(),At=s("img"),Ft=o(),Xe=s("div"),Et=s("div"),rt=s("img"),es=o(),bt=s("div"),ve=s("div"),at=s("div"),qt=f("James Cole"),It=o(),nt=s("div"),ct=f("PFP Co-Founder and Chairman"),Yt=o(),yt=s("div"),Dt=s("div"),Qt=s("div"),Ut=f("BSc"),Ot=o(),Jt=s("div"),Lt=f(`James has over 30 years of experience in real estate development and consultancy for multinational groups in
                  Asia, North America, Continental Europe and the UK. Furthermore, he has invested in and guided businesses in
                  private aviation, real estate investment, and renewable energy. Graduated from the Royal Military Academy
                  Sandhurst, after which he served in The Royal Green Jackets (now Rifles). He co-founded PFP to facilitate and
                  encourage a quantum shift in utilising waste as a green renewable energy source.`),Rt=o(),wt=s("img"),ls=o(),Kt=s("div"),it=s("div"),Zt=s("div"),is=s("img"),W=o(),ms=s("div"),kt=s("div"),ds=s("div"),ss=f("Simon Edwards"),os=o(),tr=s("div"),Cr=f("Senior Consultant"),rs=o(),us=s("div"),cr=s("div"),Ss=s("div"),Ws=f("BSc"),Xt=o(),xs=s("div"),Ts=f(`Simon, a University of Warwick alumnus, has 30+ years’ experience providing clients across all sectors of the
                  economy with energy reduction/management solutions and electricity/ gas procurement advice. Simon is utilising
                  his vast experience and connections in the energy sector to advise PFP’s clients on the cost savings and
                  impacts of utilising waste as a power source. Additionally, he runs the PFP introducer network, consisting of
                  industry heavyweights tasked with identifying potential projects.`),Mr=o(),Dr=s("img"),sr=o(),Es=s("div"),dr=s("div"),fs=s("img"),ta=o(),Gr=s("div"),as=s("div"),As=s("div"),Sn=f("Alice Chave"),jr=o(),Fs=s("div"),Tn=f("Environmental and Technical Engineer"),Nr=o(),ns=s("div"),Vr=f(`Alice holds a Master of Science in Engineering for International Development from the University College
                  London, complemented with a Bachelors in Environmental Engineering. Throughout her academic and professional
                  journey, she has been involved in international development projects, focusing on designing off-grid solutions
                  to benefit communities in the developing world.`),Ys=o(),bs=s("img"),wa=o(),kr=s("div"),Wt=s("div"),rr=s("div"),ur=s("img"),pr=o(),Br=s("div"),Is=s("div"),ys=s("div"),cl=f("Tim Edwards"),fi=o(),sa=s("div"),cs=f("Strategy Executive"),pi=o(),qr=s("div"),ra=f(`Tim is an economist with specialised skills in data, analytics, and strategy. He applies his understanding of
                  economic principles to analyse data and develop effective strategies for PFP’s clients. A University of
                  Bristol graduate, Tim boasts an accolade from The Chartered Banker Institute’s essay competition, where his
                  piece on how finance professionals can help achieve society’s goals on climate change was published alongside
                  distinguished academics, business leaders, and politicians.`),vi=o(),dl=s("img"),vs=o(),Os=s("div"),Rr=s("div"),Ya=s("img"),vr=o(),Sr=s("div"),gr=s("div"),qs=s("div"),$r=f("Paul Lee"),_a=o(),An=s("div"),ul=f("Chief Resilience Officer"),ar=o(),gs=s("div"),Ul=f(`Paul is an experienced Information Security Leader with expertise in FinTech and cryptocurrency. With 19 years
                  of experience in the UK and US, he has directed the infrastructure for a leading Security Certificate
                  Authority. Passionate about renewable energy and carbon-negative initiatives, he holds degrees from the
                  universities of Leeds and Liverpool, making a valuable asset to our team.`),gi=o(),ws=s("img"),Fn=o(),hr=s("div"),za=s("div"),hi=f("Advisory board"),mr=o(),Ds=s("div"),nr=s("div"),Ls=s("div"),Rs=s("div"),Hr=s("img"),mi=o(),xr=s("div"),zs=s("div"),Cs=s("div"),Ur=f("Dr. Linda Hilton"),On=o(),Ln=s("div"),Ja=f("Board Advisor"),xi=o(),Ps=s("div"),Ms=s("div"),na=s("div"),uo=f("PhD"),bi=o(),Cn=s("div"),lr=s("div"),br=f("CChem"),Tr=o(),ir=s("div"),fl=s("div"),Wr=f("FRSC"),la=o(),Ks=s("div"),Xa=s("div"),Yc=f("CSci"),zc=o(),ia=s("div"),yi=f(`Linda brings a unique blend of strategy, science, technology and management expertise gained across various
                  sectors including FMCG, IT, engineering, nuclear, environmental and renewables. Capable of offering both
                  strategic and operational insight, Linda has worked in a variety of different roles and environments around
                  the world for large corporates, research organisations, SME’s, spin-offs and start-ups (social enterprise) and
                  is passionate about using this experience to help people to mitigate climate change.`),Yd=o(),fo=s("img"),yr=o(),_s=s("div"),Mn=s("div"),Gn=s("img"),_i=o(),Ei=s("div"),Ea=s("div"),wr=s("div"),po=f("Alexandre Chavarot"),Kc=o(),oa=s("div"),jn=f("Board Advisor"),Jc=o(),Ii=s("div"),Ia=f(`Alexandre, a UK-based independent climate and energy transition finance professional offers expert advisory
                  services to a diverse range of clients, including corporates, asset owners and managers, government entities,
                  and foundations. His background spans project and corporate acquisitions, risk assessments, investments, and
                  financings in the energy, infrastructure, and maritime sectors, working with leading investment banks,
                  foundations, and advisory firms. Alexandre holds degrees from prestigious institutions, including Sciences Po,
                  Harvard, and INSEAD. His passion for addressing climate change and sustainable development make him a vital
                  contributor to the ongoing global transition to a more sustainable future.`),Za=o(),Nn=s("img"),vo=o(),en=s("div"),tn=s("div"),Da=s("div"),Gs=s("img"),go=o(),ca=s("div"),sn=s("div"),Va=s("div"),ka=f("Jayne Walters"),Wl=o(),Di=s("div"),Pi=f("Board Advisor"),Yl=o(),Vi=s("div"),Bn=s("div"),_r=s("div"),rn=f("BSc"),qn=o(),an=s("div"),sc=f(`Jayne is a lawyer with extensive legal experience having been a partner in a major City law firm and General
                  Counsel for property investment, development and financing businesses. Jayne oversees PFP’s compliance with
                  the business’s legal requirements and advises on the contracts required for individual projects. Jayne holds a
                  degree from The University of Cambridge.`),Xc=o(),ho=s("img"),da=o(),js=s("div"),Sa=s("div"),ki=s("img"),or=o(),Ar=s("div"),nn=s("div"),Si=s("div"),Ti=f("Shanika Amarasekara"),ln=o(),on=s("div"),zl=f("Board advisor"),vl=o(),Vs=s("div"),Ta=f(`Shanika was Chief Impact Officer at British Business Bank and an Executive Committee member responsible for
                  ESG, Economics, Policy and Strategy. Recently, Shanika was involved in the creation of both the Coronavirus
                  Business Interruption Loan Scheme (CBILS) and the Future Fund. The scale of both schemes expanded the bank’s
                  balance sheet by ten times. She was appointed General Counsel and Company Secretary and was a founder member
                  of the Senior Management Team which established and launched the bank in 2014. The bank was set up to increase
                  the supply of credit and finance to SMEs, enabling these companies to contribute effectively to the UK
                  economy.`),Ai=o(),Aa=s("img"),Qc=o(),Er=s("div"),Js=s("div"),gl=f("Copyright © 2023 Power for Planet"),Rn=o(),$s=s("div"),Fa=s("div"),Zc=f("Privacy Policy"),hl=o(),Xs=s("div"),Fi=s("img"),Yr=o(),zr=s("img"),ed=o(),Kr=s("img"),this.h()},l(dn){l=r(dn,"DIV",{class:!0});var ml=n(l);i=r(ml,"DIV",{class:!0});var mo=n(i);u=r(mo,"DIV",{class:!0});var Kl=n(u);v=r(Kl,"DIV",{class:!0});var Xd=n(v);g=r(Xd,"DIV",{});var ua=n(g);x=p(ua,"About us"),ua.forEach(a),Xd.forEach(a),m=c(Kl),h=r(Kl,"DIV",{class:!0});var Qs=n(h);I=r(Qs,"IMG",{src:!0,alt:!0,class:!0}),V=c(Qs),y=r(Qs,"DIV",{class:!0});var xl=n(y);D=r(xl,"DIV",{class:!0});var $n=n(D);E=r($n,"DIV",{});var Oi=n(E);O=p(Oi,"Purpose"),Oi.forEach(a),k=c($n),A=r($n,"IMG",{src:!0,alt:!0,class:!0}),$n.forEach(a),G=c(xl),b=r(xl,"DIV",{class:!0});var Li=n(b);C=r(Li,"DIV",{class:!0});var fa=n(C);_=r(fa,"DIV",{class:!0}),n(_).forEach(a),q=c(fa),F=r(fa,"DIV",{class:!0});var Hn=n(F);L=p(Hn,`Our mission is to empower communities and businesses by helping them take control of their energy and
                environmental footprint.`),Hn.forEach(a),j=c(fa),Y=r(fa,"DIV",{class:!0});var ef=n(Y);R=r(ef,"DIV",{class:!0});var Qd=n(R);$=r(Qd,"DIV",{class:!0});var xo=n($);ge=p(xo,`By choosing to generate power from non-recycled waste, you can achieve supply security, cost control, and
                    environmental improvements while reducing dependence on the grid. Our projects operate continuously,
                    ensuring uninterrupted energy supply. They enable you to establish your own energy pricing while providing
                    eco-friendly electricity, biogas, and hydrogen. Our approach eliminates landfill waste, ocean dumping, and
                    open burning for a greener future.`),xo.forEach(a),Qd.forEach(a),ef.forEach(a),fa.forEach(a),Li.forEach(a),xl.forEach(a),ue=c(Qs),K=r(Qs,"DIV",{class:!0});var Zs=n(K);U=r(Zs,"DIV",{class:!0});var un=n(U);re=r(un,"DIV",{class:!0});var tf=n(re);Oe=p(tf,"Mission"),tf.forEach(a),he=c(un),ze=r(un,"DIV",{class:!0});var Zd=n(ze);we=r(Zd,"DIV",{});var ac=n(we);ae=r(ac,"IMG",{src:!0,alt:!0,class:!0}),ac.forEach(a),Zd.forEach(a),un.forEach(a),qe=c(Zs),Ee=r(Zs,"DIV",{class:!0});var Un=n(Ee);de=r(Un,"DIV",{class:!0});var fn=n(de);$e=r(fn,"DIV",{class:!0}),n($e).forEach(a),Le=c(fn),N=r(fn,"DIV",{class:!0});var nc=n(N);Q=p(nc,`Our innovative digital ecosystem enables you to discover the potential of power generation from non-recycled
                waste across various sectors, including agriculture, food services, manufacturing, and distribution chains.`),_e=p(nc,Ie),nc.forEach(a),Ce=c(fn),me=r(fn,"DIV",{class:!0});var eu=n(me);ie=r(eu,"DIV",{class:!0});var Ci=n(ie);Z=r(Ci,"DIV",{class:!0});var Oa=n(Z);tt=p(Oa,`We’ll collaborate with you to develop a tailored project. Our platform streamlines your journey from
                    feasibility to operation by connecting you with essential partners, such as technology providers, materials
                    analysts, funders, permit specialists, and construction and operation teams. No matter the size of your
                    waste output, from thousands of tonnes annually to just a few kilograms daily, we have a technology solution
                    designed to meet your needs.`),Oa.forEach(a),Ci.forEach(a),eu.forEach(a),fn.forEach(a),Un.forEach(a),Zs.forEach(a),De=c(Qs),Se=r(Qs,"DIV",{class:!0});var Wn=n(Se);ne=r(Wn,"DIV",{class:!0});var bl=n(ne);Re=r(bl,"DIV",{});var bo=n(Re);Te=p(bo,"Vision"),bo.forEach(a),ee=c(bl),Ne=r(bl,"IMG",{src:!0,alt:!0,class:!0}),bl.forEach(a),He=c(Wn),Be=r(Wn,"DIV",{class:!0});var sf=n(Be);Me=r(sf,"DIV",{class:!0});var Yn=n(Me);xe=r(Yn,"DIV",{class:!0}),n(xe).forEach(a),et=c(Yn),Qe=r(Yn,"DIV",{class:!0});var yl=n(Qe);ot=p(yl,"Our vision is founded on the “6R” principles: Reduce, Reuse, Recycle, Repurpose, Regenerate, and Regrowth."),yl.forEach(a),P=c(Yn),B=r(Yn,"DIV",{class:!0});var yo=n(B);H=r(yo,"DIV",{class:!0});var wo=n(H);z=r(wo,"DIV",{class:!0});var La=n(z);X=p(La,`Reduce consumption and resource use in our daily lives Reuse items until they no longer serve a purpose
                    Recycle all recyclable materials Repurpose non-recycled waste to generate green energy locally Regenerate
                    our environment by adopting circular models focused on nature, including our own by-products like organic
                    fertilizers, char, and biochar Regrowth involves fostering an economy that harmonizes our biosphere and
                    financial ecosystem after applying the first five principles`),La.forEach(a),wo.forEach(a),yo.forEach(a),Yn.forEach(a),sf.forEach(a),Wn.forEach(a),Qs.forEach(a),oe=c(Kl),J=r(Kl,"DIV",{class:!0});var zn=n(J);Ve=r(zn,"DIV",{class:!0});var pn=n(Ve);ke=r(pn,"DIV",{class:!0});var tu=n(ke);le=r(tu,"DIV",{});var lc=n(le);be=p(lc,"Meet the team"),lc.forEach(a),tu.forEach(a),Pt=c(pn),pe=r(pn,"DIV",{class:!0});var wl=n(pe);te=r(wl,"DIV",{class:!0});var ic=n(te);Ke=r(ic,"DIV",{class:!0});var _l=n(Ke);Ge=r(_l,"DIV",{class:!0});var Jl=n(Ge);Ue=r(Jl,"IMG",{src:!0,alt:!0,class:!0}),Ye=c(Jl),vt=r(Jl,"DIV",{class:!0});var Kn=n(vt);Ae=r(Kn,"DIV",{class:!0});var Ca=n(Ae);je=r(Ca,"DIV",{class:!0});var _o=n(je);$t=p(_o,"Dermot McKeever"),_o.forEach(a),Mt=c(Ca),Fe=r(Ca,"DIV",{class:!0});var Mi=n(Fe);_t=p(Mi,"PFP Co-Founder and CEO"),Mi.forEach(a),Ca.forEach(a),St=c(Kn),ce=r(Kn,"DIV",{class:!0});var vn=n(ce);ut=r(vn,"DIV",{class:!0});var El=n(ut);st=r(El,"DIV",{});var Ma=n(st);gt=p(Ma,"BSc"),Ma.forEach(a),El.forEach(a),mt=c(vn),Gt=r(vn,"DIV",{class:!0});var Il=n(Gt);ft=r(Il,"DIV",{});var su=n(ft);Ht=p(su,"Dip"),su.forEach(a),Il.forEach(a),Vt=c(vn),se=r(vn,"DIV",{class:!0});var Xl=n(se);ht=r(Xl,"DIV",{});var Jn=n(ht);Tt=p(Jn,"PFS"),Jn.forEach(a),Xl.forEach(a),vn.forEach(a),Kn.forEach(a),Jl.forEach(a),jt=c(_l),pt=r(_l,"DIV",{class:!0});var ru=n(pt);xt=p(ru,`Dermot studied climatology at Leicester University and has extensive experience in the renewable space.
                  Throughout his career, Dermot has demonstrated expertise in business development by holding senior leadership
                  positions across a wide range of business models, from global enterprises to start-ups such as Nutmeg, a
                  leading digital wealth management platform. He has also held numerous consultancy, board adviser and NED roles
                  and is a published author on leadership.`),ru.forEach(a),Nt=c(_l),At=r(_l,"IMG",{src:!0}),_l.forEach(a),Ft=c(ic),Xe=r(ic,"DIV",{class:!0});var Gi=n(Xe);Et=r(Gi,"DIV",{class:!0});var Fr=n(Et);rt=r(Fr,"IMG",{src:!0,alt:!0,class:!0}),es=c(Fr),bt=r(Fr,"DIV",{class:!0});var gn=n(bt);ve=r(gn,"DIV",{class:!0});var Ga=n(ve);at=r(Ga,"DIV",{class:!0});var ji=n(at);qt=p(ji,"James Cole"),ji.forEach(a),It=c(Ga),nt=r(Ga,"DIV",{class:!0});var Ql=n(nt);ct=p(Ql,"PFP Co-Founder and Chairman"),Ql.forEach(a),Ga.forEach(a),Yt=c(gn),yt=r(gn,"DIV",{class:!0});var Ni=n(yt);Dt=r(Ni,"DIV",{class:!0});var rf=n(Dt);Qt=r(rf,"DIV",{});var Eo=n(Qt);Ut=p(Eo,"BSc"),Eo.forEach(a),rf.forEach(a),Ni.forEach(a),gn.forEach(a),Fr.forEach(a),Ot=c(Gi),Jt=r(Gi,"DIV",{class:!0});var ja=n(Jt);Lt=p(ja,`James has over 30 years of experience in real estate development and consultancy for multinational groups in
                  Asia, North America, Continental Europe and the UK. Furthermore, he has invested in and guided businesses in
                  private aviation, real estate investment, and renewable energy. Graduated from the Royal Military Academy
                  Sandhurst, after which he served in The Royal Green Jackets (now Rifles). He co-founded PFP to facilitate and
                  encourage a quantum shift in utilising waste as a green renewable energy source.`),ja.forEach(a),Rt=c(Gi),wt=r(Gi,"IMG",{src:!0}),Gi.forEach(a),ic.forEach(a),ls=c(wl),Kt=r(wl,"DIV",{class:!0});var Zl=n(Kt);it=r(Zl,"DIV",{class:!0});var Io=n(it);Zt=r(Io,"DIV",{class:!0});var Dl=n(Zt);is=r(Dl,"IMG",{src:!0,alt:!0,class:!0}),W=c(Dl),ms=r(Dl,"DIV",{class:!0});var Xn=n(ms);kt=r(Xn,"DIV",{class:!0});var er=n(kt);ds=r(er,"DIV",{class:!0});var pa=n(ds);ss=p(pa,"Simon Edwards"),pa.forEach(a),os=c(er),tr=r(er,"DIV",{class:!0});var Pl=n(tr);Cr=p(Pl,"Senior Consultant"),Pl.forEach(a),er.forEach(a),rs=c(Xn),us=r(Xn,"DIV",{class:!0});var af=n(us);cr=r(af,"DIV",{class:!0});var au=n(cr);Ss=r(au,"DIV",{});var va=n(Ss);Ws=p(va,"BSc"),va.forEach(a),au.forEach(a),af.forEach(a),Xn.forEach(a),Dl.forEach(a),Xt=c(Io),xs=r(Io,"DIV",{class:!0});var Bi=n(xs);Ts=p(Bi,`Simon, a University of Warwick alumnus, has 30+ years’ experience providing clients across all sectors of the
                  economy with energy reduction/management solutions and electricity/ gas procurement advice. Simon is utilising
                  his vast experience and connections in the energy sector to advise PFP’s clients on the cost savings and
                  impacts of utilising waste as a power source. Additionally, he runs the PFP introducer network, consisting of
                  industry heavyweights tasked with identifying potential projects.`),Bi.forEach(a),Mr=c(Io),Dr=r(Io,"IMG",{src:!0}),Io.forEach(a),sr=c(Zl),Es=r(Zl,"DIV",{class:!0});var Do=n(Es);dr=r(Do,"DIV",{class:!0});var ei=n(dr);fs=r(ei,"IMG",{src:!0,alt:!0,class:!0}),ta=c(ei),Gr=r(ei,"DIV",{class:!0});var ks=n(Gr);as=r(ks,"DIV",{class:!0});var Na=n(as);As=r(Na,"DIV",{class:!0});var Po=n(As);Sn=p(Po,"Alice Chave"),Po.forEach(a),jr=c(Na),Fs=r(Na,"DIV",{class:!0});var Vl=n(Fs);Tn=p(Vl,"Environmental and Technical Engineer"),Vl.forEach(a),Na.forEach(a),ks.forEach(a),ei.forEach(a),Nr=c(Do),ns=r(Do,"DIV",{class:!0});var td=n(ns);Vr=p(td,`Alice holds a Master of Science in Engineering for International Development from the University College
                  London, complemented with a Bachelors in Environmental Engineering. Throughout her academic and professional
                  journey, she has been involved in international development projects, focusing on designing off-grid solutions
                  to benefit communities in the developing world.`),td.forEach(a),Ys=c(Do),bs=r(Do,"IMG",{src:!0}),Do.forEach(a),Zl.forEach(a),wa=c(wl),kr=r(wl,"DIV",{class:!0});var oc=n(kr);Wt=r(oc,"DIV",{class:!0});var Jr=n(Wt);rr=r(Jr,"DIV",{class:!0});var hn=n(rr);ur=r(hn,"IMG",{src:!0,alt:!0,class:!0}),pr=c(hn),Br=r(hn,"DIV",{class:!0});var nu=n(Br);Is=r(nu,"DIV",{class:!0});var cc=n(Is);ys=r(cc,"DIV",{class:!0});var Xr=n(ys);cl=p(Xr,"Tim Edwards"),Xr.forEach(a),fi=c(cc),sa=r(cc,"DIV",{class:!0});var mn=n(sa);cs=p(mn,"Strategy Executive"),mn.forEach(a),cc.forEach(a),nu.forEach(a),hn.forEach(a),pi=c(Jr),qr=r(Jr,"DIV",{class:!0});var qi=n(qr);ra=p(qi,`Tim is an economist with specialised skills in data, analytics, and strategy. He applies his understanding of
                  economic principles to analyse data and develop effective strategies for PFP’s clients. A University of
                  Bristol graduate, Tim boasts an accolade from The Chartered Banker Institute’s essay competition, where his
                  piece on how finance professionals can help achieve society’s goals on climate change was published alongside
                  distinguished academics, business leaders, and politicians.`),qi.forEach(a),vi=c(Jr),dl=r(Jr,"IMG",{src:!0}),Jr.forEach(a),vs=c(oc),Os=r(oc,"DIV",{class:!0});var Vo=n(Os);Rr=r(Vo,"DIV",{class:!0});var kl=n(Rr);Ya=r(kl,"IMG",{src:!0,alt:!0,class:!0}),vr=c(kl),Sr=r(kl,"DIV",{class:!0});var dc=n(Sr);gr=r(dc,"DIV",{class:!0});var uc=n(gr);qs=r(uc,"DIV",{class:!0});var ti=n(qs);$r=p(ti,"Paul Lee"),ti.forEach(a),_a=c(uc),An=r(uc,"DIV",{class:!0});var Sl=n(An);ul=p(Sl,"Chief Resilience Officer"),Sl.forEach(a),uc.forEach(a),dc.forEach(a),kl.forEach(a),ar=c(Vo),gs=r(Vo,"DIV",{class:!0});var Ba=n(gs);Ul=p(Ba,`Paul is an experienced Information Security Leader with expertise in FinTech and cryptocurrency. With 19 years
                  of experience in the UK and US, he has directed the infrastructure for a leading Security Certificate
                  Authority. Passionate about renewable energy and carbon-negative initiatives, he holds degrees from the
                  universities of Leeds and Liverpool, making a valuable asset to our team.`),Ba.forEach(a),gi=c(Vo),ws=r(Vo,"IMG",{src:!0}),Vo.forEach(a),oc.forEach(a),wl.forEach(a),Fn=c(pn),hr=r(pn,"DIV",{class:!0});var fc=n(hr);za=r(fc,"DIV",{});var lu=n(za);hi=p(lu,"Advisory board"),lu.forEach(a),fc.forEach(a),mr=c(pn),Ds=r(pn,"DIV",{class:!0});var Qn=n(Ds);nr=r(Qn,"DIV",{class:!0});var ga=n(nr);Ls=r(ga,"DIV",{class:!0});var xn=n(Ls);Rs=r(xn,"DIV",{class:!0});var sd=n(Rs);Hr=r(sd,"IMG",{src:!0,alt:!0,class:!0}),mi=c(sd),xr=r(sd,"DIV",{class:!0});var Ri=n(xr);zs=r(Ri,"DIV",{class:!0});var pc=n(zs);Cs=r(pc,"DIV",{class:!0});var Tl=n(Cs);Ur=p(Tl,"Dr. Linda Hilton"),Tl.forEach(a),On=c(pc),Ln=r(pc,"DIV",{class:!0});var Al=n(Ln);Ja=p(Al,"Board Advisor"),Al.forEach(a),pc.forEach(a),xi=c(Ri),Ps=r(Ri,"DIV",{class:!0});var si=n(Ps);Ms=r(si,"DIV",{class:!0});var iu=n(Ms);na=r(iu,"DIV",{});var ri=n(na);uo=p(ri,"PhD"),ri.forEach(a),iu.forEach(a),bi=c(si),Cn=r(si,"DIV",{class:!0});var Qr=n(Cn);lr=r(Qr,"DIV",{});var ha=n(lr);br=p(ha,"CChem"),ha.forEach(a),Qr.forEach(a),Tr=c(si),ir=r(si,"DIV",{class:!0});var Fl=n(ir);fl=r(Fl,"DIV",{});var nf=n(fl);Wr=p(nf,"FRSC"),nf.forEach(a),Fl.forEach(a),la=c(si),Ks=r(si,"DIV",{class:!0});var ai=n(Ks);Xa=r(ai,"DIV",{});var ko=n(Xa);Yc=p(ko,"CSci"),ko.forEach(a),ai.forEach(a),si.forEach(a),Ri.forEach(a),sd.forEach(a),zc=c(xn),ia=r(xn,"DIV",{class:!0});var Ol=n(ia);yi=p(Ol,`Linda brings a unique blend of strategy, science, technology and management expertise gained across various
                  sectors including FMCG, IT, engineering, nuclear, environmental and renewables. Capable of offering both
                  strategic and operational insight, Linda has worked in a variety of different roles and environments around
                  the world for large corporates, research organisations, SME’s, spin-offs and start-ups (social enterprise) and
                  is passionate about using this experience to help people to mitigate climate change.`),Ol.forEach(a),Yd=c(xn),fo=r(xn,"IMG",{src:!0}),xn.forEach(a),yr=c(ga),_s=r(ga,"DIV",{class:!0});var bn=n(_s);Mn=r(bn,"DIV",{class:!0});var Ll=n(Mn);Gn=r(Ll,"IMG",{src:!0,alt:!0,class:!0}),_i=c(Ll),Ei=r(Ll,"DIV",{class:!0});var So=n(Ei);Ea=r(So,"DIV",{class:!0});var vc=n(Ea);wr=r(vc,"DIV",{class:!0});var Zn=n(wr);po=p(Zn,"Alexandre Chavarot"),Zn.forEach(a),Kc=c(vc),oa=r(vc,"DIV",{class:!0});var ma=n(oa);jn=p(ma,"Board Advisor"),ma.forEach(a),vc.forEach(a),So.forEach(a),Ll.forEach(a),Jc=c(bn),Ii=r(bn,"DIV",{class:!0});var To=n(Ii);Ia=p(To,`Alexandre, a UK-based independent climate and energy transition finance professional offers expert advisory
                  services to a diverse range of clients, including corporates, asset owners and managers, government entities,
                  and foundations. His background spans project and corporate acquisitions, risk assessments, investments, and
                  financings in the energy, infrastructure, and maritime sectors, working with leading investment banks,
                  foundations, and advisory firms. Alexandre holds degrees from prestigious institutions, including Sciences Po,
                  Harvard, and INSEAD. His passion for addressing climate change and sustainable development make him a vital
                  contributor to the ongoing global transition to a more sustainable future.`),To.forEach(a),Za=c(bn),Nn=r(bn,"IMG",{src:!0}),bn.forEach(a),ga.forEach(a),vo=c(Qn),en=r(Qn,"DIV",{class:!0});var rd=n(en);tn=r(rd,"DIV",{class:!0});var yn=n(tn);Da=r(yn,"DIV",{class:!0});var qa=n(Da);Gs=r(qa,"IMG",{src:!0,alt:!0,class:!0}),go=c(qa),ca=r(qa,"DIV",{class:!0});var ad=n(ca);sn=r(ad,"DIV",{class:!0});var gc=n(sn);Va=r(gc,"DIV",{class:!0});var wn=n(Va);ka=p(wn,"Jayne Walters"),wn.forEach(a),Wl=c(gc),Di=r(gc,"DIV",{class:!0});var $i=n(Di);Pi=p($i,"Board Advisor"),$i.forEach(a),gc.forEach(a),Yl=c(ad),Vi=r(ad,"DIV",{class:!0});var ni=n(Vi);Bn=r(ni,"DIV",{class:!0});var Zr=n(Bn);_r=r(Zr,"DIV",{});var el=n(_r);rn=p(el,"BSc"),el.forEach(a),Zr.forEach(a),ni.forEach(a),ad.forEach(a),qa.forEach(a),qn=c(yn),an=r(yn,"DIV",{class:!0});var lf=n(an);sc=p(lf,`Jayne is a lawyer with extensive legal experience having been a partner in a major City law firm and General
                  Counsel for property investment, development and financing businesses. Jayne oversees PFP’s compliance with
                  the business’s legal requirements and advises on the contracts required for individual projects. Jayne holds a
                  degree from The University of Cambridge.`),lf.forEach(a),Xc=c(yn),ho=r(yn,"IMG",{src:!0}),yn.forEach(a),da=c(rd),js=r(rd,"DIV",{class:!0});var Hi=n(js);Sa=r(Hi,"DIV",{class:!0});var xa=n(Sa);ki=r(xa,"IMG",{src:!0,alt:!0,class:!0}),or=c(xa),Ar=r(xa,"DIV",{class:!0});var hc=n(Ar);nn=r(hc,"DIV",{class:!0});var mc=n(nn);Si=r(mc,"DIV",{class:!0});var Ao=n(Si);Ti=p(Ao,"Shanika Amarasekara"),Ao.forEach(a),ln=c(mc),on=r(mc,"DIV",{class:!0});var Ra=n(on);zl=p(Ra,"Board advisor"),Ra.forEach(a),mc.forEach(a),hc.forEach(a),xa.forEach(a),vl=c(Hi),Vs=r(Hi,"DIV",{class:!0});var xc=n(Vs);Ta=p(xc,`Shanika was Chief Impact Officer at British Business Bank and an Executive Committee member responsible for
                  ESG, Economics, Policy and Strategy. Recently, Shanika was involved in the creation of both the Coronavirus
                  Business Interruption Loan Scheme (CBILS) and the Future Fund. The scale of both schemes expanded the bank’s
                  balance sheet by ten times. She was appointed General Counsel and Company Secretary and was a founder member
                  of the Senior Management Team which established and launched the bank in 2014. The bank was set up to increase
                  the supply of credit and finance to SMEs, enabling these companies to contribute effectively to the UK
                  economy.`),xc.forEach(a),Ai=c(Hi),Aa=r(Hi,"IMG",{src:!0}),Hi.forEach(a),rd.forEach(a),Qn.forEach(a),pn.forEach(a),zn.forEach(a),Qc=c(Kl),Er=r(Kl,"DIV",{class:!0});var bc=n(Er);Js=r(bc,"DIV",{class:!0});var Fo=n(Js);gl=p(Fo,"Copyright © 2023 Power for Planet"),Fo.forEach(a),Rn=c(bc),$s=r(bc,"DIV",{class:!0});var $a=n($s);Fa=r($a,"DIV",{class:!0});var li=n(Fa);Zc=p(li,"Privacy Policy"),li.forEach(a),hl=c($a),Xs=r($a,"DIV",{class:!0});var tl=n(Xs);Fi=r(tl,"IMG",{src:!0,alt:!0,class:!0}),Yr=c(tl),zr=r(tl,"IMG",{src:!0,alt:!0,class:!0}),ed=c(tl),Kr=r(tl,"IMG",{src:!0,alt:!0,class:!0}),tl.forEach(a),$a.forEach(a),bc.forEach(a),Kl.forEach(a),mo.forEach(a),ml.forEach(a),this.h()},h(){t(v,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),S(I.src,w="/assets/new/Line-1.svg")||t(I,"src",w),t(I,"alt","Line 1"),t(I,"class","h-[670px] w-2.5 left-[130px] bottom-[-130px] relative mb-[-700px] z-1"),S(A.src,M="/assets/new/graphic.svg")||t(A,"src",M),t(A,"alt","graphic"),t(A,"class","h-[110px] w-[65px]"),t(D,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),t(_,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(F,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t($,"class","w-[690px]"),t(R,"class","w-full flex-col flex items-start gap-[18px]"),t(Y,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(C,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(b,"class","flex-1 flex items-start gap-5"),t(y,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),t(re,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(ae.src,fe="/assets/new/graphic-45.svg")||t(ae,"src",fe),t(ae,"alt","graphic"),t(ae,"class","h-[120px] w-[120px]"),t(ze,"class","flex justify-center items-center gap-2.5 pr-[13px]"),t(U,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full"),t($e,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(N,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t(Z,"class","w-[690px]"),t(ie,"class","w-full flex-col flex items-start gap-[18px]"),t(me,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(de,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(Ee,"class","flex-1 flex items-start gap-5"),t(K,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),S(Ne.src,Pe="/assets/new/graphic-10.svg")||t(Ne,"src",Pe),t(Ne,"alt","graphic"),t(Ne,"class","h-[120px] w-[120px]"),t(ne,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),t(xe,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(Qe,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t(z,"class","w-[690px]"),t(H,"class","w-full flex-col flex items-start gap-[18px]"),t(B,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(Me,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(Be,"class","flex-1 flex items-start gap-5"),t(Se,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),t(h,"class","w-full flex-col flex items-start gap-[30px]"),t(ke,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(Ue.src,ye="/assets/new/Vector-11.svg")||t(Ue,"src",ye),t(Ue,"alt","Vector"),t(Ue,"class","h-[100px] w-[100px]"),t(je,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Fe,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Ae,"class","w-full flex-col flex items-start font-bold"),t(ut,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Gt,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(se,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(ce,"class","flex items-start gap-1.5 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(vt,"class","flex-1 flex-col flex items-start gap-2"),t(Ge,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(pt,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(At.src,Je="/assets/LI.png")||t(At,"src",Je),t(Ke,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(rt.src,Bt="/assets/new/Vector-12.svg")||t(rt,"src",Bt),t(rt,"alt","Vector"),t(rt,"class","h-[100px] w-[100px]"),t(at,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(nt,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(ve,"class","w-full flex-col flex items-start font-bold"),t(Dt,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(yt,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(bt,"class","flex-1 flex-col flex items-start gap-2"),t(Et,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Jt,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(wt.src,Ns="/assets/LI.png")||t(wt,"src",Ns),t(Xe,"class","bg-[#e7f5f5] flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(te,"class","w-full flex items-start gap-5"),S(is.src,hs="/assets/new/Vector-13.svg")||t(is,"src",hs),t(is,"alt","Vector"),t(is,"class","h-[100px] w-[100px]"),t(ds,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(tr,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(kt,"class","w-full flex-col flex items-start font-bold"),t(cr,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(us,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(ms,"class","flex-1 flex-col flex items-start gap-2"),t(Zt,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(xs,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(Dr.src,Pr="/assets/LI.png")||t(Dr,"src",Pr),t(it,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(fs.src,ps="/assets/new/Vector-14.svg")||t(fs,"src",ps),t(fs,"alt","Vector"),t(fs,"class","h-[100px] w-[100px]"),t(As,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Fs,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(as,"class","w-full flex-col flex items-start font-bold"),t(Gr,"class","flex-1 flex-col flex items-start gap-2"),t(dr,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(ns,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(bs.src,Bs="/assets/LI.png")||t(bs,"src",Bs),t(Es,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(Kt,"class","w-full flex items-start gap-5"),S(ur.src,fr="/assets/new/Vector-15.svg")||t(ur,"src",fr),t(ur,"alt","Vector"),t(ur,"class","h-[100px] w-[100px]"),t(ys,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(sa,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Is,"class","w-full flex-col flex items-start font-bold"),t(Br,"class","flex-1 flex-col flex items-start gap-2"),t(rr,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(qr,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(dl.src,co="/assets/LI.png")||t(dl,"src",co),t(Wt,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(Ya.src,ts="/assets/new/Vector-16.svg")||t(Ya,"src",ts),t(Ya,"alt","Vector"),t(Ya,"class","h-[100px] w-[100px]"),t(qs,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(An,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(gr,"class","w-full flex-col flex items-start font-bold"),t(Sr,"class","flex-1 flex-col flex items-start gap-2"),t(Rr,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(gs,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(ws.src,aa="/assets/LI.png")||t(ws,"src",aa),t(Os,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(kr,"class","w-full flex items-start gap-5"),t(pe,"class","w-full h-[1550px] flex-col flex items-center gap-5"),t(hr,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(Hr.src,Ka="/assets/new/Vector-17.svg")||t(Hr,"src",Ka),t(Hr,"alt","Vector"),t(Hr,"class","h-[100px] w-[100px]"),t(Cs,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Ln,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(zs,"class","w-full flex-col flex items-start font-bold"),t(Ms,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Cn,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(ir,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Ks,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Ps,"class","w-full flex items-start gap-1.5 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(xr,"class","flex-1 flex-col flex items-start gap-2"),t(Rs,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(ia,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(fo.src,wi="/assets/LI.png")||t(fo,"src",wi),t(Ls,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(Gn.src,Qa="/assets/new/Vector-18.svg")||t(Gn,"src",Qa),t(Gn,"alt","Vector"),t(Gn,"class","h-[100px] w-[100px]"),t(wr,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(oa,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Ea,"class","w-full flex-col flex items-start font-bold"),t(Ei,"class","flex-1 flex-col flex items-start gap-2"),t(Mn,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Ii,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(Nn.src,Zu="/assets/LI.png")||t(Nn,"src",Zu),t(_s,"class","bg-[#e7f5f5] flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(nr,"class","w-full flex items-start gap-5"),S(Gs.src,Pa="/assets/new/Vector-19.svg")||t(Gs,"src",Pa),t(Gs,"alt","Vector"),t(Gs,"class","h-[100px] w-[100px]"),t(Va,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Di,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(sn,"class","w-full flex-col flex items-start font-bold"),t(Bn,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Vi,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(ca,"class","flex-1 flex-col flex items-start gap-2"),t(Da,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(an,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(ho.src,pl="/assets/LI.png")||t(ho,"src",pl),t(tn,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(ki.src,zd="/assets/new/Vector-20.svg")||t(ki,"src",zd),t(ki,"alt","Vector"),t(ki,"class","h-[100px] w-[100px]"),t(Si,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(on,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(nn,"class","w-full flex-col flex items-start font-bold"),t(Ar,"class","flex-1 flex-col flex items-start gap-2"),t(Sa,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Vs,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(Aa.src,rc="/assets/LI.png")||t(Aa,"src",rc),t(js,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(en,"class","w-full flex items-start gap-5"),t(Ds,"class","w-full h-[1200px] flex-col flex items-center gap-5"),t(Ve,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(J,"class","w-full flex-col flex items-start gap-10"),t(Js,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Fa,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Fi.src,Kd="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Fi,"src",Kd),t(Fi,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Fi,"class","h-6 w-6"),S(zr.src,Jd="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(zr,"src",Jd),t(zr,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(zr,"class","h-6 w-6"),S(Kr.src,cn="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Kr,"src",cn),t(Kr,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Kr,"class","h-6 w-6"),t(Xs,"class","flex items-center gap-5"),t($s,"class","flex-1 flex justify-end items-center gap-10"),t(Er,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(u,"class","flex-col mw-[1060px] flex items-start gap-[50px]"),t(i,"class","bg-[#e4eaea] flex-col flex items-center gap-[50px] h-fit mt-20"),t(l,"class","w-full")},m(dn,ml){lt(dn,l,ml),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(u,m),e(u,h),e(h,I),e(h,V),e(h,y),e(y,D),e(D,E),e(E,O),e(D,k),e(D,A),e(y,G),e(y,b),e(b,C),e(C,_),e(C,q),e(C,F),e(F,L),e(C,j),e(C,Y),e(Y,R),e(R,$),e($,ge),e(h,ue),e(h,K),e(K,U),e(U,re),e(re,Oe),e(U,he),e(U,ze),e(ze,we),e(we,ae),e(K,qe),e(K,Ee),e(Ee,de),e(de,$e),e(de,Le),e(de,N),e(N,Q),e(N,_e),e(de,Ce),e(de,me),e(me,ie),e(ie,Z),e(Z,tt),e(h,De),e(h,Se),e(Se,ne),e(ne,Re),e(Re,Te),e(ne,ee),e(ne,Ne),e(Se,He),e(Se,Be),e(Be,Me),e(Me,xe),e(Me,et),e(Me,Qe),e(Qe,ot),e(Me,P),e(Me,B),e(B,H),e(H,z),e(z,X),e(u,oe),e(u,J),e(J,Ve),e(Ve,ke),e(ke,le),e(le,be),e(Ve,Pt),e(Ve,pe),e(pe,te),e(te,Ke),e(Ke,Ge),e(Ge,Ue),e(Ge,Ye),e(Ge,vt),e(vt,Ae),e(Ae,je),e(je,$t),e(Ae,Mt),e(Ae,Fe),e(Fe,_t),e(vt,St),e(vt,ce),e(ce,ut),e(ut,st),e(st,gt),e(ce,mt),e(ce,Gt),e(Gt,ft),e(ft,Ht),e(ce,Vt),e(ce,se),e(se,ht),e(ht,Tt),e(Ke,jt),e(Ke,pt),e(pt,xt),e(Ke,Nt),e(Ke,At),e(te,Ft),e(te,Xe),e(Xe,Et),e(Et,rt),e(Et,es),e(Et,bt),e(bt,ve),e(ve,at),e(at,qt),e(ve,It),e(ve,nt),e(nt,ct),e(bt,Yt),e(bt,yt),e(yt,Dt),e(Dt,Qt),e(Qt,Ut),e(Xe,Ot),e(Xe,Jt),e(Jt,Lt),e(Xe,Rt),e(Xe,wt),e(pe,ls),e(pe,Kt),e(Kt,it),e(it,Zt),e(Zt,is),e(Zt,W),e(Zt,ms),e(ms,kt),e(kt,ds),e(ds,ss),e(kt,os),e(kt,tr),e(tr,Cr),e(ms,rs),e(ms,us),e(us,cr),e(cr,Ss),e(Ss,Ws),e(it,Xt),e(it,xs),e(xs,Ts),e(it,Mr),e(it,Dr),e(Kt,sr),e(Kt,Es),e(Es,dr),e(dr,fs),e(dr,ta),e(dr,Gr),e(Gr,as),e(as,As),e(As,Sn),e(as,jr),e(as,Fs),e(Fs,Tn),e(Es,Nr),e(Es,ns),e(ns,Vr),e(Es,Ys),e(Es,bs),e(pe,wa),e(pe,kr),e(kr,Wt),e(Wt,rr),e(rr,ur),e(rr,pr),e(rr,Br),e(Br,Is),e(Is,ys),e(ys,cl),e(Is,fi),e(Is,sa),e(sa,cs),e(Wt,pi),e(Wt,qr),e(qr,ra),e(Wt,vi),e(Wt,dl),e(kr,vs),e(kr,Os),e(Os,Rr),e(Rr,Ya),e(Rr,vr),e(Rr,Sr),e(Sr,gr),e(gr,qs),e(qs,$r),e(gr,_a),e(gr,An),e(An,ul),e(Os,ar),e(Os,gs),e(gs,Ul),e(Os,gi),e(Os,ws),e(Ve,Fn),e(Ve,hr),e(hr,za),e(za,hi),e(Ve,mr),e(Ve,Ds),e(Ds,nr),e(nr,Ls),e(Ls,Rs),e(Rs,Hr),e(Rs,mi),e(Rs,xr),e(xr,zs),e(zs,Cs),e(Cs,Ur),e(zs,On),e(zs,Ln),e(Ln,Ja),e(xr,xi),e(xr,Ps),e(Ps,Ms),e(Ms,na),e(na,uo),e(Ps,bi),e(Ps,Cn),e(Cn,lr),e(lr,br),e(Ps,Tr),e(Ps,ir),e(ir,fl),e(fl,Wr),e(Ps,la),e(Ps,Ks),e(Ks,Xa),e(Xa,Yc),e(Ls,zc),e(Ls,ia),e(ia,yi),e(Ls,Yd),e(Ls,fo),e(nr,yr),e(nr,_s),e(_s,Mn),e(Mn,Gn),e(Mn,_i),e(Mn,Ei),e(Ei,Ea),e(Ea,wr),e(wr,po),e(Ea,Kc),e(Ea,oa),e(oa,jn),e(_s,Jc),e(_s,Ii),e(Ii,Ia),e(_s,Za),e(_s,Nn),e(Ds,vo),e(Ds,en),e(en,tn),e(tn,Da),e(Da,Gs),e(Da,go),e(Da,ca),e(ca,sn),e(sn,Va),e(Va,ka),e(sn,Wl),e(sn,Di),e(Di,Pi),e(ca,Yl),e(ca,Vi),e(Vi,Bn),e(Bn,_r),e(_r,rn),e(tn,qn),e(tn,an),e(an,sc),e(tn,Xc),e(tn,ho),e(en,da),e(en,js),e(js,Sa),e(Sa,ki),e(Sa,or),e(Sa,Ar),e(Ar,nn),e(nn,Si),e(Si,Ti),e(nn,ln),e(nn,on),e(on,zl),e(js,vl),e(js,Vs),e(Vs,Ta),e(js,Ai),e(js,Aa),e(u,Qc),e(u,Er),e(Er,Js),e(Js,gl),e(Er,Rn),e(Er,$s),e($s,Fa),e(Fa,Zc),e($s,hl),e($s,Xs),e(Xs,Fi),e(Xs,Yr),e(Xs,zr),e(Xs,ed),e(Xs,Kr)},p:We,i:We,o:We,d(dn){dn&&a(l)}}}class YE extends Vn{constructor(l){super(),kn(this,l,null,WE,Wa,{})}}function zE(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,O,k,A,M,G,b,C,_,q,F,L,j,Y,R,$,ge,ue,K,U,re,Oe,he,ze,we,ae,fe=" ",qe,Ee,de,$e,Le,N,Q,Ie,_e,Ce,me,ie,Z,tt,De,Se,ne,Re,Te,ee,Ne,Pe,He,Be,Me,xe,et,Qe,ot,P,B,H,z,X,oe,J,Ve,ke,le,be,Pt,pe,te,Ke,Ge,Ue,ye,Ye,vt,Ae,je,$t,Mt,Fe,_t,St,ce,ut,st,gt,mt,Gt,ft,Ht,Vt,se,ht,Tt,jt,pt,xt,Nt,At,Je,Ft,Xe,Et,rt,Bt,es,bt,ve,at,qt,It,nt,ct,Yt,yt,Dt,Qt,Ut,Ot,Jt,Lt,Rt,wt,Ns,ls,Kt,it,Zt,is,hs,W,ms,kt,ds,ss,os,tr,Cr,rs,us,cr,Ss,Ws,Xt,xs,Ts,Mr,Dr,Pr,sr,Es,dr,fs,ps,ta,Gr,as,As,Sn,jr,Fs,Tn,Nr,ns,Vr,Ys,bs,Bs,wa,kr,Wt,rr,ur,fr,pr,Br,Is,ys,cl,fi,sa,cs,pi,qr,ra,vi,dl,co,vs,Os,Rr,Ya,ts,vr,Sr,gr,qs,$r,_a,An,ul,ar,gs,Ul,gi,ws,aa,Fn,hr,za,hi,mr,Ds,nr,Ls,Rs,Hr,Ka,mi,xr,zs,Cs,Ur,On,Ln,Ja,xi,Ps,Ms,na,uo,bi,Cn,lr,br,Tr,ir,fl,Wr,la,Ks,Xa,Yc,zc,ia,yi=" ",Yd,fo,wi,yr,_s,Mn,Gn,Qa,_i,Ei,Ea,wr,po,Kc,oa,jn,Jc,Ii,Ia,Za,Nn,Zu,vo,en,tn,Da,Gs,Pa,go,ca,sn,Va,ka,Wl,Di,Pi,Yl,Vi,Bn,_r,rn,qn,an,sc,Xc,ho,pl,da,js,Sa,ki,zd,or,Ar,nn,Si,Ti,ln,on,zl,vl,Vs,Ta,Ai,Aa,rc,Qc,Er,Js,gl,Rn,$s,Fa,Zc,hl,Xs,Fi,Kd,Yr,zr,Jd,ed,Kr,cn,dn,ml,mo,Kl,Xd,ua,Qs,xl,$n,Oi,Li,fa,Hn,ef,Qd,xo,Zs,un,tf,Zd,ac,Un,fn,nc,eu,Ci,Oa,Wn,bl,bo,sf,Yn,yl,yo,wo,La,zn,pn,tu,lc,wl,ic,_l,Jl,Kn,Ca,_o,Mi,vn,El,Ma,Il,su,Xl,Jn,ru,Gi,Fr,gn,Ga,ji,Ql,Ni,rf,Eo,ja,Zl,Io,Dl,Xn,er,pa,Pl,af,au,va,Bi,Do,ei,ks,Na,Po,Vl,td,oc,Jr,hn,nu,cc,Xr,mn,qi,Vo,kl,dc,uc,ti,Sl,Ba,fc,lu,Qn,ga,xn,sd,Ri,pc,Tl,Al,si,iu,ri,Qr,ha,Fl,nf,ai,ko,Ol,bn,Ll,So,vc,Zn,ma,To,rd,yn,qa,ad,gc,wn,$i,ni,Zr,el,lf,Hi,xa,hc,mc,Ao,Ra,xc,bc,Fo,$a,li,tl,Oo,mg,Cv,sl,Cl,nd,xg,ld,ou,Mv,yc,Lo,Ir,Co,bg,Gv,of,cu,Mo,Go,yg,jv,cf,ii,wc,Ui,du,Nv,Wi,Ml,df,Bv,_n,Ha,Yi,_c,wg,id,jo,od,cd,_g,No,Ec,qv;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("div"),m=f("Green energy"),h=o(),I=s("div"),w=s("div"),V=s("div"),y=f("Power from waste"),D=o(),E=s("div"),O=f("Non-recycled waste is the ideal renewable energy source"),k=o(),A=s("div"),M=s("div"),G=s("div"),b=o(),C=s("div"),_=s("div"),q=s("div"),F=s("span"),L=f("Unlike solar and wind, it provides"),j=o(),Y=s("span"),R=f("continuous"),$=o(),ge=s("span"),ue=f("power 24/7"),K=o(),U=s("div"),re=s("div"),Oe=s("div"),he=s("div"),ze=o(),we=s("div"),ae=f("Using non-recycled waste"),qe=f(fe),Ee=o(),de=s("span"),$e=f("prevents it from polluting"),Le=f(`
                our soil, water, and atmosphere in uncontrolled ways`),N=o(),Q=s("div"),Ie=s("div"),_e=s("div"),Ce=s("div"),me=s("div"),ie=s("div"),Z=f("Power from waste"),tt=o(),De=s("div"),Se=f("Slurry covers for farms with livestock"),ne=o(),Re=s("div"),Te=s("div"),ee=s("div"),Ne=s("div"),Pe=s("div"),He=f("How it works"),Be=o(),Me=s("div"),xe=s("div"),et=f(`Covering slurry stores helps keep rain out while containing odorous gases like ammonia, which result from
                    microbial activity. Ammonia emissions from manure storage contribute 9% of the UK’s agricultural ammonia
                    emissions. By covering your slurry store, you can substantially reduce these emissions. Conventional slurry
                    store covers aren’t airtight like anaerobic digester covers, so gas escapes at a reduced rate compared to
                    open stores.
                    `),Qe=s("br"),ot=o(),P=s("br"),B=f(`
                    Slurry store covers can be impermeable or permeable, fixed or floating. Impermeable covers prevent rainwater
                    from entering, reducing slurry volume and increasing storage capacity. In areas with moderate to high rainfall,
                    these covers can be cost-effective.
                    `),H=s("br"),z=o(),X=s("br"),oe=f(`
                    Captured fugitive emissions can be converted into biomethane to power onsite tractors or be sold to the transport
                    industry.`),J=o(),Ve=s("div"),ke=s("div"),le=s("div"),be=s("img"),pe=o(),te=s("div"),Ke=f("Pros"),Ge=o(),Ue=s("div"),ye=s("ul"),Ye=s("li"),vt=f("Relatively low-cost and quick deployment."),Ae=o(),je=s("li"),$t=f("In some countries, like the UK, government grants may cover"),Mt=f(`
                      initial costs.
                      `),Fe=s("li"),_t=f("Effective in reducing emissions."),St=o(),ce=s("div"),ut=s("div"),st=s("img"),mt=o(),Gt=s("div"),ft=f("Cons"),Ht=o(),Vt=s("div"),se=s("ul"),ht=s("li"),Tt=f("Covers are not airtight, so some methane may still escape."),jt=o(),pt=s("li"),xt=f("If biogas cannot be used on site, finding an off-taker is necessary."),Nt=f(`
                      
                       `),At=o(),Je=s("div"),Ft=s("div"),Xe=s("div"),Et=s("div"),rt=s("div"),Bt=f("Power from waste"),es=o(),bt=s("div"),ve=f("Anaerobic digestion"),at=o(),qt=s("div"),It=s("div"),nt=s("div"),ct=s("div"),Yt=s("div"),yt=f("How it works"),Dt=o(),Qt=s("div"),Ut=s("div"),Ot=f(`Anaerobic digestion (AD) is a process where microorganisms break down biodegradable material without oxygen.
                    This produces biogas, which can be used for electricity, heat, renewable natural gas, or transportation
                    fuels. Various AD technologies convert diverse organic waste streams into biogas continuously.
                    `),Jt=s("br"),Lt=o(),Rt=s("br"),wt=f(`
                    Digested solids can be composted, used for bedding, applied to cropland, or made into other products. Nutrients
                    in the liquid stream serve as agricultural fertilizers. AD is applicable across the human food supply chain,
                    from farm animal waste to restaurant food waste. The scale can range from thousands of tonnes per annum to just
                    a few kilograms per day.`),Ns=o(),ls=s("div"),Kt=s("div"),it=s("div"),Zt=s("img"),hs=o(),W=s("div"),ms=f("Pros"),kt=o(),ds=s("div"),ss=s("ul"),os=s("li"),tr=f("Suitable for most parts of the human food supply chain, significantly reducing environmental impact."),Cr=o(),rs=s("li"),us=f("Smaller units for food waste are relatively affordable and usually don’t require planning consent."),cr=f(`
                       `),Ss=s("br"),Ws=f(" "),Xt=o(),xs=s("div"),Ts=s("div"),Mr=s("img"),Pr=o(),sr=s("div"),Es=f("Cons"),dr=o(),fs=s("div"),ps=s("ul"),ta=s("li"),Gr=f(`Larger units for sizable operations can be expensive, take 12-18 months from feasibility to operation,
                        and may face local objections due to odor.`),as=o(),As=s("li"),Sn=f("Bigger units require planning consent, necessitating expert support."),jr=o(),Fs=s("li"),Tn=f("We have partners who can help with this process."),Nr=o(),ns=s("div"),Vr=s("div"),Ys=s("div"),bs=s("div"),Bs=s("div"),wa=f("Power from waste"),kr=o(),Wt=s("div"),rr=f("Pyrolysis"),ur=o(),fr=s("div"),pr=s("div"),Br=s("div"),Is=s("div"),ys=s("div"),cl=f("How it works"),fi=o(),sa=s("div"),cs=s("div"),pi=f(`Pyrolysis is a thermochemical process applied to any organic material, involving chemical and physical
                    separation into different molecules at high temperatures and without oxygen. Unlike combustion and
                    gasification, which involve oxidation, pyrolysis is an endothermic process resulting in high-energy
                    products. `),qr=s("br"),ra=o(),vi=s("br"),dl=f(`
                    Pyrolysis products include solid (charcoal, biochar), liquid, and non-condensable gases (H2, CH4, CnHm, CO, CO2,
                    and N). In some applications, liquid and gas phases can be used together when supplying hot syngas directly to
                    a burner or oxidation chamber.
                    `),co=s("br"),vs=o(),Os=s("br"),Rr=f(`
                    During pyrolysis, materials are heated to a specific temperature inside a pyrolysis unit until the process is
                    complete. The chosen temperature influences the composition and yields of pyrolysis oil, syngas, and char.`),Ya=o(),ts=s("div"),vr=s("div"),Sr=s("div"),gr=s("img"),$r=o(),_a=s("div"),An=f("Pros"),ul=o(),ar=s("div"),gs=s("ul"),Ul=s("li"),gi=f("Versatile application across multiple industries: agriculture, energy, and transportation."),ws=o(),aa=s("li"),Fn=f("Carbon sequestration through biochar production, aiding in climate change mitigation."),hr=o(),za=s("li"),hi=f("Eco-friendly approach to managing organic waste, reducing landfill usage."),mr=o(),Ds=s("div"),nr=s("div"),Ls=s("img"),Hr=o(),Ka=s("div"),mi=f("Cons"),xr=o(),zs=s("div"),Cs=s("ul"),Ur=s("li"),On=f("High initial investment, especially for larger operations."),Ln=o(),Ja=s("li"),xi=f("Demand for technical expertise and skilled personnel."),Ps=o(),Ms=s("li"),na=f("Emission monitoring and management required to minimize environmental impacts."),uo=f(`
                       `),bi=s("br"),Cn=f(" "),lr=o(),br=s("div"),Tr=s("div"),ir=s("div"),fl=f("We see waste as a fuel opportunity "),Wr=s("br"),la=f(`
            – and it’s already yours!`),Ks=o(),Xa=s("div"),Yc=f(`Use our online tools to explore over 150 technology partners
            `),zc=s("br"),ia=f(`
            solutions and start your power-from-waste project`),Yd=f(yi),fo=o(),wi=s("div"),yr=s("div"),_s=s("div"),Mn=s("div"),Gn=s("div"),Qa=s("img"),Ei=o(),Ea=s("div"),wr=s("div"),po=s("div"),Kc=f("Exploration station"),oa=o(),jn=s("div"),Jc=f("Discover if your waste type is suitable for a project or learn more about power-from-waste"),Ii=o(),Ia=s("a"),Za=s("div"),Nn=s("img"),vo=o(),en=s("div"),tn=f("Explore the possibilities"),Da=o(),Gs=s("div"),Pa=s("img"),ca=o(),sn=s("div"),Va=s("div"),ka=s("div"),Wl=f("Calculator tool"),Di=o(),Pi=s("div"),Yl=f("Discover if your waste type is suitable for a project or learn more about power-from-waste"),Vi=o(),Bn=s("a"),_r=s("div"),rn=s("img"),an=o(),sc=s("div"),Xc=f("Calculate now"),ho=o(),pl=s("div"),da=s("div"),js=s("div"),Sa=s("img"),zd=o(),or=s("div"),Ar=s("div"),nn=f("Concerned about costs?"),Si=o(),Ti=s("div"),ln=f(`Even our larger projects have payback periods under five years, with some as low as two. After that, you
                    only cover the annual facility maintenance cost, with no grid or standing charges.`),on=o(),zl=s("div"),vl=s("div"),Vs=s("div"),Ta=s("div"),Ai=f("Other green energy sources"),Aa=o(),rc=s("div"),Qc=f("Different renewable energy sources can be combined to find the perfect solution for your project"),Er=o(),Js=s("div"),gl=s("div"),Rn=s("div"),$s=s("div"),Fa=s("div"),Zc=o(),hl=s("div"),Xs=s("div"),Fi=f("Solar power"),Kd=o(),Yr=s("div"),zr=s("div"),Jd=f(`Solar power converts the Sun’s photons into electricity through solar panels. It works in most locations and
                  has several benefits.`),ed=o(),Kr=s("button"),cn=s("img"),ml=o(),mo=s("img"),Xd=o(),ua=s("div"),Qs=s("div"),xl=s("div"),$n=s("div"),Oi=s("img"),fa=o(),Hn=s("div"),ef=f("Pros"),Qd=o(),xo=s("div"),Zs=s("ul"),un=s("li"),tf=f("Often cheaper than fossil fuels by 2023"),Zd=o(),ac=s("li"),Un=f("Environmentally friendly Low maintenance and long-lasting"),fn=o(),nc=s("li"),eu=f("Emissions-free during use"),Ci=o(),Oa=s("div"),Wn=s("div"),bl=s("img"),sf=o(),Yn=s("div"),yl=f("Cons"),yo=o(),wo=s("div"),La=s("ul"),zn=s("li"),pn=f("High initial costs"),tu=o(),lc=s("li"),wl=f("Intermittent power supply, requiring grid connection or battery storage"),ic=o(),_l=s("li"),Jl=f("Environmental impacts during production and disposal"),Kn=o(),Ca=s("li"),_o=f("Potential local resistance to solar farm installations near habitation"),Mi=o(),vn=s("div"),El=s("div"),Ma=s("div"),Il=s("div"),su=o(),Xl=s("div"),Jn=s("div"),ru=f("Wind power"),Gi=o(),Fr=s("div"),gn=s("div"),Ga=f("Wind power, also called “Eolic” energy, generates electricity using wind turbines."),ji=o(),Ql=s("button"),Ni=s("img"),Eo=o(),ja=s("img"),Io=o(),Dl=s("div"),Xn=s("div"),er=s("div"),pa=s("div"),Pl=s("img"),au=o(),va=s("div"),Bi=f("Pros"),Do=o(),ei=s("div"),ks=s("ul"),Na=s("li"),Po=f("Often cheaper than fossil fuels by 2023"),Vl=o(),td=s("li"),oc=f("Environmentally friendly Low maintenance and long-lasting"),Jr=o(),hn=s("li"),nu=f("Emissions-free during use"),cc=o(),Xr=s("div"),mn=s("div"),qi=s("img"),kl=o(),dc=s("div"),uc=f("Cons"),ti=o(),Sl=s("div"),Ba=s("ul"),fc=s("li"),lu=f("High initial costs"),Qn=o(),ga=s("li"),xn=f("Intermittent power supply, requiring grid connection or battery storage"),sd=o(),Ri=s("li"),pc=f("Environmental impacts during production and disposal"),Tl=o(),Al=s("li"),si=f("Potential local resistance to solar farm installations near habitation"),iu=o(),ri=s("div"),Qr=s("div"),ha=s("div"),Fl=s("div"),nf=o(),ai=s("div"),ko=s("div"),Ol=f("Energy storage"),bn=o(),Ll=s("div"),So=s("div"),vc=f("Energy storage is a crucial technology that allows us to store excess energy for future use."),Zn=o(),ma=s("button"),To=s("img"),yn=o(),qa=s("img"),gc=o(),wn=s("div"),$i=s("div"),ni=s("div"),Zr=s("div"),el=s("img"),Hi=o(),xa=s("div"),hc=f("Pros"),mc=o(),Ao=s("div"),Ra=s("ul"),xc=s("li"),bc=f("Often cheaper than fossil fuels by 2023"),Fo=o(),$a=s("li"),li=f("Environmentally friendly Low maintenance and long-lasting"),tl=o(),Oo=s("li"),mg=f("Emissions-free during use"),Cv=o(),sl=s("div"),Cl=s("div"),nd=s("img"),ld=o(),ou=s("div"),Mv=f("Cons"),yc=o(),Lo=s("div"),Ir=s("ul"),Co=s("li"),bg=f("High initial costs"),Gv=o(),of=s("li"),cu=f("Intermittent power supply, requiring grid connection or battery storage"),Mo=o(),Go=s("li"),yg=f("Environmental impacts during production and disposal"),jv=o(),cf=s("li"),ii=f("Potential local resistance to solar farm installations near habitation"),wc=o(),Ui=s("div"),du=s("div"),Nv=f("Copyright © 2023 Power for Planet"),Wi=o(),Ml=s("div"),df=s("div"),Bv=f("Privacy Policy"),_n=o(),Ha=s("div"),Yi=s("img"),wg=o(),id=s("img"),od=o(),cd=s("img"),No=o(),Ec=s("script"),qv=f(`function toggleElement(k) {
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
    }`),this.h()},l(uf){l=r(uf,"DIV",{class:!0});var Gl=n(l);i=r(Gl,"DIV",{class:!0});var ff=n(i);u=r(ff,"DIV",{class:!0});var uu=n(u);v=r(uu,"DIV",{class:!0});var dd=n(v);g=r(dd,"DIV",{class:!0});var pf=n(g);x=r(pf,"DIV",{});var Eg=n(x);m=p(Eg,"Green energy"),Eg.forEach(a),pf.forEach(a),dd.forEach(a),h=c(uu),I=r(uu,"DIV",{class:!0});var $p=n(I);w=r($p,"DIV",{class:!0});var Ig=n(w);V=r(Ig,"DIV",{class:!0});var ud=n(V);y=p(ud,"Power from waste"),ud.forEach(a),Ig.forEach(a),D=c($p),E=r($p,"DIV",{class:!0});var Ic=n(E);O=p(Ic,"Non-recycled waste is the ideal renewable energy source"),Ic.forEach(a),$p.forEach(a),k=c(uu),A=r(uu,"DIV",{class:!0});var Dc=n(A);M=r(Dc,"DIV",{class:!0});var Rv=n(M);G=r(Rv,"DIV",{class:!0}),n(G).forEach(a),b=c(Rv),C=r(Rv,"DIV",{class:!0});var Dg=n(C);_=r(Dg,"DIV",{class:!0});var Pg=n(_);q=r(Pg,"DIV",{class:!0});var jl=n(q);F=r(jl,"SPAN",{class:!0});var fu=n(F);L=p(fu,"Unlike solar and wind, it provides"),fu.forEach(a),j=c(jl),Y=r(jl,"SPAN",{class:!0});var lm=n(Y);R=p(lm,"continuous"),lm.forEach(a),$=c(jl),ge=r(jl,"SPAN",{class:!0});var Vg=n(ge);ue=p(Vg,"power 24/7"),Vg.forEach(a),jl.forEach(a),Pg.forEach(a),Dg.forEach(a),Rv.forEach(a),K=c(Dc),U=r(Dc,"DIV",{class:!0});var kg=n(U);re=r(kg,"DIV",{class:!0});var fd=n(re);Oe=r(fd,"DIV",{class:!0});var zi=n(Oe);he=r(zi,"DIV",{class:!0}),n(he).forEach(a),ze=c(zi),we=r(zi,"DIV",{class:!0});var Ki=n(we);ae=p(Ki,"Using non-recycled waste"),qe=p(Ki,fe),Ee=c(Ki),de=r(Ki,"SPAN",{class:!0});var im=n(de);$e=p(im,"prevents it from polluting"),im.forEach(a),Le=p(Ki,`
                our soil, water, and atmosphere in uncontrolled ways`),Ki.forEach(a),zi.forEach(a),fd.forEach(a),kg.forEach(a),Dc.forEach(a),uu.forEach(a),N=c(ff),Q=r(ff,"DIV",{class:!0});var Pc=n(Q);Ie=r(Pc,"DIV",{class:!0});var Hp=n(Ie);_e=r(Hp,"DIV",{class:!0});var Vc=n(_e);Ce=r(Vc,"DIV",{class:!0});var kc=n(Ce);me=r(kc,"DIV",{class:!0});var om=n(me);ie=r(om,"DIV",{class:!0});var Sg=n(ie);Z=p(Sg,"Power from waste"),Sg.forEach(a),om.forEach(a),tt=c(kc),De=r(kc,"DIV",{class:!0});var Tg=n(De);Se=p(Tg,"Slurry covers for farms with livestock"),Tg.forEach(a),kc.forEach(a),Vc.forEach(a),ne=c(Hp),Re=r(Hp,"DIV",{class:!0});var Bo=n(Re);Te=r(Bo,"DIV",{class:!0});var pu=n(Te);ee=r(pu,"DIV",{class:!0});var $v=n(ee);Ne=r($v,"DIV",{class:!0});var Up=n(Ne);Pe=r(Up,"DIV",{class:!0});var vu=n(Pe);He=p(vu,"How it works"),vu.forEach(a),Be=c(Up),Me=r(Up,"DIV",{class:!0});var gu=n(Me);xe=r(gu,"DIV",{class:!0});var Ji=n(xe);et=p(Ji,`Covering slurry stores helps keep rain out while containing odorous gases like ammonia, which result from
                    microbial activity. Ammonia emissions from manure storage contribute 9% of the UK’s agricultural ammonia
                    emissions. By covering your slurry store, you can substantially reduce these emissions. Conventional slurry
                    store covers aren’t airtight like anaerobic digester covers, so gas escapes at a reduced rate compared to
                    open stores.
                    `),Qe=r(Ji,"BR",{}),ot=c(Ji),P=r(Ji,"BR",{}),B=p(Ji,`
                    Slurry store covers can be impermeable or permeable, fixed or floating. Impermeable covers prevent rainwater
                    from entering, reducing slurry volume and increasing storage capacity. In areas with moderate to high rainfall,
                    these covers can be cost-effective.
                    `),H=r(Ji,"BR",{}),z=c(Ji),X=r(Ji,"BR",{}),oe=p(Ji,`
                    Captured fugitive emissions can be converted into biomethane to power onsite tractors or be sold to the transport
                    industry.`),Ji.forEach(a),gu.forEach(a),Up.forEach(a),J=c($v),Ve=r($v,"DIV",{class:!0});var Wp=n(Ve);ke=r(Wp,"DIV",{class:!0});var Sc=n(ke);le=r(Sc,"DIV",{class:!0});var Hv=n(le);be=r(Hv,"IMG",{src:!0,alt:!0,class:!0}),pe=c(Hv),te=r(Hv,"DIV",{class:!0});var Ag=n(te);Ke=p(Ag,"Pros"),Ag.forEach(a),Hv.forEach(a),Ge=c(Sc),Ue=r(Sc,"DIV",{class:!0});var Tc=n(Ue);ye=r(Tc,"UL",{class:!0});var qo=n(ye);Ye=r(qo,"LI",{});var Fg=n(Ye);vt=p(Fg,"Relatively low-cost and quick deployment."),Fg.forEach(a),Ae=c(qo),je=r(qo,"LI",{});var Og=n(je);$t=p(Og,"In some countries, like the UK, government grants may cover"),Og.forEach(a),Mt=p(qo,`
                      initial costs.
                      `),Fe=r(qo,"LI",{});var pd=n(Fe);_t=p(pd,"Effective in reducing emissions."),pd.forEach(a),qo.forEach(a),Tc.forEach(a),Sc.forEach(a),St=c(Wp),ce=r(Wp,"DIV",{class:!0});var hu=n(ce);ut=r(hu,"DIV",{class:!0});var Yp=n(ut);st=r(Yp,"IMG",{src:!0,alt:!0,class:!0}),mt=c(Yp),Gt=r(Yp,"DIV",{class:!0});var Lg=n(Gt);ft=p(Lg,"Cons"),Lg.forEach(a),Yp.forEach(a),Ht=c(hu),Vt=r(hu,"DIV",{class:!0});var zp=n(Vt);se=r(zp,"UL",{class:!0});var vf=n(se);ht=r(vf,"LI",{});var Cg=n(ht);Tt=p(Cg,"Covers are not airtight, so some methane may still escape."),Cg.forEach(a),jt=c(vf),pt=r(vf,"LI",{});var gf=n(pt);xt=p(gf,"If biogas cannot be used on site, finding an off-taker is necessary."),gf.forEach(a),Nt=p(vf,`
                      
                       `),vf.forEach(a),zp.forEach(a),hu.forEach(a),Wp.forEach(a),$v.forEach(a),pu.forEach(a),Bo.forEach(a),Hp.forEach(a),At=c(Pc),Je=r(Pc,"DIV",{class:!0});var Ro=n(Je);Ft=r(Ro,"DIV",{class:!0});var vd=n(Ft);Xe=r(vd,"DIV",{class:!0});var gd=n(Xe);Et=r(gd,"DIV",{class:!0});var mu=n(Et);rt=r(mu,"DIV",{class:!0});var cm=n(rt);Bt=p(cm,"Power from waste"),cm.forEach(a),mu.forEach(a),es=c(gd),bt=r(gd,"DIV",{class:!0});var Mg=n(bt);ve=p(Mg,"Anaerobic digestion"),Mg.forEach(a),gd.forEach(a),vd.forEach(a),at=c(Ro),qt=r(Ro,"DIV",{class:!0});var hd=n(qt);It=r(hd,"DIV",{class:!0});var xu=n(It);nt=r(xu,"DIV",{class:!0});var Kp=n(nt);ct=r(Kp,"DIV",{class:!0});var Jp=n(ct);Yt=r(Jp,"DIV",{class:!0});var bu=n(Yt);yt=p(bu,"How it works"),bu.forEach(a),Dt=c(Jp),Qt=r(Jp,"DIV",{class:!0});var Gg=n(Qt);Ut=r(Gg,"DIV",{class:!0});var yu=n(Ut);Ot=p(yu,`Anaerobic digestion (AD) is a process where microorganisms break down biodegradable material without oxygen.
                    This produces biogas, which can be used for electricity, heat, renewable natural gas, or transportation
                    fuels. Various AD technologies convert diverse organic waste streams into biogas continuously.
                    `),Jt=r(yu,"BR",{}),Lt=c(yu),Rt=r(yu,"BR",{}),wt=p(yu,`
                    Digested solids can be composted, used for bedding, applied to cropland, or made into other products. Nutrients
                    in the liquid stream serve as agricultural fertilizers. AD is applicable across the human food supply chain,
                    from farm animal waste to restaurant food waste. The scale can range from thousands of tonnes per annum to just
                    a few kilograms per day.`),yu.forEach(a),Gg.forEach(a),Jp.forEach(a),Ns=c(Kp),ls=r(Kp,"DIV",{class:!0});var $o=n(ls);Kt=r($o,"DIV",{class:!0});var md=n(Kt);it=r(md,"DIV",{class:!0});var oi=n(it);Zt=r(oi,"IMG",{src:!0,alt:!0,class:!0}),hs=c(oi),W=r(oi,"DIV",{class:!0});var wu=n(W);ms=p(wu,"Pros"),wu.forEach(a),oi.forEach(a),kt=c(md),ds=r(md,"DIV",{class:!0});var dm=n(ds);ss=r(dm,"UL",{class:!0});var xd=n(ss);os=r(xd,"LI",{});var jg=n(os);tr=p(jg,"Suitable for most parts of the human food supply chain, significantly reducing environmental impact."),jg.forEach(a),Cr=c(xd),rs=r(xd,"LI",{});var hf=n(rs);us=p(hf,"Smaller units for food waste are relatively affordable and usually don’t require planning consent."),hf.forEach(a),cr=p(xd,`
                       `),Ss=r(xd,"BR",{}),Ws=p(xd," "),xd.forEach(a),dm.forEach(a),md.forEach(a),Xt=c($o),xs=r($o,"DIV",{class:!0});var Xi=n(xs);Ts=r(Xi,"DIV",{class:!0});var Ac=n(Ts);Mr=r(Ac,"IMG",{src:!0,alt:!0,class:!0}),Pr=c(Ac),sr=r(Ac,"DIV",{class:!0});var um=n(sr);Es=p(um,"Cons"),um.forEach(a),Ac.forEach(a),dr=c(Xi),fs=r(Xi,"DIV",{class:!0});var Ng=n(fs);ps=r(Ng,"UL",{class:!0});var _u=n(ps);ta=r(_u,"LI",{});var Nl=n(ta);Gr=p(Nl,`Larger units for sizable operations can be expensive, take 12-18 months from feasibility to operation,
                        and may face local objections due to odor.`),Nl.forEach(a),as=c(_u),As=r(_u,"LI",{});var Bg=n(As);Sn=p(Bg,"Bigger units require planning consent, necessitating expert support."),Bg.forEach(a),jr=c(_u),Fs=r(_u,"LI",{});var mf=n(Fs);Tn=p(mf,"We have partners who can help with this process."),mf.forEach(a),_u.forEach(a),Ng.forEach(a),Xi.forEach(a),$o.forEach(a),Kp.forEach(a),xu.forEach(a),hd.forEach(a),Ro.forEach(a),Nr=c(Pc),ns=r(Pc,"DIV",{class:!0});var ci=n(ns);Vr=r(ci,"DIV",{class:!0});var Fc=n(Vr);Ys=r(Fc,"DIV",{class:!0});var Or=n(Ys);bs=r(Or,"DIV",{class:!0});var Qi=n(bs);Bs=r(Qi,"DIV",{class:!0});var Eu=n(Bs);wa=p(Eu,"Power from waste"),Eu.forEach(a),Qi.forEach(a),kr=c(Or),Wt=r(Or,"DIV",{class:!0});var fm=n(Wt);rr=p(fm,"Pyrolysis"),fm.forEach(a),Or.forEach(a),Fc.forEach(a),ur=c(ci),fr=r(ci,"DIV",{class:!0});var qg=n(fr);pr=r(qg,"DIV",{class:!0});var Zi=n(pr);Br=r(Zi,"DIV",{class:!0});var Oc=n(Br);Is=r(Oc,"DIV",{class:!0});var Uv=n(Is);ys=r(Uv,"DIV",{class:!0});var Rg=n(ys);cl=p(Rg,"How it works"),Rg.forEach(a),fi=c(Uv),sa=r(Uv,"DIV",{class:!0});var eo=n(sa);cs=r(eo,"DIV",{class:!0});var En=n(cs);pi=p(En,`Pyrolysis is a thermochemical process applied to any organic material, involving chemical and physical
                    separation into different molecules at high temperatures and without oxygen. Unlike combustion and
                    gasification, which involve oxidation, pyrolysis is an endothermic process resulting in high-energy
                    products. `),qr=r(En,"BR",{}),ra=c(En),vi=r(En,"BR",{}),dl=p(En,`
                    Pyrolysis products include solid (charcoal, biochar), liquid, and non-condensable gases (H2, CH4, CnHm, CO, CO2,
                    and N). In some applications, liquid and gas phases can be used together when supplying hot syngas directly to
                    a burner or oxidation chamber.
                    `),co=r(En,"BR",{}),vs=c(En),Os=r(En,"BR",{}),Rr=p(En,`
                    During pyrolysis, materials are heated to a specific temperature inside a pyrolysis unit until the process is
                    complete. The chosen temperature influences the composition and yields of pyrolysis oil, syngas, and char.`),En.forEach(a),eo.forEach(a),Uv.forEach(a),Ya=c(Oc),ts=r(Oc,"DIV",{class:!0});var Wv=n(ts);vr=r(Wv,"DIV",{class:!0});var Xp=n(vr);Sr=r(Xp,"DIV",{class:!0});var rl=n(Sr);gr=r(rl,"IMG",{src:!0,alt:!0,class:!0}),$r=c(rl),_a=r(rl,"DIV",{class:!0});var bd=n(_a);An=p(bd,"Pros"),bd.forEach(a),rl.forEach(a),ul=c(Xp),ar=r(Xp,"DIV",{class:!0});var $g=n(ar);gs=r($g,"UL",{class:!0});var Iu=n(gs);Ul=r(Iu,"LI",{});var Qp=n(Ul);gi=p(Qp,"Versatile application across multiple industries: agriculture, energy, and transportation."),Qp.forEach(a),ws=c(Iu),aa=r(Iu,"LI",{});var Hg=n(aa);Fn=p(Hg,"Carbon sequestration through biochar production, aiding in climate change mitigation."),Hg.forEach(a),hr=c(Iu),za=r(Iu,"LI",{});var Ug=n(za);hi=p(Ug,"Eco-friendly approach to managing organic waste, reducing landfill usage."),Ug.forEach(a),Iu.forEach(a),$g.forEach(a),Xp.forEach(a),mr=c(Wv),Ds=r(Wv,"DIV",{class:!0});var Du=n(Ds);nr=r(Du,"DIV",{class:!0});var Zp=n(nr);Ls=r(Zp,"IMG",{src:!0,alt:!0,class:!0}),Hr=c(Zp),Ka=r(Zp,"DIV",{class:!0});var Wg=n(Ka);mi=p(Wg,"Cons"),Wg.forEach(a),Zp.forEach(a),xr=c(Du),zs=r(Du,"DIV",{class:!0});var ev=n(zs);Cs=r(ev,"UL",{class:!0});var Ho=n(Cs);Ur=r(Ho,"LI",{});var Yg=n(Ur);On=p(Yg,"High initial investment, especially for larger operations."),Yg.forEach(a),Ln=c(Ho),Ja=r(Ho,"LI",{});var Bl=n(Ja);xi=p(Bl,"Demand for technical expertise and skilled personnel."),Bl.forEach(a),Ps=c(Ho),Ms=r(Ho,"LI",{});var yd=n(Ms);na=p(yd,"Emission monitoring and management required to minimize environmental impacts."),yd.forEach(a),uo=p(Ho,`
                       `),bi=r(Ho,"BR",{}),Cn=p(Ho," "),Ho.forEach(a),ev.forEach(a),Du.forEach(a),Wv.forEach(a),Oc.forEach(a),Zi.forEach(a),qg.forEach(a),ci.forEach(a),lr=c(Pc),br=r(Pc,"DIV",{class:!0});var wd=n(br);Tr=r(wd,"DIV",{class:!0});var tv=n(Tr);ir=r(tv,"DIV",{class:!0});var Lc=n(ir);fl=p(Lc,"We see waste as a fuel opportunity "),Wr=r(Lc,"BR",{}),la=p(Lc,`
            – and it’s already yours!`),Lc.forEach(a),Ks=c(tv),Xa=r(tv,"DIV",{class:!0});var _d=n(Xa);Yc=p(_d,`Use our online tools to explore over 150 technology partners
            `),zc=r(_d,"BR",{}),ia=p(_d,`
            solutions and start your power-from-waste project`),Yd=p(_d,yi),_d.forEach(a),tv.forEach(a),fo=c(wd),wi=r(wd,"DIV",{});var sv=n(wi);yr=r(sv,"DIV",{class:!0});var to=n(yr);_s=r(to,"DIV",{class:!0});var ql=n(_s);Mn=r(ql,"DIV",{});var pm=n(Mn);Gn=r(pm,"DIV",{});var zg=n(Gn);Qa=r(zg,"IMG",{src:!0,alt:!0,class:!0}),zg.forEach(a),pm.forEach(a),Ei=c(ql),Ea=r(ql,"DIV",{class:!0});var so=n(Ea);wr=r(so,"DIV",{class:!0});var Ed=n(wr);po=r(Ed,"DIV",{class:!0});var Id=n(po);Kc=p(Id,"Exploration station"),Id.forEach(a),oa=c(Ed),jn=r(Ed,"DIV",{class:!0});var xf=n(jn);Jc=p(xf,"Discover if your waste type is suitable for a project or learn more about power-from-waste"),xf.forEach(a),Ed.forEach(a),so.forEach(a),Ii=c(ql),Ia=r(ql,"A",{href:!0});var Pu=n(Ia);Za=r(Pu,"DIV",{class:!0});var Yv=n(Za);Nn=r(Yv,"IMG",{src:!0,alt:!0,class:!0}),vo=c(Yv),en=r(Yv,"DIV",{});var Kg=n(en);tn=p(Kg,"Explore the possibilities"),Kg.forEach(a),Yv.forEach(a),Pu.forEach(a),ql.forEach(a),Da=c(to),Gs=r(to,"DIV",{class:!0});var Ua=n(Gs);Pa=r(Ua,"IMG",{class:!0,alt:!0,src:!0}),ca=c(Ua),sn=r(Ua,"DIV",{class:!0});var rv=n(sn);Va=r(rv,"DIV",{class:!0});var av=n(Va);ka=r(av,"DIV",{class:!0});var Jg=n(ka);Wl=p(Jg,"Calculator tool"),Jg.forEach(a),Di=c(av),Pi=r(av,"DIV",{class:!0});var Vu=n(Pi);Yl=p(Vu,"Discover if your waste type is suitable for a project or learn more about power-from-waste"),Vu.forEach(a),av.forEach(a),rv.forEach(a),Vi=c(Ua),Bn=r(Ua,"A",{href:!0});var Xg=n(Bn);_r=r(Xg,"DIV",{class:!0});var nv=n(_r);rn=r(nv,"IMG",{src:!0,alt:!0,class:!0}),an=c(nv),sc=r(nv,"DIV",{});var Cc=n(sc);Xc=p(Cc,"Calculate now"),Cc.forEach(a),nv.forEach(a),Xg.forEach(a),Ua.forEach(a),to.forEach(a),ho=c(sv),pl=r(sv,"DIV",{class:!0});var Qg=n(pl);da=r(Qg,"DIV",{class:!0});var Zg=n(da);js=r(Zg,"DIV",{class:!0});var lv=n(js);Sa=r(lv,"IMG",{src:!0,alt:!0,class:!0}),zd=c(lv),or=r(lv,"DIV",{class:!0});var iv=n(or);Ar=r(iv,"DIV",{class:!0});var ku=n(Ar);nn=p(ku,"Concerned about costs?"),ku.forEach(a),Si=c(iv),Ti=r(iv,"DIV",{class:!0});var eh=n(Ti);ln=p(eh,`Even our larger projects have payback periods under five years, with some as low as two. After that, you
                    only cover the annual facility maintenance cost, with no grid or standing charges.`),eh.forEach(a),iv.forEach(a),lv.forEach(a),Zg.forEach(a),Qg.forEach(a),sv.forEach(a),wd.forEach(a),Pc.forEach(a),on=c(ff),zl=r(ff,"DIV",{class:!0});var ov=n(zl);vl=r(ov,"DIV",{class:!0});var In=n(vl);Vs=r(In,"DIV",{class:!0});var th=n(Vs);Ta=r(th,"DIV",{class:!0});var Rl=n(Ta);Ai=p(Rl,"Other green energy sources"),Rl.forEach(a),th.forEach(a),Aa=c(In),rc=r(In,"DIV",{class:!0});var sh=n(rc);Qc=p(sh,"Different renewable energy sources can be combined to find the perfect solution for your project"),sh.forEach(a),In.forEach(a),Er=c(ov),Js=r(ov,"DIV",{class:!0});var ro=n(Js);gl=r(ro,"DIV",{class:!0});var Uo=n(gl);Rn=r(Uo,"DIV",{class:!0,id:!0});var ao=n(Rn);$s=r(ao,"DIV",{class:!0,id:!0});var Dd=n($s);Fa=r(Dd,"DIV",{class:!0}),n(Fa).forEach(a),Dd.forEach(a),Zc=c(ao),hl=r(ao,"DIV",{class:!0});var Pd=n(hl);Xs=r(Pd,"DIV",{class:!0});var rh=n(Xs);Fi=p(rh,"Solar power"),rh.forEach(a),Kd=c(Pd),Yr=r(Pd,"DIV",{class:!0});var cv=n(Yr);zr=r(cv,"DIV",{class:!0});var no=n(zr);Jd=p(no,`Solar power converts the Sun’s photons into electricity through solar panels. It works in most locations and
                  has several benefits.`),no.forEach(a),ed=c(cv),Kr=r(cv,"BUTTON",{onclick:!0,href:!0});var Vd=n(Kr);cn=r(Vd,"IMG",{id:!0,src:!0}),ml=c(Vd),mo=r(Vd,"IMG",{id:!0,class:!0,src:!0}),Vd.forEach(a),cv.forEach(a),Pd.forEach(a),ao.forEach(a),Xd=c(Uo),ua=r(Uo,"DIV",{id:!0,class:!0});var ah=n(ua);Qs=r(ah,"DIV",{class:!0});var dv=n(Qs);xl=r(dv,"DIV",{class:!0});var uv=n(xl);$n=r(uv,"DIV",{class:!0});var fv=n($n);Oi=r(fv,"IMG",{src:!0,alt:!0,class:!0}),fa=c(fv),Hn=r(fv,"DIV",{class:!0});var bf=n(Hn);ef=p(bf,"Pros"),bf.forEach(a),fv.forEach(a),Qd=c(uv),xo=r(uv,"DIV",{class:!0});var nh=n(xo);Zs=r(nh,"UL",{class:!0});var Su=n(Zs);un=r(Su,"LI",{});var lh=n(un);tf=p(lh,"Often cheaper than fossil fuels by 2023"),lh.forEach(a),Zd=c(Su),ac=r(Su,"LI",{});var kd=n(ac);Un=p(kd,"Environmentally friendly Low maintenance and long-lasting"),kd.forEach(a),fn=c(Su),nc=r(Su,"LI",{});var yf=n(nc);eu=p(yf,"Emissions-free during use"),yf.forEach(a),Su.forEach(a),nh.forEach(a),uv.forEach(a),Ci=c(dv),Oa=r(dv,"DIV",{class:!0});var Wo=n(Oa);Wn=r(Wo,"DIV",{class:!0});var zv=n(Wn);bl=r(zv,"IMG",{src:!0,alt:!0,class:!0}),sf=c(zv),Yn=r(zv,"DIV",{class:!0});var ih=n(Yn);yl=p(ih,"Cons"),ih.forEach(a),zv.forEach(a),yo=c(Wo),wo=r(Wo,"DIV",{class:!0});var Sd=n(wo);La=r(Sd,"UL",{class:!0});var di=n(La);zn=r(di,"LI",{});var oh=n(zn);pn=p(oh,"High initial costs"),oh.forEach(a),tu=c(di),lc=r(di,"LI",{});var ch=n(lc);wl=p(ch,"Intermittent power supply, requiring grid connection or battery storage"),ch.forEach(a),ic=c(di),_l=r(di,"LI",{});var Tu=n(_l);Jl=p(Tu,"Environmental impacts during production and disposal"),Tu.forEach(a),Kn=c(di),Ca=r(di,"LI",{});var dh=n(Ca);_o=p(dh,"Potential local resistance to solar farm installations near habitation"),dh.forEach(a),di.forEach(a),Sd.forEach(a),Wo.forEach(a),dv.forEach(a),ah.forEach(a),Uo.forEach(a),Mi=c(ro),vn=r(ro,"DIV",{class:!0});var pv=n(vn);El=r(pv,"DIV",{class:!0,id:!0});var ea=n(El);Ma=r(ea,"DIV",{class:!0,id:!0});var Td=n(Ma);Il=r(Td,"DIV",{class:!0}),n(Il).forEach(a),Td.forEach(a),su=c(ea),Xl=r(ea,"DIV",{class:!0});var Yo=n(Xl);Jn=r(Yo,"DIV",{class:!0});var uh=n(Jn);ru=p(uh,"Wind power"),uh.forEach(a),Gi=c(Yo),Fr=r(Yo,"DIV",{class:!0});var Mc=n(Fr);gn=r(Mc,"DIV",{class:!0});var vm=n(gn);Ga=p(vm,"Wind power, also called “Eolic” energy, generates electricity using wind turbines."),vm.forEach(a),ji=c(Mc),Ql=r(Mc,"BUTTON",{onclick:!0,href:!0});var vv=n(Ql);Ni=r(vv,"IMG",{id:!0,class:!0,src:!0}),Eo=c(vv),ja=r(vv,"IMG",{id:!0,src:!0}),vv.forEach(a),Mc.forEach(a),Yo.forEach(a),ea.forEach(a),Io=c(pv),Dl=r(pv,"DIV",{id:!0,class:!0});var Ad=n(Dl);Xn=r(Ad,"DIV",{class:!0});var Fd=n(Xn);er=r(Fd,"DIV",{class:!0});var gv=n(er);pa=r(gv,"DIV",{class:!0});var hv=n(pa);Pl=r(hv,"IMG",{src:!0,alt:!0,class:!0}),au=c(hv),va=r(hv,"DIV",{class:!0});var wf=n(va);Bi=p(wf,"Pros"),wf.forEach(a),hv.forEach(a),Do=c(gv),ei=r(gv,"DIV",{class:!0});var fh=n(ei);ks=r(fh,"UL",{class:!0});var Au=n(ks);Na=r(Au,"LI",{});var Od=n(Na);Po=p(Od,"Often cheaper than fossil fuels by 2023"),Od.forEach(a),Vl=c(Au),td=r(Au,"LI",{});var Ld=n(td);oc=p(Ld,"Environmentally friendly Low maintenance and long-lasting"),Ld.forEach(a),Jr=c(Au),hn=r(Au,"LI",{});var ph=n(hn);nu=p(ph,"Emissions-free during use"),ph.forEach(a),Au.forEach(a),fh.forEach(a),gv.forEach(a),cc=c(Fd),Xr=r(Fd,"DIV",{class:!0});var Gc=n(Xr);mn=r(Gc,"DIV",{class:!0});var Kv=n(mn);qi=r(Kv,"IMG",{src:!0,alt:!0,class:!0}),kl=c(Kv),dc=r(Kv,"DIV",{class:!0});var vh=n(dc);uc=p(vh,"Cons"),vh.forEach(a),Kv.forEach(a),ti=c(Gc),Sl=r(Gc,"DIV",{class:!0});var Fu=n(Sl);Ba=r(Fu,"UL",{class:!0});var ui=n(Ba);fc=r(ui,"LI",{});var gh=n(fc);lu=p(gh,"High initial costs"),gh.forEach(a),Qn=c(ui),ga=r(ui,"LI",{});var hh=n(ga);xn=p(hh,"Intermittent power supply, requiring grid connection or battery storage"),hh.forEach(a),sd=c(ui),Ri=r(ui,"LI",{});var mh=n(Ri);pc=p(mh,"Environmental impacts during production and disposal"),mh.forEach(a),Tl=c(ui),Al=r(ui,"LI",{});var Cd=n(Al);si=p(Cd,"Potential local resistance to solar farm installations near habitation"),Cd.forEach(a),ui.forEach(a),Fu.forEach(a),Gc.forEach(a),Fd.forEach(a),Ad.forEach(a),pv.forEach(a),iu=c(ro),ri=r(ro,"DIV",{class:!0});var zo=n(ri);Qr=r(zo,"DIV",{class:!0,id:!0});var mv=n(Qr);ha=r(mv,"DIV",{class:!0,id:!0});var Ou=n(ha);Fl=r(Ou,"DIV",{class:!0}),n(Fl).forEach(a),Ou.forEach(a),nf=c(mv),ai=r(mv,"DIV",{class:!0});var Jv=n(ai);ko=r(Jv,"DIV",{class:!0});var xh=n(ko);Ol=p(xh,"Energy storage"),xh.forEach(a),bn=c(Jv),Ll=r(Jv,"DIV",{class:!0});var Ko=n(Ll);So=r(Ko,"DIV",{class:!0});var bh=n(So);vc=p(bh,"Energy storage is a crucial technology that allows us to store excess energy for future use."),bh.forEach(a),Zn=c(Ko),ma=r(Ko,"BUTTON",{onclick:!0,href:!0});var Md=n(ma);To=r(Md,"IMG",{id:!0,src:!0,class:!0}),yn=c(Md),qa=r(Md,"IMG",{id:!0,src:!0}),Md.forEach(a),Ko.forEach(a),Jv.forEach(a),mv.forEach(a),gc=c(zo),wn=r(zo,"DIV",{id:!0,class:!0});var yh=n(wn);$i=r(yh,"DIV",{class:!0});var xv=n($i);ni=r(xv,"DIV",{class:!0});var bv=n(ni);Zr=r(bv,"DIV",{class:!0});var Jo=n(Zr);el=r(Jo,"IMG",{src:!0,alt:!0,class:!0}),Hi=c(Jo),xa=r(Jo,"DIV",{class:!0});var Gd=n(xa);hc=p(Gd,"Pros"),Gd.forEach(a),Jo.forEach(a),mc=c(bv),Ao=r(bv,"DIV",{class:!0});var wh=n(Ao);Ra=r(wh,"UL",{class:!0});var lo=n(Ra);xc=r(lo,"LI",{});var gm=n(xc);bc=p(gm,"Often cheaper than fossil fuels by 2023"),gm.forEach(a),Fo=c(lo),$a=r(lo,"LI",{});var _h=n($a);li=p(_h,"Environmentally friendly Low maintenance and long-lasting"),_h.forEach(a),tl=c(lo),Oo=r(lo,"LI",{});var Lu=n(Oo);mg=p(Lu,"Emissions-free during use"),Lu.forEach(a),lo.forEach(a),wh.forEach(a),bv.forEach(a),Cv=c(xv),sl=r(xv,"DIV",{class:!0});var jd=n(sl);Cl=r(jd,"DIV",{class:!0});var yv=n(Cl);nd=r(yv,"IMG",{src:!0,alt:!0,class:!0}),ld=c(yv),ou=r(yv,"DIV",{class:!0});var Eh=n(ou);Mv=p(Eh,"Cons"),Eh.forEach(a),yv.forEach(a),yc=c(jd),Lo=r(jd,"DIV",{class:!0});var Ih=n(Lo);Ir=r(Ih,"UL",{class:!0});var al=n(Ir);Co=r(al,"LI",{});var Nd=n(Co);bg=p(Nd,"High initial costs"),Nd.forEach(a),Gv=c(al),of=r(al,"LI",{});var Dh=n(of);cu=p(Dh,"Intermittent power supply, requiring grid connection or battery storage"),Dh.forEach(a),Mo=c(al),Go=r(al,"LI",{});var Cu=n(Go);yg=p(Cu,"Environmental impacts during production and disposal"),Cu.forEach(a),jv=c(al),cf=r(al,"LI",{});var hm=n(cf);ii=p(hm,"Potential local resistance to solar farm installations near habitation"),hm.forEach(a),al.forEach(a),Ih.forEach(a),jd.forEach(a),xv.forEach(a),yh.forEach(a),zo.forEach(a),ro.forEach(a),ov.forEach(a),ff.forEach(a),wc=c(Gl),Ui=r(Gl,"DIV",{class:!0});var wv=n(Ui);du=r(wv,"DIV",{class:!0});var Bd=n(du);Nv=p(Bd,"Copyright © 2023 Power for Planet"),Bd.forEach(a),Wi=c(wv),Ml=r(wv,"DIV",{class:!0});var _v=n(Ml);df=r(_v,"DIV",{class:!0});var _f=n(df);Bv=p(_f,"Privacy Policy"),_f.forEach(a),_n=c(_v),Ha=r(_v,"DIV",{class:!0});var Mu=n(Ha);Yi=r(Mu,"IMG",{src:!0,alt:!0,class:!0}),wg=c(Mu),id=r(Mu,"IMG",{src:!0,alt:!0,class:!0}),od=c(Mu),cd=r(Mu,"IMG",{src:!0,alt:!0,class:!0}),Mu.forEach(a),_v.forEach(a),wv.forEach(a),No=c(Gl),Ec=r(Gl,"SCRIPT",{});var Ph=n(Ec);qv=p(Ph,`function toggleElement(k) {
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
    }`),Ph.forEach(a),Gl.forEach(a),this.h()},h(){t(g,"class","w-full flex-col flex justify-center items-center gap-2.5 text-[44px] leading-[46px] font-bold"),t(v,"class","bg-cover bg-center bg-[url('/assets/new/E2.jpg')] h-[240px] bg-[#2e3855] bg-blend-darken bg-opacity-[0.2] w-full flex-col h-2/5 flex justify-center items-center gap-5 px-[50px] py-10 rounded-[20px] text-center text-white font-Poppins"),t(V,"class","uppercase tracking-wider"),t(w,"class","bg-white flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-[#3f9378]"),t(E,"class","text-4xl leading-[46px] font-bold text-[#2e3855] h-[92px] w-[660px]"),t(I,"class","w-full flex-col flex items-center gap-5 text-center font-Poppins"),t(G,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(F,"class","font-bold text-xl leading-[34px] font-Poppins"),t(Y,"class","font-bold text-xl leading-[34px] text-[#3f9378] font-Poppins"),t(ge,"class","font-bold text-xl leading-[34px] font-Poppins"),t(q,"class","w-[440px]"),t(_,"class","w-full flex items-start gap-[18px]"),t(C,"class","w-full flex-col flex items-start gap-6 text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins"),t(M,"class","bg-white h-full flex-1 flex-col flex items-start gap-[18px] p-10 rounded-[20px]"),t(he,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(de,"class","font-bold text-xl leading-[34px] text-[#3f9378] font-Poppins"),t(we,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[440px]"),t(Oe,"class","w-full flex-col flex items-start gap-[18px]"),t(re,"class","w-full flex-col flex items-start gap-5"),t(U,"class","bg-white h-full flex-1 flex-col flex items-start gap-[60px] p-10 rounded-[20px]"),t(A,"class","w-full h-[208px] flex items-start gap-5"),t(u,"class","flex-col w-full flex items-start gap-10 rounded-[20px]"),t(ie,"class","uppercase tracking-wider"),t(me,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(De,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(Ce,"class","flex-col flex items-center gap-5"),t(_e,"class","bg-cover bg-[url('/assets/new/E3.jpg')] bg-blend-darken bg-center bg-[#2e3855] bg-opacity-[0.4] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(Pe,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(xe,"class","w-[700px]"),t(Me,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(Ne,"class","flex-col w-[700px] flex items-center gap-4"),S(be.src,Pt="/assets/new/badge-plus.svg")||t(be,"src",Pt),t(be,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Slurrycovers-31-Frame32-31-wrapper-31-03Greenenergy"),t(be,"class","h-6 w-6"),t(te,"class","uppercase"),t(le,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(ye,"class","list-disc"),t(Ue,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(ke,"class","flex-1 flex-col flex items-start gap-4 align-top"),S(st.src,gt="/assets/new/badge-minus.svg")||t(st,"src",gt),t(st,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Slurrycovers-31-Frame32-31-wrapper-31-03Greenenergy0"),t(st,"class","h-6 w-6"),t(Gt,"class","uppercase"),t(ut,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(se,"class","list-disc"),t(Vt,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(ce,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Ve,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(ee,"class","w-full flex-col flex justify-center items-center gap-10"),t(Te,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(Re,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(Ie,"class","w-full flex-col flex items-start"),t(rt,"class","uppercase tracking-wider"),t(Et,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(bt,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(Xe,"class","flex-col flex items-center gap-5"),t(Ft,"class","bg-cover bg-[url('/assets/new/E4.jpg')] bg-center bg-blend-darken bg-[#2e3855] bg-opacity-[0.4] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(Yt,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(Ut,"class","w-[700px]"),t(Qt,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(ct,"class","flex-col w-[700px] flex items-center gap-4"),S(Zt.src,is="/assets/new/badge-plus.svg")||t(Zt,"src",is),t(Zt,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Anaerobicdigestion-31-Frame32-31-wrapper-31-03Greenenergy"),t(Zt,"class","h-6 w-6"),t(W,"class","uppercase"),t(it,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(ss,"class","list-disc"),t(ds,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Kt,"class","flex-1 flex-col flex items-start gap-4"),S(Mr.src,Dr="/assets/new/badge-minus.svg")||t(Mr,"src",Dr),t(Mr,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Anaerobicdigestion-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Mr,"class","h-6 w-6"),t(sr,"class","uppercase"),t(Ts,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(ps,"class","list-disc"),t(fs,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(xs,"class","h-full flex-1 flex-col flex items-start gap-4"),t(ls,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(nt,"class","w-full flex-col flex justify-center items-center gap-10"),t(It,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(qt,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(Je,"class","w-full flex-col flex items-start"),t(Bs,"class","uppercase tracking-wider"),t(bs,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(Wt,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(Ys,"class","flex-col flex items-center gap-5"),t(Vr,"class","bg-cover bg-[url('/assets/new/E5.png')] bg-[center_top_400px] bg-blend-darken bg-[#2e3855] bg-opacity-[0.5] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(ys,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(cs,"class","w-[700px]"),t(sa,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(Is,"class","flex-col w-[700px] flex items-center gap-4"),S(gr.src,qs="/assets/new/badge-plus.svg")||t(gr,"src",qs),t(gr,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Pyrolysis-31-Frame32-31-wrapper-31-03Greenenergy"),t(gr,"class","h-6 w-6"),t(_a,"class","uppercase"),t(Sr,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(gs,"class","list-disc"),t(ar,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(vr,"class","flex-1 flex-col flex items-start gap-4"),S(Ls.src,Rs="/assets/new/badge-minus.svg")||t(Ls,"src",Rs),t(Ls,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Pyrolysis-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Ls,"class","h-6 w-6"),t(Ka,"class","uppercase"),t(nr,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Cs,"class","list-disc"),t(zs,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Ds,"class","h-full flex-1 flex-col flex items-start gap-4"),t(ts,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(Br,"class","w-full flex-col flex justify-center items-center gap-10"),t(pr,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(fr,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(ns,"class","w-full flex-col flex items-start"),t(ir,"class","text-3xl leading-[46px] font-bold font-Poppins"),t(Xa,"class","text-sm leading-[26px] font-light font-PublicSans w-[498px]"),t(Tr,"class","flex-col flex items-center gap-2 text-center text-[#2e3855]"),S(Qa.src,_i="/assets/new/E6.png")||t(Qa,"src",_i),t(Qa,"alt","Group7-31-Group21-31-img-31-Frame19-31-PFPtools-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),t(Qa,"class","h-[150px]"),t(po,"class","text-2xl leading-[33px] font-bold font-Poppins w-[390px]"),t(jn,"class","text-md leading-[26px] font-light font-PublicSans w-[390px]"),t(wr,"class","w-full flex-col flex items-start gap-2 text-center text-white"),t(Ea,"class","w-full flex-col flex items-center gap-3"),S(Nn.src,Zu="/assets/new/arrow-right-circle.svg")||t(Nn,"src",Zu),t(Nn,"alt","arrow-right-circle-31-CTA-31-ctas-31-Frame25-31-Frame24-31-Hero-31-wrapper-31-03Greenenergy"),t(Nn,"class","h-5 w-5"),t(Za,"class","bg-[#eb8b5a] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-white"),t(Ia,"href","/explore#map3"),t(_s,"class","bg-[#2e3855] flex-1 flex-col flex justify-center items-center gap-6 p-10 rounded-[20px]"),t(Pa,"class","object-cover h-[150px]"),t(Pa,"alt","calculator-31-Frame26-31-PFPtools-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),S(Pa.src,go="/assets/new/calc.png")||t(Pa,"src",go),t(ka,"class","text-2xl leading-[33px] font-bold font-Poppins w-[390px]"),t(Pi,"class","text-md leading-[26px] font-light font-PublicSans w-[390px]"),t(Va,"class","w-full flex-col flex items-start gap-2 text-center text-[#2e3855]"),t(sn,"class","w-full flex-col flex items-center gap-3"),S(rn.src,qn="/assets/new/arrow-right-circle.svg")||t(rn,"src",qn),t(rn,"alt","arrow-right-circle-31-CTA-31-ctas-31-Frame25-31-Frame24-31-Hero-31-wrapper-31-03Greenenergy"),t(rn,"class","h-5 w-5"),t(_r,"class","bg-[#eb8b5a] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-white"),t(Bn,"href","/explore#calculator3"),t(Gs,"class","bg-[#d0e6f2] flex-1 flex-col flex justify-center items-center gap-6 p-10 rounded-[20px]"),t(yr,"class","w-full flex items-start gap-5"),S(Sa.src,ki="/assets/new/costs.png")||t(Sa,"src",ki),t(Sa,"alt","illu-costs-31-Frame24-31-Frame18-31-costs-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),t(Sa,"class","h-[120px]"),t(Ar,"class","text-2xl leading-[33px] font-bold font-Poppins"),t(Ti,"class","text-md leading-[26px] font-light font-PublicSans"),t(or,"class","flex-col flex items-start gap-4"),t(js,"class","flex items-center gap-10"),t(da,"class","w-full flex-col flex justify-center items-center gap-[30px] text-[#2e3855]"),t(pl,"class","bg-[#e7f5f5] flex-col w-full flex items-start gap-10 px-10 pt-10 pb-[50px] rounded-[20px] mt-5"),t(br,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(Q,"class","w-full flex-col flex items-start gap-10"),t(Ta,"class","uppercase tracking-wider"),t(Vs,"class","bg-white flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-[#3f9378]"),t(rc,"class","text-4xl leading-[46px] font-bold text-[#2e3855] w-[700px]"),t(vl,"class","w-full flex-col flex items-center gap-4 pb-[50px] text-center font-Poppins"),t(Fa,"class","flex-col flex items-center gap-5"),t($s,"class","bg-cover bg-[url('/assets/new/E11.jpg')] bg-center flex-col h-[245px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-tl-[20px]"),t($s,"id","xsp1img"),t(Xs,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(zr,"class","w-[520px]"),t(cn,"id","xsp1a"),S(cn.src,dn="/assets/new/rl.png")||t(cn,"src",dn),t(mo,"id","xsp1b"),t(mo,"class","hidden"),S(mo.src,Kl="/assets/new/rm.png")||t(mo,"src",Kl),t(Kr,"onclick","toggleElement('xsp1')"),t(Kr,"href","#"),t(Yr,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(hl,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(Rn,"class","bg-white w-full flex items-center rounded-t-[20px]"),t(Rn,"id","xsp1box"),S(Oi.src,Li="/assets/new/badge-plus.svg")||t(Oi,"src",Li),t(Oi,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Oi,"class","h-6 w-6"),t(Hn,"class","uppercase"),t($n,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Zs,"class","list-disc"),t(xo,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(xl,"class","flex-1 flex-col flex items-start gap-4"),S(bl.src,bo="/assets/new/badge-minus.svg")||t(bl,"src",bo),t(bl,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy00"),t(bl,"class","h-6 w-6"),t(Yn,"class","uppercase"),t(Wn,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(La,"class","list-disc"),t(wo,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(Oa,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Qs,"class","bg-[#e7f5f5] w-full h-full flex items-start gap-10 px-[60px] rounded-b-[20px] pt-[30px]"),t(ua,"id","xsp1"),t(ua,"class","h-[250px] h-[0px] duration-300 bg-none w-full flex-col flex items-start gap-10 rounded-b-[20px] text-sm text-[#2e3855]"),t(gl,"class","flex-col w-[1060px] flex items-start rounded-[20px]"),t(Il,"class","flex-col flex items-center gap-5"),t(Ma,"class","bg-cover bg-[url('/assets/new/E12.jpg')] bg-center flex-col h-[245px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-tl-[20px] rounded-bl-[20px]"),t(Ma,"id","xsp2img"),t(Jn,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(gn,"class","w-[520px]"),t(Ni,"id","xsp2a"),t(Ni,"class","hidden"),S(Ni.src,rf="/assets/new/rl.png")||t(Ni,"src",rf),t(ja,"id","xsp2b"),S(ja.src,Zl="/assets/new/rm.png")||t(ja,"src",Zl),t(Ql,"onclick","toggleElement('xsp2')"),t(Ql,"href","#"),t(Fr,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(Xl,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(El,"class","bg-white w-full flex items-center rounded-t-[20px] rounded-b-[20px]"),t(El,"id","xsp2box"),S(Pl.src,af="/assets/new/badge-plus.svg")||t(Pl,"src",af),t(Pl,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Pl,"class","h-6 w-6"),t(va,"class","uppercase"),t(pa,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(ks,"class","list-disc"),t(ei,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(er,"class","flex-1 flex-col flex items-start gap-4"),S(qi.src,Vo="/assets/new/badge-minus.svg")||t(qi,"src",Vo),t(qi,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy00"),t(qi,"class","h-6 w-6"),t(dc,"class","uppercase"),t(mn,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Ba,"class","list-disc"),t(Sl,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(Xr,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Xn,"class","bg-[#e7f5f5] w-full h-full flex items-start gap-10 px-[60px] rounded-b-[20px] pt-[30px]"),t(Dl,"id","xsp2"),t(Dl,"class","-translate-y-full opacity-0 duration-300 h-[0px] bg-white w-full flex-col flex items-start gap-10 rounded-b-[20px] text-sm text-[#2e3855]"),t(vn,"class","flex-col w-[1060px] flex items-start rounded-[20px]"),t(Fl,"class","flex-col flex items-center gap-5"),t(ha,"class","bg-cover bg-[url('/assets/new/E13.jpg')] bg-center flex-col h-[245px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-tl-[20px] rounded-bl-[20px]"),t(ha,"id","xsp3img"),t(ko,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(So,"class","w-[520px]"),t(To,"id","xsp3a"),S(To.src,rd="/assets/new/rl.png")||t(To,"src",rd),t(To,"class","hidden"),t(qa,"id","xsp3b"),S(qa.src,ad="/assets/new/rm.png")||t(qa,"src",ad),t(ma,"onclick","toggleElement('xsp3')"),t(ma,"href","#"),t(Ll,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(ai,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(Qr,"class","bg-white w-full flex items-center rounded-t-[20px] rounded-b-[20px]"),t(Qr,"id","xsp3box"),S(el.src,lf="/assets/new/badge-plus.svg")||t(el,"src",lf),t(el,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy0"),t(el,"class","h-6 w-6"),t(xa,"class","uppercase"),t(Zr,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Ra,"class","list-disc"),t(Ao,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(ni,"class","flex-1 flex-col flex items-start gap-4"),S(nd.src,xg="/assets/new/badge-minus.svg")||t(nd,"src",xg),t(nd,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy00"),t(nd,"class","h-6 w-6"),t(ou,"class","uppercase"),t(Cl,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Ir,"class","list-disc"),t(Lo,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(sl,"class","h-full flex-1 flex-col flex items-start gap-4"),t($i,"class","bg-[#e7f5f5] w-full h-full flex items-start gap-10 px-[60px] pt-[30px] rounded-b-[20px]"),t(wn,"id","xsp3"),t(wn,"class","-translate-y-full opacity-0 duration-300 h-[0px] bg-white w-full flex-col flex items-start gap-10 rounded-b-[20px] text-sm text-[#2e3855]"),t(ri,"class","flex-col w-[1060px] flex items-start rounded-[20px] mt-[10px]"),t(Js,"class","flex-col flex items-start gap-[30px]"),t(zl,"class","w-full flex-col flex items-start gap-2.5"),t(i,"class","flex-col w-[1060px] flex items-center gap-10"),t(du,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(df,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Yi.src,_c="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Yi,"src",_c),t(Yi,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Yi,"class","h-6 w-6"),S(id.src,jo="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(id,"src",jo),t(id,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(id,"class","h-6 w-6"),S(cd.src,_g="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(cd,"src",_g),t(cd,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(cd,"class","h-6 w-6"),t(Ha,"class","flex items-center gap-5"),t(Ml,"class","flex-1 flex justify-end items-center gap-10"),t(Ui,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 mw-[1060px]")},m(uf,Gl){lt(uf,l,Gl),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(u,h),e(u,I),e(I,w),e(w,V),e(V,y),e(I,D),e(I,E),e(E,O),e(u,k),e(u,A),e(A,M),e(M,G),e(M,b),e(M,C),e(C,_),e(_,q),e(q,F),e(F,L),e(q,j),e(q,Y),e(Y,R),e(q,$),e(q,ge),e(ge,ue),e(A,K),e(A,U),e(U,re),e(re,Oe),e(Oe,he),e(Oe,ze),e(Oe,we),e(we,ae),e(we,qe),e(we,Ee),e(we,de),e(de,$e),e(we,Le),e(i,N),e(i,Q),e(Q,Ie),e(Ie,_e),e(_e,Ce),e(Ce,me),e(me,ie),e(ie,Z),e(Ce,tt),e(Ce,De),e(De,Se),e(Ie,ne),e(Ie,Re),e(Re,Te),e(Te,ee),e(ee,Ne),e(Ne,Pe),e(Pe,He),e(Ne,Be),e(Ne,Me),e(Me,xe),e(xe,et),e(xe,Qe),e(xe,ot),e(xe,P),e(xe,B),e(xe,H),e(xe,z),e(xe,X),e(xe,oe),e(ee,J),e(ee,Ve),e(Ve,ke),e(ke,le),e(le,be),e(le,pe),e(le,te),e(te,Ke),e(ke,Ge),e(ke,Ue),e(Ue,ye),e(ye,Ye),e(Ye,vt),e(ye,Ae),e(ye,je),e(je,$t),e(ye,Mt),e(ye,Fe),e(Fe,_t),e(Ve,St),e(Ve,ce),e(ce,ut),e(ut,st),e(ut,mt),e(ut,Gt),e(Gt,ft),e(ce,Ht),e(ce,Vt),e(Vt,se),e(se,ht),e(ht,Tt),e(se,jt),e(se,pt),e(pt,xt),e(se,Nt),e(Q,At),e(Q,Je),e(Je,Ft),e(Ft,Xe),e(Xe,Et),e(Et,rt),e(rt,Bt),e(Xe,es),e(Xe,bt),e(bt,ve),e(Je,at),e(Je,qt),e(qt,It),e(It,nt),e(nt,ct),e(ct,Yt),e(Yt,yt),e(ct,Dt),e(ct,Qt),e(Qt,Ut),e(Ut,Ot),e(Ut,Jt),e(Ut,Lt),e(Ut,Rt),e(Ut,wt),e(nt,Ns),e(nt,ls),e(ls,Kt),e(Kt,it),e(it,Zt),e(it,hs),e(it,W),e(W,ms),e(Kt,kt),e(Kt,ds),e(ds,ss),e(ss,os),e(os,tr),e(ss,Cr),e(ss,rs),e(rs,us),e(ss,cr),e(ss,Ss),e(ss,Ws),e(ls,Xt),e(ls,xs),e(xs,Ts),e(Ts,Mr),e(Ts,Pr),e(Ts,sr),e(sr,Es),e(xs,dr),e(xs,fs),e(fs,ps),e(ps,ta),e(ta,Gr),e(ps,as),e(ps,As),e(As,Sn),e(ps,jr),e(ps,Fs),e(Fs,Tn),e(Q,Nr),e(Q,ns),e(ns,Vr),e(Vr,Ys),e(Ys,bs),e(bs,Bs),e(Bs,wa),e(Ys,kr),e(Ys,Wt),e(Wt,rr),e(ns,ur),e(ns,fr),e(fr,pr),e(pr,Br),e(Br,Is),e(Is,ys),e(ys,cl),e(Is,fi),e(Is,sa),e(sa,cs),e(cs,pi),e(cs,qr),e(cs,ra),e(cs,vi),e(cs,dl),e(cs,co),e(cs,vs),e(cs,Os),e(cs,Rr),e(Br,Ya),e(Br,ts),e(ts,vr),e(vr,Sr),e(Sr,gr),e(Sr,$r),e(Sr,_a),e(_a,An),e(vr,ul),e(vr,ar),e(ar,gs),e(gs,Ul),e(Ul,gi),e(gs,ws),e(gs,aa),e(aa,Fn),e(gs,hr),e(gs,za),e(za,hi),e(ts,mr),e(ts,Ds),e(Ds,nr),e(nr,Ls),e(nr,Hr),e(nr,Ka),e(Ka,mi),e(Ds,xr),e(Ds,zs),e(zs,Cs),e(Cs,Ur),e(Ur,On),e(Cs,Ln),e(Cs,Ja),e(Ja,xi),e(Cs,Ps),e(Cs,Ms),e(Ms,na),e(Cs,uo),e(Cs,bi),e(Cs,Cn),e(Q,lr),e(Q,br),e(br,Tr),e(Tr,ir),e(ir,fl),e(ir,Wr),e(ir,la),e(Tr,Ks),e(Tr,Xa),e(Xa,Yc),e(Xa,zc),e(Xa,ia),e(Xa,Yd),e(br,fo),e(br,wi),e(wi,yr),e(yr,_s),e(_s,Mn),e(Mn,Gn),e(Gn,Qa),e(_s,Ei),e(_s,Ea),e(Ea,wr),e(wr,po),e(po,Kc),e(wr,oa),e(wr,jn),e(jn,Jc),e(_s,Ii),e(_s,Ia),e(Ia,Za),e(Za,Nn),e(Za,vo),e(Za,en),e(en,tn),e(yr,Da),e(yr,Gs),e(Gs,Pa),e(Gs,ca),e(Gs,sn),e(sn,Va),e(Va,ka),e(ka,Wl),e(Va,Di),e(Va,Pi),e(Pi,Yl),e(Gs,Vi),e(Gs,Bn),e(Bn,_r),e(_r,rn),e(_r,an),e(_r,sc),e(sc,Xc),e(wi,ho),e(wi,pl),e(pl,da),e(da,js),e(js,Sa),e(js,zd),e(js,or),e(or,Ar),e(Ar,nn),e(or,Si),e(or,Ti),e(Ti,ln),e(i,on),e(i,zl),e(zl,vl),e(vl,Vs),e(Vs,Ta),e(Ta,Ai),e(vl,Aa),e(vl,rc),e(rc,Qc),e(zl,Er),e(zl,Js),e(Js,gl),e(gl,Rn),e(Rn,$s),e($s,Fa),e(Rn,Zc),e(Rn,hl),e(hl,Xs),e(Xs,Fi),e(hl,Kd),e(hl,Yr),e(Yr,zr),e(zr,Jd),e(Yr,ed),e(Yr,Kr),e(Kr,cn),e(Kr,ml),e(Kr,mo),e(gl,Xd),e(gl,ua),e(ua,Qs),e(Qs,xl),e(xl,$n),e($n,Oi),e($n,fa),e($n,Hn),e(Hn,ef),e(xl,Qd),e(xl,xo),e(xo,Zs),e(Zs,un),e(un,tf),e(Zs,Zd),e(Zs,ac),e(ac,Un),e(Zs,fn),e(Zs,nc),e(nc,eu),e(Qs,Ci),e(Qs,Oa),e(Oa,Wn),e(Wn,bl),e(Wn,sf),e(Wn,Yn),e(Yn,yl),e(Oa,yo),e(Oa,wo),e(wo,La),e(La,zn),e(zn,pn),e(La,tu),e(La,lc),e(lc,wl),e(La,ic),e(La,_l),e(_l,Jl),e(La,Kn),e(La,Ca),e(Ca,_o),e(Js,Mi),e(Js,vn),e(vn,El),e(El,Ma),e(Ma,Il),e(El,su),e(El,Xl),e(Xl,Jn),e(Jn,ru),e(Xl,Gi),e(Xl,Fr),e(Fr,gn),e(gn,Ga),e(Fr,ji),e(Fr,Ql),e(Ql,Ni),e(Ql,Eo),e(Ql,ja),e(vn,Io),e(vn,Dl),e(Dl,Xn),e(Xn,er),e(er,pa),e(pa,Pl),e(pa,au),e(pa,va),e(va,Bi),e(er,Do),e(er,ei),e(ei,ks),e(ks,Na),e(Na,Po),e(ks,Vl),e(ks,td),e(td,oc),e(ks,Jr),e(ks,hn),e(hn,nu),e(Xn,cc),e(Xn,Xr),e(Xr,mn),e(mn,qi),e(mn,kl),e(mn,dc),e(dc,uc),e(Xr,ti),e(Xr,Sl),e(Sl,Ba),e(Ba,fc),e(fc,lu),e(Ba,Qn),e(Ba,ga),e(ga,xn),e(Ba,sd),e(Ba,Ri),e(Ri,pc),e(Ba,Tl),e(Ba,Al),e(Al,si),e(Js,iu),e(Js,ri),e(ri,Qr),e(Qr,ha),e(ha,Fl),e(Qr,nf),e(Qr,ai),e(ai,ko),e(ko,Ol),e(ai,bn),e(ai,Ll),e(Ll,So),e(So,vc),e(Ll,Zn),e(Ll,ma),e(ma,To),e(ma,yn),e(ma,qa),e(ri,gc),e(ri,wn),e(wn,$i),e($i,ni),e(ni,Zr),e(Zr,el),e(Zr,Hi),e(Zr,xa),e(xa,hc),e(ni,mc),e(ni,Ao),e(Ao,Ra),e(Ra,xc),e(xc,bc),e(Ra,Fo),e(Ra,$a),e($a,li),e(Ra,tl),e(Ra,Oo),e(Oo,mg),e($i,Cv),e($i,sl),e(sl,Cl),e(Cl,nd),e(Cl,ld),e(Cl,ou),e(ou,Mv),e(sl,yc),e(sl,Lo),e(Lo,Ir),e(Ir,Co),e(Co,bg),e(Ir,Gv),e(Ir,of),e(of,cu),e(Ir,Mo),e(Ir,Go),e(Go,yg),e(Ir,jv),e(Ir,cf),e(cf,ii),e(l,wc),e(l,Ui),e(Ui,du),e(du,Nv),e(Ui,Wi),e(Ui,Ml),e(Ml,df),e(df,Bv),e(Ml,_n),e(Ml,Ha),e(Ha,Yi),e(Ha,wg),e(Ha,id),e(Ha,od),e(Ha,cd),e(l,No),e(l,Ec),e(Ec,qv)},p:We,i:We,o:We,d(uf){uf&&a(l)}}}class KE extends Vn{constructor(l){super(),kn(this,l,null,zE,Wa,{})}}var io="top",Uc="bottom",Wc="right",oo="left",I2="auto",Tm=[io,Uc,Wc,oo],sm="start",km="end",JE="clippingParents",M_="viewport",Em="popper",XE="reference",p_=Tm.reduce(function(d,l){return d.concat([l+"-"+sm,l+"-"+km])},[]),G_=[].concat(Tm,[I2]).reduce(function(d,l){return d.concat([l,l+"-"+sm,l+"-"+km])},[]),QE="beforeRead",ZE="read",e4="afterRead",t4="beforeMain",s4="main",r4="afterMain",a4="beforeWrite",n4="write",l4="afterWrite",i4=[QE,ZE,e4,t4,s4,r4,a4,n4,l4];function Qu(d){return d?(d.nodeName||"").toLowerCase():null}function tc(d){if(d==null)return window;if(d.toString()!=="[object Window]"){var l=d.ownerDocument;return l&&l.defaultView||window}return d}function gg(d){var l=tc(d).Element;return d instanceof l||d instanceof Element}function Hc(d){var l=tc(d).HTMLElement;return d instanceof l||d instanceof HTMLElement}function D2(d){if(typeof ShadowRoot>"u")return!1;var l=tc(d).ShadowRoot;return d instanceof l||d instanceof ShadowRoot}function o4(d){var l=d.state;Object.keys(l.elements).forEach(function(i){var u=l.styles[i]||{},v=l.attributes[i]||{},g=l.elements[i];!Hc(g)||!Qu(g)||(Object.assign(g.style,u),Object.keys(v).forEach(function(x){var m=v[x];m===!1?g.removeAttribute(x):g.setAttribute(x,m===!0?"":m)}))})}function c4(d){var l=d.state,i={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,i.popper),l.styles=i,l.elements.arrow&&Object.assign(l.elements.arrow.style,i.arrow),function(){Object.keys(l.elements).forEach(function(u){var v=l.elements[u],g=l.attributes[u]||{},x=Object.keys(l.styles.hasOwnProperty(u)?l.styles[u]:i[u]),m=x.reduce(function(h,I){return h[I]="",h},{});!Hc(v)||!Qu(v)||(Object.assign(v.style,m),Object.keys(g).forEach(function(h){v.removeAttribute(h)}))})}}const j_={name:"applyStyles",enabled:!0,phase:"write",fn:o4,effect:c4,requires:["computeStyles"]};function Xu(d){return d.split("-")[0]}var pg=Math.max,g0=Math.min,rm=Math.round;function m2(){var d=navigator.userAgentData;return d!=null&&d.brands&&Array.isArray(d.brands)?d.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function N_(){return!/^((?!chrome|android).)*safari/i.test(m2())}function am(d,l,i){l===void 0&&(l=!1),i===void 0&&(i=!1);var u=d.getBoundingClientRect(),v=1,g=1;l&&Hc(d)&&(v=d.offsetWidth>0&&rm(u.width)/d.offsetWidth||1,g=d.offsetHeight>0&&rm(u.height)/d.offsetHeight||1);var x=gg(d)?tc(d):window,m=x.visualViewport,h=!N_()&&i,I=(u.left+(h&&m?m.offsetLeft:0))/v,w=(u.top+(h&&m?m.offsetTop:0))/g,V=u.width/v,y=u.height/g;return{width:V,height:y,top:w,right:I+V,bottom:w+y,left:I,x:I,y:w}}function P2(d){var l=am(d),i=d.offsetWidth,u=d.offsetHeight;return Math.abs(l.width-i)<=1&&(i=l.width),Math.abs(l.height-u)<=1&&(u=l.height),{x:d.offsetLeft,y:d.offsetTop,width:i,height:u}}function B_(d,l){var i=l.getRootNode&&l.getRootNode();if(d.contains(l))return!0;if(i&&D2(i)){var u=l;do{if(u&&d.isSameNode(u))return!0;u=u.parentNode||u.host}while(u)}return!1}function Rp(d){return tc(d).getComputedStyle(d)}function d4(d){return["table","td","th"].indexOf(Qu(d))>=0}function Lv(d){return((gg(d)?d.ownerDocument:d.document)||window.document).documentElement}function m0(d){return Qu(d)==="html"?d:d.assignedSlot||d.parentNode||(D2(d)?d.host:null)||Lv(d)}function v_(d){return!Hc(d)||Rp(d).position==="fixed"?null:d.offsetParent}function u4(d){var l=/firefox/i.test(m2()),i=/Trident/i.test(m2());if(i&&Hc(d)){var u=Rp(d);if(u.position==="fixed")return null}var v=m0(d);for(D2(v)&&(v=v.host);Hc(v)&&["html","body"].indexOf(Qu(v))<0;){var g=Rp(v);if(g.transform!=="none"||g.perspective!=="none"||g.contain==="paint"||["transform","perspective"].indexOf(g.willChange)!==-1||l&&g.willChange==="filter"||l&&g.filter&&g.filter!=="none")return v;v=v.parentNode}return null}function Am(d){for(var l=tc(d),i=v_(d);i&&d4(i)&&Rp(i).position==="static";)i=v_(i);return i&&(Qu(i)==="html"||Qu(i)==="body"&&Rp(i).position==="static")?l:i||u4(d)||l}function V2(d){return["top","bottom"].indexOf(d)>=0?"x":"y"}function Dm(d,l,i){return pg(d,g0(l,i))}function f4(d,l,i){var u=Dm(d,l,i);return u>i?i:u}function q_(){return{top:0,right:0,bottom:0,left:0}}function R_(d){return Object.assign({},q_(),d)}function $_(d,l){return l.reduce(function(i,u){return i[u]=d,i},{})}var p4=function(l,i){return l=typeof l=="function"?l(Object.assign({},i.rects,{placement:i.placement})):l,R_(typeof l!="number"?l:$_(l,Tm))};function v4(d){var l,i=d.state,u=d.name,v=d.options,g=i.elements.arrow,x=i.modifiersData.popperOffsets,m=Xu(i.placement),h=V2(m),I=[oo,Wc].indexOf(m)>=0,w=I?"height":"width";if(!(!g||!x)){var V=p4(v.padding,i),y=P2(g),D=h==="y"?io:oo,E=h==="y"?Uc:Wc,O=i.rects.reference[w]+i.rects.reference[h]-x[h]-i.rects.popper[w],k=x[h]-i.rects.reference[h],A=Am(g),M=A?h==="y"?A.clientHeight||0:A.clientWidth||0:0,G=O/2-k/2,b=V[D],C=M-y[w]-V[E],_=M/2-y[w]/2+G,q=Dm(b,_,C),F=h;i.modifiersData[u]=(l={},l[F]=q,l.centerOffset=q-_,l)}}function g4(d){var l=d.state,i=d.options,u=i.element,v=u===void 0?"[data-popper-arrow]":u;v!=null&&(typeof v=="string"&&(v=l.elements.popper.querySelector(v),!v)||B_(l.elements.popper,v)&&(l.elements.arrow=v))}const h4={name:"arrow",enabled:!0,phase:"main",fn:v4,effect:g4,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function nm(d){return d.split("-")[1]}var m4={top:"auto",right:"auto",bottom:"auto",left:"auto"};function x4(d,l){var i=d.x,u=d.y,v=l.devicePixelRatio||1;return{x:rm(i*v)/v||0,y:rm(u*v)/v||0}}function g_(d){var l,i=d.popper,u=d.popperRect,v=d.placement,g=d.variation,x=d.offsets,m=d.position,h=d.gpuAcceleration,I=d.adaptive,w=d.roundOffsets,V=d.isFixed,y=x.x,D=y===void 0?0:y,E=x.y,O=E===void 0?0:E,k=typeof w=="function"?w({x:D,y:O}):{x:D,y:O};D=k.x,O=k.y;var A=x.hasOwnProperty("x"),M=x.hasOwnProperty("y"),G=oo,b=io,C=window;if(I){var _=Am(i),q="clientHeight",F="clientWidth";if(_===tc(i)&&(_=Lv(i),Rp(_).position!=="static"&&m==="absolute"&&(q="scrollHeight",F="scrollWidth")),_=_,v===io||(v===oo||v===Wc)&&g===km){b=Uc;var L=V&&_===C&&C.visualViewport?C.visualViewport.height:_[q];O-=L-u.height,O*=h?1:-1}if(v===oo||(v===io||v===Uc)&&g===km){G=Wc;var j=V&&_===C&&C.visualViewport?C.visualViewport.width:_[F];D-=j-u.width,D*=h?1:-1}}var Y=Object.assign({position:m},I&&m4),R=w===!0?x4({x:D,y:O},tc(i)):{x:D,y:O};if(D=R.x,O=R.y,h){var $;return Object.assign({},Y,($={},$[b]=M?"0":"",$[G]=A?"0":"",$.transform=(C.devicePixelRatio||1)<=1?"translate("+D+"px, "+O+"px)":"translate3d("+D+"px, "+O+"px, 0)",$))}return Object.assign({},Y,(l={},l[b]=M?O+"px":"",l[G]=A?D+"px":"",l.transform="",l))}function b4(d){var l=d.state,i=d.options,u=i.gpuAcceleration,v=u===void 0?!0:u,g=i.adaptive,x=g===void 0?!0:g,m=i.roundOffsets,h=m===void 0?!0:m,I={placement:Xu(l.placement),variation:nm(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:v,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,g_(Object.assign({},I,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:x,roundOffsets:h})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,g_(Object.assign({},I,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})}const y4={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:b4,data:{}};var d0={passive:!0};function w4(d){var l=d.state,i=d.instance,u=d.options,v=u.scroll,g=v===void 0?!0:v,x=u.resize,m=x===void 0?!0:x,h=tc(l.elements.popper),I=[].concat(l.scrollParents.reference,l.scrollParents.popper);return g&&I.forEach(function(w){w.addEventListener("scroll",i.update,d0)}),m&&h.addEventListener("resize",i.update,d0),function(){g&&I.forEach(function(w){w.removeEventListener("scroll",i.update,d0)}),m&&h.removeEventListener("resize",i.update,d0)}}const _4={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:w4,data:{}};var E4={left:"right",right:"left",bottom:"top",top:"bottom"};function f0(d){return d.replace(/left|right|bottom|top/g,function(l){return E4[l]})}var I4={start:"end",end:"start"};function h_(d){return d.replace(/start|end/g,function(l){return I4[l]})}function k2(d){var l=tc(d),i=l.pageXOffset,u=l.pageYOffset;return{scrollLeft:i,scrollTop:u}}function S2(d){return am(Lv(d)).left+k2(d).scrollLeft}function D4(d,l){var i=tc(d),u=Lv(d),v=i.visualViewport,g=u.clientWidth,x=u.clientHeight,m=0,h=0;if(v){g=v.width,x=v.height;var I=N_();(I||!I&&l==="fixed")&&(m=v.offsetLeft,h=v.offsetTop)}return{width:g,height:x,x:m+S2(d),y:h}}function P4(d){var l,i=Lv(d),u=k2(d),v=(l=d.ownerDocument)==null?void 0:l.body,g=pg(i.scrollWidth,i.clientWidth,v?v.scrollWidth:0,v?v.clientWidth:0),x=pg(i.scrollHeight,i.clientHeight,v?v.scrollHeight:0,v?v.clientHeight:0),m=-u.scrollLeft+S2(d),h=-u.scrollTop;return Rp(v||i).direction==="rtl"&&(m+=pg(i.clientWidth,v?v.clientWidth:0)-g),{width:g,height:x,x:m,y:h}}function T2(d){var l=Rp(d),i=l.overflow,u=l.overflowX,v=l.overflowY;return/auto|scroll|overlay|hidden/.test(i+v+u)}function H_(d){return["html","body","#document"].indexOf(Qu(d))>=0?d.ownerDocument.body:Hc(d)&&T2(d)?d:H_(m0(d))}function Pm(d,l){var i;l===void 0&&(l=[]);var u=H_(d),v=u===((i=d.ownerDocument)==null?void 0:i.body),g=tc(u),x=v?[g].concat(g.visualViewport||[],T2(u)?u:[]):u,m=l.concat(x);return v?m:m.concat(Pm(m0(x)))}function x2(d){return Object.assign({},d,{left:d.x,top:d.y,right:d.x+d.width,bottom:d.y+d.height})}function V4(d,l){var i=am(d,!1,l==="fixed");return i.top=i.top+d.clientTop,i.left=i.left+d.clientLeft,i.bottom=i.top+d.clientHeight,i.right=i.left+d.clientWidth,i.width=d.clientWidth,i.height=d.clientHeight,i.x=i.left,i.y=i.top,i}function m_(d,l,i){return l===M_?x2(D4(d,i)):gg(l)?V4(l,i):x2(P4(Lv(d)))}function k4(d){var l=Pm(m0(d)),i=["absolute","fixed"].indexOf(Rp(d).position)>=0,u=i&&Hc(d)?Am(d):d;return gg(u)?l.filter(function(v){return gg(v)&&B_(v,u)&&Qu(v)!=="body"}):[]}function S4(d,l,i,u){var v=l==="clippingParents"?k4(d):[].concat(l),g=[].concat(v,[i]),x=g[0],m=g.reduce(function(h,I){var w=m_(d,I,u);return h.top=pg(w.top,h.top),h.right=g0(w.right,h.right),h.bottom=g0(w.bottom,h.bottom),h.left=pg(w.left,h.left),h},m_(d,x,u));return m.width=m.right-m.left,m.height=m.bottom-m.top,m.x=m.left,m.y=m.top,m}function U_(d){var l=d.reference,i=d.element,u=d.placement,v=u?Xu(u):null,g=u?nm(u):null,x=l.x+l.width/2-i.width/2,m=l.y+l.height/2-i.height/2,h;switch(v){case io:h={x,y:l.y-i.height};break;case Uc:h={x,y:l.y+l.height};break;case Wc:h={x:l.x+l.width,y:m};break;case oo:h={x:l.x-i.width,y:m};break;default:h={x:l.x,y:l.y}}var I=v?V2(v):null;if(I!=null){var w=I==="y"?"height":"width";switch(g){case sm:h[I]=h[I]-(l[w]/2-i[w]/2);break;case km:h[I]=h[I]+(l[w]/2-i[w]/2);break}}return h}function Sm(d,l){l===void 0&&(l={});var i=l,u=i.placement,v=u===void 0?d.placement:u,g=i.strategy,x=g===void 0?d.strategy:g,m=i.boundary,h=m===void 0?JE:m,I=i.rootBoundary,w=I===void 0?M_:I,V=i.elementContext,y=V===void 0?Em:V,D=i.altBoundary,E=D===void 0?!1:D,O=i.padding,k=O===void 0?0:O,A=R_(typeof k!="number"?k:$_(k,Tm)),M=y===Em?XE:Em,G=d.rects.popper,b=d.elements[E?M:y],C=S4(gg(b)?b:b.contextElement||Lv(d.elements.popper),h,w,x),_=am(d.elements.reference),q=U_({reference:_,element:G,strategy:"absolute",placement:v}),F=x2(Object.assign({},G,q)),L=y===Em?F:_,j={top:C.top-L.top+A.top,bottom:L.bottom-C.bottom+A.bottom,left:C.left-L.left+A.left,right:L.right-C.right+A.right},Y=d.modifiersData.offset;if(y===Em&&Y){var R=Y[v];Object.keys(j).forEach(function($){var ge=[Wc,Uc].indexOf($)>=0?1:-1,ue=[io,Uc].indexOf($)>=0?"y":"x";j[$]+=R[ue]*ge})}return j}function T4(d,l){l===void 0&&(l={});var i=l,u=i.placement,v=i.boundary,g=i.rootBoundary,x=i.padding,m=i.flipVariations,h=i.allowedAutoPlacements,I=h===void 0?G_:h,w=nm(u),V=w?m?p_:p_.filter(function(E){return nm(E)===w}):Tm,y=V.filter(function(E){return I.indexOf(E)>=0});y.length===0&&(y=V);var D=y.reduce(function(E,O){return E[O]=Sm(d,{placement:O,boundary:v,rootBoundary:g,padding:x})[Xu(O)],E},{});return Object.keys(D).sort(function(E,O){return D[E]-D[O]})}function A4(d){if(Xu(d)===I2)return[];var l=f0(d);return[h_(d),l,h_(l)]}function F4(d){var l=d.state,i=d.options,u=d.name;if(!l.modifiersData[u]._skip){for(var v=i.mainAxis,g=v===void 0?!0:v,x=i.altAxis,m=x===void 0?!0:x,h=i.fallbackPlacements,I=i.padding,w=i.boundary,V=i.rootBoundary,y=i.altBoundary,D=i.flipVariations,E=D===void 0?!0:D,O=i.allowedAutoPlacements,k=l.options.placement,A=Xu(k),M=A===k,G=h||(M||!E?[f0(k)]:A4(k)),b=[k].concat(G).reduce(function(fe,qe){return fe.concat(Xu(qe)===I2?T4(l,{placement:qe,boundary:w,rootBoundary:V,padding:I,flipVariations:E,allowedAutoPlacements:O}):qe)},[]),C=l.rects.reference,_=l.rects.popper,q=new Map,F=!0,L=b[0],j=0;j<b.length;j++){var Y=b[j],R=Xu(Y),$=nm(Y)===sm,ge=[io,Uc].indexOf(R)>=0,ue=ge?"width":"height",K=Sm(l,{placement:Y,boundary:w,rootBoundary:V,altBoundary:y,padding:I}),U=ge?$?Wc:oo:$?Uc:io;C[ue]>_[ue]&&(U=f0(U));var re=f0(U),Oe=[];if(g&&Oe.push(K[R]<=0),m&&Oe.push(K[U]<=0,K[re]<=0),Oe.every(function(fe){return fe})){L=Y,F=!1;break}q.set(Y,Oe)}if(F)for(var he=E?3:1,ze=function(qe){var Ee=b.find(function(de){var $e=q.get(de);if($e)return $e.slice(0,qe).every(function(Le){return Le})});if(Ee)return L=Ee,"break"},we=he;we>0;we--){var ae=ze(we);if(ae==="break")break}l.placement!==L&&(l.modifiersData[u]._skip=!0,l.placement=L,l.reset=!0)}}const O4={name:"flip",enabled:!0,phase:"main",fn:F4,requiresIfExists:["offset"],data:{_skip:!1}};function x_(d,l,i){return i===void 0&&(i={x:0,y:0}),{top:d.top-l.height-i.y,right:d.right-l.width+i.x,bottom:d.bottom-l.height+i.y,left:d.left-l.width-i.x}}function b_(d){return[io,Wc,Uc,oo].some(function(l){return d[l]>=0})}function L4(d){var l=d.state,i=d.name,u=l.rects.reference,v=l.rects.popper,g=l.modifiersData.preventOverflow,x=Sm(l,{elementContext:"reference"}),m=Sm(l,{altBoundary:!0}),h=x_(x,u),I=x_(m,v,g),w=b_(h),V=b_(I);l.modifiersData[i]={referenceClippingOffsets:h,popperEscapeOffsets:I,isReferenceHidden:w,hasPopperEscaped:V},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":w,"data-popper-escaped":V})}const C4={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:L4};function M4(d,l,i){var u=Xu(d),v=[oo,io].indexOf(u)>=0?-1:1,g=typeof i=="function"?i(Object.assign({},l,{placement:d})):i,x=g[0],m=g[1];return x=x||0,m=(m||0)*v,[oo,Wc].indexOf(u)>=0?{x:m,y:x}:{x,y:m}}function G4(d){var l=d.state,i=d.options,u=d.name,v=i.offset,g=v===void 0?[0,0]:v,x=G_.reduce(function(w,V){return w[V]=M4(V,l.rects,g),w},{}),m=x[l.placement],h=m.x,I=m.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=h,l.modifiersData.popperOffsets.y+=I),l.modifiersData[u]=x}const j4={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:G4};function N4(d){var l=d.state,i=d.name;l.modifiersData[i]=U_({reference:l.rects.reference,element:l.rects.popper,strategy:"absolute",placement:l.placement})}const B4={name:"popperOffsets",enabled:!0,phase:"read",fn:N4,data:{}};function q4(d){return d==="x"?"y":"x"}function R4(d){var l=d.state,i=d.options,u=d.name,v=i.mainAxis,g=v===void 0?!0:v,x=i.altAxis,m=x===void 0?!1:x,h=i.boundary,I=i.rootBoundary,w=i.altBoundary,V=i.padding,y=i.tether,D=y===void 0?!0:y,E=i.tetherOffset,O=E===void 0?0:E,k=Sm(l,{boundary:h,rootBoundary:I,padding:V,altBoundary:w}),A=Xu(l.placement),M=nm(l.placement),G=!M,b=V2(A),C=q4(b),_=l.modifiersData.popperOffsets,q=l.rects.reference,F=l.rects.popper,L=typeof O=="function"?O(Object.assign({},l.rects,{placement:l.placement})):O,j=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),Y=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,R={x:0,y:0};if(_){if(g){var $,ge=b==="y"?io:oo,ue=b==="y"?Uc:Wc,K=b==="y"?"height":"width",U=_[b],re=U+k[ge],Oe=U-k[ue],he=D?-F[K]/2:0,ze=M===sm?q[K]:F[K],we=M===sm?-F[K]:-q[K],ae=l.elements.arrow,fe=D&&ae?P2(ae):{width:0,height:0},qe=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:q_(),Ee=qe[ge],de=qe[ue],$e=Dm(0,q[K],fe[K]),Le=G?q[K]/2-he-$e-Ee-j.mainAxis:ze-$e-Ee-j.mainAxis,N=G?-q[K]/2+he+$e+de+j.mainAxis:we+$e+de+j.mainAxis,Q=l.elements.arrow&&Am(l.elements.arrow),Ie=Q?b==="y"?Q.clientTop||0:Q.clientLeft||0:0,_e=($=Y==null?void 0:Y[b])!=null?$:0,Ce=U+Le-_e-Ie,me=U+N-_e,ie=Dm(D?g0(re,Ce):re,U,D?pg(Oe,me):Oe);_[b]=ie,R[b]=ie-U}if(m){var Z,tt=b==="x"?io:oo,De=b==="x"?Uc:Wc,Se=_[C],ne=C==="y"?"height":"width",Re=Se+k[tt],Te=Se-k[De],ee=[io,oo].indexOf(A)!==-1,Ne=(Z=Y==null?void 0:Y[C])!=null?Z:0,Pe=ee?Re:Se-q[ne]-F[ne]-Ne+j.altAxis,He=ee?Se+q[ne]+F[ne]-Ne-j.altAxis:Te,Be=D&&ee?f4(Pe,Se,He):Dm(D?Pe:Re,Se,D?He:Te);_[C]=Be,R[C]=Be-Se}l.modifiersData[u]=R}}const $4={name:"preventOverflow",enabled:!0,phase:"main",fn:R4,requiresIfExists:["offset"]};function H4(d){return{scrollLeft:d.scrollLeft,scrollTop:d.scrollTop}}function U4(d){return d===tc(d)||!Hc(d)?k2(d):H4(d)}function W4(d){var l=d.getBoundingClientRect(),i=rm(l.width)/d.offsetWidth||1,u=rm(l.height)/d.offsetHeight||1;return i!==1||u!==1}function Y4(d,l,i){i===void 0&&(i=!1);var u=Hc(l),v=Hc(l)&&W4(l),g=Lv(l),x=am(d,v,i),m={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(u||!u&&!i)&&((Qu(l)!=="body"||T2(g))&&(m=U4(l)),Hc(l)?(h=am(l,!0),h.x+=l.clientLeft,h.y+=l.clientTop):g&&(h.x=S2(g))),{x:x.left+m.scrollLeft-h.x,y:x.top+m.scrollTop-h.y,width:x.width,height:x.height}}function z4(d){var l=new Map,i=new Set,u=[];d.forEach(function(g){l.set(g.name,g)});function v(g){i.add(g.name);var x=[].concat(g.requires||[],g.requiresIfExists||[]);x.forEach(function(m){if(!i.has(m)){var h=l.get(m);h&&v(h)}}),u.push(g)}return d.forEach(function(g){i.has(g.name)||v(g)}),u}function K4(d){var l=z4(d);return i4.reduce(function(i,u){return i.concat(l.filter(function(v){return v.phase===u}))},[])}function J4(d){var l;return function(){return l||(l=new Promise(function(i){Promise.resolve().then(function(){l=void 0,i(d())})})),l}}function X4(d){var l=d.reduce(function(i,u){var v=i[u.name];return i[u.name]=v?Object.assign({},v,u,{options:Object.assign({},v.options,u.options),data:Object.assign({},v.data,u.data)}):u,i},{});return Object.keys(l).map(function(i){return l[i]})}var y_={placement:"bottom",modifiers:[],strategy:"absolute"};function w_(){for(var d=arguments.length,l=new Array(d),i=0;i<d;i++)l[i]=arguments[i];return!l.some(function(u){return!(u&&typeof u.getBoundingClientRect=="function")})}function Q4(d){d===void 0&&(d={});var l=d,i=l.defaultModifiers,u=i===void 0?[]:i,v=l.defaultOptions,g=v===void 0?y_:v;return function(m,h,I){I===void 0&&(I=g);var w={placement:"bottom",orderedModifiers:[],options:Object.assign({},y_,g),modifiersData:{},elements:{reference:m,popper:h},attributes:{},styles:{}},V=[],y=!1,D={state:w,setOptions:function(A){var M=typeof A=="function"?A(w.options):A;O(),w.options=Object.assign({},g,w.options,M),w.scrollParents={reference:gg(m)?Pm(m):m.contextElement?Pm(m.contextElement):[],popper:Pm(h)};var G=K4(X4([].concat(u,w.options.modifiers)));return w.orderedModifiers=G.filter(function(b){return b.enabled}),E(),D.update()},forceUpdate:function(){if(!y){var A=w.elements,M=A.reference,G=A.popper;if(w_(M,G)){w.rects={reference:Y4(M,Am(G),w.options.strategy==="fixed"),popper:P2(G)},w.reset=!1,w.placement=w.options.placement,w.orderedModifiers.forEach(function(j){return w.modifiersData[j.name]=Object.assign({},j.data)});for(var b=0;b<w.orderedModifiers.length;b++){if(w.reset===!0){w.reset=!1,b=-1;continue}var C=w.orderedModifiers[b],_=C.fn,q=C.options,F=q===void 0?{}:q,L=C.name;typeof _=="function"&&(w=_({state:w,options:F,name:L,instance:D})||w)}}}},update:J4(function(){return new Promise(function(k){D.forceUpdate(),k(w)})}),destroy:function(){O(),y=!0}};if(!w_(m,h))return D;D.setOptions(I).then(function(k){!y&&I.onFirstUpdate&&I.onFirstUpdate(k)});function E(){w.orderedModifiers.forEach(function(k){var A=k.name,M=k.options,G=M===void 0?{}:M,b=k.effect;if(typeof b=="function"){var C=b({state:w,name:A,instance:D,options:G}),_=function(){};V.push(C||_)}})}function O(){V.forEach(function(k){return k()}),V=[]}return D}}var Z4=[_4,B4,y4,j_,j4,O4,$4,h4,C4],e6=Q4({defaultModifiers:Z4}),t6="tippy-box",W_="tippy-content",s6="tippy-backdrop",Y_="tippy-arrow",z_="tippy-svg-arrow",ug={passive:!0,capture:!0},K_=function(){return document.body};function f2(d,l,i){if(Array.isArray(d)){var u=d[l];return u??(Array.isArray(i)?i[l]:i)}return d}function A2(d,l){var i={}.toString.call(d);return i.indexOf("[object")===0&&i.indexOf(l+"]")>-1}function J_(d,l){return typeof d=="function"?d.apply(void 0,l):d}function __(d,l){if(l===0)return d;var i;return function(u){clearTimeout(i),i=setTimeout(function(){d(u)},l)}}function r6(d){return d.split(/\s+/).filter(Boolean)}function em(d){return[].concat(d)}function E_(d,l){d.indexOf(l)===-1&&d.push(l)}function a6(d){return d.filter(function(l,i){return d.indexOf(l)===i})}function n6(d){return d.split("-")[0]}function h0(d){return[].slice.call(d)}function I_(d){return Object.keys(d).reduce(function(l,i){return d[i]!==void 0&&(l[i]=d[i]),l},{})}function Vm(){return document.createElement("div")}function x0(d){return["Element","Fragment"].some(function(l){return A2(d,l)})}function l6(d){return A2(d,"NodeList")}function i6(d){return A2(d,"MouseEvent")}function o6(d){return!!(d&&d._tippy&&d._tippy.reference===d)}function c6(d){return x0(d)?[d]:l6(d)?h0(d):Array.isArray(d)?d:h0(document.querySelectorAll(d))}function p2(d,l){d.forEach(function(i){i&&(i.style.transitionDuration=l+"ms")})}function D_(d,l){d.forEach(function(i){i&&i.setAttribute("data-state",l)})}function d6(d){var l,i=em(d),u=i[0];return u!=null&&(l=u.ownerDocument)!=null&&l.body?u.ownerDocument:document}function u6(d,l){var i=l.clientX,u=l.clientY;return d.every(function(v){var g=v.popperRect,x=v.popperState,m=v.props,h=m.interactiveBorder,I=n6(x.placement),w=x.modifiersData.offset;if(!w)return!0;var V=I==="bottom"?w.top.y:0,y=I==="top"?w.bottom.y:0,D=I==="right"?w.left.x:0,E=I==="left"?w.right.x:0,O=g.top-u+V>h,k=u-g.bottom-y>h,A=g.left-i+D>h,M=i-g.right-E>h;return O||k||A||M})}function v2(d,l,i){var u=l+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(v){d[u](v,i)})}function P_(d,l){for(var i=l;i;){var u;if(d.contains(i))return!0;i=i.getRootNode==null||(u=i.getRootNode())==null?void 0:u.host}return!1}var Ku={isTouch:!1},V_=0;function f6(){Ku.isTouch||(Ku.isTouch=!0,window.performance&&document.addEventListener("mousemove",X_))}function X_(){var d=performance.now();d-V_<20&&(Ku.isTouch=!1,document.removeEventListener("mousemove",X_)),V_=d}function p6(){var d=document.activeElement;if(o6(d)){var l=d._tippy;d.blur&&!l.state.isVisible&&d.blur()}}function v6(){document.addEventListener("touchstart",f6,ug),window.addEventListener("blur",p6)}var g6=typeof window<"u"&&typeof document<"u",h6=g6?!!window.msCrypto:!1,m6={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},x6={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},Wd=Object.assign({appendTo:K_,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},m6,x6),b6=Object.keys(Wd),y6=function(l){var i=Object.keys(l);i.forEach(function(u){Wd[u]=l[u]})};function Q_(d){var l=d.plugins||[],i=l.reduce(function(u,v){var g=v.name,x=v.defaultValue;if(g){var m;u[g]=d[g]!==void 0?d[g]:(m=Wd[g])!=null?m:x}return u},{});return Object.assign({},d,i)}function w6(d,l){var i=l?Object.keys(Q_(Object.assign({},Wd,{plugins:l}))):b6,u=i.reduce(function(v,g){var x=(d.getAttribute("data-tippy-"+g)||"").trim();if(!x)return v;if(g==="content")v[g]=x;else try{v[g]=JSON.parse(x)}catch{v[g]=x}return v},{});return u}function k_(d,l){var i=Object.assign({},l,{content:J_(l.content,[d])},l.ignoreAttributes?{}:w6(d,l.plugins));return i.aria=Object.assign({},Wd.aria,i.aria),i.aria={expanded:i.aria.expanded==="auto"?l.interactive:i.aria.expanded,content:i.aria.content==="auto"?l.interactive?null:"describedby":i.aria.content},i}var _6=function(){return"innerHTML"};function b2(d,l){d[_6()]=l}function S_(d){var l=Vm();return d===!0?l.className=Y_:(l.className=z_,x0(d)?l.appendChild(d):b2(l,d)),l}function T_(d,l){x0(l.content)?(b2(d,""),d.appendChild(l.content)):typeof l.content!="function"&&(l.allowHTML?b2(d,l.content):d.textContent=l.content)}function y2(d){var l=d.firstElementChild,i=h0(l.children);return{box:l,content:i.find(function(u){return u.classList.contains(W_)}),arrow:i.find(function(u){return u.classList.contains(Y_)||u.classList.contains(z_)}),backdrop:i.find(function(u){return u.classList.contains(s6)})}}function Z_(d){var l=Vm(),i=Vm();i.className=t6,i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var u=Vm();u.className=W_,u.setAttribute("data-state","hidden"),T_(u,d.props),l.appendChild(i),i.appendChild(u),v(d.props,d.props);function v(g,x){var m=y2(l),h=m.box,I=m.content,w=m.arrow;x.theme?h.setAttribute("data-theme",x.theme):h.removeAttribute("data-theme"),typeof x.animation=="string"?h.setAttribute("data-animation",x.animation):h.removeAttribute("data-animation"),x.inertia?h.setAttribute("data-inertia",""):h.removeAttribute("data-inertia"),h.style.maxWidth=typeof x.maxWidth=="number"?x.maxWidth+"px":x.maxWidth,x.role?h.setAttribute("role",x.role):h.removeAttribute("role"),(g.content!==x.content||g.allowHTML!==x.allowHTML)&&T_(I,d.props),x.arrow?w?g.arrow!==x.arrow&&(h.removeChild(w),h.appendChild(S_(x.arrow))):h.appendChild(S_(x.arrow)):w&&h.removeChild(w)}return{popper:l,onUpdate:v}}Z_.$$tippy=!0;var E6=1,u0=[],g2=[];function I6(d,l){var i=k_(d,Object.assign({},Wd,Q_(I_(l)))),u,v,g,x=!1,m=!1,h=!1,I=!1,w,V,y,D=[],E=__(Ce,i.interactiveDebounce),O,k=E6++,A=null,M=a6(i.plugins),G={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},b={id:k,reference:d,popper:Vm(),popperInstance:A,props:i,state:G,plugins:M,clearDelayTimeouts:Pe,setProps:He,setContent:Be,show:Me,hide:xe,hideWithInteractivity:et,enable:ee,disable:Ne,unmount:Qe,destroy:ot};if(!i.render)return b;var C=i.render(b),_=C.popper,q=C.onUpdate;_.setAttribute("data-tippy-root",""),_.id="tippy-"+b.id,b.popper=_,d._tippy=b,_._tippy=b;var F=M.map(function(P){return P.fn(b)}),L=d.hasAttribute("aria-expanded");return Q(),he(),U(),re("onCreate",[b]),i.showOnCreate&&Re(),_.addEventListener("mouseenter",function(){b.props.interactive&&b.state.isVisible&&b.clearDelayTimeouts()}),_.addEventListener("mouseleave",function(){b.props.interactive&&b.props.trigger.indexOf("mouseenter")>=0&&ge().addEventListener("mousemove",E)}),b;function j(){var P=b.props.touch;return Array.isArray(P)?P:[P,0]}function Y(){return j()[0]==="hold"}function R(){var P;return!!((P=b.props.render)!=null&&P.$$tippy)}function $(){return O||d}function ge(){var P=$().parentNode;return P?d6(P):document}function ue(){return y2(_)}function K(P){return b.state.isMounted&&!b.state.isVisible||Ku.isTouch||w&&w.type==="focus"?0:f2(b.props.delay,P?0:1,Wd.delay)}function U(P){P===void 0&&(P=!1),_.style.pointerEvents=b.props.interactive&&!P?"":"none",_.style.zIndex=""+b.props.zIndex}function re(P,B,H){if(H===void 0&&(H=!0),F.forEach(function(X){X[P]&&X[P].apply(X,B)}),H){var z;(z=b.props)[P].apply(z,B)}}function Oe(){var P=b.props.aria;if(P.content){var B="aria-"+P.content,H=_.id,z=em(b.props.triggerTarget||d);z.forEach(function(X){var oe=X.getAttribute(B);if(b.state.isVisible)X.setAttribute(B,oe?oe+" "+H:H);else{var J=oe&&oe.replace(H,"").trim();J?X.setAttribute(B,J):X.removeAttribute(B)}})}}function he(){if(!(L||!b.props.aria.expanded)){var P=em(b.props.triggerTarget||d);P.forEach(function(B){b.props.interactive?B.setAttribute("aria-expanded",b.state.isVisible&&B===$()?"true":"false"):B.removeAttribute("aria-expanded")})}}function ze(){ge().removeEventListener("mousemove",E),u0=u0.filter(function(P){return P!==E})}function we(P){if(!(Ku.isTouch&&(h||P.type==="mousedown"))){var B=P.composedPath&&P.composedPath()[0]||P.target;if(!(b.props.interactive&&P_(_,B))){if(em(b.props.triggerTarget||d).some(function(H){return P_(H,B)})){if(Ku.isTouch||b.state.isVisible&&b.props.trigger.indexOf("click")>=0)return}else re("onClickOutside",[b,P]);b.props.hideOnClick===!0&&(b.clearDelayTimeouts(),b.hide(),m=!0,setTimeout(function(){m=!1}),b.state.isMounted||Ee())}}}function ae(){h=!0}function fe(){h=!1}function qe(){var P=ge();P.addEventListener("mousedown",we,!0),P.addEventListener("touchend",we,ug),P.addEventListener("touchstart",fe,ug),P.addEventListener("touchmove",ae,ug)}function Ee(){var P=ge();P.removeEventListener("mousedown",we,!0),P.removeEventListener("touchend",we,ug),P.removeEventListener("touchstart",fe,ug),P.removeEventListener("touchmove",ae,ug)}function de(P,B){Le(P,function(){!b.state.isVisible&&_.parentNode&&_.parentNode.contains(_)&&B()})}function $e(P,B){Le(P,B)}function Le(P,B){var H=ue().box;function z(X){X.target===H&&(v2(H,"remove",z),B())}if(P===0)return B();v2(H,"remove",V),v2(H,"add",z),V=z}function N(P,B,H){H===void 0&&(H=!1);var z=em(b.props.triggerTarget||d);z.forEach(function(X){X.addEventListener(P,B,H),D.push({node:X,eventType:P,handler:B,options:H})})}function Q(){Y()&&(N("touchstart",_e,{passive:!0}),N("touchend",me,{passive:!0})),r6(b.props.trigger).forEach(function(P){if(P!=="manual")switch(N(P,_e),P){case"mouseenter":N("mouseleave",me);break;case"focus":N(h6?"focusout":"blur",ie);break;case"focusin":N("focusout",ie);break}})}function Ie(){D.forEach(function(P){var B=P.node,H=P.eventType,z=P.handler,X=P.options;B.removeEventListener(H,z,X)}),D=[]}function _e(P){var B,H=!1;if(!(!b.state.isEnabled||Z(P)||m)){var z=((B=w)==null?void 0:B.type)==="focus";w=P,O=P.currentTarget,he(),!b.state.isVisible&&i6(P)&&u0.forEach(function(X){return X(P)}),P.type==="click"&&(b.props.trigger.indexOf("mouseenter")<0||x)&&b.props.hideOnClick!==!1&&b.state.isVisible?H=!0:Re(P),P.type==="click"&&(x=!H),H&&!z&&Te(P)}}function Ce(P){var B=P.target,H=$().contains(B)||_.contains(B);if(!(P.type==="mousemove"&&H)){var z=ne().concat(_).map(function(X){var oe,J=X._tippy,Ve=(oe=J.popperInstance)==null?void 0:oe.state;return Ve?{popperRect:X.getBoundingClientRect(),popperState:Ve,props:i}:null}).filter(Boolean);u6(z,P)&&(ze(),Te(P))}}function me(P){var B=Z(P)||b.props.trigger.indexOf("click")>=0&&x;if(!B){if(b.props.interactive){b.hideWithInteractivity(P);return}Te(P)}}function ie(P){b.props.trigger.indexOf("focusin")<0&&P.target!==$()||b.props.interactive&&P.relatedTarget&&_.contains(P.relatedTarget)||Te(P)}function Z(P){return Ku.isTouch?Y()!==P.type.indexOf("touch")>=0:!1}function tt(){De();var P=b.props,B=P.popperOptions,H=P.placement,z=P.offset,X=P.getReferenceClientRect,oe=P.moveTransition,J=R()?y2(_).arrow:null,Ve=X?{getBoundingClientRect:X,contextElement:X.contextElement||$()}:d,ke={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(Pt){var pe=Pt.state;if(R()){var te=ue(),Ke=te.box;["placement","reference-hidden","escaped"].forEach(function(Ge){Ge==="placement"?Ke.setAttribute("data-placement",pe.placement):pe.attributes.popper["data-popper-"+Ge]?Ke.setAttribute("data-"+Ge,""):Ke.removeAttribute("data-"+Ge)}),pe.attributes.popper={}}}},le=[{name:"offset",options:{offset:z}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!oe}},ke];R()&&J&&le.push({name:"arrow",options:{element:J,padding:3}}),le.push.apply(le,(B==null?void 0:B.modifiers)||[]),b.popperInstance=e6(Ve,_,Object.assign({},B,{placement:H,onFirstUpdate:y,modifiers:le}))}function De(){b.popperInstance&&(b.popperInstance.destroy(),b.popperInstance=null)}function Se(){var P=b.props.appendTo,B,H=$();b.props.interactive&&P===K_||P==="parent"?B=H.parentNode:B=J_(P,[H]),B.contains(_)||B.appendChild(_),b.state.isMounted=!0,tt()}function ne(){return h0(_.querySelectorAll("[data-tippy-root]"))}function Re(P){b.clearDelayTimeouts(),P&&re("onTrigger",[b,P]),qe();var B=K(!0),H=j(),z=H[0],X=H[1];Ku.isTouch&&z==="hold"&&X&&(B=X),B?u=setTimeout(function(){b.show()},B):b.show()}function Te(P){if(b.clearDelayTimeouts(),re("onUntrigger",[b,P]),!b.state.isVisible){Ee();return}if(!(b.props.trigger.indexOf("mouseenter")>=0&&b.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(P.type)>=0&&x)){var B=K(!1);B?v=setTimeout(function(){b.state.isVisible&&b.hide()},B):g=requestAnimationFrame(function(){b.hide()})}}function ee(){b.state.isEnabled=!0}function Ne(){b.hide(),b.state.isEnabled=!1}function Pe(){clearTimeout(u),clearTimeout(v),cancelAnimationFrame(g)}function He(P){if(!b.state.isDestroyed){re("onBeforeUpdate",[b,P]),Ie();var B=b.props,H=k_(d,Object.assign({},B,I_(P),{ignoreAttributes:!0}));b.props=H,Q(),B.interactiveDebounce!==H.interactiveDebounce&&(ze(),E=__(Ce,H.interactiveDebounce)),B.triggerTarget&&!H.triggerTarget?em(B.triggerTarget).forEach(function(z){z.removeAttribute("aria-expanded")}):H.triggerTarget&&d.removeAttribute("aria-expanded"),he(),U(),q&&q(B,H),b.popperInstance&&(tt(),ne().forEach(function(z){requestAnimationFrame(z._tippy.popperInstance.forceUpdate)})),re("onAfterUpdate",[b,P])}}function Be(P){b.setProps({content:P})}function Me(){var P=b.state.isVisible,B=b.state.isDestroyed,H=!b.state.isEnabled,z=Ku.isTouch&&!b.props.touch,X=f2(b.props.duration,0,Wd.duration);if(!(P||B||H||z)&&!$().hasAttribute("disabled")&&(re("onShow",[b],!1),b.props.onShow(b)!==!1)){if(b.state.isVisible=!0,R()&&(_.style.visibility="visible"),U(),qe(),b.state.isMounted||(_.style.transition="none"),R()){var oe=ue(),J=oe.box,Ve=oe.content;p2([J,Ve],0)}y=function(){var le;if(!(!b.state.isVisible||I)){if(I=!0,_.offsetHeight,_.style.transition=b.props.moveTransition,R()&&b.props.animation){var be=ue(),Pt=be.box,pe=be.content;p2([Pt,pe],X),D_([Pt,pe],"visible")}Oe(),he(),E_(g2,b),(le=b.popperInstance)==null||le.forceUpdate(),re("onMount",[b]),b.props.animation&&R()&&$e(X,function(){b.state.isShown=!0,re("onShown",[b])})}},Se()}}function xe(){var P=!b.state.isVisible,B=b.state.isDestroyed,H=!b.state.isEnabled,z=f2(b.props.duration,1,Wd.duration);if(!(P||B||H)&&(re("onHide",[b],!1),b.props.onHide(b)!==!1)){if(b.state.isVisible=!1,b.state.isShown=!1,I=!1,x=!1,R()&&(_.style.visibility="hidden"),ze(),Ee(),U(!0),R()){var X=ue(),oe=X.box,J=X.content;b.props.animation&&(p2([oe,J],z),D_([oe,J],"hidden"))}Oe(),he(),b.props.animation?R()&&de(z,b.unmount):b.unmount()}}function et(P){ge().addEventListener("mousemove",E),E_(u0,E),E(P)}function Qe(){b.state.isVisible&&b.hide(),b.state.isMounted&&(De(),ne().forEach(function(P){P._tippy.unmount()}),_.parentNode&&_.parentNode.removeChild(_),g2=g2.filter(function(P){return P!==b}),b.state.isMounted=!1,re("onHidden",[b]))}function ot(){b.state.isDestroyed||(b.clearDelayTimeouts(),b.unmount(),Ie(),delete d._tippy,b.state.isDestroyed=!0,re("onDestroy",[b]))}}function ec(d,l){l===void 0&&(l={});var i=Wd.plugins.concat(l.plugins||[]);v6();var u=Object.assign({},l,{plugins:i}),v=c6(d),g=v.reduce(function(x,m){var h=m&&I6(m,u);return h&&x.push(h),x},[]);return x0(d)?g[0]:g}ec.defaultProps=Wd;ec.setDefaultProps=y6;ec.currentInput=Ku;Object.assign({},j_,{effect:function(l){var i=l.state,u={popper:{position:i.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(i.elements.popper.style,u.popper),i.styles=u,i.elements.arrow&&Object.assign(i.elements.arrow.style,u.arrow)}});ec.setDefaultProps({render:Z_});function D6(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,O,k,A,M,G,b,C,_,q,F,L,j,Y,R,$,ge,ue,K,U,re,Oe,he,ze,we,ae,fe,qe,Ee,de,$e,Le,N,Q,Ie,_e,Ce,me,ie,Z,tt,De,Se,ne,Re,Te,ee,Ne,Pe,He,Be,Me,xe,et,Qe,ot,P,B,H,z,X,oe,J,Ve,ke,le,be,Pt,pe,te,Ke,Ge,Ue,ye,Ye,vt,Ae,je,$t,Mt,Fe,_t,St,ce,ut,st,gt,mt,Gt,ft,Ht,Vt,se,ht,Tt,jt,pt,xt,Nt,At,Je,Ft,Xe,Et,rt,Bt,es,bt,ve,at,qt,It,nt,ct,Yt,yt,Dt,Qt,Ut,Ot,Jt,Lt,Rt,wt,Ns,ls,Kt,it,Zt,is,hs,W,ms,kt,ds,ss,os,tr,Cr,rs,us,cr,Ss,Ws,Xt,xs,Ts,Mr,Dr,Pr,sr,Es,dr,fs,ps,ta,Gr,as,As,Sn,jr,Fs,Tn,Nr,ns,Vr,Ys,bs,Bs,wa,kr,Wt,rr,ur,fr,pr,Br,Is,ys,cl,fi,sa,cs,pi,qr,ra,vi,dl,co,vs,Os,Rr,Ya,ts,vr,Sr,gr,qs,$r,_a,An,ul,ar,gs,Ul,gi,ws,aa,Fn,hr,za,hi,mr,Ds,nr,Ls,Rs,Hr,Ka,mi,xr,zs,Cs,Ur,On,Ln,Ja,xi,Ps,Ms,na,uo,bi,Cn,lr,br,Tr,ir,fl,Wr,la,Ks,Xa,Yc,zc,ia,yi,Yd,fo,wi,yr,_s,Mn,Gn,Qa,_i,Ei,Ea,wr,po,Kc,oa,jn,Jc,Ii,Ia,Za,Nn,Zu,vo,en,tn,Da,Gs,Pa,go,ca,sn,Va,ka,Wl,Di,Pi,Yl,Vi,Bn,_r,rn,qn,an,sc,Xc,ho,pl,da,js,Sa,ki,zd,or,Ar,nn,Si,Ti,ln,on,zl,vl,Vs,Ta,Ai,Aa,rc,Qc,Er,Js,gl,Rn,$s,Fa,Zc,hl,Xs,Fi,Kd,Yr,zr,Jd,ed,Kr,cn,dn,ml,mo,Kl,Xd,ua,Qs,xl,$n,Oi,Li,fa,Hn,ef,Qd,xo,Zs,un,tf,Zd,ac,Un,fn,nc,eu,Ci,Oa,Wn,bl,bo,sf,Yn,yl,yo,wo,La,zn,pn,tu,lc,wl,ic,_l,Jl,Kn,Ca,_o,Mi,vn,El,Ma,Il,su,Xl,Jn,ru,Gi,Fr,gn,Ga,ji,Ql,Ni,rf,Eo,ja,Zl,Io,Dl,Xn,er,pa,Pl,af,au,va,Bi,Do,ei,ks,Na,Po,Vl,td,oc,Jr,hn,nu,cc,Xr,mn,qi,Vo,kl,dc,uc,ti,Sl,Ba,fc,lu,Qn,ga,xn,sd,Ri,pc,Tl,Al,si,iu,ri,Qr,ha,Fl,nf,ai,ko,Ol,bn,Ll,So,vc,Zn,ma,To,rd,yn,qa,ad,gc,wn,$i,ni,Zr,el,lf,Hi,xa,hc,mc,Ao,Ra,xc,bc,Fo,$a,li,tl,Oo,mg,Cv,sl,Cl,nd,xg,ld,ou,Mv,yc,Lo,Ir,Co,bg,Gv,of,cu,Mo,Go,yg,jv,cf,ii,wc,Ui,du,Nv,Wi,Ml,df,Bv,_n,Ha,Yi,_c,wg,id,jo,od,cd,_g,No,Ec,qv,uf,Gl,ff,uu,dd,pf,Eg,$p,Ig,ud,Ic,Dc,Rv,Dg,Pg,jl,fu,lm,Vg,kg,fd,zi,Ki,im,Pc,Hp,Vc,kc,om,Sg,Tg,Bo,pu,$v,Up,vu,gu,Ji,Wp,Sc,Hv,Ag,Tc,qo,Fg,Og,pd,hu,Yp,Lg,zp,vf,Cg,gf,Ro,vd,gd,mu,cm,Mg,hd,xu,Kp,Jp,bu,Gg,yu,$o,md,oi,wu,dm,xd,jg,hf,Xi,Ac,um,Ng,_u,Nl,Bg,mf,ci,Fc,Or,Qi,Eu,fm,qg,Zi,Oc,Uv,Rg,eo,En,Wv,Xp,rl,bd,$g,Iu,Qp,Hg,Ug,Du,Zp,Wg,ev,Ho,Yg,Bl,yd,wd,tv,Lc,_d,sv,to,ql,pm,zg,so,Ed,Id,xf,Pu,Yv,Kg,Ua,rv,av,Jg,Vu,Xg,nv,Cc,Qg,Zg,lv,iv,ku,eh,ov,In,th,Rl,sh,ro,Uo,ao,Dd,Pd,rh,cv,no,Vd,ah,dv,uv,fv,bf,nh,Su,lh,kd,yf,Wo,zv,ih,Sd,di,oh,ch,Tu,dh,pv,ea,Td,Yo,uh,Mc,vm,vv,Ad,Fd,gv,hv,wf,fh,Au,Od,Ld,ph,Gc,Kv,vh,Fu,ui,gh,hh,mh,Cd,zo,mv,Ou,Jv,xh,Ko,bh,Md,yh,xv,bv,Jo,Gd,wh,lo,gm,_h,Lu,jd,yv,Eh,Ih,al,Nd,Dh,Cu,hm,wv,Bd,_v,_f,Mu,Ph,b0,Ev,Ef,Vh,y0,w0,Xv,F2,_0,Qv,kh,E0,I0,D0,Iv,Xo,Dv,Zv,P0,V0,qd,k0,S0,T0,A0,F0,O0,If,Sh,Pv,O2,L0,Qo,Df,eg,C0,M0,Th,Ze,Pf,G0,Vf,j0,kf,N0,Sf,B0,Tf,q0,Af,R0,Ff,$0,Of,H0,Lf,U0,Cf,W0,Mf,Y0,Gf,z0,jf,K0,Nf,J0,Bf,X0,qf,Q0,Rf,Z0,$f,ex,Hf,tx,Uf,sx,Wf,rx,Yf,ax,zf,nx,Kf,lx,Jf,ix,Xf,ox,Qf,cx,Zf,dx,ep,ux,tp,fx,sp,px,rp,vx,ap,gx,np,hx,lp,mx,ip,xx,op,bx,cp,yx,dp,wx,up,_x,fp,Ex,pp,Ix,vp,Dx,gp,Px,hp,Vx,mp,kx,xp,Sx,bp,Tx,yp,Ax,wp,Fx,_p,Ox,Ep,Lx,Ip,Cx,Mx,Dp,tg,Gx,jx,Ah,$l,Pp,Nx,Vp,Bx,kp,qx,Sp,Rx,Tp,$x,Ap,Hx,Fp,Ux,Op,Wx,Lp,Yx,Cp,zx,Kx,Mp,sg,Jx,Xx,Fh,Gu,Gp,Qx,jp,Zx,Np,eb,Bp,tb,sb,Fm,rb,qp,rg,ab,nb,ju,lb,ib,ob,cb,Nu,Bu,ag,L2,db,mm,ub,fb,qu,ng,C2,pb,xm,vb,gb,Rd,lg,M2,hb,bm,mb,xb,Zo,bb,ym,yb,wb,Vv,Oh,_b,Eb,kv,Lh,Ib,Db,Ru,ig,G2,Pb,og,j2,Vb,cg,N2,kb,wm,Sb,jc;return{c(){l=s("div"),i=s("div"),u=s("div"),v=o(),g=s("button"),x=f("Expand"),m=o(),h=s("style"),I=f(`#expandElement {
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
    })`),D=o(),E=s("div"),O=o(),k=s("div"),A=o(),M=s("div"),G=o(),b=s("div"),C=o(),_=s("div"),q=s("style"),F=f(`p {
      font-size: 1.2rem;
    }`),L=o(),j=s("div"),Y=s("section"),R=s("div"),$=s("div"),ge=s("h2"),ue=f("Exploration station"),K=o(),U=s("h2"),re=f("Green power from non-recycled waste"),Oe=o(),he=s("p"),ze=f(`Power-from-waste technology can convert non-recycled waste into a myriad of different outputs, including
            electricity, heating, cooling, and biochar, among others`),we=o(),ae=s("a"),fe=s("img"),Ee=o(),de=s("span"),$e=f("Explore the possibilites"),Le=o(),N=s("div"),Q=s("style"),Ie=f(`#topRightCluster {
              background-image: url('/assets/Group 14.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              padding: 50px;
              background-origin: content-box;
            }
            #topRightCluster img {
              visibility: hidden;
            }`),_e=o(),Ce=s("img"),tt=o(),De=s("img"),Te=o(),ee=s("img"),Be=o(),Me=s("img"),ot=o(),P=s("img"),X=o(),oe=s("img"),le=o(),be=s("img"),Ke=o(),Ge=s("img"),vt=o(),Ae=s("section"),je=s("style"),$t=f(`#thegrid div {
          padding: 10px 0px 10px 10px;
        }
        #thegrid div.flex {
          padding: 20px 10px 20px 10px;
        }
        #thegrid2 div {
          padding: 15px 40px 15px 40px;
          line-height: 1.5;
          vertical-align: middle;
        }`),Mt=o(),Fe=s("h2"),_t=f("How it works"),St=o(),ce=s("div"),ut=s("div"),st=s("div"),gt=s("img"),Gt=o(),ft=s("div"),Ht=f("Plastic waste"),Vt=o(),se=s("div"),ht=s("div"),Tt=s("img"),pt=o(),xt=s("div"),Nt=f("Food waste"),At=o(),Je=s("div"),Ft=s("div"),Xe=s("img"),rt=o(),Bt=s("div"),es=f("Animal waste"),bt=o(),ve=s("div"),at=s("div"),qt=s("img"),nt=o(),ct=s("div"),Yt=f("Agricultural waste"),yt=o(),Dt=s("div"),Qt=s("div"),Ut=s("img"),Jt=o(),Lt=s("div"),Rt=f("Wood waste"),wt=o(),Ns=s("div"),ls=f("Power from waste technology"),Kt=o(),it=s("div"),Zt=s("div"),is=o(),hs=s("div"),W=f(" "),ms=o(),kt=s("div"),ds=f(" "),ss=o(),os=s("div"),tr=f(" "),Cr=o(),rs=s("div"),us=f(" "),cr=o(),Ss=s("div"),Ws=o(),Xt=s("div"),xs=s("div"),Ts=f("Liquid fertiliser"),Mr=o(),Dr=s("div"),Pr=f("Solid digestate"),sr=o(),Es=s("div"),dr=f("Biogas"),fs=o(),ps=s("div"),ta=f("Syngas"),Gr=o(),as=s("div"),As=f("Bio-oil"),Sn=o(),jr=s("div"),Fs=f("Biochar"),Tn=o(),Nr=s("div"),ns=s("div"),Vr=f("Heat / Cool"),Ys=o(),bs=s("div"),Bs=s("div"),wa=f("Electricity"),kr=o(),Wt=s("h1"),rr=s("div"),ur=s("div"),fr=s("div"),pr=s("img"),Is=o(),ys=s("div"),cl=s("style"),fi=f(`p {
                font-size: 1.2rem;
              }`),sa=o(),cs=s("h2"),pi=f("Exploration station"),qr=o(),ra=s("div"),vi=f("Interact with our exploration "),dl=s("br"),co=f(`
              station to learn more`),vs=o(),Os=s("p"),Rr=f(`Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you!`),Ya=o(),ts=s("div"),vr=s("style"),Sr=f(`.cow-element {
            /* overflow: visible !important; */
            box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
          }`),gr=o(),qs=s("div"),$r=s("div"),_a=s("script"),An=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),ul=o(),ar=s("button"),gs=s("img"),gi=o(),ws=s("div"),aa=s("div"),Fn=s("div"),hr=s("img"),hi=o(),mr=s("div"),Ds=s("h1"),nr=f("Cow manure"),Ls=o(),Rs=s("p"),Hr=s("span"),Ka=f("Biogas Yield:"),mi=f(`
                  18m³
                  `),xr=s("img"),Cs=o(),Ur=s("p"),On=s("span"),Ln=f("Energy content:"),Ja=f(`
                  Low`),xi=o(),Ps=s("div"),Ms=s("button"),na=s("img"),bi=f(`
                High organic content`),Cn=o(),lr=s("button"),br=s("img"),ir=f(`
                High nutrient content`),fl=o(),Wr=s("div"),la=s("button"),Ks=s("img"),Yc=f(`
                High nitrogen content`),zc=o(),ia=s("button"),yi=s("img"),fo=f(`
                Low pH levels`),wi=o(),yr=s("div"),_s=s("img"),Gn=o(),Qa=s("h1"),_i=s("a"),Ei=f("Case study"),Ea=o(),wr=s("img"),Kc=o(),oa=s("div"),jn=s("h2"),Jc=f("600 dairy cows or 3500 tonnes of cow manure per year"),Ii=o(),Ia=s("ul"),Za=s("li"),Nn=f("Produces 656m³ biogas every day"),Zu=o(),vo=s("li"),en=f("Ability to power 187 UK households every day"),tn=o(),Da=s("div"),Gs=s("div"),Pa=s("div"),go=s("div"),ca=s("img"),Va=o(),ka=s("div"),Wl=s("h1"),Di=f("Most appropriate technology"),Pi=o(),Yl=s("p"),Vi=f("Anaerobic Digestion"),Bn=o(),_r=s("div"),rn=s("a"),qn=s("button"),an=s("img"),Xc=f(`
                    Start your project`),ho=o(),pl=s("a"),da=s("button"),js=s("img"),ki=f(`
                    Learn more`),zd=o(),or=s("div"),Ar=s("div"),nn=s("script"),Si=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),Ti=o(),ln=s("button"),on=s("img"),vl=o(),Vs=s("div"),Ta=s("div"),Ai=s("div"),Aa=s("img"),Qc=o(),Er=s("div"),Js=s("h1"),gl=f("Food waste"),Rn=o(),$s=s("p"),Fa=s("span"),Zc=f("Biogas Yield:"),hl=f(`
                  45m³
                  `),Xs=s("img"),Kd=o(),Yr=s("p"),zr=s("span"),Jd=f("Energy content:"),ed=f(`
                  High`),Kr=o(),cn=s("div"),dn=s("button"),ml=s("img"),Kl=f(`
                High organic content`),Xd=o(),ua=s("button"),Qs=s("img"),$n=f(`
                High nutrient content`),Oi=o(),Li=s("div"),fa=s("button"),Hn=s("img"),Qd=f(`
                Medium nitrogen content`),xo=o(),Zs=s("button"),un=s("img"),Zd=f(`
                Low pH levels`),ac=o(),Un=s("div"),fn=s("img"),eu=o(),Ci=s("h1"),Oa=s("a"),Wn=f("Case study"),bl=o(),bo=s("img"),Yn=o(),yl=s("div"),yo=s("h2"),wo=f("100 people or 250 tonnes of food waste per year"),La=o(),zn=s("ul"),pn=s("li"),tu=f("Produces 156m³ biogas every day"),lc=o(),wl=s("li"),ic=f("Ability to power 19 UK households every day"),_l=o(),Jl=s("div"),Kn=s("div"),Ca=s("div"),_o=s("div"),Mi=s("img"),El=o(),Ma=s("div"),Il=s("h1"),su=f("Most appropriate technology"),Xl=o(),Jn=s("p"),ru=f("Anaerobic Digestion"),Gi=o(),Fr=s("div"),gn=s("a"),Ga=s("button"),ji=s("img"),Ni=f(`
                    Start your project`),rf=o(),Eo=s("a"),ja=s("button"),Zl=s("img"),Dl=f(`
                    Learn more`),Xn=o(),er=s("div"),pa=s("div"),Pl=s("script"),af=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),au=o(),va=s("button"),Bi=s("img"),ei=o(),ks=s("div"),Na=s("div"),Po=s("div"),Vl=s("img"),oc=o(),Jr=s("div"),hn=s("h1"),nu=f("PE plastic"),cc=o(),Xr=s("p"),mn=s("span"),qi=f("GCV:"),Vo=f(`
                  46 MJ/kg
                  `),kl=s("img"),uc=o(),ti=s("p"),Sl=s("span"),Ba=f("Energy content:"),fc=f(`
                  Very high`),lu=o(),Qn=s("div"),ga=s("button"),xn=s("img"),Ri=f(`
                Very low organic content`),pc=o(),Tl=s("button"),Al=s("img"),iu=f(`
                Very low nutrient content`),ri=o(),Qr=s("div"),ha=s("button"),Fl=s("img"),ai=f(`
                Very low nitrogen content`),ko=o(),Ol=s("button"),bn=s("img"),So=f(`
                PET bottles`),vc=o(),Zn=s("div"),ma=s("img"),rd=o(),yn=s("h1"),qa=s("a"),ad=f("Case study"),gc=o(),wn=s("img"),ni=o(),Zr=s("div"),el=s("h2"),lf=f("10000 PET bottles or 100 tonnes of plastic per year"),Hi=o(),xa=s("ul"),hc=s("li"),mc=f("Produces 75kWh every day"),Ao=o(),Ra=s("li"),xc=f("Ability to power 63 UK households every day"),bc=o(),Fo=s("div"),$a=s("div"),li=s("div"),tl=s("div"),Oo=s("img"),Cv=o(),sl=s("div"),Cl=s("h1"),nd=f("Most appropriate technology"),xg=o(),ld=s("p"),ou=f("Pyrolysis"),Mv=o(),yc=s("div"),Lo=s("a"),Ir=s("button"),Co=s("img"),Gv=f(`
                    Start your project`),of=o(),cu=s("a"),Mo=s("button"),Go=s("img"),jv=f(`
                    Learn more`),cf=o(),ii=s("div"),wc=s("div"),Ui=s("script"),du=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),Nv=o(),Wi=s("button"),Ml=s("img"),Bv=o(),_n=s("div"),Ha=s("div"),Yi=s("div"),_c=s("img"),id=o(),jo=s("div"),od=s("h1"),cd=f("Technology"),_g=o(),No=s("p"),Ec=s("span"),qv=f("GCV:"),uf=f(`
                  N/A MJ/kg
                  `),Gl=s("img"),uu=o(),dd=s("p"),pf=s("span"),Eg=f("Energy content:"),$p=f(`
                  High`),Ig=o(),ud=s("div"),Ic=s("button"),Dc=s("img"),Dg=f(`
                High organic content`),Pg=o(),jl=s("button"),fu=s("img"),Vg=f(`
                High nutrient content`),kg=o(),fd=s("div"),zi=s("button"),Ki=s("img"),Pc=f(`
                High nitrogen content`),Hp=o(),Vc=s("button"),kc=s("img"),Sg=f(`
                Latest technology`),Tg=o(),Bo=s("div"),pu=s("img"),Up=o(),vu=s("h1"),gu=s("a"),Ji=f("Case study"),Wp=o(),Sc=s("img"),Ag=o(),Tc=s("div"),qo=s("h2"),Fg=f("600 dairy cows or 3500 tonnes of cow manure per year"),Og=o(),pd=s("ul"),hu=s("li"),Yp=f("Produces 656m³ biogas every day"),Lg=o(),zp=s("li"),vf=f("Ability to power 187 UK households every day"),Cg=o(),gf=s("div"),Ro=s("div"),vd=s("div"),gd=s("div"),mu=s("img"),Mg=o(),hd=s("div"),xu=s("h1"),Kp=f("Most appropriate technology"),Jp=o(),bu=s("p"),Gg=f("New Technology"),yu=o(),$o=s("div"),md=s("a"),oi=s("button"),wu=s("img"),xd=f(`
                    Start your project`),jg=o(),hf=s("a"),Xi=s("button"),Ac=s("img"),Ng=f(`
                    Learn more`),_u=o(),Nl=s("div"),Bg=o(),mf=s("section"),ci=s("div"),Fc=s("div"),Or=s("div"),Qi=s("button"),Eu=s("img"),qg=o(),Zi=s("button"),Oc=s("img"),Rg=o(),eo=s("button"),En=s("img"),Xp=o(),rl=s("button"),bd=s("div"),$g=f("Technology"),Iu=o(),Qp=s("style"),Hg=f(`@keyframes bounce {
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
              }`),Ug=o(),Du=s("script"),Zp=f("const animatedElements = document.querySelectorAll('.techbuttons')\n\n              animatedElements.forEach(element => {\n                const randomDelay = Math.floor(Math.random() * 1000) // Generate a random delay between 0 and 1000 milliseconds\n                element.style.animationDelay = `${randomDelay}ms`\n                element.style.animationDuration = `${1000 + randomDelay}ms`\n              })"),Wg=o(),ev=s("style"),Ho=f(`.growbutton:hover {
              box-shadow: 0 0 5px 1px white;
            }
            .growbutton img {
              max-width: 190%;
            }`),Yg=o(),Bl=s("div"),yd=s("div"),wd=s("input"),tv=o(),Lc=s("button"),_d=s("span"),sv=o(),to=s("button"),ql=s("img"),zg=o(),so=s("h1"),Ed=s("div"),Id=s("div"),xf=s("div"),Pu=s("img"),Kg=o(),Ua=s("div"),rv=s("style"),av=f(`p {
                font-size: 1.2rem;
              }`),Jg=o(),Vu=s("h2"),Xg=f("The PFP Calculator"),nv=o(),Cc=s("div"),Qg=f(`Find the right technology
              `),Zg=s("br"),lv=f(`
              for your needs`),iv=o(),ku=s("p"),eh=f(`We will assist you every step of the way to ensure a smooth and successful implementation of your power-from-waste
              project`),ov=o(),In=s("div"),th=o(),Rl=s("div"),sh=o(),ro=s("section"),Uo=s("div"),ao=s("div"),Dd=s("div"),Pd=s("p"),rh=f("Waste type"),cv=o(),no=s("h2"),Vd=s("span"),ah=f("PE Plastic"),dv=o(),uv=s("br"),fv=o(),bf=s("span"),nh=f("10,000 tonnes"),Su=f(`
               per day`),lh=o(),kd=s("div"),yf=s("div"),Wo=s("img"),ih=o(),Sd=s("div"),di=s("h3"),oh=f("Most appropriate technology"),ch=o(),Tu=s("h2"),dh=f("Pyrolysis"),pv=o(),ea=s("div"),Td=s("div"),Yo=s("div"),uh=f("Energy content "),Mc=s("img"),vv=o(),Ad=s("div"),Fd=s("span"),gv=f("18"),hv=o(),wf=s("span"),fh=f("MJ/kg"),Au=o(),Od=s("div"),Ld=s("div"),ph=f("Heat produced "),Gc=s("img"),vh=o(),Fu=s("div"),ui=s("span"),gh=f("11,200"),hh=f(`
              kWh per year`),mh=o(),Cd=s("div"),zo=s("div"),mv=f("Heat savings "),Ou=s("img"),xh=o(),Ko=s("div"),bh=f(`£
              `),Md=s("span"),yh=f("48,000"),xv=f(`
              per year`),bv=o(),Jo=s("div"),Gd=s("div"),wh=f("Electricity produced "),lo=s("img"),_h=o(),Lu=s("div"),jd=s("span"),yv=f("4,800"),Eh=f(`
              kWh per year`),Ih=o(),al=s("div"),Nd=s("div"),Dh=f("Electrical savings "),Cu=s("img"),wv=o(),Bd=s("div"),_v=f(`£
              `),_f=s("span"),Mu=f("70,000"),Ph=f(`
              per year`),b0=o(),Ev=s("div"),Ef=s("div"),Vh=s("span"),y0=f("Char"),w0=f(`
               produced
              `),Xv=s("img"),_0=o(),Qv=s("div"),kh=s("span"),E0=f("500"),I0=f(`
              kilograms`),D0=o(),Iv=s("section"),Xo=s("div"),Dv=s("div"),Zv=s("h1"),P0=f("The PFP Calculator"),V0=o(),qd=s("p"),k0=f(`Our easy-to-use calculator is here to give you a quick snapshot of what your waste-to-energy project could look
            like. It helps you identify the most suitable technology and estimate energy output, serving as a valuable first
            step in your journey to green power.
            `),S0=s("br"),T0=o(),A0=s("br"),F0=f(`
            Think of it as a helpful starting point!`),O0=o(),If=s("div"),Sh=s("div"),Pv=s("img"),L0=o(),Qo=s("div"),Df=s("div"),eg=s("button"),C0=f("Waste type"),M0=o(),Th=s("div"),Ze=s("select"),Pf=s("option"),G0=f("Cheese production"),Vf=s("option"),j0=f("Butter production"),kf=s("option"),N0=f("Ice cream"),Sf=s("option"),B0=f("Beer production"),Tf=s("option"),q0=f("Wine production"),Af=s("option"),R0=f("Spirits production"),Ff=s("option"),$0=f("Ethanol production"),Of=s("option"),H0=f("Pulp production"),Lf=s("option"),U0=f("Juice production"),Cf=s("option"),W0=f("Tomato ketchup"),Mf=s("option"),Y0=f("Bovine meat"),Gf=s("option"),z0=f("Pig meat"),jf=s("option"),K0=f("Sheep meat"),Nf=s("option"),J0=f("Frozen potatoes"),Bf=s("option"),X0=f("Prepared potatoes (crisps)"),qf=s("option"),Q0=f("Potato starch"),Rf=s("option"),Z0=f("Dried potatoes"),$f=s("option"),ex=f("Sugar production"),Hf=s("option"),tx=f("Yeast production"),Uf=s("option"),sx=f("Vegetable oils production"),Wf=s("option"),rx=f("Biodiesel production"),Yf=s("option"),ax=f("Pig manure"),zf=s("option"),nx=f("Dairy Cattle"),Kf=s("option"),lx=f("Non diary cattle"),Jf=s("option"),ix=f("Buffalo"),Xf=s("option"),ox=f("Chicken layer manure"),Qf=s("option"),cx=f("Chicken broiler manure"),Zf=s("option"),dx=f("Sheep"),ep=s("option"),ux=f("Food waste"),tp=s("option"),fx=f("Fish waste"),sp=s("option"),px=f("Coffee grounds"),rp=s("option"),vx=f("Crop residues"),ap=s("option"),gx=f("Maize silage"),np=s("option"),hx=f("Cereal"),lp=s("option"),mx=f("Grass silage"),ip=s("option"),xx=f("Pulp & Paper Waste"),op=s("option"),bx=f("Textile Waste"),cp=s("option"),yx=f("PE Plastic"),dp=s("option"),wx=f("SRF"),up=s("option"),_x=f("RDF"),fp=s("option"),Ex=f("PP Plastic"),pp=s("option"),Ix=f("PS Plastic"),vp=s("option"),Dx=f("PVC Plastic"),gp=s("option"),Px=f("PET Plastic"),hp=s("option"),Vx=f("Rubber"),mp=s("option"),kx=f("Wood waste"),xp=s("option"),Sx=f("Municipal Solid Waste (MSW)"),bp=s("option"),Tx=f("Medical Waste"),yp=s("option"),Ax=f("Ceramics"),wp=s("option"),Fx=f("Sand"),_p=s("option"),Ox=f("Dust"),Ep=s("option"),Lx=f("Glass"),Ip=s("option"),Cx=f("Metals"),Mx=o(),Dp=s("div"),tg=s("button"),Gx=f("Kilograms per day"),jx=o(),Ah=s("div"),$l=s("select"),Pp=s("option"),Nx=f("5 kg"),Vp=s("option"),Bx=f("10 kg"),kp=s("option"),qx=f("100 kg"),Sp=s("option"),Rx=f("400 kg"),Tp=s("option"),$x=f("1000 kg"),Ap=s("option"),Hx=f("4000 kg"),Fp=s("option"),Ux=f("10,000 kg"),Op=s("option"),Wx=f("20,000 kg"),Lp=s("option"),Yx=f("40,000 kg"),Cp=s("option"),zx=f("> 40,000 kg"),Kx=o(),Mp=s("div"),sg=s("button"),Jx=f("Client needs"),Xx=o(),Fh=s("div"),Gu=s("select"),Gp=s("option"),Qx=f("Electricity"),jp=s("option"),Zx=f("Heating / Cooling"),Np=s("option"),eb=f("Carbon credits"),Bp=s("option"),tb=f("Fertiliser"),sb=o(),Fm=s("div"),rb=o(),qp=s("div"),rg=s("div"),ab=f("Your project is feasible"),nb=o(),ju=s("p"),lb=f(`Review your results to explore the different possibilities and
            `),ib=s("br"),ob=f(`
            book a slot with us for personalised guidance on next steps`),cb=o(),Nu=s("div"),Bu=s("a"),ag=s("img"),db=o(),mm=s("span"),ub=f("Book a call with us"),fb=o(),qu=s("a"),ng=s("img"),pb=o(),xm=s("span"),vb=f("Learn more"),gb=o(),Rd=s("button"),lg=s("img"),hb=o(),bm=s("span"),mb=f("Calculate"),xb=o(),Zo=s("div"),bb=o(),ym=s("script"),yb=f(`function calculate() {
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
      }`),wb=o(),Vv=s("div"),Oh=s("div"),_b=f("Copyright © 2023 Power for Planet"),Eb=o(),kv=s("div"),Lh=s("div"),Ib=f("Privacy Policy"),Db=o(),Ru=s("div"),ig=s("img"),Pb=o(),og=s("img"),Vb=o(),cg=s("img"),kb=o(),wm=s("script"),Sb=f(`function toggleElement(k) {
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

    setTimeout(() => {
      sortCombo('colorselector')
    }, 200)`),this.h()},l(Ct){l=r(Ct,"DIV",{style:!0});var ba=n(l);i=r(ba,"DIV",{class:!0});var B2=n(i);u=r(B2,"DIV",{id:!0,class:!0});var eE=n(u);eE.forEach(a),B2.forEach(a),v=c(ba),g=r(ba,"BUTTON",{id:!0,class:!0});var q2=n(g);x=p(q2,"Expand"),q2.forEach(a),m=c(ba),h=r(ba,"STYLE",{});var R2=n(h);I=p(R2,`#expandElement {
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
    }`),R2.forEach(a),w=c(ba),V=r(ba,"SCRIPT",{});var $2=n(V);y=p($2,`const expandElement = document.getElementById('expandElement')
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
    })`),$2.forEach(a),ba.forEach(a),D=c(Ct),E=r(Ct,"DIV",{class:!0,id:!0}),n(E).forEach(a),O=c(Ct),k=r(Ct,"DIV",{class:!0,id:!0}),n(k).forEach(a),A=c(Ct),M=r(Ct,"DIV",{class:!0,id:!0}),n(M).forEach(a),G=c(Ct),b=r(Ct,"DIV",{class:!0,id:!0}),n(b).forEach(a),C=c(Ct),_=r(Ct,"DIV",{class:!0});var Ch=n(_);q=r(Ch,"STYLE",{});var H2=n(q);F=p(H2,`p {
      font-size: 1.2rem;
    }`),H2.forEach(a),L=c(Ch),j=r(Ch,"DIV",{class:!0});var Dn=n(j);Y=r(Dn,"SECTION",{class:!0});var U2=n(Y);R=r(U2,"DIV",{class:!0});var Om=n(R);$=r(Om,"DIV",{class:!0});var Sv=n($);ge=r(Sv,"H2",{class:!0});var W2=n(ge);ue=p(W2,"Exploration station"),W2.forEach(a),K=c(Sv),U=r(Sv,"H2",{class:!0});var Y2=n(U);re=p(Y2,"Green power from non-recycled waste"),Y2.forEach(a),Oe=c(Sv),he=r(Sv,"P",{class:!0});var z2=n(he);ze=p(z2,`Power-from-waste technology can convert non-recycled waste into a myriad of different outputs, including
            electricity, heating, cooling, and biochar, among others`),z2.forEach(a),we=c(Sv),ae=r(Sv,"A",{class:!0,href:!0});var Lm=n(ae);fe=r(Lm,"IMG",{class:!0,src:!0,alt:!0}),Ee=c(Lm),de=r(Lm,"SPAN",{});var K2=n(de);$e=p(K2,"Explore the possibilites"),K2.forEach(a),Lm.forEach(a),Sv.forEach(a),Le=c(Om),N=r(Om,"DIV",{class:!0,id:!0});var Pn=n(N);Q=r(Pn,"STYLE",{});var J2=n(Q);Ie=p(J2,`#topRightCluster {
              background-image: url('/assets/Group 14.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              padding: 50px;
              background-origin: content-box;
            }
            #topRightCluster img {
              visibility: hidden;
            }`),J2.forEach(a),_e=c(Pn),Ce=r(Pn,"IMG",{class:!0,src:!0,alt:!0}),tt=c(Pn),De=r(Pn,"IMG",{class:!0,src:!0,alt:!0}),Te=c(Pn),ee=r(Pn,"IMG",{class:!0,src:!0,alt:!0}),Be=c(Pn),Me=r(Pn,"IMG",{class:!0,src:!0,alt:!0}),ot=c(Pn),P=r(Pn,"IMG",{class:!0,src:!0,alt:!0}),X=c(Pn),oe=r(Pn,"IMG",{class:!0,src:!0,alt:!0}),le=c(Pn),be=r(Pn,"IMG",{class:!0,src:!0,alt:!0}),Ke=c(Pn),Ge=r(Pn,"IMG",{class:!0,src:!0,alt:!0}),Pn.forEach(a),Om.forEach(a),U2.forEach(a),vt=c(Dn),Ae=r(Dn,"SECTION",{class:!0,style:!0});var Hl=n(Ae);je=r(Hl,"STYLE",{});var X2=n(je);$t=p(X2,`#thegrid div {
          padding: 10px 0px 10px 10px;
        }
        #thegrid div.flex {
          padding: 20px 10px 20px 10px;
        }
        #thegrid2 div {
          padding: 15px 40px 15px 40px;
          line-height: 1.5;
          vertical-align: middle;
        }`),X2.forEach(a),Mt=c(Hl),Fe=r(Hl,"H2",{class:!0});var Q2=n(Fe);_t=p(Q2,"How it works"),Q2.forEach(a),St=c(Hl),ce=r(Hl,"DIV",{class:!0,id:!0});var $u=n(ce);ut=r($u,"DIV",{class:!0});var Cm=n(ut);st=r(Cm,"DIV",{class:!0});var Z2=n(st);gt=r(Z2,"IMG",{src:!0,alt:!0}),Z2.forEach(a),Gt=c(Cm),ft=r(Cm,"DIV",{class:!0});var ey=n(ft);Ht=p(ey,"Plastic waste"),ey.forEach(a),Cm.forEach(a),Vt=c($u),se=r($u,"DIV",{class:!0});var Mm=n(se);ht=r(Mm,"DIV",{class:!0});var ty=n(ht);Tt=r(ty,"IMG",{src:!0,alt:!0}),ty.forEach(a),pt=c(Mm),xt=r(Mm,"DIV",{class:!0});var sy=n(xt);Nt=p(sy,"Food waste"),sy.forEach(a),Mm.forEach(a),At=c($u),Je=r($u,"DIV",{class:!0});var Gm=n(Je);Ft=r(Gm,"DIV",{class:!0});var ry=n(Ft);Xe=r(ry,"IMG",{src:!0,alt:!0}),ry.forEach(a),rt=c(Gm),Bt=r(Gm,"DIV",{class:!0});var ay=n(Bt);es=p(ay,"Animal waste"),ay.forEach(a),Gm.forEach(a),bt=c($u),ve=r($u,"DIV",{class:!0});var jm=n(ve);at=r(jm,"DIV",{class:!0});var ny=n(at);qt=r(ny,"IMG",{src:!0,alt:!0}),ny.forEach(a),nt=c(jm),ct=r(jm,"DIV",{class:!0});var ly=n(ct);Yt=p(ly,"Agricultural waste"),ly.forEach(a),jm.forEach(a),yt=c($u),Dt=r($u,"DIV",{class:!0});var Nm=n(Dt);Qt=r(Nm,"DIV",{class:!0});var iy=n(Qt);Ut=r(iy,"IMG",{src:!0,alt:!0}),iy.forEach(a),Jt=c(Nm),Lt=r(Nm,"DIV",{class:!0});var oy=n(Lt);Rt=p(oy,"Wood waste"),oy.forEach(a),Nm.forEach(a),$u.forEach(a),wt=c(Hl),Ns=r(Hl,"DIV",{class:!0});var cy=n(Ns);ls=p(cy,"Power from waste technology"),cy.forEach(a),Kt=c(Hl),it=r(Hl,"DIV",{class:!0,style:!0});var Nc=n(it);Zt=r(Nc,"DIV",{class:!0}),n(Zt).forEach(a),is=c(Nc),hs=r(Nc,"DIV",{class:!0});var dy=n(hs);W=p(dy," "),dy.forEach(a),ms=c(Nc),kt=r(Nc,"DIV",{class:!0});var uy=n(kt);ds=p(uy," "),uy.forEach(a),ss=c(Nc),os=r(Nc,"DIV",{class:!0});var fy=n(os);tr=p(fy," "),fy.forEach(a),Cr=c(Nc),rs=r(Nc,"DIV",{class:!0});var py=n(rs);us=p(py," "),py.forEach(a),cr=c(Nc),Ss=r(Nc,"DIV",{class:!0}),n(Ss).forEach(a),Nc.forEach(a),Ws=c(Hl),Xt=r(Hl,"DIV",{class:!0,id:!0});var Bc=n(Xt);xs=r(Bc,"DIV",{class:!0});var vy=n(xs);Ts=p(vy,"Liquid fertiliser"),vy.forEach(a),Mr=c(Bc),Dr=r(Bc,"DIV",{class:!0});var gy=n(Dr);Pr=p(gy,"Solid digestate"),gy.forEach(a),sr=c(Bc),Es=r(Bc,"DIV",{class:!0});var hy=n(Es);dr=p(hy,"Biogas"),hy.forEach(a),fs=c(Bc),ps=r(Bc,"DIV",{class:!0});var my=n(ps);ta=p(my,"Syngas"),my.forEach(a),Gr=c(Bc),as=r(Bc,"DIV",{class:!0});var xy=n(as);As=p(xy,"Bio-oil"),xy.forEach(a),Sn=c(Bc),jr=r(Bc,"DIV",{class:!0});var by=n(jr);Fs=p(by,"Biochar"),by.forEach(a),Bc.forEach(a),Tn=c(Hl),Nr=r(Hl,"DIV",{class:!0});var yy=n(Nr);ns=r(yy,"DIV",{class:!0});var wy=n(ns);Vr=p(wy,"Heat / Cool"),wy.forEach(a),yy.forEach(a),Ys=c(Hl),bs=r(Hl,"DIV",{class:!0});var _y=n(bs);Bs=r(_y,"DIV",{class:!0});var Ey=n(Bs);wa=p(Ey,"Electricity"),Ey.forEach(a),_y.forEach(a),Hl.forEach(a),kr=c(Dn),Wt=r(Dn,"H1",{id:!0,class:!0});var Mh=n(Wt);rr=r(Mh,"DIV",{class:!0});var Iy=n(rr);ur=r(Iy,"DIV",{class:!0});var Bm=n(ur);fr=r(Bm,"DIV",{class:!0});var Dy=n(fr);pr=r(Dy,"IMG",{class:!0,src:!0,alt:!0}),Dy.forEach(a),Is=c(Bm),ys=r(Bm,"DIV",{class:!0});var Tv=n(ys);cl=r(Tv,"STYLE",{});var Py=n(cl);fi=p(Py,`p {
                font-size: 1.2rem;
              }`),Py.forEach(a),sa=c(Tv),cs=r(Tv,"H2",{style:!0,class:!0});var Vy=n(cs);pi=p(Vy,"Exploration station"),Vy.forEach(a),qr=c(Tv),ra=r(Tv,"DIV",{style:!0,class:!0});var qm=n(ra);vi=p(qm,"Interact with our exploration "),dl=r(qm,"BR",{}),co=p(qm,`
              station to learn more`),qm.forEach(a),vs=c(Tv),Os=r(Tv,"P",{style:!0,class:!0});var ky=n(Os);Rr=p(ky,`Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you!`),ky.forEach(a),Tv.forEach(a),Bm.forEach(a),Iy.forEach(a),Ya=c(Mh),ts=r(Mh,"DIV",{class:!0,id:!0,style:!0});var Hu=n(ts);vr=r(Hu,"STYLE",{});var Sy=n(vr);Sr=p(Sy,`.cow-element {
            /* overflow: visible !important; */
            box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
          }`),Sy.forEach(a),gr=c(Hu),qs=r(Hu,"DIV",{class:!0,id:!0});var Gh=n(qs);$r=r(Gh,"DIV",{class:!0});var Rm=n($r);_a=r(Rm,"SCRIPT",{});var Ty=n(_a);An=p(Ty,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),Ty.forEach(a),ul=c(Rm),ar=r(Rm,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Ay=n(ar);gs=r(Ay,"IMG",{class:!0,src:!0,alt:!0}),Ay.forEach(a),Rm.forEach(a),gi=c(Gh),ws=r(Gh,"DIV",{class:!0});var Uu=n(ws);aa=r(Uu,"DIV",{class:!0});var $m=n(aa);Fn=r($m,"DIV",{class:!0});var Fy=n(Fn);hr=r(Fy,"IMG",{style:!0,src:!0,alt:!0}),Fy.forEach(a),hi=c($m),mr=r($m,"DIV",{class:!0});var jh=n(mr);Ds=r(jh,"H1",{style:!0,class:!0});var Oy=n(Ds);nr=p(Oy,"Cow manure"),Oy.forEach(a),Ls=c(jh),Rs=r(jh,"P",{style:!0,class:!0});var Hm=n(Rs);Hr=r(Hm,"SPAN",{class:!0});var Ly=n(Hr);Ka=p(Ly,"Biogas Yield:"),Ly.forEach(a),mi=p(Hm,`
                  18m³
                  `),xr=r(Hm,"IMG",{class:!0,src:!0,alt:!0}),Hm.forEach(a),Cs=c(jh),Ur=r(jh,"P",{style:!0,class:!0});var Tb=n(Ur);On=r(Tb,"SPAN",{class:!0});var Cy=n(On);Ln=p(Cy,"Energy content:"),Cy.forEach(a),Ja=p(Tb,`
                  Low`),Tb.forEach(a),jh.forEach(a),$m.forEach(a),xi=c(Uu),Ps=r(Uu,"DIV",{class:!0});var Um=n(Ps);Ms=r(Um,"BUTTON",{type:!0,style:!0,class:!0});var Ab=n(Ms);na=r(Ab,"IMG",{class:!0,src:!0,alt:!0}),bi=p(Ab,`
                High organic content`),Ab.forEach(a),Cn=c(Um),lr=r(Um,"BUTTON",{type:!0,style:!0,class:!0});var Fb=n(lr);br=r(Fb,"IMG",{class:!0,src:!0,alt:!0}),ir=p(Fb,`
                High nutrient content`),Fb.forEach(a),Um.forEach(a),fl=c(Uu),Wr=r(Uu,"DIV",{class:!0});var Wm=n(Wr);la=r(Wm,"BUTTON",{type:!0,style:!0,class:!0});var Ob=n(la);Ks=r(Ob,"IMG",{class:!0,src:!0,alt:!0}),Yc=p(Ob,`
                High nitrogen content`),Ob.forEach(a),zc=c(Wm),ia=r(Wm,"BUTTON",{type:!0,style:!0,class:!0});var Lb=n(ia);yi=r(Lb,"IMG",{class:!0,src:!0,alt:!0}),fo=p(Lb,`
                Low pH levels`),Lb.forEach(a),Wm.forEach(a),wi=c(Uu),yr=r(Uu,"DIV",{class:!0});var Nh=n(yr);_s=r(Nh,"IMG",{class:!0,src:!0,alt:!0}),Gn=c(Nh),Qa=r(Nh,"H1",{style:!0,class:!0});var My=n(Qa);_i=r(My,"A",{href:!0,target:!0});var Gy=n(_i);Ei=p(Gy,"Case study"),Gy.forEach(a),My.forEach(a),Ea=c(Nh),wr=r(Nh,"IMG",{class:!0,src:!0,alt:!0}),Nh.forEach(a),Kc=c(Uu),oa=r(Uu,"DIV",{style:!0,class:!0});var Ym=n(oa);jn=r(Ym,"H2",{class:!0});var jy=n(jn);Jc=p(jy,"600 dairy cows or 3500 tonnes of cow manure per year"),jy.forEach(a),Ii=c(Ym),Ia=r(Ym,"UL",{class:!0});var zm=n(Ia);Za=r(zm,"LI",{});var Ny=n(Za);Nn=p(Ny,"Produces 656m³ biogas every day"),Ny.forEach(a),Zu=c(zm),vo=r(zm,"LI",{});var By=n(vo);en=p(By,"Ability to power 187 UK households every day"),By.forEach(a),zm.forEach(a),Ym.forEach(a),Uu.forEach(a),tn=c(Gh),Da=r(Gh,"DIV",{class:!0});var qy=n(Da);Gs=r(qy,"DIV",{class:!0});var Km=n(Gs);Pa=r(Km,"DIV",{class:!0});var Jm=n(Pa);go=r(Jm,"DIV",{class:!0});var Ry=n(go);ca=r(Ry,"IMG",{src:!0,class:!0,alt:!0}),Ry.forEach(a),Va=c(Jm),ka=r(Jm,"DIV",{class:!0});var Xm=n(ka);Wl=r(Xm,"H1",{style:!0,class:!0});var $y=n(Wl);Di=p($y,"Most appropriate technology"),$y.forEach(a),Pi=c(Xm),Yl=r(Xm,"P",{style:!0,class:!0});var Hy=n(Yl);Vi=p(Hy,"Anaerobic Digestion"),Hy.forEach(a),Xm.forEach(a),Jm.forEach(a),Bn=c(Km),_r=r(Km,"DIV",{class:!0});var Qm=n(_r);rn=r(Qm,"A",{href:!0});var Uy=n(rn);qn=r(Uy,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Cb=n(qn);an=r(Cb,"IMG",{class:!0,src:!0,alt:!0}),Xc=p(Cb,`
                    Start your project`),Cb.forEach(a),Uy.forEach(a),ho=c(Qm),pl=r(Qm,"A",{href:!0});var Wy=n(pl);da=r(Wy,"BUTTON",{type:!0,style:!0,class:!0});var Mb=n(da);js=r(Mb,"IMG",{class:!0,src:!0,alt:!0}),ki=p(Mb,`
                    Learn more`),Mb.forEach(a),Wy.forEach(a),Qm.forEach(a),Km.forEach(a),qy.forEach(a),Gh.forEach(a),zd=c(Hu),or=r(Hu,"DIV",{class:!0,id:!0});var Bh=n(or);Ar=r(Bh,"DIV",{class:!0});var Zm=n(Ar);nn=r(Zm,"SCRIPT",{});var Yy=n(nn);Si=p(Yy,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),Yy.forEach(a),Ti=c(Zm),ln=r(Zm,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var zy=n(ln);on=r(zy,"IMG",{class:!0,src:!0,alt:!0}),zy.forEach(a),Zm.forEach(a),vl=c(Bh),Vs=r(Bh,"DIV",{class:!0});var Wu=n(Vs);Ta=r(Wu,"DIV",{class:!0});var e1=n(Ta);Ai=r(e1,"DIV",{class:!0});var Ky=n(Ai);Aa=r(Ky,"IMG",{style:!0,src:!0,alt:!0}),Ky.forEach(a),Qc=c(e1),Er=r(e1,"DIV",{class:!0});var qh=n(Er);Js=r(qh,"H1",{style:!0,class:!0});var Jy=n(Js);gl=p(Jy,"Food waste"),Jy.forEach(a),Rn=c(qh),$s=r(qh,"P",{style:!0,class:!0});var t1=n($s);Fa=r(t1,"SPAN",{class:!0});var Xy=n(Fa);Zc=p(Xy,"Biogas Yield:"),Xy.forEach(a),hl=p(t1,`
                  45m³
                  `),Xs=r(t1,"IMG",{class:!0,src:!0,alt:!0}),t1.forEach(a),Kd=c(qh),Yr=r(qh,"P",{style:!0,class:!0});var Gb=n(Yr);zr=r(Gb,"SPAN",{class:!0});var Qy=n(zr);Jd=p(Qy,"Energy content:"),Qy.forEach(a),ed=p(Gb,`
                  High`),Gb.forEach(a),qh.forEach(a),e1.forEach(a),Kr=c(Wu),cn=r(Wu,"DIV",{class:!0});var s1=n(cn);dn=r(s1,"BUTTON",{type:!0,style:!0,class:!0});var jb=n(dn);ml=r(jb,"IMG",{class:!0,src:!0,alt:!0}),Kl=p(jb,`
                High organic content`),jb.forEach(a),Xd=c(s1),ua=r(s1,"BUTTON",{type:!0,style:!0,class:!0});var Nb=n(ua);Qs=r(Nb,"IMG",{class:!0,src:!0,alt:!0}),$n=p(Nb,`
                High nutrient content`),Nb.forEach(a),s1.forEach(a),Oi=c(Wu),Li=r(Wu,"DIV",{class:!0});var r1=n(Li);fa=r(r1,"BUTTON",{type:!0,style:!0,class:!0});var Bb=n(fa);Hn=r(Bb,"IMG",{class:!0,src:!0,alt:!0}),Qd=p(Bb,`
                Medium nitrogen content`),Bb.forEach(a),xo=c(r1),Zs=r(r1,"BUTTON",{type:!0,style:!0,class:!0});var qb=n(Zs);un=r(qb,"IMG",{class:!0,src:!0,alt:!0}),Zd=p(qb,`
                Low pH levels`),qb.forEach(a),r1.forEach(a),ac=c(Wu),Un=r(Wu,"DIV",{class:!0});var Rh=n(Un);fn=r(Rh,"IMG",{class:!0,src:!0,alt:!0}),eu=c(Rh),Ci=r(Rh,"H1",{style:!0,class:!0});var Zy=n(Ci);Oa=r(Zy,"A",{href:!0,target:!0});var e3=n(Oa);Wn=p(e3,"Case study"),e3.forEach(a),Zy.forEach(a),bl=c(Rh),bo=r(Rh,"IMG",{class:!0,src:!0,alt:!0}),Rh.forEach(a),Yn=c(Wu),yl=r(Wu,"DIV",{style:!0,class:!0});var a1=n(yl);yo=r(a1,"H2",{class:!0});var t3=n(yo);wo=p(t3,"100 people or 250 tonnes of food waste per year"),t3.forEach(a),La=c(a1),zn=r(a1,"UL",{class:!0});var n1=n(zn);pn=r(n1,"LI",{});var s3=n(pn);tu=p(s3,"Produces 156m³ biogas every day"),s3.forEach(a),lc=c(n1),wl=r(n1,"LI",{});var r3=n(wl);ic=p(r3,"Ability to power 19 UK households every day"),r3.forEach(a),n1.forEach(a),a1.forEach(a),Wu.forEach(a),_l=c(Bh),Jl=r(Bh,"DIV",{class:!0});var a3=n(Jl);Kn=r(a3,"DIV",{class:!0});var l1=n(Kn);Ca=r(l1,"DIV",{class:!0});var i1=n(Ca);_o=r(i1,"DIV",{class:!0});var n3=n(_o);Mi=r(n3,"IMG",{src:!0,class:!0,alt:!0}),n3.forEach(a),El=c(i1),Ma=r(i1,"DIV",{class:!0});var o1=n(Ma);Il=r(o1,"H1",{style:!0,class:!0});var l3=n(Il);su=p(l3,"Most appropriate technology"),l3.forEach(a),Xl=c(o1),Jn=r(o1,"P",{style:!0,class:!0});var i3=n(Jn);ru=p(i3,"Anaerobic Digestion"),i3.forEach(a),o1.forEach(a),i1.forEach(a),Gi=c(l1),Fr=r(l1,"DIV",{class:!0});var c1=n(Fr);gn=r(c1,"A",{href:!0});var o3=n(gn);Ga=r(o3,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Rb=n(Ga);ji=r(Rb,"IMG",{class:!0,src:!0,alt:!0}),Ni=p(Rb,`
                    Start your project`),Rb.forEach(a),o3.forEach(a),rf=c(c1),Eo=r(c1,"A",{href:!0});var c3=n(Eo);ja=r(c3,"BUTTON",{type:!0,style:!0,class:!0});var $b=n(ja);Zl=r($b,"IMG",{class:!0,src:!0,alt:!0}),Dl=p($b,`
                    Learn more`),$b.forEach(a),c3.forEach(a),c1.forEach(a),l1.forEach(a),a3.forEach(a),Bh.forEach(a),Xn=c(Hu),er=r(Hu,"DIV",{class:!0,id:!0});var $h=n(er);pa=r($h,"DIV",{class:!0});var d1=n(pa);Pl=r(d1,"SCRIPT",{});var d3=n(Pl);af=p(d3,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),d3.forEach(a),au=c(d1),va=r(d1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var u3=n(va);Bi=r(u3,"IMG",{class:!0,src:!0,alt:!0}),u3.forEach(a),d1.forEach(a),ei=c($h),ks=r($h,"DIV",{class:!0});var Yu=n(ks);Na=r(Yu,"DIV",{class:!0});var u1=n(Na);Po=r(u1,"DIV",{class:!0});var f3=n(Po);Vl=r(f3,"IMG",{style:!0,src:!0,alt:!0}),f3.forEach(a),oc=c(u1),Jr=r(u1,"DIV",{class:!0});var Hh=n(Jr);hn=r(Hh,"H1",{style:!0,class:!0});var p3=n(hn);nu=p(p3,"PE plastic"),p3.forEach(a),cc=c(Hh),Xr=r(Hh,"P",{style:!0,class:!0});var f1=n(Xr);mn=r(f1,"SPAN",{class:!0});var v3=n(mn);qi=p(v3,"GCV:"),v3.forEach(a),Vo=p(f1,`
                  46 MJ/kg
                  `),kl=r(f1,"IMG",{class:!0,src:!0,alt:!0}),f1.forEach(a),uc=c(Hh),ti=r(Hh,"P",{style:!0,class:!0});var Hb=n(ti);Sl=r(Hb,"SPAN",{class:!0});var g3=n(Sl);Ba=p(g3,"Energy content:"),g3.forEach(a),fc=p(Hb,`
                  Very high`),Hb.forEach(a),Hh.forEach(a),u1.forEach(a),lu=c(Yu),Qn=r(Yu,"DIV",{class:!0});var p1=n(Qn);ga=r(p1,"BUTTON",{type:!0,style:!0,class:!0});var Ub=n(ga);xn=r(Ub,"IMG",{class:!0,src:!0,alt:!0}),Ri=p(Ub,`
                Very low organic content`),Ub.forEach(a),pc=c(p1),Tl=r(p1,"BUTTON",{type:!0,style:!0,class:!0});var Wb=n(Tl);Al=r(Wb,"IMG",{class:!0,src:!0,alt:!0}),iu=p(Wb,`
                Very low nutrient content`),Wb.forEach(a),p1.forEach(a),ri=c(Yu),Qr=r(Yu,"DIV",{class:!0});var v1=n(Qr);ha=r(v1,"BUTTON",{type:!0,style:!0,class:!0});var Yb=n(ha);Fl=r(Yb,"IMG",{class:!0,src:!0,alt:!0}),ai=p(Yb,`
                Very low nitrogen content`),Yb.forEach(a),ko=c(v1),Ol=r(v1,"BUTTON",{type:!0,style:!0,class:!0});var zb=n(Ol);bn=r(zb,"IMG",{class:!0,src:!0,alt:!0}),So=p(zb,`
                PET bottles`),zb.forEach(a),v1.forEach(a),vc=c(Yu),Zn=r(Yu,"DIV",{class:!0});var Uh=n(Zn);ma=r(Uh,"IMG",{class:!0,src:!0,alt:!0}),rd=c(Uh),yn=r(Uh,"H1",{style:!0,class:!0});var h3=n(yn);qa=r(h3,"A",{href:!0,target:!0});var m3=n(qa);ad=p(m3,"Case study"),m3.forEach(a),h3.forEach(a),gc=c(Uh),wn=r(Uh,"IMG",{class:!0,src:!0,alt:!0}),Uh.forEach(a),ni=c(Yu),Zr=r(Yu,"DIV",{style:!0,class:!0});var g1=n(Zr);el=r(g1,"H2",{class:!0});var x3=n(el);lf=p(x3,"10000 PET bottles or 100 tonnes of plastic per year"),x3.forEach(a),Hi=c(g1),xa=r(g1,"UL",{class:!0});var h1=n(xa);hc=r(h1,"LI",{});var b3=n(hc);mc=p(b3,"Produces 75kWh every day"),b3.forEach(a),Ao=c(h1),Ra=r(h1,"LI",{});var y3=n(Ra);xc=p(y3,"Ability to power 63 UK households every day"),y3.forEach(a),h1.forEach(a),g1.forEach(a),Yu.forEach(a),bc=c($h),Fo=r($h,"DIV",{class:!0});var w3=n(Fo);$a=r(w3,"DIV",{class:!0});var m1=n($a);li=r(m1,"DIV",{class:!0});var x1=n(li);tl=r(x1,"DIV",{class:!0});var _3=n(tl);Oo=r(_3,"IMG",{src:!0,class:!0,alt:!0}),_3.forEach(a),Cv=c(x1),sl=r(x1,"DIV",{class:!0});var b1=n(sl);Cl=r(b1,"H1",{style:!0,class:!0});var E3=n(Cl);nd=p(E3,"Most appropriate technology"),E3.forEach(a),xg=c(b1),ld=r(b1,"P",{style:!0,class:!0});var I3=n(ld);ou=p(I3,"Pyrolysis"),I3.forEach(a),b1.forEach(a),x1.forEach(a),Mv=c(m1),yc=r(m1,"DIV",{class:!0});var y1=n(yc);Lo=r(y1,"A",{href:!0});var D3=n(Lo);Ir=r(D3,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Kb=n(Ir);Co=r(Kb,"IMG",{class:!0,src:!0,alt:!0}),Gv=p(Kb,`
                    Start your project`),Kb.forEach(a),D3.forEach(a),of=c(y1),cu=r(y1,"A",{href:!0});var P3=n(cu);Mo=r(P3,"BUTTON",{type:!0,style:!0,class:!0});var Jb=n(Mo);Go=r(Jb,"IMG",{class:!0,src:!0,alt:!0}),jv=p(Jb,`
                    Learn more`),Jb.forEach(a),P3.forEach(a),y1.forEach(a),m1.forEach(a),w3.forEach(a),$h.forEach(a),cf=c(Hu),ii=r(Hu,"DIV",{class:!0,id:!0});var Wh=n(ii);wc=r(Wh,"DIV",{class:!0});var w1=n(wc);Ui=r(w1,"SCRIPT",{});var V3=n(Ui);du=p(V3,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),V3.forEach(a),Nv=c(w1),Wi=r(w1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var k3=n(Wi);Ml=r(k3,"IMG",{class:!0,src:!0,alt:!0}),k3.forEach(a),w1.forEach(a),Bv=c(Wh),_n=r(Wh,"DIV",{class:!0});var zu=n(_n);Ha=r(zu,"DIV",{class:!0});var _1=n(Ha);Yi=r(_1,"DIV",{class:!0});var S3=n(Yi);_c=r(S3,"IMG",{style:!0,src:!0,alt:!0}),S3.forEach(a),id=c(_1),jo=r(_1,"DIV",{class:!0});var Yh=n(jo);od=r(Yh,"H1",{style:!0,class:!0});var T3=n(od);cd=p(T3,"Technology"),T3.forEach(a),_g=c(Yh),No=r(Yh,"P",{style:!0,class:!0});var E1=n(No);Ec=r(E1,"SPAN",{class:!0});var A3=n(Ec);qv=p(A3,"GCV:"),A3.forEach(a),uf=p(E1,`
                  N/A MJ/kg
                  `),Gl=r(E1,"IMG",{class:!0,src:!0,alt:!0}),E1.forEach(a),uu=c(Yh),dd=r(Yh,"P",{style:!0,class:!0});var Xb=n(dd);pf=r(Xb,"SPAN",{class:!0});var F3=n(pf);Eg=p(F3,"Energy content:"),F3.forEach(a),$p=p(Xb,`
                  High`),Xb.forEach(a),Yh.forEach(a),_1.forEach(a),Ig=c(zu),ud=r(zu,"DIV",{class:!0});var I1=n(ud);Ic=r(I1,"BUTTON",{type:!0,style:!0,class:!0});var Qb=n(Ic);Dc=r(Qb,"IMG",{class:!0,src:!0,alt:!0}),Dg=p(Qb,`
                High organic content`),Qb.forEach(a),Pg=c(I1),jl=r(I1,"BUTTON",{type:!0,style:!0,class:!0});var Zb=n(jl);fu=r(Zb,"IMG",{class:!0,src:!0,alt:!0}),Vg=p(Zb,`
                High nutrient content`),Zb.forEach(a),I1.forEach(a),kg=c(zu),fd=r(zu,"DIV",{class:!0});var D1=n(fd);zi=r(D1,"BUTTON",{type:!0,style:!0,class:!0});var e2=n(zi);Ki=r(e2,"IMG",{class:!0,src:!0,alt:!0}),Pc=p(e2,`
                High nitrogen content`),e2.forEach(a),Hp=c(D1),Vc=r(D1,"BUTTON",{type:!0,style:!0,class:!0});var t2=n(Vc);kc=r(t2,"IMG",{class:!0,src:!0,alt:!0}),Sg=p(t2,`
                Latest technology`),t2.forEach(a),D1.forEach(a),Tg=c(zu),Bo=r(zu,"DIV",{class:!0});var zh=n(Bo);pu=r(zh,"IMG",{class:!0,src:!0,alt:!0}),Up=c(zh),vu=r(zh,"H1",{style:!0,class:!0});var O3=n(vu);gu=r(O3,"A",{href:!0,target:!0});var L3=n(gu);Ji=p(L3,"Case study"),L3.forEach(a),O3.forEach(a),Wp=c(zh),Sc=r(zh,"IMG",{class:!0,src:!0,alt:!0}),zh.forEach(a),Ag=c(zu),Tc=r(zu,"DIV",{style:!0,class:!0});var P1=n(Tc);qo=r(P1,"H2",{class:!0});var C3=n(qo);Fg=p(C3,"600 dairy cows or 3500 tonnes of cow manure per year"),C3.forEach(a),Og=c(P1),pd=r(P1,"UL",{class:!0});var V1=n(pd);hu=r(V1,"LI",{});var M3=n(hu);Yp=p(M3,"Produces 656m³ biogas every day"),M3.forEach(a),Lg=c(V1),zp=r(V1,"LI",{});var G3=n(zp);vf=p(G3,"Ability to power 187 UK households every day"),G3.forEach(a),V1.forEach(a),P1.forEach(a),zu.forEach(a),Cg=c(Wh),gf=r(Wh,"DIV",{class:!0});var j3=n(gf);Ro=r(j3,"DIV",{class:!0});var k1=n(Ro);vd=r(k1,"DIV",{class:!0});var S1=n(vd);gd=r(S1,"DIV",{class:!0});var N3=n(gd);mu=r(N3,"IMG",{src:!0,class:!0,alt:!0}),N3.forEach(a),Mg=c(S1),hd=r(S1,"DIV",{class:!0});var T1=n(hd);xu=r(T1,"H1",{style:!0,class:!0});var B3=n(xu);Kp=p(B3,"Most appropriate technology"),B3.forEach(a),Jp=c(T1),bu=r(T1,"P",{style:!0,class:!0});var q3=n(bu);Gg=p(q3,"New Technology"),q3.forEach(a),T1.forEach(a),S1.forEach(a),yu=c(k1),$o=r(k1,"DIV",{class:!0});var A1=n($o);md=r(A1,"A",{href:!0});var R3=n(md);oi=r(R3,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var s2=n(oi);wu=r(s2,"IMG",{class:!0,src:!0,alt:!0}),xd=p(s2,`
                    Start your project`),s2.forEach(a),R3.forEach(a),jg=c(A1),hf=r(A1,"A",{href:!0});var $3=n(hf);Xi=r($3,"BUTTON",{type:!0,style:!0,class:!0});var r2=n(Xi);Ac=r(r2,"IMG",{class:!0,src:!0,alt:!0}),Ng=p(r2,`
                    Learn more`),r2.forEach(a),$3.forEach(a),A1.forEach(a),k1.forEach(a),j3.forEach(a),Wh.forEach(a),Hu.forEach(a),_u=c(Mh),Nl=r(Mh,"DIV",{id:!0,class:!0,style:!0}),n(Nl).forEach(a),Mh.forEach(a),Bg=c(Dn),mf=r(Dn,"SECTION",{class:!0});var H3=n(mf);ci=r(H3,"DIV",{class:!0,style:!0,id:!0,onclick:!0});var U3=n(ci);Fc=r(U3,"DIV",{});var Kh=n(Fc);Or=r(Kh,"DIV",{id:!0,style:!0});var qc=n(Or);Qi=r(qc,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var W3=n(Qi);Eu=r(W3,"IMG",{class:!0,src:!0,alt:!0}),W3.forEach(a),qg=c(qc),Zi=r(qc,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Y3=n(Zi);Oc=r(Y3,"IMG",{class:!0,src:!0,alt:!0}),Y3.forEach(a),Rg=c(qc),eo=r(qc,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var z3=n(eo);En=r(z3,"IMG",{class:!0,src:!0,alt:!0}),z3.forEach(a),Xp=c(qc),rl=r(qc,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var K3=n(rl);bd=r(K3,"DIV",{style:!0});var J3=n(bd);$g=p(J3,"Technology"),J3.forEach(a),K3.forEach(a),Iu=c(qc),Qp=r(qc,"STYLE",{});var X3=n(Qp);Hg=p(X3,`@keyframes bounce {
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
              }`),X3.forEach(a),Ug=c(qc),Du=r(qc,"SCRIPT",{});var Q3=n(Du);Zp=p(Q3,"const animatedElements = document.querySelectorAll('.techbuttons')\n\n              animatedElements.forEach(element => {\n                const randomDelay = Math.floor(Math.random() * 1000) // Generate a random delay between 0 and 1000 milliseconds\n                element.style.animationDelay = `${randomDelay}ms`\n                element.style.animationDuration = `${1000 + randomDelay}ms`\n              })"),Q3.forEach(a),qc.forEach(a),Wg=c(Kh),ev=r(Kh,"STYLE",{});var Z3=n(ev);Ho=p(Z3,`.growbutton:hover {
              box-shadow: 0 0 5px 1px white;
            }
            .growbutton img {
              max-width: 190%;
            }`),Z3.forEach(a),Yg=c(Kh),Bl=r(Kh,"DIV",{class:!0,id:!0,style:!0});var F1=n(Bl);yd=r(F1,"DIV",{class:!0});var O1=n(yd);wd=r(O1,"INPUT",{type:!0,placeholder:!0,class:!0}),tv=c(O1),Lc=r(O1,"BUTTON",{"aria-label":!0,class:!0});var e5=n(Lc);_d=r(e5,"SPAN",{class:!0}),n(_d).forEach(a),e5.forEach(a),O1.forEach(a),sv=c(F1),to=r(F1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var t5=n(to);ql=r(t5,"IMG",{class:!0,src:!0,alt:!0,style:!0}),t5.forEach(a),F1.forEach(a),Kh.forEach(a),U3.forEach(a),H3.forEach(a),zg=c(Dn),so=r(Dn,"H1",{class:!0,id:!0});var Jh=n(so);Ed=r(Jh,"DIV",{class:!0});var s5=n(Ed);Id=r(s5,"DIV",{class:!0});var L1=n(Id);xf=r(L1,"DIV",{class:!0});var r5=n(xf);Pu=r(r5,"IMG",{class:!0,src:!0,alt:!0}),r5.forEach(a),Kg=c(L1),Ua=r(L1,"DIV",{class:!0});var Av=n(Ua);rv=r(Av,"STYLE",{});var a5=n(rv);av=p(a5,`p {
                font-size: 1.2rem;
              }`),a5.forEach(a),Jg=c(Av),Vu=r(Av,"H2",{style:!0,class:!0});var n5=n(Vu);Xg=p(n5,"The PFP Calculator"),n5.forEach(a),nv=c(Av),Cc=r(Av,"DIV",{style:!0,class:!0});var C1=n(Cc);Qg=p(C1,`Find the right technology
              `),Zg=r(C1,"BR",{}),lv=p(C1,`
              for your needs`),C1.forEach(a),iv=c(Av),ku=r(Av,"P",{style:!0,class:!0});var l5=n(ku);eh=p(l5,`We will assist you every step of the way to ensure a smooth and successful implementation of your power-from-waste
              project`),l5.forEach(a),Av.forEach(a),L1.forEach(a),s5.forEach(a),ov=c(Jh),In=r(Jh,"DIV",{id:!0,class:!0,style:!0}),n(In).forEach(a),th=c(Jh),Rl=r(Jh,"DIV",{id:!0,class:!0,style:!0}),n(Rl).forEach(a),Jh.forEach(a),sh=c(Dn),ro=r(Dn,"SECTION",{class:!0,id:!0});var i5=n(ro);Uo=r(i5,"DIV",{class:!0});var M1=n(Uo);ao=r(M1,"DIV",{class:!0,style:!0});var G1=n(ao);Dd=r(G1,"DIV",{class:!0});var j1=n(Dd);Pd=r(j1,"P",{class:!0});var o5=n(Pd);rh=p(o5,"Waste type"),o5.forEach(a),cv=c(j1),no=r(j1,"H2",{class:!0});var dg=n(no);Vd=r(dg,"SPAN",{id:!0});var c5=n(Vd);ah=p(c5,"PE Plastic"),c5.forEach(a),dv=c(dg),uv=r(dg,"BR",{}),fv=c(dg),bf=r(dg,"SPAN",{id:!0});var d5=n(bf);nh=p(d5,"10,000 tonnes"),d5.forEach(a),Su=p(dg,`
               per day`),dg.forEach(a),j1.forEach(a),lh=c(G1),kd=r(G1,"DIV",{class:!0});var N1=n(kd);yf=r(N1,"DIV",{class:!0});var u5=n(yf);Wo=r(u5,"IMG",{src:!0,class:!0,id:!0,alt:!0}),u5.forEach(a),ih=c(N1),Sd=r(N1,"DIV",{class:!0});var B1=n(Sd);di=r(B1,"H3",{class:!0});var f5=n(di);oh=p(f5,"Most appropriate technology"),f5.forEach(a),ch=c(B1),Tu=r(B1,"H2",{class:!0,id:!0});var p5=n(Tu);dh=p(p5,"Pyrolysis"),p5.forEach(a),B1.forEach(a),N1.forEach(a),G1.forEach(a),pv=c(M1),ea=r(M1,"DIV",{class:!0});var Rc=n(ea);Td=r(Rc,"DIV",{class:!0});var q1=n(Td);Yo=r(q1,"DIV",{style:!0,class:!0});var a2=n(Yo);uh=p(a2,"Energy content "),Mc=r(a2,"IMG",{class:!0,src:!0,alt:!0}),a2.forEach(a),vv=c(q1),Ad=r(q1,"DIV",{class:!0});var R1=n(Ad);Fd=r(R1,"SPAN",{id:!0});var v5=n(Fd);gv=p(v5,"18"),v5.forEach(a),hv=c(R1),wf=r(R1,"SPAN",{id:!0});var g5=n(wf);fh=p(g5,"MJ/kg"),g5.forEach(a),R1.forEach(a),q1.forEach(a),Au=c(Rc),Od=r(Rc,"DIV",{class:!0});var $1=n(Od);Ld=r($1,"DIV",{style:!0,class:!0});var n2=n(Ld);ph=p(n2,"Heat produced "),Gc=r(n2,"IMG",{class:!0,src:!0,alt:!0}),n2.forEach(a),vh=c($1),Fu=r($1,"DIV",{class:!0});var l2=n(Fu);ui=r(l2,"SPAN",{id:!0});var h5=n(ui);gh=p(h5,"11,200"),h5.forEach(a),hh=p(l2,`
              kWh per year`),l2.forEach(a),$1.forEach(a),mh=c(Rc),Cd=r(Rc,"DIV",{class:!0});var H1=n(Cd);zo=r(H1,"DIV",{style:!0,class:!0});var i2=n(zo);mv=p(i2,"Heat savings "),Ou=r(i2,"IMG",{class:!0,src:!0,alt:!0}),i2.forEach(a),xh=c(H1),Ko=r(H1,"DIV",{class:!0});var U1=n(Ko);bh=p(U1,`£
              `),Md=r(U1,"SPAN",{id:!0});var m5=n(Md);yh=p(m5,"48,000"),m5.forEach(a),xv=p(U1,`
              per year`),U1.forEach(a),H1.forEach(a),bv=c(Rc),Jo=r(Rc,"DIV",{class:!0});var W1=n(Jo);Gd=r(W1,"DIV",{style:!0,class:!0});var o2=n(Gd);wh=p(o2,"Electricity produced "),lo=r(o2,"IMG",{class:!0,src:!0,alt:!0}),o2.forEach(a),_h=c(W1),Lu=r(W1,"DIV",{class:!0});var c2=n(Lu);jd=r(c2,"SPAN",{id:!0});var x5=n(jd);yv=p(x5,"4,800"),x5.forEach(a),Eh=p(c2,`
              kWh per year`),c2.forEach(a),W1.forEach(a),Ih=c(Rc),al=r(Rc,"DIV",{class:!0});var Y1=n(al);Nd=r(Y1,"DIV",{style:!0,class:!0});var d2=n(Nd);Dh=p(d2,"Electrical savings "),Cu=r(d2,"IMG",{class:!0,src:!0,alt:!0}),d2.forEach(a),wv=c(Y1),Bd=r(Y1,"DIV",{class:!0});var z1=n(Bd);_v=p(z1,`£
              `),_f=r(z1,"SPAN",{id:!0});var b5=n(_f);Mu=p(b5,"70,000"),b5.forEach(a),Ph=p(z1,`
              per year`),z1.forEach(a),Y1.forEach(a),b0=c(Rc),Ev=r(Rc,"DIV",{class:!0});var K1=n(Ev);Ef=r(K1,"DIV",{style:!0,class:!0});var J1=n(Ef);Vh=r(J1,"SPAN",{id:!0});var y5=n(Vh);y0=p(y5,"Char"),y5.forEach(a),w0=p(J1,`
               produced
              `),Xv=r(J1,"IMG",{class:!0,src:!0,alt:!0}),J1.forEach(a),_0=c(K1),Qv=r(K1,"DIV",{class:!0});var u2=n(Qv);kh=r(u2,"SPAN",{id:!0});var w5=n(kh);E0=p(w5,"500"),w5.forEach(a),I0=p(u2,`
              kilograms`),u2.forEach(a),K1.forEach(a),Rc.forEach(a),M1.forEach(a),i5.forEach(a),D0=c(Dn),Iv=r(Dn,"SECTION",{id:!0});var X1=n(Iv);Xo=r(X1,"DIV",{class:!0,id:!0});var Fv=n(Xo);Dv=r(Fv,"DIV",{class:!0});var Q1=n(Dv);Zv=r(Q1,"H1",{style:!0,class:!0});var _5=n(Zv);P0=p(_5,"The PFP Calculator"),_5.forEach(a),V0=c(Q1),qd=r(Q1,"P",{style:!0,class:!0});var Xh=n(qd);k0=p(Xh,`Our easy-to-use calculator is here to give you a quick snapshot of what your waste-to-energy project could look
            like. It helps you identify the most suitable technology and estimate energy output, serving as a valuable first
            step in your journey to green power.
            `),S0=r(Xh,"BR",{}),T0=c(Xh),A0=r(Xh,"BR",{}),F0=p(Xh,`
            Think of it as a helpful starting point!`),Xh.forEach(a),Q1.forEach(a),O0=c(Fv),If=r(Fv,"DIV",{style:!0,class:!0});var Z1=n(If);Sh=r(Z1,"DIV",{class:!0});var E5=n(Sh);Pv=r(E5,"IMG",{class:!0,id:!0,src:!0,alt:!0}),E5.forEach(a),L0=c(Z1),Qo=r(Z1,"DIV",{class:!0,id:!0});var Ov=n(Qo);Df=r(Ov,"DIV",{class:!0,role:!0});var e0=n(Df);eg=r(e0,"BUTTON",{type:!0,class:!0});var I5=n(eg);C0=p(I5,"Waste type"),I5.forEach(a),M0=c(e0),Th=r(e0,"DIV",{class:!0});var D5=n(Th);Ze=r(D5,"SELECT",{id:!0,class:!0});var dt=n(Ze);Pf=r(dt,"OPTION",{class:!0});var P5=n(Pf);G0=p(P5,"Cheese production"),P5.forEach(a),Vf=r(dt,"OPTION",{class:!0});var V5=n(Vf);j0=p(V5,"Butter production"),V5.forEach(a),kf=r(dt,"OPTION",{class:!0});var k5=n(kf);N0=p(k5,"Ice cream"),k5.forEach(a),Sf=r(dt,"OPTION",{class:!0});var S5=n(Sf);B0=p(S5,"Beer production"),S5.forEach(a),Tf=r(dt,"OPTION",{class:!0});var T5=n(Tf);q0=p(T5,"Wine production"),T5.forEach(a),Af=r(dt,"OPTION",{class:!0});var A5=n(Af);R0=p(A5,"Spirits production"),A5.forEach(a),Ff=r(dt,"OPTION",{class:!0});var F5=n(Ff);$0=p(F5,"Ethanol production"),F5.forEach(a),Of=r(dt,"OPTION",{class:!0});var O5=n(Of);H0=p(O5,"Pulp production"),O5.forEach(a),Lf=r(dt,"OPTION",{class:!0});var L5=n(Lf);U0=p(L5,"Juice production"),L5.forEach(a),Cf=r(dt,"OPTION",{class:!0});var C5=n(Cf);W0=p(C5,"Tomato ketchup"),C5.forEach(a),Mf=r(dt,"OPTION",{class:!0});var M5=n(Mf);Y0=p(M5,"Bovine meat"),M5.forEach(a),Gf=r(dt,"OPTION",{class:!0});var G5=n(Gf);z0=p(G5,"Pig meat"),G5.forEach(a),jf=r(dt,"OPTION",{class:!0});var j5=n(jf);K0=p(j5,"Sheep meat"),j5.forEach(a),Nf=r(dt,"OPTION",{class:!0});var N5=n(Nf);J0=p(N5,"Frozen potatoes"),N5.forEach(a),Bf=r(dt,"OPTION",{class:!0});var B5=n(Bf);X0=p(B5,"Prepared potatoes (crisps)"),B5.forEach(a),qf=r(dt,"OPTION",{class:!0});var q5=n(qf);Q0=p(q5,"Potato starch"),q5.forEach(a),Rf=r(dt,"OPTION",{class:!0});var R5=n(Rf);Z0=p(R5,"Dried potatoes"),R5.forEach(a),$f=r(dt,"OPTION",{class:!0});var $5=n($f);ex=p($5,"Sugar production"),$5.forEach(a),Hf=r(dt,"OPTION",{class:!0});var H5=n(Hf);tx=p(H5,"Yeast production"),H5.forEach(a),Uf=r(dt,"OPTION",{class:!0});var U5=n(Uf);sx=p(U5,"Vegetable oils production"),U5.forEach(a),Wf=r(dt,"OPTION",{class:!0});var W5=n(Wf);rx=p(W5,"Biodiesel production"),W5.forEach(a),Yf=r(dt,"OPTION",{class:!0});var Y5=n(Yf);ax=p(Y5,"Pig manure"),Y5.forEach(a),zf=r(dt,"OPTION",{class:!0});var z5=n(zf);nx=p(z5,"Dairy Cattle"),z5.forEach(a),Kf=r(dt,"OPTION",{class:!0});var K5=n(Kf);lx=p(K5,"Non diary cattle"),K5.forEach(a),Jf=r(dt,"OPTION",{class:!0});var J5=n(Jf);ix=p(J5,"Buffalo"),J5.forEach(a),Xf=r(dt,"OPTION",{class:!0});var X5=n(Xf);ox=p(X5,"Chicken layer manure"),X5.forEach(a),Qf=r(dt,"OPTION",{class:!0});var Q5=n(Qf);cx=p(Q5,"Chicken broiler manure"),Q5.forEach(a),Zf=r(dt,"OPTION",{class:!0});var Z5=n(Zf);dx=p(Z5,"Sheep"),Z5.forEach(a),ep=r(dt,"OPTION",{class:!0});var ew=n(ep);ux=p(ew,"Food waste"),ew.forEach(a),tp=r(dt,"OPTION",{class:!0});var tw=n(tp);fx=p(tw,"Fish waste"),tw.forEach(a),sp=r(dt,"OPTION",{class:!0});var sw=n(sp);px=p(sw,"Coffee grounds"),sw.forEach(a),rp=r(dt,"OPTION",{class:!0});var rw=n(rp);vx=p(rw,"Crop residues"),rw.forEach(a),ap=r(dt,"OPTION",{class:!0});var aw=n(ap);gx=p(aw,"Maize silage"),aw.forEach(a),np=r(dt,"OPTION",{class:!0});var nw=n(np);hx=p(nw,"Cereal"),nw.forEach(a),lp=r(dt,"OPTION",{class:!0});var lw=n(lp);mx=p(lw,"Grass silage"),lw.forEach(a),ip=r(dt,"OPTION",{class:!0});var iw=n(ip);xx=p(iw,"Pulp & Paper Waste"),iw.forEach(a),op=r(dt,"OPTION",{class:!0});var ow=n(op);bx=p(ow,"Textile Waste"),ow.forEach(a),cp=r(dt,"OPTION",{class:!0});var cw=n(cp);yx=p(cw,"PE Plastic"),cw.forEach(a),dp=r(dt,"OPTION",{class:!0});var dw=n(dp);wx=p(dw,"SRF"),dw.forEach(a),up=r(dt,"OPTION",{class:!0});var uw=n(up);_x=p(uw,"RDF"),uw.forEach(a),fp=r(dt,"OPTION",{class:!0});var fw=n(fp);Ex=p(fw,"PP Plastic"),fw.forEach(a),pp=r(dt,"OPTION",{class:!0});var pw=n(pp);Ix=p(pw,"PS Plastic"),pw.forEach(a),vp=r(dt,"OPTION",{class:!0});var vw=n(vp);Dx=p(vw,"PVC Plastic"),vw.forEach(a),gp=r(dt,"OPTION",{class:!0});var gw=n(gp);Px=p(gw,"PET Plastic"),gw.forEach(a),hp=r(dt,"OPTION",{class:!0});var hw=n(hp);Vx=p(hw,"Rubber"),hw.forEach(a),mp=r(dt,"OPTION",{class:!0});var mw=n(mp);kx=p(mw,"Wood waste"),mw.forEach(a),xp=r(dt,"OPTION",{class:!0});var xw=n(xp);Sx=p(xw,"Municipal Solid Waste (MSW)"),xw.forEach(a),bp=r(dt,"OPTION",{class:!0});var bw=n(bp);Tx=p(bw,"Medical Waste"),bw.forEach(a),yp=r(dt,"OPTION",{class:!0});var yw=n(yp);Ax=p(yw,"Ceramics"),yw.forEach(a),wp=r(dt,"OPTION",{class:!0});var ww=n(wp);Fx=p(ww,"Sand"),ww.forEach(a),_p=r(dt,"OPTION",{class:!0});var _w=n(_p);Ox=p(_w,"Dust"),_w.forEach(a),Ep=r(dt,"OPTION",{class:!0});var Ew=n(Ep);Lx=p(Ew,"Glass"),Ew.forEach(a),Ip=r(dt,"OPTION",{class:!0});var Iw=n(Ip);Cx=p(Iw,"Metals"),Iw.forEach(a),dt.forEach(a),D5.forEach(a),e0.forEach(a),Mx=c(Ov),Dp=r(Ov,"DIV",{class:!0,role:!0});var t0=n(Dp);tg=r(t0,"BUTTON",{type:!0,class:!0});var Dw=n(tg);Gx=p(Dw,"Kilograms per day"),Dw.forEach(a),jx=c(t0),Ah=r(t0,"DIV",{class:!0});var Pw=n(Ah);$l=r(Pw,"SELECT",{id:!0,class:!0});var $d=n($l);Pp=r($d,"OPTION",{class:!0});var Vw=n(Pp);Nx=p(Vw,"5 kg"),Vw.forEach(a),Vp=r($d,"OPTION",{class:!0});var kw=n(Vp);Bx=p(kw,"10 kg"),kw.forEach(a),kp=r($d,"OPTION",{class:!0});var Sw=n(kp);qx=p(Sw,"100 kg"),Sw.forEach(a),Sp=r($d,"OPTION",{class:!0});var Tw=n(Sp);Rx=p(Tw,"400 kg"),Tw.forEach(a),Tp=r($d,"OPTION",{class:!0});var Aw=n(Tp);$x=p(Aw,"1000 kg"),Aw.forEach(a),Ap=r($d,"OPTION",{class:!0});var Fw=n(Ap);Hx=p(Fw,"4000 kg"),Fw.forEach(a),Fp=r($d,"OPTION",{class:!0});var Ow=n(Fp);Ux=p(Ow,"10,000 kg"),Ow.forEach(a),Op=r($d,"OPTION",{class:!0});var Lw=n(Op);Wx=p(Lw,"20,000 kg"),Lw.forEach(a),Lp=r($d,"OPTION",{class:!0});var Cw=n(Lp);Yx=p(Cw,"40,000 kg"),Cw.forEach(a),Cp=r($d,"OPTION",{class:!0});var Mw=n(Cp);zx=p(Mw,"> 40,000 kg"),Mw.forEach(a),$d.forEach(a),Pw.forEach(a),t0.forEach(a),Kx=c(Ov),Mp=r(Ov,"DIV",{class:!0,role:!0});var s0=n(Mp);sg=r(s0,"BUTTON",{type:!0,class:!0});var Gw=n(sg);Jx=p(Gw,"Client needs"),Gw.forEach(a),Xx=c(s0),Fh=r(s0,"DIV",{class:!0});var jw=n(Fh);Gu=r(jw,"SELECT",{id:!0,class:!0});var _m=n(Gu);Gp=r(_m,"OPTION",{class:!0});var Nw=n(Gp);Qx=p(Nw,"Electricity"),Nw.forEach(a),jp=r(_m,"OPTION",{class:!0});var Bw=n(jp);Zx=p(Bw,"Heating / Cooling"),Bw.forEach(a),Np=r(_m,"OPTION",{class:!0});var qw=n(Np);eb=p(qw,"Carbon credits"),qw.forEach(a),Bp=r(_m,"OPTION",{class:!0});var Rw=n(Bp);tb=p(Rw,"Fertiliser"),Rw.forEach(a),_m.forEach(a),jw.forEach(a),s0.forEach(a),sb=c(Ov),Fm=r(Ov,"DIV",{}),n(Fm).forEach(a),Ov.forEach(a),Z1.forEach(a),rb=c(Fv),qp=r(Fv,"DIV",{class:!0,id:!0});var r0=n(qp);rg=r(r0,"DIV",{class:!0,id:!0});var $w=n(rg);ab=p($w,"Your project is feasible"),$w.forEach(a),nb=c(r0),ju=r(r0,"P",{style:!0,class:!0,id:!0});var a0=n(ju);lb=p(a0,`Review your results to explore the different possibilities and
            `),ib=r(a0,"BR",{}),ob=p(a0,`
            book a slot with us for personalised guidance on next steps`),a0.forEach(a),r0.forEach(a),cb=c(Fv),Nu=r(Fv,"DIV",{class:!0});var Qh=n(Nu);Bu=r(Qh,"A",{id:!0,class:!0,href:!0});var n0=n(Bu);ag=r(n0,"IMG",{class:!0,src:!0,alt:!0}),db=c(n0),mm=r(n0,"SPAN",{});var Hw=n(mm);ub=p(Hw,"Book a call with us"),Hw.forEach(a),n0.forEach(a),fb=c(Qh),qu=r(Qh,"A",{id:!0,class:!0,href:!0});var l0=n(qu);ng=r(l0,"IMG",{class:!0,src:!0,alt:!0}),pb=c(l0),xm=r(l0,"SPAN",{});var Uw=n(xm);vb=p(Uw,"Learn more"),Uw.forEach(a),l0.forEach(a),gb=c(Qh),Rd=r(Qh,"BUTTON",{id:!0,class:!0,href:!0,onclick:!0});var i0=n(Rd);lg=r(i0,"IMG",{class:!0,src:!0,alt:!0}),hb=c(i0),bm=r(i0,"SPAN",{});var Ww=n(bm);mb=p(Ww,"Calculate"),Ww.forEach(a),i0.forEach(a),Qh.forEach(a),Fv.forEach(a),xb=c(X1),Zo=r(X1,"DIV",{id:!0,class:!0,style:!0}),n(Zo).forEach(a),X1.forEach(a),bb=c(Dn),ym=r(Dn,"SCRIPT",{});var Yw=n(ym);yb=p(Yw,`function calculate() {
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
      }`),Yw.forEach(a),wb=c(Dn),Vv=r(Dn,"DIV",{class:!0});var o0=n(Vv);Oh=r(o0,"DIV",{class:!0});var zw=n(Oh);_b=p(zw,"Copyright © 2023 Power for Planet"),zw.forEach(a),Eb=c(o0),kv=r(o0,"DIV",{class:!0});var c0=n(kv);Lh=r(c0,"DIV",{class:!0});var Kw=n(Lh);Ib=p(Kw,"Privacy Policy"),Kw.forEach(a),Db=c(c0),Ru=r(c0,"DIV",{class:!0});var Zh=n(Ru);ig=r(Zh,"IMG",{src:!0,alt:!0,class:!0}),Pb=c(Zh),og=r(Zh,"IMG",{src:!0,alt:!0,class:!0}),Vb=c(Zh),cg=r(Zh,"IMG",{src:!0,alt:!0,class:!0}),Zh.forEach(a),c0.forEach(a),o0.forEach(a),Dn.forEach(a),kb=c(Ch),wm=r(Ch,"SCRIPT",{});var Jw=n(wm);Sb=p(Jw,`function toggleElement(k) {
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

    setTimeout(() => {
      sortCombo('colorselector')
    }, 200)`),Jw.forEach(a),Ch.forEach(a),this.h()},h(){t(u,"id","expandElement"),t(u,"class","fixed inset-0 bg-blue-500 text-white flex items-center justify-center"),t(i,"class","relative"),t(g,"id","expandButton"),t(g,"class","bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"),T(l,"display","none"),t(E,"class","mt-[-2000px] pt-[2000px]"),t(E,"id","map2"),t(k,"class","mt-[-840px] pt-[840px]"),t(k,"id","calculator2"),t(M,"class","mt-[-5000px] pt-[5000px]"),t(M,"id","map3"),t(b,"class","mt-[-3900px] pt-[3900px]"),t(b,"id","calculator3"),t(ge,"class","uppercase pb-5 text-pfp-green font-bold"),t(U,"class","text-3xl leading-[33px] font-bold text-[#2e3855] font-Poppins"),t(he,"class","pt-6"),t(fe,"class","mr-3"),S(fe.src,qe="/assets/arrow-right-circle.png")||t(fe,"src",qe),t(fe,"alt",""),t(ae,"class","mt-10 w-fit p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"),t(ae,"href","/explore/#map"),t($,"class","w-3/5 p-10 pr-12 bg-white"),t(Ce,"class","absolute top-[30%] h-36 left-[72%] z-0"),S(Ce.src,me="/assets/cow 1.png")||t(Ce,"src",me),t(Ce,"alt",""),t(De,"class","absolute top-[35%] h-40 left-[68%] z-10"),S(De.src,Se="/assets/manure 1.png")||t(De,"src",Se),t(De,"alt",""),t(ee,"class","absolute top-[35%] h-28 left-[75%] z-30"),S(ee.src,Ne="/assets/apple 1.png")||t(ee,"src",Ne),t(ee,"alt",""),t(Me,"class","absolute top-60 h-20 left-200 ml-10 z-0"),S(Me.src,xe="/assets/leaf2 1.png")||t(Me,"src",xe),t(Me,"alt",""),t(P,"class","absolute top-[35%] h-48 left-[65%] z-30"),S(P.src,B="/assets/pet bottle 1.png")||t(P,"src",B),t(P,"alt",""),t(oe,"class","absolute top-[35%] h-48 left-[65%] z-20"),S(oe.src,J="/assets/woodchips 1.png")||t(oe,"src",J),t(oe,"alt",""),t(be,"class","absolute top-96 h-30 left-200 ml-80 z-0"),S(be.src,Pt="/assets/leaf1 1.png")||t(be,"src",Pt),t(be,"alt",""),t(Ge,"class","absolute top-50 h-30 left-200 ml-80 z-0"),S(Ge.src,Ue="/assets/fish 1.png")||t(Ge,"src",Ue),t(Ge,"alt",""),t(N,"class","w-2/5 p-4 bg-light-green"),t(N,"id","topRightCluster"),t(R,"class","flex rounded-2xl overflow-hidden mt-12"),t(Y,"class","w-full"),t(Fe,"class","text-3xl font-bold text-[#2e3855] font-Poppins text-center justify-center mb-10"),S(gt.src,mt="/assets/pet bottle 1.png")||t(gt,"src",mt),t(gt,"alt",""),t(st,"class","flex justify-center h-40"),t(ft,"class","w-2/4"),t(ut,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(Tt.src,jt="/assets/Group 7 (2).png")||t(Tt,"src",jt),t(Tt,"alt",""),t(ht,"class","flex justify-center h-40"),t(xt,"class","w-2/4"),t(se,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(Xe.src,Et="/assets/Group 7 (3).png")||t(Xe,"src",Et),t(Xe,"alt",""),t(Ft,"class","flex justify-center h-40"),t(Bt,"class","w-2/4"),t(Je,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(qt.src,It="/assets/Group 7.png")||t(qt,"src",It),t(qt,"alt",""),t(at,"class","flex justify-center h-40"),t(ct,"class","w-2/4"),t(ve,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(Ut.src,Ot="/assets/Group 7 (1).png")||t(Ut,"src",Ot),t(Ut,"alt",""),t(Qt,"class","flex justify-center h-40"),t(Lt,"class","w-2/4"),t(Dt,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(ce,"class","grid gap-6 md:grid-cols-5 grid-cols-2 w-full"),t(ce,"id","thegrid"),t(Ns,"class","relative z-10 w-full text-white mb-[-90px] mt-16 text-center font-semibold text-xl tracking-wider uppercase"),t(Zt,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent"),t(hs,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-end after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase"),t(kt,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase"),t(os,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase"),t(rs,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-start after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase"),t(Ss,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent"),t(it,"class","flex w-full mt-10 pt-4 rounded-2xl mb-10 bg-[#2E3855]"),T(it,"height","70px"),t(xs,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(Dr,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(Es,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(ps,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(as,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(jr,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(Xt,"class","grid gap-6 grid-cols-6 w-full"),t(Xt,"id","thegrid2"),t(ns,"class","p-3 text-white arrow arrow-bottom relative w-1/3 bg-gradient-to-r from-[#FF5252] to-[#59AFFF] rounded-2xl font-bold text-xl leading-10 text-[#2E3855] mb-0 text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-[#AD85AC] after:border-r-transparent after:border-l-transparent"),t(Nr,"class","flex justify-center mt-6 p-6"),t(Bs,"class","p-3 relative w-1/3 bg-[#D0E6F2] leading-10 text-[#2E3855] mb-0 rounded-2xl font-bold text-xl text-center"),t(bs,"class","flex justify-center mt-[-10px] p-6 mb-[-20px]"),t(Ae,"class","mb-10 bg-white mt-8 container mx-auto p-10 rounded-2xl"),T(Ae,"font-family","'Poppins', sans-serif"),t(pr,"class","h-80 p-6"),S(pr.src,Br="/assets/Frame 19 (1).png")||t(pr,"src",Br),t(pr,"alt",""),t(fr,"class","bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-l-2xl"),T(cs,"font-family","'Poppins', sans-serif"),t(cs,"class","uppercase pb-0 text-pfp-green font-bold"),T(ra,"font-family","'Poppins', sans-serif"),t(ra,"class","text-3xl font-bold text-[#2e3855] font-Poppins mt-5"),T(Os,"font-family","'Public Sans', sans-serif"),t(Os,"class","text-[#2E3855] tracking-wider mt-5"),t(ys,"class","md:w-3/5 w-full p-14 pt-8 pb-6"),t(ur,"class","flex md:flex-row flex-col items-center rounded-2xl bg-white w-full"),t(rr,"class","container mx-auto rounded-2xl"),t(gs,"class","mr-2"),S(gs.src,Ul="/assets/x-circle.png")||t(gs,"src",Ul),t(gs,"alt",""),t(ar,"type","button"),t(ar,"onclick","toggleElementOff('cow')"),T(ar,"font-family","'Public Sans', sans-serif"),T(ar,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(ar,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t($r,"class","relative left-[98%] rounded-r-2xl"),T(hr,"height","70%"),T(hr,"padding","20px"),T(hr,"margin-left","5%"),S(hr.src,za="/assets/cow 1.png")||t(hr,"src",za),t(hr,"alt",""),t(Fn,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(Ds,"font-family","'Poppins', sans-serif"),t(Ds,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(Hr,"class","font-bold text-xl pr-3"),t(xr,"class","ml-5 map-biogas info-pop"),S(xr.src,zs="/assets/Frame 15.png")||t(xr,"src",zs),t(xr,"alt",""),T(Rs,"font-family","'Public Sans', sans-serif"),t(Rs,"class","flex items-center text-[#2E3855] text-lg"),t(On,"class","font-bold text-xl"),T(Ur,"font-family","'Public Sans', sans-serif"),t(Ur,"class","text-[#2E3855] text-lg"),t(mr,"class","w-1/2"),t(aa,"class","flex justify-between items-center w-full mt-[-50px]"),t(na,"class","mr-3"),S(na.src,uo="/assets/bar-chart.png")||t(na,"src",uo),t(na,"alt",""),t(Ms,"type","button"),T(Ms,"font-family","'Public Sans', sans-serif"),t(Ms,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(br,"class","mr-3"),S(br.src,Tr="/assets/bar-chart.png")||t(br,"src",Tr),t(br,"alt",""),t(lr,"type","button"),T(lr,"font-family","'Public Sans', sans-serif"),t(lr,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Ps,"class","flex"),t(Ks,"class","mr-3"),S(Ks.src,Xa="/assets/bar-chart.png")||t(Ks,"src",Xa),t(Ks,"alt",""),t(la,"type","button"),T(la,"font-family","'Public Sans', sans-serif"),t(la,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(yi,"class","mr-3"),S(yi.src,Yd="/assets/bar-chart (1).png")||t(yi,"src",Yd),t(yi,"alt",""),t(ia,"type","button"),T(ia,"font-family","'Public Sans', sans-serif"),t(ia,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Wr,"class","flex justify-start"),t(_s,"class","mr-3"),S(_s.src,Mn="/assets/book-open.png")||t(_s,"src",Mn),t(_s,"alt",""),t(_i,"href","https://www.host.nl/en/case/guichen-france/"),t(_i,"target","_blank"),T(Qa,"font-family","'Poppins', sans-serif"),t(Qa,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(wr,"class","ml-5 map-case-study info-pop"),S(wr.src,po="/assets/Frame 15.png")||t(wr,"src",po),t(wr,"alt",""),t(yr,"class","flex justify-start items-center mt-8 pl-2"),t(jn,"class","mb-2 text-lg font-light text-[#2E3855]"),t(Ia,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(oa,"font-family","'Public Sans', sans-serif"),t(oa,"class","mt-3 pl-2"),t(ws,"class","p-6"),S(ca.src,sn="/assets/medres/Anaerobic Digestion1.jpg")||t(ca,"src",sn),t(ca,"class","rounded-full w-16 h-16"),t(ca,"alt",""),t(go,"class","mt-2"),T(Wl,"font-family","'Poppins', sans-serif"),t(Wl,"class","mt-0 font-bold text-lg leading-10 text-white"),T(Yl,"font-family","'Public Sans', sans-serif"),t(Yl,"class","text-white text-xl mt-1 tracking-wider"),t(ka,"class","ml-5"),t(Pa,"class","flex"),t(an,"class","mr-3"),S(an.src,sc="/assets/arrow-right-circle.png")||t(an,"src",sc),t(an,"alt",""),t(qn,"type","button"),t(qn,"onclick","toggleAlOff();"),T(qn,"font-family","'Public Sans', sans-serif"),t(qn,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(rn,"href","#calculator"),t(js,"class","mr-3"),S(js.src,Sa="/assets/arrow-right-circle.png")||t(js,"src",Sa),t(js,"alt",""),t(da,"type","button"),T(da,"font-family","'Public Sans', sans-serif"),t(da,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(pl,"href","/green-energy/"),t(_r,"class","flex w-full"),t(Gs,"class","flex flex-col p-5"),t(Da,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(qs,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(qs,"id","cow"),t(on,"class","mr-2"),S(on.src,zl="/assets/x-circle.png")||t(on,"src",zl),t(on,"alt",""),t(ln,"type","button"),t(ln,"onclick","toggleElementOff('food')"),T(ln,"font-family","'Public Sans', sans-serif"),T(ln,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(ln,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(Ar,"class","relative left-[98%] rounded-r-2xl"),T(Aa,"height","130px"),T(Aa,"padding","20px"),T(Aa,"margin-left","17%"),S(Aa.src,rc="/assets/Group 7 (2).png")||t(Aa,"src",rc),t(Aa,"alt",""),t(Ai,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(Js,"font-family","'Poppins', sans-serif"),t(Js,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(Fa,"class","font-bold text-xl pr-3"),t(Xs,"class","ml-5 map-biogas info-pop"),S(Xs.src,Fi="/assets/Frame 15.png")||t(Xs,"src",Fi),t(Xs,"alt",""),T($s,"font-family","'Public Sans', sans-serif"),t($s,"class","flex items-center text-[#2E3855] text-lg"),t(zr,"class","font-bold text-xl"),T(Yr,"font-family","'Public Sans', sans-serif"),t(Yr,"class","text-[#2E3855] text-lg"),t(Er,"class","w-1/2"),t(Ta,"class","flex justify-between items-center w-full mt-[-50px]"),t(ml,"class","mr-3"),S(ml.src,mo="/assets/bar-chart.png")||t(ml,"src",mo),t(ml,"alt",""),t(dn,"type","button"),T(dn,"font-family","'Public Sans', sans-serif"),t(dn,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Qs,"class","mr-3"),S(Qs.src,xl="/assets/bar-chart.png")||t(Qs,"src",xl),t(Qs,"alt",""),t(ua,"type","button"),T(ua,"font-family","'Public Sans', sans-serif"),t(ua,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(cn,"class","flex"),t(Hn,"class","mr-3"),S(Hn.src,ef="/assets/bar-chart.png")||t(Hn,"src",ef),t(Hn,"alt",""),t(fa,"type","button"),T(fa,"font-family","'Public Sans', sans-serif"),t(fa,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(un,"class","mr-3"),S(un.src,tf="/assets/bar-chart (1).png")||t(un,"src",tf),t(un,"alt",""),t(Zs,"type","button"),T(Zs,"font-family","'Public Sans', sans-serif"),t(Zs,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Li,"class","flex justify-start"),t(fn,"class","mr-3"),S(fn.src,nc="/assets/book-open.png")||t(fn,"src",nc),t(fn,"alt",""),t(Oa,"href","https://www.host.nl/en/case/guichen-france/"),t(Oa,"target","_blank"),T(Ci,"font-family","'Poppins', sans-serif"),t(Ci,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(bo,"class","ml-5 map-case-study info-pop"),S(bo.src,sf="/assets/Frame 15.png")||t(bo,"src",sf),t(bo,"alt",""),t(Un,"class","flex justify-start items-center mt-8 pl-2"),t(yo,"class","mb-2 text-lg font-light text-[#2E3855]"),t(zn,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(yl,"font-family","'Public Sans', sans-serif"),t(yl,"class","mt-3 pl-2"),t(Vs,"class","p-6"),S(Mi.src,vn="/assets/medres/Anaerobic Digestion1.jpg")||t(Mi,"src",vn),t(Mi,"class","rounded-full w-16 h-16"),t(Mi,"alt",""),t(_o,"class","mt-2"),T(Il,"font-family","'Poppins', sans-serif"),t(Il,"class","mt-0 font-bold text-lg leading-10 text-white"),T(Jn,"font-family","'Public Sans', sans-serif"),t(Jn,"class","text-white text-xl mt-1 tracking-wider"),t(Ma,"class","ml-5"),t(Ca,"class","flex"),t(ji,"class","mr-3"),S(ji.src,Ql="/assets/arrow-right-circle.png")||t(ji,"src",Ql),t(ji,"alt",""),t(Ga,"type","button"),t(Ga,"onclick","toggleAlOff();"),T(Ga,"font-family","'Public Sans', sans-serif"),t(Ga,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(gn,"href","#calculator"),t(Zl,"class","mr-3"),S(Zl.src,Io="/assets/arrow-right-circle.png")||t(Zl,"src",Io),t(Zl,"alt",""),t(ja,"type","button"),T(ja,"font-family","'Public Sans', sans-serif"),t(ja,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(Eo,"href","/green-energy/"),t(Fr,"class","flex w-full"),t(Kn,"class","flex flex-col p-5"),t(Jl,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(or,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(or,"id","food"),t(Bi,"class","mr-2"),S(Bi.src,Do="/assets/x-circle.png")||t(Bi,"src",Do),t(Bi,"alt",""),t(va,"type","button"),t(va,"onclick","toggleElementOff('bottle')"),T(va,"font-family","'Public Sans', sans-serif"),T(va,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(va,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(pa,"class","relative left-[98%] rounded-r-2xl"),T(Vl,"height","130px"),T(Vl,"padding","20px"),T(Vl,"margin-left","30%"),S(Vl.src,td="/assets/pet bottle 1.png")||t(Vl,"src",td),t(Vl,"alt",""),t(Po,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(hn,"font-family","'Poppins', sans-serif"),t(hn,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(mn,"class","font-bold text-xl pr-3"),t(kl,"class","ml-5 map-gcv info-pop"),S(kl.src,dc="/assets/Frame 15.png")||t(kl,"src",dc),t(kl,"alt",""),T(Xr,"font-family","'Public Sans', sans-serif"),t(Xr,"class","flex items-center text-[#2E3855] text-lg"),t(Sl,"class","font-bold text-xl"),T(ti,"font-family","'Public Sans', sans-serif"),t(ti,"class","text-[#2E3855] text-lg"),t(Jr,"class","w-1/2"),t(Na,"class","flex justify-between items-center w-full mt-[-50px]"),t(xn,"class","mr-3"),S(xn.src,sd="/assets/bar-chart.png")||t(xn,"src",sd),t(xn,"alt",""),t(ga,"type","button"),T(ga,"font-family","'Public Sans', sans-serif"),t(ga,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Al,"class","mr-3"),S(Al.src,si="/assets/bar-chart.png")||t(Al,"src",si),t(Al,"alt",""),t(Tl,"type","button"),T(Tl,"font-family","'Public Sans', sans-serif"),t(Tl,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Qn,"class","flex"),t(Fl,"class","mr-3"),S(Fl.src,nf="/assets/bar-chart.png")||t(Fl,"src",nf),t(Fl,"alt",""),t(ha,"type","button"),T(ha,"font-family","'Public Sans', sans-serif"),t(ha,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(bn,"class","mr-3"),S(bn.src,Ll="/assets/bar-chart (1).png")||t(bn,"src",Ll),t(bn,"alt",""),t(Ol,"type","button"),T(Ol,"font-family","'Public Sans', sans-serif"),t(Ol,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Qr,"class","flex justify-start"),t(ma,"class","mr-3"),S(ma.src,To="/assets/book-open.png")||t(ma,"src",To),t(ma,"alt",""),t(qa,"href","https://www.host.nl/en/case/guichen-france/"),t(qa,"target","_blank"),T(yn,"font-family","'Poppins', sans-serif"),t(yn,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(wn,"class","ml-5 map-case-study info-pop"),S(wn.src,$i="/assets/Frame 15.png")||t(wn,"src",$i),t(wn,"alt",""),t(Zn,"class","flex justify-start items-center mt-8 pl-2"),t(el,"class","mb-2 text-lg font-light text-[#2E3855]"),t(xa,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(Zr,"font-family","'Public Sans', sans-serif"),t(Zr,"class","mt-3 pl-2"),t(ks,"class","p-6"),S(Oo.src,mg="/assets/medres/Pyrolysis1.jpg")||t(Oo,"src",mg),t(Oo,"class","rounded-full w-16 h-16"),t(Oo,"alt",""),t(tl,"class","mt-2 w-16"),T(Cl,"font-family","'Poppins', sans-serif"),t(Cl,"class","mt-0 font-bold text-lg leading-10 text-white"),T(ld,"font-family","'Public Sans', sans-serif"),t(ld,"class","text-white text-xl mt-1 tracking-wider"),t(sl,"class","ml-5"),t(li,"class","flex"),t(Co,"class","mr-3"),S(Co.src,bg="/assets/arrow-right-circle.png")||t(Co,"src",bg),t(Co,"alt",""),t(Ir,"type","button"),t(Ir,"onclick","toggleAlOff();"),T(Ir,"font-family","'Public Sans', sans-serif"),t(Ir,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(Lo,"href","#calculator"),t(Go,"class","mr-3"),S(Go.src,yg="/assets/arrow-right-circle.png")||t(Go,"src",yg),t(Go,"alt",""),t(Mo,"type","button"),T(Mo,"font-family","'Public Sans', sans-serif"),t(Mo,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(cu,"href","/green-energy/"),t(yc,"class","flex w-full"),t($a,"class","flex flex-col p-5"),t(Fo,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(er,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(er,"id","bottle"),t(Ml,"class","mr-2"),S(Ml.src,df="/assets/x-circle.png")||t(Ml,"src",df),t(Ml,"alt",""),t(Wi,"type","button"),t(Wi,"onclick","toggleElementOff('technology')"),T(Wi,"font-family","'Public Sans', sans-serif"),T(Wi,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(Wi,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(wc,"class","relative left-[98%] rounded-r-2xl"),T(_c,"height","130px"),T(_c,"padding","20px"),T(_c,"margin-left","10%"),S(_c.src,wg="/assets/Group14.png")||t(_c,"src",wg),t(_c,"alt",""),t(Yi,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(od,"font-family","'Poppins', sans-serif"),t(od,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(Ec,"class","font-bold text-xl"),t(Gl,"class","ml-5 map-gcv info-pop"),S(Gl.src,ff="/assets/Frame 15.png")||t(Gl,"src",ff),t(Gl,"alt",""),T(No,"font-family","'Public Sans', sans-serif"),t(No,"class","flex items-center text-[#2E3855] text-lg"),t(pf,"class","font-bold text-xl"),T(dd,"font-family","'Public Sans', sans-serif"),t(dd,"class","text-[#2E3855] text-lg"),t(jo,"class","w-1/2"),t(Ha,"class","flex justify-between items-center w-full mt-[-50px]"),t(Dc,"class","mr-3"),S(Dc.src,Rv="/assets/bar-chart.png")||t(Dc,"src",Rv),t(Dc,"alt",""),t(Ic,"type","button"),T(Ic,"font-family","'Public Sans', sans-serif"),t(Ic,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(fu,"class","mr-3"),S(fu.src,lm="/assets/bar-chart.png")||t(fu,"src",lm),t(fu,"alt",""),t(jl,"type","button"),T(jl,"font-family","'Public Sans', sans-serif"),t(jl,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(ud,"class","flex"),t(Ki,"class","mr-3"),S(Ki.src,im="/assets/bar-chart.png")||t(Ki,"src",im),t(Ki,"alt",""),t(zi,"type","button"),T(zi,"font-family","'Public Sans', sans-serif"),t(zi,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(kc,"class","mr-3"),S(kc.src,om="/assets/bar-chart (1).png")||t(kc,"src",om),t(kc,"alt",""),t(Vc,"type","button"),T(Vc,"font-family","'Public Sans', sans-serif"),t(Vc,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(fd,"class","flex justify-start"),t(pu,"class","mr-3"),S(pu.src,$v="/assets/book-open.png")||t(pu,"src",$v),t(pu,"alt",""),t(gu,"href","https://www.host.nl/en/case/guichen-france/"),t(gu,"target","_blank"),T(vu,"font-family","'Poppins', sans-serif"),t(vu,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(Sc,"class","ml-5 map-case-study info-pop"),S(Sc.src,Hv="/assets/Frame 15.png")||t(Sc,"src",Hv),t(Sc,"alt",""),t(Bo,"class","flex justify-start items-center mt-8 pl-2"),t(qo,"class","mb-2 text-lg font-light text-[#2E3855]"),t(pd,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(Tc,"font-family","'Public Sans', sans-serif"),t(Tc,"class","mt-3 pl-2"),t(_n,"class","p-6"),S(mu.src,cm="/assets/medres/Pyrolysis1.jpg")||t(mu,"src",cm),t(mu,"class","rounded-full w-16 h-16"),t(mu,"alt",""),t(gd,"class","mt-2 w-16"),T(xu,"font-family","'Poppins', sans-serif"),t(xu,"class","mt-0 font-bold text-lg leading-10 text-white"),T(bu,"font-family","'Public Sans', sans-serif"),t(bu,"class","text-white text-xl mt-1 tracking-wider"),t(hd,"class","ml-5"),t(vd,"class","flex"),t(wu,"class","mr-3"),S(wu.src,dm="/assets/arrow-right-circle.png")||t(wu,"src",dm),t(wu,"alt",""),t(oi,"type","button"),t(oi,"onclick","toggleAlOff();"),T(oi,"font-family","'Public Sans', sans-serif"),t(oi,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(md,"href","#calculator"),t(Ac,"class","mr-3"),S(Ac.src,um="/assets/arrow-right-circle.png")||t(Ac,"src",um),t(Ac,"alt",""),t(Xi,"type","button"),T(Xi,"font-family","'Public Sans', sans-serif"),t(Xi,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(hf,"href","/green-energy/"),t($o,"class","flex w-full"),t(Ro,"class","flex flex-col p-5"),t(gf,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(ii,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(ii,"id","technology"),t(ts,"class","items-center rounded-2xl"),t(ts,"id","cow-panel"),T(ts,"z-index","30"),T(ts,"position","relative"),T(ts,"top","0px"),T(ts,"left","0px"),T(ts,"width","700px"),T(ts,"height","0px"),t(Nl,"id","cow-shadow"),t(Nl,"class","bg-base-100"),T(Nl,"width","1000px"),T(Nl,"height","750px"),T(Nl,"position","relative"),T(Nl,"left","-1000px"),T(Nl,"top","0px"),T(Nl,"margin-bottom","-750px"),T(Nl,"z-index","39"),t(Wt,"id","map"),t(Wt,"class","pt-10"),t(Eu,"class","mr-3"),S(Eu.src,fm="/assets/Group 7 (2).png")||t(Eu,"src",fm),t(Eu,"alt",""),t(Qi,"type","button"),t(Qi,"onclick","toggleElement('food')"),T(Qi,"font-family","'Public Sans', sans-serif"),T(Qi,"left","520px"),T(Qi,"top","-430px"),t(Qi,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(Oc,"class","mr-3"),S(Oc.src,Uv="/assets/manure 1.png")||t(Oc,"src",Uv),t(Oc,"alt",""),t(Zi,"type","button"),t(Zi,"onclick","toggleElement('cow')"),T(Zi,"font-family","'Public Sans', sans-serif"),T(Zi,"left","780px"),T(Zi,"top","-200px"),t(Zi,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(En,"class","mr-3"),S(En.src,Wv="/assets/pet bottle 1.png")||t(En,"src",Wv),t(En,"alt",""),t(eo,"type","button"),t(eo,"onclick","toggleElement('bottle')"),T(eo,"font-family","'Public Sans', sans-serif"),T(eo,"left","120px"),T(eo,"top","-70px"),t(eo,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-2 mb-2"),T(bd,"color","#ffffff"),T(bd,"font-size","18px"),T(bd,"margin","-5px 0px -5px -5px"),t(rl,"type","button"),t(rl,"onclick","toggleElement('technology')"),T(rl,"font-family","'Public Sans', sans-serif"),T(rl,"background","#2e3855"),T(rl,"left","560px"),T(rl,"top","-530px"),t(rl,"class","techbuttons techbutton-dark w-40 h-12 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-base rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2 uppercase"),t(Or,"id","buttons"),T(Or,"z-index","99"),t(wd,"type","text"),t(wd,"placeholder","Search up waste..."),t(wd,"class","px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"),t(_d,"class","i-heroicons-outline-search"),t(Lc,"aria-label","search"),t(Lc,"class","btn btn-square btn-ghost ml-[-45px]"),t(yd,"class","inline-flex items-center justify-center"),t(ql,"class","w-20 mr-3"),S(ql.src,pm="/assets/Frame 19.svg")||t(ql,"src",pm),t(ql,"alt",""),T(ql,"width","50px"),T(ql,"height","50px"),t(to,"type","button"),t(to,"onclick","grow()"),T(to,"font-family","'Public Sans', sans-serif"),t(to,"class","growbutton ml-[10px] w-10 h-10 inline-flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mt-1"),t(Bl,"class","growbuttons inline-flex"),t(Bl,"id","full-screen-buttons"),T(Bl,"width","200px"),T(Bl,"position","relative"),T(Bl,"top","-10px"),T(Bl,"left","calc(100% - 300px)"),t(ci,"class","container duration-300 transform mx-auto w-full bg-cover bg-center bg-no-repeat bg-[url(/assets/field.png)] rounded-2xl"),T(ci,"padding-top","520px"),T(ci,"z-index","29"),t(ci,"id","field"),t(ci,"onclick","toggleAlOff();"),t(mf,"class","pt-10 rounded-2xl mb-10"),t(Pu,"class","h-80 p-6"),S(Pu.src,Yv="/assets/tech.png")||t(Pu,"src",Yv),t(Pu,"alt",""),t(xf,"class","bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-l-2xl"),T(Vu,"font-family","'Poppins', sans-serif"),t(Vu,"class","uppercase pb-0 text-pfp-green font-bold"),T(Cc,"font-family","'Poppins', sans-serif"),t(Cc,"class","text-3xl font-bold text-[#2e3855] font-Poppins mt-5"),T(ku,"font-family","'Public Sans', sans-serif"),t(ku,"class","text-[#2E3855] tracking-wider mt-5"),t(Ua,"class","md:w-3/5 w-full p-14 pt-8 pb-6"),t(Id,"class","flex md:flex-row flex-col items-center rounded-2xl bg-white w-full"),t(Ed,"class","container mx-auto rounded-2xl"),t(In,"id","calc-shadow-l"),t(In,"class","bg-base-100"),T(In,"width","1000px"),T(In,"height","750px"),T(In,"position","relative"),T(In,"left","-1000px"),T(In,"top","0px"),T(In,"margin-bottom","-750px"),T(In,"z-index","9"),t(Rl,"id","calc-shadow-r"),t(Rl,"class","bg-base-100"),T(Rl,"width","1000px"),T(Rl,"height","750px"),T(Rl,"position","relative"),T(Rl,"right","-100%"),T(Rl,"top","0px"),T(Rl,"margin-bottom","-750px"),T(Rl,"z-index","9"),t(so,"class","rounded-2xl pt-10"),t(so,"id","calculator"),t(Pd,"class","uppercase text-xl m-5"),t(Vd,"id","waste-type1"),t(bf,"id","waste-type2"),t(no,"class","text-2xl font-bold leading-10"),t(Dd,"class","bg-[#E7F5F5] rounded-2xl text-center p-6 mb-10 text-[#2E3855]"),S(Wo.src,zv="/assets/medres/Pyrolysis1.jpg")||t(Wo,"src",zv),t(Wo,"class","rounded-full w-24 h-24"),t(Wo,"id","matched-img"),t(Wo,"alt",""),t(yf,"class","mx-auto"),t(di,"class","uppercase text-xl m-5 mt-6"),t(Tu,"class","text-2xl font-bold leading-6"),t(Tu,"id","matched-tech"),t(Sd,"class","text-center text-white"),t(kd,"class","bg-[#2E3855] rounded-2xl flex flex-col justify-center p-6 py-12 mb-6"),t(ao,"class","w-1/3 flex-col justify-center"),T(ao,"font-family","'Poppins', sans-serif"),t(Mc,"class","ml-5 calc-gcv info-pop"),S(Mc.src,vm="/assets/info.png")||t(Mc,"src",vm),t(Mc,"alt",""),T(Yo,"font-family","'Poppins', sans-serif"),t(Yo,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(Fd,"id","energycontent"),t(wf,"id","energycontent-unit"),t(Ad,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(Td,"class","flex justify-center"),t(Gc,"class","ml-5 calc-heat-produced info-pop"),S(Gc.src,Kv="/assets/info.png")||t(Gc,"src",Kv),t(Gc,"alt",""),T(Ld,"font-family","'Poppins', sans-serif"),t(Ld,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(ui,"id","heatproduced"),t(Fu,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(Od,"class","flex justify-center mb-2"),t(Ou,"class","ml-5 calc-heat-savings info-pop"),S(Ou.src,Jv="/assets/info.png")||t(Ou,"src",Jv),t(Ou,"alt",""),T(zo,"font-family","'Poppins', sans-serif"),t(zo,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(Md,"id","heatsavingspa"),t(Ko,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(Cd,"class","flex justify-center mb-6"),t(lo,"class","ml-5 calc-electricity-produced info-pop"),S(lo.src,gm="/assets/info.png")||t(lo,"src",gm),t(lo,"alt",""),T(Gd,"font-family","'Poppins', sans-serif"),t(Gd,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(jd,"id","electricityproduced"),t(Lu,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(Jo,"class","flex justify-center mb-2"),t(Cu,"class","ml-5 calc-electrical-savings info-pop"),S(Cu.src,hm="/assets/info.png")||t(Cu,"src",hm),t(Cu,"alt",""),T(Nd,"font-family","'Poppins', sans-serif"),t(Nd,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(_f,"id","electricitysavingspa"),t(Bd,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(al,"class","flex justify-center mb-6"),t(Vh,"id","char-fert"),t(Xv,"class","ml-5 calc-char info-pop"),S(Xv.src,F2="/assets/info.png")||t(Xv,"src",F2),t(Xv,"alt",""),T(Ef,"font-family","'Poppins', sans-serif"),t(Ef,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(kh,"id","fertiliser"),t(Qv,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(Ev,"class","flex justify-center mb-6"),t(ea,"class","w-2/3 flex-col justify-center mx-auto pl-10 mt-0"),t(Uo,"class","flex flex-row gap-8 items-center p-5 pt-16 mt-[-20px]"),t(ro,"class","duration-300 transition opacity-0 container mb-[-630px] bg-white p-16 pb-6 rounded-b-2xl"),t(ro,"id","results"),T(Zv,"font-family","'Poppins', sans-serif"),t(Zv,"class","card text-3xl font-bold text-[#2e3855] font-Poppins text-center"),T(qd,"font-family","'Public Sans', sans-serif"),t(qd,"class","text-[#2E3855] tracking-wider mt-5 pl-24 pr-24"),t(Dv,"class","text-center pb-10"),t(Pv,"class","h-60"),t(Pv,"id","calc-img"),S(Pv.src,O2="/assets/cow 1 (1).png")||t(Pv,"src",O2),t(Pv,"alt",""),t(Sh,"class","bg-[#E7F5F5] w-1/3 flex justify-center rounded-2xl mr-8"),t(eg,"type","button"),t(eg,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Pf,"class","bg-[#E7F5F5]"),Pf.__value="Cheese production",Pf.value=Pf.__value,t(Vf,"class","bg-[#E7F5F5]"),Vf.__value="Butter production",Vf.value=Vf.__value,t(kf,"class","bg-[#E7F5F5]"),kf.__value="Ice cream",kf.value=kf.__value,t(Sf,"class","bg-[#E7F5F5]"),Sf.__value="Beer production",Sf.value=Sf.__value,t(Tf,"class","bg-[#E7F5F5]"),Tf.__value="Wine production",Tf.value=Tf.__value,t(Af,"class","bg-[#E7F5F5]"),Af.__value="Spirits production",Af.value=Af.__value,t(Ff,"class","bg-[#E7F5F5]"),Ff.__value="Ethanol production",Ff.value=Ff.__value,t(Of,"class","bg-[#E7F5F5]"),Of.__value="Pulp production",Of.value=Of.__value,t(Lf,"class","bg-[#E7F5F5]"),Lf.__value="Juice production",Lf.value=Lf.__value,t(Cf,"class","bg-[#E7F5F5]"),Cf.__value="Tomato ketchup",Cf.value=Cf.__value,t(Mf,"class","bg-[#E7F5F5]"),Mf.__value="Bovine meat",Mf.value=Mf.__value,t(Gf,"class","bg-[#E7F5F5]"),Gf.__value="Pig meat",Gf.value=Gf.__value,t(jf,"class","bg-[#E7F5F5]"),jf.__value="Sheep meat",jf.value=jf.__value,t(Nf,"class","bg-[#E7F5F5]"),Nf.__value="Frozen potatoes",Nf.value=Nf.__value,t(Bf,"class","bg-[#E7F5F5]"),Bf.__value="Prepared potatoes (crisps)",Bf.value=Bf.__value,t(qf,"class","bg-[#E7F5F5]"),qf.__value="Potato starch",qf.value=qf.__value,t(Rf,"class","bg-[#E7F5F5]"),Rf.__value="Dried potatoes",Rf.value=Rf.__value,t($f,"class","bg-[#E7F5F5]"),$f.__value="Sugar production",$f.value=$f.__value,t(Hf,"class","bg-[#E7F5F5]"),Hf.__value="Yeast production",Hf.value=Hf.__value,t(Uf,"class","bg-[#E7F5F5]"),Uf.__value="Vegetable oils production",Uf.value=Uf.__value,t(Wf,"class","bg-[#E7F5F5]"),Wf.__value="Biodiesel production",Wf.value=Wf.__value,t(Yf,"class","bg-[#E7F5F5]"),Yf.__value="Pig manure",Yf.value=Yf.__value,t(zf,"class","bg-[#E7F5F5]"),zf.__value="Dairy Cattle",zf.value=zf.__value,t(Kf,"class","bg-[#E7F5F5]"),Kf.__value="Non diary cattle",Kf.value=Kf.__value,t(Jf,"class","bg-[#E7F5F5]"),Jf.__value="Buffalo",Jf.value=Jf.__value,t(Xf,"class","bg-[#E7F5F5]"),Xf.__value="Chicken layer manure",Xf.value=Xf.__value,t(Qf,"class","bg-[#E7F5F5]"),Qf.__value="Chicken broiler manure",Qf.value=Qf.__value,t(Zf,"class","bg-[#E7F5F5]"),Zf.__value="Sheep",Zf.value=Zf.__value,t(ep,"class","bg-[#E7F5F5]"),ep.__value="Food waste",ep.value=ep.__value,t(tp,"class","bg-[#E7F5F5]"),tp.__value="Fish waste",tp.value=tp.__value,t(sp,"class","bg-[#E7F5F5]"),sp.__value="Coffee grounds",sp.value=sp.__value,t(rp,"class","bg-[#E7F5F5]"),rp.__value="Crop residues",rp.value=rp.__value,t(ap,"class","bg-[#E7F5F5]"),ap.__value="Maize silage",ap.value=ap.__value,t(np,"class","bg-[#E7F5F5]"),np.__value="Cereal",np.value=np.__value,t(lp,"class","bg-[#E7F5F5]"),lp.__value="Grass silage",lp.value=lp.__value,t(ip,"class","bg-[#E7F5F5]"),ip.__value="Pulp & Paper Waste",ip.value=ip.__value,t(op,"class","bg-[#E7F5F5]"),op.__value="Textile Waste",op.value=op.__value,t(cp,"class","bg-[#E7F5F5]"),cp.__value="PE Plastic",cp.value=cp.__value,t(dp,"class","bg-[#E7F5F5]"),dp.__value="SRF",dp.value=dp.__value,t(up,"class","bg-[#E7F5F5]"),up.__value="RDF",up.value=up.__value,t(fp,"class","bg-[#E7F5F5]"),fp.__value="PP Plastic",fp.value=fp.__value,t(pp,"class","bg-[#E7F5F5]"),pp.__value="PS Plastic",pp.value=pp.__value,t(vp,"class","bg-[#E7F5F5]"),vp.__value="PVC Plastic",vp.value=vp.__value,t(gp,"class","bg-[#E7F5F5]"),gp.__value="PET Plastic",gp.value=gp.__value,t(hp,"class","bg-[#E7F5F5]"),hp.__value="Rubber",hp.value=hp.__value,t(mp,"class","bg-[#E7F5F5]"),mp.__value="Wood waste",mp.value=mp.__value,t(xp,"class","bg-[#E7F5F5]"),xp.__value="Municipal Solid Waste (MSW)",xp.value=xp.__value,t(bp,"class","bg-[#E7F5F5]"),bp.__value="Medical Waste",bp.value=bp.__value,t(yp,"class","bg-[#E7F5F5]"),yp.__value="Ceramics",yp.value=yp.__value,t(wp,"class","bg-[#E7F5F5]"),wp.__value="Sand",wp.value=wp.__value,t(_p,"class","bg-[#E7F5F5]"),_p.__value="Dust",_p.value=_p.__value,t(Ep,"class","bg-[#E7F5F5]"),Ep.__value="Glass",Ep.value=Ep.__value,t(Ip,"class","bg-[#E7F5F5]"),Ip.__value="Metals",Ip.value=Ip.__value,t(Ze,"id","colorselector"),t(Ze,"class","w-full bg-transparent text-center border-0 line-h-20"),t(Th,"class","button dropdown w-1/2 flex justify-between z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(Df,"class","inline-flex rounded-xl shadow-sm w-full"),t(Df,"role","group"),t(tg,"type","button"),t(tg,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Pp,"class","bg-[#E7F5F5]"),Pp.__value="5",Pp.value=Pp.__value,t(Vp,"class","bg-[#E7F5F5]"),Vp.__value="10",Vp.value=Vp.__value,t(kp,"class","bg-[#E7F5F5]"),kp.__value="100",kp.value=kp.__value,t(Sp,"class","bg-[#E7F5F5]"),Sp.__value="400",Sp.value=Sp.__value,t(Tp,"class","bg-[#E7F5F5]"),Tp.__value="1000",Tp.value=Tp.__value,t(Ap,"class","bg-[#E7F5F5]"),Ap.__value="4000",Ap.value=Ap.__value,t(Fp,"class","bg-[#E7F5F5]"),Fp.__value="10000",Fp.value=Fp.__value,t(Op,"class","bg-[#E7F5F5]"),Op.__value="20000",Op.value=Op.__value,t(Lp,"class","bg-[#E7F5F5]"),Lp.__value="40000",Lp.value=Lp.__value,t(Cp,"class","bg-[#E7F5F5]"),Cp.__value="60000",Cp.value=Cp.__value,t($l,"id","colorselector2"),t($l,"class","w-full bg-transparent text-center focus-0 after:border-0 before:border-0 after:border-[#E7F5F5]"),t(Ah,"class","button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(Dp,"class","inline-flex rounded-xl shadow-sm w-full mt-5"),t(Dp,"role","group"),t(sg,"type","button"),t(sg,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Gp,"class","bg-[#E7F5F5]"),Gp.__value="electricity",Gp.value=Gp.__value,t(jp,"class","bg-[#E7F5F5]"),jp.__value="heating-cooling",jp.value=jp.__value,t(Np,"class","bg-[#E7F5F5]"),Np.__value="carbon-credits",Np.value=Np.__value,t(Bp,"class","bg-[#E7F5F5]"),Bp.__value="fertiliser",Bp.value=Bp.__value,t(Gu,"id","colorselector3"),t(Gu,"class","w-full bg-transparent text-center"),t(Fh,"class","button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(Mp,"class","inline-flex rounded-xl shadow-sm w-full mt-5"),t(Mp,"role","group"),t(Qo,"class","w-2/3 pl-12 pr-0 md:mt-0 mt-5 duration-300 transform"),t(Qo,"id","calc-selectors"),T(If,"font-family","'Poppins', sans-serif"),t(If,"class","flex md:flex-row flex-col items-center rounded-lg bg-white w-full mt-5"),t(rg,"class","text-4xl font-bold"),t(rg,"id","feasible"),T(ju,"font-family","'Public Sans', sans-serif"),t(ju,"class","text-[#2E3855] tracking-wider mt-5"),t(ju,"id","feasible-results"),t(qp,"class","w-[784px] ml-80 pl-16 h-60 p-10 pt-16 md:mt-0 mt-5 duration-300 transform absolute -translate-x-full opacity-0 -translate-y-full bg-[#E7F5F5] rounded-2xl"),t(qp,"id","calc-message"),t(ag,"class","mr-3"),S(ag.src,L2="/assets/arrow-right-circle.png")||t(ag,"src",L2),t(ag,"alt",""),t(Bu,"id","call-button"),t(Bu,"class","duration-300 transform -translate-x-full opacity-0 font-bold mt-16 w-[375px] p-4 hover:bg-pfp-green bg-pfp-orange rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(Bu,"href","/contact"),t(ng,"class","mr-3"),S(ng.src,C2="/assets/arrow-right-circle.png")||t(ng,"src",C2),t(ng,"alt",""),t(qu,"id","call-button2"),t(qu,"class","duration-300 transform -translate-x-full opacity-0 font-bold mt-16 ml-1 w-[350px] p-4 hover:bg-pfp-green bg-pfp-navy rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(qu,"href","/green-energy/"),t(lg,"class","mr-4 h-6"),S(lg.src,M2="/assets/calculator.png")||t(lg,"src",M2),t(lg,"alt",""),t(Rd,"id","calc-button"),t(Rd,"class","duration-300 transform -translate-x-[338px] font-bold mt-16 w-1/3 p-4 hover:bg-pfp-green bg-pfp-orange rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(Rd,"href","/explore/#calculate"),t(Rd,"onclick","calculate();"),t(Nu,"class","flex justify gap-16 w-full"),t(Xo,"class","container rounded-2xl bg-white p-20 pt-12 pb-16 z-23"),t(Xo,"id","growcalc"),t(Zo,"id","calc-spacer"),t(Zo,"class","bg-base-100"),T(Zo,"width","1000px"),T(Zo,"height","750px"),T(Zo,"position","relative"),T(Zo,"right","-100%"),T(Zo,"top","0px"),T(Zo,"margin-bottom","-750px"),T(Zo,"z-index","9"),t(Iv,"id","calculate"),t(Oh,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Lh,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(ig.src,G2="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ig,"src",G2),t(ig,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(ig,"class","h-6 w-6"),S(og.src,j2="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(og,"src",j2),t(og,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(og,"class","h-6 w-6"),S(cg.src,N2="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(cg,"src",N2),t(cg,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(cg,"class","h-6 w-6"),t(Ru,"class","flex items-center gap-5"),t(kv,"class","flex-1 flex justify-end items-center gap-10"),t(Vv,"class","w-[1260px] flex justify-between items-center pt-[30px] pb-[50px]"),t(j,"class","h-full max-w-[1260px]"),t(_,"class","flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap mt-8")},m(Ct,ba){lt(Ct,l,ba),e(l,i),e(i,u),e(l,v),e(l,g),e(g,x),e(l,m),e(l,h),e(h,I),e(l,w),e(l,V),e(V,y),lt(Ct,D,ba),lt(Ct,E,ba),lt(Ct,O,ba),lt(Ct,k,ba),lt(Ct,A,ba),lt(Ct,M,ba),lt(Ct,G,ba),lt(Ct,b,ba),lt(Ct,C,ba),lt(Ct,_,ba),e(_,q),e(q,F),e(_,L),e(_,j),e(j,Y),e(Y,R),e(R,$),e($,ge),e(ge,ue),e($,K),e($,U),e(U,re),e($,Oe),e($,he),e(he,ze),e($,we),e($,ae),e(ae,fe),e(ae,Ee),e(ae,de),e(de,$e),e(R,Le),e(R,N),e(N,Q),e(Q,Ie),e(N,_e),e(N,Ce),e(N,tt),e(N,De),e(N,Te),e(N,ee),e(N,Be),e(N,Me),e(N,ot),e(N,P),e(N,X),e(N,oe),e(N,le),e(N,be),e(N,Ke),e(N,Ge),e(j,vt),e(j,Ae),e(Ae,je),e(je,$t),e(Ae,Mt),e(Ae,Fe),e(Fe,_t),e(Ae,St),e(Ae,ce),e(ce,ut),e(ut,st),e(st,gt),e(ut,Gt),e(ut,ft),e(ft,Ht),e(ce,Vt),e(ce,se),e(se,ht),e(ht,Tt),e(se,pt),e(se,xt),e(xt,Nt),e(ce,At),e(ce,Je),e(Je,Ft),e(Ft,Xe),e(Je,rt),e(Je,Bt),e(Bt,es),e(ce,bt),e(ce,ve),e(ve,at),e(at,qt),e(ve,nt),e(ve,ct),e(ct,Yt),e(ce,yt),e(ce,Dt),e(Dt,Qt),e(Qt,Ut),e(Dt,Jt),e(Dt,Lt),e(Lt,Rt),e(Ae,wt),e(Ae,Ns),e(Ns,ls),e(Ae,Kt),e(Ae,it),e(it,Zt),e(it,is),e(it,hs),e(hs,W),e(it,ms),e(it,kt),e(kt,ds),e(it,ss),e(it,os),e(os,tr),e(it,Cr),e(it,rs),e(rs,us),e(it,cr),e(it,Ss),e(Ae,Ws),e(Ae,Xt),e(Xt,xs),e(xs,Ts),e(Xt,Mr),e(Xt,Dr),e(Dr,Pr),e(Xt,sr),e(Xt,Es),e(Es,dr),e(Xt,fs),e(Xt,ps),e(ps,ta),e(Xt,Gr),e(Xt,as),e(as,As),e(Xt,Sn),e(Xt,jr),e(jr,Fs),e(Ae,Tn),e(Ae,Nr),e(Nr,ns),e(ns,Vr),e(Ae,Ys),e(Ae,bs),e(bs,Bs),e(Bs,wa),e(j,kr),e(j,Wt),e(Wt,rr),e(rr,ur),e(ur,fr),e(fr,pr),e(ur,Is),e(ur,ys),e(ys,cl),e(cl,fi),e(ys,sa),e(ys,cs),e(cs,pi),e(ys,qr),e(ys,ra),e(ra,vi),e(ra,dl),e(ra,co),e(ys,vs),e(ys,Os),e(Os,Rr),e(Wt,Ya),e(Wt,ts),e(ts,vr),e(vr,Sr),e(ts,gr),e(ts,qs),e(qs,$r),e($r,_a),e(_a,An),e($r,ul),e($r,ar),e(ar,gs),e(qs,gi),e(qs,ws),e(ws,aa),e(aa,Fn),e(Fn,hr),e(aa,hi),e(aa,mr),e(mr,Ds),e(Ds,nr),e(mr,Ls),e(mr,Rs),e(Rs,Hr),e(Hr,Ka),e(Rs,mi),e(Rs,xr),e(mr,Cs),e(mr,Ur),e(Ur,On),e(On,Ln),e(Ur,Ja),e(ws,xi),e(ws,Ps),e(Ps,Ms),e(Ms,na),e(Ms,bi),e(Ps,Cn),e(Ps,lr),e(lr,br),e(lr,ir),e(ws,fl),e(ws,Wr),e(Wr,la),e(la,Ks),e(la,Yc),e(Wr,zc),e(Wr,ia),e(ia,yi),e(ia,fo),e(ws,wi),e(ws,yr),e(yr,_s),e(yr,Gn),e(yr,Qa),e(Qa,_i),e(_i,Ei),e(yr,Ea),e(yr,wr),e(ws,Kc),e(ws,oa),e(oa,jn),e(jn,Jc),e(oa,Ii),e(oa,Ia),e(Ia,Za),e(Za,Nn),e(Ia,Zu),e(Ia,vo),e(vo,en),e(qs,tn),e(qs,Da),e(Da,Gs),e(Gs,Pa),e(Pa,go),e(go,ca),e(Pa,Va),e(Pa,ka),e(ka,Wl),e(Wl,Di),e(ka,Pi),e(ka,Yl),e(Yl,Vi),e(Gs,Bn),e(Gs,_r),e(_r,rn),e(rn,qn),e(qn,an),e(qn,Xc),e(_r,ho),e(_r,pl),e(pl,da),e(da,js),e(da,ki),e(ts,zd),e(ts,or),e(or,Ar),e(Ar,nn),e(nn,Si),e(Ar,Ti),e(Ar,ln),e(ln,on),e(or,vl),e(or,Vs),e(Vs,Ta),e(Ta,Ai),e(Ai,Aa),e(Ta,Qc),e(Ta,Er),e(Er,Js),e(Js,gl),e(Er,Rn),e(Er,$s),e($s,Fa),e(Fa,Zc),e($s,hl),e($s,Xs),e(Er,Kd),e(Er,Yr),e(Yr,zr),e(zr,Jd),e(Yr,ed),e(Vs,Kr),e(Vs,cn),e(cn,dn),e(dn,ml),e(dn,Kl),e(cn,Xd),e(cn,ua),e(ua,Qs),e(ua,$n),e(Vs,Oi),e(Vs,Li),e(Li,fa),e(fa,Hn),e(fa,Qd),e(Li,xo),e(Li,Zs),e(Zs,un),e(Zs,Zd),e(Vs,ac),e(Vs,Un),e(Un,fn),e(Un,eu),e(Un,Ci),e(Ci,Oa),e(Oa,Wn),e(Un,bl),e(Un,bo),e(Vs,Yn),e(Vs,yl),e(yl,yo),e(yo,wo),e(yl,La),e(yl,zn),e(zn,pn),e(pn,tu),e(zn,lc),e(zn,wl),e(wl,ic),e(or,_l),e(or,Jl),e(Jl,Kn),e(Kn,Ca),e(Ca,_o),e(_o,Mi),e(Ca,El),e(Ca,Ma),e(Ma,Il),e(Il,su),e(Ma,Xl),e(Ma,Jn),e(Jn,ru),e(Kn,Gi),e(Kn,Fr),e(Fr,gn),e(gn,Ga),e(Ga,ji),e(Ga,Ni),e(Fr,rf),e(Fr,Eo),e(Eo,ja),e(ja,Zl),e(ja,Dl),e(ts,Xn),e(ts,er),e(er,pa),e(pa,Pl),e(Pl,af),e(pa,au),e(pa,va),e(va,Bi),e(er,ei),e(er,ks),e(ks,Na),e(Na,Po),e(Po,Vl),e(Na,oc),e(Na,Jr),e(Jr,hn),e(hn,nu),e(Jr,cc),e(Jr,Xr),e(Xr,mn),e(mn,qi),e(Xr,Vo),e(Xr,kl),e(Jr,uc),e(Jr,ti),e(ti,Sl),e(Sl,Ba),e(ti,fc),e(ks,lu),e(ks,Qn),e(Qn,ga),e(ga,xn),e(ga,Ri),e(Qn,pc),e(Qn,Tl),e(Tl,Al),e(Tl,iu),e(ks,ri),e(ks,Qr),e(Qr,ha),e(ha,Fl),e(ha,ai),e(Qr,ko),e(Qr,Ol),e(Ol,bn),e(Ol,So),e(ks,vc),e(ks,Zn),e(Zn,ma),e(Zn,rd),e(Zn,yn),e(yn,qa),e(qa,ad),e(Zn,gc),e(Zn,wn),e(ks,ni),e(ks,Zr),e(Zr,el),e(el,lf),e(Zr,Hi),e(Zr,xa),e(xa,hc),e(hc,mc),e(xa,Ao),e(xa,Ra),e(Ra,xc),e(er,bc),e(er,Fo),e(Fo,$a),e($a,li),e(li,tl),e(tl,Oo),e(li,Cv),e(li,sl),e(sl,Cl),e(Cl,nd),e(sl,xg),e(sl,ld),e(ld,ou),e($a,Mv),e($a,yc),e(yc,Lo),e(Lo,Ir),e(Ir,Co),e(Ir,Gv),e(yc,of),e(yc,cu),e(cu,Mo),e(Mo,Go),e(Mo,jv),e(ts,cf),e(ts,ii),e(ii,wc),e(wc,Ui),e(Ui,du),e(wc,Nv),e(wc,Wi),e(Wi,Ml),e(ii,Bv),e(ii,_n),e(_n,Ha),e(Ha,Yi),e(Yi,_c),e(Ha,id),e(Ha,jo),e(jo,od),e(od,cd),e(jo,_g),e(jo,No),e(No,Ec),e(Ec,qv),e(No,uf),e(No,Gl),e(jo,uu),e(jo,dd),e(dd,pf),e(pf,Eg),e(dd,$p),e(_n,Ig),e(_n,ud),e(ud,Ic),e(Ic,Dc),e(Ic,Dg),e(ud,Pg),e(ud,jl),e(jl,fu),e(jl,Vg),e(_n,kg),e(_n,fd),e(fd,zi),e(zi,Ki),e(zi,Pc),e(fd,Hp),e(fd,Vc),e(Vc,kc),e(Vc,Sg),e(_n,Tg),e(_n,Bo),e(Bo,pu),e(Bo,Up),e(Bo,vu),e(vu,gu),e(gu,Ji),e(Bo,Wp),e(Bo,Sc),e(_n,Ag),e(_n,Tc),e(Tc,qo),e(qo,Fg),e(Tc,Og),e(Tc,pd),e(pd,hu),e(hu,Yp),e(pd,Lg),e(pd,zp),e(zp,vf),e(ii,Cg),e(ii,gf),e(gf,Ro),e(Ro,vd),e(vd,gd),e(gd,mu),e(vd,Mg),e(vd,hd),e(hd,xu),e(xu,Kp),e(hd,Jp),e(hd,bu),e(bu,Gg),e(Ro,yu),e(Ro,$o),e($o,md),e(md,oi),e(oi,wu),e(oi,xd),e($o,jg),e($o,hf),e(hf,Xi),e(Xi,Ac),e(Xi,Ng),e(Wt,_u),e(Wt,Nl),e(j,Bg),e(j,mf),e(mf,ci),e(ci,Fc),e(Fc,Or),e(Or,Qi),e(Qi,Eu),e(Or,qg),e(Or,Zi),e(Zi,Oc),e(Or,Rg),e(Or,eo),e(eo,En),e(Or,Xp),e(Or,rl),e(rl,bd),e(bd,$g),e(Or,Iu),e(Or,Qp),e(Qp,Hg),e(Or,Ug),e(Or,Du),e(Du,Zp),e(Fc,Wg),e(Fc,ev),e(ev,Ho),e(Fc,Yg),e(Fc,Bl),e(Bl,yd),e(yd,wd),e(yd,tv),e(yd,Lc),e(Lc,_d),e(Bl,sv),e(Bl,to),e(to,ql),e(j,zg),e(j,so),e(so,Ed),e(Ed,Id),e(Id,xf),e(xf,Pu),e(Id,Kg),e(Id,Ua),e(Ua,rv),e(rv,av),e(Ua,Jg),e(Ua,Vu),e(Vu,Xg),e(Ua,nv),e(Ua,Cc),e(Cc,Qg),e(Cc,Zg),e(Cc,lv),e(Ua,iv),e(Ua,ku),e(ku,eh),e(so,ov),e(so,In),e(so,th),e(so,Rl),e(j,sh),e(j,ro),e(ro,Uo),e(Uo,ao),e(ao,Dd),e(Dd,Pd),e(Pd,rh),e(Dd,cv),e(Dd,no),e(no,Vd),e(Vd,ah),e(no,dv),e(no,uv),e(no,fv),e(no,bf),e(bf,nh),e(no,Su),e(ao,lh),e(ao,kd),e(kd,yf),e(yf,Wo),e(kd,ih),e(kd,Sd),e(Sd,di),e(di,oh),e(Sd,ch),e(Sd,Tu),e(Tu,dh),e(Uo,pv),e(Uo,ea),e(ea,Td),e(Td,Yo),e(Yo,uh),e(Yo,Mc),e(Td,vv),e(Td,Ad),e(Ad,Fd),e(Fd,gv),e(Ad,hv),e(Ad,wf),e(wf,fh),e(ea,Au),e(ea,Od),e(Od,Ld),e(Ld,ph),e(Ld,Gc),e(Od,vh),e(Od,Fu),e(Fu,ui),e(ui,gh),e(Fu,hh),e(ea,mh),e(ea,Cd),e(Cd,zo),e(zo,mv),e(zo,Ou),e(Cd,xh),e(Cd,Ko),e(Ko,bh),e(Ko,Md),e(Md,yh),e(Ko,xv),e(ea,bv),e(ea,Jo),e(Jo,Gd),e(Gd,wh),e(Gd,lo),e(Jo,_h),e(Jo,Lu),e(Lu,jd),e(jd,yv),e(Lu,Eh),e(ea,Ih),e(ea,al),e(al,Nd),e(Nd,Dh),e(Nd,Cu),e(al,wv),e(al,Bd),e(Bd,_v),e(Bd,_f),e(_f,Mu),e(Bd,Ph),e(ea,b0),e(ea,Ev),e(Ev,Ef),e(Ef,Vh),e(Vh,y0),e(Ef,w0),e(Ef,Xv),e(Ev,_0),e(Ev,Qv),e(Qv,kh),e(kh,E0),e(Qv,I0),e(j,D0),e(j,Iv),e(Iv,Xo),e(Xo,Dv),e(Dv,Zv),e(Zv,P0),e(Dv,V0),e(Dv,qd),e(qd,k0),e(qd,S0),e(qd,T0),e(qd,A0),e(qd,F0),e(Xo,O0),e(Xo,If),e(If,Sh),e(Sh,Pv),e(If,L0),e(If,Qo),e(Qo,Df),e(Df,eg),e(eg,C0),e(Df,M0),e(Df,Th),e(Th,Ze),e(Ze,Pf),e(Pf,G0),e(Ze,Vf),e(Vf,j0),e(Ze,kf),e(kf,N0),e(Ze,Sf),e(Sf,B0),e(Ze,Tf),e(Tf,q0),e(Ze,Af),e(Af,R0),e(Ze,Ff),e(Ff,$0),e(Ze,Of),e(Of,H0),e(Ze,Lf),e(Lf,U0),e(Ze,Cf),e(Cf,W0),e(Ze,Mf),e(Mf,Y0),e(Ze,Gf),e(Gf,z0),e(Ze,jf),e(jf,K0),e(Ze,Nf),e(Nf,J0),e(Ze,Bf),e(Bf,X0),e(Ze,qf),e(qf,Q0),e(Ze,Rf),e(Rf,Z0),e(Ze,$f),e($f,ex),e(Ze,Hf),e(Hf,tx),e(Ze,Uf),e(Uf,sx),e(Ze,Wf),e(Wf,rx),e(Ze,Yf),e(Yf,ax),e(Ze,zf),e(zf,nx),e(Ze,Kf),e(Kf,lx),e(Ze,Jf),e(Jf,ix),e(Ze,Xf),e(Xf,ox),e(Ze,Qf),e(Qf,cx),e(Ze,Zf),e(Zf,dx),e(Ze,ep),e(ep,ux),e(Ze,tp),e(tp,fx),e(Ze,sp),e(sp,px),e(Ze,rp),e(rp,vx),e(Ze,ap),e(ap,gx),e(Ze,np),e(np,hx),e(Ze,lp),e(lp,mx),e(Ze,ip),e(ip,xx),e(Ze,op),e(op,bx),e(Ze,cp),e(cp,yx),e(Ze,dp),e(dp,wx),e(Ze,up),e(up,_x),e(Ze,fp),e(fp,Ex),e(Ze,pp),e(pp,Ix),e(Ze,vp),e(vp,Dx),e(Ze,gp),e(gp,Px),e(Ze,hp),e(hp,Vx),e(Ze,mp),e(mp,kx),e(Ze,xp),e(xp,Sx),e(Ze,bp),e(bp,Tx),e(Ze,yp),e(yp,Ax),e(Ze,wp),e(wp,Fx),e(Ze,_p),e(_p,Ox),e(Ze,Ep),e(Ep,Lx),e(Ze,Ip),e(Ip,Cx),e(Qo,Mx),e(Qo,Dp),e(Dp,tg),e(tg,Gx),e(Dp,jx),e(Dp,Ah),e(Ah,$l),e($l,Pp),e(Pp,Nx),e($l,Vp),e(Vp,Bx),e($l,kp),e(kp,qx),e($l,Sp),e(Sp,Rx),e($l,Tp),e(Tp,$x),e($l,Ap),e(Ap,Hx),e($l,Fp),e(Fp,Ux),e($l,Op),e(Op,Wx),e($l,Lp),e(Lp,Yx),e($l,Cp),e(Cp,zx),e(Qo,Kx),e(Qo,Mp),e(Mp,sg),e(sg,Jx),e(Mp,Xx),e(Mp,Fh),e(Fh,Gu),e(Gu,Gp),e(Gp,Qx),e(Gu,jp),e(jp,Zx),e(Gu,Np),e(Np,eb),e(Gu,Bp),e(Bp,tb),e(Qo,sb),e(Qo,Fm),e(Xo,rb),e(Xo,qp),e(qp,rg),e(rg,ab),e(qp,nb),e(qp,ju),e(ju,lb),e(ju,ib),e(ju,ob),e(Xo,cb),e(Xo,Nu),e(Nu,Bu),e(Bu,ag),e(Bu,db),e(Bu,mm),e(mm,ub),e(Nu,fb),e(Nu,qu),e(qu,ng),e(qu,pb),e(qu,xm),e(xm,vb),e(Nu,gb),e(Nu,Rd),e(Rd,lg),e(Rd,hb),e(Rd,bm),e(bm,mb),e(Iv,xb),e(Iv,Zo),e(j,bb),e(j,ym),e(ym,yb),e(j,wb),e(j,Vv),e(Vv,Oh),e(Oh,_b),e(Vv,Eb),e(Vv,kv),e(kv,Lh),e(Lh,Ib),e(kv,Db),e(kv,Ru),e(Ru,ig),e(Ru,Pb),e(Ru,og),e(Ru,Vb),e(Ru,cg),e(_,kb),e(_,wm),e(wm,Sb),jc=!0},p:We,i(Ct){jc||($c(()=>{jc&&(Z&&Z.end(1),ie=Hd(Ce,Lr,{x:100,duration:300,delay:500}),ie.start())}),$c(()=>{jc&&(Re&&Re.end(1),ne=Hd(De,Lr,{x:-100,duration:300,delay:500}),ne.start())}),$c(()=>{jc&&(He&&He.end(1),Pe=Hd(ee,Lr,{x:-100,y:-100,duration:300,delay:500}),Pe.start())}),$c(()=>{jc&&(Qe&&Qe.end(1),et=Hd(Me,Lr,{y:-100,duration:300,delay:500}),et.start())}),$c(()=>{jc&&(z&&z.end(1),H=Hd(P,Lr,{x:-100,duration:300,delay:500}),H.start())}),$c(()=>{jc&&(ke&&ke.end(1),Ve=Hd(oe,Lr,{x:50,duration:300,delay:500}),Ve.start())}),$c(()=>{jc&&(te&&te.end(1),pe=Hd(be,Lr,{x:-70,duration:300,delay:500}),pe.start())}),$c(()=>{jc&&(Ye&&Ye.end(1),ye=Hd(Ge,Lr,{y:-100,duration:300,delay:500}),ye.start())}),jc=!0)},o(Ct){ie&&ie.invalidate(),Z=Ud(Ce,Lr,{x:-100,duration:300}),ne&&ne.invalidate(),Re=Ud(De,Lr,{x:100,duration:300}),Pe&&Pe.invalidate(),He=Ud(ee,Lr,{x:100,duration:300}),et&&et.invalidate(),Qe=Ud(Me,Lr,{x:100,duration:300}),H&&H.invalidate(),z=Ud(P,Lr,{x:100,duration:300}),Ve&&Ve.invalidate(),ke=Ud(oe,Lr,{x:-100,duration:300}),pe&&pe.invalidate(),te=Ud(be,Lr,{y:100,duration:300}),ye&&ye.invalidate(),Ye=Ud(Ge,Lr,{x:100,duration:300}),jc=!1},d(Ct){Ct&&a(l),Ct&&a(D),Ct&&a(E),Ct&&a(O),Ct&&a(k),Ct&&a(A),Ct&&a(M),Ct&&a(G),Ct&&a(b),Ct&&a(C),Ct&&a(_),Ct&&Z&&Z.end(),Ct&&Re&&Re.end(),Ct&&He&&He.end(),Ct&&Qe&&Qe.end(),Ct&&z&&z.end(),Ct&&ke&&ke.end(),Ct&&te&&te.end(),Ct&&Ye&&Ye.end()}}}function P6(d){return C_(()=>{ec(".map-gcv",{theme:"tomato",allowHTML:!0,content:"This is the amount of heat energy that could be released if a certain amount of waste is completely burnt. It's like a measure of the <i>energy potential</i> of waste. A higher GCV means the waste can produce more energy."}),ec(".map-biogas",{theme:"tomato",allowHTML:!0,content:"This is the volume of biogas produced per unit of organic material during anaerobic digestion."}),ec(".map-case-study",{theme:"tomato",content:"Project Reference Biogas Plant: Guichen, France | HoSt"}),ec(".calc-gcv",{theme:"tomato",allowHTML:!0,content:"Energy content is the total amount of energy stored in waste. But instead of just heat energy, it also includes the energy that can be converted into electricity or other forms. It's the total <i>energy resource</i> the waste could provide."}),ec(".calc-heat-produced",{theme:"tomato",content:"This is the actual amount of heat energy generated when the waste is processed, like when you burn wood in a fireplace. This heat can be used directly (like to warm buildings) or can be converted into other forms of energy, like electricity."}),ec(".calc-heat-savings",{theme:"tomato",content:"This indicates how much heat energy a company can save by using the heat produced from waste processing, instead of getting it from conventional sources. This is assuming you're currently paying 6p/kWh"}),ec(".calc-electricity-produced",{theme:"tomato",allowHTML:!0,content:"This is the amount of electrical energy generated from processing the waste. This could be through burning the waste to generate steam, which drives a turbine to produce electricity, or through other methods. It's like the <i>power output</i> from the waste."}),ec(".calc-electrical-savings",{theme:"tomato",content:"This shows how much a company can save on electricity costs by using the electricity produced from waste processing, instead of purchasing it from the grid. This is based off the assumption you are paying 27p/kWh"}),ec(".calc-char",{theme:"tomato",content:"Char is the solid material that's left over after some waste processing methods, like pyrolysis and gasification. It can sometimes be used as a fuel or soil conditioner. This value shows how much char would be produced from the waste."})}),[]}class V6 extends Vn{constructor(l){super(),kn(this,l,P6,D6,Wa,{})}}function k6(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,O,k,A,M,G,b,C,_,q,F,L,j,Y,R,$,ge,ue,K,U,re,Oe,he,ze,we,ae,fe,qe,Ee,de,$e,Le,N,Q,Ie,_e,Ce,me,ie,Z,tt,De,Se,ne,Re,Te,ee,Ne,Pe,He,Be,Me,xe,et,Qe,ot,P,B,H,z,X,oe,J,Ve,ke,le,be,Pt,pe,te,Ke,Ge,Ue,ye,Ye,vt,Ae,je,$t,Mt,Fe,_t,St,ce,ut,st,gt,mt,Gt;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("News"),x=o(),m=s("div"),h=s("div"),I=s("div"),w=s("div"),V=o(),y=s("div"),D=s("div"),E=s("div"),O=f("June 15, 2023"),k=o(),A=s("div"),M=f("Examining the global impact of food production and mitigation strategies"),G=o(),b=s("a"),C=s("div"),_=s("img"),F=o(),L=s("div"),j=f("Read more"),Y=o(),R=s("div"),$=s("div"),ge=o(),ue=s("div"),K=s("div"),U=s("div"),re=f("May 9, 2023"),Oe=o(),he=s("div"),ze=f("A war worth fighting"),we=o(),ae=s("a"),fe=s("div"),qe=s("img"),de=o(),$e=s("div"),Le=f("Read more"),N=o(),Q=s("div"),Ie=s("div"),_e=s("div"),Ce=o(),me=s("div"),ie=s("div"),Z=s("div"),tt=f("April 6, 2023"),De=o(),Se=s("div"),ne=f("One ecosystem, one overall solution"),Re=o(),Te=s("a"),ee=s("div"),Ne=s("img"),He=o(),Be=s("div"),Me=f("Read more"),xe=o(),et=s("div"),Qe=s("div"),ot=o(),P=s("div"),B=s("div"),H=s("div"),z=f("March 6, 2023"),X=o(),oe=s("div"),J=f("The “Great Greenwashing” of 2023"),Ve=o(),ke=s("a"),le=s("div"),be=s("img"),pe=o(),te=s("div"),Ke=f("Read more"),Ge=o(),Ue=s("div"),ye=s("div"),Ye=f("Copyright © 2023 Power for Planet"),vt=o(),Ae=s("div"),je=s("div"),$t=f("Privacy Policy"),Mt=o(),Fe=s("div"),_t=s("img"),ce=o(),ut=s("img"),gt=o(),mt=s("img"),this.h()},l(ft){l=r(ft,"DIV",{class:!0});var Ht=n(l);i=r(Ht,"DIV",{class:!0});var Vt=n(i);u=r(Vt,"DIV",{class:!0});var se=n(u);v=r(se,"DIV",{});var ht=n(v);g=p(ht,"News"),ht.forEach(a),se.forEach(a),x=c(Vt),m=r(Vt,"DIV",{class:!0});var Tt=n(m);h=r(Tt,"DIV",{class:!0});var jt=n(h);I=r(jt,"DIV",{class:!0});var pt=n(I);w=r(pt,"DIV",{class:!0}),n(w).forEach(a),V=c(pt),y=r(pt,"DIV",{class:!0});var xt=n(y);D=r(xt,"DIV",{class:!0});var Nt=n(D);E=r(Nt,"DIV",{class:!0});var At=n(E);O=p(At,"June 15, 2023"),At.forEach(a),Nt.forEach(a),k=c(xt),A=r(xt,"DIV",{class:!0});var Je=n(A);M=p(Je,"Examining the global impact of food production and mitigation strategies"),Je.forEach(a),G=c(xt),b=r(xt,"A",{href:!0});var Ft=n(b);C=r(Ft,"DIV",{class:!0});var Xe=n(C);_=r(Xe,"IMG",{src:!0,alt:!0,class:!0}),F=c(Xe),L=r(Xe,"DIV",{});var Et=n(L);j=p(Et,"Read more"),Et.forEach(a),Xe.forEach(a),Ft.forEach(a),xt.forEach(a),pt.forEach(a),Y=c(jt),R=r(jt,"DIV",{class:!0});var rt=n(R);$=r(rt,"DIV",{class:!0}),n($).forEach(a),ge=c(rt),ue=r(rt,"DIV",{class:!0});var Bt=n(ue);K=r(Bt,"DIV",{class:!0});var es=n(K);U=r(es,"DIV",{class:!0});var bt=n(U);re=p(bt,"May 9, 2023"),bt.forEach(a),es.forEach(a),Oe=c(Bt),he=r(Bt,"DIV",{class:!0});var ve=n(he);ze=p(ve,"A war worth fighting"),ve.forEach(a),we=c(Bt),ae=r(Bt,"A",{href:!0});var at=n(ae);fe=r(at,"DIV",{class:!0});var qt=n(fe);qe=r(qt,"IMG",{src:!0,alt:!0,class:!0}),de=c(qt),$e=r(qt,"DIV",{});var It=n($e);Le=p(It,"Read more"),It.forEach(a),qt.forEach(a),at.forEach(a),Bt.forEach(a),rt.forEach(a),jt.forEach(a),N=c(Tt),Q=r(Tt,"DIV",{class:!0});var nt=n(Q);Ie=r(nt,"DIV",{class:!0});var ct=n(Ie);_e=r(ct,"DIV",{class:!0}),n(_e).forEach(a),Ce=c(ct),me=r(ct,"DIV",{class:!0});var Yt=n(me);ie=r(Yt,"DIV",{class:!0});var yt=n(ie);Z=r(yt,"DIV",{class:!0});var Dt=n(Z);tt=p(Dt,"April 6, 2023"),Dt.forEach(a),yt.forEach(a),De=c(Yt),Se=r(Yt,"DIV",{class:!0});var Qt=n(Se);ne=p(Qt,"One ecosystem, one overall solution"),Qt.forEach(a),Re=c(Yt),Te=r(Yt,"A",{href:!0});var Ut=n(Te);ee=r(Ut,"DIV",{class:!0});var Ot=n(ee);Ne=r(Ot,"IMG",{src:!0,alt:!0,class:!0}),He=c(Ot),Be=r(Ot,"DIV",{});var Jt=n(Be);Me=p(Jt,"Read more"),Jt.forEach(a),Ot.forEach(a),Ut.forEach(a),Yt.forEach(a),ct.forEach(a),xe=c(nt),et=r(nt,"DIV",{class:!0});var Lt=n(et);Qe=r(Lt,"DIV",{class:!0}),n(Qe).forEach(a),ot=c(Lt),P=r(Lt,"DIV",{class:!0});var Rt=n(P);B=r(Rt,"DIV",{class:!0});var wt=n(B);H=r(wt,"DIV",{class:!0});var Ns=n(H);z=p(Ns,"March 6, 2023"),Ns.forEach(a),wt.forEach(a),X=c(Rt),oe=r(Rt,"DIV",{class:!0});var ls=n(oe);J=p(ls,"The “Great Greenwashing” of 2023"),ls.forEach(a),Ve=c(Rt),ke=r(Rt,"A",{href:!0});var Kt=n(ke);le=r(Kt,"DIV",{class:!0});var it=n(le);be=r(it,"IMG",{src:!0,alt:!0,class:!0}),pe=c(it),te=r(it,"DIV",{});var Zt=n(te);Ke=p(Zt,"Read more"),Zt.forEach(a),it.forEach(a),Kt.forEach(a),Rt.forEach(a),Lt.forEach(a),nt.forEach(a),Tt.forEach(a),Ge=c(Vt),Ue=r(Vt,"DIV",{class:!0});var is=n(Ue);ye=r(is,"DIV",{class:!0});var hs=n(ye);Ye=p(hs,"Copyright © 2023 Power for Planet"),hs.forEach(a),vt=c(is),Ae=r(is,"DIV",{class:!0});var W=n(Ae);je=r(W,"DIV",{class:!0});var ms=n(je);$t=p(ms,"Privacy Policy"),ms.forEach(a),Mt=c(W),Fe=r(W,"DIV",{class:!0});var kt=n(Fe);_t=r(kt,"IMG",{src:!0,alt:!0,class:!0}),ce=c(kt),ut=r(kt,"IMG",{src:!0,alt:!0,class:!0}),gt=c(kt),mt=r(kt,"IMG",{src:!0,alt:!0,class:!0}),kt.forEach(a),W.forEach(a),is.forEach(a),Vt.forEach(a),Ht.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),t(w,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/1.jpg')] w-full flex-col h-[220px] flex items-start p-5"),t(E,"class","uppercase"),t(D,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(A,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[462px]"),S(_.src,q="/assets/new/arrow-right-circle.svg")||t(_,"src",q),t(_,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(_,"class","h-5 w-5"),t(C,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(b,"href","/news-item"),t(y,"class","rounded-b-[20px] bg-white w-full flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(I,"class","flex-1 flex-col flex items-start rounded-[20px]"),t($,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/3.jpg')] w-full flex-col h-[220px] flex items-start p-5"),t(U,"class","uppercase"),t(K,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(he,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins h-[68px] w-[462px]"),S(qe.src,Ee="/assets/new/arrow-right-circle.svg")||t(qe,"src",Ee),t(qe,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(qe,"class","h-5 w-5"),t(fe,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(ae,"href","/news-item2"),t(ue,"class","rounded-b-[20px] bg-white w-full flex-1 flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(R,"class","h-full flex-1 flex-col flex items-start rounded-[20px]"),t(h,"class","w-full flex items-start gap-10"),t(_e,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/2.jpg')] w-full flex-col h-[220px] flex items-start p-5"),t(Z,"class","uppercase"),t(ie,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(Se,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[462px]"),S(Ne.src,Pe="/assets/new/arrow-right-circle.svg")||t(Ne,"src",Pe),t(Ne,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(Ne,"class","h-5 w-5"),t(ee,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(Te,"href","/news-item3"),t(me,"class","rounded-b-[20px] bg-white w-full flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(Ie,"class","flex-1 flex-col flex items-start rounded-[20px]"),t(Qe,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/4.png')] w-full flex-col h-[220px] flex items-start p-5"),t(H,"class","uppercase"),t(B,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(oe,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[462px]"),S(be.src,Pt="/assets/new/arrow-right-circle.svg")||t(be,"src",Pt),t(be,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(be,"class","h-5 w-5"),t(le,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(ke,"href","/news-item4"),t(P,"class","rounded-b-[20px] bg-white w-full flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(et,"class","flex-1 flex-col flex items-start rounded-[20px]"),t(Q,"class","w-full flex items-start gap-10"),t(m,"class","w-full flex-col flex items-start gap-10"),t(ye,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(je,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(_t.src,St="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(_t,"src",St),t(_t,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(_t,"class","h-6 w-6"),S(ut.src,st="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ut,"src",st),t(ut,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(ut,"class","h-6 w-6"),S(mt.src,Gt="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(mt,"src",Gt),t(mt,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(mt,"class","h-6 w-6"),t(Fe,"class","flex items-center gap-5"),t(Ae,"class","flex-1 flex justify-end items-center gap-10"),t(Ue,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col max-w-[1060px] flex items-start gap-[60px]"),t(l,"class","flex-col flex items-center gap-[50px] h-fit mt-20")},m(ft,Ht){lt(ft,l,Ht),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,I),e(I,w),e(I,V),e(I,y),e(y,D),e(D,E),e(E,O),e(y,k),e(y,A),e(A,M),e(y,G),e(y,b),e(b,C),e(C,_),e(C,F),e(C,L),e(L,j),e(h,Y),e(h,R),e(R,$),e(R,ge),e(R,ue),e(ue,K),e(K,U),e(U,re),e(ue,Oe),e(ue,he),e(he,ze),e(ue,we),e(ue,ae),e(ae,fe),e(fe,qe),e(fe,de),e(fe,$e),e($e,Le),e(m,N),e(m,Q),e(Q,Ie),e(Ie,_e),e(Ie,Ce),e(Ie,me),e(me,ie),e(ie,Z),e(Z,tt),e(me,De),e(me,Se),e(Se,ne),e(me,Re),e(me,Te),e(Te,ee),e(ee,Ne),e(ee,He),e(ee,Be),e(Be,Me),e(Q,xe),e(Q,et),e(et,Qe),e(et,ot),e(et,P),e(P,B),e(B,H),e(H,z),e(P,X),e(P,oe),e(oe,J),e(P,Ve),e(P,ke),e(ke,le),e(le,be),e(le,pe),e(le,te),e(te,Ke),e(i,Ge),e(i,Ue),e(Ue,ye),e(ye,Ye),e(Ue,vt),e(Ue,Ae),e(Ae,je),e(je,$t),e(Ae,Mt),e(Ae,Fe),e(Fe,_t),e(Fe,ce),e(Fe,ut),e(Fe,gt),e(Fe,mt)},p:We,i:We,o:We,d(ft){ft&&a(l)}}}class S6 extends Vn{constructor(l){super(),kn(this,l,null,k6,Wa,{})}}function T6(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,O,k,A,M,G,b,C,_,q,F,L,j,Y,R,$,ge,ue,K,U,re,Oe,he,ze,we,ae,fe,qe,Ee,de,$e,Le,N,Q,Ie,_e,Ce,me,ie,Z,tt,De,Se,ne,Re,Te,ee,Ne,Pe,He,Be,Me,xe,et,Qe,ot,P,B,H,z,X,oe,J,Ve,ke,le,be,Pt,pe,te,Ke,Ge,Ue,ye,Ye,vt,Ae;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),I=o(),w=s("div"),V=f("Examining the global impact of food production and mitigation strategies"),y=o(),D=s("div"),E=s("div"),O=o(),k=s("div"),A=s("div"),M=s("div"),G=s("div"),b=f("June 15, 2023"),C=o(),_=s("div"),q=f("Examining the global impact of food production and mitigation strategies"),F=o(),L=s("div"),j=s("div"),Y=f(`Food consumption accounts for 28% of the world's ecological footprint according to the US Environmental
              Protection Agency (EPA). As a consequence, our feeding habits yield profound and sometimes irreversible
              environmental impact. Alarmingly, we squander approximately 25% of global calorie production amidst a staggering
              822 million people suffering from undernourishment worldwide. The required actions for mitigating these impacts
              include lifestyle and dietary changes, particularly in the Global North; transformative global farming practices;
              and the utilisation of innovative technologies within existing supply chains. Success lies in implementing these
              actions harmoniously.`),R=o(),$=s("div"),ge=s("div"),ue=f("Food production's environmental impacts are wide-ranging:"),K=o(),U=s("div"),re=s("span"),Oe=f("Water usage"),he=f(`
                : Food production consumes 70% of global water usage. Water scarcity currently plagues 1.1 billion people lacking
                sufficient clean water.
                `),ze=s("span"),we=f("Soil degradation"),ae=f(`
                : Intensive agriculture and monoculture farming practices contribute to the annual loss of 24 billion tonnes of fertile
                soil, as per a recent UN study.
                `),fe=s("span"),qe=f("Use of chemical fertilisers and agrochemicals"),Ee=f(`
                : Increased land yield efforts have led to escalated chemical usage and consequential environmental impacts.`),de=o(),$e=s("div"),Le=s("img"),Q=o(),Ie=s("div"),_e=f(`Monoculture farming: a short-term yield with long-term environmental implications (photo by Tim Hüfner on
                Unsplash)`),Ce=o(),me=s("div"),ie=s("div"),Z=f("Quote example"),tt=o(),De=s("div"),Se=f("Someone explains:"),ne=o(),Re=s("div"),Te=s("div"),ee=f(`“To address these challenges, the industry needs to invest in research and development to develop new and more
                  effective technologies. Additionally, there needs to be more collaboration between industry stakeholders,
                  technology developers, and regulatory bodies.”`),Ne=o(),Pe=s("div"),He=s("div"),Be=f("Technology Challenge"),Me=o(),xe=s("div"),et=f(`Another challenge facing the power from waste industry is technology. While there have been significant
                `),Qe=s("span"),ot=o(),P=s("span"),B=f("link example"),H=f(`
                in waste-to-energy technology, there is still room for improvement. Some of the key areas where technology needs
                to evolve include waste sorting, emissions control, and energy efficiency. To address these challenges, the industry
                needs to invest in research and development to develop new and more effective technologies. Additionally, there needs
                to be more collaboration between industry stakeholders, technology developers, and regulatory bodies.`),z=o(),X=s("div"),oe=s("div"),J=f("Copyright © 2023 Power for Planet"),Ve=o(),ke=s("div"),le=s("div"),be=f("Privacy Policy"),Pt=o(),pe=s("div"),te=s("img"),Ge=o(),Ue=s("img"),Ye=o(),vt=s("img"),this.h()},l(je){l=r(je,"DIV",{class:!0});var $t=n(l);i=r($t,"DIV",{class:!0});var Mt=n(i);u=r(Mt,"DIV",{class:!0});var Fe=n(u);v=r(Fe,"DIV",{class:!0});var _t=n(v);g=r(_t,"DIV",{class:!0});var St=n(g);x=r(St,"A",{href:!0});var ce=n(x);m=r(ce,"DIV",{class:!0});var ut=n(m);h=p(ut,"News"),ut.forEach(a),ce.forEach(a),I=c(St),w=r(St,"DIV",{class:!0});var st=n(w);V=p(st,"Examining the global impact of food production and mitigation strategies"),st.forEach(a),St.forEach(a),_t.forEach(a),y=c(Fe),D=r(Fe,"DIV",{class:!0});var gt=n(D);E=r(gt,"DIV",{class:!0}),n(E).forEach(a),O=c(gt),k=r(gt,"DIV",{class:!0});var mt=n(k);A=r(mt,"DIV",{class:!0});var Gt=n(A);M=r(Gt,"DIV",{class:!0});var ft=n(M);G=r(ft,"DIV",{class:!0});var Ht=n(G);b=p(Ht,"June 15, 2023"),Ht.forEach(a),ft.forEach(a),C=c(Gt),_=r(Gt,"DIV",{class:!0});var Vt=n(_);q=p(Vt,"Examining the global impact of food production and mitigation strategies"),Vt.forEach(a),Gt.forEach(a),F=c(mt),L=r(mt,"DIV",{class:!0});var se=n(L);j=r(se,"DIV",{class:!0});var ht=n(j);Y=p(ht,`Food consumption accounts for 28% of the world's ecological footprint according to the US Environmental
              Protection Agency (EPA). As a consequence, our feeding habits yield profound and sometimes irreversible
              environmental impact. Alarmingly, we squander approximately 25% of global calorie production amidst a staggering
              822 million people suffering from undernourishment worldwide. The required actions for mitigating these impacts
              include lifestyle and dietary changes, particularly in the Global North; transformative global farming practices;
              and the utilisation of innovative technologies within existing supply chains. Success lies in implementing these
              actions harmoniously.`),ht.forEach(a),R=c(se),$=r(se,"DIV",{class:!0});var Tt=n($);ge=r(Tt,"DIV",{class:!0});var jt=n(ge);ue=p(jt,"Food production's environmental impacts are wide-ranging:"),jt.forEach(a),K=c(Tt),U=r(Tt,"DIV",{class:!0});var pt=n(U);re=r(pt,"SPAN",{class:!0});var xt=n(re);Oe=p(xt,"Water usage"),xt.forEach(a),he=p(pt,`
                : Food production consumes 70% of global water usage. Water scarcity currently plagues 1.1 billion people lacking
                sufficient clean water.
                `),ze=r(pt,"SPAN",{class:!0});var Nt=n(ze);we=p(Nt,"Soil degradation"),Nt.forEach(a),ae=p(pt,`
                : Intensive agriculture and monoculture farming practices contribute to the annual loss of 24 billion tonnes of fertile
                soil, as per a recent UN study.
                `),fe=r(pt,"SPAN",{class:!0});var At=n(fe);qe=p(At,"Use of chemical fertilisers and agrochemicals"),At.forEach(a),Ee=p(pt,`
                : Increased land yield efforts have led to escalated chemical usage and consequential environmental impacts.`),pt.forEach(a),Tt.forEach(a),de=c(se),$e=r(se,"DIV",{class:!0});var Je=n($e);Le=r(Je,"IMG",{class:!0,alt:!0,src:!0}),Q=c(Je),Ie=r(Je,"DIV",{class:!0});var Ft=n(Ie);_e=p(Ft,`Monoculture farming: a short-term yield with long-term environmental implications (photo by Tim Hüfner on
                Unsplash)`),Ft.forEach(a),Je.forEach(a),Ce=c(se),me=r(se,"DIV",{class:!0});var Xe=n(me);ie=r(Xe,"DIV",{class:!0});var Et=n(ie);Z=p(Et,"Quote example"),Et.forEach(a),tt=c(Xe),De=r(Xe,"DIV",{class:!0});var rt=n(De);Se=p(rt,"Someone explains:"),rt.forEach(a),ne=c(Xe),Re=r(Xe,"DIV",{class:!0});var Bt=n(Re);Te=r(Bt,"DIV",{class:!0});var es=n(Te);ee=p(es,`“To address these challenges, the industry needs to invest in research and development to develop new and more
                  effective technologies. Additionally, there needs to be more collaboration between industry stakeholders,
                  technology developers, and regulatory bodies.”`),es.forEach(a),Bt.forEach(a),Xe.forEach(a),Ne=c(se),Pe=r(se,"DIV",{class:!0});var bt=n(Pe);He=r(bt,"DIV",{class:!0});var ve=n(He);Be=p(ve,"Technology Challenge"),ve.forEach(a),Me=c(bt),xe=r(bt,"DIV",{class:!0});var at=n(xe);et=p(at,`Another challenge facing the power from waste industry is technology. While there have been significant
                `),Qe=r(at,"SPAN",{class:!0}),n(Qe).forEach(a),ot=c(at),P=r(at,"SPAN",{class:!0});var qt=n(P);B=p(qt,"link example"),qt.forEach(a),H=p(at,`
                in waste-to-energy technology, there is still room for improvement. Some of the key areas where technology needs
                to evolve include waste sorting, emissions control, and energy efficiency. To address these challenges, the industry
                needs to invest in research and development to develop new and more effective technologies. Additionally, there needs
                to be more collaboration between industry stakeholders, technology developers, and regulatory bodies.`),at.forEach(a),bt.forEach(a),se.forEach(a),mt.forEach(a),gt.forEach(a),Fe.forEach(a),z=c(Mt),X=r(Mt,"DIV",{class:!0});var It=n(X);oe=r(It,"DIV",{class:!0});var nt=n(oe);J=p(nt,"Copyright © 2023 Power for Planet"),nt.forEach(a),Ve=c(It),ke=r(It,"DIV",{class:!0});var ct=n(ke);le=r(ct,"DIV",{class:!0});var Yt=n(le);be=p(Yt,"Privacy Policy"),Yt.forEach(a),Pt=c(ct),pe=r(ct,"DIV",{class:!0});var yt=n(pe);te=r(yt,"IMG",{src:!0,alt:!0,class:!0}),Ge=c(yt),Ue=r(yt,"IMG",{src:!0,alt:!0,class:!0}),Ye=c(yt),vt=r(yt,"IMG",{src:!0,alt:!0,class:!0}),yt.forEach(a),ct.forEach(a),It.forEach(a),Mt.forEach(a),$t.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(w,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(E,"class","bg-cover bg-center bg-[url('/assets/new/XN2.jpg')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(G,"class","uppercase"),t(M,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(_,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(j,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ge,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(re,"class","font-bold text-sm leading-[25px] font-PublicSans"),t(ze,"class","font-bold text-sm leading-[25px] font-PublicSans"),t(fe,"class","font-bold text-sm leading-[25px] font-PublicSans"),t(U,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t($,"class","w-full flex-col flex items-start gap-3"),t(Le,"class","object-cover w-full h-[350px] rounded-2xl"),t(Le,"alt","1686828442283 1"),S(Le.src,N="/assets/new/XN3.png")||t(Le,"src",N),t(Ie,"class","italic w-[680px]"),t($e,"class","w-full flex-col flex items-start gap-4 text-sm leading-[25px] font-light font-PublicSans"),t(ie,"class","text-xl leading-[34px] font-bold font-Poppins"),t(De,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Te,"class","w-[656px]"),t(Re,"class","w-full flex items-start gap-2.5 pl-6 border-l-[3px] border-[#3f9378] text-sm leading-[25px] font-semibold font-PublicSans"),t(me,"class","w-full flex-col flex items-start gap-3"),t(He,"class","text-xl leading-[34px] font-bold font-Poppins"),t(Qe,"class","font-light text-sm leading-[25px] font-PublicSans"),t(P,"class","font-bold text-sm leading-[25px] text-[#3f9378] font-PublicSans"),t(xe,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Pe,"class","w-full flex-col flex items-start gap-3"),t(L,"class","w-full flex-col flex items-start gap-6"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(D,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(oe,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(le,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(te.src,Ke="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(te,"src",Ke),t(te,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(te,"class","h-6 w-6"),S(Ue.src,ye="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ue,"src",ye),t(Ue,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Ue,"class","h-6 w-6"),S(vt.src,Ae="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(vt,"src",Ae),t(vt,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(vt,"class","h-6 w-6"),t(pe,"class","flex items-center gap-5"),t(ke,"class","flex-1 flex justify-end items-center gap-10"),t(X,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(je,$t){lt(je,l,$t),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,I),e(g,w),e(w,V),e(u,y),e(u,D),e(D,E),e(D,O),e(D,k),e(k,A),e(A,M),e(M,G),e(G,b),e(A,C),e(A,_),e(_,q),e(k,F),e(k,L),e(L,j),e(j,Y),e(L,R),e(L,$),e($,ge),e(ge,ue),e($,K),e($,U),e(U,re),e(re,Oe),e(U,he),e(U,ze),e(ze,we),e(U,ae),e(U,fe),e(fe,qe),e(U,Ee),e(L,de),e(L,$e),e($e,Le),e($e,Q),e($e,Ie),e(Ie,_e),e(L,Ce),e(L,me),e(me,ie),e(ie,Z),e(me,tt),e(me,De),e(De,Se),e(me,ne),e(me,Re),e(Re,Te),e(Te,ee),e(L,Ne),e(L,Pe),e(Pe,He),e(He,Be),e(Pe,Me),e(Pe,xe),e(xe,et),e(xe,Qe),e(xe,ot),e(xe,P),e(P,B),e(xe,H),e(i,z),e(i,X),e(X,oe),e(oe,J),e(X,Ve),e(X,ke),e(ke,le),e(le,be),e(ke,Pt),e(ke,pe),e(pe,te),e(pe,Ge),e(pe,Ue),e(pe,Ye),e(pe,vt)},p:We,i:We,o:We,d(je){je&&a(l)}}}class A6 extends Vn{constructor(l){super(),kn(this,l,null,T6,Wa,{})}}function F6(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,O,k,A,M,G,b,C,_,q,F,L,j,Y,R,$,ge,ue,K,U,re,Oe,he,ze,we,ae,fe,qe,Ee,de,$e,Le,N,Q,Ie,_e,Ce,me,ie,Z,tt,De,Se,ne,Re,Te,ee,Ne,Pe,He,Be,Me,xe,et,Qe,ot,P,B,H,z,X,oe,J,Ve,ke,le,be,Pt,pe,te,Ke,Ge,Ue,ye,Ye,vt,Ae,je,$t,Mt,Fe,_t;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),I=o(),w=s("div"),V=f("A war worth fighting"),y=o(),D=s("div"),E=s("div"),O=o(),k=s("div"),A=s("div"),M=s("div"),G=s("div"),b=f("May 9, 2023"),C=o(),_=s("div"),q=f("A war worth fighting"),F=o(),L=s("div"),j=s("div"),Y=f("Uniting as individuals to make a change for a greener future"),R=o(),$=s("div"),ge=f(`In today's world, it seems we're stuck in a battle between the natural ecosystem and our current financial models.
              Case in point: BP's recent financial report, declared a record profit of $28 billion for 2022 without accounting
              for environmental damage caused. This infuriated climate activists as the company scaled back on plans to cut oil
              and gas output and reduce carbon emissions by 2030. While companies continue to report high profits, the
              environmental impact of their activities is often left out of the equation. Why is this the case? And what can we,
              as individuals, do to make a difference?`),ue=o(),K=s("div"),U=s("div"),re=f("The war at hand"),Oe=o(),he=s("div"),ze=f(`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),we=o(),ae=s("div"),fe=s("div"),qe=f("The role of companies"),Ee=o(),de=s("div"),$e=f(`Companies have started integrating sustainable development goals (SDGs) and environmental, social, and corporate
              governance (ESG) models into their operations. However, a disconnect still exists between profit and
              sustainability. Only when businesses prioritise the environment in their decision-making will we see true change.`),Le=o(),N=s("div"),Q=s("div"),Ie=f("Individuals hold the power"),_e=o(),Ce=s("div"),me=f(`PFP believes that individuals have the power to make a difference. By engaging with brands, politicians,
              employers, and other stakeholders, we can demand change and make a positive impact on our planet.`),ie=o(),Z=s("div"),tt=s("div"),De=f("Action steps for individuals:"),Se=o(),ne=s("ul"),Re=s("li"),Te=f("As a consumer, demand brands prioritise nature in their operations"),ee=o(),Ne=s("li"),Pe=f("As a voter, support candidates who advocate for renewable energy and reject fossil fuels"),He=o(),Be=s("li"),Me=f("As an employee, encourage business leaders to take immediate action to protect the planet"),xe=o(),et=s("li"),Qe=f("As a business owner, require suppliers to demonstrate their green credentials"),ot=o(),P=s("li"),B=f("As a shareholder, hold executives accountable for meeting ESG goals"),H=o(),z=s("li"),X=f("As a politician, listen to the people and take action to address their concerns"),oe=o(),J=s("div"),Ve=f(`The battle for a greener future is ongoing, but the power to make a change lies within us. By taking action as
              individuals, we can contribute to a more sustainable world and support our planet's natural ecosystem. It's time
              to unite and fight for a cause that truly matters.`),ke=o(),le=s("div"),be=s("div"),Pt=f("Copyright © 2023 Power for Planet"),pe=o(),te=s("div"),Ke=s("div"),Ge=f("Privacy Policy"),Ue=o(),ye=s("div"),Ye=s("img"),Ae=o(),je=s("img"),Mt=o(),Fe=s("img"),this.h()},l(St){l=r(St,"DIV",{class:!0});var ce=n(l);i=r(ce,"DIV",{class:!0});var ut=n(i);u=r(ut,"DIV",{class:!0});var st=n(u);v=r(st,"DIV",{class:!0});var gt=n(v);g=r(gt,"DIV",{class:!0});var mt=n(g);x=r(mt,"A",{href:!0});var Gt=n(x);m=r(Gt,"DIV",{class:!0});var ft=n(m);h=p(ft,"News"),ft.forEach(a),Gt.forEach(a),I=c(mt),w=r(mt,"DIV",{class:!0});var Ht=n(w);V=p(Ht,"A war worth fighting"),Ht.forEach(a),mt.forEach(a),gt.forEach(a),y=c(st),D=r(st,"DIV",{class:!0});var Vt=n(D);E=r(Vt,"DIV",{class:!0}),n(E).forEach(a),O=c(Vt),k=r(Vt,"DIV",{class:!0});var se=n(k);A=r(se,"DIV",{class:!0});var ht=n(A);M=r(ht,"DIV",{class:!0});var Tt=n(M);G=r(Tt,"DIV",{class:!0});var jt=n(G);b=p(jt,"May 9, 2023"),jt.forEach(a),Tt.forEach(a),C=c(ht),_=r(ht,"DIV",{class:!0});var pt=n(_);q=p(pt,"A war worth fighting"),pt.forEach(a),ht.forEach(a),F=c(se),L=r(se,"DIV",{class:!0});var xt=n(L);j=r(xt,"DIV",{class:!0});var Nt=n(j);Y=p(Nt,"Uniting as individuals to make a change for a greener future"),Nt.forEach(a),R=c(xt),$=r(xt,"DIV",{class:!0});var At=n($);ge=p(At,`In today's world, it seems we're stuck in a battle between the natural ecosystem and our current financial models.
              Case in point: BP's recent financial report, declared a record profit of $28 billion for 2022 without accounting
              for environmental damage caused. This infuriated climate activists as the company scaled back on plans to cut oil
              and gas output and reduce carbon emissions by 2030. While companies continue to report high profits, the
              environmental impact of their activities is often left out of the equation. Why is this the case? And what can we,
              as individuals, do to make a difference?`),At.forEach(a),ue=c(xt),K=r(xt,"DIV",{class:!0});var Je=n(K);U=r(Je,"DIV",{class:!0});var Ft=n(U);re=p(Ft,"The war at hand"),Ft.forEach(a),Oe=c(Je),he=r(Je,"DIV",{class:!0});var Xe=n(he);ze=p(Xe,`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),Xe.forEach(a),Je.forEach(a),xt.forEach(a),we=c(se),ae=r(se,"DIV",{class:!0});var Et=n(ae);fe=r(Et,"DIV",{class:!0});var rt=n(fe);qe=p(rt,"The role of companies"),rt.forEach(a),Ee=c(Et),de=r(Et,"DIV",{class:!0});var Bt=n(de);$e=p(Bt,`Companies have started integrating sustainable development goals (SDGs) and environmental, social, and corporate
              governance (ESG) models into their operations. However, a disconnect still exists between profit and
              sustainability. Only when businesses prioritise the environment in their decision-making will we see true change.`),Bt.forEach(a),Et.forEach(a),Le=c(se),N=r(se,"DIV",{class:!0});var es=n(N);Q=r(es,"DIV",{class:!0});var bt=n(Q);Ie=p(bt,"Individuals hold the power"),bt.forEach(a),_e=c(es),Ce=r(es,"DIV",{class:!0});var ve=n(Ce);me=p(ve,`PFP believes that individuals have the power to make a difference. By engaging with brands, politicians,
              employers, and other stakeholders, we can demand change and make a positive impact on our planet.`),ve.forEach(a),es.forEach(a),ie=c(se),Z=r(se,"DIV",{class:!0});var at=n(Z);tt=r(at,"DIV",{class:!0});var qt=n(tt);De=p(qt,"Action steps for individuals:"),qt.forEach(a),Se=c(at),ne=r(at,"UL",{class:!0});var It=n(ne);Re=r(It,"LI",{});var nt=n(Re);Te=p(nt,"As a consumer, demand brands prioritise nature in their operations"),nt.forEach(a),ee=c(It),Ne=r(It,"LI",{});var ct=n(Ne);Pe=p(ct,"As a voter, support candidates who advocate for renewable energy and reject fossil fuels"),ct.forEach(a),He=c(It),Be=r(It,"LI",{});var Yt=n(Be);Me=p(Yt,"As an employee, encourage business leaders to take immediate action to protect the planet"),Yt.forEach(a),xe=c(It),et=r(It,"LI",{});var yt=n(et);Qe=p(yt,"As a business owner, require suppliers to demonstrate their green credentials"),yt.forEach(a),ot=c(It),P=r(It,"LI",{});var Dt=n(P);B=p(Dt,"As a shareholder, hold executives accountable for meeting ESG goals"),Dt.forEach(a),H=c(It),z=r(It,"LI",{});var Qt=n(z);X=p(Qt,"As a politician, listen to the people and take action to address their concerns"),Qt.forEach(a),It.forEach(a),oe=c(at),J=r(at,"DIV",{class:!0});var Ut=n(J);Ve=p(Ut,`The battle for a greener future is ongoing, but the power to make a change lies within us. By taking action as
              individuals, we can contribute to a more sustainable world and support our planet's natural ecosystem. It's time
              to unite and fight for a cause that truly matters.`),Ut.forEach(a),at.forEach(a),se.forEach(a),Vt.forEach(a),st.forEach(a),ut.forEach(a),ke=c(ce),le=r(ce,"DIV",{class:!0});var Ot=n(le);be=r(Ot,"DIV",{class:!0});var Jt=n(be);Pt=p(Jt,"Copyright © 2023 Power for Planet"),Jt.forEach(a),pe=c(Ot),te=r(Ot,"DIV",{class:!0});var Lt=n(te);Ke=r(Lt,"DIV",{class:!0});var Rt=n(Ke);Ge=p(Rt,"Privacy Policy"),Rt.forEach(a),Ue=c(Lt),ye=r(Lt,"DIV",{class:!0});var wt=n(ye);Ye=r(wt,"IMG",{src:!0,alt:!0,class:!0}),Ae=c(wt),je=r(wt,"IMG",{src:!0,alt:!0,class:!0}),Mt=c(wt),Fe=r(wt,"IMG",{src:!0,alt:!0,class:!0}),wt.forEach(a),Lt.forEach(a),Ot.forEach(a),ce.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(w,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(E,"class","bg-cover bg-center bg-[url('/assets/new/3.jpg')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(G,"class","uppercase"),t(M,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(_,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(j,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t($,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(U,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(he,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(K,"class","w-full flex-col flex items-start gap-3"),t(L,"class","w-full flex-col flex items-start gap-6"),t(fe,"class","text-xl leading-[34px] font-bold font-Poppins"),t(de,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ae,"class","w-full flex-col flex items-start gap-3"),t(Q,"class","text-xl leading-[34px] font-bold font-Poppins"),t(Ce,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(N,"class","w-full flex-col flex items-start gap-3"),t(tt,"class","text-xl leading-[34px] font-bold font-Poppins"),t(ne,"class","list-disc pl-4"),t(J,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Z,"class","w-full flex-col flex items-start gap-3"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(D,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(be,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ke,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Ye.src,vt="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ye,"src",vt),t(Ye,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Ye,"class","h-6 w-6"),S(je.src,$t="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(je,"src",$t),t(je,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(je,"class","h-6 w-6"),S(Fe.src,_t="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Fe,"src",_t),t(Fe,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Fe,"class","h-6 w-6"),t(ye,"class","flex items-center gap-5"),t(te,"class","flex-1 flex justify-end items-center gap-10"),t(le,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(St,ce){lt(St,l,ce),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,I),e(g,w),e(w,V),e(u,y),e(u,D),e(D,E),e(D,O),e(D,k),e(k,A),e(A,M),e(M,G),e(G,b),e(A,C),e(A,_),e(_,q),e(k,F),e(k,L),e(L,j),e(j,Y),e(L,R),e(L,$),e($,ge),e(L,ue),e(L,K),e(K,U),e(U,re),e(K,Oe),e(K,he),e(he,ze),e(k,we),e(k,ae),e(ae,fe),e(fe,qe),e(ae,Ee),e(ae,de),e(de,$e),e(k,Le),e(k,N),e(N,Q),e(Q,Ie),e(N,_e),e(N,Ce),e(Ce,me),e(k,ie),e(k,Z),e(Z,tt),e(tt,De),e(Z,Se),e(Z,ne),e(ne,Re),e(Re,Te),e(ne,ee),e(ne,Ne),e(Ne,Pe),e(ne,He),e(ne,Be),e(Be,Me),e(ne,xe),e(ne,et),e(et,Qe),e(ne,ot),e(ne,P),e(P,B),e(ne,H),e(ne,z),e(z,X),e(Z,oe),e(Z,J),e(J,Ve),e(l,ke),e(l,le),e(le,be),e(be,Pt),e(le,pe),e(le,te),e(te,Ke),e(Ke,Ge),e(te,Ue),e(te,ye),e(ye,Ye),e(ye,Ae),e(ye,je),e(ye,Mt),e(ye,Fe)},p:We,i:We,o:We,d(St){St&&a(l)}}}class O6 extends Vn{constructor(l){super(),kn(this,l,null,F6,Wa,{})}}function L6(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,O,k,A,M,G,b,C,_,q,F,L,j,Y,R,$,ge,ue,K,U,re,Oe,he,ze,we,ae,fe,qe,Ee,de,$e,Le,N,Q,Ie,_e,Ce,me,ie,Z,tt,De,Se,ne,Re,Te,ee,Ne,Pe,He,Be,Me,xe,et,Qe,ot,P,B,H,z,X,oe,J,Ve,ke,le,be,Pt,pe,te,Ke,Ge,Ue,ye,Ye,vt,Ae,je,$t,Mt,Fe,_t,St,ce,ut,st,gt,mt,Gt,ft,Ht,Vt,se,ht,Tt,jt,pt,xt;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),I=o(),w=s("div"),V=f("One ecosystem, one overall solution"),y=o(),D=s("div"),E=s("div"),O=o(),k=s("div"),A=s("div"),M=s("div"),G=s("div"),b=f("April 6, 2023"),C=o(),_=s("div"),q=f("One ecosystem, one overall solution"),F=o(),L=s("div"),j=s("div"),Y=f("We must adopt a total system approach that does not focus simply on the headline issues of the day"),R=o(),$=s("div"),ge=f(`Recent headlines have focused on the UK's new net zero strategy, announced on March 30th. While the plan
              highlights the need to transition away from fossil fuels, it falls short in terms of providing a comprehensive
              approach to sustainability. Instead, it invests heavily in Carbon Capture and Storage (CCS) technology, which some
              experts argue has yet to prove its large-scale effectiveness.`),ue=o(),K=s("div"),U=s("div"),re=f("The war at hand"),Oe=o(),he=s("div"),ze=f(`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),we=o(),ae=s("div"),fe=s("div"),qe=f("Individuals hold the power"),Ee=o(),de=s("div"),$e=f("A few notable reactions to the strategy:"),Le=o(),N=s("div"),Q=s("ul"),Ie=s("li"),_e=f(`Dr. Peter Connor, Associate Professor of Sustainable Energy Policy at the University of Exeter, expresses
                concerns about the £20 billion commitment to CCS, citing its limited impact on reducing atmospheric carbon.`),Ce=o(),me=s("li"),ie=f(`Josh Burke, Senior Policy Fellow at the London School of Economics and Political Science, laments the absence of
                a long-term investment plan for greener solutions.`),Z=o(),tt=s("li"),De=f(`Matthew Paterson, Professor of International and Climate Change Politics at the University of Manchester,
                critiques the plan's inadequate focus on retrofitting the UK's inefficient homes.`),Se=o(),ne=s("li"),Re=f(`Christophe Williams, CEO of Naked Energy, calls for increased awareness and support for existing clean
                technologies that could help businesses and communities save money while reducing environmental impact.`),Te=o(),ee=s("div"),Ne=f(`Naturally we agree!
              `),Pe=s("br"),He=f(`
              These aren’t the reasons, however, that make us assert that the document and the UK government are missing the point,
              as damning as they are.`),Be=o(),Me=s("div"),xe=s("div"),et=f("Th 6R Approach"),Qe=o(),ot=s("div"),P=f(`At PFP, we believe in a "6 R" approach to address global environmental challenges, with "regrowth" as the ultimate
              goal. By focusing on reducing waste and re-engineering processes in line with ESG goals, we can have a newly
              defined type of growth and make a positive impact on our planet and future generations.`),B=o(),H=s("div"),z=s("img"),oe=o(),J=s("div"),Ve=s("div"),ke=f("PFP News"),le=o(),be=s("div"),Pt=f(`As we continue to develop our power from waste platform to fulfil our global commitment to creating energy from
              non-recyclable waste, we are also creating our network of collaborative partners to work with us to support our
              clients to re-engineer their entire process in line with their ESG goals.`),pe=o(),te=s("div"),Ke=f("We're delighted to announce a new partnership with Rafinex, found at "),Ge=s("a"),Ue=f("www.rafinex.com"),ye=f(`
               Specialising in advanced numerical models for engineering applications, Rafinex will work alongside PFP and our clients
              to reduce waste and develop sustainable solutions designs across various industries.`),Ye=o(),vt=s("div"),Ae=f(`Rafinex' innovative cloud SaaS product Möbius embeds the latest breakthroughs in stochastic optimisation
              mathematics. It is able to compute highly optimised and reliably trustworthy product designs that remain safe in
              real-life variable operating conditions in a matter of hours - making sustainable designs both scalable and
              profitable at the same time. Rafinex enables companies to substantially save on material usage for creating
              products, as well as on the subsequent energy required to use or operate these products.`),je=o(),$t=s("div"),Mt=f(`As we continue to connect businesses and communities with the best technology partners for power-from-waste
              projects, our mission is to reduce the strain on our planet caused by the pursuit of financial growth at any cost.
              Together, we can build a sustainable future.`),Fe=o(),_t=s("div"),St=s("div"),ce=f("Copyright © 2023 Power for Planet"),ut=o(),st=s("div"),gt=s("div"),mt=f("Privacy Policy"),Gt=o(),ft=s("div"),Ht=s("img"),se=o(),ht=s("img"),jt=o(),pt=s("img"),this.h()},l(Nt){l=r(Nt,"DIV",{class:!0});var At=n(l);i=r(At,"DIV",{class:!0});var Je=n(i);u=r(Je,"DIV",{class:!0});var Ft=n(u);v=r(Ft,"DIV",{class:!0});var Xe=n(v);g=r(Xe,"DIV",{class:!0});var Et=n(g);x=r(Et,"A",{href:!0});var rt=n(x);m=r(rt,"DIV",{class:!0});var Bt=n(m);h=p(Bt,"News"),Bt.forEach(a),rt.forEach(a),I=c(Et),w=r(Et,"DIV",{class:!0});var es=n(w);V=p(es,"One ecosystem, one overall solution"),es.forEach(a),Et.forEach(a),Xe.forEach(a),y=c(Ft),D=r(Ft,"DIV",{class:!0});var bt=n(D);E=r(bt,"DIV",{class:!0}),n(E).forEach(a),O=c(bt),k=r(bt,"DIV",{class:!0});var ve=n(k);A=r(ve,"DIV",{class:!0});var at=n(A);M=r(at,"DIV",{class:!0});var qt=n(M);G=r(qt,"DIV",{class:!0});var It=n(G);b=p(It,"April 6, 2023"),It.forEach(a),qt.forEach(a),C=c(at),_=r(at,"DIV",{class:!0});var nt=n(_);q=p(nt,"One ecosystem, one overall solution"),nt.forEach(a),at.forEach(a),F=c(ve),L=r(ve,"DIV",{class:!0});var ct=n(L);j=r(ct,"DIV",{class:!0});var Yt=n(j);Y=p(Yt,"We must adopt a total system approach that does not focus simply on the headline issues of the day"),Yt.forEach(a),R=c(ct),$=r(ct,"DIV",{class:!0});var yt=n($);ge=p(yt,`Recent headlines have focused on the UK's new net zero strategy, announced on March 30th. While the plan
              highlights the need to transition away from fossil fuels, it falls short in terms of providing a comprehensive
              approach to sustainability. Instead, it invests heavily in Carbon Capture and Storage (CCS) technology, which some
              experts argue has yet to prove its large-scale effectiveness.`),yt.forEach(a),ue=c(ct),K=r(ct,"DIV",{class:!0});var Dt=n(K);U=r(Dt,"DIV",{class:!0});var Qt=n(U);re=p(Qt,"The war at hand"),Qt.forEach(a),Oe=c(Dt),he=r(Dt,"DIV",{class:!0});var Ut=n(he);ze=p(Ut,`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),Ut.forEach(a),Dt.forEach(a),ct.forEach(a),we=c(ve),ae=r(ve,"DIV",{class:!0});var Ot=n(ae);fe=r(Ot,"DIV",{class:!0});var Jt=n(fe);qe=p(Jt,"Individuals hold the power"),Jt.forEach(a),Ee=c(Ot),de=r(Ot,"DIV",{class:!0});var Lt=n(de);$e=p(Lt,"A few notable reactions to the strategy:"),Lt.forEach(a),Ot.forEach(a),Le=c(ve),N=r(ve,"DIV",{class:!0});var Rt=n(N);Q=r(Rt,"UL",{class:!0});var wt=n(Q);Ie=r(wt,"LI",{});var Ns=n(Ie);_e=p(Ns,`Dr. Peter Connor, Associate Professor of Sustainable Energy Policy at the University of Exeter, expresses
                concerns about the £20 billion commitment to CCS, citing its limited impact on reducing atmospheric carbon.`),Ns.forEach(a),Ce=c(wt),me=r(wt,"LI",{});var ls=n(me);ie=p(ls,`Josh Burke, Senior Policy Fellow at the London School of Economics and Political Science, laments the absence of
                a long-term investment plan for greener solutions.`),ls.forEach(a),Z=c(wt),tt=r(wt,"LI",{});var Kt=n(tt);De=p(Kt,`Matthew Paterson, Professor of International and Climate Change Politics at the University of Manchester,
                critiques the plan's inadequate focus on retrofitting the UK's inefficient homes.`),Kt.forEach(a),Se=c(wt),ne=r(wt,"LI",{});var it=n(ne);Re=p(it,`Christophe Williams, CEO of Naked Energy, calls for increased awareness and support for existing clean
                technologies that could help businesses and communities save money while reducing environmental impact.`),it.forEach(a),wt.forEach(a),Te=c(Rt),ee=r(Rt,"DIV",{class:!0});var Zt=n(ee);Ne=p(Zt,`Naturally we agree!
              `),Pe=r(Zt,"BR",{}),He=p(Zt,`
              These aren’t the reasons, however, that make us assert that the document and the UK government are missing the point,
              as damning as they are.`),Zt.forEach(a),Rt.forEach(a),Be=c(ve),Me=r(ve,"DIV",{class:!0});var is=n(Me);xe=r(is,"DIV",{class:!0});var hs=n(xe);et=p(hs,"Th 6R Approach"),hs.forEach(a),Qe=c(is),ot=r(is,"DIV",{class:!0});var W=n(ot);P=p(W,`At PFP, we believe in a "6 R" approach to address global environmental challenges, with "regrowth" as the ultimate
              goal. By focusing on reducing waste and re-engineering processes in line with ESG goals, we can have a newly
              defined type of growth and make a positive impact on our planet and future generations.`),W.forEach(a),is.forEach(a),B=c(ve),H=r(ve,"DIV",{class:!0});var ms=n(H);z=r(ms,"IMG",{class:!0,alt:!0,src:!0}),ms.forEach(a),oe=c(ve),J=r(ve,"DIV",{class:!0});var kt=n(J);Ve=r(kt,"DIV",{class:!0});var ds=n(Ve);ke=p(ds,"PFP News"),ds.forEach(a),le=c(kt),be=r(kt,"DIV",{class:!0});var ss=n(be);Pt=p(ss,`As we continue to develop our power from waste platform to fulfil our global commitment to creating energy from
              non-recyclable waste, we are also creating our network of collaborative partners to work with us to support our
              clients to re-engineer their entire process in line with their ESG goals.`),ss.forEach(a),pe=c(kt),te=r(kt,"DIV",{class:!0});var os=n(te);Ke=p(os,"We're delighted to announce a new partnership with Rafinex, found at "),Ge=r(os,"A",{href:!0,target:!0});var tr=n(Ge);Ue=p(tr,"www.rafinex.com"),tr.forEach(a),ye=p(os,`
               Specialising in advanced numerical models for engineering applications, Rafinex will work alongside PFP and our clients
              to reduce waste and develop sustainable solutions designs across various industries.`),os.forEach(a),Ye=c(kt),vt=r(kt,"DIV",{class:!0});var Cr=n(vt);Ae=p(Cr,`Rafinex' innovative cloud SaaS product Möbius embeds the latest breakthroughs in stochastic optimisation
              mathematics. It is able to compute highly optimised and reliably trustworthy product designs that remain safe in
              real-life variable operating conditions in a matter of hours - making sustainable designs both scalable and
              profitable at the same time. Rafinex enables companies to substantially save on material usage for creating
              products, as well as on the subsequent energy required to use or operate these products.`),Cr.forEach(a),je=c(kt),$t=r(kt,"DIV",{class:!0});var rs=n($t);Mt=p(rs,`As we continue to connect businesses and communities with the best technology partners for power-from-waste
              projects, our mission is to reduce the strain on our planet caused by the pursuit of financial growth at any cost.
              Together, we can build a sustainable future.`),rs.forEach(a),kt.forEach(a),ve.forEach(a),bt.forEach(a),Ft.forEach(a),Je.forEach(a),Fe=c(At),_t=r(At,"DIV",{class:!0});var us=n(_t);St=r(us,"DIV",{class:!0});var cr=n(St);ce=p(cr,"Copyright © 2023 Power for Planet"),cr.forEach(a),ut=c(us),st=r(us,"DIV",{class:!0});var Ss=n(st);gt=r(Ss,"DIV",{class:!0});var Ws=n(gt);mt=p(Ws,"Privacy Policy"),Ws.forEach(a),Gt=c(Ss),ft=r(Ss,"DIV",{class:!0});var Xt=n(ft);Ht=r(Xt,"IMG",{src:!0,alt:!0,class:!0}),se=c(Xt),ht=r(Xt,"IMG",{src:!0,alt:!0,class:!0}),jt=c(Xt),pt=r(Xt,"IMG",{src:!0,alt:!0,class:!0}),Xt.forEach(a),Ss.forEach(a),us.forEach(a),At.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(w,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(E,"class","bg-cover bg-center bg-[url('/assets/new/2.jpg')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(G,"class","uppercase"),t(M,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(_,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(j,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t($,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(U,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(he,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(K,"class","w-full flex-col flex items-start gap-3"),t(L,"class","w-full flex-col flex items-start gap-6"),t(fe,"class","text-xl leading-[34px] font-bold font-Poppins"),t(de,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ae,"class","w-full flex-col flex items-start gap-3"),t(Q,"class","list-disc pl-4"),t(ee,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(N,"class","w-full flex-col flex items-start gap-3"),t(xe,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(ot,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Me,"class","w-full flex-col flex items-start gap-3"),t(z,"class","object-cover w-full h-[2000px] rounded-2xl"),t(z,"alt","1680532545699"),S(z.src,X="/assets/new/1680532545699.png")||t(z,"src",X),t(H,"class","w-full flex-col flex items-start gap-4 text-sm leading-[25px] font-light font-PublicSans"),t(Ve,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(be,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Ge,"href","//www.rafinex.com"),t(Ge,"target","_blank"),t(te,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(vt,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t($t,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(J,"class","w-full flex-col flex items-start gap-3"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(D,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(St,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(gt,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Ht.src,Vt="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ht,"src",Vt),t(Ht,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Ht,"class","h-6 w-6"),S(ht.src,Tt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ht,"src",Tt),t(ht,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(ht,"class","h-6 w-6"),S(pt.src,xt="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(pt,"src",xt),t(pt,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(pt,"class","h-6 w-6"),t(ft,"class","flex items-center gap-5"),t(st,"class","flex-1 flex justify-end items-center gap-10"),t(_t,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(Nt,At){lt(Nt,l,At),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,I),e(g,w),e(w,V),e(u,y),e(u,D),e(D,E),e(D,O),e(D,k),e(k,A),e(A,M),e(M,G),e(G,b),e(A,C),e(A,_),e(_,q),e(k,F),e(k,L),e(L,j),e(j,Y),e(L,R),e(L,$),e($,ge),e(L,ue),e(L,K),e(K,U),e(U,re),e(K,Oe),e(K,he),e(he,ze),e(k,we),e(k,ae),e(ae,fe),e(fe,qe),e(ae,Ee),e(ae,de),e(de,$e),e(k,Le),e(k,N),e(N,Q),e(Q,Ie),e(Ie,_e),e(Q,Ce),e(Q,me),e(me,ie),e(Q,Z),e(Q,tt),e(tt,De),e(Q,Se),e(Q,ne),e(ne,Re),e(N,Te),e(N,ee),e(ee,Ne),e(ee,Pe),e(ee,He),e(k,Be),e(k,Me),e(Me,xe),e(xe,et),e(Me,Qe),e(Me,ot),e(ot,P),e(k,B),e(k,H),e(H,z),e(k,oe),e(k,J),e(J,Ve),e(Ve,ke),e(J,le),e(J,be),e(be,Pt),e(J,pe),e(J,te),e(te,Ke),e(te,Ge),e(Ge,Ue),e(te,ye),e(J,Ye),e(J,vt),e(vt,Ae),e(J,je),e(J,$t),e($t,Mt),e(l,Fe),e(l,_t),e(_t,St),e(St,ce),e(_t,ut),e(_t,st),e(st,gt),e(gt,mt),e(st,Gt),e(st,ft),e(ft,Ht),e(ft,se),e(ft,ht),e(ft,jt),e(ft,pt)},p:We,i:We,o:We,d(Nt){Nt&&a(l)}}}class C6 extends Vn{constructor(l){super(),kn(this,l,null,L6,Wa,{})}}function M6(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,O,k,A,M,G,b,C,_,q,F,L,j,Y,R,$,ge,ue,K,U,re,Oe,he,ze,we,ae,fe,qe,Ee,de,$e,Le,N,Q,Ie,_e,Ce,me,ie,Z,tt,De,Se,ne,Re,Te,ee,Ne,Pe,He,Be,Me,xe,et,Qe,ot,P,B,H,z,X,oe,J,Ve,ke,le,be,Pt,pe,te,Ke,Ge,Ue,ye,Ye,vt,Ae,je,$t,Mt,Fe,_t;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),I=o(),w=s("div"),V=f('The "Great Greenwashing” of 2023'),y=o(),D=s("div"),E=s("div"),O=o(),k=s("div"),A=s("div"),M=s("div"),G=s("div"),b=f("March 6, 2023"),C=o(),_=s("div"),q=f('The "Great Greenwashing” of 2023'),F=o(),L=s("div"),j=s("div"),Y=f("From Euronews green"),R=o(),$=s("div"),ge=f(`In recent news, Lufthansa released a poster reading "Protecting the Planet", featuring a plane overlaid on an
              image of the Earth, which was rapidly banned in the UK for misleading consumers about the airline's environmental
              impact. While Lufthansa has set a goal to become carbon neutral by 2050 and has invested in sustainable aviation
              fuel and carbon offset programs, there are currently no environmental initiatives or commercially viable
              technologies in the aviation industry which would substantiate the green claim "protecting the future".`),ue=o(),K=s("div"),U=s("div"),re=f("From the Guardian"),Oe=o(),he=s("div"),ze=f(`A recent investigation has revealed troubling news about forest carbon offsets. The world's leading certifier,
                Verra, relied upon by major corporations like Disney, Shell, Gucci have been approving offset projects that are
                largely ineffective at combating climate change.`),we=o(),ae=s("div"),fe=f(`The investigation analysed a significant percentage of Verra's projects and found that over 90% of the
                rainforest offset credits - which are among the most commonly used by companies - are likely to be "phantom
                credits". These credits do not represent genuine carbon reductions, which means that the purported benefits of
                these offsets are largely worthless.`),qe=o(),Ee=s("div"),de=s("div"),$e=f("From journalist Robin Hicks"),Le=o(),N=s("div"),Q=f(`Meanwhile, the South Korean government has said it will start taking action against companies that make misleading
              sustainability claims. It is a first-of-its-kind move in Asia and other governments and regulatory bodies should
              take note and follow suit.`),Ie=o(),_e=s("div"),Ce=f(`Under a draft new law, companies that mislead the public about their environmental impact will face fines of up to
              KRW3 million (£1,920). The news comes four months after the country’s largest oil and gas company SK E&C was
              forced to modify a marketing campaign that claimed the firm would produce “CO2-free” liquefied natural gas at a
              planned plant in northern Australia.`),me=o(),ie=s("div"),Z=s("div"),tt=f("From the Planet"),De=o(),Se=s("div"),ne=f(`The environmental harm caused by humans has led to a rapid acceleration of natural changes in my climate system.
              Of course, as a planet, I will still be here for quite some time - around 7.5 billion years, give or take a
              millennium. But unfortunately, the same cannot be said for the multitude of life forms, particularly the human
              species. Climate extremes will soon become the norm and coping with them will be a tremendous challenge.`),Re=o(),Te=s("div"),ee=f(`However, if humanity chooses to prioritise environmental repair over damage, there is a chance we can mitigate the
              worst effects of climate change. It will require more than just PR stunts and lip service. Real, substantive
              action is what's necessary - action that shows a genuine concern for the environment and a willingness to do what
              it takes to preserve our planet for future generations.`),Ne=o(),Pe=s("div"),He=s("div"),Be=f("From the People"),Me=o(),xe=s("div"),et=f(`We are no longer falling for flashy ad campaigns and PR-led trickery. We are wise to the tactics that corporations
              use to distract from their harmful actions. We are keeping a close eye on the leaders who perpetuate this cycle of
              deception, and they will be held accountable for their actions. In fact, the charge for corporate manslaughter is
              not out of the question - what about charges for the countless lives affected on earth?`),Qe=o(),ot=s("div"),P=s("div"),B=f("From PFP"),H=o(),z=s("div"),X=f("Dear Shell et al,"),oe=o(),J=s("div"),Ve=f(`You have the power to make a real difference. Instead of spending millions of dollars on PR campaigns that only
              serve to create the impression that you care about the environment, why not put your resources to work on projects
              that actually remove CO2 from the atmosphere? You could take non-recyclable waste and turn it into green energy,
              providing a secure supply of energy while also enhancing the environment. Your brand could be the one that
              sponsors this initiative. The time for action is now - let us make a difference before it's too late.`),ke=o(),le=s("div"),be=s("div"),Pt=f("Copyright © 2023 Power for Planet"),pe=o(),te=s("div"),Ke=s("div"),Ge=f("Privacy Policy"),Ue=o(),ye=s("div"),Ye=s("img"),Ae=o(),je=s("img"),Mt=o(),Fe=s("img"),this.h()},l(St){l=r(St,"DIV",{class:!0});var ce=n(l);i=r(ce,"DIV",{class:!0});var ut=n(i);u=r(ut,"DIV",{class:!0});var st=n(u);v=r(st,"DIV",{class:!0});var gt=n(v);g=r(gt,"DIV",{class:!0});var mt=n(g);x=r(mt,"A",{href:!0});var Gt=n(x);m=r(Gt,"DIV",{class:!0});var ft=n(m);h=p(ft,"News"),ft.forEach(a),Gt.forEach(a),I=c(mt),w=r(mt,"DIV",{class:!0});var Ht=n(w);V=p(Ht,'The "Great Greenwashing” of 2023'),Ht.forEach(a),mt.forEach(a),gt.forEach(a),y=c(st),D=r(st,"DIV",{class:!0});var Vt=n(D);E=r(Vt,"DIV",{class:!0}),n(E).forEach(a),O=c(Vt),k=r(Vt,"DIV",{class:!0});var se=n(k);A=r(se,"DIV",{class:!0});var ht=n(A);M=r(ht,"DIV",{class:!0});var Tt=n(M);G=r(Tt,"DIV",{class:!0});var jt=n(G);b=p(jt,"March 6, 2023"),jt.forEach(a),Tt.forEach(a),C=c(ht),_=r(ht,"DIV",{class:!0});var pt=n(_);q=p(pt,'The "Great Greenwashing” of 2023'),pt.forEach(a),ht.forEach(a),F=c(se),L=r(se,"DIV",{class:!0});var xt=n(L);j=r(xt,"DIV",{class:!0});var Nt=n(j);Y=p(Nt,"From Euronews green"),Nt.forEach(a),R=c(xt),$=r(xt,"DIV",{class:!0});var At=n($);ge=p(At,`In recent news, Lufthansa released a poster reading "Protecting the Planet", featuring a plane overlaid on an
              image of the Earth, which was rapidly banned in the UK for misleading consumers about the airline's environmental
              impact. While Lufthansa has set a goal to become carbon neutral by 2050 and has invested in sustainable aviation
              fuel and carbon offset programs, there are currently no environmental initiatives or commercially viable
              technologies in the aviation industry which would substantiate the green claim "protecting the future".`),At.forEach(a),ue=c(xt),K=r(xt,"DIV",{class:!0});var Je=n(K);U=r(Je,"DIV",{class:!0});var Ft=n(U);re=p(Ft,"From the Guardian"),Ft.forEach(a),Oe=c(Je),he=r(Je,"DIV",{class:!0});var Xe=n(he);ze=p(Xe,`A recent investigation has revealed troubling news about forest carbon offsets. The world's leading certifier,
                Verra, relied upon by major corporations like Disney, Shell, Gucci have been approving offset projects that are
                largely ineffective at combating climate change.`),Xe.forEach(a),we=c(Je),ae=r(Je,"DIV",{class:!0});var Et=n(ae);fe=p(Et,`The investigation analysed a significant percentage of Verra's projects and found that over 90% of the
                rainforest offset credits - which are among the most commonly used by companies - are likely to be "phantom
                credits". These credits do not represent genuine carbon reductions, which means that the purported benefits of
                these offsets are largely worthless.`),Et.forEach(a),Je.forEach(a),xt.forEach(a),qe=c(se),Ee=r(se,"DIV",{class:!0});var rt=n(Ee);de=r(rt,"DIV",{class:!0});var Bt=n(de);$e=p(Bt,"From journalist Robin Hicks"),Bt.forEach(a),Le=c(rt),N=r(rt,"DIV",{class:!0});var es=n(N);Q=p(es,`Meanwhile, the South Korean government has said it will start taking action against companies that make misleading
              sustainability claims. It is a first-of-its-kind move in Asia and other governments and regulatory bodies should
              take note and follow suit.`),es.forEach(a),Ie=c(rt),_e=r(rt,"DIV",{class:!0});var bt=n(_e);Ce=p(bt,`Under a draft new law, companies that mislead the public about their environmental impact will face fines of up to
              KRW3 million (£1,920). The news comes four months after the country’s largest oil and gas company SK E&C was
              forced to modify a marketing campaign that claimed the firm would produce “CO2-free” liquefied natural gas at a
              planned plant in northern Australia.`),bt.forEach(a),rt.forEach(a),me=c(se),ie=r(se,"DIV",{class:!0});var ve=n(ie);Z=r(ve,"DIV",{class:!0});var at=n(Z);tt=p(at,"From the Planet"),at.forEach(a),De=c(ve),Se=r(ve,"DIV",{class:!0});var qt=n(Se);ne=p(qt,`The environmental harm caused by humans has led to a rapid acceleration of natural changes in my climate system.
              Of course, as a planet, I will still be here for quite some time - around 7.5 billion years, give or take a
              millennium. But unfortunately, the same cannot be said for the multitude of life forms, particularly the human
              species. Climate extremes will soon become the norm and coping with them will be a tremendous challenge.`),qt.forEach(a),Re=c(ve),Te=r(ve,"DIV",{class:!0});var It=n(Te);ee=p(It,`However, if humanity chooses to prioritise environmental repair over damage, there is a chance we can mitigate the
              worst effects of climate change. It will require more than just PR stunts and lip service. Real, substantive
              action is what's necessary - action that shows a genuine concern for the environment and a willingness to do what
              it takes to preserve our planet for future generations.`),It.forEach(a),ve.forEach(a),Ne=c(se),Pe=r(se,"DIV",{class:!0});var nt=n(Pe);He=r(nt,"DIV",{class:!0});var ct=n(He);Be=p(ct,"From the People"),ct.forEach(a),Me=c(nt),xe=r(nt,"DIV",{class:!0});var Yt=n(xe);et=p(Yt,`We are no longer falling for flashy ad campaigns and PR-led trickery. We are wise to the tactics that corporations
              use to distract from their harmful actions. We are keeping a close eye on the leaders who perpetuate this cycle of
              deception, and they will be held accountable for their actions. In fact, the charge for corporate manslaughter is
              not out of the question - what about charges for the countless lives affected on earth?`),Yt.forEach(a),nt.forEach(a),Qe=c(se),ot=r(se,"DIV",{class:!0});var yt=n(ot);P=r(yt,"DIV",{class:!0});var Dt=n(P);B=p(Dt,"From PFP"),Dt.forEach(a),H=c(yt),z=r(yt,"DIV",{class:!0});var Qt=n(z);X=p(Qt,"Dear Shell et al,"),Qt.forEach(a),oe=c(yt),J=r(yt,"DIV",{class:!0});var Ut=n(J);Ve=p(Ut,`You have the power to make a real difference. Instead of spending millions of dollars on PR campaigns that only
              serve to create the impression that you care about the environment, why not put your resources to work on projects
              that actually remove CO2 from the atmosphere? You could take non-recyclable waste and turn it into green energy,
              providing a secure supply of energy while also enhancing the environment. Your brand could be the one that
              sponsors this initiative. The time for action is now - let us make a difference before it's too late.`),Ut.forEach(a),yt.forEach(a),se.forEach(a),Vt.forEach(a),st.forEach(a),ut.forEach(a),ke=c(ce),le=r(ce,"DIV",{class:!0});var Ot=n(le);be=r(Ot,"DIV",{class:!0});var Jt=n(be);Pt=p(Jt,"Copyright © 2023 Power for Planet"),Jt.forEach(a),pe=c(Ot),te=r(Ot,"DIV",{class:!0});var Lt=n(te);Ke=r(Lt,"DIV",{class:!0});var Rt=n(Ke);Ge=p(Rt,"Privacy Policy"),Rt.forEach(a),Ue=c(Lt),ye=r(Lt,"DIV",{class:!0});var wt=n(ye);Ye=r(wt,"IMG",{src:!0,alt:!0,class:!0}),Ae=c(wt),je=r(wt,"IMG",{src:!0,alt:!0,class:!0}),Mt=c(wt),Fe=r(wt,"IMG",{src:!0,alt:!0,class:!0}),wt.forEach(a),Lt.forEach(a),Ot.forEach(a),ce.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(w,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(E,"class","bg-cover bg-center bg-[url('/assets/new/4.png')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(G,"class","uppercase"),t(M,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(_,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(j,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t($,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(U,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(he,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ae,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(K,"class","w-full flex-col flex items-start gap-3"),t(L,"class","w-full flex-col flex items-start gap-6"),t(de,"class","text-xl leading-[34px] font-bold font-Poppins"),t(N,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(_e,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Ee,"class","w-full flex-col flex items-start gap-3"),t(Z,"class","text-xl leading-[34px] font-bold font-Poppins"),t(Se,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Te,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ie,"class","w-full flex-col flex items-start gap-3"),t(He,"class","text-xl leading-[34px] font-bold font-Poppins"),t(xe,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Pe,"class","w-full flex-col flex items-start gap-3"),t(P,"class","text-xl leading-[34px] font-bold font-Poppins"),t(z,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(J,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ot,"class","w-full flex-col flex items-start gap-3"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(D,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(be,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ke,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Ye.src,vt="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ye,"src",vt),t(Ye,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Ye,"class","h-6 w-6"),S(je.src,$t="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(je,"src",$t),t(je,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(je,"class","h-6 w-6"),S(Fe.src,_t="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Fe,"src",_t),t(Fe,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Fe,"class","h-6 w-6"),t(ye,"class","flex items-center gap-5"),t(te,"class","flex-1 flex justify-end items-center gap-10"),t(le,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(St,ce){lt(St,l,ce),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,I),e(g,w),e(w,V),e(u,y),e(u,D),e(D,E),e(D,O),e(D,k),e(k,A),e(A,M),e(M,G),e(G,b),e(A,C),e(A,_),e(_,q),e(k,F),e(k,L),e(L,j),e(j,Y),e(L,R),e(L,$),e($,ge),e(L,ue),e(L,K),e(K,U),e(U,re),e(K,Oe),e(K,he),e(he,ze),e(K,we),e(K,ae),e(ae,fe),e(k,qe),e(k,Ee),e(Ee,de),e(de,$e),e(Ee,Le),e(Ee,N),e(N,Q),e(Ee,Ie),e(Ee,_e),e(_e,Ce),e(k,me),e(k,ie),e(ie,Z),e(Z,tt),e(ie,De),e(ie,Se),e(Se,ne),e(ie,Re),e(ie,Te),e(Te,ee),e(k,Ne),e(k,Pe),e(Pe,He),e(He,Be),e(Pe,Me),e(Pe,xe),e(xe,et),e(k,Qe),e(k,ot),e(ot,P),e(P,B),e(ot,H),e(ot,z),e(z,X),e(ot,oe),e(ot,J),e(J,Ve),e(l,ke),e(l,le),e(le,be),e(be,Pt),e(le,pe),e(le,te),e(te,Ke),e(Ke,Ge),e(te,Ue),e(te,ye),e(ye,Ye),e(ye,Ae),e(ye,je),e(ye,Mt),e(ye,Fe)},p:We,i:We,o:We,d(St){St&&a(l)}}}class G6 extends Vn{constructor(l){super(),kn(this,l,null,M6,Wa,{})}}function j6(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,O,k,A,M,G,b,C,_,q,F,L,j,Y,R,$,ge,ue,K,U,re,Oe,he,ze,we,ae,fe,qe,Ee,de,$e,Le,N,Q,Ie,_e,Ce,me,ie,Z,tt,De,Se,ne,Re,Te,ee,Ne,Pe,He,Be,Me,xe,et,Qe,ot,P,B,H,z,X,oe,J,Ve,ke,le,be,Pt,pe,te,Ke,Ge,Ue,ye,Ye,vt,Ae,je,$t,Mt,Fe,_t,St,ce,ut,st,gt,mt,Gt,ft,Ht,Vt,se,ht,Tt,jt,pt,xt,Nt,At,Je,Ft,Xe,Et,rt,Bt,es,bt,ve,at,qt,It,nt,ct,Yt,yt,Dt,Qt,Ut,Ot,Jt,Lt,Rt,wt,Ns,ls,Kt,it,Zt,is,hs,W,ms,kt,ds,ss,os,tr,Cr,rs,us,cr,Ss,Ws,Xt,xs,Ts,Mr,Dr,Pr,sr,Es,dr,fs,ps,ta,Gr,as,As,Sn,jr,Fs,Tn,Nr,ns,Vr;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("Contact us"),x=o(),m=s("div"),h=s("div"),I=s("div"),w=f("Contact us and turn your green energy vision into reality"),V=o(),y=s("div"),D=s("div"),E=s("button"),O=s("div"),k=s("div"),A=s("img"),G=o(),b=s("div"),C=f("Schedule a conversation with us"),_=o(),q=s("div"),F=s("img"),j=o(),Y=s("div"),R=s("iframe"),ge=o(),ue=s("div"),K=s("button"),U=s("div"),re=s("div"),Oe=s("img"),ze=o(),we=s("div"),ae=f("Message us through our contact form"),fe=o(),qe=s("div"),Ee=s("img"),$e=o(),Le=s("form"),N=s("div"),Q=s("div"),Ie=s("div"),_e=s("div"),Ce=f("Name*"),me=o(),ie=s("div"),Z=s("input"),tt=o(),De=s("div"),Se=s("div"),ne=f("Email*"),Re=o(),Te=s("div"),ee=s("input"),Ne=o(),Pe=s("div"),He=s("div"),Be=s("div"),Me=f("Organization/Company name (optional)"),xe=o(),et=s("div"),Qe=s("input"),ot=o(),P=s("div"),B=s("div"),H=f("Type of query/contact*"),z=o(),X=s("div"),oe=s("div"),J=f("Select..."),Ve=o(),ke=s("img"),be=o(),Pt=s("div"),pe=s("div"),te=s("div"),Ke=f("Your message*"),Ge=o(),Ue=s("div"),ye=s("textarea"),Ye=o(),vt=s("input"),Ae=o(),je=s("input"),$t=o(),Mt=s("input"),Fe=o(),_t=s("input"),St=o(),ce=s("input"),ut=o(),st=s("button"),gt=s("div"),mt=s("img"),ft=f(`
                    Send message`),Ht=o(),Vt=s("script"),se=f(`function toggleElement(k) {
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
            }, 1000)`),ht=o(),Tt=s("div"),jt=s("div"),pt=s("div"),xt=f("Find us"),Nt=o(),At=s("div"),Je=s("div"),Ft=s("div"),Xe=s("div"),Et=s("div"),rt=s("img"),es=o(),bt=s("div"),ve=s("div"),at=s("div"),qt=f("Power for Planet"),It=o(),nt=s("div"),ct=f("78 Pall Mall SW1Y 5ES London, United Kingdom"),Yt=o(),yt=s("a"),Dt=s("img"),Ut=o(),Ot=s("div"),Jt=s("div"),Lt=s("div"),Rt=s("img"),Ns=o(),ls=s("div"),Kt=s("div"),it=s("div"),Zt=f("Contact us"),is=o(),hs=s("div"),W=f("+44 7796 302 102 dermot@powerforplanet.com"),ms=o(),kt=s("div"),ds=s("div"),ss=s("div"),os=s("div"),tr=f("Follow us on social media"),Cr=o(),rs=s("div"),us=s("img"),Ss=o(),Ws=s("img"),xs=o(),Ts=s("img"),Dr=o(),Pr=s("div"),sr=s("div"),Es=f("Copyright © 2023 Power for Planet"),dr=o(),fs=s("div"),ps=s("div"),ta=f("Privacy Policy"),Gr=o(),as=s("div"),As=s("img"),jr=o(),Fs=s("img"),Nr=o(),ns=s("img"),this.h()},l(Ys){l=r(Ys,"DIV",{class:!0});var bs=n(l);i=r(bs,"DIV",{class:!0});var Bs=n(i);u=r(Bs,"DIV",{class:!0});var wa=n(u);v=r(wa,"DIV",{});var kr=n(v);g=p(kr,"Contact us"),kr.forEach(a),wa.forEach(a),x=c(Bs),m=r(Bs,"DIV",{class:!0});var Wt=n(m);h=r(Wt,"DIV",{class:!0});var rr=n(h);I=r(rr,"DIV",{class:!0});var ur=n(I);w=p(ur,"Contact us and turn your green energy vision into reality"),ur.forEach(a),V=c(rr),y=r(rr,"DIV",{class:!0});var fr=n(y);D=r(fr,"DIV",{class:!0});var pr=n(D);E=r(pr,"BUTTON",{onclick:!0});var Br=n(E);O=r(Br,"DIV",{class:!0});var Is=n(O);k=r(Is,"DIV",{id:!0,class:!0});var ys=n(k);A=r(ys,"IMG",{src:!0,alt:!0,class:!0}),ys.forEach(a),G=c(Is),b=r(Is,"DIV",{class:!0});var cl=n(b);C=p(cl,"Schedule a conversation with us"),cl.forEach(a),_=c(Is),q=r(Is,"DIV",{class:!0});var fi=n(q);F=r(fi,"IMG",{id:!0,src:!0,alt:!0,class:!0}),fi.forEach(a),Is.forEach(a),Br.forEach(a),j=c(pr),Y=r(pr,"DIV",{id:!0,class:!0});var sa=n(Y);R=r(sa,"IFRAME",{style:!0,height:!0,width:!0,frameborder:!0,src:!0,title:!0}),n(R).forEach(a),sa.forEach(a),pr.forEach(a),ge=c(fr),ue=r(fr,"DIV",{class:!0});var cs=n(ue);K=r(cs,"BUTTON",{onclick:!0});var pi=n(K);U=r(pi,"DIV",{class:!0});var qr=n(U);re=r(qr,"DIV",{id:!0,class:!0});var ra=n(re);Oe=r(ra,"IMG",{src:!0,alt:!0,class:!0}),ra.forEach(a),ze=c(qr),we=r(qr,"DIV",{class:!0});var vi=n(we);ae=p(vi,"Message us through our contact form"),vi.forEach(a),fe=c(qr),qe=r(qr,"DIV",{class:!0});var dl=n(qe);Ee=r(dl,"IMG",{id:!0,src:!0,alt:!0,class:!0}),dl.forEach(a),qr.forEach(a),pi.forEach(a),$e=c(cs),Le=r(cs,"FORM",{id:!0,class:!0,action:!0,method:!0});var co=n(Le);N=r(co,"DIV",{class:!0});var vs=n(N);Q=r(vs,"DIV",{class:!0});var Os=n(Q);Ie=r(Os,"DIV",{class:!0});var Rr=n(Ie);_e=r(Rr,"DIV",{class:!0});var Ya=n(_e);Ce=p(Ya,"Name*"),Ya.forEach(a),me=c(Rr),ie=r(Rr,"DIV",{class:!0});var ts=n(ie);Z=r(ts,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),ts.forEach(a),Rr.forEach(a),tt=c(Os),De=r(Os,"DIV",{class:!0});var vr=n(De);Se=r(vr,"DIV",{class:!0});var Sr=n(Se);ne=p(Sr,"Email*"),Sr.forEach(a),Re=c(vr),Te=r(vr,"DIV",{class:!0});var gr=n(Te);ee=r(gr,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),gr.forEach(a),vr.forEach(a),Os.forEach(a),Ne=c(vs),Pe=r(vs,"DIV",{class:!0});var qs=n(Pe);He=r(qs,"DIV",{class:!0});var $r=n(He);Be=r($r,"DIV",{class:!0});var _a=n(Be);Me=p(_a,"Organization/Company name (optional)"),_a.forEach(a),xe=c($r),et=r($r,"DIV",{class:!0});var An=n(et);Qe=r(An,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),An.forEach(a),$r.forEach(a),ot=c(qs),P=r(qs,"DIV",{class:!0});var ul=n(P);B=r(ul,"DIV",{class:!0});var ar=n(B);H=p(ar,"Type of query/contact*"),ar.forEach(a),z=c(ul),X=r(ul,"DIV",{class:!0});var gs=n(X);oe=r(gs,"DIV",{class:!0});var Ul=n(oe);J=p(Ul,"Select..."),Ul.forEach(a),Ve=c(gs),ke=r(gs,"IMG",{src:!0,alt:!0,class:!0}),gs.forEach(a),ul.forEach(a),qs.forEach(a),be=c(vs),Pt=r(vs,"DIV",{class:!0});var gi=n(Pt);pe=r(gi,"DIV",{class:!0});var ws=n(pe);te=r(ws,"DIV",{class:!0});var aa=n(te);Ke=p(aa,"Your message*"),aa.forEach(a),Ge=c(ws),Ue=r(ws,"DIV",{class:!0});var Fn=n(Ue);ye=r(Fn,"TEXTAREA",{class:!0,name:!0}),n(ye).forEach(a),Fn.forEach(a),ws.forEach(a),gi.forEach(a),Ye=c(vs),vt=r(vs,"INPUT",{type:!0,name:!0,style:!0}),Ae=c(vs),je=r(vs,"INPUT",{type:!0,name:!0}),$t=c(vs),Mt=r(vs,"INPUT",{type:!0,name:!0}),Fe=c(vs),_t=r(vs,"INPUT",{type:!0,name:!0}),St=c(vs),ce=r(vs,"INPUT",{type:!0,name:!0,id:!0}),ut=c(vs),st=r(vs,"BUTTON",{type:!0});var hr=n(st);gt=r(hr,"DIV",{class:!0});var za=n(gt);mt=r(za,"IMG",{src:!0,alt:!0,class:!0}),ft=p(za,`
                    Send message`),za.forEach(a),hr.forEach(a),vs.forEach(a),co.forEach(a),cs.forEach(a),Ht=c(fr),Vt=r(fr,"SCRIPT",{});var hi=n(Vt);se=p(hi,`function toggleElement(k) {
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
            }, 1000)`),hi.forEach(a),fr.forEach(a),rr.forEach(a),ht=c(Wt),Tt=r(Wt,"DIV",{class:!0});var mr=n(Tt);jt=r(mr,"DIV",{class:!0});var Ds=n(jt);pt=r(Ds,"DIV",{});var nr=n(pt);xt=p(nr,"Find us"),nr.forEach(a),Ds.forEach(a),Nt=c(mr),At=r(mr,"DIV",{class:!0});var Ls=n(At);Je=r(Ls,"DIV",{class:!0});var Rs=n(Je);Ft=r(Rs,"DIV",{class:!0});var Hr=n(Ft);Xe=r(Hr,"DIV",{class:!0});var Ka=n(Xe);Et=r(Ka,"DIV",{class:!0});var mi=n(Et);rt=r(mi,"IMG",{src:!0,alt:!0,class:!0}),mi.forEach(a),es=c(Ka),bt=r(Ka,"DIV",{class:!0});var xr=n(bt);ve=r(xr,"DIV",{class:!0});var zs=n(ve);at=r(zs,"DIV",{class:!0});var Cs=n(at);qt=p(Cs,"Power for Planet"),Cs.forEach(a),It=c(zs),nt=r(zs,"DIV",{class:!0});var Ur=n(nt);ct=p(Ur,"78 Pall Mall SW1Y 5ES London, United Kingdom"),Ur.forEach(a),Yt=c(zs),yt=r(zs,"A",{href:!0,target:!0});var On=n(yt);Dt=r(On,"IMG",{src:!0,class:!0}),On.forEach(a),zs.forEach(a),xr.forEach(a),Ka.forEach(a),Hr.forEach(a),Ut=c(Rs),Ot=r(Rs,"DIV",{class:!0});var Ln=n(Ot);Jt=r(Ln,"DIV",{class:!0});var Ja=n(Jt);Lt=r(Ja,"DIV",{class:!0});var xi=n(Lt);Rt=r(xi,"IMG",{src:!0,alt:!0,class:!0}),xi.forEach(a),Ns=c(Ja),ls=r(Ja,"DIV",{class:!0});var Ps=n(ls);Kt=r(Ps,"DIV",{class:!0});var Ms=n(Kt);it=r(Ms,"DIV",{class:!0});var na=n(it);Zt=p(na,"Contact us"),na.forEach(a),is=c(Ms),hs=r(Ms,"DIV",{class:!0});var uo=n(hs);W=p(uo,"+44 7796 302 102 dermot@powerforplanet.com"),uo.forEach(a),Ms.forEach(a),Ps.forEach(a),Ja.forEach(a),Ln.forEach(a),Rs.forEach(a),ms=c(Ls),kt=r(Ls,"DIV",{class:!0});var bi=n(kt);ds=r(bi,"DIV",{class:!0});var Cn=n(ds);ss=r(Cn,"DIV",{class:!0});var lr=n(ss);os=r(lr,"DIV",{class:!0});var br=n(os);tr=p(br,"Follow us on social media"),br.forEach(a),Cr=c(lr),rs=r(lr,"DIV",{class:!0});var Tr=n(rs);us=r(Tr,"IMG",{src:!0,alt:!0,class:!0}),Ss=c(Tr),Ws=r(Tr,"IMG",{src:!0,alt:!0,class:!0}),xs=c(Tr),Ts=r(Tr,"IMG",{src:!0,alt:!0,class:!0}),Tr.forEach(a),lr.forEach(a),Cn.forEach(a),bi.forEach(a),Ls.forEach(a),mr.forEach(a),Wt.forEach(a),Dr=c(Bs),Pr=r(Bs,"DIV",{class:!0});var ir=n(Pr);sr=r(ir,"DIV",{class:!0});var fl=n(sr);Es=p(fl,"Copyright © 2023 Power for Planet"),fl.forEach(a),dr=c(ir),fs=r(ir,"DIV",{class:!0});var Wr=n(fs);ps=r(Wr,"DIV",{class:!0});var la=n(ps);ta=p(la,"Privacy Policy"),la.forEach(a),Gr=c(Wr),as=r(Wr,"DIV",{class:!0});var Ks=n(as);As=r(Ks,"IMG",{src:!0,alt:!0,class:!0}),jr=c(Ks),Fs=r(Ks,"IMG",{src:!0,alt:!0,class:!0}),Nr=c(Ks),ns=r(Ks,"IMG",{src:!0,alt:!0,class:!0}),Ks.forEach(a),Wr.forEach(a),ir.forEach(a),Bs.forEach(a),bs.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),t(I,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(A.src,M="/assets/new/calendar-days.svg")||t(A,"src",M),t(A,"alt","calendar-days"),t(A,"class","h-10 w-10 grayscale contrast-200 invert"),t(k,"id","calendar-heading"),t(k,"class","bg-pfp-green bg-none duration-100 flex justify-center items-center gap-2.5 px-[50px] py-8 rounded-l-[20px]"),t(b,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins w-[596px]"),t(F,"id","calendar-chevron"),S(F.src,L="/assets/new/chevron-down.svg")||t(F,"src",L),t(F,"alt","chevron-down"),t(F,"class","h-6 w-6 rotate-180 duration-180"),t(q,"class","flex items-center gap-2.5 pl-[50px]"),t(O,"class","w-full flex items-center gap-[50px] pr-[50px]"),t(E,"onclick","toggleElement('calendar')"),T(R,"background","none"),T(R,"filter","contrast(1.07)"),T(R,"margin-bottom","-100px"),t(R,"height","1100"),t(R,"width","100%"),t(R,"frameborder","0"),R.allowFullscreen="",S(R.src,$="https://calendly.com/csaladenes-6ee/30min?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=394e6a&primary_color=3f9378&back=1&month=2023-07")||t(R,"src",$),t(R,"title","book"),t(Y,"id","calendar"),t(Y,"class","bg-none overflow-hidden duration-300 h-[0px] w-full"),t(D,"class","bg-[#e7f5f5] w-full pt-[0px] flex-col flex justify-center items-center rounded-[20px] align-top"),S(Oe.src,he="/assets/new/mail.svg")||t(Oe,"src",he),t(Oe,"alt","mail"),t(Oe,"class","h-10 w-10 grayscale contrast-200 invert"),t(re,"id","contactform-heading"),t(re,"class","bg-pfp-green bg-none duration-100 flex justify-center items-center gap-2.5 px-[50px] py-8 rounded-l-[20px]"),t(we,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins w-[596px]"),t(Ee,"id","contactform-chevron"),S(Ee.src,de="/assets/new/chevron-down.svg")||t(Ee,"src",de),t(Ee,"alt","chevron-down"),t(Ee,"class","h-6 w-6 rotate-180 duration-180"),t(qe,"class","flex items-center gap-2.5 pl-[50px]"),t(U,"class","w-full flex items-center gap-[50px] pr-[50px]"),t(K,"onclick","toggleElement2('contactform')"),t(_e,"class","text-sm font-bold"),t(Z,"class","w-[299px]"),t(Z,"type","text"),t(Z,"name","name"),t(Z,"placeholder","Your Name"),Z.required=!0,t(ie,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium"),t(Ie,"class","flex-1 flex-col flex items-start gap-2"),t(Se,"class","text-sm font-bold"),t(ee,"class","w-[299px]"),t(ee,"type","email"),t(ee,"name","email"),t(ee,"placeholder","Your email"),ee.required=!0,t(Te,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium"),t(De,"class","flex-1 flex-col flex items-start gap-2"),t(Q,"class","w-[600px] flex justify-center items-center gap-[30px] leading-[26px] text-[#2e3855] font-PublicSans"),t(Be,"class","text-sm font-bold"),t(Qe,"class","w-[299px]"),t(Qe,"type","text"),t(Qe,"name","company"),t(Qe,"placeholder","Your company"),t(et,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium"),t(He,"class","flex-1 flex-col flex items-start gap-2 leading-[26px] text-[#2e3855] font-PublicSans"),t(B,"class","text-sm leading-[26px] font-bold text-[#2e3855] font-PublicSans"),t(oe,"class","text-base leading-[26px] font-medium text-[#909090] font-PublicSans w-[265px]"),S(ke.src,le="/assets/new/chevron-down.svg")||t(ke,"src",le),t(ke,"alt","chevron-down"),t(ke,"class","h-6 w-6"),t(X,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855]"),t(P,"class","flex-1 flex-col flex items-start gap-2"),t(Pe,"class","w-[700px] flex justify-center items-center gap-[30px]"),t(te,"class","text-sm font-bold text-[#2e3855]"),t(ye,"class","w-[664px] min-h-[150px] "),t(ye,"name","message"),ye.required=!0,t(Ue,"class","bg-white min-h-[150px] w-full flex-1 flex items-start gap-2.5 rounded-[6px] p-4 border border-[#2e3855] text-base font-medium text-[#909090]"),t(pe,"class","h-full flex-1 flex-col flex items-start gap-2"),t(Pt,"class","w-[600px] h-5/12 flex justify-center items-center gap-[30px] leading-[26px] font-PublicSans"),t(vt,"type","text"),t(vt,"name","honeypot"),T(vt,"display","none"),t(je,"type","hidden"),t(je,"name","accessKey"),je.value="b3ab5267-ffe0-4a59-be25-07b9a27e4335",t(Mt,"type","hidden"),t(Mt,"name","subject"),Mt.value="PFP Contact us form submission",t(_t,"type","hidden"),t(_t,"name","replyTo"),_t.value="@",t(ce,"type","hidden"),t(ce,"name","redirectTo"),t(ce,"id","redirect"),S(mt.src,Gt="/assets/new/arrow-right-circle.svg")||t(mt,"src",Gt),t(mt,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(mt,"class","h-5 w-5"),t(gt,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(st,"type","submit"),t(N,"class","overflow-hidden flex-col flex justify-center items-center gap-[30px] pb-10 rounded-[20px] z-[2]"),t(Le,"id","contactform"),t(Le,"class","bg-none overflow-hidden duration-300 h-[0px] w-full"),t(Le,"action","https://api.staticforms.xyz/submit"),t(Le,"method","post"),t(ue,"class","bg-[#e7f5f5] w-full pt-[0px] flex-col flex justify-center items-center rounded-[20px] align-top"),t(y,"class","w-full flex-col gap-5 flex items-center"),t(h,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(jt,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(rt.src,Bt="/assets/new/map-pin.svg")||t(rt,"src",Bt),t(rt,"alt","map-pin"),t(rt,"class","h-10 w-10"),t(Et,"class","bg-[#2e3855] flex justify-center items-center gap-2.5 p-5 rounded-[40px]"),t(at,"class","text-xl leading-[34px] font-Poppins w-[390px]"),t(nt,"class","text-sm leading-[26px] font-PublicSans w-[390px]"),S(Dt.src,Qt="/assets/new/map.png")||t(Dt,"src",Qt),t(Dt,"class","mt-5"),t(yt,"href","https://www.google.com/maps/place/78+Pall+Mall,+St.+James's,+London+SW1Y+5ES/@51.5057924,-0.1362653,19z/data=!4m6!3m5!1s0x487604d7477ba0bb:0x5ecb442822d2e0e!8m2!3d51.5056999!4d-0.1359853!16s%2Fg%2F1tj90_zr?entry=ttu"),t(yt,"target","_blank"),t(ve,"class","w-full flex-col flex items-center"),t(bt,"class","w-full flex-col flex items-start gap-2 font-bold text-center text-[#2e3855]"),t(Xe,"class","w-full flex-col flex justify-center items-center gap-6"),t(Ft,"class","h-full bg-[#e7f5f5] flex-1 flex-col flex items-center gap-6 p-10 rounded-[20px]"),S(Rt.src,wt="/assets/new/message-circle.svg")||t(Rt,"src",wt),t(Rt,"alt","message-circle"),t(Rt,"class","h-10 w-10"),t(Lt,"class","bg-[#2e3855] flex justify-center items-center gap-2.5 p-5 rounded-[40px]"),t(it,"class","text-xl leading-[34px] font-Poppins w-[390px]"),t(hs,"class","text-sm leading-[26px] font-PublicSans h-[52px] w-[390px]"),t(Kt,"class","w-full flex-col h-full flex items-start"),t(ls,"class","w-full flex-col flex items-start gap-2 font-bold text-center text-[#2e3855]"),t(Jt,"class","w-full flex-1 flex-col flex items-center gap-6"),t(Ot,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-center gap-6 p-10 pb-20 rounded-[20px]"),t(Je,"class","w-full flex items-start gap-5"),t(os,"class","text-xl leading-[34px] font-bold text-center text-[#2e3855] font-Poppins"),S(us.src,cr="/assets/new/mdi_linkedin.svg")||t(us,"src",cr),t(us,"alt","mdi:linkedin"),t(us,"class","h-10 w-10"),S(Ws.src,Xt="/assets/new/mdi_twitter.svg")||t(Ws,"src",Xt),t(Ws,"alt","mdi:twitter"),t(Ws,"class","h-10 w-10"),S(Ts.src,Mr="/assets/new/mdi_instagram.svg")||t(Ts,"src",Mr),t(Ts,"alt","mdi:instagram"),t(Ts,"class","h-10 w-10"),t(rs,"class","flex justify-center items-center gap-4"),t(ss,"class","w-full flex justify-center items-center gap-10"),t(ds,"class","bg-[#e7f5f5] flex-1 flex-col flex items-center gap-6 p-10 rounded-[20px]"),t(kt,"class","w-full flex items-start gap-5"),t(At,"class","w-full flex-col flex items-center gap-5"),t(Tt,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(m,"class","w-full flex-col flex items-start gap-5"),t(sr,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(ps,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(As.src,Sn="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(As,"src",Sn),t(As,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(As,"class","h-6 w-6"),S(Fs.src,Tn="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Fs,"src",Tn),t(Fs,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Fs,"class","h-6 w-6"),S(ns.src,Vr="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ns,"src",Vr),t(ns,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(ns,"class","h-6 w-6"),t(as,"class","flex items-center gap-5"),t(fs,"class","flex-1 flex justify-end items-center gap-10"),t(Pr,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col w-full flex items-start gap-[60px] max-w-[1060px] rounded-[20px]"),t(l,"class","flex-col flex items-center gap-10 h-fit mt-20")},m(Ys,bs){lt(Ys,l,bs),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,I),e(I,w),e(h,V),e(h,y),e(y,D),e(D,E),e(E,O),e(O,k),e(k,A),e(O,G),e(O,b),e(b,C),e(O,_),e(O,q),e(q,F),e(D,j),e(D,Y),e(Y,R),e(y,ge),e(y,ue),e(ue,K),e(K,U),e(U,re),e(re,Oe),e(U,ze),e(U,we),e(we,ae),e(U,fe),e(U,qe),e(qe,Ee),e(ue,$e),e(ue,Le),e(Le,N),e(N,Q),e(Q,Ie),e(Ie,_e),e(_e,Ce),e(Ie,me),e(Ie,ie),e(ie,Z),e(Q,tt),e(Q,De),e(De,Se),e(Se,ne),e(De,Re),e(De,Te),e(Te,ee),e(N,Ne),e(N,Pe),e(Pe,He),e(He,Be),e(Be,Me),e(He,xe),e(He,et),e(et,Qe),e(Pe,ot),e(Pe,P),e(P,B),e(B,H),e(P,z),e(P,X),e(X,oe),e(oe,J),e(X,Ve),e(X,ke),e(N,be),e(N,Pt),e(Pt,pe),e(pe,te),e(te,Ke),e(pe,Ge),e(pe,Ue),e(Ue,ye),e(N,Ye),e(N,vt),e(N,Ae),e(N,je),e(N,$t),e(N,Mt),e(N,Fe),e(N,_t),e(N,St),e(N,ce),e(N,ut),e(N,st),e(st,gt),e(gt,mt),e(gt,ft),e(y,Ht),e(y,Vt),e(Vt,se),e(m,ht),e(m,Tt),e(Tt,jt),e(jt,pt),e(pt,xt),e(Tt,Nt),e(Tt,At),e(At,Je),e(Je,Ft),e(Ft,Xe),e(Xe,Et),e(Et,rt),e(Xe,es),e(Xe,bt),e(bt,ve),e(ve,at),e(at,qt),e(ve,It),e(ve,nt),e(nt,ct),e(ve,Yt),e(ve,yt),e(yt,Dt),e(Je,Ut),e(Je,Ot),e(Ot,Jt),e(Jt,Lt),e(Lt,Rt),e(Jt,Ns),e(Jt,ls),e(ls,Kt),e(Kt,it),e(it,Zt),e(Kt,is),e(Kt,hs),e(hs,W),e(At,ms),e(At,kt),e(kt,ds),e(ds,ss),e(ss,os),e(os,tr),e(ss,Cr),e(ss,rs),e(rs,us),e(rs,Ss),e(rs,Ws),e(rs,xs),e(rs,Ts),e(i,Dr),e(i,Pr),e(Pr,sr),e(sr,Es),e(Pr,dr),e(Pr,fs),e(fs,ps),e(ps,ta),e(fs,Gr),e(fs,as),e(as,As),e(as,jr),e(as,Fs),e(as,Nr),e(as,ns)},p:We,i:We,o:We,d(Ys){Ys&&a(l)}}}class N6 extends Vn{constructor(l){super(),kn(this,l,null,j6,Wa,{})}}function B6(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,O,k,A,M,G,b,C,_,q,F,L,j,Y,R,$,ge,ue,K,U,re,Oe,he,ze,we,ae,fe,qe,Ee,de,$e,Le,N,Q,Ie,_e,Ce,me,ie,Z,tt,De,Se,ne,Re,Te,ee,Ne;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("Financial options"),x=o(),m=s("div"),h=s("div"),I=s("div"),w=s("img"),y=o(),D=s("div"),E=s("div"),O=s("div"),k=s("div"),A=s("div"),M=f("Funding solutions"),G=o(),b=s("div"),C=f(`If you’re in adopting a power-from-waste project to make use of your current waste and feedback heat and
                  electricity, there are several funding options available to cover the initial costs (CAPEX) required to take
                  your project from feasibility to operation. These options include:
                  `),_=s("ul"),q=s("li"),F=f("Self-funding"),L=o(),j=s("li"),Y=f("Asset finance"),R=o(),$=s("li"),ge=f("Equity funding"),ue=o(),K=s("li"),U=f("Grants"),re=o(),Oe=s("li"),he=f("Government subsidies"),ze=o(),we=s("li"),ae=f("Carbon credits"),fe=o(),qe=s("li"),Ee=f("Plastic credits"),de=f(`
                  Choose the option that best fits your business needs and get your power-from-waste project off the ground today.`),$e=o(),Le=s("div"),N=s("div"),Q=f("Copyright © 2023 Power for Planet"),Ie=o(),_e=s("div"),Ce=s("div"),me=f("Privacy Policy"),ie=o(),Z=s("div"),tt=s("img"),Se=o(),ne=s("img"),Te=o(),ee=s("img"),this.h()},l(Pe){l=r(Pe,"DIV",{class:!0});var He=n(l);i=r(He,"DIV",{class:!0});var Be=n(i);u=r(Be,"DIV",{class:!0});var Me=n(u);v=r(Me,"DIV",{});var xe=n(v);g=p(xe,"Financial options"),xe.forEach(a),Me.forEach(a),x=c(Be),m=r(Be,"DIV",{class:!0});var et=n(m);h=r(et,"DIV",{class:!0});var Qe=n(h);I=r(Qe,"DIV",{class:!0});var ot=n(I);w=r(ot,"IMG",{src:!0,alt:!0,class:!0}),ot.forEach(a),y=c(Qe),D=r(Qe,"DIV",{class:!0});var P=n(D);E=r(P,"DIV",{class:!0});var B=n(E);O=r(B,"DIV",{class:!0});var H=n(O);k=r(H,"DIV",{class:!0});var z=n(k);A=r(z,"DIV",{class:!0});var X=n(A);M=p(X,"Funding solutions"),X.forEach(a),G=c(z),b=r(z,"DIV",{class:!0});var oe=n(b);C=p(oe,`If you’re in adopting a power-from-waste project to make use of your current waste and feedback heat and
                  electricity, there are several funding options available to cover the initial costs (CAPEX) required to take
                  your project from feasibility to operation. These options include:
                  `),_=r(oe,"UL",{class:!0});var J=n(_);q=r(J,"LI",{});var Ve=n(q);F=p(Ve,"Self-funding"),Ve.forEach(a),L=c(J),j=r(J,"LI",{});var ke=n(j);Y=p(ke,"Asset finance"),ke.forEach(a),R=c(J),$=r(J,"LI",{});var le=n($);ge=p(le,"Equity funding"),le.forEach(a),ue=c(J),K=r(J,"LI",{});var be=n(K);U=p(be,"Grants"),be.forEach(a),re=c(J),Oe=r(J,"LI",{});var Pt=n(Oe);he=p(Pt,"Government subsidies"),Pt.forEach(a),ze=c(J),we=r(J,"LI",{});var pe=n(we);ae=p(pe,"Carbon credits"),pe.forEach(a),fe=c(J),qe=r(J,"LI",{});var te=n(qe);Ee=p(te,"Plastic credits"),te.forEach(a),J.forEach(a),de=p(oe,`
                  Choose the option that best fits your business needs and get your power-from-waste project off the ground today.`),oe.forEach(a),z.forEach(a),H.forEach(a),B.forEach(a),P.forEach(a),Qe.forEach(a),et.forEach(a),$e=c(Be),Le=r(Be,"DIV",{class:!0});var Ke=n(Le);N=r(Ke,"DIV",{class:!0});var Ge=n(N);Q=p(Ge,"Copyright © 2023 Power for Planet"),Ge.forEach(a),Ie=c(Ke),_e=r(Ke,"DIV",{class:!0});var Ue=n(_e);Ce=r(Ue,"DIV",{class:!0});var ye=n(Ce);me=p(ye,"Privacy Policy"),ye.forEach(a),ie=c(Ue),Z=r(Ue,"DIV",{class:!0});var Ye=n(Z);tt=r(Ye,"IMG",{src:!0,alt:!0,class:!0}),Se=c(Ye),ne=r(Ye,"IMG",{src:!0,alt:!0,class:!0}),Te=c(Ye),ee=r(Ye,"IMG",{src:!0,alt:!0,class:!0}),Ye.forEach(a),Ue.forEach(a),Ke.forEach(a),Be.forEach(a),He.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),S(w.src,V="/assets/new/illu-costs-31-Frame24-31-Frame24-31-Frame18-31-Savecosts-31-blockrow2-31-wrapper-31-03Greenenergy.svg")||t(w,"src",V),t(w,"alt","illu-costs-31-Frame32-31-Purpose-31-blockrow1-31-Intro-31-wrapper-31-03Greenenergy"),t(w,"class","h-40 w-[186px] mt-28"),t(I,"class","h-full flex-1 flex-col flex justify-center items-center"),t(A,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(_,"class","list-disc p-5 pl-10"),t(b,"class","text-md leading-[26px] font-light font-PublicSans w-[650px]"),t(k,"class","h-full flex-1 flex-col flex items-start gap-[18px]"),t(O,"class","w-full flex justify-end items-start gap-[18px]"),t(E,"class","w-full flex-col flex items-start gap-[18px]"),t(D,"class","flex-1 flex-col flex items-start gap-6 text-[#2e3855]"),t(h,"class","bg-white w-full flex items-start gap-[60px] p-10 rounded-[20px]"),t(m,"class","w-full flex-col flex items-start gap-5"),t(N,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ce,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(tt.src,De="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(tt,"src",De),t(tt,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(tt,"class","h-6 w-6"),S(ne.src,Re="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ne,"src",Re),t(ne,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(ne,"class","h-6 w-6"),S(ee.src,Ne="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ee,"src",Ne),t(ee,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(ee,"class","h-6 w-6"),t(Z,"class","flex items-center gap-5"),t(_e,"class","flex-1 flex justify-end items-center gap-10"),t(Le,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col w-full flex items-start gap-[60px] rounded-[20px] max-w-[1060px]"),t(l,"class","flex-col flex items-center gap-[50px] h-fit mt-20")},m(Pe,He){lt(Pe,l,He),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,I),e(I,w),e(h,y),e(h,D),e(D,E),e(E,O),e(O,k),e(k,A),e(A,M),e(k,G),e(k,b),e(b,C),e(b,_),e(_,q),e(q,F),e(_,L),e(_,j),e(j,Y),e(_,R),e(_,$),e($,ge),e(_,ue),e(_,K),e(K,U),e(_,re),e(_,Oe),e(Oe,he),e(_,ze),e(_,we),e(we,ae),e(_,fe),e(_,qe),e(qe,Ee),e(b,de),e(i,$e),e(i,Le),e(Le,N),e(N,Q),e(Le,Ie),e(Le,_e),e(_e,Ce),e(Ce,me),e(_e,ie),e(_e,Z),e(Z,tt),e(Z,Se),e(Z,ne),e(Z,Te),e(Z,ee)},p:We,i:We,o:We,d(Pe){Pe&&a(l)}}}class q6 extends Vn{constructor(l){super(),kn(this,l,null,B6,Wa,{})}}function R6(d){let l,i,u,v,g,x,m,h,I,w,V,y,D,E,O,k,A,M,G,b,C,_,q,F,L,j,Y,R,$,ge,ue,K,U,re,Oe,he,ze,we,ae,fe,qe,Ee,de,$e,Le,N,Q,Ie,_e,Ce,me,ie,Z,tt,De,Se,ne,Re,Te,ee,Ne,Pe,He,Be,Me,xe,et,Qe,ot,P,B,H,z,X,oe,J,Ve,ke,le,be,Pt,pe,te,Ke,Ge,Ue,ye,Ye,vt,Ae,je,$t,Mt,Fe,_t,St,ce,ut,st,gt,mt,Gt,ft,Ht,Vt,se,ht,Tt,jt,pt,xt,Nt,At,Je,Ft,Xe,Et,rt,Bt,es,bt,ve,at,qt,It,nt,ct,Yt,yt,Dt,Qt,Ut,Ot,Jt;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("Frequently Asked Questions"),x=o(),m=s("div"),h=s("div"),I=s("div"),w=s("div"),V=s("div"),y=s("div"),D=s("div"),E=f("General Questions"),O=o(),k=s("div"),A=f("1. What does your company do?"),M=o(),G=s("div"),b=f(`We facilitate power-from-waste projects by matching businesses with the right technology providers. Our goal
                  is to turn non-recyclable waste into low-cost, green power, and we offer a range of technologies such as
                  anaerobic digestion units, pyrolysis, gasification and AD slurry covers.`),C=o(),_=s("div"),q=f("2. What is power-from-waste?"),F=o(),L=s("div"),j=f(`Power-from-waste refers to the process of generating electricity or heat by treating waste materials. These
                  processes aim to divert waste from landfills while creating a sustainable energy source.`),Y=o(),R=s("div"),$=f("3. Why should I consider power-from-waste solutions?"),ge=o(),ue=s("div"),K=f(`Power-from-waste solutions offer a sustainable way to manage waste and generate green power, reducing both
                  your carbon footprint and your operational costs.`),U=o(),re=s("div"),Oe=f("4. What types of waste can be used?"),he=o(),ze=s("div"),we=f(`We can facilitate solutions for a broad spectrum of non-recyclable waste materials including industrial waste,
                  organic waste, and much more. However, it's worth noting that we are unable to work with e-waste, sand, glass,
                  or ceramics.`),ae=o(),fe=s("div"),qe=f("5. How do I know which technology is best for me?"),Ee=o(),de=s("div"),$e=f(`We have in-house expertise with a deep understanding of a variety of technologies and an extensive network of
                  150+ technology providers. When you provide us with your project parameters, our team will assess your unique
                  requirements. Leveraging our technology-agnostic approach, we will match you with the most appropriate
                  technology and provider for your specific needs, ensuring the best fit for your waste management and power
                  generation goals.`),Le=o(),N=s("div"),Q=f("Calculator Tool"),Ie=o(),_e=s("div"),Ce=f("6. How does the calculator tool work?"),me=o(),ie=s("div"),Z=f(`Our advanced calculator tool is designed to provide you with a comprehensive understanding of your project's
                  scope. By inputting various parameters such as the type and volume of waste, and your energy needs, the tool
                  estimates crucial variables. These include the scale of the project, potential savings, and expected returns
                  on investment (ROI). This helps you to quickly gauge the feasibility and profitability of a power-from-waste
                  solution.`),tt=o(),De=s("div"),Se=f("7. What parameters do I need to input into the calculator?"),ne=o(),Re=s("div"),Te=f("Typically, you'll need to input details like the type and amount of waste generated and your energy needs."),ee=o(),Ne=s("div"),Pe=f("8. Is the calculator free to use?"),He=o(),Be=s("div"),Me=f(`Yes, the calculator is free and open for anyone to use. We understand that obtaining such estimates from
                  technology providers can be a lengthy and cumbersome process. Our tool aims to simplify this, giving you fast,
                  reliable figures to aid in your decision-making.`),xe=o(),et=s("div"),Qe=f("Technology Providers"),ot=o(),P=s("div"),B=f("9. How do you select technology providers?"),H=o(),z=s("div"),X=f(`We have a rigorous selection process that involves comprehensive due diligence, site visits, and performance
                  evaluations. Our team assesses each provider's track record, technology reliability, customer satisfaction,
                  and compliance with environmental regulations. This exhaustive vetting process ensures that we only recommend
                  technology providers who meet our stringent criteria for quality and reliability.`),oe=o(),J=s("div"),Ve=f("10. Can I choose my own technology provider?"),ke=o(),le=s("div"),be=f(`Absolutely. While our platform is optimised to find the best match for your specific needs, we present you
                  with multiple options. This enables you to be a significant part of the decision-making process. If you prefer
                  a particular technology provider, we can certainly incorporate that into the project planning.`),Pt=o(),pe=s("div"),te=f("Costs and Financing"),Ke=o(),Ge=s("div"),Ue=f("13. What are the costs involved?"),ye=o(),Ye=s("div"),vt=f(`Costs can vary widely depending on factors such as the technology used and the scale of the project.
                  Typically, there's an initial cost for a feasibility study, which includes lab analysis of the waste material
                  to determine its suitability for power generation. Other costs include planning & permissions, equipment,
                  installation, and operational expenses.`),Ae=o(),je=s("div"),$t=f("14. Do you offer financing options?"),Mt=o(),Fe=s("div"),_t=f(`We work with financial partners to provide various financing options that can be customised to meet your
                  needs. Please get in contact with us to discuss further.`),St=o(),ce=s("div"),ut=f("Project Implementation"),st=o(),gt=s("div"),mt=f("15. How long does it take to implement a project?"),Gt=o(),ft=s("div"),Ht=f(`The timeline for project implementation can vary based on its complexity and scale. Smaller projects, such as
                  AD slurry covers and anaerobic digestion units, might take as few as 3-6 months to complete. For larger, more
                  complex installations like pyrolysis or gasification plants, the timeline may extend to 12-24 months. This
                  includes the time needed for feasibility studies, procurement, construction, and commissioning of the
                  facility.`),Vt=o(),se=s("div"),ht=f("16. What is the process after we decide to proceed?"),Tt=o(),jt=s("div"),pt=f(`After you decide to proceed, we will facilitate the contract, oversee the implementation, and provide ongoing
                  support to ensure the project's success.`),xt=o(),Nt=s("div"),At=f("If you have any more questions, feel free to "),Je=s("a"),Ft=f("reach out to us"),Xe=f(`
                  . We're here to assist you!`),Et=o(),rt=s("div"),Bt=s("div"),es=f("Copyright © 2023 Power for Planet"),bt=o(),ve=s("div"),at=s("div"),qt=f("Privacy Policy"),It=o(),nt=s("div"),ct=s("img"),yt=o(),Dt=s("img"),Ut=o(),Ot=s("img"),this.h()},l(Lt){l=r(Lt,"DIV",{class:!0});var Rt=n(l);i=r(Rt,"DIV",{class:!0});var wt=n(i);u=r(wt,"DIV",{class:!0});var Ns=n(u);v=r(Ns,"DIV",{});var ls=n(v);g=p(ls,"Frequently Asked Questions"),ls.forEach(a),Ns.forEach(a),x=c(wt),m=r(wt,"DIV",{class:!0});var Kt=n(m);h=r(Kt,"DIV",{class:!0});var it=n(h);I=r(it,"DIV",{class:!0});var Zt=n(I);w=r(Zt,"DIV",{class:!0});var is=n(w);V=r(is,"DIV",{class:!0});var hs=n(V);y=r(hs,"DIV",{class:!0});var W=n(y);D=r(W,"DIV",{class:!0});var ms=n(D);E=p(ms,"General Questions"),ms.forEach(a),O=c(W),k=r(W,"DIV",{class:!0});var kt=n(k);A=p(kt,"1. What does your company do?"),kt.forEach(a),M=c(W),G=r(W,"DIV",{class:!0});var ds=n(G);b=p(ds,`We facilitate power-from-waste projects by matching businesses with the right technology providers. Our goal
                  is to turn non-recyclable waste into low-cost, green power, and we offer a range of technologies such as
                  anaerobic digestion units, pyrolysis, gasification and AD slurry covers.`),ds.forEach(a),C=c(W),_=r(W,"DIV",{class:!0});var ss=n(_);q=p(ss,"2. What is power-from-waste?"),ss.forEach(a),F=c(W),L=r(W,"DIV",{class:!0});var os=n(L);j=p(os,`Power-from-waste refers to the process of generating electricity or heat by treating waste materials. These
                  processes aim to divert waste from landfills while creating a sustainable energy source.`),os.forEach(a),Y=c(W),R=r(W,"DIV",{class:!0});var tr=n(R);$=p(tr,"3. Why should I consider power-from-waste solutions?"),tr.forEach(a),ge=c(W),ue=r(W,"DIV",{class:!0});var Cr=n(ue);K=p(Cr,`Power-from-waste solutions offer a sustainable way to manage waste and generate green power, reducing both
                  your carbon footprint and your operational costs.`),Cr.forEach(a),U=c(W),re=r(W,"DIV",{class:!0});var rs=n(re);Oe=p(rs,"4. What types of waste can be used?"),rs.forEach(a),he=c(W),ze=r(W,"DIV",{class:!0});var us=n(ze);we=p(us,`We can facilitate solutions for a broad spectrum of non-recyclable waste materials including industrial waste,
                  organic waste, and much more. However, it's worth noting that we are unable to work with e-waste, sand, glass,
                  or ceramics.`),us.forEach(a),ae=c(W),fe=r(W,"DIV",{class:!0});var cr=n(fe);qe=p(cr,"5. How do I know which technology is best for me?"),cr.forEach(a),Ee=c(W),de=r(W,"DIV",{class:!0});var Ss=n(de);$e=p(Ss,`We have in-house expertise with a deep understanding of a variety of technologies and an extensive network of
                  150+ technology providers. When you provide us with your project parameters, our team will assess your unique
                  requirements. Leveraging our technology-agnostic approach, we will match you with the most appropriate
                  technology and provider for your specific needs, ensuring the best fit for your waste management and power
                  generation goals.`),Ss.forEach(a),Le=c(W),N=r(W,"DIV",{class:!0});var Ws=n(N);Q=p(Ws,"Calculator Tool"),Ws.forEach(a),Ie=c(W),_e=r(W,"DIV",{class:!0});var Xt=n(_e);Ce=p(Xt,"6. How does the calculator tool work?"),Xt.forEach(a),me=c(W),ie=r(W,"DIV",{class:!0});var xs=n(ie);Z=p(xs,`Our advanced calculator tool is designed to provide you with a comprehensive understanding of your project's
                  scope. By inputting various parameters such as the type and volume of waste, and your energy needs, the tool
                  estimates crucial variables. These include the scale of the project, potential savings, and expected returns
                  on investment (ROI). This helps you to quickly gauge the feasibility and profitability of a power-from-waste
                  solution.`),xs.forEach(a),tt=c(W),De=r(W,"DIV",{class:!0});var Ts=n(De);Se=p(Ts,"7. What parameters do I need to input into the calculator?"),Ts.forEach(a),ne=c(W),Re=r(W,"DIV",{class:!0});var Mr=n(Re);Te=p(Mr,"Typically, you'll need to input details like the type and amount of waste generated and your energy needs."),Mr.forEach(a),ee=c(W),Ne=r(W,"DIV",{class:!0});var Dr=n(Ne);Pe=p(Dr,"8. Is the calculator free to use?"),Dr.forEach(a),He=c(W),Be=r(W,"DIV",{class:!0});var Pr=n(Be);Me=p(Pr,`Yes, the calculator is free and open for anyone to use. We understand that obtaining such estimates from
                  technology providers can be a lengthy and cumbersome process. Our tool aims to simplify this, giving you fast,
                  reliable figures to aid in your decision-making.`),Pr.forEach(a),xe=c(W),et=r(W,"DIV",{class:!0});var sr=n(et);Qe=p(sr,"Technology Providers"),sr.forEach(a),ot=c(W),P=r(W,"DIV",{class:!0});var Es=n(P);B=p(Es,"9. How do you select technology providers?"),Es.forEach(a),H=c(W),z=r(W,"DIV",{class:!0});var dr=n(z);X=p(dr,`We have a rigorous selection process that involves comprehensive due diligence, site visits, and performance
                  evaluations. Our team assesses each provider's track record, technology reliability, customer satisfaction,
                  and compliance with environmental regulations. This exhaustive vetting process ensures that we only recommend
                  technology providers who meet our stringent criteria for quality and reliability.`),dr.forEach(a),oe=c(W),J=r(W,"DIV",{class:!0});var fs=n(J);Ve=p(fs,"10. Can I choose my own technology provider?"),fs.forEach(a),ke=c(W),le=r(W,"DIV",{class:!0});var ps=n(le);be=p(ps,`Absolutely. While our platform is optimised to find the best match for your specific needs, we present you
                  with multiple options. This enables you to be a significant part of the decision-making process. If you prefer
                  a particular technology provider, we can certainly incorporate that into the project planning.`),ps.forEach(a),Pt=c(W),pe=r(W,"DIV",{class:!0});var ta=n(pe);te=p(ta,"Costs and Financing"),ta.forEach(a),Ke=c(W),Ge=r(W,"DIV",{class:!0});var Gr=n(Ge);Ue=p(Gr,"13. What are the costs involved?"),Gr.forEach(a),ye=c(W),Ye=r(W,"DIV",{class:!0});var as=n(Ye);vt=p(as,`Costs can vary widely depending on factors such as the technology used and the scale of the project.
                  Typically, there's an initial cost for a feasibility study, which includes lab analysis of the waste material
                  to determine its suitability for power generation. Other costs include planning & permissions, equipment,
                  installation, and operational expenses.`),as.forEach(a),Ae=c(W),je=r(W,"DIV",{class:!0});var As=n(je);$t=p(As,"14. Do you offer financing options?"),As.forEach(a),Mt=c(W),Fe=r(W,"DIV",{class:!0});var Sn=n(Fe);_t=p(Sn,`We work with financial partners to provide various financing options that can be customised to meet your
                  needs. Please get in contact with us to discuss further.`),Sn.forEach(a),St=c(W),ce=r(W,"DIV",{class:!0});var jr=n(ce);ut=p(jr,"Project Implementation"),jr.forEach(a),st=c(W),gt=r(W,"DIV",{class:!0});var Fs=n(gt);mt=p(Fs,"15. How long does it take to implement a project?"),Fs.forEach(a),Gt=c(W),ft=r(W,"DIV",{class:!0});var Tn=n(ft);Ht=p(Tn,`The timeline for project implementation can vary based on its complexity and scale. Smaller projects, such as
                  AD slurry covers and anaerobic digestion units, might take as few as 3-6 months to complete. For larger, more
                  complex installations like pyrolysis or gasification plants, the timeline may extend to 12-24 months. This
                  includes the time needed for feasibility studies, procurement, construction, and commissioning of the
                  facility.`),Tn.forEach(a),Vt=c(W),se=r(W,"DIV",{class:!0});var Nr=n(se);ht=p(Nr,"16. What is the process after we decide to proceed?"),Nr.forEach(a),Tt=c(W),jt=r(W,"DIV",{class:!0});var ns=n(jt);pt=p(ns,`After you decide to proceed, we will facilitate the contract, oversee the implementation, and provide ongoing
                  support to ensure the project's success.`),ns.forEach(a),xt=c(W),Nt=r(W,"DIV",{class:!0});var Vr=n(Nt);At=p(Vr,"If you have any more questions, feel free to "),Je=r(Vr,"A",{class:!0,href:!0});var Ys=n(Je);Ft=p(Ys,"reach out to us"),Ys.forEach(a),Xe=p(Vr,`
                  . We're here to assist you!`),Vr.forEach(a),W.forEach(a),hs.forEach(a),is.forEach(a),Zt.forEach(a),it.forEach(a),Kt.forEach(a),Et=c(wt),rt=r(wt,"DIV",{class:!0});var bs=n(rt);Bt=r(bs,"DIV",{class:!0});var Bs=n(Bt);es=p(Bs,"Copyright © 2023 Power for Planet"),Bs.forEach(a),bt=c(bs),ve=r(bs,"DIV",{class:!0});var wa=n(ve);at=r(wa,"DIV",{class:!0});var kr=n(at);qt=p(kr,"Privacy Policy"),kr.forEach(a),It=c(wa),nt=r(wa,"DIV",{class:!0});var Wt=n(nt);ct=r(Wt,"IMG",{src:!0,alt:!0,class:!0}),yt=c(Wt),Dt=r(Wt,"IMG",{src:!0,alt:!0,class:!0}),Ut=c(Wt),Ot=r(Wt,"IMG",{src:!0,alt:!0,class:!0}),Wt.forEach(a),wa.forEach(a),bs.forEach(a),wt.forEach(a),Rt.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),t(D,"class","text-3xl leading-[33px] font-bold font-Poppins w-[650px]"),t(k,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(G,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(_,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(L,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(R,"class","text-2xl leading-[33px] font-bold font-Poppins"),t(ue,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(re,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(ze,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(fe,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(de,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(N,"class","text-3xl pt-10 leading-[33px] font-bold font-Poppins w-[650px]"),t(_e,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(ie,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(De,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(Re,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(Ne,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(Be,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(et,"class","text-3xl pt-10 leading-[33px] font-bold font-Poppins w-[650px]"),t(P,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(z,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(J,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(le,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(pe,"class","text-3xl pt-10 leading-[33px] font-bold font-Poppins w-[650px]"),t(Ge,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(Ye,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(je,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(Fe,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(ce,"class","text-3xl pt-10 leading-[33px] font-bold font-Poppins w-[650px]"),t(gt,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(ft,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(se,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(jt,"class","text-md leading-[26px] font-light font-PublicSans w-full"),t(Je,"class","underline text-pfp-green"),t(Je,"href","/contact"),t(Nt,"class","pt-10 text-md leading-[26px] font-light font-PublicSans w-full"),t(y,"class","h-full flex-1 flex-col flex items-start gap-[18px]"),t(V,"class","w-full flex justify-end items-start gap-[18px]"),t(w,"class","w-full flex-col flex items-start gap-[18px]"),t(I,"class","flex-1 flex-col flex items-start gap-6 text-[#2e3855]"),t(h,"class","bg-white w-full flex items-start gap-[60px] p-10 rounded-[20px]"),t(m,"class","w-full flex-col flex items-start gap-5"),t(Bt,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(at,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(ct.src,Yt="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ct,"src",Yt),t(ct,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(ct,"class","h-6 w-6"),S(Dt.src,Qt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Dt,"src",Qt),t(Dt,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Dt,"class","h-6 w-6"),S(Ot.src,Jt="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ot,"src",Jt),t(Ot,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Ot,"class","h-6 w-6"),t(nt,"class","flex items-center gap-5"),t(ve,"class","flex-1 flex justify-end items-center gap-10"),t(rt,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col w-full flex items-start gap-[60px] rounded-[20px] max-w-[1060px]"),t(l,"class","flex-col flex items-center gap-[50px] h-fit mt-20")},m(Lt,Rt){lt(Lt,l,Rt),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,I),e(I,w),e(w,V),e(V,y),e(y,D),e(D,E),e(y,O),e(y,k),e(k,A),e(y,M),e(y,G),e(G,b),e(y,C),e(y,_),e(_,q),e(y,F),e(y,L),e(L,j),e(y,Y),e(y,R),e(R,$),e(y,ge),e(y,ue),e(ue,K),e(y,U),e(y,re),e(re,Oe),e(y,he),e(y,ze),e(ze,we),e(y,ae),e(y,fe),e(fe,qe),e(y,Ee),e(y,de),e(de,$e),e(y,Le),e(y,N),e(N,Q),e(y,Ie),e(y,_e),e(_e,Ce),e(y,me),e(y,ie),e(ie,Z),e(y,tt),e(y,De),e(De,Se),e(y,ne),e(y,Re),e(Re,Te),e(y,ee),e(y,Ne),e(Ne,Pe),e(y,He),e(y,Be),e(Be,Me),e(y,xe),e(y,et),e(et,Qe),e(y,ot),e(y,P),e(P,B),e(y,H),e(y,z),e(z,X),e(y,oe),e(y,J),e(J,Ve),e(y,ke),e(y,le),e(le,be),e(y,Pt),e(y,pe),e(pe,te),e(y,Ke),e(y,Ge),e(Ge,Ue),e(y,ye),e(y,Ye),e(Ye,vt),e(y,Ae),e(y,je),e(je,$t),e(y,Mt),e(y,Fe),e(Fe,_t),e(y,St),e(y,ce),e(ce,ut),e(y,st),e(y,gt),e(gt,mt),e(y,Gt),e(y,ft),e(ft,Ht),e(y,Vt),e(y,se),e(se,ht),e(y,Tt),e(y,jt),e(jt,pt),e(y,xt),e(y,Nt),e(Nt,At),e(Nt,Je),e(Je,Ft),e(Nt,Xe),e(i,Et),e(i,rt),e(rt,Bt),e(Bt,es),e(rt,bt),e(rt,ve),e(ve,at),e(at,qt),e(ve,It),e(ve,nt),e(nt,ct),e(nt,yt),e(nt,Dt),e(nt,Ut),e(nt,Ot)},p:We,i:We,o:We,d(Lt){Lt&&a(l)}}}class $6 extends Vn{constructor(l){super(),kn(this,l,null,R6,Wa,{})}}function H6(d){let l;const i=d[2].default,u=A_(i,d,d[3],null);return{c(){u&&u.c()},l(v){u&&u.l(v)},m(v,g){u&&u.m(v,g),l=!0},p(v,g){u&&u.p&&(!l||g&8)&&F_(u,i,v,v[3],l?L_(i,v[3],g,null):O_(v[3]),null)},i(v){l||(Hs(u,v),l=!0)},o(v){Us(u,v),l=!1},d(v){u&&u.d(v)}}}function U6(d){let l,i;return l=new $6({}),{c(){nl(l.$$.fragment)},l(u){ll(l.$$.fragment,u)},m(u,v){il(l,u,v),i=!0},p:We,i(u){i||(Hs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){ol(l,u)}}}function W6(d){let l,i;return l=new q6({}),{c(){nl(l.$$.fragment)},l(u){ll(l.$$.fragment,u)},m(u,v){il(l,u,v),i=!0},p:We,i(u){i||(Hs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){ol(l,u)}}}function Y6(d){let l,i;return l=new N6({}),{c(){nl(l.$$.fragment)},l(u){ll(l.$$.fragment,u)},m(u,v){il(l,u,v),i=!0},p:We,i(u){i||(Hs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){ol(l,u)}}}function z6(d){let l,i;return l=new KE({}),{c(){nl(l.$$.fragment)},l(u){ll(l.$$.fragment,u)},m(u,v){il(l,u,v),i=!0},p:We,i(u){i||(Hs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){ol(l,u)}}}function K6(d){let l,i;return l=new YE({}),{c(){nl(l.$$.fragment)},l(u){ll(l.$$.fragment,u)},m(u,v){il(l,u,v),i=!0},p:We,i(u){i||(Hs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){ol(l,u)}}}function J6(d){let l,i;return l=new V6({}),{c(){nl(l.$$.fragment)},l(u){ll(l.$$.fragment,u)},m(u,v){il(l,u,v),i=!0},p:We,i(u){i||(Hs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){ol(l,u)}}}function X6(d){let l,i;return l=new G6({}),{c(){nl(l.$$.fragment)},l(u){ll(l.$$.fragment,u)},m(u,v){il(l,u,v),i=!0},p:We,i(u){i||(Hs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){ol(l,u)}}}function Q6(d){let l,i;return l=new C6({}),{c(){nl(l.$$.fragment)},l(u){ll(l.$$.fragment,u)},m(u,v){il(l,u,v),i=!0},p:We,i(u){i||(Hs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){ol(l,u)}}}function Z6(d){let l,i;return l=new O6({}),{c(){nl(l.$$.fragment)},l(u){ll(l.$$.fragment,u)},m(u,v){il(l,u,v),i=!0},p:We,i(u){i||(Hs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){ol(l,u)}}}function e8(d){let l,i;return l=new A6({}),{c(){nl(l.$$.fragment)},l(u){ll(l.$$.fragment,u)},m(u,v){il(l,u,v),i=!0},p:We,i(u){i||(Hs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){ol(l,u)}}}function t8(d){let l,i;return l=new S6({}),{c(){nl(l.$$.fragment)},l(u){ll(l.$$.fragment,u)},m(u,v){il(l,u,v),i=!0},p:We,i(u){i||(Hs(l.$$.fragment,u),i=!0)},o(u){Us(l.$$.fragment,u),i=!1},d(u){ol(l,u)}}}function s8(d){let l,i,u,v;const g=[t8,e8,Z6,Q6,X6,J6,K6,z6,Y6,W6,U6,H6],x=[];function m(h,I){return h[0]=="/news"||h[0]=="/news/"?0:h[0]=="/news-item"||h[0]=="/news-item/"?1:h[0]=="/news-item2"||h[0]=="/news-item2/"?2:h[0]=="/news-item3"||h[0]=="/news-item3/"?3:h[0]=="/news-item4"||h[0]=="/news-item4/"?4:h[0]=="/explore"||h[0]=="/explore/"?5:h[0]=="/about"||h[0]=="/about/"?6:h[0]=="/green-energy"||h[0]=="/green-energy/"?7:h[0]=="/contact"||h[0]=="/contact/"?8:h[0]=="/resources/financial-options"||h[0]=="/resources/financial-options/"?9:h[0]=="/resources/articles"||h[0]=="/resources/articles/"?10:11}return l=m(d),i=x[l]=g[l](d),{c(){i.c(),u=ya()},l(h){i.l(h),u=ya()},m(h,I){x[l].m(h,I),lt(h,u,I),v=!0},p(h,I){let w=l;l=m(h),l===w?x[l].p(h,I):(_2(),Us(x[w],1,1,()=>{x[w]=null}),E2(),i=x[l],i?i.p(h,I):(i=x[l]=g[l](h),i.c()),Hs(i,1),i.m(u.parentNode,u))},i(h){v||(Hs(i),v=!0)},o(h){Us(i),v=!1},d(h){x[l].d(h),h&&a(u)}}}function r8(d){let l,i,u,v,g,x;return l=new _E({}),u=new RE({props:{path:d[0]}}),g=new UE({props:{path:d[0],$$slots:{default:[s8]},$$scope:{ctx:d}}}),{c(){nl(l.$$.fragment),i=o(),nl(u.$$.fragment),v=o(),nl(g.$$.fragment)},l(m){ll(l.$$.fragment,m),i=c(m),ll(u.$$.fragment,m),v=c(m),ll(g.$$.fragment,m)},m(m,h){il(l,m,h),lt(m,i,h),il(u,m,h),lt(m,v,h),il(g,m,h),x=!0},p(m,[h]){const I={};h&1&&(I.path=m[0]),u.$set(I);const w={};h&1&&(w.path=m[0]),h&9&&(w.$$scope={dirty:h,ctx:m}),g.$set(w)},i(m){x||(Hs(l.$$.fragment,m),Hs(u.$$.fragment,m),Hs(g.$$.fragment,m),x=!0)},o(m){Us(l.$$.fragment,m),Us(u.$$.fragment,m),Us(g.$$.fragment,m),x=!1},d(m){ol(l,m),m&&a(i),ol(u,m),m&&a(v),ol(g,m)}}}function a8(d,l,i){let{$$slots:u={},$$scope:v}=l,{data:g}=l,{res:x,path:m}=g;return lE.set(x),iE.set(aE(x)),C_(()=>pE({immediate:!0,onRegistered:h=>h&&setInterval(async()=>await h.update(),198964),onRegisterError:h=>console.error(h)})),m[m.length-1]=="/"&&(m=m.slice(0,-1)),d.$$set=h=>{"data"in h&&i(1,g=h.data),"$$scope"in h&&i(3,v=h.$$scope)},d.$$.update=()=>{d.$$.dirty&2&&g&&i(0,m=g.path)},[m,g,u,v]}class u8 extends Vn{constructor(l){super(),kn(this,l,a8,r8,Wa,{data:1})}}export{u8 as component,d8 as universal};
