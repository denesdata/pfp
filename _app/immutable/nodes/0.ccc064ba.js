import{S as In,i as Dn,s as ja,e as da,C as o2,h as a,D as e,E as Be,k as s,l as r,n as t,b as Ze,a as o,y as tl,c,z as sl,A as rl,g as Gs,d as Ms,B as al,F as fg,q as f,m as n,r as p,G as Ot,H as zh,u as vg,I as M_,J as qc,v as c2,f as d2,K as j_,L as N_,M as Ud,N as Hd,O as S,P as p_,Q as v_,R as g_,T as h_,p as T,o as m_}from"../chunks/index.6a262c57.js";import{g as B_}from"../chunks/posts.16605cee.js";import{f as mm,a as zu,h as n0,p as l0,b as dg,s as Ow,t as R_,c as Vr,d as Lw,e as q_,g as $_}from"../chunks/icon.be9d742a.js";import{_ as U_}from"../chunks/preload-helper.a4192956.js";import{p as H_}from"../chunks/stores.dae553b9.js";const Y_=!0,W_="always",z_=async({url:d,fetch:l})=>({path:d.pathname,res:await l("/posts.json").then(i=>i.json())}),Y6=Object.freeze(Object.defineProperty({__proto__:null,load:z_,prerender:Y_,trailingSlash:W_},Symbol.toStringTag,{value:"Module"}));function K_(d={}){const{immediate:l=!1,onNeedRefresh:i,onOfflineReady:u,onRegistered:v,onRegisteredSW:g,onRegisterError:x}=d;let m,h;const E=async(P=!0)=>{await h};async function y(){if("serviceWorker"in navigator){const{Workbox:P}=await U_(()=>import("../chunks/workbox-window.prod.es5.08b2315b.js"),[],import.meta.url);m=new P("./sw.js",{scope:"/",type:"classic"}),m.addEventListener("activated",D=>{(D.isUpdate||D.isExternal)&&window.location.reload()}),m.addEventListener("installed",D=>{D.isUpdate||u==null||u()}),m.register({immediate:l}).then(D=>{g?g("./sw.js",D):v==null||v(D)}).catch(D=>{x==null||x(D)})}}return h=y(),E}function J_(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(l,"rel","shortcut icon"),t(l,"href",mm.src),t(l,"sizes",mm.sizes),t(l,"type",mm.type)},m(i,u){Ze(i,l,u)},p:Be,d(i){i&&a(l)}}}function X_(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(l,"rel","apple-touch-icon"),t(l,"href",zu[180].src),t(l,"sizes",zu[180].sizes),t(l,"type",zu[180].type)},m(i,u){Ze(i,l,u)},p:Be,d(i){i&&a(l)}}}function Q_(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(l,"rel","icon"),t(l,"href",zu[192].src),t(l,"sizes",zu[192].sizes),t(l,"type",zu[192].type)},m(i,u){Ze(i,l,u)},p:Be,d(i){i&&a(l)}}}function Z_(d){let l,i,u,v=mm&&J_(),g=zu[180]&&X_(),x=zu[192]&&Q_();return{c(){v&&v.c(),l=da(),g&&g.c(),i=da(),x&&x.c(),u=da()},l(m){const h=o2("svelte-1kxdj3d",document.head);v&&v.l(h),l=da(),g&&g.l(h),i=da(),x&&x.l(h),u=da(),h.forEach(a)},m(m,h){v&&v.m(document.head,null),e(document.head,l),g&&g.m(document.head,null),e(document.head,i),x&&x.m(document.head,null),e(document.head,u)},p(m,[h]){mm&&v.p(m,h),zu[180]&&g.p(m,h),zu[192]&&x.p(m,h)},i:Be,o:Be,d(m){v&&v.d(m),a(l),g&&g.d(m),a(i),x&&x.d(m),a(u)}}}class eE extends In{constructor(l){super(),Dn(this,l,null,Z_,ja,{})}}function Cw(d,l,i){const u=d.slice();return u[0]=l[i],u}function tE(d){let l,i=n0.me,u=[];for(let v=0;v<i.length;v+=1)u[v]=Gw(Cw(d,i,v));return{c(){for(let v=0;v<u.length;v+=1)u[v].c();l=da()},l(v){for(let g=0;g<u.length;g+=1)u[g].l(v);l=da()},m(v,g){for(let x=0;x<u.length;x+=1)u[x]&&u[x].m(v,g);Ze(v,l,g)},p(v,g){if(g&0){i=n0.me;let x;for(x=0;x<i.length;x+=1){const m=Cw(v,i,x);u[x]?u[x].p(m,g):(u[x]=Gw(m),u[x].c(),u[x].m(l.parentNode,l))}for(;x<u.length;x+=1)u[x].d(1);u.length=i.length}},d(v){fg(u,v),v&&a(l)}}}function Gw(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0}),this.h()},h(){t(l,"rel","me"),t(l,"href",d[0])},m(i,u){Ze(i,l,u)},p:Be,d(i){i&&a(l)}}}function sE(d){let l,i,u;return{c(){l=s("link"),i=o(),u=s("link"),this.h()},l(v){l=r(v,"LINK",{rel:!0,href:!0}),i=c(v),u=r(v,"LINK",{rel:!0,href:!0}),this.h()},h(){t(l,"rel","webmention"),t(l,"href","https://webmention.io/"+l0.comment.webmention.username+"/webmention"),t(u,"rel","pingback"),t(u,"href","https://webmention.io/"+l0.comment.webmention.username+"/xmlrpc")},m(v,g){Ze(v,l,g),Ze(v,i,g),Ze(v,u,g)},p:Be,d(v){v&&a(l),v&&a(i),v&&a(u)}}}function rE(d){var h,E;let l,i,u,v,g,x=n0.me&&tE(d),m=((E=(h=l0.comment)==null?void 0:h.webmention)==null?void 0:E.username)&&sE();return v=new eE({}),{c(){x&&x.c(),l=da(),m&&m.c(),i=da(),u=o(),tl(v.$$.fragment)},l(y){const P=o2("svelte-1592q3p",document.head);x&&x.l(P),l=da(),m&&m.l(P),i=da(),P.forEach(a),u=c(y),sl(v.$$.fragment,y)},m(y,P){x&&x.m(document.head,null),e(document.head,l),m&&m.m(document.head,null),e(document.head,i),Ze(y,u,P),rl(v,y,P),g=!0},p(y,[P]){var D,I;n0.me&&x.p(y,P),(I=(D=l0.comment)==null?void 0:D.webmention)!=null&&I.username&&m.p(y,P)},i(y){g||(Gs(v.$$.fragment,y),g=!0)},o(y){Ms(v.$$.fragment,y),g=!1},d(y){x&&x.d(y),a(l),m&&m.d(y),a(i),y&&a(u),al(v,y)}}}class aE extends In{constructor(l){super(),Dn(this,l,null,rE,ja,{})}}const nE=(d,l,i,u=i/=100,v=l*Math.min(u,1-u)/100,g=(x,m=(x+d/30)%12)=>Math.round(255*(u-v*Math.max(Math.min(m-3,9-m,1),-1))).toString(16).padStart(2,"0"))=>`#${g(0)}${g(8)}${g(4)}`;function Mw(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u[13]=l[i].children,u}function jw(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u}function Nw(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u[13]=l[i].children,u}function Bw(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u}function lE(d){let l,i,u=d[11]+"",v,g,x,m,h,E,y=d[13],P=[];for(let D=0;D<y.length;D+=1)P[D]=Rw(Bw(d,y,D));return{c(){l=s("li"),i=s("span"),v=f(u),g=o(),x=s("span"),m=o(),h=s("ul");for(let D=0;D<P.length;D+=1)P[D].c();E=o(),this.h()},l(D){l=r(D,"LI",{tabindex:!0});var I=n(l);i=r(I,"SPAN",{class:!0});var _=n(i);v=p(_,u),g=c(_),x=r(_,"SPAN",{class:!0}),n(x).forEach(a),_.forEach(a),m=c(I),h=r(I,"UL",{class:!0});var F=n(h);for(let k=0;k<P.length;k+=1)P[k].l(F);F.forEach(a),E=c(I),I.forEach(a),this.h()},h(){t(x,"class","i-heroicons-solid-chevron-right mr-2"),t(i,"class","justify-between gap-1 max-w-[13rem]"),Ot(i,"font-bold",d[13].some(d[6])),t(h,"class","bg-base-100 text-base-content shadow-lg p-2"),t(l,"tabindex","0")},m(D,I){Ze(D,l,I),e(l,i),e(i,v),e(i,g),e(i,x),e(l,m),e(l,h);for(let _=0;_<P.length;_+=1)P[_]&&P[_].m(h,null);e(l,E)},p(D,I){if(I&1&&u!==(u=D[11]+"")&&vg(v,u),I&3&&Ot(i,"font-bold",D[13].some(D[6])),I&3){y=D[13];let _;for(_=0;_<y.length;_+=1){const F=Bw(D,y,_);P[_]?P[_].p(F,I):(P[_]=Rw(F),P[_].c(),P[_].m(h,null))}for(;_<P.length;_+=1)P[_].d(1);P.length=y.length}},d(D){D&&a(l),fg(P,D)}}}function iE(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{href:!0});var E=n(i);v=p(E,u),E.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"href",g=d[12]),Ot(i,"font-bold",d[12]===d[1])},m(m,h){Ze(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&vg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&Ot(i,"font-bold",m[12]===m[1])},d(m){m&&a(l)}}}function Rw(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{href:!0});var E=n(i);v=p(E,u),E.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"href",g=d[12]),Ot(i,"font-bold",d[12]===d[1])},m(m,h){Ze(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&vg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&Ot(i,"font-bold",m[12]===m[1])},d(m){m&&a(l)}}}function qw(d){let l;function i(g,x){if(g[12]&&!g[13])return iE;if(g[13])return lE}let u=i(d),v=u&&u(d);return{c(){v&&v.c(),l=da()},l(g){v&&v.l(g),l=da()},m(g,x){v&&v.m(g,x),Ze(g,l,x)},p(g,x){u===(u=i(g))&&v?v.p(g,x):(v&&v.d(1),v=u&&u(g),v&&(v.c(),v.m(l.parentNode,l)))},d(g){v&&v.d(g),g&&a(l)}}}function oE(d){return{c:Be,l:Be,m:Be,d:Be}}function cE(d){let l,i,u=d[11]+"",v,g,x,m,h,E,y=d[13],P=[];for(let D=0;D<y.length;D+=1)P[D]=$w(jw(d,y,D));return{c(){l=s("li"),i=s("span"),v=f(u),g=o(),x=s("span"),m=o(),h=s("ul");for(let D=0;D<P.length;D+=1)P[D].c();E=o(),this.h()},l(D){l=r(D,"LI",{});var I=n(l);i=r(I,"SPAN",{class:!0});var _=n(i);v=p(_,u),g=c(_),x=r(_,"SPAN",{class:!0}),n(x).forEach(a),_.forEach(a),m=c(I),h=r(I,"UL",{tabindex:!0,class:!0});var F=n(h);for(let k=0;k<P.length;k+=1)P[k].l(F);F.forEach(a),E=c(I),I.forEach(a),this.h()},h(){t(x,"class","i-heroicons-solid-chevron-down -mr-1"),t(i,"class","!rounded-btn gap-3"),Ot(i,"font-bold",d[13].some(d[8])),Ot(i,"text-pfp-green",d[13].some(d[9])),t(h,"tabindex","0"),t(h,"class","menu rounded-box bg-base-100 text-base-content shadow-lg p-2")},m(D,I){Ze(D,l,I),e(l,i),e(i,v),e(i,g),e(i,x),e(l,m),e(l,h);for(let _=0;_<P.length;_+=1)P[_]&&P[_].m(h,null);e(l,E)},p(D,I){if(I&1&&u!==(u=D[11]+"")&&vg(v,u),I&3&&Ot(i,"font-bold",D[13].some(D[8])),I&3&&Ot(i,"text-pfp-green",D[13].some(D[9])),I&3){y=D[13];let _;for(_=0;_<y.length;_+=1){const F=jw(D,y,_);P[_]?P[_].p(F,I):(P[_]=$w(F),P[_].c(),P[_].m(h,null))}for(;_<P.length;_+=1)P[_].d(1);P.length=y.length}},d(D){D&&a(l),fg(P,D)}}}function dE(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{class:!0,href:!0});var E=n(i);v=p(E,u),E.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"class","!rounded-btn"),t(i,"href",g=d[12]),Ot(i,"font-bold",d[12]===d[1]),Ot(i,"text-pfp-green",d[12]===d[1])},m(m,h){Ze(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&vg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&Ot(i,"font-bold",m[12]===m[1]),h&3&&Ot(i,"text-pfp-green",m[12]===m[1])},d(m){m&&a(l)}}}function $w(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{href:!0});var E=n(i);v=p(E,u),E.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"href",g=d[12]),Ot(i,"font-bold",d[12]===d[1]),Ot(i,"text-pfp-green",d[12]===d[1])},m(m,h){Ze(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&vg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&Ot(i,"font-bold",m[12]===m[1]),h&3&&Ot(i,"text-pfp-green",m[12]===m[1])},d(m){m&&a(l)}}}function Uw(d){let l;function i(g,x){if(g[12]&&!g[13])return dE;if(g[13])return cE}let u=i(d),v=u&&u(d);return{c(){v&&v.c(),l=da()},l(g){v&&v.l(g),l=da()},m(g,x){v&&v.m(g,x),Ze(g,l,x)},p(g,x){u===(u=i(g))&&v?v.p(g,x):(v&&v.d(1),v=u&&u(g),v&&(v.c(),v.m(l.parentNode,l)))},d(g){v&&v.d(g),g&&a(l)}}}function uE(d){let l,i,u,v,g,x,m,h,E,y,P,D,I,_,F=d[0],k=[];for(let b=0;b<F.length;b+=1)k[b]=qw(Nw(d,F,b));let A=d[5]&&oE(),G=d[0],j=[];for(let b=0;b<G.length;b+=1)j[b]=Uw(Mw(d,G,b));return{c(){l=s("div"),i=s("label"),u=s("span"),v=o(),g=s("ul");for(let b=0;b<k.length;b+=1)k[b].c();x=o(),m=s("div"),h=s("button"),A&&A.c(),E=o(),y=f(d[2]),P=o(),D=s("ul");for(let b=0;b<j.length;b+=1)j[b].c();this.h()},l(b){l=r(b,"DIV",{class:!0});var L=n(l);i=r(L,"LABEL",{for:!0,tabindex:!0,class:!0});var w=n(i);u=r(w,"SPAN",{class:!0}),n(u).forEach(a),w.forEach(a),v=c(L),g=r(L,"UL",{id:!0,tabindex:!0,class:!0});var R=n(g);for(let W=0;W<k.length;W+=1)k[W].l(R);R.forEach(a),L.forEach(a),x=c(b),m=r(b,"DIV",{class:!0});var O=n(m);h=r(O,"BUTTON",{class:!0});var C=n(h);A&&A.l(C),E=c(C),y=p(C,d[2]),C.forEach(a),P=c(O),D=r(O,"UL",{class:!0});var M=n(D);for(let W=0;W<j.length;W+=1)j[W].l(M);M.forEach(a),O.forEach(a),this.h()},h(){t(u,"class","i-heroicons-outline-menu-alt-1"),t(i,"for","navbar-dropdown"),t(i,"tabindex","0"),t(i,"class","btn btn-square btn-ghost"),t(g,"id","navbar-dropdown"),t(g,"tabindex","0"),t(g,"class","menu menu-compact dropdown-content bg-base-100 text-base-content shadow-lg rounded-box min-w-max max-w-52 p-2 "),Ot(g,"hidden",!d[4]),t(l,"class","dropdown lg:hidden"),t(h,"class","swap-on btn btn-ghost text-base font-normal normal-case transition-all duration-200"),Ot(h,"hidden",d[3]<32||!d[2]),t(D,"class","swap-off menu menu-horizontal p-0"),Ot(D,"hidden",d[3]>64&&d[2]),t(m,"class","pl-16 swap order-last hidden lg:inline-grid"),Ot(m,"swap-active",d[3]>32&&d[2])},m(b,L){Ze(b,l,L),e(l,i),e(i,u),e(l,v),e(l,g);for(let w=0;w<k.length;w+=1)k[w]&&k[w].m(g,null);Ze(b,x,L),Ze(b,m,L),e(m,h),A&&A.m(h,null),e(h,E),e(h,y),e(m,P),e(m,D);for(let w=0;w<j.length;w+=1)j[w]&&j[w].m(D,null);I||(_=zh(h,"click",d[7]),I=!0)},p(b,[L]){if(L&3){F=b[0];let w;for(w=0;w<F.length;w+=1){const R=Nw(b,F,w);k[w]?k[w].p(R,L):(k[w]=qw(R),k[w].c(),k[w].m(g,null))}for(;w<k.length;w+=1)k[w].d(1);k.length=F.length}if(L&16&&Ot(g,"hidden",!b[4]),L&4&&vg(y,b[2]),L&12&&Ot(h,"hidden",b[3]<32||!b[2]),L&3){G=b[0];let w;for(w=0;w<G.length;w+=1){const R=Mw(b,G,w);j[w]?j[w].p(R,L):(j[w]=Uw(R),j[w].c(),j[w].m(D,null))}for(;w<j.length;w+=1)j[w].d(1);j.length=G.length}L&12&&Ot(D,"hidden",b[3]>64&&b[2]),L&12&&Ot(m,"swap-active",b[3]>32&&b[2])},i:Be,o:Be,d(b){b&&a(l),fg(k,b),b&&a(x),b&&a(m),A&&A.d(),fg(j,b),I=!1,_()}}}function fE(d,l,i){let u;M_(d,H_,_=>i(10,u=_));let{nav:v}=l,{path:g}=l,{title:x}=l,{scrollY:m}=l,{pin:h}=l,E=u.url.toString().split("/")[3];const y=({link:_})=>_===g,P=()=>window.scrollTo(0,0),D=({link:_})=>_===g,I=({link:_})=>_===g;return d.$$set=_=>{"nav"in _&&i(0,v=_.nav),"path"in _&&i(1,g=_.path),"title"in _&&i(2,x=_.title),"scrollY"in _&&i(3,m=_.scrollY),"pin"in _&&i(4,h=_.pin)},[v,g,x,m,h,E,y,P,D,I]}class pE extends In{constructor(l){super(),Dn(this,l,fE,uE,ja,{nav:0,path:1,title:2,scrollY:3,pin:4})}}function vE(d){let l,i,u,v,g,x,m;return{c(){l=s("form"),i=s("input"),u=o(),v=s("input"),g=o(),x=s("button"),m=s("span"),this.h()},l(h){l=r(h,"FORM",{action:!0,method:!0,class:!0});var E=n(l);i=r(E,"INPUT",{type:!0,name:!0,class:!0}),u=c(E),v=r(E,"INPUT",{type:!0,name:!0}),g=c(E),x=r(E,"BUTTON",{type:!0,class:!0});var y=n(x);m=r(y,"SPAN",{class:!0}),n(m).forEach(a),y.forEach(a),E.forEach(a),this.h()},h(){var h,E,y,P;t(i,"type","text"),t(i,"name","q"),t(i,"class","input input-ghost input-bordered xl:bg-base-100 xl:text-base-content transition-all w-full h-12"),t(v,"type","hidden"),t(v,"name",((E=(h=dg)==null?void 0:h.search)==null?void 0:E.provider)==="duckduckgo"?"sites":"sitesearch"),v.value=Ow.protocol+Ow.domain,t(m,"class","i-heroicons-outline-search"),t(x,"type","submit"),t(x,"class","btn btn-square btn-ghost ml-2"),t(l,"action",((P=(y=dg)==null?void 0:y.search)==null?void 0:P.provider)==="duckduckgo"?"//duckduckgo.com/":"//google.com/search"),t(l,"method","get"),t(l,"class","flex-1")},m(h,E){Ze(h,l,E),e(l,i),e(l,u),e(l,v),e(l,g),e(l,x),e(x,m)},p:Be,i:Be,o:Be,d(h){h&&a(l)}}}class gE extends In{constructor(l){super(),Dn(this,l,null,vE,ja,{})}}const{document:Hw,window:r2}=N_;function Yw(d,l,i){const u=d.slice();return u[14]=l[i].name,u[15]=l[i].text,u}function hE(d,l,i){const u=d.slice();return u[18]=l[i],u}function mE(d){let l,i,u,v,g,x,m,h,E,y;return i=new gE({}),{c(){l=s("div"),tl(i.$$.fragment),u=o(),v=s("button"),g=s("span"),this.h()},l(P){l=r(P,"DIV",{class:!0});var D=n(l);sl(i.$$.fragment,D),u=c(D),v=r(D,"BUTTON",{tabindex:!0,class:!0});var I=n(v);g=r(I,"SPAN",{class:!0}),n(g).forEach(a),I.forEach(a),D.forEach(a),this.h()},h(){t(g,"class","i-heroicons-outline-x"),t(v,"tabindex","0"),t(v,"class","btn btn-square btn-ghost mr-8"),t(l,"class","navbar")},m(P,D){Ze(P,l,D),rl(i,l,null),e(l,u),e(l,v),e(v,g),h=!0,E||(y=zh(v,"click",d[12]),E=!0)},p:Be,i(P){h||(Gs(i.$$.fragment,P),qc(()=>{h&&(m&&m.end(1),x=Ud(l,Vr,{x:50,duration:300,delay:300}),x.start())}),h=!0)},o(P){Ms(i.$$.fragment,P),x&&x.invalidate(),m=Hd(l,Vr,{x:50,duration:300}),h=!1},d(P){P&&a(l),al(i),P&&m&&m.end(),E=!1,y()}}}function xE(d){let l,i,u,v,g,x,m,h,E,y,P,D,I,_,F,k,A,G=dg.nav&&bE(d),j=dg.search&&yE(d),b=Lw,L=[];for(let w=0;w<b.length;w+=1)L[w]=Ww(Yw(d,b,w));return{c(){l=s("div"),i=s("div"),G&&G.c(),u=o(),v=s("a"),g=s("img"),m=o(),h=s("div"),j&&j.c(),E=o(),y=s("div"),P=s("div"),D=s("span"),I=o(),_=s("ul");for(let w=0;w<L.length;w+=1)L[w].c();this.h()},l(w){l=r(w,"DIV",{class:!0});var R=n(l);i=r(R,"DIV",{class:!0});var O=n(i);G&&G.l(O),u=c(O),v=r(O,"A",{href:!0,class:!0});var C=n(v);g=r(C,"IMG",{src:!0,alt:!0,class:!0}),C.forEach(a),O.forEach(a),m=c(R),h=r(R,"DIV",{class:!0});var M=n(h);j&&j.l(M),E=c(M),y=r(M,"DIV",{id:!0,class:!0});var W=n(y);P=r(W,"DIV",{tabindex:!0,class:!0});var Y=n(P);D=r(Y,"SPAN",{class:!0}),n(D).forEach(a),Y.forEach(a),I=c(W),_=r(W,"UL",{tabindex:!0,class:!0});var q=n(_);for(let oe=0;oe<L.length;oe+=1)L[oe].l(q);q.forEach(a),W.forEach(a),M.forEach(a),R.forEach(a),this.h()},h(){S(g.src,x="/assets/pfp.png")||t(g,"src",x),t(g,"alt","logo"),t(g,"class","u-photo z-14 h-14"),t(v,"href","/"),t(v,"class","btn btn-ghost normal-case text-lg gap-3"),t(i,"class","navbar-start"),t(D,"class","i-heroicons-outline-color-swatch"),t(P,"tabindex","0"),t(P,"class","btn btn-square btn-ghost"),t(_,"tabindex","0"),t(_,"class","flex flex-nowrap shadow-2xl menu dropdown-content bg-base-100 text-base-content rounded-box w-52 p-2 gap-2 overflow-y-auto max-h-[21.5rem]"),Ot(_,"hidden",!d[6]),t(y,"id","change-theme"),t(y,"class","dropdown dropdown-end"),t(h,"class","navbar-end mr-8"),t(l,"class","navbar pl-16")},m(w,R){Ze(w,l,R),e(l,i),G&&G.m(i,null),e(i,u),e(i,v),e(v,g),e(l,m),e(l,h),j&&j.m(h,null),e(h,E),e(h,y),e(y,P),e(P,D),e(y,I),e(y,_);for(let O=0;O<L.length;O+=1)L[O]&&L[O].m(_,null);A=!0},p(w,R){if(dg.nav&&G.p(w,R),dg.search&&j.p(w,R),R&2){b=Lw;let O;for(O=0;O<b.length;O+=1){const C=Yw(w,b,O);L[O]?L[O].p(C,R):(L[O]=Ww(C),L[O].c(),L[O].m(_,null))}for(;O<L.length;O+=1)L[O].d(1);L.length=b.length}(!A||R&64)&&Ot(_,"hidden",!w[6])},i(w){A||(Gs(G),qc(()=>{A&&(k&&k.end(1),F=Ud(l,Vr,{x:-50,duration:300,delay:300}),F.start())}),A=!0)},o(w){Ms(G),F&&F.invalidate(),k=Hd(l,Vr,{x:-50,duration:300}),A=!1},d(w){w&&a(l),G&&G.d(),j&&j.d(),fg(L,w),w&&k&&k.end()}}}function bE(d){let l,i;return l=new pE({props:{path:d[0],title:d[3],pin:d[6],scrollY:d[2],nav:dg.nav}}),{c(){tl(l.$$.fragment)},l(u){sl(l.$$.fragment,u)},m(u,v){rl(l,u,v),i=!0},p(u,v){const g={};v&1&&(g.path=u[0]),v&8&&(g.title=u[3]),v&64&&(g.pin=u[6]),v&4&&(g.scrollY=u[2]),l.$set(g)},i(u){i||(Gs(l.$$.fragment,u),i=!0)},o(u){Ms(l.$$.fragment,u),i=!1},d(u){al(l,u)}}}function yE(d){let l,i,u,v;return{c(){l=s("button"),i=s("span"),this.h()},l(g){l=r(g,"BUTTON",{"aria-label":!0,tabindex:!0,class:!0});var x=n(l);i=r(x,"SPAN",{class:!0}),n(i).forEach(a),x.forEach(a),this.h()},h(){t(i,"class","i-heroicons-outline-search"),t(l,"aria-label","search"),t(l,"tabindex","0"),t(l,"class","btn btn-square btn-ghost")},m(g,x){Ze(g,l,x),e(l,i),u||(v=zh(l,"click",d[10]),u=!0)},p:Be,d(g){g&&a(l),u=!1,v()}}}function wE(d){let l;return{c(){l=s("div"),this.h()},l(i){l=r(i,"DIV",{class:!0}),n(l).forEach(a),this.h()},h(){t(l,"class",`${d[18]} w-1 h-4 rounded-btn`)},m(i,u){Ze(i,l,u)},p:Be,d(i){i&&a(l)}}}function Ww(d){let l,i,u=(d[15]??d[14])+"",v,g,x,m,h,E,y=["bg-primary","bg-secondary","bg-accent","bg-neutral"],P=[];for(let I=0;I<4;I+=1)P[I]=wE(hE(d,y,I));function D(){return d[11](d[14])}return{c(){l=s("button"),i=s("p"),v=f(u),g=o(),x=s("div");for(let I=0;I<4;I+=1)P[I].c();m=o(),this.h()},l(I){l=r(I,"BUTTON",{"data-theme":!0,class:!0});var _=n(l);i=r(_,"P",{class:!0});var F=n(i);v=p(F,u),F.forEach(a),g=c(_),x=r(_,"DIV",{class:!0});var k=n(x);for(let A=0;A<4;A+=1)P[A].l(k);k.forEach(a),m=c(_),_.forEach(a),this.h()},h(){t(i,"class","flex-1 text-left text-base-content group-hover:text-primary-content transition-color"),t(x,"class","grid grid-cols-4 gap-0.5 m-auto"),t(l,"data-theme",d[14]),t(l,"class","btn btn-ghost w-full hover:bg-primary group rounded-lg flex bg-base-100 p-2 transition-all"),Ot(l,"border-2",d[1]===d[14]),Ot(l,"border-primary",d[1]===d[14])},m(I,_){Ze(I,l,_),e(l,i),e(i,v),e(l,g),e(l,x);for(let F=0;F<4;F+=1)P[F]&&P[F].m(x,null);e(l,m),h||(E=zh(l,"click",D),h=!0)},p(I,_){d=I,_&2&&Ot(l,"border-2",d[1]===d[14]),_&2&&Ot(l,"border-primary",d[1]===d[14])},d(I){I&&a(l),fg(P,I),h=!1,E()}}}function _E(d){let l=!1,i=()=>{l=!1},u,v,g,x,m,h,E,y,P,D,I,_,F,k,A,G,j,b;qc(d[9]);const L=[xE,mE],w=[];function R(O,C){return O[5]?1:0}return m=R(d),h=w[m]=L[m](d),{c(){v=s("meta"),g=o(),x=s("header"),h.c(),y=o(),P=s("button"),D=s("div"),_=o(),F=s("div"),k=s("span"),this.h()},l(O){const C=o2("svelte-1g590ms",Hw.head);v=r(C,"META",{name:!0,content:!0}),C.forEach(a),g=c(O),x=r(O,"HEADER",{id:!0,class:!0});var M=n(x);h.l(M),M.forEach(a),y=c(O),P=r(O,"BUTTON",{id:!0,"aria-label":!0,class:!0});var W=n(P);D=r(W,"DIV",{class:!0,style:!0}),n(D).forEach(a),_=c(W),F=r(W,"DIV",{class:!0});var Y=n(F);k=r(Y,"SPAN",{class:!0}),n(k).forEach(a),Y.forEach(a),W.forEach(a),this.h()},h(){t(v,"name","theme-color"),t(v,"content",d[4]),t(x,"id","header"),t(x,"class",E="fixed z-50 w-screen transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[6.5rem] bg-pfp-navy text-white tracking-menu pb-5 pt-5 "+(d[2]>32&&"backdrop-blur border-base-content/10 bg-pfp-navy-100/30 md:bg-pfp-navy/30 text-pfp-navy")),Ot(x,"-translate-y-32",!d[6]&&d[2]>0),t(D,"class","radial-progress text-accent transition-all duration-500 ease-in-out group-hover:text-accent-focus col-start-1 row-start-1"),t(D,"style",I=`--size:4rem; --thickness: 0.25rem; --value:${d[7]};`),t(k,"class","i-heroicons-solid-chevron-up !w-6 !h-6"),t(F,"class","border-4 border-base-content/10 group-hover:border-transparent col-start-1 row-start-1 rounded-full w-full h-full p-4 grid duration-500 ease-in-out"),Ot(F,"border-transparent",d[7]>95),t(P,"id","totop"),t(P,"aria-label","scroll to top"),t(P,"class",A="fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out "+(d[7]>95?"btn-accent shadow-lg":"btn-ghost bg-base-100/30 md:bg-base-200/30")),Ot(P,"translate-y-24",!d[6]||d[2]===0),Ot(P,"opacity-100",d[2])},m(O,C){e(Hw.head,v),Ze(O,g,C),Ze(O,x,C),w[m].m(x,null),Ze(O,y,C),Ze(O,P,C),e(P,D),e(P,_),e(P,F),e(F,k),G=!0,j||(b=[zh(r2,"scroll",()=>{l=!0,clearTimeout(u),u=setTimeout(i,100),d[9]()}),zh(P,"click",d[13])],j=!0)},p(O,[C]){C&4&&!l&&(l=!0,clearTimeout(u),scrollTo(r2.pageXOffset,O[2]),u=setTimeout(i,100)),(!G||C&16)&&t(v,"content",O[4]);let M=m;m=R(O),m===M?w[m].p(O,C):(c2(),Ms(w[M],1,1,()=>{w[M]=null}),d2(),h=w[m],h?h.p(O,C):(h=w[m]=L[m](O),h.c()),Gs(h,1),h.m(x,null)),(!G||C&4&&E!==(E="fixed z-50 w-screen transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[6.5rem] bg-pfp-navy text-white tracking-menu pb-5 pt-5 "+(O[2]>32&&"backdrop-blur border-base-content/10 bg-pfp-navy-100/30 md:bg-pfp-navy/30 text-pfp-navy")))&&t(x,"class",E),(!G||C&68)&&Ot(x,"-translate-y-32",!O[6]&&O[2]>0),(!G||C&128&&I!==(I=`--size:4rem; --thickness: 0.25rem; --value:${O[7]};`))&&t(D,"style",I),(!G||C&128)&&Ot(F,"border-transparent",O[7]>95),(!G||C&128&&A!==(A="fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out "+(O[7]>95?"btn-accent shadow-lg":"btn-ghost bg-base-100/30 md:bg-base-200/30")))&&t(P,"class",A),(!G||C&196)&&Ot(P,"translate-y-24",!O[6]||O[2]===0),(!G||C&132)&&Ot(P,"opacity-100",O[2])},i(O){G||(Gs(h),G=!0)},o(O){Ms(h),G=!1},d(O){a(v),O&&a(g),O&&a(x),w[m].d(),O&&a(y),O&&a(P),j=!1,j_(b)}}}function EE(d,l,i){let{path:u}=l,v,g,x,m=!1,h=!0,E,[y,P]=[0,0];R_.subscribe(A=>i(3,v=A));function D(){i(2,y=r2.pageYOffset)}const I=()=>i(5,m=!m),_=A=>{i(1,g=A),localStorage.setItem("theme",A)},F=()=>i(5,m=!m),k=()=>window.scrollTo(0,0);return d.$$set=A=>{"path"in A&&i(0,u=A.path)},d.$$.update=()=>{d.$$.dirty&2&&g&&(document.documentElement.setAttribute("data-theme",g),i(4,x=nE(...getComputedStyle(document.documentElement).getPropertyValue("--b1").slice(0).replaceAll("%","").split(" ").map(Number)))),d.$$.dirty&260&&y&&(i(6,h=P-y>0||y===0),i(8,P=y),i(7,E=Math.round(y/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*1e4)/100))},[u,g,y,v,x,m,h,E,P,D,I,_,F,k]}class IE extends In{constructor(l){super(),Dn(this,l,EE,_E,ja,{path:0})}}function zw(d){let l,i,u,v;const g=d[2].default,x=p_(g,d,d[1],null);return{c(){l=s("div"),x&&x.c(),this.h()},l(m){l=r(m,"DIV",{class:!0});var h=n(l);x&&x.l(h),h.forEach(a),this.h()},h(){t(l,"class","bg-base-100 md:bg-base-200 min-h-screen pt-16 md:pb-8 lg:pb-16")},m(m,h){Ze(m,l,h),x&&x.m(l,null),v=!0},p(m,h){x&&x.p&&(!v||h&2)&&v_(x,g,m,m[1],v?h_(g,m[1],h,null):g_(m[1]),null)},i(m){v||(Gs(x,m),qc(()=>{v&&(u&&u.end(1),i=Ud(l,Vr,{y:100,duration:300,delay:300}),i.start())}),v=!0)},o(m){Ms(x,m),i&&i.invalidate(),u=Hd(l,Vr,{y:-100,duration:300}),v=!1},d(m){m&&a(l),x&&x.d(m),m&&u&&u.end()}}}function DE(d){let l=d[0],i,u,v=zw(d);return{c(){v.c(),i=da()},l(g){v.l(g),i=da()},m(g,x){v.m(g,x),Ze(g,i,x),u=!0},p(g,[x]){x&1&&ja(l,l=g[0])?(c2(),Ms(v,1,1,Be),d2(),v=zw(g),v.c(),Gs(v,1),v.m(i.parentNode,i)):v.p(g,x)},i(g){u||(Gs(v),u=!0)},o(g){Ms(v),u=!1},d(g){g&&a(i),v.d(g)}}}function VE(d,l,i){let{$$slots:u={},$$scope:v}=l,{path:g=""}=l;return d.$$set=x=>{"path"in x&&i(0,g=x.path),"$$scope"in x&&i(1,v=x.$$scope)},[g,v,u]}class PE extends In{constructor(l){super(),Dn(this,l,VE,DE,ja,{path:0})}}function kE(d){let l,i,u,v,g,x,m,h,E,y,P,D,I,_,F,k,A,G,j,b,L,w,R,O,C,M,W,Y,q,oe,ve,z,$,ae,Ee,ce,Xe,de,te,ge,Ae,Ie,ue,je,fe,N,Q,De=" ",pe,xe,he,le,J,Re,Le,Pe,ee,We,ke,Z,He,me,Ce,Fe,Oe,be,et,Ye,st,V,B,U,K,X,re,H,Se,Te,ne,ye,ut,we,se,qe,$e,Ge,_e,Ue,ct,Ne,Je,jt,Lt,ze,wt,Pt,Ve,lt,rt,Dt,gt,Gt,ft,Nt,Vt,ie,pt,kt,Yt,it,ht,Zt,Tt,at,At,Qe,_t,dt,Wt,es,mt,Me,ot,Mt,Et,xt,vt,Bt,bt,Ft,Jt,Rt,qt,zt,Ct,$t,St,rr,os,Ut,nt,Xt,fs,Ss,Ts,As,It,bs,ts,ps,Pr,Na,rs,ys,Ur,Ys,br,Kt,Fs,Ws,Ba,ua,fa,kr,js,Hr,ws,_s,Vn,Ra,as,zs,ii,qa,Ks,oi,$a,ns,Pn,yr,Js,ar,ci,pa,Qt,Xs,nr,lr,ir,Sr,vs,cs,nl,di,Yr,ss,ui,Tr,Wr,fi,ll,lo,ls,Es,Ar,Ua,Ht,or,wr,cr,Os,Fr,va,kn,il,Qs,is,Rl,pi,ds,zr,Sn,dr,Ha,vi,ur,gs,Zs,Is,Ls,Or,Ya,gi,fr,Ns,Ds,Lr,Tn,An,Wa,hi,hs,Vs,Kr,io,mi,Fn,er,pr,_r,tr,ol,Cr,Jr,Bs,za,Wc,zc,Xr,xi,Wd,oo,bi,vr,us,On,Ln,Ka,yi,wi,ga,gr,co,Kc,Qr,Cn,Jc,_i,ha,Ja,Gn,Xu,uo,Xa,Qa,ma,Ps,xa,fo,Zr,Za,ba,ya,ql,Ei,Ii,$l,Di,Mn,hr,en,jn,tn,Qo,Xc,po,cl,ea,ks,wa,Vi,zd,sr,Er,sn,Pi,ki,rn,an,Ul,dl,ms,_a,Si,Ea,Zo,Qc,mr,Rs,ul,Nn,Cs,Ia,Zc,fl,qs,Ti,Kd,Gr,Mr,Jd,ed,jr,nn;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=f("About us"),m=o(),h=s("div"),E=s("img"),P=o(),D=s("div"),I=s("div"),_=s("div"),F=f("Purpose"),k=o(),A=s("img"),j=o(),b=s("div"),L=s("div"),w=s("div"),R=o(),O=s("div"),C=f(`Our mission is to empower communities and businesses by helping them take control of their energy and
                environmental footprint.`),M=o(),W=s("div"),Y=s("div"),q=s("div"),oe=f(`By choosing to generate power from non-recycled waste, you can achieve supply security, cost control, and
                    environmental improvements while reducing dependence on the grid. Our projects operate continuously,
                    ensuring uninterrupted energy supply. They enable you to establish your own energy pricing while providing
                    eco-friendly electricity, biogas, and hydrogen. Our approach eliminates landfill waste, ocean dumping, and
                    open burning for a greener future.`),ve=o(),z=s("div"),$=s("div"),ae=s("div"),Ee=f("Mission"),ce=o(),Xe=s("div"),de=s("div"),te=s("img"),Ae=o(),Ie=s("div"),ue=s("div"),je=s("div"),fe=o(),N=s("div"),Q=f(`Our innovative digital ecosystem enables you to discover the potential of power generation from non-recycled
                waste across various sectors, including agriculture, food services, manufacturing, and distribution chains.`),pe=f(De),xe=o(),he=s("div"),le=s("div"),J=s("div"),Re=f(`We’ll collaborate with you to develop a tailored project. Our platform streamlines your journey from
                    feasibility to operation by connecting you with essential partners, such as technology providers, materials
                    analysts, funders, permit specialists, and construction and operation teams. No matter the size of your
                    waste output, from thousands of tonnes annually to just a few kilograms daily, we have a technology solution
                    designed to meet your needs.`),Le=o(),Pe=s("div"),ee=s("div"),We=s("div"),ke=f("Vision"),Z=o(),He=s("img"),Ce=o(),Fe=s("div"),Oe=s("div"),be=s("div"),et=o(),Ye=s("div"),st=f("Our vision is founded on the “6R” principles: Reduce, Reuse, Recycle, Repurpose, Regenerate, and Regrowth."),V=o(),B=s("div"),U=s("div"),K=s("div"),X=f(`Reduce consumption and resource use in our daily lives Reuse items until they no longer serve a purpose
                    Recycle all recyclable materials Repurpose non-recycled waste to generate green energy locally Regenerate
                    our environment by adopting circular models focused on nature, including our own by-products like organic
                    fertilizers, char, and biochar Regrowth involves fostering an economy that harmonizes our biosphere and
                    financial ecosystem after applying the first five principles`),re=o(),H=s("div"),Se=s("div"),Te=s("div"),ne=s("div"),ye=f("Meet the team"),ut=o(),we=s("div"),se=s("div"),qe=s("div"),$e=s("div"),Ge=s("img"),Ue=o(),ct=s("div"),Ne=s("div"),Je=s("div"),jt=f("Dermot McKeever"),Lt=o(),ze=s("div"),wt=f("PFP Co-Founder and CEO"),Pt=o(),Ve=s("div"),lt=s("div"),rt=s("div"),Dt=f("BSc"),gt=o(),Gt=s("div"),ft=s("div"),Nt=f("Dip"),Vt=o(),ie=s("div"),pt=s("div"),kt=f("PFS"),Yt=o(),it=s("div"),ht=f(`Dermot studied climatology at Leicester University and has extensive experience in the renewable space.
                  Throughout his career, Dermot has demonstrated expertise in business development by holding senior leadership
                  positions across a wide range of business models, from global enterprises to start-ups such as Nutmeg, a
                  leading digital wealth management platform. He has also held numerous consultancy, board adviser and NED roles
                  and is a published author on leadership.`),Zt=o(),Tt=s("img"),At=o(),Qe=s("div"),_t=s("div"),dt=s("img"),es=o(),mt=s("div"),Me=s("div"),ot=s("div"),Mt=f("James Cole"),Et=o(),xt=s("div"),vt=f("PFP Co-Founder and Chairman"),Bt=o(),bt=s("div"),Ft=s("div"),Jt=s("div"),Rt=f("BSc"),qt=o(),zt=s("div"),Ct=f(`James has over 30 years of experience in real estate development and consultancy for multinational groups in
                  Asia, North America, Continental Europe and the UK. Furthermore, he has invested in and guided businesses in
                  private aviation, real estate investment, and renewable energy. Graduated from the Royal Military Academy
                  Sandhurst, after which he served in The Royal Green Jackets (now Rifles). He co-founded PFP to facilitate and
                  encourage a quantum shift in utilising waste as a green renewable energy source.`),$t=o(),St=s("img"),os=o(),Ut=s("div"),nt=s("div"),Xt=s("div"),fs=s("img"),Ts=o(),As=s("div"),It=s("div"),bs=s("div"),ts=f("Simon Edwards"),ps=o(),Pr=s("div"),Na=f("Senior Consultant"),rs=o(),ys=s("div"),Ur=s("div"),Ys=s("div"),br=f("BSc"),Kt=o(),Fs=s("div"),Ws=f(`Simon, a University of Warwick alumnus, has 30+ years’ experience providing clients across all sectors of the
                  economy with energy reduction/management solutions and electricity/ gas procurement advice. Simon is utilising
                  his vast experience and connections in the energy sector to advise PFP’s clients on the cost savings and
                  impacts of utilising waste as a power source. Additionally, he runs the PFP introducer network, consisting of
                  industry heavyweights tasked with identifying potential projects.`),Ba=o(),ua=s("img"),kr=o(),js=s("div"),Hr=s("div"),ws=s("img"),Vn=o(),Ra=s("div"),as=s("div"),zs=s("div"),ii=f("Alice Chave"),qa=o(),Ks=s("div"),oi=f("Environmental and Technical Engineer"),$a=o(),ns=s("div"),Pn=f(`Alice holds a Master of Science in Engineering for International Development from the University College
                  London, complemented with a Bachelors in Environmental Engineering. Throughout her academic and professional
                  journey, she has been involved in international development projects, focusing on designing off-grid solutions
                  to benefit communities in the developing world.`),yr=o(),Js=s("img"),ci=o(),pa=s("div"),Qt=s("div"),Xs=s("div"),nr=s("img"),ir=o(),Sr=s("div"),vs=s("div"),cs=s("div"),nl=f("Tim Edwards"),di=o(),Yr=s("div"),ss=f("Strategy Executive"),ui=o(),Tr=s("div"),Wr=f(`Tim is an economist with specialised skills in data, analytics, and strategy. He applies his understanding of
                  economic principles to analyse data and develop effective strategies for PFP’s clients. A University of
                  Bristol graduate, Tim boasts an accolade from The Chartered Banker Institute’s essay competition, where his
                  piece on how finance professionals can help achieve society’s goals on climate change was published alongside
                  distinguished academics, business leaders, and politicians.`),fi=o(),ll=s("img"),ls=o(),Es=s("div"),Ar=s("div"),Ua=s("img"),or=o(),wr=s("div"),cr=s("div"),Os=s("div"),Fr=f("Paul Lee"),va=o(),kn=s("div"),il=f("Chief Resilience Officer"),Qs=o(),is=s("div"),Rl=f(`Paul is an experienced Information Security Leader with expertise in FinTech and cryptocurrency. With 19 years
                  of experience in the UK and US, he has directed the infrastructure for a leading Security Certificate
                  Authority. Passionate about renewable energy and carbon-negative initiatives, he holds degrees from the
                  universities of Leeds and Liverpool, making a valuable asset to our team.`),pi=o(),ds=s("img"),Sn=o(),dr=s("div"),Ha=s("div"),vi=f("Advisory board"),ur=o(),gs=s("div"),Zs=s("div"),Is=s("div"),Ls=s("div"),Or=s("img"),gi=o(),fr=s("div"),Ns=s("div"),Ds=s("div"),Lr=f("Dr. Linda Hilton"),Tn=o(),An=s("div"),Wa=f("Board Advisor"),hi=o(),hs=s("div"),Vs=s("div"),Kr=s("div"),io=f("PhD"),mi=o(),Fn=s("div"),er=s("div"),pr=f("CChem"),_r=o(),tr=s("div"),ol=s("div"),Cr=f("FRSC"),Jr=o(),Bs=s("div"),za=s("div"),Wc=f("CSci"),zc=o(),Xr=s("div"),xi=f(`Linda brings a unique blend of strategy, science, technology and management expertise gained across various
                  sectors including FMCG, IT, engineering, nuclear, environmental and renewables. Capable of offering both
                  strategic and operational insight, Linda has worked in a variety of different roles and environments around
                  the world for large corporates, research organisations, SME’s, spin-offs and start-ups (social enterprise) and
                  is passionate about using this experience to help people to mitigate climate change.`),Wd=o(),oo=s("img"),vr=o(),us=s("div"),On=s("div"),Ln=s("img"),yi=o(),wi=s("div"),ga=s("div"),gr=s("div"),co=f("Alexandre Chavarot"),Kc=o(),Qr=s("div"),Cn=f("Board Advisor"),Jc=o(),_i=s("div"),ha=f(`Alexandre, a UK-based independent climate and energy transition finance professional offers expert advisory
                  services to a diverse range of clients, including corporates, asset owners and managers, government entities,
                  and foundations. His background spans project and corporate acquisitions, risk assessments, investments, and
                  financings in the energy, infrastructure, and maritime sectors, working with leading investment banks,
                  foundations, and advisory firms. Alexandre holds degrees from prestigious institutions, including Sciences Po,
                  Harvard, and INSEAD. His passion for addressing climate change and sustainable development make him a vital
                  contributor to the ongoing global transition to a more sustainable future.`),Ja=o(),Gn=s("img"),uo=o(),Xa=s("div"),Qa=s("div"),ma=s("div"),Ps=s("img"),fo=o(),Zr=s("div"),Za=s("div"),ba=s("div"),ya=f("Jayne Walters"),ql=o(),Ei=s("div"),Ii=f("Board Advisor"),$l=o(),Di=s("div"),Mn=s("div"),hr=s("div"),en=f("BSc"),jn=o(),tn=s("div"),Qo=f(`Jayne is a lawyer with extensive legal experience having been a partner in a major City law firm and General
                  Counsel for property investment, development and financing businesses. Jayne oversees PFP’s compliance with
                  the business’s legal requirements and advises on the contracts required for individual projects. Jayne holds a
                  degree from The University of Cambridge.`),Xc=o(),po=s("img"),ea=o(),ks=s("div"),wa=s("div"),Vi=s("img"),sr=o(),Er=s("div"),sn=s("div"),Pi=s("div"),ki=f("Shanika Amarasekara"),rn=o(),an=s("div"),Ul=f("Board advisor"),dl=o(),ms=s("div"),_a=f(`Shanika was Chief Impact Officer at British Business Bank and an Executive Committee member responsible for
                  ESG, Economics, Policy and Strategy. Recently, Shanika was involved in the creation of both the Coronavirus
                  Business Interruption Loan Scheme (CBILS) and the Future Fund. The scale of both schemes expanded the bank’s
                  balance sheet by ten times. She was appointed General Counsel and Company Secretary and was a founder member
                  of the Senior Management Team which established and launched the bank in 2014. The bank was set up to increase
                  the supply of credit and finance to SMEs, enabling these companies to contribute effectively to the UK
                  economy.`),Si=o(),Ea=s("img"),Qc=o(),mr=s("div"),Rs=s("div"),ul=f("Copyright © 2023 Power for Planet"),Nn=o(),Cs=s("div"),Ia=s("div"),Zc=f("Privacy Policy"),fl=o(),qs=s("div"),Ti=s("img"),Gr=o(),Mr=s("img"),ed=o(),jr=s("img"),this.h()},l(ln){l=r(ln,"DIV",{class:!0});var pl=n(l);i=r(pl,"DIV",{class:!0});var vo=n(i);u=r(vo,"DIV",{class:!0});var Hl=n(u);v=r(Hl,"DIV",{class:!0});var Xd=n(v);g=r(Xd,"DIV",{});var ta=n(g);x=p(ta,"About us"),ta.forEach(a),Xd.forEach(a),m=c(Hl),h=r(Hl,"DIV",{class:!0});var $s=n(h);E=r($s,"IMG",{src:!0,alt:!0,class:!0}),P=c($s),D=r($s,"DIV",{class:!0});var vl=n(D);I=r(vl,"DIV",{class:!0});var Bn=n(I);_=r(Bn,"DIV",{});var Ai=n(_);F=p(Ai,"Purpose"),Ai.forEach(a),k=c(Bn),A=r(Bn,"IMG",{src:!0,alt:!0,class:!0}),Bn.forEach(a),j=c(vl),b=r(vl,"DIV",{class:!0});var Fi=n(b);L=r(Fi,"DIV",{class:!0});var sa=n(L);w=r(sa,"DIV",{class:!0}),n(w).forEach(a),R=c(sa),O=r(sa,"DIV",{class:!0});var Rn=n(O);C=p(Rn,`Our mission is to empower communities and businesses by helping them take control of their energy and
                environmental footprint.`),Rn.forEach(a),M=c(sa),W=r(sa,"DIV",{class:!0});var Qu=n(W);Y=r(Qu,"DIV",{class:!0});var Qd=n(Y);q=r(Qd,"DIV",{class:!0});var go=n(q);oe=p(go,`By choosing to generate power from non-recycled waste, you can achieve supply security, cost control, and
                    environmental improvements while reducing dependence on the grid. Our projects operate continuously,
                    ensuring uninterrupted energy supply. They enable you to establish your own energy pricing while providing
                    eco-friendly electricity, biogas, and hydrogen. Our approach eliminates landfill waste, ocean dumping, and
                    open burning for a greener future.`),go.forEach(a),Qd.forEach(a),Qu.forEach(a),sa.forEach(a),Fi.forEach(a),vl.forEach(a),ve=c($s),z=r($s,"DIV",{class:!0});var Us=n(z);$=r(Us,"DIV",{class:!0});var on=n($);ae=r(on,"DIV",{class:!0});var Zu=n(ae);Ee=p(Zu,"Mission"),Zu.forEach(a),ce=c(on),Xe=r(on,"DIV",{class:!0});var Zd=n(Xe);de=r(Zd,"DIV",{});var ec=n(de);te=r(ec,"IMG",{src:!0,alt:!0,class:!0}),ec.forEach(a),Zd.forEach(a),on.forEach(a),Ae=c(Us),Ie=r(Us,"DIV",{class:!0});var qn=n(Ie);ue=r(qn,"DIV",{class:!0});var cn=n(ue);je=r(cn,"DIV",{class:!0}),n(je).forEach(a),fe=c(cn),N=r(cn,"DIV",{class:!0});var tc=n(N);Q=p(tc,`Our innovative digital ecosystem enables you to discover the potential of power generation from non-recycled
                waste across various sectors, including agriculture, food services, manufacturing, and distribution chains.`),pe=p(tc,De),tc.forEach(a),xe=c(cn),he=r(cn,"DIV",{class:!0});var eu=n(he);le=r(eu,"DIV",{class:!0});var Oi=n(le);J=r(Oi,"DIV",{class:!0});var Da=n(J);Re=p(Da,`We’ll collaborate with you to develop a tailored project. Our platform streamlines your journey from
                    feasibility to operation by connecting you with essential partners, such as technology providers, materials
                    analysts, funders, permit specialists, and construction and operation teams. No matter the size of your
                    waste output, from thousands of tonnes annually to just a few kilograms daily, we have a technology solution
                    designed to meet your needs.`),Da.forEach(a),Oi.forEach(a),eu.forEach(a),cn.forEach(a),qn.forEach(a),Us.forEach(a),Le=c($s),Pe=r($s,"DIV",{class:!0});var $n=n(Pe);ee=r($n,"DIV",{class:!0});var gl=n(ee);We=r(gl,"DIV",{});var ho=n(We);ke=p(ho,"Vision"),ho.forEach(a),Z=c(gl),He=r(gl,"IMG",{src:!0,alt:!0,class:!0}),gl.forEach(a),Ce=c($n),Fe=r($n,"DIV",{class:!0});var ef=n(Fe);Oe=r(ef,"DIV",{class:!0});var Un=n(Oe);be=r(Un,"DIV",{class:!0}),n(be).forEach(a),et=c(Un),Ye=r(Un,"DIV",{class:!0});var hl=n(Ye);st=p(hl,"Our vision is founded on the “6R” principles: Reduce, Reuse, Recycle, Repurpose, Regenerate, and Regrowth."),hl.forEach(a),V=c(Un),B=r(Un,"DIV",{class:!0});var mo=n(B);U=r(mo,"DIV",{class:!0});var xo=n(U);K=r(xo,"DIV",{class:!0});var Va=n(K);X=p(Va,`Reduce consumption and resource use in our daily lives Reuse items until they no longer serve a purpose
                    Recycle all recyclable materials Repurpose non-recycled waste to generate green energy locally Regenerate
                    our environment by adopting circular models focused on nature, including our own by-products like organic
                    fertilizers, char, and biochar Regrowth involves fostering an economy that harmonizes our biosphere and
                    financial ecosystem after applying the first five principles`),Va.forEach(a),xo.forEach(a),mo.forEach(a),Un.forEach(a),ef.forEach(a),$n.forEach(a),$s.forEach(a),re=c(Hl),H=r(Hl,"DIV",{class:!0});var Hn=n(H);Se=r(Hn,"DIV",{class:!0});var dn=n(Se);Te=r(dn,"DIV",{class:!0});var tu=n(Te);ne=r(tu,"DIV",{});var sc=n(ne);ye=p(sc,"Meet the team"),sc.forEach(a),tu.forEach(a),ut=c(dn),we=r(dn,"DIV",{class:!0});var ml=n(we);se=r(ml,"DIV",{class:!0});var rc=n(se);qe=r(rc,"DIV",{class:!0});var xl=n(qe);$e=r(xl,"DIV",{class:!0});var Yl=n($e);Ge=r(Yl,"IMG",{src:!0,alt:!0,class:!0}),Ue=c(Yl),ct=r(Yl,"DIV",{class:!0});var Yn=n(ct);Ne=r(Yn,"DIV",{class:!0});var Pa=n(Ne);Je=r(Pa,"DIV",{class:!0});var bo=n(Je);jt=p(bo,"Dermot McKeever"),bo.forEach(a),Lt=c(Pa),ze=r(Pa,"DIV",{class:!0});var Li=n(ze);wt=p(Li,"PFP Co-Founder and CEO"),Li.forEach(a),Pa.forEach(a),Pt=c(Yn),Ve=r(Yn,"DIV",{class:!0});var un=n(Ve);lt=r(un,"DIV",{class:!0});var bl=n(lt);rt=r(bl,"DIV",{});var ka=n(rt);Dt=p(ka,"BSc"),ka.forEach(a),bl.forEach(a),gt=c(un),Gt=r(un,"DIV",{class:!0});var yl=n(Gt);ft=r(yl,"DIV",{});var su=n(ft);Nt=p(su,"Dip"),su.forEach(a),yl.forEach(a),Vt=c(un),ie=r(un,"DIV",{class:!0});var Wl=n(ie);pt=r(Wl,"DIV",{});var Wn=n(pt);kt=p(Wn,"PFS"),Wn.forEach(a),Wl.forEach(a),un.forEach(a),Yn.forEach(a),Yl.forEach(a),Yt=c(xl),it=r(xl,"DIV",{class:!0});var ru=n(it);ht=p(ru,`Dermot studied climatology at Leicester University and has extensive experience in the renewable space.
                  Throughout his career, Dermot has demonstrated expertise in business development by holding senior leadership
                  positions across a wide range of business models, from global enterprises to start-ups such as Nutmeg, a
                  leading digital wealth management platform. He has also held numerous consultancy, board adviser and NED roles
                  and is a published author on leadership.`),ru.forEach(a),Zt=c(xl),Tt=r(xl,"IMG",{src:!0}),xl.forEach(a),At=c(rc),Qe=r(rc,"DIV",{class:!0});var Ci=n(Qe);_t=r(Ci,"DIV",{class:!0});var Ir=n(_t);dt=r(Ir,"IMG",{src:!0,alt:!0,class:!0}),es=c(Ir),mt=r(Ir,"DIV",{class:!0});var fn=n(mt);Me=r(fn,"DIV",{class:!0});var Sa=n(Me);ot=r(Sa,"DIV",{class:!0});var Gi=n(ot);Mt=p(Gi,"James Cole"),Gi.forEach(a),Et=c(Sa),xt=r(Sa,"DIV",{class:!0});var zl=n(xt);vt=p(zl,"PFP Co-Founder and Chairman"),zl.forEach(a),Sa.forEach(a),Bt=c(fn),bt=r(fn,"DIV",{class:!0});var Mi=n(bt);Ft=r(Mi,"DIV",{class:!0});var tf=n(Ft);Jt=r(tf,"DIV",{});var yo=n(Jt);Rt=p(yo,"BSc"),yo.forEach(a),tf.forEach(a),Mi.forEach(a),fn.forEach(a),Ir.forEach(a),qt=c(Ci),zt=r(Ci,"DIV",{class:!0});var Ta=n(zt);Ct=p(Ta,`James has over 30 years of experience in real estate development and consultancy for multinational groups in
                  Asia, North America, Continental Europe and the UK. Furthermore, he has invested in and guided businesses in
                  private aviation, real estate investment, and renewable energy. Graduated from the Royal Military Academy
                  Sandhurst, after which he served in The Royal Green Jackets (now Rifles). He co-founded PFP to facilitate and
                  encourage a quantum shift in utilising waste as a green renewable energy source.`),Ta.forEach(a),$t=c(Ci),St=r(Ci,"IMG",{src:!0}),Ci.forEach(a),rc.forEach(a),os=c(ml),Ut=r(ml,"DIV",{class:!0});var Kl=n(Ut);nt=r(Kl,"DIV",{class:!0});var wo=n(nt);Xt=r(wo,"DIV",{class:!0});var wl=n(Xt);fs=r(wl,"IMG",{src:!0,alt:!0,class:!0}),Ts=c(wl),As=r(wl,"DIV",{class:!0});var zn=n(As);It=r(zn,"DIV",{class:!0});var Hs=n(It);bs=r(Hs,"DIV",{class:!0});var ra=n(bs);ts=p(ra,"Simon Edwards"),ra.forEach(a),ps=c(Hs),Pr=r(Hs,"DIV",{class:!0});var _l=n(Pr);Na=p(_l,"Senior Consultant"),_l.forEach(a),Hs.forEach(a),rs=c(zn),ys=r(zn,"DIV",{class:!0});var sf=n(ys);Ur=r(sf,"DIV",{class:!0});var au=n(Ur);Ys=r(au,"DIV",{});var aa=n(Ys);br=p(aa,"BSc"),aa.forEach(a),au.forEach(a),sf.forEach(a),zn.forEach(a),wl.forEach(a),Kt=c(wo),Fs=r(wo,"DIV",{class:!0});var ji=n(Fs);Ws=p(ji,`Simon, a University of Warwick alumnus, has 30+ years’ experience providing clients across all sectors of the
                  economy with energy reduction/management solutions and electricity/ gas procurement advice. Simon is utilising
                  his vast experience and connections in the energy sector to advise PFP’s clients on the cost savings and
                  impacts of utilising waste as a power source. Additionally, he runs the PFP introducer network, consisting of
                  industry heavyweights tasked with identifying potential projects.`),ji.forEach(a),Ba=c(wo),ua=r(wo,"IMG",{src:!0}),wo.forEach(a),kr=c(Kl),js=r(Kl,"DIV",{class:!0});var _o=n(js);Hr=r(_o,"DIV",{class:!0});var Jl=n(Hr);ws=r(Jl,"IMG",{src:!0,alt:!0,class:!0}),Vn=c(Jl),Ra=r(Jl,"DIV",{class:!0});var xs=n(Ra);as=r(xs,"DIV",{class:!0});var Aa=n(as);zs=r(Aa,"DIV",{class:!0});var Eo=n(zs);ii=p(Eo,"Alice Chave"),Eo.forEach(a),qa=c(Aa),Ks=r(Aa,"DIV",{class:!0});var El=n(Ks);oi=p(El,"Environmental and Technical Engineer"),El.forEach(a),Aa.forEach(a),xs.forEach(a),Jl.forEach(a),$a=c(_o),ns=r(_o,"DIV",{class:!0});var td=n(ns);Pn=p(td,`Alice holds a Master of Science in Engineering for International Development from the University College
                  London, complemented with a Bachelors in Environmental Engineering. Throughout her academic and professional
                  journey, she has been involved in international development projects, focusing on designing off-grid solutions
                  to benefit communities in the developing world.`),td.forEach(a),yr=c(_o),Js=r(_o,"IMG",{src:!0}),_o.forEach(a),Kl.forEach(a),ci=c(ml),pa=r(ml,"DIV",{class:!0});var ac=n(pa);Qt=r(ac,"DIV",{class:!0});var Nr=n(Qt);Xs=r(Nr,"DIV",{class:!0});var pn=n(Xs);nr=r(pn,"IMG",{src:!0,alt:!0,class:!0}),ir=c(pn),Sr=r(pn,"DIV",{class:!0});var nu=n(Sr);vs=r(nu,"DIV",{class:!0});var nc=n(vs);cs=r(nc,"DIV",{class:!0});var Br=n(cs);nl=p(Br,"Tim Edwards"),Br.forEach(a),di=c(nc),Yr=r(nc,"DIV",{class:!0});var vn=n(Yr);ss=p(vn,"Strategy Executive"),vn.forEach(a),nc.forEach(a),nu.forEach(a),pn.forEach(a),ui=c(Nr),Tr=r(Nr,"DIV",{class:!0});var Ni=n(Tr);Wr=p(Ni,`Tim is an economist with specialised skills in data, analytics, and strategy. He applies his understanding of
                  economic principles to analyse data and develop effective strategies for PFP’s clients. A University of
                  Bristol graduate, Tim boasts an accolade from The Chartered Banker Institute’s essay competition, where his
                  piece on how finance professionals can help achieve society’s goals on climate change was published alongside
                  distinguished academics, business leaders, and politicians.`),Ni.forEach(a),fi=c(Nr),ll=r(Nr,"IMG",{src:!0}),Nr.forEach(a),ls=c(ac),Es=r(ac,"DIV",{class:!0});var Io=n(Es);Ar=r(Io,"DIV",{class:!0});var Il=n(Ar);Ua=r(Il,"IMG",{src:!0,alt:!0,class:!0}),or=c(Il),wr=r(Il,"DIV",{class:!0});var lc=n(wr);cr=r(lc,"DIV",{class:!0});var ic=n(cr);Os=r(ic,"DIV",{class:!0});var Xl=n(Os);Fr=p(Xl,"Paul Lee"),Xl.forEach(a),va=c(ic),kn=r(ic,"DIV",{class:!0});var Dl=n(kn);il=p(Dl,"Chief Resilience Officer"),Dl.forEach(a),ic.forEach(a),lc.forEach(a),Il.forEach(a),Qs=c(Io),is=r(Io,"DIV",{class:!0});var Fa=n(is);Rl=p(Fa,`Paul is an experienced Information Security Leader with expertise in FinTech and cryptocurrency. With 19 years
                  of experience in the UK and US, he has directed the infrastructure for a leading Security Certificate
                  Authority. Passionate about renewable energy and carbon-negative initiatives, he holds degrees from the
                  universities of Leeds and Liverpool, making a valuable asset to our team.`),Fa.forEach(a),pi=c(Io),ds=r(Io,"IMG",{src:!0}),Io.forEach(a),ac.forEach(a),ml.forEach(a),Sn=c(dn),dr=r(dn,"DIV",{class:!0});var oc=n(dr);Ha=r(oc,"DIV",{});var lu=n(Ha);vi=p(lu,"Advisory board"),lu.forEach(a),oc.forEach(a),ur=c(dn),gs=r(dn,"DIV",{class:!0});var Kn=n(gs);Zs=r(Kn,"DIV",{class:!0});var na=n(Zs);Is=r(na,"DIV",{class:!0});var gn=n(Is);Ls=r(gn,"DIV",{class:!0});var sd=n(Ls);Or=r(sd,"IMG",{src:!0,alt:!0,class:!0}),gi=c(sd),fr=r(sd,"DIV",{class:!0});var Bi=n(fr);Ns=r(Bi,"DIV",{class:!0});var cc=n(Ns);Ds=r(cc,"DIV",{class:!0});var Vl=n(Ds);Lr=p(Vl,"Dr. Linda Hilton"),Vl.forEach(a),Tn=c(cc),An=r(cc,"DIV",{class:!0});var Pl=n(An);Wa=p(Pl,"Board Advisor"),Pl.forEach(a),cc.forEach(a),hi=c(Bi),hs=r(Bi,"DIV",{class:!0});var Ql=n(hs);Vs=r(Ql,"DIV",{class:!0});var iu=n(Vs);Kr=r(iu,"DIV",{});var Zl=n(Kr);io=p(Zl,"PhD"),Zl.forEach(a),iu.forEach(a),mi=c(Ql),Fn=r(Ql,"DIV",{class:!0});var Rr=n(Fn);er=r(Rr,"DIV",{});var la=n(er);pr=p(la,"CChem"),la.forEach(a),Rr.forEach(a),_r=c(Ql),tr=r(Ql,"DIV",{class:!0});var kl=n(tr);ol=r(kl,"DIV",{});var rf=n(ol);Cr=p(rf,"FRSC"),rf.forEach(a),kl.forEach(a),Jr=c(Ql),Bs=r(Ql,"DIV",{class:!0});var ei=n(Bs);za=r(ei,"DIV",{});var Do=n(za);Wc=p(Do,"CSci"),Do.forEach(a),ei.forEach(a),Ql.forEach(a),Bi.forEach(a),sd.forEach(a),zc=c(gn),Xr=r(gn,"DIV",{class:!0});var Sl=n(Xr);xi=p(Sl,`Linda brings a unique blend of strategy, science, technology and management expertise gained across various
                  sectors including FMCG, IT, engineering, nuclear, environmental and renewables. Capable of offering both
                  strategic and operational insight, Linda has worked in a variety of different roles and environments around
                  the world for large corporates, research organisations, SME’s, spin-offs and start-ups (social enterprise) and
                  is passionate about using this experience to help people to mitigate climate change.`),Sl.forEach(a),Wd=c(gn),oo=r(gn,"IMG",{src:!0}),gn.forEach(a),vr=c(na),us=r(na,"DIV",{class:!0});var hn=n(us);On=r(hn,"DIV",{class:!0});var Tl=n(On);Ln=r(Tl,"IMG",{src:!0,alt:!0,class:!0}),yi=c(Tl),wi=r(Tl,"DIV",{class:!0});var Vo=n(wi);ga=r(Vo,"DIV",{class:!0});var dc=n(ga);gr=r(dc,"DIV",{class:!0});var Jn=n(gr);co=p(Jn,"Alexandre Chavarot"),Jn.forEach(a),Kc=c(dc),Qr=r(dc,"DIV",{class:!0});var ia=n(Qr);Cn=p(ia,"Board Advisor"),ia.forEach(a),dc.forEach(a),Vo.forEach(a),Tl.forEach(a),Jc=c(hn),_i=r(hn,"DIV",{class:!0});var Po=n(_i);ha=p(Po,`Alexandre, a UK-based independent climate and energy transition finance professional offers expert advisory
                  services to a diverse range of clients, including corporates, asset owners and managers, government entities,
                  and foundations. His background spans project and corporate acquisitions, risk assessments, investments, and
                  financings in the energy, infrastructure, and maritime sectors, working with leading investment banks,
                  foundations, and advisory firms. Alexandre holds degrees from prestigious institutions, including Sciences Po,
                  Harvard, and INSEAD. His passion for addressing climate change and sustainable development make him a vital
                  contributor to the ongoing global transition to a more sustainable future.`),Po.forEach(a),Ja=c(hn),Gn=r(hn,"IMG",{src:!0}),hn.forEach(a),na.forEach(a),uo=c(Kn),Xa=r(Kn,"DIV",{class:!0});var rd=n(Xa);Qa=r(rd,"DIV",{class:!0});var mn=n(Qa);ma=r(mn,"DIV",{class:!0});var Oa=n(ma);Ps=r(Oa,"IMG",{src:!0,alt:!0,class:!0}),fo=c(Oa),Zr=r(Oa,"DIV",{class:!0});var ad=n(Zr);Za=r(ad,"DIV",{class:!0});var uc=n(Za);ba=r(uc,"DIV",{class:!0});var xn=n(ba);ya=p(xn,"Jayne Walters"),xn.forEach(a),ql=c(uc),Ei=r(uc,"DIV",{class:!0});var Ri=n(Ei);Ii=p(Ri,"Board Advisor"),Ri.forEach(a),uc.forEach(a),$l=c(ad),Di=r(ad,"DIV",{class:!0});var ti=n(Di);Mn=r(ti,"DIV",{class:!0});var qr=n(Mn);hr=r(qr,"DIV",{});var Xn=n(hr);en=p(Xn,"BSc"),Xn.forEach(a),qr.forEach(a),ti.forEach(a),ad.forEach(a),Oa.forEach(a),jn=c(mn),tn=r(mn,"DIV",{class:!0});var af=n(tn);Qo=p(af,`Jayne is a lawyer with extensive legal experience having been a partner in a major City law firm and General
                  Counsel for property investment, development and financing businesses. Jayne oversees PFP’s compliance with
                  the business’s legal requirements and advises on the contracts required for individual projects. Jayne holds a
                  degree from The University of Cambridge.`),af.forEach(a),Xc=c(mn),po=r(mn,"IMG",{src:!0}),mn.forEach(a),ea=c(rd),ks=r(rd,"DIV",{class:!0});var qi=n(ks);wa=r(qi,"DIV",{class:!0});var oa=n(wa);Vi=r(oa,"IMG",{src:!0,alt:!0,class:!0}),sr=c(oa),Er=r(oa,"DIV",{class:!0});var fc=n(Er);sn=r(fc,"DIV",{class:!0});var pc=n(sn);Pi=r(pc,"DIV",{class:!0});var ko=n(Pi);ki=p(ko,"Shanika Amarasekara"),ko.forEach(a),rn=c(pc),an=r(pc,"DIV",{class:!0});var La=n(an);Ul=p(La,"Board advisor"),La.forEach(a),pc.forEach(a),fc.forEach(a),oa.forEach(a),dl=c(qi),ms=r(qi,"DIV",{class:!0});var vc=n(ms);_a=p(vc,`Shanika was Chief Impact Officer at British Business Bank and an Executive Committee member responsible for
                  ESG, Economics, Policy and Strategy. Recently, Shanika was involved in the creation of both the Coronavirus
                  Business Interruption Loan Scheme (CBILS) and the Future Fund. The scale of both schemes expanded the bank’s
                  balance sheet by ten times. She was appointed General Counsel and Company Secretary and was a founder member
                  of the Senior Management Team which established and launched the bank in 2014. The bank was set up to increase
                  the supply of credit and finance to SMEs, enabling these companies to contribute effectively to the UK
                  economy.`),vc.forEach(a),Si=c(qi),Ea=r(qi,"IMG",{src:!0}),qi.forEach(a),rd.forEach(a),Kn.forEach(a),dn.forEach(a),Hn.forEach(a),Qc=c(Hl),mr=r(Hl,"DIV",{class:!0});var gc=n(mr);Rs=r(gc,"DIV",{class:!0});var So=n(Rs);ul=p(So,"Copyright © 2023 Power for Planet"),So.forEach(a),Nn=c(gc),Cs=r(gc,"DIV",{class:!0});var Ca=n(Cs);Ia=r(Ca,"DIV",{class:!0});var si=n(Ia);Zc=p(si,"Privacy Policy"),si.forEach(a),fl=c(Ca),qs=r(Ca,"DIV",{class:!0});var Qn=n(qs);Ti=r(Qn,"IMG",{src:!0,alt:!0,class:!0}),Gr=c(Qn),Mr=r(Qn,"IMG",{src:!0,alt:!0,class:!0}),ed=c(Qn),jr=r(Qn,"IMG",{src:!0,alt:!0,class:!0}),Qn.forEach(a),Ca.forEach(a),gc.forEach(a),Hl.forEach(a),vo.forEach(a),pl.forEach(a),this.h()},h(){t(v,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),S(E.src,y="/assets/new/Line-1.svg")||t(E,"src",y),t(E,"alt","Line 1"),t(E,"class","h-[670px] w-2.5 left-[130px] bottom-[-130px] relative mb-[-700px] z-1"),S(A.src,G="/assets/new/graphic.svg")||t(A,"src",G),t(A,"alt","graphic"),t(A,"class","h-[110px] w-[65px]"),t(I,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),t(w,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(O,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t(q,"class","w-[690px]"),t(Y,"class","w-full flex-col flex items-start gap-[18px]"),t(W,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(L,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(b,"class","flex-1 flex items-start gap-5"),t(D,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),t(ae,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(te.src,ge="/assets/new/graphic-45.svg")||t(te,"src",ge),t(te,"alt","graphic"),t(te,"class","h-[120px] w-[120px]"),t(Xe,"class","flex justify-center items-center gap-2.5 pr-[13px]"),t($,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full"),t(je,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(N,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t(J,"class","w-[690px]"),t(le,"class","w-full flex-col flex items-start gap-[18px]"),t(he,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(ue,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(Ie,"class","flex-1 flex items-start gap-5"),t(z,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),S(He.src,me="/assets/new/graphic-10.svg")||t(He,"src",me),t(He,"alt","graphic"),t(He,"class","h-[120px] w-[120px]"),t(ee,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),t(be,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(Ye,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t(K,"class","w-[690px]"),t(U,"class","w-full flex-col flex items-start gap-[18px]"),t(B,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(Oe,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(Fe,"class","flex-1 flex items-start gap-5"),t(Pe,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),t(h,"class","w-full flex-col flex items-start gap-[30px]"),t(Te,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(Ge.src,_e="/assets/new/Vector-11.svg")||t(Ge,"src",_e),t(Ge,"alt","Vector"),t(Ge,"class","h-[100px] w-[100px]"),t(Je,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(ze,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Ne,"class","w-full flex-col flex items-start font-bold"),t(lt,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Gt,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(ie,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Ve,"class","flex items-start gap-1.5 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(ct,"class","flex-1 flex-col flex items-start gap-2"),t($e,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(it,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(Tt.src,at="/assets/LI.png")||t(Tt,"src",at),t(qe,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(dt.src,Wt="/assets/new/Vector-12.svg")||t(dt,"src",Wt),t(dt,"alt","Vector"),t(dt,"class","h-[100px] w-[100px]"),t(ot,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(xt,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Me,"class","w-full flex-col flex items-start font-bold"),t(Ft,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(bt,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(mt,"class","flex-1 flex-col flex items-start gap-2"),t(_t,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(zt,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(St.src,rr="/assets/LI.png")||t(St,"src",rr),t(Qe,"class","bg-[#e7f5f5] flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(se,"class","w-full flex items-start gap-5"),S(fs.src,Ss="/assets/new/Vector-13.svg")||t(fs,"src",Ss),t(fs,"alt","Vector"),t(fs,"class","h-[100px] w-[100px]"),t(bs,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Pr,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(It,"class","w-full flex-col flex items-start font-bold"),t(Ur,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(ys,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(As,"class","flex-1 flex-col flex items-start gap-2"),t(Xt,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Fs,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(ua.src,fa="/assets/LI.png")||t(ua,"src",fa),t(nt,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(ws.src,_s="/assets/new/Vector-14.svg")||t(ws,"src",_s),t(ws,"alt","Vector"),t(ws,"class","h-[100px] w-[100px]"),t(zs,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Ks,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(as,"class","w-full flex-col flex items-start font-bold"),t(Ra,"class","flex-1 flex-col flex items-start gap-2"),t(Hr,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(ns,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(Js.src,ar="/assets/LI.png")||t(Js,"src",ar),t(js,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(Ut,"class","w-full flex items-start gap-5"),S(nr.src,lr="/assets/new/Vector-15.svg")||t(nr,"src",lr),t(nr,"alt","Vector"),t(nr,"class","h-[100px] w-[100px]"),t(cs,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Yr,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(vs,"class","w-full flex-col flex items-start font-bold"),t(Sr,"class","flex-1 flex-col flex items-start gap-2"),t(Xs,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Tr,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(ll.src,lo="/assets/LI.png")||t(ll,"src",lo),t(Qt,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(Ua.src,Ht="/assets/new/Vector-16.svg")||t(Ua,"src",Ht),t(Ua,"alt","Vector"),t(Ua,"class","h-[100px] w-[100px]"),t(Os,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(kn,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(cr,"class","w-full flex-col flex items-start font-bold"),t(wr,"class","flex-1 flex-col flex items-start gap-2"),t(Ar,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(is,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(ds.src,zr="/assets/LI.png")||t(ds,"src",zr),t(Es,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(pa,"class","w-full flex items-start gap-5"),t(we,"class","w-full h-[1550px] flex-col flex items-center gap-5"),t(dr,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(Or.src,Ya="/assets/new/Vector-17.svg")||t(Or,"src",Ya),t(Or,"alt","Vector"),t(Or,"class","h-[100px] w-[100px]"),t(Ds,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(An,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Ns,"class","w-full flex-col flex items-start font-bold"),t(Vs,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Fn,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(tr,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Bs,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(hs,"class","w-full flex items-start gap-1.5 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(fr,"class","flex-1 flex-col flex items-start gap-2"),t(Ls,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Xr,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(oo.src,bi="/assets/LI.png")||t(oo,"src",bi),t(Is,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(Ln.src,Ka="/assets/new/Vector-18.svg")||t(Ln,"src",Ka),t(Ln,"alt","Vector"),t(Ln,"class","h-[100px] w-[100px]"),t(gr,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Qr,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(ga,"class","w-full flex-col flex items-start font-bold"),t(wi,"class","flex-1 flex-col flex items-start gap-2"),t(On,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(_i,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(Gn.src,Xu="/assets/LI.png")||t(Gn,"src",Xu),t(us,"class","bg-[#e7f5f5] flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(Zs,"class","w-full flex items-start gap-5"),S(Ps.src,xa="/assets/new/Vector-19.svg")||t(Ps,"src",xa),t(Ps,"alt","Vector"),t(Ps,"class","h-[100px] w-[100px]"),t(ba,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Ei,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Za,"class","w-full flex-col flex items-start font-bold"),t(Mn,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Di,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(Zr,"class","flex-1 flex-col flex items-start gap-2"),t(ma,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(tn,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(po.src,cl="/assets/LI.png")||t(po,"src",cl),t(Qa,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(Vi.src,zd="/assets/new/Vector-20.svg")||t(Vi,"src",zd),t(Vi,"alt","Vector"),t(Vi,"class","h-[100px] w-[100px]"),t(Pi,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(an,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(sn,"class","w-full flex-col flex items-start font-bold"),t(Er,"class","flex-1 flex-col flex items-start gap-2"),t(wa,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(ms,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(Ea.src,Zo="/assets/LI.png")||t(Ea,"src",Zo),t(ks,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(Xa,"class","w-full flex items-start gap-5"),t(gs,"class","w-full h-[1200px] flex-col flex items-center gap-5"),t(Se,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(H,"class","w-full flex-col flex items-start gap-10"),t(Rs,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ia,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Ti.src,Kd="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ti,"src",Kd),t(Ti,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Ti,"class","h-6 w-6"),S(Mr.src,Jd="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Mr,"src",Jd),t(Mr,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Mr,"class","h-6 w-6"),S(jr.src,nn="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(jr,"src",nn),t(jr,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(jr,"class","h-6 w-6"),t(qs,"class","flex items-center gap-5"),t(Cs,"class","flex-1 flex justify-end items-center gap-10"),t(mr,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(u,"class","flex-col mw-[1060px] flex items-start gap-[50px]"),t(i,"class","bg-[#e4eaea] flex-col flex items-center gap-[50px] h-fit mt-20"),t(l,"class","w-full")},m(ln,pl){Ze(ln,l,pl),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(u,m),e(u,h),e(h,E),e(h,P),e(h,D),e(D,I),e(I,_),e(_,F),e(I,k),e(I,A),e(D,j),e(D,b),e(b,L),e(L,w),e(L,R),e(L,O),e(O,C),e(L,M),e(L,W),e(W,Y),e(Y,q),e(q,oe),e(h,ve),e(h,z),e(z,$),e($,ae),e(ae,Ee),e($,ce),e($,Xe),e(Xe,de),e(de,te),e(z,Ae),e(z,Ie),e(Ie,ue),e(ue,je),e(ue,fe),e(ue,N),e(N,Q),e(N,pe),e(ue,xe),e(ue,he),e(he,le),e(le,J),e(J,Re),e(h,Le),e(h,Pe),e(Pe,ee),e(ee,We),e(We,ke),e(ee,Z),e(ee,He),e(Pe,Ce),e(Pe,Fe),e(Fe,Oe),e(Oe,be),e(Oe,et),e(Oe,Ye),e(Ye,st),e(Oe,V),e(Oe,B),e(B,U),e(U,K),e(K,X),e(u,re),e(u,H),e(H,Se),e(Se,Te),e(Te,ne),e(ne,ye),e(Se,ut),e(Se,we),e(we,se),e(se,qe),e(qe,$e),e($e,Ge),e($e,Ue),e($e,ct),e(ct,Ne),e(Ne,Je),e(Je,jt),e(Ne,Lt),e(Ne,ze),e(ze,wt),e(ct,Pt),e(ct,Ve),e(Ve,lt),e(lt,rt),e(rt,Dt),e(Ve,gt),e(Ve,Gt),e(Gt,ft),e(ft,Nt),e(Ve,Vt),e(Ve,ie),e(ie,pt),e(pt,kt),e(qe,Yt),e(qe,it),e(it,ht),e(qe,Zt),e(qe,Tt),e(se,At),e(se,Qe),e(Qe,_t),e(_t,dt),e(_t,es),e(_t,mt),e(mt,Me),e(Me,ot),e(ot,Mt),e(Me,Et),e(Me,xt),e(xt,vt),e(mt,Bt),e(mt,bt),e(bt,Ft),e(Ft,Jt),e(Jt,Rt),e(Qe,qt),e(Qe,zt),e(zt,Ct),e(Qe,$t),e(Qe,St),e(we,os),e(we,Ut),e(Ut,nt),e(nt,Xt),e(Xt,fs),e(Xt,Ts),e(Xt,As),e(As,It),e(It,bs),e(bs,ts),e(It,ps),e(It,Pr),e(Pr,Na),e(As,rs),e(As,ys),e(ys,Ur),e(Ur,Ys),e(Ys,br),e(nt,Kt),e(nt,Fs),e(Fs,Ws),e(nt,Ba),e(nt,ua),e(Ut,kr),e(Ut,js),e(js,Hr),e(Hr,ws),e(Hr,Vn),e(Hr,Ra),e(Ra,as),e(as,zs),e(zs,ii),e(as,qa),e(as,Ks),e(Ks,oi),e(js,$a),e(js,ns),e(ns,Pn),e(js,yr),e(js,Js),e(we,ci),e(we,pa),e(pa,Qt),e(Qt,Xs),e(Xs,nr),e(Xs,ir),e(Xs,Sr),e(Sr,vs),e(vs,cs),e(cs,nl),e(vs,di),e(vs,Yr),e(Yr,ss),e(Qt,ui),e(Qt,Tr),e(Tr,Wr),e(Qt,fi),e(Qt,ll),e(pa,ls),e(pa,Es),e(Es,Ar),e(Ar,Ua),e(Ar,or),e(Ar,wr),e(wr,cr),e(cr,Os),e(Os,Fr),e(cr,va),e(cr,kn),e(kn,il),e(Es,Qs),e(Es,is),e(is,Rl),e(Es,pi),e(Es,ds),e(Se,Sn),e(Se,dr),e(dr,Ha),e(Ha,vi),e(Se,ur),e(Se,gs),e(gs,Zs),e(Zs,Is),e(Is,Ls),e(Ls,Or),e(Ls,gi),e(Ls,fr),e(fr,Ns),e(Ns,Ds),e(Ds,Lr),e(Ns,Tn),e(Ns,An),e(An,Wa),e(fr,hi),e(fr,hs),e(hs,Vs),e(Vs,Kr),e(Kr,io),e(hs,mi),e(hs,Fn),e(Fn,er),e(er,pr),e(hs,_r),e(hs,tr),e(tr,ol),e(ol,Cr),e(hs,Jr),e(hs,Bs),e(Bs,za),e(za,Wc),e(Is,zc),e(Is,Xr),e(Xr,xi),e(Is,Wd),e(Is,oo),e(Zs,vr),e(Zs,us),e(us,On),e(On,Ln),e(On,yi),e(On,wi),e(wi,ga),e(ga,gr),e(gr,co),e(ga,Kc),e(ga,Qr),e(Qr,Cn),e(us,Jc),e(us,_i),e(_i,ha),e(us,Ja),e(us,Gn),e(gs,uo),e(gs,Xa),e(Xa,Qa),e(Qa,ma),e(ma,Ps),e(ma,fo),e(ma,Zr),e(Zr,Za),e(Za,ba),e(ba,ya),e(Za,ql),e(Za,Ei),e(Ei,Ii),e(Zr,$l),e(Zr,Di),e(Di,Mn),e(Mn,hr),e(hr,en),e(Qa,jn),e(Qa,tn),e(tn,Qo),e(Qa,Xc),e(Qa,po),e(Xa,ea),e(Xa,ks),e(ks,wa),e(wa,Vi),e(wa,sr),e(wa,Er),e(Er,sn),e(sn,Pi),e(Pi,ki),e(sn,rn),e(sn,an),e(an,Ul),e(ks,dl),e(ks,ms),e(ms,_a),e(ks,Si),e(ks,Ea),e(u,Qc),e(u,mr),e(mr,Rs),e(Rs,ul),e(mr,Nn),e(mr,Cs),e(Cs,Ia),e(Ia,Zc),e(Cs,fl),e(Cs,qs),e(qs,Ti),e(qs,Gr),e(qs,Mr),e(qs,ed),e(qs,jr)},p:Be,i:Be,o:Be,d(ln){ln&&a(l)}}}class SE extends In{constructor(l){super(),Dn(this,l,null,kE,ja,{})}}function TE(d){let l,i,u,v,g,x,m,h,E,y,P,D,I,_,F,k,A,G,j,b,L,w,R,O,C,M,W,Y,q,oe,ve,z,$,ae,Ee,ce,Xe,de,te,ge=" ",Ae,Ie,ue,je,fe,N,Q,De,pe,xe,he,le,J,Re,Le,Pe,ee,We,ke,Z,He,me,Ce,Fe,Oe,be,et,Ye,st,V,B,U,K,X,re,H,Se,Te,ne,ye,ut,we,se,qe,$e,Ge,_e,Ue,ct,Ne,Je,jt,Lt,ze,wt,Pt,Ve,lt,rt,Dt,gt,Gt,ft,Nt,Vt,ie,pt,kt,Yt,it,ht,Zt,Tt,at,At,Qe,_t,dt,Wt,es,mt,Me,ot,Mt,Et,xt,vt,Bt,bt,Ft,Jt,Rt,qt,zt,Ct,$t,St,rr,os,Ut,nt,Xt,fs,Ss,Ts,As,It,bs,ts,ps,Pr,Na,rs,ys,Ur,Ys,br,Kt,Fs,Ws,Ba,ua,fa,kr,js,Hr,ws,_s,Vn,Ra,as,zs,ii,qa,Ks,oi,$a,ns,Pn,yr,Js,ar,ci,pa,Qt,Xs,nr,lr,ir,Sr,vs,cs,nl,di,Yr,ss,ui,Tr,Wr,fi,ll,lo,ls,Es,Ar,Ua,Ht,or,wr,cr,Os,Fr,va,kn,il,Qs,is,Rl,pi,ds,zr,Sn,dr,Ha,vi,ur,gs,Zs,Is,Ls,Or,Ya,gi,fr,Ns,Ds,Lr,Tn,An,Wa,hi,hs,Vs,Kr,io,mi,Fn,er,pr,_r,tr,ol,Cr,Jr,Bs,za,Wc,zc,Xr,xi=" ",Wd,oo,bi,vr,us,On,Ln,Ka,yi,wi,ga,gr,co,Kc,Qr,Cn,Jc,_i,ha,Ja,Gn,Xu,uo,Xa,Qa,ma,Ps,xa,fo,Zr,Za,ba,ya,ql,Ei,Ii,$l,Di,Mn,hr,en,jn,tn,Qo,Xc,po,cl,ea,ks,wa,Vi,zd,sr,Er,sn,Pi,ki,rn,an,Ul,dl,ms,_a,Si,Ea,Zo,Qc,mr,Rs,ul,Nn,Cs,Ia,Zc,fl,qs,Ti,Kd,Gr,Mr,Jd,ed,jr,nn,ln,pl,vo,Hl,Xd,ta,$s,vl,Bn,Ai,Fi,sa,Rn,Qu,Qd,go,Us,on,Zu,Zd,ec,qn,cn,tc,eu,Oi,Da,$n,gl,ho,ef,Un,hl,mo,xo,Va,Hn,dn,tu,sc,ml,rc,xl,Yl,Yn,Pa,bo,Li,un,bl,ka,yl,su,Wl,Wn,ru,Ci,Ir,fn,Sa,Gi,zl,Mi,tf,yo,Ta,Kl,wo,wl,zn,Hs,ra,_l,sf,au,aa,ji,_o,Jl,xs,Aa,Eo,El,td,ac,Nr,pn,nu,nc,Br,vn,Ni,Io,Il,lc,ic,Xl,Dl,Fa,oc,lu,Kn,na,gn,sd,Bi,cc,Vl,Pl,Ql,iu,Zl,Rr,la,kl,rf,ei,Do,Sl,hn,Tl,Vo,dc,Jn,ia,Po,rd,mn,Oa,ad,uc,xn,Ri,ti,qr,Xn,af,qi,oa,fc,pc,ko,La,vc,gc,So,Ca,si,Qn,To,gg,Lv,Zn,Al,nd,hg,ld,ou,Cv,hc,Ao,xr,Fo,mg,Gv,nf,cu,Oo,Lo,xg,Mv,lf,ri,mc,$i,du,jv,Ui,Fl,of,Nv,bn,Ga,Hi,xc,bg,id,Co,od,cd,yg,Go,bc,Bv;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("div"),m=f("Green energy"),h=o(),E=s("div"),y=s("div"),P=s("div"),D=f("Power from waste"),I=o(),_=s("div"),F=f("Non-recycled waste is the ideal renewable energy source"),k=o(),A=s("div"),G=s("div"),j=s("div"),b=o(),L=s("div"),w=s("div"),R=s("div"),O=s("span"),C=f("Unlike solar and wind, it provides"),M=o(),W=s("span"),Y=f("continuous"),q=o(),oe=s("span"),ve=f("power 24/7."),z=o(),$=s("div"),ae=s("div"),Ee=s("div"),ce=s("div"),Xe=o(),de=s("div"),te=f("Using non-recycled waste"),Ae=f(ge),Ie=o(),ue=s("span"),je=f("prevents it from polluting"),fe=f(`
                our soil, water, and atmosphere in uncontrolled ways.`),N=o(),Q=s("div"),De=s("div"),pe=s("div"),xe=s("div"),he=s("div"),le=s("div"),J=f("Power from waste"),Re=o(),Le=s("div"),Pe=f("Slurry covers for farms with livestock"),ee=o(),We=s("div"),ke=s("div"),Z=s("div"),He=s("div"),me=s("div"),Ce=f("How it works"),Fe=o(),Oe=s("div"),be=s("div"),et=f(`Covering slurry stores helps keep rain out while containing odorous gases like ammonia, which result from
                    microbial activity. Ammonia emissions from manure storage contribute 9% of the UK’s agricultural ammonia
                    emissions. By covering your slurry store, you can substantially reduce these emissions. Conventional slurry
                    store covers aren’t airtight like anaerobic digester covers, so gas escapes at a reduced rate compared to
                    open stores.
                    `),Ye=s("br"),st=o(),V=s("br"),B=f(`
                    Slurry store covers can be impermeable or permeable, fixed or floating. Impermeable covers prevent rainwater
                    from entering, reducing slurry volume and increasing storage capacity. In areas with moderate to high rainfall,
                    these covers can be cost-effective.
                    `),U=s("br"),K=o(),X=s("br"),re=f(`
                    Captured fugitive emissions can be converted into biomethane to power onsite tractors or be sold to the transport
                    industry.`),H=o(),Se=s("div"),Te=s("div"),ne=s("div"),ye=s("img"),we=o(),se=s("div"),qe=f("Pros"),$e=o(),Ge=s("div"),_e=s("ul"),Ue=s("li"),ct=f("Relatively low-cost and quick deployment."),Ne=o(),Je=s("li"),jt=f("In some countries, like the UK, government grants may cover"),Lt=f(`
                      initial costs.
                      `),ze=s("li"),wt=f("Effective in reducing emissions."),Pt=o(),Ve=s("div"),lt=s("div"),rt=s("img"),gt=o(),Gt=s("div"),ft=f("Cons"),Nt=o(),Vt=s("div"),ie=s("ul"),pt=s("li"),kt=f("Covers are not airtight, so some methane may still escape."),Yt=o(),it=s("li"),ht=f("If biogas cannot be used on site, finding an off-taker is necessary."),Zt=f(`
                      
                       `),Tt=o(),at=s("div"),At=s("div"),Qe=s("div"),_t=s("div"),dt=s("div"),Wt=f("Power from waste"),es=o(),mt=s("div"),Me=f("Anaerobic digestion"),ot=o(),Mt=s("div"),Et=s("div"),xt=s("div"),vt=s("div"),Bt=s("div"),bt=f("How it works"),Ft=o(),Jt=s("div"),Rt=s("div"),qt=f(`Anaerobic digestion (AD) is a process where microorganisms break down biodegradable material without oxygen.
                    This produces biogas, which can be used for electricity, heat, renewable natural gas, or transportation
                    fuels. Various AD technologies convert diverse organic waste streams into biogas continuously.
                    `),zt=s("br"),Ct=o(),$t=s("br"),St=f(`
                    Digested solids can be composted, used for bedding, applied to cropland, or made into other products. Nutrients
                    in the liquid stream serve as agricultural fertilizers. AD is applicable across the human food supply chain,
                    from farm animal waste to restaurant food waste. The scale can range from thousands of tonnes per annum to just
                    a few kilograms per day.`),rr=o(),os=s("div"),Ut=s("div"),nt=s("div"),Xt=s("img"),Ss=o(),Ts=s("div"),As=f("Pros"),It=o(),bs=s("div"),ts=s("ul"),ps=s("li"),Pr=f("Suitable for most parts of the human food supply chain, significantly reducing environmental impact."),Na=o(),rs=s("li"),ys=f("Smaller units for food waste are relatively affordable and usually don’t require planning consent."),Ur=f(`
                       `),Ys=s("br"),br=f(" "),Kt=o(),Fs=s("div"),Ws=s("div"),Ba=s("img"),fa=o(),kr=s("div"),js=f("Cons"),Hr=o(),ws=s("div"),_s=s("ul"),Vn=s("li"),Ra=f(`Larger units for sizable operations can be expensive, take 12-18 months from feasibility to operation,
                        and may face local objections due to odor.`),as=o(),zs=s("li"),ii=f("Bigger units require planning consent, necessitating expert support."),qa=o(),Ks=s("li"),oi=f("We have partners who can help with this process."),$a=o(),ns=s("div"),Pn=s("div"),yr=s("div"),Js=s("div"),ar=s("div"),ci=f("Power from waste"),pa=o(),Qt=s("div"),Xs=f("Pyrolysis"),nr=o(),lr=s("div"),ir=s("div"),Sr=s("div"),vs=s("div"),cs=s("div"),nl=f("How it works"),di=o(),Yr=s("div"),ss=s("div"),ui=f(`Pyrolysis is a thermochemical process applied to any organic material, involving chemical and physical
                    separation into different molecules at high temperatures and without oxygen. Unlike combustion and
                    gasification, which involve oxidation, pyrolysis is an endothermic process resulting in high-energy
                    products. `),Tr=s("br"),Wr=o(),fi=s("br"),ll=f(`
                    Pyrolysis products include solid (charcoal, biochar), liquid, and non-condensable gases (H2, CH4, CnHm, CO, CO2,
                    and N). In some applications, liquid and gas phases can be used together when supplying hot syngas directly to
                    a burner or oxidation chamber.
                    `),lo=s("br"),ls=o(),Es=s("br"),Ar=f(`
                    During pyrolysis, materials are heated to a specific temperature inside a pyrolysis unit until the process is
                    complete. The chosen temperature influences the composition and yields of pyrolysis oil, syngas, and char.`),Ua=o(),Ht=s("div"),or=s("div"),wr=s("div"),cr=s("img"),Fr=o(),va=s("div"),kn=f("Pros"),il=o(),Qs=s("div"),is=s("ul"),Rl=s("li"),pi=f("Versatile application across multiple industries: agriculture, energy, and transportation."),ds=o(),zr=s("li"),Sn=f("Carbon sequestration through biochar production, aiding in climate change mitigation."),dr=o(),Ha=s("li"),vi=f("Eco-friendly approach to managing organic waste, reducing landfill usage."),ur=o(),gs=s("div"),Zs=s("div"),Is=s("img"),Or=o(),Ya=s("div"),gi=f("Cons"),fr=o(),Ns=s("div"),Ds=s("ul"),Lr=s("li"),Tn=f("High initial investment, especially for larger operations."),An=o(),Wa=s("li"),hi=f("Demand for technical expertise and skilled personnel."),hs=o(),Vs=s("li"),Kr=f("Emission monitoring and management required to minimize environmental impacts."),io=f(`
                       `),mi=s("br"),Fn=f(" "),er=o(),pr=s("div"),_r=s("div"),tr=s("div"),ol=f("We see waste as a fuel opportunity "),Cr=s("br"),Jr=f(`
            – and it’s already yours!`),Bs=o(),za=s("div"),Wc=f(`Use our online tools to explore over 150 technology partners
            `),zc=s("br"),Xr=f(`
            solutions and start your power-from-waste project`),Wd=f(xi),oo=o(),bi=s("div"),vr=s("div"),us=s("div"),On=s("div"),Ln=s("div"),Ka=s("img"),wi=o(),ga=s("div"),gr=s("div"),co=s("div"),Kc=f("Exploration station"),Qr=o(),Cn=s("div"),Jc=f("Discover if your waste type is suitable for a project or learn more about power-from-waste"),_i=o(),ha=s("a"),Ja=s("div"),Gn=s("img"),uo=o(),Xa=s("div"),Qa=f("Explore the possibilities"),ma=o(),Ps=s("div"),xa=s("img"),Zr=o(),Za=s("div"),ba=s("div"),ya=s("div"),ql=f("Calculator tool"),Ei=o(),Ii=s("div"),$l=f("Discover if your waste type is suitable for a project or learn more about power-from-waste"),Di=o(),Mn=s("a"),hr=s("div"),en=s("img"),tn=o(),Qo=s("div"),Xc=f("Calculate now"),po=o(),cl=s("div"),ea=s("div"),ks=s("div"),wa=s("img"),zd=o(),sr=s("div"),Er=s("div"),sn=f("Concerned about costs?"),Pi=o(),ki=s("div"),rn=f(`Even our larger projects have payback periods under five years, with some as low as two. After that, you
                    only cover the annual facility maintenance cost, with no grid or standing charges.`),an=o(),Ul=s("div"),dl=s("div"),ms=s("div"),_a=s("div"),Si=f("Other green energy sources"),Ea=o(),Zo=s("div"),Qc=f("Different renewable energy sources can be combined to find the perfect solution for your project"),mr=o(),Rs=s("div"),ul=s("div"),Nn=s("div"),Cs=s("div"),Ia=s("div"),Zc=o(),fl=s("div"),qs=s("div"),Ti=f("Solar power"),Kd=o(),Gr=s("div"),Mr=s("div"),Jd=f(`Solar power converts the Sun’s photons into electricity through solar panels. It works in most locations and
                  has several benefits.`),ed=o(),jr=s("button"),nn=s("img"),pl=o(),vo=s("img"),Xd=o(),ta=s("div"),$s=s("div"),vl=s("div"),Bn=s("div"),Ai=s("img"),sa=o(),Rn=s("div"),Qu=f("Pros"),Qd=o(),go=s("div"),Us=s("ul"),on=s("li"),Zu=f("Often cheaper than fossil fuels by 2023"),Zd=o(),ec=s("li"),qn=f("Environmentally friendly Low maintenance and long-lasting"),cn=o(),tc=s("li"),eu=f("Emissions-free during use"),Oi=o(),Da=s("div"),$n=s("div"),gl=s("img"),ef=o(),Un=s("div"),hl=f("Cons"),mo=o(),xo=s("div"),Va=s("ul"),Hn=s("li"),dn=f("High initial costs"),tu=o(),sc=s("li"),ml=f("Intermittent power supply, requiring grid connection or battery storage"),rc=o(),xl=s("li"),Yl=f("Environmental impacts during production and disposal"),Yn=o(),Pa=s("li"),bo=f("Potential local resistance to solar farm installations near habitation"),Li=o(),un=s("div"),bl=s("div"),ka=s("div"),yl=s("div"),su=o(),Wl=s("div"),Wn=s("div"),ru=f("Wind power"),Ci=o(),Ir=s("div"),fn=s("div"),Sa=f("Wind power, also called “Eolic” energy, generates electricity using wind turbines."),Gi=o(),zl=s("button"),Mi=s("img"),yo=o(),Ta=s("img"),wo=o(),wl=s("div"),zn=s("div"),Hs=s("div"),ra=s("div"),_l=s("img"),au=o(),aa=s("div"),ji=f("Pros"),_o=o(),Jl=s("div"),xs=s("ul"),Aa=s("li"),Eo=f("Often cheaper than fossil fuels by 2023"),El=o(),td=s("li"),ac=f("Environmentally friendly Low maintenance and long-lasting"),Nr=o(),pn=s("li"),nu=f("Emissions-free during use"),nc=o(),Br=s("div"),vn=s("div"),Ni=s("img"),Il=o(),lc=s("div"),ic=f("Cons"),Xl=o(),Dl=s("div"),Fa=s("ul"),oc=s("li"),lu=f("High initial costs"),Kn=o(),na=s("li"),gn=f("Intermittent power supply, requiring grid connection or battery storage"),sd=o(),Bi=s("li"),cc=f("Environmental impacts during production and disposal"),Vl=o(),Pl=s("li"),Ql=f("Potential local resistance to solar farm installations near habitation"),iu=o(),Zl=s("div"),Rr=s("div"),la=s("div"),kl=s("div"),rf=o(),ei=s("div"),Do=s("div"),Sl=f("Energy storage"),hn=o(),Tl=s("div"),Vo=s("div"),dc=f("Energy storage is a crucial technology that allows us to store excess energy for future use."),Jn=o(),ia=s("button"),Po=s("img"),mn=o(),Oa=s("img"),uc=o(),xn=s("div"),Ri=s("div"),ti=s("div"),qr=s("div"),Xn=s("img"),qi=o(),oa=s("div"),fc=f("Pros"),pc=o(),ko=s("div"),La=s("ul"),vc=s("li"),gc=f("Often cheaper than fossil fuels by 2023"),So=o(),Ca=s("li"),si=f("Environmentally friendly Low maintenance and long-lasting"),Qn=o(),To=s("li"),gg=f("Emissions-free during use"),Lv=o(),Zn=s("div"),Al=s("div"),nd=s("img"),ld=o(),ou=s("div"),Cv=f("Cons"),hc=o(),Ao=s("div"),xr=s("ul"),Fo=s("li"),mg=f("High initial costs"),Gv=o(),nf=s("li"),cu=f("Intermittent power supply, requiring grid connection or battery storage"),Oo=o(),Lo=s("li"),xg=f("Environmental impacts during production and disposal"),Mv=o(),lf=s("li"),ri=f("Potential local resistance to solar farm installations near habitation"),mc=o(),$i=s("div"),du=s("div"),jv=f("Copyright © 2023 Power for Planet"),Ui=o(),Fl=s("div"),of=s("div"),Nv=f("Privacy Policy"),bn=o(),Ga=s("div"),Hi=s("img"),bg=o(),id=s("img"),od=o(),cd=s("img"),Go=o(),bc=s("script"),Bv=f(`function toggleElement(k) {
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
    }`),this.h()},l(cf){l=r(cf,"DIV",{class:!0});var Ol=n(l);i=r(Ol,"DIV",{class:!0});var df=n(i);u=r(df,"DIV",{class:!0});var uu=n(u);v=r(uu,"DIV",{class:!0});var dd=n(v);g=r(dd,"DIV",{class:!0});var uf=n(g);x=r(uf,"DIV",{});var wg=n(x);m=p(wg,"Green energy"),wg.forEach(a),uf.forEach(a),dd.forEach(a),h=c(uu),E=r(uu,"DIV",{class:!0});var Bp=n(E);y=r(Bp,"DIV",{class:!0});var _g=n(y);P=r(_g,"DIV",{class:!0});var ud=n(P);D=p(ud,"Power from waste"),ud.forEach(a),_g.forEach(a),I=c(Bp),_=r(Bp,"DIV",{class:!0});var yc=n(_);F=p(yc,"Non-recycled waste is the ideal renewable energy source"),yc.forEach(a),Bp.forEach(a),k=c(uu),A=r(uu,"DIV",{class:!0});var wc=n(A);G=r(wc,"DIV",{class:!0});var Rv=n(G);j=r(Rv,"DIV",{class:!0}),n(j).forEach(a),b=c(Rv),L=r(Rv,"DIV",{class:!0});var Eg=n(L);w=r(Eg,"DIV",{class:!0});var Ig=n(w);R=r(Ig,"DIV",{class:!0});var Ll=n(R);O=r(Ll,"SPAN",{class:!0});var fu=n(O);C=p(fu,"Unlike solar and wind, it provides"),fu.forEach(a),M=c(Ll),W=r(Ll,"SPAN",{class:!0});var Zh=n(W);Y=p(Zh,"continuous"),Zh.forEach(a),q=c(Ll),oe=r(Ll,"SPAN",{class:!0});var Dg=n(oe);ve=p(Dg,"power 24/7."),Dg.forEach(a),Ll.forEach(a),Ig.forEach(a),Eg.forEach(a),Rv.forEach(a),z=c(wc),$=r(wc,"DIV",{class:!0});var Vg=n($);ae=r(Vg,"DIV",{class:!0});var fd=n(ae);Ee=r(fd,"DIV",{class:!0});var Yi=n(Ee);ce=r(Yi,"DIV",{class:!0}),n(ce).forEach(a),Xe=c(Yi),de=r(Yi,"DIV",{class:!0});var Wi=n(de);te=p(Wi,"Using non-recycled waste"),Ae=p(Wi,ge),Ie=c(Wi),ue=r(Wi,"SPAN",{class:!0});var em=n(ue);je=p(em,"prevents it from polluting"),em.forEach(a),fe=p(Wi,`
                our soil, water, and atmosphere in uncontrolled ways.`),Wi.forEach(a),Yi.forEach(a),fd.forEach(a),Vg.forEach(a),wc.forEach(a),uu.forEach(a),N=c(df),Q=r(df,"DIV",{class:!0});var _c=n(Q);De=r(_c,"DIV",{class:!0});var Rp=n(De);pe=r(Rp,"DIV",{class:!0});var Ec=n(pe);xe=r(Ec,"DIV",{class:!0});var Ic=n(xe);he=r(Ic,"DIV",{class:!0});var tm=n(he);le=r(tm,"DIV",{class:!0});var Pg=n(le);J=p(Pg,"Power from waste"),Pg.forEach(a),tm.forEach(a),Re=c(Ic),Le=r(Ic,"DIV",{class:!0});var kg=n(Le);Pe=p(kg,"Slurry covers for farms with livestock"),kg.forEach(a),Ic.forEach(a),Ec.forEach(a),ee=c(Rp),We=r(Rp,"DIV",{class:!0});var Mo=n(We);ke=r(Mo,"DIV",{class:!0});var pu=n(ke);Z=r(pu,"DIV",{class:!0});var qv=n(Z);He=r(qv,"DIV",{class:!0});var qp=n(He);me=r(qp,"DIV",{class:!0});var vu=n(me);Ce=p(vu,"How it works"),vu.forEach(a),Fe=c(qp),Oe=r(qp,"DIV",{class:!0});var gu=n(Oe);be=r(gu,"DIV",{class:!0});var zi=n(be);et=p(zi,`Covering slurry stores helps keep rain out while containing odorous gases like ammonia, which result from
                    microbial activity. Ammonia emissions from manure storage contribute 9% of the UK’s agricultural ammonia
                    emissions. By covering your slurry store, you can substantially reduce these emissions. Conventional slurry
                    store covers aren’t airtight like anaerobic digester covers, so gas escapes at a reduced rate compared to
                    open stores.
                    `),Ye=r(zi,"BR",{}),st=c(zi),V=r(zi,"BR",{}),B=p(zi,`
                    Slurry store covers can be impermeable or permeable, fixed or floating. Impermeable covers prevent rainwater
                    from entering, reducing slurry volume and increasing storage capacity. In areas with moderate to high rainfall,
                    these covers can be cost-effective.
                    `),U=r(zi,"BR",{}),K=c(zi),X=r(zi,"BR",{}),re=p(zi,`
                    Captured fugitive emissions can be converted into biomethane to power onsite tractors or be sold to the transport
                    industry.`),zi.forEach(a),gu.forEach(a),qp.forEach(a),H=c(qv),Se=r(qv,"DIV",{class:!0});var $p=n(Se);Te=r($p,"DIV",{class:!0});var Dc=n(Te);ne=r(Dc,"DIV",{class:!0});var $v=n(ne);ye=r($v,"IMG",{src:!0,alt:!0,class:!0}),we=c($v),se=r($v,"DIV",{class:!0});var Sg=n(se);qe=p(Sg,"Pros"),Sg.forEach(a),$v.forEach(a),$e=c(Dc),Ge=r(Dc,"DIV",{class:!0});var Vc=n(Ge);_e=r(Vc,"UL",{class:!0});var jo=n(_e);Ue=r(jo,"LI",{});var Tg=n(Ue);ct=p(Tg,"Relatively low-cost and quick deployment."),Tg.forEach(a),Ne=c(jo),Je=r(jo,"LI",{});var Ag=n(Je);jt=p(Ag,"In some countries, like the UK, government grants may cover"),Ag.forEach(a),Lt=p(jo,`
                      initial costs.
                      `),ze=r(jo,"LI",{});var pd=n(ze);wt=p(pd,"Effective in reducing emissions."),pd.forEach(a),jo.forEach(a),Vc.forEach(a),Dc.forEach(a),Pt=c($p),Ve=r($p,"DIV",{class:!0});var hu=n(Ve);lt=r(hu,"DIV",{class:!0});var Up=n(lt);rt=r(Up,"IMG",{src:!0,alt:!0,class:!0}),gt=c(Up),Gt=r(Up,"DIV",{class:!0});var Fg=n(Gt);ft=p(Fg,"Cons"),Fg.forEach(a),Up.forEach(a),Nt=c(hu),Vt=r(hu,"DIV",{class:!0});var Hp=n(Vt);ie=r(Hp,"UL",{class:!0});var ff=n(ie);pt=r(ff,"LI",{});var Og=n(pt);kt=p(Og,"Covers are not airtight, so some methane may still escape."),Og.forEach(a),Yt=c(ff),it=r(ff,"LI",{});var pf=n(it);ht=p(pf,"If biogas cannot be used on site, finding an off-taker is necessary."),pf.forEach(a),Zt=p(ff,`
                      
                       `),ff.forEach(a),Hp.forEach(a),hu.forEach(a),$p.forEach(a),qv.forEach(a),pu.forEach(a),Mo.forEach(a),Rp.forEach(a),Tt=c(_c),at=r(_c,"DIV",{class:!0});var No=n(at);At=r(No,"DIV",{class:!0});var vd=n(At);Qe=r(vd,"DIV",{class:!0});var gd=n(Qe);_t=r(gd,"DIV",{class:!0});var mu=n(_t);dt=r(mu,"DIV",{class:!0});var sm=n(dt);Wt=p(sm,"Power from waste"),sm.forEach(a),mu.forEach(a),es=c(gd),mt=r(gd,"DIV",{class:!0});var Lg=n(mt);Me=p(Lg,"Anaerobic digestion"),Lg.forEach(a),gd.forEach(a),vd.forEach(a),ot=c(No),Mt=r(No,"DIV",{class:!0});var hd=n(Mt);Et=r(hd,"DIV",{class:!0});var xu=n(Et);xt=r(xu,"DIV",{class:!0});var Yp=n(xt);vt=r(Yp,"DIV",{class:!0});var Wp=n(vt);Bt=r(Wp,"DIV",{class:!0});var bu=n(Bt);bt=p(bu,"How it works"),bu.forEach(a),Ft=c(Wp),Jt=r(Wp,"DIV",{class:!0});var Cg=n(Jt);Rt=r(Cg,"DIV",{class:!0});var yu=n(Rt);qt=p(yu,`Anaerobic digestion (AD) is a process where microorganisms break down biodegradable material without oxygen.
                    This produces biogas, which can be used for electricity, heat, renewable natural gas, or transportation
                    fuels. Various AD technologies convert diverse organic waste streams into biogas continuously.
                    `),zt=r(yu,"BR",{}),Ct=c(yu),$t=r(yu,"BR",{}),St=p(yu,`
                    Digested solids can be composted, used for bedding, applied to cropland, or made into other products. Nutrients
                    in the liquid stream serve as agricultural fertilizers. AD is applicable across the human food supply chain,
                    from farm animal waste to restaurant food waste. The scale can range from thousands of tonnes per annum to just
                    a few kilograms per day.`),yu.forEach(a),Cg.forEach(a),Wp.forEach(a),rr=c(Yp),os=r(Yp,"DIV",{class:!0});var Bo=n(os);Ut=r(Bo,"DIV",{class:!0});var md=n(Ut);nt=r(md,"DIV",{class:!0});var ai=n(nt);Xt=r(ai,"IMG",{src:!0,alt:!0,class:!0}),Ss=c(ai),Ts=r(ai,"DIV",{class:!0});var wu=n(Ts);As=p(wu,"Pros"),wu.forEach(a),ai.forEach(a),It=c(md),bs=r(md,"DIV",{class:!0});var rm=n(bs);ts=r(rm,"UL",{class:!0});var xd=n(ts);ps=r(xd,"LI",{});var Gg=n(ps);Pr=p(Gg,"Suitable for most parts of the human food supply chain, significantly reducing environmental impact."),Gg.forEach(a),Na=c(xd),rs=r(xd,"LI",{});var vf=n(rs);ys=p(vf,"Smaller units for food waste are relatively affordable and usually don’t require planning consent."),vf.forEach(a),Ur=p(xd,`
                       `),Ys=r(xd,"BR",{}),br=p(xd," "),xd.forEach(a),rm.forEach(a),md.forEach(a),Kt=c(Bo),Fs=r(Bo,"DIV",{class:!0});var Ki=n(Fs);Ws=r(Ki,"DIV",{class:!0});var Pc=n(Ws);Ba=r(Pc,"IMG",{src:!0,alt:!0,class:!0}),fa=c(Pc),kr=r(Pc,"DIV",{class:!0});var am=n(kr);js=p(am,"Cons"),am.forEach(a),Pc.forEach(a),Hr=c(Ki),ws=r(Ki,"DIV",{class:!0});var Mg=n(ws);_s=r(Mg,"UL",{class:!0});var _u=n(_s);Vn=r(_u,"LI",{});var Cl=n(Vn);Ra=p(Cl,`Larger units for sizable operations can be expensive, take 12-18 months from feasibility to operation,
                        and may face local objections due to odor.`),Cl.forEach(a),as=c(_u),zs=r(_u,"LI",{});var jg=n(zs);ii=p(jg,"Bigger units require planning consent, necessitating expert support."),jg.forEach(a),qa=c(_u),Ks=r(_u,"LI",{});var gf=n(Ks);oi=p(gf,"We have partners who can help with this process."),gf.forEach(a),_u.forEach(a),Mg.forEach(a),Ki.forEach(a),Bo.forEach(a),Yp.forEach(a),xu.forEach(a),hd.forEach(a),No.forEach(a),$a=c(_c),ns=r(_c,"DIV",{class:!0});var ni=n(ns);Pn=r(ni,"DIV",{class:!0});var kc=n(Pn);yr=r(kc,"DIV",{class:!0});var Dr=n(yr);Js=r(Dr,"DIV",{class:!0});var Ji=n(Js);ar=r(Ji,"DIV",{class:!0});var Eu=n(ar);ci=p(Eu,"Power from waste"),Eu.forEach(a),Ji.forEach(a),pa=c(Dr),Qt=r(Dr,"DIV",{class:!0});var nm=n(Qt);Xs=p(nm,"Pyrolysis"),nm.forEach(a),Dr.forEach(a),kc.forEach(a),nr=c(ni),lr=r(ni,"DIV",{class:!0});var Ng=n(lr);ir=r(Ng,"DIV",{class:!0});var Xi=n(ir);Sr=r(Xi,"DIV",{class:!0});var Sc=n(Sr);vs=r(Sc,"DIV",{class:!0});var Uv=n(vs);cs=r(Uv,"DIV",{class:!0});var Bg=n(cs);nl=p(Bg,"How it works"),Bg.forEach(a),di=c(Uv),Yr=r(Uv,"DIV",{class:!0});var Qi=n(Yr);ss=r(Qi,"DIV",{class:!0});var yn=n(ss);ui=p(yn,`Pyrolysis is a thermochemical process applied to any organic material, involving chemical and physical
                    separation into different molecules at high temperatures and without oxygen. Unlike combustion and
                    gasification, which involve oxidation, pyrolysis is an endothermic process resulting in high-energy
                    products. `),Tr=r(yn,"BR",{}),Wr=c(yn),fi=r(yn,"BR",{}),ll=p(yn,`
                    Pyrolysis products include solid (charcoal, biochar), liquid, and non-condensable gases (H2, CH4, CnHm, CO, CO2,
                    and N). In some applications, liquid and gas phases can be used together when supplying hot syngas directly to
                    a burner or oxidation chamber.
                    `),lo=r(yn,"BR",{}),ls=c(yn),Es=r(yn,"BR",{}),Ar=p(yn,`
                    During pyrolysis, materials are heated to a specific temperature inside a pyrolysis unit until the process is
                    complete. The chosen temperature influences the composition and yields of pyrolysis oil, syngas, and char.`),yn.forEach(a),Qi.forEach(a),Uv.forEach(a),Ua=c(Sc),Ht=r(Sc,"DIV",{class:!0});var Hv=n(Ht);or=r(Hv,"DIV",{class:!0});var zp=n(or);wr=r(zp,"DIV",{class:!0});var el=n(wr);cr=r(el,"IMG",{src:!0,alt:!0,class:!0}),Fr=c(el),va=r(el,"DIV",{class:!0});var bd=n(va);kn=p(bd,"Pros"),bd.forEach(a),el.forEach(a),il=c(zp),Qs=r(zp,"DIV",{class:!0});var Rg=n(Qs);is=r(Rg,"UL",{class:!0});var Iu=n(is);Rl=r(Iu,"LI",{});var Kp=n(Rl);pi=p(Kp,"Versatile application across multiple industries: agriculture, energy, and transportation."),Kp.forEach(a),ds=c(Iu),zr=r(Iu,"LI",{});var qg=n(zr);Sn=p(qg,"Carbon sequestration through biochar production, aiding in climate change mitigation."),qg.forEach(a),dr=c(Iu),Ha=r(Iu,"LI",{});var $g=n(Ha);vi=p($g,"Eco-friendly approach to managing organic waste, reducing landfill usage."),$g.forEach(a),Iu.forEach(a),Rg.forEach(a),zp.forEach(a),ur=c(Hv),gs=r(Hv,"DIV",{class:!0});var Du=n(gs);Zs=r(Du,"DIV",{class:!0});var Jp=n(Zs);Is=r(Jp,"IMG",{src:!0,alt:!0,class:!0}),Or=c(Jp),Ya=r(Jp,"DIV",{class:!0});var Ug=n(Ya);gi=p(Ug,"Cons"),Ug.forEach(a),Jp.forEach(a),fr=c(Du),Ns=r(Du,"DIV",{class:!0});var Xp=n(Ns);Ds=r(Xp,"UL",{class:!0});var Ro=n(Ds);Lr=r(Ro,"LI",{});var Hg=n(Lr);Tn=p(Hg,"High initial investment, especially for larger operations."),Hg.forEach(a),An=c(Ro),Wa=r(Ro,"LI",{});var Gl=n(Wa);hi=p(Gl,"Demand for technical expertise and skilled personnel."),Gl.forEach(a),hs=c(Ro),Vs=r(Ro,"LI",{});var yd=n(Vs);Kr=p(yd,"Emission monitoring and management required to minimize environmental impacts."),yd.forEach(a),io=p(Ro,`
                       `),mi=r(Ro,"BR",{}),Fn=p(Ro," "),Ro.forEach(a),Xp.forEach(a),Du.forEach(a),Hv.forEach(a),Sc.forEach(a),Xi.forEach(a),Ng.forEach(a),ni.forEach(a),er=c(_c),pr=r(_c,"DIV",{class:!0});var wd=n(pr);_r=r(wd,"DIV",{class:!0});var Qp=n(_r);tr=r(Qp,"DIV",{class:!0});var Tc=n(tr);ol=p(Tc,"We see waste as a fuel opportunity "),Cr=r(Tc,"BR",{}),Jr=p(Tc,`
            – and it’s already yours!`),Tc.forEach(a),Bs=c(Qp),za=r(Qp,"DIV",{class:!0});var _d=n(za);Wc=p(_d,`Use our online tools to explore over 150 technology partners
            `),zc=r(_d,"BR",{}),Xr=p(_d,`
            solutions and start your power-from-waste project`),Wd=p(_d,xi),_d.forEach(a),Qp.forEach(a),oo=c(wd),bi=r(wd,"DIV",{});var Zp=n(bi);vr=r(Zp,"DIV",{class:!0});var Zi=n(vr);us=r(Zi,"DIV",{class:!0});var Ml=n(us);On=r(Ml,"DIV",{});var lm=n(On);Ln=r(lm,"DIV",{});var Yg=n(Ln);Ka=r(Yg,"IMG",{src:!0,alt:!0,class:!0}),Yg.forEach(a),lm.forEach(a),wi=c(Ml),ga=r(Ml,"DIV",{class:!0});var eo=n(ga);gr=r(eo,"DIV",{class:!0});var Ed=n(gr);co=r(Ed,"DIV",{class:!0});var Id=n(co);Kc=p(Id,"Exploration station"),Id.forEach(a),Qr=c(Ed),Cn=r(Ed,"DIV",{class:!0});var hf=n(Cn);Jc=p(hf,"Discover if your waste type is suitable for a project or learn more about power-from-waste"),hf.forEach(a),Ed.forEach(a),eo.forEach(a),_i=c(Ml),ha=r(Ml,"A",{href:!0});var Vu=n(ha);Ja=r(Vu,"DIV",{class:!0});var Yv=n(Ja);Gn=r(Yv,"IMG",{src:!0,alt:!0,class:!0}),uo=c(Yv),Xa=r(Yv,"DIV",{});var Wg=n(Xa);Qa=p(Wg,"Explore the possibilities"),Wg.forEach(a),Yv.forEach(a),Vu.forEach(a),Ml.forEach(a),ma=c(Zi),Ps=r(Zi,"DIV",{class:!0});var Ma=n(Ps);xa=r(Ma,"IMG",{class:!0,alt:!0,src:!0}),Zr=c(Ma),Za=r(Ma,"DIV",{class:!0});var ev=n(Za);ba=r(ev,"DIV",{class:!0});var tv=n(ba);ya=r(tv,"DIV",{class:!0});var zg=n(ya);ql=p(zg,"Calculator tool"),zg.forEach(a),Ei=c(tv),Ii=r(tv,"DIV",{class:!0});var Pu=n(Ii);$l=p(Pu,"Discover if your waste type is suitable for a project or learn more about power-from-waste"),Pu.forEach(a),tv.forEach(a),ev.forEach(a),Di=c(Ma),Mn=r(Ma,"A",{href:!0});var Kg=n(Mn);hr=r(Kg,"DIV",{class:!0});var sv=n(hr);en=r(sv,"IMG",{src:!0,alt:!0,class:!0}),tn=c(sv),Qo=r(sv,"DIV",{});var Ac=n(Qo);Xc=p(Ac,"Calculate now"),Ac.forEach(a),sv.forEach(a),Kg.forEach(a),Ma.forEach(a),Zi.forEach(a),po=c(Zp),cl=r(Zp,"DIV",{class:!0});var Jg=n(cl);ea=r(Jg,"DIV",{class:!0});var Xg=n(ea);ks=r(Xg,"DIV",{class:!0});var rv=n(ks);wa=r(rv,"IMG",{src:!0,alt:!0,class:!0}),zd=c(rv),sr=r(rv,"DIV",{class:!0});var av=n(sr);Er=r(av,"DIV",{class:!0});var ku=n(Er);sn=p(ku,"Concerned about costs?"),ku.forEach(a),Pi=c(av),ki=r(av,"DIV",{class:!0});var Qg=n(ki);rn=p(Qg,`Even our larger projects have payback periods under five years, with some as low as two. After that, you
                    only cover the annual facility maintenance cost, with no grid or standing charges.`),Qg.forEach(a),av.forEach(a),rv.forEach(a),Xg.forEach(a),Jg.forEach(a),Zp.forEach(a),wd.forEach(a),_c.forEach(a),an=c(df),Ul=r(df,"DIV",{class:!0});var nv=n(Ul);dl=r(nv,"DIV",{class:!0});var wn=n(dl);ms=r(wn,"DIV",{class:!0});var Zg=n(ms);_a=r(Zg,"DIV",{class:!0});var jl=n(_a);Si=p(jl,"Other green energy sources"),jl.forEach(a),Zg.forEach(a),Ea=c(wn),Zo=r(wn,"DIV",{class:!0});var eh=n(Zo);Qc=p(eh,"Different renewable energy sources can be combined to find the perfect solution for your project"),eh.forEach(a),wn.forEach(a),mr=c(nv),Rs=r(nv,"DIV",{class:!0});var to=n(Rs);ul=r(to,"DIV",{class:!0});var qo=n(ul);Nn=r(qo,"DIV",{class:!0,id:!0});var so=n(Nn);Cs=r(so,"DIV",{class:!0,id:!0});var Dd=n(Cs);Ia=r(Dd,"DIV",{class:!0}),n(Ia).forEach(a),Dd.forEach(a),Zc=c(so),fl=r(so,"DIV",{class:!0});var Vd=n(fl);qs=r(Vd,"DIV",{class:!0});var th=n(qs);Ti=p(th,"Solar power"),th.forEach(a),Kd=c(Vd),Gr=r(Vd,"DIV",{class:!0});var lv=n(Gr);Mr=r(lv,"DIV",{class:!0});var $o=n(Mr);Jd=p($o,`Solar power converts the Sun’s photons into electricity through solar panels. It works in most locations and
                  has several benefits.`),$o.forEach(a),ed=c(lv),jr=r(lv,"BUTTON",{onclick:!0,href:!0});var Pd=n(jr);nn=r(Pd,"IMG",{id:!0,src:!0}),pl=c(Pd),vo=r(Pd,"IMG",{id:!0,class:!0,src:!0}),Pd.forEach(a),lv.forEach(a),Vd.forEach(a),so.forEach(a),Xd=c(qo),ta=r(qo,"DIV",{id:!0,class:!0});var sh=n(ta);$s=r(sh,"DIV",{class:!0});var iv=n($s);vl=r(iv,"DIV",{class:!0});var ov=n(vl);Bn=r(ov,"DIV",{class:!0});var cv=n(Bn);Ai=r(cv,"IMG",{src:!0,alt:!0,class:!0}),sa=c(cv),Rn=r(cv,"DIV",{class:!0});var mf=n(Rn);Qu=p(mf,"Pros"),mf.forEach(a),cv.forEach(a),Qd=c(ov),go=r(ov,"DIV",{class:!0});var rh=n(go);Us=r(rh,"UL",{class:!0});var Su=n(Us);on=r(Su,"LI",{});var kd=n(on);Zu=p(kd,"Often cheaper than fossil fuels by 2023"),kd.forEach(a),Zd=c(Su),ec=r(Su,"LI",{});var xf=n(ec);qn=p(xf,"Environmentally friendly Low maintenance and long-lasting"),xf.forEach(a),cn=c(Su),tc=r(Su,"LI",{});var Sd=n(tc);eu=p(Sd,"Emissions-free during use"),Sd.forEach(a),Su.forEach(a),rh.forEach(a),ov.forEach(a),Oi=c(iv),Da=r(iv,"DIV",{class:!0});var Wv=n(Da);$n=r(Wv,"DIV",{class:!0});var dv=n($n);gl=r(dv,"IMG",{src:!0,alt:!0,class:!0}),ef=c(dv),Un=r(dv,"DIV",{class:!0});var Td=n(Un);hl=p(Td,"Cons"),Td.forEach(a),dv.forEach(a),mo=c(Wv),xo=r(Wv,"DIV",{class:!0});var bf=n(xo);Va=r(bf,"UL",{class:!0});var Fc=n(Va);Hn=r(Fc,"LI",{});var ah=n(Hn);dn=p(ah,"High initial costs"),ah.forEach(a),tu=c(Fc),sc=r(Fc,"LI",{});var Tu=n(sc);ml=p(Tu,"Intermittent power supply, requiring grid connection or battery storage"),Tu.forEach(a),rc=c(Fc),xl=r(Fc,"LI",{});var nh=n(xl);Yl=p(nh,"Environmental impacts during production and disposal"),nh.forEach(a),Yn=c(Fc),Pa=r(Fc,"LI",{});var lh=n(Pa);bo=p(lh,"Potential local resistance to solar farm installations near habitation"),lh.forEach(a),Fc.forEach(a),bf.forEach(a),Wv.forEach(a),iv.forEach(a),sh.forEach(a),qo.forEach(a),Li=c(to),un=r(to,"DIV",{class:!0});var $r=n(un);bl=r($r,"DIV",{class:!0,id:!0});var Uo=n(bl);ka=r(Uo,"DIV",{class:!0,id:!0});var Ad=n(ka);yl=r(Ad,"DIV",{class:!0}),n(yl).forEach(a),Ad.forEach(a),su=c(Uo),Wl=r(Uo,"DIV",{class:!0});var uv=n(Wl);Wn=r(uv,"DIV",{class:!0});var Au=n(Wn);ru=p(Au,"Wind power"),Au.forEach(a),Ci=c(uv),Ir=r(uv,"DIV",{class:!0});var zv=n(Ir);fn=r(zv,"DIV",{class:!0});var ih=n(fn);Sa=p(ih,"Wind power, also called “Eolic” energy, generates electricity using wind turbines."),ih.forEach(a),Gi=c(zv),zl=r(zv,"BUTTON",{onclick:!0,href:!0});var Oc=n(zl);Mi=r(Oc,"IMG",{id:!0,class:!0,src:!0}),yo=c(Oc),Ta=r(Oc,"IMG",{id:!0,src:!0}),Oc.forEach(a),zv.forEach(a),uv.forEach(a),Uo.forEach(a),wo=c($r),wl=r($r,"DIV",{id:!0,class:!0});var yf=n(wl);zn=r(yf,"DIV",{class:!0});var fv=n(zn);Hs=r(fv,"DIV",{class:!0});var pv=n(Hs);ra=r(pv,"DIV",{class:!0});var vv=n(ra);_l=r(vv,"IMG",{src:!0,alt:!0,class:!0}),au=c(vv),aa=r(vv,"DIV",{class:!0});var Fd=n(aa);ji=p(Fd,"Pros"),Fd.forEach(a),vv.forEach(a),_o=c(pv),Jl=r(pv,"DIV",{class:!0});var Od=n(Jl);xs=r(Od,"UL",{class:!0});var Fu=n(xs);Aa=r(Fu,"LI",{});var Ou=n(Aa);Eo=p(Ou,"Often cheaper than fossil fuels by 2023"),Ou.forEach(a),El=c(Fu),td=r(Fu,"LI",{});var im=n(td);ac=p(im,"Environmentally friendly Low maintenance and long-lasting"),im.forEach(a),Nr=c(Fu),pn=r(Fu,"LI",{});var oh=n(pn);nu=p(oh,"Emissions-free during use"),oh.forEach(a),Fu.forEach(a),Od.forEach(a),pv.forEach(a),nc=c(fv),Br=r(fv,"DIV",{class:!0});var Lc=n(Br);vn=r(Lc,"DIV",{class:!0});var Ld=n(vn);Ni=r(Ld,"IMG",{src:!0,alt:!0,class:!0}),Il=c(Ld),lc=r(Ld,"DIV",{class:!0});var ch=n(lc);ic=p(ch,"Cons"),ch.forEach(a),Ld.forEach(a),Xl=c(Lc),Dl=r(Lc,"DIV",{class:!0});var dh=n(Dl);Fa=r(dh,"UL",{class:!0});var Cc=n(Fa);oc=r(Cc,"LI",{});var Cd=n(oc);lu=p(Cd,"High initial costs"),Cd.forEach(a),Kn=c(Cc),na=r(Cc,"LI",{});var Gd=n(na);gn=p(Gd,"Intermittent power supply, requiring grid connection or battery storage"),Gd.forEach(a),sd=c(Cc),Bi=r(Cc,"LI",{});var uh=n(Bi);cc=p(uh,"Environmental impacts during production and disposal"),uh.forEach(a),Vl=c(Cc),Pl=r(Cc,"LI",{});var Lu=n(Pl);Ql=p(Lu,"Potential local resistance to solar farm installations near habitation"),Lu.forEach(a),Cc.forEach(a),dh.forEach(a),Lc.forEach(a),fv.forEach(a),yf.forEach(a),$r.forEach(a),iu=c(to),Zl=r(to,"DIV",{class:!0});var Kv=n(Zl);Rr=r(Kv,"DIV",{class:!0,id:!0});var gv=n(Rr);la=r(gv,"DIV",{class:!0,id:!0});var Md=n(la);kl=r(Md,"DIV",{class:!0}),n(kl).forEach(a),Md.forEach(a),rf=c(gv),ei=r(gv,"DIV",{class:!0});var hv=n(ei);Do=r(hv,"DIV",{class:!0});var wf=n(Do);Sl=p(wf,"Energy storage"),wf.forEach(a),hn=c(hv),Tl=r(hv,"DIV",{class:!0});var mv=n(Tl);Vo=r(mv,"DIV",{class:!0});var fh=n(Vo);dc=p(fh,"Energy storage is a crucial technology that allows us to store excess energy for future use."),fh.forEach(a),Jn=c(mv),ia=r(mv,"BUTTON",{onclick:!0,href:!0});var xv=n(ia);Po=r(xv,"IMG",{id:!0,src:!0,class:!0}),mn=c(xv),Oa=r(xv,"IMG",{id:!0,src:!0}),xv.forEach(a),mv.forEach(a),hv.forEach(a),gv.forEach(a),uc=c(Kv),xn=r(Kv,"DIV",{id:!0,class:!0});var jd=n(xn);Ri=r(jd,"DIV",{class:!0});var Ho=n(Ri);ti=r(Ho,"DIV",{class:!0});var bv=n(ti);qr=r(bv,"DIV",{class:!0});var Gc=n(qr);Xn=r(Gc,"IMG",{src:!0,alt:!0,class:!0}),qi=c(Gc),oa=r(Gc,"DIV",{class:!0});var om=n(oa);fc=p(om,"Pros"),om.forEach(a),Gc.forEach(a),pc=c(bv),ko=r(bv,"DIV",{class:!0});var ph=n(ko);La=r(ph,"UL",{class:!0});var ro=n(La);vc=r(ro,"LI",{});var _f=n(vc);gc=p(_f,"Often cheaper than fossil fuels by 2023"),_f.forEach(a),So=c(ro),Ca=r(ro,"LI",{});var vh=n(Ca);si=p(vh,"Environmentally friendly Low maintenance and long-lasting"),vh.forEach(a),Qn=c(ro),To=r(ro,"LI",{});var gh=n(To);gg=p(gh,"Emissions-free during use"),gh.forEach(a),ro.forEach(a),ph.forEach(a),bv.forEach(a),Lv=c(Ho),Zn=r(Ho,"DIV",{class:!0});var yv=n(Zn);Al=r(yv,"DIV",{class:!0});var Yo=n(Al);nd=r(Yo,"IMG",{src:!0,alt:!0,class:!0}),ld=c(Yo),ou=r(Yo,"DIV",{class:!0});var Nd=n(ou);Cv=p(Nd,"Cons"),Nd.forEach(a),Yo.forEach(a),hc=c(yv),Ao=r(yv,"DIV",{class:!0});var hh=n(Ao);xr=r(hh,"UL",{class:!0});var Nl=n(xr);Fo=r(Nl,"LI",{});var cm=n(Fo);mg=p(cm,"High initial costs"),cm.forEach(a),Gv=c(Nl),nf=r(Nl,"LI",{});var mh=n(nf);cu=p(mh,"Intermittent power supply, requiring grid connection or battery storage"),mh.forEach(a),Oo=c(Nl),Lo=r(Nl,"LI",{});var Bd=n(Lo);xg=p(Bd,"Environmental impacts during production and disposal"),Bd.forEach(a),Mv=c(Nl),lf=r(Nl,"LI",{});var xh=n(lf);ri=p(xh,"Potential local resistance to solar farm installations near habitation"),xh.forEach(a),Nl.forEach(a),hh.forEach(a),yv.forEach(a),Ho.forEach(a),jd.forEach(a),Kv.forEach(a),to.forEach(a),nv.forEach(a),df.forEach(a),mc=c(Ol),$i=r(Ol,"DIV",{class:!0});var Rd=n($i);du=r(Rd,"DIV",{class:!0});var bh=n(du);jv=p(bh,"Copyright © 2023 Power for Planet"),bh.forEach(a),Ui=c(Rd),Fl=r(Rd,"DIV",{class:!0});var wv=n(Fl);of=r(wv,"DIV",{class:!0});var yh=n(of);Nv=p(yh,"Privacy Policy"),yh.forEach(a),bn=c(wv),Ga=r(wv,"DIV",{class:!0});var li=n(Ga);Hi=r(li,"IMG",{src:!0,alt:!0,class:!0}),bg=c(li),id=r(li,"IMG",{src:!0,alt:!0,class:!0}),od=c(li),cd=r(li,"IMG",{src:!0,alt:!0,class:!0}),li.forEach(a),wv.forEach(a),Rd.forEach(a),Go=c(Ol),bc=r(Ol,"SCRIPT",{});var qd=n(bc);Bv=p(qd,`function toggleElement(k) {
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
    }`),qd.forEach(a),Ol.forEach(a),this.h()},h(){t(g,"class","w-full flex-col flex justify-center items-center gap-2.5 text-[44px] leading-[46px] font-bold"),t(v,"class","bg-cover bg-center bg-[url('/assets/new/E2.jpg')] h-[240px] bg-[#2e3855] bg-blend-darken bg-opacity-[0.2] w-full flex-col h-2/5 flex justify-center items-center gap-5 px-[50px] py-10 rounded-[20px] text-center text-white font-Poppins"),t(P,"class","uppercase tracking-wider"),t(y,"class","bg-white flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-[#3f9378]"),t(_,"class","text-4xl leading-[46px] font-bold text-[#2e3855] h-[92px] w-[660px]"),t(E,"class","w-full flex-col flex items-center gap-5 text-center font-Poppins"),t(j,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(O,"class","font-bold text-xl leading-[34px] font-Poppins"),t(W,"class","font-bold text-xl leading-[34px] text-[#3f9378] font-Poppins"),t(oe,"class","font-bold text-xl leading-[34px] font-Poppins"),t(R,"class","w-[440px]"),t(w,"class","w-full flex items-start gap-[18px]"),t(L,"class","w-full flex-col flex items-start gap-6 text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins"),t(G,"class","bg-white h-full flex-1 flex-col flex items-start gap-[18px] p-10 rounded-[20px]"),t(ce,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(ue,"class","font-bold text-xl leading-[34px] text-[#3f9378] font-Poppins"),t(de,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[440px]"),t(Ee,"class","w-full flex-col flex items-start gap-[18px]"),t(ae,"class","w-full flex-col flex items-start gap-5"),t($,"class","bg-white h-full flex-1 flex-col flex items-start gap-[60px] p-10 rounded-[20px]"),t(A,"class","w-full h-[208px] flex items-start gap-5"),t(u,"class","flex-col w-full flex items-start gap-10 rounded-[20px]"),t(le,"class","uppercase tracking-wider"),t(he,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(Le,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(xe,"class","flex-col flex items-center gap-5"),t(pe,"class","bg-cover bg-[url('/assets/new/E3.jpg')] bg-blend-darken bg-center bg-[#2e3855] bg-opacity-[0.4] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(me,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(be,"class","w-[700px]"),t(Oe,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(He,"class","flex-col w-[700px] flex items-center gap-4"),S(ye.src,ut="/assets/new/badge-plus.svg")||t(ye,"src",ut),t(ye,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Slurrycovers-31-Frame32-31-wrapper-31-03Greenenergy"),t(ye,"class","h-6 w-6"),t(se,"class","uppercase"),t(ne,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(_e,"class","list-disc"),t(Ge,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Te,"class","flex-1 flex-col flex items-start gap-4 align-top"),S(rt.src,Dt="/assets/new/badge-minus.svg")||t(rt,"src",Dt),t(rt,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Slurrycovers-31-Frame32-31-wrapper-31-03Greenenergy0"),t(rt,"class","h-6 w-6"),t(Gt,"class","uppercase"),t(lt,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(ie,"class","list-disc"),t(Vt,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Ve,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Se,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(Z,"class","w-full flex-col flex justify-center items-center gap-10"),t(ke,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(We,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(De,"class","w-full flex-col flex items-start"),t(dt,"class","uppercase tracking-wider"),t(_t,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(mt,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(Qe,"class","flex-col flex items-center gap-5"),t(At,"class","bg-cover bg-[url('/assets/new/E4.jpg')] bg-center bg-blend-darken bg-[#2e3855] bg-opacity-[0.4] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(Bt,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(Rt,"class","w-[700px]"),t(Jt,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(vt,"class","flex-col w-[700px] flex items-center gap-4"),S(Xt.src,fs="/assets/new/badge-plus.svg")||t(Xt,"src",fs),t(Xt,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Anaerobicdigestion-31-Frame32-31-wrapper-31-03Greenenergy"),t(Xt,"class","h-6 w-6"),t(Ts,"class","uppercase"),t(nt,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(ts,"class","list-disc"),t(bs,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Ut,"class","flex-1 flex-col flex items-start gap-4"),S(Ba.src,ua="/assets/new/badge-minus.svg")||t(Ba,"src",ua),t(Ba,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Anaerobicdigestion-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Ba,"class","h-6 w-6"),t(kr,"class","uppercase"),t(Ws,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(_s,"class","list-disc"),t(ws,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Fs,"class","h-full flex-1 flex-col flex items-start gap-4"),t(os,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(xt,"class","w-full flex-col flex justify-center items-center gap-10"),t(Et,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(Mt,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(at,"class","w-full flex-col flex items-start"),t(ar,"class","uppercase tracking-wider"),t(Js,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(Qt,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(yr,"class","flex-col flex items-center gap-5"),t(Pn,"class","bg-cover bg-[url('/assets/new/E5.png')] bg-[center_top_400px] bg-blend-darken bg-[#2e3855] bg-opacity-[0.5] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(cs,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(ss,"class","w-[700px]"),t(Yr,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(vs,"class","flex-col w-[700px] flex items-center gap-4"),S(cr.src,Os="/assets/new/badge-plus.svg")||t(cr,"src",Os),t(cr,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Pyrolysis-31-Frame32-31-wrapper-31-03Greenenergy"),t(cr,"class","h-6 w-6"),t(va,"class","uppercase"),t(wr,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(is,"class","list-disc"),t(Qs,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(or,"class","flex-1 flex-col flex items-start gap-4"),S(Is.src,Ls="/assets/new/badge-minus.svg")||t(Is,"src",Ls),t(Is,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Pyrolysis-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Is,"class","h-6 w-6"),t(Ya,"class","uppercase"),t(Zs,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Ds,"class","list-disc"),t(Ns,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(gs,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Ht,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(Sr,"class","w-full flex-col flex justify-center items-center gap-10"),t(ir,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(lr,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(ns,"class","w-full flex-col flex items-start"),t(tr,"class","text-3xl leading-[46px] font-bold font-Poppins"),t(za,"class","text-sm leading-[26px] font-light font-PublicSans w-[498px]"),t(_r,"class","flex-col flex items-center gap-2 text-center text-[#2e3855]"),S(Ka.src,yi="/assets/new/E6.png")||t(Ka,"src",yi),t(Ka,"alt","Group7-31-Group21-31-img-31-Frame19-31-PFPtools-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),t(Ka,"class","h-[150px]"),t(co,"class","text-2xl leading-[33px] font-bold font-Poppins w-[390px]"),t(Cn,"class","text-md leading-[26px] font-light font-PublicSans w-[390px]"),t(gr,"class","w-full flex-col flex items-start gap-2 text-center text-white"),t(ga,"class","w-full flex-col flex items-center gap-3"),S(Gn.src,Xu="/assets/new/arrow-right-circle.svg")||t(Gn,"src",Xu),t(Gn,"alt","arrow-right-circle-31-CTA-31-ctas-31-Frame25-31-Frame24-31-Hero-31-wrapper-31-03Greenenergy"),t(Gn,"class","h-5 w-5"),t(Ja,"class","bg-[#eb8b5a] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-white"),t(ha,"href","/explore#map3"),t(us,"class","bg-[#2e3855] flex-1 flex-col flex justify-center items-center gap-6 p-10 rounded-[20px]"),t(xa,"class","object-cover h-[150px]"),t(xa,"alt","calculator-31-Frame26-31-PFPtools-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),S(xa.src,fo="/assets/new/calc.png")||t(xa,"src",fo),t(ya,"class","text-2xl leading-[33px] font-bold font-Poppins w-[390px]"),t(Ii,"class","text-md leading-[26px] font-light font-PublicSans w-[390px]"),t(ba,"class","w-full flex-col flex items-start gap-2 text-center text-[#2e3855]"),t(Za,"class","w-full flex-col flex items-center gap-3"),S(en.src,jn="/assets/new/arrow-right-circle.svg")||t(en,"src",jn),t(en,"alt","arrow-right-circle-31-CTA-31-ctas-31-Frame25-31-Frame24-31-Hero-31-wrapper-31-03Greenenergy"),t(en,"class","h-5 w-5"),t(hr,"class","bg-[#eb8b5a] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-white"),t(Mn,"href","/explore#calculator3"),t(Ps,"class","bg-[#d0e6f2] flex-1 flex-col flex justify-center items-center gap-6 p-10 rounded-[20px]"),t(vr,"class","w-full flex items-start gap-5"),S(wa.src,Vi="/assets/new/costs.png")||t(wa,"src",Vi),t(wa,"alt","illu-costs-31-Frame24-31-Frame18-31-costs-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),t(wa,"class","h-[120px]"),t(Er,"class","text-2xl leading-[33px] font-bold font-Poppins"),t(ki,"class","text-md leading-[26px] font-light font-PublicSans"),t(sr,"class","flex-col flex items-start gap-4"),t(ks,"class","flex items-center gap-10"),t(ea,"class","w-full flex-col flex justify-center items-center gap-[30px] text-[#2e3855]"),t(cl,"class","bg-[#e7f5f5] flex-col w-full flex items-start gap-10 px-10 pt-10 pb-[50px] rounded-[20px] mt-5"),t(pr,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(Q,"class","w-full flex-col flex items-start gap-10"),t(_a,"class","uppercase tracking-wider"),t(ms,"class","bg-white flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-[#3f9378]"),t(Zo,"class","text-4xl leading-[46px] font-bold text-[#2e3855] w-[700px]"),t(dl,"class","w-full flex-col flex items-center gap-4 pb-[50px] text-center font-Poppins"),t(Ia,"class","flex-col flex items-center gap-5"),t(Cs,"class","bg-cover bg-[url('/assets/new/E11.jpg')] bg-center flex-col h-[245px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-tl-[20px]"),t(Cs,"id","xsp1img"),t(qs,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(Mr,"class","w-[520px]"),t(nn,"id","xsp1a"),S(nn.src,ln="/assets/new/rl.png")||t(nn,"src",ln),t(vo,"id","xsp1b"),t(vo,"class","hidden"),S(vo.src,Hl="/assets/new/rm.png")||t(vo,"src",Hl),t(jr,"onclick","toggleElement('xsp1')"),t(jr,"href","#"),t(Gr,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(fl,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(Nn,"class","bg-white w-full flex items-center rounded-t-[20px]"),t(Nn,"id","xsp1box"),S(Ai.src,Fi="/assets/new/badge-plus.svg")||t(Ai,"src",Fi),t(Ai,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Ai,"class","h-6 w-6"),t(Rn,"class","uppercase"),t(Bn,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Us,"class","list-disc"),t(go,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(vl,"class","flex-1 flex-col flex items-start gap-4"),S(gl.src,ho="/assets/new/badge-minus.svg")||t(gl,"src",ho),t(gl,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy00"),t(gl,"class","h-6 w-6"),t(Un,"class","uppercase"),t($n,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Va,"class","list-disc"),t(xo,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(Da,"class","h-full flex-1 flex-col flex items-start gap-4"),t($s,"class","bg-[#e7f5f5] w-full h-full flex items-start gap-10 px-[60px] rounded-b-[20px] pt-[30px]"),t(ta,"id","xsp1"),t(ta,"class","h-[250px] h-[0px] duration-300 bg-none w-full flex-col flex items-start gap-10 rounded-b-[20px] text-sm text-[#2e3855]"),t(ul,"class","flex-col w-[1060px] flex items-start rounded-[20px]"),t(yl,"class","flex-col flex items-center gap-5"),t(ka,"class","bg-cover bg-[url('/assets/new/E12.jpg')] bg-center flex-col h-[245px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-tl-[20px] rounded-bl-[20px]"),t(ka,"id","xsp2img"),t(Wn,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(fn,"class","w-[520px]"),t(Mi,"id","xsp2a"),t(Mi,"class","hidden"),S(Mi.src,tf="/assets/new/rl.png")||t(Mi,"src",tf),t(Ta,"id","xsp2b"),S(Ta.src,Kl="/assets/new/rm.png")||t(Ta,"src",Kl),t(zl,"onclick","toggleElement('xsp2')"),t(zl,"href","#"),t(Ir,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(Wl,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(bl,"class","bg-white w-full flex items-center rounded-t-[20px] rounded-b-[20px]"),t(bl,"id","xsp2box"),S(_l.src,sf="/assets/new/badge-plus.svg")||t(_l,"src",sf),t(_l,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy0"),t(_l,"class","h-6 w-6"),t(aa,"class","uppercase"),t(ra,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(xs,"class","list-disc"),t(Jl,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(Hs,"class","flex-1 flex-col flex items-start gap-4"),S(Ni.src,Io="/assets/new/badge-minus.svg")||t(Ni,"src",Io),t(Ni,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy00"),t(Ni,"class","h-6 w-6"),t(lc,"class","uppercase"),t(vn,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Fa,"class","list-disc"),t(Dl,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(Br,"class","h-full flex-1 flex-col flex items-start gap-4"),t(zn,"class","bg-[#e7f5f5] w-full h-full flex items-start gap-10 px-[60px] rounded-b-[20px] pt-[30px]"),t(wl,"id","xsp2"),t(wl,"class","-translate-y-full opacity-0 duration-300 h-[0px] bg-white w-full flex-col flex items-start gap-10 rounded-b-[20px] text-sm text-[#2e3855]"),t(un,"class","flex-col w-[1060px] flex items-start rounded-[20px]"),t(kl,"class","flex-col flex items-center gap-5"),t(la,"class","bg-cover bg-[url('/assets/new/E13.jpg')] bg-center flex-col h-[245px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-tl-[20px] rounded-bl-[20px]"),t(la,"id","xsp3img"),t(Do,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(Vo,"class","w-[520px]"),t(Po,"id","xsp3a"),S(Po.src,rd="/assets/new/rl.png")||t(Po,"src",rd),t(Po,"class","hidden"),t(Oa,"id","xsp3b"),S(Oa.src,ad="/assets/new/rm.png")||t(Oa,"src",ad),t(ia,"onclick","toggleElement('xsp3')"),t(ia,"href","#"),t(Tl,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(ei,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(Rr,"class","bg-white w-full flex items-center rounded-t-[20px] rounded-b-[20px]"),t(Rr,"id","xsp3box"),S(Xn.src,af="/assets/new/badge-plus.svg")||t(Xn,"src",af),t(Xn,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Xn,"class","h-6 w-6"),t(oa,"class","uppercase"),t(qr,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(La,"class","list-disc"),t(ko,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(ti,"class","flex-1 flex-col flex items-start gap-4"),S(nd.src,hg="/assets/new/badge-minus.svg")||t(nd,"src",hg),t(nd,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy00"),t(nd,"class","h-6 w-6"),t(ou,"class","uppercase"),t(Al,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(xr,"class","list-disc"),t(Ao,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(Zn,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Ri,"class","bg-[#e7f5f5] w-full h-full flex items-start gap-10 px-[60px] pt-[30px] rounded-b-[20px]"),t(xn,"id","xsp3"),t(xn,"class","-translate-y-full opacity-0 duration-300 h-[0px] bg-white w-full flex-col flex items-start gap-10 rounded-b-[20px] text-sm text-[#2e3855]"),t(Zl,"class","flex-col w-[1060px] flex items-start rounded-[20px] mt-[10px]"),t(Rs,"class","flex-col flex items-start gap-[30px]"),t(Ul,"class","w-full flex-col flex items-start gap-2.5"),t(i,"class","flex-col w-[1060px] flex items-center gap-10"),t(du,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(of,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Hi.src,xc="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Hi,"src",xc),t(Hi,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Hi,"class","h-6 w-6"),S(id.src,Co="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(id,"src",Co),t(id,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(id,"class","h-6 w-6"),S(cd.src,yg="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(cd,"src",yg),t(cd,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(cd,"class","h-6 w-6"),t(Ga,"class","flex items-center gap-5"),t(Fl,"class","flex-1 flex justify-end items-center gap-10"),t($i,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 mw-[1060px]")},m(cf,Ol){Ze(cf,l,Ol),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(u,h),e(u,E),e(E,y),e(y,P),e(P,D),e(E,I),e(E,_),e(_,F),e(u,k),e(u,A),e(A,G),e(G,j),e(G,b),e(G,L),e(L,w),e(w,R),e(R,O),e(O,C),e(R,M),e(R,W),e(W,Y),e(R,q),e(R,oe),e(oe,ve),e(A,z),e(A,$),e($,ae),e(ae,Ee),e(Ee,ce),e(Ee,Xe),e(Ee,de),e(de,te),e(de,Ae),e(de,Ie),e(de,ue),e(ue,je),e(de,fe),e(i,N),e(i,Q),e(Q,De),e(De,pe),e(pe,xe),e(xe,he),e(he,le),e(le,J),e(xe,Re),e(xe,Le),e(Le,Pe),e(De,ee),e(De,We),e(We,ke),e(ke,Z),e(Z,He),e(He,me),e(me,Ce),e(He,Fe),e(He,Oe),e(Oe,be),e(be,et),e(be,Ye),e(be,st),e(be,V),e(be,B),e(be,U),e(be,K),e(be,X),e(be,re),e(Z,H),e(Z,Se),e(Se,Te),e(Te,ne),e(ne,ye),e(ne,we),e(ne,se),e(se,qe),e(Te,$e),e(Te,Ge),e(Ge,_e),e(_e,Ue),e(Ue,ct),e(_e,Ne),e(_e,Je),e(Je,jt),e(_e,Lt),e(_e,ze),e(ze,wt),e(Se,Pt),e(Se,Ve),e(Ve,lt),e(lt,rt),e(lt,gt),e(lt,Gt),e(Gt,ft),e(Ve,Nt),e(Ve,Vt),e(Vt,ie),e(ie,pt),e(pt,kt),e(ie,Yt),e(ie,it),e(it,ht),e(ie,Zt),e(Q,Tt),e(Q,at),e(at,At),e(At,Qe),e(Qe,_t),e(_t,dt),e(dt,Wt),e(Qe,es),e(Qe,mt),e(mt,Me),e(at,ot),e(at,Mt),e(Mt,Et),e(Et,xt),e(xt,vt),e(vt,Bt),e(Bt,bt),e(vt,Ft),e(vt,Jt),e(Jt,Rt),e(Rt,qt),e(Rt,zt),e(Rt,Ct),e(Rt,$t),e(Rt,St),e(xt,rr),e(xt,os),e(os,Ut),e(Ut,nt),e(nt,Xt),e(nt,Ss),e(nt,Ts),e(Ts,As),e(Ut,It),e(Ut,bs),e(bs,ts),e(ts,ps),e(ps,Pr),e(ts,Na),e(ts,rs),e(rs,ys),e(ts,Ur),e(ts,Ys),e(ts,br),e(os,Kt),e(os,Fs),e(Fs,Ws),e(Ws,Ba),e(Ws,fa),e(Ws,kr),e(kr,js),e(Fs,Hr),e(Fs,ws),e(ws,_s),e(_s,Vn),e(Vn,Ra),e(_s,as),e(_s,zs),e(zs,ii),e(_s,qa),e(_s,Ks),e(Ks,oi),e(Q,$a),e(Q,ns),e(ns,Pn),e(Pn,yr),e(yr,Js),e(Js,ar),e(ar,ci),e(yr,pa),e(yr,Qt),e(Qt,Xs),e(ns,nr),e(ns,lr),e(lr,ir),e(ir,Sr),e(Sr,vs),e(vs,cs),e(cs,nl),e(vs,di),e(vs,Yr),e(Yr,ss),e(ss,ui),e(ss,Tr),e(ss,Wr),e(ss,fi),e(ss,ll),e(ss,lo),e(ss,ls),e(ss,Es),e(ss,Ar),e(Sr,Ua),e(Sr,Ht),e(Ht,or),e(or,wr),e(wr,cr),e(wr,Fr),e(wr,va),e(va,kn),e(or,il),e(or,Qs),e(Qs,is),e(is,Rl),e(Rl,pi),e(is,ds),e(is,zr),e(zr,Sn),e(is,dr),e(is,Ha),e(Ha,vi),e(Ht,ur),e(Ht,gs),e(gs,Zs),e(Zs,Is),e(Zs,Or),e(Zs,Ya),e(Ya,gi),e(gs,fr),e(gs,Ns),e(Ns,Ds),e(Ds,Lr),e(Lr,Tn),e(Ds,An),e(Ds,Wa),e(Wa,hi),e(Ds,hs),e(Ds,Vs),e(Vs,Kr),e(Ds,io),e(Ds,mi),e(Ds,Fn),e(Q,er),e(Q,pr),e(pr,_r),e(_r,tr),e(tr,ol),e(tr,Cr),e(tr,Jr),e(_r,Bs),e(_r,za),e(za,Wc),e(za,zc),e(za,Xr),e(za,Wd),e(pr,oo),e(pr,bi),e(bi,vr),e(vr,us),e(us,On),e(On,Ln),e(Ln,Ka),e(us,wi),e(us,ga),e(ga,gr),e(gr,co),e(co,Kc),e(gr,Qr),e(gr,Cn),e(Cn,Jc),e(us,_i),e(us,ha),e(ha,Ja),e(Ja,Gn),e(Ja,uo),e(Ja,Xa),e(Xa,Qa),e(vr,ma),e(vr,Ps),e(Ps,xa),e(Ps,Zr),e(Ps,Za),e(Za,ba),e(ba,ya),e(ya,ql),e(ba,Ei),e(ba,Ii),e(Ii,$l),e(Ps,Di),e(Ps,Mn),e(Mn,hr),e(hr,en),e(hr,tn),e(hr,Qo),e(Qo,Xc),e(bi,po),e(bi,cl),e(cl,ea),e(ea,ks),e(ks,wa),e(ks,zd),e(ks,sr),e(sr,Er),e(Er,sn),e(sr,Pi),e(sr,ki),e(ki,rn),e(i,an),e(i,Ul),e(Ul,dl),e(dl,ms),e(ms,_a),e(_a,Si),e(dl,Ea),e(dl,Zo),e(Zo,Qc),e(Ul,mr),e(Ul,Rs),e(Rs,ul),e(ul,Nn),e(Nn,Cs),e(Cs,Ia),e(Nn,Zc),e(Nn,fl),e(fl,qs),e(qs,Ti),e(fl,Kd),e(fl,Gr),e(Gr,Mr),e(Mr,Jd),e(Gr,ed),e(Gr,jr),e(jr,nn),e(jr,pl),e(jr,vo),e(ul,Xd),e(ul,ta),e(ta,$s),e($s,vl),e(vl,Bn),e(Bn,Ai),e(Bn,sa),e(Bn,Rn),e(Rn,Qu),e(vl,Qd),e(vl,go),e(go,Us),e(Us,on),e(on,Zu),e(Us,Zd),e(Us,ec),e(ec,qn),e(Us,cn),e(Us,tc),e(tc,eu),e($s,Oi),e($s,Da),e(Da,$n),e($n,gl),e($n,ef),e($n,Un),e(Un,hl),e(Da,mo),e(Da,xo),e(xo,Va),e(Va,Hn),e(Hn,dn),e(Va,tu),e(Va,sc),e(sc,ml),e(Va,rc),e(Va,xl),e(xl,Yl),e(Va,Yn),e(Va,Pa),e(Pa,bo),e(Rs,Li),e(Rs,un),e(un,bl),e(bl,ka),e(ka,yl),e(bl,su),e(bl,Wl),e(Wl,Wn),e(Wn,ru),e(Wl,Ci),e(Wl,Ir),e(Ir,fn),e(fn,Sa),e(Ir,Gi),e(Ir,zl),e(zl,Mi),e(zl,yo),e(zl,Ta),e(un,wo),e(un,wl),e(wl,zn),e(zn,Hs),e(Hs,ra),e(ra,_l),e(ra,au),e(ra,aa),e(aa,ji),e(Hs,_o),e(Hs,Jl),e(Jl,xs),e(xs,Aa),e(Aa,Eo),e(xs,El),e(xs,td),e(td,ac),e(xs,Nr),e(xs,pn),e(pn,nu),e(zn,nc),e(zn,Br),e(Br,vn),e(vn,Ni),e(vn,Il),e(vn,lc),e(lc,ic),e(Br,Xl),e(Br,Dl),e(Dl,Fa),e(Fa,oc),e(oc,lu),e(Fa,Kn),e(Fa,na),e(na,gn),e(Fa,sd),e(Fa,Bi),e(Bi,cc),e(Fa,Vl),e(Fa,Pl),e(Pl,Ql),e(Rs,iu),e(Rs,Zl),e(Zl,Rr),e(Rr,la),e(la,kl),e(Rr,rf),e(Rr,ei),e(ei,Do),e(Do,Sl),e(ei,hn),e(ei,Tl),e(Tl,Vo),e(Vo,dc),e(Tl,Jn),e(Tl,ia),e(ia,Po),e(ia,mn),e(ia,Oa),e(Zl,uc),e(Zl,xn),e(xn,Ri),e(Ri,ti),e(ti,qr),e(qr,Xn),e(qr,qi),e(qr,oa),e(oa,fc),e(ti,pc),e(ti,ko),e(ko,La),e(La,vc),e(vc,gc),e(La,So),e(La,Ca),e(Ca,si),e(La,Qn),e(La,To),e(To,gg),e(Ri,Lv),e(Ri,Zn),e(Zn,Al),e(Al,nd),e(Al,ld),e(Al,ou),e(ou,Cv),e(Zn,hc),e(Zn,Ao),e(Ao,xr),e(xr,Fo),e(Fo,mg),e(xr,Gv),e(xr,nf),e(nf,cu),e(xr,Oo),e(xr,Lo),e(Lo,xg),e(xr,Mv),e(xr,lf),e(lf,ri),e(l,mc),e(l,$i),e($i,du),e(du,jv),e($i,Ui),e($i,Fl),e(Fl,of),e(of,Nv),e(Fl,bn),e(Fl,Ga),e(Ga,Hi),e(Ga,bg),e(Ga,id),e(Ga,od),e(Ga,cd),e(l,Go),e(l,bc),e(bc,Bv)},p:Be,i:Be,o:Be,d(cf){cf&&a(l)}}}class AE extends In{constructor(l){super(),Dn(this,l,null,TE,ja,{})}}var ao="top",Hc="bottom",Yc="right",no="left",u2="auto",Em=[ao,Hc,Yc,no],Kh="start",wm="end",FE="clippingParents",x_="viewport",hm="popper",OE="reference",Kw=Em.reduce(function(d,l){return d.concat([l+"-"+Kh,l+"-"+wm])},[]),b_=[].concat(Em,[u2]).reduce(function(d,l){return d.concat([l,l+"-"+Kh,l+"-"+wm])},[]),LE="beforeRead",CE="read",GE="afterRead",ME="beforeMain",jE="main",NE="afterMain",BE="beforeWrite",RE="write",qE="afterWrite",$E=[LE,CE,GE,ME,jE,NE,BE,RE,qE];function Ju(d){return d?(d.nodeName||"").toLowerCase():null}function Xo(d){if(d==null)return window;if(d.toString()!=="[object Window]"){var l=d.ownerDocument;return l&&l.defaultView||window}return d}function pg(d){var l=Xo(d).Element;return d instanceof l||d instanceof Element}function Uc(d){var l=Xo(d).HTMLElement;return d instanceof l||d instanceof HTMLElement}function f2(d){if(typeof ShadowRoot>"u")return!1;var l=Xo(d).ShadowRoot;return d instanceof l||d instanceof ShadowRoot}function UE(d){var l=d.state;Object.keys(l.elements).forEach(function(i){var u=l.styles[i]||{},v=l.attributes[i]||{},g=l.elements[i];!Uc(g)||!Ju(g)||(Object.assign(g.style,u),Object.keys(v).forEach(function(x){var m=v[x];m===!1?g.removeAttribute(x):g.setAttribute(x,m===!0?"":m)}))})}function HE(d){var l=d.state,i={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,i.popper),l.styles=i,l.elements.arrow&&Object.assign(l.elements.arrow.style,i.arrow),function(){Object.keys(l.elements).forEach(function(u){var v=l.elements[u],g=l.attributes[u]||{},x=Object.keys(l.styles.hasOwnProperty(u)?l.styles[u]:i[u]),m=x.reduce(function(h,E){return h[E]="",h},{});!Uc(v)||!Ju(v)||(Object.assign(v.style,m),Object.keys(g).forEach(function(h){v.removeAttribute(h)}))})}}const y_={name:"applyStyles",enabled:!0,phase:"write",fn:UE,effect:HE,requires:["computeStyles"]};function Ku(d){return d.split("-")[0]}var ug=Math.max,i0=Math.min,Jh=Math.round;function a2(){var d=navigator.userAgentData;return d!=null&&d.brands&&Array.isArray(d.brands)?d.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function w_(){return!/^((?!chrome|android).)*safari/i.test(a2())}function Xh(d,l,i){l===void 0&&(l=!1),i===void 0&&(i=!1);var u=d.getBoundingClientRect(),v=1,g=1;l&&Uc(d)&&(v=d.offsetWidth>0&&Jh(u.width)/d.offsetWidth||1,g=d.offsetHeight>0&&Jh(u.height)/d.offsetHeight||1);var x=pg(d)?Xo(d):window,m=x.visualViewport,h=!w_()&&i,E=(u.left+(h&&m?m.offsetLeft:0))/v,y=(u.top+(h&&m?m.offsetTop:0))/g,P=u.width/v,D=u.height/g;return{width:P,height:D,top:y,right:E+P,bottom:y+D,left:E,x:E,y}}function p2(d){var l=Xh(d),i=d.offsetWidth,u=d.offsetHeight;return Math.abs(l.width-i)<=1&&(i=l.width),Math.abs(l.height-u)<=1&&(u=l.height),{x:d.offsetLeft,y:d.offsetTop,width:i,height:u}}function __(d,l){var i=l.getRootNode&&l.getRootNode();if(d.contains(l))return!0;if(i&&f2(i)){var u=l;do{if(u&&d.isSameNode(u))return!0;u=u.parentNode||u.host}while(u)}return!1}function Np(d){return Xo(d).getComputedStyle(d)}function YE(d){return["table","td","th"].indexOf(Ju(d))>=0}function Ov(d){return((pg(d)?d.ownerDocument:d.document)||window.document).documentElement}function c0(d){return Ju(d)==="html"?d:d.assignedSlot||d.parentNode||(f2(d)?d.host:null)||Ov(d)}function Jw(d){return!Uc(d)||Np(d).position==="fixed"?null:d.offsetParent}function WE(d){var l=/firefox/i.test(a2()),i=/Trident/i.test(a2());if(i&&Uc(d)){var u=Np(d);if(u.position==="fixed")return null}var v=c0(d);for(f2(v)&&(v=v.host);Uc(v)&&["html","body"].indexOf(Ju(v))<0;){var g=Np(v);if(g.transform!=="none"||g.perspective!=="none"||g.contain==="paint"||["transform","perspective"].indexOf(g.willChange)!==-1||l&&g.willChange==="filter"||l&&g.filter&&g.filter!=="none")return v;v=v.parentNode}return null}function Im(d){for(var l=Xo(d),i=Jw(d);i&&YE(i)&&Np(i).position==="static";)i=Jw(i);return i&&(Ju(i)==="html"||Ju(i)==="body"&&Np(i).position==="static")?l:i||WE(d)||l}function v2(d){return["top","bottom"].indexOf(d)>=0?"x":"y"}function xm(d,l,i){return ug(d,i0(l,i))}function zE(d,l,i){var u=xm(d,l,i);return u>i?i:u}function E_(){return{top:0,right:0,bottom:0,left:0}}function I_(d){return Object.assign({},E_(),d)}function D_(d,l){return l.reduce(function(i,u){return i[u]=d,i},{})}var KE=function(l,i){return l=typeof l=="function"?l(Object.assign({},i.rects,{placement:i.placement})):l,I_(typeof l!="number"?l:D_(l,Em))};function JE(d){var l,i=d.state,u=d.name,v=d.options,g=i.elements.arrow,x=i.modifiersData.popperOffsets,m=Ku(i.placement),h=v2(m),E=[no,Yc].indexOf(m)>=0,y=E?"height":"width";if(!(!g||!x)){var P=KE(v.padding,i),D=p2(g),I=h==="y"?ao:no,_=h==="y"?Hc:Yc,F=i.rects.reference[y]+i.rects.reference[h]-x[h]-i.rects.popper[y],k=x[h]-i.rects.reference[h],A=Im(g),G=A?h==="y"?A.clientHeight||0:A.clientWidth||0:0,j=F/2-k/2,b=P[I],L=G-D[y]-P[_],w=G/2-D[y]/2+j,R=xm(b,w,L),O=h;i.modifiersData[u]=(l={},l[O]=R,l.centerOffset=R-w,l)}}function XE(d){var l=d.state,i=d.options,u=i.element,v=u===void 0?"[data-popper-arrow]":u;v!=null&&(typeof v=="string"&&(v=l.elements.popper.querySelector(v),!v)||__(l.elements.popper,v)&&(l.elements.arrow=v))}const QE={name:"arrow",enabled:!0,phase:"main",fn:JE,effect:XE,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Qh(d){return d.split("-")[1]}var ZE={top:"auto",right:"auto",bottom:"auto",left:"auto"};function e4(d,l){var i=d.x,u=d.y,v=l.devicePixelRatio||1;return{x:Jh(i*v)/v||0,y:Jh(u*v)/v||0}}function Xw(d){var l,i=d.popper,u=d.popperRect,v=d.placement,g=d.variation,x=d.offsets,m=d.position,h=d.gpuAcceleration,E=d.adaptive,y=d.roundOffsets,P=d.isFixed,D=x.x,I=D===void 0?0:D,_=x.y,F=_===void 0?0:_,k=typeof y=="function"?y({x:I,y:F}):{x:I,y:F};I=k.x,F=k.y;var A=x.hasOwnProperty("x"),G=x.hasOwnProperty("y"),j=no,b=ao,L=window;if(E){var w=Im(i),R="clientHeight",O="clientWidth";if(w===Xo(i)&&(w=Ov(i),Np(w).position!=="static"&&m==="absolute"&&(R="scrollHeight",O="scrollWidth")),w=w,v===ao||(v===no||v===Yc)&&g===wm){b=Hc;var C=P&&w===L&&L.visualViewport?L.visualViewport.height:w[R];F-=C-u.height,F*=h?1:-1}if(v===no||(v===ao||v===Hc)&&g===wm){j=Yc;var M=P&&w===L&&L.visualViewport?L.visualViewport.width:w[O];I-=M-u.width,I*=h?1:-1}}var W=Object.assign({position:m},E&&ZE),Y=y===!0?e4({x:I,y:F},Xo(i)):{x:I,y:F};if(I=Y.x,F=Y.y,h){var q;return Object.assign({},W,(q={},q[b]=G?"0":"",q[j]=A?"0":"",q.transform=(L.devicePixelRatio||1)<=1?"translate("+I+"px, "+F+"px)":"translate3d("+I+"px, "+F+"px, 0)",q))}return Object.assign({},W,(l={},l[b]=G?F+"px":"",l[j]=A?I+"px":"",l.transform="",l))}function t4(d){var l=d.state,i=d.options,u=i.gpuAcceleration,v=u===void 0?!0:u,g=i.adaptive,x=g===void 0?!0:g,m=i.roundOffsets,h=m===void 0?!0:m,E={placement:Ku(l.placement),variation:Qh(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:v,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,Xw(Object.assign({},E,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:x,roundOffsets:h})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,Xw(Object.assign({},E,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})}const s4={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:t4,data:{}};var s0={passive:!0};function r4(d){var l=d.state,i=d.instance,u=d.options,v=u.scroll,g=v===void 0?!0:v,x=u.resize,m=x===void 0?!0:x,h=Xo(l.elements.popper),E=[].concat(l.scrollParents.reference,l.scrollParents.popper);return g&&E.forEach(function(y){y.addEventListener("scroll",i.update,s0)}),m&&h.addEventListener("resize",i.update,s0),function(){g&&E.forEach(function(y){y.removeEventListener("scroll",i.update,s0)}),m&&h.removeEventListener("resize",i.update,s0)}}const a4={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:r4,data:{}};var n4={left:"right",right:"left",bottom:"top",top:"bottom"};function a0(d){return d.replace(/left|right|bottom|top/g,function(l){return n4[l]})}var l4={start:"end",end:"start"};function Qw(d){return d.replace(/start|end/g,function(l){return l4[l]})}function g2(d){var l=Xo(d),i=l.pageXOffset,u=l.pageYOffset;return{scrollLeft:i,scrollTop:u}}function h2(d){return Xh(Ov(d)).left+g2(d).scrollLeft}function i4(d,l){var i=Xo(d),u=Ov(d),v=i.visualViewport,g=u.clientWidth,x=u.clientHeight,m=0,h=0;if(v){g=v.width,x=v.height;var E=w_();(E||!E&&l==="fixed")&&(m=v.offsetLeft,h=v.offsetTop)}return{width:g,height:x,x:m+h2(d),y:h}}function o4(d){var l,i=Ov(d),u=g2(d),v=(l=d.ownerDocument)==null?void 0:l.body,g=ug(i.scrollWidth,i.clientWidth,v?v.scrollWidth:0,v?v.clientWidth:0),x=ug(i.scrollHeight,i.clientHeight,v?v.scrollHeight:0,v?v.clientHeight:0),m=-u.scrollLeft+h2(d),h=-u.scrollTop;return Np(v||i).direction==="rtl"&&(m+=ug(i.clientWidth,v?v.clientWidth:0)-g),{width:g,height:x,x:m,y:h}}function m2(d){var l=Np(d),i=l.overflow,u=l.overflowX,v=l.overflowY;return/auto|scroll|overlay|hidden/.test(i+v+u)}function V_(d){return["html","body","#document"].indexOf(Ju(d))>=0?d.ownerDocument.body:Uc(d)&&m2(d)?d:V_(c0(d))}function bm(d,l){var i;l===void 0&&(l=[]);var u=V_(d),v=u===((i=d.ownerDocument)==null?void 0:i.body),g=Xo(u),x=v?[g].concat(g.visualViewport||[],m2(u)?u:[]):u,m=l.concat(x);return v?m:m.concat(bm(c0(x)))}function n2(d){return Object.assign({},d,{left:d.x,top:d.y,right:d.x+d.width,bottom:d.y+d.height})}function c4(d,l){var i=Xh(d,!1,l==="fixed");return i.top=i.top+d.clientTop,i.left=i.left+d.clientLeft,i.bottom=i.top+d.clientHeight,i.right=i.left+d.clientWidth,i.width=d.clientWidth,i.height=d.clientHeight,i.x=i.left,i.y=i.top,i}function Zw(d,l,i){return l===x_?n2(i4(d,i)):pg(l)?c4(l,i):n2(o4(Ov(d)))}function d4(d){var l=bm(c0(d)),i=["absolute","fixed"].indexOf(Np(d).position)>=0,u=i&&Uc(d)?Im(d):d;return pg(u)?l.filter(function(v){return pg(v)&&__(v,u)&&Ju(v)!=="body"}):[]}function u4(d,l,i,u){var v=l==="clippingParents"?d4(d):[].concat(l),g=[].concat(v,[i]),x=g[0],m=g.reduce(function(h,E){var y=Zw(d,E,u);return h.top=ug(y.top,h.top),h.right=i0(y.right,h.right),h.bottom=i0(y.bottom,h.bottom),h.left=ug(y.left,h.left),h},Zw(d,x,u));return m.width=m.right-m.left,m.height=m.bottom-m.top,m.x=m.left,m.y=m.top,m}function P_(d){var l=d.reference,i=d.element,u=d.placement,v=u?Ku(u):null,g=u?Qh(u):null,x=l.x+l.width/2-i.width/2,m=l.y+l.height/2-i.height/2,h;switch(v){case ao:h={x,y:l.y-i.height};break;case Hc:h={x,y:l.y+l.height};break;case Yc:h={x:l.x+l.width,y:m};break;case no:h={x:l.x-i.width,y:m};break;default:h={x:l.x,y:l.y}}var E=v?v2(v):null;if(E!=null){var y=E==="y"?"height":"width";switch(g){case Kh:h[E]=h[E]-(l[y]/2-i[y]/2);break;case wm:h[E]=h[E]+(l[y]/2-i[y]/2);break}}return h}function _m(d,l){l===void 0&&(l={});var i=l,u=i.placement,v=u===void 0?d.placement:u,g=i.strategy,x=g===void 0?d.strategy:g,m=i.boundary,h=m===void 0?FE:m,E=i.rootBoundary,y=E===void 0?x_:E,P=i.elementContext,D=P===void 0?hm:P,I=i.altBoundary,_=I===void 0?!1:I,F=i.padding,k=F===void 0?0:F,A=I_(typeof k!="number"?k:D_(k,Em)),G=D===hm?OE:hm,j=d.rects.popper,b=d.elements[_?G:D],L=u4(pg(b)?b:b.contextElement||Ov(d.elements.popper),h,y,x),w=Xh(d.elements.reference),R=P_({reference:w,element:j,strategy:"absolute",placement:v}),O=n2(Object.assign({},j,R)),C=D===hm?O:w,M={top:L.top-C.top+A.top,bottom:C.bottom-L.bottom+A.bottom,left:L.left-C.left+A.left,right:C.right-L.right+A.right},W=d.modifiersData.offset;if(D===hm&&W){var Y=W[v];Object.keys(M).forEach(function(q){var oe=[Yc,Hc].indexOf(q)>=0?1:-1,ve=[ao,Hc].indexOf(q)>=0?"y":"x";M[q]+=Y[ve]*oe})}return M}function f4(d,l){l===void 0&&(l={});var i=l,u=i.placement,v=i.boundary,g=i.rootBoundary,x=i.padding,m=i.flipVariations,h=i.allowedAutoPlacements,E=h===void 0?b_:h,y=Qh(u),P=y?m?Kw:Kw.filter(function(_){return Qh(_)===y}):Em,D=P.filter(function(_){return E.indexOf(_)>=0});D.length===0&&(D=P);var I=D.reduce(function(_,F){return _[F]=_m(d,{placement:F,boundary:v,rootBoundary:g,padding:x})[Ku(F)],_},{});return Object.keys(I).sort(function(_,F){return I[_]-I[F]})}function p4(d){if(Ku(d)===u2)return[];var l=a0(d);return[Qw(d),l,Qw(l)]}function v4(d){var l=d.state,i=d.options,u=d.name;if(!l.modifiersData[u]._skip){for(var v=i.mainAxis,g=v===void 0?!0:v,x=i.altAxis,m=x===void 0?!0:x,h=i.fallbackPlacements,E=i.padding,y=i.boundary,P=i.rootBoundary,D=i.altBoundary,I=i.flipVariations,_=I===void 0?!0:I,F=i.allowedAutoPlacements,k=l.options.placement,A=Ku(k),G=A===k,j=h||(G||!_?[a0(k)]:p4(k)),b=[k].concat(j).reduce(function(ge,Ae){return ge.concat(Ku(Ae)===u2?f4(l,{placement:Ae,boundary:y,rootBoundary:P,padding:E,flipVariations:_,allowedAutoPlacements:F}):Ae)},[]),L=l.rects.reference,w=l.rects.popper,R=new Map,O=!0,C=b[0],M=0;M<b.length;M++){var W=b[M],Y=Ku(W),q=Qh(W)===Kh,oe=[ao,Hc].indexOf(Y)>=0,ve=oe?"width":"height",z=_m(l,{placement:W,boundary:y,rootBoundary:P,altBoundary:D,padding:E}),$=oe?q?Yc:no:q?Hc:ao;L[ve]>w[ve]&&($=a0($));var ae=a0($),Ee=[];if(g&&Ee.push(z[Y]<=0),m&&Ee.push(z[$]<=0,z[ae]<=0),Ee.every(function(ge){return ge})){C=W,O=!1;break}R.set(W,Ee)}if(O)for(var ce=_?3:1,Xe=function(Ae){var Ie=b.find(function(ue){var je=R.get(ue);if(je)return je.slice(0,Ae).every(function(fe){return fe})});if(Ie)return C=Ie,"break"},de=ce;de>0;de--){var te=Xe(de);if(te==="break")break}l.placement!==C&&(l.modifiersData[u]._skip=!0,l.placement=C,l.reset=!0)}}const g4={name:"flip",enabled:!0,phase:"main",fn:v4,requiresIfExists:["offset"],data:{_skip:!1}};function e_(d,l,i){return i===void 0&&(i={x:0,y:0}),{top:d.top-l.height-i.y,right:d.right-l.width+i.x,bottom:d.bottom-l.height+i.y,left:d.left-l.width-i.x}}function t_(d){return[ao,Yc,Hc,no].some(function(l){return d[l]>=0})}function h4(d){var l=d.state,i=d.name,u=l.rects.reference,v=l.rects.popper,g=l.modifiersData.preventOverflow,x=_m(l,{elementContext:"reference"}),m=_m(l,{altBoundary:!0}),h=e_(x,u),E=e_(m,v,g),y=t_(h),P=t_(E);l.modifiersData[i]={referenceClippingOffsets:h,popperEscapeOffsets:E,isReferenceHidden:y,hasPopperEscaped:P},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":y,"data-popper-escaped":P})}const m4={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:h4};function x4(d,l,i){var u=Ku(d),v=[no,ao].indexOf(u)>=0?-1:1,g=typeof i=="function"?i(Object.assign({},l,{placement:d})):i,x=g[0],m=g[1];return x=x||0,m=(m||0)*v,[no,Yc].indexOf(u)>=0?{x:m,y:x}:{x,y:m}}function b4(d){var l=d.state,i=d.options,u=d.name,v=i.offset,g=v===void 0?[0,0]:v,x=b_.reduce(function(y,P){return y[P]=x4(P,l.rects,g),y},{}),m=x[l.placement],h=m.x,E=m.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=h,l.modifiersData.popperOffsets.y+=E),l.modifiersData[u]=x}const y4={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:b4};function w4(d){var l=d.state,i=d.name;l.modifiersData[i]=P_({reference:l.rects.reference,element:l.rects.popper,strategy:"absolute",placement:l.placement})}const _4={name:"popperOffsets",enabled:!0,phase:"read",fn:w4,data:{}};function E4(d){return d==="x"?"y":"x"}function I4(d){var l=d.state,i=d.options,u=d.name,v=i.mainAxis,g=v===void 0?!0:v,x=i.altAxis,m=x===void 0?!1:x,h=i.boundary,E=i.rootBoundary,y=i.altBoundary,P=i.padding,D=i.tether,I=D===void 0?!0:D,_=i.tetherOffset,F=_===void 0?0:_,k=_m(l,{boundary:h,rootBoundary:E,padding:P,altBoundary:y}),A=Ku(l.placement),G=Qh(l.placement),j=!G,b=v2(A),L=E4(b),w=l.modifiersData.popperOffsets,R=l.rects.reference,O=l.rects.popper,C=typeof F=="function"?F(Object.assign({},l.rects,{placement:l.placement})):F,M=typeof C=="number"?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),W=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,Y={x:0,y:0};if(w){if(g){var q,oe=b==="y"?ao:no,ve=b==="y"?Hc:Yc,z=b==="y"?"height":"width",$=w[b],ae=$+k[oe],Ee=$-k[ve],ce=I?-O[z]/2:0,Xe=G===Kh?R[z]:O[z],de=G===Kh?-O[z]:-R[z],te=l.elements.arrow,ge=I&&te?p2(te):{width:0,height:0},Ae=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:E_(),Ie=Ae[oe],ue=Ae[ve],je=xm(0,R[z],ge[z]),fe=j?R[z]/2-ce-je-Ie-M.mainAxis:Xe-je-Ie-M.mainAxis,N=j?-R[z]/2+ce+je+ue+M.mainAxis:de+je+ue+M.mainAxis,Q=l.elements.arrow&&Im(l.elements.arrow),De=Q?b==="y"?Q.clientTop||0:Q.clientLeft||0:0,pe=(q=W==null?void 0:W[b])!=null?q:0,xe=$+fe-pe-De,he=$+N-pe,le=xm(I?i0(ae,xe):ae,$,I?ug(Ee,he):Ee);w[b]=le,Y[b]=le-$}if(m){var J,Re=b==="x"?ao:no,Le=b==="x"?Hc:Yc,Pe=w[L],ee=L==="y"?"height":"width",We=Pe+k[Re],ke=Pe-k[Le],Z=[ao,no].indexOf(A)!==-1,He=(J=W==null?void 0:W[L])!=null?J:0,me=Z?We:Pe-R[ee]-O[ee]-He+M.altAxis,Ce=Z?Pe+R[ee]+O[ee]-He-M.altAxis:ke,Fe=I&&Z?zE(me,Pe,Ce):xm(I?me:We,Pe,I?Ce:ke);w[L]=Fe,Y[L]=Fe-Pe}l.modifiersData[u]=Y}}const D4={name:"preventOverflow",enabled:!0,phase:"main",fn:I4,requiresIfExists:["offset"]};function V4(d){return{scrollLeft:d.scrollLeft,scrollTop:d.scrollTop}}function P4(d){return d===Xo(d)||!Uc(d)?g2(d):V4(d)}function k4(d){var l=d.getBoundingClientRect(),i=Jh(l.width)/d.offsetWidth||1,u=Jh(l.height)/d.offsetHeight||1;return i!==1||u!==1}function S4(d,l,i){i===void 0&&(i=!1);var u=Uc(l),v=Uc(l)&&k4(l),g=Ov(l),x=Xh(d,v,i),m={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(u||!u&&!i)&&((Ju(l)!=="body"||m2(g))&&(m=P4(l)),Uc(l)?(h=Xh(l,!0),h.x+=l.clientLeft,h.y+=l.clientTop):g&&(h.x=h2(g))),{x:x.left+m.scrollLeft-h.x,y:x.top+m.scrollTop-h.y,width:x.width,height:x.height}}function T4(d){var l=new Map,i=new Set,u=[];d.forEach(function(g){l.set(g.name,g)});function v(g){i.add(g.name);var x=[].concat(g.requires||[],g.requiresIfExists||[]);x.forEach(function(m){if(!i.has(m)){var h=l.get(m);h&&v(h)}}),u.push(g)}return d.forEach(function(g){i.has(g.name)||v(g)}),u}function A4(d){var l=T4(d);return $E.reduce(function(i,u){return i.concat(l.filter(function(v){return v.phase===u}))},[])}function F4(d){var l;return function(){return l||(l=new Promise(function(i){Promise.resolve().then(function(){l=void 0,i(d())})})),l}}function O4(d){var l=d.reduce(function(i,u){var v=i[u.name];return i[u.name]=v?Object.assign({},v,u,{options:Object.assign({},v.options,u.options),data:Object.assign({},v.data,u.data)}):u,i},{});return Object.keys(l).map(function(i){return l[i]})}var s_={placement:"bottom",modifiers:[],strategy:"absolute"};function r_(){for(var d=arguments.length,l=new Array(d),i=0;i<d;i++)l[i]=arguments[i];return!l.some(function(u){return!(u&&typeof u.getBoundingClientRect=="function")})}function L4(d){d===void 0&&(d={});var l=d,i=l.defaultModifiers,u=i===void 0?[]:i,v=l.defaultOptions,g=v===void 0?s_:v;return function(m,h,E){E===void 0&&(E=g);var y={placement:"bottom",orderedModifiers:[],options:Object.assign({},s_,g),modifiersData:{},elements:{reference:m,popper:h},attributes:{},styles:{}},P=[],D=!1,I={state:y,setOptions:function(A){var G=typeof A=="function"?A(y.options):A;F(),y.options=Object.assign({},g,y.options,G),y.scrollParents={reference:pg(m)?bm(m):m.contextElement?bm(m.contextElement):[],popper:bm(h)};var j=A4(O4([].concat(u,y.options.modifiers)));return y.orderedModifiers=j.filter(function(b){return b.enabled}),_(),I.update()},forceUpdate:function(){if(!D){var A=y.elements,G=A.reference,j=A.popper;if(r_(G,j)){y.rects={reference:S4(G,Im(j),y.options.strategy==="fixed"),popper:p2(j)},y.reset=!1,y.placement=y.options.placement,y.orderedModifiers.forEach(function(M){return y.modifiersData[M.name]=Object.assign({},M.data)});for(var b=0;b<y.orderedModifiers.length;b++){if(y.reset===!0){y.reset=!1,b=-1;continue}var L=y.orderedModifiers[b],w=L.fn,R=L.options,O=R===void 0?{}:R,C=L.name;typeof w=="function"&&(y=w({state:y,options:O,name:C,instance:I})||y)}}}},update:F4(function(){return new Promise(function(k){I.forceUpdate(),k(y)})}),destroy:function(){F(),D=!0}};if(!r_(m,h))return I;I.setOptions(E).then(function(k){!D&&E.onFirstUpdate&&E.onFirstUpdate(k)});function _(){y.orderedModifiers.forEach(function(k){var A=k.name,G=k.options,j=G===void 0?{}:G,b=k.effect;if(typeof b=="function"){var L=b({state:y,name:A,instance:I,options:j}),w=function(){};P.push(L||w)}})}function F(){P.forEach(function(k){return k()}),P=[]}return I}}var C4=[a4,_4,s4,y_,y4,g4,D4,QE,m4],G4=L4({defaultModifiers:C4}),M4="tippy-box",k_="tippy-content",j4="tippy-backdrop",S_="tippy-arrow",T_="tippy-svg-arrow",cg={passive:!0,capture:!0},A_=function(){return document.body};function Zb(d,l,i){if(Array.isArray(d)){var u=d[l];return u??(Array.isArray(i)?i[l]:i)}return d}function x2(d,l){var i={}.toString.call(d);return i.indexOf("[object")===0&&i.indexOf(l+"]")>-1}function F_(d,l){return typeof d=="function"?d.apply(void 0,l):d}function a_(d,l){if(l===0)return d;var i;return function(u){clearTimeout(i),i=setTimeout(function(){d(u)},l)}}function N4(d){return d.split(/\s+/).filter(Boolean)}function Wh(d){return[].concat(d)}function n_(d,l){d.indexOf(l)===-1&&d.push(l)}function B4(d){return d.filter(function(l,i){return d.indexOf(l)===i})}function R4(d){return d.split("-")[0]}function o0(d){return[].slice.call(d)}function l_(d){return Object.keys(d).reduce(function(l,i){return d[i]!==void 0&&(l[i]=d[i]),l},{})}function ym(){return document.createElement("div")}function d0(d){return["Element","Fragment"].some(function(l){return x2(d,l)})}function q4(d){return x2(d,"NodeList")}function $4(d){return x2(d,"MouseEvent")}function U4(d){return!!(d&&d._tippy&&d._tippy.reference===d)}function H4(d){return d0(d)?[d]:q4(d)?o0(d):Array.isArray(d)?d:o0(document.querySelectorAll(d))}function e2(d,l){d.forEach(function(i){i&&(i.style.transitionDuration=l+"ms")})}function i_(d,l){d.forEach(function(i){i&&i.setAttribute("data-state",l)})}function Y4(d){var l,i=Wh(d),u=i[0];return u!=null&&(l=u.ownerDocument)!=null&&l.body?u.ownerDocument:document}function W4(d,l){var i=l.clientX,u=l.clientY;return d.every(function(v){var g=v.popperRect,x=v.popperState,m=v.props,h=m.interactiveBorder,E=R4(x.placement),y=x.modifiersData.offset;if(!y)return!0;var P=E==="bottom"?y.top.y:0,D=E==="top"?y.bottom.y:0,I=E==="right"?y.left.x:0,_=E==="left"?y.right.x:0,F=g.top-u+P>h,k=u-g.bottom-D>h,A=g.left-i+I>h,G=i-g.right-_>h;return F||k||A||G})}function t2(d,l,i){var u=l+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(v){d[u](v,i)})}function o_(d,l){for(var i=l;i;){var u;if(d.contains(i))return!0;i=i.getRootNode==null||(u=i.getRootNode())==null?void 0:u.host}return!1}var Wu={isTouch:!1},c_=0;function z4(){Wu.isTouch||(Wu.isTouch=!0,window.performance&&document.addEventListener("mousemove",O_))}function O_(){var d=performance.now();d-c_<20&&(Wu.isTouch=!1,document.removeEventListener("mousemove",O_)),c_=d}function K4(){var d=document.activeElement;if(U4(d)){var l=d._tippy;d.blur&&!l.state.isVisible&&d.blur()}}function J4(){document.addEventListener("touchstart",z4,cg),window.addEventListener("blur",K4)}var X4=typeof window<"u"&&typeof document<"u",Q4=X4?!!window.msCrypto:!1,Z4={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},e6={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},Yd=Object.assign({appendTo:A_,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Z4,e6),t6=Object.keys(Yd),s6=function(l){var i=Object.keys(l);i.forEach(function(u){Yd[u]=l[u]})};function L_(d){var l=d.plugins||[],i=l.reduce(function(u,v){var g=v.name,x=v.defaultValue;if(g){var m;u[g]=d[g]!==void 0?d[g]:(m=Yd[g])!=null?m:x}return u},{});return Object.assign({},d,i)}function r6(d,l){var i=l?Object.keys(L_(Object.assign({},Yd,{plugins:l}))):t6,u=i.reduce(function(v,g){var x=(d.getAttribute("data-tippy-"+g)||"").trim();if(!x)return v;if(g==="content")v[g]=x;else try{v[g]=JSON.parse(x)}catch{v[g]=x}return v},{});return u}function d_(d,l){var i=Object.assign({},l,{content:F_(l.content,[d])},l.ignoreAttributes?{}:r6(d,l.plugins));return i.aria=Object.assign({},Yd.aria,i.aria),i.aria={expanded:i.aria.expanded==="auto"?l.interactive:i.aria.expanded,content:i.aria.content==="auto"?l.interactive?null:"describedby":i.aria.content},i}var a6=function(){return"innerHTML"};function l2(d,l){d[a6()]=l}function u_(d){var l=ym();return d===!0?l.className=S_:(l.className=T_,d0(d)?l.appendChild(d):l2(l,d)),l}function f_(d,l){d0(l.content)?(l2(d,""),d.appendChild(l.content)):typeof l.content!="function"&&(l.allowHTML?l2(d,l.content):d.textContent=l.content)}function i2(d){var l=d.firstElementChild,i=o0(l.children);return{box:l,content:i.find(function(u){return u.classList.contains(k_)}),arrow:i.find(function(u){return u.classList.contains(S_)||u.classList.contains(T_)}),backdrop:i.find(function(u){return u.classList.contains(j4)})}}function C_(d){var l=ym(),i=ym();i.className=M4,i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var u=ym();u.className=k_,u.setAttribute("data-state","hidden"),f_(u,d.props),l.appendChild(i),i.appendChild(u),v(d.props,d.props);function v(g,x){var m=i2(l),h=m.box,E=m.content,y=m.arrow;x.theme?h.setAttribute("data-theme",x.theme):h.removeAttribute("data-theme"),typeof x.animation=="string"?h.setAttribute("data-animation",x.animation):h.removeAttribute("data-animation"),x.inertia?h.setAttribute("data-inertia",""):h.removeAttribute("data-inertia"),h.style.maxWidth=typeof x.maxWidth=="number"?x.maxWidth+"px":x.maxWidth,x.role?h.setAttribute("role",x.role):h.removeAttribute("role"),(g.content!==x.content||g.allowHTML!==x.allowHTML)&&f_(E,d.props),x.arrow?y?g.arrow!==x.arrow&&(h.removeChild(y),h.appendChild(u_(x.arrow))):h.appendChild(u_(x.arrow)):y&&h.removeChild(y)}return{popper:l,onUpdate:v}}C_.$$tippy=!0;var n6=1,r0=[],s2=[];function l6(d,l){var i=d_(d,Object.assign({},Yd,L_(l_(l)))),u,v,g,x=!1,m=!1,h=!1,E=!1,y,P,D,I=[],_=a_(xe,i.interactiveDebounce),F,k=n6++,A=null,G=B4(i.plugins),j={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},b={id:k,reference:d,popper:ym(),popperInstance:A,props:i,state:j,plugins:G,clearDelayTimeouts:me,setProps:Ce,setContent:Fe,show:Oe,hide:be,hideWithInteractivity:et,enable:Z,disable:He,unmount:Ye,destroy:st};if(!i.render)return b;var L=i.render(b),w=L.popper,R=L.onUpdate;w.setAttribute("data-tippy-root",""),w.id="tippy-"+b.id,b.popper=w,d._tippy=b,w._tippy=b;var O=G.map(function(V){return V.fn(b)}),C=d.hasAttribute("aria-expanded");return Q(),ce(),$(),ae("onCreate",[b]),i.showOnCreate&&We(),w.addEventListener("mouseenter",function(){b.props.interactive&&b.state.isVisible&&b.clearDelayTimeouts()}),w.addEventListener("mouseleave",function(){b.props.interactive&&b.props.trigger.indexOf("mouseenter")>=0&&oe().addEventListener("mousemove",_)}),b;function M(){var V=b.props.touch;return Array.isArray(V)?V:[V,0]}function W(){return M()[0]==="hold"}function Y(){var V;return!!((V=b.props.render)!=null&&V.$$tippy)}function q(){return F||d}function oe(){var V=q().parentNode;return V?Y4(V):document}function ve(){return i2(w)}function z(V){return b.state.isMounted&&!b.state.isVisible||Wu.isTouch||y&&y.type==="focus"?0:Zb(b.props.delay,V?0:1,Yd.delay)}function $(V){V===void 0&&(V=!1),w.style.pointerEvents=b.props.interactive&&!V?"":"none",w.style.zIndex=""+b.props.zIndex}function ae(V,B,U){if(U===void 0&&(U=!0),O.forEach(function(X){X[V]&&X[V].apply(X,B)}),U){var K;(K=b.props)[V].apply(K,B)}}function Ee(){var V=b.props.aria;if(V.content){var B="aria-"+V.content,U=w.id,K=Wh(b.props.triggerTarget||d);K.forEach(function(X){var re=X.getAttribute(B);if(b.state.isVisible)X.setAttribute(B,re?re+" "+U:U);else{var H=re&&re.replace(U,"").trim();H?X.setAttribute(B,H):X.removeAttribute(B)}})}}function ce(){if(!(C||!b.props.aria.expanded)){var V=Wh(b.props.triggerTarget||d);V.forEach(function(B){b.props.interactive?B.setAttribute("aria-expanded",b.state.isVisible&&B===q()?"true":"false"):B.removeAttribute("aria-expanded")})}}function Xe(){oe().removeEventListener("mousemove",_),r0=r0.filter(function(V){return V!==_})}function de(V){if(!(Wu.isTouch&&(h||V.type==="mousedown"))){var B=V.composedPath&&V.composedPath()[0]||V.target;if(!(b.props.interactive&&o_(w,B))){if(Wh(b.props.triggerTarget||d).some(function(U){return o_(U,B)})){if(Wu.isTouch||b.state.isVisible&&b.props.trigger.indexOf("click")>=0)return}else ae("onClickOutside",[b,V]);b.props.hideOnClick===!0&&(b.clearDelayTimeouts(),b.hide(),m=!0,setTimeout(function(){m=!1}),b.state.isMounted||Ie())}}}function te(){h=!0}function ge(){h=!1}function Ae(){var V=oe();V.addEventListener("mousedown",de,!0),V.addEventListener("touchend",de,cg),V.addEventListener("touchstart",ge,cg),V.addEventListener("touchmove",te,cg)}function Ie(){var V=oe();V.removeEventListener("mousedown",de,!0),V.removeEventListener("touchend",de,cg),V.removeEventListener("touchstart",ge,cg),V.removeEventListener("touchmove",te,cg)}function ue(V,B){fe(V,function(){!b.state.isVisible&&w.parentNode&&w.parentNode.contains(w)&&B()})}function je(V,B){fe(V,B)}function fe(V,B){var U=ve().box;function K(X){X.target===U&&(t2(U,"remove",K),B())}if(V===0)return B();t2(U,"remove",P),t2(U,"add",K),P=K}function N(V,B,U){U===void 0&&(U=!1);var K=Wh(b.props.triggerTarget||d);K.forEach(function(X){X.addEventListener(V,B,U),I.push({node:X,eventType:V,handler:B,options:U})})}function Q(){W()&&(N("touchstart",pe,{passive:!0}),N("touchend",he,{passive:!0})),N4(b.props.trigger).forEach(function(V){if(V!=="manual")switch(N(V,pe),V){case"mouseenter":N("mouseleave",he);break;case"focus":N(Q4?"focusout":"blur",le);break;case"focusin":N("focusout",le);break}})}function De(){I.forEach(function(V){var B=V.node,U=V.eventType,K=V.handler,X=V.options;B.removeEventListener(U,K,X)}),I=[]}function pe(V){var B,U=!1;if(!(!b.state.isEnabled||J(V)||m)){var K=((B=y)==null?void 0:B.type)==="focus";y=V,F=V.currentTarget,ce(),!b.state.isVisible&&$4(V)&&r0.forEach(function(X){return X(V)}),V.type==="click"&&(b.props.trigger.indexOf("mouseenter")<0||x)&&b.props.hideOnClick!==!1&&b.state.isVisible?U=!0:We(V),V.type==="click"&&(x=!U),U&&!K&&ke(V)}}function xe(V){var B=V.target,U=q().contains(B)||w.contains(B);if(!(V.type==="mousemove"&&U)){var K=ee().concat(w).map(function(X){var re,H=X._tippy,Se=(re=H.popperInstance)==null?void 0:re.state;return Se?{popperRect:X.getBoundingClientRect(),popperState:Se,props:i}:null}).filter(Boolean);W4(K,V)&&(Xe(),ke(V))}}function he(V){var B=J(V)||b.props.trigger.indexOf("click")>=0&&x;if(!B){if(b.props.interactive){b.hideWithInteractivity(V);return}ke(V)}}function le(V){b.props.trigger.indexOf("focusin")<0&&V.target!==q()||b.props.interactive&&V.relatedTarget&&w.contains(V.relatedTarget)||ke(V)}function J(V){return Wu.isTouch?W()!==V.type.indexOf("touch")>=0:!1}function Re(){Le();var V=b.props,B=V.popperOptions,U=V.placement,K=V.offset,X=V.getReferenceClientRect,re=V.moveTransition,H=Y()?i2(w).arrow:null,Se=X?{getBoundingClientRect:X,contextElement:X.contextElement||q()}:d,Te={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(ut){var we=ut.state;if(Y()){var se=ve(),qe=se.box;["placement","reference-hidden","escaped"].forEach(function($e){$e==="placement"?qe.setAttribute("data-placement",we.placement):we.attributes.popper["data-popper-"+$e]?qe.setAttribute("data-"+$e,""):qe.removeAttribute("data-"+$e)}),we.attributes.popper={}}}},ne=[{name:"offset",options:{offset:K}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!re}},Te];Y()&&H&&ne.push({name:"arrow",options:{element:H,padding:3}}),ne.push.apply(ne,(B==null?void 0:B.modifiers)||[]),b.popperInstance=G4(Se,w,Object.assign({},B,{placement:U,onFirstUpdate:D,modifiers:ne}))}function Le(){b.popperInstance&&(b.popperInstance.destroy(),b.popperInstance=null)}function Pe(){var V=b.props.appendTo,B,U=q();b.props.interactive&&V===A_||V==="parent"?B=U.parentNode:B=F_(V,[U]),B.contains(w)||B.appendChild(w),b.state.isMounted=!0,Re()}function ee(){return o0(w.querySelectorAll("[data-tippy-root]"))}function We(V){b.clearDelayTimeouts(),V&&ae("onTrigger",[b,V]),Ae();var B=z(!0),U=M(),K=U[0],X=U[1];Wu.isTouch&&K==="hold"&&X&&(B=X),B?u=setTimeout(function(){b.show()},B):b.show()}function ke(V){if(b.clearDelayTimeouts(),ae("onUntrigger",[b,V]),!b.state.isVisible){Ie();return}if(!(b.props.trigger.indexOf("mouseenter")>=0&&b.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(V.type)>=0&&x)){var B=z(!1);B?v=setTimeout(function(){b.state.isVisible&&b.hide()},B):g=requestAnimationFrame(function(){b.hide()})}}function Z(){b.state.isEnabled=!0}function He(){b.hide(),b.state.isEnabled=!1}function me(){clearTimeout(u),clearTimeout(v),cancelAnimationFrame(g)}function Ce(V){if(!b.state.isDestroyed){ae("onBeforeUpdate",[b,V]),De();var B=b.props,U=d_(d,Object.assign({},B,l_(V),{ignoreAttributes:!0}));b.props=U,Q(),B.interactiveDebounce!==U.interactiveDebounce&&(Xe(),_=a_(xe,U.interactiveDebounce)),B.triggerTarget&&!U.triggerTarget?Wh(B.triggerTarget).forEach(function(K){K.removeAttribute("aria-expanded")}):U.triggerTarget&&d.removeAttribute("aria-expanded"),ce(),$(),R&&R(B,U),b.popperInstance&&(Re(),ee().forEach(function(K){requestAnimationFrame(K._tippy.popperInstance.forceUpdate)})),ae("onAfterUpdate",[b,V])}}function Fe(V){b.setProps({content:V})}function Oe(){var V=b.state.isVisible,B=b.state.isDestroyed,U=!b.state.isEnabled,K=Wu.isTouch&&!b.props.touch,X=Zb(b.props.duration,0,Yd.duration);if(!(V||B||U||K)&&!q().hasAttribute("disabled")&&(ae("onShow",[b],!1),b.props.onShow(b)!==!1)){if(b.state.isVisible=!0,Y()&&(w.style.visibility="visible"),$(),Ae(),b.state.isMounted||(w.style.transition="none"),Y()){var re=ve(),H=re.box,Se=re.content;e2([H,Se],0)}D=function(){var ne;if(!(!b.state.isVisible||E)){if(E=!0,w.offsetHeight,w.style.transition=b.props.moveTransition,Y()&&b.props.animation){var ye=ve(),ut=ye.box,we=ye.content;e2([ut,we],X),i_([ut,we],"visible")}Ee(),ce(),n_(s2,b),(ne=b.popperInstance)==null||ne.forceUpdate(),ae("onMount",[b]),b.props.animation&&Y()&&je(X,function(){b.state.isShown=!0,ae("onShown",[b])})}},Pe()}}function be(){var V=!b.state.isVisible,B=b.state.isDestroyed,U=!b.state.isEnabled,K=Zb(b.props.duration,1,Yd.duration);if(!(V||B||U)&&(ae("onHide",[b],!1),b.props.onHide(b)!==!1)){if(b.state.isVisible=!1,b.state.isShown=!1,E=!1,x=!1,Y()&&(w.style.visibility="hidden"),Xe(),Ie(),$(!0),Y()){var X=ve(),re=X.box,H=X.content;b.props.animation&&(e2([re,H],K),i_([re,H],"hidden"))}Ee(),ce(),b.props.animation?Y()&&ue(K,b.unmount):b.unmount()}}function et(V){oe().addEventListener("mousemove",_),n_(r0,_),_(V)}function Ye(){b.state.isVisible&&b.hide(),b.state.isMounted&&(Le(),ee().forEach(function(V){V._tippy.unmount()}),w.parentNode&&w.parentNode.removeChild(w),s2=s2.filter(function(V){return V!==b}),b.state.isMounted=!1,ae("onHidden",[b]))}function st(){b.state.isDestroyed||(b.clearDelayTimeouts(),b.unmount(),De(),delete d._tippy,b.state.isDestroyed=!0,ae("onDestroy",[b]))}}function $c(d,l){l===void 0&&(l={});var i=Yd.plugins.concat(l.plugins||[]);J4();var u=Object.assign({},l,{plugins:i}),v=H4(d),g=v.reduce(function(x,m){var h=m&&l6(m,u);return h&&x.push(h),x},[]);return d0(d)?g[0]:g}$c.defaultProps=Yd;$c.setDefaultProps=s6;$c.currentInput=Wu;Object.assign({},y_,{effect:function(l){var i=l.state,u={popper:{position:i.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(i.elements.popper.style,u.popper),i.styles=u,i.elements.arrow&&Object.assign(i.elements.arrow.style,u.arrow)}});$c.setDefaultProps({render:C_});function i6(d){let l,i,u,v,g,x,m,h,E,y,P,D,I,_,F,k,A,G,j,b,L,w,R,O,C,M,W,Y,q,oe,ve,z,$,ae,Ee,ce,Xe,de,te,ge,Ae,Ie,ue,je,fe,N,Q,De,pe,xe,he,le,J,Re,Le,Pe,ee,We,ke,Z,He,me,Ce,Fe,Oe,be,et,Ye,st,V,B,U,K,X,re,H,Se,Te,ne,ye,ut,we,se,qe,$e,Ge,_e,Ue,ct,Ne,Je,jt,Lt,ze,wt,Pt,Ve,lt,rt,Dt,gt,Gt,ft,Nt,Vt,ie,pt,kt,Yt,it,ht,Zt,Tt,at,At,Qe,_t,dt,Wt,es,mt,Me,ot,Mt,Et,xt,vt,Bt,bt,Ft,Jt,Rt,qt,zt,Ct,$t,St,rr,os,Ut,nt,Xt,fs,Ss,Ts,As,It,bs,ts,ps,Pr,Na,rs,ys,Ur,Ys,br,Kt,Fs,Ws,Ba,ua,fa,kr,js,Hr,ws,_s,Vn,Ra,as,zs,ii,qa,Ks,oi,$a,ns,Pn,yr,Js,ar,ci,pa,Qt,Xs,nr,lr,ir,Sr,vs,cs,nl,di,Yr,ss,ui,Tr,Wr,fi,ll,lo,ls,Es,Ar,Ua,Ht,or,wr,cr,Os,Fr,va,kn,il,Qs,is,Rl,pi,ds,zr,Sn,dr,Ha,vi,ur,gs,Zs,Is,Ls,Or,Ya,gi,fr,Ns,Ds,Lr,Tn,An,Wa,hi,hs,Vs,Kr,io,mi,Fn,er,pr,_r,tr,ol,Cr,Jr,Bs,za,Wc,zc,Xr,xi,Wd,oo,bi,vr,us,On,Ln,Ka,yi,wi,ga,gr,co,Kc,Qr,Cn,Jc,_i,ha,Ja,Gn,Xu,uo,Xa,Qa,ma,Ps,xa,fo,Zr,Za,ba,ya,ql,Ei,Ii,$l,Di,Mn,hr,en,jn,tn,Qo,Xc,po,cl,ea,ks,wa,Vi,zd,sr,Er,sn,Pi,ki,rn,an,Ul,dl,ms,_a,Si,Ea,Zo,Qc,mr,Rs,ul,Nn,Cs,Ia,Zc,fl,qs,Ti,Kd,Gr,Mr,Jd,ed,jr,nn,ln,pl,vo,Hl,Xd,ta,$s,vl,Bn,Ai,Fi,sa,Rn,Qu,Qd,go,Us,on,Zu,Zd,ec,qn,cn,tc,eu,Oi,Da,$n,gl,ho,ef,Un,hl,mo,xo,Va,Hn,dn,tu,sc,ml,rc,xl,Yl,Yn,Pa,bo,Li,un,bl,ka,yl,su,Wl,Wn,ru,Ci,Ir,fn,Sa,Gi,zl,Mi,tf,yo,Ta,Kl,wo,wl,zn,Hs,ra,_l,sf,au,aa,ji,_o,Jl,xs,Aa,Eo,El,td,ac,Nr,pn,nu,nc,Br,vn,Ni,Io,Il,lc,ic,Xl,Dl,Fa,oc,lu,Kn,na,gn,sd,Bi,cc,Vl,Pl,Ql,iu,Zl,Rr,la,kl,rf,ei,Do,Sl,hn,Tl,Vo,dc,Jn,ia,Po,rd,mn,Oa,ad,uc,xn,Ri,ti,qr,Xn,af,qi,oa,fc,pc,ko,La,vc,gc,So,Ca,si,Qn,To,gg,Lv,Zn,Al,nd,hg,ld,ou,Cv,hc,Ao,xr,Fo,mg,Gv,nf,cu,Oo,Lo,xg,Mv,lf,ri,mc,$i,du,jv,Ui,Fl,of,Nv,bn,Ga,Hi,xc,bg,id,Co,od,cd,yg,Go,bc,Bv,cf,Ol,df,uu,dd,uf,wg,Bp,_g,ud,yc,wc,Rv,Eg,Ig,Ll,fu,Zh,Dg,Vg,fd,Yi,Wi,em,_c,Rp,Ec,Ic,tm,Pg,kg,Mo,pu,qv,qp,vu,gu,zi,$p,Dc,$v,Sg,Vc,jo,Tg,Ag,pd,hu,Up,Fg,Hp,ff,Og,pf,No,vd,gd,mu,sm,Lg,hd,xu,Yp,Wp,bu,Cg,yu,Bo,md,ai,wu,rm,xd,Gg,vf,Ki,Pc,am,Mg,_u,Cl,jg,gf,ni,kc,Dr,Ji,Eu,nm,Ng,Xi,Sc,Uv,Bg,Qi,yn,Hv,zp,el,bd,Rg,Iu,Kp,qg,$g,Du,Jp,Ug,Xp,Ro,Hg,Gl,yd,wd,Qp,Tc,_d,Zp,Zi,Ml,lm,Yg,eo,Ed,Id,hf,Vu,Yv,Wg,Ma,ev,tv,zg,Pu,Kg,sv,Ac,Jg,Xg,rv,av,ku,Qg,nv,wn,Zg,jl,eh,to,qo,so,Dd,Vd,th,lv,$o,Pd,sh,iv,ov,cv,mf,rh,Su,kd,xf,Sd,Wv,dv,Td,bf,Fc,ah,Tu,nh,lh,$r,Uo,Ad,uv,Au,zv,ih,Oc,yf,fv,pv,vv,Fd,Od,Fu,Ou,im,oh,Lc,Ld,ch,dh,Cc,Cd,Gd,uh,Lu,Kv,gv,Md,hv,wf,mv,fh,xv,jd,Ho,bv,Gc,om,ph,ro,_f,vh,gh,yv,Yo,Nd,hh,Nl,cm,mh,Bd,xh,Rd,bh,wv,yh,li,qd,u0,Jv,b2,f0,Xv,wh,p0,v0,g0,_v,Wo,Ev,Qv,h0,m0,Ef,x0,b0,y0,w0,If,_h,Iv,y2,_0,zo,Df,Zv,E0,I0,Eh,Ke,Vf,D0,Pf,V0,kf,P0,Sf,k0,Tf,S0,Af,T0,Ff,A0,Of,F0,Lf,O0,Cf,L0,Gf,C0,Mf,G0,jf,M0,Nf,j0,Bf,N0,Rf,B0,qf,R0,$f,q0,Uf,$0,Hf,U0,Yf,H0,Wf,Y0,zf,W0,Kf,z0,Jf,K0,Xf,J0,Qf,X0,Zf,Q0,ep,Z0,tp,ex,sp,tx,rp,sx,ap,rx,np,ax,lp,nx,ip,lx,op,ix,cp,ox,dp,cx,up,dx,fp,ux,pp,fx,vp,px,gp,vx,hp,gx,mp,hx,xp,mx,bp,xx,yp,bx,wp,yx,_p,wx,Ep,_x,Ip,Ex,Ix,Dp,eg,Dx,Vx,Ih,Ko,Vp,Px,Pp,kx,kp,Sx,Sp,Tx,Tp,Ax,Ap,Fx,Fp,Ox,Lx,Op,tg,Cx,Gx,Dh,Cu,Lp,Mx,Cp,jx,Gp,Nx,Mp,Bx,Rx,Dm,qx,jp,sg,$x,Ux,Gu,Hx,Yx,Wx,zx,Mu,ju,rg,w2,Kx,dm,Jx,Xx,Nu,ag,_2,Qx,um,Zx,eb,$d,ng,E2,tb,fm,sb,rb,Jo,ab,pm,nb,lb,Dv,Vh,ib,ob,Vv,Ph,cb,db,Bu,lg,I2,ub,ig,D2,fb,og,V2,pb,vm,vb,Mc;return{c(){l=s("div"),i=s("div"),u=s("div"),v=o(),g=s("button"),x=f("Expand"),m=o(),h=s("style"),E=f(`#expandElement {
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
    }`),y=o(),P=s("script"),D=f(`const expandElement = document.getElementById('expandElement')
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
    })`),I=o(),_=s("div"),F=o(),k=s("div"),A=o(),G=s("div"),j=o(),b=s("div"),L=o(),w=s("div"),R=s("style"),O=f(`p {
      font-size: 1.2rem;
    }`),C=o(),M=s("div"),W=s("section"),Y=s("div"),q=s("div"),oe=s("h2"),ve=f("Exploration station"),z=o(),$=s("h2"),ae=f("Green power from non-recycled waste"),Ee=o(),ce=s("p"),Xe=f(`Power-from-waste technology can convert non-recycled waste into a myriad of different outputs, including
            electricity, heating, cooling, and biochar, among others`),de=o(),te=s("a"),ge=s("img"),Ie=o(),ue=s("span"),je=f("Explore the possibilites"),fe=o(),N=s("div"),Q=s("style"),De=f(`#topRightCluster {
              background-image: url('/assets/Group 14.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              padding: 50px;
              background-origin: content-box;
            }
            #topRightCluster img {
              visibility: hidden;
            }`),pe=o(),xe=s("img"),Re=o(),Le=s("img"),ke=o(),Z=s("img"),Fe=o(),Oe=s("img"),st=o(),V=s("img"),X=o(),re=s("img"),ne=o(),ye=s("img"),qe=o(),$e=s("img"),ct=o(),Ne=s("section"),Je=s("style"),jt=f(`#thegrid div {
          padding: 10px 0px 10px 10px;
        }
        #thegrid div.flex {
          padding: 20px 10px 20px 10px;
        }
        #thegrid2 div {
          padding: 15px 40px 15px 40px;
          line-height: 1.5;
          vertical-align: middle;
        }`),Lt=o(),ze=s("h2"),wt=f("How it works"),Pt=o(),Ve=s("div"),lt=s("div"),rt=s("div"),Dt=s("img"),Gt=o(),ft=s("div"),Nt=f("Plastic waste"),Vt=o(),ie=s("div"),pt=s("div"),kt=s("img"),it=o(),ht=s("div"),Zt=f("Food waste"),Tt=o(),at=s("div"),At=s("div"),Qe=s("img"),dt=o(),Wt=s("div"),es=f("Animal waste"),mt=o(),Me=s("div"),ot=s("div"),Mt=s("img"),xt=o(),vt=s("div"),Bt=f("Agricultural waste"),bt=o(),Ft=s("div"),Jt=s("div"),Rt=s("img"),zt=o(),Ct=s("div"),$t=f("Wood waste"),St=o(),rr=s("div"),os=f("Power from waste technology"),Ut=o(),nt=s("div"),Xt=s("div"),fs=o(),Ss=s("div"),Ts=f(" "),As=o(),It=s("div"),bs=f(" "),ts=o(),ps=s("div"),Pr=f(" "),Na=o(),rs=s("div"),ys=f(" "),Ur=o(),Ys=s("div"),br=o(),Kt=s("div"),Fs=s("div"),Ws=f("Liquid fertiliser"),Ba=o(),ua=s("div"),fa=f("Solid digestate"),kr=o(),js=s("div"),Hr=f("Biogas"),ws=o(),_s=s("div"),Vn=f("Syngas"),Ra=o(),as=s("div"),zs=f("Bio-oil"),ii=o(),qa=s("div"),Ks=f("Biochar"),oi=o(),$a=s("div"),ns=s("div"),Pn=f("Heat / Cool"),yr=o(),Js=s("div"),ar=s("div"),ci=f("Electricity"),pa=o(),Qt=s("h1"),Xs=s("div"),nr=s("div"),lr=s("div"),ir=s("img"),vs=o(),cs=s("div"),nl=s("style"),di=f(`p {
                font-size: 1.2rem;
              }`),Yr=o(),ss=s("h2"),ui=f("Exploration station"),Tr=o(),Wr=s("div"),fi=f("Interact with our exploration "),ll=s("br"),lo=f(`
              station to learn more`),ls=o(),Es=s("p"),Ar=f(`Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you`),Ua=o(),Ht=s("div"),or=s("style"),wr=f(`.cow-element {
            /* overflow: visible !important; */
            box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
          }`),cr=o(),Os=s("div"),Fr=s("div"),va=s("script"),kn=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),il=o(),Qs=s("button"),is=s("img"),pi=o(),ds=s("div"),zr=s("div"),Sn=s("div"),dr=s("img"),vi=o(),ur=s("div"),gs=s("h1"),Zs=f("Cow manure"),Is=o(),Ls=s("p"),Or=s("span"),Ya=f("GCV:"),gi=f(`
                  15 MJ/kg
                  `),fr=s("img"),Ds=o(),Lr=s("p"),Tn=s("span"),An=f("Energy content:"),Wa=f(`
                  Low`),hi=o(),hs=s("div"),Vs=s("button"),Kr=s("img"),mi=f(`
                High organic content`),Fn=o(),er=s("button"),pr=s("img"),tr=f(`
                High nutrient content`),ol=o(),Cr=s("div"),Jr=s("button"),Bs=s("img"),Wc=f(`
                High nitrogen content`),zc=o(),Xr=s("button"),xi=s("img"),oo=f(`
                Low pH levels`),bi=o(),vr=s("div"),us=s("img"),Ln=o(),Ka=s("h1"),yi=s("a"),wi=f("Case study"),ga=o(),gr=s("img"),Kc=o(),Qr=s("div"),Cn=s("h2"),Jc=f("600 dairy cows or 3500 tonnes of cow manure per year"),_i=o(),ha=s("ul"),Ja=s("li"),Gn=f("Produces 656m³ biogas every day"),Xu=o(),uo=s("li"),Xa=f("Ability to power 187 UK households every day"),Qa=o(),ma=s("div"),Ps=s("div"),xa=s("div"),fo=s("div"),Zr=s("img"),ba=o(),ya=s("div"),ql=s("h1"),Ei=f("Most appropriate technology"),Ii=o(),$l=s("p"),Di=f("Anaerobic Digestion"),Mn=o(),hr=s("div"),en=s("a"),jn=s("button"),tn=s("img"),Xc=f(`
                    Start your project`),po=o(),cl=s("a"),ea=s("button"),ks=s("img"),Vi=f(`
                    Learn more`),zd=o(),sr=s("div"),Er=s("div"),sn=s("script"),Pi=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),ki=o(),rn=s("button"),an=s("img"),dl=o(),ms=s("div"),_a=s("div"),Si=s("div"),Ea=s("img"),Qc=o(),mr=s("div"),Rs=s("h1"),ul=f("Food waste"),Nn=o(),Cs=s("p"),Ia=s("span"),Zc=f("GCV:"),fl=f(`
                  17 MJ/kg
                  `),qs=s("img"),Kd=o(),Gr=s("p"),Mr=s("span"),Jd=f("Energy content:"),ed=f(`
                  High`),jr=o(),nn=s("div"),ln=s("button"),pl=s("img"),Hl=f(`
                High organic content`),Xd=o(),ta=s("button"),$s=s("img"),Bn=f(`
                High nutrient content`),Ai=o(),Fi=s("div"),sa=s("button"),Rn=s("img"),Qd=f(`
                Medium nitrogen content`),go=o(),Us=s("button"),on=s("img"),Zd=f(`
                Low pH levels`),ec=o(),qn=s("div"),cn=s("img"),eu=o(),Oi=s("h1"),Da=s("a"),$n=f("Case study"),gl=o(),ho=s("img"),Un=o(),hl=s("div"),mo=s("h2"),xo=f("100 people or 250 tonnes of food waste per year"),Va=o(),Hn=s("ul"),dn=s("li"),tu=f("Produces 156m³ biogas every day"),sc=o(),ml=s("li"),rc=f("Ability to power 19 UK households every day"),xl=o(),Yl=s("div"),Yn=s("div"),Pa=s("div"),bo=s("div"),Li=s("img"),bl=o(),ka=s("div"),yl=s("h1"),su=f("Most appropriate technology"),Wl=o(),Wn=s("p"),ru=f("Anaerobic Digestion"),Ci=o(),Ir=s("div"),fn=s("a"),Sa=s("button"),Gi=s("img"),Mi=f(`
                    Start your project`),tf=o(),yo=s("a"),Ta=s("button"),Kl=s("img"),wl=f(`
                    Learn more`),zn=o(),Hs=s("div"),ra=s("div"),_l=s("script"),sf=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),au=o(),aa=s("button"),ji=s("img"),Jl=o(),xs=s("div"),Aa=s("div"),Eo=s("div"),El=s("img"),ac=o(),Nr=s("div"),pn=s("h1"),nu=f("PE plastic"),nc=o(),Br=s("p"),vn=s("span"),Ni=f("GCV:"),Io=f(`
                  46 MJ/kg
                  `),Il=s("img"),ic=o(),Xl=s("p"),Dl=s("span"),Fa=f("Energy content:"),oc=f(`
                  Very high`),lu=o(),Kn=s("div"),na=s("button"),gn=s("img"),Bi=f(`
                Very low organic content`),cc=o(),Vl=s("button"),Pl=s("img"),iu=f(`
                Very low nutrient content`),Zl=o(),Rr=s("div"),la=s("button"),kl=s("img"),ei=f(`
                Very low nitrogen content`),Do=o(),Sl=s("button"),hn=s("img"),Vo=f(`
                PET bottles`),dc=o(),Jn=s("div"),ia=s("img"),rd=o(),mn=s("h1"),Oa=s("a"),ad=f("Case study"),uc=o(),xn=s("img"),ti=o(),qr=s("div"),Xn=s("h2"),af=f("10000 PET bottles or 100 tonnes of plastic per year"),qi=o(),oa=s("ul"),fc=s("li"),pc=f("Produces 75kWh every day"),ko=o(),La=s("li"),vc=f("Ability to power 63 UK households every day"),gc=o(),So=s("div"),Ca=s("div"),si=s("div"),Qn=s("div"),To=s("img"),Lv=o(),Zn=s("div"),Al=s("h1"),nd=f("Most appropriate technology"),hg=o(),ld=s("p"),ou=f("Pyrolysis"),Cv=o(),hc=s("div"),Ao=s("a"),xr=s("button"),Fo=s("img"),Gv=f(`
                    Start your project`),nf=o(),cu=s("a"),Oo=s("button"),Lo=s("img"),Mv=f(`
                    Learn more`),lf=o(),ri=s("div"),mc=s("div"),$i=s("script"),du=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),jv=o(),Ui=s("button"),Fl=s("img"),Nv=o(),bn=s("div"),Ga=s("div"),Hi=s("div"),xc=s("img"),id=o(),Co=s("div"),od=s("h1"),cd=f("Technology"),yg=o(),Go=s("p"),bc=s("span"),Bv=f("GCV:"),cf=f(`
                  N/A MJ/kg
                  `),Ol=s("img"),uu=o(),dd=s("p"),uf=s("span"),wg=f("Energy content:"),Bp=f(`
                  High`),_g=o(),ud=s("div"),yc=s("button"),wc=s("img"),Eg=f(`
                High organic content`),Ig=o(),Ll=s("button"),fu=s("img"),Dg=f(`
                High nutrient content`),Vg=o(),fd=s("div"),Yi=s("button"),Wi=s("img"),_c=f(`
                High nitrogen content`),Rp=o(),Ec=s("button"),Ic=s("img"),Pg=f(`
                Latest technology`),kg=o(),Mo=s("div"),pu=s("img"),qp=o(),vu=s("h1"),gu=s("a"),zi=f("Case study"),$p=o(),Dc=s("img"),Sg=o(),Vc=s("div"),jo=s("h2"),Tg=f("600 dairy cows or 3500 tonnes of cow manure per year"),Ag=o(),pd=s("ul"),hu=s("li"),Up=f("Produces 656m³ biogas every day"),Fg=o(),Hp=s("li"),ff=f("Ability to power 187 UK households every day"),Og=o(),pf=s("div"),No=s("div"),vd=s("div"),gd=s("div"),mu=s("img"),Lg=o(),hd=s("div"),xu=s("h1"),Yp=f("Most appropriate technology"),Wp=o(),bu=s("p"),Cg=f("New Technology"),yu=o(),Bo=s("div"),md=s("a"),ai=s("button"),wu=s("img"),xd=f(`
                    Start your project`),Gg=o(),vf=s("a"),Ki=s("button"),Pc=s("img"),Mg=f(`
                    Learn more`),_u=o(),Cl=s("div"),jg=o(),gf=s("section"),ni=s("div"),kc=s("div"),Dr=s("div"),Ji=s("button"),Eu=s("img"),Ng=o(),Xi=s("button"),Sc=s("img"),Bg=o(),Qi=s("button"),yn=s("img"),zp=o(),el=s("button"),bd=s("div"),Rg=f("Technology"),Iu=o(),Kp=s("style"),qg=f(`@keyframes bounce {
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
              }`),$g=o(),Du=s("script"),Jp=f("const animatedElements = document.querySelectorAll('.techbuttons')\n\n              animatedElements.forEach(element => {\n                const randomDelay = Math.floor(Math.random() * 1000) // Generate a random delay between 0 and 1000 milliseconds\n                element.style.animationDelay = `${randomDelay}ms`\n                element.style.animationDuration = `${1000 + randomDelay}ms`\n              })"),Ug=o(),Xp=s("style"),Ro=f(`.growbutton:hover {
              box-shadow: 0 0 5px 1px white;
            }
            .growbutton img {
              max-width: 190%;
            }`),Hg=o(),Gl=s("div"),yd=s("div"),wd=s("input"),Qp=o(),Tc=s("button"),_d=s("span"),Zp=o(),Zi=s("button"),Ml=s("img"),Yg=o(),eo=s("h1"),Ed=s("div"),Id=s("div"),hf=s("div"),Vu=s("img"),Wg=o(),Ma=s("div"),ev=s("style"),tv=f(`p {
                font-size: 1.2rem;
              }`),zg=o(),Pu=s("h2"),Kg=f("The PFP Calculator"),sv=o(),Ac=s("div"),Jg=f(`Find the right technology
              `),Xg=s("br"),rv=f(`
              for your needs`),av=o(),ku=s("p"),Qg=f(`We will assist you every step of the way to ensure a smooth and successful implementation of your power-from-waste
              project`),nv=o(),wn=s("div"),Zg=o(),jl=s("div"),eh=o(),to=s("section"),qo=s("div"),so=s("div"),Dd=s("div"),Vd=s("p"),th=f("Waste type"),lv=o(),$o=s("h2"),Pd=s("span"),sh=f("PE Plastic"),iv=o(),ov=s("br"),cv=o(),mf=s("span"),rh=f("10,000 tonnes"),Su=o(),kd=s("div"),xf=s("div"),Sd=s("img"),dv=o(),Td=s("div"),bf=s("h3"),Fc=f("Most appropriate technology"),ah=o(),Tu=s("h2"),nh=f("Pyrolysis"),lh=o(),$r=s("div"),Uo=s("div"),Ad=s("div"),uv=f("Energy content "),Au=s("img"),ih=o(),Oc=s("div"),yf=s("span"),fv=f("18"),pv=f(`
              MJ/kg`),vv=o(),Fd=s("div"),Od=s("div"),Fu=f("Heat produced "),Ou=s("img"),oh=o(),Lc=s("div"),Ld=s("span"),ch=f("11,200"),dh=f(`
              kWh per year`),Cc=o(),Cd=s("div"),Gd=s("div"),uh=f("Heat savings "),Lu=s("img"),gv=o(),Md=s("div"),hv=f(`£
              `),wf=s("span"),mv=f("48,000"),fh=f(`
              per year`),xv=o(),jd=s("div"),Ho=s("div"),bv=f("Electricity produced "),Gc=s("img"),ph=o(),ro=s("div"),_f=s("span"),vh=f("4,800"),gh=f(`
              kWh per year`),yv=o(),Yo=s("div"),Nd=s("div"),hh=f("Electrical savings "),Nl=s("img"),mh=o(),Bd=s("div"),xh=f(`£
              `),Rd=s("span"),bh=f("70,000"),wv=f(`
              per year`),yh=o(),li=s("div"),qd=s("div"),u0=f("Char produced "),Jv=s("img"),f0=o(),Xv=s("div"),wh=s("span"),p0=f("500"),v0=f(`
              tonnes`),g0=o(),_v=s("section"),Wo=s("div"),Ev=s("div"),Qv=s("h1"),h0=f("The PFP Calculator"),m0=o(),Ef=s("p"),x0=f(`Our user-friendly calculator is designed to evaluate your project's
            `),b0=s("br"),y0=f(`
            feasibility, relevant technology and energy output`),w0=o(),If=s("div"),_h=s("div"),Iv=s("img"),_0=o(),zo=s("div"),Df=s("div"),Zv=s("button"),E0=f("Waste type"),I0=o(),Eh=s("div"),Ke=s("select"),Vf=s("option"),D0=f("Cheese production"),Pf=s("option"),V0=f("Butter production"),kf=s("option"),P0=f("Ice cream"),Sf=s("option"),k0=f("Beer production"),Tf=s("option"),S0=f("Wine production"),Af=s("option"),T0=f("Spirits production"),Ff=s("option"),A0=f("Ethanol production"),Of=s("option"),F0=f("Pulp production"),Lf=s("option"),O0=f("Juice production"),Cf=s("option"),L0=f("Tomato ketchup"),Gf=s("option"),C0=f("Bovine meat"),Mf=s("option"),G0=f("Pig meat"),jf=s("option"),M0=f("Sheep meat"),Nf=s("option"),j0=f("Frozen potatoes"),Bf=s("option"),N0=f("Prepared potatoes (crisps)"),Rf=s("option"),B0=f("Potato starch"),qf=s("option"),R0=f("Dried potatoes"),$f=s("option"),q0=f("Sugar production"),Uf=s("option"),$0=f("Yeast production"),Hf=s("option"),U0=f("Vegetable oils production"),Yf=s("option"),H0=f("Biodiesel production"),Wf=s("option"),Y0=f("Pig manure"),zf=s("option"),W0=f("Dairy Cattle"),Kf=s("option"),z0=f("Non diary cattle"),Jf=s("option"),K0=f("Buffalo"),Xf=s("option"),J0=f("Chicken layer manure"),Qf=s("option"),X0=f("Chicken broiler manure"),Zf=s("option"),Q0=f("Sheep"),ep=s("option"),Z0=f("Food waste"),tp=s("option"),ex=f("Fish waste"),sp=s("option"),tx=f("Coffee grounds"),rp=s("option"),sx=f("Crop residues"),ap=s("option"),rx=f("Maize silage"),np=s("option"),ax=f("Cereal"),lp=s("option"),nx=f("Grass silage"),ip=s("option"),lx=f("Pulp & Paper Waste"),op=s("option"),ix=f("Textile Waste"),cp=s("option"),ox=f("PE Plastic"),dp=s("option"),cx=f("SRF"),up=s("option"),dx=f("RDF"),fp=s("option"),ux=f("PP Plastic"),pp=s("option"),fx=f("PS Plastic"),vp=s("option"),px=f("PVC Plastic"),gp=s("option"),vx=f("PET Plastic"),hp=s("option"),gx=f("Rubber"),mp=s("option"),hx=f("Wood waste"),xp=s("option"),mx=f("Municipal Solid Waste (MSW)"),bp=s("option"),xx=f("Medical Waste"),yp=s("option"),bx=f("Ceramics"),wp=s("option"),yx=f("Sand"),_p=s("option"),wx=f("Dust"),Ep=s("option"),_x=f("Glass"),Ip=s("option"),Ex=f("Metals"),Ix=o(),Dp=s("div"),eg=s("button"),Dx=f("Kilograms per day"),Vx=o(),Ih=s("div"),Ko=s("select"),Vp=s("option"),Px=f("10 kg"),Pp=s("option"),kx=f("100 kg"),kp=s("option"),Sx=f("1000 kg"),Sp=s("option"),Tx=f("10,000 kg"),Tp=s("option"),Ax=f("20,000 kg"),Ap=s("option"),Fx=f("40,000 kg"),Fp=s("option"),Ox=f("> 40,000 kg"),Lx=o(),Op=s("div"),tg=s("button"),Cx=f("Client needs"),Gx=o(),Dh=s("div"),Cu=s("select"),Lp=s("option"),Mx=f("Electricity"),Cp=s("option"),jx=f("Heating / Cooling"),Gp=s("option"),Nx=f("Carbon credits"),Mp=s("option"),Bx=f("Fertiliser"),Rx=o(),Dm=s("div"),qx=o(),jp=s("div"),sg=s("div"),$x=f("Your project is feasible"),Ux=o(),Gu=s("p"),Hx=f(`Review your results to explore the different possibilities and
            `),Yx=s("br"),Wx=f(`
            book a slot with us for personalised guidance on next steps`),zx=o(),Mu=s("div"),ju=s("a"),rg=s("img"),Kx=o(),dm=s("span"),Jx=f("Book a call with us"),Xx=o(),Nu=s("a"),ag=s("img"),Qx=o(),um=s("span"),Zx=f("Learn more"),eb=o(),$d=s("button"),ng=s("img"),tb=o(),fm=s("span"),sb=f("Calculate"),rb=o(),Jo=s("div"),ab=o(),pm=s("script"),nb=f(`function calculate() {
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
          : 'This feedstock is <u style="color:#ec8b5a;">not</u> feasible'

        document.querySelector('#feasible-results').innerHTML =
          !feasible || minlimit
            ? 'Review your results to explore the different possibilities and<br />book a slot with us for personalised guidance on next steps'
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
      }`),lb=o(),Dv=s("div"),Vh=s("div"),ib=f("Copyright © 2023 Power for Planet"),ob=o(),Vv=s("div"),Ph=s("div"),cb=f("Privacy Policy"),db=o(),Bu=s("div"),lg=s("img"),ub=o(),ig=s("img"),fb=o(),og=s("img"),pb=o(),vm=s("script"),vb=f(`function toggleElement(k) {
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
    }, 100)`),this.h()},l(yt){l=r(yt,"DIV",{style:!0});var ca=n(l);i=r(ca,"DIV",{class:!0});var P2=n(i);u=r(P2,"DIV",{id:!0,class:!0});var G_=n(u);G_.forEach(a),P2.forEach(a),v=c(ca),g=r(ca,"BUTTON",{id:!0,class:!0});var k2=n(g);x=p(k2,"Expand"),k2.forEach(a),m=c(ca),h=r(ca,"STYLE",{});var S2=n(h);E=p(S2,`#expandElement {
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
    }`),S2.forEach(a),y=c(ca),P=r(ca,"SCRIPT",{});var T2=n(P);D=p(T2,`const expandElement = document.getElementById('expandElement')
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
    })`),T2.forEach(a),ca.forEach(a),I=c(yt),_=r(yt,"DIV",{class:!0,id:!0}),n(_).forEach(a),F=c(yt),k=r(yt,"DIV",{class:!0,id:!0}),n(k).forEach(a),A=c(yt),G=r(yt,"DIV",{class:!0,id:!0}),n(G).forEach(a),j=c(yt),b=r(yt,"DIV",{class:!0,id:!0}),n(b).forEach(a),L=c(yt),w=r(yt,"DIV",{class:!0});var kh=n(w);R=r(kh,"STYLE",{});var A2=n(R);O=p(A2,`p {
      font-size: 1.2rem;
    }`),A2.forEach(a),C=c(kh),M=r(kh,"DIV",{class:!0});var _n=n(M);W=r(_n,"SECTION",{class:!0});var F2=n(W);Y=r(F2,"DIV",{class:!0});var Vm=n(Y);q=r(Vm,"DIV",{class:!0});var Pv=n(q);oe=r(Pv,"H2",{class:!0});var O2=n(oe);ve=p(O2,"Exploration station"),O2.forEach(a),z=c(Pv),$=r(Pv,"H2",{class:!0});var L2=n($);ae=p(L2,"Green power from non-recycled waste"),L2.forEach(a),Ee=c(Pv),ce=r(Pv,"P",{class:!0});var C2=n(ce);Xe=p(C2,`Power-from-waste technology can convert non-recycled waste into a myriad of different outputs, including
            electricity, heating, cooling, and biochar, among others`),C2.forEach(a),de=c(Pv),te=r(Pv,"A",{class:!0,href:!0});var Pm=n(te);ge=r(Pm,"IMG",{class:!0,src:!0,alt:!0}),Ie=c(Pm),ue=r(Pm,"SPAN",{});var G2=n(ue);je=p(G2,"Explore the possibilites"),G2.forEach(a),Pm.forEach(a),Pv.forEach(a),fe=c(Vm),N=r(Vm,"DIV",{class:!0,id:!0});var En=n(N);Q=r(En,"STYLE",{});var M2=n(Q);De=p(M2,`#topRightCluster {
              background-image: url('/assets/Group 14.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              padding: 50px;
              background-origin: content-box;
            }
            #topRightCluster img {
              visibility: hidden;
            }`),M2.forEach(a),pe=c(En),xe=r(En,"IMG",{class:!0,src:!0,alt:!0}),Re=c(En),Le=r(En,"IMG",{class:!0,src:!0,alt:!0}),ke=c(En),Z=r(En,"IMG",{class:!0,src:!0,alt:!0}),Fe=c(En),Oe=r(En,"IMG",{class:!0,src:!0,alt:!0}),st=c(En),V=r(En,"IMG",{class:!0,src:!0,alt:!0}),X=c(En),re=r(En,"IMG",{class:!0,src:!0,alt:!0}),ne=c(En),ye=r(En,"IMG",{class:!0,src:!0,alt:!0}),qe=c(En),$e=r(En,"IMG",{class:!0,src:!0,alt:!0}),En.forEach(a),Vm.forEach(a),F2.forEach(a),ct=c(_n),Ne=r(_n,"SECTION",{class:!0,style:!0});var Bl=n(Ne);Je=r(Bl,"STYLE",{});var j2=n(Je);jt=p(j2,`#thegrid div {
          padding: 10px 0px 10px 10px;
        }
        #thegrid div.flex {
          padding: 20px 10px 20px 10px;
        }
        #thegrid2 div {
          padding: 15px 40px 15px 40px;
          line-height: 1.5;
          vertical-align: middle;
        }`),j2.forEach(a),Lt=c(Bl),ze=r(Bl,"H2",{class:!0});var N2=n(ze);wt=p(N2,"How it works"),N2.forEach(a),Pt=c(Bl),Ve=r(Bl,"DIV",{class:!0,id:!0});var Ru=n(Ve);lt=r(Ru,"DIV",{class:!0});var km=n(lt);rt=r(km,"DIV",{class:!0});var B2=n(rt);Dt=r(B2,"IMG",{src:!0,alt:!0}),B2.forEach(a),Gt=c(km),ft=r(km,"DIV",{class:!0});var R2=n(ft);Nt=p(R2,"Plastic waste"),R2.forEach(a),km.forEach(a),Vt=c(Ru),ie=r(Ru,"DIV",{class:!0});var Sm=n(ie);pt=r(Sm,"DIV",{class:!0});var q2=n(pt);kt=r(q2,"IMG",{src:!0,alt:!0}),q2.forEach(a),it=c(Sm),ht=r(Sm,"DIV",{class:!0});var $2=n(ht);Zt=p($2,"Food waste"),$2.forEach(a),Sm.forEach(a),Tt=c(Ru),at=r(Ru,"DIV",{class:!0});var Tm=n(at);At=r(Tm,"DIV",{class:!0});var U2=n(At);Qe=r(U2,"IMG",{src:!0,alt:!0}),U2.forEach(a),dt=c(Tm),Wt=r(Tm,"DIV",{class:!0});var H2=n(Wt);es=p(H2,"Animal waste"),H2.forEach(a),Tm.forEach(a),mt=c(Ru),Me=r(Ru,"DIV",{class:!0});var Am=n(Me);ot=r(Am,"DIV",{class:!0});var Y2=n(ot);Mt=r(Y2,"IMG",{src:!0,alt:!0}),Y2.forEach(a),xt=c(Am),vt=r(Am,"DIV",{class:!0});var W2=n(vt);Bt=p(W2,"Agricultural waste"),W2.forEach(a),Am.forEach(a),bt=c(Ru),Ft=r(Ru,"DIV",{class:!0});var Fm=n(Ft);Jt=r(Fm,"DIV",{class:!0});var z2=n(Jt);Rt=r(z2,"IMG",{src:!0,alt:!0}),z2.forEach(a),zt=c(Fm),Ct=r(Fm,"DIV",{class:!0});var K2=n(Ct);$t=p(K2,"Wood waste"),K2.forEach(a),Fm.forEach(a),Ru.forEach(a),St=c(Bl),rr=r(Bl,"DIV",{class:!0});var J2=n(rr);os=p(J2,"Power from waste technology"),J2.forEach(a),Ut=c(Bl),nt=r(Bl,"DIV",{class:!0,style:!0});var jc=n(nt);Xt=r(jc,"DIV",{class:!0}),n(Xt).forEach(a),fs=c(jc),Ss=r(jc,"DIV",{class:!0});var X2=n(Ss);Ts=p(X2," "),X2.forEach(a),As=c(jc),It=r(jc,"DIV",{class:!0});var Q2=n(It);bs=p(Q2," "),Q2.forEach(a),ts=c(jc),ps=r(jc,"DIV",{class:!0});var Z2=n(ps);Pr=p(Z2," "),Z2.forEach(a),Na=c(jc),rs=r(jc,"DIV",{class:!0});var e3=n(rs);ys=p(e3," "),e3.forEach(a),Ur=c(jc),Ys=r(jc,"DIV",{class:!0}),n(Ys).forEach(a),jc.forEach(a),br=c(Bl),Kt=r(Bl,"DIV",{class:!0,id:!0});var Nc=n(Kt);Fs=r(Nc,"DIV",{class:!0});var t3=n(Fs);Ws=p(t3,"Liquid fertiliser"),t3.forEach(a),Ba=c(Nc),ua=r(Nc,"DIV",{class:!0});var s3=n(ua);fa=p(s3,"Solid digestate"),s3.forEach(a),kr=c(Nc),js=r(Nc,"DIV",{class:!0});var r3=n(js);Hr=p(r3,"Biogas"),r3.forEach(a),ws=c(Nc),_s=r(Nc,"DIV",{class:!0});var a3=n(_s);Vn=p(a3,"Syngas"),a3.forEach(a),Ra=c(Nc),as=r(Nc,"DIV",{class:!0});var n3=n(as);zs=p(n3,"Bio-oil"),n3.forEach(a),ii=c(Nc),qa=r(Nc,"DIV",{class:!0});var l3=n(qa);Ks=p(l3,"Biochar"),l3.forEach(a),Nc.forEach(a),oi=c(Bl),$a=r(Bl,"DIV",{class:!0});var i3=n($a);ns=r(i3,"DIV",{class:!0});var o3=n(ns);Pn=p(o3,"Heat / Cool"),o3.forEach(a),i3.forEach(a),yr=c(Bl),Js=r(Bl,"DIV",{class:!0});var c3=n(Js);ar=r(c3,"DIV",{class:!0});var d3=n(ar);ci=p(d3,"Electricity"),d3.forEach(a),c3.forEach(a),Bl.forEach(a),pa=c(_n),Qt=r(_n,"H1",{id:!0,class:!0});var Sh=n(Qt);Xs=r(Sh,"DIV",{class:!0});var u3=n(Xs);nr=r(u3,"DIV",{class:!0});var Om=n(nr);lr=r(Om,"DIV",{class:!0});var f3=n(lr);ir=r(f3,"IMG",{class:!0,src:!0,alt:!0}),f3.forEach(a),vs=c(Om),cs=r(Om,"DIV",{class:!0});var kv=n(cs);nl=r(kv,"STYLE",{});var p3=n(nl);di=p(p3,`p {
                font-size: 1.2rem;
              }`),p3.forEach(a),Yr=c(kv),ss=r(kv,"H2",{style:!0,class:!0});var v3=n(ss);ui=p(v3,"Exploration station"),v3.forEach(a),Tr=c(kv),Wr=r(kv,"DIV",{style:!0,class:!0});var Lm=n(Wr);fi=p(Lm,"Interact with our exploration "),ll=r(Lm,"BR",{}),lo=p(Lm,`
              station to learn more`),Lm.forEach(a),ls=c(kv),Es=r(kv,"P",{style:!0,class:!0});var g3=n(Es);Ar=p(g3,`Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you`),g3.forEach(a),kv.forEach(a),Om.forEach(a),u3.forEach(a),Ua=c(Sh),Ht=r(Sh,"DIV",{class:!0,id:!0,style:!0});var qu=n(Ht);or=r(qu,"STYLE",{});var h3=n(or);wr=p(h3,`.cow-element {
            /* overflow: visible !important; */
            box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
          }`),h3.forEach(a),cr=c(qu),Os=r(qu,"DIV",{class:!0,id:!0});var Th=n(Os);Fr=r(Th,"DIV",{class:!0});var Cm=n(Fr);va=r(Cm,"SCRIPT",{});var m3=n(va);kn=p(m3,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),m3.forEach(a),il=c(Cm),Qs=r(Cm,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var x3=n(Qs);is=r(x3,"IMG",{class:!0,src:!0,alt:!0}),x3.forEach(a),Cm.forEach(a),pi=c(Th),ds=r(Th,"DIV",{class:!0});var $u=n(ds);zr=r($u,"DIV",{class:!0});var Gm=n(zr);Sn=r(Gm,"DIV",{class:!0});var b3=n(Sn);dr=r(b3,"IMG",{style:!0,src:!0,alt:!0}),b3.forEach(a),vi=c(Gm),ur=r(Gm,"DIV",{class:!0});var Ah=n(ur);gs=r(Ah,"H1",{style:!0,class:!0});var y3=n(gs);Zs=p(y3,"Cow manure"),y3.forEach(a),Is=c(Ah),Ls=r(Ah,"P",{style:!0,class:!0});var Mm=n(Ls);Or=r(Mm,"SPAN",{class:!0});var w3=n(Or);Ya=p(w3,"GCV:"),w3.forEach(a),gi=p(Mm,`
                  15 MJ/kg
                  `),fr=r(Mm,"IMG",{class:!0,src:!0,alt:!0}),Mm.forEach(a),Ds=c(Ah),Lr=r(Ah,"P",{style:!0,class:!0});var gb=n(Lr);Tn=r(gb,"SPAN",{class:!0});var _3=n(Tn);An=p(_3,"Energy content:"),_3.forEach(a),Wa=p(gb,`
                  Low`),gb.forEach(a),Ah.forEach(a),Gm.forEach(a),hi=c($u),hs=r($u,"DIV",{class:!0});var jm=n(hs);Vs=r(jm,"BUTTON",{type:!0,style:!0,class:!0});var hb=n(Vs);Kr=r(hb,"IMG",{class:!0,src:!0,alt:!0}),mi=p(hb,`
                High organic content`),hb.forEach(a),Fn=c(jm),er=r(jm,"BUTTON",{type:!0,style:!0,class:!0});var mb=n(er);pr=r(mb,"IMG",{class:!0,src:!0,alt:!0}),tr=p(mb,`
                High nutrient content`),mb.forEach(a),jm.forEach(a),ol=c($u),Cr=r($u,"DIV",{class:!0});var Nm=n(Cr);Jr=r(Nm,"BUTTON",{type:!0,style:!0,class:!0});var xb=n(Jr);Bs=r(xb,"IMG",{class:!0,src:!0,alt:!0}),Wc=p(xb,`
                High nitrogen content`),xb.forEach(a),zc=c(Nm),Xr=r(Nm,"BUTTON",{type:!0,style:!0,class:!0});var bb=n(Xr);xi=r(bb,"IMG",{class:!0,src:!0,alt:!0}),oo=p(bb,`
                Low pH levels`),bb.forEach(a),Nm.forEach(a),bi=c($u),vr=r($u,"DIV",{class:!0});var Fh=n(vr);us=r(Fh,"IMG",{class:!0,src:!0,alt:!0}),Ln=c(Fh),Ka=r(Fh,"H1",{style:!0,class:!0});var E3=n(Ka);yi=r(E3,"A",{href:!0,target:!0});var I3=n(yi);wi=p(I3,"Case study"),I3.forEach(a),E3.forEach(a),ga=c(Fh),gr=r(Fh,"IMG",{class:!0,src:!0,alt:!0}),Fh.forEach(a),Kc=c($u),Qr=r($u,"DIV",{style:!0,class:!0});var Bm=n(Qr);Cn=r(Bm,"H2",{class:!0});var D3=n(Cn);Jc=p(D3,"600 dairy cows or 3500 tonnes of cow manure per year"),D3.forEach(a),_i=c(Bm),ha=r(Bm,"UL",{class:!0});var Rm=n(ha);Ja=r(Rm,"LI",{});var V3=n(Ja);Gn=p(V3,"Produces 656m³ biogas every day"),V3.forEach(a),Xu=c(Rm),uo=r(Rm,"LI",{});var P3=n(uo);Xa=p(P3,"Ability to power 187 UK households every day"),P3.forEach(a),Rm.forEach(a),Bm.forEach(a),$u.forEach(a),Qa=c(Th),ma=r(Th,"DIV",{class:!0});var k3=n(ma);Ps=r(k3,"DIV",{class:!0});var qm=n(Ps);xa=r(qm,"DIV",{class:!0});var $m=n(xa);fo=r($m,"DIV",{class:!0});var S3=n(fo);Zr=r(S3,"IMG",{src:!0,class:!0,alt:!0}),S3.forEach(a),ba=c($m),ya=r($m,"DIV",{class:!0});var Um=n(ya);ql=r(Um,"H1",{style:!0,class:!0});var T3=n(ql);Ei=p(T3,"Most appropriate technology"),T3.forEach(a),Ii=c(Um),$l=r(Um,"P",{style:!0,class:!0});var A3=n($l);Di=p(A3,"Anaerobic Digestion"),A3.forEach(a),Um.forEach(a),$m.forEach(a),Mn=c(qm),hr=r(qm,"DIV",{class:!0});var Hm=n(hr);en=r(Hm,"A",{href:!0});var F3=n(en);jn=r(F3,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var yb=n(jn);tn=r(yb,"IMG",{class:!0,src:!0,alt:!0}),Xc=p(yb,`
                    Start your project`),yb.forEach(a),F3.forEach(a),po=c(Hm),cl=r(Hm,"A",{href:!0});var O3=n(cl);ea=r(O3,"BUTTON",{type:!0,style:!0,class:!0});var wb=n(ea);ks=r(wb,"IMG",{class:!0,src:!0,alt:!0}),Vi=p(wb,`
                    Learn more`),wb.forEach(a),O3.forEach(a),Hm.forEach(a),qm.forEach(a),k3.forEach(a),Th.forEach(a),zd=c(qu),sr=r(qu,"DIV",{class:!0,id:!0});var Oh=n(sr);Er=r(Oh,"DIV",{class:!0});var Ym=n(Er);sn=r(Ym,"SCRIPT",{});var L3=n(sn);Pi=p(L3,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),L3.forEach(a),ki=c(Ym),rn=r(Ym,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var C3=n(rn);an=r(C3,"IMG",{class:!0,src:!0,alt:!0}),C3.forEach(a),Ym.forEach(a),dl=c(Oh),ms=r(Oh,"DIV",{class:!0});var Uu=n(ms);_a=r(Uu,"DIV",{class:!0});var Wm=n(_a);Si=r(Wm,"DIV",{class:!0});var G3=n(Si);Ea=r(G3,"IMG",{style:!0,src:!0,alt:!0}),G3.forEach(a),Qc=c(Wm),mr=r(Wm,"DIV",{class:!0});var Lh=n(mr);Rs=r(Lh,"H1",{style:!0,class:!0});var M3=n(Rs);ul=p(M3,"Food waste"),M3.forEach(a),Nn=c(Lh),Cs=r(Lh,"P",{style:!0,class:!0});var zm=n(Cs);Ia=r(zm,"SPAN",{class:!0});var j3=n(Ia);Zc=p(j3,"GCV:"),j3.forEach(a),fl=p(zm,`
                  17 MJ/kg
                  `),qs=r(zm,"IMG",{class:!0,src:!0,alt:!0}),zm.forEach(a),Kd=c(Lh),Gr=r(Lh,"P",{style:!0,class:!0});var _b=n(Gr);Mr=r(_b,"SPAN",{class:!0});var N3=n(Mr);Jd=p(N3,"Energy content:"),N3.forEach(a),ed=p(_b,`
                  High`),_b.forEach(a),Lh.forEach(a),Wm.forEach(a),jr=c(Uu),nn=r(Uu,"DIV",{class:!0});var Km=n(nn);ln=r(Km,"BUTTON",{type:!0,style:!0,class:!0});var Eb=n(ln);pl=r(Eb,"IMG",{class:!0,src:!0,alt:!0}),Hl=p(Eb,`
                High organic content`),Eb.forEach(a),Xd=c(Km),ta=r(Km,"BUTTON",{type:!0,style:!0,class:!0});var Ib=n(ta);$s=r(Ib,"IMG",{class:!0,src:!0,alt:!0}),Bn=p(Ib,`
                High nutrient content`),Ib.forEach(a),Km.forEach(a),Ai=c(Uu),Fi=r(Uu,"DIV",{class:!0});var Jm=n(Fi);sa=r(Jm,"BUTTON",{type:!0,style:!0,class:!0});var Db=n(sa);Rn=r(Db,"IMG",{class:!0,src:!0,alt:!0}),Qd=p(Db,`
                Medium nitrogen content`),Db.forEach(a),go=c(Jm),Us=r(Jm,"BUTTON",{type:!0,style:!0,class:!0});var Vb=n(Us);on=r(Vb,"IMG",{class:!0,src:!0,alt:!0}),Zd=p(Vb,`
                Low pH levels`),Vb.forEach(a),Jm.forEach(a),ec=c(Uu),qn=r(Uu,"DIV",{class:!0});var Ch=n(qn);cn=r(Ch,"IMG",{class:!0,src:!0,alt:!0}),eu=c(Ch),Oi=r(Ch,"H1",{style:!0,class:!0});var B3=n(Oi);Da=r(B3,"A",{href:!0,target:!0});var R3=n(Da);$n=p(R3,"Case study"),R3.forEach(a),B3.forEach(a),gl=c(Ch),ho=r(Ch,"IMG",{class:!0,src:!0,alt:!0}),Ch.forEach(a),Un=c(Uu),hl=r(Uu,"DIV",{style:!0,class:!0});var Xm=n(hl);mo=r(Xm,"H2",{class:!0});var q3=n(mo);xo=p(q3,"100 people or 250 tonnes of food waste per year"),q3.forEach(a),Va=c(Xm),Hn=r(Xm,"UL",{class:!0});var Qm=n(Hn);dn=r(Qm,"LI",{});var $3=n(dn);tu=p($3,"Produces 156m³ biogas every day"),$3.forEach(a),sc=c(Qm),ml=r(Qm,"LI",{});var U3=n(ml);rc=p(U3,"Ability to power 19 UK households every day"),U3.forEach(a),Qm.forEach(a),Xm.forEach(a),Uu.forEach(a),xl=c(Oh),Yl=r(Oh,"DIV",{class:!0});var H3=n(Yl);Yn=r(H3,"DIV",{class:!0});var Zm=n(Yn);Pa=r(Zm,"DIV",{class:!0});var e1=n(Pa);bo=r(e1,"DIV",{class:!0});var Y3=n(bo);Li=r(Y3,"IMG",{src:!0,class:!0,alt:!0}),Y3.forEach(a),bl=c(e1),ka=r(e1,"DIV",{class:!0});var t1=n(ka);yl=r(t1,"H1",{style:!0,class:!0});var W3=n(yl);su=p(W3,"Most appropriate technology"),W3.forEach(a),Wl=c(t1),Wn=r(t1,"P",{style:!0,class:!0});var z3=n(Wn);ru=p(z3,"Anaerobic Digestion"),z3.forEach(a),t1.forEach(a),e1.forEach(a),Ci=c(Zm),Ir=r(Zm,"DIV",{class:!0});var s1=n(Ir);fn=r(s1,"A",{href:!0});var K3=n(fn);Sa=r(K3,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Pb=n(Sa);Gi=r(Pb,"IMG",{class:!0,src:!0,alt:!0}),Mi=p(Pb,`
                    Start your project`),Pb.forEach(a),K3.forEach(a),tf=c(s1),yo=r(s1,"A",{href:!0});var J3=n(yo);Ta=r(J3,"BUTTON",{type:!0,style:!0,class:!0});var kb=n(Ta);Kl=r(kb,"IMG",{class:!0,src:!0,alt:!0}),wl=p(kb,`
                    Learn more`),kb.forEach(a),J3.forEach(a),s1.forEach(a),Zm.forEach(a),H3.forEach(a),Oh.forEach(a),zn=c(qu),Hs=r(qu,"DIV",{class:!0,id:!0});var Gh=n(Hs);ra=r(Gh,"DIV",{class:!0});var r1=n(ra);_l=r(r1,"SCRIPT",{});var X3=n(_l);sf=p(X3,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),X3.forEach(a),au=c(r1),aa=r(r1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Q3=n(aa);ji=r(Q3,"IMG",{class:!0,src:!0,alt:!0}),Q3.forEach(a),r1.forEach(a),Jl=c(Gh),xs=r(Gh,"DIV",{class:!0});var Hu=n(xs);Aa=r(Hu,"DIV",{class:!0});var a1=n(Aa);Eo=r(a1,"DIV",{class:!0});var Z3=n(Eo);El=r(Z3,"IMG",{style:!0,src:!0,alt:!0}),Z3.forEach(a),ac=c(a1),Nr=r(a1,"DIV",{class:!0});var Mh=n(Nr);pn=r(Mh,"H1",{style:!0,class:!0});var ey=n(pn);nu=p(ey,"PE plastic"),ey.forEach(a),nc=c(Mh),Br=r(Mh,"P",{style:!0,class:!0});var n1=n(Br);vn=r(n1,"SPAN",{class:!0});var ty=n(vn);Ni=p(ty,"GCV:"),ty.forEach(a),Io=p(n1,`
                  46 MJ/kg
                  `),Il=r(n1,"IMG",{class:!0,src:!0,alt:!0}),n1.forEach(a),ic=c(Mh),Xl=r(Mh,"P",{style:!0,class:!0});var Sb=n(Xl);Dl=r(Sb,"SPAN",{class:!0});var sy=n(Dl);Fa=p(sy,"Energy content:"),sy.forEach(a),oc=p(Sb,`
                  Very high`),Sb.forEach(a),Mh.forEach(a),a1.forEach(a),lu=c(Hu),Kn=r(Hu,"DIV",{class:!0});var l1=n(Kn);na=r(l1,"BUTTON",{type:!0,style:!0,class:!0});var Tb=n(na);gn=r(Tb,"IMG",{class:!0,src:!0,alt:!0}),Bi=p(Tb,`
                Very low organic content`),Tb.forEach(a),cc=c(l1),Vl=r(l1,"BUTTON",{type:!0,style:!0,class:!0});var Ab=n(Vl);Pl=r(Ab,"IMG",{class:!0,src:!0,alt:!0}),iu=p(Ab,`
                Very low nutrient content`),Ab.forEach(a),l1.forEach(a),Zl=c(Hu),Rr=r(Hu,"DIV",{class:!0});var i1=n(Rr);la=r(i1,"BUTTON",{type:!0,style:!0,class:!0});var Fb=n(la);kl=r(Fb,"IMG",{class:!0,src:!0,alt:!0}),ei=p(Fb,`
                Very low nitrogen content`),Fb.forEach(a),Do=c(i1),Sl=r(i1,"BUTTON",{type:!0,style:!0,class:!0});var Ob=n(Sl);hn=r(Ob,"IMG",{class:!0,src:!0,alt:!0}),Vo=p(Ob,`
                PET bottles`),Ob.forEach(a),i1.forEach(a),dc=c(Hu),Jn=r(Hu,"DIV",{class:!0});var jh=n(Jn);ia=r(jh,"IMG",{class:!0,src:!0,alt:!0}),rd=c(jh),mn=r(jh,"H1",{style:!0,class:!0});var ry=n(mn);Oa=r(ry,"A",{href:!0,target:!0});var ay=n(Oa);ad=p(ay,"Case study"),ay.forEach(a),ry.forEach(a),uc=c(jh),xn=r(jh,"IMG",{class:!0,src:!0,alt:!0}),jh.forEach(a),ti=c(Hu),qr=r(Hu,"DIV",{style:!0,class:!0});var o1=n(qr);Xn=r(o1,"H2",{class:!0});var ny=n(Xn);af=p(ny,"10000 PET bottles or 100 tonnes of plastic per year"),ny.forEach(a),qi=c(o1),oa=r(o1,"UL",{class:!0});var c1=n(oa);fc=r(c1,"LI",{});var ly=n(fc);pc=p(ly,"Produces 75kWh every day"),ly.forEach(a),ko=c(c1),La=r(c1,"LI",{});var iy=n(La);vc=p(iy,"Ability to power 63 UK households every day"),iy.forEach(a),c1.forEach(a),o1.forEach(a),Hu.forEach(a),gc=c(Gh),So=r(Gh,"DIV",{class:!0});var oy=n(So);Ca=r(oy,"DIV",{class:!0});var d1=n(Ca);si=r(d1,"DIV",{class:!0});var u1=n(si);Qn=r(u1,"DIV",{class:!0});var cy=n(Qn);To=r(cy,"IMG",{src:!0,class:!0,alt:!0}),cy.forEach(a),Lv=c(u1),Zn=r(u1,"DIV",{class:!0});var f1=n(Zn);Al=r(f1,"H1",{style:!0,class:!0});var dy=n(Al);nd=p(dy,"Most appropriate technology"),dy.forEach(a),hg=c(f1),ld=r(f1,"P",{style:!0,class:!0});var uy=n(ld);ou=p(uy,"Pyrolysis"),uy.forEach(a),f1.forEach(a),u1.forEach(a),Cv=c(d1),hc=r(d1,"DIV",{class:!0});var p1=n(hc);Ao=r(p1,"A",{href:!0});var fy=n(Ao);xr=r(fy,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Lb=n(xr);Fo=r(Lb,"IMG",{class:!0,src:!0,alt:!0}),Gv=p(Lb,`
                    Start your project`),Lb.forEach(a),fy.forEach(a),nf=c(p1),cu=r(p1,"A",{href:!0});var py=n(cu);Oo=r(py,"BUTTON",{type:!0,style:!0,class:!0});var Cb=n(Oo);Lo=r(Cb,"IMG",{class:!0,src:!0,alt:!0}),Mv=p(Cb,`
                    Learn more`),Cb.forEach(a),py.forEach(a),p1.forEach(a),d1.forEach(a),oy.forEach(a),Gh.forEach(a),lf=c(qu),ri=r(qu,"DIV",{class:!0,id:!0});var Nh=n(ri);mc=r(Nh,"DIV",{class:!0});var v1=n(mc);$i=r(v1,"SCRIPT",{});var vy=n($i);du=p(vy,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),vy.forEach(a),jv=c(v1),Ui=r(v1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var gy=n(Ui);Fl=r(gy,"IMG",{class:!0,src:!0,alt:!0}),gy.forEach(a),v1.forEach(a),Nv=c(Nh),bn=r(Nh,"DIV",{class:!0});var Yu=n(bn);Ga=r(Yu,"DIV",{class:!0});var g1=n(Ga);Hi=r(g1,"DIV",{class:!0});var hy=n(Hi);xc=r(hy,"IMG",{style:!0,src:!0,alt:!0}),hy.forEach(a),id=c(g1),Co=r(g1,"DIV",{class:!0});var Bh=n(Co);od=r(Bh,"H1",{style:!0,class:!0});var my=n(od);cd=p(my,"Technology"),my.forEach(a),yg=c(Bh),Go=r(Bh,"P",{style:!0,class:!0});var h1=n(Go);bc=r(h1,"SPAN",{class:!0});var xy=n(bc);Bv=p(xy,"GCV:"),xy.forEach(a),cf=p(h1,`
                  N/A MJ/kg
                  `),Ol=r(h1,"IMG",{class:!0,src:!0,alt:!0}),h1.forEach(a),uu=c(Bh),dd=r(Bh,"P",{style:!0,class:!0});var Gb=n(dd);uf=r(Gb,"SPAN",{class:!0});var by=n(uf);wg=p(by,"Energy content:"),by.forEach(a),Bp=p(Gb,`
                  High`),Gb.forEach(a),Bh.forEach(a),g1.forEach(a),_g=c(Yu),ud=r(Yu,"DIV",{class:!0});var m1=n(ud);yc=r(m1,"BUTTON",{type:!0,style:!0,class:!0});var Mb=n(yc);wc=r(Mb,"IMG",{class:!0,src:!0,alt:!0}),Eg=p(Mb,`
                High organic content`),Mb.forEach(a),Ig=c(m1),Ll=r(m1,"BUTTON",{type:!0,style:!0,class:!0});var jb=n(Ll);fu=r(jb,"IMG",{class:!0,src:!0,alt:!0}),Dg=p(jb,`
                High nutrient content`),jb.forEach(a),m1.forEach(a),Vg=c(Yu),fd=r(Yu,"DIV",{class:!0});var x1=n(fd);Yi=r(x1,"BUTTON",{type:!0,style:!0,class:!0});var Nb=n(Yi);Wi=r(Nb,"IMG",{class:!0,src:!0,alt:!0}),_c=p(Nb,`
                High nitrogen content`),Nb.forEach(a),Rp=c(x1),Ec=r(x1,"BUTTON",{type:!0,style:!0,class:!0});var Bb=n(Ec);Ic=r(Bb,"IMG",{class:!0,src:!0,alt:!0}),Pg=p(Bb,`
                Latest technology`),Bb.forEach(a),x1.forEach(a),kg=c(Yu),Mo=r(Yu,"DIV",{class:!0});var Rh=n(Mo);pu=r(Rh,"IMG",{class:!0,src:!0,alt:!0}),qp=c(Rh),vu=r(Rh,"H1",{style:!0,class:!0});var yy=n(vu);gu=r(yy,"A",{href:!0,target:!0});var wy=n(gu);zi=p(wy,"Case study"),wy.forEach(a),yy.forEach(a),$p=c(Rh),Dc=r(Rh,"IMG",{class:!0,src:!0,alt:!0}),Rh.forEach(a),Sg=c(Yu),Vc=r(Yu,"DIV",{style:!0,class:!0});var b1=n(Vc);jo=r(b1,"H2",{class:!0});var _y=n(jo);Tg=p(_y,"600 dairy cows or 3500 tonnes of cow manure per year"),_y.forEach(a),Ag=c(b1),pd=r(b1,"UL",{class:!0});var y1=n(pd);hu=r(y1,"LI",{});var Ey=n(hu);Up=p(Ey,"Produces 656m³ biogas every day"),Ey.forEach(a),Fg=c(y1),Hp=r(y1,"LI",{});var Iy=n(Hp);ff=p(Iy,"Ability to power 187 UK households every day"),Iy.forEach(a),y1.forEach(a),b1.forEach(a),Yu.forEach(a),Og=c(Nh),pf=r(Nh,"DIV",{class:!0});var Dy=n(pf);No=r(Dy,"DIV",{class:!0});var w1=n(No);vd=r(w1,"DIV",{class:!0});var _1=n(vd);gd=r(_1,"DIV",{class:!0});var Vy=n(gd);mu=r(Vy,"IMG",{src:!0,class:!0,alt:!0}),Vy.forEach(a),Lg=c(_1),hd=r(_1,"DIV",{class:!0});var E1=n(hd);xu=r(E1,"H1",{style:!0,class:!0});var Py=n(xu);Yp=p(Py,"Most appropriate technology"),Py.forEach(a),Wp=c(E1),bu=r(E1,"P",{style:!0,class:!0});var ky=n(bu);Cg=p(ky,"New Technology"),ky.forEach(a),E1.forEach(a),_1.forEach(a),yu=c(w1),Bo=r(w1,"DIV",{class:!0});var I1=n(Bo);md=r(I1,"A",{href:!0});var Sy=n(md);ai=r(Sy,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Rb=n(ai);wu=r(Rb,"IMG",{class:!0,src:!0,alt:!0}),xd=p(Rb,`
                    Start your project`),Rb.forEach(a),Sy.forEach(a),Gg=c(I1),vf=r(I1,"A",{href:!0});var Ty=n(vf);Ki=r(Ty,"BUTTON",{type:!0,style:!0,class:!0});var qb=n(Ki);Pc=r(qb,"IMG",{class:!0,src:!0,alt:!0}),Mg=p(qb,`
                    Learn more`),qb.forEach(a),Ty.forEach(a),I1.forEach(a),w1.forEach(a),Dy.forEach(a),Nh.forEach(a),qu.forEach(a),_u=c(Sh),Cl=r(Sh,"DIV",{id:!0,class:!0,style:!0}),n(Cl).forEach(a),Sh.forEach(a),jg=c(_n),gf=r(_n,"SECTION",{class:!0});var Ay=n(gf);ni=r(Ay,"DIV",{class:!0,style:!0,id:!0,onclick:!0});var Fy=n(ni);kc=r(Fy,"DIV",{});var qh=n(kc);Dr=r(qh,"DIV",{id:!0,style:!0});var Bc=n(Dr);Ji=r(Bc,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Oy=n(Ji);Eu=r(Oy,"IMG",{class:!0,src:!0,alt:!0}),Oy.forEach(a),Ng=c(Bc),Xi=r(Bc,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Ly=n(Xi);Sc=r(Ly,"IMG",{class:!0,src:!0,alt:!0}),Ly.forEach(a),Bg=c(Bc),Qi=r(Bc,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Cy=n(Qi);yn=r(Cy,"IMG",{class:!0,src:!0,alt:!0}),Cy.forEach(a),zp=c(Bc),el=r(Bc,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Gy=n(el);bd=r(Gy,"DIV",{style:!0});var My=n(bd);Rg=p(My,"Technology"),My.forEach(a),Gy.forEach(a),Iu=c(Bc),Kp=r(Bc,"STYLE",{});var jy=n(Kp);qg=p(jy,`@keyframes bounce {
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
              }`),jy.forEach(a),$g=c(Bc),Du=r(Bc,"SCRIPT",{});var Ny=n(Du);Jp=p(Ny,"const animatedElements = document.querySelectorAll('.techbuttons')\n\n              animatedElements.forEach(element => {\n                const randomDelay = Math.floor(Math.random() * 1000) // Generate a random delay between 0 and 1000 milliseconds\n                element.style.animationDelay = `${randomDelay}ms`\n                element.style.animationDuration = `${1000 + randomDelay}ms`\n              })"),Ny.forEach(a),Bc.forEach(a),Ug=c(qh),Xp=r(qh,"STYLE",{});var By=n(Xp);Ro=p(By,`.growbutton:hover {
              box-shadow: 0 0 5px 1px white;
            }
            .growbutton img {
              max-width: 190%;
            }`),By.forEach(a),Hg=c(qh),Gl=r(qh,"DIV",{class:!0,id:!0,style:!0});var D1=n(Gl);yd=r(D1,"DIV",{class:!0});var V1=n(yd);wd=r(V1,"INPUT",{type:!0,placeholder:!0,class:!0}),Qp=c(V1),Tc=r(V1,"BUTTON",{"aria-label":!0,class:!0});var Ry=n(Tc);_d=r(Ry,"SPAN",{class:!0}),n(_d).forEach(a),Ry.forEach(a),V1.forEach(a),Zp=c(D1),Zi=r(D1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var qy=n(Zi);Ml=r(qy,"IMG",{class:!0,src:!0,alt:!0,style:!0}),qy.forEach(a),D1.forEach(a),qh.forEach(a),Fy.forEach(a),Ay.forEach(a),Yg=c(_n),eo=r(_n,"H1",{class:!0,id:!0});var $h=n(eo);Ed=r($h,"DIV",{class:!0});var $y=n(Ed);Id=r($y,"DIV",{class:!0});var P1=n(Id);hf=r(P1,"DIV",{class:!0});var Uy=n(hf);Vu=r(Uy,"IMG",{class:!0,src:!0,alt:!0}),Uy.forEach(a),Wg=c(P1),Ma=r(P1,"DIV",{class:!0});var Sv=n(Ma);ev=r(Sv,"STYLE",{});var Hy=n(ev);tv=p(Hy,`p {
                font-size: 1.2rem;
              }`),Hy.forEach(a),zg=c(Sv),Pu=r(Sv,"H2",{style:!0,class:!0});var Yy=n(Pu);Kg=p(Yy,"The PFP Calculator"),Yy.forEach(a),sv=c(Sv),Ac=r(Sv,"DIV",{style:!0,class:!0});var k1=n(Ac);Jg=p(k1,`Find the right technology
              `),Xg=r(k1,"BR",{}),rv=p(k1,`
              for your needs`),k1.forEach(a),av=c(Sv),ku=r(Sv,"P",{style:!0,class:!0});var Wy=n(ku);Qg=p(Wy,`We will assist you every step of the way to ensure a smooth and successful implementation of your power-from-waste
              project`),Wy.forEach(a),Sv.forEach(a),P1.forEach(a),$y.forEach(a),nv=c($h),wn=r($h,"DIV",{id:!0,class:!0,style:!0}),n(wn).forEach(a),Zg=c($h),jl=r($h,"DIV",{id:!0,class:!0,style:!0}),n(jl).forEach(a),$h.forEach(a),eh=c(_n),to=r(_n,"SECTION",{class:!0,id:!0});var zy=n(to);qo=r(zy,"DIV",{class:!0});var S1=n(qo);so=r(S1,"DIV",{class:!0,style:!0});var T1=n(so);Dd=r(T1,"DIV",{class:!0});var A1=n(Dd);Vd=r(A1,"P",{class:!0});var Ky=n(Vd);th=p(Ky,"Waste type"),Ky.forEach(a),lv=c(A1),$o=r(A1,"H2",{class:!0});var Uh=n($o);Pd=r(Uh,"SPAN",{id:!0});var Jy=n(Pd);sh=p(Jy,"PE Plastic"),Jy.forEach(a),iv=c(Uh),ov=r(Uh,"BR",{}),cv=c(Uh),mf=r(Uh,"SPAN",{id:!0});var Xy=n(mf);rh=p(Xy,"10,000 tonnes"),Xy.forEach(a),Uh.forEach(a),A1.forEach(a),Su=c(T1),kd=r(T1,"DIV",{class:!0});var F1=n(kd);xf=r(F1,"DIV",{class:!0});var Qy=n(xf);Sd=r(Qy,"IMG",{src:!0,class:!0,id:!0,alt:!0}),Qy.forEach(a),dv=c(F1),Td=r(F1,"DIV",{class:!0});var O1=n(Td);bf=r(O1,"H3",{class:!0});var Zy=n(bf);Fc=p(Zy,"Most appropriate technology"),Zy.forEach(a),ah=c(O1),Tu=r(O1,"H2",{class:!0,id:!0});var e5=n(Tu);nh=p(e5,"Pyrolysis"),e5.forEach(a),O1.forEach(a),F1.forEach(a),T1.forEach(a),lh=c(S1),$r=r(S1,"DIV",{class:!0});var Rc=n($r);Uo=r(Rc,"DIV",{class:!0});var L1=n(Uo);Ad=r(L1,"DIV",{style:!0,class:!0});var $b=n(Ad);uv=p($b,"Energy content "),Au=r($b,"IMG",{class:!0,src:!0,alt:!0}),$b.forEach(a),ih=c(L1),Oc=r(L1,"DIV",{class:!0});var Ub=n(Oc);yf=r(Ub,"SPAN",{id:!0});var t5=n(yf);fv=p(t5,"18"),t5.forEach(a),pv=p(Ub,`
              MJ/kg`),Ub.forEach(a),L1.forEach(a),vv=c(Rc),Fd=r(Rc,"DIV",{class:!0});var C1=n(Fd);Od=r(C1,"DIV",{style:!0,class:!0});var Hb=n(Od);Fu=p(Hb,"Heat produced "),Ou=r(Hb,"IMG",{class:!0,src:!0,alt:!0}),Hb.forEach(a),oh=c(C1),Lc=r(C1,"DIV",{class:!0});var Yb=n(Lc);Ld=r(Yb,"SPAN",{id:!0});var s5=n(Ld);ch=p(s5,"11,200"),s5.forEach(a),dh=p(Yb,`
              kWh per year`),Yb.forEach(a),C1.forEach(a),Cc=c(Rc),Cd=r(Rc,"DIV",{class:!0});var G1=n(Cd);Gd=r(G1,"DIV",{style:!0,class:!0});var Wb=n(Gd);uh=p(Wb,"Heat savings "),Lu=r(Wb,"IMG",{class:!0,src:!0,alt:!0}),Wb.forEach(a),gv=c(G1),Md=r(G1,"DIV",{class:!0});var M1=n(Md);hv=p(M1,`£
              `),wf=r(M1,"SPAN",{id:!0});var r5=n(wf);mv=p(r5,"48,000"),r5.forEach(a),fh=p(M1,`
              per year`),M1.forEach(a),G1.forEach(a),xv=c(Rc),jd=r(Rc,"DIV",{class:!0});var j1=n(jd);Ho=r(j1,"DIV",{style:!0,class:!0});var zb=n(Ho);bv=p(zb,"Electricity produced "),Gc=r(zb,"IMG",{class:!0,src:!0,alt:!0}),zb.forEach(a),ph=c(j1),ro=r(j1,"DIV",{class:!0});var Kb=n(ro);_f=r(Kb,"SPAN",{id:!0});var a5=n(_f);vh=p(a5,"4,800"),a5.forEach(a),gh=p(Kb,`
              kWh per year`),Kb.forEach(a),j1.forEach(a),yv=c(Rc),Yo=r(Rc,"DIV",{class:!0});var N1=n(Yo);Nd=r(N1,"DIV",{style:!0,class:!0});var Jb=n(Nd);hh=p(Jb,"Electrical savings "),Nl=r(Jb,"IMG",{class:!0,src:!0,alt:!0}),Jb.forEach(a),mh=c(N1),Bd=r(N1,"DIV",{class:!0});var B1=n(Bd);xh=p(B1,`£
              `),Rd=r(B1,"SPAN",{id:!0});var n5=n(Rd);bh=p(n5,"70,000"),n5.forEach(a),wv=p(B1,`
              per year`),B1.forEach(a),N1.forEach(a),yh=c(Rc),li=r(Rc,"DIV",{class:!0});var R1=n(li);qd=r(R1,"DIV",{style:!0,class:!0});var Xb=n(qd);u0=p(Xb,"Char produced "),Jv=r(Xb,"IMG",{class:!0,src:!0,alt:!0}),Xb.forEach(a),f0=c(R1),Xv=r(R1,"DIV",{class:!0});var Qb=n(Xv);wh=r(Qb,"SPAN",{id:!0});var l5=n(wh);p0=p(l5,"500"),l5.forEach(a),v0=p(Qb,`
              tonnes`),Qb.forEach(a),R1.forEach(a),Rc.forEach(a),S1.forEach(a),zy.forEach(a),g0=c(_n),_v=r(_n,"SECTION",{id:!0});var q1=n(_v);Wo=r(q1,"DIV",{class:!0,id:!0});var Tv=n(Wo);Ev=r(Tv,"DIV",{class:!0});var $1=n(Ev);Qv=r($1,"H1",{style:!0,class:!0});var i5=n(Qv);h0=p(i5,"The PFP Calculator"),i5.forEach(a),m0=c($1),Ef=r($1,"P",{style:!0,class:!0});var U1=n(Ef);x0=p(U1,`Our user-friendly calculator is designed to evaluate your project's
            `),b0=r(U1,"BR",{}),y0=p(U1,`
            feasibility, relevant technology and energy output`),U1.forEach(a),$1.forEach(a),w0=c(Tv),If=r(Tv,"DIV",{style:!0,class:!0});var H1=n(If);_h=r(H1,"DIV",{class:!0});var o5=n(_h);Iv=r(o5,"IMG",{class:!0,id:!0,src:!0,alt:!0}),o5.forEach(a),_0=c(H1),zo=r(H1,"DIV",{class:!0,id:!0});var Av=n(zo);Df=r(Av,"DIV",{class:!0,role:!0});var Y1=n(Df);Zv=r(Y1,"BUTTON",{type:!0,class:!0});var c5=n(Zv);E0=p(c5,"Waste type"),c5.forEach(a),I0=c(Y1),Eh=r(Y1,"DIV",{class:!0});var d5=n(Eh);Ke=r(d5,"SELECT",{id:!0,class:!0});var tt=n(Ke);Vf=r(tt,"OPTION",{class:!0});var u5=n(Vf);D0=p(u5,"Cheese production"),u5.forEach(a),Pf=r(tt,"OPTION",{class:!0});var f5=n(Pf);V0=p(f5,"Butter production"),f5.forEach(a),kf=r(tt,"OPTION",{class:!0});var p5=n(kf);P0=p(p5,"Ice cream"),p5.forEach(a),Sf=r(tt,"OPTION",{class:!0});var v5=n(Sf);k0=p(v5,"Beer production"),v5.forEach(a),Tf=r(tt,"OPTION",{class:!0});var g5=n(Tf);S0=p(g5,"Wine production"),g5.forEach(a),Af=r(tt,"OPTION",{class:!0});var h5=n(Af);T0=p(h5,"Spirits production"),h5.forEach(a),Ff=r(tt,"OPTION",{class:!0});var m5=n(Ff);A0=p(m5,"Ethanol production"),m5.forEach(a),Of=r(tt,"OPTION",{class:!0});var x5=n(Of);F0=p(x5,"Pulp production"),x5.forEach(a),Lf=r(tt,"OPTION",{class:!0});var b5=n(Lf);O0=p(b5,"Juice production"),b5.forEach(a),Cf=r(tt,"OPTION",{class:!0});var y5=n(Cf);L0=p(y5,"Tomato ketchup"),y5.forEach(a),Gf=r(tt,"OPTION",{class:!0});var w5=n(Gf);C0=p(w5,"Bovine meat"),w5.forEach(a),Mf=r(tt,"OPTION",{class:!0});var _5=n(Mf);G0=p(_5,"Pig meat"),_5.forEach(a),jf=r(tt,"OPTION",{class:!0});var E5=n(jf);M0=p(E5,"Sheep meat"),E5.forEach(a),Nf=r(tt,"OPTION",{class:!0});var I5=n(Nf);j0=p(I5,"Frozen potatoes"),I5.forEach(a),Bf=r(tt,"OPTION",{class:!0});var D5=n(Bf);N0=p(D5,"Prepared potatoes (crisps)"),D5.forEach(a),Rf=r(tt,"OPTION",{class:!0});var V5=n(Rf);B0=p(V5,"Potato starch"),V5.forEach(a),qf=r(tt,"OPTION",{class:!0});var P5=n(qf);R0=p(P5,"Dried potatoes"),P5.forEach(a),$f=r(tt,"OPTION",{class:!0});var k5=n($f);q0=p(k5,"Sugar production"),k5.forEach(a),Uf=r(tt,"OPTION",{class:!0});var S5=n(Uf);$0=p(S5,"Yeast production"),S5.forEach(a),Hf=r(tt,"OPTION",{class:!0});var T5=n(Hf);U0=p(T5,"Vegetable oils production"),T5.forEach(a),Yf=r(tt,"OPTION",{class:!0});var A5=n(Yf);H0=p(A5,"Biodiesel production"),A5.forEach(a),Wf=r(tt,"OPTION",{class:!0});var F5=n(Wf);Y0=p(F5,"Pig manure"),F5.forEach(a),zf=r(tt,"OPTION",{class:!0});var O5=n(zf);W0=p(O5,"Dairy Cattle"),O5.forEach(a),Kf=r(tt,"OPTION",{class:!0});var L5=n(Kf);z0=p(L5,"Non diary cattle"),L5.forEach(a),Jf=r(tt,"OPTION",{class:!0});var C5=n(Jf);K0=p(C5,"Buffalo"),C5.forEach(a),Xf=r(tt,"OPTION",{class:!0});var G5=n(Xf);J0=p(G5,"Chicken layer manure"),G5.forEach(a),Qf=r(tt,"OPTION",{class:!0});var M5=n(Qf);X0=p(M5,"Chicken broiler manure"),M5.forEach(a),Zf=r(tt,"OPTION",{class:!0});var j5=n(Zf);Q0=p(j5,"Sheep"),j5.forEach(a),ep=r(tt,"OPTION",{class:!0});var N5=n(ep);Z0=p(N5,"Food waste"),N5.forEach(a),tp=r(tt,"OPTION",{class:!0});var B5=n(tp);ex=p(B5,"Fish waste"),B5.forEach(a),sp=r(tt,"OPTION",{class:!0});var R5=n(sp);tx=p(R5,"Coffee grounds"),R5.forEach(a),rp=r(tt,"OPTION",{class:!0});var q5=n(rp);sx=p(q5,"Crop residues"),q5.forEach(a),ap=r(tt,"OPTION",{class:!0});var $5=n(ap);rx=p($5,"Maize silage"),$5.forEach(a),np=r(tt,"OPTION",{class:!0});var U5=n(np);ax=p(U5,"Cereal"),U5.forEach(a),lp=r(tt,"OPTION",{class:!0});var H5=n(lp);nx=p(H5,"Grass silage"),H5.forEach(a),ip=r(tt,"OPTION",{class:!0});var Y5=n(ip);lx=p(Y5,"Pulp & Paper Waste"),Y5.forEach(a),op=r(tt,"OPTION",{class:!0});var W5=n(op);ix=p(W5,"Textile Waste"),W5.forEach(a),cp=r(tt,"OPTION",{class:!0});var z5=n(cp);ox=p(z5,"PE Plastic"),z5.forEach(a),dp=r(tt,"OPTION",{class:!0});var K5=n(dp);cx=p(K5,"SRF"),K5.forEach(a),up=r(tt,"OPTION",{class:!0});var J5=n(up);dx=p(J5,"RDF"),J5.forEach(a),fp=r(tt,"OPTION",{class:!0});var X5=n(fp);ux=p(X5,"PP Plastic"),X5.forEach(a),pp=r(tt,"OPTION",{class:!0});var Q5=n(pp);fx=p(Q5,"PS Plastic"),Q5.forEach(a),vp=r(tt,"OPTION",{class:!0});var Z5=n(vp);px=p(Z5,"PVC Plastic"),Z5.forEach(a),gp=r(tt,"OPTION",{class:!0});var ew=n(gp);vx=p(ew,"PET Plastic"),ew.forEach(a),hp=r(tt,"OPTION",{class:!0});var tw=n(hp);gx=p(tw,"Rubber"),tw.forEach(a),mp=r(tt,"OPTION",{class:!0});var sw=n(mp);hx=p(sw,"Wood waste"),sw.forEach(a),xp=r(tt,"OPTION",{class:!0});var rw=n(xp);mx=p(rw,"Municipal Solid Waste (MSW)"),rw.forEach(a),bp=r(tt,"OPTION",{class:!0});var aw=n(bp);xx=p(aw,"Medical Waste"),aw.forEach(a),yp=r(tt,"OPTION",{class:!0});var nw=n(yp);bx=p(nw,"Ceramics"),nw.forEach(a),wp=r(tt,"OPTION",{class:!0});var lw=n(wp);yx=p(lw,"Sand"),lw.forEach(a),_p=r(tt,"OPTION",{class:!0});var iw=n(_p);wx=p(iw,"Dust"),iw.forEach(a),Ep=r(tt,"OPTION",{class:!0});var ow=n(Ep);_x=p(ow,"Glass"),ow.forEach(a),Ip=r(tt,"OPTION",{class:!0});var cw=n(Ip);Ex=p(cw,"Metals"),cw.forEach(a),tt.forEach(a),d5.forEach(a),Y1.forEach(a),Ix=c(Av),Dp=r(Av,"DIV",{class:!0,role:!0});var W1=n(Dp);eg=r(W1,"BUTTON",{type:!0,class:!0});var dw=n(eg);Dx=p(dw,"Kilograms per day"),dw.forEach(a),Vx=c(W1),Ih=r(W1,"DIV",{class:!0});var uw=n(Ih);Ko=r(uw,"SELECT",{id:!0,class:!0});var Fv=n(Ko);Vp=r(Fv,"OPTION",{class:!0});var fw=n(Vp);Px=p(fw,"10 kg"),fw.forEach(a),Pp=r(Fv,"OPTION",{class:!0});var pw=n(Pp);kx=p(pw,"100 kg"),pw.forEach(a),kp=r(Fv,"OPTION",{class:!0});var vw=n(kp);Sx=p(vw,"1000 kg"),vw.forEach(a),Sp=r(Fv,"OPTION",{class:!0});var gw=n(Sp);Tx=p(gw,"10,000 kg"),gw.forEach(a),Tp=r(Fv,"OPTION",{class:!0});var hw=n(Tp);Ax=p(hw,"20,000 kg"),hw.forEach(a),Ap=r(Fv,"OPTION",{class:!0});var mw=n(Ap);Fx=p(mw,"40,000 kg"),mw.forEach(a),Fp=r(Fv,"OPTION",{class:!0});var xw=n(Fp);Ox=p(xw,"> 40,000 kg"),xw.forEach(a),Fv.forEach(a),uw.forEach(a),W1.forEach(a),Lx=c(Av),Op=r(Av,"DIV",{class:!0,role:!0});var z1=n(Op);tg=r(z1,"BUTTON",{type:!0,class:!0});var bw=n(tg);Cx=p(bw,"Client needs"),bw.forEach(a),Gx=c(z1),Dh=r(z1,"DIV",{class:!0});var yw=n(Dh);Cu=r(yw,"SELECT",{id:!0,class:!0});var gm=n(Cu);Lp=r(gm,"OPTION",{class:!0});var ww=n(Lp);Mx=p(ww,"Electricity"),ww.forEach(a),Cp=r(gm,"OPTION",{class:!0});var _w=n(Cp);jx=p(_w,"Heating / Cooling"),_w.forEach(a),Gp=r(gm,"OPTION",{class:!0});var Ew=n(Gp);Nx=p(Ew,"Carbon credits"),Ew.forEach(a),Mp=r(gm,"OPTION",{class:!0});var Iw=n(Mp);Bx=p(Iw,"Fertiliser"),Iw.forEach(a),gm.forEach(a),yw.forEach(a),z1.forEach(a),Rx=c(Av),Dm=r(Av,"DIV",{}),n(Dm).forEach(a),Av.forEach(a),H1.forEach(a),qx=c(Tv),jp=r(Tv,"DIV",{class:!0,id:!0});var K1=n(jp);sg=r(K1,"DIV",{class:!0,id:!0});var Dw=n(sg);$x=p(Dw,"Your project is feasible"),Dw.forEach(a),Ux=c(K1),Gu=r(K1,"P",{style:!0,class:!0,id:!0});var J1=n(Gu);Hx=p(J1,`Review your results to explore the different possibilities and
            `),Yx=r(J1,"BR",{}),Wx=p(J1,`
            book a slot with us for personalised guidance on next steps`),J1.forEach(a),K1.forEach(a),zx=c(Tv),Mu=r(Tv,"DIV",{class:!0});var Hh=n(Mu);ju=r(Hh,"A",{id:!0,class:!0,href:!0});var X1=n(ju);rg=r(X1,"IMG",{class:!0,src:!0,alt:!0}),Kx=c(X1),dm=r(X1,"SPAN",{});var Vw=n(dm);Jx=p(Vw,"Book a call with us"),Vw.forEach(a),X1.forEach(a),Xx=c(Hh),Nu=r(Hh,"A",{id:!0,class:!0,href:!0});var Q1=n(Nu);ag=r(Q1,"IMG",{class:!0,src:!0,alt:!0}),Qx=c(Q1),um=r(Q1,"SPAN",{});var Pw=n(um);Zx=p(Pw,"Learn more"),Pw.forEach(a),Q1.forEach(a),eb=c(Hh),$d=r(Hh,"BUTTON",{id:!0,class:!0,href:!0,onclick:!0});var Z1=n($d);ng=r(Z1,"IMG",{class:!0,src:!0,alt:!0}),tb=c(Z1),fm=r(Z1,"SPAN",{});var kw=n(fm);sb=p(kw,"Calculate"),kw.forEach(a),Z1.forEach(a),Hh.forEach(a),Tv.forEach(a),rb=c(q1),Jo=r(q1,"DIV",{id:!0,class:!0,style:!0}),n(Jo).forEach(a),q1.forEach(a),ab=c(_n),pm=r(_n,"SCRIPT",{});var Sw=n(pm);nb=p(Sw,`function calculate() {
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
          : 'This feedstock is <u style="color:#ec8b5a;">not</u> feasible'

        document.querySelector('#feasible-results').innerHTML =
          !feasible || minlimit
            ? 'Review your results to explore the different possibilities and<br />book a slot with us for personalised guidance on next steps'
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
      }`),Sw.forEach(a),lb=c(_n),Dv=r(_n,"DIV",{class:!0});var e0=n(Dv);Vh=r(e0,"DIV",{class:!0});var Tw=n(Vh);ib=p(Tw,"Copyright © 2023 Power for Planet"),Tw.forEach(a),ob=c(e0),Vv=r(e0,"DIV",{class:!0});var t0=n(Vv);Ph=r(t0,"DIV",{class:!0});var Aw=n(Ph);cb=p(Aw,"Privacy Policy"),Aw.forEach(a),db=c(t0),Bu=r(t0,"DIV",{class:!0});var Yh=n(Bu);lg=r(Yh,"IMG",{src:!0,alt:!0,class:!0}),ub=c(Yh),ig=r(Yh,"IMG",{src:!0,alt:!0,class:!0}),fb=c(Yh),og=r(Yh,"IMG",{src:!0,alt:!0,class:!0}),Yh.forEach(a),t0.forEach(a),e0.forEach(a),_n.forEach(a),pb=c(kh),vm=r(kh,"SCRIPT",{});var Fw=n(vm);vb=p(Fw,`function toggleElement(k) {
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
    }, 100)`),Fw.forEach(a),kh.forEach(a),this.h()},h(){t(u,"id","expandElement"),t(u,"class","fixed inset-0 bg-blue-500 text-white flex items-center justify-center"),t(i,"class","relative"),t(g,"id","expandButton"),t(g,"class","bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"),T(l,"display","none"),t(_,"class","mt-[-2000px] pt-[2000px]"),t(_,"id","map2"),t(k,"class","mt-[-840px] pt-[840px]"),t(k,"id","calculator2"),t(G,"class","mt-[-5000px] pt-[5000px]"),t(G,"id","map3"),t(b,"class","mt-[-3900px] pt-[3900px]"),t(b,"id","calculator3"),t(oe,"class","uppercase pb-5 text-pfp-green font-bold"),t($,"class","text-3xl leading-[33px] font-bold text-[#2e3855] font-Poppins"),t(ce,"class","pt-6"),t(ge,"class","mr-3"),S(ge.src,Ae="/assets/arrow-right-circle.png")||t(ge,"src",Ae),t(ge,"alt",""),t(te,"class","mt-10 w-fit p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"),t(te,"href","/explore/#map"),t(q,"class","w-3/5 p-10 pr-12 bg-white"),t(xe,"class","absolute top-[30%] h-36 left-[72%] z-0"),S(xe.src,he="/assets/cow 1.png")||t(xe,"src",he),t(xe,"alt",""),t(Le,"class","absolute top-[35%] h-40 left-[68%] z-10"),S(Le.src,Pe="/assets/manure 1.png")||t(Le,"src",Pe),t(Le,"alt",""),t(Z,"class","absolute top-[35%] h-28 left-[75%] z-30"),S(Z.src,He="/assets/apple 1.png")||t(Z,"src",He),t(Z,"alt",""),t(Oe,"class","absolute top-60 h-20 left-200 ml-10 z-0"),S(Oe.src,be="/assets/leaf2 1.png")||t(Oe,"src",be),t(Oe,"alt",""),t(V,"class","absolute top-[35%] h-48 left-[65%] z-30"),S(V.src,B="/assets/pet bottle 1.png")||t(V,"src",B),t(V,"alt",""),t(re,"class","absolute top-[35%] h-48 left-[65%] z-20"),S(re.src,H="/assets/woodchips 1.png")||t(re,"src",H),t(re,"alt",""),t(ye,"class","absolute top-96 h-30 left-200 ml-80 z-0"),S(ye.src,ut="/assets/leaf1 1.png")||t(ye,"src",ut),t(ye,"alt",""),t($e,"class","absolute top-50 h-30 left-200 ml-80 z-0"),S($e.src,Ge="/assets/fish 1.png")||t($e,"src",Ge),t($e,"alt",""),t(N,"class","w-2/5 p-4 bg-light-green"),t(N,"id","topRightCluster"),t(Y,"class","flex rounded-2xl overflow-hidden mt-12"),t(W,"class","w-full"),t(ze,"class","text-3xl font-bold text-[#2e3855] font-Poppins text-center justify-center mb-10"),S(Dt.src,gt="/assets/pet bottle 1.png")||t(Dt,"src",gt),t(Dt,"alt",""),t(rt,"class","flex justify-center h-40"),t(ft,"class","w-2/4"),t(lt,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(kt.src,Yt="/assets/Group 7 (2).png")||t(kt,"src",Yt),t(kt,"alt",""),t(pt,"class","flex justify-center h-40"),t(ht,"class","w-2/4"),t(ie,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(Qe.src,_t="/assets/Group 7 (3).png")||t(Qe,"src",_t),t(Qe,"alt",""),t(At,"class","flex justify-center h-40"),t(Wt,"class","w-2/4"),t(at,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(Mt.src,Et="/assets/Group 7.png")||t(Mt,"src",Et),t(Mt,"alt",""),t(ot,"class","flex justify-center h-40"),t(vt,"class","w-2/4"),t(Me,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(Rt.src,qt="/assets/Group 7 (1).png")||t(Rt,"src",qt),t(Rt,"alt",""),t(Jt,"class","flex justify-center h-40"),t(Ct,"class","w-2/4"),t(Ft,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(Ve,"class","grid gap-6 md:grid-cols-5 grid-cols-2 w-full"),t(Ve,"id","thegrid"),t(rr,"class","relative z-10 w-full text-white mb-[-90px] mt-16 text-center font-semibold text-xl tracking-wider uppercase"),t(Xt,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent"),t(Ss,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-end after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase"),t(It,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase"),t(ps,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase"),t(rs,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-start after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase"),t(Ys,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent"),t(nt,"class","flex w-full mt-10 pt-4 rounded-2xl mb-10 bg-[#2E3855]"),T(nt,"height","70px"),t(Fs,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(ua,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(js,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(_s,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(as,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(qa,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(Kt,"class","grid gap-6 grid-cols-6 w-full"),t(Kt,"id","thegrid2"),t(ns,"class","p-3 text-white arrow arrow-bottom relative w-1/3 bg-gradient-to-r from-[#FF5252] to-[#59AFFF] rounded-2xl font-bold text-xl leading-10 text-[#2E3855] mb-0 text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-[#AD85AC] after:border-r-transparent after:border-l-transparent"),t($a,"class","flex justify-center mt-6 p-6"),t(ar,"class","p-3 relative w-1/3 bg-[#D0E6F2] leading-10 text-[#2E3855] mb-0 rounded-2xl font-bold text-xl text-center"),t(Js,"class","flex justify-center mt-[-10px] p-6 mb-[-20px]"),t(Ne,"class","mb-10 bg-white mt-8 container mx-auto p-10 rounded-2xl"),T(Ne,"font-family","'Poppins', sans-serif"),t(ir,"class","h-80 p-6"),S(ir.src,Sr="/assets/Frame 19 (1).png")||t(ir,"src",Sr),t(ir,"alt",""),t(lr,"class","bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-l-2xl"),T(ss,"font-family","'Poppins', sans-serif"),t(ss,"class","uppercase pb-0 text-pfp-green font-bold"),T(Wr,"font-family","'Poppins', sans-serif"),t(Wr,"class","text-3xl font-bold text-[#2e3855] font-Poppins mt-5"),T(Es,"font-family","'Public Sans', sans-serif"),t(Es,"class","text-[#2E3855] tracking-wider mt-5"),t(cs,"class","md:w-3/5 w-full p-14 pt-8 pb-6"),t(nr,"class","flex md:flex-row flex-col items-center rounded-2xl bg-white w-full"),t(Xs,"class","container mx-auto rounded-2xl"),t(is,"class","mr-2"),S(is.src,Rl="/assets/x-circle.png")||t(is,"src",Rl),t(is,"alt",""),t(Qs,"type","button"),t(Qs,"onclick","toggleElementOff('cow')"),T(Qs,"font-family","'Public Sans', sans-serif"),T(Qs,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(Qs,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(Fr,"class","relative left-[98%] rounded-r-2xl"),T(dr,"height","70%"),T(dr,"padding","20px"),T(dr,"margin-left","5%"),S(dr.src,Ha="/assets/cow 1.png")||t(dr,"src",Ha),t(dr,"alt",""),t(Sn,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(gs,"font-family","'Poppins', sans-serif"),t(gs,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(Or,"class","font-bold text-xl"),t(fr,"class","ml-5 map-gcv info-pop"),S(fr.src,Ns="/assets/Frame 15.png")||t(fr,"src",Ns),t(fr,"alt",""),T(Ls,"font-family","'Public Sans', sans-serif"),t(Ls,"class","flex items-center text-[#2E3855] text-lg"),t(Tn,"class","font-bold text-xl"),T(Lr,"font-family","'Public Sans', sans-serif"),t(Lr,"class","text-[#2E3855] text-lg"),t(ur,"class","w-1/2"),t(zr,"class","flex justify-between items-center w-full mt-[-50px]"),t(Kr,"class","mr-3"),S(Kr.src,io="/assets/bar-chart.png")||t(Kr,"src",io),t(Kr,"alt",""),t(Vs,"type","button"),T(Vs,"font-family","'Public Sans', sans-serif"),t(Vs,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(pr,"class","mr-3"),S(pr.src,_r="/assets/bar-chart.png")||t(pr,"src",_r),t(pr,"alt",""),t(er,"type","button"),T(er,"font-family","'Public Sans', sans-serif"),t(er,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(hs,"class","flex"),t(Bs,"class","mr-3"),S(Bs.src,za="/assets/bar-chart.png")||t(Bs,"src",za),t(Bs,"alt",""),t(Jr,"type","button"),T(Jr,"font-family","'Public Sans', sans-serif"),t(Jr,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(xi,"class","mr-3"),S(xi.src,Wd="/assets/bar-chart (1).png")||t(xi,"src",Wd),t(xi,"alt",""),t(Xr,"type","button"),T(Xr,"font-family","'Public Sans', sans-serif"),t(Xr,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Cr,"class","flex justify-start"),t(us,"class","mr-3"),S(us.src,On="/assets/book-open.png")||t(us,"src",On),t(us,"alt",""),t(yi,"href","https://www.host.nl/en/case/guichen-france/"),t(yi,"target","_blank"),T(Ka,"font-family","'Poppins', sans-serif"),t(Ka,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(gr,"class","ml-5 map-case-study info-pop"),S(gr.src,co="/assets/Frame 15.png")||t(gr,"src",co),t(gr,"alt",""),t(vr,"class","flex justify-start items-center mt-8 pl-2"),t(Cn,"class","mb-2 text-lg font-light text-[#2E3855]"),t(ha,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(Qr,"font-family","'Public Sans', sans-serif"),t(Qr,"class","mt-3 pl-2"),t(ds,"class","p-6"),S(Zr.src,Za="/assets/medres/anaerobic-digestion.jpg")||t(Zr,"src",Za),t(Zr,"class","rounded-full w-16 h-16"),t(Zr,"alt",""),t(fo,"class","mt-2"),T(ql,"font-family","'Poppins', sans-serif"),t(ql,"class","mt-0 font-bold text-lg leading-10 text-white"),T($l,"font-family","'Public Sans', sans-serif"),t($l,"class","text-white text-xl mt-1 tracking-wider"),t(ya,"class","ml-5"),t(xa,"class","flex"),t(tn,"class","mr-3"),S(tn.src,Qo="/assets/arrow-right-circle.png")||t(tn,"src",Qo),t(tn,"alt",""),t(jn,"type","button"),t(jn,"onclick","toggleAlOff();"),T(jn,"font-family","'Public Sans', sans-serif"),t(jn,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(en,"href","#calculator"),t(ks,"class","mr-3"),S(ks.src,wa="/assets/arrow-right-circle.png")||t(ks,"src",wa),t(ks,"alt",""),t(ea,"type","button"),T(ea,"font-family","'Public Sans', sans-serif"),t(ea,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(cl,"href","/green-energy/"),t(hr,"class","flex w-full"),t(Ps,"class","flex flex-col p-5"),t(ma,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(Os,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(Os,"id","cow"),t(an,"class","mr-2"),S(an.src,Ul="/assets/x-circle.png")||t(an,"src",Ul),t(an,"alt",""),t(rn,"type","button"),t(rn,"onclick","toggleElementOff('food')"),T(rn,"font-family","'Public Sans', sans-serif"),T(rn,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(rn,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(Er,"class","relative left-[98%] rounded-r-2xl"),T(Ea,"height","130px"),T(Ea,"padding","20px"),T(Ea,"margin-left","17%"),S(Ea.src,Zo="/assets/Group 7 (2).png")||t(Ea,"src",Zo),t(Ea,"alt",""),t(Si,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(Rs,"font-family","'Poppins', sans-serif"),t(Rs,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(Ia,"class","font-bold text-xl"),t(qs,"class","ml-5 map-gcv info-pop"),S(qs.src,Ti="/assets/Frame 15.png")||t(qs,"src",Ti),t(qs,"alt",""),T(Cs,"font-family","'Public Sans', sans-serif"),t(Cs,"class","flex items-center text-[#2E3855] text-lg"),t(Mr,"class","font-bold text-xl"),T(Gr,"font-family","'Public Sans', sans-serif"),t(Gr,"class","text-[#2E3855] text-lg"),t(mr,"class","w-1/2"),t(_a,"class","flex justify-between items-center w-full mt-[-50px]"),t(pl,"class","mr-3"),S(pl.src,vo="/assets/bar-chart.png")||t(pl,"src",vo),t(pl,"alt",""),t(ln,"type","button"),T(ln,"font-family","'Public Sans', sans-serif"),t(ln,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t($s,"class","mr-3"),S($s.src,vl="/assets/bar-chart.png")||t($s,"src",vl),t($s,"alt",""),t(ta,"type","button"),T(ta,"font-family","'Public Sans', sans-serif"),t(ta,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(nn,"class","flex"),t(Rn,"class","mr-3"),S(Rn.src,Qu="/assets/bar-chart.png")||t(Rn,"src",Qu),t(Rn,"alt",""),t(sa,"type","button"),T(sa,"font-family","'Public Sans', sans-serif"),t(sa,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(on,"class","mr-3"),S(on.src,Zu="/assets/bar-chart (1).png")||t(on,"src",Zu),t(on,"alt",""),t(Us,"type","button"),T(Us,"font-family","'Public Sans', sans-serif"),t(Us,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Fi,"class","flex justify-start"),t(cn,"class","mr-3"),S(cn.src,tc="/assets/book-open.png")||t(cn,"src",tc),t(cn,"alt",""),t(Da,"href","https://www.host.nl/en/case/guichen-france/"),t(Da,"target","_blank"),T(Oi,"font-family","'Poppins', sans-serif"),t(Oi,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(ho,"class","ml-5 map-case-study info-pop"),S(ho.src,ef="/assets/Frame 15.png")||t(ho,"src",ef),t(ho,"alt",""),t(qn,"class","flex justify-start items-center mt-8 pl-2"),t(mo,"class","mb-2 text-lg font-light text-[#2E3855]"),t(Hn,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(hl,"font-family","'Public Sans', sans-serif"),t(hl,"class","mt-3 pl-2"),t(ms,"class","p-6"),S(Li.src,un="/assets/medres/anaerobic-digestion.jpg")||t(Li,"src",un),t(Li,"class","rounded-full w-16 h-16"),t(Li,"alt",""),t(bo,"class","mt-2"),T(yl,"font-family","'Poppins', sans-serif"),t(yl,"class","mt-0 font-bold text-lg leading-10 text-white"),T(Wn,"font-family","'Public Sans', sans-serif"),t(Wn,"class","text-white text-xl mt-1 tracking-wider"),t(ka,"class","ml-5"),t(Pa,"class","flex"),t(Gi,"class","mr-3"),S(Gi.src,zl="/assets/arrow-right-circle.png")||t(Gi,"src",zl),t(Gi,"alt",""),t(Sa,"type","button"),t(Sa,"onclick","toggleAlOff();"),T(Sa,"font-family","'Public Sans', sans-serif"),t(Sa,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(fn,"href","#calculator"),t(Kl,"class","mr-3"),S(Kl.src,wo="/assets/arrow-right-circle.png")||t(Kl,"src",wo),t(Kl,"alt",""),t(Ta,"type","button"),T(Ta,"font-family","'Public Sans', sans-serif"),t(Ta,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(yo,"href","/green-energy/"),t(Ir,"class","flex w-full"),t(Yn,"class","flex flex-col p-5"),t(Yl,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(sr,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(sr,"id","food"),t(ji,"class","mr-2"),S(ji.src,_o="/assets/x-circle.png")||t(ji,"src",_o),t(ji,"alt",""),t(aa,"type","button"),t(aa,"onclick","toggleElementOff('bottle')"),T(aa,"font-family","'Public Sans', sans-serif"),T(aa,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(aa,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(ra,"class","relative left-[98%] rounded-r-2xl"),T(El,"height","130px"),T(El,"padding","20px"),T(El,"margin-left","30%"),S(El.src,td="/assets/pet bottle 1.png")||t(El,"src",td),t(El,"alt",""),t(Eo,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(pn,"font-family","'Poppins', sans-serif"),t(pn,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(vn,"class","font-bold text-xl"),t(Il,"class","ml-5 map-gcv info-pop"),S(Il.src,lc="/assets/Frame 15.png")||t(Il,"src",lc),t(Il,"alt",""),T(Br,"font-family","'Public Sans', sans-serif"),t(Br,"class","flex items-center text-[#2E3855] text-lg"),t(Dl,"class","font-bold text-xl"),T(Xl,"font-family","'Public Sans', sans-serif"),t(Xl,"class","text-[#2E3855] text-lg"),t(Nr,"class","w-1/2"),t(Aa,"class","flex justify-between items-center w-full mt-[-50px]"),t(gn,"class","mr-3"),S(gn.src,sd="/assets/bar-chart.png")||t(gn,"src",sd),t(gn,"alt",""),t(na,"type","button"),T(na,"font-family","'Public Sans', sans-serif"),t(na,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Pl,"class","mr-3"),S(Pl.src,Ql="/assets/bar-chart.png")||t(Pl,"src",Ql),t(Pl,"alt",""),t(Vl,"type","button"),T(Vl,"font-family","'Public Sans', sans-serif"),t(Vl,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Kn,"class","flex"),t(kl,"class","mr-3"),S(kl.src,rf="/assets/bar-chart.png")||t(kl,"src",rf),t(kl,"alt",""),t(la,"type","button"),T(la,"font-family","'Public Sans', sans-serif"),t(la,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(hn,"class","mr-3"),S(hn.src,Tl="/assets/bar-chart (1).png")||t(hn,"src",Tl),t(hn,"alt",""),t(Sl,"type","button"),T(Sl,"font-family","'Public Sans', sans-serif"),t(Sl,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Rr,"class","flex justify-start"),t(ia,"class","mr-3"),S(ia.src,Po="/assets/book-open.png")||t(ia,"src",Po),t(ia,"alt",""),t(Oa,"href","https://www.host.nl/en/case/guichen-france/"),t(Oa,"target","_blank"),T(mn,"font-family","'Poppins', sans-serif"),t(mn,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(xn,"class","ml-5 map-case-study info-pop"),S(xn.src,Ri="/assets/Frame 15.png")||t(xn,"src",Ri),t(xn,"alt",""),t(Jn,"class","flex justify-start items-center mt-8 pl-2"),t(Xn,"class","mb-2 text-lg font-light text-[#2E3855]"),t(oa,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(qr,"font-family","'Public Sans', sans-serif"),t(qr,"class","mt-3 pl-2"),t(xs,"class","p-6"),S(To.src,gg="/assets/medres/pyrolysis.jpg")||t(To,"src",gg),t(To,"class","rounded-full w-16 h-16"),t(To,"alt",""),t(Qn,"class","mt-2 w-16"),T(Al,"font-family","'Poppins', sans-serif"),t(Al,"class","mt-0 font-bold text-lg leading-10 text-white"),T(ld,"font-family","'Public Sans', sans-serif"),t(ld,"class","text-white text-xl mt-1 tracking-wider"),t(Zn,"class","ml-5"),t(si,"class","flex"),t(Fo,"class","mr-3"),S(Fo.src,mg="/assets/arrow-right-circle.png")||t(Fo,"src",mg),t(Fo,"alt",""),t(xr,"type","button"),t(xr,"onclick","toggleAlOff();"),T(xr,"font-family","'Public Sans', sans-serif"),t(xr,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(Ao,"href","#calculator"),t(Lo,"class","mr-3"),S(Lo.src,xg="/assets/arrow-right-circle.png")||t(Lo,"src",xg),t(Lo,"alt",""),t(Oo,"type","button"),T(Oo,"font-family","'Public Sans', sans-serif"),t(Oo,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(cu,"href","/green-energy/"),t(hc,"class","flex w-full"),t(Ca,"class","flex flex-col p-5"),t(So,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(Hs,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(Hs,"id","bottle"),t(Fl,"class","mr-2"),S(Fl.src,of="/assets/x-circle.png")||t(Fl,"src",of),t(Fl,"alt",""),t(Ui,"type","button"),t(Ui,"onclick","toggleElementOff('technology')"),T(Ui,"font-family","'Public Sans', sans-serif"),T(Ui,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(Ui,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(mc,"class","relative left-[98%] rounded-r-2xl"),T(xc,"height","130px"),T(xc,"padding","20px"),T(xc,"margin-left","10%"),S(xc.src,bg="/assets/Group14.png")||t(xc,"src",bg),t(xc,"alt",""),t(Hi,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(od,"font-family","'Poppins', sans-serif"),t(od,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(bc,"class","font-bold text-xl"),t(Ol,"class","ml-5 map-gcv info-pop"),S(Ol.src,df="/assets/Frame 15.png")||t(Ol,"src",df),t(Ol,"alt",""),T(Go,"font-family","'Public Sans', sans-serif"),t(Go,"class","flex items-center text-[#2E3855] text-lg"),t(uf,"class","font-bold text-xl"),T(dd,"font-family","'Public Sans', sans-serif"),t(dd,"class","text-[#2E3855] text-lg"),t(Co,"class","w-1/2"),t(Ga,"class","flex justify-between items-center w-full mt-[-50px]"),t(wc,"class","mr-3"),S(wc.src,Rv="/assets/bar-chart.png")||t(wc,"src",Rv),t(wc,"alt",""),t(yc,"type","button"),T(yc,"font-family","'Public Sans', sans-serif"),t(yc,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(fu,"class","mr-3"),S(fu.src,Zh="/assets/bar-chart.png")||t(fu,"src",Zh),t(fu,"alt",""),t(Ll,"type","button"),T(Ll,"font-family","'Public Sans', sans-serif"),t(Ll,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(ud,"class","flex"),t(Wi,"class","mr-3"),S(Wi.src,em="/assets/bar-chart.png")||t(Wi,"src",em),t(Wi,"alt",""),t(Yi,"type","button"),T(Yi,"font-family","'Public Sans', sans-serif"),t(Yi,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Ic,"class","mr-3"),S(Ic.src,tm="/assets/bar-chart (1).png")||t(Ic,"src",tm),t(Ic,"alt",""),t(Ec,"type","button"),T(Ec,"font-family","'Public Sans', sans-serif"),t(Ec,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(fd,"class","flex justify-start"),t(pu,"class","mr-3"),S(pu.src,qv="/assets/book-open.png")||t(pu,"src",qv),t(pu,"alt",""),t(gu,"href","https://www.host.nl/en/case/guichen-france/"),t(gu,"target","_blank"),T(vu,"font-family","'Poppins', sans-serif"),t(vu,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(Dc,"class","ml-5 map-case-study info-pop"),S(Dc.src,$v="/assets/Frame 15.png")||t(Dc,"src",$v),t(Dc,"alt",""),t(Mo,"class","flex justify-start items-center mt-8 pl-2"),t(jo,"class","mb-2 text-lg font-light text-[#2E3855]"),t(pd,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(Vc,"font-family","'Public Sans', sans-serif"),t(Vc,"class","mt-3 pl-2"),t(bn,"class","p-6"),S(mu.src,sm="/assets/medres/pyrolysis.jpg")||t(mu,"src",sm),t(mu,"class","rounded-full w-16 h-16"),t(mu,"alt",""),t(gd,"class","mt-2 w-16"),T(xu,"font-family","'Poppins', sans-serif"),t(xu,"class","mt-0 font-bold text-lg leading-10 text-white"),T(bu,"font-family","'Public Sans', sans-serif"),t(bu,"class","text-white text-xl mt-1 tracking-wider"),t(hd,"class","ml-5"),t(vd,"class","flex"),t(wu,"class","mr-3"),S(wu.src,rm="/assets/arrow-right-circle.png")||t(wu,"src",rm),t(wu,"alt",""),t(ai,"type","button"),t(ai,"onclick","toggleAlOff();"),T(ai,"font-family","'Public Sans', sans-serif"),t(ai,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(md,"href","#calculator"),t(Pc,"class","mr-3"),S(Pc.src,am="/assets/arrow-right-circle.png")||t(Pc,"src",am),t(Pc,"alt",""),t(Ki,"type","button"),T(Ki,"font-family","'Public Sans', sans-serif"),t(Ki,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(vf,"href","/green-energy/"),t(Bo,"class","flex w-full"),t(No,"class","flex flex-col p-5"),t(pf,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(ri,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(ri,"id","technology"),t(Ht,"class","items-center rounded-2xl"),t(Ht,"id","cow-panel"),T(Ht,"z-index","30"),T(Ht,"position","relative"),T(Ht,"top","0px"),T(Ht,"left","0px"),T(Ht,"width","700px"),T(Ht,"height","0px"),t(Cl,"id","cow-shadow"),t(Cl,"class","bg-base-100"),T(Cl,"width","1000px"),T(Cl,"height","750px"),T(Cl,"position","relative"),T(Cl,"left","-1000px"),T(Cl,"top","0px"),T(Cl,"margin-bottom","-750px"),T(Cl,"z-index","99"),t(Qt,"id","map"),t(Qt,"class","pt-10"),t(Eu,"class","mr-3"),S(Eu.src,nm="/assets/Group 7 (2).png")||t(Eu,"src",nm),t(Eu,"alt",""),t(Ji,"type","button"),t(Ji,"onclick","toggleElement('food')"),T(Ji,"font-family","'Public Sans', sans-serif"),T(Ji,"left","520px"),T(Ji,"top","-430px"),t(Ji,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(Sc,"class","mr-3"),S(Sc.src,Uv="/assets/manure 1.png")||t(Sc,"src",Uv),t(Sc,"alt",""),t(Xi,"type","button"),t(Xi,"onclick","toggleElement('cow')"),T(Xi,"font-family","'Public Sans', sans-serif"),T(Xi,"left","780px"),T(Xi,"top","-200px"),t(Xi,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(yn,"class","mr-3"),S(yn.src,Hv="/assets/pet bottle 1.png")||t(yn,"src",Hv),t(yn,"alt",""),t(Qi,"type","button"),t(Qi,"onclick","toggleElement('bottle')"),T(Qi,"font-family","'Public Sans', sans-serif"),T(Qi,"left","120px"),T(Qi,"top","-70px"),t(Qi,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-2 mb-2"),T(bd,"color","#ffffff"),T(bd,"font-size","18px"),T(bd,"margin","-5px 0px -5px -5px"),t(el,"type","button"),t(el,"onclick","toggleElement('technology')"),T(el,"font-family","'Public Sans', sans-serif"),T(el,"background","#2e3855"),T(el,"left","560px"),T(el,"top","-530px"),t(el,"class","techbuttons techbutton-dark w-40 h-12 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-base rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2 uppercase"),t(Dr,"id","buttons"),T(Dr,"z-index","99"),t(wd,"type","text"),t(wd,"placeholder","Search up waste..."),t(wd,"class","px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"),t(_d,"class","i-heroicons-outline-search"),t(Tc,"aria-label","search"),t(Tc,"class","btn btn-square btn-ghost ml-[-45px]"),t(yd,"class","inline-flex items-center justify-center"),t(Ml,"class","w-20 mr-3"),S(Ml.src,lm="/assets/Frame 19.svg")||t(Ml,"src",lm),t(Ml,"alt",""),T(Ml,"width","50px"),T(Ml,"height","50px"),t(Zi,"type","button"),t(Zi,"onclick","grow()"),T(Zi,"font-family","'Public Sans', sans-serif"),t(Zi,"class","growbutton ml-[10px] w-10 h-10 inline-flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mt-1"),t(Gl,"class","growbuttons inline-flex"),t(Gl,"id","full-screen-buttons"),T(Gl,"width","200px"),T(Gl,"position","relative"),T(Gl,"top","-10px"),T(Gl,"left","calc(100% - 300px)"),t(ni,"class","container duration-300 transform mx-auto w-full bg-cover bg-center bg-no-repeat bg-[url(/assets/field.png)] rounded-2xl"),T(ni,"padding-top","520px"),T(ni,"z-index","29"),t(ni,"id","field"),t(ni,"onclick","toggleAlOff();"),t(gf,"class","pt-10 rounded-2xl mb-10"),t(Vu,"class","h-80 p-6"),S(Vu.src,Yv="/assets/tech.png")||t(Vu,"src",Yv),t(Vu,"alt",""),t(hf,"class","bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-l-2xl"),T(Pu,"font-family","'Poppins', sans-serif"),t(Pu,"class","uppercase pb-0 text-pfp-green font-bold"),T(Ac,"font-family","'Poppins', sans-serif"),t(Ac,"class","text-3xl font-bold text-[#2e3855] font-Poppins mt-5"),T(ku,"font-family","'Public Sans', sans-serif"),t(ku,"class","text-[#2E3855] tracking-wider mt-5"),t(Ma,"class","md:w-3/5 w-full p-14 pt-8 pb-6"),t(Id,"class","flex md:flex-row flex-col items-center rounded-2xl bg-white w-full"),t(Ed,"class","container mx-auto rounded-2xl"),t(wn,"id","calc-shadow-l"),t(wn,"class","bg-base-100"),T(wn,"width","1000px"),T(wn,"height","750px"),T(wn,"position","relative"),T(wn,"left","-1000px"),T(wn,"top","0px"),T(wn,"margin-bottom","-750px"),T(wn,"z-index","9"),t(jl,"id","calc-shadow-r"),t(jl,"class","bg-base-100"),T(jl,"width","1000px"),T(jl,"height","750px"),T(jl,"position","relative"),T(jl,"right","-100%"),T(jl,"top","0px"),T(jl,"margin-bottom","-750px"),T(jl,"z-index","9"),t(eo,"class","rounded-2xl pt-10"),t(eo,"id","calculator"),t(Vd,"class","uppercase text-xl m-5"),t(Pd,"id","waste-type1"),t(mf,"id","waste-type2"),t($o,"class","text-2xl font-bold leading-10"),t(Dd,"class","bg-[#E7F5F5] rounded-2xl text-center p-6 mb-10 text-[#2E3855]"),S(Sd.src,Wv="/assets/medres/pyrolysis.jpg")||t(Sd,"src",Wv),t(Sd,"class","rounded-full w-24 h-24"),t(Sd,"id","matched-img"),t(Sd,"alt",""),t(xf,"class","mx-auto"),t(bf,"class","uppercase text-xl m-5 mt-6"),t(Tu,"class","text-2xl font-bold leading-6"),t(Tu,"id","matched-tech"),t(Td,"class","text-center text-white"),t(kd,"class","bg-[#2E3855] rounded-2xl flex flex-col justify-center p-6 py-12 mb-6"),t(so,"class","w-1/3 flex-col justify-center"),T(so,"font-family","'Poppins', sans-serif"),t(Au,"class","ml-5 calc-gcv info-pop"),S(Au.src,zv="/assets/info.png")||t(Au,"src",zv),t(Au,"alt",""),T(Ad,"font-family","'Poppins', sans-serif"),t(Ad,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(yf,"id","energycontent"),t(Oc,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(Uo,"class","flex justify-center"),t(Ou,"class","ml-5 calc-heat-produced info-pop"),S(Ou.src,im="/assets/info.png")||t(Ou,"src",im),t(Ou,"alt",""),T(Od,"font-family","'Poppins', sans-serif"),t(Od,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(Ld,"id","heatproduced"),t(Lc,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(Fd,"class","flex justify-center mb-2"),t(Lu,"class","ml-5 calc-heat-savings info-pop"),S(Lu.src,Kv="/assets/info.png")||t(Lu,"src",Kv),t(Lu,"alt",""),T(Gd,"font-family","'Poppins', sans-serif"),t(Gd,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(wf,"id","heatsavingspa"),t(Md,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(Cd,"class","flex justify-center mb-6"),t(Gc,"class","ml-5 calc-electricity-produced info-pop"),S(Gc.src,om="/assets/info.png")||t(Gc,"src",om),t(Gc,"alt",""),T(Ho,"font-family","'Poppins', sans-serif"),t(Ho,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(_f,"id","electricityproduced"),t(ro,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(jd,"class","flex justify-center mb-2"),t(Nl,"class","ml-5 calc-electrical-savings info-pop"),S(Nl.src,cm="/assets/info.png")||t(Nl,"src",cm),t(Nl,"alt",""),T(Nd,"font-family","'Poppins', sans-serif"),t(Nd,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(Rd,"id","electricitysavingspa"),t(Bd,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(Yo,"class","flex justify-center mb-6"),t(Jv,"class","ml-5 calc-char info-pop"),S(Jv.src,b2="/assets/info.png")||t(Jv,"src",b2),t(Jv,"alt",""),T(qd,"font-family","'Poppins', sans-serif"),t(qd,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(wh,"id","fertiliser"),t(Xv,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(li,"class","flex justify-center mb-6"),t($r,"class","w-2/3 flex-col justify-center mx-auto pl-10 mt-0"),t(qo,"class","flex flex-row gap-8 items-center p-5 pt-1 mt-[-20px]"),t(to,"class","duration-300 transition opacity-0 container mb-[-630px] bg-white p-16 pb-6 rounded-b-2xl"),t(to,"id","results"),T(Qv,"font-family","'Poppins', sans-serif"),t(Qv,"class","card text-3xl font-bold text-[#2e3855] font-Poppins text-center"),T(Ef,"font-family","'Public Sans', sans-serif"),t(Ef,"class","text-[#2E3855] tracking-wider mt-5 pl-24 pr-24"),t(Ev,"class","text-center pb-10"),t(Iv,"class","h-60"),t(Iv,"id","calc-img"),S(Iv.src,y2="/assets/cow 1 (1).png")||t(Iv,"src",y2),t(Iv,"alt",""),t(_h,"class","bg-[#E7F5F5] w-1/3 flex justify-center rounded-2xl mr-8"),t(Zv,"type","button"),t(Zv,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Vf,"class","bg-[#E7F5F5]"),Vf.__value="Cheese production",Vf.value=Vf.__value,t(Pf,"class","bg-[#E7F5F5]"),Pf.__value="Butter production",Pf.value=Pf.__value,t(kf,"class","bg-[#E7F5F5]"),kf.__value="Ice cream",kf.value=kf.__value,t(Sf,"class","bg-[#E7F5F5]"),Sf.__value="Beer production",Sf.value=Sf.__value,t(Tf,"class","bg-[#E7F5F5]"),Tf.__value="Wine production",Tf.value=Tf.__value,t(Af,"class","bg-[#E7F5F5]"),Af.__value="Spirits production",Af.value=Af.__value,t(Ff,"class","bg-[#E7F5F5]"),Ff.__value="Ethanol production",Ff.value=Ff.__value,t(Of,"class","bg-[#E7F5F5]"),Of.__value="Pulp production",Of.value=Of.__value,t(Lf,"class","bg-[#E7F5F5]"),Lf.__value="Juice production",Lf.value=Lf.__value,t(Cf,"class","bg-[#E7F5F5]"),Cf.__value="Tomato ketchup",Cf.value=Cf.__value,t(Gf,"class","bg-[#E7F5F5]"),Gf.__value="Bovine meat",Gf.value=Gf.__value,t(Mf,"class","bg-[#E7F5F5]"),Mf.__value="Pig meat",Mf.value=Mf.__value,t(jf,"class","bg-[#E7F5F5]"),jf.__value="Sheep meat",jf.value=jf.__value,t(Nf,"class","bg-[#E7F5F5]"),Nf.__value="Frozen potatoes",Nf.value=Nf.__value,t(Bf,"class","bg-[#E7F5F5]"),Bf.__value="Prepared potatoes (crisps)",Bf.value=Bf.__value,t(Rf,"class","bg-[#E7F5F5]"),Rf.__value="Potato starch",Rf.value=Rf.__value,t(qf,"class","bg-[#E7F5F5]"),qf.__value="Dried potatoes",qf.value=qf.__value,t($f,"class","bg-[#E7F5F5]"),$f.__value="Sugar production",$f.value=$f.__value,t(Uf,"class","bg-[#E7F5F5]"),Uf.__value="Yeast production",Uf.value=Uf.__value,t(Hf,"class","bg-[#E7F5F5]"),Hf.__value="Vegetable oils production",Hf.value=Hf.__value,t(Yf,"class","bg-[#E7F5F5]"),Yf.__value="Biodiesel production",Yf.value=Yf.__value,t(Wf,"class","bg-[#E7F5F5]"),Wf.__value="Pig manure",Wf.value=Wf.__value,t(zf,"class","bg-[#E7F5F5]"),zf.__value="Dairy Cattle",zf.value=zf.__value,t(Kf,"class","bg-[#E7F5F5]"),Kf.__value="Non diary cattle",Kf.value=Kf.__value,t(Jf,"class","bg-[#E7F5F5]"),Jf.__value="Buffalo",Jf.value=Jf.__value,t(Xf,"class","bg-[#E7F5F5]"),Xf.__value="Chicken layer manure",Xf.value=Xf.__value,t(Qf,"class","bg-[#E7F5F5]"),Qf.__value="Chicken broiler manure",Qf.value=Qf.__value,t(Zf,"class","bg-[#E7F5F5]"),Zf.__value="Sheep",Zf.value=Zf.__value,t(ep,"class","bg-[#E7F5F5]"),ep.__value="Food waste",ep.value=ep.__value,t(tp,"class","bg-[#E7F5F5]"),tp.__value="Fish waste",tp.value=tp.__value,t(sp,"class","bg-[#E7F5F5]"),sp.__value="Coffee grounds",sp.value=sp.__value,t(rp,"class","bg-[#E7F5F5]"),rp.__value="Crop residues",rp.value=rp.__value,t(ap,"class","bg-[#E7F5F5]"),ap.__value="Maize silage",ap.value=ap.__value,t(np,"class","bg-[#E7F5F5]"),np.__value="Cereal",np.value=np.__value,t(lp,"class","bg-[#E7F5F5]"),lp.__value="Grass silage",lp.value=lp.__value,t(ip,"class","bg-[#E7F5F5]"),ip.__value="Pulp & Paper Waste",ip.value=ip.__value,t(op,"class","bg-[#E7F5F5]"),op.__value="Textile Waste",op.value=op.__value,t(cp,"class","bg-[#E7F5F5]"),cp.__value="PE Plastic",cp.value=cp.__value,t(dp,"class","bg-[#E7F5F5]"),dp.__value="SRF",dp.value=dp.__value,t(up,"class","bg-[#E7F5F5]"),up.__value="RDF",up.value=up.__value,t(fp,"class","bg-[#E7F5F5]"),fp.__value="PP Plastic",fp.value=fp.__value,t(pp,"class","bg-[#E7F5F5]"),pp.__value="PS Plastic",pp.value=pp.__value,t(vp,"class","bg-[#E7F5F5]"),vp.__value="PVC Plastic",vp.value=vp.__value,t(gp,"class","bg-[#E7F5F5]"),gp.__value="PET Plastic",gp.value=gp.__value,t(hp,"class","bg-[#E7F5F5]"),hp.__value="Rubber",hp.value=hp.__value,t(mp,"class","bg-[#E7F5F5]"),mp.__value="Wood waste",mp.value=mp.__value,t(xp,"class","bg-[#E7F5F5]"),xp.__value="Municipal Solid Waste (MSW)",xp.value=xp.__value,t(bp,"class","bg-[#E7F5F5]"),bp.__value="Medical Waste",bp.value=bp.__value,t(yp,"class","bg-[#E7F5F5]"),yp.__value="Ceramics",yp.value=yp.__value,t(wp,"class","bg-[#E7F5F5]"),wp.__value="Sand",wp.value=wp.__value,t(_p,"class","bg-[#E7F5F5]"),_p.__value="Dust",_p.value=_p.__value,t(Ep,"class","bg-[#E7F5F5]"),Ep.__value="Glass",Ep.value=Ep.__value,t(Ip,"class","bg-[#E7F5F5]"),Ip.__value="Metals",Ip.value=Ip.__value,t(Ke,"id","colorselector"),t(Ke,"class","w-full bg-transparent text-center border-0"),t(Eh,"class","button dropdown w-1/2 flex justify-between z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(Df,"class","inline-flex rounded-xl shadow-sm w-full"),t(Df,"role","group"),t(eg,"type","button"),t(eg,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Vp,"class","bg-[#E7F5F5]"),Vp.__value="10",Vp.value=Vp.__value,t(Pp,"class","bg-[#E7F5F5]"),Pp.__value="100",Pp.value=Pp.__value,t(kp,"class","bg-[#E7F5F5]"),kp.__value="1000",kp.value=kp.__value,t(Sp,"class","bg-[#E7F5F5]"),Sp.__value="10000",Sp.value=Sp.__value,t(Tp,"class","bg-[#E7F5F5]"),Tp.__value="20000",Tp.value=Tp.__value,t(Ap,"class","bg-[#E7F5F5]"),Ap.__value="40000",Ap.value=Ap.__value,t(Fp,"class","bg-[#E7F5F5]"),Fp.__value="60000",Fp.value=Fp.__value,t(Ko,"id","colorselector2"),t(Ko,"class","w-full bg-transparent text-center focus-0 after:border-0 before:border-0 after:border-[#E7F5F5]"),t(Ih,"class","button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(Dp,"class","inline-flex rounded-xl shadow-sm w-full mt-5"),t(Dp,"role","group"),t(tg,"type","button"),t(tg,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Lp,"class","bg-[#E7F5F5]"),Lp.__value="electricity",Lp.value=Lp.__value,t(Cp,"class","bg-[#E7F5F5]"),Cp.__value="heating-cooling",Cp.value=Cp.__value,t(Gp,"class","bg-[#E7F5F5]"),Gp.__value="carbon-credits",Gp.value=Gp.__value,t(Mp,"class","bg-[#E7F5F5]"),Mp.__value="fertiliser",Mp.value=Mp.__value,t(Cu,"id","colorselector3"),t(Cu,"class","w-full bg-transparent text-center"),t(Dh,"class","button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(Op,"class","inline-flex rounded-xl shadow-sm w-full mt-5"),t(Op,"role","group"),t(zo,"class","w-2/3 pl-12 pr-0 md:mt-0 mt-5 duration-300 transform"),t(zo,"id","calc-selectors"),T(If,"font-family","'Poppins', sans-serif"),t(If,"class","flex md:flex-row flex-col items-center rounded-lg bg-white w-full mt-5"),t(sg,"class","text-4xl font-bold"),t(sg,"id","feasible"),T(Gu,"font-family","'Public Sans', sans-serif"),t(Gu,"class","text-[#2E3855] tracking-wider mt-5"),t(Gu,"id","feasible-results"),t(jp,"class","w-[784px] ml-80 pl-16 h-60 p-10 pt-16 md:mt-0 mt-5 duration-300 transform absolute -translate-x-full opacity-0 -translate-y-full bg-[#E7F5F5] rounded-2xl"),t(jp,"id","calc-message"),t(rg,"class","mr-3"),S(rg.src,w2="/assets/arrow-right-circle.png")||t(rg,"src",w2),t(rg,"alt",""),t(ju,"id","call-button"),t(ju,"class","duration-300 transform -translate-x-full opacity-0 font-bold mt-16 w-[375px] p-4 hover:bg-pfp-green bg-pfp-orange rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(ju,"href","/contact"),t(ag,"class","mr-3"),S(ag.src,_2="/assets/arrow-right-circle.png")||t(ag,"src",_2),t(ag,"alt",""),t(Nu,"id","call-button2"),t(Nu,"class","duration-300 transform -translate-x-full opacity-0 font-bold mt-16 ml-1 w-[350px] p-4 hover:bg-pfp-green bg-pfp-navy rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(Nu,"href","/green-energy/"),t(ng,"class","mr-4 h-6"),S(ng.src,E2="/assets/calculator.png")||t(ng,"src",E2),t(ng,"alt",""),t($d,"id","calc-button"),t($d,"class","duration-300 transform -translate-x-[338px] font-bold mt-16 w-1/3 p-4 hover:bg-pfp-green bg-pfp-orange rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t($d,"href","/explore/#calculate"),t($d,"onclick","calculate();"),t(Mu,"class","flex justify gap-16 w-full"),t(Wo,"class","container rounded-2xl bg-white p-20 pt-12 pb-16 z-23"),t(Wo,"id","growcalc"),t(Jo,"id","calc-spacer"),t(Jo,"class","bg-base-100"),T(Jo,"width","1000px"),T(Jo,"height","750px"),T(Jo,"position","relative"),T(Jo,"right","-100%"),T(Jo,"top","0px"),T(Jo,"margin-bottom","-750px"),T(Jo,"z-index","9"),t(_v,"id","calculate"),t(Vh,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ph,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(lg.src,I2="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(lg,"src",I2),t(lg,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(lg,"class","h-6 w-6"),S(ig.src,D2="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ig,"src",D2),t(ig,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(ig,"class","h-6 w-6"),S(og.src,V2="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(og,"src",V2),t(og,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(og,"class","h-6 w-6"),t(Bu,"class","flex items-center gap-5"),t(Vv,"class","flex-1 flex justify-end items-center gap-10"),t(Dv,"class","w-[1260px] flex justify-between items-center pt-[30px] pb-[50px]"),t(M,"class","h-full max-w-[1260px]"),t(w,"class","flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap mt-8")},m(yt,ca){Ze(yt,l,ca),e(l,i),e(i,u),e(l,v),e(l,g),e(g,x),e(l,m),e(l,h),e(h,E),e(l,y),e(l,P),e(P,D),Ze(yt,I,ca),Ze(yt,_,ca),Ze(yt,F,ca),Ze(yt,k,ca),Ze(yt,A,ca),Ze(yt,G,ca),Ze(yt,j,ca),Ze(yt,b,ca),Ze(yt,L,ca),Ze(yt,w,ca),e(w,R),e(R,O),e(w,C),e(w,M),e(M,W),e(W,Y),e(Y,q),e(q,oe),e(oe,ve),e(q,z),e(q,$),e($,ae),e(q,Ee),e(q,ce),e(ce,Xe),e(q,de),e(q,te),e(te,ge),e(te,Ie),e(te,ue),e(ue,je),e(Y,fe),e(Y,N),e(N,Q),e(Q,De),e(N,pe),e(N,xe),e(N,Re),e(N,Le),e(N,ke),e(N,Z),e(N,Fe),e(N,Oe),e(N,st),e(N,V),e(N,X),e(N,re),e(N,ne),e(N,ye),e(N,qe),e(N,$e),e(M,ct),e(M,Ne),e(Ne,Je),e(Je,jt),e(Ne,Lt),e(Ne,ze),e(ze,wt),e(Ne,Pt),e(Ne,Ve),e(Ve,lt),e(lt,rt),e(rt,Dt),e(lt,Gt),e(lt,ft),e(ft,Nt),e(Ve,Vt),e(Ve,ie),e(ie,pt),e(pt,kt),e(ie,it),e(ie,ht),e(ht,Zt),e(Ve,Tt),e(Ve,at),e(at,At),e(At,Qe),e(at,dt),e(at,Wt),e(Wt,es),e(Ve,mt),e(Ve,Me),e(Me,ot),e(ot,Mt),e(Me,xt),e(Me,vt),e(vt,Bt),e(Ve,bt),e(Ve,Ft),e(Ft,Jt),e(Jt,Rt),e(Ft,zt),e(Ft,Ct),e(Ct,$t),e(Ne,St),e(Ne,rr),e(rr,os),e(Ne,Ut),e(Ne,nt),e(nt,Xt),e(nt,fs),e(nt,Ss),e(Ss,Ts),e(nt,As),e(nt,It),e(It,bs),e(nt,ts),e(nt,ps),e(ps,Pr),e(nt,Na),e(nt,rs),e(rs,ys),e(nt,Ur),e(nt,Ys),e(Ne,br),e(Ne,Kt),e(Kt,Fs),e(Fs,Ws),e(Kt,Ba),e(Kt,ua),e(ua,fa),e(Kt,kr),e(Kt,js),e(js,Hr),e(Kt,ws),e(Kt,_s),e(_s,Vn),e(Kt,Ra),e(Kt,as),e(as,zs),e(Kt,ii),e(Kt,qa),e(qa,Ks),e(Ne,oi),e(Ne,$a),e($a,ns),e(ns,Pn),e(Ne,yr),e(Ne,Js),e(Js,ar),e(ar,ci),e(M,pa),e(M,Qt),e(Qt,Xs),e(Xs,nr),e(nr,lr),e(lr,ir),e(nr,vs),e(nr,cs),e(cs,nl),e(nl,di),e(cs,Yr),e(cs,ss),e(ss,ui),e(cs,Tr),e(cs,Wr),e(Wr,fi),e(Wr,ll),e(Wr,lo),e(cs,ls),e(cs,Es),e(Es,Ar),e(Qt,Ua),e(Qt,Ht),e(Ht,or),e(or,wr),e(Ht,cr),e(Ht,Os),e(Os,Fr),e(Fr,va),e(va,kn),e(Fr,il),e(Fr,Qs),e(Qs,is),e(Os,pi),e(Os,ds),e(ds,zr),e(zr,Sn),e(Sn,dr),e(zr,vi),e(zr,ur),e(ur,gs),e(gs,Zs),e(ur,Is),e(ur,Ls),e(Ls,Or),e(Or,Ya),e(Ls,gi),e(Ls,fr),e(ur,Ds),e(ur,Lr),e(Lr,Tn),e(Tn,An),e(Lr,Wa),e(ds,hi),e(ds,hs),e(hs,Vs),e(Vs,Kr),e(Vs,mi),e(hs,Fn),e(hs,er),e(er,pr),e(er,tr),e(ds,ol),e(ds,Cr),e(Cr,Jr),e(Jr,Bs),e(Jr,Wc),e(Cr,zc),e(Cr,Xr),e(Xr,xi),e(Xr,oo),e(ds,bi),e(ds,vr),e(vr,us),e(vr,Ln),e(vr,Ka),e(Ka,yi),e(yi,wi),e(vr,ga),e(vr,gr),e(ds,Kc),e(ds,Qr),e(Qr,Cn),e(Cn,Jc),e(Qr,_i),e(Qr,ha),e(ha,Ja),e(Ja,Gn),e(ha,Xu),e(ha,uo),e(uo,Xa),e(Os,Qa),e(Os,ma),e(ma,Ps),e(Ps,xa),e(xa,fo),e(fo,Zr),e(xa,ba),e(xa,ya),e(ya,ql),e(ql,Ei),e(ya,Ii),e(ya,$l),e($l,Di),e(Ps,Mn),e(Ps,hr),e(hr,en),e(en,jn),e(jn,tn),e(jn,Xc),e(hr,po),e(hr,cl),e(cl,ea),e(ea,ks),e(ea,Vi),e(Ht,zd),e(Ht,sr),e(sr,Er),e(Er,sn),e(sn,Pi),e(Er,ki),e(Er,rn),e(rn,an),e(sr,dl),e(sr,ms),e(ms,_a),e(_a,Si),e(Si,Ea),e(_a,Qc),e(_a,mr),e(mr,Rs),e(Rs,ul),e(mr,Nn),e(mr,Cs),e(Cs,Ia),e(Ia,Zc),e(Cs,fl),e(Cs,qs),e(mr,Kd),e(mr,Gr),e(Gr,Mr),e(Mr,Jd),e(Gr,ed),e(ms,jr),e(ms,nn),e(nn,ln),e(ln,pl),e(ln,Hl),e(nn,Xd),e(nn,ta),e(ta,$s),e(ta,Bn),e(ms,Ai),e(ms,Fi),e(Fi,sa),e(sa,Rn),e(sa,Qd),e(Fi,go),e(Fi,Us),e(Us,on),e(Us,Zd),e(ms,ec),e(ms,qn),e(qn,cn),e(qn,eu),e(qn,Oi),e(Oi,Da),e(Da,$n),e(qn,gl),e(qn,ho),e(ms,Un),e(ms,hl),e(hl,mo),e(mo,xo),e(hl,Va),e(hl,Hn),e(Hn,dn),e(dn,tu),e(Hn,sc),e(Hn,ml),e(ml,rc),e(sr,xl),e(sr,Yl),e(Yl,Yn),e(Yn,Pa),e(Pa,bo),e(bo,Li),e(Pa,bl),e(Pa,ka),e(ka,yl),e(yl,su),e(ka,Wl),e(ka,Wn),e(Wn,ru),e(Yn,Ci),e(Yn,Ir),e(Ir,fn),e(fn,Sa),e(Sa,Gi),e(Sa,Mi),e(Ir,tf),e(Ir,yo),e(yo,Ta),e(Ta,Kl),e(Ta,wl),e(Ht,zn),e(Ht,Hs),e(Hs,ra),e(ra,_l),e(_l,sf),e(ra,au),e(ra,aa),e(aa,ji),e(Hs,Jl),e(Hs,xs),e(xs,Aa),e(Aa,Eo),e(Eo,El),e(Aa,ac),e(Aa,Nr),e(Nr,pn),e(pn,nu),e(Nr,nc),e(Nr,Br),e(Br,vn),e(vn,Ni),e(Br,Io),e(Br,Il),e(Nr,ic),e(Nr,Xl),e(Xl,Dl),e(Dl,Fa),e(Xl,oc),e(xs,lu),e(xs,Kn),e(Kn,na),e(na,gn),e(na,Bi),e(Kn,cc),e(Kn,Vl),e(Vl,Pl),e(Vl,iu),e(xs,Zl),e(xs,Rr),e(Rr,la),e(la,kl),e(la,ei),e(Rr,Do),e(Rr,Sl),e(Sl,hn),e(Sl,Vo),e(xs,dc),e(xs,Jn),e(Jn,ia),e(Jn,rd),e(Jn,mn),e(mn,Oa),e(Oa,ad),e(Jn,uc),e(Jn,xn),e(xs,ti),e(xs,qr),e(qr,Xn),e(Xn,af),e(qr,qi),e(qr,oa),e(oa,fc),e(fc,pc),e(oa,ko),e(oa,La),e(La,vc),e(Hs,gc),e(Hs,So),e(So,Ca),e(Ca,si),e(si,Qn),e(Qn,To),e(si,Lv),e(si,Zn),e(Zn,Al),e(Al,nd),e(Zn,hg),e(Zn,ld),e(ld,ou),e(Ca,Cv),e(Ca,hc),e(hc,Ao),e(Ao,xr),e(xr,Fo),e(xr,Gv),e(hc,nf),e(hc,cu),e(cu,Oo),e(Oo,Lo),e(Oo,Mv),e(Ht,lf),e(Ht,ri),e(ri,mc),e(mc,$i),e($i,du),e(mc,jv),e(mc,Ui),e(Ui,Fl),e(ri,Nv),e(ri,bn),e(bn,Ga),e(Ga,Hi),e(Hi,xc),e(Ga,id),e(Ga,Co),e(Co,od),e(od,cd),e(Co,yg),e(Co,Go),e(Go,bc),e(bc,Bv),e(Go,cf),e(Go,Ol),e(Co,uu),e(Co,dd),e(dd,uf),e(uf,wg),e(dd,Bp),e(bn,_g),e(bn,ud),e(ud,yc),e(yc,wc),e(yc,Eg),e(ud,Ig),e(ud,Ll),e(Ll,fu),e(Ll,Dg),e(bn,Vg),e(bn,fd),e(fd,Yi),e(Yi,Wi),e(Yi,_c),e(fd,Rp),e(fd,Ec),e(Ec,Ic),e(Ec,Pg),e(bn,kg),e(bn,Mo),e(Mo,pu),e(Mo,qp),e(Mo,vu),e(vu,gu),e(gu,zi),e(Mo,$p),e(Mo,Dc),e(bn,Sg),e(bn,Vc),e(Vc,jo),e(jo,Tg),e(Vc,Ag),e(Vc,pd),e(pd,hu),e(hu,Up),e(pd,Fg),e(pd,Hp),e(Hp,ff),e(ri,Og),e(ri,pf),e(pf,No),e(No,vd),e(vd,gd),e(gd,mu),e(vd,Lg),e(vd,hd),e(hd,xu),e(xu,Yp),e(hd,Wp),e(hd,bu),e(bu,Cg),e(No,yu),e(No,Bo),e(Bo,md),e(md,ai),e(ai,wu),e(ai,xd),e(Bo,Gg),e(Bo,vf),e(vf,Ki),e(Ki,Pc),e(Ki,Mg),e(Qt,_u),e(Qt,Cl),e(M,jg),e(M,gf),e(gf,ni),e(ni,kc),e(kc,Dr),e(Dr,Ji),e(Ji,Eu),e(Dr,Ng),e(Dr,Xi),e(Xi,Sc),e(Dr,Bg),e(Dr,Qi),e(Qi,yn),e(Dr,zp),e(Dr,el),e(el,bd),e(bd,Rg),e(Dr,Iu),e(Dr,Kp),e(Kp,qg),e(Dr,$g),e(Dr,Du),e(Du,Jp),e(kc,Ug),e(kc,Xp),e(Xp,Ro),e(kc,Hg),e(kc,Gl),e(Gl,yd),e(yd,wd),e(yd,Qp),e(yd,Tc),e(Tc,_d),e(Gl,Zp),e(Gl,Zi),e(Zi,Ml),e(M,Yg),e(M,eo),e(eo,Ed),e(Ed,Id),e(Id,hf),e(hf,Vu),e(Id,Wg),e(Id,Ma),e(Ma,ev),e(ev,tv),e(Ma,zg),e(Ma,Pu),e(Pu,Kg),e(Ma,sv),e(Ma,Ac),e(Ac,Jg),e(Ac,Xg),e(Ac,rv),e(Ma,av),e(Ma,ku),e(ku,Qg),e(eo,nv),e(eo,wn),e(eo,Zg),e(eo,jl),e(M,eh),e(M,to),e(to,qo),e(qo,so),e(so,Dd),e(Dd,Vd),e(Vd,th),e(Dd,lv),e(Dd,$o),e($o,Pd),e(Pd,sh),e($o,iv),e($o,ov),e($o,cv),e($o,mf),e(mf,rh),e(so,Su),e(so,kd),e(kd,xf),e(xf,Sd),e(kd,dv),e(kd,Td),e(Td,bf),e(bf,Fc),e(Td,ah),e(Td,Tu),e(Tu,nh),e(qo,lh),e(qo,$r),e($r,Uo),e(Uo,Ad),e(Ad,uv),e(Ad,Au),e(Uo,ih),e(Uo,Oc),e(Oc,yf),e(yf,fv),e(Oc,pv),e($r,vv),e($r,Fd),e(Fd,Od),e(Od,Fu),e(Od,Ou),e(Fd,oh),e(Fd,Lc),e(Lc,Ld),e(Ld,ch),e(Lc,dh),e($r,Cc),e($r,Cd),e(Cd,Gd),e(Gd,uh),e(Gd,Lu),e(Cd,gv),e(Cd,Md),e(Md,hv),e(Md,wf),e(wf,mv),e(Md,fh),e($r,xv),e($r,jd),e(jd,Ho),e(Ho,bv),e(Ho,Gc),e(jd,ph),e(jd,ro),e(ro,_f),e(_f,vh),e(ro,gh),e($r,yv),e($r,Yo),e(Yo,Nd),e(Nd,hh),e(Nd,Nl),e(Yo,mh),e(Yo,Bd),e(Bd,xh),e(Bd,Rd),e(Rd,bh),e(Bd,wv),e($r,yh),e($r,li),e(li,qd),e(qd,u0),e(qd,Jv),e(li,f0),e(li,Xv),e(Xv,wh),e(wh,p0),e(Xv,v0),e(M,g0),e(M,_v),e(_v,Wo),e(Wo,Ev),e(Ev,Qv),e(Qv,h0),e(Ev,m0),e(Ev,Ef),e(Ef,x0),e(Ef,b0),e(Ef,y0),e(Wo,w0),e(Wo,If),e(If,_h),e(_h,Iv),e(If,_0),e(If,zo),e(zo,Df),e(Df,Zv),e(Zv,E0),e(Df,I0),e(Df,Eh),e(Eh,Ke),e(Ke,Vf),e(Vf,D0),e(Ke,Pf),e(Pf,V0),e(Ke,kf),e(kf,P0),e(Ke,Sf),e(Sf,k0),e(Ke,Tf),e(Tf,S0),e(Ke,Af),e(Af,T0),e(Ke,Ff),e(Ff,A0),e(Ke,Of),e(Of,F0),e(Ke,Lf),e(Lf,O0),e(Ke,Cf),e(Cf,L0),e(Ke,Gf),e(Gf,C0),e(Ke,Mf),e(Mf,G0),e(Ke,jf),e(jf,M0),e(Ke,Nf),e(Nf,j0),e(Ke,Bf),e(Bf,N0),e(Ke,Rf),e(Rf,B0),e(Ke,qf),e(qf,R0),e(Ke,$f),e($f,q0),e(Ke,Uf),e(Uf,$0),e(Ke,Hf),e(Hf,U0),e(Ke,Yf),e(Yf,H0),e(Ke,Wf),e(Wf,Y0),e(Ke,zf),e(zf,W0),e(Ke,Kf),e(Kf,z0),e(Ke,Jf),e(Jf,K0),e(Ke,Xf),e(Xf,J0),e(Ke,Qf),e(Qf,X0),e(Ke,Zf),e(Zf,Q0),e(Ke,ep),e(ep,Z0),e(Ke,tp),e(tp,ex),e(Ke,sp),e(sp,tx),e(Ke,rp),e(rp,sx),e(Ke,ap),e(ap,rx),e(Ke,np),e(np,ax),e(Ke,lp),e(lp,nx),e(Ke,ip),e(ip,lx),e(Ke,op),e(op,ix),e(Ke,cp),e(cp,ox),e(Ke,dp),e(dp,cx),e(Ke,up),e(up,dx),e(Ke,fp),e(fp,ux),e(Ke,pp),e(pp,fx),e(Ke,vp),e(vp,px),e(Ke,gp),e(gp,vx),e(Ke,hp),e(hp,gx),e(Ke,mp),e(mp,hx),e(Ke,xp),e(xp,mx),e(Ke,bp),e(bp,xx),e(Ke,yp),e(yp,bx),e(Ke,wp),e(wp,yx),e(Ke,_p),e(_p,wx),e(Ke,Ep),e(Ep,_x),e(Ke,Ip),e(Ip,Ex),e(zo,Ix),e(zo,Dp),e(Dp,eg),e(eg,Dx),e(Dp,Vx),e(Dp,Ih),e(Ih,Ko),e(Ko,Vp),e(Vp,Px),e(Ko,Pp),e(Pp,kx),e(Ko,kp),e(kp,Sx),e(Ko,Sp),e(Sp,Tx),e(Ko,Tp),e(Tp,Ax),e(Ko,Ap),e(Ap,Fx),e(Ko,Fp),e(Fp,Ox),e(zo,Lx),e(zo,Op),e(Op,tg),e(tg,Cx),e(Op,Gx),e(Op,Dh),e(Dh,Cu),e(Cu,Lp),e(Lp,Mx),e(Cu,Cp),e(Cp,jx),e(Cu,Gp),e(Gp,Nx),e(Cu,Mp),e(Mp,Bx),e(zo,Rx),e(zo,Dm),e(Wo,qx),e(Wo,jp),e(jp,sg),e(sg,$x),e(jp,Ux),e(jp,Gu),e(Gu,Hx),e(Gu,Yx),e(Gu,Wx),e(Wo,zx),e(Wo,Mu),e(Mu,ju),e(ju,rg),e(ju,Kx),e(ju,dm),e(dm,Jx),e(Mu,Xx),e(Mu,Nu),e(Nu,ag),e(Nu,Qx),e(Nu,um),e(um,Zx),e(Mu,eb),e(Mu,$d),e($d,ng),e($d,tb),e($d,fm),e(fm,sb),e(_v,rb),e(_v,Jo),e(M,ab),e(M,pm),e(pm,nb),e(M,lb),e(M,Dv),e(Dv,Vh),e(Vh,ib),e(Dv,ob),e(Dv,Vv),e(Vv,Ph),e(Ph,cb),e(Vv,db),e(Vv,Bu),e(Bu,lg),e(Bu,ub),e(Bu,ig),e(Bu,fb),e(Bu,og),e(w,pb),e(w,vm),e(vm,vb),Mc=!0},p:Be,i(yt){Mc||(qc(()=>{Mc&&(J&&J.end(1),le=Ud(xe,Vr,{x:100,duration:300,delay:500}),le.start())}),qc(()=>{Mc&&(We&&We.end(1),ee=Ud(Le,Vr,{x:-100,duration:300,delay:500}),ee.start())}),qc(()=>{Mc&&(Ce&&Ce.end(1),me=Ud(Z,Vr,{x:-100,y:-100,duration:300,delay:500}),me.start())}),qc(()=>{Mc&&(Ye&&Ye.end(1),et=Ud(Oe,Vr,{y:-100,duration:300,delay:500}),et.start())}),qc(()=>{Mc&&(K&&K.end(1),U=Ud(V,Vr,{x:-100,duration:300,delay:500}),U.start())}),qc(()=>{Mc&&(Te&&Te.end(1),Se=Ud(re,Vr,{x:50,duration:300,delay:500}),Se.start())}),qc(()=>{Mc&&(se&&se.end(1),we=Ud(ye,Vr,{x:-70,duration:300,delay:500}),we.start())}),qc(()=>{Mc&&(Ue&&Ue.end(1),_e=Ud($e,Vr,{y:-100,duration:300,delay:500}),_e.start())}),Mc=!0)},o(yt){le&&le.invalidate(),J=Hd(xe,Vr,{x:-100,duration:300}),ee&&ee.invalidate(),We=Hd(Le,Vr,{x:100,duration:300}),me&&me.invalidate(),Ce=Hd(Z,Vr,{x:100,duration:300}),et&&et.invalidate(),Ye=Hd(Oe,Vr,{x:100,duration:300}),U&&U.invalidate(),K=Hd(V,Vr,{x:100,duration:300}),Se&&Se.invalidate(),Te=Hd(re,Vr,{x:-100,duration:300}),we&&we.invalidate(),se=Hd(ye,Vr,{y:100,duration:300}),_e&&_e.invalidate(),Ue=Hd($e,Vr,{x:100,duration:300}),Mc=!1},d(yt){yt&&a(l),yt&&a(I),yt&&a(_),yt&&a(F),yt&&a(k),yt&&a(A),yt&&a(G),yt&&a(j),yt&&a(b),yt&&a(L),yt&&a(w),yt&&J&&J.end(),yt&&We&&We.end(),yt&&Ce&&Ce.end(),yt&&Ye&&Ye.end(),yt&&K&&K.end(),yt&&Te&&Te.end(),yt&&se&&se.end(),yt&&Ue&&Ue.end()}}}function o6(d){return m_(()=>{$c(".map-gcv",{theme:"tomato",allowHTML:!0,content:"This is the amount of heat energy that could be released if a certain amount of waste is completely burnt. It's like a measure of the <i>energy potential</i> of waste. A higher GCV means the waste can produce more energy."}),$c(".map-case-study",{theme:"tomato",content:"Project Reference Biogas Plant: Guichen, France | HoSt"}),$c(".calc-gcv",{theme:"tomato",allowHTML:!0,content:"Energy content is the total amount of energy stored in waste. But instead of just heat energy, it also includes the energy that can be converted into electricity or other forms. It's the total <i>energy resource</i> the waste could provide."}),$c(".calc-heat-produced",{theme:"tomato",content:"This is the actual amount of heat energy generated when the waste is processed, like when you burn wood in a fireplace. This heat can be used directly (like to warm buildings) or can be converted into other forms of energy, like electricity."}),$c(".calc-heat-savings",{theme:"tomato",content:"This indicates how much heat energy a company can save by using the heat produced from waste processing, instead of getting it from conventional sources. This is assuming you're currently paying 7p/kWh"}),$c(".calc-electricity-produced",{theme:"tomato",allowHTML:!0,content:"This is the amount of electrical energy generated from processing the waste. This could be through burning the waste to generate steam, which drives a turbine to produce electricity, or through other methods. It's like the <i>power output</i> from the waste."}),$c(".calc-electrical-savings",{theme:"tomato",content:"This shows how much a company can save on electricity costs by using the electricity produced from waste processing, instead of purchasing it from the grid. This is based off the assumption you are paying 35p/kWh"}),$c(".calc-char",{theme:"tomato",content:"Char is the solid material that's left over after some waste processing methods, like pyrolysis and gasification. It can sometimes be used as a fuel or soil conditioner. This value shows how much char would be produced from the waste."})}),[]}class c6 extends In{constructor(l){super(),Dn(this,l,o6,i6,ja,{})}}function d6(d){let l,i,u,v,g,x,m,h,E,y,P,D,I,_,F,k,A,G,j,b,L,w,R,O,C,M,W,Y,q,oe,ve,z,$,ae,Ee,ce,Xe,de,te,ge,Ae,Ie,ue,je,fe,N,Q,De,pe,xe,he,le,J,Re,Le,Pe,ee,We,ke,Z,He,me,Ce,Fe,Oe,be,et,Ye,st,V,B,U,K,X,re,H,Se,Te,ne,ye,ut,we,se,qe,$e,Ge,_e,Ue,ct,Ne,Je,jt,Lt,ze,wt,Pt,Ve,lt,rt,Dt,gt,Gt;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("News"),x=o(),m=s("div"),h=s("div"),E=s("div"),y=s("div"),P=o(),D=s("div"),I=s("div"),_=s("div"),F=f("June 15, 2023"),k=o(),A=s("div"),G=f("Examining the global impact of food production and mitigation strategies"),j=o(),b=s("a"),L=s("div"),w=s("img"),O=o(),C=s("div"),M=f("Read more"),W=o(),Y=s("div"),q=s("div"),oe=o(),ve=s("div"),z=s("div"),$=s("div"),ae=f("May 9, 2023"),Ee=o(),ce=s("div"),Xe=f("A war worth fighting"),de=o(),te=s("a"),ge=s("div"),Ae=s("img"),ue=o(),je=s("div"),fe=f("Read more"),N=o(),Q=s("div"),De=s("div"),pe=s("div"),xe=o(),he=s("div"),le=s("div"),J=s("div"),Re=f("April 6, 2023"),Le=o(),Pe=s("div"),ee=f("One ecosystem, one overall solution"),We=o(),ke=s("a"),Z=s("div"),He=s("img"),Ce=o(),Fe=s("div"),Oe=f("Read more"),be=o(),et=s("div"),Ye=s("div"),st=o(),V=s("div"),B=s("div"),U=s("div"),K=f("March 6, 2023"),X=o(),re=s("div"),H=f("The “Great Greenwashing” of 2023"),Se=o(),Te=s("a"),ne=s("div"),ye=s("img"),we=o(),se=s("div"),qe=f("Read more"),$e=o(),Ge=s("div"),_e=s("div"),Ue=f("Copyright © 2023 Power for Planet"),ct=o(),Ne=s("div"),Je=s("div"),jt=f("Privacy Policy"),Lt=o(),ze=s("div"),wt=s("img"),Ve=o(),lt=s("img"),Dt=o(),gt=s("img"),this.h()},l(ft){l=r(ft,"DIV",{class:!0});var Nt=n(l);i=r(Nt,"DIV",{class:!0});var Vt=n(i);u=r(Vt,"DIV",{class:!0});var ie=n(u);v=r(ie,"DIV",{});var pt=n(v);g=p(pt,"News"),pt.forEach(a),ie.forEach(a),x=c(Vt),m=r(Vt,"DIV",{class:!0});var kt=n(m);h=r(kt,"DIV",{class:!0});var Yt=n(h);E=r(Yt,"DIV",{class:!0});var it=n(E);y=r(it,"DIV",{class:!0}),n(y).forEach(a),P=c(it),D=r(it,"DIV",{class:!0});var ht=n(D);I=r(ht,"DIV",{class:!0});var Zt=n(I);_=r(Zt,"DIV",{class:!0});var Tt=n(_);F=p(Tt,"June 15, 2023"),Tt.forEach(a),Zt.forEach(a),k=c(ht),A=r(ht,"DIV",{class:!0});var at=n(A);G=p(at,"Examining the global impact of food production and mitigation strategies"),at.forEach(a),j=c(ht),b=r(ht,"A",{href:!0});var At=n(b);L=r(At,"DIV",{class:!0});var Qe=n(L);w=r(Qe,"IMG",{src:!0,alt:!0,class:!0}),O=c(Qe),C=r(Qe,"DIV",{});var _t=n(C);M=p(_t,"Read more"),_t.forEach(a),Qe.forEach(a),At.forEach(a),ht.forEach(a),it.forEach(a),W=c(Yt),Y=r(Yt,"DIV",{class:!0});var dt=n(Y);q=r(dt,"DIV",{class:!0}),n(q).forEach(a),oe=c(dt),ve=r(dt,"DIV",{class:!0});var Wt=n(ve);z=r(Wt,"DIV",{class:!0});var es=n(z);$=r(es,"DIV",{class:!0});var mt=n($);ae=p(mt,"May 9, 2023"),mt.forEach(a),es.forEach(a),Ee=c(Wt),ce=r(Wt,"DIV",{class:!0});var Me=n(ce);Xe=p(Me,"A war worth fighting"),Me.forEach(a),de=c(Wt),te=r(Wt,"A",{href:!0});var ot=n(te);ge=r(ot,"DIV",{class:!0});var Mt=n(ge);Ae=r(Mt,"IMG",{src:!0,alt:!0,class:!0}),ue=c(Mt),je=r(Mt,"DIV",{});var Et=n(je);fe=p(Et,"Read more"),Et.forEach(a),Mt.forEach(a),ot.forEach(a),Wt.forEach(a),dt.forEach(a),Yt.forEach(a),N=c(kt),Q=r(kt,"DIV",{class:!0});var xt=n(Q);De=r(xt,"DIV",{class:!0});var vt=n(De);pe=r(vt,"DIV",{class:!0}),n(pe).forEach(a),xe=c(vt),he=r(vt,"DIV",{class:!0});var Bt=n(he);le=r(Bt,"DIV",{class:!0});var bt=n(le);J=r(bt,"DIV",{class:!0});var Ft=n(J);Re=p(Ft,"April 6, 2023"),Ft.forEach(a),bt.forEach(a),Le=c(Bt),Pe=r(Bt,"DIV",{class:!0});var Jt=n(Pe);ee=p(Jt,"One ecosystem, one overall solution"),Jt.forEach(a),We=c(Bt),ke=r(Bt,"A",{href:!0});var Rt=n(ke);Z=r(Rt,"DIV",{class:!0});var qt=n(Z);He=r(qt,"IMG",{src:!0,alt:!0,class:!0}),Ce=c(qt),Fe=r(qt,"DIV",{});var zt=n(Fe);Oe=p(zt,"Read more"),zt.forEach(a),qt.forEach(a),Rt.forEach(a),Bt.forEach(a),vt.forEach(a),be=c(xt),et=r(xt,"DIV",{class:!0});var Ct=n(et);Ye=r(Ct,"DIV",{class:!0}),n(Ye).forEach(a),st=c(Ct),V=r(Ct,"DIV",{class:!0});var $t=n(V);B=r($t,"DIV",{class:!0});var St=n(B);U=r(St,"DIV",{class:!0});var rr=n(U);K=p(rr,"March 6, 2023"),rr.forEach(a),St.forEach(a),X=c($t),re=r($t,"DIV",{class:!0});var os=n(re);H=p(os,"The “Great Greenwashing” of 2023"),os.forEach(a),Se=c($t),Te=r($t,"A",{href:!0});var Ut=n(Te);ne=r(Ut,"DIV",{class:!0});var nt=n(ne);ye=r(nt,"IMG",{src:!0,alt:!0,class:!0}),we=c(nt),se=r(nt,"DIV",{});var Xt=n(se);qe=p(Xt,"Read more"),Xt.forEach(a),nt.forEach(a),Ut.forEach(a),$t.forEach(a),Ct.forEach(a),xt.forEach(a),kt.forEach(a),$e=c(Vt),Ge=r(Vt,"DIV",{class:!0});var fs=n(Ge);_e=r(fs,"DIV",{class:!0});var Ss=n(_e);Ue=p(Ss,"Copyright © 2023 Power for Planet"),Ss.forEach(a),ct=c(fs),Ne=r(fs,"DIV",{class:!0});var Ts=n(Ne);Je=r(Ts,"DIV",{class:!0});var As=n(Je);jt=p(As,"Privacy Policy"),As.forEach(a),Lt=c(Ts),ze=r(Ts,"DIV",{class:!0});var It=n(ze);wt=r(It,"IMG",{src:!0,alt:!0,class:!0}),Ve=c(It),lt=r(It,"IMG",{src:!0,alt:!0,class:!0}),Dt=c(It),gt=r(It,"IMG",{src:!0,alt:!0,class:!0}),It.forEach(a),Ts.forEach(a),fs.forEach(a),Vt.forEach(a),Nt.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),t(y,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/1.jpg')] w-full flex-col h-[220px] flex items-start p-5"),t(_,"class","uppercase"),t(I,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(A,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[462px]"),S(w.src,R="/assets/new/arrow-right-circle.svg")||t(w,"src",R),t(w,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(w,"class","h-5 w-5"),t(L,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(b,"href","/news-item"),t(D,"class","rounded-b-[20px] bg-white w-full flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(E,"class","flex-1 flex-col flex items-start rounded-[20px]"),t(q,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/3.jpg')] w-full flex-col h-[220px] flex items-start p-5"),t($,"class","uppercase"),t(z,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(ce,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins h-[68px] w-[462px]"),S(Ae.src,Ie="/assets/new/arrow-right-circle.svg")||t(Ae,"src",Ie),t(Ae,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(Ae,"class","h-5 w-5"),t(ge,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(te,"href","/news-item2"),t(ve,"class","rounded-b-[20px] bg-white w-full flex-1 flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(Y,"class","h-full flex-1 flex-col flex items-start rounded-[20px]"),t(h,"class","w-full flex items-start gap-10"),t(pe,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/2.jpg')] w-full flex-col h-[220px] flex items-start p-5"),t(J,"class","uppercase"),t(le,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(Pe,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[462px]"),S(He.src,me="/assets/new/arrow-right-circle.svg")||t(He,"src",me),t(He,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(He,"class","h-5 w-5"),t(Z,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(ke,"href","/news-item3"),t(he,"class","rounded-b-[20px] bg-white w-full flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(De,"class","flex-1 flex-col flex items-start rounded-[20px]"),t(Ye,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/4.png')] w-full flex-col h-[220px] flex items-start p-5"),t(U,"class","uppercase"),t(B,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(re,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[462px]"),S(ye.src,ut="/assets/new/arrow-right-circle.svg")||t(ye,"src",ut),t(ye,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(ye,"class","h-5 w-5"),t(ne,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(Te,"href","/news-item4"),t(V,"class","rounded-b-[20px] bg-white w-full flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(et,"class","flex-1 flex-col flex items-start rounded-[20px]"),t(Q,"class","w-full flex items-start gap-10"),t(m,"class","w-full flex-col flex items-start gap-10"),t(_e,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Je,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(wt.src,Pt="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(wt,"src",Pt),t(wt,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(wt,"class","h-6 w-6"),S(lt.src,rt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(lt,"src",rt),t(lt,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(lt,"class","h-6 w-6"),S(gt.src,Gt="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(gt,"src",Gt),t(gt,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(gt,"class","h-6 w-6"),t(ze,"class","flex items-center gap-5"),t(Ne,"class","flex-1 flex justify-end items-center gap-10"),t(Ge,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col max-w-[1060px] flex items-start gap-[60px]"),t(l,"class","flex-col flex items-center gap-[50px] h-fit mt-20")},m(ft,Nt){Ze(ft,l,Nt),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,E),e(E,y),e(E,P),e(E,D),e(D,I),e(I,_),e(_,F),e(D,k),e(D,A),e(A,G),e(D,j),e(D,b),e(b,L),e(L,w),e(L,O),e(L,C),e(C,M),e(h,W),e(h,Y),e(Y,q),e(Y,oe),e(Y,ve),e(ve,z),e(z,$),e($,ae),e(ve,Ee),e(ve,ce),e(ce,Xe),e(ve,de),e(ve,te),e(te,ge),e(ge,Ae),e(ge,ue),e(ge,je),e(je,fe),e(m,N),e(m,Q),e(Q,De),e(De,pe),e(De,xe),e(De,he),e(he,le),e(le,J),e(J,Re),e(he,Le),e(he,Pe),e(Pe,ee),e(he,We),e(he,ke),e(ke,Z),e(Z,He),e(Z,Ce),e(Z,Fe),e(Fe,Oe),e(Q,be),e(Q,et),e(et,Ye),e(et,st),e(et,V),e(V,B),e(B,U),e(U,K),e(V,X),e(V,re),e(re,H),e(V,Se),e(V,Te),e(Te,ne),e(ne,ye),e(ne,we),e(ne,se),e(se,qe),e(i,$e),e(i,Ge),e(Ge,_e),e(_e,Ue),e(Ge,ct),e(Ge,Ne),e(Ne,Je),e(Je,jt),e(Ne,Lt),e(Ne,ze),e(ze,wt),e(ze,Ve),e(ze,lt),e(ze,Dt),e(ze,gt)},p:Be,i:Be,o:Be,d(ft){ft&&a(l)}}}class u6 extends In{constructor(l){super(),Dn(this,l,null,d6,ja,{})}}function f6(d){let l,i,u,v,g,x,m,h,E,y,P,D,I,_,F,k,A,G,j,b,L,w,R,O,C,M,W,Y,q,oe,ve,z,$,ae,Ee,ce,Xe,de,te,ge,Ae,Ie,ue,je,fe,N,Q,De,pe,xe,he,le,J,Re,Le,Pe,ee,We,ke,Z,He,me,Ce,Fe,Oe,be,et,Ye,st,V,B,U,K,X,re,H,Se,Te,ne,ye,ut,we,se,qe,$e,Ge,_e,Ue,ct,Ne;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),E=o(),y=s("div"),P=f("Examining the global impact of food production and mitigation strategies"),D=o(),I=s("div"),_=s("div"),F=o(),k=s("div"),A=s("div"),G=s("div"),j=s("div"),b=f("June 15, 2023"),L=o(),w=s("div"),R=f("Examining the global impact of food production and mitigation strategies"),O=o(),C=s("div"),M=s("div"),W=f(`Food consumption accounts for 28% of the world's ecological footprint according to the US Environmental
              Protection Agency (EPA). As a consequence, our feeding habits yield profound and sometimes irreversible
              environmental impact. Alarmingly, we squander approximately 25% of global calorie production amidst a staggering
              822 million people suffering from undernourishment worldwide. The required actions for mitigating these impacts
              include lifestyle and dietary changes, particularly in the Global North; transformative global farming practices;
              and the utilisation of innovative technologies within existing supply chains. Success lies in implementing these
              actions harmoniously.`),Y=o(),q=s("div"),oe=s("div"),ve=f("Food production's environmental impacts are wide-ranging:"),z=o(),$=s("div"),ae=s("span"),Ee=f("Water usage"),ce=f(`
                : Food production consumes 70% of global water usage. Water scarcity currently plagues 1.1 billion people lacking
                sufficient clean water.
                `),Xe=s("span"),de=f("Soil degradation"),te=f(`
                : Intensive agriculture and monoculture farming practices contribute to the annual loss of 24 billion tonnes of fertile
                soil, as per a recent UN study.
                `),ge=s("span"),Ae=f("Use of chemical fertilisers and agrochemicals"),Ie=f(`
                : Increased land yield efforts have led to escalated chemical usage and consequential environmental impacts.`),ue=o(),je=s("div"),fe=s("img"),Q=o(),De=s("div"),pe=f(`Monoculture farming: a short-term yield with long-term environmental implications (photo by Tim Hüfner on
                Unsplash)`),xe=o(),he=s("div"),le=s("div"),J=f("Quote example"),Re=o(),Le=s("div"),Pe=f("Someone explains:"),ee=o(),We=s("div"),ke=s("div"),Z=f(`“To address these challenges, the industry needs to invest in research and development to develop new and more
                  effective technologies. Additionally, there needs to be more collaboration between industry stakeholders,
                  technology developers, and regulatory bodies.”`),He=o(),me=s("div"),Ce=s("div"),Fe=f("Technology Challenge"),Oe=o(),be=s("div"),et=f(`Another challenge facing the power from waste industry is technology. While there have been significant
                `),Ye=s("span"),st=o(),V=s("span"),B=f("link example"),U=f(`
                in waste-to-energy technology, there is still room for improvement. Some of the key areas where technology needs
                to evolve include waste sorting, emissions control, and energy efficiency. To address these challenges, the industry
                needs to invest in research and development to develop new and more effective technologies. Additionally, there needs
                to be more collaboration between industry stakeholders, technology developers, and regulatory bodies.`),K=o(),X=s("div"),re=s("div"),H=f("Copyright © 2023 Power for Planet"),Se=o(),Te=s("div"),ne=s("div"),ye=f("Privacy Policy"),ut=o(),we=s("div"),se=s("img"),$e=o(),Ge=s("img"),Ue=o(),ct=s("img"),this.h()},l(Je){l=r(Je,"DIV",{class:!0});var jt=n(l);i=r(jt,"DIV",{class:!0});var Lt=n(i);u=r(Lt,"DIV",{class:!0});var ze=n(u);v=r(ze,"DIV",{class:!0});var wt=n(v);g=r(wt,"DIV",{class:!0});var Pt=n(g);x=r(Pt,"A",{href:!0});var Ve=n(x);m=r(Ve,"DIV",{class:!0});var lt=n(m);h=p(lt,"News"),lt.forEach(a),Ve.forEach(a),E=c(Pt),y=r(Pt,"DIV",{class:!0});var rt=n(y);P=p(rt,"Examining the global impact of food production and mitigation strategies"),rt.forEach(a),Pt.forEach(a),wt.forEach(a),D=c(ze),I=r(ze,"DIV",{class:!0});var Dt=n(I);_=r(Dt,"DIV",{class:!0}),n(_).forEach(a),F=c(Dt),k=r(Dt,"DIV",{class:!0});var gt=n(k);A=r(gt,"DIV",{class:!0});var Gt=n(A);G=r(Gt,"DIV",{class:!0});var ft=n(G);j=r(ft,"DIV",{class:!0});var Nt=n(j);b=p(Nt,"June 15, 2023"),Nt.forEach(a),ft.forEach(a),L=c(Gt),w=r(Gt,"DIV",{class:!0});var Vt=n(w);R=p(Vt,"Examining the global impact of food production and mitigation strategies"),Vt.forEach(a),Gt.forEach(a),O=c(gt),C=r(gt,"DIV",{class:!0});var ie=n(C);M=r(ie,"DIV",{class:!0});var pt=n(M);W=p(pt,`Food consumption accounts for 28% of the world's ecological footprint according to the US Environmental
              Protection Agency (EPA). As a consequence, our feeding habits yield profound and sometimes irreversible
              environmental impact. Alarmingly, we squander approximately 25% of global calorie production amidst a staggering
              822 million people suffering from undernourishment worldwide. The required actions for mitigating these impacts
              include lifestyle and dietary changes, particularly in the Global North; transformative global farming practices;
              and the utilisation of innovative technologies within existing supply chains. Success lies in implementing these
              actions harmoniously.`),pt.forEach(a),Y=c(ie),q=r(ie,"DIV",{class:!0});var kt=n(q);oe=r(kt,"DIV",{class:!0});var Yt=n(oe);ve=p(Yt,"Food production's environmental impacts are wide-ranging:"),Yt.forEach(a),z=c(kt),$=r(kt,"DIV",{class:!0});var it=n($);ae=r(it,"SPAN",{class:!0});var ht=n(ae);Ee=p(ht,"Water usage"),ht.forEach(a),ce=p(it,`
                : Food production consumes 70% of global water usage. Water scarcity currently plagues 1.1 billion people lacking
                sufficient clean water.
                `),Xe=r(it,"SPAN",{class:!0});var Zt=n(Xe);de=p(Zt,"Soil degradation"),Zt.forEach(a),te=p(it,`
                : Intensive agriculture and monoculture farming practices contribute to the annual loss of 24 billion tonnes of fertile
                soil, as per a recent UN study.
                `),ge=r(it,"SPAN",{class:!0});var Tt=n(ge);Ae=p(Tt,"Use of chemical fertilisers and agrochemicals"),Tt.forEach(a),Ie=p(it,`
                : Increased land yield efforts have led to escalated chemical usage and consequential environmental impacts.`),it.forEach(a),kt.forEach(a),ue=c(ie),je=r(ie,"DIV",{class:!0});var at=n(je);fe=r(at,"IMG",{class:!0,alt:!0,src:!0}),Q=c(at),De=r(at,"DIV",{class:!0});var At=n(De);pe=p(At,`Monoculture farming: a short-term yield with long-term environmental implications (photo by Tim Hüfner on
                Unsplash)`),At.forEach(a),at.forEach(a),xe=c(ie),he=r(ie,"DIV",{class:!0});var Qe=n(he);le=r(Qe,"DIV",{class:!0});var _t=n(le);J=p(_t,"Quote example"),_t.forEach(a),Re=c(Qe),Le=r(Qe,"DIV",{class:!0});var dt=n(Le);Pe=p(dt,"Someone explains:"),dt.forEach(a),ee=c(Qe),We=r(Qe,"DIV",{class:!0});var Wt=n(We);ke=r(Wt,"DIV",{class:!0});var es=n(ke);Z=p(es,`“To address these challenges, the industry needs to invest in research and development to develop new and more
                  effective technologies. Additionally, there needs to be more collaboration between industry stakeholders,
                  technology developers, and regulatory bodies.”`),es.forEach(a),Wt.forEach(a),Qe.forEach(a),He=c(ie),me=r(ie,"DIV",{class:!0});var mt=n(me);Ce=r(mt,"DIV",{class:!0});var Me=n(Ce);Fe=p(Me,"Technology Challenge"),Me.forEach(a),Oe=c(mt),be=r(mt,"DIV",{class:!0});var ot=n(be);et=p(ot,`Another challenge facing the power from waste industry is technology. While there have been significant
                `),Ye=r(ot,"SPAN",{class:!0}),n(Ye).forEach(a),st=c(ot),V=r(ot,"SPAN",{class:!0});var Mt=n(V);B=p(Mt,"link example"),Mt.forEach(a),U=p(ot,`
                in waste-to-energy technology, there is still room for improvement. Some of the key areas where technology needs
                to evolve include waste sorting, emissions control, and energy efficiency. To address these challenges, the industry
                needs to invest in research and development to develop new and more effective technologies. Additionally, there needs
                to be more collaboration between industry stakeholders, technology developers, and regulatory bodies.`),ot.forEach(a),mt.forEach(a),ie.forEach(a),gt.forEach(a),Dt.forEach(a),ze.forEach(a),K=c(Lt),X=r(Lt,"DIV",{class:!0});var Et=n(X);re=r(Et,"DIV",{class:!0});var xt=n(re);H=p(xt,"Copyright © 2023 Power for Planet"),xt.forEach(a),Se=c(Et),Te=r(Et,"DIV",{class:!0});var vt=n(Te);ne=r(vt,"DIV",{class:!0});var Bt=n(ne);ye=p(Bt,"Privacy Policy"),Bt.forEach(a),ut=c(vt),we=r(vt,"DIV",{class:!0});var bt=n(we);se=r(bt,"IMG",{src:!0,alt:!0,class:!0}),$e=c(bt),Ge=r(bt,"IMG",{src:!0,alt:!0,class:!0}),Ue=c(bt),ct=r(bt,"IMG",{src:!0,alt:!0,class:!0}),bt.forEach(a),vt.forEach(a),Et.forEach(a),Lt.forEach(a),jt.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(y,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(_,"class","bg-cover bg-center bg-[url('/assets/new/XN2.jpg')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(j,"class","uppercase"),t(G,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(w,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(M,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(oe,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(ae,"class","font-bold text-sm leading-[25px] font-PublicSans"),t(Xe,"class","font-bold text-sm leading-[25px] font-PublicSans"),t(ge,"class","font-bold text-sm leading-[25px] font-PublicSans"),t($,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(q,"class","w-full flex-col flex items-start gap-3"),t(fe,"class","object-cover w-full h-[350px] rounded-2xl"),t(fe,"alt","1686828442283 1"),S(fe.src,N="/assets/new/XN3.png")||t(fe,"src",N),t(De,"class","italic w-[680px]"),t(je,"class","w-full flex-col flex items-start gap-4 text-sm leading-[25px] font-light font-PublicSans"),t(le,"class","text-xl leading-[34px] font-bold font-Poppins"),t(Le,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ke,"class","w-[656px]"),t(We,"class","w-full flex items-start gap-2.5 pl-6 border-l-[3px] border-[#3f9378] text-sm leading-[25px] font-semibold font-PublicSans"),t(he,"class","w-full flex-col flex items-start gap-3"),t(Ce,"class","text-xl leading-[34px] font-bold font-Poppins"),t(Ye,"class","font-light text-sm leading-[25px] font-PublicSans"),t(V,"class","font-bold text-sm leading-[25px] text-[#3f9378] font-PublicSans"),t(be,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(me,"class","w-full flex-col flex items-start gap-3"),t(C,"class","w-full flex-col flex items-start gap-6"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(I,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(re,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(ne,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(se.src,qe="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(se,"src",qe),t(se,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(se,"class","h-6 w-6"),S(Ge.src,_e="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ge,"src",_e),t(Ge,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Ge,"class","h-6 w-6"),S(ct.src,Ne="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ct,"src",Ne),t(ct,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(ct,"class","h-6 w-6"),t(we,"class","flex items-center gap-5"),t(Te,"class","flex-1 flex justify-end items-center gap-10"),t(X,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(Je,jt){Ze(Je,l,jt),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,E),e(g,y),e(y,P),e(u,D),e(u,I),e(I,_),e(I,F),e(I,k),e(k,A),e(A,G),e(G,j),e(j,b),e(A,L),e(A,w),e(w,R),e(k,O),e(k,C),e(C,M),e(M,W),e(C,Y),e(C,q),e(q,oe),e(oe,ve),e(q,z),e(q,$),e($,ae),e(ae,Ee),e($,ce),e($,Xe),e(Xe,de),e($,te),e($,ge),e(ge,Ae),e($,Ie),e(C,ue),e(C,je),e(je,fe),e(je,Q),e(je,De),e(De,pe),e(C,xe),e(C,he),e(he,le),e(le,J),e(he,Re),e(he,Le),e(Le,Pe),e(he,ee),e(he,We),e(We,ke),e(ke,Z),e(C,He),e(C,me),e(me,Ce),e(Ce,Fe),e(me,Oe),e(me,be),e(be,et),e(be,Ye),e(be,st),e(be,V),e(V,B),e(be,U),e(i,K),e(i,X),e(X,re),e(re,H),e(X,Se),e(X,Te),e(Te,ne),e(ne,ye),e(Te,ut),e(Te,we),e(we,se),e(we,$e),e(we,Ge),e(we,Ue),e(we,ct)},p:Be,i:Be,o:Be,d(Je){Je&&a(l)}}}class p6 extends In{constructor(l){super(),Dn(this,l,null,f6,ja,{})}}function v6(d){let l,i,u,v,g,x,m,h,E,y,P,D,I,_,F,k,A,G,j,b,L,w,R,O,C,M,W,Y,q,oe,ve,z,$,ae,Ee,ce,Xe,de,te,ge,Ae,Ie,ue,je,fe,N,Q,De,pe,xe,he,le,J,Re,Le,Pe,ee,We,ke,Z,He,me,Ce,Fe,Oe,be,et,Ye,st,V,B,U,K,X,re,H,Se,Te,ne,ye,ut,we,se,qe,$e,Ge,_e,Ue,ct,Ne,Je,jt,Lt,ze,wt;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),E=o(),y=s("div"),P=f("A war worth fighting"),D=o(),I=s("div"),_=s("div"),F=o(),k=s("div"),A=s("div"),G=s("div"),j=s("div"),b=f("May 9, 2023"),L=o(),w=s("div"),R=f("A war worth fighting"),O=o(),C=s("div"),M=s("div"),W=f("Uniting as individuals to make a change for a greener future"),Y=o(),q=s("div"),oe=f(`In today's world, it seems we're stuck in a battle between the natural ecosystem and our current financial models.
              Case in point: BP's recent financial report, declared a record profit of $28 billion for 2022 without accounting
              for environmental damage caused. This infuriated climate activists as the company scaled back on plans to cut oil
              and gas output and reduce carbon emissions by 2030. While companies continue to report high profits, the
              environmental impact of their activities is often left out of the equation. Why is this the case? And what can we,
              as individuals, do to make a difference?`),ve=o(),z=s("div"),$=s("div"),ae=f("The war at hand"),Ee=o(),ce=s("div"),Xe=f(`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),de=o(),te=s("div"),ge=s("div"),Ae=f("The role of companies"),Ie=o(),ue=s("div"),je=f(`Companies have started integrating sustainable development goals (SDGs) and environmental, social, and corporate
              governance (ESG) models into their operations. However, a disconnect still exists between profit and
              sustainability. Only when businesses prioritise the environment in their decision-making will we see true change.`),fe=o(),N=s("div"),Q=s("div"),De=f("Individuals hold the power"),pe=o(),xe=s("div"),he=f(`PFP believes that individuals have the power to make a difference. By engaging with brands, politicians,
              employers, and other stakeholders, we can demand change and make a positive impact on our planet.`),le=o(),J=s("div"),Re=s("div"),Le=f("Action steps for individuals:"),Pe=o(),ee=s("ul"),We=s("li"),ke=f("As a consumer, demand brands prioritise nature in their operations"),Z=o(),He=s("li"),me=f("As a voter, support candidates who advocate for renewable energy and reject fossil fuels"),Ce=o(),Fe=s("li"),Oe=f("As an employee, encourage business leaders to take immediate action to protect the planet"),be=o(),et=s("li"),Ye=f("As a business owner, require suppliers to demonstrate their green credentials"),st=o(),V=s("li"),B=f("As a shareholder, hold executives accountable for meeting ESG goals"),U=o(),K=s("li"),X=f("As a politician, listen to the people and take action to address their concerns"),re=o(),H=s("div"),Se=f(`The battle for a greener future is ongoing, but the power to make a change lies within us. By taking action as
              individuals, we can contribute to a more sustainable world and support our planet's natural ecosystem. It's time
              to unite and fight for a cause that truly matters.`),Te=o(),ne=s("div"),ye=s("div"),ut=f("Copyright © 2023 Power for Planet"),we=o(),se=s("div"),qe=s("div"),$e=f("Privacy Policy"),Ge=o(),_e=s("div"),Ue=s("img"),Ne=o(),Je=s("img"),Lt=o(),ze=s("img"),this.h()},l(Pt){l=r(Pt,"DIV",{class:!0});var Ve=n(l);i=r(Ve,"DIV",{class:!0});var lt=n(i);u=r(lt,"DIV",{class:!0});var rt=n(u);v=r(rt,"DIV",{class:!0});var Dt=n(v);g=r(Dt,"DIV",{class:!0});var gt=n(g);x=r(gt,"A",{href:!0});var Gt=n(x);m=r(Gt,"DIV",{class:!0});var ft=n(m);h=p(ft,"News"),ft.forEach(a),Gt.forEach(a),E=c(gt),y=r(gt,"DIV",{class:!0});var Nt=n(y);P=p(Nt,"A war worth fighting"),Nt.forEach(a),gt.forEach(a),Dt.forEach(a),D=c(rt),I=r(rt,"DIV",{class:!0});var Vt=n(I);_=r(Vt,"DIV",{class:!0}),n(_).forEach(a),F=c(Vt),k=r(Vt,"DIV",{class:!0});var ie=n(k);A=r(ie,"DIV",{class:!0});var pt=n(A);G=r(pt,"DIV",{class:!0});var kt=n(G);j=r(kt,"DIV",{class:!0});var Yt=n(j);b=p(Yt,"May 9, 2023"),Yt.forEach(a),kt.forEach(a),L=c(pt),w=r(pt,"DIV",{class:!0});var it=n(w);R=p(it,"A war worth fighting"),it.forEach(a),pt.forEach(a),O=c(ie),C=r(ie,"DIV",{class:!0});var ht=n(C);M=r(ht,"DIV",{class:!0});var Zt=n(M);W=p(Zt,"Uniting as individuals to make a change for a greener future"),Zt.forEach(a),Y=c(ht),q=r(ht,"DIV",{class:!0});var Tt=n(q);oe=p(Tt,`In today's world, it seems we're stuck in a battle between the natural ecosystem and our current financial models.
              Case in point: BP's recent financial report, declared a record profit of $28 billion for 2022 without accounting
              for environmental damage caused. This infuriated climate activists as the company scaled back on plans to cut oil
              and gas output and reduce carbon emissions by 2030. While companies continue to report high profits, the
              environmental impact of their activities is often left out of the equation. Why is this the case? And what can we,
              as individuals, do to make a difference?`),Tt.forEach(a),ve=c(ht),z=r(ht,"DIV",{class:!0});var at=n(z);$=r(at,"DIV",{class:!0});var At=n($);ae=p(At,"The war at hand"),At.forEach(a),Ee=c(at),ce=r(at,"DIV",{class:!0});var Qe=n(ce);Xe=p(Qe,`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),Qe.forEach(a),at.forEach(a),ht.forEach(a),de=c(ie),te=r(ie,"DIV",{class:!0});var _t=n(te);ge=r(_t,"DIV",{class:!0});var dt=n(ge);Ae=p(dt,"The role of companies"),dt.forEach(a),Ie=c(_t),ue=r(_t,"DIV",{class:!0});var Wt=n(ue);je=p(Wt,`Companies have started integrating sustainable development goals (SDGs) and environmental, social, and corporate
              governance (ESG) models into their operations. However, a disconnect still exists between profit and
              sustainability. Only when businesses prioritise the environment in their decision-making will we see true change.`),Wt.forEach(a),_t.forEach(a),fe=c(ie),N=r(ie,"DIV",{class:!0});var es=n(N);Q=r(es,"DIV",{class:!0});var mt=n(Q);De=p(mt,"Individuals hold the power"),mt.forEach(a),pe=c(es),xe=r(es,"DIV",{class:!0});var Me=n(xe);he=p(Me,`PFP believes that individuals have the power to make a difference. By engaging with brands, politicians,
              employers, and other stakeholders, we can demand change and make a positive impact on our planet.`),Me.forEach(a),es.forEach(a),le=c(ie),J=r(ie,"DIV",{class:!0});var ot=n(J);Re=r(ot,"DIV",{class:!0});var Mt=n(Re);Le=p(Mt,"Action steps for individuals:"),Mt.forEach(a),Pe=c(ot),ee=r(ot,"UL",{class:!0});var Et=n(ee);We=r(Et,"LI",{});var xt=n(We);ke=p(xt,"As a consumer, demand brands prioritise nature in their operations"),xt.forEach(a),Z=c(Et),He=r(Et,"LI",{});var vt=n(He);me=p(vt,"As a voter, support candidates who advocate for renewable energy and reject fossil fuels"),vt.forEach(a),Ce=c(Et),Fe=r(Et,"LI",{});var Bt=n(Fe);Oe=p(Bt,"As an employee, encourage business leaders to take immediate action to protect the planet"),Bt.forEach(a),be=c(Et),et=r(Et,"LI",{});var bt=n(et);Ye=p(bt,"As a business owner, require suppliers to demonstrate their green credentials"),bt.forEach(a),st=c(Et),V=r(Et,"LI",{});var Ft=n(V);B=p(Ft,"As a shareholder, hold executives accountable for meeting ESG goals"),Ft.forEach(a),U=c(Et),K=r(Et,"LI",{});var Jt=n(K);X=p(Jt,"As a politician, listen to the people and take action to address their concerns"),Jt.forEach(a),Et.forEach(a),re=c(ot),H=r(ot,"DIV",{class:!0});var Rt=n(H);Se=p(Rt,`The battle for a greener future is ongoing, but the power to make a change lies within us. By taking action as
              individuals, we can contribute to a more sustainable world and support our planet's natural ecosystem. It's time
              to unite and fight for a cause that truly matters.`),Rt.forEach(a),ot.forEach(a),ie.forEach(a),Vt.forEach(a),rt.forEach(a),lt.forEach(a),Te=c(Ve),ne=r(Ve,"DIV",{class:!0});var qt=n(ne);ye=r(qt,"DIV",{class:!0});var zt=n(ye);ut=p(zt,"Copyright © 2023 Power for Planet"),zt.forEach(a),we=c(qt),se=r(qt,"DIV",{class:!0});var Ct=n(se);qe=r(Ct,"DIV",{class:!0});var $t=n(qe);$e=p($t,"Privacy Policy"),$t.forEach(a),Ge=c(Ct),_e=r(Ct,"DIV",{class:!0});var St=n(_e);Ue=r(St,"IMG",{src:!0,alt:!0,class:!0}),Ne=c(St),Je=r(St,"IMG",{src:!0,alt:!0,class:!0}),Lt=c(St),ze=r(St,"IMG",{src:!0,alt:!0,class:!0}),St.forEach(a),Ct.forEach(a),qt.forEach(a),Ve.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(y,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(_,"class","bg-cover bg-center bg-[url('/assets/new/3.jpg')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(j,"class","uppercase"),t(G,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(w,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(M,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(q,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t($,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(ce,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(z,"class","w-full flex-col flex items-start gap-3"),t(C,"class","w-full flex-col flex items-start gap-6"),t(ge,"class","text-xl leading-[34px] font-bold font-Poppins"),t(ue,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(te,"class","w-full flex-col flex items-start gap-3"),t(Q,"class","text-xl leading-[34px] font-bold font-Poppins"),t(xe,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(N,"class","w-full flex-col flex items-start gap-3"),t(Re,"class","text-xl leading-[34px] font-bold font-Poppins"),t(ee,"class","list-disc pl-4"),t(H,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(J,"class","w-full flex-col flex items-start gap-3"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(I,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(ye,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(qe,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Ue.src,ct="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ue,"src",ct),t(Ue,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Ue,"class","h-6 w-6"),S(Je.src,jt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Je,"src",jt),t(Je,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Je,"class","h-6 w-6"),S(ze.src,wt="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ze,"src",wt),t(ze,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(ze,"class","h-6 w-6"),t(_e,"class","flex items-center gap-5"),t(se,"class","flex-1 flex justify-end items-center gap-10"),t(ne,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(Pt,Ve){Ze(Pt,l,Ve),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,E),e(g,y),e(y,P),e(u,D),e(u,I),e(I,_),e(I,F),e(I,k),e(k,A),e(A,G),e(G,j),e(j,b),e(A,L),e(A,w),e(w,R),e(k,O),e(k,C),e(C,M),e(M,W),e(C,Y),e(C,q),e(q,oe),e(C,ve),e(C,z),e(z,$),e($,ae),e(z,Ee),e(z,ce),e(ce,Xe),e(k,de),e(k,te),e(te,ge),e(ge,Ae),e(te,Ie),e(te,ue),e(ue,je),e(k,fe),e(k,N),e(N,Q),e(Q,De),e(N,pe),e(N,xe),e(xe,he),e(k,le),e(k,J),e(J,Re),e(Re,Le),e(J,Pe),e(J,ee),e(ee,We),e(We,ke),e(ee,Z),e(ee,He),e(He,me),e(ee,Ce),e(ee,Fe),e(Fe,Oe),e(ee,be),e(ee,et),e(et,Ye),e(ee,st),e(ee,V),e(V,B),e(ee,U),e(ee,K),e(K,X),e(J,re),e(J,H),e(H,Se),e(l,Te),e(l,ne),e(ne,ye),e(ye,ut),e(ne,we),e(ne,se),e(se,qe),e(qe,$e),e(se,Ge),e(se,_e),e(_e,Ue),e(_e,Ne),e(_e,Je),e(_e,Lt),e(_e,ze)},p:Be,i:Be,o:Be,d(Pt){Pt&&a(l)}}}class g6 extends In{constructor(l){super(),Dn(this,l,null,v6,ja,{})}}function h6(d){let l,i,u,v,g,x,m,h,E,y,P,D,I,_,F,k,A,G,j,b,L,w,R,O,C,M,W,Y,q,oe,ve,z,$,ae,Ee,ce,Xe,de,te,ge,Ae,Ie,ue,je,fe,N,Q,De,pe,xe,he,le,J,Re,Le,Pe,ee,We,ke,Z,He,me,Ce,Fe,Oe,be,et,Ye,st,V,B,U,K,X,re,H,Se,Te,ne,ye,ut,we,se,qe,$e,Ge,_e,Ue,ct,Ne,Je,jt,Lt,ze,wt,Pt,Ve,lt,rt,Dt,gt,Gt,ft,Nt,Vt,ie,pt,kt,Yt,it,ht;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),E=o(),y=s("div"),P=f("One ecosystem, one overall solution"),D=o(),I=s("div"),_=s("div"),F=o(),k=s("div"),A=s("div"),G=s("div"),j=s("div"),b=f("April 6, 2023"),L=o(),w=s("div"),R=f("One ecosystem, one overall solution"),O=o(),C=s("div"),M=s("div"),W=f("We must adopt a total system approach that does not focus simply on the headline issues of the day"),Y=o(),q=s("div"),oe=f(`Recent headlines have focused on the UK's new net zero strategy, announced on March 30th. While the plan
              highlights the need to transition away from fossil fuels, it falls short in terms of providing a comprehensive
              approach to sustainability. Instead, it invests heavily in Carbon Capture and Storage (CCS) technology, which some
              experts argue has yet to prove its large-scale effectiveness.`),ve=o(),z=s("div"),$=s("div"),ae=f("The war at hand"),Ee=o(),ce=s("div"),Xe=f(`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),de=o(),te=s("div"),ge=s("div"),Ae=f("Individuals hold the power"),Ie=o(),ue=s("div"),je=f("A few notable reactions to the strategy:"),fe=o(),N=s("div"),Q=s("ul"),De=s("li"),pe=f(`Dr. Peter Connor, Associate Professor of Sustainable Energy Policy at the University of Exeter, expresses
                concerns about the £20 billion commitment to CCS, citing its limited impact on reducing atmospheric carbon.`),xe=o(),he=s("li"),le=f(`Josh Burke, Senior Policy Fellow at the London School of Economics and Political Science, laments the absence of
                a long-term investment plan for greener solutions.`),J=o(),Re=s("li"),Le=f(`Matthew Paterson, Professor of International and Climate Change Politics at the University of Manchester,
                critiques the plan's inadequate focus on retrofitting the UK's inefficient homes.`),Pe=o(),ee=s("li"),We=f(`Christophe Williams, CEO of Naked Energy, calls for increased awareness and support for existing clean
                technologies that could help businesses and communities save money while reducing environmental impact.`),ke=o(),Z=s("div"),He=f(`Naturally we agree!
              `),me=s("br"),Ce=f(`
              These aren’t the reasons, however, that make us assert that the document and the UK government are missing the point,
              as damning as they are.`),Fe=o(),Oe=s("div"),be=s("div"),et=f("Th 6R Approach"),Ye=o(),st=s("div"),V=f(`At PFP, we believe in a "6 R" approach to address global environmental challenges, with "regrowth" as the ultimate
              goal. By focusing on reducing waste and re-engineering processes in line with ESG goals, we can have a newly
              defined type of growth and make a positive impact on our planet and future generations.`),B=o(),U=s("div"),K=s("img"),re=o(),H=s("div"),Se=s("div"),Te=f("PFP News"),ne=o(),ye=s("div"),ut=f(`As we continue to develop our power from waste platform to fulfil our global commitment to creating energy from
              non-recyclable waste, we are also creating our network of collaborative partners to work with us to support our
              clients to re-engineer their entire process in line with their ESG goals.`),we=o(),se=s("div"),qe=f("We're delighted to announce a new partnership with Rafinex, found at "),$e=s("a"),Ge=f("www.rafinex.com"),_e=f(`
               Specialising in advanced numerical models for engineering applications, Rafinex will work alongside PFP and our clients
              to reduce waste and develop sustainable solutions designs across various industries.`),Ue=o(),ct=s("div"),Ne=f(`Rafinex' innovative cloud SaaS product Möbius embeds the latest breakthroughs in stochastic optimisation
              mathematics. It is able to compute highly optimised and reliably trustworthy product designs that remain safe in
              real-life variable operating conditions in a matter of hours - making sustainable designs both scalable and
              profitable at the same time. Rafinex enables companies to substantially save on material usage for creating
              products, as well as on the subsequent energy required to use or operate these products.`),Je=o(),jt=s("div"),Lt=f(`As we continue to connect businesses and communities with the best technology partners for power-from-waste
              projects, our mission is to reduce the strain on our planet caused by the pursuit of financial growth at any cost.
              Together, we can build a sustainable future.`),ze=o(),wt=s("div"),Pt=s("div"),Ve=f("Copyright © 2023 Power for Planet"),lt=o(),rt=s("div"),Dt=s("div"),gt=f("Privacy Policy"),Gt=o(),ft=s("div"),Nt=s("img"),ie=o(),pt=s("img"),Yt=o(),it=s("img"),this.h()},l(Zt){l=r(Zt,"DIV",{class:!0});var Tt=n(l);i=r(Tt,"DIV",{class:!0});var at=n(i);u=r(at,"DIV",{class:!0});var At=n(u);v=r(At,"DIV",{class:!0});var Qe=n(v);g=r(Qe,"DIV",{class:!0});var _t=n(g);x=r(_t,"A",{href:!0});var dt=n(x);m=r(dt,"DIV",{class:!0});var Wt=n(m);h=p(Wt,"News"),Wt.forEach(a),dt.forEach(a),E=c(_t),y=r(_t,"DIV",{class:!0});var es=n(y);P=p(es,"One ecosystem, one overall solution"),es.forEach(a),_t.forEach(a),Qe.forEach(a),D=c(At),I=r(At,"DIV",{class:!0});var mt=n(I);_=r(mt,"DIV",{class:!0}),n(_).forEach(a),F=c(mt),k=r(mt,"DIV",{class:!0});var Me=n(k);A=r(Me,"DIV",{class:!0});var ot=n(A);G=r(ot,"DIV",{class:!0});var Mt=n(G);j=r(Mt,"DIV",{class:!0});var Et=n(j);b=p(Et,"April 6, 2023"),Et.forEach(a),Mt.forEach(a),L=c(ot),w=r(ot,"DIV",{class:!0});var xt=n(w);R=p(xt,"One ecosystem, one overall solution"),xt.forEach(a),ot.forEach(a),O=c(Me),C=r(Me,"DIV",{class:!0});var vt=n(C);M=r(vt,"DIV",{class:!0});var Bt=n(M);W=p(Bt,"We must adopt a total system approach that does not focus simply on the headline issues of the day"),Bt.forEach(a),Y=c(vt),q=r(vt,"DIV",{class:!0});var bt=n(q);oe=p(bt,`Recent headlines have focused on the UK's new net zero strategy, announced on March 30th. While the plan
              highlights the need to transition away from fossil fuels, it falls short in terms of providing a comprehensive
              approach to sustainability. Instead, it invests heavily in Carbon Capture and Storage (CCS) technology, which some
              experts argue has yet to prove its large-scale effectiveness.`),bt.forEach(a),ve=c(vt),z=r(vt,"DIV",{class:!0});var Ft=n(z);$=r(Ft,"DIV",{class:!0});var Jt=n($);ae=p(Jt,"The war at hand"),Jt.forEach(a),Ee=c(Ft),ce=r(Ft,"DIV",{class:!0});var Rt=n(ce);Xe=p(Rt,`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),Rt.forEach(a),Ft.forEach(a),vt.forEach(a),de=c(Me),te=r(Me,"DIV",{class:!0});var qt=n(te);ge=r(qt,"DIV",{class:!0});var zt=n(ge);Ae=p(zt,"Individuals hold the power"),zt.forEach(a),Ie=c(qt),ue=r(qt,"DIV",{class:!0});var Ct=n(ue);je=p(Ct,"A few notable reactions to the strategy:"),Ct.forEach(a),qt.forEach(a),fe=c(Me),N=r(Me,"DIV",{class:!0});var $t=n(N);Q=r($t,"UL",{class:!0});var St=n(Q);De=r(St,"LI",{});var rr=n(De);pe=p(rr,`Dr. Peter Connor, Associate Professor of Sustainable Energy Policy at the University of Exeter, expresses
                concerns about the £20 billion commitment to CCS, citing its limited impact on reducing atmospheric carbon.`),rr.forEach(a),xe=c(St),he=r(St,"LI",{});var os=n(he);le=p(os,`Josh Burke, Senior Policy Fellow at the London School of Economics and Political Science, laments the absence of
                a long-term investment plan for greener solutions.`),os.forEach(a),J=c(St),Re=r(St,"LI",{});var Ut=n(Re);Le=p(Ut,`Matthew Paterson, Professor of International and Climate Change Politics at the University of Manchester,
                critiques the plan's inadequate focus on retrofitting the UK's inefficient homes.`),Ut.forEach(a),Pe=c(St),ee=r(St,"LI",{});var nt=n(ee);We=p(nt,`Christophe Williams, CEO of Naked Energy, calls for increased awareness and support for existing clean
                technologies that could help businesses and communities save money while reducing environmental impact.`),nt.forEach(a),St.forEach(a),ke=c($t),Z=r($t,"DIV",{class:!0});var Xt=n(Z);He=p(Xt,`Naturally we agree!
              `),me=r(Xt,"BR",{}),Ce=p(Xt,`
              These aren’t the reasons, however, that make us assert that the document and the UK government are missing the point,
              as damning as they are.`),Xt.forEach(a),$t.forEach(a),Fe=c(Me),Oe=r(Me,"DIV",{class:!0});var fs=n(Oe);be=r(fs,"DIV",{class:!0});var Ss=n(be);et=p(Ss,"Th 6R Approach"),Ss.forEach(a),Ye=c(fs),st=r(fs,"DIV",{class:!0});var Ts=n(st);V=p(Ts,`At PFP, we believe in a "6 R" approach to address global environmental challenges, with "regrowth" as the ultimate
              goal. By focusing on reducing waste and re-engineering processes in line with ESG goals, we can have a newly
              defined type of growth and make a positive impact on our planet and future generations.`),Ts.forEach(a),fs.forEach(a),B=c(Me),U=r(Me,"DIV",{class:!0});var As=n(U);K=r(As,"IMG",{class:!0,alt:!0,src:!0}),As.forEach(a),re=c(Me),H=r(Me,"DIV",{class:!0});var It=n(H);Se=r(It,"DIV",{class:!0});var bs=n(Se);Te=p(bs,"PFP News"),bs.forEach(a),ne=c(It),ye=r(It,"DIV",{class:!0});var ts=n(ye);ut=p(ts,`As we continue to develop our power from waste platform to fulfil our global commitment to creating energy from
              non-recyclable waste, we are also creating our network of collaborative partners to work with us to support our
              clients to re-engineer their entire process in line with their ESG goals.`),ts.forEach(a),we=c(It),se=r(It,"DIV",{class:!0});var ps=n(se);qe=p(ps,"We're delighted to announce a new partnership with Rafinex, found at "),$e=r(ps,"A",{href:!0,target:!0});var Pr=n($e);Ge=p(Pr,"www.rafinex.com"),Pr.forEach(a),_e=p(ps,`
               Specialising in advanced numerical models for engineering applications, Rafinex will work alongside PFP and our clients
              to reduce waste and develop sustainable solutions designs across various industries.`),ps.forEach(a),Ue=c(It),ct=r(It,"DIV",{class:!0});var Na=n(ct);Ne=p(Na,`Rafinex' innovative cloud SaaS product Möbius embeds the latest breakthroughs in stochastic optimisation
              mathematics. It is able to compute highly optimised and reliably trustworthy product designs that remain safe in
              real-life variable operating conditions in a matter of hours - making sustainable designs both scalable and
              profitable at the same time. Rafinex enables companies to substantially save on material usage for creating
              products, as well as on the subsequent energy required to use or operate these products.`),Na.forEach(a),Je=c(It),jt=r(It,"DIV",{class:!0});var rs=n(jt);Lt=p(rs,`As we continue to connect businesses and communities with the best technology partners for power-from-waste
              projects, our mission is to reduce the strain on our planet caused by the pursuit of financial growth at any cost.
              Together, we can build a sustainable future.`),rs.forEach(a),It.forEach(a),Me.forEach(a),mt.forEach(a),At.forEach(a),at.forEach(a),ze=c(Tt),wt=r(Tt,"DIV",{class:!0});var ys=n(wt);Pt=r(ys,"DIV",{class:!0});var Ur=n(Pt);Ve=p(Ur,"Copyright © 2023 Power for Planet"),Ur.forEach(a),lt=c(ys),rt=r(ys,"DIV",{class:!0});var Ys=n(rt);Dt=r(Ys,"DIV",{class:!0});var br=n(Dt);gt=p(br,"Privacy Policy"),br.forEach(a),Gt=c(Ys),ft=r(Ys,"DIV",{class:!0});var Kt=n(ft);Nt=r(Kt,"IMG",{src:!0,alt:!0,class:!0}),ie=c(Kt),pt=r(Kt,"IMG",{src:!0,alt:!0,class:!0}),Yt=c(Kt),it=r(Kt,"IMG",{src:!0,alt:!0,class:!0}),Kt.forEach(a),Ys.forEach(a),ys.forEach(a),Tt.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(y,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(_,"class","bg-cover bg-center bg-[url('/assets/new/2.jpg')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(j,"class","uppercase"),t(G,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(w,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(M,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(q,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t($,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(ce,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(z,"class","w-full flex-col flex items-start gap-3"),t(C,"class","w-full flex-col flex items-start gap-6"),t(ge,"class","text-xl leading-[34px] font-bold font-Poppins"),t(ue,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(te,"class","w-full flex-col flex items-start gap-3"),t(Q,"class","list-disc pl-4"),t(Z,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(N,"class","w-full flex-col flex items-start gap-3"),t(be,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(st,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Oe,"class","w-full flex-col flex items-start gap-3"),t(K,"class","object-cover w-full h-[2000px] rounded-2xl"),t(K,"alt","1680532545699"),S(K.src,X="/assets/new/1680532545699.png")||t(K,"src",X),t(U,"class","w-full flex-col flex items-start gap-4 text-sm leading-[25px] font-light font-PublicSans"),t(Se,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(ye,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t($e,"href","//www.rafinex.com"),t($e,"target","_blank"),t(se,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ct,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(jt,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(H,"class","w-full flex-col flex items-start gap-3"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(I,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(Pt,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Dt,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Nt.src,Vt="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Nt,"src",Vt),t(Nt,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Nt,"class","h-6 w-6"),S(pt.src,kt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(pt,"src",kt),t(pt,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(pt,"class","h-6 w-6"),S(it.src,ht="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(it,"src",ht),t(it,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(it,"class","h-6 w-6"),t(ft,"class","flex items-center gap-5"),t(rt,"class","flex-1 flex justify-end items-center gap-10"),t(wt,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(Zt,Tt){Ze(Zt,l,Tt),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,E),e(g,y),e(y,P),e(u,D),e(u,I),e(I,_),e(I,F),e(I,k),e(k,A),e(A,G),e(G,j),e(j,b),e(A,L),e(A,w),e(w,R),e(k,O),e(k,C),e(C,M),e(M,W),e(C,Y),e(C,q),e(q,oe),e(C,ve),e(C,z),e(z,$),e($,ae),e(z,Ee),e(z,ce),e(ce,Xe),e(k,de),e(k,te),e(te,ge),e(ge,Ae),e(te,Ie),e(te,ue),e(ue,je),e(k,fe),e(k,N),e(N,Q),e(Q,De),e(De,pe),e(Q,xe),e(Q,he),e(he,le),e(Q,J),e(Q,Re),e(Re,Le),e(Q,Pe),e(Q,ee),e(ee,We),e(N,ke),e(N,Z),e(Z,He),e(Z,me),e(Z,Ce),e(k,Fe),e(k,Oe),e(Oe,be),e(be,et),e(Oe,Ye),e(Oe,st),e(st,V),e(k,B),e(k,U),e(U,K),e(k,re),e(k,H),e(H,Se),e(Se,Te),e(H,ne),e(H,ye),e(ye,ut),e(H,we),e(H,se),e(se,qe),e(se,$e),e($e,Ge),e(se,_e),e(H,Ue),e(H,ct),e(ct,Ne),e(H,Je),e(H,jt),e(jt,Lt),e(l,ze),e(l,wt),e(wt,Pt),e(Pt,Ve),e(wt,lt),e(wt,rt),e(rt,Dt),e(Dt,gt),e(rt,Gt),e(rt,ft),e(ft,Nt),e(ft,ie),e(ft,pt),e(ft,Yt),e(ft,it)},p:Be,i:Be,o:Be,d(Zt){Zt&&a(l)}}}class m6 extends In{constructor(l){super(),Dn(this,l,null,h6,ja,{})}}function x6(d){let l,i,u,v,g,x,m,h,E,y,P,D,I,_,F,k,A,G,j,b,L,w,R,O,C,M,W,Y,q,oe,ve,z,$,ae,Ee,ce,Xe,de,te,ge,Ae,Ie,ue,je,fe,N,Q,De,pe,xe,he,le,J,Re,Le,Pe,ee,We,ke,Z,He,me,Ce,Fe,Oe,be,et,Ye,st,V,B,U,K,X,re,H,Se,Te,ne,ye,ut,we,se,qe,$e,Ge,_e,Ue,ct,Ne,Je,jt,Lt,ze,wt;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),E=o(),y=s("div"),P=f('The "Great Greenwashing” of 2023'),D=o(),I=s("div"),_=s("div"),F=o(),k=s("div"),A=s("div"),G=s("div"),j=s("div"),b=f("March 6, 2023"),L=o(),w=s("div"),R=f('The "Great Greenwashing” of 2023'),O=o(),C=s("div"),M=s("div"),W=f("From Euronews green"),Y=o(),q=s("div"),oe=f(`In recent news, Lufthansa released a poster reading "Protecting the Planet", featuring a plane overlaid on an
              image of the Earth, which was rapidly banned in the UK for misleading consumers about the airline's environmental
              impact. While Lufthansa has set a goal to become carbon neutral by 2050 and has invested in sustainable aviation
              fuel and carbon offset programs, there are currently no environmental initiatives or commercially viable
              technologies in the aviation industry which would substantiate the green claim "protecting the future".`),ve=o(),z=s("div"),$=s("div"),ae=f("From the Guardian"),Ee=o(),ce=s("div"),Xe=f(`A recent investigation has revealed troubling news about forest carbon offsets. The world's leading certifier,
                Verra, relied upon by major corporations like Disney, Shell, Gucci have been approving offset projects that are
                largely ineffective at combating climate change.`),de=o(),te=s("div"),ge=f(`The investigation analysed a significant percentage of Verra's projects and found that over 90% of the
                rainforest offset credits - which are among the most commonly used by companies - are likely to be "phantom
                credits". These credits do not represent genuine carbon reductions, which means that the purported benefits of
                these offsets are largely worthless.`),Ae=o(),Ie=s("div"),ue=s("div"),je=f("From journalist Robin Hicks"),fe=o(),N=s("div"),Q=f(`Meanwhile, the South Korean government has said it will start taking action against companies that make misleading
              sustainability claims. It is a first-of-its-kind move in Asia and other governments and regulatory bodies should
              take note and follow suit.`),De=o(),pe=s("div"),xe=f(`Under a draft new law, companies that mislead the public about their environmental impact will face fines of up to
              KRW3 million (£1,920). The news comes four months after the country’s largest oil and gas company SK E&C was
              forced to modify a marketing campaign that claimed the firm would produce “CO2-free” liquefied natural gas at a
              planned plant in northern Australia.`),he=o(),le=s("div"),J=s("div"),Re=f("From the Planet"),Le=o(),Pe=s("div"),ee=f(`The environmental harm caused by humans has led to a rapid acceleration of natural changes in my climate system.
              Of course, as a planet, I will still be here for quite some time - around 7.5 billion years, give or take a
              millennium. But unfortunately, the same cannot be said for the multitude of life forms, particularly the human
              species. Climate extremes will soon become the norm and coping with them will be a tremendous challenge.`),We=o(),ke=s("div"),Z=f(`However, if humanity chooses to prioritise environmental repair over damage, there is a chance we can mitigate the
              worst effects of climate change. It will require more than just PR stunts and lip service. Real, substantive
              action is what's necessary - action that shows a genuine concern for the environment and a willingness to do what
              it takes to preserve our planet for future generations.`),He=o(),me=s("div"),Ce=s("div"),Fe=f("From the People"),Oe=o(),be=s("div"),et=f(`We are no longer falling for flashy ad campaigns and PR-led trickery. We are wise to the tactics that corporations
              use to distract from their harmful actions. We are keeping a close eye on the leaders who perpetuate this cycle of
              deception, and they will be held accountable for their actions. In fact, the charge for corporate manslaughter is
              not out of the question - what about charges for the countless lives affected on earth?`),Ye=o(),st=s("div"),V=s("div"),B=f("From PFP"),U=o(),K=s("div"),X=f("Dear Shell et al,"),re=o(),H=s("div"),Se=f(`You have the power to make a real difference. Instead of spending millions of dollars on PR campaigns that only
              serve to create the impression that you care about the environment, why not put your resources to work on projects
              that actually remove CO2 from the atmosphere? You could take non-recyclable waste and turn it into green energy,
              providing a secure supply of energy while also enhancing the environment. Your brand could be the one that
              sponsors this initiative. The time for action is now - let us make a difference before it's too late.`),Te=o(),ne=s("div"),ye=s("div"),ut=f("Copyright © 2023 Power for Planet"),we=o(),se=s("div"),qe=s("div"),$e=f("Privacy Policy"),Ge=o(),_e=s("div"),Ue=s("img"),Ne=o(),Je=s("img"),Lt=o(),ze=s("img"),this.h()},l(Pt){l=r(Pt,"DIV",{class:!0});var Ve=n(l);i=r(Ve,"DIV",{class:!0});var lt=n(i);u=r(lt,"DIV",{class:!0});var rt=n(u);v=r(rt,"DIV",{class:!0});var Dt=n(v);g=r(Dt,"DIV",{class:!0});var gt=n(g);x=r(gt,"A",{href:!0});var Gt=n(x);m=r(Gt,"DIV",{class:!0});var ft=n(m);h=p(ft,"News"),ft.forEach(a),Gt.forEach(a),E=c(gt),y=r(gt,"DIV",{class:!0});var Nt=n(y);P=p(Nt,'The "Great Greenwashing” of 2023'),Nt.forEach(a),gt.forEach(a),Dt.forEach(a),D=c(rt),I=r(rt,"DIV",{class:!0});var Vt=n(I);_=r(Vt,"DIV",{class:!0}),n(_).forEach(a),F=c(Vt),k=r(Vt,"DIV",{class:!0});var ie=n(k);A=r(ie,"DIV",{class:!0});var pt=n(A);G=r(pt,"DIV",{class:!0});var kt=n(G);j=r(kt,"DIV",{class:!0});var Yt=n(j);b=p(Yt,"March 6, 2023"),Yt.forEach(a),kt.forEach(a),L=c(pt),w=r(pt,"DIV",{class:!0});var it=n(w);R=p(it,'The "Great Greenwashing” of 2023'),it.forEach(a),pt.forEach(a),O=c(ie),C=r(ie,"DIV",{class:!0});var ht=n(C);M=r(ht,"DIV",{class:!0});var Zt=n(M);W=p(Zt,"From Euronews green"),Zt.forEach(a),Y=c(ht),q=r(ht,"DIV",{class:!0});var Tt=n(q);oe=p(Tt,`In recent news, Lufthansa released a poster reading "Protecting the Planet", featuring a plane overlaid on an
              image of the Earth, which was rapidly banned in the UK for misleading consumers about the airline's environmental
              impact. While Lufthansa has set a goal to become carbon neutral by 2050 and has invested in sustainable aviation
              fuel and carbon offset programs, there are currently no environmental initiatives or commercially viable
              technologies in the aviation industry which would substantiate the green claim "protecting the future".`),Tt.forEach(a),ve=c(ht),z=r(ht,"DIV",{class:!0});var at=n(z);$=r(at,"DIV",{class:!0});var At=n($);ae=p(At,"From the Guardian"),At.forEach(a),Ee=c(at),ce=r(at,"DIV",{class:!0});var Qe=n(ce);Xe=p(Qe,`A recent investigation has revealed troubling news about forest carbon offsets. The world's leading certifier,
                Verra, relied upon by major corporations like Disney, Shell, Gucci have been approving offset projects that are
                largely ineffective at combating climate change.`),Qe.forEach(a),de=c(at),te=r(at,"DIV",{class:!0});var _t=n(te);ge=p(_t,`The investigation analysed a significant percentage of Verra's projects and found that over 90% of the
                rainforest offset credits - which are among the most commonly used by companies - are likely to be "phantom
                credits". These credits do not represent genuine carbon reductions, which means that the purported benefits of
                these offsets are largely worthless.`),_t.forEach(a),at.forEach(a),ht.forEach(a),Ae=c(ie),Ie=r(ie,"DIV",{class:!0});var dt=n(Ie);ue=r(dt,"DIV",{class:!0});var Wt=n(ue);je=p(Wt,"From journalist Robin Hicks"),Wt.forEach(a),fe=c(dt),N=r(dt,"DIV",{class:!0});var es=n(N);Q=p(es,`Meanwhile, the South Korean government has said it will start taking action against companies that make misleading
              sustainability claims. It is a first-of-its-kind move in Asia and other governments and regulatory bodies should
              take note and follow suit.`),es.forEach(a),De=c(dt),pe=r(dt,"DIV",{class:!0});var mt=n(pe);xe=p(mt,`Under a draft new law, companies that mislead the public about their environmental impact will face fines of up to
              KRW3 million (£1,920). The news comes four months after the country’s largest oil and gas company SK E&C was
              forced to modify a marketing campaign that claimed the firm would produce “CO2-free” liquefied natural gas at a
              planned plant in northern Australia.`),mt.forEach(a),dt.forEach(a),he=c(ie),le=r(ie,"DIV",{class:!0});var Me=n(le);J=r(Me,"DIV",{class:!0});var ot=n(J);Re=p(ot,"From the Planet"),ot.forEach(a),Le=c(Me),Pe=r(Me,"DIV",{class:!0});var Mt=n(Pe);ee=p(Mt,`The environmental harm caused by humans has led to a rapid acceleration of natural changes in my climate system.
              Of course, as a planet, I will still be here for quite some time - around 7.5 billion years, give or take a
              millennium. But unfortunately, the same cannot be said for the multitude of life forms, particularly the human
              species. Climate extremes will soon become the norm and coping with them will be a tremendous challenge.`),Mt.forEach(a),We=c(Me),ke=r(Me,"DIV",{class:!0});var Et=n(ke);Z=p(Et,`However, if humanity chooses to prioritise environmental repair over damage, there is a chance we can mitigate the
              worst effects of climate change. It will require more than just PR stunts and lip service. Real, substantive
              action is what's necessary - action that shows a genuine concern for the environment and a willingness to do what
              it takes to preserve our planet for future generations.`),Et.forEach(a),Me.forEach(a),He=c(ie),me=r(ie,"DIV",{class:!0});var xt=n(me);Ce=r(xt,"DIV",{class:!0});var vt=n(Ce);Fe=p(vt,"From the People"),vt.forEach(a),Oe=c(xt),be=r(xt,"DIV",{class:!0});var Bt=n(be);et=p(Bt,`We are no longer falling for flashy ad campaigns and PR-led trickery. We are wise to the tactics that corporations
              use to distract from their harmful actions. We are keeping a close eye on the leaders who perpetuate this cycle of
              deception, and they will be held accountable for their actions. In fact, the charge for corporate manslaughter is
              not out of the question - what about charges for the countless lives affected on earth?`),Bt.forEach(a),xt.forEach(a),Ye=c(ie),st=r(ie,"DIV",{class:!0});var bt=n(st);V=r(bt,"DIV",{class:!0});var Ft=n(V);B=p(Ft,"From PFP"),Ft.forEach(a),U=c(bt),K=r(bt,"DIV",{class:!0});var Jt=n(K);X=p(Jt,"Dear Shell et al,"),Jt.forEach(a),re=c(bt),H=r(bt,"DIV",{class:!0});var Rt=n(H);Se=p(Rt,`You have the power to make a real difference. Instead of spending millions of dollars on PR campaigns that only
              serve to create the impression that you care about the environment, why not put your resources to work on projects
              that actually remove CO2 from the atmosphere? You could take non-recyclable waste and turn it into green energy,
              providing a secure supply of energy while also enhancing the environment. Your brand could be the one that
              sponsors this initiative. The time for action is now - let us make a difference before it's too late.`),Rt.forEach(a),bt.forEach(a),ie.forEach(a),Vt.forEach(a),rt.forEach(a),lt.forEach(a),Te=c(Ve),ne=r(Ve,"DIV",{class:!0});var qt=n(ne);ye=r(qt,"DIV",{class:!0});var zt=n(ye);ut=p(zt,"Copyright © 2023 Power for Planet"),zt.forEach(a),we=c(qt),se=r(qt,"DIV",{class:!0});var Ct=n(se);qe=r(Ct,"DIV",{class:!0});var $t=n(qe);$e=p($t,"Privacy Policy"),$t.forEach(a),Ge=c(Ct),_e=r(Ct,"DIV",{class:!0});var St=n(_e);Ue=r(St,"IMG",{src:!0,alt:!0,class:!0}),Ne=c(St),Je=r(St,"IMG",{src:!0,alt:!0,class:!0}),Lt=c(St),ze=r(St,"IMG",{src:!0,alt:!0,class:!0}),St.forEach(a),Ct.forEach(a),qt.forEach(a),Ve.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(y,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(_,"class","bg-cover bg-center bg-[url('/assets/new/4.png')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(j,"class","uppercase"),t(G,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(w,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(M,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(q,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t($,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(ce,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(te,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(z,"class","w-full flex-col flex items-start gap-3"),t(C,"class","w-full flex-col flex items-start gap-6"),t(ue,"class","text-xl leading-[34px] font-bold font-Poppins"),t(N,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(pe,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Ie,"class","w-full flex-col flex items-start gap-3"),t(J,"class","text-xl leading-[34px] font-bold font-Poppins"),t(Pe,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ke,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(le,"class","w-full flex-col flex items-start gap-3"),t(Ce,"class","text-xl leading-[34px] font-bold font-Poppins"),t(be,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(me,"class","w-full flex-col flex items-start gap-3"),t(V,"class","text-xl leading-[34px] font-bold font-Poppins"),t(K,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(H,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(st,"class","w-full flex-col flex items-start gap-3"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(I,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(ye,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(qe,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Ue.src,ct="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ue,"src",ct),t(Ue,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Ue,"class","h-6 w-6"),S(Je.src,jt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Je,"src",jt),t(Je,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Je,"class","h-6 w-6"),S(ze.src,wt="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ze,"src",wt),t(ze,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(ze,"class","h-6 w-6"),t(_e,"class","flex items-center gap-5"),t(se,"class","flex-1 flex justify-end items-center gap-10"),t(ne,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(Pt,Ve){Ze(Pt,l,Ve),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,E),e(g,y),e(y,P),e(u,D),e(u,I),e(I,_),e(I,F),e(I,k),e(k,A),e(A,G),e(G,j),e(j,b),e(A,L),e(A,w),e(w,R),e(k,O),e(k,C),e(C,M),e(M,W),e(C,Y),e(C,q),e(q,oe),e(C,ve),e(C,z),e(z,$),e($,ae),e(z,Ee),e(z,ce),e(ce,Xe),e(z,de),e(z,te),e(te,ge),e(k,Ae),e(k,Ie),e(Ie,ue),e(ue,je),e(Ie,fe),e(Ie,N),e(N,Q),e(Ie,De),e(Ie,pe),e(pe,xe),e(k,he),e(k,le),e(le,J),e(J,Re),e(le,Le),e(le,Pe),e(Pe,ee),e(le,We),e(le,ke),e(ke,Z),e(k,He),e(k,me),e(me,Ce),e(Ce,Fe),e(me,Oe),e(me,be),e(be,et),e(k,Ye),e(k,st),e(st,V),e(V,B),e(st,U),e(st,K),e(K,X),e(st,re),e(st,H),e(H,Se),e(l,Te),e(l,ne),e(ne,ye),e(ye,ut),e(ne,we),e(ne,se),e(se,qe),e(qe,$e),e(se,Ge),e(se,_e),e(_e,Ue),e(_e,Ne),e(_e,Je),e(_e,Lt),e(_e,ze)},p:Be,i:Be,o:Be,d(Pt){Pt&&a(l)}}}class b6 extends In{constructor(l){super(),Dn(this,l,null,x6,ja,{})}}function y6(d){let l,i,u,v,g,x,m,h,E,y,P,D,I,_,F,k,A,G,j,b,L,w,R,O,C,M,W,Y,q,oe,ve,z,$,ae,Ee,ce,Xe,de,te,ge,Ae,Ie,ue,je,fe,N,Q,De,pe,xe,he,le,J,Re,Le,Pe,ee,We,ke,Z,He,me,Ce,Fe,Oe,be,et,Ye,st,V,B,U,K,X,re,H,Se,Te,ne,ye,ut,we,se,qe,$e,Ge,_e,Ue,ct,Ne,Je,jt,Lt,ze,wt,Pt,Ve,lt,rt,Dt,gt,Gt,ft,Nt,Vt,ie,pt,kt,Yt,it,ht,Zt,Tt,at,At,Qe,_t,dt,Wt,es,mt,Me,ot,Mt,Et,xt,vt,Bt,bt,Ft,Jt,Rt,qt,zt,Ct,$t,St,rr,os,Ut,nt,Xt,fs,Ss,Ts,As,It,bs,ts,ps,Pr,Na,rs,ys,Ur,Ys,br,Kt,Fs,Ws,Ba,ua,fa,kr,js,Hr,ws,_s,Vn,Ra,as,zs,ii,qa,Ks,oi,$a,ns,Pn;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("Contact us"),x=o(),m=s("div"),h=s("div"),E=s("div"),y=f("Contact us and turn your green energy vision into reality"),P=o(),D=s("div"),I=s("div"),_=s("button"),F=s("div"),k=s("div"),A=s("img"),j=o(),b=s("div"),L=f("Schedule a conversation with us"),w=o(),R=s("div"),O=s("img"),M=o(),W=s("div"),Y=s("iframe"),oe=o(),ve=s("div"),z=s("button"),$=s("div"),ae=s("div"),Ee=s("img"),Xe=o(),de=s("div"),te=f("Message us through our contact form"),ge=o(),Ae=s("div"),Ie=s("img"),je=o(),fe=s("form"),N=s("div"),Q=s("div"),De=s("div"),pe=s("div"),xe=f("Name*"),he=o(),le=s("div"),J=s("input"),Re=o(),Le=s("div"),Pe=s("div"),ee=f("Email*"),We=o(),ke=s("div"),Z=s("input"),He=o(),me=s("div"),Ce=s("div"),Fe=s("div"),Oe=f("Organization/Company name (optional)"),be=o(),et=s("div"),Ye=s("input"),st=o(),V=s("div"),B=s("div"),U=f("Type of query/contact*"),K=o(),X=s("div"),re=s("div"),H=f("Select..."),Se=o(),Te=s("img"),ye=o(),ut=s("div"),we=s("div"),se=s("div"),qe=f("Your message*"),$e=o(),Ge=s("div"),_e=s("textarea"),Ue=o(),ct=s("input"),Ne=o(),Je=s("input"),jt=o(),Lt=s("input"),ze=o(),wt=s("input"),Pt=o(),Ve=s("input"),lt=o(),rt=s("button"),Dt=s("div"),gt=s("img"),ft=f(`
                    Send message`),Nt=o(),Vt=s("script"),ie=f(`function toggleElement(k) {
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[1000px]')
              toggleElementX(k)
            }

            function toggleElement2(k) {
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[500px]')
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
            }, 1000)`),pt=o(),kt=s("div"),Yt=s("div"),it=s("div"),ht=f("Find us"),Zt=o(),Tt=s("div"),at=s("div"),At=s("div"),Qe=s("div"),_t=s("div"),dt=s("img"),es=o(),mt=s("div"),Me=s("div"),ot=s("div"),Mt=f("Power for Planet"),Et=o(),xt=s("div"),vt=f("78 Pall Mall SW1Y 5ES London, United Kingdom"),Bt=o(),bt=s("a"),Ft=s("img"),Rt=o(),qt=s("div"),zt=s("div"),Ct=s("div"),$t=s("img"),rr=o(),os=s("div"),Ut=s("div"),nt=s("div"),Xt=f("Contact us"),fs=o(),Ss=s("div"),Ts=f("+44 7796 302 102 dermot@powerforplanet.com"),As=o(),It=s("div"),bs=s("div"),ts=s("div"),ps=s("div"),Pr=f("Follow us on social media"),Na=o(),rs=s("div"),ys=s("img"),Ys=o(),br=s("img"),Fs=o(),Ws=s("img"),ua=o(),fa=s("div"),kr=s("div"),js=f("Copyright © 2023 Power for Planet"),Hr=o(),ws=s("div"),_s=s("div"),Vn=f("Privacy Policy"),Ra=o(),as=s("div"),zs=s("img"),qa=o(),Ks=s("img"),$a=o(),ns=s("img"),this.h()},l(yr){l=r(yr,"DIV",{class:!0});var Js=n(l);i=r(Js,"DIV",{class:!0});var ar=n(i);u=r(ar,"DIV",{class:!0});var ci=n(u);v=r(ci,"DIV",{});var pa=n(v);g=p(pa,"Contact us"),pa.forEach(a),ci.forEach(a),x=c(ar),m=r(ar,"DIV",{class:!0});var Qt=n(m);h=r(Qt,"DIV",{class:!0});var Xs=n(h);E=r(Xs,"DIV",{class:!0});var nr=n(E);y=p(nr,"Contact us and turn your green energy vision into reality"),nr.forEach(a),P=c(Xs),D=r(Xs,"DIV",{class:!0});var lr=n(D);I=r(lr,"DIV",{class:!0});var ir=n(I);_=r(ir,"BUTTON",{onclick:!0});var Sr=n(_);F=r(Sr,"DIV",{class:!0});var vs=n(F);k=r(vs,"DIV",{id:!0,class:!0});var cs=n(k);A=r(cs,"IMG",{src:!0,alt:!0,class:!0}),cs.forEach(a),j=c(vs),b=r(vs,"DIV",{class:!0});var nl=n(b);L=p(nl,"Schedule a conversation with us"),nl.forEach(a),w=c(vs),R=r(vs,"DIV",{class:!0});var di=n(R);O=r(di,"IMG",{id:!0,src:!0,alt:!0,class:!0}),di.forEach(a),vs.forEach(a),Sr.forEach(a),M=c(ir),W=r(ir,"DIV",{id:!0,class:!0});var Yr=n(W);Y=r(Yr,"IFRAME",{style:!0,height:!0,width:!0,frameborder:!0,src:!0,title:!0}),n(Y).forEach(a),Yr.forEach(a),ir.forEach(a),oe=c(lr),ve=r(lr,"DIV",{class:!0});var ss=n(ve);z=r(ss,"BUTTON",{onclick:!0});var ui=n(z);$=r(ui,"DIV",{class:!0});var Tr=n($);ae=r(Tr,"DIV",{id:!0,class:!0});var Wr=n(ae);Ee=r(Wr,"IMG",{src:!0,alt:!0,class:!0}),Wr.forEach(a),Xe=c(Tr),de=r(Tr,"DIV",{class:!0});var fi=n(de);te=p(fi,"Message us through our contact form"),fi.forEach(a),ge=c(Tr),Ae=r(Tr,"DIV",{class:!0});var ll=n(Ae);Ie=r(ll,"IMG",{id:!0,src:!0,alt:!0,class:!0}),ll.forEach(a),Tr.forEach(a),ui.forEach(a),je=c(ss),fe=r(ss,"FORM",{id:!0,class:!0,action:!0,method:!0});var lo=n(fe);N=r(lo,"DIV",{class:!0});var ls=n(N);Q=r(ls,"DIV",{class:!0});var Es=n(Q);De=r(Es,"DIV",{class:!0});var Ar=n(De);pe=r(Ar,"DIV",{class:!0});var Ua=n(pe);xe=p(Ua,"Name*"),Ua.forEach(a),he=c(Ar),le=r(Ar,"DIV",{class:!0});var Ht=n(le);J=r(Ht,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),Ht.forEach(a),Ar.forEach(a),Re=c(Es),Le=r(Es,"DIV",{class:!0});var or=n(Le);Pe=r(or,"DIV",{class:!0});var wr=n(Pe);ee=p(wr,"Email*"),wr.forEach(a),We=c(or),ke=r(or,"DIV",{class:!0});var cr=n(ke);Z=r(cr,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),cr.forEach(a),or.forEach(a),Es.forEach(a),He=c(ls),me=r(ls,"DIV",{class:!0});var Os=n(me);Ce=r(Os,"DIV",{class:!0});var Fr=n(Ce);Fe=r(Fr,"DIV",{class:!0});var va=n(Fe);Oe=p(va,"Organization/Company name (optional)"),va.forEach(a),be=c(Fr),et=r(Fr,"DIV",{class:!0});var kn=n(et);Ye=r(kn,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),kn.forEach(a),Fr.forEach(a),st=c(Os),V=r(Os,"DIV",{class:!0});var il=n(V);B=r(il,"DIV",{class:!0});var Qs=n(B);U=p(Qs,"Type of query/contact*"),Qs.forEach(a),K=c(il),X=r(il,"DIV",{class:!0});var is=n(X);re=r(is,"DIV",{class:!0});var Rl=n(re);H=p(Rl,"Select..."),Rl.forEach(a),Se=c(is),Te=r(is,"IMG",{src:!0,alt:!0,class:!0}),is.forEach(a),il.forEach(a),Os.forEach(a),ye=c(ls),ut=r(ls,"DIV",{class:!0});var pi=n(ut);we=r(pi,"DIV",{class:!0});var ds=n(we);se=r(ds,"DIV",{class:!0});var zr=n(se);qe=p(zr,"Your message*"),zr.forEach(a),$e=c(ds),Ge=r(ds,"DIV",{class:!0});var Sn=n(Ge);_e=r(Sn,"TEXTAREA",{class:!0,name:!0}),n(_e).forEach(a),Sn.forEach(a),ds.forEach(a),pi.forEach(a),Ue=c(ls),ct=r(ls,"INPUT",{type:!0,name:!0,style:!0}),Ne=c(ls),Je=r(ls,"INPUT",{type:!0,name:!0}),jt=c(ls),Lt=r(ls,"INPUT",{type:!0,name:!0}),ze=c(ls),wt=r(ls,"INPUT",{type:!0,name:!0}),Pt=c(ls),Ve=r(ls,"INPUT",{type:!0,name:!0,id:!0}),lt=c(ls),rt=r(ls,"BUTTON",{type:!0});var dr=n(rt);Dt=r(dr,"DIV",{class:!0});var Ha=n(Dt);gt=r(Ha,"IMG",{src:!0,alt:!0,class:!0}),ft=p(Ha,`
                    Send message`),Ha.forEach(a),dr.forEach(a),ls.forEach(a),lo.forEach(a),ss.forEach(a),Nt=c(lr),Vt=r(lr,"SCRIPT",{});var vi=n(Vt);ie=p(vi,`function toggleElement(k) {
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[1000px]')
              toggleElementX(k)
            }

            function toggleElement2(k) {
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[500px]')
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
            }, 1000)`),vi.forEach(a),lr.forEach(a),Xs.forEach(a),pt=c(Qt),kt=r(Qt,"DIV",{class:!0});var ur=n(kt);Yt=r(ur,"DIV",{class:!0});var gs=n(Yt);it=r(gs,"DIV",{});var Zs=n(it);ht=p(Zs,"Find us"),Zs.forEach(a),gs.forEach(a),Zt=c(ur),Tt=r(ur,"DIV",{class:!0});var Is=n(Tt);at=r(Is,"DIV",{class:!0});var Ls=n(at);At=r(Ls,"DIV",{class:!0});var Or=n(At);Qe=r(Or,"DIV",{class:!0});var Ya=n(Qe);_t=r(Ya,"DIV",{class:!0});var gi=n(_t);dt=r(gi,"IMG",{src:!0,alt:!0,class:!0}),gi.forEach(a),es=c(Ya),mt=r(Ya,"DIV",{class:!0});var fr=n(mt);Me=r(fr,"DIV",{class:!0});var Ns=n(Me);ot=r(Ns,"DIV",{class:!0});var Ds=n(ot);Mt=p(Ds,"Power for Planet"),Ds.forEach(a),Et=c(Ns),xt=r(Ns,"DIV",{class:!0});var Lr=n(xt);vt=p(Lr,"78 Pall Mall SW1Y 5ES London, United Kingdom"),Lr.forEach(a),Bt=c(Ns),bt=r(Ns,"A",{href:!0,target:!0});var Tn=n(bt);Ft=r(Tn,"IMG",{src:!0,class:!0}),Tn.forEach(a),Ns.forEach(a),fr.forEach(a),Ya.forEach(a),Or.forEach(a),Rt=c(Ls),qt=r(Ls,"DIV",{class:!0});var An=n(qt);zt=r(An,"DIV",{class:!0});var Wa=n(zt);Ct=r(Wa,"DIV",{class:!0});var hi=n(Ct);$t=r(hi,"IMG",{src:!0,alt:!0,class:!0}),hi.forEach(a),rr=c(Wa),os=r(Wa,"DIV",{class:!0});var hs=n(os);Ut=r(hs,"DIV",{class:!0});var Vs=n(Ut);nt=r(Vs,"DIV",{class:!0});var Kr=n(nt);Xt=p(Kr,"Contact us"),Kr.forEach(a),fs=c(Vs),Ss=r(Vs,"DIV",{class:!0});var io=n(Ss);Ts=p(io,"+44 7796 302 102 dermot@powerforplanet.com"),io.forEach(a),Vs.forEach(a),hs.forEach(a),Wa.forEach(a),An.forEach(a),Ls.forEach(a),As=c(Is),It=r(Is,"DIV",{class:!0});var mi=n(It);bs=r(mi,"DIV",{class:!0});var Fn=n(bs);ts=r(Fn,"DIV",{class:!0});var er=n(ts);ps=r(er,"DIV",{class:!0});var pr=n(ps);Pr=p(pr,"Follow us on social media"),pr.forEach(a),Na=c(er),rs=r(er,"DIV",{class:!0});var _r=n(rs);ys=r(_r,"IMG",{src:!0,alt:!0,class:!0}),Ys=c(_r),br=r(_r,"IMG",{src:!0,alt:!0,class:!0}),Fs=c(_r),Ws=r(_r,"IMG",{src:!0,alt:!0,class:!0}),_r.forEach(a),er.forEach(a),Fn.forEach(a),mi.forEach(a),Is.forEach(a),ur.forEach(a),Qt.forEach(a),ua=c(ar),fa=r(ar,"DIV",{class:!0});var tr=n(fa);kr=r(tr,"DIV",{class:!0});var ol=n(kr);js=p(ol,"Copyright © 2023 Power for Planet"),ol.forEach(a),Hr=c(tr),ws=r(tr,"DIV",{class:!0});var Cr=n(ws);_s=r(Cr,"DIV",{class:!0});var Jr=n(_s);Vn=p(Jr,"Privacy Policy"),Jr.forEach(a),Ra=c(Cr),as=r(Cr,"DIV",{class:!0});var Bs=n(as);zs=r(Bs,"IMG",{src:!0,alt:!0,class:!0}),qa=c(Bs),Ks=r(Bs,"IMG",{src:!0,alt:!0,class:!0}),$a=c(Bs),ns=r(Bs,"IMG",{src:!0,alt:!0,class:!0}),Bs.forEach(a),Cr.forEach(a),tr.forEach(a),ar.forEach(a),Js.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),t(E,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(A.src,G="/assets/new/calendar-days.svg")||t(A,"src",G),t(A,"alt","calendar-days"),t(A,"class","h-10 w-10 grayscale contrast-200 invert"),t(k,"id","calendar-heading"),t(k,"class","bg-pfp-green bg-none duration-100 flex justify-center items-center gap-2.5 px-[50px] py-8 rounded-l-[20px]"),t(b,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins w-[596px]"),t(O,"id","calendar-chevron"),S(O.src,C="/assets/new/chevron-down.svg")||t(O,"src",C),t(O,"alt","chevron-down"),t(O,"class","h-6 w-6 rotate-180 duration-180"),t(R,"class","flex items-center gap-2.5 pl-[50px]"),t(F,"class","w-full flex items-center gap-[50px] pr-[50px]"),t(_,"onclick","toggleElement('calendar')"),T(Y,"background","none"),T(Y,"filter","contrast(1.07)"),T(Y,"margin-bottom","-100px"),t(Y,"height","1100"),t(Y,"width","100%"),t(Y,"frameborder","0"),Y.allowFullscreen="",S(Y.src,q="https://calendly.com/csaladenes-6ee/30min?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=394e6a&primary_color=3f9378&back=1&month=2023-07")||t(Y,"src",q),t(Y,"title","book"),t(W,"id","calendar"),t(W,"class","bg-none overflow-hidden duration-300 h-[0px] w-full"),t(I,"class","bg-[#e7f5f5] w-full pt-[0px] flex-col flex justify-center items-center rounded-[20px] align-top"),S(Ee.src,ce="/assets/new/mail.svg")||t(Ee,"src",ce),t(Ee,"alt","mail"),t(Ee,"class","h-10 w-10 grayscale contrast-200 invert"),t(ae,"id","contactform-heading"),t(ae,"class","bg-pfp-green bg-none duration-100 flex justify-center items-center gap-2.5 px-[50px] py-8 rounded-l-[20px]"),t(de,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins w-[596px]"),t(Ie,"id","contactform-chevron"),S(Ie.src,ue="/assets/new/chevron-down.svg")||t(Ie,"src",ue),t(Ie,"alt","chevron-down"),t(Ie,"class","h-6 w-6 rotate-180 duration-180"),t(Ae,"class","flex items-center gap-2.5 pl-[50px]"),t($,"class","w-full flex items-center gap-[50px] pr-[50px]"),t(z,"onclick","toggleElement2('contactform')"),t(pe,"class","text-sm font-bold"),t(J,"class","w-[299px]"),t(J,"type","text"),t(J,"name","name"),t(J,"placeholder","Your Name"),J.required=!0,t(le,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium"),t(De,"class","flex-1 flex-col flex items-start gap-2"),t(Pe,"class","text-sm font-bold"),t(Z,"class","w-[299px]"),t(Z,"type","email"),t(Z,"name","email"),t(Z,"placeholder","Your email"),Z.required=!0,t(ke,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium"),t(Le,"class","flex-1 flex-col flex items-start gap-2"),t(Q,"class","w-[600px] flex justify-center items-center gap-[30px] leading-[26px] text-[#2e3855] font-PublicSans"),t(Fe,"class","text-sm font-bold"),t(Ye,"class","w-[299px]"),t(Ye,"type","text"),t(Ye,"name","company"),t(Ye,"placeholder","Your company"),t(et,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium"),t(Ce,"class","flex-1 flex-col flex items-start gap-2 leading-[26px] text-[#2e3855] font-PublicSans"),t(B,"class","text-sm leading-[26px] font-bold text-[#2e3855] font-PublicSans"),t(re,"class","text-base leading-[26px] font-medium text-[#909090] font-PublicSans w-[265px]"),S(Te.src,ne="/assets/new/chevron-down.svg")||t(Te,"src",ne),t(Te,"alt","chevron-down"),t(Te,"class","h-6 w-6"),t(X,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855]"),t(V,"class","flex-1 flex-col flex items-start gap-2"),t(me,"class","w-[700px] flex justify-center items-center gap-[30px]"),t(se,"class","text-sm font-bold text-[#2e3855]"),t(_e,"class","w-[664px] min-h-[150px] "),t(_e,"name","message"),_e.required=!0,t(Ge,"class","bg-white min-h-[150px] w-full flex-1 flex items-start gap-2.5 rounded-[6px] p-4 border border-[#2e3855] text-base font-medium text-[#909090]"),t(we,"class","h-full flex-1 flex-col flex items-start gap-2"),t(ut,"class","w-[600px] h-5/12 flex justify-center items-center gap-[30px] leading-[26px] font-PublicSans"),t(ct,"type","text"),t(ct,"name","honeypot"),T(ct,"display","none"),t(Je,"type","hidden"),t(Je,"name","accessKey"),Je.value="b3ab5267-ffe0-4a59-be25-07b9a27e4335",t(Lt,"type","hidden"),t(Lt,"name","subject"),Lt.value="PFP Contact us form submission",t(wt,"type","hidden"),t(wt,"name","replyTo"),wt.value="@",t(Ve,"type","hidden"),t(Ve,"name","redirectTo"),t(Ve,"id","redirect"),S(gt.src,Gt="/assets/new/arrow-right-circle.svg")||t(gt,"src",Gt),t(gt,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(gt,"class","h-5 w-5"),t(Dt,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(rt,"type","submit"),t(N,"class","overflow-hidden flex-col flex justify-center items-center gap-[30px] pb-10 rounded-[20px] z-[2]"),t(fe,"id","contactform"),t(fe,"class","bg-none overflow-hidden duration-300 h-[0px] w-full"),t(fe,"action","https://api.staticforms.xyz/submit"),t(fe,"method","post"),t(ve,"class","bg-[#e7f5f5] w-full pt-[0px] flex-col flex justify-center items-center rounded-[20px] align-top"),t(D,"class","w-full flex-col gap-5 flex items-center"),t(h,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(Yt,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(dt.src,Wt="/assets/new/map-pin.svg")||t(dt,"src",Wt),t(dt,"alt","map-pin"),t(dt,"class","h-10 w-10"),t(_t,"class","bg-[#2e3855] flex justify-center items-center gap-2.5 p-5 rounded-[40px]"),t(ot,"class","text-xl leading-[34px] font-Poppins w-[390px]"),t(xt,"class","text-sm leading-[26px] font-PublicSans w-[390px]"),S(Ft.src,Jt="/assets/new/map.png")||t(Ft,"src",Jt),t(Ft,"class","mt-5"),t(bt,"href","https://www.google.com/maps/place/78+Pall+Mall,+St.+James's,+London+SW1Y+5ES/@51.5057924,-0.1362653,19z/data=!4m6!3m5!1s0x487604d7477ba0bb:0x5ecb442822d2e0e!8m2!3d51.5056999!4d-0.1359853!16s%2Fg%2F1tj90_zr?entry=ttu"),t(bt,"target","_blank"),t(Me,"class","w-full flex-col flex items-center"),t(mt,"class","w-full flex-col flex items-start gap-2 font-bold text-center text-[#2e3855]"),t(Qe,"class","w-full flex-col flex justify-center items-center gap-6"),t(At,"class","h-full bg-[#e7f5f5] flex-1 flex-col flex items-center gap-6 p-10 rounded-[20px]"),S($t.src,St="/assets/new/message-circle.svg")||t($t,"src",St),t($t,"alt","message-circle"),t($t,"class","h-10 w-10"),t(Ct,"class","bg-[#2e3855] flex justify-center items-center gap-2.5 p-5 rounded-[40px]"),t(nt,"class","text-xl leading-[34px] font-Poppins w-[390px]"),t(Ss,"class","text-sm leading-[26px] font-PublicSans h-[52px] w-[390px]"),t(Ut,"class","w-full flex-col h-full flex items-start"),t(os,"class","w-full flex-col flex items-start gap-2 font-bold text-center text-[#2e3855]"),t(zt,"class","w-full flex-1 flex-col flex items-center gap-6"),t(qt,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-center gap-6 p-10 pb-20 rounded-[20px]"),t(at,"class","w-full flex items-start gap-5"),t(ps,"class","text-xl leading-[34px] font-bold text-center text-[#2e3855] font-Poppins"),S(ys.src,Ur="/assets/new/mdi_linkedin.svg")||t(ys,"src",Ur),t(ys,"alt","mdi:linkedin"),t(ys,"class","h-10 w-10"),S(br.src,Kt="/assets/new/mdi_twitter.svg")||t(br,"src",Kt),t(br,"alt","mdi:twitter"),t(br,"class","h-10 w-10"),S(Ws.src,Ba="/assets/new/mdi_instagram.svg")||t(Ws,"src",Ba),t(Ws,"alt","mdi:instagram"),t(Ws,"class","h-10 w-10"),t(rs,"class","flex justify-center items-center gap-4"),t(ts,"class","w-full flex justify-center items-center gap-10"),t(bs,"class","bg-[#e7f5f5] flex-1 flex-col flex items-center gap-6 p-10 rounded-[20px]"),t(It,"class","w-full flex items-start gap-5"),t(Tt,"class","w-full flex-col flex items-center gap-5"),t(kt,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(m,"class","w-full flex-col flex items-start gap-5"),t(kr,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(_s,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(zs.src,ii="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(zs,"src",ii),t(zs,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(zs,"class","h-6 w-6"),S(Ks.src,oi="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ks,"src",oi),t(Ks,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Ks,"class","h-6 w-6"),S(ns.src,Pn="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ns,"src",Pn),t(ns,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(ns,"class","h-6 w-6"),t(as,"class","flex items-center gap-5"),t(ws,"class","flex-1 flex justify-end items-center gap-10"),t(fa,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col w-full flex items-start gap-[60px] max-w-[1060px] rounded-[20px]"),t(l,"class","flex-col flex items-center gap-10 h-fit mt-20")},m(yr,Js){Ze(yr,l,Js),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,E),e(E,y),e(h,P),e(h,D),e(D,I),e(I,_),e(_,F),e(F,k),e(k,A),e(F,j),e(F,b),e(b,L),e(F,w),e(F,R),e(R,O),e(I,M),e(I,W),e(W,Y),e(D,oe),e(D,ve),e(ve,z),e(z,$),e($,ae),e(ae,Ee),e($,Xe),e($,de),e(de,te),e($,ge),e($,Ae),e(Ae,Ie),e(ve,je),e(ve,fe),e(fe,N),e(N,Q),e(Q,De),e(De,pe),e(pe,xe),e(De,he),e(De,le),e(le,J),e(Q,Re),e(Q,Le),e(Le,Pe),e(Pe,ee),e(Le,We),e(Le,ke),e(ke,Z),e(N,He),e(N,me),e(me,Ce),e(Ce,Fe),e(Fe,Oe),e(Ce,be),e(Ce,et),e(et,Ye),e(me,st),e(me,V),e(V,B),e(B,U),e(V,K),e(V,X),e(X,re),e(re,H),e(X,Se),e(X,Te),e(N,ye),e(N,ut),e(ut,we),e(we,se),e(se,qe),e(we,$e),e(we,Ge),e(Ge,_e),e(N,Ue),e(N,ct),e(N,Ne),e(N,Je),e(N,jt),e(N,Lt),e(N,ze),e(N,wt),e(N,Pt),e(N,Ve),e(N,lt),e(N,rt),e(rt,Dt),e(Dt,gt),e(Dt,ft),e(D,Nt),e(D,Vt),e(Vt,ie),e(m,pt),e(m,kt),e(kt,Yt),e(Yt,it),e(it,ht),e(kt,Zt),e(kt,Tt),e(Tt,at),e(at,At),e(At,Qe),e(Qe,_t),e(_t,dt),e(Qe,es),e(Qe,mt),e(mt,Me),e(Me,ot),e(ot,Mt),e(Me,Et),e(Me,xt),e(xt,vt),e(Me,Bt),e(Me,bt),e(bt,Ft),e(at,Rt),e(at,qt),e(qt,zt),e(zt,Ct),e(Ct,$t),e(zt,rr),e(zt,os),e(os,Ut),e(Ut,nt),e(nt,Xt),e(Ut,fs),e(Ut,Ss),e(Ss,Ts),e(Tt,As),e(Tt,It),e(It,bs),e(bs,ts),e(ts,ps),e(ps,Pr),e(ts,Na),e(ts,rs),e(rs,ys),e(rs,Ys),e(rs,br),e(rs,Fs),e(rs,Ws),e(i,ua),e(i,fa),e(fa,kr),e(kr,js),e(fa,Hr),e(fa,ws),e(ws,_s),e(_s,Vn),e(ws,Ra),e(ws,as),e(as,zs),e(as,qa),e(as,Ks),e(as,$a),e(as,ns)},p:Be,i:Be,o:Be,d(yr){yr&&a(l)}}}class w6 extends In{constructor(l){super(),Dn(this,l,null,y6,ja,{})}}function _6(d){let l,i,u,v,g,x,m,h,E,y,P,D,I,_,F,k,A,G,j,b,L,w,R,O,C,M,W,Y,q,oe,ve,z,$,ae,Ee,ce,Xe,de,te,ge,Ae,Ie,ue,je,fe,N,Q,De,pe,xe,he,le,J,Re,Le,Pe,ee,We,ke,Z,He;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("Financial options"),x=o(),m=s("div"),h=s("div"),E=s("div"),y=s("img"),D=o(),I=s("div"),_=s("div"),F=s("div"),k=s("div"),A=s("div"),G=f("Funding solutions"),j=o(),b=s("div"),L=f(`If you’re in adopting a power-from-waste project to make use of your current waste and feedback heat and
                  electricity, there are several funding options available to cover the initial costs (CAPEX) required to take
                  your project from feasibility to operation. These options include:
                  `),w=s("ul"),R=s("li"),O=f("Self-funding"),C=o(),M=s("li"),W=f("Asset finance"),Y=o(),q=s("li"),oe=f("Equity funding"),ve=o(),z=s("li"),$=f("Grants"),ae=o(),Ee=s("li"),ce=f("Government subsidies"),Xe=o(),de=s("li"),te=f("Carbon credits"),ge=o(),Ae=s("li"),Ie=f("Plastic credits"),ue=f(`
                  Choose the option that best fits your business needs and get your power-from-waste project off the ground today.`),je=o(),fe=s("div"),N=s("div"),Q=f("Copyright © 2023 Power for Planet"),De=o(),pe=s("div"),xe=s("div"),he=f("Privacy Policy"),le=o(),J=s("div"),Re=s("img"),Pe=o(),ee=s("img"),ke=o(),Z=s("img"),this.h()},l(me){l=r(me,"DIV",{class:!0});var Ce=n(l);i=r(Ce,"DIV",{class:!0});var Fe=n(i);u=r(Fe,"DIV",{class:!0});var Oe=n(u);v=r(Oe,"DIV",{});var be=n(v);g=p(be,"Financial options"),be.forEach(a),Oe.forEach(a),x=c(Fe),m=r(Fe,"DIV",{class:!0});var et=n(m);h=r(et,"DIV",{class:!0});var Ye=n(h);E=r(Ye,"DIV",{class:!0});var st=n(E);y=r(st,"IMG",{src:!0,alt:!0,class:!0}),st.forEach(a),D=c(Ye),I=r(Ye,"DIV",{class:!0});var V=n(I);_=r(V,"DIV",{class:!0});var B=n(_);F=r(B,"DIV",{class:!0});var U=n(F);k=r(U,"DIV",{class:!0});var K=n(k);A=r(K,"DIV",{class:!0});var X=n(A);G=p(X,"Funding solutions"),X.forEach(a),j=c(K),b=r(K,"DIV",{class:!0});var re=n(b);L=p(re,`If you’re in adopting a power-from-waste project to make use of your current waste and feedback heat and
                  electricity, there are several funding options available to cover the initial costs (CAPEX) required to take
                  your project from feasibility to operation. These options include:
                  `),w=r(re,"UL",{class:!0});var H=n(w);R=r(H,"LI",{});var Se=n(R);O=p(Se,"Self-funding"),Se.forEach(a),C=c(H),M=r(H,"LI",{});var Te=n(M);W=p(Te,"Asset finance"),Te.forEach(a),Y=c(H),q=r(H,"LI",{});var ne=n(q);oe=p(ne,"Equity funding"),ne.forEach(a),ve=c(H),z=r(H,"LI",{});var ye=n(z);$=p(ye,"Grants"),ye.forEach(a),ae=c(H),Ee=r(H,"LI",{});var ut=n(Ee);ce=p(ut,"Government subsidies"),ut.forEach(a),Xe=c(H),de=r(H,"LI",{});var we=n(de);te=p(we,"Carbon credits"),we.forEach(a),ge=c(H),Ae=r(H,"LI",{});var se=n(Ae);Ie=p(se,"Plastic credits"),se.forEach(a),H.forEach(a),ue=p(re,`
                  Choose the option that best fits your business needs and get your power-from-waste project off the ground today.`),re.forEach(a),K.forEach(a),U.forEach(a),B.forEach(a),V.forEach(a),Ye.forEach(a),et.forEach(a),je=c(Fe),fe=r(Fe,"DIV",{class:!0});var qe=n(fe);N=r(qe,"DIV",{class:!0});var $e=n(N);Q=p($e,"Copyright © 2023 Power for Planet"),$e.forEach(a),De=c(qe),pe=r(qe,"DIV",{class:!0});var Ge=n(pe);xe=r(Ge,"DIV",{class:!0});var _e=n(xe);he=p(_e,"Privacy Policy"),_e.forEach(a),le=c(Ge),J=r(Ge,"DIV",{class:!0});var Ue=n(J);Re=r(Ue,"IMG",{src:!0,alt:!0,class:!0}),Pe=c(Ue),ee=r(Ue,"IMG",{src:!0,alt:!0,class:!0}),ke=c(Ue),Z=r(Ue,"IMG",{src:!0,alt:!0,class:!0}),Ue.forEach(a),Ge.forEach(a),qe.forEach(a),Fe.forEach(a),Ce.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),S(y.src,P="/assets/new/illu-costs-31-Frame24-31-Frame24-31-Frame18-31-Savecosts-31-blockrow2-31-wrapper-31-03Greenenergy.svg")||t(y,"src",P),t(y,"alt","illu-costs-31-Frame32-31-Purpose-31-blockrow1-31-Intro-31-wrapper-31-03Greenenergy"),t(y,"class","h-40 w-[186px] mt-28"),t(E,"class","h-full flex-1 flex-col flex justify-center items-center"),t(A,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(w,"class","list-disc p-5 pl-10"),t(b,"class","text-md leading-[26px] font-light font-PublicSans w-[650px]"),t(k,"class","h-full flex-1 flex-col flex items-start gap-[18px]"),t(F,"class","w-full flex justify-end items-start gap-[18px]"),t(_,"class","w-full flex-col flex items-start gap-[18px]"),t(I,"class","flex-1 flex-col flex items-start gap-6 text-[#2e3855]"),t(h,"class","bg-white w-full flex items-start gap-[60px] p-10 rounded-[20px]"),t(m,"class","w-full flex-col flex items-start gap-5"),t(N,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(xe,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Re.src,Le="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Re,"src",Le),t(Re,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Re,"class","h-6 w-6"),S(ee.src,We="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ee,"src",We),t(ee,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(ee,"class","h-6 w-6"),S(Z.src,He="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Z,"src",He),t(Z,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Z,"class","h-6 w-6"),t(J,"class","flex items-center gap-5"),t(pe,"class","flex-1 flex justify-end items-center gap-10"),t(fe,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col w-full flex items-start gap-[60px] rounded-[20px] max-w-[1060px]"),t(l,"class","flex-col flex items-center gap-[50px] h-fit mt-20")},m(me,Ce){Ze(me,l,Ce),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,E),e(E,y),e(h,D),e(h,I),e(I,_),e(_,F),e(F,k),e(k,A),e(A,G),e(k,j),e(k,b),e(b,L),e(b,w),e(w,R),e(R,O),e(w,C),e(w,M),e(M,W),e(w,Y),e(w,q),e(q,oe),e(w,ve),e(w,z),e(z,$),e(w,ae),e(w,Ee),e(Ee,ce),e(w,Xe),e(w,de),e(de,te),e(w,ge),e(w,Ae),e(Ae,Ie),e(b,ue),e(i,je),e(i,fe),e(fe,N),e(N,Q),e(fe,De),e(fe,pe),e(pe,xe),e(xe,he),e(pe,le),e(pe,J),e(J,Re),e(J,Pe),e(J,ee),e(J,ke),e(J,Z)},p:Be,i:Be,o:Be,d(me){me&&a(l)}}}class E6 extends In{constructor(l){super(),Dn(this,l,null,_6,ja,{})}}function I6(d){let l,i,u,v,g,x,m,h,E,y,P,D,I,_,F,k,A,G,j,b,L,w,R,O,C,M,W,Y,q,oe,ve,z,$,ae,Ee,ce,Xe,de,te,ge,Ae,Ie,ue,je,fe,N,Q,De,pe,xe,he,le,J,Re,Le,Pe,ee,We,ke,Z,He;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("Frequently Asked Questions"),x=o(),m=s("div"),h=s("div"),E=s("div"),y=s("img"),D=o(),I=s("div"),_=s("div"),F=s("div"),k=s("div"),A=s("div"),G=f("Funding solutions"),j=o(),b=s("div"),L=f(`If you’re in adopting a power-from-waste project to make use of your current waste and feedback heat and
                  electricity, there are several funding options available to cover the initial costs (CAPEX) required to take
                  your project from feasibility to operation. These options include:
                  `),w=s("ul"),R=s("li"),O=f("Self-funding"),C=o(),M=s("li"),W=f("Asset finance"),Y=o(),q=s("li"),oe=f("Equity funding"),ve=o(),z=s("li"),$=f("Grants"),ae=o(),Ee=s("li"),ce=f("Government subsidies"),Xe=o(),de=s("li"),te=f("Carbon credits"),ge=o(),Ae=s("li"),Ie=f("Plastic credits"),ue=f(`
                  Choose the option that best fits your business needs and get your power-from-waste project off the ground today.`),je=o(),fe=s("div"),N=s("div"),Q=f("Copyright © 2023 Power for Planet"),De=o(),pe=s("div"),xe=s("div"),he=f("Privacy Policy"),le=o(),J=s("div"),Re=s("img"),Pe=o(),ee=s("img"),ke=o(),Z=s("img"),this.h()},l(me){l=r(me,"DIV",{class:!0});var Ce=n(l);i=r(Ce,"DIV",{class:!0});var Fe=n(i);u=r(Fe,"DIV",{class:!0});var Oe=n(u);v=r(Oe,"DIV",{});var be=n(v);g=p(be,"Frequently Asked Questions"),be.forEach(a),Oe.forEach(a),x=c(Fe),m=r(Fe,"DIV",{class:!0});var et=n(m);h=r(et,"DIV",{class:!0});var Ye=n(h);E=r(Ye,"DIV",{class:!0});var st=n(E);y=r(st,"IMG",{src:!0,alt:!0,class:!0}),st.forEach(a),D=c(Ye),I=r(Ye,"DIV",{class:!0});var V=n(I);_=r(V,"DIV",{class:!0});var B=n(_);F=r(B,"DIV",{class:!0});var U=n(F);k=r(U,"DIV",{class:!0});var K=n(k);A=r(K,"DIV",{class:!0});var X=n(A);G=p(X,"Funding solutions"),X.forEach(a),j=c(K),b=r(K,"DIV",{class:!0});var re=n(b);L=p(re,`If you’re in adopting a power-from-waste project to make use of your current waste and feedback heat and
                  electricity, there are several funding options available to cover the initial costs (CAPEX) required to take
                  your project from feasibility to operation. These options include:
                  `),w=r(re,"UL",{class:!0});var H=n(w);R=r(H,"LI",{});var Se=n(R);O=p(Se,"Self-funding"),Se.forEach(a),C=c(H),M=r(H,"LI",{});var Te=n(M);W=p(Te,"Asset finance"),Te.forEach(a),Y=c(H),q=r(H,"LI",{});var ne=n(q);oe=p(ne,"Equity funding"),ne.forEach(a),ve=c(H),z=r(H,"LI",{});var ye=n(z);$=p(ye,"Grants"),ye.forEach(a),ae=c(H),Ee=r(H,"LI",{});var ut=n(Ee);ce=p(ut,"Government subsidies"),ut.forEach(a),Xe=c(H),de=r(H,"LI",{});var we=n(de);te=p(we,"Carbon credits"),we.forEach(a),ge=c(H),Ae=r(H,"LI",{});var se=n(Ae);Ie=p(se,"Plastic credits"),se.forEach(a),H.forEach(a),ue=p(re,`
                  Choose the option that best fits your business needs and get your power-from-waste project off the ground today.`),re.forEach(a),K.forEach(a),U.forEach(a),B.forEach(a),V.forEach(a),Ye.forEach(a),et.forEach(a),je=c(Fe),fe=r(Fe,"DIV",{class:!0});var qe=n(fe);N=r(qe,"DIV",{class:!0});var $e=n(N);Q=p($e,"Copyright © 2023 Power for Planet"),$e.forEach(a),De=c(qe),pe=r(qe,"DIV",{class:!0});var Ge=n(pe);xe=r(Ge,"DIV",{class:!0});var _e=n(xe);he=p(_e,"Privacy Policy"),_e.forEach(a),le=c(Ge),J=r(Ge,"DIV",{class:!0});var Ue=n(J);Re=r(Ue,"IMG",{src:!0,alt:!0,class:!0}),Pe=c(Ue),ee=r(Ue,"IMG",{src:!0,alt:!0,class:!0}),ke=c(Ue),Z=r(Ue,"IMG",{src:!0,alt:!0,class:!0}),Ue.forEach(a),Ge.forEach(a),qe.forEach(a),Fe.forEach(a),Ce.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),S(y.src,P="/assets/new/illu-costs-31-Frame24-31-Frame24-31-Frame18-31-Savecosts-31-blockrow2-31-wrapper-31-03Greenenergy.svg")||t(y,"src",P),t(y,"alt","illu-costs-31-Frame32-31-Purpose-31-blockrow1-31-Intro-31-wrapper-31-03Greenenergy"),t(y,"class","h-40 w-[186px] mt-28"),t(E,"class","h-full flex-1 flex-col flex justify-center items-center"),t(A,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(w,"class","list-disc p-5 pl-10"),t(b,"class","text-md leading-[26px] font-light font-PublicSans w-[650px]"),t(k,"class","h-full flex-1 flex-col flex items-start gap-[18px]"),t(F,"class","w-full flex justify-end items-start gap-[18px]"),t(_,"class","w-full flex-col flex items-start gap-[18px]"),t(I,"class","flex-1 flex-col flex items-start gap-6 text-[#2e3855]"),t(h,"class","bg-white w-full flex items-start gap-[60px] p-10 rounded-[20px]"),t(m,"class","w-full flex-col flex items-start gap-5"),t(N,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(xe,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Re.src,Le="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Re,"src",Le),t(Re,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Re,"class","h-6 w-6"),S(ee.src,We="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ee,"src",We),t(ee,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(ee,"class","h-6 w-6"),S(Z.src,He="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Z,"src",He),t(Z,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Z,"class","h-6 w-6"),t(J,"class","flex items-center gap-5"),t(pe,"class","flex-1 flex justify-end items-center gap-10"),t(fe,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col w-full flex items-start gap-[60px] rounded-[20px] max-w-[1060px]"),t(l,"class","flex-col flex items-center gap-[50px] h-fit mt-20")},m(me,Ce){Ze(me,l,Ce),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,E),e(E,y),e(h,D),e(h,I),e(I,_),e(_,F),e(F,k),e(k,A),e(A,G),e(k,j),e(k,b),e(b,L),e(b,w),e(w,R),e(R,O),e(w,C),e(w,M),e(M,W),e(w,Y),e(w,q),e(q,oe),e(w,ve),e(w,z),e(z,$),e(w,ae),e(w,Ee),e(Ee,ce),e(w,Xe),e(w,de),e(de,te),e(w,ge),e(w,Ae),e(Ae,Ie),e(b,ue),e(i,je),e(i,fe),e(fe,N),e(N,Q),e(fe,De),e(fe,pe),e(pe,xe),e(xe,he),e(pe,le),e(pe,J),e(J,Re),e(J,Pe),e(J,ee),e(J,ke),e(J,Z)},p:Be,i:Be,o:Be,d(me){me&&a(l)}}}class D6 extends In{constructor(l){super(),Dn(this,l,null,I6,ja,{})}}function V6(d){let l;const i=d[2].default,u=p_(i,d,d[3],null);return{c(){u&&u.c()},l(v){u&&u.l(v)},m(v,g){u&&u.m(v,g),l=!0},p(v,g){u&&u.p&&(!l||g&8)&&v_(u,i,v,v[3],l?h_(i,v[3],g,null):g_(v[3]),null)},i(v){l||(Gs(u,v),l=!0)},o(v){Ms(u,v),l=!1},d(v){u&&u.d(v)}}}function P6(d){let l,i;return l=new D6({}),{c(){tl(l.$$.fragment)},l(u){sl(l.$$.fragment,u)},m(u,v){rl(l,u,v),i=!0},p:Be,i(u){i||(Gs(l.$$.fragment,u),i=!0)},o(u){Ms(l.$$.fragment,u),i=!1},d(u){al(l,u)}}}function k6(d){let l,i;return l=new E6({}),{c(){tl(l.$$.fragment)},l(u){sl(l.$$.fragment,u)},m(u,v){rl(l,u,v),i=!0},p:Be,i(u){i||(Gs(l.$$.fragment,u),i=!0)},o(u){Ms(l.$$.fragment,u),i=!1},d(u){al(l,u)}}}function S6(d){let l,i;return l=new w6({}),{c(){tl(l.$$.fragment)},l(u){sl(l.$$.fragment,u)},m(u,v){rl(l,u,v),i=!0},p:Be,i(u){i||(Gs(l.$$.fragment,u),i=!0)},o(u){Ms(l.$$.fragment,u),i=!1},d(u){al(l,u)}}}function T6(d){let l,i;return l=new AE({}),{c(){tl(l.$$.fragment)},l(u){sl(l.$$.fragment,u)},m(u,v){rl(l,u,v),i=!0},p:Be,i(u){i||(Gs(l.$$.fragment,u),i=!0)},o(u){Ms(l.$$.fragment,u),i=!1},d(u){al(l,u)}}}function A6(d){let l,i;return l=new SE({}),{c(){tl(l.$$.fragment)},l(u){sl(l.$$.fragment,u)},m(u,v){rl(l,u,v),i=!0},p:Be,i(u){i||(Gs(l.$$.fragment,u),i=!0)},o(u){Ms(l.$$.fragment,u),i=!1},d(u){al(l,u)}}}function F6(d){let l,i;return l=new c6({}),{c(){tl(l.$$.fragment)},l(u){sl(l.$$.fragment,u)},m(u,v){rl(l,u,v),i=!0},p:Be,i(u){i||(Gs(l.$$.fragment,u),i=!0)},o(u){Ms(l.$$.fragment,u),i=!1},d(u){al(l,u)}}}function O6(d){let l,i;return l=new b6({}),{c(){tl(l.$$.fragment)},l(u){sl(l.$$.fragment,u)},m(u,v){rl(l,u,v),i=!0},p:Be,i(u){i||(Gs(l.$$.fragment,u),i=!0)},o(u){Ms(l.$$.fragment,u),i=!1},d(u){al(l,u)}}}function L6(d){let l,i;return l=new m6({}),{c(){tl(l.$$.fragment)},l(u){sl(l.$$.fragment,u)},m(u,v){rl(l,u,v),i=!0},p:Be,i(u){i||(Gs(l.$$.fragment,u),i=!0)},o(u){Ms(l.$$.fragment,u),i=!1},d(u){al(l,u)}}}function C6(d){let l,i;return l=new g6({}),{c(){tl(l.$$.fragment)},l(u){sl(l.$$.fragment,u)},m(u,v){rl(l,u,v),i=!0},p:Be,i(u){i||(Gs(l.$$.fragment,u),i=!0)},o(u){Ms(l.$$.fragment,u),i=!1},d(u){al(l,u)}}}function G6(d){let l,i;return l=new p6({}),{c(){tl(l.$$.fragment)},l(u){sl(l.$$.fragment,u)},m(u,v){rl(l,u,v),i=!0},p:Be,i(u){i||(Gs(l.$$.fragment,u),i=!0)},o(u){Ms(l.$$.fragment,u),i=!1},d(u){al(l,u)}}}function M6(d){let l,i;return l=new u6({}),{c(){tl(l.$$.fragment)},l(u){sl(l.$$.fragment,u)},m(u,v){rl(l,u,v),i=!0},p:Be,i(u){i||(Gs(l.$$.fragment,u),i=!0)},o(u){Ms(l.$$.fragment,u),i=!1},d(u){al(l,u)}}}function j6(d){let l,i,u,v;const g=[M6,G6,C6,L6,O6,F6,A6,T6,S6,k6,P6,V6],x=[];function m(h,E){return h[0]=="/news"||h[0]=="/news/"?0:h[0]=="/news-item"||h[0]=="/news-item/"?1:h[0]=="/news-item2"||h[0]=="/news-item2/"?2:h[0]=="/news-item3"||h[0]=="/news-item3/"?3:h[0]=="/news-item4"||h[0]=="/news-item4/"?4:h[0]=="/explore"||h[0]=="/explore/"?5:h[0]=="/about"||h[0]=="/about/"?6:h[0]=="/green-energy"||h[0]=="/green-energy/"?7:h[0]=="/contact"||h[0]=="/contact/"?8:h[0]=="/resources/financial-options"||h[0]=="/resources/financial-options/"?9:h[0]=="/resources/articles"||h[0]=="/resources/articles/"?10:11}return l=m(d),i=x[l]=g[l](d),{c(){i.c(),u=da()},l(h){i.l(h),u=da()},m(h,E){x[l].m(h,E),Ze(h,u,E),v=!0},p(h,E){let y=l;l=m(h),l===y?x[l].p(h,E):(c2(),Ms(x[y],1,1,()=>{x[y]=null}),d2(),i=x[l],i?i.p(h,E):(i=x[l]=g[l](h),i.c()),Gs(i,1),i.m(u.parentNode,u))},i(h){v||(Gs(i),v=!0)},o(h){Ms(i),v=!1},d(h){x[l].d(h),h&&a(u)}}}function N6(d){let l,i,u,v,g,x;return l=new aE({}),u=new IE({props:{path:d[0]}}),g=new PE({props:{path:d[0],$$slots:{default:[j6]},$$scope:{ctx:d}}}),{c(){tl(l.$$.fragment),i=o(),tl(u.$$.fragment),v=o(),tl(g.$$.fragment)},l(m){sl(l.$$.fragment,m),i=c(m),sl(u.$$.fragment,m),v=c(m),sl(g.$$.fragment,m)},m(m,h){rl(l,m,h),Ze(m,i,h),rl(u,m,h),Ze(m,v,h),rl(g,m,h),x=!0},p(m,[h]){const E={};h&1&&(E.path=m[0]),u.$set(E);const y={};h&1&&(y.path=m[0]),h&9&&(y.$$scope={dirty:h,ctx:m}),g.$set(y)},i(m){x||(Gs(l.$$.fragment,m),Gs(u.$$.fragment,m),Gs(g.$$.fragment,m),x=!0)},o(m){Ms(l.$$.fragment,m),Ms(u.$$.fragment,m),Ms(g.$$.fragment,m),x=!1},d(m){al(l,m),m&&a(i),al(u,m),m&&a(v),al(g,m)}}}function B6(d,l,i){let{$$slots:u={},$$scope:v}=l,{data:g}=l,{res:x,path:m}=g;return q_.set(x),$_.set(B_(x)),m_(()=>K_({immediate:!0,onRegistered:h=>h&&setInterval(async()=>await h.update(),198964),onRegisterError:h=>console.error(h)})),m[m.length-1]=="/"&&(m=m.slice(0,-1)),d.$$set=h=>{"data"in h&&i(1,g=h.data),"$$scope"in h&&i(3,v=h.$$scope)},d.$$.update=()=>{d.$$.dirty&2&&g&&i(0,m=g.path)},[m,g,u,v]}class W6 extends In{constructor(l){super(),Dn(this,l,B6,N6,ja,{data:1})}}export{W6 as component,Y6 as universal};
