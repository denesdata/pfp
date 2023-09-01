import{S as yn,i as wn,s as ja,e as ea,C as o2,h as a,D as e,E as Re,k as s,l as r,n as t,b as Qe,a as o,y as Qn,c,z as Zn,A as el,g as Os,d as Ls,B as tl,F as fg,q as f,m as n,r as p,G as Ot,H as zh,u as vg,I as M_,J as $c,v as c2,f as d2,K as j_,L as N_,M as Ud,N as Hd,O as S,P as p_,Q as v_,R as g_,T as h_,p as T,o as m_}from"../chunks/index.6a262c57.js";import{g as B_}from"../chunks/posts.352e520d.js";import{f as mm,a as Wu,h as n0,p as l0,b as dg,s as Ow,t as R_,c as wr,d as Lw,e as $_,g as q_}from"../chunks/icon.a6d88c44.js";import{_ as U_}from"../chunks/preload-helper.a4192956.js";import{p as H_}from"../chunks/stores.81913226.js";const Y_=!0,W_="always",z_=async({url:d,fetch:l})=>({path:d.pathname,res:await l("/posts.json").then(i=>i.json())}),Y4=Object.freeze(Object.defineProperty({__proto__:null,load:z_,prerender:Y_,trailingSlash:W_},Symbol.toStringTag,{value:"Module"}));function K_(d={}){const{immediate:l=!1,onNeedRefresh:i,onOfflineReady:u,onRegistered:v,onRegisteredSW:g,onRegisterError:x}=d;let m,h;const E=async(V=!0)=>{await h};async function w(){if("serviceWorker"in navigator){const{Workbox:V}=await U_(()=>import("../chunks/workbox-window.prod.es5.08b2315b.js"),[],import.meta.url);m=new V("./sw.js",{scope:"/",type:"classic"}),m.addEventListener("activated",D=>{(D.isUpdate||D.isExternal)&&window.location.reload()}),m.addEventListener("installed",D=>{D.isUpdate||u==null||u()}),m.register({immediate:l}).then(D=>{g?g("./sw.js",D):v==null||v(D)}).catch(D=>{x==null||x(D)})}}return h=w(),E}function J_(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(l,"rel","shortcut icon"),t(l,"href",mm.src),t(l,"sizes",mm.sizes),t(l,"type",mm.type)},m(i,u){Qe(i,l,u)},p:Re,d(i){i&&a(l)}}}function X_(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(l,"rel","apple-touch-icon"),t(l,"href",Wu[180].src),t(l,"sizes",Wu[180].sizes),t(l,"type",Wu[180].type)},m(i,u){Qe(i,l,u)},p:Re,d(i){i&&a(l)}}}function Q_(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0,sizes:!0,type:!0}),this.h()},h(){t(l,"rel","icon"),t(l,"href",Wu[192].src),t(l,"sizes",Wu[192].sizes),t(l,"type",Wu[192].type)},m(i,u){Qe(i,l,u)},p:Re,d(i){i&&a(l)}}}function Z_(d){let l,i,u,v=mm&&J_(),g=Wu[180]&&X_(),x=Wu[192]&&Q_();return{c(){v&&v.c(),l=ea(),g&&g.c(),i=ea(),x&&x.c(),u=ea()},l(m){const h=o2("svelte-1kxdj3d",document.head);v&&v.l(h),l=ea(),g&&g.l(h),i=ea(),x&&x.l(h),u=ea(),h.forEach(a)},m(m,h){v&&v.m(document.head,null),e(document.head,l),g&&g.m(document.head,null),e(document.head,i),x&&x.m(document.head,null),e(document.head,u)},p(m,[h]){mm&&v.p(m,h),Wu[180]&&g.p(m,h),Wu[192]&&x.p(m,h)},i:Re,o:Re,d(m){v&&v.d(m),a(l),g&&g.d(m),a(i),x&&x.d(m),a(u)}}}class eE extends yn{constructor(l){super(),wn(this,l,null,Z_,ja,{})}}function Cw(d,l,i){const u=d.slice();return u[0]=l[i],u}function tE(d){let l,i=n0.me,u=[];for(let v=0;v<i.length;v+=1)u[v]=Gw(Cw(d,i,v));return{c(){for(let v=0;v<u.length;v+=1)u[v].c();l=ea()},l(v){for(let g=0;g<u.length;g+=1)u[g].l(v);l=ea()},m(v,g){for(let x=0;x<u.length;x+=1)u[x]&&u[x].m(v,g);Qe(v,l,g)},p(v,g){if(g&0){i=n0.me;let x;for(x=0;x<i.length;x+=1){const m=Cw(v,i,x);u[x]?u[x].p(m,g):(u[x]=Gw(m),u[x].c(),u[x].m(l.parentNode,l))}for(;x<u.length;x+=1)u[x].d(1);u.length=i.length}},d(v){fg(u,v),v&&a(l)}}}function Gw(d){let l;return{c(){l=s("link"),this.h()},l(i){l=r(i,"LINK",{rel:!0,href:!0}),this.h()},h(){t(l,"rel","me"),t(l,"href",d[0])},m(i,u){Qe(i,l,u)},p:Re,d(i){i&&a(l)}}}function sE(d){let l,i,u;return{c(){l=s("link"),i=o(),u=s("link"),this.h()},l(v){l=r(v,"LINK",{rel:!0,href:!0}),i=c(v),u=r(v,"LINK",{rel:!0,href:!0}),this.h()},h(){t(l,"rel","webmention"),t(l,"href","https://webmention.io/"+l0.comment.webmention.username+"/webmention"),t(u,"rel","pingback"),t(u,"href","https://webmention.io/"+l0.comment.webmention.username+"/xmlrpc")},m(v,g){Qe(v,l,g),Qe(v,i,g),Qe(v,u,g)},p:Re,d(v){v&&a(l),v&&a(i),v&&a(u)}}}function rE(d){var h,E;let l,i,u,v,g,x=n0.me&&tE(d),m=((E=(h=l0.comment)==null?void 0:h.webmention)==null?void 0:E.username)&&sE();return v=new eE({}),{c(){x&&x.c(),l=ea(),m&&m.c(),i=ea(),u=o(),Qn(v.$$.fragment)},l(w){const V=o2("svelte-1592q3p",document.head);x&&x.l(V),l=ea(),m&&m.l(V),i=ea(),V.forEach(a),u=c(w),Zn(v.$$.fragment,w)},m(w,V){x&&x.m(document.head,null),e(document.head,l),m&&m.m(document.head,null),e(document.head,i),Qe(w,u,V),el(v,w,V),g=!0},p(w,[V]){var D,I;n0.me&&x.p(w,V),(I=(D=l0.comment)==null?void 0:D.webmention)!=null&&I.username&&m.p(w,V)},i(w){g||(Os(v.$$.fragment,w),g=!0)},o(w){Ls(v.$$.fragment,w),g=!1},d(w){x&&x.d(w),a(l),m&&m.d(w),a(i),w&&a(u),tl(v,w)}}}class aE extends yn{constructor(l){super(),wn(this,l,null,rE,ja,{})}}const nE=(d,l,i,u=i/=100,v=l*Math.min(u,1-u)/100,g=(x,m=(x+d/30)%12)=>Math.round(255*(u-v*Math.max(Math.min(m-3,9-m,1),-1))).toString(16).padStart(2,"0"))=>`#${g(0)}${g(8)}${g(4)}`;function Mw(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u[13]=l[i].children,u}function jw(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u}function Nw(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u[13]=l[i].children,u}function Bw(d,l,i){const u=d.slice();return u[11]=l[i].text,u[12]=l[i].link,u}function lE(d){let l,i,u=d[11]+"",v,g,x,m,h,E,w=d[13],V=[];for(let D=0;D<w.length;D+=1)V[D]=Rw(Bw(d,w,D));return{c(){l=s("li"),i=s("span"),v=f(u),g=o(),x=s("span"),m=o(),h=s("ul");for(let D=0;D<V.length;D+=1)V[D].c();E=o(),this.h()},l(D){l=r(D,"LI",{tabindex:!0});var I=n(l);i=r(I,"SPAN",{class:!0});var _=n(i);v=p(_,u),g=c(_),x=r(_,"SPAN",{class:!0}),n(x).forEach(a),_.forEach(a),m=c(I),h=r(I,"UL",{class:!0});var O=n(h);for(let k=0;k<V.length;k+=1)V[k].l(O);O.forEach(a),E=c(I),I.forEach(a),this.h()},h(){t(x,"class","i-heroicons-solid-chevron-right mr-2"),t(i,"class","justify-between gap-1 max-w-[13rem]"),Ot(i,"font-bold",d[13].some(d[6])),t(h,"class","bg-base-100 text-base-content shadow-lg p-2"),t(l,"tabindex","0")},m(D,I){Qe(D,l,I),e(l,i),e(i,v),e(i,g),e(i,x),e(l,m),e(l,h);for(let _=0;_<V.length;_+=1)V[_]&&V[_].m(h,null);e(l,E)},p(D,I){if(I&1&&u!==(u=D[11]+"")&&vg(v,u),I&3&&Ot(i,"font-bold",D[13].some(D[6])),I&3){w=D[13];let _;for(_=0;_<w.length;_+=1){const O=Bw(D,w,_);V[_]?V[_].p(O,I):(V[_]=Rw(O),V[_].c(),V[_].m(h,null))}for(;_<V.length;_+=1)V[_].d(1);V.length=w.length}},d(D){D&&a(l),fg(V,D)}}}function iE(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{href:!0});var E=n(i);v=p(E,u),E.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"href",g=d[12]),Ot(i,"font-bold",d[12]===d[1])},m(m,h){Qe(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&vg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&Ot(i,"font-bold",m[12]===m[1])},d(m){m&&a(l)}}}function Rw(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{href:!0});var E=n(i);v=p(E,u),E.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"href",g=d[12]),Ot(i,"font-bold",d[12]===d[1])},m(m,h){Qe(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&vg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&Ot(i,"font-bold",m[12]===m[1])},d(m){m&&a(l)}}}function $w(d){let l;function i(g,x){if(g[12]&&!g[13])return iE;if(g[13])return lE}let u=i(d),v=u&&u(d);return{c(){v&&v.c(),l=ea()},l(g){v&&v.l(g),l=ea()},m(g,x){v&&v.m(g,x),Qe(g,l,x)},p(g,x){u===(u=i(g))&&v?v.p(g,x):(v&&v.d(1),v=u&&u(g),v&&(v.c(),v.m(l.parentNode,l)))},d(g){v&&v.d(g),g&&a(l)}}}function oE(d){return{c:Re,l:Re,m:Re,d:Re}}function cE(d){let l,i,u=d[11]+"",v,g,x,m,h,E,w=d[13],V=[];for(let D=0;D<w.length;D+=1)V[D]=qw(jw(d,w,D));return{c(){l=s("li"),i=s("span"),v=f(u),g=o(),x=s("span"),m=o(),h=s("ul");for(let D=0;D<V.length;D+=1)V[D].c();E=o(),this.h()},l(D){l=r(D,"LI",{});var I=n(l);i=r(I,"SPAN",{class:!0});var _=n(i);v=p(_,u),g=c(_),x=r(_,"SPAN",{class:!0}),n(x).forEach(a),_.forEach(a),m=c(I),h=r(I,"UL",{tabindex:!0,class:!0});var O=n(h);for(let k=0;k<V.length;k+=1)V[k].l(O);O.forEach(a),E=c(I),I.forEach(a),this.h()},h(){t(x,"class","i-heroicons-solid-chevron-down -mr-1"),t(i,"class","!rounded-btn gap-3"),Ot(i,"font-bold",d[13].some(d[8])),Ot(i,"text-pfp-green",d[13].some(d[9])),t(h,"tabindex","0"),t(h,"class","menu rounded-box bg-base-100 text-base-content shadow-lg p-2")},m(D,I){Qe(D,l,I),e(l,i),e(i,v),e(i,g),e(i,x),e(l,m),e(l,h);for(let _=0;_<V.length;_+=1)V[_]&&V[_].m(h,null);e(l,E)},p(D,I){if(I&1&&u!==(u=D[11]+"")&&vg(v,u),I&3&&Ot(i,"font-bold",D[13].some(D[8])),I&3&&Ot(i,"text-pfp-green",D[13].some(D[9])),I&3){w=D[13];let _;for(_=0;_<w.length;_+=1){const O=jw(D,w,_);V[_]?V[_].p(O,I):(V[_]=qw(O),V[_].c(),V[_].m(h,null))}for(;_<V.length;_+=1)V[_].d(1);V.length=w.length}},d(D){D&&a(l),fg(V,D)}}}function dE(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{class:!0,href:!0});var E=n(i);v=p(E,u),E.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"class","!rounded-btn"),t(i,"href",g=d[12]),Ot(i,"font-bold",d[12]===d[1]),Ot(i,"text-pfp-green",d[12]===d[1])},m(m,h){Qe(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&vg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&Ot(i,"font-bold",m[12]===m[1]),h&3&&Ot(i,"text-pfp-green",m[12]===m[1])},d(m){m&&a(l)}}}function qw(d){let l,i,u=d[11]+"",v,g,x;return{c(){l=s("li"),i=s("a"),v=f(u),x=o(),this.h()},l(m){l=r(m,"LI",{});var h=n(l);i=r(h,"A",{href:!0});var E=n(i);v=p(E,u),E.forEach(a),x=c(h),h.forEach(a),this.h()},h(){t(i,"href",g=d[12]),Ot(i,"font-bold",d[12]===d[1]),Ot(i,"text-pfp-green",d[12]===d[1])},m(m,h){Qe(m,l,h),e(l,i),e(i,v),e(l,x)},p(m,h){h&1&&u!==(u=m[11]+"")&&vg(v,u),h&1&&g!==(g=m[12])&&t(i,"href",g),h&3&&Ot(i,"font-bold",m[12]===m[1]),h&3&&Ot(i,"text-pfp-green",m[12]===m[1])},d(m){m&&a(l)}}}function Uw(d){let l;function i(g,x){if(g[12]&&!g[13])return dE;if(g[13])return cE}let u=i(d),v=u&&u(d);return{c(){v&&v.c(),l=ea()},l(g){v&&v.l(g),l=ea()},m(g,x){v&&v.m(g,x),Qe(g,l,x)},p(g,x){u===(u=i(g))&&v?v.p(g,x):(v&&v.d(1),v=u&&u(g),v&&(v.c(),v.m(l.parentNode,l)))},d(g){v&&v.d(g),g&&a(l)}}}function uE(d){let l,i,u,v,g,x,m,h,E,w,V,D,I,_,O=d[0],k=[];for(let b=0;b<O.length;b+=1)k[b]=$w(Nw(d,O,b));let A=d[5]&&oE(),G=d[0],M=[];for(let b=0;b<G.length;b+=1)M[b]=Uw(Mw(d,G,b));return{c(){l=s("div"),i=s("label"),u=s("span"),v=o(),g=s("ul");for(let b=0;b<k.length;b+=1)k[b].c();x=o(),m=s("div"),h=s("button"),A&&A.c(),E=o(),w=f(d[2]),V=o(),D=s("ul");for(let b=0;b<M.length;b+=1)M[b].c();this.h()},l(b){l=r(b,"DIV",{class:!0});var L=n(l);i=r(L,"LABEL",{for:!0,tabindex:!0,class:!0});var y=n(i);u=r(y,"SPAN",{class:!0}),n(u).forEach(a),y.forEach(a),v=c(L),g=r(L,"UL",{id:!0,tabindex:!0,class:!0});var N=n(g);for(let q=0;q<k.length;q+=1)k[q].l(N);N.forEach(a),L.forEach(a),x=c(b),m=r(b,"DIV",{class:!0});var F=n(m);h=r(F,"BUTTON",{class:!0});var C=n(h);A&&A.l(C),E=c(C),w=p(C,d[2]),C.forEach(a),V=c(F),D=r(F,"UL",{class:!0});var j=n(D);for(let q=0;q<M.length;q+=1)M[q].l(j);j.forEach(a),F.forEach(a),this.h()},h(){t(u,"class","i-heroicons-outline-menu-alt-1"),t(i,"for","navbar-dropdown"),t(i,"tabindex","0"),t(i,"class","btn btn-square btn-ghost"),t(g,"id","navbar-dropdown"),t(g,"tabindex","0"),t(g,"class","menu menu-compact dropdown-content bg-base-100 text-base-content shadow-lg rounded-box min-w-max max-w-52 p-2 "),Ot(g,"hidden",!d[4]),t(l,"class","dropdown lg:hidden"),t(h,"class","swap-on btn btn-ghost text-base font-normal normal-case transition-all duration-200"),Ot(h,"hidden",d[3]<32||!d[2]),t(D,"class","swap-off menu menu-horizontal p-0"),Ot(D,"hidden",d[3]>64&&d[2]),t(m,"class","pl-16 swap order-last hidden lg:inline-grid"),Ot(m,"swap-active",d[3]>32&&d[2])},m(b,L){Qe(b,l,L),e(l,i),e(i,u),e(l,v),e(l,g);for(let y=0;y<k.length;y+=1)k[y]&&k[y].m(g,null);Qe(b,x,L),Qe(b,m,L),e(m,h),A&&A.m(h,null),e(h,E),e(h,w),e(m,V),e(m,D);for(let y=0;y<M.length;y+=1)M[y]&&M[y].m(D,null);I||(_=zh(h,"click",d[7]),I=!0)},p(b,[L]){if(L&3){O=b[0];let y;for(y=0;y<O.length;y+=1){const N=Nw(b,O,y);k[y]?k[y].p(N,L):(k[y]=$w(N),k[y].c(),k[y].m(g,null))}for(;y<k.length;y+=1)k[y].d(1);k.length=O.length}if(L&16&&Ot(g,"hidden",!b[4]),L&4&&vg(w,b[2]),L&12&&Ot(h,"hidden",b[3]<32||!b[2]),L&3){G=b[0];let y;for(y=0;y<G.length;y+=1){const N=Mw(b,G,y);M[y]?M[y].p(N,L):(M[y]=Uw(N),M[y].c(),M[y].m(D,null))}for(;y<M.length;y+=1)M[y].d(1);M.length=G.length}L&12&&Ot(D,"hidden",b[3]>64&&b[2]),L&12&&Ot(m,"swap-active",b[3]>32&&b[2])},i:Re,o:Re,d(b){b&&a(l),fg(k,b),b&&a(x),b&&a(m),A&&A.d(),fg(M,b),I=!1,_()}}}function fE(d,l,i){let u;M_(d,H_,_=>i(10,u=_));let{nav:v}=l,{path:g}=l,{title:x}=l,{scrollY:m}=l,{pin:h}=l,E=u.url.toString().split("/")[3];const w=({link:_})=>_===g,V=()=>window.scrollTo(0,0),D=({link:_})=>_===g,I=({link:_})=>_===g;return d.$$set=_=>{"nav"in _&&i(0,v=_.nav),"path"in _&&i(1,g=_.path),"title"in _&&i(2,x=_.title),"scrollY"in _&&i(3,m=_.scrollY),"pin"in _&&i(4,h=_.pin)},[v,g,x,m,h,E,w,V,D,I]}class pE extends yn{constructor(l){super(),wn(this,l,fE,uE,ja,{nav:0,path:1,title:2,scrollY:3,pin:4})}}function vE(d){let l,i,u,v,g,x,m;return{c(){l=s("form"),i=s("input"),u=o(),v=s("input"),g=o(),x=s("button"),m=s("span"),this.h()},l(h){l=r(h,"FORM",{action:!0,method:!0,class:!0});var E=n(l);i=r(E,"INPUT",{type:!0,name:!0,class:!0}),u=c(E),v=r(E,"INPUT",{type:!0,name:!0}),g=c(E),x=r(E,"BUTTON",{type:!0,class:!0});var w=n(x);m=r(w,"SPAN",{class:!0}),n(m).forEach(a),w.forEach(a),E.forEach(a),this.h()},h(){var h,E,w,V;t(i,"type","text"),t(i,"name","q"),t(i,"class","input input-ghost input-bordered xl:bg-base-100 xl:text-base-content transition-all w-full h-12"),t(v,"type","hidden"),t(v,"name",((E=(h=dg)==null?void 0:h.search)==null?void 0:E.provider)==="duckduckgo"?"sites":"sitesearch"),v.value=Ow.protocol+Ow.domain,t(m,"class","i-heroicons-outline-search"),t(x,"type","submit"),t(x,"class","btn btn-square btn-ghost ml-2"),t(l,"action",((V=(w=dg)==null?void 0:w.search)==null?void 0:V.provider)==="duckduckgo"?"//duckduckgo.com/":"//google.com/search"),t(l,"method","get"),t(l,"class","flex-1")},m(h,E){Qe(h,l,E),e(l,i),e(l,u),e(l,v),e(l,g),e(l,x),e(x,m)},p:Re,i:Re,o:Re,d(h){h&&a(l)}}}class gE extends yn{constructor(l){super(),wn(this,l,null,vE,ja,{})}}const{document:Hw,window:r2}=N_;function Yw(d,l,i){const u=d.slice();return u[14]=l[i].name,u[15]=l[i].text,u}function hE(d,l,i){const u=d.slice();return u[18]=l[i],u}function mE(d){let l,i,u,v,g,x,m,h,E,w;return i=new gE({}),{c(){l=s("div"),Qn(i.$$.fragment),u=o(),v=s("button"),g=s("span"),this.h()},l(V){l=r(V,"DIV",{class:!0});var D=n(l);Zn(i.$$.fragment,D),u=c(D),v=r(D,"BUTTON",{tabindex:!0,class:!0});var I=n(v);g=r(I,"SPAN",{class:!0}),n(g).forEach(a),I.forEach(a),D.forEach(a),this.h()},h(){t(g,"class","i-heroicons-outline-x"),t(v,"tabindex","0"),t(v,"class","btn btn-square btn-ghost mr-8"),t(l,"class","navbar")},m(V,D){Qe(V,l,D),el(i,l,null),e(l,u),e(l,v),e(v,g),h=!0,E||(w=zh(v,"click",d[12]),E=!0)},p:Re,i(V){h||(Os(i.$$.fragment,V),$c(()=>{h&&(m&&m.end(1),x=Ud(l,wr,{x:50,duration:300,delay:300}),x.start())}),h=!0)},o(V){Ls(i.$$.fragment,V),x&&x.invalidate(),m=Hd(l,wr,{x:50,duration:300}),h=!1},d(V){V&&a(l),tl(i),V&&m&&m.end(),E=!1,w()}}}function xE(d){let l,i,u,v,g,x,m,h,E,w,V,D,I,_,O,k,A,G=dg.nav&&bE(d),M=dg.search&&yE(d),b=Lw,L=[];for(let y=0;y<b.length;y+=1)L[y]=Ww(Yw(d,b,y));return{c(){l=s("div"),i=s("div"),G&&G.c(),u=o(),v=s("a"),g=s("img"),m=o(),h=s("div"),M&&M.c(),E=o(),w=s("div"),V=s("div"),D=s("span"),I=o(),_=s("ul");for(let y=0;y<L.length;y+=1)L[y].c();this.h()},l(y){l=r(y,"DIV",{class:!0});var N=n(l);i=r(N,"DIV",{class:!0});var F=n(i);G&&G.l(F),u=c(F),v=r(F,"A",{href:!0,class:!0});var C=n(v);g=r(C,"IMG",{src:!0,alt:!0,class:!0}),C.forEach(a),F.forEach(a),m=c(N),h=r(N,"DIV",{class:!0});var j=n(h);M&&M.l(j),E=c(j),w=r(j,"DIV",{id:!0,class:!0});var q=n(w);V=r(q,"DIV",{tabindex:!0,class:!0});var K=n(V);D=r(K,"SPAN",{class:!0}),n(D).forEach(a),K.forEach(a),I=c(q),_=r(q,"UL",{tabindex:!0,class:!0});var $=n(_);for(let ce=0;ce<L.length;ce+=1)L[ce].l($);$.forEach(a),q.forEach(a),j.forEach(a),N.forEach(a),this.h()},h(){S(g.src,x="/assets/pfp.png")||t(g,"src",x),t(g,"alt","logo"),t(g,"class","u-photo z-14 h-14"),t(v,"href","/"),t(v,"class","btn btn-ghost normal-case text-lg gap-3"),t(i,"class","navbar-start"),t(D,"class","i-heroicons-outline-color-swatch"),t(V,"tabindex","0"),t(V,"class","btn btn-square btn-ghost"),t(_,"tabindex","0"),t(_,"class","flex flex-nowrap shadow-2xl menu dropdown-content bg-base-100 text-base-content rounded-box w-52 p-2 gap-2 overflow-y-auto max-h-[21.5rem]"),Ot(_,"hidden",!d[6]),t(w,"id","change-theme"),t(w,"class","dropdown dropdown-end"),t(h,"class","navbar-end mr-8"),t(l,"class","navbar pl-16")},m(y,N){Qe(y,l,N),e(l,i),G&&G.m(i,null),e(i,u),e(i,v),e(v,g),e(l,m),e(l,h),M&&M.m(h,null),e(h,E),e(h,w),e(w,V),e(V,D),e(w,I),e(w,_);for(let F=0;F<L.length;F+=1)L[F]&&L[F].m(_,null);A=!0},p(y,N){if(dg.nav&&G.p(y,N),dg.search&&M.p(y,N),N&2){b=Lw;let F;for(F=0;F<b.length;F+=1){const C=Yw(y,b,F);L[F]?L[F].p(C,N):(L[F]=Ww(C),L[F].c(),L[F].m(_,null))}for(;F<L.length;F+=1)L[F].d(1);L.length=b.length}(!A||N&64)&&Ot(_,"hidden",!y[6])},i(y){A||(Os(G),$c(()=>{A&&(k&&k.end(1),O=Ud(l,wr,{x:-50,duration:300,delay:300}),O.start())}),A=!0)},o(y){Ls(G),O&&O.invalidate(),k=Hd(l,wr,{x:-50,duration:300}),A=!1},d(y){y&&a(l),G&&G.d(),M&&M.d(),fg(L,y),y&&k&&k.end()}}}function bE(d){let l,i;return l=new pE({props:{path:d[0],title:d[3],pin:d[6],scrollY:d[2],nav:dg.nav}}),{c(){Qn(l.$$.fragment)},l(u){Zn(l.$$.fragment,u)},m(u,v){el(l,u,v),i=!0},p(u,v){const g={};v&1&&(g.path=u[0]),v&8&&(g.title=u[3]),v&64&&(g.pin=u[6]),v&4&&(g.scrollY=u[2]),l.$set(g)},i(u){i||(Os(l.$$.fragment,u),i=!0)},o(u){Ls(l.$$.fragment,u),i=!1},d(u){tl(l,u)}}}function yE(d){let l,i,u,v;return{c(){l=s("button"),i=s("span"),this.h()},l(g){l=r(g,"BUTTON",{"aria-label":!0,tabindex:!0,class:!0});var x=n(l);i=r(x,"SPAN",{class:!0}),n(i).forEach(a),x.forEach(a),this.h()},h(){t(i,"class","i-heroicons-outline-search"),t(l,"aria-label","search"),t(l,"tabindex","0"),t(l,"class","btn btn-square btn-ghost")},m(g,x){Qe(g,l,x),e(l,i),u||(v=zh(l,"click",d[10]),u=!0)},p:Re,d(g){g&&a(l),u=!1,v()}}}function wE(d){let l;return{c(){l=s("div"),this.h()},l(i){l=r(i,"DIV",{class:!0}),n(l).forEach(a),this.h()},h(){t(l,"class",`${d[18]} w-1 h-4 rounded-btn`)},m(i,u){Qe(i,l,u)},p:Re,d(i){i&&a(l)}}}function Ww(d){let l,i,u=(d[15]??d[14])+"",v,g,x,m,h,E,w=["bg-primary","bg-secondary","bg-accent","bg-neutral"],V=[];for(let I=0;I<4;I+=1)V[I]=wE(hE(d,w,I));function D(){return d[11](d[14])}return{c(){l=s("button"),i=s("p"),v=f(u),g=o(),x=s("div");for(let I=0;I<4;I+=1)V[I].c();m=o(),this.h()},l(I){l=r(I,"BUTTON",{"data-theme":!0,class:!0});var _=n(l);i=r(_,"P",{class:!0});var O=n(i);v=p(O,u),O.forEach(a),g=c(_),x=r(_,"DIV",{class:!0});var k=n(x);for(let A=0;A<4;A+=1)V[A].l(k);k.forEach(a),m=c(_),_.forEach(a),this.h()},h(){t(i,"class","flex-1 text-left text-base-content group-hover:text-primary-content transition-color"),t(x,"class","grid grid-cols-4 gap-0.5 m-auto"),t(l,"data-theme",d[14]),t(l,"class","btn btn-ghost w-full hover:bg-primary group rounded-lg flex bg-base-100 p-2 transition-all"),Ot(l,"border-2",d[1]===d[14]),Ot(l,"border-primary",d[1]===d[14])},m(I,_){Qe(I,l,_),e(l,i),e(i,v),e(l,g),e(l,x);for(let O=0;O<4;O+=1)V[O]&&V[O].m(x,null);e(l,m),h||(E=zh(l,"click",D),h=!0)},p(I,_){d=I,_&2&&Ot(l,"border-2",d[1]===d[14]),_&2&&Ot(l,"border-primary",d[1]===d[14])},d(I){I&&a(l),fg(V,I),h=!1,E()}}}function _E(d){let l=!1,i=()=>{l=!1},u,v,g,x,m,h,E,w,V,D,I,_,O,k,A,G,M,b;$c(d[9]);const L=[xE,mE],y=[];function N(F,C){return F[5]?1:0}return m=N(d),h=y[m]=L[m](d),{c(){v=s("meta"),g=o(),x=s("header"),h.c(),w=o(),V=s("button"),D=s("div"),_=o(),O=s("div"),k=s("span"),this.h()},l(F){const C=o2("svelte-1g590ms",Hw.head);v=r(C,"META",{name:!0,content:!0}),C.forEach(a),g=c(F),x=r(F,"HEADER",{id:!0,class:!0});var j=n(x);h.l(j),j.forEach(a),w=c(F),V=r(F,"BUTTON",{id:!0,"aria-label":!0,class:!0});var q=n(V);D=r(q,"DIV",{class:!0,style:!0}),n(D).forEach(a),_=c(q),O=r(q,"DIV",{class:!0});var K=n(O);k=r(K,"SPAN",{class:!0}),n(k).forEach(a),K.forEach(a),q.forEach(a),this.h()},h(){t(v,"name","theme-color"),t(v,"content",d[4]),t(x,"id","header"),t(x,"class",E="fixed z-50 w-screen transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[6.5rem] bg-pfp-navy text-white tracking-menu pb-5 pt-5 "+(d[2]>32&&"backdrop-blur border-base-content/10 bg-pfp-navy-100/30 md:bg-pfp-navy/30 text-pfp-navy")),Ot(x,"-translate-y-32",!d[6]&&d[2]>0),t(D,"class","radial-progress text-accent transition-all duration-500 ease-in-out group-hover:text-accent-focus col-start-1 row-start-1"),t(D,"style",I=`--size:4rem; --thickness: 0.25rem; --value:${d[7]};`),t(k,"class","i-heroicons-solid-chevron-up !w-6 !h-6"),t(O,"class","border-4 border-base-content/10 group-hover:border-transparent col-start-1 row-start-1 rounded-full w-full h-full p-4 grid duration-500 ease-in-out"),Ot(O,"border-transparent",d[7]>95),t(V,"id","totop"),t(V,"aria-label","scroll to top"),t(V,"class",A="fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out "+(d[7]>95?"btn-accent shadow-lg":"btn-ghost bg-base-100/30 md:bg-base-200/30")),Ot(V,"translate-y-24",!d[6]||d[2]===0),Ot(V,"opacity-100",d[2])},m(F,C){e(Hw.head,v),Qe(F,g,C),Qe(F,x,C),y[m].m(x,null),Qe(F,w,C),Qe(F,V,C),e(V,D),e(V,_),e(V,O),e(O,k),G=!0,M||(b=[zh(r2,"scroll",()=>{l=!0,clearTimeout(u),u=setTimeout(i,100),d[9]()}),zh(V,"click",d[13])],M=!0)},p(F,[C]){C&4&&!l&&(l=!0,clearTimeout(u),scrollTo(r2.pageXOffset,F[2]),u=setTimeout(i,100)),(!G||C&16)&&t(v,"content",F[4]);let j=m;m=N(F),m===j?y[m].p(F,C):(c2(),Ls(y[j],1,1,()=>{y[j]=null}),d2(),h=y[m],h?h.p(F,C):(h=y[m]=L[m](F),h.c()),Os(h,1),h.m(x,null)),(!G||C&4&&E!==(E="fixed z-50 w-screen transition-all duration-500 ease-in-out border-b-2 border-transparent max-h-[6.5rem] bg-pfp-navy text-white tracking-menu pb-5 pt-5 "+(F[2]>32&&"backdrop-blur border-base-content/10 bg-pfp-navy-100/30 md:bg-pfp-navy/30 text-pfp-navy")))&&t(x,"class",E),(!G||C&68)&&Ot(x,"-translate-y-32",!F[6]&&F[2]>0),(!G||C&128&&I!==(I=`--size:4rem; --thickness: 0.25rem; --value:${F[7]};`))&&t(D,"style",I),(!G||C&128)&&Ot(O,"border-transparent",F[7]>95),(!G||C&128&&A!==(A="fixed grid group btn btn-circle btn-lg border-none backdrop-blur bottom-6 right-6 z-50 duration-500 ease-in-out "+(F[7]>95?"btn-accent shadow-lg":"btn-ghost bg-base-100/30 md:bg-base-200/30")))&&t(V,"class",A),(!G||C&196)&&Ot(V,"translate-y-24",!F[6]||F[2]===0),(!G||C&132)&&Ot(V,"opacity-100",F[2])},i(F){G||(Os(h),G=!0)},o(F){Ls(h),G=!1},d(F){a(v),F&&a(g),F&&a(x),y[m].d(),F&&a(w),F&&a(V),M=!1,j_(b)}}}function EE(d,l,i){let{path:u}=l,v,g,x,m=!1,h=!0,E,[w,V]=[0,0];R_.subscribe(A=>i(3,v=A));function D(){i(2,w=r2.pageYOffset)}const I=()=>i(5,m=!m),_=A=>{i(1,g=A),localStorage.setItem("theme",A)},O=()=>i(5,m=!m),k=()=>window.scrollTo(0,0);return d.$$set=A=>{"path"in A&&i(0,u=A.path)},d.$$.update=()=>{d.$$.dirty&2&&g&&(document.documentElement.setAttribute("data-theme",g),i(4,x=nE(...getComputedStyle(document.documentElement).getPropertyValue("--b1").slice(0).replaceAll("%","").split(" ").map(Number)))),d.$$.dirty&260&&w&&(i(6,h=V-w>0||w===0),i(8,V=w),i(7,E=Math.round(w/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*1e4)/100))},[u,g,w,v,x,m,h,E,V,D,I,_,O,k]}class IE extends yn{constructor(l){super(),wn(this,l,EE,_E,ja,{path:0})}}function zw(d){let l,i,u,v;const g=d[2].default,x=p_(g,d,d[1],null);return{c(){l=s("div"),x&&x.c(),this.h()},l(m){l=r(m,"DIV",{class:!0});var h=n(l);x&&x.l(h),h.forEach(a),this.h()},h(){t(l,"class","bg-base-100 md:bg-base-200 min-h-screen pt-16 md:pb-8 lg:pb-16")},m(m,h){Qe(m,l,h),x&&x.m(l,null),v=!0},p(m,h){x&&x.p&&(!v||h&2)&&v_(x,g,m,m[1],v?h_(g,m[1],h,null):g_(m[1]),null)},i(m){v||(Os(x,m),$c(()=>{v&&(u&&u.end(1),i=Ud(l,wr,{y:100,duration:300,delay:300}),i.start())}),v=!0)},o(m){Ls(x,m),i&&i.invalidate(),u=Hd(l,wr,{y:-100,duration:300}),v=!1},d(m){m&&a(l),x&&x.d(m),m&&u&&u.end()}}}function DE(d){let l=d[0],i,u,v=zw(d);return{c(){v.c(),i=ea()},l(g){v.l(g),i=ea()},m(g,x){v.m(g,x),Qe(g,i,x),u=!0},p(g,[x]){x&1&&ja(l,l=g[0])?(c2(),Ls(v,1,1,Re),d2(),v=zw(g),v.c(),Os(v,1),v.m(i.parentNode,i)):v.p(g,x)},i(g){u||(Os(v),u=!0)},o(g){Ls(v),u=!1},d(g){g&&a(i),v.d(g)}}}function VE(d,l,i){let{$$slots:u={},$$scope:v}=l,{path:g=""}=l;return d.$$set=x=>{"path"in x&&i(0,g=x.path),"$$scope"in x&&i(1,v=x.$$scope)},[g,v,u]}class PE extends yn{constructor(l){super(),wn(this,l,VE,DE,ja,{path:0})}}function kE(d){let l,i,u,v,g,x,m,h,E,w,V,D,I,_,O,k,A,G,M,b,L,y,N,F,C,j,q,K,$,ce,Se,z,R,se,ye,ae,Ke,we,te,ve,Ne,Ve,ie,_e,Ce,Y,Q,Ee=" ",pe,me,ge,de,J,$e,We,xe,X,He,Ge,ee,Me,Te,ze,Ie,he,ue,rt,Je,Xe,P,B,U,W,Z,oe,H,fe,Pe,ne,be,vt,Be,le,Ae,De,je,Fe,qe,ft,ke,Ze,Nt,Lt,Oe,mt,Pt,Le,at,ct,Ct,gt,Dt,pt,Bt,kt,re,nt,Tt,Rt,it,dt,Zt,qt,ot,xt,et,St,It,Gt,es,Vt,Ue,ut,$t,Et,bt,lt,At,yt,Ut,zt,Ft,Mt,Jt,Ht,Xt,ht,Js,Vs,Kt,st,jt,ss,Xs,Ps,Qt,wt,Qs,ks,ns,jr,Na,ms,ur,_r,ls,Er,Yt,Ss,Cs,fr,ta,di,Gs,is,sa,pr,us,sl,Ba,xs,ra,_n,aa,Zs,ui,En,bs,na,la,Ts,Ir,Ra,ia,ts,vr,er,oa,os,Ms,Us,cs,rl,fi,gr,rs,pi,In,Nr,al,nl,lo,vi,ys,Dr,$a,Wt,Vr,Hs,tr,As,ca,da,ua,gi,Ys,fs,Ul,ll,ws,hr,Dn,sr,fa,il,Pr,as,Ws,js,ps,kr,ol,hi,rr,ar,_s,Sr,pa,Vn,cl,mi,vs,Es,Br,Pn,dl,kn,zs,nr,mr,va,io,ul,Sn,qa,Ua,Wc,zc,Rr,xi,Wd,oo,bi,lr,ds,Tn,An,Ha,yi,wi,ga,ir,co,Kc,$r,Fn,Jc,_i,ha,Ya,On,Ju,uo,Wa,za,ma,Is,xa,fo,qr,Ka,ba,ya,Hl,Ei,Ii,Yl,Di,Ln,or,Ja,Cn,Xa,Qo,Xc,po,fl,Ur,Ds,wa,Vi,zd,Ks,xr,Qa,Pi,ki,Za,en,Wl,pl,gs,_a,Si,Ea,Zo,Qc,cr,Ns,vl,Gn,Fs,Ia,Zc,gl,Bs,Ti,Kd,Tr,Ar,Jd,ed,Fr,tn;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=f("About us"),m=o(),h=s("div"),E=s("img"),V=o(),D=s("div"),I=s("div"),_=s("div"),O=f("Purpose"),k=o(),A=s("img"),M=o(),b=s("div"),L=s("div"),y=s("div"),N=o(),F=s("div"),C=f(`Our mission is to empower communities and businesses by helping them take control of their energy and
                environmental footprint.`),j=o(),q=s("div"),K=s("div"),$=s("div"),ce=f(`By choosing to generate power from non-recycled waste, you can achieve supply security, cost control, and
                    environmental improvements while reducing dependence on the grid. Our projects operate continuously,
                    ensuring uninterrupted energy supply. They enable you to establish your own energy pricing while providing
                    eco-friendly electricity, biogas, and hydrogen. Our approach eliminates landfill waste, ocean dumping, and
                    open burning for a greener future.`),Se=o(),z=s("div"),R=s("div"),se=s("div"),ye=f("Mission"),ae=o(),Ke=s("div"),we=s("div"),te=s("img"),Ne=o(),Ve=s("div"),ie=s("div"),_e=s("div"),Ce=o(),Y=s("div"),Q=f(`Our innovative digital ecosystem enables you to discover the potential of power generation from non-recycled
                waste across various sectors, including agriculture, food services, manufacturing, and distribution chains.`),pe=f(Ee),me=o(),ge=s("div"),de=s("div"),J=s("div"),$e=f(`We’ll collaborate with you to develop a tailored project. Our platform streamlines your journey from
                    feasibility to operation by connecting you with essential partners, such as technology providers, materials
                    analysts, funders, permit specialists, and construction and operation teams. No matter the size of your
                    waste output, from thousands of tonnes annually to just a few kilograms daily, we have a technology solution
                    designed to meet your needs.`),We=o(),xe=s("div"),X=s("div"),He=s("div"),Ge=f("Vision"),ee=o(),Me=s("img"),ze=o(),Ie=s("div"),he=s("div"),ue=s("div"),rt=o(),Je=s("div"),Xe=f("Our vision is founded on the “6R” principles: Reduce, Reuse, Recycle, Repurpose, Regenerate, and Regrowth."),P=o(),B=s("div"),U=s("div"),W=s("div"),Z=f(`Reduce consumption and resource use in our daily lives Reuse items until they no longer serve a purpose
                    Recycle all recyclable materials Repurpose non-recycled waste to generate green energy locally Regenerate
                    our environment by adopting circular models focused on nature, including our own by-products like organic
                    fertilizers, char, and biochar Regrowth involves fostering an economy that harmonizes our biosphere and
                    financial ecosystem after applying the first five principles`),oe=o(),H=s("div"),fe=s("div"),Pe=s("div"),ne=s("div"),be=f("Meet the team"),vt=o(),Be=s("div"),le=s("div"),Ae=s("div"),De=s("div"),je=s("img"),qe=o(),ft=s("div"),ke=s("div"),Ze=s("div"),Nt=f("Dermot McKeever"),Lt=o(),Oe=s("div"),mt=f("PFP Co-Founder and CEO"),Pt=o(),Le=s("div"),at=s("div"),ct=s("div"),Ct=f("BSc"),gt=o(),Dt=s("div"),pt=s("div"),Bt=f("Dip"),kt=o(),re=s("div"),nt=s("div"),Tt=f("PFS"),Rt=o(),it=s("div"),dt=f(`Dermot studied climatology at Leicester University and has extensive experience in the renewable space.
                  Throughout his career, Dermot has demonstrated expertise in business development by holding senior leadership
                  positions across a wide range of business models, from global enterprises to start-ups such as Nutmeg, a
                  leading digital wealth management platform. He has also held numerous consultancy, board adviser and NED roles
                  and is a published author on leadership.`),Zt=o(),qt=s("img"),xt=o(),et=s("div"),St=s("div"),It=s("img"),es=o(),Vt=s("div"),Ue=s("div"),ut=s("div"),$t=f("James Cole"),Et=o(),bt=s("div"),lt=f("PFP Co-Founder and Chairman"),At=o(),yt=s("div"),Ut=s("div"),zt=s("div"),Ft=f("BSc"),Mt=o(),Jt=s("div"),Ht=f(`James has over 30 years of experience in real estate development and consultancy for multinational groups in
                  Asia, North America, Continental Europe and the UK. Furthermore, he has invested in and guided businesses in
                  private aviation, real estate investment, and renewable energy. Graduated from the Royal Military Academy
                  Sandhurst, after which he served in The Royal Green Jackets (now Rifles). He co-founded PFP to facilitate and
                  encourage a quantum shift in utilising waste as a green renewable energy source.`),Xt=o(),ht=s("img"),Vs=o(),Kt=s("div"),st=s("div"),jt=s("div"),ss=s("img"),Ps=o(),Qt=s("div"),wt=s("div"),Qs=s("div"),ks=f("Simon Edwards"),ns=o(),jr=s("div"),Na=f("Senior Consultant"),ms=o(),ur=s("div"),_r=s("div"),ls=s("div"),Er=f("BSc"),Yt=o(),Ss=s("div"),Cs=f(`Simon, a University of Warwick alumnus, has 30+ years’ experience providing clients across all sectors of the
                  economy with energy reduction/management solutions and electricity/ gas procurement advice. Simon is utilising
                  his vast experience and connections in the energy sector to advise PFP’s clients on the cost savings and
                  impacts of utilising waste as a power source. Additionally, he runs the PFP introducer network, consisting of
                  industry heavyweights tasked with identifying potential projects.`),fr=o(),ta=s("img"),Gs=o(),is=s("div"),sa=s("div"),pr=s("img"),sl=o(),Ba=s("div"),xs=s("div"),ra=s("div"),_n=f("Alice Chave"),aa=o(),Zs=s("div"),ui=f("Environmental and Technical Engineer"),En=o(),bs=s("div"),na=f(`Alice holds a Master of Science in Engineering for International Development from the University College
                  London, complemented with a Bachelors in Environmental Engineering. Throughout her academic and professional
                  journey, she has been involved in international development projects, focusing on designing off-grid solutions
                  to benefit communities in the developing world.`),la=o(),Ts=s("img"),Ra=o(),ia=s("div"),ts=s("div"),vr=s("div"),er=s("img"),os=o(),Ms=s("div"),Us=s("div"),cs=s("div"),rl=f("Tim Edwards"),fi=o(),gr=s("div"),rs=f("Strategy Executive"),pi=o(),In=s("div"),Nr=f(`Tim is an economist with specialised skills in data, analytics, and strategy. He applies his understanding of
                  economic principles to analyse data and develop effective strategies for PFP’s clients. A University of
                  Bristol graduate, Tim boasts an accolade from The Chartered Banker Institute’s essay competition, where his
                  piece on how finance professionals can help achieve society’s goals on climate change was published alongside
                  distinguished academics, business leaders, and politicians.`),al=o(),nl=s("img"),vi=o(),ys=s("div"),Dr=s("div"),$a=s("img"),Vr=o(),Hs=s("div"),tr=s("div"),As=s("div"),ca=f("Paul Lee"),da=o(),ua=s("div"),gi=f("Chief Resilience Officer"),Ys=o(),fs=s("div"),Ul=f(`Paul is an experienced Information Security Leader with expertise in FinTech and cryptocurrency. With 19 years
                  of experience in the UK and US, he has directed the infrastructure for a leading Security Certificate
                  Authority. Passionate about renewable energy and carbon-negative initiatives, he holds degrees from the
                  universities of Leeds and Liverpool, making a valuable asset to our team.`),ll=o(),ws=s("img"),Dn=o(),sr=s("div"),fa=s("div"),il=f("Advisory board"),Pr=o(),as=s("div"),Ws=s("div"),js=s("div"),ps=s("div"),kr=s("img"),hi=o(),rr=s("div"),ar=s("div"),_s=s("div"),Sr=f("Dr. Linda Hilton"),pa=o(),Vn=s("div"),cl=f("Board Advisor"),mi=o(),vs=s("div"),Es=s("div"),Br=s("div"),Pn=f("PhD"),dl=o(),kn=s("div"),zs=s("div"),nr=f("CChem"),mr=o(),va=s("div"),io=s("div"),ul=f("FRSC"),Sn=o(),qa=s("div"),Ua=s("div"),Wc=f("CSci"),zc=o(),Rr=s("div"),xi=f(`Linda brings a unique blend of strategy, science, technology and management expertise gained across various
                  sectors including FMCG, IT, engineering, nuclear, environmental and renewables. Capable of offering both
                  strategic and operational insight, Linda has worked in a variety of different roles and environments around
                  the world for large corporates, research organisations, SME’s, spin-offs and start-ups (social enterprise) and
                  is passionate about using this experience to help people to mitigate climate change.`),Wd=o(),oo=s("img"),lr=o(),ds=s("div"),Tn=s("div"),An=s("img"),yi=o(),wi=s("div"),ga=s("div"),ir=s("div"),co=f("Alexandre Chavarot"),Kc=o(),$r=s("div"),Fn=f("Board Advisor"),Jc=o(),_i=s("div"),ha=f(`Alexandre, a UK-based independent climate and energy transition finance professional offers expert advisory
                  services to a diverse range of clients, including corporates, asset owners and managers, government entities,
                  and foundations. His background spans project and corporate acquisitions, risk assessments, investments, and
                  financings in the energy, infrastructure, and maritime sectors, working with leading investment banks,
                  foundations, and advisory firms. Alexandre holds degrees from prestigious institutions, including Sciences Po,
                  Harvard, and INSEAD. His passion for addressing climate change and sustainable development make him a vital
                  contributor to the ongoing global transition to a more sustainable future.`),Ya=o(),On=s("img"),uo=o(),Wa=s("div"),za=s("div"),ma=s("div"),Is=s("img"),fo=o(),qr=s("div"),Ka=s("div"),ba=s("div"),ya=f("Jayne Walters"),Hl=o(),Ei=s("div"),Ii=f("Board Advisor"),Yl=o(),Di=s("div"),Ln=s("div"),or=s("div"),Ja=f("BSc"),Cn=o(),Xa=s("div"),Qo=f(`Jayne is a lawyer with extensive legal experience having been a partner in a major City law firm and General
                  Counsel for property investment, development and financing businesses. Jayne oversees PFP’s compliance with
                  the business’s legal requirements and advises on the contracts required for individual projects. Jayne holds a
                  degree from The University of Cambridge.`),Xc=o(),po=s("img"),Ur=o(),Ds=s("div"),wa=s("div"),Vi=s("img"),Ks=o(),xr=s("div"),Qa=s("div"),Pi=s("div"),ki=f("Shanika Amarasekara"),Za=o(),en=s("div"),Wl=f("Board advisor"),pl=o(),gs=s("div"),_a=f(`Shanika was Chief Impact Officer at British Business Bank and an Executive Committee member responsible for
                  ESG, Economics, Policy and Strategy. Recently, Shanika was involved in the creation of both the Coronavirus
                  Business Interruption Loan Scheme (CBILS) and the Future Fund. The scale of both schemes expanded the bank’s
                  balance sheet by ten times. She was appointed General Counsel and Company Secretary and was a founder member
                  of the Senior Management Team which established and launched the bank in 2014. The bank was set up to increase
                  the supply of credit and finance to SMEs, enabling these companies to contribute effectively to the UK
                  economy.`),Si=o(),Ea=s("img"),Qc=o(),cr=s("div"),Ns=s("div"),vl=f("Copyright © 2023 Power for Planet"),Gn=o(),Fs=s("div"),Ia=s("div"),Zc=f("Privacy Policy"),gl=o(),Bs=s("div"),Ti=s("img"),Tr=o(),Ar=s("img"),ed=o(),Fr=s("img"),this.h()},l(sn){l=r(sn,"DIV",{class:!0});var hl=n(l);i=r(hl,"DIV",{class:!0});var vo=n(i);u=r(vo,"DIV",{class:!0});var zl=n(u);v=r(zl,"DIV",{class:!0});var Xd=n(v);g=r(Xd,"DIV",{});var Hr=n(g);x=p(Hr,"About us"),Hr.forEach(a),Xd.forEach(a),m=c(zl),h=r(zl,"DIV",{class:!0});var Rs=n(h);E=r(Rs,"IMG",{src:!0,alt:!0,class:!0}),V=c(Rs),D=r(Rs,"DIV",{class:!0});var ml=n(D);I=r(ml,"DIV",{class:!0});var Mn=n(I);_=r(Mn,"DIV",{});var Ai=n(_);O=p(Ai,"Purpose"),Ai.forEach(a),k=c(Mn),A=r(Mn,"IMG",{src:!0,alt:!0,class:!0}),Mn.forEach(a),M=c(ml),b=r(ml,"DIV",{class:!0});var Fi=n(b);L=r(Fi,"DIV",{class:!0});var Yr=n(L);y=r(Yr,"DIV",{class:!0}),n(y).forEach(a),N=c(Yr),F=r(Yr,"DIV",{class:!0});var jn=n(F);C=p(jn,`Our mission is to empower communities and businesses by helping them take control of their energy and
                environmental footprint.`),jn.forEach(a),j=c(Yr),q=r(Yr,"DIV",{class:!0});var Xu=n(q);K=r(Xu,"DIV",{class:!0});var Qd=n(K);$=r(Qd,"DIV",{class:!0});var go=n($);ce=p(go,`By choosing to generate power from non-recycled waste, you can achieve supply security, cost control, and
                    environmental improvements while reducing dependence on the grid. Our projects operate continuously,
                    ensuring uninterrupted energy supply. They enable you to establish your own energy pricing while providing
                    eco-friendly electricity, biogas, and hydrogen. Our approach eliminates landfill waste, ocean dumping, and
                    open burning for a greener future.`),go.forEach(a),Qd.forEach(a),Xu.forEach(a),Yr.forEach(a),Fi.forEach(a),ml.forEach(a),Se=c(Rs),z=r(Rs,"DIV",{class:!0});var $s=n(z);R=r($s,"DIV",{class:!0});var rn=n(R);se=r(rn,"DIV",{class:!0});var Qu=n(se);ye=p(Qu,"Mission"),Qu.forEach(a),ae=c(rn),Ke=r(rn,"DIV",{class:!0});var Zd=n(Ke);we=r(Zd,"DIV",{});var ec=n(we);te=r(ec,"IMG",{src:!0,alt:!0,class:!0}),ec.forEach(a),Zd.forEach(a),rn.forEach(a),Ne=c($s),Ve=r($s,"DIV",{class:!0});var Nn=n(Ve);ie=r(Nn,"DIV",{class:!0});var an=n(ie);_e=r(an,"DIV",{class:!0}),n(_e).forEach(a),Ce=c(an),Y=r(an,"DIV",{class:!0});var tc=n(Y);Q=p(tc,`Our innovative digital ecosystem enables you to discover the potential of power generation from non-recycled
                waste across various sectors, including agriculture, food services, manufacturing, and distribution chains.`),pe=p(tc,Ee),tc.forEach(a),me=c(an),ge=r(an,"DIV",{class:!0});var eu=n(ge);de=r(eu,"DIV",{class:!0});var Oi=n(de);J=r(Oi,"DIV",{class:!0});var Da=n(J);$e=p(Da,`We’ll collaborate with you to develop a tailored project. Our platform streamlines your journey from
                    feasibility to operation by connecting you with essential partners, such as technology providers, materials
                    analysts, funders, permit specialists, and construction and operation teams. No matter the size of your
                    waste output, from thousands of tonnes annually to just a few kilograms daily, we have a technology solution
                    designed to meet your needs.`),Da.forEach(a),Oi.forEach(a),eu.forEach(a),an.forEach(a),Nn.forEach(a),$s.forEach(a),We=c(Rs),xe=r(Rs,"DIV",{class:!0});var Bn=n(xe);X=r(Bn,"DIV",{class:!0});var xl=n(X);He=r(xl,"DIV",{});var ho=n(He);Ge=p(ho,"Vision"),ho.forEach(a),ee=c(xl),Me=r(xl,"IMG",{src:!0,alt:!0,class:!0}),xl.forEach(a),ze=c(Bn),Ie=r(Bn,"DIV",{class:!0});var Zu=n(Ie);he=r(Zu,"DIV",{class:!0});var Rn=n(he);ue=r(Rn,"DIV",{class:!0}),n(ue).forEach(a),rt=c(Rn),Je=r(Rn,"DIV",{class:!0});var bl=n(Je);Xe=p(bl,"Our vision is founded on the “6R” principles: Reduce, Reuse, Recycle, Repurpose, Regenerate, and Regrowth."),bl.forEach(a),P=c(Rn),B=r(Rn,"DIV",{class:!0});var mo=n(B);U=r(mo,"DIV",{class:!0});var xo=n(U);W=r(xo,"DIV",{class:!0});var Va=n(W);Z=p(Va,`Reduce consumption and resource use in our daily lives Reuse items until they no longer serve a purpose
                    Recycle all recyclable materials Repurpose non-recycled waste to generate green energy locally Regenerate
                    our environment by adopting circular models focused on nature, including our own by-products like organic
                    fertilizers, char, and biochar Regrowth involves fostering an economy that harmonizes our biosphere and
                    financial ecosystem after applying the first five principles`),Va.forEach(a),xo.forEach(a),mo.forEach(a),Rn.forEach(a),Zu.forEach(a),Bn.forEach(a),Rs.forEach(a),oe=c(zl),H=r(zl,"DIV",{class:!0});var $n=n(H);fe=r($n,"DIV",{class:!0});var nn=n(fe);Pe=r(nn,"DIV",{class:!0});var tu=n(Pe);ne=r(tu,"DIV",{});var sc=n(ne);be=p(sc,"Meet the team"),sc.forEach(a),tu.forEach(a),vt=c(nn),Be=r(nn,"DIV",{class:!0});var yl=n(Be);le=r(yl,"DIV",{class:!0});var rc=n(le);Ae=r(rc,"DIV",{class:!0});var wl=n(Ae);De=r(wl,"DIV",{class:!0});var Kl=n(De);je=r(Kl,"IMG",{src:!0,alt:!0,class:!0}),qe=c(Kl),ft=r(Kl,"DIV",{class:!0});var qn=n(ft);ke=r(qn,"DIV",{class:!0});var Pa=n(ke);Ze=r(Pa,"DIV",{class:!0});var bo=n(Ze);Nt=p(bo,"Dermot McKeever"),bo.forEach(a),Lt=c(Pa),Oe=r(Pa,"DIV",{class:!0});var Li=n(Oe);mt=p(Li,"PFP Co-Founder and CEO"),Li.forEach(a),Pa.forEach(a),Pt=c(qn),Le=r(qn,"DIV",{class:!0});var ln=n(Le);at=r(ln,"DIV",{class:!0});var _l=n(at);ct=r(_l,"DIV",{});var ka=n(ct);Ct=p(ka,"BSc"),ka.forEach(a),_l.forEach(a),gt=c(ln),Dt=r(ln,"DIV",{class:!0});var El=n(Dt);pt=r(El,"DIV",{});var su=n(pt);Bt=p(su,"Dip"),su.forEach(a),El.forEach(a),kt=c(ln),re=r(ln,"DIV",{class:!0});var Jl=n(re);nt=r(Jl,"DIV",{});var Un=n(nt);Tt=p(Un,"PFS"),Un.forEach(a),Jl.forEach(a),ln.forEach(a),qn.forEach(a),Kl.forEach(a),Rt=c(wl),it=r(wl,"DIV",{class:!0});var ru=n(it);dt=p(ru,`Dermot studied climatology at Leicester University and has extensive experience in the renewable space.
                  Throughout his career, Dermot has demonstrated expertise in business development by holding senior leadership
                  positions across a wide range of business models, from global enterprises to start-ups such as Nutmeg, a
                  leading digital wealth management platform. He has also held numerous consultancy, board adviser and NED roles
                  and is a published author on leadership.`),ru.forEach(a),Zt=c(wl),qt=r(wl,"IMG",{src:!0}),wl.forEach(a),xt=c(rc),et=r(rc,"DIV",{class:!0});var Ci=n(et);St=r(Ci,"DIV",{class:!0});var br=n(St);It=r(br,"IMG",{src:!0,alt:!0,class:!0}),es=c(br),Vt=r(br,"DIV",{class:!0});var on=n(Vt);Ue=r(on,"DIV",{class:!0});var Sa=n(Ue);ut=r(Sa,"DIV",{class:!0});var Gi=n(ut);$t=p(Gi,"James Cole"),Gi.forEach(a),Et=c(Sa),bt=r(Sa,"DIV",{class:!0});var Xl=n(bt);lt=p(Xl,"PFP Co-Founder and Chairman"),Xl.forEach(a),Sa.forEach(a),At=c(on),yt=r(on,"DIV",{class:!0});var Mi=n(yt);Ut=r(Mi,"DIV",{class:!0});var ef=n(Ut);zt=r(ef,"DIV",{});var yo=n(zt);Ft=p(yo,"BSc"),yo.forEach(a),ef.forEach(a),Mi.forEach(a),on.forEach(a),br.forEach(a),Mt=c(Ci),Jt=r(Ci,"DIV",{class:!0});var Ta=n(Jt);Ht=p(Ta,`James has over 30 years of experience in real estate development and consultancy for multinational groups in
                  Asia, North America, Continental Europe and the UK. Furthermore, he has invested in and guided businesses in
                  private aviation, real estate investment, and renewable energy. Graduated from the Royal Military Academy
                  Sandhurst, after which he served in The Royal Green Jackets (now Rifles). He co-founded PFP to facilitate and
                  encourage a quantum shift in utilising waste as a green renewable energy source.`),Ta.forEach(a),Xt=c(Ci),ht=r(Ci,"IMG",{src:!0}),Ci.forEach(a),rc.forEach(a),Vs=c(yl),Kt=r(yl,"DIV",{class:!0});var Ql=n(Kt);st=r(Ql,"DIV",{class:!0});var wo=n(st);jt=r(wo,"DIV",{class:!0});var Il=n(jt);ss=r(Il,"IMG",{src:!0,alt:!0,class:!0}),Ps=c(Il),Qt=r(Il,"DIV",{class:!0});var Hn=n(Qt);wt=r(Hn,"DIV",{class:!0});var qs=n(wt);Qs=r(qs,"DIV",{class:!0});var Wr=n(Qs);ks=p(Wr,"Simon Edwards"),Wr.forEach(a),ns=c(qs),jr=r(qs,"DIV",{class:!0});var Dl=n(jr);Na=p(Dl,"Senior Consultant"),Dl.forEach(a),qs.forEach(a),ms=c(Hn),ur=r(Hn,"DIV",{class:!0});var tf=n(ur);_r=r(tf,"DIV",{class:!0});var au=n(_r);ls=r(au,"DIV",{});var zr=n(ls);Er=p(zr,"BSc"),zr.forEach(a),au.forEach(a),tf.forEach(a),Hn.forEach(a),Il.forEach(a),Yt=c(wo),Ss=r(wo,"DIV",{class:!0});var ji=n(Ss);Cs=p(ji,`Simon, a University of Warwick alumnus, has 30+ years’ experience providing clients across all sectors of the
                  economy with energy reduction/management solutions and electricity/ gas procurement advice. Simon is utilising
                  his vast experience and connections in the energy sector to advise PFP’s clients on the cost savings and
                  impacts of utilising waste as a power source. Additionally, he runs the PFP introducer network, consisting of
                  industry heavyweights tasked with identifying potential projects.`),ji.forEach(a),fr=c(wo),ta=r(wo,"IMG",{src:!0}),wo.forEach(a),Gs=c(Ql),is=r(Ql,"DIV",{class:!0});var _o=n(is);sa=r(_o,"DIV",{class:!0});var Zl=n(sa);pr=r(Zl,"IMG",{src:!0,alt:!0,class:!0}),sl=c(Zl),Ba=r(Zl,"DIV",{class:!0});var hs=n(Ba);xs=r(hs,"DIV",{class:!0});var Aa=n(xs);ra=r(Aa,"DIV",{class:!0});var Eo=n(ra);_n=p(Eo,"Alice Chave"),Eo.forEach(a),aa=c(Aa),Zs=r(Aa,"DIV",{class:!0});var Vl=n(Zs);ui=p(Vl,"Environmental and Technical Engineer"),Vl.forEach(a),Aa.forEach(a),hs.forEach(a),Zl.forEach(a),En=c(_o),bs=r(_o,"DIV",{class:!0});var td=n(bs);na=p(td,`Alice holds a Master of Science in Engineering for International Development from the University College
                  London, complemented with a Bachelors in Environmental Engineering. Throughout her academic and professional
                  journey, she has been involved in international development projects, focusing on designing off-grid solutions
                  to benefit communities in the developing world.`),td.forEach(a),la=c(_o),Ts=r(_o,"IMG",{src:!0}),_o.forEach(a),Ql.forEach(a),Ra=c(yl),ia=r(yl,"DIV",{class:!0});var ac=n(ia);ts=r(ac,"DIV",{class:!0});var Or=n(ts);vr=r(Or,"DIV",{class:!0});var cn=n(vr);er=r(cn,"IMG",{src:!0,alt:!0,class:!0}),os=c(cn),Ms=r(cn,"DIV",{class:!0});var nu=n(Ms);Us=r(nu,"DIV",{class:!0});var nc=n(Us);cs=r(nc,"DIV",{class:!0});var Lr=n(cs);rl=p(Lr,"Tim Edwards"),Lr.forEach(a),fi=c(nc),gr=r(nc,"DIV",{class:!0});var dn=n(gr);rs=p(dn,"Strategy Executive"),dn.forEach(a),nc.forEach(a),nu.forEach(a),cn.forEach(a),pi=c(Or),In=r(Or,"DIV",{class:!0});var Ni=n(In);Nr=p(Ni,`Tim is an economist with specialised skills in data, analytics, and strategy. He applies his understanding of
                  economic principles to analyse data and develop effective strategies for PFP’s clients. A University of
                  Bristol graduate, Tim boasts an accolade from The Chartered Banker Institute’s essay competition, where his
                  piece on how finance professionals can help achieve society’s goals on climate change was published alongside
                  distinguished academics, business leaders, and politicians.`),Ni.forEach(a),al=c(Or),nl=r(Or,"IMG",{src:!0}),Or.forEach(a),vi=c(ac),ys=r(ac,"DIV",{class:!0});var Io=n(ys);Dr=r(Io,"DIV",{class:!0});var Pl=n(Dr);$a=r(Pl,"IMG",{src:!0,alt:!0,class:!0}),Vr=c(Pl),Hs=r(Pl,"DIV",{class:!0});var lc=n(Hs);tr=r(lc,"DIV",{class:!0});var ic=n(tr);As=r(ic,"DIV",{class:!0});var ei=n(As);ca=p(ei,"Paul Lee"),ei.forEach(a),da=c(ic),ua=r(ic,"DIV",{class:!0});var kl=n(ua);gi=p(kl,"Chief Resilience Officer"),kl.forEach(a),ic.forEach(a),lc.forEach(a),Pl.forEach(a),Ys=c(Io),fs=r(Io,"DIV",{class:!0});var Fa=n(fs);Ul=p(Fa,`Paul is an experienced Information Security Leader with expertise in FinTech and cryptocurrency. With 19 years
                  of experience in the UK and US, he has directed the infrastructure for a leading Security Certificate
                  Authority. Passionate about renewable energy and carbon-negative initiatives, he holds degrees from the
                  universities of Leeds and Liverpool, making a valuable asset to our team.`),Fa.forEach(a),ll=c(Io),ws=r(Io,"IMG",{src:!0}),Io.forEach(a),ac.forEach(a),yl.forEach(a),Dn=c(nn),sr=r(nn,"DIV",{class:!0});var oc=n(sr);fa=r(oc,"DIV",{});var lu=n(fa);il=p(lu,"Advisory board"),lu.forEach(a),oc.forEach(a),Pr=c(nn),as=r(nn,"DIV",{class:!0});var Yn=n(as);Ws=r(Yn,"DIV",{class:!0});var Kr=n(Ws);js=r(Kr,"DIV",{class:!0});var un=n(js);ps=r(un,"DIV",{class:!0});var sd=n(ps);kr=r(sd,"IMG",{src:!0,alt:!0,class:!0}),hi=c(sd),rr=r(sd,"DIV",{class:!0});var Bi=n(rr);ar=r(Bi,"DIV",{class:!0});var cc=n(ar);_s=r(cc,"DIV",{class:!0});var Sl=n(_s);Sr=p(Sl,"Dr. Linda Hilton"),Sl.forEach(a),pa=c(cc),Vn=r(cc,"DIV",{class:!0});var Tl=n(Vn);cl=p(Tl,"Board Advisor"),Tl.forEach(a),cc.forEach(a),mi=c(Bi),vs=r(Bi,"DIV",{class:!0});var ti=n(vs);Es=r(ti,"DIV",{class:!0});var iu=n(Es);Br=r(iu,"DIV",{});var si=n(Br);Pn=p(si,"PhD"),si.forEach(a),iu.forEach(a),dl=c(ti),kn=r(ti,"DIV",{class:!0});var Cr=n(kn);zs=r(Cr,"DIV",{});var Jr=n(zs);nr=p(Jr,"CChem"),Jr.forEach(a),Cr.forEach(a),mr=c(ti),va=r(ti,"DIV",{class:!0});var Al=n(va);io=r(Al,"DIV",{});var sf=n(io);ul=p(sf,"FRSC"),sf.forEach(a),Al.forEach(a),Sn=c(ti),qa=r(ti,"DIV",{class:!0});var ri=n(qa);Ua=r(ri,"DIV",{});var Do=n(Ua);Wc=p(Do,"CSci"),Do.forEach(a),ri.forEach(a),ti.forEach(a),Bi.forEach(a),sd.forEach(a),zc=c(un),Rr=r(un,"DIV",{class:!0});var Fl=n(Rr);xi=p(Fl,`Linda brings a unique blend of strategy, science, technology and management expertise gained across various
                  sectors including FMCG, IT, engineering, nuclear, environmental and renewables. Capable of offering both
                  strategic and operational insight, Linda has worked in a variety of different roles and environments around
                  the world for large corporates, research organisations, SME’s, spin-offs and start-ups (social enterprise) and
                  is passionate about using this experience to help people to mitigate climate change.`),Fl.forEach(a),Wd=c(un),oo=r(un,"IMG",{src:!0}),un.forEach(a),lr=c(Kr),ds=r(Kr,"DIV",{class:!0});var fn=n(ds);Tn=r(fn,"DIV",{class:!0});var Ol=n(Tn);An=r(Ol,"IMG",{src:!0,alt:!0,class:!0}),yi=c(Ol),wi=r(Ol,"DIV",{class:!0});var Vo=n(wi);ga=r(Vo,"DIV",{class:!0});var dc=n(ga);ir=r(dc,"DIV",{class:!0});var Wn=n(ir);co=p(Wn,"Alexandre Chavarot"),Wn.forEach(a),Kc=c(dc),$r=r(dc,"DIV",{class:!0});var Xr=n($r);Fn=p(Xr,"Board Advisor"),Xr.forEach(a),dc.forEach(a),Vo.forEach(a),Ol.forEach(a),Jc=c(fn),_i=r(fn,"DIV",{class:!0});var Po=n(_i);ha=p(Po,`Alexandre, a UK-based independent climate and energy transition finance professional offers expert advisory
                  services to a diverse range of clients, including corporates, asset owners and managers, government entities,
                  and foundations. His background spans project and corporate acquisitions, risk assessments, investments, and
                  financings in the energy, infrastructure, and maritime sectors, working with leading investment banks,
                  foundations, and advisory firms. Alexandre holds degrees from prestigious institutions, including Sciences Po,
                  Harvard, and INSEAD. His passion for addressing climate change and sustainable development make him a vital
                  contributor to the ongoing global transition to a more sustainable future.`),Po.forEach(a),Ya=c(fn),On=r(fn,"IMG",{src:!0}),fn.forEach(a),Kr.forEach(a),uo=c(Yn),Wa=r(Yn,"DIV",{class:!0});var rd=n(Wa);za=r(rd,"DIV",{class:!0});var pn=n(za);ma=r(pn,"DIV",{class:!0});var Oa=n(ma);Is=r(Oa,"IMG",{src:!0,alt:!0,class:!0}),fo=c(Oa),qr=r(Oa,"DIV",{class:!0});var ad=n(qr);Ka=r(ad,"DIV",{class:!0});var uc=n(Ka);ba=r(uc,"DIV",{class:!0});var vn=n(ba);ya=p(vn,"Jayne Walters"),vn.forEach(a),Hl=c(uc),Ei=r(uc,"DIV",{class:!0});var Ri=n(Ei);Ii=p(Ri,"Board Advisor"),Ri.forEach(a),uc.forEach(a),Yl=c(ad),Di=r(ad,"DIV",{class:!0});var ai=n(Di);Ln=r(ai,"DIV",{class:!0});var Gr=n(Ln);or=r(Gr,"DIV",{});var zn=n(or);Ja=p(zn,"BSc"),zn.forEach(a),Gr.forEach(a),ai.forEach(a),ad.forEach(a),Oa.forEach(a),Cn=c(pn),Xa=r(pn,"DIV",{class:!0});var rf=n(Xa);Qo=p(rf,`Jayne is a lawyer with extensive legal experience having been a partner in a major City law firm and General
                  Counsel for property investment, development and financing businesses. Jayne oversees PFP’s compliance with
                  the business’s legal requirements and advises on the contracts required for individual projects. Jayne holds a
                  degree from The University of Cambridge.`),rf.forEach(a),Xc=c(pn),po=r(pn,"IMG",{src:!0}),pn.forEach(a),Ur=c(rd),Ds=r(rd,"DIV",{class:!0});var $i=n(Ds);wa=r($i,"DIV",{class:!0});var Qr=n(wa);Vi=r(Qr,"IMG",{src:!0,alt:!0,class:!0}),Ks=c(Qr),xr=r(Qr,"DIV",{class:!0});var fc=n(xr);Qa=r(fc,"DIV",{class:!0});var pc=n(Qa);Pi=r(pc,"DIV",{class:!0});var ko=n(Pi);ki=p(ko,"Shanika Amarasekara"),ko.forEach(a),Za=c(pc),en=r(pc,"DIV",{class:!0});var La=n(en);Wl=p(La,"Board advisor"),La.forEach(a),pc.forEach(a),fc.forEach(a),Qr.forEach(a),pl=c($i),gs=r($i,"DIV",{class:!0});var vc=n(gs);_a=p(vc,`Shanika was Chief Impact Officer at British Business Bank and an Executive Committee member responsible for
                  ESG, Economics, Policy and Strategy. Recently, Shanika was involved in the creation of both the Coronavirus
                  Business Interruption Loan Scheme (CBILS) and the Future Fund. The scale of both schemes expanded the bank’s
                  balance sheet by ten times. She was appointed General Counsel and Company Secretary and was a founder member
                  of the Senior Management Team which established and launched the bank in 2014. The bank was set up to increase
                  the supply of credit and finance to SMEs, enabling these companies to contribute effectively to the UK
                  economy.`),vc.forEach(a),Si=c($i),Ea=r($i,"IMG",{src:!0}),$i.forEach(a),rd.forEach(a),Yn.forEach(a),nn.forEach(a),$n.forEach(a),Qc=c(zl),cr=r(zl,"DIV",{class:!0});var gc=n(cr);Ns=r(gc,"DIV",{class:!0});var So=n(Ns);vl=p(So,"Copyright © 2023 Power for Planet"),So.forEach(a),Gn=c(gc),Fs=r(gc,"DIV",{class:!0});var Ca=n(Fs);Ia=r(Ca,"DIV",{class:!0});var ni=n(Ia);Zc=p(ni,"Privacy Policy"),ni.forEach(a),gl=c(Ca),Bs=r(Ca,"DIV",{class:!0});var Kn=n(Bs);Ti=r(Kn,"IMG",{src:!0,alt:!0,class:!0}),Tr=c(Kn),Ar=r(Kn,"IMG",{src:!0,alt:!0,class:!0}),ed=c(Kn),Fr=r(Kn,"IMG",{src:!0,alt:!0,class:!0}),Kn.forEach(a),Ca.forEach(a),gc.forEach(a),zl.forEach(a),vo.forEach(a),hl.forEach(a),this.h()},h(){t(v,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),S(E.src,w="/assets/new/Line-1.svg")||t(E,"src",w),t(E,"alt","Line 1"),t(E,"class","h-[670px] w-2.5 left-[130px] bottom-[-130px] relative mb-[-700px] z-1"),S(A.src,G="/assets/new/graphic.svg")||t(A,"src",G),t(A,"alt","graphic"),t(A,"class","h-[110px] w-[65px]"),t(I,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),t(y,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(F,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t($,"class","w-[690px]"),t(K,"class","w-full flex-col flex items-start gap-[18px]"),t(q,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(L,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(b,"class","flex-1 flex items-start gap-5"),t(D,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),t(se,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(te.src,ve="/assets/new/graphic-45.svg")||t(te,"src",ve),t(te,"alt","graphic"),t(te,"class","h-[120px] w-[120px]"),t(Ke,"class","flex justify-center items-center gap-2.5 pr-[13px]"),t(R,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full"),t(_e,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(Y,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t(J,"class","w-[690px]"),t(de,"class","w-full flex-col flex items-start gap-[18px]"),t(ge,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(ie,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(Ve,"class","flex-1 flex items-start gap-5"),t(z,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),S(Me.src,Te="/assets/new/graphic-10.svg")||t(Me,"src",Te),t(Me,"alt","graphic"),t(Me,"class","h-[120px] w-[120px]"),t(X,"class","bg-white flex-col h-[260px] w-1/4 flex justify-center items-center gap-3 rounded-full text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),t(ue,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(Je,"class","text-lg leading-[30px] font-bold text-[#2e3855] font-Poppins w-[690px]"),t(W,"class","w-[690px]"),t(U,"class","w-full flex-col flex items-start gap-[18px]"),t(B,"class","w-full flex-col flex items-start gap-6 text-sm leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(he,"class","bg-white flex-1 flex-col flex items-start gap-4 p-10 rounded-[20px]"),t(Ie,"class","flex-1 flex items-start gap-5"),t(xe,"class","w-full flex items-center gap-[30px] rounded-[20px] z-[2]"),t(h,"class","w-full flex-col flex items-start gap-[30px]"),t(Pe,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(je.src,Fe="/assets/new/Vector-11.svg")||t(je,"src",Fe),t(je,"alt","Vector"),t(je,"class","h-[100px] w-[100px]"),t(Ze,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Oe,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(ke,"class","w-full flex-col flex items-start font-bold"),t(at,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Dt,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(re,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Le,"class","flex items-start gap-1.5 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(ft,"class","flex-1 flex-col flex items-start gap-2"),t(De,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(it,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(qt.src,ot="/assets/LI.png")||t(qt,"src",ot),t(Ae,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(It.src,Gt="/assets/new/Vector-12.svg")||t(It,"src",Gt),t(It,"alt","Vector"),t(It,"class","h-[100px] w-[100px]"),t(ut,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(bt,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Ue,"class","w-full flex-col flex items-start font-bold"),t(Ut,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(yt,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(Vt,"class","flex-1 flex-col flex items-start gap-2"),t(St,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Jt,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(ht.src,Js="/assets/LI.png")||t(ht,"src",Js),t(et,"class","bg-[#e7f5f5] flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(le,"class","w-full flex items-start gap-5"),S(ss.src,Xs="/assets/new/Vector-13.svg")||t(ss,"src",Xs),t(ss,"alt","Vector"),t(ss,"class","h-[100px] w-[100px]"),t(Qs,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(jr,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(wt,"class","w-full flex-col flex items-start font-bold"),t(_r,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(ur,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(Qt,"class","flex-1 flex-col flex items-start gap-2"),t(jt,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Ss,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(ta.src,di="/assets/LI.png")||t(ta,"src",di),t(st,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(pr.src,us="/assets/new/Vector-14.svg")||t(pr,"src",us),t(pr,"alt","Vector"),t(pr,"class","h-[100px] w-[100px]"),t(ra,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Zs,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(xs,"class","w-full flex-col flex items-start font-bold"),t(Ba,"class","flex-1 flex-col flex items-start gap-2"),t(sa,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(bs,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(Ts.src,Ir="/assets/LI.png")||t(Ts,"src",Ir),t(is,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(Kt,"class","w-full flex items-start gap-5"),S(er.src,oa="/assets/new/Vector-15.svg")||t(er,"src",oa),t(er,"alt","Vector"),t(er,"class","h-[100px] w-[100px]"),t(cs,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(gr,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Us,"class","w-full flex-col flex items-start font-bold"),t(Ms,"class","flex-1 flex-col flex items-start gap-2"),t(vr,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(In,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(nl.src,lo="/assets/LI.png")||t(nl,"src",lo),t(ts,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S($a.src,Wt="/assets/new/Vector-16.svg")||t($a,"src",Wt),t($a,"alt","Vector"),t($a,"class","h-[100px] w-[100px]"),t(As,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(ua,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(tr,"class","w-full flex-col flex items-start font-bold"),t(Hs,"class","flex-1 flex-col flex items-start gap-2"),t(Dr,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(fs,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(ws.src,hr="/assets/LI.png")||t(ws,"src",hr),t(ys,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(ia,"class","w-full flex items-start gap-5"),t(Be,"class","w-full h-[1550px] flex-col flex items-center gap-5"),t(sr,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(kr.src,ol="/assets/new/Vector-17.svg")||t(kr,"src",ol),t(kr,"alt","Vector"),t(kr,"class","h-[100px] w-[100px]"),t(_s,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Vn,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(ar,"class","w-full flex-col flex items-start font-bold"),t(Es,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(kn,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(va,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(qa,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(vs,"class","w-full flex items-start gap-1.5 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(rr,"class","flex-1 flex-col flex items-start gap-2"),t(ps,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Rr,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(oo.src,bi="/assets/LI.png")||t(oo,"src",bi),t(js,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(An.src,Ha="/assets/new/Vector-18.svg")||t(An,"src",Ha),t(An,"alt","Vector"),t(An,"class","h-[100px] w-[100px]"),t(ir,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t($r,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(ga,"class","w-full flex-col flex items-start font-bold"),t(wi,"class","flex-1 flex-col flex items-start gap-2"),t(Tn,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(_i,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(On.src,Ju="/assets/LI.png")||t(On,"src",Ju),t(ds,"class","bg-[#e7f5f5] flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(Ws,"class","w-full flex items-start gap-5"),S(Is.src,xa="/assets/new/Vector-19.svg")||t(Is,"src",xa),t(Is,"alt","Vector"),t(Is,"class","h-[100px] w-[100px]"),t(ba,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(Ei,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Ka,"class","w-full flex-col flex items-start font-bold"),t(Ln,"class","bg-white flex items-start gap-2.5 px-2.5 rounded-[5px]"),t(Di,"class","flex items-start gap-2 text-sm leading-[26px] font-semibold text-center font-PublicSans"),t(qr,"class","flex-1 flex-col flex items-start gap-2"),t(ma,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(Xa,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(po.src,fl="/assets/LI.png")||t(po,"src",fl),t(za,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),S(Vi.src,zd="/assets/new/Vector-20.svg")||t(Vi,"src",zd),t(Vi,"alt","Vector"),t(Vi,"class","h-[100px] w-[100px]"),t(Pi,"class","text-xl leading-[34px] font-Poppins w-[266px]"),t(en,"class","text-sm leading-[26px] font-PublicSans w-[266px]"),t(Qa,"class","w-full flex-col flex items-start font-bold"),t(xr,"class","flex-1 flex-col flex items-start gap-2"),t(wa,"class","w-full flex items-center gap-6 text-[#2e3855]"),t(gs,"class","text-sm leading-[25px] font-light text-[#2e3855] font-PublicSans w-[390px]"),S(Ea.src,Zo="/assets/LI.png")||t(Ea,"src",Zo),t(Ds,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-start gap-6 p-10 rounded-[20px]"),t(Wa,"class","w-full flex items-start gap-5"),t(as,"class","w-full h-[1200px] flex-col flex items-center gap-5"),t(fe,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(H,"class","w-full flex-col flex items-start gap-10"),t(Ns,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ia,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Ti.src,Kd="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ti,"src",Kd),t(Ti,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Ti,"class","h-6 w-6"),S(Ar.src,Jd="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ar,"src",Jd),t(Ar,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Ar,"class","h-6 w-6"),S(Fr.src,tn="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Fr,"src",tn),t(Fr,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Fr,"class","h-6 w-6"),t(Bs,"class","flex items-center gap-5"),t(Fs,"class","flex-1 flex justify-end items-center gap-10"),t(cr,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(u,"class","flex-col mw-[1060px] flex items-start gap-[50px]"),t(i,"class","bg-[#e4eaea] flex-col flex items-center gap-[50px] h-fit mt-20"),t(l,"class","w-full")},m(sn,hl){Qe(sn,l,hl),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(u,m),e(u,h),e(h,E),e(h,V),e(h,D),e(D,I),e(I,_),e(_,O),e(I,k),e(I,A),e(D,M),e(D,b),e(b,L),e(L,y),e(L,N),e(L,F),e(F,C),e(L,j),e(L,q),e(q,K),e(K,$),e($,ce),e(h,Se),e(h,z),e(z,R),e(R,se),e(se,ye),e(R,ae),e(R,Ke),e(Ke,we),e(we,te),e(z,Ne),e(z,Ve),e(Ve,ie),e(ie,_e),e(ie,Ce),e(ie,Y),e(Y,Q),e(Y,pe),e(ie,me),e(ie,ge),e(ge,de),e(de,J),e(J,$e),e(h,We),e(h,xe),e(xe,X),e(X,He),e(He,Ge),e(X,ee),e(X,Me),e(xe,ze),e(xe,Ie),e(Ie,he),e(he,ue),e(he,rt),e(he,Je),e(Je,Xe),e(he,P),e(he,B),e(B,U),e(U,W),e(W,Z),e(u,oe),e(u,H),e(H,fe),e(fe,Pe),e(Pe,ne),e(ne,be),e(fe,vt),e(fe,Be),e(Be,le),e(le,Ae),e(Ae,De),e(De,je),e(De,qe),e(De,ft),e(ft,ke),e(ke,Ze),e(Ze,Nt),e(ke,Lt),e(ke,Oe),e(Oe,mt),e(ft,Pt),e(ft,Le),e(Le,at),e(at,ct),e(ct,Ct),e(Le,gt),e(Le,Dt),e(Dt,pt),e(pt,Bt),e(Le,kt),e(Le,re),e(re,nt),e(nt,Tt),e(Ae,Rt),e(Ae,it),e(it,dt),e(Ae,Zt),e(Ae,qt),e(le,xt),e(le,et),e(et,St),e(St,It),e(St,es),e(St,Vt),e(Vt,Ue),e(Ue,ut),e(ut,$t),e(Ue,Et),e(Ue,bt),e(bt,lt),e(Vt,At),e(Vt,yt),e(yt,Ut),e(Ut,zt),e(zt,Ft),e(et,Mt),e(et,Jt),e(Jt,Ht),e(et,Xt),e(et,ht),e(Be,Vs),e(Be,Kt),e(Kt,st),e(st,jt),e(jt,ss),e(jt,Ps),e(jt,Qt),e(Qt,wt),e(wt,Qs),e(Qs,ks),e(wt,ns),e(wt,jr),e(jr,Na),e(Qt,ms),e(Qt,ur),e(ur,_r),e(_r,ls),e(ls,Er),e(st,Yt),e(st,Ss),e(Ss,Cs),e(st,fr),e(st,ta),e(Kt,Gs),e(Kt,is),e(is,sa),e(sa,pr),e(sa,sl),e(sa,Ba),e(Ba,xs),e(xs,ra),e(ra,_n),e(xs,aa),e(xs,Zs),e(Zs,ui),e(is,En),e(is,bs),e(bs,na),e(is,la),e(is,Ts),e(Be,Ra),e(Be,ia),e(ia,ts),e(ts,vr),e(vr,er),e(vr,os),e(vr,Ms),e(Ms,Us),e(Us,cs),e(cs,rl),e(Us,fi),e(Us,gr),e(gr,rs),e(ts,pi),e(ts,In),e(In,Nr),e(ts,al),e(ts,nl),e(ia,vi),e(ia,ys),e(ys,Dr),e(Dr,$a),e(Dr,Vr),e(Dr,Hs),e(Hs,tr),e(tr,As),e(As,ca),e(tr,da),e(tr,ua),e(ua,gi),e(ys,Ys),e(ys,fs),e(fs,Ul),e(ys,ll),e(ys,ws),e(fe,Dn),e(fe,sr),e(sr,fa),e(fa,il),e(fe,Pr),e(fe,as),e(as,Ws),e(Ws,js),e(js,ps),e(ps,kr),e(ps,hi),e(ps,rr),e(rr,ar),e(ar,_s),e(_s,Sr),e(ar,pa),e(ar,Vn),e(Vn,cl),e(rr,mi),e(rr,vs),e(vs,Es),e(Es,Br),e(Br,Pn),e(vs,dl),e(vs,kn),e(kn,zs),e(zs,nr),e(vs,mr),e(vs,va),e(va,io),e(io,ul),e(vs,Sn),e(vs,qa),e(qa,Ua),e(Ua,Wc),e(js,zc),e(js,Rr),e(Rr,xi),e(js,Wd),e(js,oo),e(Ws,lr),e(Ws,ds),e(ds,Tn),e(Tn,An),e(Tn,yi),e(Tn,wi),e(wi,ga),e(ga,ir),e(ir,co),e(ga,Kc),e(ga,$r),e($r,Fn),e(ds,Jc),e(ds,_i),e(_i,ha),e(ds,Ya),e(ds,On),e(as,uo),e(as,Wa),e(Wa,za),e(za,ma),e(ma,Is),e(ma,fo),e(ma,qr),e(qr,Ka),e(Ka,ba),e(ba,ya),e(Ka,Hl),e(Ka,Ei),e(Ei,Ii),e(qr,Yl),e(qr,Di),e(Di,Ln),e(Ln,or),e(or,Ja),e(za,Cn),e(za,Xa),e(Xa,Qo),e(za,Xc),e(za,po),e(Wa,Ur),e(Wa,Ds),e(Ds,wa),e(wa,Vi),e(wa,Ks),e(wa,xr),e(xr,Qa),e(Qa,Pi),e(Pi,ki),e(Qa,Za),e(Qa,en),e(en,Wl),e(Ds,pl),e(Ds,gs),e(gs,_a),e(Ds,Si),e(Ds,Ea),e(u,Qc),e(u,cr),e(cr,Ns),e(Ns,vl),e(cr,Gn),e(cr,Fs),e(Fs,Ia),e(Ia,Zc),e(Fs,gl),e(Fs,Bs),e(Bs,Ti),e(Bs,Tr),e(Bs,Ar),e(Bs,ed),e(Bs,Fr)},p:Re,i:Re,o:Re,d(sn){sn&&a(l)}}}class SE extends yn{constructor(l){super(),wn(this,l,null,kE,ja,{})}}function TE(d){let l,i,u,v,g,x,m,h,E,w,V,D,I,_,O,k,A,G,M,b,L,y,N,F,C,j,q,K,$,ce,Se,z,R,se,ye,ae,Ke,we,te,ve=" ",Ne,Ve,ie,_e,Ce,Y,Q,Ee,pe,me,ge,de,J,$e,We,xe,X,He,Ge,ee,Me,Te,ze,Ie,he,ue,rt,Je,Xe,P,B,U,W,Z,oe,H,fe,Pe,ne,be,vt,Be,le,Ae,De,je,Fe,qe,ft,ke,Ze,Nt,Lt,Oe,mt,Pt,Le,at,ct,Ct,gt,Dt,pt,Bt,kt,re,nt,Tt,Rt,it,dt,Zt,qt,ot,xt,et,St,It,Gt,es,Vt,Ue,ut,$t,Et,bt,lt,At,yt,Ut,zt,Ft,Mt,Jt,Ht,Xt,ht,Js,Vs,Kt,st,jt,ss,Xs,Ps,Qt,wt,Qs,ks,ns,jr,Na,ms,ur,_r,ls,Er,Yt,Ss,Cs,fr,ta,di,Gs,is,sa,pr,us,sl,Ba,xs,ra,_n,aa,Zs,ui,En,bs,na,la,Ts,Ir,Ra,ia,ts,vr,er,oa,os,Ms,Us,cs,rl,fi,gr,rs,pi,In,Nr,al,nl,lo,vi,ys,Dr,$a,Wt,Vr,Hs,tr,As,ca,da,ua,gi,Ys,fs,Ul,ll,ws,hr,Dn,sr,fa,il,Pr,as,Ws,js,ps,kr,ol,hi,rr,ar,_s,Sr,pa,Vn,cl,mi,vs,Es,Br,Pn,dl,kn,zs,nr,mr,va,io,ul,Sn,qa,Ua,Wc,zc,Rr,xi=" ",Wd,oo,bi,lr,ds,Tn,An,Ha,yi,wi,ga,ir,co,Kc,$r,Fn,Jc,_i,ha,Ya,On,Ju,uo,Wa,za,ma,Is,xa,fo,qr,Ka,ba,ya,Hl,Ei,Ii,Yl,Di,Ln,or,Ja,Cn,Xa,Qo,Xc,po,fl,Ur,Ds,wa,Vi,zd,Ks,xr,Qa,Pi,ki,Za,en,Wl,pl,gs,_a,Si,Ea,Zo,Qc,cr,Ns,vl,Gn,Fs,Ia,Zc,gl,Bs,Ti,Kd,Tr,Ar,Jd,ed,Fr,tn,sn,hl,vo,zl,Xd,Hr,Rs,ml,Mn,Ai,Fi,Yr,jn,Xu,Qd,go,$s,rn,Qu,Zd,ec,Nn,an,tc,eu,Oi,Da,Bn,xl,ho,Zu,Rn,bl,mo,xo,Va,$n,nn,tu,sc,yl,rc,wl,Kl,qn,Pa,bo,Li,ln,_l,ka,El,su,Jl,Un,ru,Ci,br,on,Sa,Gi,Xl,Mi,ef,yo,Ta,Ql,wo,Il,Hn,qs,Wr,Dl,tf,au,zr,ji,_o,Zl,hs,Aa,Eo,Vl,td,ac,Or,cn,nu,nc,Lr,dn,Ni,Io,Pl,lc,ic,ei,kl,Fa,oc,lu,Yn,Kr,un,sd,Bi,cc,Sl,Tl,ti,iu,si,Cr,Jr,Al,sf,ri,Do,Fl,fn,Ol,Vo,dc,Wn,Xr,Po,rd,pn,Oa,ad,uc,vn,Ri,ai,Gr,zn,rf,$i,Qr,fc,pc,ko,La,vc,gc,So,Ca,ni,Kn,To,gg,Lv,Jn,Ll,nd,hg,ld,ou,Cv,hc,Ao,dr,Fo,mg,Gv,af,cu,Oo,Lo,xg,Mv,nf,li,mc,qi,du,jv,Ui,Cl,lf,Nv,gn,Ga,Hi,xc,bg,id,Co,od,cd,yg,Go,bc,Bv;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("div"),m=f("Green energy"),h=o(),E=s("div"),w=s("div"),V=s("div"),D=f("Power from waste"),I=o(),_=s("div"),O=f("Non-recycled waste is the ideal renewable energy source"),k=o(),A=s("div"),G=s("div"),M=s("div"),b=o(),L=s("div"),y=s("div"),N=s("div"),F=s("span"),C=f("Unlike solar and wind, it provides"),j=o(),q=s("span"),K=f("continuous"),$=o(),ce=s("span"),Se=f("power 24/7."),z=o(),R=s("div"),se=s("div"),ye=s("div"),ae=s("div"),Ke=o(),we=s("div"),te=f("Using non-recycled waste"),Ne=f(ve),Ve=o(),ie=s("span"),_e=f("prevents it from polluting"),Ce=f(`
                our soil, water, and atmosphere in uncontrolled ways.`),Y=o(),Q=s("div"),Ee=s("div"),pe=s("div"),me=s("div"),ge=s("div"),de=s("div"),J=f("Power from waste"),$e=o(),We=s("div"),xe=f("Slurry covers for farms with livestock"),X=o(),He=s("div"),Ge=s("div"),ee=s("div"),Me=s("div"),Te=s("div"),ze=f("How it works"),Ie=o(),he=s("div"),ue=s("div"),rt=f(`Covering slurry stores helps keep rain out while containing odorous gases like ammonia, which result from
                    microbial activity. Ammonia emissions from manure storage contribute 9% of the UK’s agricultural ammonia
                    emissions. By covering your slurry store, you can substantially reduce these emissions. Conventional slurry
                    store covers aren’t airtight like anaerobic digester covers, so gas escapes at a reduced rate compared to
                    open stores.
                    `),Je=s("br"),Xe=o(),P=s("br"),B=f(`
                    Slurry store covers can be impermeable or permeable, fixed or floating. Impermeable covers prevent rainwater
                    from entering, reducing slurry volume and increasing storage capacity. In areas with moderate to high rainfall,
                    these covers can be cost-effective.
                    `),U=s("br"),W=o(),Z=s("br"),oe=f(`
                    Captured fugitive emissions can be converted into biomethane to power onsite tractors or be sold to the transport
                    industry.`),H=o(),fe=s("div"),Pe=s("div"),ne=s("div"),be=s("img"),Be=o(),le=s("div"),Ae=f("Pros"),De=o(),je=s("div"),Fe=s("ul"),qe=s("li"),ft=f("Relatively low-cost and quick deployment."),ke=o(),Ze=s("li"),Nt=f("In some countries, like the UK, government grants may cover"),Lt=f(`
                      initial costs.
                      `),Oe=s("li"),mt=f("Effective in reducing emissions."),Pt=o(),Le=s("div"),at=s("div"),ct=s("img"),gt=o(),Dt=s("div"),pt=f("Cons"),Bt=o(),kt=s("div"),re=s("ul"),nt=s("li"),Tt=f("Covers are not airtight, so some methane may still escape."),Rt=o(),it=s("li"),dt=f("If biogas cannot be used on site, finding an off-taker is necessary."),Zt=f(`
                      
                       `),qt=o(),ot=s("div"),xt=s("div"),et=s("div"),St=s("div"),It=s("div"),Gt=f("Power from waste"),es=o(),Vt=s("div"),Ue=f("Anaerobic digestion"),ut=o(),$t=s("div"),Et=s("div"),bt=s("div"),lt=s("div"),At=s("div"),yt=f("How it works"),Ut=o(),zt=s("div"),Ft=s("div"),Mt=f(`Anaerobic digestion (AD) is a process where microorganisms break down biodegradable material without oxygen.
                    This produces biogas, which can be used for electricity, heat, renewable natural gas, or transportation
                    fuels. Various AD technologies convert diverse organic waste streams into biogas continuously.
                    `),Jt=s("br"),Ht=o(),Xt=s("br"),ht=f(`
                    Digested solids can be composted, used for bedding, applied to cropland, or made into other products. Nutrients
                    in the liquid stream serve as agricultural fertilizers. AD is applicable across the human food supply chain,
                    from farm animal waste to restaurant food waste. The scale can range from thousands of tonnes per annum to just
                    a few kilograms per day.`),Js=o(),Vs=s("div"),Kt=s("div"),st=s("div"),jt=s("img"),Xs=o(),Ps=s("div"),Qt=f("Pros"),wt=o(),Qs=s("div"),ks=s("ul"),ns=s("li"),jr=f("Suitable for most parts of the human food supply chain, significantly reducing environmental impact."),Na=o(),ms=s("li"),ur=f("Smaller units for food waste are relatively affordable and usually don’t require planning consent."),_r=f(`
                       `),ls=s("br"),Er=f(" "),Yt=o(),Ss=s("div"),Cs=s("div"),fr=s("img"),di=o(),Gs=s("div"),is=f("Cons"),sa=o(),pr=s("div"),us=s("ul"),sl=s("li"),Ba=f(`Larger units for sizable operations can be expensive, take 12-18 months from feasibility to operation,
                        and may face local objections due to odor.`),xs=o(),ra=s("li"),_n=f("Bigger units require planning consent, necessitating expert support."),aa=o(),Zs=s("li"),ui=f("We have partners who can help with this process."),En=o(),bs=s("div"),na=s("div"),la=s("div"),Ts=s("div"),Ir=s("div"),Ra=f("Power from waste"),ia=o(),ts=s("div"),vr=f("Pyrolysis"),er=o(),oa=s("div"),os=s("div"),Ms=s("div"),Us=s("div"),cs=s("div"),rl=f("How it works"),fi=o(),gr=s("div"),rs=s("div"),pi=f(`Pyrolysis is a thermochemical process applied to any organic material, involving chemical and physical
                    separation into different molecules at high temperatures and without oxygen. Unlike combustion and
                    gasification, which involve oxidation, pyrolysis is an endothermic process resulting in high-energy
                    products. `),In=s("br"),Nr=o(),al=s("br"),nl=f(`
                    Pyrolysis products include solid (charcoal, biochar), liquid, and non-condensable gases (H2, CH4, CnHm, CO, CO2,
                    and N). In some applications, liquid and gas phases can be used together when supplying hot syngas directly to
                    a burner or oxidation chamber.
                    `),lo=s("br"),vi=o(),ys=s("br"),Dr=f(`
                    During pyrolysis, materials are heated to a specific temperature inside a pyrolysis unit until the process is
                    complete. The chosen temperature influences the composition and yields of pyrolysis oil, syngas, and char.`),$a=o(),Wt=s("div"),Vr=s("div"),Hs=s("div"),tr=s("img"),ca=o(),da=s("div"),ua=f("Pros"),gi=o(),Ys=s("div"),fs=s("ul"),Ul=s("li"),ll=f("Versatile application across multiple industries: agriculture, energy, and transportation."),ws=o(),hr=s("li"),Dn=f("Carbon sequestration through biochar production, aiding in climate change mitigation."),sr=o(),fa=s("li"),il=f("Eco-friendly approach to managing organic waste, reducing landfill usage."),Pr=o(),as=s("div"),Ws=s("div"),js=s("img"),kr=o(),ol=s("div"),hi=f("Cons"),rr=o(),ar=s("div"),_s=s("ul"),Sr=s("li"),pa=f("High initial investment, especially for larger operations."),Vn=o(),cl=s("li"),mi=f("Demand for technical expertise and skilled personnel."),vs=o(),Es=s("li"),Br=f("Emission monitoring and management required to minimize environmental impacts."),Pn=f(`
                       `),dl=s("br"),kn=f(" "),zs=o(),nr=s("div"),mr=s("div"),va=s("div"),io=f("We see waste as a fuel opportunity "),ul=s("br"),Sn=f(`
            – and it’s already yours!`),qa=o(),Ua=s("div"),Wc=f(`Use our online tools to explore over 150 technology partners
            `),zc=s("br"),Rr=f(`
            solutions and start your power-from-waste project`),Wd=f(xi),oo=o(),bi=s("div"),lr=s("div"),ds=s("div"),Tn=s("div"),An=s("div"),Ha=s("img"),wi=o(),ga=s("div"),ir=s("div"),co=s("div"),Kc=f("Exploration station"),$r=o(),Fn=s("div"),Jc=f("Discover if your waste type is suitable for a project or learn more about power-from-waste"),_i=o(),ha=s("a"),Ya=s("div"),On=s("img"),uo=o(),Wa=s("div"),za=f("Explore the possibilities"),ma=o(),Is=s("div"),xa=s("img"),qr=o(),Ka=s("div"),ba=s("div"),ya=s("div"),Hl=f("Calculator tool"),Ei=o(),Ii=s("div"),Yl=f("Discover if your waste type is suitable for a project or learn more about power-from-waste"),Di=o(),Ln=s("a"),or=s("div"),Ja=s("img"),Xa=o(),Qo=s("div"),Xc=f("Calculate now"),po=o(),fl=s("div"),Ur=s("div"),Ds=s("div"),wa=s("img"),zd=o(),Ks=s("div"),xr=s("div"),Qa=f("Concerned about costs?"),Pi=o(),ki=s("div"),Za=f(`Even our larger projects have payback periods under five years, with some as low as two. After that, you
                    only cover the annual facility maintenance cost, with no grid or standing charges.`),en=o(),Wl=s("div"),pl=s("div"),gs=s("div"),_a=s("div"),Si=f("Other green energy sources"),Ea=o(),Zo=s("div"),Qc=f("Different renewable energy sources can be combined to find the perfect solution for your project"),cr=o(),Ns=s("div"),vl=s("div"),Gn=s("div"),Fs=s("div"),Ia=s("div"),Zc=o(),gl=s("div"),Bs=s("div"),Ti=f("Solar power"),Kd=o(),Tr=s("div"),Ar=s("div"),Jd=f(`Solar power converts the Sun’s photons into electricity through solar panels. It works in most locations and
                  has several benefits.`),ed=o(),Fr=s("button"),tn=s("img"),hl=o(),vo=s("img"),Xd=o(),Hr=s("div"),Rs=s("div"),ml=s("div"),Mn=s("div"),Ai=s("img"),Yr=o(),jn=s("div"),Xu=f("Pros"),Qd=o(),go=s("div"),$s=s("ul"),rn=s("li"),Qu=f("Often cheaper than fossil fuels by 2023"),Zd=o(),ec=s("li"),Nn=f("Environmentally friendly Low maintenance and long-lasting"),an=o(),tc=s("li"),eu=f("Emissions-free during use"),Oi=o(),Da=s("div"),Bn=s("div"),xl=s("img"),Zu=o(),Rn=s("div"),bl=f("Cons"),mo=o(),xo=s("div"),Va=s("ul"),$n=s("li"),nn=f("High initial costs"),tu=o(),sc=s("li"),yl=f("Intermittent power supply, requiring grid connection or battery storage"),rc=o(),wl=s("li"),Kl=f("Environmental impacts during production and disposal"),qn=o(),Pa=s("li"),bo=f("Potential local resistance to solar farm installations near habitation"),Li=o(),ln=s("div"),_l=s("div"),ka=s("div"),El=s("div"),su=o(),Jl=s("div"),Un=s("div"),ru=f("Wind power"),Ci=o(),br=s("div"),on=s("div"),Sa=f("Wind power, also called “Eolic” energy, generates electricity using wind turbines."),Gi=o(),Xl=s("button"),Mi=s("img"),yo=o(),Ta=s("img"),wo=o(),Il=s("div"),Hn=s("div"),qs=s("div"),Wr=s("div"),Dl=s("img"),au=o(),zr=s("div"),ji=f("Pros"),_o=o(),Zl=s("div"),hs=s("ul"),Aa=s("li"),Eo=f("Often cheaper than fossil fuels by 2023"),Vl=o(),td=s("li"),ac=f("Environmentally friendly Low maintenance and long-lasting"),Or=o(),cn=s("li"),nu=f("Emissions-free during use"),nc=o(),Lr=s("div"),dn=s("div"),Ni=s("img"),Pl=o(),lc=s("div"),ic=f("Cons"),ei=o(),kl=s("div"),Fa=s("ul"),oc=s("li"),lu=f("High initial costs"),Yn=o(),Kr=s("li"),un=f("Intermittent power supply, requiring grid connection or battery storage"),sd=o(),Bi=s("li"),cc=f("Environmental impacts during production and disposal"),Sl=o(),Tl=s("li"),ti=f("Potential local resistance to solar farm installations near habitation"),iu=o(),si=s("div"),Cr=s("div"),Jr=s("div"),Al=s("div"),sf=o(),ri=s("div"),Do=s("div"),Fl=f("Energy storage"),fn=o(),Ol=s("div"),Vo=s("div"),dc=f("Energy storage is a crucial technology that allows us to store excess energy for future use."),Wn=o(),Xr=s("button"),Po=s("img"),pn=o(),Oa=s("img"),uc=o(),vn=s("div"),Ri=s("div"),ai=s("div"),Gr=s("div"),zn=s("img"),$i=o(),Qr=s("div"),fc=f("Pros"),pc=o(),ko=s("div"),La=s("ul"),vc=s("li"),gc=f("Often cheaper than fossil fuels by 2023"),So=o(),Ca=s("li"),ni=f("Environmentally friendly Low maintenance and long-lasting"),Kn=o(),To=s("li"),gg=f("Emissions-free during use"),Lv=o(),Jn=s("div"),Ll=s("div"),nd=s("img"),ld=o(),ou=s("div"),Cv=f("Cons"),hc=o(),Ao=s("div"),dr=s("ul"),Fo=s("li"),mg=f("High initial costs"),Gv=o(),af=s("li"),cu=f("Intermittent power supply, requiring grid connection or battery storage"),Oo=o(),Lo=s("li"),xg=f("Environmental impacts during production and disposal"),Mv=o(),nf=s("li"),li=f("Potential local resistance to solar farm installations near habitation"),mc=o(),qi=s("div"),du=s("div"),jv=f("Copyright © 2023 Power for Planet"),Ui=o(),Cl=s("div"),lf=s("div"),Nv=f("Privacy Policy"),gn=o(),Ga=s("div"),Hi=s("img"),bg=o(),id=s("img"),od=o(),cd=s("img"),Go=o(),bc=s("script"),Bv=f(`function toggleElement(k) {
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
    }`),this.h()},l(of){l=r(of,"DIV",{class:!0});var Gl=n(l);i=r(Gl,"DIV",{class:!0});var cf=n(i);u=r(cf,"DIV",{class:!0});var uu=n(u);v=r(uu,"DIV",{class:!0});var dd=n(v);g=r(dd,"DIV",{class:!0});var df=n(g);x=r(df,"DIV",{});var wg=n(x);m=p(wg,"Green energy"),wg.forEach(a),df.forEach(a),dd.forEach(a),h=c(uu),E=r(uu,"DIV",{class:!0});var Bp=n(E);w=r(Bp,"DIV",{class:!0});var _g=n(w);V=r(_g,"DIV",{class:!0});var ud=n(V);D=p(ud,"Power from waste"),ud.forEach(a),_g.forEach(a),I=c(Bp),_=r(Bp,"DIV",{class:!0});var yc=n(_);O=p(yc,"Non-recycled waste is the ideal renewable energy source"),yc.forEach(a),Bp.forEach(a),k=c(uu),A=r(uu,"DIV",{class:!0});var wc=n(A);G=r(wc,"DIV",{class:!0});var Rv=n(G);M=r(Rv,"DIV",{class:!0}),n(M).forEach(a),b=c(Rv),L=r(Rv,"DIV",{class:!0});var Eg=n(L);y=r(Eg,"DIV",{class:!0});var Ig=n(y);N=r(Ig,"DIV",{class:!0});var Ml=n(N);F=r(Ml,"SPAN",{class:!0});var fu=n(F);C=p(fu,"Unlike solar and wind, it provides"),fu.forEach(a),j=c(Ml),q=r(Ml,"SPAN",{class:!0});var Zh=n(q);K=p(Zh,"continuous"),Zh.forEach(a),$=c(Ml),ce=r(Ml,"SPAN",{class:!0});var Dg=n(ce);Se=p(Dg,"power 24/7."),Dg.forEach(a),Ml.forEach(a),Ig.forEach(a),Eg.forEach(a),Rv.forEach(a),z=c(wc),R=r(wc,"DIV",{class:!0});var Vg=n(R);se=r(Vg,"DIV",{class:!0});var fd=n(se);ye=r(fd,"DIV",{class:!0});var Yi=n(ye);ae=r(Yi,"DIV",{class:!0}),n(ae).forEach(a),Ke=c(Yi),we=r(Yi,"DIV",{class:!0});var Wi=n(we);te=p(Wi,"Using non-recycled waste"),Ne=p(Wi,ve),Ve=c(Wi),ie=r(Wi,"SPAN",{class:!0});var em=n(ie);_e=p(em,"prevents it from polluting"),em.forEach(a),Ce=p(Wi,`
                our soil, water, and atmosphere in uncontrolled ways.`),Wi.forEach(a),Yi.forEach(a),fd.forEach(a),Vg.forEach(a),wc.forEach(a),uu.forEach(a),Y=c(cf),Q=r(cf,"DIV",{class:!0});var _c=n(Q);Ee=r(_c,"DIV",{class:!0});var Rp=n(Ee);pe=r(Rp,"DIV",{class:!0});var Ec=n(pe);me=r(Ec,"DIV",{class:!0});var Ic=n(me);ge=r(Ic,"DIV",{class:!0});var tm=n(ge);de=r(tm,"DIV",{class:!0});var Pg=n(de);J=p(Pg,"Power from waste"),Pg.forEach(a),tm.forEach(a),$e=c(Ic),We=r(Ic,"DIV",{class:!0});var kg=n(We);xe=p(kg,"Slurry covers for farms with livestock"),kg.forEach(a),Ic.forEach(a),Ec.forEach(a),X=c(Rp),He=r(Rp,"DIV",{class:!0});var Mo=n(He);Ge=r(Mo,"DIV",{class:!0});var pu=n(Ge);ee=r(pu,"DIV",{class:!0});var $v=n(ee);Me=r($v,"DIV",{class:!0});var $p=n(Me);Te=r($p,"DIV",{class:!0});var vu=n(Te);ze=p(vu,"How it works"),vu.forEach(a),Ie=c($p),he=r($p,"DIV",{class:!0});var gu=n(he);ue=r(gu,"DIV",{class:!0});var zi=n(ue);rt=p(zi,`Covering slurry stores helps keep rain out while containing odorous gases like ammonia, which result from
                    microbial activity. Ammonia emissions from manure storage contribute 9% of the UK’s agricultural ammonia
                    emissions. By covering your slurry store, you can substantially reduce these emissions. Conventional slurry
                    store covers aren’t airtight like anaerobic digester covers, so gas escapes at a reduced rate compared to
                    open stores.
                    `),Je=r(zi,"BR",{}),Xe=c(zi),P=r(zi,"BR",{}),B=p(zi,`
                    Slurry store covers can be impermeable or permeable, fixed or floating. Impermeable covers prevent rainwater
                    from entering, reducing slurry volume and increasing storage capacity. In areas with moderate to high rainfall,
                    these covers can be cost-effective.
                    `),U=r(zi,"BR",{}),W=c(zi),Z=r(zi,"BR",{}),oe=p(zi,`
                    Captured fugitive emissions can be converted into biomethane to power onsite tractors or be sold to the transport
                    industry.`),zi.forEach(a),gu.forEach(a),$p.forEach(a),H=c($v),fe=r($v,"DIV",{class:!0});var qp=n(fe);Pe=r(qp,"DIV",{class:!0});var Dc=n(Pe);ne=r(Dc,"DIV",{class:!0});var qv=n(ne);be=r(qv,"IMG",{src:!0,alt:!0,class:!0}),Be=c(qv),le=r(qv,"DIV",{class:!0});var Sg=n(le);Ae=p(Sg,"Pros"),Sg.forEach(a),qv.forEach(a),De=c(Dc),je=r(Dc,"DIV",{class:!0});var Vc=n(je);Fe=r(Vc,"UL",{class:!0});var jo=n(Fe);qe=r(jo,"LI",{});var Tg=n(qe);ft=p(Tg,"Relatively low-cost and quick deployment."),Tg.forEach(a),ke=c(jo),Ze=r(jo,"LI",{});var Ag=n(Ze);Nt=p(Ag,"In some countries, like the UK, government grants may cover"),Ag.forEach(a),Lt=p(jo,`
                      initial costs.
                      `),Oe=r(jo,"LI",{});var pd=n(Oe);mt=p(pd,"Effective in reducing emissions."),pd.forEach(a),jo.forEach(a),Vc.forEach(a),Dc.forEach(a),Pt=c(qp),Le=r(qp,"DIV",{class:!0});var hu=n(Le);at=r(hu,"DIV",{class:!0});var Up=n(at);ct=r(Up,"IMG",{src:!0,alt:!0,class:!0}),gt=c(Up),Dt=r(Up,"DIV",{class:!0});var Fg=n(Dt);pt=p(Fg,"Cons"),Fg.forEach(a),Up.forEach(a),Bt=c(hu),kt=r(hu,"DIV",{class:!0});var Hp=n(kt);re=r(Hp,"UL",{class:!0});var uf=n(re);nt=r(uf,"LI",{});var Og=n(nt);Tt=p(Og,"Covers are not airtight, so some methane may still escape."),Og.forEach(a),Rt=c(uf),it=r(uf,"LI",{});var ff=n(it);dt=p(ff,"If biogas cannot be used on site, finding an off-taker is necessary."),ff.forEach(a),Zt=p(uf,`
                      
                       `),uf.forEach(a),Hp.forEach(a),hu.forEach(a),qp.forEach(a),$v.forEach(a),pu.forEach(a),Mo.forEach(a),Rp.forEach(a),qt=c(_c),ot=r(_c,"DIV",{class:!0});var No=n(ot);xt=r(No,"DIV",{class:!0});var vd=n(xt);et=r(vd,"DIV",{class:!0});var gd=n(et);St=r(gd,"DIV",{class:!0});var mu=n(St);It=r(mu,"DIV",{class:!0});var sm=n(It);Gt=p(sm,"Power from waste"),sm.forEach(a),mu.forEach(a),es=c(gd),Vt=r(gd,"DIV",{class:!0});var Lg=n(Vt);Ue=p(Lg,"Anaerobic digestion"),Lg.forEach(a),gd.forEach(a),vd.forEach(a),ut=c(No),$t=r(No,"DIV",{class:!0});var hd=n($t);Et=r(hd,"DIV",{class:!0});var xu=n(Et);bt=r(xu,"DIV",{class:!0});var Yp=n(bt);lt=r(Yp,"DIV",{class:!0});var Wp=n(lt);At=r(Wp,"DIV",{class:!0});var bu=n(At);yt=p(bu,"How it works"),bu.forEach(a),Ut=c(Wp),zt=r(Wp,"DIV",{class:!0});var Cg=n(zt);Ft=r(Cg,"DIV",{class:!0});var yu=n(Ft);Mt=p(yu,`Anaerobic digestion (AD) is a process where microorganisms break down biodegradable material without oxygen.
                    This produces biogas, which can be used for electricity, heat, renewable natural gas, or transportation
                    fuels. Various AD technologies convert diverse organic waste streams into biogas continuously.
                    `),Jt=r(yu,"BR",{}),Ht=c(yu),Xt=r(yu,"BR",{}),ht=p(yu,`
                    Digested solids can be composted, used for bedding, applied to cropland, or made into other products. Nutrients
                    in the liquid stream serve as agricultural fertilizers. AD is applicable across the human food supply chain,
                    from farm animal waste to restaurant food waste. The scale can range from thousands of tonnes per annum to just
                    a few kilograms per day.`),yu.forEach(a),Cg.forEach(a),Wp.forEach(a),Js=c(Yp),Vs=r(Yp,"DIV",{class:!0});var Bo=n(Vs);Kt=r(Bo,"DIV",{class:!0});var md=n(Kt);st=r(md,"DIV",{class:!0});var ii=n(st);jt=r(ii,"IMG",{src:!0,alt:!0,class:!0}),Xs=c(ii),Ps=r(ii,"DIV",{class:!0});var wu=n(Ps);Qt=p(wu,"Pros"),wu.forEach(a),ii.forEach(a),wt=c(md),Qs=r(md,"DIV",{class:!0});var rm=n(Qs);ks=r(rm,"UL",{class:!0});var xd=n(ks);ns=r(xd,"LI",{});var Gg=n(ns);jr=p(Gg,"Suitable for most parts of the human food supply chain, significantly reducing environmental impact."),Gg.forEach(a),Na=c(xd),ms=r(xd,"LI",{});var pf=n(ms);ur=p(pf,"Smaller units for food waste are relatively affordable and usually don’t require planning consent."),pf.forEach(a),_r=p(xd,`
                       `),ls=r(xd,"BR",{}),Er=p(xd," "),xd.forEach(a),rm.forEach(a),md.forEach(a),Yt=c(Bo),Ss=r(Bo,"DIV",{class:!0});var Ki=n(Ss);Cs=r(Ki,"DIV",{class:!0});var Pc=n(Cs);fr=r(Pc,"IMG",{src:!0,alt:!0,class:!0}),di=c(Pc),Gs=r(Pc,"DIV",{class:!0});var am=n(Gs);is=p(am,"Cons"),am.forEach(a),Pc.forEach(a),sa=c(Ki),pr=r(Ki,"DIV",{class:!0});var Mg=n(pr);us=r(Mg,"UL",{class:!0});var _u=n(us);sl=r(_u,"LI",{});var jl=n(sl);Ba=p(jl,`Larger units for sizable operations can be expensive, take 12-18 months from feasibility to operation,
                        and may face local objections due to odor.`),jl.forEach(a),xs=c(_u),ra=r(_u,"LI",{});var jg=n(ra);_n=p(jg,"Bigger units require planning consent, necessitating expert support."),jg.forEach(a),aa=c(_u),Zs=r(_u,"LI",{});var vf=n(Zs);ui=p(vf,"We have partners who can help with this process."),vf.forEach(a),_u.forEach(a),Mg.forEach(a),Ki.forEach(a),Bo.forEach(a),Yp.forEach(a),xu.forEach(a),hd.forEach(a),No.forEach(a),En=c(_c),bs=r(_c,"DIV",{class:!0});var oi=n(bs);na=r(oi,"DIV",{class:!0});var kc=n(na);la=r(kc,"DIV",{class:!0});var yr=n(la);Ts=r(yr,"DIV",{class:!0});var Ji=n(Ts);Ir=r(Ji,"DIV",{class:!0});var Eu=n(Ir);Ra=p(Eu,"Power from waste"),Eu.forEach(a),Ji.forEach(a),ia=c(yr),ts=r(yr,"DIV",{class:!0});var nm=n(ts);vr=p(nm,"Pyrolysis"),nm.forEach(a),yr.forEach(a),kc.forEach(a),er=c(oi),oa=r(oi,"DIV",{class:!0});var Ng=n(oa);os=r(Ng,"DIV",{class:!0});var Xi=n(os);Ms=r(Xi,"DIV",{class:!0});var Sc=n(Ms);Us=r(Sc,"DIV",{class:!0});var Uv=n(Us);cs=r(Uv,"DIV",{class:!0});var Bg=n(cs);rl=p(Bg,"How it works"),Bg.forEach(a),fi=c(Uv),gr=r(Uv,"DIV",{class:!0});var Qi=n(gr);rs=r(Qi,"DIV",{class:!0});var hn=n(rs);pi=p(hn,`Pyrolysis is a thermochemical process applied to any organic material, involving chemical and physical
                    separation into different molecules at high temperatures and without oxygen. Unlike combustion and
                    gasification, which involve oxidation, pyrolysis is an endothermic process resulting in high-energy
                    products. `),In=r(hn,"BR",{}),Nr=c(hn),al=r(hn,"BR",{}),nl=p(hn,`
                    Pyrolysis products include solid (charcoal, biochar), liquid, and non-condensable gases (H2, CH4, CnHm, CO, CO2,
                    and N). In some applications, liquid and gas phases can be used together when supplying hot syngas directly to
                    a burner or oxidation chamber.
                    `),lo=r(hn,"BR",{}),vi=c(hn),ys=r(hn,"BR",{}),Dr=p(hn,`
                    During pyrolysis, materials are heated to a specific temperature inside a pyrolysis unit until the process is
                    complete. The chosen temperature influences the composition and yields of pyrolysis oil, syngas, and char.`),hn.forEach(a),Qi.forEach(a),Uv.forEach(a),$a=c(Sc),Wt=r(Sc,"DIV",{class:!0});var Hv=n(Wt);Vr=r(Hv,"DIV",{class:!0});var zp=n(Vr);Hs=r(zp,"DIV",{class:!0});var Xn=n(Hs);tr=r(Xn,"IMG",{src:!0,alt:!0,class:!0}),ca=c(Xn),da=r(Xn,"DIV",{class:!0});var bd=n(da);ua=p(bd,"Pros"),bd.forEach(a),Xn.forEach(a),gi=c(zp),Ys=r(zp,"DIV",{class:!0});var Rg=n(Ys);fs=r(Rg,"UL",{class:!0});var Iu=n(fs);Ul=r(Iu,"LI",{});var Kp=n(Ul);ll=p(Kp,"Versatile application across multiple industries: agriculture, energy, and transportation."),Kp.forEach(a),ws=c(Iu),hr=r(Iu,"LI",{});var $g=n(hr);Dn=p($g,"Carbon sequestration through biochar production, aiding in climate change mitigation."),$g.forEach(a),sr=c(Iu),fa=r(Iu,"LI",{});var qg=n(fa);il=p(qg,"Eco-friendly approach to managing organic waste, reducing landfill usage."),qg.forEach(a),Iu.forEach(a),Rg.forEach(a),zp.forEach(a),Pr=c(Hv),as=r(Hv,"DIV",{class:!0});var Du=n(as);Ws=r(Du,"DIV",{class:!0});var Jp=n(Ws);js=r(Jp,"IMG",{src:!0,alt:!0,class:!0}),kr=c(Jp),ol=r(Jp,"DIV",{class:!0});var Ug=n(ol);hi=p(Ug,"Cons"),Ug.forEach(a),Jp.forEach(a),rr=c(Du),ar=r(Du,"DIV",{class:!0});var Xp=n(ar);_s=r(Xp,"UL",{class:!0});var Ro=n(_s);Sr=r(Ro,"LI",{});var Hg=n(Sr);pa=p(Hg,"High initial investment, especially for larger operations."),Hg.forEach(a),Vn=c(Ro),cl=r(Ro,"LI",{});var Nl=n(cl);mi=p(Nl,"Demand for technical expertise and skilled personnel."),Nl.forEach(a),vs=c(Ro),Es=r(Ro,"LI",{});var yd=n(Es);Br=p(yd,"Emission monitoring and management required to minimize environmental impacts."),yd.forEach(a),Pn=p(Ro,`
                       `),dl=r(Ro,"BR",{}),kn=p(Ro," "),Ro.forEach(a),Xp.forEach(a),Du.forEach(a),Hv.forEach(a),Sc.forEach(a),Xi.forEach(a),Ng.forEach(a),oi.forEach(a),zs=c(_c),nr=r(_c,"DIV",{class:!0});var wd=n(nr);mr=r(wd,"DIV",{class:!0});var Qp=n(mr);va=r(Qp,"DIV",{class:!0});var Tc=n(va);io=p(Tc,"We see waste as a fuel opportunity "),ul=r(Tc,"BR",{}),Sn=p(Tc,`
            – and it’s already yours!`),Tc.forEach(a),qa=c(Qp),Ua=r(Qp,"DIV",{class:!0});var _d=n(Ua);Wc=p(_d,`Use our online tools to explore over 150 technology partners
            `),zc=r(_d,"BR",{}),Rr=p(_d,`
            solutions and start your power-from-waste project`),Wd=p(_d,xi),_d.forEach(a),Qp.forEach(a),oo=c(wd),bi=r(wd,"DIV",{});var Zp=n(bi);lr=r(Zp,"DIV",{class:!0});var Zi=n(lr);ds=r(Zi,"DIV",{class:!0});var Bl=n(ds);Tn=r(Bl,"DIV",{});var lm=n(Tn);An=r(lm,"DIV",{});var Yg=n(An);Ha=r(Yg,"IMG",{src:!0,alt:!0,class:!0}),Yg.forEach(a),lm.forEach(a),wi=c(Bl),ga=r(Bl,"DIV",{class:!0});var eo=n(ga);ir=r(eo,"DIV",{class:!0});var Ed=n(ir);co=r(Ed,"DIV",{class:!0});var Id=n(co);Kc=p(Id,"Exploration station"),Id.forEach(a),$r=c(Ed),Fn=r(Ed,"DIV",{class:!0});var gf=n(Fn);Jc=p(gf,"Discover if your waste type is suitable for a project or learn more about power-from-waste"),gf.forEach(a),Ed.forEach(a),eo.forEach(a),_i=c(Bl),ha=r(Bl,"A",{href:!0});var Vu=n(ha);Ya=r(Vu,"DIV",{class:!0});var Yv=n(Ya);On=r(Yv,"IMG",{src:!0,alt:!0,class:!0}),uo=c(Yv),Wa=r(Yv,"DIV",{});var Wg=n(Wa);za=p(Wg,"Explore the possibilities"),Wg.forEach(a),Yv.forEach(a),Vu.forEach(a),Bl.forEach(a),ma=c(Zi),Is=r(Zi,"DIV",{class:!0});var Ma=n(Is);xa=r(Ma,"IMG",{class:!0,alt:!0,src:!0}),qr=c(Ma),Ka=r(Ma,"DIV",{class:!0});var ev=n(Ka);ba=r(ev,"DIV",{class:!0});var tv=n(ba);ya=r(tv,"DIV",{class:!0});var zg=n(ya);Hl=p(zg,"Calculator tool"),zg.forEach(a),Ei=c(tv),Ii=r(tv,"DIV",{class:!0});var Pu=n(Ii);Yl=p(Pu,"Discover if your waste type is suitable for a project or learn more about power-from-waste"),Pu.forEach(a),tv.forEach(a),ev.forEach(a),Di=c(Ma),Ln=r(Ma,"A",{href:!0});var Kg=n(Ln);or=r(Kg,"DIV",{class:!0});var sv=n(or);Ja=r(sv,"IMG",{src:!0,alt:!0,class:!0}),Xa=c(sv),Qo=r(sv,"DIV",{});var Ac=n(Qo);Xc=p(Ac,"Calculate now"),Ac.forEach(a),sv.forEach(a),Kg.forEach(a),Ma.forEach(a),Zi.forEach(a),po=c(Zp),fl=r(Zp,"DIV",{class:!0});var Jg=n(fl);Ur=r(Jg,"DIV",{class:!0});var Xg=n(Ur);Ds=r(Xg,"DIV",{class:!0});var rv=n(Ds);wa=r(rv,"IMG",{src:!0,alt:!0,class:!0}),zd=c(rv),Ks=r(rv,"DIV",{class:!0});var av=n(Ks);xr=r(av,"DIV",{class:!0});var ku=n(xr);Qa=p(ku,"Concerned about costs?"),ku.forEach(a),Pi=c(av),ki=r(av,"DIV",{class:!0});var Qg=n(ki);Za=p(Qg,`Even our larger projects have payback periods under five years, with some as low as two. After that, you
                    only cover the annual facility maintenance cost, with no grid or standing charges.`),Qg.forEach(a),av.forEach(a),rv.forEach(a),Xg.forEach(a),Jg.forEach(a),Zp.forEach(a),wd.forEach(a),_c.forEach(a),en=c(cf),Wl=r(cf,"DIV",{class:!0});var nv=n(Wl);pl=r(nv,"DIV",{class:!0});var mn=n(pl);gs=r(mn,"DIV",{class:!0});var Zg=n(gs);_a=r(Zg,"DIV",{class:!0});var Rl=n(_a);Si=p(Rl,"Other green energy sources"),Rl.forEach(a),Zg.forEach(a),Ea=c(mn),Zo=r(mn,"DIV",{class:!0});var eh=n(Zo);Qc=p(eh,"Different renewable energy sources can be combined to find the perfect solution for your project"),eh.forEach(a),mn.forEach(a),cr=c(nv),Ns=r(nv,"DIV",{class:!0});var to=n(Ns);vl=r(to,"DIV",{class:!0});var $o=n(vl);Gn=r($o,"DIV",{class:!0,id:!0});var so=n(Gn);Fs=r(so,"DIV",{class:!0,id:!0});var Dd=n(Fs);Ia=r(Dd,"DIV",{class:!0}),n(Ia).forEach(a),Dd.forEach(a),Zc=c(so),gl=r(so,"DIV",{class:!0});var Vd=n(gl);Bs=r(Vd,"DIV",{class:!0});var th=n(Bs);Ti=p(th,"Solar power"),th.forEach(a),Kd=c(Vd),Tr=r(Vd,"DIV",{class:!0});var lv=n(Tr);Ar=r(lv,"DIV",{class:!0});var qo=n(Ar);Jd=p(qo,`Solar power converts the Sun’s photons into electricity through solar panels. It works in most locations and
                  has several benefits.`),qo.forEach(a),ed=c(lv),Fr=r(lv,"BUTTON",{onclick:!0,href:!0});var Pd=n(Fr);tn=r(Pd,"IMG",{id:!0,src:!0}),hl=c(Pd),vo=r(Pd,"IMG",{id:!0,class:!0,src:!0}),Pd.forEach(a),lv.forEach(a),Vd.forEach(a),so.forEach(a),Xd=c($o),Hr=r($o,"DIV",{id:!0,class:!0});var sh=n(Hr);Rs=r(sh,"DIV",{class:!0});var iv=n(Rs);ml=r(iv,"DIV",{class:!0});var ov=n(ml);Mn=r(ov,"DIV",{class:!0});var cv=n(Mn);Ai=r(cv,"IMG",{src:!0,alt:!0,class:!0}),Yr=c(cv),jn=r(cv,"DIV",{class:!0});var hf=n(jn);Xu=p(hf,"Pros"),hf.forEach(a),cv.forEach(a),Qd=c(ov),go=r(ov,"DIV",{class:!0});var rh=n(go);$s=r(rh,"UL",{class:!0});var Su=n($s);rn=r(Su,"LI",{});var kd=n(rn);Qu=p(kd,"Often cheaper than fossil fuels by 2023"),kd.forEach(a),Zd=c(Su),ec=r(Su,"LI",{});var mf=n(ec);Nn=p(mf,"Environmentally friendly Low maintenance and long-lasting"),mf.forEach(a),an=c(Su),tc=r(Su,"LI",{});var Sd=n(tc);eu=p(Sd,"Emissions-free during use"),Sd.forEach(a),Su.forEach(a),rh.forEach(a),ov.forEach(a),Oi=c(iv),Da=r(iv,"DIV",{class:!0});var Wv=n(Da);Bn=r(Wv,"DIV",{class:!0});var dv=n(Bn);xl=r(dv,"IMG",{src:!0,alt:!0,class:!0}),Zu=c(dv),Rn=r(dv,"DIV",{class:!0});var Td=n(Rn);bl=p(Td,"Cons"),Td.forEach(a),dv.forEach(a),mo=c(Wv),xo=r(Wv,"DIV",{class:!0});var xf=n(xo);Va=r(xf,"UL",{class:!0});var Fc=n(Va);$n=r(Fc,"LI",{});var ah=n($n);nn=p(ah,"High initial costs"),ah.forEach(a),tu=c(Fc),sc=r(Fc,"LI",{});var Tu=n(sc);yl=p(Tu,"Intermittent power supply, requiring grid connection or battery storage"),Tu.forEach(a),rc=c(Fc),wl=r(Fc,"LI",{});var nh=n(wl);Kl=p(nh,"Environmental impacts during production and disposal"),nh.forEach(a),qn=c(Fc),Pa=r(Fc,"LI",{});var lh=n(Pa);bo=p(lh,"Potential local resistance to solar farm installations near habitation"),lh.forEach(a),Fc.forEach(a),xf.forEach(a),Wv.forEach(a),iv.forEach(a),sh.forEach(a),$o.forEach(a),Li=c(to),ln=r(to,"DIV",{class:!0});var Mr=n(ln);_l=r(Mr,"DIV",{class:!0,id:!0});var Uo=n(_l);ka=r(Uo,"DIV",{class:!0,id:!0});var Ad=n(ka);El=r(Ad,"DIV",{class:!0}),n(El).forEach(a),Ad.forEach(a),su=c(Uo),Jl=r(Uo,"DIV",{class:!0});var uv=n(Jl);Un=r(uv,"DIV",{class:!0});var Au=n(Un);ru=p(Au,"Wind power"),Au.forEach(a),Ci=c(uv),br=r(uv,"DIV",{class:!0});var zv=n(br);on=r(zv,"DIV",{class:!0});var ih=n(on);Sa=p(ih,"Wind power, also called “Eolic” energy, generates electricity using wind turbines."),ih.forEach(a),Gi=c(zv),Xl=r(zv,"BUTTON",{onclick:!0,href:!0});var Oc=n(Xl);Mi=r(Oc,"IMG",{id:!0,class:!0,src:!0}),yo=c(Oc),Ta=r(Oc,"IMG",{id:!0,src:!0}),Oc.forEach(a),zv.forEach(a),uv.forEach(a),Uo.forEach(a),wo=c(Mr),Il=r(Mr,"DIV",{id:!0,class:!0});var bf=n(Il);Hn=r(bf,"DIV",{class:!0});var fv=n(Hn);qs=r(fv,"DIV",{class:!0});var pv=n(qs);Wr=r(pv,"DIV",{class:!0});var vv=n(Wr);Dl=r(vv,"IMG",{src:!0,alt:!0,class:!0}),au=c(vv),zr=r(vv,"DIV",{class:!0});var Fd=n(zr);ji=p(Fd,"Pros"),Fd.forEach(a),vv.forEach(a),_o=c(pv),Zl=r(pv,"DIV",{class:!0});var Od=n(Zl);hs=r(Od,"UL",{class:!0});var Fu=n(hs);Aa=r(Fu,"LI",{});var Ou=n(Aa);Eo=p(Ou,"Often cheaper than fossil fuels by 2023"),Ou.forEach(a),Vl=c(Fu),td=r(Fu,"LI",{});var im=n(td);ac=p(im,"Environmentally friendly Low maintenance and long-lasting"),im.forEach(a),Or=c(Fu),cn=r(Fu,"LI",{});var oh=n(cn);nu=p(oh,"Emissions-free during use"),oh.forEach(a),Fu.forEach(a),Od.forEach(a),pv.forEach(a),nc=c(fv),Lr=r(fv,"DIV",{class:!0});var Lc=n(Lr);dn=r(Lc,"DIV",{class:!0});var Ld=n(dn);Ni=r(Ld,"IMG",{src:!0,alt:!0,class:!0}),Pl=c(Ld),lc=r(Ld,"DIV",{class:!0});var ch=n(lc);ic=p(ch,"Cons"),ch.forEach(a),Ld.forEach(a),ei=c(Lc),kl=r(Lc,"DIV",{class:!0});var dh=n(kl);Fa=r(dh,"UL",{class:!0});var Cc=n(Fa);oc=r(Cc,"LI",{});var Cd=n(oc);lu=p(Cd,"High initial costs"),Cd.forEach(a),Yn=c(Cc),Kr=r(Cc,"LI",{});var Gd=n(Kr);un=p(Gd,"Intermittent power supply, requiring grid connection or battery storage"),Gd.forEach(a),sd=c(Cc),Bi=r(Cc,"LI",{});var uh=n(Bi);cc=p(uh,"Environmental impacts during production and disposal"),uh.forEach(a),Sl=c(Cc),Tl=r(Cc,"LI",{});var Lu=n(Tl);ti=p(Lu,"Potential local resistance to solar farm installations near habitation"),Lu.forEach(a),Cc.forEach(a),dh.forEach(a),Lc.forEach(a),fv.forEach(a),bf.forEach(a),Mr.forEach(a),iu=c(to),si=r(to,"DIV",{class:!0});var Kv=n(si);Cr=r(Kv,"DIV",{class:!0,id:!0});var gv=n(Cr);Jr=r(gv,"DIV",{class:!0,id:!0});var Md=n(Jr);Al=r(Md,"DIV",{class:!0}),n(Al).forEach(a),Md.forEach(a),sf=c(gv),ri=r(gv,"DIV",{class:!0});var hv=n(ri);Do=r(hv,"DIV",{class:!0});var yf=n(Do);Fl=p(yf,"Energy storage"),yf.forEach(a),fn=c(hv),Ol=r(hv,"DIV",{class:!0});var mv=n(Ol);Vo=r(mv,"DIV",{class:!0});var fh=n(Vo);dc=p(fh,"Energy storage is a crucial technology that allows us to store excess energy for future use."),fh.forEach(a),Wn=c(mv),Xr=r(mv,"BUTTON",{onclick:!0,href:!0});var xv=n(Xr);Po=r(xv,"IMG",{id:!0,src:!0,class:!0}),pn=c(xv),Oa=r(xv,"IMG",{id:!0,src:!0}),xv.forEach(a),mv.forEach(a),hv.forEach(a),gv.forEach(a),uc=c(Kv),vn=r(Kv,"DIV",{id:!0,class:!0});var jd=n(vn);Ri=r(jd,"DIV",{class:!0});var Ho=n(Ri);ai=r(Ho,"DIV",{class:!0});var bv=n(ai);Gr=r(bv,"DIV",{class:!0});var Gc=n(Gr);zn=r(Gc,"IMG",{src:!0,alt:!0,class:!0}),$i=c(Gc),Qr=r(Gc,"DIV",{class:!0});var om=n(Qr);fc=p(om,"Pros"),om.forEach(a),Gc.forEach(a),pc=c(bv),ko=r(bv,"DIV",{class:!0});var ph=n(ko);La=r(ph,"UL",{class:!0});var ro=n(La);vc=r(ro,"LI",{});var wf=n(vc);gc=p(wf,"Often cheaper than fossil fuels by 2023"),wf.forEach(a),So=c(ro),Ca=r(ro,"LI",{});var vh=n(Ca);ni=p(vh,"Environmentally friendly Low maintenance and long-lasting"),vh.forEach(a),Kn=c(ro),To=r(ro,"LI",{});var gh=n(To);gg=p(gh,"Emissions-free during use"),gh.forEach(a),ro.forEach(a),ph.forEach(a),bv.forEach(a),Lv=c(Ho),Jn=r(Ho,"DIV",{class:!0});var yv=n(Jn);Ll=r(yv,"DIV",{class:!0});var Yo=n(Ll);nd=r(Yo,"IMG",{src:!0,alt:!0,class:!0}),ld=c(Yo),ou=r(Yo,"DIV",{class:!0});var Nd=n(ou);Cv=p(Nd,"Cons"),Nd.forEach(a),Yo.forEach(a),hc=c(yv),Ao=r(yv,"DIV",{class:!0});var hh=n(Ao);dr=r(hh,"UL",{class:!0});var $l=n(dr);Fo=r($l,"LI",{});var cm=n(Fo);mg=p(cm,"High initial costs"),cm.forEach(a),Gv=c($l),af=r($l,"LI",{});var mh=n(af);cu=p(mh,"Intermittent power supply, requiring grid connection or battery storage"),mh.forEach(a),Oo=c($l),Lo=r($l,"LI",{});var Bd=n(Lo);xg=p(Bd,"Environmental impacts during production and disposal"),Bd.forEach(a),Mv=c($l),nf=r($l,"LI",{});var xh=n(nf);li=p(xh,"Potential local resistance to solar farm installations near habitation"),xh.forEach(a),$l.forEach(a),hh.forEach(a),yv.forEach(a),Ho.forEach(a),jd.forEach(a),Kv.forEach(a),to.forEach(a),nv.forEach(a),cf.forEach(a),mc=c(Gl),qi=r(Gl,"DIV",{class:!0});var Rd=n(qi);du=r(Rd,"DIV",{class:!0});var bh=n(du);jv=p(bh,"Copyright © 2023 Power for Planet"),bh.forEach(a),Ui=c(Rd),Cl=r(Rd,"DIV",{class:!0});var wv=n(Cl);lf=r(wv,"DIV",{class:!0});var yh=n(lf);Nv=p(yh,"Privacy Policy"),yh.forEach(a),gn=c(wv),Ga=r(wv,"DIV",{class:!0});var ci=n(Ga);Hi=r(ci,"IMG",{src:!0,alt:!0,class:!0}),bg=c(ci),id=r(ci,"IMG",{src:!0,alt:!0,class:!0}),od=c(ci),cd=r(ci,"IMG",{src:!0,alt:!0,class:!0}),ci.forEach(a),wv.forEach(a),Rd.forEach(a),Go=c(Gl),bc=r(Gl,"SCRIPT",{});var $d=n(bc);Bv=p($d,`function toggleElement(k) {
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
    }`),$d.forEach(a),Gl.forEach(a),this.h()},h(){t(g,"class","w-full flex-col flex justify-center items-center gap-2.5 text-[44px] leading-[46px] font-bold"),t(v,"class","bg-cover bg-center bg-[url('/assets/new/E2.jpg')] h-[240px] bg-[#2e3855] bg-blend-darken bg-opacity-[0.2] w-full flex-col h-2/5 flex justify-center items-center gap-5 px-[50px] py-10 rounded-[20px] text-center text-white font-Poppins"),t(V,"class","uppercase tracking-wider"),t(w,"class","bg-white flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-[#3f9378]"),t(_,"class","text-4xl leading-[46px] font-bold text-[#2e3855] h-[92px] w-[660px]"),t(E,"class","w-full flex-col flex items-center gap-5 text-center font-Poppins"),t(M,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(F,"class","font-bold text-xl leading-[34px] font-Poppins"),t(q,"class","font-bold text-xl leading-[34px] text-[#3f9378] font-Poppins"),t(ce,"class","font-bold text-xl leading-[34px] font-Poppins"),t(N,"class","w-[440px]"),t(y,"class","w-full flex items-start gap-[18px]"),t(L,"class","w-full flex-col flex items-start gap-6 text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins"),t(G,"class","bg-white h-full flex-1 flex-col flex items-start gap-[18px] p-10 rounded-[20px]"),t(ae,"class","bg-[#2e3855] rounded-[6px] h-2 w-[50px]"),t(ie,"class","font-bold text-xl leading-[34px] text-[#3f9378] font-Poppins"),t(we,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[440px]"),t(ye,"class","w-full flex-col flex items-start gap-[18px]"),t(se,"class","w-full flex-col flex items-start gap-5"),t(R,"class","bg-white h-full flex-1 flex-col flex items-start gap-[60px] p-10 rounded-[20px]"),t(A,"class","w-full h-[208px] flex items-start gap-5"),t(u,"class","flex-col w-full flex items-start gap-10 rounded-[20px]"),t(de,"class","uppercase tracking-wider"),t(ge,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(We,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(me,"class","flex-col flex items-center gap-5"),t(pe,"class","bg-cover bg-[url('/assets/new/E3.jpg')] bg-blend-darken bg-center bg-[#2e3855] bg-opacity-[0.4] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(Te,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(ue,"class","w-[700px]"),t(he,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(Me,"class","flex-col w-[700px] flex items-center gap-4"),S(be.src,vt="/assets/new/badge-plus.svg")||t(be,"src",vt),t(be,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Slurrycovers-31-Frame32-31-wrapper-31-03Greenenergy"),t(be,"class","h-6 w-6"),t(le,"class","uppercase"),t(ne,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Fe,"class","list-disc"),t(je,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Pe,"class","flex-1 flex-col flex items-start gap-4 align-top"),S(ct.src,Ct="/assets/new/badge-minus.svg")||t(ct,"src",Ct),t(ct,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Slurrycovers-31-Frame32-31-wrapper-31-03Greenenergy0"),t(ct,"class","h-6 w-6"),t(Dt,"class","uppercase"),t(at,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(re,"class","list-disc"),t(kt,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Le,"class","h-full flex-1 flex-col flex items-start gap-4"),t(fe,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(ee,"class","w-full flex-col flex justify-center items-center gap-10"),t(Ge,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(He,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(Ee,"class","w-full flex-col flex items-start"),t(It,"class","uppercase tracking-wider"),t(St,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(Vt,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(et,"class","flex-col flex items-center gap-5"),t(xt,"class","bg-cover bg-[url('/assets/new/E4.jpg')] bg-center bg-blend-darken bg-[#2e3855] bg-opacity-[0.4] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(At,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(Ft,"class","w-[700px]"),t(zt,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(lt,"class","flex-col w-[700px] flex items-center gap-4"),S(jt.src,ss="/assets/new/badge-plus.svg")||t(jt,"src",ss),t(jt,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Anaerobicdigestion-31-Frame32-31-wrapper-31-03Greenenergy"),t(jt,"class","h-6 w-6"),t(Ps,"class","uppercase"),t(st,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(ks,"class","list-disc"),t(Qs,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Kt,"class","flex-1 flex-col flex items-start gap-4"),S(fr.src,ta="/assets/new/badge-minus.svg")||t(fr,"src",ta),t(fr,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Anaerobicdigestion-31-Frame32-31-wrapper-31-03Greenenergy0"),t(fr,"class","h-6 w-6"),t(Gs,"class","uppercase"),t(Cs,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(us,"class","list-disc"),t(pr,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Ss,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Vs,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(bt,"class","w-full flex-col flex justify-center items-center gap-10"),t(Et,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t($t,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(ot,"class","w-full flex-col flex items-start"),t(Ir,"class","uppercase tracking-wider"),t(Ts,"class","bg-[#2e3855] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold"),t(ts,"class","text-4xl leading-[46px] font-bold w-[960px]"),t(la,"class","flex-col flex items-center gap-5"),t(na,"class","bg-cover bg-[url('/assets/new/E5.png')] bg-[center_top_400px] bg-blend-darken bg-[#2e3855] bg-opacity-[0.5] w-full flex-col h-[240px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-t-[20px] text-center text-white font-Poppins"),t(cs,"class","text-2xl leading-[33px] font-bold font-Poppins w-[700px]"),t(rs,"class","w-[700px]"),t(gr,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light font-PublicSans"),t(Us,"class","flex-col w-[700px] flex items-center gap-4"),S(tr.src,As="/assets/new/badge-plus.svg")||t(tr,"src",As),t(tr,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Pyrolysis-31-Frame32-31-wrapper-31-03Greenenergy"),t(tr,"class","h-6 w-6"),t(da,"class","uppercase"),t(Hs,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(fs,"class","list-disc"),t(Ys,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(Vr,"class","flex-1 flex-col flex items-start gap-4"),S(js.src,ps="/assets/new/badge-minus.svg")||t(js,"src",ps),t(js,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-Frame24-31-Frame18-31-content-31-Pyrolysis-31-Frame32-31-wrapper-31-03Greenenergy0"),t(js,"class","h-6 w-6"),t(ol,"class","uppercase"),t(Ws,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(_s,"class","list-disc"),t(ar,"class","leading-[26px] font-light font-PublicSans w-[450px] pr-12"),t(as,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Wt,"class","bg-[#e7f5f5] w-full flex items-center gap-10 px-[60px] pt-[30px] pb-[50px] text-sm"),t(Ms,"class","w-full flex-col flex justify-center items-center gap-10"),t(os,"class","w-full flex-col flex justify-center items-center gap-[30px]"),t(oa,"class","bg-white w-full flex-col flex items-start gap-10 pt-10 rounded-b-[20px] text-[#2e3855]"),t(bs,"class","w-full flex-col flex items-start"),t(va,"class","text-3xl leading-[46px] font-bold font-Poppins"),t(Ua,"class","text-sm leading-[26px] font-light font-PublicSans w-[498px]"),t(mr,"class","flex-col flex items-center gap-2 text-center text-[#2e3855]"),S(Ha.src,yi="/assets/new/E6.png")||t(Ha,"src",yi),t(Ha,"alt","Group7-31-Group21-31-img-31-Frame19-31-PFPtools-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),t(Ha,"class","h-[150px]"),t(co,"class","text-2xl leading-[33px] font-bold font-Poppins w-[390px]"),t(Fn,"class","text-md leading-[26px] font-light font-PublicSans w-[390px]"),t(ir,"class","w-full flex-col flex items-start gap-2 text-center text-white"),t(ga,"class","w-full flex-col flex items-center gap-3"),S(On.src,Ju="/assets/new/arrow-right-circle.svg")||t(On,"src",Ju),t(On,"alt","arrow-right-circle-31-CTA-31-ctas-31-Frame25-31-Frame24-31-Hero-31-wrapper-31-03Greenenergy"),t(On,"class","h-5 w-5"),t(Ya,"class","bg-[#eb8b5a] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-white"),t(ha,"href","/explore#map3"),t(ds,"class","bg-[#2e3855] flex-1 flex-col flex justify-center items-center gap-6 p-10 rounded-[20px]"),t(xa,"class","object-cover h-[150px]"),t(xa,"alt","calculator-31-Frame26-31-PFPtools-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),S(xa.src,fo="/assets/new/calc.png")||t(xa,"src",fo),t(ya,"class","text-2xl leading-[33px] font-bold font-Poppins w-[390px]"),t(Ii,"class","text-md leading-[26px] font-light font-PublicSans w-[390px]"),t(ba,"class","w-full flex-col flex items-start gap-2 text-center text-[#2e3855]"),t(Ka,"class","w-full flex-col flex items-center gap-3"),S(Ja.src,Cn="/assets/new/arrow-right-circle.svg")||t(Ja,"src",Cn),t(Ja,"alt","arrow-right-circle-31-CTA-31-ctas-31-Frame25-31-Frame24-31-Hero-31-wrapper-31-03Greenenergy"),t(Ja,"class","h-5 w-5"),t(or,"class","bg-[#eb8b5a] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-white"),t(Ln,"href","/explore#calculator3"),t(Is,"class","bg-[#d0e6f2] flex-1 flex-col flex justify-center items-center gap-6 p-10 rounded-[20px]"),t(lr,"class","w-full flex items-start gap-5"),S(wa.src,Vi="/assets/new/costs.png")||t(wa,"src",Vi),t(wa,"alt","illu-costs-31-Frame24-31-Frame18-31-costs-31-Group31-31-Frame31-31-Frame32-31-wrapper-31-03Greenenergy"),t(wa,"class","h-[120px]"),t(xr,"class","text-2xl leading-[33px] font-bold font-Poppins"),t(ki,"class","text-md leading-[26px] font-light font-PublicSans"),t(Ks,"class","flex-col flex items-start gap-4"),t(Ds,"class","flex items-center gap-10"),t(Ur,"class","w-full flex-col flex justify-center items-center gap-[30px] text-[#2e3855]"),t(fl,"class","bg-[#e7f5f5] flex-col w-full flex items-start gap-10 px-10 pt-10 pb-[50px] rounded-[20px] mt-5"),t(nr,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(Q,"class","w-full flex-col flex items-start gap-10"),t(_a,"class","uppercase tracking-wider"),t(gs,"class","bg-white flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-[#3f9378]"),t(Zo,"class","text-4xl leading-[46px] font-bold text-[#2e3855] w-[700px]"),t(pl,"class","w-full flex-col flex items-center gap-4 pb-[50px] text-center font-Poppins"),t(Ia,"class","flex-col flex items-center gap-5"),t(Fs,"class","bg-cover bg-[url('/assets/new/E11.jpg')] bg-center flex-col h-[245px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-tl-[20px]"),t(Fs,"id","xsp1img"),t(Bs,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(Ar,"class","w-[520px]"),t(tn,"id","xsp1a"),S(tn.src,sn="/assets/new/rl.png")||t(tn,"src",sn),t(vo,"id","xsp1b"),t(vo,"class","hidden"),S(vo.src,zl="/assets/new/rm.png")||t(vo,"src",zl),t(Fr,"onclick","toggleElement('xsp1')"),t(Fr,"href","#"),t(Tr,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(gl,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(Gn,"class","bg-white w-full flex items-center rounded-t-[20px]"),t(Gn,"id","xsp1box"),S(Ai.src,Fi="/assets/new/badge-plus.svg")||t(Ai,"src",Fi),t(Ai,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Ai,"class","h-6 w-6"),t(jn,"class","uppercase"),t(Mn,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t($s,"class","list-disc"),t(go,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(ml,"class","flex-1 flex-col flex items-start gap-4"),S(xl.src,ho="/assets/new/badge-minus.svg")||t(xl,"src",ho),t(xl,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy00"),t(xl,"class","h-6 w-6"),t(Rn,"class","uppercase"),t(Bn,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Va,"class","list-disc"),t(xo,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(Da,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Rs,"class","bg-[#e7f5f5] w-full h-full flex items-start gap-10 px-[60px] rounded-b-[20px] pt-[30px]"),t(Hr,"id","xsp1"),t(Hr,"class","h-[250px] h-[0px] duration-300 bg-none w-full flex-col flex items-start gap-10 rounded-b-[20px] text-sm text-[#2e3855]"),t(vl,"class","flex-col w-[1060px] flex items-start rounded-[20px]"),t(El,"class","flex-col flex items-center gap-5"),t(ka,"class","bg-cover bg-[url('/assets/new/E12.jpg')] bg-center flex-col h-[245px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-tl-[20px] rounded-bl-[20px]"),t(ka,"id","xsp2img"),t(Un,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(on,"class","w-[520px]"),t(Mi,"id","xsp2a"),t(Mi,"class","hidden"),S(Mi.src,ef="/assets/new/rl.png")||t(Mi,"src",ef),t(Ta,"id","xsp2b"),S(Ta.src,Ql="/assets/new/rm.png")||t(Ta,"src",Ql),t(Xl,"onclick","toggleElement('xsp2')"),t(Xl,"href","#"),t(br,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(Jl,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(_l,"class","bg-white w-full flex items-center rounded-t-[20px] rounded-b-[20px]"),t(_l,"id","xsp2box"),S(Dl.src,tf="/assets/new/badge-plus.svg")||t(Dl,"src",tf),t(Dl,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy0"),t(Dl,"class","h-6 w-6"),t(zr,"class","uppercase"),t(Wr,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(hs,"class","list-disc"),t(Zl,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(qs,"class","flex-1 flex-col flex items-start gap-4"),S(Ni.src,Io="/assets/new/badge-minus.svg")||t(Ni,"src",Io),t(Ni,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy00"),t(Ni,"class","h-6 w-6"),t(lc,"class","uppercase"),t(dn,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(Fa,"class","list-disc"),t(kl,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(Lr,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Hn,"class","bg-[#e7f5f5] w-full h-full flex items-start gap-10 px-[60px] rounded-b-[20px] pt-[30px]"),t(Il,"id","xsp2"),t(Il,"class","-translate-y-full opacity-0 duration-300 h-[0px] bg-white w-full flex-col flex items-start gap-10 rounded-b-[20px] text-sm text-[#2e3855]"),t(ln,"class","flex-col w-[1060px] flex items-start rounded-[20px]"),t(Al,"class","flex-col flex items-center gap-5"),t(Jr,"class","bg-cover bg-[url('/assets/new/E13.jpg')] bg-center flex-col h-[245px] w-[460px] flex justify-center items-center gap-5 px-[50px] py-10 rounded-tl-[20px] rounded-bl-[20px]"),t(Jr,"id","xsp3img"),t(Do,"class","text-2xl leading-[33px] font-bold text-[#2e3855] font-Poppins w-[520px]"),t(Vo,"class","w-[520px]"),t(Po,"id","xsp3a"),S(Po.src,rd="/assets/new/rl.png")||t(Po,"src",rd),t(Po,"class","hidden"),t(Oa,"id","xsp3b"),S(Oa.src,ad="/assets/new/rm.png")||t(Oa,"src",ad),t(Xr,"onclick","toggleElement('xsp3')"),t(Xr,"href","#"),t(Ol,"class","w-full flex-col flex items-start gap-[39px] text-md leading-[26px] font-light text-[#2e3855] font-PublicSans"),t(ri,"class","flex-1 flex-col flex items-start gap-4 px-10 py-[30px]"),t(Cr,"class","bg-white w-full flex items-center rounded-t-[20px] rounded-b-[20px]"),t(Cr,"id","xsp3box"),S(zn.src,rf="/assets/new/badge-plus.svg")||t(zn,"src",rf),t(zn,"alt","badge-plus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy0"),t(zn,"class","h-6 w-6"),t(Qr,"class","uppercase"),t(Gr,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(La,"class","list-disc"),t(ko,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(ai,"class","flex-1 flex-col flex items-start gap-4"),S(nd.src,hg="/assets/new/badge-minus.svg")||t(nd,"src",hg),t(nd,"alt","badge-minus-31-Frame31-31-pros-31-proscons-31-content-31-solarpower-31-Frame32-31-Frame32-31-wrapper-31-03Greenenergy00"),t(nd,"class","h-6 w-6"),t(ou,"class","uppercase"),t(Ll,"class","w-full flex items-center gap-3.5 leading-[21px] font-semibold text-center font-Poppins"),t(dr,"class","list-disc"),t(Ao,"class","leading-[26px] font-light font-PublicSans w-[450px]"),t(Jn,"class","h-full flex-1 flex-col flex items-start gap-4"),t(Ri,"class","bg-[#e7f5f5] w-full h-full flex items-start gap-10 px-[60px] pt-[30px] rounded-b-[20px]"),t(vn,"id","xsp3"),t(vn,"class","-translate-y-full opacity-0 duration-300 h-[0px] bg-white w-full flex-col flex items-start gap-10 rounded-b-[20px] text-sm text-[#2e3855]"),t(si,"class","flex-col w-[1060px] flex items-start rounded-[20px] mt-[10px]"),t(Ns,"class","flex-col flex items-start gap-[30px]"),t(Wl,"class","w-full flex-col flex items-start gap-2.5"),t(i,"class","flex-col w-[1060px] flex items-center gap-10"),t(du,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(lf,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Hi.src,xc="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Hi,"src",xc),t(Hi,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Hi,"class","h-6 w-6"),S(id.src,Co="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(id,"src",Co),t(id,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(id,"class","h-6 w-6"),S(cd.src,yg="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(cd,"src",yg),t(cd,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(cd,"class","h-6 w-6"),t(Ga,"class","flex items-center gap-5"),t(Cl,"class","flex-1 flex justify-end items-center gap-10"),t(qi,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 mw-[1060px]")},m(of,Gl){Qe(of,l,Gl),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(u,h),e(u,E),e(E,w),e(w,V),e(V,D),e(E,I),e(E,_),e(_,O),e(u,k),e(u,A),e(A,G),e(G,M),e(G,b),e(G,L),e(L,y),e(y,N),e(N,F),e(F,C),e(N,j),e(N,q),e(q,K),e(N,$),e(N,ce),e(ce,Se),e(A,z),e(A,R),e(R,se),e(se,ye),e(ye,ae),e(ye,Ke),e(ye,we),e(we,te),e(we,Ne),e(we,Ve),e(we,ie),e(ie,_e),e(we,Ce),e(i,Y),e(i,Q),e(Q,Ee),e(Ee,pe),e(pe,me),e(me,ge),e(ge,de),e(de,J),e(me,$e),e(me,We),e(We,xe),e(Ee,X),e(Ee,He),e(He,Ge),e(Ge,ee),e(ee,Me),e(Me,Te),e(Te,ze),e(Me,Ie),e(Me,he),e(he,ue),e(ue,rt),e(ue,Je),e(ue,Xe),e(ue,P),e(ue,B),e(ue,U),e(ue,W),e(ue,Z),e(ue,oe),e(ee,H),e(ee,fe),e(fe,Pe),e(Pe,ne),e(ne,be),e(ne,Be),e(ne,le),e(le,Ae),e(Pe,De),e(Pe,je),e(je,Fe),e(Fe,qe),e(qe,ft),e(Fe,ke),e(Fe,Ze),e(Ze,Nt),e(Fe,Lt),e(Fe,Oe),e(Oe,mt),e(fe,Pt),e(fe,Le),e(Le,at),e(at,ct),e(at,gt),e(at,Dt),e(Dt,pt),e(Le,Bt),e(Le,kt),e(kt,re),e(re,nt),e(nt,Tt),e(re,Rt),e(re,it),e(it,dt),e(re,Zt),e(Q,qt),e(Q,ot),e(ot,xt),e(xt,et),e(et,St),e(St,It),e(It,Gt),e(et,es),e(et,Vt),e(Vt,Ue),e(ot,ut),e(ot,$t),e($t,Et),e(Et,bt),e(bt,lt),e(lt,At),e(At,yt),e(lt,Ut),e(lt,zt),e(zt,Ft),e(Ft,Mt),e(Ft,Jt),e(Ft,Ht),e(Ft,Xt),e(Ft,ht),e(bt,Js),e(bt,Vs),e(Vs,Kt),e(Kt,st),e(st,jt),e(st,Xs),e(st,Ps),e(Ps,Qt),e(Kt,wt),e(Kt,Qs),e(Qs,ks),e(ks,ns),e(ns,jr),e(ks,Na),e(ks,ms),e(ms,ur),e(ks,_r),e(ks,ls),e(ks,Er),e(Vs,Yt),e(Vs,Ss),e(Ss,Cs),e(Cs,fr),e(Cs,di),e(Cs,Gs),e(Gs,is),e(Ss,sa),e(Ss,pr),e(pr,us),e(us,sl),e(sl,Ba),e(us,xs),e(us,ra),e(ra,_n),e(us,aa),e(us,Zs),e(Zs,ui),e(Q,En),e(Q,bs),e(bs,na),e(na,la),e(la,Ts),e(Ts,Ir),e(Ir,Ra),e(la,ia),e(la,ts),e(ts,vr),e(bs,er),e(bs,oa),e(oa,os),e(os,Ms),e(Ms,Us),e(Us,cs),e(cs,rl),e(Us,fi),e(Us,gr),e(gr,rs),e(rs,pi),e(rs,In),e(rs,Nr),e(rs,al),e(rs,nl),e(rs,lo),e(rs,vi),e(rs,ys),e(rs,Dr),e(Ms,$a),e(Ms,Wt),e(Wt,Vr),e(Vr,Hs),e(Hs,tr),e(Hs,ca),e(Hs,da),e(da,ua),e(Vr,gi),e(Vr,Ys),e(Ys,fs),e(fs,Ul),e(Ul,ll),e(fs,ws),e(fs,hr),e(hr,Dn),e(fs,sr),e(fs,fa),e(fa,il),e(Wt,Pr),e(Wt,as),e(as,Ws),e(Ws,js),e(Ws,kr),e(Ws,ol),e(ol,hi),e(as,rr),e(as,ar),e(ar,_s),e(_s,Sr),e(Sr,pa),e(_s,Vn),e(_s,cl),e(cl,mi),e(_s,vs),e(_s,Es),e(Es,Br),e(_s,Pn),e(_s,dl),e(_s,kn),e(Q,zs),e(Q,nr),e(nr,mr),e(mr,va),e(va,io),e(va,ul),e(va,Sn),e(mr,qa),e(mr,Ua),e(Ua,Wc),e(Ua,zc),e(Ua,Rr),e(Ua,Wd),e(nr,oo),e(nr,bi),e(bi,lr),e(lr,ds),e(ds,Tn),e(Tn,An),e(An,Ha),e(ds,wi),e(ds,ga),e(ga,ir),e(ir,co),e(co,Kc),e(ir,$r),e(ir,Fn),e(Fn,Jc),e(ds,_i),e(ds,ha),e(ha,Ya),e(Ya,On),e(Ya,uo),e(Ya,Wa),e(Wa,za),e(lr,ma),e(lr,Is),e(Is,xa),e(Is,qr),e(Is,Ka),e(Ka,ba),e(ba,ya),e(ya,Hl),e(ba,Ei),e(ba,Ii),e(Ii,Yl),e(Is,Di),e(Is,Ln),e(Ln,or),e(or,Ja),e(or,Xa),e(or,Qo),e(Qo,Xc),e(bi,po),e(bi,fl),e(fl,Ur),e(Ur,Ds),e(Ds,wa),e(Ds,zd),e(Ds,Ks),e(Ks,xr),e(xr,Qa),e(Ks,Pi),e(Ks,ki),e(ki,Za),e(i,en),e(i,Wl),e(Wl,pl),e(pl,gs),e(gs,_a),e(_a,Si),e(pl,Ea),e(pl,Zo),e(Zo,Qc),e(Wl,cr),e(Wl,Ns),e(Ns,vl),e(vl,Gn),e(Gn,Fs),e(Fs,Ia),e(Gn,Zc),e(Gn,gl),e(gl,Bs),e(Bs,Ti),e(gl,Kd),e(gl,Tr),e(Tr,Ar),e(Ar,Jd),e(Tr,ed),e(Tr,Fr),e(Fr,tn),e(Fr,hl),e(Fr,vo),e(vl,Xd),e(vl,Hr),e(Hr,Rs),e(Rs,ml),e(ml,Mn),e(Mn,Ai),e(Mn,Yr),e(Mn,jn),e(jn,Xu),e(ml,Qd),e(ml,go),e(go,$s),e($s,rn),e(rn,Qu),e($s,Zd),e($s,ec),e(ec,Nn),e($s,an),e($s,tc),e(tc,eu),e(Rs,Oi),e(Rs,Da),e(Da,Bn),e(Bn,xl),e(Bn,Zu),e(Bn,Rn),e(Rn,bl),e(Da,mo),e(Da,xo),e(xo,Va),e(Va,$n),e($n,nn),e(Va,tu),e(Va,sc),e(sc,yl),e(Va,rc),e(Va,wl),e(wl,Kl),e(Va,qn),e(Va,Pa),e(Pa,bo),e(Ns,Li),e(Ns,ln),e(ln,_l),e(_l,ka),e(ka,El),e(_l,su),e(_l,Jl),e(Jl,Un),e(Un,ru),e(Jl,Ci),e(Jl,br),e(br,on),e(on,Sa),e(br,Gi),e(br,Xl),e(Xl,Mi),e(Xl,yo),e(Xl,Ta),e(ln,wo),e(ln,Il),e(Il,Hn),e(Hn,qs),e(qs,Wr),e(Wr,Dl),e(Wr,au),e(Wr,zr),e(zr,ji),e(qs,_o),e(qs,Zl),e(Zl,hs),e(hs,Aa),e(Aa,Eo),e(hs,Vl),e(hs,td),e(td,ac),e(hs,Or),e(hs,cn),e(cn,nu),e(Hn,nc),e(Hn,Lr),e(Lr,dn),e(dn,Ni),e(dn,Pl),e(dn,lc),e(lc,ic),e(Lr,ei),e(Lr,kl),e(kl,Fa),e(Fa,oc),e(oc,lu),e(Fa,Yn),e(Fa,Kr),e(Kr,un),e(Fa,sd),e(Fa,Bi),e(Bi,cc),e(Fa,Sl),e(Fa,Tl),e(Tl,ti),e(Ns,iu),e(Ns,si),e(si,Cr),e(Cr,Jr),e(Jr,Al),e(Cr,sf),e(Cr,ri),e(ri,Do),e(Do,Fl),e(ri,fn),e(ri,Ol),e(Ol,Vo),e(Vo,dc),e(Ol,Wn),e(Ol,Xr),e(Xr,Po),e(Xr,pn),e(Xr,Oa),e(si,uc),e(si,vn),e(vn,Ri),e(Ri,ai),e(ai,Gr),e(Gr,zn),e(Gr,$i),e(Gr,Qr),e(Qr,fc),e(ai,pc),e(ai,ko),e(ko,La),e(La,vc),e(vc,gc),e(La,So),e(La,Ca),e(Ca,ni),e(La,Kn),e(La,To),e(To,gg),e(Ri,Lv),e(Ri,Jn),e(Jn,Ll),e(Ll,nd),e(Ll,ld),e(Ll,ou),e(ou,Cv),e(Jn,hc),e(Jn,Ao),e(Ao,dr),e(dr,Fo),e(Fo,mg),e(dr,Gv),e(dr,af),e(af,cu),e(dr,Oo),e(dr,Lo),e(Lo,xg),e(dr,Mv),e(dr,nf),e(nf,li),e(l,mc),e(l,qi),e(qi,du),e(du,jv),e(qi,Ui),e(qi,Cl),e(Cl,lf),e(lf,Nv),e(Cl,gn),e(Cl,Ga),e(Ga,Hi),e(Ga,bg),e(Ga,id),e(Ga,od),e(Ga,cd),e(l,Go),e(l,bc),e(bc,Bv)},p:Re,i:Re,o:Re,d(of){of&&a(l)}}}class AE extends yn{constructor(l){super(),wn(this,l,null,TE,ja,{})}}var ao="top",Hc="bottom",Yc="right",no="left",u2="auto",Em=[ao,Hc,Yc,no],Kh="start",wm="end",FE="clippingParents",x_="viewport",hm="popper",OE="reference",Kw=Em.reduce(function(d,l){return d.concat([l+"-"+Kh,l+"-"+wm])},[]),b_=[].concat(Em,[u2]).reduce(function(d,l){return d.concat([l,l+"-"+Kh,l+"-"+wm])},[]),LE="beforeRead",CE="read",GE="afterRead",ME="beforeMain",jE="main",NE="afterMain",BE="beforeWrite",RE="write",$E="afterWrite",qE=[LE,CE,GE,ME,jE,NE,BE,RE,$E];function Ku(d){return d?(d.nodeName||"").toLowerCase():null}function Xo(d){if(d==null)return window;if(d.toString()!=="[object Window]"){var l=d.ownerDocument;return l&&l.defaultView||window}return d}function pg(d){var l=Xo(d).Element;return d instanceof l||d instanceof Element}function Uc(d){var l=Xo(d).HTMLElement;return d instanceof l||d instanceof HTMLElement}function f2(d){if(typeof ShadowRoot>"u")return!1;var l=Xo(d).ShadowRoot;return d instanceof l||d instanceof ShadowRoot}function UE(d){var l=d.state;Object.keys(l.elements).forEach(function(i){var u=l.styles[i]||{},v=l.attributes[i]||{},g=l.elements[i];!Uc(g)||!Ku(g)||(Object.assign(g.style,u),Object.keys(v).forEach(function(x){var m=v[x];m===!1?g.removeAttribute(x):g.setAttribute(x,m===!0?"":m)}))})}function HE(d){var l=d.state,i={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,i.popper),l.styles=i,l.elements.arrow&&Object.assign(l.elements.arrow.style,i.arrow),function(){Object.keys(l.elements).forEach(function(u){var v=l.elements[u],g=l.attributes[u]||{},x=Object.keys(l.styles.hasOwnProperty(u)?l.styles[u]:i[u]),m=x.reduce(function(h,E){return h[E]="",h},{});!Uc(v)||!Ku(v)||(Object.assign(v.style,m),Object.keys(g).forEach(function(h){v.removeAttribute(h)}))})}}const y_={name:"applyStyles",enabled:!0,phase:"write",fn:UE,effect:HE,requires:["computeStyles"]};function zu(d){return d.split("-")[0]}var ug=Math.max,i0=Math.min,Jh=Math.round;function a2(){var d=navigator.userAgentData;return d!=null&&d.brands&&Array.isArray(d.brands)?d.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function w_(){return!/^((?!chrome|android).)*safari/i.test(a2())}function Xh(d,l,i){l===void 0&&(l=!1),i===void 0&&(i=!1);var u=d.getBoundingClientRect(),v=1,g=1;l&&Uc(d)&&(v=d.offsetWidth>0&&Jh(u.width)/d.offsetWidth||1,g=d.offsetHeight>0&&Jh(u.height)/d.offsetHeight||1);var x=pg(d)?Xo(d):window,m=x.visualViewport,h=!w_()&&i,E=(u.left+(h&&m?m.offsetLeft:0))/v,w=(u.top+(h&&m?m.offsetTop:0))/g,V=u.width/v,D=u.height/g;return{width:V,height:D,top:w,right:E+V,bottom:w+D,left:E,x:E,y:w}}function p2(d){var l=Xh(d),i=d.offsetWidth,u=d.offsetHeight;return Math.abs(l.width-i)<=1&&(i=l.width),Math.abs(l.height-u)<=1&&(u=l.height),{x:d.offsetLeft,y:d.offsetTop,width:i,height:u}}function __(d,l){var i=l.getRootNode&&l.getRootNode();if(d.contains(l))return!0;if(i&&f2(i)){var u=l;do{if(u&&d.isSameNode(u))return!0;u=u.parentNode||u.host}while(u)}return!1}function Np(d){return Xo(d).getComputedStyle(d)}function YE(d){return["table","td","th"].indexOf(Ku(d))>=0}function Ov(d){return((pg(d)?d.ownerDocument:d.document)||window.document).documentElement}function c0(d){return Ku(d)==="html"?d:d.assignedSlot||d.parentNode||(f2(d)?d.host:null)||Ov(d)}function Jw(d){return!Uc(d)||Np(d).position==="fixed"?null:d.offsetParent}function WE(d){var l=/firefox/i.test(a2()),i=/Trident/i.test(a2());if(i&&Uc(d)){var u=Np(d);if(u.position==="fixed")return null}var v=c0(d);for(f2(v)&&(v=v.host);Uc(v)&&["html","body"].indexOf(Ku(v))<0;){var g=Np(v);if(g.transform!=="none"||g.perspective!=="none"||g.contain==="paint"||["transform","perspective"].indexOf(g.willChange)!==-1||l&&g.willChange==="filter"||l&&g.filter&&g.filter!=="none")return v;v=v.parentNode}return null}function Im(d){for(var l=Xo(d),i=Jw(d);i&&YE(i)&&Np(i).position==="static";)i=Jw(i);return i&&(Ku(i)==="html"||Ku(i)==="body"&&Np(i).position==="static")?l:i||WE(d)||l}function v2(d){return["top","bottom"].indexOf(d)>=0?"x":"y"}function xm(d,l,i){return ug(d,i0(l,i))}function zE(d,l,i){var u=xm(d,l,i);return u>i?i:u}function E_(){return{top:0,right:0,bottom:0,left:0}}function I_(d){return Object.assign({},E_(),d)}function D_(d,l){return l.reduce(function(i,u){return i[u]=d,i},{})}var KE=function(l,i){return l=typeof l=="function"?l(Object.assign({},i.rects,{placement:i.placement})):l,I_(typeof l!="number"?l:D_(l,Em))};function JE(d){var l,i=d.state,u=d.name,v=d.options,g=i.elements.arrow,x=i.modifiersData.popperOffsets,m=zu(i.placement),h=v2(m),E=[no,Yc].indexOf(m)>=0,w=E?"height":"width";if(!(!g||!x)){var V=KE(v.padding,i),D=p2(g),I=h==="y"?ao:no,_=h==="y"?Hc:Yc,O=i.rects.reference[w]+i.rects.reference[h]-x[h]-i.rects.popper[w],k=x[h]-i.rects.reference[h],A=Im(g),G=A?h==="y"?A.clientHeight||0:A.clientWidth||0:0,M=O/2-k/2,b=V[I],L=G-D[w]-V[_],y=G/2-D[w]/2+M,N=xm(b,y,L),F=h;i.modifiersData[u]=(l={},l[F]=N,l.centerOffset=N-y,l)}}function XE(d){var l=d.state,i=d.options,u=i.element,v=u===void 0?"[data-popper-arrow]":u;v!=null&&(typeof v=="string"&&(v=l.elements.popper.querySelector(v),!v)||__(l.elements.popper,v)&&(l.elements.arrow=v))}const QE={name:"arrow",enabled:!0,phase:"main",fn:JE,effect:XE,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Qh(d){return d.split("-")[1]}var ZE={top:"auto",right:"auto",bottom:"auto",left:"auto"};function e6(d,l){var i=d.x,u=d.y,v=l.devicePixelRatio||1;return{x:Jh(i*v)/v||0,y:Jh(u*v)/v||0}}function Xw(d){var l,i=d.popper,u=d.popperRect,v=d.placement,g=d.variation,x=d.offsets,m=d.position,h=d.gpuAcceleration,E=d.adaptive,w=d.roundOffsets,V=d.isFixed,D=x.x,I=D===void 0?0:D,_=x.y,O=_===void 0?0:_,k=typeof w=="function"?w({x:I,y:O}):{x:I,y:O};I=k.x,O=k.y;var A=x.hasOwnProperty("x"),G=x.hasOwnProperty("y"),M=no,b=ao,L=window;if(E){var y=Im(i),N="clientHeight",F="clientWidth";if(y===Xo(i)&&(y=Ov(i),Np(y).position!=="static"&&m==="absolute"&&(N="scrollHeight",F="scrollWidth")),y=y,v===ao||(v===no||v===Yc)&&g===wm){b=Hc;var C=V&&y===L&&L.visualViewport?L.visualViewport.height:y[N];O-=C-u.height,O*=h?1:-1}if(v===no||(v===ao||v===Hc)&&g===wm){M=Yc;var j=V&&y===L&&L.visualViewport?L.visualViewport.width:y[F];I-=j-u.width,I*=h?1:-1}}var q=Object.assign({position:m},E&&ZE),K=w===!0?e6({x:I,y:O},Xo(i)):{x:I,y:O};if(I=K.x,O=K.y,h){var $;return Object.assign({},q,($={},$[b]=G?"0":"",$[M]=A?"0":"",$.transform=(L.devicePixelRatio||1)<=1?"translate("+I+"px, "+O+"px)":"translate3d("+I+"px, "+O+"px, 0)",$))}return Object.assign({},q,(l={},l[b]=G?O+"px":"",l[M]=A?I+"px":"",l.transform="",l))}function t6(d){var l=d.state,i=d.options,u=i.gpuAcceleration,v=u===void 0?!0:u,g=i.adaptive,x=g===void 0?!0:g,m=i.roundOffsets,h=m===void 0?!0:m,E={placement:zu(l.placement),variation:Qh(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:v,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,Xw(Object.assign({},E,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:x,roundOffsets:h})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,Xw(Object.assign({},E,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})}const s6={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:t6,data:{}};var s0={passive:!0};function r6(d){var l=d.state,i=d.instance,u=d.options,v=u.scroll,g=v===void 0?!0:v,x=u.resize,m=x===void 0?!0:x,h=Xo(l.elements.popper),E=[].concat(l.scrollParents.reference,l.scrollParents.popper);return g&&E.forEach(function(w){w.addEventListener("scroll",i.update,s0)}),m&&h.addEventListener("resize",i.update,s0),function(){g&&E.forEach(function(w){w.removeEventListener("scroll",i.update,s0)}),m&&h.removeEventListener("resize",i.update,s0)}}const a6={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:r6,data:{}};var n6={left:"right",right:"left",bottom:"top",top:"bottom"};function a0(d){return d.replace(/left|right|bottom|top/g,function(l){return n6[l]})}var l6={start:"end",end:"start"};function Qw(d){return d.replace(/start|end/g,function(l){return l6[l]})}function g2(d){var l=Xo(d),i=l.pageXOffset,u=l.pageYOffset;return{scrollLeft:i,scrollTop:u}}function h2(d){return Xh(Ov(d)).left+g2(d).scrollLeft}function i6(d,l){var i=Xo(d),u=Ov(d),v=i.visualViewport,g=u.clientWidth,x=u.clientHeight,m=0,h=0;if(v){g=v.width,x=v.height;var E=w_();(E||!E&&l==="fixed")&&(m=v.offsetLeft,h=v.offsetTop)}return{width:g,height:x,x:m+h2(d),y:h}}function o6(d){var l,i=Ov(d),u=g2(d),v=(l=d.ownerDocument)==null?void 0:l.body,g=ug(i.scrollWidth,i.clientWidth,v?v.scrollWidth:0,v?v.clientWidth:0),x=ug(i.scrollHeight,i.clientHeight,v?v.scrollHeight:0,v?v.clientHeight:0),m=-u.scrollLeft+h2(d),h=-u.scrollTop;return Np(v||i).direction==="rtl"&&(m+=ug(i.clientWidth,v?v.clientWidth:0)-g),{width:g,height:x,x:m,y:h}}function m2(d){var l=Np(d),i=l.overflow,u=l.overflowX,v=l.overflowY;return/auto|scroll|overlay|hidden/.test(i+v+u)}function V_(d){return["html","body","#document"].indexOf(Ku(d))>=0?d.ownerDocument.body:Uc(d)&&m2(d)?d:V_(c0(d))}function bm(d,l){var i;l===void 0&&(l=[]);var u=V_(d),v=u===((i=d.ownerDocument)==null?void 0:i.body),g=Xo(u),x=v?[g].concat(g.visualViewport||[],m2(u)?u:[]):u,m=l.concat(x);return v?m:m.concat(bm(c0(x)))}function n2(d){return Object.assign({},d,{left:d.x,top:d.y,right:d.x+d.width,bottom:d.y+d.height})}function c6(d,l){var i=Xh(d,!1,l==="fixed");return i.top=i.top+d.clientTop,i.left=i.left+d.clientLeft,i.bottom=i.top+d.clientHeight,i.right=i.left+d.clientWidth,i.width=d.clientWidth,i.height=d.clientHeight,i.x=i.left,i.y=i.top,i}function Zw(d,l,i){return l===x_?n2(i6(d,i)):pg(l)?c6(l,i):n2(o6(Ov(d)))}function d6(d){var l=bm(c0(d)),i=["absolute","fixed"].indexOf(Np(d).position)>=0,u=i&&Uc(d)?Im(d):d;return pg(u)?l.filter(function(v){return pg(v)&&__(v,u)&&Ku(v)!=="body"}):[]}function u6(d,l,i,u){var v=l==="clippingParents"?d6(d):[].concat(l),g=[].concat(v,[i]),x=g[0],m=g.reduce(function(h,E){var w=Zw(d,E,u);return h.top=ug(w.top,h.top),h.right=i0(w.right,h.right),h.bottom=i0(w.bottom,h.bottom),h.left=ug(w.left,h.left),h},Zw(d,x,u));return m.width=m.right-m.left,m.height=m.bottom-m.top,m.x=m.left,m.y=m.top,m}function P_(d){var l=d.reference,i=d.element,u=d.placement,v=u?zu(u):null,g=u?Qh(u):null,x=l.x+l.width/2-i.width/2,m=l.y+l.height/2-i.height/2,h;switch(v){case ao:h={x,y:l.y-i.height};break;case Hc:h={x,y:l.y+l.height};break;case Yc:h={x:l.x+l.width,y:m};break;case no:h={x:l.x-i.width,y:m};break;default:h={x:l.x,y:l.y}}var E=v?v2(v):null;if(E!=null){var w=E==="y"?"height":"width";switch(g){case Kh:h[E]=h[E]-(l[w]/2-i[w]/2);break;case wm:h[E]=h[E]+(l[w]/2-i[w]/2);break}}return h}function _m(d,l){l===void 0&&(l={});var i=l,u=i.placement,v=u===void 0?d.placement:u,g=i.strategy,x=g===void 0?d.strategy:g,m=i.boundary,h=m===void 0?FE:m,E=i.rootBoundary,w=E===void 0?x_:E,V=i.elementContext,D=V===void 0?hm:V,I=i.altBoundary,_=I===void 0?!1:I,O=i.padding,k=O===void 0?0:O,A=I_(typeof k!="number"?k:D_(k,Em)),G=D===hm?OE:hm,M=d.rects.popper,b=d.elements[_?G:D],L=u6(pg(b)?b:b.contextElement||Ov(d.elements.popper),h,w,x),y=Xh(d.elements.reference),N=P_({reference:y,element:M,strategy:"absolute",placement:v}),F=n2(Object.assign({},M,N)),C=D===hm?F:y,j={top:L.top-C.top+A.top,bottom:C.bottom-L.bottom+A.bottom,left:L.left-C.left+A.left,right:C.right-L.right+A.right},q=d.modifiersData.offset;if(D===hm&&q){var K=q[v];Object.keys(j).forEach(function($){var ce=[Yc,Hc].indexOf($)>=0?1:-1,Se=[ao,Hc].indexOf($)>=0?"y":"x";j[$]+=K[Se]*ce})}return j}function f6(d,l){l===void 0&&(l={});var i=l,u=i.placement,v=i.boundary,g=i.rootBoundary,x=i.padding,m=i.flipVariations,h=i.allowedAutoPlacements,E=h===void 0?b_:h,w=Qh(u),V=w?m?Kw:Kw.filter(function(_){return Qh(_)===w}):Em,D=V.filter(function(_){return E.indexOf(_)>=0});D.length===0&&(D=V);var I=D.reduce(function(_,O){return _[O]=_m(d,{placement:O,boundary:v,rootBoundary:g,padding:x})[zu(O)],_},{});return Object.keys(I).sort(function(_,O){return I[_]-I[O]})}function p6(d){if(zu(d)===u2)return[];var l=a0(d);return[Qw(d),l,Qw(l)]}function v6(d){var l=d.state,i=d.options,u=d.name;if(!l.modifiersData[u]._skip){for(var v=i.mainAxis,g=v===void 0?!0:v,x=i.altAxis,m=x===void 0?!0:x,h=i.fallbackPlacements,E=i.padding,w=i.boundary,V=i.rootBoundary,D=i.altBoundary,I=i.flipVariations,_=I===void 0?!0:I,O=i.allowedAutoPlacements,k=l.options.placement,A=zu(k),G=A===k,M=h||(G||!_?[a0(k)]:p6(k)),b=[k].concat(M).reduce(function(ve,Ne){return ve.concat(zu(Ne)===u2?f6(l,{placement:Ne,boundary:w,rootBoundary:V,padding:E,flipVariations:_,allowedAutoPlacements:O}):Ne)},[]),L=l.rects.reference,y=l.rects.popper,N=new Map,F=!0,C=b[0],j=0;j<b.length;j++){var q=b[j],K=zu(q),$=Qh(q)===Kh,ce=[ao,Hc].indexOf(K)>=0,Se=ce?"width":"height",z=_m(l,{placement:q,boundary:w,rootBoundary:V,altBoundary:D,padding:E}),R=ce?$?Yc:no:$?Hc:ao;L[Se]>y[Se]&&(R=a0(R));var se=a0(R),ye=[];if(g&&ye.push(z[K]<=0),m&&ye.push(z[R]<=0,z[se]<=0),ye.every(function(ve){return ve})){C=q,F=!1;break}N.set(q,ye)}if(F)for(var ae=_?3:1,Ke=function(Ne){var Ve=b.find(function(ie){var _e=N.get(ie);if(_e)return _e.slice(0,Ne).every(function(Ce){return Ce})});if(Ve)return C=Ve,"break"},we=ae;we>0;we--){var te=Ke(we);if(te==="break")break}l.placement!==C&&(l.modifiersData[u]._skip=!0,l.placement=C,l.reset=!0)}}const g6={name:"flip",enabled:!0,phase:"main",fn:v6,requiresIfExists:["offset"],data:{_skip:!1}};function e_(d,l,i){return i===void 0&&(i={x:0,y:0}),{top:d.top-l.height-i.y,right:d.right-l.width+i.x,bottom:d.bottom-l.height+i.y,left:d.left-l.width-i.x}}function t_(d){return[ao,Yc,Hc,no].some(function(l){return d[l]>=0})}function h6(d){var l=d.state,i=d.name,u=l.rects.reference,v=l.rects.popper,g=l.modifiersData.preventOverflow,x=_m(l,{elementContext:"reference"}),m=_m(l,{altBoundary:!0}),h=e_(x,u),E=e_(m,v,g),w=t_(h),V=t_(E);l.modifiersData[i]={referenceClippingOffsets:h,popperEscapeOffsets:E,isReferenceHidden:w,hasPopperEscaped:V},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":w,"data-popper-escaped":V})}const m6={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:h6};function x6(d,l,i){var u=zu(d),v=[no,ao].indexOf(u)>=0?-1:1,g=typeof i=="function"?i(Object.assign({},l,{placement:d})):i,x=g[0],m=g[1];return x=x||0,m=(m||0)*v,[no,Yc].indexOf(u)>=0?{x:m,y:x}:{x,y:m}}function b6(d){var l=d.state,i=d.options,u=d.name,v=i.offset,g=v===void 0?[0,0]:v,x=b_.reduce(function(w,V){return w[V]=x6(V,l.rects,g),w},{}),m=x[l.placement],h=m.x,E=m.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=h,l.modifiersData.popperOffsets.y+=E),l.modifiersData[u]=x}const y6={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:b6};function w6(d){var l=d.state,i=d.name;l.modifiersData[i]=P_({reference:l.rects.reference,element:l.rects.popper,strategy:"absolute",placement:l.placement})}const _6={name:"popperOffsets",enabled:!0,phase:"read",fn:w6,data:{}};function E6(d){return d==="x"?"y":"x"}function I6(d){var l=d.state,i=d.options,u=d.name,v=i.mainAxis,g=v===void 0?!0:v,x=i.altAxis,m=x===void 0?!1:x,h=i.boundary,E=i.rootBoundary,w=i.altBoundary,V=i.padding,D=i.tether,I=D===void 0?!0:D,_=i.tetherOffset,O=_===void 0?0:_,k=_m(l,{boundary:h,rootBoundary:E,padding:V,altBoundary:w}),A=zu(l.placement),G=Qh(l.placement),M=!G,b=v2(A),L=E6(b),y=l.modifiersData.popperOffsets,N=l.rects.reference,F=l.rects.popper,C=typeof O=="function"?O(Object.assign({},l.rects,{placement:l.placement})):O,j=typeof C=="number"?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),q=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,K={x:0,y:0};if(y){if(g){var $,ce=b==="y"?ao:no,Se=b==="y"?Hc:Yc,z=b==="y"?"height":"width",R=y[b],se=R+k[ce],ye=R-k[Se],ae=I?-F[z]/2:0,Ke=G===Kh?N[z]:F[z],we=G===Kh?-F[z]:-N[z],te=l.elements.arrow,ve=I&&te?p2(te):{width:0,height:0},Ne=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:E_(),Ve=Ne[ce],ie=Ne[Se],_e=xm(0,N[z],ve[z]),Ce=M?N[z]/2-ae-_e-Ve-j.mainAxis:Ke-_e-Ve-j.mainAxis,Y=M?-N[z]/2+ae+_e+ie+j.mainAxis:we+_e+ie+j.mainAxis,Q=l.elements.arrow&&Im(l.elements.arrow),Ee=Q?b==="y"?Q.clientTop||0:Q.clientLeft||0:0,pe=($=q==null?void 0:q[b])!=null?$:0,me=R+Ce-pe-Ee,ge=R+Y-pe,de=xm(I?i0(se,me):se,R,I?ug(ye,ge):ye);y[b]=de,K[b]=de-R}if(m){var J,$e=b==="x"?ao:no,We=b==="x"?Hc:Yc,xe=y[L],X=L==="y"?"height":"width",He=xe+k[$e],Ge=xe-k[We],ee=[ao,no].indexOf(A)!==-1,Me=(J=q==null?void 0:q[L])!=null?J:0,Te=ee?He:xe-N[X]-F[X]-Me+j.altAxis,ze=ee?xe+N[X]+F[X]-Me-j.altAxis:Ge,Ie=I&&ee?zE(Te,xe,ze):xm(I?Te:He,xe,I?ze:Ge);y[L]=Ie,K[L]=Ie-xe}l.modifiersData[u]=K}}const D6={name:"preventOverflow",enabled:!0,phase:"main",fn:I6,requiresIfExists:["offset"]};function V6(d){return{scrollLeft:d.scrollLeft,scrollTop:d.scrollTop}}function P6(d){return d===Xo(d)||!Uc(d)?g2(d):V6(d)}function k6(d){var l=d.getBoundingClientRect(),i=Jh(l.width)/d.offsetWidth||1,u=Jh(l.height)/d.offsetHeight||1;return i!==1||u!==1}function S6(d,l,i){i===void 0&&(i=!1);var u=Uc(l),v=Uc(l)&&k6(l),g=Ov(l),x=Xh(d,v,i),m={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(u||!u&&!i)&&((Ku(l)!=="body"||m2(g))&&(m=P6(l)),Uc(l)?(h=Xh(l,!0),h.x+=l.clientLeft,h.y+=l.clientTop):g&&(h.x=h2(g))),{x:x.left+m.scrollLeft-h.x,y:x.top+m.scrollTop-h.y,width:x.width,height:x.height}}function T6(d){var l=new Map,i=new Set,u=[];d.forEach(function(g){l.set(g.name,g)});function v(g){i.add(g.name);var x=[].concat(g.requires||[],g.requiresIfExists||[]);x.forEach(function(m){if(!i.has(m)){var h=l.get(m);h&&v(h)}}),u.push(g)}return d.forEach(function(g){i.has(g.name)||v(g)}),u}function A6(d){var l=T6(d);return qE.reduce(function(i,u){return i.concat(l.filter(function(v){return v.phase===u}))},[])}function F6(d){var l;return function(){return l||(l=new Promise(function(i){Promise.resolve().then(function(){l=void 0,i(d())})})),l}}function O6(d){var l=d.reduce(function(i,u){var v=i[u.name];return i[u.name]=v?Object.assign({},v,u,{options:Object.assign({},v.options,u.options),data:Object.assign({},v.data,u.data)}):u,i},{});return Object.keys(l).map(function(i){return l[i]})}var s_={placement:"bottom",modifiers:[],strategy:"absolute"};function r_(){for(var d=arguments.length,l=new Array(d),i=0;i<d;i++)l[i]=arguments[i];return!l.some(function(u){return!(u&&typeof u.getBoundingClientRect=="function")})}function L6(d){d===void 0&&(d={});var l=d,i=l.defaultModifiers,u=i===void 0?[]:i,v=l.defaultOptions,g=v===void 0?s_:v;return function(m,h,E){E===void 0&&(E=g);var w={placement:"bottom",orderedModifiers:[],options:Object.assign({},s_,g),modifiersData:{},elements:{reference:m,popper:h},attributes:{},styles:{}},V=[],D=!1,I={state:w,setOptions:function(A){var G=typeof A=="function"?A(w.options):A;O(),w.options=Object.assign({},g,w.options,G),w.scrollParents={reference:pg(m)?bm(m):m.contextElement?bm(m.contextElement):[],popper:bm(h)};var M=A6(O6([].concat(u,w.options.modifiers)));return w.orderedModifiers=M.filter(function(b){return b.enabled}),_(),I.update()},forceUpdate:function(){if(!D){var A=w.elements,G=A.reference,M=A.popper;if(r_(G,M)){w.rects={reference:S6(G,Im(M),w.options.strategy==="fixed"),popper:p2(M)},w.reset=!1,w.placement=w.options.placement,w.orderedModifiers.forEach(function(j){return w.modifiersData[j.name]=Object.assign({},j.data)});for(var b=0;b<w.orderedModifiers.length;b++){if(w.reset===!0){w.reset=!1,b=-1;continue}var L=w.orderedModifiers[b],y=L.fn,N=L.options,F=N===void 0?{}:N,C=L.name;typeof y=="function"&&(w=y({state:w,options:F,name:C,instance:I})||w)}}}},update:F6(function(){return new Promise(function(k){I.forceUpdate(),k(w)})}),destroy:function(){O(),D=!0}};if(!r_(m,h))return I;I.setOptions(E).then(function(k){!D&&E.onFirstUpdate&&E.onFirstUpdate(k)});function _(){w.orderedModifiers.forEach(function(k){var A=k.name,G=k.options,M=G===void 0?{}:G,b=k.effect;if(typeof b=="function"){var L=b({state:w,name:A,instance:I,options:M}),y=function(){};V.push(L||y)}})}function O(){V.forEach(function(k){return k()}),V=[]}return I}}var C6=[a6,_6,s6,y_,y6,g6,D6,QE,m6],G6=L6({defaultModifiers:C6}),M6="tippy-box",k_="tippy-content",j6="tippy-backdrop",S_="tippy-arrow",T_="tippy-svg-arrow",cg={passive:!0,capture:!0},A_=function(){return document.body};function Zb(d,l,i){if(Array.isArray(d)){var u=d[l];return u??(Array.isArray(i)?i[l]:i)}return d}function x2(d,l){var i={}.toString.call(d);return i.indexOf("[object")===0&&i.indexOf(l+"]")>-1}function F_(d,l){return typeof d=="function"?d.apply(void 0,l):d}function a_(d,l){if(l===0)return d;var i;return function(u){clearTimeout(i),i=setTimeout(function(){d(u)},l)}}function N6(d){return d.split(/\s+/).filter(Boolean)}function Wh(d){return[].concat(d)}function n_(d,l){d.indexOf(l)===-1&&d.push(l)}function B6(d){return d.filter(function(l,i){return d.indexOf(l)===i})}function R6(d){return d.split("-")[0]}function o0(d){return[].slice.call(d)}function l_(d){return Object.keys(d).reduce(function(l,i){return d[i]!==void 0&&(l[i]=d[i]),l},{})}function ym(){return document.createElement("div")}function d0(d){return["Element","Fragment"].some(function(l){return x2(d,l)})}function $6(d){return x2(d,"NodeList")}function q6(d){return x2(d,"MouseEvent")}function U6(d){return!!(d&&d._tippy&&d._tippy.reference===d)}function H6(d){return d0(d)?[d]:$6(d)?o0(d):Array.isArray(d)?d:o0(document.querySelectorAll(d))}function e2(d,l){d.forEach(function(i){i&&(i.style.transitionDuration=l+"ms")})}function i_(d,l){d.forEach(function(i){i&&i.setAttribute("data-state",l)})}function Y6(d){var l,i=Wh(d),u=i[0];return u!=null&&(l=u.ownerDocument)!=null&&l.body?u.ownerDocument:document}function W6(d,l){var i=l.clientX,u=l.clientY;return d.every(function(v){var g=v.popperRect,x=v.popperState,m=v.props,h=m.interactiveBorder,E=R6(x.placement),w=x.modifiersData.offset;if(!w)return!0;var V=E==="bottom"?w.top.y:0,D=E==="top"?w.bottom.y:0,I=E==="right"?w.left.x:0,_=E==="left"?w.right.x:0,O=g.top-u+V>h,k=u-g.bottom-D>h,A=g.left-i+I>h,G=i-g.right-_>h;return O||k||A||G})}function t2(d,l,i){var u=l+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(v){d[u](v,i)})}function o_(d,l){for(var i=l;i;){var u;if(d.contains(i))return!0;i=i.getRootNode==null||(u=i.getRootNode())==null?void 0:u.host}return!1}var Yu={isTouch:!1},c_=0;function z6(){Yu.isTouch||(Yu.isTouch=!0,window.performance&&document.addEventListener("mousemove",O_))}function O_(){var d=performance.now();d-c_<20&&(Yu.isTouch=!1,document.removeEventListener("mousemove",O_)),c_=d}function K6(){var d=document.activeElement;if(U6(d)){var l=d._tippy;d.blur&&!l.state.isVisible&&d.blur()}}function J6(){document.addEventListener("touchstart",z6,cg),window.addEventListener("blur",K6)}var X6=typeof window<"u"&&typeof document<"u",Q6=X6?!!window.msCrypto:!1,Z6={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},e4={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},Yd=Object.assign({appendTo:A_,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Z6,e4),t4=Object.keys(Yd),s4=function(l){var i=Object.keys(l);i.forEach(function(u){Yd[u]=l[u]})};function L_(d){var l=d.plugins||[],i=l.reduce(function(u,v){var g=v.name,x=v.defaultValue;if(g){var m;u[g]=d[g]!==void 0?d[g]:(m=Yd[g])!=null?m:x}return u},{});return Object.assign({},d,i)}function r4(d,l){var i=l?Object.keys(L_(Object.assign({},Yd,{plugins:l}))):t4,u=i.reduce(function(v,g){var x=(d.getAttribute("data-tippy-"+g)||"").trim();if(!x)return v;if(g==="content")v[g]=x;else try{v[g]=JSON.parse(x)}catch{v[g]=x}return v},{});return u}function d_(d,l){var i=Object.assign({},l,{content:F_(l.content,[d])},l.ignoreAttributes?{}:r4(d,l.plugins));return i.aria=Object.assign({},Yd.aria,i.aria),i.aria={expanded:i.aria.expanded==="auto"?l.interactive:i.aria.expanded,content:i.aria.content==="auto"?l.interactive?null:"describedby":i.aria.content},i}var a4=function(){return"innerHTML"};function l2(d,l){d[a4()]=l}function u_(d){var l=ym();return d===!0?l.className=S_:(l.className=T_,d0(d)?l.appendChild(d):l2(l,d)),l}function f_(d,l){d0(l.content)?(l2(d,""),d.appendChild(l.content)):typeof l.content!="function"&&(l.allowHTML?l2(d,l.content):d.textContent=l.content)}function i2(d){var l=d.firstElementChild,i=o0(l.children);return{box:l,content:i.find(function(u){return u.classList.contains(k_)}),arrow:i.find(function(u){return u.classList.contains(S_)||u.classList.contains(T_)}),backdrop:i.find(function(u){return u.classList.contains(j6)})}}function C_(d){var l=ym(),i=ym();i.className=M6,i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var u=ym();u.className=k_,u.setAttribute("data-state","hidden"),f_(u,d.props),l.appendChild(i),i.appendChild(u),v(d.props,d.props);function v(g,x){var m=i2(l),h=m.box,E=m.content,w=m.arrow;x.theme?h.setAttribute("data-theme",x.theme):h.removeAttribute("data-theme"),typeof x.animation=="string"?h.setAttribute("data-animation",x.animation):h.removeAttribute("data-animation"),x.inertia?h.setAttribute("data-inertia",""):h.removeAttribute("data-inertia"),h.style.maxWidth=typeof x.maxWidth=="number"?x.maxWidth+"px":x.maxWidth,x.role?h.setAttribute("role",x.role):h.removeAttribute("role"),(g.content!==x.content||g.allowHTML!==x.allowHTML)&&f_(E,d.props),x.arrow?w?g.arrow!==x.arrow&&(h.removeChild(w),h.appendChild(u_(x.arrow))):h.appendChild(u_(x.arrow)):w&&h.removeChild(w)}return{popper:l,onUpdate:v}}C_.$$tippy=!0;var n4=1,r0=[],s2=[];function l4(d,l){var i=d_(d,Object.assign({},Yd,L_(l_(l)))),u,v,g,x=!1,m=!1,h=!1,E=!1,w,V,D,I=[],_=a_(me,i.interactiveDebounce),O,k=n4++,A=null,G=B6(i.plugins),M={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},b={id:k,reference:d,popper:ym(),popperInstance:A,props:i,state:M,plugins:G,clearDelayTimeouts:Te,setProps:ze,setContent:Ie,show:he,hide:ue,hideWithInteractivity:rt,enable:ee,disable:Me,unmount:Je,destroy:Xe};if(!i.render)return b;var L=i.render(b),y=L.popper,N=L.onUpdate;y.setAttribute("data-tippy-root",""),y.id="tippy-"+b.id,b.popper=y,d._tippy=b,y._tippy=b;var F=G.map(function(P){return P.fn(b)}),C=d.hasAttribute("aria-expanded");return Q(),ae(),R(),se("onCreate",[b]),i.showOnCreate&&He(),y.addEventListener("mouseenter",function(){b.props.interactive&&b.state.isVisible&&b.clearDelayTimeouts()}),y.addEventListener("mouseleave",function(){b.props.interactive&&b.props.trigger.indexOf("mouseenter")>=0&&ce().addEventListener("mousemove",_)}),b;function j(){var P=b.props.touch;return Array.isArray(P)?P:[P,0]}function q(){return j()[0]==="hold"}function K(){var P;return!!((P=b.props.render)!=null&&P.$$tippy)}function $(){return O||d}function ce(){var P=$().parentNode;return P?Y6(P):document}function Se(){return i2(y)}function z(P){return b.state.isMounted&&!b.state.isVisible||Yu.isTouch||w&&w.type==="focus"?0:Zb(b.props.delay,P?0:1,Yd.delay)}function R(P){P===void 0&&(P=!1),y.style.pointerEvents=b.props.interactive&&!P?"":"none",y.style.zIndex=""+b.props.zIndex}function se(P,B,U){if(U===void 0&&(U=!0),F.forEach(function(Z){Z[P]&&Z[P].apply(Z,B)}),U){var W;(W=b.props)[P].apply(W,B)}}function ye(){var P=b.props.aria;if(P.content){var B="aria-"+P.content,U=y.id,W=Wh(b.props.triggerTarget||d);W.forEach(function(Z){var oe=Z.getAttribute(B);if(b.state.isVisible)Z.setAttribute(B,oe?oe+" "+U:U);else{var H=oe&&oe.replace(U,"").trim();H?Z.setAttribute(B,H):Z.removeAttribute(B)}})}}function ae(){if(!(C||!b.props.aria.expanded)){var P=Wh(b.props.triggerTarget||d);P.forEach(function(B){b.props.interactive?B.setAttribute("aria-expanded",b.state.isVisible&&B===$()?"true":"false"):B.removeAttribute("aria-expanded")})}}function Ke(){ce().removeEventListener("mousemove",_),r0=r0.filter(function(P){return P!==_})}function we(P){if(!(Yu.isTouch&&(h||P.type==="mousedown"))){var B=P.composedPath&&P.composedPath()[0]||P.target;if(!(b.props.interactive&&o_(y,B))){if(Wh(b.props.triggerTarget||d).some(function(U){return o_(U,B)})){if(Yu.isTouch||b.state.isVisible&&b.props.trigger.indexOf("click")>=0)return}else se("onClickOutside",[b,P]);b.props.hideOnClick===!0&&(b.clearDelayTimeouts(),b.hide(),m=!0,setTimeout(function(){m=!1}),b.state.isMounted||Ve())}}}function te(){h=!0}function ve(){h=!1}function Ne(){var P=ce();P.addEventListener("mousedown",we,!0),P.addEventListener("touchend",we,cg),P.addEventListener("touchstart",ve,cg),P.addEventListener("touchmove",te,cg)}function Ve(){var P=ce();P.removeEventListener("mousedown",we,!0),P.removeEventListener("touchend",we,cg),P.removeEventListener("touchstart",ve,cg),P.removeEventListener("touchmove",te,cg)}function ie(P,B){Ce(P,function(){!b.state.isVisible&&y.parentNode&&y.parentNode.contains(y)&&B()})}function _e(P,B){Ce(P,B)}function Ce(P,B){var U=Se().box;function W(Z){Z.target===U&&(t2(U,"remove",W),B())}if(P===0)return B();t2(U,"remove",V),t2(U,"add",W),V=W}function Y(P,B,U){U===void 0&&(U=!1);var W=Wh(b.props.triggerTarget||d);W.forEach(function(Z){Z.addEventListener(P,B,U),I.push({node:Z,eventType:P,handler:B,options:U})})}function Q(){q()&&(Y("touchstart",pe,{passive:!0}),Y("touchend",ge,{passive:!0})),N6(b.props.trigger).forEach(function(P){if(P!=="manual")switch(Y(P,pe),P){case"mouseenter":Y("mouseleave",ge);break;case"focus":Y(Q6?"focusout":"blur",de);break;case"focusin":Y("focusout",de);break}})}function Ee(){I.forEach(function(P){var B=P.node,U=P.eventType,W=P.handler,Z=P.options;B.removeEventListener(U,W,Z)}),I=[]}function pe(P){var B,U=!1;if(!(!b.state.isEnabled||J(P)||m)){var W=((B=w)==null?void 0:B.type)==="focus";w=P,O=P.currentTarget,ae(),!b.state.isVisible&&q6(P)&&r0.forEach(function(Z){return Z(P)}),P.type==="click"&&(b.props.trigger.indexOf("mouseenter")<0||x)&&b.props.hideOnClick!==!1&&b.state.isVisible?U=!0:He(P),P.type==="click"&&(x=!U),U&&!W&&Ge(P)}}function me(P){var B=P.target,U=$().contains(B)||y.contains(B);if(!(P.type==="mousemove"&&U)){var W=X().concat(y).map(function(Z){var oe,H=Z._tippy,fe=(oe=H.popperInstance)==null?void 0:oe.state;return fe?{popperRect:Z.getBoundingClientRect(),popperState:fe,props:i}:null}).filter(Boolean);W6(W,P)&&(Ke(),Ge(P))}}function ge(P){var B=J(P)||b.props.trigger.indexOf("click")>=0&&x;if(!B){if(b.props.interactive){b.hideWithInteractivity(P);return}Ge(P)}}function de(P){b.props.trigger.indexOf("focusin")<0&&P.target!==$()||b.props.interactive&&P.relatedTarget&&y.contains(P.relatedTarget)||Ge(P)}function J(P){return Yu.isTouch?q()!==P.type.indexOf("touch")>=0:!1}function $e(){We();var P=b.props,B=P.popperOptions,U=P.placement,W=P.offset,Z=P.getReferenceClientRect,oe=P.moveTransition,H=K()?i2(y).arrow:null,fe=Z?{getBoundingClientRect:Z,contextElement:Z.contextElement||$()}:d,Pe={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(vt){var Be=vt.state;if(K()){var le=Se(),Ae=le.box;["placement","reference-hidden","escaped"].forEach(function(De){De==="placement"?Ae.setAttribute("data-placement",Be.placement):Be.attributes.popper["data-popper-"+De]?Ae.setAttribute("data-"+De,""):Ae.removeAttribute("data-"+De)}),Be.attributes.popper={}}}},ne=[{name:"offset",options:{offset:W}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!oe}},Pe];K()&&H&&ne.push({name:"arrow",options:{element:H,padding:3}}),ne.push.apply(ne,(B==null?void 0:B.modifiers)||[]),b.popperInstance=G6(fe,y,Object.assign({},B,{placement:U,onFirstUpdate:D,modifiers:ne}))}function We(){b.popperInstance&&(b.popperInstance.destroy(),b.popperInstance=null)}function xe(){var P=b.props.appendTo,B,U=$();b.props.interactive&&P===A_||P==="parent"?B=U.parentNode:B=F_(P,[U]),B.contains(y)||B.appendChild(y),b.state.isMounted=!0,$e()}function X(){return o0(y.querySelectorAll("[data-tippy-root]"))}function He(P){b.clearDelayTimeouts(),P&&se("onTrigger",[b,P]),Ne();var B=z(!0),U=j(),W=U[0],Z=U[1];Yu.isTouch&&W==="hold"&&Z&&(B=Z),B?u=setTimeout(function(){b.show()},B):b.show()}function Ge(P){if(b.clearDelayTimeouts(),se("onUntrigger",[b,P]),!b.state.isVisible){Ve();return}if(!(b.props.trigger.indexOf("mouseenter")>=0&&b.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(P.type)>=0&&x)){var B=z(!1);B?v=setTimeout(function(){b.state.isVisible&&b.hide()},B):g=requestAnimationFrame(function(){b.hide()})}}function ee(){b.state.isEnabled=!0}function Me(){b.hide(),b.state.isEnabled=!1}function Te(){clearTimeout(u),clearTimeout(v),cancelAnimationFrame(g)}function ze(P){if(!b.state.isDestroyed){se("onBeforeUpdate",[b,P]),Ee();var B=b.props,U=d_(d,Object.assign({},B,l_(P),{ignoreAttributes:!0}));b.props=U,Q(),B.interactiveDebounce!==U.interactiveDebounce&&(Ke(),_=a_(me,U.interactiveDebounce)),B.triggerTarget&&!U.triggerTarget?Wh(B.triggerTarget).forEach(function(W){W.removeAttribute("aria-expanded")}):U.triggerTarget&&d.removeAttribute("aria-expanded"),ae(),R(),N&&N(B,U),b.popperInstance&&($e(),X().forEach(function(W){requestAnimationFrame(W._tippy.popperInstance.forceUpdate)})),se("onAfterUpdate",[b,P])}}function Ie(P){b.setProps({content:P})}function he(){var P=b.state.isVisible,B=b.state.isDestroyed,U=!b.state.isEnabled,W=Yu.isTouch&&!b.props.touch,Z=Zb(b.props.duration,0,Yd.duration);if(!(P||B||U||W)&&!$().hasAttribute("disabled")&&(se("onShow",[b],!1),b.props.onShow(b)!==!1)){if(b.state.isVisible=!0,K()&&(y.style.visibility="visible"),R(),Ne(),b.state.isMounted||(y.style.transition="none"),K()){var oe=Se(),H=oe.box,fe=oe.content;e2([H,fe],0)}D=function(){var ne;if(!(!b.state.isVisible||E)){if(E=!0,y.offsetHeight,y.style.transition=b.props.moveTransition,K()&&b.props.animation){var be=Se(),vt=be.box,Be=be.content;e2([vt,Be],Z),i_([vt,Be],"visible")}ye(),ae(),n_(s2,b),(ne=b.popperInstance)==null||ne.forceUpdate(),se("onMount",[b]),b.props.animation&&K()&&_e(Z,function(){b.state.isShown=!0,se("onShown",[b])})}},xe()}}function ue(){var P=!b.state.isVisible,B=b.state.isDestroyed,U=!b.state.isEnabled,W=Zb(b.props.duration,1,Yd.duration);if(!(P||B||U)&&(se("onHide",[b],!1),b.props.onHide(b)!==!1)){if(b.state.isVisible=!1,b.state.isShown=!1,E=!1,x=!1,K()&&(y.style.visibility="hidden"),Ke(),Ve(),R(!0),K()){var Z=Se(),oe=Z.box,H=Z.content;b.props.animation&&(e2([oe,H],W),i_([oe,H],"hidden"))}ye(),ae(),b.props.animation?K()&&ie(W,b.unmount):b.unmount()}}function rt(P){ce().addEventListener("mousemove",_),n_(r0,_),_(P)}function Je(){b.state.isVisible&&b.hide(),b.state.isMounted&&(We(),X().forEach(function(P){P._tippy.unmount()}),y.parentNode&&y.parentNode.removeChild(y),s2=s2.filter(function(P){return P!==b}),b.state.isMounted=!1,se("onHidden",[b]))}function Xe(){b.state.isDestroyed||(b.clearDelayTimeouts(),b.unmount(),Ee(),delete d._tippy,b.state.isDestroyed=!0,se("onDestroy",[b]))}}function qc(d,l){l===void 0&&(l={});var i=Yd.plugins.concat(l.plugins||[]);J6();var u=Object.assign({},l,{plugins:i}),v=H6(d),g=v.reduce(function(x,m){var h=m&&l4(m,u);return h&&x.push(h),x},[]);return d0(d)?g[0]:g}qc.defaultProps=Yd;qc.setDefaultProps=s4;qc.currentInput=Yu;Object.assign({},y_,{effect:function(l){var i=l.state,u={popper:{position:i.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(i.elements.popper.style,u.popper),i.styles=u,i.elements.arrow&&Object.assign(i.elements.arrow.style,u.arrow)}});qc.setDefaultProps({render:C_});function i4(d){let l,i,u,v,g,x,m,h,E,w,V,D,I,_,O,k,A,G,M,b,L,y,N,F,C,j,q,K,$,ce,Se,z,R,se,ye,ae,Ke,we,te,ve,Ne,Ve,ie,_e,Ce,Y,Q,Ee,pe,me,ge,de,J,$e,We,xe,X,He,Ge,ee,Me,Te,ze,Ie,he,ue,rt,Je,Xe,P,B,U,W,Z,oe,H,fe,Pe,ne,be,vt,Be,le,Ae,De,je,Fe,qe,ft,ke,Ze,Nt,Lt,Oe,mt,Pt,Le,at,ct,Ct,gt,Dt,pt,Bt,kt,re,nt,Tt,Rt,it,dt,Zt,qt,ot,xt,et,St,It,Gt,es,Vt,Ue,ut,$t,Et,bt,lt,At,yt,Ut,zt,Ft,Mt,Jt,Ht,Xt,ht,Js,Vs,Kt,st,jt,ss,Xs,Ps,Qt,wt,Qs,ks,ns,jr,Na,ms,ur,_r,ls,Er,Yt,Ss,Cs,fr,ta,di,Gs,is,sa,pr,us,sl,Ba,xs,ra,_n,aa,Zs,ui,En,bs,na,la,Ts,Ir,Ra,ia,ts,vr,er,oa,os,Ms,Us,cs,rl,fi,gr,rs,pi,In,Nr,al,nl,lo,vi,ys,Dr,$a,Wt,Vr,Hs,tr,As,ca,da,ua,gi,Ys,fs,Ul,ll,ws,hr,Dn,sr,fa,il,Pr,as,Ws,js,ps,kr,ol,hi,rr,ar,_s,Sr,pa,Vn,cl,mi,vs,Es,Br,Pn,dl,kn,zs,nr,mr,va,io,ul,Sn,qa,Ua,Wc,zc,Rr,xi,Wd,oo,bi,lr,ds,Tn,An,Ha,yi,wi,ga,ir,co,Kc,$r,Fn,Jc,_i,ha,Ya,On,Ju,uo,Wa,za,ma,Is,xa,fo,qr,Ka,ba,ya,Hl,Ei,Ii,Yl,Di,Ln,or,Ja,Cn,Xa,Qo,Xc,po,fl,Ur,Ds,wa,Vi,zd,Ks,xr,Qa,Pi,ki,Za,en,Wl,pl,gs,_a,Si,Ea,Zo,Qc,cr,Ns,vl,Gn,Fs,Ia,Zc,gl,Bs,Ti,Kd,Tr,Ar,Jd,ed,Fr,tn,sn,hl,vo,zl,Xd,Hr,Rs,ml,Mn,Ai,Fi,Yr,jn,Xu,Qd,go,$s,rn,Qu,Zd,ec,Nn,an,tc,eu,Oi,Da,Bn,xl,ho,Zu,Rn,bl,mo,xo,Va,$n,nn,tu,sc,yl,rc,wl,Kl,qn,Pa,bo,Li,ln,_l,ka,El,su,Jl,Un,ru,Ci,br,on,Sa,Gi,Xl,Mi,ef,yo,Ta,Ql,wo,Il,Hn,qs,Wr,Dl,tf,au,zr,ji,_o,Zl,hs,Aa,Eo,Vl,td,ac,Or,cn,nu,nc,Lr,dn,Ni,Io,Pl,lc,ic,ei,kl,Fa,oc,lu,Yn,Kr,un,sd,Bi,cc,Sl,Tl,ti,iu,si,Cr,Jr,Al,sf,ri,Do,Fl,fn,Ol,Vo,dc,Wn,Xr,Po,rd,pn,Oa,ad,uc,vn,Ri,ai,Gr,zn,rf,$i,Qr,fc,pc,ko,La,vc,gc,So,Ca,ni,Kn,To,gg,Lv,Jn,Ll,nd,hg,ld,ou,Cv,hc,Ao,dr,Fo,mg,Gv,af,cu,Oo,Lo,xg,Mv,nf,li,mc,qi,du,jv,Ui,Cl,lf,Nv,gn,Ga,Hi,xc,bg,id,Co,od,cd,yg,Go,bc,Bv,of,Gl,cf,uu,dd,df,wg,Bp,_g,ud,yc,wc,Rv,Eg,Ig,Ml,fu,Zh,Dg,Vg,fd,Yi,Wi,em,_c,Rp,Ec,Ic,tm,Pg,kg,Mo,pu,$v,$p,vu,gu,zi,qp,Dc,qv,Sg,Vc,jo,Tg,Ag,pd,hu,Up,Fg,Hp,uf,Og,ff,No,vd,gd,mu,sm,Lg,hd,xu,Yp,Wp,bu,Cg,yu,Bo,md,ii,wu,rm,xd,Gg,pf,Ki,Pc,am,Mg,_u,jl,jg,vf,oi,kc,yr,Ji,Eu,nm,Ng,Xi,Sc,Uv,Bg,Qi,hn,Hv,zp,Xn,bd,Rg,Iu,Kp,$g,qg,Du,Jp,Ug,Xp,Ro,Hg,Nl,yd,wd,Qp,Tc,_d,Zp,Zi,Bl,lm,Yg,eo,Ed,Id,gf,Vu,Yv,Wg,Ma,ev,tv,zg,Pu,Kg,sv,Ac,Jg,Xg,rv,av,ku,Qg,nv,mn,Zg,Rl,eh,to,$o,so,Dd,Vd,th,lv,qo,Pd,sh,iv,ov,cv,hf,rh,Su,kd,mf,Sd,Wv,dv,Td,xf,Fc,ah,Tu,nh,lh,Mr,Uo,Ad,uv,Au,zv,ih,Oc,bf,fv,pv,vv,Fd,Od,Fu,Ou,im,oh,Lc,Ld,ch,dh,Cc,Cd,Gd,uh,Lu,Kv,gv,Md,hv,yf,mv,fh,xv,jd,Ho,bv,Gc,om,ph,ro,wf,vh,gh,yv,Yo,Nd,hh,$l,cm,mh,Bd,xh,Rd,bh,wv,yh,ci,$d,u0,Jv,b2,f0,Xv,wh,p0,v0,g0,_v,Wo,Ev,Qv,h0,m0,_f,x0,b0,y0,w0,Ef,_h,Iv,y2,_0,zo,If,Zv,E0,I0,Eh,Ye,Df,D0,Vf,V0,Pf,P0,kf,k0,Sf,S0,Tf,T0,Af,A0,Ff,F0,Of,O0,Lf,L0,Cf,C0,Gf,G0,Mf,M0,jf,j0,Nf,N0,Bf,B0,Rf,R0,$f,$0,qf,q0,Uf,U0,Hf,H0,Yf,Y0,Wf,W0,zf,z0,Kf,K0,Jf,J0,Xf,X0,Qf,Q0,Zf,Z0,ep,ex,tp,tx,sp,sx,rp,rx,ap,ax,np,nx,lp,lx,ip,ix,op,ox,cp,cx,dp,dx,up,ux,fp,fx,pp,px,vp,vx,gp,gx,hp,hx,mp,mx,xp,xx,bp,bx,yp,yx,wp,wx,_p,_x,Ep,Ex,Ix,Ip,eg,Dx,Vx,Ih,Ko,Dp,Px,Vp,kx,Pp,Sx,kp,Tx,Sp,Ax,Tp,Fx,Ap,Ox,Lx,Fp,tg,Cx,Gx,Dh,Cu,Op,Mx,Lp,jx,Cp,Nx,Gp,Bx,Rx,Dm,$x,Mp,sg,qx,Ux,jp,Hx,Yx,Wx,zx,Gu,Mu,rg,w2,Kx,dm,Jx,Xx,ju,ag,_2,Qx,um,Zx,eb,qd,ng,E2,tb,fm,sb,rb,Jo,ab,pm,nb,lb,Dv,Vh,ib,ob,Vv,Ph,cb,db,Nu,lg,I2,ub,ig,D2,fb,og,V2,pb,vm,vb,Mc;return{c(){l=s("div"),i=s("div"),u=s("div"),v=o(),g=s("button"),x=f("Expand"),m=o(),h=s("style"),E=f(`#expandElement {
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
    }`),w=o(),V=s("script"),D=f(`const expandElement = document.getElementById('expandElement')
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
    })`),I=o(),_=s("div"),O=o(),k=s("div"),A=o(),G=s("div"),M=o(),b=s("div"),L=o(),y=s("div"),N=s("style"),F=f(`p {
      font-size: 1.2rem;
    }`),C=o(),j=s("div"),q=s("section"),K=s("div"),$=s("div"),ce=s("h2"),Se=f("Exploration station"),z=o(),R=s("h2"),se=f("Green power from non-recycled waste"),ye=o(),ae=s("p"),Ke=f(`Power-from-waste technology can convert non-recycled waste into a myriad of different outputs, including
            electricity, heating, cooling, and biochar, among others`),we=o(),te=s("a"),ve=s("img"),Ve=o(),ie=s("span"),_e=f("Explore the possibilites"),Ce=o(),Y=s("div"),Q=s("style"),Ee=f(`#topRightCluster {
              background-image: url('/assets/Group 14.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              padding: 50px;
              background-origin: content-box;
            }
            #topRightCluster img {
              visibility: hidden;
            }`),pe=o(),me=s("img"),$e=o(),We=s("img"),Ge=o(),ee=s("img"),Ie=o(),he=s("img"),Xe=o(),P=s("img"),Z=o(),oe=s("img"),ne=o(),be=s("img"),Ae=o(),De=s("img"),ft=o(),ke=s("section"),Ze=s("style"),Nt=f(`#thegrid div {
          padding: 10px 0px 10px 10px;
        }
        #thegrid div.flex {
          padding: 20px 10px 20px 10px;
        }
        #thegrid2 div {
          padding: 15px 40px 15px 40px;
          line-height: 1.5;
          vertical-align: middle;
        }`),Lt=o(),Oe=s("h2"),mt=f("How it works"),Pt=o(),Le=s("div"),at=s("div"),ct=s("div"),Ct=s("img"),Dt=o(),pt=s("div"),Bt=f("Plastic waste"),kt=o(),re=s("div"),nt=s("div"),Tt=s("img"),it=o(),dt=s("div"),Zt=f("Food waste"),qt=o(),ot=s("div"),xt=s("div"),et=s("img"),It=o(),Gt=s("div"),es=f("Animal waste"),Vt=o(),Ue=s("div"),ut=s("div"),$t=s("img"),bt=o(),lt=s("div"),At=f("Agricultural waste"),yt=o(),Ut=s("div"),zt=s("div"),Ft=s("img"),Jt=o(),Ht=s("div"),Xt=f("Wood waste"),ht=o(),Js=s("div"),Vs=f("Power from waste technology"),Kt=o(),st=s("div"),jt=s("div"),ss=o(),Xs=s("div"),Ps=f(" "),Qt=o(),wt=s("div"),Qs=f(" "),ks=o(),ns=s("div"),jr=f(" "),Na=o(),ms=s("div"),ur=f(" "),_r=o(),ls=s("div"),Er=o(),Yt=s("div"),Ss=s("div"),Cs=f("Liquid fertiliser"),fr=o(),ta=s("div"),di=f("Solid digestate"),Gs=o(),is=s("div"),sa=f("Biogas"),pr=o(),us=s("div"),sl=f("Syngas"),Ba=o(),xs=s("div"),ra=f("Bio-oil"),_n=o(),aa=s("div"),Zs=f("Biochar"),ui=o(),En=s("div"),bs=s("div"),na=f("Heat / Cool"),la=o(),Ts=s("div"),Ir=s("div"),Ra=f("Electricity"),ia=o(),ts=s("h1"),vr=s("div"),er=s("div"),oa=s("div"),os=s("img"),Us=o(),cs=s("div"),rl=s("style"),fi=f(`p {
                font-size: 1.2rem;
              }`),gr=o(),rs=s("h2"),pi=f("Exploration station"),In=o(),Nr=s("div"),al=f("Interact with our exploration "),nl=s("br"),lo=f(`
              station to learn more`),vi=o(),ys=s("p"),Dr=f(`Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you`),$a=o(),Wt=s("div"),Vr=s("style"),Hs=f(`.cow-element {
            /* overflow: visible !important; */
            box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
          }`),tr=o(),As=s("div"),ca=s("div"),da=s("script"),ua=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),gi=o(),Ys=s("button"),fs=s("img"),ll=o(),ws=s("div"),hr=s("div"),Dn=s("div"),sr=s("img"),il=o(),Pr=s("div"),as=s("h1"),Ws=f("Cow manure"),js=o(),ps=s("p"),kr=s("span"),ol=f("GCV:"),hi=f(`
                  15 MJ/kg
                  `),rr=s("img"),_s=o(),Sr=s("p"),pa=s("span"),Vn=f("Energy content:"),cl=f(`
                  Low`),mi=o(),vs=s("div"),Es=s("button"),Br=s("img"),dl=f(`
                High organic content`),kn=o(),zs=s("button"),nr=s("img"),va=f(`
                High nutrient content`),io=o(),ul=s("div"),Sn=s("button"),qa=s("img"),Wc=f(`
                High nitrogen content`),zc=o(),Rr=s("button"),xi=s("img"),oo=f(`
                Low pH levels`),bi=o(),lr=s("div"),ds=s("img"),An=o(),Ha=s("h1"),yi=s("a"),wi=f("Case study"),ga=o(),ir=s("img"),Kc=o(),$r=s("div"),Fn=s("h2"),Jc=f("600 dairy cows or 3500 tonnes of cow manure per year"),_i=o(),ha=s("ul"),Ya=s("li"),On=f("Produces 656m³ biogas every day"),Ju=o(),uo=s("li"),Wa=f("Ability to power 187 UK households every day"),za=o(),ma=s("div"),Is=s("div"),xa=s("div"),fo=s("div"),qr=s("img"),ba=o(),ya=s("div"),Hl=s("h1"),Ei=f("Most appropriate technology"),Ii=o(),Yl=s("p"),Di=f("Anaerobic Digestion"),Ln=o(),or=s("div"),Ja=s("a"),Cn=s("button"),Xa=s("img"),Xc=f(`
                    Start your project`),po=o(),fl=s("a"),Ur=s("button"),Ds=s("img"),Vi=f(`
                    Learn more`),zd=o(),Ks=s("div"),xr=s("div"),Qa=s("script"),Pi=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),ki=o(),Za=s("button"),en=s("img"),pl=o(),gs=s("div"),_a=s("div"),Si=s("div"),Ea=s("img"),Qc=o(),cr=s("div"),Ns=s("h1"),vl=f("Food waste"),Gn=o(),Fs=s("p"),Ia=s("span"),Zc=f("GCV:"),gl=f(`
                  17 MJ/kg
                  `),Bs=s("img"),Kd=o(),Tr=s("p"),Ar=s("span"),Jd=f("Energy content:"),ed=f(`
                  High`),Fr=o(),tn=s("div"),sn=s("button"),hl=s("img"),zl=f(`
                High organic content`),Xd=o(),Hr=s("button"),Rs=s("img"),Mn=f(`
                High nutrient content`),Ai=o(),Fi=s("div"),Yr=s("button"),jn=s("img"),Qd=f(`
                Medium nitrogen content`),go=o(),$s=s("button"),rn=s("img"),Zd=f(`
                Low pH levels`),ec=o(),Nn=s("div"),an=s("img"),eu=o(),Oi=s("h1"),Da=s("a"),Bn=f("Case study"),xl=o(),ho=s("img"),Rn=o(),bl=s("div"),mo=s("h2"),xo=f("100 people or 250 tonnes of food waste per year"),Va=o(),$n=s("ul"),nn=s("li"),tu=f("Produces 156m³ biogas every day"),sc=o(),yl=s("li"),rc=f("Ability to power 19 UK households every day"),wl=o(),Kl=s("div"),qn=s("div"),Pa=s("div"),bo=s("div"),Li=s("img"),_l=o(),ka=s("div"),El=s("h1"),su=f("Most appropriate technology"),Jl=o(),Un=s("p"),ru=f("Anaerobic Digestion"),Ci=o(),br=s("div"),on=s("a"),Sa=s("button"),Gi=s("img"),Mi=f(`
                    Start your project`),ef=o(),yo=s("a"),Ta=s("button"),Ql=s("img"),Il=f(`
                    Learn more`),Hn=o(),qs=s("div"),Wr=s("div"),Dl=s("script"),tf=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),au=o(),zr=s("button"),ji=s("img"),Zl=o(),hs=s("div"),Aa=s("div"),Eo=s("div"),Vl=s("img"),ac=o(),Or=s("div"),cn=s("h1"),nu=f("PE plastic"),nc=o(),Lr=s("p"),dn=s("span"),Ni=f("GCV:"),Io=f(`
                  46 MJ/kg
                  `),Pl=s("img"),ic=o(),ei=s("p"),kl=s("span"),Fa=f("Energy content:"),oc=f(`
                  Very high`),lu=o(),Yn=s("div"),Kr=s("button"),un=s("img"),Bi=f(`
                Very low organic content`),cc=o(),Sl=s("button"),Tl=s("img"),iu=f(`
                Very low nutrient content`),si=o(),Cr=s("div"),Jr=s("button"),Al=s("img"),ri=f(`
                Very low nitrogen content`),Do=o(),Fl=s("button"),fn=s("img"),Vo=f(`
                PET bottles`),dc=o(),Wn=s("div"),Xr=s("img"),rd=o(),pn=s("h1"),Oa=s("a"),ad=f("Case study"),uc=o(),vn=s("img"),ai=o(),Gr=s("div"),zn=s("h2"),rf=f("10000 PET bottles or 100 tonnes of plastic per year"),$i=o(),Qr=s("ul"),fc=s("li"),pc=f("Produces 75kWh every day"),ko=o(),La=s("li"),vc=f("Ability to power 63 UK households every day"),gc=o(),So=s("div"),Ca=s("div"),ni=s("div"),Kn=s("div"),To=s("img"),Lv=o(),Jn=s("div"),Ll=s("h1"),nd=f("Most appropriate technology"),hg=o(),ld=s("p"),ou=f("Pyrolysis"),Cv=o(),hc=s("div"),Ao=s("a"),dr=s("button"),Fo=s("img"),Gv=f(`
                    Start your project`),af=o(),cu=s("a"),Oo=s("button"),Lo=s("img"),Mv=f(`
                    Learn more`),nf=o(),li=s("div"),mc=s("div"),qi=s("script"),du=f(`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),jv=o(),Ui=s("button"),Cl=s("img"),Nv=o(),gn=s("div"),Ga=s("div"),Hi=s("div"),xc=s("img"),id=o(),Co=s("div"),od=s("h1"),cd=f("Technology"),yg=o(),Go=s("p"),bc=s("span"),Bv=f("GCV:"),of=f(`
                  N/A MJ/kg
                  `),Gl=s("img"),uu=o(),dd=s("p"),df=s("span"),wg=f("Energy content:"),Bp=f(`
                  High`),_g=o(),ud=s("div"),yc=s("button"),wc=s("img"),Eg=f(`
                High organic content`),Ig=o(),Ml=s("button"),fu=s("img"),Dg=f(`
                High nutrient content`),Vg=o(),fd=s("div"),Yi=s("button"),Wi=s("img"),_c=f(`
                High nitrogen content`),Rp=o(),Ec=s("button"),Ic=s("img"),Pg=f(`
                Latest technology`),kg=o(),Mo=s("div"),pu=s("img"),$p=o(),vu=s("h1"),gu=s("a"),zi=f("Case study"),qp=o(),Dc=s("img"),Sg=o(),Vc=s("div"),jo=s("h2"),Tg=f("600 dairy cows or 3500 tonnes of cow manure per year"),Ag=o(),pd=s("ul"),hu=s("li"),Up=f("Produces 656m³ biogas every day"),Fg=o(),Hp=s("li"),uf=f("Ability to power 187 UK households every day"),Og=o(),ff=s("div"),No=s("div"),vd=s("div"),gd=s("div"),mu=s("img"),Lg=o(),hd=s("div"),xu=s("h1"),Yp=f("Most appropriate technology"),Wp=o(),bu=s("p"),Cg=f("New Technology"),yu=o(),Bo=s("div"),md=s("a"),ii=s("button"),wu=s("img"),xd=f(`
                    Start your project`),Gg=o(),pf=s("a"),Ki=s("button"),Pc=s("img"),Mg=f(`
                    Learn more`),_u=o(),jl=s("div"),jg=o(),vf=s("section"),oi=s("div"),kc=s("div"),yr=s("div"),Ji=s("button"),Eu=s("img"),Ng=o(),Xi=s("button"),Sc=s("img"),Bg=o(),Qi=s("button"),hn=s("img"),zp=o(),Xn=s("button"),bd=s("div"),Rg=f("Technology"),Iu=o(),Kp=s("style"),$g=f(`@keyframes bounce {
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
              }`),qg=o(),Du=s("script"),Jp=f("const animatedElements = document.querySelectorAll('.techbuttons')\n\n              animatedElements.forEach(element => {\n                const randomDelay = Math.floor(Math.random() * 1000) // Generate a random delay between 0 and 1000 milliseconds\n                element.style.animationDelay = `${randomDelay}ms`\n                element.style.animationDuration = `${1000 + randomDelay}ms`\n              })"),Ug=o(),Xp=s("style"),Ro=f(`.growbutton:hover {
              box-shadow: 0 0 5px 1px white;
            }
            .growbutton img {
              max-width: 190%;
            }`),Hg=o(),Nl=s("div"),yd=s("div"),wd=s("input"),Qp=o(),Tc=s("button"),_d=s("span"),Zp=o(),Zi=s("button"),Bl=s("img"),Yg=o(),eo=s("h1"),Ed=s("div"),Id=s("div"),gf=s("div"),Vu=s("img"),Wg=o(),Ma=s("div"),ev=s("style"),tv=f(`p {
                font-size: 1.2rem;
              }`),zg=o(),Pu=s("h2"),Kg=f("The PFP Calculator"),sv=o(),Ac=s("div"),Jg=f(`Find the right technology
              `),Xg=s("br"),rv=f(`
              for your needs`),av=o(),ku=s("p"),Qg=f(`We will assist you every step of the way to ensure a smooth and successful implementation of your power-from-waste
              project`),nv=o(),mn=s("div"),Zg=o(),Rl=s("div"),eh=o(),to=s("section"),$o=s("div"),so=s("div"),Dd=s("div"),Vd=s("p"),th=f("Waste type"),lv=o(),qo=s("h2"),Pd=s("span"),sh=f("PE Plastic"),iv=o(),ov=s("br"),cv=o(),hf=s("span"),rh=f("10,000 tonnes"),Su=o(),kd=s("div"),mf=s("div"),Sd=s("img"),dv=o(),Td=s("div"),xf=s("h3"),Fc=f("Most appropriate technology"),ah=o(),Tu=s("h2"),nh=f("Pyrolysis"),lh=o(),Mr=s("div"),Uo=s("div"),Ad=s("div"),uv=f("Energy content "),Au=s("img"),ih=o(),Oc=s("div"),bf=s("span"),fv=f("18"),pv=f(`
              MJ/kg`),vv=o(),Fd=s("div"),Od=s("div"),Fu=f("Heat produced "),Ou=s("img"),oh=o(),Lc=s("div"),Ld=s("span"),ch=f("11,200"),dh=f(`
              kWh per year`),Cc=o(),Cd=s("div"),Gd=s("div"),uh=f("Heat savings "),Lu=s("img"),gv=o(),Md=s("div"),hv=f(`£
              `),yf=s("span"),mv=f("48,000"),fh=f(`
              per year`),xv=o(),jd=s("div"),Ho=s("div"),bv=f("Electricity produced "),Gc=s("img"),ph=o(),ro=s("div"),wf=s("span"),vh=f("4,800"),gh=f(`
              kWh per year`),yv=o(),Yo=s("div"),Nd=s("div"),hh=f("Electrical savings "),$l=s("img"),mh=o(),Bd=s("div"),xh=f(`£
              `),Rd=s("span"),bh=f("70,000"),wv=f(`
              per year`),yh=o(),ci=s("div"),$d=s("div"),u0=f("Char produced "),Jv=s("img"),f0=o(),Xv=s("div"),wh=s("span"),p0=f("500"),v0=f(`
              tonnes`),g0=o(),_v=s("section"),Wo=s("div"),Ev=s("div"),Qv=s("h1"),h0=f("The PFP Calculator"),m0=o(),_f=s("p"),x0=f(`Our user-friendly calculator is designed to evaluate your project's
            `),b0=s("br"),y0=f(`
            feasibility, relevant technology and energy output`),w0=o(),Ef=s("div"),_h=s("div"),Iv=s("img"),_0=o(),zo=s("div"),If=s("div"),Zv=s("button"),E0=f("Waste type"),I0=o(),Eh=s("div"),Ye=s("select"),Df=s("option"),D0=f("Cheese production (37% milk)"),Vf=s("option"),V0=f("Butter production (29% milk)"),Pf=s("option"),P0=f("Ice cream (13% milk)"),kf=s("option"),k0=f("Beer production"),Sf=s("option"),S0=f("Wine production"),Tf=s("option"),T0=f("Spirits production"),Af=s("option"),A0=f("Ethanol production"),Ff=s("option"),F0=f("Pulp production"),Of=s("option"),O0=f("Juice production"),Lf=s("option"),L0=f("Tomato ketchup"),Cf=s("option"),C0=f("Bovine meat"),Gf=s("option"),G0=f("Pig meat"),Mf=s("option"),M0=f("Sheep meat"),jf=s("option"),j0=f("Frozen potatoes"),Nf=s("option"),N0=f("Prepared potatoes (crisps)"),Bf=s("option"),B0=f("Potato starch"),Rf=s("option"),R0=f("Dried potatoes"),$f=s("option"),$0=f("Sugar production"),qf=s("option"),q0=f("Yeast production"),Uf=s("option"),U0=f("Vegetable oils production"),Hf=s("option"),H0=f("Biodiesel production"),Yf=s("option"),Y0=f("Pig manure"),Wf=s("option"),W0=f("Dairy Cattle"),zf=s("option"),z0=f("Non diary cattle"),Kf=s("option"),K0=f("Buffalo"),Jf=s("option"),J0=f("Chicken layer manure"),Xf=s("option"),X0=f("Chicken broiler manure"),Qf=s("option"),Q0=f("Sheep"),Zf=s("option"),Z0=f("Food waste"),ep=s("option"),ex=f("Fish waste"),tp=s("option"),tx=f("Coffee grounds"),sp=s("option"),sx=f("Crop residues"),rp=s("option"),rx=f("Maize silage"),ap=s("option"),ax=f("Cereal"),np=s("option"),nx=f("Grass silage"),lp=s("option"),lx=f("Pulp & Paper Waste"),ip=s("option"),ix=f("Textile Waste"),op=s("option"),ox=f("PE Plastic"),cp=s("option"),cx=f("SRF"),dp=s("option"),dx=f("RDF"),up=s("option"),ux=f("PP Plastic"),fp=s("option"),fx=f("PS Plastic"),pp=s("option"),px=f("PVC Plastic"),vp=s("option"),vx=f("PET Plastic"),gp=s("option"),gx=f("Rubber"),hp=s("option"),hx=f("Wood waste"),mp=s("option"),mx=f("Municipal Solid Waste (MSW)"),xp=s("option"),xx=f("Medical Waste"),bp=s("option"),bx=f("Ceramics"),yp=s("option"),yx=f("Sand"),wp=s("option"),wx=f("Dust"),_p=s("option"),_x=f("Glass"),Ep=s("option"),Ex=f("Metals"),Ix=o(),Ip=s("div"),eg=s("button"),Dx=f("Kilograms per day"),Vx=o(),Ih=s("div"),Ko=s("select"),Dp=s("option"),Px=f("10 kg"),Vp=s("option"),kx=f("100 kg"),Pp=s("option"),Sx=f("1000 kg"),kp=s("option"),Tx=f("10,000 kg"),Sp=s("option"),Ax=f("20,000 kg"),Tp=s("option"),Fx=f("40,000 kg"),Ap=s("option"),Ox=f("> 40,000 kg"),Lx=o(),Fp=s("div"),tg=s("button"),Cx=f("Client needs"),Gx=o(),Dh=s("div"),Cu=s("select"),Op=s("option"),Mx=f("Electricity"),Lp=s("option"),jx=f("Heating / Cooling"),Cp=s("option"),Nx=f("Carbon credits"),Gp=s("option"),Bx=f("Fertiliser"),Rx=o(),Dm=s("div"),$x=o(),Mp=s("div"),sg=s("div"),qx=f("Your project is feasible"),Ux=o(),jp=s("p"),Hx=f(`Review your results to explore the different possibilities and
            `),Yx=s("br"),Wx=f(`
            book a slot with us for personalised guidance on next steps`),zx=o(),Gu=s("div"),Mu=s("a"),rg=s("img"),Kx=o(),dm=s("span"),Jx=f("Book a call with us"),Xx=o(),ju=s("a"),ag=s("img"),Qx=o(),um=s("span"),Zx=f("Learn more"),eb=o(),qd=s("button"),ng=s("img"),tb=o(),fm=s("span"),sb=f("Calculate"),rb=o(),Jo=s("div"),ab=o(),pm=s("script"),nb=f(`function calculate() {
        const data = {
          Ceramics: {
            feasibility: 'N'
          },
          Sand: { feasibility: 'N' },
          Dust: { feasibility: 'N' },
          Glass: { feasibility: 'N' },
          Metals: { feasibility: 'N' },
          'Cheese production (37% milk)': {
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
          'Butter production (29% milk)': {
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
          'Ice cream (13% milk)': {
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
          ? (minlimit)?'Your project is feasible':'This feedstock amount is <u style="color:#ec8b5a;">too small</u>'
          : 'This feedstock is <u style="color:#ec8b5a;">not</u> feasible'

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
          document.querySelector('#matched-img').src = '/assets/medres/' + d['technology'] + '.jpg'

          for (var key in d) {
            if (key != 'feasibility') {
              var el = document.querySelector('#' + key)
              if (el) {
                el.innerHTML = (d[key] * Math.round(wt2.value / d['kgperday'], 0)).toLocaleString()
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
      }`),lb=o(),Dv=s("div"),Vh=s("div"),ib=f("Copyright © 2023 Power for Planet"),ob=o(),Vv=s("div"),Ph=s("div"),cb=f("Privacy Policy"),db=o(),Nu=s("div"),lg=s("img"),ub=o(),ig=s("img"),fb=o(),og=s("img"),pb=o(),vm=s("script"),vb=f(`function toggleElement(k) {
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
    }, 100)`),this.h()},l(_t){l=r(_t,"DIV",{style:!0});var Zr=n(l);i=r(Zr,"DIV",{class:!0});var P2=n(i);u=r(P2,"DIV",{id:!0,class:!0});var G_=n(u);G_.forEach(a),P2.forEach(a),v=c(Zr),g=r(Zr,"BUTTON",{id:!0,class:!0});var k2=n(g);x=p(k2,"Expand"),k2.forEach(a),m=c(Zr),h=r(Zr,"STYLE",{});var S2=n(h);E=p(S2,`#expandElement {
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
    }`),S2.forEach(a),w=c(Zr),V=r(Zr,"SCRIPT",{});var T2=n(V);D=p(T2,`const expandElement = document.getElementById('expandElement')
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
    })`),T2.forEach(a),Zr.forEach(a),I=c(_t),_=r(_t,"DIV",{class:!0,id:!0}),n(_).forEach(a),O=c(_t),k=r(_t,"DIV",{class:!0,id:!0}),n(k).forEach(a),A=c(_t),G=r(_t,"DIV",{class:!0,id:!0}),n(G).forEach(a),M=c(_t),b=r(_t,"DIV",{class:!0,id:!0}),n(b).forEach(a),L=c(_t),y=r(_t,"DIV",{class:!0});var kh=n(y);N=r(kh,"STYLE",{});var A2=n(N);F=p(A2,`p {
      font-size: 1.2rem;
    }`),A2.forEach(a),C=c(kh),j=r(kh,"DIV",{class:!0});var xn=n(j);q=r(xn,"SECTION",{class:!0});var F2=n(q);K=r(F2,"DIV",{class:!0});var Vm=n(K);$=r(Vm,"DIV",{class:!0});var Pv=n($);ce=r(Pv,"H2",{class:!0});var O2=n(ce);Se=p(O2,"Exploration station"),O2.forEach(a),z=c(Pv),R=r(Pv,"H2",{class:!0});var L2=n(R);se=p(L2,"Green power from non-recycled waste"),L2.forEach(a),ye=c(Pv),ae=r(Pv,"P",{class:!0});var C2=n(ae);Ke=p(C2,`Power-from-waste technology can convert non-recycled waste into a myriad of different outputs, including
            electricity, heating, cooling, and biochar, among others`),C2.forEach(a),we=c(Pv),te=r(Pv,"A",{class:!0,href:!0});var Pm=n(te);ve=r(Pm,"IMG",{class:!0,src:!0,alt:!0}),Ve=c(Pm),ie=r(Pm,"SPAN",{});var G2=n(ie);_e=p(G2,"Explore the possibilites"),G2.forEach(a),Pm.forEach(a),Pv.forEach(a),Ce=c(Vm),Y=r(Vm,"DIV",{class:!0,id:!0});var bn=n(Y);Q=r(bn,"STYLE",{});var M2=n(Q);Ee=p(M2,`#topRightCluster {
              background-image: url('/assets/Group 14.png');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              padding: 50px;
              background-origin: content-box;
            }
            #topRightCluster img {
              visibility: hidden;
            }`),M2.forEach(a),pe=c(bn),me=r(bn,"IMG",{class:!0,src:!0,alt:!0}),$e=c(bn),We=r(bn,"IMG",{class:!0,src:!0,alt:!0}),Ge=c(bn),ee=r(bn,"IMG",{class:!0,src:!0,alt:!0}),Ie=c(bn),he=r(bn,"IMG",{class:!0,src:!0,alt:!0}),Xe=c(bn),P=r(bn,"IMG",{class:!0,src:!0,alt:!0}),Z=c(bn),oe=r(bn,"IMG",{class:!0,src:!0,alt:!0}),ne=c(bn),be=r(bn,"IMG",{class:!0,src:!0,alt:!0}),Ae=c(bn),De=r(bn,"IMG",{class:!0,src:!0,alt:!0}),bn.forEach(a),Vm.forEach(a),F2.forEach(a),ft=c(xn),ke=r(xn,"SECTION",{class:!0,style:!0});var ql=n(ke);Ze=r(ql,"STYLE",{});var j2=n(Ze);Nt=p(j2,`#thegrid div {
          padding: 10px 0px 10px 10px;
        }
        #thegrid div.flex {
          padding: 20px 10px 20px 10px;
        }
        #thegrid2 div {
          padding: 15px 40px 15px 40px;
          line-height: 1.5;
          vertical-align: middle;
        }`),j2.forEach(a),Lt=c(ql),Oe=r(ql,"H2",{class:!0});var N2=n(Oe);mt=p(N2,"How it works"),N2.forEach(a),Pt=c(ql),Le=r(ql,"DIV",{class:!0,id:!0});var Bu=n(Le);at=r(Bu,"DIV",{class:!0});var km=n(at);ct=r(km,"DIV",{class:!0});var B2=n(ct);Ct=r(B2,"IMG",{src:!0,alt:!0}),B2.forEach(a),Dt=c(km),pt=r(km,"DIV",{class:!0});var R2=n(pt);Bt=p(R2,"Plastic waste"),R2.forEach(a),km.forEach(a),kt=c(Bu),re=r(Bu,"DIV",{class:!0});var Sm=n(re);nt=r(Sm,"DIV",{class:!0});var $2=n(nt);Tt=r($2,"IMG",{src:!0,alt:!0}),$2.forEach(a),it=c(Sm),dt=r(Sm,"DIV",{class:!0});var q2=n(dt);Zt=p(q2,"Food waste"),q2.forEach(a),Sm.forEach(a),qt=c(Bu),ot=r(Bu,"DIV",{class:!0});var Tm=n(ot);xt=r(Tm,"DIV",{class:!0});var U2=n(xt);et=r(U2,"IMG",{src:!0,alt:!0}),U2.forEach(a),It=c(Tm),Gt=r(Tm,"DIV",{class:!0});var H2=n(Gt);es=p(H2,"Animal waste"),H2.forEach(a),Tm.forEach(a),Vt=c(Bu),Ue=r(Bu,"DIV",{class:!0});var Am=n(Ue);ut=r(Am,"DIV",{class:!0});var Y2=n(ut);$t=r(Y2,"IMG",{src:!0,alt:!0}),Y2.forEach(a),bt=c(Am),lt=r(Am,"DIV",{class:!0});var W2=n(lt);At=p(W2,"Agricultural waste"),W2.forEach(a),Am.forEach(a),yt=c(Bu),Ut=r(Bu,"DIV",{class:!0});var Fm=n(Ut);zt=r(Fm,"DIV",{class:!0});var z2=n(zt);Ft=r(z2,"IMG",{src:!0,alt:!0}),z2.forEach(a),Jt=c(Fm),Ht=r(Fm,"DIV",{class:!0});var K2=n(Ht);Xt=p(K2,"Wood waste"),K2.forEach(a),Fm.forEach(a),Bu.forEach(a),ht=c(ql),Js=r(ql,"DIV",{class:!0});var J2=n(Js);Vs=p(J2,"Power from waste technology"),J2.forEach(a),Kt=c(ql),st=r(ql,"DIV",{class:!0,style:!0});var jc=n(st);jt=r(jc,"DIV",{class:!0}),n(jt).forEach(a),ss=c(jc),Xs=r(jc,"DIV",{class:!0});var X2=n(Xs);Ps=p(X2," "),X2.forEach(a),Qt=c(jc),wt=r(jc,"DIV",{class:!0});var Q2=n(wt);Qs=p(Q2," "),Q2.forEach(a),ks=c(jc),ns=r(jc,"DIV",{class:!0});var Z2=n(ns);jr=p(Z2," "),Z2.forEach(a),Na=c(jc),ms=r(jc,"DIV",{class:!0});var e3=n(ms);ur=p(e3," "),e3.forEach(a),_r=c(jc),ls=r(jc,"DIV",{class:!0}),n(ls).forEach(a),jc.forEach(a),Er=c(ql),Yt=r(ql,"DIV",{class:!0,id:!0});var Nc=n(Yt);Ss=r(Nc,"DIV",{class:!0});var t3=n(Ss);Cs=p(t3,"Liquid fertiliser"),t3.forEach(a),fr=c(Nc),ta=r(Nc,"DIV",{class:!0});var s3=n(ta);di=p(s3,"Solid digestate"),s3.forEach(a),Gs=c(Nc),is=r(Nc,"DIV",{class:!0});var r3=n(is);sa=p(r3,"Biogas"),r3.forEach(a),pr=c(Nc),us=r(Nc,"DIV",{class:!0});var a3=n(us);sl=p(a3,"Syngas"),a3.forEach(a),Ba=c(Nc),xs=r(Nc,"DIV",{class:!0});var n3=n(xs);ra=p(n3,"Bio-oil"),n3.forEach(a),_n=c(Nc),aa=r(Nc,"DIV",{class:!0});var l3=n(aa);Zs=p(l3,"Biochar"),l3.forEach(a),Nc.forEach(a),ui=c(ql),En=r(ql,"DIV",{class:!0});var i3=n(En);bs=r(i3,"DIV",{class:!0});var o3=n(bs);na=p(o3,"Heat / Cool"),o3.forEach(a),i3.forEach(a),la=c(ql),Ts=r(ql,"DIV",{class:!0});var c3=n(Ts);Ir=r(c3,"DIV",{class:!0});var d3=n(Ir);Ra=p(d3,"Electricity"),d3.forEach(a),c3.forEach(a),ql.forEach(a),ia=c(xn),ts=r(xn,"H1",{id:!0,class:!0});var Sh=n(ts);vr=r(Sh,"DIV",{class:!0});var u3=n(vr);er=r(u3,"DIV",{class:!0});var Om=n(er);oa=r(Om,"DIV",{class:!0});var f3=n(oa);os=r(f3,"IMG",{class:!0,src:!0,alt:!0}),f3.forEach(a),Us=c(Om),cs=r(Om,"DIV",{class:!0});var kv=n(cs);rl=r(kv,"STYLE",{});var p3=n(rl);fi=p(p3,`p {
                font-size: 1.2rem;
              }`),p3.forEach(a),gr=c(kv),rs=r(kv,"H2",{style:!0,class:!0});var v3=n(rs);pi=p(v3,"Exploration station"),v3.forEach(a),In=c(kv),Nr=r(kv,"DIV",{style:!0,class:!0});var Lm=n(Nr);al=p(Lm,"Interact with our exploration "),nl=r(Lm,"BR",{}),lo=p(Lm,`
              station to learn more`),Lm.forEach(a),vi=c(kv),ys=r(kv,"P",{style:!0,class:!0});var g3=n(ys);Dr=p(g3,`Whether you’re a business owner, facility manager, community leader or just interested in sustainable energy
              solutions, our exploration station has something for you`),g3.forEach(a),kv.forEach(a),Om.forEach(a),u3.forEach(a),$a=c(Sh),Wt=r(Sh,"DIV",{class:!0,id:!0,style:!0});var Ru=n(Wt);Vr=r(Ru,"STYLE",{});var h3=n(Vr);Hs=p(h3,`.cow-element {
            /* overflow: visible !important; */
            box-shadow: 8px 0 8px -6px rgba(0, 0, 0, 0.3);
          }`),h3.forEach(a),tr=c(Ru),As=r(Ru,"DIV",{class:!0,id:!0});var Th=n(As);ca=r(Th,"DIV",{class:!0});var Cm=n(ca);da=r(Cm,"SCRIPT",{});var m3=n(da);ua=p(m3,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),m3.forEach(a),gi=c(Cm),Ys=r(Cm,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var x3=n(Ys);fs=r(x3,"IMG",{class:!0,src:!0,alt:!0}),x3.forEach(a),Cm.forEach(a),ll=c(Th),ws=r(Th,"DIV",{class:!0});var $u=n(ws);hr=r($u,"DIV",{class:!0});var Gm=n(hr);Dn=r(Gm,"DIV",{class:!0});var b3=n(Dn);sr=r(b3,"IMG",{style:!0,src:!0,alt:!0}),b3.forEach(a),il=c(Gm),Pr=r(Gm,"DIV",{class:!0});var Ah=n(Pr);as=r(Ah,"H1",{style:!0,class:!0});var y3=n(as);Ws=p(y3,"Cow manure"),y3.forEach(a),js=c(Ah),ps=r(Ah,"P",{style:!0,class:!0});var Mm=n(ps);kr=r(Mm,"SPAN",{class:!0});var w3=n(kr);ol=p(w3,"GCV:"),w3.forEach(a),hi=p(Mm,`
                  15 MJ/kg
                  `),rr=r(Mm,"IMG",{class:!0,src:!0,alt:!0}),Mm.forEach(a),_s=c(Ah),Sr=r(Ah,"P",{style:!0,class:!0});var gb=n(Sr);pa=r(gb,"SPAN",{class:!0});var _3=n(pa);Vn=p(_3,"Energy content:"),_3.forEach(a),cl=p(gb,`
                  Low`),gb.forEach(a),Ah.forEach(a),Gm.forEach(a),mi=c($u),vs=r($u,"DIV",{class:!0});var jm=n(vs);Es=r(jm,"BUTTON",{type:!0,style:!0,class:!0});var hb=n(Es);Br=r(hb,"IMG",{class:!0,src:!0,alt:!0}),dl=p(hb,`
                High organic content`),hb.forEach(a),kn=c(jm),zs=r(jm,"BUTTON",{type:!0,style:!0,class:!0});var mb=n(zs);nr=r(mb,"IMG",{class:!0,src:!0,alt:!0}),va=p(mb,`
                High nutrient content`),mb.forEach(a),jm.forEach(a),io=c($u),ul=r($u,"DIV",{class:!0});var Nm=n(ul);Sn=r(Nm,"BUTTON",{type:!0,style:!0,class:!0});var xb=n(Sn);qa=r(xb,"IMG",{class:!0,src:!0,alt:!0}),Wc=p(xb,`
                High nitrogen content`),xb.forEach(a),zc=c(Nm),Rr=r(Nm,"BUTTON",{type:!0,style:!0,class:!0});var bb=n(Rr);xi=r(bb,"IMG",{class:!0,src:!0,alt:!0}),oo=p(bb,`
                Low pH levels`),bb.forEach(a),Nm.forEach(a),bi=c($u),lr=r($u,"DIV",{class:!0});var Fh=n(lr);ds=r(Fh,"IMG",{class:!0,src:!0,alt:!0}),An=c(Fh),Ha=r(Fh,"H1",{style:!0,class:!0});var E3=n(Ha);yi=r(E3,"A",{href:!0,target:!0});var I3=n(yi);wi=p(I3,"Case study"),I3.forEach(a),E3.forEach(a),ga=c(Fh),ir=r(Fh,"IMG",{class:!0,src:!0,alt:!0}),Fh.forEach(a),Kc=c($u),$r=r($u,"DIV",{style:!0,class:!0});var Bm=n($r);Fn=r(Bm,"H2",{class:!0});var D3=n(Fn);Jc=p(D3,"600 dairy cows or 3500 tonnes of cow manure per year"),D3.forEach(a),_i=c(Bm),ha=r(Bm,"UL",{class:!0});var Rm=n(ha);Ya=r(Rm,"LI",{});var V3=n(Ya);On=p(V3,"Produces 656m³ biogas every day"),V3.forEach(a),Ju=c(Rm),uo=r(Rm,"LI",{});var P3=n(uo);Wa=p(P3,"Ability to power 187 UK households every day"),P3.forEach(a),Rm.forEach(a),Bm.forEach(a),$u.forEach(a),za=c(Th),ma=r(Th,"DIV",{class:!0});var k3=n(ma);Is=r(k3,"DIV",{class:!0});var $m=n(Is);xa=r($m,"DIV",{class:!0});var qm=n(xa);fo=r(qm,"DIV",{class:!0});var S3=n(fo);qr=r(S3,"IMG",{src:!0,class:!0,alt:!0}),S3.forEach(a),ba=c(qm),ya=r(qm,"DIV",{class:!0});var Um=n(ya);Hl=r(Um,"H1",{style:!0,class:!0});var T3=n(Hl);Ei=p(T3,"Most appropriate technology"),T3.forEach(a),Ii=c(Um),Yl=r(Um,"P",{style:!0,class:!0});var A3=n(Yl);Di=p(A3,"Anaerobic Digestion"),A3.forEach(a),Um.forEach(a),qm.forEach(a),Ln=c($m),or=r($m,"DIV",{class:!0});var Hm=n(or);Ja=r(Hm,"A",{href:!0});var F3=n(Ja);Cn=r(F3,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var yb=n(Cn);Xa=r(yb,"IMG",{class:!0,src:!0,alt:!0}),Xc=p(yb,`
                    Start your project`),yb.forEach(a),F3.forEach(a),po=c(Hm),fl=r(Hm,"A",{href:!0});var O3=n(fl);Ur=r(O3,"BUTTON",{type:!0,style:!0,class:!0});var wb=n(Ur);Ds=r(wb,"IMG",{class:!0,src:!0,alt:!0}),Vi=p(wb,`
                    Learn more`),wb.forEach(a),O3.forEach(a),Hm.forEach(a),$m.forEach(a),k3.forEach(a),Th.forEach(a),zd=c(Ru),Ks=r(Ru,"DIV",{class:!0,id:!0});var Oh=n(Ks);xr=r(Oh,"DIV",{class:!0});var Ym=n(xr);Qa=r(Ym,"SCRIPT",{});var L3=n(Qa);Pi=p(L3,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),L3.forEach(a),ki=c(Ym),Za=r(Ym,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var C3=n(Za);en=r(C3,"IMG",{class:!0,src:!0,alt:!0}),C3.forEach(a),Ym.forEach(a),pl=c(Oh),gs=r(Oh,"DIV",{class:!0});var qu=n(gs);_a=r(qu,"DIV",{class:!0});var Wm=n(_a);Si=r(Wm,"DIV",{class:!0});var G3=n(Si);Ea=r(G3,"IMG",{style:!0,src:!0,alt:!0}),G3.forEach(a),Qc=c(Wm),cr=r(Wm,"DIV",{class:!0});var Lh=n(cr);Ns=r(Lh,"H1",{style:!0,class:!0});var M3=n(Ns);vl=p(M3,"Food waste"),M3.forEach(a),Gn=c(Lh),Fs=r(Lh,"P",{style:!0,class:!0});var zm=n(Fs);Ia=r(zm,"SPAN",{class:!0});var j3=n(Ia);Zc=p(j3,"GCV:"),j3.forEach(a),gl=p(zm,`
                  17 MJ/kg
                  `),Bs=r(zm,"IMG",{class:!0,src:!0,alt:!0}),zm.forEach(a),Kd=c(Lh),Tr=r(Lh,"P",{style:!0,class:!0});var _b=n(Tr);Ar=r(_b,"SPAN",{class:!0});var N3=n(Ar);Jd=p(N3,"Energy content:"),N3.forEach(a),ed=p(_b,`
                  High`),_b.forEach(a),Lh.forEach(a),Wm.forEach(a),Fr=c(qu),tn=r(qu,"DIV",{class:!0});var Km=n(tn);sn=r(Km,"BUTTON",{type:!0,style:!0,class:!0});var Eb=n(sn);hl=r(Eb,"IMG",{class:!0,src:!0,alt:!0}),zl=p(Eb,`
                High organic content`),Eb.forEach(a),Xd=c(Km),Hr=r(Km,"BUTTON",{type:!0,style:!0,class:!0});var Ib=n(Hr);Rs=r(Ib,"IMG",{class:!0,src:!0,alt:!0}),Mn=p(Ib,`
                High nutrient content`),Ib.forEach(a),Km.forEach(a),Ai=c(qu),Fi=r(qu,"DIV",{class:!0});var Jm=n(Fi);Yr=r(Jm,"BUTTON",{type:!0,style:!0,class:!0});var Db=n(Yr);jn=r(Db,"IMG",{class:!0,src:!0,alt:!0}),Qd=p(Db,`
                Medium nitrogen content`),Db.forEach(a),go=c(Jm),$s=r(Jm,"BUTTON",{type:!0,style:!0,class:!0});var Vb=n($s);rn=r(Vb,"IMG",{class:!0,src:!0,alt:!0}),Zd=p(Vb,`
                Low pH levels`),Vb.forEach(a),Jm.forEach(a),ec=c(qu),Nn=r(qu,"DIV",{class:!0});var Ch=n(Nn);an=r(Ch,"IMG",{class:!0,src:!0,alt:!0}),eu=c(Ch),Oi=r(Ch,"H1",{style:!0,class:!0});var B3=n(Oi);Da=r(B3,"A",{href:!0,target:!0});var R3=n(Da);Bn=p(R3,"Case study"),R3.forEach(a),B3.forEach(a),xl=c(Ch),ho=r(Ch,"IMG",{class:!0,src:!0,alt:!0}),Ch.forEach(a),Rn=c(qu),bl=r(qu,"DIV",{style:!0,class:!0});var Xm=n(bl);mo=r(Xm,"H2",{class:!0});var $3=n(mo);xo=p($3,"100 people or 250 tonnes of food waste per year"),$3.forEach(a),Va=c(Xm),$n=r(Xm,"UL",{class:!0});var Qm=n($n);nn=r(Qm,"LI",{});var q3=n(nn);tu=p(q3,"Produces 156m³ biogas every day"),q3.forEach(a),sc=c(Qm),yl=r(Qm,"LI",{});var U3=n(yl);rc=p(U3,"Ability to power 19 UK households every day"),U3.forEach(a),Qm.forEach(a),Xm.forEach(a),qu.forEach(a),wl=c(Oh),Kl=r(Oh,"DIV",{class:!0});var H3=n(Kl);qn=r(H3,"DIV",{class:!0});var Zm=n(qn);Pa=r(Zm,"DIV",{class:!0});var e1=n(Pa);bo=r(e1,"DIV",{class:!0});var Y3=n(bo);Li=r(Y3,"IMG",{src:!0,class:!0,alt:!0}),Y3.forEach(a),_l=c(e1),ka=r(e1,"DIV",{class:!0});var t1=n(ka);El=r(t1,"H1",{style:!0,class:!0});var W3=n(El);su=p(W3,"Most appropriate technology"),W3.forEach(a),Jl=c(t1),Un=r(t1,"P",{style:!0,class:!0});var z3=n(Un);ru=p(z3,"Anaerobic Digestion"),z3.forEach(a),t1.forEach(a),e1.forEach(a),Ci=c(Zm),br=r(Zm,"DIV",{class:!0});var s1=n(br);on=r(s1,"A",{href:!0});var K3=n(on);Sa=r(K3,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Pb=n(Sa);Gi=r(Pb,"IMG",{class:!0,src:!0,alt:!0}),Mi=p(Pb,`
                    Start your project`),Pb.forEach(a),K3.forEach(a),ef=c(s1),yo=r(s1,"A",{href:!0});var J3=n(yo);Ta=r(J3,"BUTTON",{type:!0,style:!0,class:!0});var kb=n(Ta);Ql=r(kb,"IMG",{class:!0,src:!0,alt:!0}),Il=p(kb,`
                    Learn more`),kb.forEach(a),J3.forEach(a),s1.forEach(a),Zm.forEach(a),H3.forEach(a),Oh.forEach(a),Hn=c(Ru),qs=r(Ru,"DIV",{class:!0,id:!0});var Gh=n(qs);Wr=r(Gh,"DIV",{class:!0});var r1=n(Wr);Dl=r(r1,"SCRIPT",{});var X3=n(Dl);tf=p(X3,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),X3.forEach(a),au=c(r1),zr=r(r1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Q3=n(zr);ji=r(Q3,"IMG",{class:!0,src:!0,alt:!0}),Q3.forEach(a),r1.forEach(a),Zl=c(Gh),hs=r(Gh,"DIV",{class:!0});var Uu=n(hs);Aa=r(Uu,"DIV",{class:!0});var a1=n(Aa);Eo=r(a1,"DIV",{class:!0});var Z3=n(Eo);Vl=r(Z3,"IMG",{style:!0,src:!0,alt:!0}),Z3.forEach(a),ac=c(a1),Or=r(a1,"DIV",{class:!0});var Mh=n(Or);cn=r(Mh,"H1",{style:!0,class:!0});var ey=n(cn);nu=p(ey,"PE plastic"),ey.forEach(a),nc=c(Mh),Lr=r(Mh,"P",{style:!0,class:!0});var n1=n(Lr);dn=r(n1,"SPAN",{class:!0});var ty=n(dn);Ni=p(ty,"GCV:"),ty.forEach(a),Io=p(n1,`
                  46 MJ/kg
                  `),Pl=r(n1,"IMG",{class:!0,src:!0,alt:!0}),n1.forEach(a),ic=c(Mh),ei=r(Mh,"P",{style:!0,class:!0});var Sb=n(ei);kl=r(Sb,"SPAN",{class:!0});var sy=n(kl);Fa=p(sy,"Energy content:"),sy.forEach(a),oc=p(Sb,`
                  Very high`),Sb.forEach(a),Mh.forEach(a),a1.forEach(a),lu=c(Uu),Yn=r(Uu,"DIV",{class:!0});var l1=n(Yn);Kr=r(l1,"BUTTON",{type:!0,style:!0,class:!0});var Tb=n(Kr);un=r(Tb,"IMG",{class:!0,src:!0,alt:!0}),Bi=p(Tb,`
                Very low organic content`),Tb.forEach(a),cc=c(l1),Sl=r(l1,"BUTTON",{type:!0,style:!0,class:!0});var Ab=n(Sl);Tl=r(Ab,"IMG",{class:!0,src:!0,alt:!0}),iu=p(Ab,`
                Very low nutrient content`),Ab.forEach(a),l1.forEach(a),si=c(Uu),Cr=r(Uu,"DIV",{class:!0});var i1=n(Cr);Jr=r(i1,"BUTTON",{type:!0,style:!0,class:!0});var Fb=n(Jr);Al=r(Fb,"IMG",{class:!0,src:!0,alt:!0}),ri=p(Fb,`
                Very low nitrogen content`),Fb.forEach(a),Do=c(i1),Fl=r(i1,"BUTTON",{type:!0,style:!0,class:!0});var Ob=n(Fl);fn=r(Ob,"IMG",{class:!0,src:!0,alt:!0}),Vo=p(Ob,`
                PET bottles`),Ob.forEach(a),i1.forEach(a),dc=c(Uu),Wn=r(Uu,"DIV",{class:!0});var jh=n(Wn);Xr=r(jh,"IMG",{class:!0,src:!0,alt:!0}),rd=c(jh),pn=r(jh,"H1",{style:!0,class:!0});var ry=n(pn);Oa=r(ry,"A",{href:!0,target:!0});var ay=n(Oa);ad=p(ay,"Case study"),ay.forEach(a),ry.forEach(a),uc=c(jh),vn=r(jh,"IMG",{class:!0,src:!0,alt:!0}),jh.forEach(a),ai=c(Uu),Gr=r(Uu,"DIV",{style:!0,class:!0});var o1=n(Gr);zn=r(o1,"H2",{class:!0});var ny=n(zn);rf=p(ny,"10000 PET bottles or 100 tonnes of plastic per year"),ny.forEach(a),$i=c(o1),Qr=r(o1,"UL",{class:!0});var c1=n(Qr);fc=r(c1,"LI",{});var ly=n(fc);pc=p(ly,"Produces 75kWh every day"),ly.forEach(a),ko=c(c1),La=r(c1,"LI",{});var iy=n(La);vc=p(iy,"Ability to power 63 UK households every day"),iy.forEach(a),c1.forEach(a),o1.forEach(a),Uu.forEach(a),gc=c(Gh),So=r(Gh,"DIV",{class:!0});var oy=n(So);Ca=r(oy,"DIV",{class:!0});var d1=n(Ca);ni=r(d1,"DIV",{class:!0});var u1=n(ni);Kn=r(u1,"DIV",{class:!0});var cy=n(Kn);To=r(cy,"IMG",{src:!0,class:!0,alt:!0}),cy.forEach(a),Lv=c(u1),Jn=r(u1,"DIV",{class:!0});var f1=n(Jn);Ll=r(f1,"H1",{style:!0,class:!0});var dy=n(Ll);nd=p(dy,"Most appropriate technology"),dy.forEach(a),hg=c(f1),ld=r(f1,"P",{style:!0,class:!0});var uy=n(ld);ou=p(uy,"Pyrolysis"),uy.forEach(a),f1.forEach(a),u1.forEach(a),Cv=c(d1),hc=r(d1,"DIV",{class:!0});var p1=n(hc);Ao=r(p1,"A",{href:!0});var fy=n(Ao);dr=r(fy,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Lb=n(dr);Fo=r(Lb,"IMG",{class:!0,src:!0,alt:!0}),Gv=p(Lb,`
                    Start your project`),Lb.forEach(a),fy.forEach(a),af=c(p1),cu=r(p1,"A",{href:!0});var py=n(cu);Oo=r(py,"BUTTON",{type:!0,style:!0,class:!0});var Cb=n(Oo);Lo=r(Cb,"IMG",{class:!0,src:!0,alt:!0}),Mv=p(Cb,`
                    Learn more`),Cb.forEach(a),py.forEach(a),p1.forEach(a),d1.forEach(a),oy.forEach(a),Gh.forEach(a),nf=c(Ru),li=r(Ru,"DIV",{class:!0,id:!0});var Nh=n(li);mc=r(Nh,"DIV",{class:!0});var v1=n(mc);qi=r(v1,"SCRIPT",{});var vy=n(qi);du=p(vy,`function toggleElement(k) {
                var element = document.querySelector('#' + k)
                // element.classList.toggle('hidden')
                element.classList.toggle('-translate-x-full')
                element.classList.toggle('opacity-0')
              }`),vy.forEach(a),jv=c(v1),Ui=r(v1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var gy=n(Ui);Cl=r(gy,"IMG",{class:!0,src:!0,alt:!0}),gy.forEach(a),v1.forEach(a),Nv=c(Nh),gn=r(Nh,"DIV",{class:!0});var Hu=n(gn);Ga=r(Hu,"DIV",{class:!0});var g1=n(Ga);Hi=r(g1,"DIV",{class:!0});var hy=n(Hi);xc=r(hy,"IMG",{style:!0,src:!0,alt:!0}),hy.forEach(a),id=c(g1),Co=r(g1,"DIV",{class:!0});var Bh=n(Co);od=r(Bh,"H1",{style:!0,class:!0});var my=n(od);cd=p(my,"Technology"),my.forEach(a),yg=c(Bh),Go=r(Bh,"P",{style:!0,class:!0});var h1=n(Go);bc=r(h1,"SPAN",{class:!0});var xy=n(bc);Bv=p(xy,"GCV:"),xy.forEach(a),of=p(h1,`
                  N/A MJ/kg
                  `),Gl=r(h1,"IMG",{class:!0,src:!0,alt:!0}),h1.forEach(a),uu=c(Bh),dd=r(Bh,"P",{style:!0,class:!0});var Gb=n(dd);df=r(Gb,"SPAN",{class:!0});var by=n(df);wg=p(by,"Energy content:"),by.forEach(a),Bp=p(Gb,`
                  High`),Gb.forEach(a),Bh.forEach(a),g1.forEach(a),_g=c(Hu),ud=r(Hu,"DIV",{class:!0});var m1=n(ud);yc=r(m1,"BUTTON",{type:!0,style:!0,class:!0});var Mb=n(yc);wc=r(Mb,"IMG",{class:!0,src:!0,alt:!0}),Eg=p(Mb,`
                High organic content`),Mb.forEach(a),Ig=c(m1),Ml=r(m1,"BUTTON",{type:!0,style:!0,class:!0});var jb=n(Ml);fu=r(jb,"IMG",{class:!0,src:!0,alt:!0}),Dg=p(jb,`
                High nutrient content`),jb.forEach(a),m1.forEach(a),Vg=c(Hu),fd=r(Hu,"DIV",{class:!0});var x1=n(fd);Yi=r(x1,"BUTTON",{type:!0,style:!0,class:!0});var Nb=n(Yi);Wi=r(Nb,"IMG",{class:!0,src:!0,alt:!0}),_c=p(Nb,`
                High nitrogen content`),Nb.forEach(a),Rp=c(x1),Ec=r(x1,"BUTTON",{type:!0,style:!0,class:!0});var Bb=n(Ec);Ic=r(Bb,"IMG",{class:!0,src:!0,alt:!0}),Pg=p(Bb,`
                Latest technology`),Bb.forEach(a),x1.forEach(a),kg=c(Hu),Mo=r(Hu,"DIV",{class:!0});var Rh=n(Mo);pu=r(Rh,"IMG",{class:!0,src:!0,alt:!0}),$p=c(Rh),vu=r(Rh,"H1",{style:!0,class:!0});var yy=n(vu);gu=r(yy,"A",{href:!0,target:!0});var wy=n(gu);zi=p(wy,"Case study"),wy.forEach(a),yy.forEach(a),qp=c(Rh),Dc=r(Rh,"IMG",{class:!0,src:!0,alt:!0}),Rh.forEach(a),Sg=c(Hu),Vc=r(Hu,"DIV",{style:!0,class:!0});var b1=n(Vc);jo=r(b1,"H2",{class:!0});var _y=n(jo);Tg=p(_y,"600 dairy cows or 3500 tonnes of cow manure per year"),_y.forEach(a),Ag=c(b1),pd=r(b1,"UL",{class:!0});var y1=n(pd);hu=r(y1,"LI",{});var Ey=n(hu);Up=p(Ey,"Produces 656m³ biogas every day"),Ey.forEach(a),Fg=c(y1),Hp=r(y1,"LI",{});var Iy=n(Hp);uf=p(Iy,"Ability to power 187 UK households every day"),Iy.forEach(a),y1.forEach(a),b1.forEach(a),Hu.forEach(a),Og=c(Nh),ff=r(Nh,"DIV",{class:!0});var Dy=n(ff);No=r(Dy,"DIV",{class:!0});var w1=n(No);vd=r(w1,"DIV",{class:!0});var _1=n(vd);gd=r(_1,"DIV",{class:!0});var Vy=n(gd);mu=r(Vy,"IMG",{src:!0,class:!0,alt:!0}),Vy.forEach(a),Lg=c(_1),hd=r(_1,"DIV",{class:!0});var E1=n(hd);xu=r(E1,"H1",{style:!0,class:!0});var Py=n(xu);Yp=p(Py,"Most appropriate technology"),Py.forEach(a),Wp=c(E1),bu=r(E1,"P",{style:!0,class:!0});var ky=n(bu);Cg=p(ky,"New Technology"),ky.forEach(a),E1.forEach(a),_1.forEach(a),yu=c(w1),Bo=r(w1,"DIV",{class:!0});var I1=n(Bo);md=r(I1,"A",{href:!0});var Sy=n(md);ii=r(Sy,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Rb=n(ii);wu=r(Rb,"IMG",{class:!0,src:!0,alt:!0}),xd=p(Rb,`
                    Start your project`),Rb.forEach(a),Sy.forEach(a),Gg=c(I1),pf=r(I1,"A",{href:!0});var Ty=n(pf);Ki=r(Ty,"BUTTON",{type:!0,style:!0,class:!0});var $b=n(Ki);Pc=r($b,"IMG",{class:!0,src:!0,alt:!0}),Mg=p($b,`
                    Learn more`),$b.forEach(a),Ty.forEach(a),I1.forEach(a),w1.forEach(a),Dy.forEach(a),Nh.forEach(a),Ru.forEach(a),_u=c(Sh),jl=r(Sh,"DIV",{id:!0,class:!0,style:!0}),n(jl).forEach(a),Sh.forEach(a),jg=c(xn),vf=r(xn,"SECTION",{class:!0});var Ay=n(vf);oi=r(Ay,"DIV",{class:!0,style:!0,id:!0,onclick:!0});var Fy=n(oi);kc=r(Fy,"DIV",{});var $h=n(kc);yr=r($h,"DIV",{id:!0,style:!0});var Bc=n(yr);Ji=r(Bc,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Oy=n(Ji);Eu=r(Oy,"IMG",{class:!0,src:!0,alt:!0}),Oy.forEach(a),Ng=c(Bc),Xi=r(Bc,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Ly=n(Xi);Sc=r(Ly,"IMG",{class:!0,src:!0,alt:!0}),Ly.forEach(a),Bg=c(Bc),Qi=r(Bc,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Cy=n(Qi);hn=r(Cy,"IMG",{class:!0,src:!0,alt:!0}),Cy.forEach(a),zp=c(Bc),Xn=r(Bc,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var Gy=n(Xn);bd=r(Gy,"DIV",{style:!0});var My=n(bd);Rg=p(My,"Technology"),My.forEach(a),Gy.forEach(a),Iu=c(Bc),Kp=r(Bc,"STYLE",{});var jy=n(Kp);$g=p(jy,`@keyframes bounce {
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
              }`),jy.forEach(a),qg=c(Bc),Du=r(Bc,"SCRIPT",{});var Ny=n(Du);Jp=p(Ny,"const animatedElements = document.querySelectorAll('.techbuttons')\n\n              animatedElements.forEach(element => {\n                const randomDelay = Math.floor(Math.random() * 1000) // Generate a random delay between 0 and 1000 milliseconds\n                element.style.animationDelay = `${randomDelay}ms`\n                element.style.animationDuration = `${1000 + randomDelay}ms`\n              })"),Ny.forEach(a),Bc.forEach(a),Ug=c($h),Xp=r($h,"STYLE",{});var By=n(Xp);Ro=p(By,`.growbutton:hover {
              box-shadow: 0 0 5px 1px white;
            }
            .growbutton img {
              max-width: 190%;
            }`),By.forEach(a),Hg=c($h),Nl=r($h,"DIV",{class:!0,id:!0,style:!0});var D1=n(Nl);yd=r(D1,"DIV",{class:!0});var V1=n(yd);wd=r(V1,"INPUT",{type:!0,placeholder:!0,class:!0}),Qp=c(V1),Tc=r(V1,"BUTTON",{"aria-label":!0,class:!0});var Ry=n(Tc);_d=r(Ry,"SPAN",{class:!0}),n(_d).forEach(a),Ry.forEach(a),V1.forEach(a),Zp=c(D1),Zi=r(D1,"BUTTON",{type:!0,onclick:!0,style:!0,class:!0});var $y=n(Zi);Bl=r($y,"IMG",{class:!0,src:!0,alt:!0,style:!0}),$y.forEach(a),D1.forEach(a),$h.forEach(a),Fy.forEach(a),Ay.forEach(a),Yg=c(xn),eo=r(xn,"H1",{class:!0,id:!0});var qh=n(eo);Ed=r(qh,"DIV",{class:!0});var qy=n(Ed);Id=r(qy,"DIV",{class:!0});var P1=n(Id);gf=r(P1,"DIV",{class:!0});var Uy=n(gf);Vu=r(Uy,"IMG",{class:!0,src:!0,alt:!0}),Uy.forEach(a),Wg=c(P1),Ma=r(P1,"DIV",{class:!0});var Sv=n(Ma);ev=r(Sv,"STYLE",{});var Hy=n(ev);tv=p(Hy,`p {
                font-size: 1.2rem;
              }`),Hy.forEach(a),zg=c(Sv),Pu=r(Sv,"H2",{style:!0,class:!0});var Yy=n(Pu);Kg=p(Yy,"The PFP Calculator"),Yy.forEach(a),sv=c(Sv),Ac=r(Sv,"DIV",{style:!0,class:!0});var k1=n(Ac);Jg=p(k1,`Find the right technology
              `),Xg=r(k1,"BR",{}),rv=p(k1,`
              for your needs`),k1.forEach(a),av=c(Sv),ku=r(Sv,"P",{style:!0,class:!0});var Wy=n(ku);Qg=p(Wy,`We will assist you every step of the way to ensure a smooth and successful implementation of your power-from-waste
              project`),Wy.forEach(a),Sv.forEach(a),P1.forEach(a),qy.forEach(a),nv=c(qh),mn=r(qh,"DIV",{id:!0,class:!0,style:!0}),n(mn).forEach(a),Zg=c(qh),Rl=r(qh,"DIV",{id:!0,class:!0,style:!0}),n(Rl).forEach(a),qh.forEach(a),eh=c(xn),to=r(xn,"SECTION",{class:!0,id:!0});var zy=n(to);$o=r(zy,"DIV",{class:!0});var S1=n($o);so=r(S1,"DIV",{class:!0,style:!0});var T1=n(so);Dd=r(T1,"DIV",{class:!0});var A1=n(Dd);Vd=r(A1,"P",{class:!0});var Ky=n(Vd);th=p(Ky,"Waste type"),Ky.forEach(a),lv=c(A1),qo=r(A1,"H2",{class:!0});var Uh=n(qo);Pd=r(Uh,"SPAN",{id:!0});var Jy=n(Pd);sh=p(Jy,"PE Plastic"),Jy.forEach(a),iv=c(Uh),ov=r(Uh,"BR",{}),cv=c(Uh),hf=r(Uh,"SPAN",{id:!0});var Xy=n(hf);rh=p(Xy,"10,000 tonnes"),Xy.forEach(a),Uh.forEach(a),A1.forEach(a),Su=c(T1),kd=r(T1,"DIV",{class:!0});var F1=n(kd);mf=r(F1,"DIV",{class:!0});var Qy=n(mf);Sd=r(Qy,"IMG",{src:!0,class:!0,id:!0,alt:!0}),Qy.forEach(a),dv=c(F1),Td=r(F1,"DIV",{class:!0});var O1=n(Td);xf=r(O1,"H3",{class:!0});var Zy=n(xf);Fc=p(Zy,"Most appropriate technology"),Zy.forEach(a),ah=c(O1),Tu=r(O1,"H2",{class:!0,id:!0});var e5=n(Tu);nh=p(e5,"Pyrolysis"),e5.forEach(a),O1.forEach(a),F1.forEach(a),T1.forEach(a),lh=c(S1),Mr=r(S1,"DIV",{class:!0});var Rc=n(Mr);Uo=r(Rc,"DIV",{class:!0});var L1=n(Uo);Ad=r(L1,"DIV",{style:!0,class:!0});var qb=n(Ad);uv=p(qb,"Energy content "),Au=r(qb,"IMG",{class:!0,src:!0,alt:!0}),qb.forEach(a),ih=c(L1),Oc=r(L1,"DIV",{class:!0});var Ub=n(Oc);bf=r(Ub,"SPAN",{id:!0});var t5=n(bf);fv=p(t5,"18"),t5.forEach(a),pv=p(Ub,`
              MJ/kg`),Ub.forEach(a),L1.forEach(a),vv=c(Rc),Fd=r(Rc,"DIV",{class:!0});var C1=n(Fd);Od=r(C1,"DIV",{style:!0,class:!0});var Hb=n(Od);Fu=p(Hb,"Heat produced "),Ou=r(Hb,"IMG",{class:!0,src:!0,alt:!0}),Hb.forEach(a),oh=c(C1),Lc=r(C1,"DIV",{class:!0});var Yb=n(Lc);Ld=r(Yb,"SPAN",{id:!0});var s5=n(Ld);ch=p(s5,"11,200"),s5.forEach(a),dh=p(Yb,`
              kWh per year`),Yb.forEach(a),C1.forEach(a),Cc=c(Rc),Cd=r(Rc,"DIV",{class:!0});var G1=n(Cd);Gd=r(G1,"DIV",{style:!0,class:!0});var Wb=n(Gd);uh=p(Wb,"Heat savings "),Lu=r(Wb,"IMG",{class:!0,src:!0,alt:!0}),Wb.forEach(a),gv=c(G1),Md=r(G1,"DIV",{class:!0});var M1=n(Md);hv=p(M1,`£
              `),yf=r(M1,"SPAN",{id:!0});var r5=n(yf);mv=p(r5,"48,000"),r5.forEach(a),fh=p(M1,`
              per year`),M1.forEach(a),G1.forEach(a),xv=c(Rc),jd=r(Rc,"DIV",{class:!0});var j1=n(jd);Ho=r(j1,"DIV",{style:!0,class:!0});var zb=n(Ho);bv=p(zb,"Electricity produced "),Gc=r(zb,"IMG",{class:!0,src:!0,alt:!0}),zb.forEach(a),ph=c(j1),ro=r(j1,"DIV",{class:!0});var Kb=n(ro);wf=r(Kb,"SPAN",{id:!0});var a5=n(wf);vh=p(a5,"4,800"),a5.forEach(a),gh=p(Kb,`
              kWh per year`),Kb.forEach(a),j1.forEach(a),yv=c(Rc),Yo=r(Rc,"DIV",{class:!0});var N1=n(Yo);Nd=r(N1,"DIV",{style:!0,class:!0});var Jb=n(Nd);hh=p(Jb,"Electrical savings "),$l=r(Jb,"IMG",{class:!0,src:!0,alt:!0}),Jb.forEach(a),mh=c(N1),Bd=r(N1,"DIV",{class:!0});var B1=n(Bd);xh=p(B1,`£
              `),Rd=r(B1,"SPAN",{id:!0});var n5=n(Rd);bh=p(n5,"70,000"),n5.forEach(a),wv=p(B1,`
              per year`),B1.forEach(a),N1.forEach(a),yh=c(Rc),ci=r(Rc,"DIV",{class:!0});var R1=n(ci);$d=r(R1,"DIV",{style:!0,class:!0});var Xb=n($d);u0=p(Xb,"Char produced "),Jv=r(Xb,"IMG",{class:!0,src:!0,alt:!0}),Xb.forEach(a),f0=c(R1),Xv=r(R1,"DIV",{class:!0});var Qb=n(Xv);wh=r(Qb,"SPAN",{id:!0});var l5=n(wh);p0=p(l5,"500"),l5.forEach(a),v0=p(Qb,`
              tonnes`),Qb.forEach(a),R1.forEach(a),Rc.forEach(a),S1.forEach(a),zy.forEach(a),g0=c(xn),_v=r(xn,"SECTION",{id:!0});var $1=n(_v);Wo=r($1,"DIV",{class:!0,id:!0});var Tv=n(Wo);Ev=r(Tv,"DIV",{class:!0});var q1=n(Ev);Qv=r(q1,"H1",{style:!0,class:!0});var i5=n(Qv);h0=p(i5,"The PFP Calculator"),i5.forEach(a),m0=c(q1),_f=r(q1,"P",{style:!0,class:!0});var U1=n(_f);x0=p(U1,`Our user-friendly calculator is designed to evaluate your project's
            `),b0=r(U1,"BR",{}),y0=p(U1,`
            feasibility, relevant technology and energy output`),U1.forEach(a),q1.forEach(a),w0=c(Tv),Ef=r(Tv,"DIV",{style:!0,class:!0});var H1=n(Ef);_h=r(H1,"DIV",{class:!0});var o5=n(_h);Iv=r(o5,"IMG",{class:!0,id:!0,src:!0,alt:!0}),o5.forEach(a),_0=c(H1),zo=r(H1,"DIV",{class:!0,id:!0});var Av=n(zo);If=r(Av,"DIV",{class:!0,role:!0});var Y1=n(If);Zv=r(Y1,"BUTTON",{type:!0,class:!0});var c5=n(Zv);E0=p(c5,"Waste type"),c5.forEach(a),I0=c(Y1),Eh=r(Y1,"DIV",{class:!0});var d5=n(Eh);Ye=r(d5,"SELECT",{id:!0,class:!0});var tt=n(Ye);Df=r(tt,"OPTION",{class:!0});var u5=n(Df);D0=p(u5,"Cheese production (37% milk)"),u5.forEach(a),Vf=r(tt,"OPTION",{class:!0});var f5=n(Vf);V0=p(f5,"Butter production (29% milk)"),f5.forEach(a),Pf=r(tt,"OPTION",{class:!0});var p5=n(Pf);P0=p(p5,"Ice cream (13% milk)"),p5.forEach(a),kf=r(tt,"OPTION",{class:!0});var v5=n(kf);k0=p(v5,"Beer production"),v5.forEach(a),Sf=r(tt,"OPTION",{class:!0});var g5=n(Sf);S0=p(g5,"Wine production"),g5.forEach(a),Tf=r(tt,"OPTION",{class:!0});var h5=n(Tf);T0=p(h5,"Spirits production"),h5.forEach(a),Af=r(tt,"OPTION",{class:!0});var m5=n(Af);A0=p(m5,"Ethanol production"),m5.forEach(a),Ff=r(tt,"OPTION",{class:!0});var x5=n(Ff);F0=p(x5,"Pulp production"),x5.forEach(a),Of=r(tt,"OPTION",{class:!0});var b5=n(Of);O0=p(b5,"Juice production"),b5.forEach(a),Lf=r(tt,"OPTION",{class:!0});var y5=n(Lf);L0=p(y5,"Tomato ketchup"),y5.forEach(a),Cf=r(tt,"OPTION",{class:!0});var w5=n(Cf);C0=p(w5,"Bovine meat"),w5.forEach(a),Gf=r(tt,"OPTION",{class:!0});var _5=n(Gf);G0=p(_5,"Pig meat"),_5.forEach(a),Mf=r(tt,"OPTION",{class:!0});var E5=n(Mf);M0=p(E5,"Sheep meat"),E5.forEach(a),jf=r(tt,"OPTION",{class:!0});var I5=n(jf);j0=p(I5,"Frozen potatoes"),I5.forEach(a),Nf=r(tt,"OPTION",{class:!0});var D5=n(Nf);N0=p(D5,"Prepared potatoes (crisps)"),D5.forEach(a),Bf=r(tt,"OPTION",{class:!0});var V5=n(Bf);B0=p(V5,"Potato starch"),V5.forEach(a),Rf=r(tt,"OPTION",{class:!0});var P5=n(Rf);R0=p(P5,"Dried potatoes"),P5.forEach(a),$f=r(tt,"OPTION",{class:!0});var k5=n($f);$0=p(k5,"Sugar production"),k5.forEach(a),qf=r(tt,"OPTION",{class:!0});var S5=n(qf);q0=p(S5,"Yeast production"),S5.forEach(a),Uf=r(tt,"OPTION",{class:!0});var T5=n(Uf);U0=p(T5,"Vegetable oils production"),T5.forEach(a),Hf=r(tt,"OPTION",{class:!0});var A5=n(Hf);H0=p(A5,"Biodiesel production"),A5.forEach(a),Yf=r(tt,"OPTION",{class:!0});var F5=n(Yf);Y0=p(F5,"Pig manure"),F5.forEach(a),Wf=r(tt,"OPTION",{class:!0});var O5=n(Wf);W0=p(O5,"Dairy Cattle"),O5.forEach(a),zf=r(tt,"OPTION",{class:!0});var L5=n(zf);z0=p(L5,"Non diary cattle"),L5.forEach(a),Kf=r(tt,"OPTION",{class:!0});var C5=n(Kf);K0=p(C5,"Buffalo"),C5.forEach(a),Jf=r(tt,"OPTION",{class:!0});var G5=n(Jf);J0=p(G5,"Chicken layer manure"),G5.forEach(a),Xf=r(tt,"OPTION",{class:!0});var M5=n(Xf);X0=p(M5,"Chicken broiler manure"),M5.forEach(a),Qf=r(tt,"OPTION",{class:!0});var j5=n(Qf);Q0=p(j5,"Sheep"),j5.forEach(a),Zf=r(tt,"OPTION",{class:!0});var N5=n(Zf);Z0=p(N5,"Food waste"),N5.forEach(a),ep=r(tt,"OPTION",{class:!0});var B5=n(ep);ex=p(B5,"Fish waste"),B5.forEach(a),tp=r(tt,"OPTION",{class:!0});var R5=n(tp);tx=p(R5,"Coffee grounds"),R5.forEach(a),sp=r(tt,"OPTION",{class:!0});var $5=n(sp);sx=p($5,"Crop residues"),$5.forEach(a),rp=r(tt,"OPTION",{class:!0});var q5=n(rp);rx=p(q5,"Maize silage"),q5.forEach(a),ap=r(tt,"OPTION",{class:!0});var U5=n(ap);ax=p(U5,"Cereal"),U5.forEach(a),np=r(tt,"OPTION",{class:!0});var H5=n(np);nx=p(H5,"Grass silage"),H5.forEach(a),lp=r(tt,"OPTION",{class:!0});var Y5=n(lp);lx=p(Y5,"Pulp & Paper Waste"),Y5.forEach(a),ip=r(tt,"OPTION",{class:!0});var W5=n(ip);ix=p(W5,"Textile Waste"),W5.forEach(a),op=r(tt,"OPTION",{class:!0});var z5=n(op);ox=p(z5,"PE Plastic"),z5.forEach(a),cp=r(tt,"OPTION",{class:!0});var K5=n(cp);cx=p(K5,"SRF"),K5.forEach(a),dp=r(tt,"OPTION",{class:!0});var J5=n(dp);dx=p(J5,"RDF"),J5.forEach(a),up=r(tt,"OPTION",{class:!0});var X5=n(up);ux=p(X5,"PP Plastic"),X5.forEach(a),fp=r(tt,"OPTION",{class:!0});var Q5=n(fp);fx=p(Q5,"PS Plastic"),Q5.forEach(a),pp=r(tt,"OPTION",{class:!0});var Z5=n(pp);px=p(Z5,"PVC Plastic"),Z5.forEach(a),vp=r(tt,"OPTION",{class:!0});var ew=n(vp);vx=p(ew,"PET Plastic"),ew.forEach(a),gp=r(tt,"OPTION",{class:!0});var tw=n(gp);gx=p(tw,"Rubber"),tw.forEach(a),hp=r(tt,"OPTION",{class:!0});var sw=n(hp);hx=p(sw,"Wood waste"),sw.forEach(a),mp=r(tt,"OPTION",{class:!0});var rw=n(mp);mx=p(rw,"Municipal Solid Waste (MSW)"),rw.forEach(a),xp=r(tt,"OPTION",{class:!0});var aw=n(xp);xx=p(aw,"Medical Waste"),aw.forEach(a),bp=r(tt,"OPTION",{class:!0});var nw=n(bp);bx=p(nw,"Ceramics"),nw.forEach(a),yp=r(tt,"OPTION",{class:!0});var lw=n(yp);yx=p(lw,"Sand"),lw.forEach(a),wp=r(tt,"OPTION",{class:!0});var iw=n(wp);wx=p(iw,"Dust"),iw.forEach(a),_p=r(tt,"OPTION",{class:!0});var ow=n(_p);_x=p(ow,"Glass"),ow.forEach(a),Ep=r(tt,"OPTION",{class:!0});var cw=n(Ep);Ex=p(cw,"Metals"),cw.forEach(a),tt.forEach(a),d5.forEach(a),Y1.forEach(a),Ix=c(Av),Ip=r(Av,"DIV",{class:!0,role:!0});var W1=n(Ip);eg=r(W1,"BUTTON",{type:!0,class:!0});var dw=n(eg);Dx=p(dw,"Kilograms per day"),dw.forEach(a),Vx=c(W1),Ih=r(W1,"DIV",{class:!0});var uw=n(Ih);Ko=r(uw,"SELECT",{id:!0,class:!0});var Fv=n(Ko);Dp=r(Fv,"OPTION",{class:!0});var fw=n(Dp);Px=p(fw,"10 kg"),fw.forEach(a),Vp=r(Fv,"OPTION",{class:!0});var pw=n(Vp);kx=p(pw,"100 kg"),pw.forEach(a),Pp=r(Fv,"OPTION",{class:!0});var vw=n(Pp);Sx=p(vw,"1000 kg"),vw.forEach(a),kp=r(Fv,"OPTION",{class:!0});var gw=n(kp);Tx=p(gw,"10,000 kg"),gw.forEach(a),Sp=r(Fv,"OPTION",{class:!0});var hw=n(Sp);Ax=p(hw,"20,000 kg"),hw.forEach(a),Tp=r(Fv,"OPTION",{class:!0});var mw=n(Tp);Fx=p(mw,"40,000 kg"),mw.forEach(a),Ap=r(Fv,"OPTION",{class:!0});var xw=n(Ap);Ox=p(xw,"> 40,000 kg"),xw.forEach(a),Fv.forEach(a),uw.forEach(a),W1.forEach(a),Lx=c(Av),Fp=r(Av,"DIV",{class:!0,role:!0});var z1=n(Fp);tg=r(z1,"BUTTON",{type:!0,class:!0});var bw=n(tg);Cx=p(bw,"Client needs"),bw.forEach(a),Gx=c(z1),Dh=r(z1,"DIV",{class:!0});var yw=n(Dh);Cu=r(yw,"SELECT",{id:!0,class:!0});var gm=n(Cu);Op=r(gm,"OPTION",{class:!0});var ww=n(Op);Mx=p(ww,"Electricity"),ww.forEach(a),Lp=r(gm,"OPTION",{class:!0});var _w=n(Lp);jx=p(_w,"Heating / Cooling"),_w.forEach(a),Cp=r(gm,"OPTION",{class:!0});var Ew=n(Cp);Nx=p(Ew,"Carbon credits"),Ew.forEach(a),Gp=r(gm,"OPTION",{class:!0});var Iw=n(Gp);Bx=p(Iw,"Fertiliser"),Iw.forEach(a),gm.forEach(a),yw.forEach(a),z1.forEach(a),Rx=c(Av),Dm=r(Av,"DIV",{}),n(Dm).forEach(a),Av.forEach(a),H1.forEach(a),$x=c(Tv),Mp=r(Tv,"DIV",{class:!0,id:!0});var K1=n(Mp);sg=r(K1,"DIV",{class:!0,id:!0});var Dw=n(sg);qx=p(Dw,"Your project is feasible"),Dw.forEach(a),Ux=c(K1),jp=r(K1,"P",{style:!0,class:!0});var J1=n(jp);Hx=p(J1,`Review your results to explore the different possibilities and
            `),Yx=r(J1,"BR",{}),Wx=p(J1,`
            book a slot with us for personalised guidance on next steps`),J1.forEach(a),K1.forEach(a),zx=c(Tv),Gu=r(Tv,"DIV",{class:!0});var Hh=n(Gu);Mu=r(Hh,"A",{id:!0,class:!0,href:!0});var X1=n(Mu);rg=r(X1,"IMG",{class:!0,src:!0,alt:!0}),Kx=c(X1),dm=r(X1,"SPAN",{});var Vw=n(dm);Jx=p(Vw,"Book a call with us"),Vw.forEach(a),X1.forEach(a),Xx=c(Hh),ju=r(Hh,"A",{id:!0,class:!0,href:!0});var Q1=n(ju);ag=r(Q1,"IMG",{class:!0,src:!0,alt:!0}),Qx=c(Q1),um=r(Q1,"SPAN",{});var Pw=n(um);Zx=p(Pw,"Learn more"),Pw.forEach(a),Q1.forEach(a),eb=c(Hh),qd=r(Hh,"BUTTON",{id:!0,class:!0,href:!0,onclick:!0});var Z1=n(qd);ng=r(Z1,"IMG",{class:!0,src:!0,alt:!0}),tb=c(Z1),fm=r(Z1,"SPAN",{});var kw=n(fm);sb=p(kw,"Calculate"),kw.forEach(a),Z1.forEach(a),Hh.forEach(a),Tv.forEach(a),rb=c($1),Jo=r($1,"DIV",{id:!0,class:!0,style:!0}),n(Jo).forEach(a),$1.forEach(a),ab=c(xn),pm=r(xn,"SCRIPT",{});var Sw=n(pm);nb=p(Sw,`function calculate() {
        const data = {
          Ceramics: {
            feasibility: 'N'
          },
          Sand: { feasibility: 'N' },
          Dust: { feasibility: 'N' },
          Glass: { feasibility: 'N' },
          Metals: { feasibility: 'N' },
          'Cheese production (37% milk)': {
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
          'Butter production (29% milk)': {
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
          'Ice cream (13% milk)': {
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
          ? (minlimit)?'Your project is feasible':'This feedstock amount is <u style="color:#ec8b5a;">too small</u>'
          : 'This feedstock is <u style="color:#ec8b5a;">not</u> feasible'

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
          document.querySelector('#matched-img').src = '/assets/medres/' + d['technology'] + '.jpg'

          for (var key in d) {
            if (key != 'feasibility') {
              var el = document.querySelector('#' + key)
              if (el) {
                el.innerHTML = (d[key] * Math.round(wt2.value / d['kgperday'], 0)).toLocaleString()
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
      }`),Sw.forEach(a),lb=c(xn),Dv=r(xn,"DIV",{class:!0});var e0=n(Dv);Vh=r(e0,"DIV",{class:!0});var Tw=n(Vh);ib=p(Tw,"Copyright © 2023 Power for Planet"),Tw.forEach(a),ob=c(e0),Vv=r(e0,"DIV",{class:!0});var t0=n(Vv);Ph=r(t0,"DIV",{class:!0});var Aw=n(Ph);cb=p(Aw,"Privacy Policy"),Aw.forEach(a),db=c(t0),Nu=r(t0,"DIV",{class:!0});var Yh=n(Nu);lg=r(Yh,"IMG",{src:!0,alt:!0,class:!0}),ub=c(Yh),ig=r(Yh,"IMG",{src:!0,alt:!0,class:!0}),fb=c(Yh),og=r(Yh,"IMG",{src:!0,alt:!0,class:!0}),Yh.forEach(a),t0.forEach(a),e0.forEach(a),xn.forEach(a),pb=c(kh),vm=r(kh,"SCRIPT",{});var Fw=n(vm);vb=p(Fw,`function toggleElement(k) {
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
    }, 100)`),Fw.forEach(a),kh.forEach(a),this.h()},h(){t(u,"id","expandElement"),t(u,"class","fixed inset-0 bg-blue-500 text-white flex items-center justify-center"),t(i,"class","relative"),t(g,"id","expandButton"),t(g,"class","bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"),T(l,"display","none"),t(_,"class","mt-[-2000px] pt-[2000px]"),t(_,"id","map2"),t(k,"class","mt-[-840px] pt-[840px]"),t(k,"id","calculator2"),t(G,"class","mt-[-5000px] pt-[5000px]"),t(G,"id","map3"),t(b,"class","mt-[-3900px] pt-[3900px]"),t(b,"id","calculator3"),t(ce,"class","uppercase pb-5 text-pfp-green font-bold"),t(R,"class","text-3xl leading-[33px] font-bold text-[#2e3855] font-Poppins"),t(ae,"class","pt-6"),t(ve,"class","mr-3"),S(ve.src,Ne="/assets/arrow-right-circle.png")||t(ve,"src",Ne),t(ve,"alt",""),t(te,"class","mt-10 w-fit p-4 hover:bg-pfp-green bg-pfp-orange rounded-lg flex justify-center items-center text-white tracking-wider"),t(te,"href","/explore/#map"),t($,"class","w-3/5 p-10 pr-12 bg-white"),t(me,"class","absolute top-[30%] h-36 left-[72%] z-0"),S(me.src,ge="/assets/cow 1.png")||t(me,"src",ge),t(me,"alt",""),t(We,"class","absolute top-[35%] h-40 left-[68%] z-10"),S(We.src,xe="/assets/manure 1.png")||t(We,"src",xe),t(We,"alt",""),t(ee,"class","absolute top-[35%] h-28 left-[75%] z-30"),S(ee.src,Me="/assets/apple 1.png")||t(ee,"src",Me),t(ee,"alt",""),t(he,"class","absolute top-60 h-20 left-200 ml-10 z-0"),S(he.src,ue="/assets/leaf2 1.png")||t(he,"src",ue),t(he,"alt",""),t(P,"class","absolute top-[35%] h-48 left-[65%] z-30"),S(P.src,B="/assets/pet bottle 1.png")||t(P,"src",B),t(P,"alt",""),t(oe,"class","absolute top-[35%] h-48 left-[65%] z-20"),S(oe.src,H="/assets/woodchips 1.png")||t(oe,"src",H),t(oe,"alt",""),t(be,"class","absolute top-96 h-30 left-200 ml-80 z-0"),S(be.src,vt="/assets/leaf1 1.png")||t(be,"src",vt),t(be,"alt",""),t(De,"class","absolute top-50 h-30 left-200 ml-80 z-0"),S(De.src,je="/assets/fish 1.png")||t(De,"src",je),t(De,"alt",""),t(Y,"class","w-2/5 p-4 bg-light-green"),t(Y,"id","topRightCluster"),t(K,"class","flex rounded-2xl overflow-hidden mt-12"),t(q,"class","w-full"),t(Oe,"class","text-3xl font-bold text-[#2e3855] font-Poppins text-center justify-center mb-10"),S(Ct.src,gt="/assets/pet bottle 1.png")||t(Ct,"src",gt),t(Ct,"alt",""),t(ct,"class","flex justify-center h-32"),t(pt,"class","w-2/4"),t(at,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(Tt.src,Rt="/assets/Group 7 (2).png")||t(Tt,"src",Rt),t(Tt,"alt",""),t(nt,"class","flex justify-center h-40"),t(dt,"class","w-2/4"),t(re,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(et.src,St="/assets/Group 7 (3).png")||t(et,"src",St),t(et,"alt",""),t(xt,"class","flex justify-center h-40"),t(Gt,"class","w-2/4"),t(ot,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S($t.src,Et="/assets/Group 7.png")||t($t,"src",Et),t($t,"alt",""),t(ut,"class","flex justify-center h-40"),t(lt,"class","w-2/4"),t(Ue,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),S(Ft.src,Mt="/assets/Group 7 (1).png")||t(Ft,"src",Mt),t(Ft,"alt",""),t(zt,"class","flex justify-center h-40"),t(Ht,"class","w-2/4"),t(Ut,"class","p-3 relative bg-[#DDF3EA] rounded-2xl leading-6 text-[#2E3855] mb-0 text-start font-bold text-xl tracking-wider after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(Le,"class","grid gap-6 md:grid-cols-5 grid-cols-2 w-full"),t(Le,"id","thegrid"),t(Js,"class","relative z-10 w-full text-white mb-[-90px] mt-16 text-center font-semibold text-xl tracking-wider uppercase"),t(jt,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent"),t(Xs,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-end after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase"),t(wt,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl tracking-wider uppercase"),t(ns,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase"),t(ms,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-start after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent font-semibold text-xl pl-1 tracking-wider uppercase"),t(ls,"class","arrow arrow-bottom relative w-1/6 bg-[#2E3855] h-10 leading-10 mb-10 text-white text-center after:absolute after:-bottom-5 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#2E3855] after:border-r-transparent after:border-l-transparent"),t(st,"class","flex w-full mt-10 pt-4 rounded-2xl mb-10 bg-[#2E3855]"),T(st,"height","70px"),t(Ss,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(ta,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(is,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(us,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] mb-0 text-center rounded-2xl font-bold text-xl after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-green after:border-t-[#DDF3EA] after:border-r-transparent after:border-l-transparent"),t(xs,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(aa,"class","flex items-center justify-center arrow arrow-bottom relative bg-[#DDF3EA] leading-10 text-[#2E3855] text-center rounded-2xl font-bold text-xl"),t(Yt,"class","grid gap-6 grid-cols-6 w-full"),t(Yt,"id","thegrid2"),t(bs,"class","p-3 text-white arrow arrow-bottom relative w-1/3 bg-gradient-to-r from-[#FF5252] to-[#59AFFF] rounded-2xl font-bold text-xl leading-10 text-[#2E3855] mb-0 text-center after:absolute after:-bottom-2 after:left-1/2 after:content[''] after:block after:border-solid after:border-top after:border-r-8 after:border-l-8 after:border-t-8 after:border-t-[#AD85AC] after:border-r-transparent after:border-l-transparent"),t(En,"class","flex justify-center mt-6 p-6"),t(Ir,"class","p-3 relative w-1/3 bg-[#D0E6F2] leading-10 text-[#2E3855] mb-0 rounded-2xl font-bold text-xl text-center"),t(Ts,"class","flex justify-center mt-[-10px] p-6 mb-[-20px]"),t(ke,"class","mb-10 bg-white mt-8 container mx-auto p-10 rounded-2xl"),T(ke,"font-family","'Poppins', sans-serif"),t(os,"class","h-80 p-6"),S(os.src,Ms="/assets/Frame 19 (1).png")||t(os,"src",Ms),t(os,"alt",""),t(oa,"class","bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-l-2xl"),T(rs,"font-family","'Poppins', sans-serif"),t(rs,"class","uppercase pb-0 text-pfp-green font-bold"),T(Nr,"font-family","'Poppins', sans-serif"),t(Nr,"class","text-3xl font-bold text-[#2e3855] font-Poppins mt-5"),T(ys,"font-family","'Public Sans', sans-serif"),t(ys,"class","text-[#2E3855] tracking-wider mt-5"),t(cs,"class","md:w-3/5 w-full p-14 pt-8 pb-6"),t(er,"class","flex md:flex-row flex-col items-center rounded-2xl bg-white w-full"),t(vr,"class","container mx-auto rounded-2xl"),t(fs,"class","mr-2"),S(fs.src,Ul="/assets/x-circle.png")||t(fs,"src",Ul),t(fs,"alt",""),t(Ys,"type","button"),t(Ys,"onclick","toggleElementOff('cow')"),T(Ys,"font-family","'Public Sans', sans-serif"),T(Ys,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(Ys,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(ca,"class","relative left-[98%] rounded-r-2xl"),T(sr,"height","70%"),T(sr,"padding","20px"),T(sr,"margin-left","5%"),S(sr.src,fa="/assets/cow 1.png")||t(sr,"src",fa),t(sr,"alt",""),t(Dn,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(as,"font-family","'Poppins', sans-serif"),t(as,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(kr,"class","font-bold text-xl"),t(rr,"class","ml-5 map-gcv info-pop"),S(rr.src,ar="/assets/Frame 15.png")||t(rr,"src",ar),t(rr,"alt",""),T(ps,"font-family","'Public Sans', sans-serif"),t(ps,"class","flex items-center text-[#2E3855] text-lg"),t(pa,"class","font-bold text-xl"),T(Sr,"font-family","'Public Sans', sans-serif"),t(Sr,"class","text-[#2E3855] text-lg"),t(Pr,"class","w-1/2"),t(hr,"class","flex justify-between items-center w-full mt-[-50px]"),t(Br,"class","mr-3"),S(Br.src,Pn="/assets/bar-chart.png")||t(Br,"src",Pn),t(Br,"alt",""),t(Es,"type","button"),T(Es,"font-family","'Public Sans', sans-serif"),t(Es,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(nr,"class","mr-3"),S(nr.src,mr="/assets/bar-chart.png")||t(nr,"src",mr),t(nr,"alt",""),t(zs,"type","button"),T(zs,"font-family","'Public Sans', sans-serif"),t(zs,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(vs,"class","flex"),t(qa,"class","mr-3"),S(qa.src,Ua="/assets/bar-chart.png")||t(qa,"src",Ua),t(qa,"alt",""),t(Sn,"type","button"),T(Sn,"font-family","'Public Sans', sans-serif"),t(Sn,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(xi,"class","mr-3"),S(xi.src,Wd="/assets/bar-chart (1).png")||t(xi,"src",Wd),t(xi,"alt",""),t(Rr,"type","button"),T(Rr,"font-family","'Public Sans', sans-serif"),t(Rr,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(ul,"class","flex justify-start"),t(ds,"class","mr-3"),S(ds.src,Tn="/assets/book-open.png")||t(ds,"src",Tn),t(ds,"alt",""),t(yi,"href","https://www.host.nl/en/case/guichen-france/"),t(yi,"target","_blank"),T(Ha,"font-family","'Poppins', sans-serif"),t(Ha,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(ir,"class","ml-5 map-case-study info-pop"),S(ir.src,co="/assets/Frame 15.png")||t(ir,"src",co),t(ir,"alt",""),t(lr,"class","flex justify-start items-center mt-8 pl-2"),t(Fn,"class","mb-2 text-lg font-light text-[#2E3855]"),t(ha,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T($r,"font-family","'Public Sans', sans-serif"),t($r,"class","mt-3 pl-2"),t(ws,"class","p-6"),S(qr.src,Ka="/assets/medres/anaerobic-digestion.jpg")||t(qr,"src",Ka),t(qr,"class","rounded-full w-16 h-16"),t(qr,"alt",""),t(fo,"class","mt-2"),T(Hl,"font-family","'Poppins', sans-serif"),t(Hl,"class","mt-0 font-bold text-lg leading-10 text-white"),T(Yl,"font-family","'Public Sans', sans-serif"),t(Yl,"class","text-white text-xl mt-1 tracking-wider"),t(ya,"class","ml-5"),t(xa,"class","flex"),t(Xa,"class","mr-3"),S(Xa.src,Qo="/assets/arrow-right-circle.png")||t(Xa,"src",Qo),t(Xa,"alt",""),t(Cn,"type","button"),t(Cn,"onclick","toggleAlOff();"),T(Cn,"font-family","'Public Sans', sans-serif"),t(Cn,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(Ja,"href","#calculator"),t(Ds,"class","mr-3"),S(Ds.src,wa="/assets/arrow-right-circle.png")||t(Ds,"src",wa),t(Ds,"alt",""),t(Ur,"type","button"),T(Ur,"font-family","'Public Sans', sans-serif"),t(Ur,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(fl,"href","/green-energy/"),t(or,"class","flex w-full"),t(Is,"class","flex flex-col p-5"),t(ma,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(As,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(As,"id","cow"),t(en,"class","mr-2"),S(en.src,Wl="/assets/x-circle.png")||t(en,"src",Wl),t(en,"alt",""),t(Za,"type","button"),t(Za,"onclick","toggleElementOff('food')"),T(Za,"font-family","'Public Sans', sans-serif"),T(Za,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(Za,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(xr,"class","relative left-[98%] rounded-r-2xl"),T(Ea,"height","130px"),T(Ea,"padding","20px"),T(Ea,"margin-left","17%"),S(Ea.src,Zo="/assets/Group 7 (2).png")||t(Ea,"src",Zo),t(Ea,"alt",""),t(Si,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(Ns,"font-family","'Poppins', sans-serif"),t(Ns,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(Ia,"class","font-bold text-xl"),t(Bs,"class","ml-5 map-gcv info-pop"),S(Bs.src,Ti="/assets/Frame 15.png")||t(Bs,"src",Ti),t(Bs,"alt",""),T(Fs,"font-family","'Public Sans', sans-serif"),t(Fs,"class","flex items-center text-[#2E3855] text-lg"),t(Ar,"class","font-bold text-xl"),T(Tr,"font-family","'Public Sans', sans-serif"),t(Tr,"class","text-[#2E3855] text-lg"),t(cr,"class","w-1/2"),t(_a,"class","flex justify-between items-center w-full mt-[-50px]"),t(hl,"class","mr-3"),S(hl.src,vo="/assets/bar-chart.png")||t(hl,"src",vo),t(hl,"alt",""),t(sn,"type","button"),T(sn,"font-family","'Public Sans', sans-serif"),t(sn,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Rs,"class","mr-3"),S(Rs.src,ml="/assets/bar-chart.png")||t(Rs,"src",ml),t(Rs,"alt",""),t(Hr,"type","button"),T(Hr,"font-family","'Public Sans', sans-serif"),t(Hr,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(tn,"class","flex"),t(jn,"class","mr-3"),S(jn.src,Xu="/assets/bar-chart.png")||t(jn,"src",Xu),t(jn,"alt",""),t(Yr,"type","button"),T(Yr,"font-family","'Public Sans', sans-serif"),t(Yr,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(rn,"class","mr-3"),S(rn.src,Qu="/assets/bar-chart (1).png")||t(rn,"src",Qu),t(rn,"alt",""),t($s,"type","button"),T($s,"font-family","'Public Sans', sans-serif"),t($s,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Fi,"class","flex justify-start"),t(an,"class","mr-3"),S(an.src,tc="/assets/book-open.png")||t(an,"src",tc),t(an,"alt",""),t(Da,"href","https://www.host.nl/en/case/guichen-france/"),t(Da,"target","_blank"),T(Oi,"font-family","'Poppins', sans-serif"),t(Oi,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(ho,"class","ml-5 map-case-study info-pop"),S(ho.src,Zu="/assets/Frame 15.png")||t(ho,"src",Zu),t(ho,"alt",""),t(Nn,"class","flex justify-start items-center mt-8 pl-2"),t(mo,"class","mb-2 text-lg font-light text-[#2E3855]"),t($n,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(bl,"font-family","'Public Sans', sans-serif"),t(bl,"class","mt-3 pl-2"),t(gs,"class","p-6"),S(Li.src,ln="/assets/medres/anaerobic-digestion.jpg")||t(Li,"src",ln),t(Li,"class","rounded-full w-16 h-16"),t(Li,"alt",""),t(bo,"class","mt-2"),T(El,"font-family","'Poppins', sans-serif"),t(El,"class","mt-0 font-bold text-lg leading-10 text-white"),T(Un,"font-family","'Public Sans', sans-serif"),t(Un,"class","text-white text-xl mt-1 tracking-wider"),t(ka,"class","ml-5"),t(Pa,"class","flex"),t(Gi,"class","mr-3"),S(Gi.src,Xl="/assets/arrow-right-circle.png")||t(Gi,"src",Xl),t(Gi,"alt",""),t(Sa,"type","button"),t(Sa,"onclick","toggleAlOff();"),T(Sa,"font-family","'Public Sans', sans-serif"),t(Sa,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(on,"href","#calculator"),t(Ql,"class","mr-3"),S(Ql.src,wo="/assets/arrow-right-circle.png")||t(Ql,"src",wo),t(Ql,"alt",""),t(Ta,"type","button"),T(Ta,"font-family","'Public Sans', sans-serif"),t(Ta,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(yo,"href","/green-energy/"),t(br,"class","flex w-full"),t(qn,"class","flex flex-col p-5"),t(Kl,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(Ks,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(Ks,"id","food"),t(ji,"class","mr-2"),S(ji.src,_o="/assets/x-circle.png")||t(ji,"src",_o),t(ji,"alt",""),t(zr,"type","button"),t(zr,"onclick","toggleElementOff('bottle')"),T(zr,"font-family","'Public Sans', sans-serif"),T(zr,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(zr,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(Wr,"class","relative left-[98%] rounded-r-2xl"),T(Vl,"height","130px"),T(Vl,"padding","20px"),T(Vl,"margin-left","30%"),S(Vl.src,td="/assets/pet bottle 1.png")||t(Vl,"src",td),t(Vl,"alt",""),t(Eo,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(cn,"font-family","'Poppins', sans-serif"),t(cn,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(dn,"class","font-bold text-xl"),t(Pl,"class","ml-5 map-gcv info-pop"),S(Pl.src,lc="/assets/Frame 15.png")||t(Pl,"src",lc),t(Pl,"alt",""),T(Lr,"font-family","'Public Sans', sans-serif"),t(Lr,"class","flex items-center text-[#2E3855] text-lg"),t(kl,"class","font-bold text-xl"),T(ei,"font-family","'Public Sans', sans-serif"),t(ei,"class","text-[#2E3855] text-lg"),t(Or,"class","w-1/2"),t(Aa,"class","flex justify-between items-center w-full mt-[-50px]"),t(un,"class","mr-3"),S(un.src,sd="/assets/bar-chart.png")||t(un,"src",sd),t(un,"alt",""),t(Kr,"type","button"),T(Kr,"font-family","'Public Sans', sans-serif"),t(Kr,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Tl,"class","mr-3"),S(Tl.src,ti="/assets/bar-chart.png")||t(Tl,"src",ti),t(Tl,"alt",""),t(Sl,"type","button"),T(Sl,"font-family","'Public Sans', sans-serif"),t(Sl,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Yn,"class","flex"),t(Al,"class","mr-3"),S(Al.src,sf="/assets/bar-chart.png")||t(Al,"src",sf),t(Al,"alt",""),t(Jr,"type","button"),T(Jr,"font-family","'Public Sans', sans-serif"),t(Jr,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(fn,"class","mr-3"),S(fn.src,Ol="/assets/bar-chart (1).png")||t(fn,"src",Ol),t(fn,"alt",""),t(Fl,"type","button"),T(Fl,"font-family","'Public Sans', sans-serif"),t(Fl,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Cr,"class","flex justify-start"),t(Xr,"class","mr-3"),S(Xr.src,Po="/assets/book-open.png")||t(Xr,"src",Po),t(Xr,"alt",""),t(Oa,"href","https://www.host.nl/en/case/guichen-france/"),t(Oa,"target","_blank"),T(pn,"font-family","'Poppins', sans-serif"),t(pn,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(vn,"class","ml-5 map-case-study info-pop"),S(vn.src,Ri="/assets/Frame 15.png")||t(vn,"src",Ri),t(vn,"alt",""),t(Wn,"class","flex justify-start items-center mt-8 pl-2"),t(zn,"class","mb-2 text-lg font-light text-[#2E3855]"),t(Qr,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(Gr,"font-family","'Public Sans', sans-serif"),t(Gr,"class","mt-3 pl-2"),t(hs,"class","p-6"),S(To.src,gg="/assets/medres/pyrolysis.jpg")||t(To,"src",gg),t(To,"class","rounded-full w-16 h-16"),t(To,"alt",""),t(Kn,"class","mt-2 w-16"),T(Ll,"font-family","'Poppins', sans-serif"),t(Ll,"class","mt-0 font-bold text-lg leading-10 text-white"),T(ld,"font-family","'Public Sans', sans-serif"),t(ld,"class","text-white text-xl mt-1 tracking-wider"),t(Jn,"class","ml-5"),t(ni,"class","flex"),t(Fo,"class","mr-3"),S(Fo.src,mg="/assets/arrow-right-circle.png")||t(Fo,"src",mg),t(Fo,"alt",""),t(dr,"type","button"),t(dr,"onclick","toggleAlOff();"),T(dr,"font-family","'Public Sans', sans-serif"),t(dr,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(Ao,"href","#calculator"),t(Lo,"class","mr-3"),S(Lo.src,xg="/assets/arrow-right-circle.png")||t(Lo,"src",xg),t(Lo,"alt",""),t(Oo,"type","button"),T(Oo,"font-family","'Public Sans', sans-serif"),t(Oo,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(cu,"href","/green-energy/"),t(hc,"class","flex w-full"),t(Ca,"class","flex flex-col p-5"),t(So,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(qs,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(qs,"id","bottle"),t(Cl,"class","mr-2"),S(Cl.src,lf="/assets/x-circle.png")||t(Cl,"src",lf),t(Cl,"alt",""),t(Ui,"type","button"),t(Ui,"onclick","toggleElementOff('technology')"),T(Ui,"font-family","'Public Sans', sans-serif"),T(Ui,"box-shadow","8px 8px 8px -6px rgba(0, 0, 0, 0.3)"),t(Ui,"class","flex items-center justify-center text-[#2E3855] bg-white font-semibold rounded-lg rounded-t-none text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(mc,"class","relative left-[98%] rounded-r-2xl"),T(xc,"height","130px"),T(xc,"padding","20px"),T(xc,"margin-left","10%"),S(xc.src,bg="/assets/Group14.png")||t(xc,"src",bg),t(xc,"alt",""),t(Hi,"class","w-2/5 bg-[#E7F5F5] rounded-2xl"),T(od,"font-family","'Poppins', sans-serif"),t(od,"class","mt-0 mb-4 font-bold text-3xl leading-10 text-[#2E3855]"),t(bc,"class","font-bold text-xl"),t(Gl,"class","ml-5 map-gcv info-pop"),S(Gl.src,cf="/assets/Frame 15.png")||t(Gl,"src",cf),t(Gl,"alt",""),T(Go,"font-family","'Public Sans', sans-serif"),t(Go,"class","flex items-center text-[#2E3855] text-lg"),t(df,"class","font-bold text-xl"),T(dd,"font-family","'Public Sans', sans-serif"),t(dd,"class","text-[#2E3855] text-lg"),t(Co,"class","w-1/2"),t(Ga,"class","flex justify-between items-center w-full mt-[-50px]"),t(wc,"class","mr-3"),S(wc.src,Rv="/assets/bar-chart.png")||t(wc,"src",Rv),t(wc,"alt",""),t(yc,"type","button"),T(yc,"font-family","'Public Sans', sans-serif"),t(yc,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(fu,"class","mr-3"),S(fu.src,Zh="/assets/bar-chart.png")||t(fu,"src",Zh),t(fu,"alt",""),t(Ml,"type","button"),T(Ml,"font-family","'Public Sans', sans-serif"),t(Ml,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(ud,"class","flex"),t(Wi,"class","mr-3"),S(Wi.src,em="/assets/bar-chart.png")||t(Wi,"src",em),t(Wi,"alt",""),t(Yi,"type","button"),T(Yi,"font-family","'Public Sans', sans-serif"),t(Yi,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#FFD9D9] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(Ic,"class","mr-3"),S(Ic.src,tm="/assets/bar-chart (1).png")||t(Ic,"src",tm),t(Ic,"alt",""),t(Ec,"type","button"),T(Ec,"font-family","'Public Sans', sans-serif"),t(Ec,"class","flex items-center justify-center mt-5 text-[#2E3855] bg-[#D9F5E4] font-semibold rounded-lg text-sm p-2 pr-4 text-center inline-flex items-center mr-4"),t(fd,"class","flex justify-start"),t(pu,"class","mr-3"),S(pu.src,$v="/assets/book-open.png")||t(pu,"src",$v),t(pu,"alt",""),t(gu,"href","https://www.host.nl/en/case/guichen-france/"),t(gu,"target","_blank"),T(vu,"font-family","'Poppins', sans-serif"),t(vu,"class","mt-0 font-bold text-xl leading-10 text-[#2E3855]"),t(Dc,"class","ml-5 map-case-study info-pop"),S(Dc.src,qv="/assets/Frame 15.png")||t(Dc,"src",qv),t(Dc,"alt",""),t(Mo,"class","flex justify-start items-center mt-8 pl-2"),t(jo,"class","mb-2 text-lg font-light text-[#2E3855]"),t(pd,"class","max-w-md space-y-1 text-lg font-semibold text-[#2E3855] list-disc list-inside"),T(Vc,"font-family","'Public Sans', sans-serif"),t(Vc,"class","mt-3 pl-2"),t(gn,"class","p-6"),S(mu.src,sm="/assets/medres/pyrolysis.jpg")||t(mu,"src",sm),t(mu,"class","rounded-full w-16 h-16"),t(mu,"alt",""),t(gd,"class","mt-2 w-16"),T(xu,"font-family","'Poppins', sans-serif"),t(xu,"class","mt-0 font-bold text-lg leading-10 text-white"),T(bu,"font-family","'Public Sans', sans-serif"),t(bu,"class","text-white text-xl mt-1 tracking-wider"),t(hd,"class","ml-5"),t(vd,"class","flex"),t(wu,"class","mr-3"),S(wu.src,rm="/assets/arrow-right-circle.png")||t(wu,"src",rm),t(wu,"alt",""),t(ii,"type","button"),t(ii,"onclick","toggleAlOff();"),T(ii,"font-family","'Public Sans', sans-serif"),t(ii,"class","w-60 flex justify-center items-center mt-5 text-white bg-[#EC8B5A] font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(md,"href","#calculator"),t(Pc,"class","mr-3"),S(Pc.src,am="/assets/arrow-right-circle.png")||t(Pc,"src",am),t(Pc,"alt",""),t(Ki,"type","button"),T(Ki,"font-family","'Public Sans', sans-serif"),t(Ki,"class","w-52 h-[45px] flex justify-center items-center mt-5 text-white bg-[#2E3855] border border-1 border-white font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-10 mb-2"),t(pf,"href","/green-energy/"),t(Bo,"class","flex w-full"),t(No,"class","flex flex-col p-5"),t(ff,"class","bg-[#2E3855] rounded-b-2xl rounded-r-none h-[180px] absolute bottom-0 left-0 mb-0 w-full pl-2"),t(li,"class","cow-element pt-0 opacity-0 -translate-x-full h-[663px] absolute top-0 bg-white w-4/5 flex flex-col duration-300 transform rounded-l-2xl mt-10"),t(li,"id","technology"),t(Wt,"class","items-center rounded-2xl"),t(Wt,"id","cow-panel"),T(Wt,"z-index","30"),T(Wt,"position","relative"),T(Wt,"top","0px"),T(Wt,"left","0px"),T(Wt,"width","700px"),T(Wt,"height","0px"),t(jl,"id","cow-shadow"),t(jl,"class","bg-base-100"),T(jl,"width","1000px"),T(jl,"height","750px"),T(jl,"position","relative"),T(jl,"left","-1000px"),T(jl,"top","0px"),T(jl,"margin-bottom","-750px"),T(jl,"z-index","99"),t(ts,"id","map"),t(ts,"class","pt-10"),t(Eu,"class","mr-3"),S(Eu.src,nm="/assets/Group 7 (2).png")||t(Eu,"src",nm),t(Eu,"alt",""),t(Ji,"type","button"),t(Ji,"onclick","toggleElement('food')"),T(Ji,"font-family","'Public Sans', sans-serif"),T(Ji,"left","520px"),T(Ji,"top","-430px"),t(Ji,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(Sc,"class","mr-3"),S(Sc.src,Uv="/assets/manure 1.png")||t(Sc,"src",Uv),t(Sc,"alt",""),t(Xi,"type","button"),t(Xi,"onclick","toggleElement('cow')"),T(Xi,"font-family","'Public Sans', sans-serif"),T(Xi,"left","780px"),T(Xi,"top","-200px"),t(Xi,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2"),t(hn,"class","mr-3"),S(hn.src,Hv="/assets/pet bottle 1.png")||t(hn,"src",Hv),t(hn,"alt",""),t(Qi,"type","button"),t(Qi,"onclick","toggleElement('bottle')"),T(Qi,"font-family","'Public Sans', sans-serif"),T(Qi,"left","120px"),T(Qi,"top","-70px"),t(Qi,"class","techbuttons techbutton w-28 h-20 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-2 mb-2"),T(bd,"color","#ffffff"),T(bd,"font-size","18px"),T(bd,"margin","-5px 0px -5px -5px"),t(Xn,"type","button"),t(Xn,"onclick","toggleElement('technology')"),T(Xn,"font-family","'Public Sans', sans-serif"),T(Xn,"background","#2e3855"),T(Xn,"left","560px"),T(Xn,"top","-530px"),t(Xn,"class","techbuttons techbutton-dark w-40 h-12 flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-base rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mb-2 uppercase"),t(yr,"id","buttons"),T(yr,"z-index","99"),t(wd,"type","text"),t(wd,"placeholder","Search up waste..."),t(wd,"class","px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"),t(_d,"class","i-heroicons-outline-search"),t(Tc,"aria-label","search"),t(Tc,"class","btn btn-square btn-ghost ml-[-45px]"),t(yd,"class","inline-flex items-center justify-center"),t(Bl,"class","w-20 mr-3"),S(Bl.src,lm="/assets/Frame 19.svg")||t(Bl,"src",lm),t(Bl,"alt",""),T(Bl,"width","50px"),T(Bl,"height","50px"),t(Zi,"type","button"),t(Zi,"onclick","grow()"),T(Zi,"font-family","'Public Sans', sans-serif"),t(Zi,"class","growbutton ml-[10px] w-10 h-10 inline-flex items-center justify-center text-[#2E3855] bg-[#ffffffdd] font-semibold rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center mr-2 pl-5 mt-1"),t(Nl,"class","growbuttons inline-flex"),t(Nl,"id","full-screen-buttons"),T(Nl,"width","200px"),T(Nl,"position","relative"),T(Nl,"top","-10px"),T(Nl,"left","calc(100% - 300px)"),t(oi,"class","container duration-300 transform mx-auto w-full bg-cover bg-center bg-no-repeat bg-[url(/assets/field.png)] rounded-2xl"),T(oi,"padding-top","520px"),T(oi,"z-index","29"),t(oi,"id","field"),t(oi,"onclick","toggleAlOff();"),t(vf,"class","pt-10 rounded-2xl mb-10"),t(Vu,"class","h-80 p-6"),S(Vu.src,Yv="/assets/tech.png")||t(Vu,"src",Yv),t(Vu,"alt",""),t(gf,"class","bg-[#E7F5F5] md:w-2/5 w-full flex justify-center rounded-l-2xl"),T(Pu,"font-family","'Poppins', sans-serif"),t(Pu,"class","uppercase pb-0 text-pfp-green font-bold"),T(Ac,"font-family","'Poppins', sans-serif"),t(Ac,"class","text-3xl font-bold text-[#2e3855] font-Poppins mt-5"),T(ku,"font-family","'Public Sans', sans-serif"),t(ku,"class","text-[#2E3855] tracking-wider mt-5"),t(Ma,"class","md:w-3/5 w-full p-14 pt-8 pb-6"),t(Id,"class","flex md:flex-row flex-col items-center rounded-2xl bg-white w-full"),t(Ed,"class","container mx-auto rounded-2xl"),t(mn,"id","calc-shadow-l"),t(mn,"class","bg-base-100"),T(mn,"width","1000px"),T(mn,"height","750px"),T(mn,"position","relative"),T(mn,"left","-1000px"),T(mn,"top","0px"),T(mn,"margin-bottom","-750px"),T(mn,"z-index","9"),t(Rl,"id","calc-shadow-r"),t(Rl,"class","bg-base-100"),T(Rl,"width","1000px"),T(Rl,"height","750px"),T(Rl,"position","relative"),T(Rl,"right","-100%"),T(Rl,"top","0px"),T(Rl,"margin-bottom","-750px"),T(Rl,"z-index","9"),t(eo,"class","rounded-2xl pt-10"),t(eo,"id","calculator"),t(Vd,"class","uppercase text-xl m-5"),t(Pd,"id","waste-type1"),t(hf,"id","waste-type2"),t(qo,"class","text-2xl font-bold leading-10"),t(Dd,"class","bg-[#E7F5F5] rounded-2xl text-center p-6 mb-10 text-[#2E3855]"),S(Sd.src,Wv="/assets/medres/pyrolysis.jpg")||t(Sd,"src",Wv),t(Sd,"class","rounded-full w-24 h-24"),t(Sd,"id","matched-img"),t(Sd,"alt",""),t(mf,"class","mx-auto"),t(xf,"class","uppercase text-xl m-5 mt-6"),t(Tu,"class","text-2xl font-bold leading-6"),t(Tu,"id","matched-tech"),t(Td,"class","text-center text-white"),t(kd,"class","bg-[#2E3855] rounded-2xl flex flex-col justify-center p-6 py-12 mb-6"),t(so,"class","w-1/3 flex-col justify-center"),T(so,"font-family","'Poppins', sans-serif"),t(Au,"class","ml-5 calc-gcv info-pop"),S(Au.src,zv="/assets/info.png")||t(Au,"src",zv),t(Au,"alt",""),T(Ad,"font-family","'Poppins', sans-serif"),t(Ad,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(bf,"id","energycontent"),t(Oc,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(Uo,"class","flex justify-center"),t(Ou,"class","ml-5 calc-heat-produced info-pop"),S(Ou.src,im="/assets/info.png")||t(Ou,"src",im),t(Ou,"alt",""),T(Od,"font-family","'Poppins', sans-serif"),t(Od,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(Ld,"id","heatproduced"),t(Lc,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(Fd,"class","flex justify-center mb-2"),t(Lu,"class","ml-5 calc-heat-savings info-pop"),S(Lu.src,Kv="/assets/info.png")||t(Lu,"src",Kv),t(Lu,"alt",""),T(Gd,"font-family","'Poppins', sans-serif"),t(Gd,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(yf,"id","heatsavingspa"),t(Md,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(Cd,"class","flex justify-center mb-6"),t(Gc,"class","ml-5 calc-electricity-produced info-pop"),S(Gc.src,om="/assets/info.png")||t(Gc,"src",om),t(Gc,"alt",""),T(Ho,"font-family","'Poppins', sans-serif"),t(Ho,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white mb-5 text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(wf,"id","electricityproduced"),t(ro,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] mb-5 text-center"),t(jd,"class","flex justify-center mb-2"),t($l,"class","ml-5 calc-electrical-savings info-pop"),S($l.src,cm="/assets/info.png")||t($l,"src",cm),t($l,"alt",""),T(Nd,"font-family","'Poppins', sans-serif"),t(Nd,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(Rd,"id","electricitysavingspa"),t(Bd,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(Yo,"class","flex justify-center mb-6"),t(Jv,"class","ml-5 calc-char info-pop"),S(Jv.src,b2="/assets/info.png")||t(Jv,"src",b2),t(Jv,"alt",""),T($d,"font-family","'Poppins', sans-serif"),t($d,"class","pr-8 flex justify-end items-center p-4 relative w-1/2 bg-[#2E3855] rounded-l-2xl text-xl leading-10 text-white text-center after:absolute after:-right-3 after:top-[35%] after:content[''] after:block after:border-solid after:border-l-8 after:border-b-8 after:border-t-8 after:border-t-transparent after:border-b-transparent after:border-l-[#2E3855] z-20 tracking-wider text-[#2E3855]"),t(wh,"id","fertiliser"),t(Xv,"class","absolute p-4 relative w-1/2 rounded-r-lg tracking-wider bg-[#E7F5F5] text-xl leading-10 text-[#2E3855] text-center"),t(ci,"class","flex justify-center mb-6"),t(Mr,"class","w-2/3 flex-col justify-center mx-auto pl-10 mt-0"),t($o,"class","flex flex-row gap-8 items-center p-5 pt-1 mt-[-20px]"),t(to,"class","duration-300 transition opacity-0 container mb-[-630px] bg-white p-16 pb-6 rounded-b-2xl"),t(to,"id","results"),T(Qv,"font-family","'Poppins', sans-serif"),t(Qv,"class","card text-3xl font-bold text-[#2e3855] font-Poppins text-center"),T(_f,"font-family","'Public Sans', sans-serif"),t(_f,"class","text-[#2E3855] tracking-wider mt-5 pl-24 pr-24"),t(Ev,"class","text-center pb-10"),t(Iv,"class","h-60"),t(Iv,"id","calc-img"),S(Iv.src,y2="/assets/cow 1 (1).png")||t(Iv,"src",y2),t(Iv,"alt",""),t(_h,"class","bg-[#E7F5F5] w-1/3 flex justify-center rounded-2xl mr-8"),t(Zv,"type","button"),t(Zv,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Df,"class","bg-[#E7F5F5]"),Df.__value="Cheese production (37% milk)",Df.value=Df.__value,t(Vf,"class","bg-[#E7F5F5]"),Vf.__value="Butter production (29% milk)",Vf.value=Vf.__value,t(Pf,"class","bg-[#E7F5F5]"),Pf.__value="Ice cream (13% milk)",Pf.value=Pf.__value,t(kf,"class","bg-[#E7F5F5]"),kf.__value="Beer production",kf.value=kf.__value,t(Sf,"class","bg-[#E7F5F5]"),Sf.__value="Wine production",Sf.value=Sf.__value,t(Tf,"class","bg-[#E7F5F5]"),Tf.__value="Spirits production",Tf.value=Tf.__value,t(Af,"class","bg-[#E7F5F5]"),Af.__value="Ethanol production",Af.value=Af.__value,t(Ff,"class","bg-[#E7F5F5]"),Ff.__value="Pulp production",Ff.value=Ff.__value,t(Of,"class","bg-[#E7F5F5]"),Of.__value="Juice production",Of.value=Of.__value,t(Lf,"class","bg-[#E7F5F5]"),Lf.__value="Tomato ketchup",Lf.value=Lf.__value,t(Cf,"class","bg-[#E7F5F5]"),Cf.__value="Bovine meat",Cf.value=Cf.__value,t(Gf,"class","bg-[#E7F5F5]"),Gf.__value="Pig meat",Gf.value=Gf.__value,t(Mf,"class","bg-[#E7F5F5]"),Mf.__value="Sheep meat",Mf.value=Mf.__value,t(jf,"class","bg-[#E7F5F5]"),jf.__value="Frozen potatoes",jf.value=jf.__value,t(Nf,"class","bg-[#E7F5F5]"),Nf.__value="Prepared potatoes (crisps)",Nf.value=Nf.__value,t(Bf,"class","bg-[#E7F5F5]"),Bf.__value="Potato starch",Bf.value=Bf.__value,t(Rf,"class","bg-[#E7F5F5]"),Rf.__value="Dried potatoes",Rf.value=Rf.__value,t($f,"class","bg-[#E7F5F5]"),$f.__value="Sugar production",$f.value=$f.__value,t(qf,"class","bg-[#E7F5F5]"),qf.__value="Yeast production",qf.value=qf.__value,t(Uf,"class","bg-[#E7F5F5]"),Uf.__value="Vegetable oils production",Uf.value=Uf.__value,t(Hf,"class","bg-[#E7F5F5]"),Hf.__value="Biodiesel production",Hf.value=Hf.__value,t(Yf,"class","bg-[#E7F5F5]"),Yf.__value="Pig manure",Yf.value=Yf.__value,t(Wf,"class","bg-[#E7F5F5]"),Wf.__value="Dairy Cattle",Wf.value=Wf.__value,t(zf,"class","bg-[#E7F5F5]"),zf.__value="Non diary cattle",zf.value=zf.__value,t(Kf,"class","bg-[#E7F5F5]"),Kf.__value="Buffalo",Kf.value=Kf.__value,t(Jf,"class","bg-[#E7F5F5]"),Jf.__value="Chicken layer manure",Jf.value=Jf.__value,t(Xf,"class","bg-[#E7F5F5]"),Xf.__value="Chicken broiler manure",Xf.value=Xf.__value,t(Qf,"class","bg-[#E7F5F5]"),Qf.__value="Sheep",Qf.value=Qf.__value,t(Zf,"class","bg-[#E7F5F5]"),Zf.__value="Food waste",Zf.value=Zf.__value,t(ep,"class","bg-[#E7F5F5]"),ep.__value="Fish waste",ep.value=ep.__value,t(tp,"class","bg-[#E7F5F5]"),tp.__value="Coffee grounds",tp.value=tp.__value,t(sp,"class","bg-[#E7F5F5]"),sp.__value="Crop residues",sp.value=sp.__value,t(rp,"class","bg-[#E7F5F5]"),rp.__value="Maize silage",rp.value=rp.__value,t(ap,"class","bg-[#E7F5F5]"),ap.__value="Cereal",ap.value=ap.__value,t(np,"class","bg-[#E7F5F5]"),np.__value="Grass silage",np.value=np.__value,t(lp,"class","bg-[#E7F5F5]"),lp.__value="Pulp & Paper Waste",lp.value=lp.__value,t(ip,"class","bg-[#E7F5F5]"),ip.__value="Textile Waste",ip.value=ip.__value,t(op,"class","bg-[#E7F5F5]"),op.__value="PE Plastic",op.value=op.__value,t(cp,"class","bg-[#E7F5F5]"),cp.__value="SRF",cp.value=cp.__value,t(dp,"class","bg-[#E7F5F5]"),dp.__value="RDF",dp.value=dp.__value,t(up,"class","bg-[#E7F5F5]"),up.__value="PP Plastic",up.value=up.__value,t(fp,"class","bg-[#E7F5F5]"),fp.__value="PS Plastic",fp.value=fp.__value,t(pp,"class","bg-[#E7F5F5]"),pp.__value="PVC Plastic",pp.value=pp.__value,t(vp,"class","bg-[#E7F5F5]"),vp.__value="PET Plastic",vp.value=vp.__value,t(gp,"class","bg-[#E7F5F5]"),gp.__value="Rubber",gp.value=gp.__value,t(hp,"class","bg-[#E7F5F5]"),hp.__value="Wood waste",hp.value=hp.__value,t(mp,"class","bg-[#E7F5F5]"),mp.__value="Municipal Solid Waste (MSW)",mp.value=mp.__value,t(xp,"class","bg-[#E7F5F5]"),xp.__value="Medical Waste",xp.value=xp.__value,t(bp,"class","bg-[#E7F5F5]"),bp.__value="Ceramics",bp.value=bp.__value,t(yp,"class","bg-[#E7F5F5]"),yp.__value="Sand",yp.value=yp.__value,t(wp,"class","bg-[#E7F5F5]"),wp.__value="Dust",wp.value=wp.__value,t(_p,"class","bg-[#E7F5F5]"),_p.__value="Glass",_p.value=_p.__value,t(Ep,"class","bg-[#E7F5F5]"),Ep.__value="Metals",Ep.value=Ep.__value,t(Ye,"id","colorselector"),t(Ye,"class","w-full bg-transparent text-center border-0"),t(Eh,"class","button dropdown w-1/2 flex justify-between z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(If,"class","inline-flex rounded-xl shadow-sm w-full"),t(If,"role","group"),t(eg,"type","button"),t(eg,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Dp,"class","bg-[#E7F5F5]"),Dp.__value="10",Dp.value=Dp.__value,t(Vp,"class","bg-[#E7F5F5]"),Vp.__value="100",Vp.value=Vp.__value,t(Pp,"class","bg-[#E7F5F5]"),Pp.__value="1000",Pp.value=Pp.__value,t(kp,"class","bg-[#E7F5F5]"),kp.__value="10000",kp.value=kp.__value,t(Sp,"class","bg-[#E7F5F5]"),Sp.__value="20000",Sp.value=Sp.__value,t(Tp,"class","bg-[#E7F5F5]"),Tp.__value="40000",Tp.value=Tp.__value,t(Ap,"class","bg-[#E7F5F5]"),Ap.__value="60000",Ap.value=Ap.__value,t(Ko,"id","colorselector2"),t(Ko,"class","w-full bg-transparent text-center focus-0 after:border-0 before:border-0 after:border-[#E7F5F5]"),t(Ih,"class","button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(Ip,"class","inline-flex rounded-xl shadow-sm w-full mt-5"),t(Ip,"role","group"),t(tg,"type","button"),t(tg,"class","text-xl w-1/2 h-16 text-white bg-[#2E3855] rounded-l-xl"),t(Op,"class","bg-[#E7F5F5]"),Op.__value="electricity",Op.value=Op.__value,t(Lp,"class","bg-[#E7F5F5]"),Lp.__value="heating-cooling",Lp.value=Lp.__value,t(Cp,"class","bg-[#E7F5F5]"),Cp.__value="carbon-credits",Cp.value=Cp.__value,t(Gp,"class","bg-[#E7F5F5]"),Gp.__value="fertiliser",Gp.value=Gp.__value,t(Cu,"id","colorselector3"),t(Cu,"class","w-full bg-transparent text-center"),t(Dh,"class","button dropdown w-1/2 flex justify-between flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-xl font-semibold text-center text-[#2E3855] bg-[#E7F5F5] rounded-r-xl hover:bg-gray-200 border-0"),t(Fp,"class","inline-flex rounded-xl shadow-sm w-full mt-5"),t(Fp,"role","group"),t(zo,"class","w-2/3 pl-12 pr-0 md:mt-0 mt-5 duration-300 transform"),t(zo,"id","calc-selectors"),T(Ef,"font-family","'Poppins', sans-serif"),t(Ef,"class","flex md:flex-row flex-col items-center rounded-lg bg-white w-full mt-5"),t(sg,"class","text-4xl font-bold"),t(sg,"id","feasible"),T(jp,"font-family","'Public Sans', sans-serif"),t(jp,"class","text-[#2E3855] tracking-wider mt-5"),t(Mp,"class","w-[784px] ml-80 pl-16 h-60 p-10 pt-16 md:mt-0 mt-5 duration-300 transform absolute -translate-x-full opacity-0 -translate-y-full bg-[#E7F5F5] rounded-2xl"),t(Mp,"id","calc-message"),t(rg,"class","mr-3"),S(rg.src,w2="/assets/arrow-right-circle.png")||t(rg,"src",w2),t(rg,"alt",""),t(Mu,"id","call-button"),t(Mu,"class","duration-300 transform -translate-x-full opacity-0 font-bold mt-16 w-[375px] p-4 hover:bg-pfp-green bg-pfp-orange rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(Mu,"href","/contact"),t(ag,"class","mr-3"),S(ag.src,_2="/assets/arrow-right-circle.png")||t(ag,"src",_2),t(ag,"alt",""),t(ju,"id","call-button2"),t(ju,"class","duration-300 transform -translate-x-full opacity-0 font-bold mt-16 ml-1 w-[350px] p-4 hover:bg-pfp-green bg-pfp-navy rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(ju,"href","/green-energy/"),t(ng,"class","mr-4 h-6"),S(ng.src,E2="/assets/calculator.png")||t(ng,"src",E2),t(ng,"alt",""),t(qd,"id","calc-button"),t(qd,"class","duration-300 transform -translate-x-[338px] font-bold mt-16 w-1/3 p-4 hover:bg-pfp-green bg-pfp-orange rounded-xl flex justify-center items-center text-white tracking-wider font-semibold text-2xl"),t(qd,"href","/explore/#calculate"),t(qd,"onclick","calculate();"),t(Gu,"class","flex justify gap-16 w-full"),t(Wo,"class","container rounded-2xl bg-white p-20 pt-12 pb-16 z-23"),t(Wo,"id","growcalc"),t(Jo,"id","calc-spacer"),t(Jo,"class","bg-base-100"),T(Jo,"width","1000px"),T(Jo,"height","750px"),T(Jo,"position","relative"),T(Jo,"right","-100%"),T(Jo,"top","0px"),T(Jo,"margin-bottom","-750px"),T(Jo,"z-index","9"),t(_v,"id","calculate"),t(Vh,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ph,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(lg.src,I2="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(lg,"src",I2),t(lg,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(lg,"class","h-6 w-6"),S(ig.src,D2="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ig,"src",D2),t(ig,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(ig,"class","h-6 w-6"),S(og.src,V2="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(og,"src",V2),t(og,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(og,"class","h-6 w-6"),t(Nu,"class","flex items-center gap-5"),t(Vv,"class","flex-1 flex justify-end items-center gap-10"),t(Dv,"class","w-[1260px] flex justify-between items-center pt-[30px] pb-[50px]"),t(j,"class","h-full max-w-[1260px]"),t(y,"class","flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap mt-8")},m(_t,Zr){Qe(_t,l,Zr),e(l,i),e(i,u),e(l,v),e(l,g),e(g,x),e(l,m),e(l,h),e(h,E),e(l,w),e(l,V),e(V,D),Qe(_t,I,Zr),Qe(_t,_,Zr),Qe(_t,O,Zr),Qe(_t,k,Zr),Qe(_t,A,Zr),Qe(_t,G,Zr),Qe(_t,M,Zr),Qe(_t,b,Zr),Qe(_t,L,Zr),Qe(_t,y,Zr),e(y,N),e(N,F),e(y,C),e(y,j),e(j,q),e(q,K),e(K,$),e($,ce),e(ce,Se),e($,z),e($,R),e(R,se),e($,ye),e($,ae),e(ae,Ke),e($,we),e($,te),e(te,ve),e(te,Ve),e(te,ie),e(ie,_e),e(K,Ce),e(K,Y),e(Y,Q),e(Q,Ee),e(Y,pe),e(Y,me),e(Y,$e),e(Y,We),e(Y,Ge),e(Y,ee),e(Y,Ie),e(Y,he),e(Y,Xe),e(Y,P),e(Y,Z),e(Y,oe),e(Y,ne),e(Y,be),e(Y,Ae),e(Y,De),e(j,ft),e(j,ke),e(ke,Ze),e(Ze,Nt),e(ke,Lt),e(ke,Oe),e(Oe,mt),e(ke,Pt),e(ke,Le),e(Le,at),e(at,ct),e(ct,Ct),e(at,Dt),e(at,pt),e(pt,Bt),e(Le,kt),e(Le,re),e(re,nt),e(nt,Tt),e(re,it),e(re,dt),e(dt,Zt),e(Le,qt),e(Le,ot),e(ot,xt),e(xt,et),e(ot,It),e(ot,Gt),e(Gt,es),e(Le,Vt),e(Le,Ue),e(Ue,ut),e(ut,$t),e(Ue,bt),e(Ue,lt),e(lt,At),e(Le,yt),e(Le,Ut),e(Ut,zt),e(zt,Ft),e(Ut,Jt),e(Ut,Ht),e(Ht,Xt),e(ke,ht),e(ke,Js),e(Js,Vs),e(ke,Kt),e(ke,st),e(st,jt),e(st,ss),e(st,Xs),e(Xs,Ps),e(st,Qt),e(st,wt),e(wt,Qs),e(st,ks),e(st,ns),e(ns,jr),e(st,Na),e(st,ms),e(ms,ur),e(st,_r),e(st,ls),e(ke,Er),e(ke,Yt),e(Yt,Ss),e(Ss,Cs),e(Yt,fr),e(Yt,ta),e(ta,di),e(Yt,Gs),e(Yt,is),e(is,sa),e(Yt,pr),e(Yt,us),e(us,sl),e(Yt,Ba),e(Yt,xs),e(xs,ra),e(Yt,_n),e(Yt,aa),e(aa,Zs),e(ke,ui),e(ke,En),e(En,bs),e(bs,na),e(ke,la),e(ke,Ts),e(Ts,Ir),e(Ir,Ra),e(j,ia),e(j,ts),e(ts,vr),e(vr,er),e(er,oa),e(oa,os),e(er,Us),e(er,cs),e(cs,rl),e(rl,fi),e(cs,gr),e(cs,rs),e(rs,pi),e(cs,In),e(cs,Nr),e(Nr,al),e(Nr,nl),e(Nr,lo),e(cs,vi),e(cs,ys),e(ys,Dr),e(ts,$a),e(ts,Wt),e(Wt,Vr),e(Vr,Hs),e(Wt,tr),e(Wt,As),e(As,ca),e(ca,da),e(da,ua),e(ca,gi),e(ca,Ys),e(Ys,fs),e(As,ll),e(As,ws),e(ws,hr),e(hr,Dn),e(Dn,sr),e(hr,il),e(hr,Pr),e(Pr,as),e(as,Ws),e(Pr,js),e(Pr,ps),e(ps,kr),e(kr,ol),e(ps,hi),e(ps,rr),e(Pr,_s),e(Pr,Sr),e(Sr,pa),e(pa,Vn),e(Sr,cl),e(ws,mi),e(ws,vs),e(vs,Es),e(Es,Br),e(Es,dl),e(vs,kn),e(vs,zs),e(zs,nr),e(zs,va),e(ws,io),e(ws,ul),e(ul,Sn),e(Sn,qa),e(Sn,Wc),e(ul,zc),e(ul,Rr),e(Rr,xi),e(Rr,oo),e(ws,bi),e(ws,lr),e(lr,ds),e(lr,An),e(lr,Ha),e(Ha,yi),e(yi,wi),e(lr,ga),e(lr,ir),e(ws,Kc),e(ws,$r),e($r,Fn),e(Fn,Jc),e($r,_i),e($r,ha),e(ha,Ya),e(Ya,On),e(ha,Ju),e(ha,uo),e(uo,Wa),e(As,za),e(As,ma),e(ma,Is),e(Is,xa),e(xa,fo),e(fo,qr),e(xa,ba),e(xa,ya),e(ya,Hl),e(Hl,Ei),e(ya,Ii),e(ya,Yl),e(Yl,Di),e(Is,Ln),e(Is,or),e(or,Ja),e(Ja,Cn),e(Cn,Xa),e(Cn,Xc),e(or,po),e(or,fl),e(fl,Ur),e(Ur,Ds),e(Ur,Vi),e(Wt,zd),e(Wt,Ks),e(Ks,xr),e(xr,Qa),e(Qa,Pi),e(xr,ki),e(xr,Za),e(Za,en),e(Ks,pl),e(Ks,gs),e(gs,_a),e(_a,Si),e(Si,Ea),e(_a,Qc),e(_a,cr),e(cr,Ns),e(Ns,vl),e(cr,Gn),e(cr,Fs),e(Fs,Ia),e(Ia,Zc),e(Fs,gl),e(Fs,Bs),e(cr,Kd),e(cr,Tr),e(Tr,Ar),e(Ar,Jd),e(Tr,ed),e(gs,Fr),e(gs,tn),e(tn,sn),e(sn,hl),e(sn,zl),e(tn,Xd),e(tn,Hr),e(Hr,Rs),e(Hr,Mn),e(gs,Ai),e(gs,Fi),e(Fi,Yr),e(Yr,jn),e(Yr,Qd),e(Fi,go),e(Fi,$s),e($s,rn),e($s,Zd),e(gs,ec),e(gs,Nn),e(Nn,an),e(Nn,eu),e(Nn,Oi),e(Oi,Da),e(Da,Bn),e(Nn,xl),e(Nn,ho),e(gs,Rn),e(gs,bl),e(bl,mo),e(mo,xo),e(bl,Va),e(bl,$n),e($n,nn),e(nn,tu),e($n,sc),e($n,yl),e(yl,rc),e(Ks,wl),e(Ks,Kl),e(Kl,qn),e(qn,Pa),e(Pa,bo),e(bo,Li),e(Pa,_l),e(Pa,ka),e(ka,El),e(El,su),e(ka,Jl),e(ka,Un),e(Un,ru),e(qn,Ci),e(qn,br),e(br,on),e(on,Sa),e(Sa,Gi),e(Sa,Mi),e(br,ef),e(br,yo),e(yo,Ta),e(Ta,Ql),e(Ta,Il),e(Wt,Hn),e(Wt,qs),e(qs,Wr),e(Wr,Dl),e(Dl,tf),e(Wr,au),e(Wr,zr),e(zr,ji),e(qs,Zl),e(qs,hs),e(hs,Aa),e(Aa,Eo),e(Eo,Vl),e(Aa,ac),e(Aa,Or),e(Or,cn),e(cn,nu),e(Or,nc),e(Or,Lr),e(Lr,dn),e(dn,Ni),e(Lr,Io),e(Lr,Pl),e(Or,ic),e(Or,ei),e(ei,kl),e(kl,Fa),e(ei,oc),e(hs,lu),e(hs,Yn),e(Yn,Kr),e(Kr,un),e(Kr,Bi),e(Yn,cc),e(Yn,Sl),e(Sl,Tl),e(Sl,iu),e(hs,si),e(hs,Cr),e(Cr,Jr),e(Jr,Al),e(Jr,ri),e(Cr,Do),e(Cr,Fl),e(Fl,fn),e(Fl,Vo),e(hs,dc),e(hs,Wn),e(Wn,Xr),e(Wn,rd),e(Wn,pn),e(pn,Oa),e(Oa,ad),e(Wn,uc),e(Wn,vn),e(hs,ai),e(hs,Gr),e(Gr,zn),e(zn,rf),e(Gr,$i),e(Gr,Qr),e(Qr,fc),e(fc,pc),e(Qr,ko),e(Qr,La),e(La,vc),e(qs,gc),e(qs,So),e(So,Ca),e(Ca,ni),e(ni,Kn),e(Kn,To),e(ni,Lv),e(ni,Jn),e(Jn,Ll),e(Ll,nd),e(Jn,hg),e(Jn,ld),e(ld,ou),e(Ca,Cv),e(Ca,hc),e(hc,Ao),e(Ao,dr),e(dr,Fo),e(dr,Gv),e(hc,af),e(hc,cu),e(cu,Oo),e(Oo,Lo),e(Oo,Mv),e(Wt,nf),e(Wt,li),e(li,mc),e(mc,qi),e(qi,du),e(mc,jv),e(mc,Ui),e(Ui,Cl),e(li,Nv),e(li,gn),e(gn,Ga),e(Ga,Hi),e(Hi,xc),e(Ga,id),e(Ga,Co),e(Co,od),e(od,cd),e(Co,yg),e(Co,Go),e(Go,bc),e(bc,Bv),e(Go,of),e(Go,Gl),e(Co,uu),e(Co,dd),e(dd,df),e(df,wg),e(dd,Bp),e(gn,_g),e(gn,ud),e(ud,yc),e(yc,wc),e(yc,Eg),e(ud,Ig),e(ud,Ml),e(Ml,fu),e(Ml,Dg),e(gn,Vg),e(gn,fd),e(fd,Yi),e(Yi,Wi),e(Yi,_c),e(fd,Rp),e(fd,Ec),e(Ec,Ic),e(Ec,Pg),e(gn,kg),e(gn,Mo),e(Mo,pu),e(Mo,$p),e(Mo,vu),e(vu,gu),e(gu,zi),e(Mo,qp),e(Mo,Dc),e(gn,Sg),e(gn,Vc),e(Vc,jo),e(jo,Tg),e(Vc,Ag),e(Vc,pd),e(pd,hu),e(hu,Up),e(pd,Fg),e(pd,Hp),e(Hp,uf),e(li,Og),e(li,ff),e(ff,No),e(No,vd),e(vd,gd),e(gd,mu),e(vd,Lg),e(vd,hd),e(hd,xu),e(xu,Yp),e(hd,Wp),e(hd,bu),e(bu,Cg),e(No,yu),e(No,Bo),e(Bo,md),e(md,ii),e(ii,wu),e(ii,xd),e(Bo,Gg),e(Bo,pf),e(pf,Ki),e(Ki,Pc),e(Ki,Mg),e(ts,_u),e(ts,jl),e(j,jg),e(j,vf),e(vf,oi),e(oi,kc),e(kc,yr),e(yr,Ji),e(Ji,Eu),e(yr,Ng),e(yr,Xi),e(Xi,Sc),e(yr,Bg),e(yr,Qi),e(Qi,hn),e(yr,zp),e(yr,Xn),e(Xn,bd),e(bd,Rg),e(yr,Iu),e(yr,Kp),e(Kp,$g),e(yr,qg),e(yr,Du),e(Du,Jp),e(kc,Ug),e(kc,Xp),e(Xp,Ro),e(kc,Hg),e(kc,Nl),e(Nl,yd),e(yd,wd),e(yd,Qp),e(yd,Tc),e(Tc,_d),e(Nl,Zp),e(Nl,Zi),e(Zi,Bl),e(j,Yg),e(j,eo),e(eo,Ed),e(Ed,Id),e(Id,gf),e(gf,Vu),e(Id,Wg),e(Id,Ma),e(Ma,ev),e(ev,tv),e(Ma,zg),e(Ma,Pu),e(Pu,Kg),e(Ma,sv),e(Ma,Ac),e(Ac,Jg),e(Ac,Xg),e(Ac,rv),e(Ma,av),e(Ma,ku),e(ku,Qg),e(eo,nv),e(eo,mn),e(eo,Zg),e(eo,Rl),e(j,eh),e(j,to),e(to,$o),e($o,so),e(so,Dd),e(Dd,Vd),e(Vd,th),e(Dd,lv),e(Dd,qo),e(qo,Pd),e(Pd,sh),e(qo,iv),e(qo,ov),e(qo,cv),e(qo,hf),e(hf,rh),e(so,Su),e(so,kd),e(kd,mf),e(mf,Sd),e(kd,dv),e(kd,Td),e(Td,xf),e(xf,Fc),e(Td,ah),e(Td,Tu),e(Tu,nh),e($o,lh),e($o,Mr),e(Mr,Uo),e(Uo,Ad),e(Ad,uv),e(Ad,Au),e(Uo,ih),e(Uo,Oc),e(Oc,bf),e(bf,fv),e(Oc,pv),e(Mr,vv),e(Mr,Fd),e(Fd,Od),e(Od,Fu),e(Od,Ou),e(Fd,oh),e(Fd,Lc),e(Lc,Ld),e(Ld,ch),e(Lc,dh),e(Mr,Cc),e(Mr,Cd),e(Cd,Gd),e(Gd,uh),e(Gd,Lu),e(Cd,gv),e(Cd,Md),e(Md,hv),e(Md,yf),e(yf,mv),e(Md,fh),e(Mr,xv),e(Mr,jd),e(jd,Ho),e(Ho,bv),e(Ho,Gc),e(jd,ph),e(jd,ro),e(ro,wf),e(wf,vh),e(ro,gh),e(Mr,yv),e(Mr,Yo),e(Yo,Nd),e(Nd,hh),e(Nd,$l),e(Yo,mh),e(Yo,Bd),e(Bd,xh),e(Bd,Rd),e(Rd,bh),e(Bd,wv),e(Mr,yh),e(Mr,ci),e(ci,$d),e($d,u0),e($d,Jv),e(ci,f0),e(ci,Xv),e(Xv,wh),e(wh,p0),e(Xv,v0),e(j,g0),e(j,_v),e(_v,Wo),e(Wo,Ev),e(Ev,Qv),e(Qv,h0),e(Ev,m0),e(Ev,_f),e(_f,x0),e(_f,b0),e(_f,y0),e(Wo,w0),e(Wo,Ef),e(Ef,_h),e(_h,Iv),e(Ef,_0),e(Ef,zo),e(zo,If),e(If,Zv),e(Zv,E0),e(If,I0),e(If,Eh),e(Eh,Ye),e(Ye,Df),e(Df,D0),e(Ye,Vf),e(Vf,V0),e(Ye,Pf),e(Pf,P0),e(Ye,kf),e(kf,k0),e(Ye,Sf),e(Sf,S0),e(Ye,Tf),e(Tf,T0),e(Ye,Af),e(Af,A0),e(Ye,Ff),e(Ff,F0),e(Ye,Of),e(Of,O0),e(Ye,Lf),e(Lf,L0),e(Ye,Cf),e(Cf,C0),e(Ye,Gf),e(Gf,G0),e(Ye,Mf),e(Mf,M0),e(Ye,jf),e(jf,j0),e(Ye,Nf),e(Nf,N0),e(Ye,Bf),e(Bf,B0),e(Ye,Rf),e(Rf,R0),e(Ye,$f),e($f,$0),e(Ye,qf),e(qf,q0),e(Ye,Uf),e(Uf,U0),e(Ye,Hf),e(Hf,H0),e(Ye,Yf),e(Yf,Y0),e(Ye,Wf),e(Wf,W0),e(Ye,zf),e(zf,z0),e(Ye,Kf),e(Kf,K0),e(Ye,Jf),e(Jf,J0),e(Ye,Xf),e(Xf,X0),e(Ye,Qf),e(Qf,Q0),e(Ye,Zf),e(Zf,Z0),e(Ye,ep),e(ep,ex),e(Ye,tp),e(tp,tx),e(Ye,sp),e(sp,sx),e(Ye,rp),e(rp,rx),e(Ye,ap),e(ap,ax),e(Ye,np),e(np,nx),e(Ye,lp),e(lp,lx),e(Ye,ip),e(ip,ix),e(Ye,op),e(op,ox),e(Ye,cp),e(cp,cx),e(Ye,dp),e(dp,dx),e(Ye,up),e(up,ux),e(Ye,fp),e(fp,fx),e(Ye,pp),e(pp,px),e(Ye,vp),e(vp,vx),e(Ye,gp),e(gp,gx),e(Ye,hp),e(hp,hx),e(Ye,mp),e(mp,mx),e(Ye,xp),e(xp,xx),e(Ye,bp),e(bp,bx),e(Ye,yp),e(yp,yx),e(Ye,wp),e(wp,wx),e(Ye,_p),e(_p,_x),e(Ye,Ep),e(Ep,Ex),e(zo,Ix),e(zo,Ip),e(Ip,eg),e(eg,Dx),e(Ip,Vx),e(Ip,Ih),e(Ih,Ko),e(Ko,Dp),e(Dp,Px),e(Ko,Vp),e(Vp,kx),e(Ko,Pp),e(Pp,Sx),e(Ko,kp),e(kp,Tx),e(Ko,Sp),e(Sp,Ax),e(Ko,Tp),e(Tp,Fx),e(Ko,Ap),e(Ap,Ox),e(zo,Lx),e(zo,Fp),e(Fp,tg),e(tg,Cx),e(Fp,Gx),e(Fp,Dh),e(Dh,Cu),e(Cu,Op),e(Op,Mx),e(Cu,Lp),e(Lp,jx),e(Cu,Cp),e(Cp,Nx),e(Cu,Gp),e(Gp,Bx),e(zo,Rx),e(zo,Dm),e(Wo,$x),e(Wo,Mp),e(Mp,sg),e(sg,qx),e(Mp,Ux),e(Mp,jp),e(jp,Hx),e(jp,Yx),e(jp,Wx),e(Wo,zx),e(Wo,Gu),e(Gu,Mu),e(Mu,rg),e(Mu,Kx),e(Mu,dm),e(dm,Jx),e(Gu,Xx),e(Gu,ju),e(ju,ag),e(ju,Qx),e(ju,um),e(um,Zx),e(Gu,eb),e(Gu,qd),e(qd,ng),e(qd,tb),e(qd,fm),e(fm,sb),e(_v,rb),e(_v,Jo),e(j,ab),e(j,pm),e(pm,nb),e(j,lb),e(j,Dv),e(Dv,Vh),e(Vh,ib),e(Dv,ob),e(Dv,Vv),e(Vv,Ph),e(Ph,cb),e(Vv,db),e(Vv,Nu),e(Nu,lg),e(Nu,ub),e(Nu,ig),e(Nu,fb),e(Nu,og),e(y,pb),e(y,vm),e(vm,vb),Mc=!0},p:Re,i(_t){Mc||($c(()=>{Mc&&(J&&J.end(1),de=Ud(me,wr,{x:100,duration:300,delay:500}),de.start())}),$c(()=>{Mc&&(He&&He.end(1),X=Ud(We,wr,{x:-100,duration:300,delay:500}),X.start())}),$c(()=>{Mc&&(ze&&ze.end(1),Te=Ud(ee,wr,{x:-100,y:-100,duration:300,delay:500}),Te.start())}),$c(()=>{Mc&&(Je&&Je.end(1),rt=Ud(he,wr,{y:-100,duration:300,delay:500}),rt.start())}),$c(()=>{Mc&&(W&&W.end(1),U=Ud(P,wr,{x:-100,duration:300,delay:500}),U.start())}),$c(()=>{Mc&&(Pe&&Pe.end(1),fe=Ud(oe,wr,{x:50,duration:300,delay:500}),fe.start())}),$c(()=>{Mc&&(le&&le.end(1),Be=Ud(be,wr,{x:-70,duration:300,delay:500}),Be.start())}),$c(()=>{Mc&&(qe&&qe.end(1),Fe=Ud(De,wr,{y:-100,duration:300,delay:500}),Fe.start())}),Mc=!0)},o(_t){de&&de.invalidate(),J=Hd(me,wr,{x:-100,duration:300}),X&&X.invalidate(),He=Hd(We,wr,{x:100,duration:300}),Te&&Te.invalidate(),ze=Hd(ee,wr,{x:100,duration:300}),rt&&rt.invalidate(),Je=Hd(he,wr,{x:100,duration:300}),U&&U.invalidate(),W=Hd(P,wr,{x:100,duration:300}),fe&&fe.invalidate(),Pe=Hd(oe,wr,{x:-100,duration:300}),Be&&Be.invalidate(),le=Hd(be,wr,{y:100,duration:300}),Fe&&Fe.invalidate(),qe=Hd(De,wr,{x:100,duration:300}),Mc=!1},d(_t){_t&&a(l),_t&&a(I),_t&&a(_),_t&&a(O),_t&&a(k),_t&&a(A),_t&&a(G),_t&&a(M),_t&&a(b),_t&&a(L),_t&&a(y),_t&&J&&J.end(),_t&&He&&He.end(),_t&&ze&&ze.end(),_t&&Je&&Je.end(),_t&&W&&W.end(),_t&&Pe&&Pe.end(),_t&&le&&le.end(),_t&&qe&&qe.end()}}}function o4(d){return m_(()=>{qc(".map-gcv",{theme:"tomato",allowHTML:!0,content:"This is the amount of heat energy that could be released if a certain amount of waste is completely burnt. It's like a measure of the <i>energy potential</i> of waste. A higher GCV means the waste can produce more energy."}),qc(".map-case-study",{theme:"tomato",content:"Project Reference Biogas Plant: Guichen, France | HoSt"}),qc(".calc-gcv",{theme:"tomato",allowHTML:!0,content:"Energy content is the total amount of energy stored in waste. But instead of just heat energy, it also includes the energy that can be converted into electricity or other forms. It's the total <i>energy resource</i> the waste could provide."}),qc(".calc-heat-produced",{theme:"tomato",content:"This is the actual amount of heat energy generated when the waste is processed, like when you burn wood in a fireplace. This heat can be used directly (like to warm buildings) or can be converted into other forms of energy, like electricity."}),qc(".calc-heat-savings",{theme:"tomato",content:"This indicates how much heat energy a company can save by using the heat produced from waste processing, instead of getting it from conventional sources. This is assuming you're currently paying 0.7p/kWh"}),qc(".calc-electricity-produced",{theme:"tomato",allowHTML:!0,content:"This is the amount of electrical energy generated from processing the waste. This could be through burning the waste to generate steam, which drives a turbine to produce electricity, or through other methods. It's like the <i>power output</i> from the waste."}),qc(".calc-electrical-savings",{theme:"tomato",content:"This shows how much a company can save on electricity costs by using the electricity produced from waste processing, instead of purchasing it from the grid. This is based off the assumption you are paying 0.35p/kWh"}),qc(".calc-char",{theme:"tomato",content:"Char is the solid material that's left over after some waste processing methods, like pyrolysis and gasification. It can sometimes be used as a fuel or soil conditioner. This value shows how much char would be produced from the waste."})}),[]}class c4 extends yn{constructor(l){super(),wn(this,l,o4,i4,ja,{})}}function d4(d){let l,i,u,v,g,x,m,h,E,w,V,D,I,_,O,k,A,G,M,b,L,y,N,F,C,j,q,K,$,ce,Se,z,R,se,ye,ae,Ke,we,te,ve,Ne,Ve,ie,_e,Ce,Y,Q,Ee,pe,me,ge,de,J,$e,We,xe,X,He,Ge,ee,Me,Te,ze,Ie,he,ue,rt,Je,Xe,P,B,U,W,Z,oe,H,fe,Pe,ne,be,vt,Be,le,Ae,De,je,Fe,qe,ft,ke,Ze,Nt,Lt,Oe,mt,Pt,Le,at,ct,Ct,gt,Dt;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("News"),x=o(),m=s("div"),h=s("div"),E=s("div"),w=s("div"),V=o(),D=s("div"),I=s("div"),_=s("div"),O=f("June 15, 2023"),k=o(),A=s("div"),G=f("Examining the global impact of food production and mitigation strategies"),M=o(),b=s("a"),L=s("div"),y=s("img"),F=o(),C=s("div"),j=f("Read more"),q=o(),K=s("div"),$=s("div"),ce=o(),Se=s("div"),z=s("div"),R=s("div"),se=f("May 9, 2023"),ye=o(),ae=s("div"),Ke=f("A war worth fighting"),we=o(),te=s("a"),ve=s("div"),Ne=s("img"),ie=o(),_e=s("div"),Ce=f("Read more"),Y=o(),Q=s("div"),Ee=s("div"),pe=s("div"),me=o(),ge=s("div"),de=s("div"),J=s("div"),$e=f("April 6, 2023"),We=o(),xe=s("div"),X=f("One ecosystem, one overall solution"),He=o(),Ge=s("a"),ee=s("div"),Me=s("img"),ze=o(),Ie=s("div"),he=f("Read more"),ue=o(),rt=s("div"),Je=s("div"),Xe=o(),P=s("div"),B=s("div"),U=s("div"),W=f("March 6, 2023"),Z=o(),oe=s("div"),H=f("The “Great Greenwashing” of 2023"),fe=o(),Pe=s("a"),ne=s("div"),be=s("img"),Be=o(),le=s("div"),Ae=f("Read more"),De=o(),je=s("div"),Fe=s("div"),qe=f("Copyright © 2023 Power for Planet"),ft=o(),ke=s("div"),Ze=s("div"),Nt=f("Privacy Policy"),Lt=o(),Oe=s("div"),mt=s("img"),Le=o(),at=s("img"),Ct=o(),gt=s("img"),this.h()},l(pt){l=r(pt,"DIV",{class:!0});var Bt=n(l);i=r(Bt,"DIV",{class:!0});var kt=n(i);u=r(kt,"DIV",{class:!0});var re=n(u);v=r(re,"DIV",{});var nt=n(v);g=p(nt,"News"),nt.forEach(a),re.forEach(a),x=c(kt),m=r(kt,"DIV",{class:!0});var Tt=n(m);h=r(Tt,"DIV",{class:!0});var Rt=n(h);E=r(Rt,"DIV",{class:!0});var it=n(E);w=r(it,"DIV",{class:!0}),n(w).forEach(a),V=c(it),D=r(it,"DIV",{class:!0});var dt=n(D);I=r(dt,"DIV",{class:!0});var Zt=n(I);_=r(Zt,"DIV",{class:!0});var qt=n(_);O=p(qt,"June 15, 2023"),qt.forEach(a),Zt.forEach(a),k=c(dt),A=r(dt,"DIV",{class:!0});var ot=n(A);G=p(ot,"Examining the global impact of food production and mitigation strategies"),ot.forEach(a),M=c(dt),b=r(dt,"A",{href:!0});var xt=n(b);L=r(xt,"DIV",{class:!0});var et=n(L);y=r(et,"IMG",{src:!0,alt:!0,class:!0}),F=c(et),C=r(et,"DIV",{});var St=n(C);j=p(St,"Read more"),St.forEach(a),et.forEach(a),xt.forEach(a),dt.forEach(a),it.forEach(a),q=c(Rt),K=r(Rt,"DIV",{class:!0});var It=n(K);$=r(It,"DIV",{class:!0}),n($).forEach(a),ce=c(It),Se=r(It,"DIV",{class:!0});var Gt=n(Se);z=r(Gt,"DIV",{class:!0});var es=n(z);R=r(es,"DIV",{class:!0});var Vt=n(R);se=p(Vt,"May 9, 2023"),Vt.forEach(a),es.forEach(a),ye=c(Gt),ae=r(Gt,"DIV",{class:!0});var Ue=n(ae);Ke=p(Ue,"A war worth fighting"),Ue.forEach(a),we=c(Gt),te=r(Gt,"A",{href:!0});var ut=n(te);ve=r(ut,"DIV",{class:!0});var $t=n(ve);Ne=r($t,"IMG",{src:!0,alt:!0,class:!0}),ie=c($t),_e=r($t,"DIV",{});var Et=n(_e);Ce=p(Et,"Read more"),Et.forEach(a),$t.forEach(a),ut.forEach(a),Gt.forEach(a),It.forEach(a),Rt.forEach(a),Y=c(Tt),Q=r(Tt,"DIV",{class:!0});var bt=n(Q);Ee=r(bt,"DIV",{class:!0});var lt=n(Ee);pe=r(lt,"DIV",{class:!0}),n(pe).forEach(a),me=c(lt),ge=r(lt,"DIV",{class:!0});var At=n(ge);de=r(At,"DIV",{class:!0});var yt=n(de);J=r(yt,"DIV",{class:!0});var Ut=n(J);$e=p(Ut,"April 6, 2023"),Ut.forEach(a),yt.forEach(a),We=c(At),xe=r(At,"DIV",{class:!0});var zt=n(xe);X=p(zt,"One ecosystem, one overall solution"),zt.forEach(a),He=c(At),Ge=r(At,"A",{href:!0});var Ft=n(Ge);ee=r(Ft,"DIV",{class:!0});var Mt=n(ee);Me=r(Mt,"IMG",{src:!0,alt:!0,class:!0}),ze=c(Mt),Ie=r(Mt,"DIV",{});var Jt=n(Ie);he=p(Jt,"Read more"),Jt.forEach(a),Mt.forEach(a),Ft.forEach(a),At.forEach(a),lt.forEach(a),ue=c(bt),rt=r(bt,"DIV",{class:!0});var Ht=n(rt);Je=r(Ht,"DIV",{class:!0}),n(Je).forEach(a),Xe=c(Ht),P=r(Ht,"DIV",{class:!0});var Xt=n(P);B=r(Xt,"DIV",{class:!0});var ht=n(B);U=r(ht,"DIV",{class:!0});var Js=n(U);W=p(Js,"March 6, 2023"),Js.forEach(a),ht.forEach(a),Z=c(Xt),oe=r(Xt,"DIV",{class:!0});var Vs=n(oe);H=p(Vs,"The “Great Greenwashing” of 2023"),Vs.forEach(a),fe=c(Xt),Pe=r(Xt,"A",{href:!0});var Kt=n(Pe);ne=r(Kt,"DIV",{class:!0});var st=n(ne);be=r(st,"IMG",{src:!0,alt:!0,class:!0}),Be=c(st),le=r(st,"DIV",{});var jt=n(le);Ae=p(jt,"Read more"),jt.forEach(a),st.forEach(a),Kt.forEach(a),Xt.forEach(a),Ht.forEach(a),bt.forEach(a),Tt.forEach(a),De=c(kt),je=r(kt,"DIV",{class:!0});var ss=n(je);Fe=r(ss,"DIV",{class:!0});var Xs=n(Fe);qe=p(Xs,"Copyright © 2023 Power for Planet"),Xs.forEach(a),ft=c(ss),ke=r(ss,"DIV",{class:!0});var Ps=n(ke);Ze=r(Ps,"DIV",{class:!0});var Qt=n(Ze);Nt=p(Qt,"Privacy Policy"),Qt.forEach(a),Lt=c(Ps),Oe=r(Ps,"DIV",{class:!0});var wt=n(Oe);mt=r(wt,"IMG",{src:!0,alt:!0,class:!0}),Le=c(wt),at=r(wt,"IMG",{src:!0,alt:!0,class:!0}),Ct=c(wt),gt=r(wt,"IMG",{src:!0,alt:!0,class:!0}),wt.forEach(a),Ps.forEach(a),ss.forEach(a),kt.forEach(a),Bt.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),t(w,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/1.jpg')] w-full flex-col h-[220px] flex items-start p-5"),t(_,"class","uppercase"),t(I,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(A,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[462px]"),S(y.src,N="/assets/new/arrow-right-circle.svg")||t(y,"src",N),t(y,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(y,"class","h-5 w-5"),t(L,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(b,"href","/news-item"),t(D,"class","rounded-b-[20px] bg-white w-full flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(E,"class","flex-1 flex-col flex items-start rounded-[20px]"),t($,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/3.jpg')] w-full flex-col h-[220px] flex items-start p-5"),t(R,"class","uppercase"),t(z,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(ae,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins h-[68px] w-[462px]"),S(Ne.src,Ve="/assets/new/arrow-right-circle.svg")||t(Ne,"src",Ve),t(Ne,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(Ne,"class","h-5 w-5"),t(ve,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(te,"href","/news-item2"),t(Se,"class","rounded-b-[20px] bg-white w-full flex-1 flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(K,"class","h-full flex-1 flex-col flex items-start rounded-[20px]"),t(h,"class","w-full flex items-start gap-10"),t(pe,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/2.jpg')] w-full flex-col h-[220px] flex items-start p-5"),t(J,"class","uppercase"),t(de,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(xe,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[462px]"),S(Me.src,Te="/assets/new/arrow-right-circle.svg")||t(Me,"src",Te),t(Me,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(Me,"class","h-5 w-5"),t(ee,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(Ge,"href","/news-item3"),t(ge,"class","rounded-b-[20px] bg-white w-full flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(Ee,"class","flex-1 flex-col flex items-start rounded-[20px]"),t(Je,"class","rounded-t-[20px] bg-cover bg-[url('/assets/new/4.png')] w-full flex-col h-[220px] flex items-start p-5"),t(U,"class","uppercase"),t(B,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center text-[#2e3855] font-Poppins"),t(oe,"class","text-xl leading-[34px] font-bold text-[#2e3855] font-Poppins w-[462px]"),S(be.src,vt="/assets/new/arrow-right-circle.svg")||t(be,"src",vt),t(be,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(be,"class","h-5 w-5"),t(ne,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(Pe,"href","/news-item4"),t(P,"class","rounded-b-[20px] bg-white w-full flex-col flex items-start gap-4 px-6 pt-5 pb-6"),t(rt,"class","flex-1 flex-col flex items-start rounded-[20px]"),t(Q,"class","w-full flex items-start gap-10"),t(m,"class","w-full flex-col flex items-start gap-10"),t(Fe,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ze,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(mt.src,Pt="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(mt,"src",Pt),t(mt,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(mt,"class","h-6 w-6"),S(at.src,ct="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(at,"src",ct),t(at,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(at,"class","h-6 w-6"),S(gt.src,Dt="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(gt,"src",Dt),t(gt,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(gt,"class","h-6 w-6"),t(Oe,"class","flex items-center gap-5"),t(ke,"class","flex-1 flex justify-end items-center gap-10"),t(je,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col max-w-[1060px] flex items-start gap-[60px]"),t(l,"class","flex-col flex items-center gap-[50px] h-fit mt-20")},m(pt,Bt){Qe(pt,l,Bt),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,E),e(E,w),e(E,V),e(E,D),e(D,I),e(I,_),e(_,O),e(D,k),e(D,A),e(A,G),e(D,M),e(D,b),e(b,L),e(L,y),e(L,F),e(L,C),e(C,j),e(h,q),e(h,K),e(K,$),e(K,ce),e(K,Se),e(Se,z),e(z,R),e(R,se),e(Se,ye),e(Se,ae),e(ae,Ke),e(Se,we),e(Se,te),e(te,ve),e(ve,Ne),e(ve,ie),e(ve,_e),e(_e,Ce),e(m,Y),e(m,Q),e(Q,Ee),e(Ee,pe),e(Ee,me),e(Ee,ge),e(ge,de),e(de,J),e(J,$e),e(ge,We),e(ge,xe),e(xe,X),e(ge,He),e(ge,Ge),e(Ge,ee),e(ee,Me),e(ee,ze),e(ee,Ie),e(Ie,he),e(Q,ue),e(Q,rt),e(rt,Je),e(rt,Xe),e(rt,P),e(P,B),e(B,U),e(U,W),e(P,Z),e(P,oe),e(oe,H),e(P,fe),e(P,Pe),e(Pe,ne),e(ne,be),e(ne,Be),e(ne,le),e(le,Ae),e(i,De),e(i,je),e(je,Fe),e(Fe,qe),e(je,ft),e(je,ke),e(ke,Ze),e(Ze,Nt),e(ke,Lt),e(ke,Oe),e(Oe,mt),e(Oe,Le),e(Oe,at),e(Oe,Ct),e(Oe,gt)},p:Re,i:Re,o:Re,d(pt){pt&&a(l)}}}class u4 extends yn{constructor(l){super(),wn(this,l,null,d4,ja,{})}}function f4(d){let l,i,u,v,g,x,m,h,E,w,V,D,I,_,O,k,A,G,M,b,L,y,N,F,C,j,q,K,$,ce,Se,z,R,se,ye,ae,Ke,we,te,ve,Ne,Ve,ie,_e,Ce,Y,Q,Ee,pe,me,ge,de,J,$e,We,xe,X,He,Ge,ee,Me,Te,ze,Ie,he,ue,rt,Je,Xe,P,B,U,W,Z,oe,H,fe,Pe,ne,be,vt,Be,le,Ae,De,je,Fe,qe,ft,ke;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),E=o(),w=s("div"),V=f("Examining the global impact of food production and mitigation strategies"),D=o(),I=s("div"),_=s("div"),O=o(),k=s("div"),A=s("div"),G=s("div"),M=s("div"),b=f("June 15, 2023"),L=o(),y=s("div"),N=f("Examining the global impact of food production and mitigation strategies"),F=o(),C=s("div"),j=s("div"),q=f(`Food consumption accounts for 28% of the world's ecological footprint according to the US Environmental
              Protection Agency (EPA). As a consequence, our feeding habits yield profound and sometimes irreversible
              environmental impact. Alarmingly, we squander approximately 25% of global calorie production amidst a staggering
              822 million people suffering from undernourishment worldwide. The required actions for mitigating these impacts
              include lifestyle and dietary changes, particularly in the Global North; transformative global farming practices;
              and the utilisation of innovative technologies within existing supply chains. Success lies in implementing these
              actions harmoniously.`),K=o(),$=s("div"),ce=s("div"),Se=f("Food production's environmental impacts are wide-ranging:"),z=o(),R=s("div"),se=s("span"),ye=f("Water usage"),ae=f(`
                : Food production consumes 70% of global water usage. Water scarcity currently plagues 1.1 billion people lacking
                sufficient clean water.
                `),Ke=s("span"),we=f("Soil degradation"),te=f(`
                : Intensive agriculture and monoculture farming practices contribute to the annual loss of 24 billion tonnes of fertile
                soil, as per a recent UN study.
                `),ve=s("span"),Ne=f("Use of chemical fertilisers and agrochemicals"),Ve=f(`
                : Increased land yield efforts have led to escalated chemical usage and consequential environmental impacts.`),ie=o(),_e=s("div"),Ce=s("img"),Q=o(),Ee=s("div"),pe=f(`Monoculture farming: a short-term yield with long-term environmental implications (photo by Tim Hüfner on
                Unsplash)`),me=o(),ge=s("div"),de=s("div"),J=f("Quote example"),$e=o(),We=s("div"),xe=f("Someone explains:"),X=o(),He=s("div"),Ge=s("div"),ee=f(`“To address these challenges, the industry needs to invest in research and development to develop new and more
                  effective technologies. Additionally, there needs to be more collaboration between industry stakeholders,
                  technology developers, and regulatory bodies.”`),Me=o(),Te=s("div"),ze=s("div"),Ie=f("Technology Challenge"),he=o(),ue=s("div"),rt=f(`Another challenge facing the power from waste industry is technology. While there have been significant
                `),Je=s("span"),Xe=o(),P=s("span"),B=f("link example"),U=f(`
                in waste-to-energy technology, there is still room for improvement. Some of the key areas where technology needs
                to evolve include waste sorting, emissions control, and energy efficiency. To address these challenges, the industry
                needs to invest in research and development to develop new and more effective technologies. Additionally, there needs
                to be more collaboration between industry stakeholders, technology developers, and regulatory bodies.`),W=o(),Z=s("div"),oe=s("div"),H=f("Copyright © 2023 Power for Planet"),fe=o(),Pe=s("div"),ne=s("div"),be=f("Privacy Policy"),vt=o(),Be=s("div"),le=s("img"),De=o(),je=s("img"),qe=o(),ft=s("img"),this.h()},l(Ze){l=r(Ze,"DIV",{class:!0});var Nt=n(l);i=r(Nt,"DIV",{class:!0});var Lt=n(i);u=r(Lt,"DIV",{class:!0});var Oe=n(u);v=r(Oe,"DIV",{class:!0});var mt=n(v);g=r(mt,"DIV",{class:!0});var Pt=n(g);x=r(Pt,"A",{href:!0});var Le=n(x);m=r(Le,"DIV",{class:!0});var at=n(m);h=p(at,"News"),at.forEach(a),Le.forEach(a),E=c(Pt),w=r(Pt,"DIV",{class:!0});var ct=n(w);V=p(ct,"Examining the global impact of food production and mitigation strategies"),ct.forEach(a),Pt.forEach(a),mt.forEach(a),D=c(Oe),I=r(Oe,"DIV",{class:!0});var Ct=n(I);_=r(Ct,"DIV",{class:!0}),n(_).forEach(a),O=c(Ct),k=r(Ct,"DIV",{class:!0});var gt=n(k);A=r(gt,"DIV",{class:!0});var Dt=n(A);G=r(Dt,"DIV",{class:!0});var pt=n(G);M=r(pt,"DIV",{class:!0});var Bt=n(M);b=p(Bt,"June 15, 2023"),Bt.forEach(a),pt.forEach(a),L=c(Dt),y=r(Dt,"DIV",{class:!0});var kt=n(y);N=p(kt,"Examining the global impact of food production and mitigation strategies"),kt.forEach(a),Dt.forEach(a),F=c(gt),C=r(gt,"DIV",{class:!0});var re=n(C);j=r(re,"DIV",{class:!0});var nt=n(j);q=p(nt,`Food consumption accounts for 28% of the world's ecological footprint according to the US Environmental
              Protection Agency (EPA). As a consequence, our feeding habits yield profound and sometimes irreversible
              environmental impact. Alarmingly, we squander approximately 25% of global calorie production amidst a staggering
              822 million people suffering from undernourishment worldwide. The required actions for mitigating these impacts
              include lifestyle and dietary changes, particularly in the Global North; transformative global farming practices;
              and the utilisation of innovative technologies within existing supply chains. Success lies in implementing these
              actions harmoniously.`),nt.forEach(a),K=c(re),$=r(re,"DIV",{class:!0});var Tt=n($);ce=r(Tt,"DIV",{class:!0});var Rt=n(ce);Se=p(Rt,"Food production's environmental impacts are wide-ranging:"),Rt.forEach(a),z=c(Tt),R=r(Tt,"DIV",{class:!0});var it=n(R);se=r(it,"SPAN",{class:!0});var dt=n(se);ye=p(dt,"Water usage"),dt.forEach(a),ae=p(it,`
                : Food production consumes 70% of global water usage. Water scarcity currently plagues 1.1 billion people lacking
                sufficient clean water.
                `),Ke=r(it,"SPAN",{class:!0});var Zt=n(Ke);we=p(Zt,"Soil degradation"),Zt.forEach(a),te=p(it,`
                : Intensive agriculture and monoculture farming practices contribute to the annual loss of 24 billion tonnes of fertile
                soil, as per a recent UN study.
                `),ve=r(it,"SPAN",{class:!0});var qt=n(ve);Ne=p(qt,"Use of chemical fertilisers and agrochemicals"),qt.forEach(a),Ve=p(it,`
                : Increased land yield efforts have led to escalated chemical usage and consequential environmental impacts.`),it.forEach(a),Tt.forEach(a),ie=c(re),_e=r(re,"DIV",{class:!0});var ot=n(_e);Ce=r(ot,"IMG",{class:!0,alt:!0,src:!0}),Q=c(ot),Ee=r(ot,"DIV",{class:!0});var xt=n(Ee);pe=p(xt,`Monoculture farming: a short-term yield with long-term environmental implications (photo by Tim Hüfner on
                Unsplash)`),xt.forEach(a),ot.forEach(a),me=c(re),ge=r(re,"DIV",{class:!0});var et=n(ge);de=r(et,"DIV",{class:!0});var St=n(de);J=p(St,"Quote example"),St.forEach(a),$e=c(et),We=r(et,"DIV",{class:!0});var It=n(We);xe=p(It,"Someone explains:"),It.forEach(a),X=c(et),He=r(et,"DIV",{class:!0});var Gt=n(He);Ge=r(Gt,"DIV",{class:!0});var es=n(Ge);ee=p(es,`“To address these challenges, the industry needs to invest in research and development to develop new and more
                  effective technologies. Additionally, there needs to be more collaboration between industry stakeholders,
                  technology developers, and regulatory bodies.”`),es.forEach(a),Gt.forEach(a),et.forEach(a),Me=c(re),Te=r(re,"DIV",{class:!0});var Vt=n(Te);ze=r(Vt,"DIV",{class:!0});var Ue=n(ze);Ie=p(Ue,"Technology Challenge"),Ue.forEach(a),he=c(Vt),ue=r(Vt,"DIV",{class:!0});var ut=n(ue);rt=p(ut,`Another challenge facing the power from waste industry is technology. While there have been significant
                `),Je=r(ut,"SPAN",{class:!0}),n(Je).forEach(a),Xe=c(ut),P=r(ut,"SPAN",{class:!0});var $t=n(P);B=p($t,"link example"),$t.forEach(a),U=p(ut,`
                in waste-to-energy technology, there is still room for improvement. Some of the key areas where technology needs
                to evolve include waste sorting, emissions control, and energy efficiency. To address these challenges, the industry
                needs to invest in research and development to develop new and more effective technologies. Additionally, there needs
                to be more collaboration between industry stakeholders, technology developers, and regulatory bodies.`),ut.forEach(a),Vt.forEach(a),re.forEach(a),gt.forEach(a),Ct.forEach(a),Oe.forEach(a),W=c(Lt),Z=r(Lt,"DIV",{class:!0});var Et=n(Z);oe=r(Et,"DIV",{class:!0});var bt=n(oe);H=p(bt,"Copyright © 2023 Power for Planet"),bt.forEach(a),fe=c(Et),Pe=r(Et,"DIV",{class:!0});var lt=n(Pe);ne=r(lt,"DIV",{class:!0});var At=n(ne);be=p(At,"Privacy Policy"),At.forEach(a),vt=c(lt),Be=r(lt,"DIV",{class:!0});var yt=n(Be);le=r(yt,"IMG",{src:!0,alt:!0,class:!0}),De=c(yt),je=r(yt,"IMG",{src:!0,alt:!0,class:!0}),qe=c(yt),ft=r(yt,"IMG",{src:!0,alt:!0,class:!0}),yt.forEach(a),lt.forEach(a),Et.forEach(a),Lt.forEach(a),Nt.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(w,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(_,"class","bg-cover bg-center bg-[url('/assets/new/XN2.jpg')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(M,"class","uppercase"),t(G,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(y,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(j,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ce,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(se,"class","font-bold text-sm leading-[25px] font-PublicSans"),t(Ke,"class","font-bold text-sm leading-[25px] font-PublicSans"),t(ve,"class","font-bold text-sm leading-[25px] font-PublicSans"),t(R,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t($,"class","w-full flex-col flex items-start gap-3"),t(Ce,"class","object-cover w-full h-[350px] rounded-2xl"),t(Ce,"alt","1686828442283 1"),S(Ce.src,Y="/assets/new/XN3.png")||t(Ce,"src",Y),t(Ee,"class","italic w-[680px]"),t(_e,"class","w-full flex-col flex items-start gap-4 text-sm leading-[25px] font-light font-PublicSans"),t(de,"class","text-xl leading-[34px] font-bold font-Poppins"),t(We,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Ge,"class","w-[656px]"),t(He,"class","w-full flex items-start gap-2.5 pl-6 border-l-[3px] border-[#3f9378] text-sm leading-[25px] font-semibold font-PublicSans"),t(ge,"class","w-full flex-col flex items-start gap-3"),t(ze,"class","text-xl leading-[34px] font-bold font-Poppins"),t(Je,"class","font-light text-sm leading-[25px] font-PublicSans"),t(P,"class","font-bold text-sm leading-[25px] text-[#3f9378] font-PublicSans"),t(ue,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Te,"class","w-full flex-col flex items-start gap-3"),t(C,"class","w-full flex-col flex items-start gap-6"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(I,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(oe,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(ne,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(le.src,Ae="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(le,"src",Ae),t(le,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(le,"class","h-6 w-6"),S(je.src,Fe="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(je,"src",Fe),t(je,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(je,"class","h-6 w-6"),S(ft.src,ke="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ft,"src",ke),t(ft,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(ft,"class","h-6 w-6"),t(Be,"class","flex items-center gap-5"),t(Pe,"class","flex-1 flex justify-end items-center gap-10"),t(Z,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(Ze,Nt){Qe(Ze,l,Nt),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,E),e(g,w),e(w,V),e(u,D),e(u,I),e(I,_),e(I,O),e(I,k),e(k,A),e(A,G),e(G,M),e(M,b),e(A,L),e(A,y),e(y,N),e(k,F),e(k,C),e(C,j),e(j,q),e(C,K),e(C,$),e($,ce),e(ce,Se),e($,z),e($,R),e(R,se),e(se,ye),e(R,ae),e(R,Ke),e(Ke,we),e(R,te),e(R,ve),e(ve,Ne),e(R,Ve),e(C,ie),e(C,_e),e(_e,Ce),e(_e,Q),e(_e,Ee),e(Ee,pe),e(C,me),e(C,ge),e(ge,de),e(de,J),e(ge,$e),e(ge,We),e(We,xe),e(ge,X),e(ge,He),e(He,Ge),e(Ge,ee),e(C,Me),e(C,Te),e(Te,ze),e(ze,Ie),e(Te,he),e(Te,ue),e(ue,rt),e(ue,Je),e(ue,Xe),e(ue,P),e(P,B),e(ue,U),e(i,W),e(i,Z),e(Z,oe),e(oe,H),e(Z,fe),e(Z,Pe),e(Pe,ne),e(ne,be),e(Pe,vt),e(Pe,Be),e(Be,le),e(Be,De),e(Be,je),e(Be,qe),e(Be,ft)},p:Re,i:Re,o:Re,d(Ze){Ze&&a(l)}}}class p4 extends yn{constructor(l){super(),wn(this,l,null,f4,ja,{})}}function v4(d){let l,i,u,v,g,x,m,h,E,w,V,D,I,_,O,k,A,G,M,b,L,y,N,F,C,j,q,K,$,ce,Se,z,R,se,ye,ae,Ke,we,te,ve,Ne,Ve,ie,_e,Ce,Y,Q,Ee,pe,me,ge,de,J,$e,We,xe,X,He,Ge,ee,Me,Te,ze,Ie,he,ue,rt,Je,Xe,P,B,U,W,Z,oe,H,fe,Pe,ne,be,vt,Be,le,Ae,De,je,Fe,qe,ft,ke,Ze,Nt,Lt,Oe,mt;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),E=o(),w=s("div"),V=f("A war worth fighting"),D=o(),I=s("div"),_=s("div"),O=o(),k=s("div"),A=s("div"),G=s("div"),M=s("div"),b=f("May 9, 2023"),L=o(),y=s("div"),N=f("A war worth fighting"),F=o(),C=s("div"),j=s("div"),q=f("Uniting as individuals to make a change for a greener future"),K=o(),$=s("div"),ce=f(`In today's world, it seems we're stuck in a battle between the natural ecosystem and our current financial models.
              Case in point: BP's recent financial report, declared a record profit of $28 billion for 2022 without accounting
              for environmental damage caused. This infuriated climate activists as the company scaled back on plans to cut oil
              and gas output and reduce carbon emissions by 2030. While companies continue to report high profits, the
              environmental impact of their activities is often left out of the equation. Why is this the case? And what can we,
              as individuals, do to make a difference?`),Se=o(),z=s("div"),R=s("div"),se=f("The war at hand"),ye=o(),ae=s("div"),Ke=f(`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),we=o(),te=s("div"),ve=s("div"),Ne=f("The role of companies"),Ve=o(),ie=s("div"),_e=f(`Companies have started integrating sustainable development goals (SDGs) and environmental, social, and corporate
              governance (ESG) models into their operations. However, a disconnect still exists between profit and
              sustainability. Only when businesses prioritise the environment in their decision-making will we see true change.`),Ce=o(),Y=s("div"),Q=s("div"),Ee=f("Individuals hold the power"),pe=o(),me=s("div"),ge=f(`PFP believes that individuals have the power to make a difference. By engaging with brands, politicians,
              employers, and other stakeholders, we can demand change and make a positive impact on our planet.`),de=o(),J=s("div"),$e=s("div"),We=f("Action steps for individuals:"),xe=o(),X=s("ul"),He=s("li"),Ge=f("As a consumer, demand brands prioritise nature in their operations"),ee=o(),Me=s("li"),Te=f("As a voter, support candidates who advocate for renewable energy and reject fossil fuels"),ze=o(),Ie=s("li"),he=f("As an employee, encourage business leaders to take immediate action to protect the planet"),ue=o(),rt=s("li"),Je=f("As a business owner, require suppliers to demonstrate their green credentials"),Xe=o(),P=s("li"),B=f("As a shareholder, hold executives accountable for meeting ESG goals"),U=o(),W=s("li"),Z=f("As a politician, listen to the people and take action to address their concerns"),oe=o(),H=s("div"),fe=f(`The battle for a greener future is ongoing, but the power to make a change lies within us. By taking action as
              individuals, we can contribute to a more sustainable world and support our planet's natural ecosystem. It's time
              to unite and fight for a cause that truly matters.`),Pe=o(),ne=s("div"),be=s("div"),vt=f("Copyright © 2023 Power for Planet"),Be=o(),le=s("div"),Ae=s("div"),De=f("Privacy Policy"),je=o(),Fe=s("div"),qe=s("img"),ke=o(),Ze=s("img"),Lt=o(),Oe=s("img"),this.h()},l(Pt){l=r(Pt,"DIV",{class:!0});var Le=n(l);i=r(Le,"DIV",{class:!0});var at=n(i);u=r(at,"DIV",{class:!0});var ct=n(u);v=r(ct,"DIV",{class:!0});var Ct=n(v);g=r(Ct,"DIV",{class:!0});var gt=n(g);x=r(gt,"A",{href:!0});var Dt=n(x);m=r(Dt,"DIV",{class:!0});var pt=n(m);h=p(pt,"News"),pt.forEach(a),Dt.forEach(a),E=c(gt),w=r(gt,"DIV",{class:!0});var Bt=n(w);V=p(Bt,"A war worth fighting"),Bt.forEach(a),gt.forEach(a),Ct.forEach(a),D=c(ct),I=r(ct,"DIV",{class:!0});var kt=n(I);_=r(kt,"DIV",{class:!0}),n(_).forEach(a),O=c(kt),k=r(kt,"DIV",{class:!0});var re=n(k);A=r(re,"DIV",{class:!0});var nt=n(A);G=r(nt,"DIV",{class:!0});var Tt=n(G);M=r(Tt,"DIV",{class:!0});var Rt=n(M);b=p(Rt,"May 9, 2023"),Rt.forEach(a),Tt.forEach(a),L=c(nt),y=r(nt,"DIV",{class:!0});var it=n(y);N=p(it,"A war worth fighting"),it.forEach(a),nt.forEach(a),F=c(re),C=r(re,"DIV",{class:!0});var dt=n(C);j=r(dt,"DIV",{class:!0});var Zt=n(j);q=p(Zt,"Uniting as individuals to make a change for a greener future"),Zt.forEach(a),K=c(dt),$=r(dt,"DIV",{class:!0});var qt=n($);ce=p(qt,`In today's world, it seems we're stuck in a battle between the natural ecosystem and our current financial models.
              Case in point: BP's recent financial report, declared a record profit of $28 billion for 2022 without accounting
              for environmental damage caused. This infuriated climate activists as the company scaled back on plans to cut oil
              and gas output and reduce carbon emissions by 2030. While companies continue to report high profits, the
              environmental impact of their activities is often left out of the equation. Why is this the case? And what can we,
              as individuals, do to make a difference?`),qt.forEach(a),Se=c(dt),z=r(dt,"DIV",{class:!0});var ot=n(z);R=r(ot,"DIV",{class:!0});var xt=n(R);se=p(xt,"The war at hand"),xt.forEach(a),ye=c(ot),ae=r(ot,"DIV",{class:!0});var et=n(ae);Ke=p(et,`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),et.forEach(a),ot.forEach(a),dt.forEach(a),we=c(re),te=r(re,"DIV",{class:!0});var St=n(te);ve=r(St,"DIV",{class:!0});var It=n(ve);Ne=p(It,"The role of companies"),It.forEach(a),Ve=c(St),ie=r(St,"DIV",{class:!0});var Gt=n(ie);_e=p(Gt,`Companies have started integrating sustainable development goals (SDGs) and environmental, social, and corporate
              governance (ESG) models into their operations. However, a disconnect still exists between profit and
              sustainability. Only when businesses prioritise the environment in their decision-making will we see true change.`),Gt.forEach(a),St.forEach(a),Ce=c(re),Y=r(re,"DIV",{class:!0});var es=n(Y);Q=r(es,"DIV",{class:!0});var Vt=n(Q);Ee=p(Vt,"Individuals hold the power"),Vt.forEach(a),pe=c(es),me=r(es,"DIV",{class:!0});var Ue=n(me);ge=p(Ue,`PFP believes that individuals have the power to make a difference. By engaging with brands, politicians,
              employers, and other stakeholders, we can demand change and make a positive impact on our planet.`),Ue.forEach(a),es.forEach(a),de=c(re),J=r(re,"DIV",{class:!0});var ut=n(J);$e=r(ut,"DIV",{class:!0});var $t=n($e);We=p($t,"Action steps for individuals:"),$t.forEach(a),xe=c(ut),X=r(ut,"UL",{class:!0});var Et=n(X);He=r(Et,"LI",{});var bt=n(He);Ge=p(bt,"As a consumer, demand brands prioritise nature in their operations"),bt.forEach(a),ee=c(Et),Me=r(Et,"LI",{});var lt=n(Me);Te=p(lt,"As a voter, support candidates who advocate for renewable energy and reject fossil fuels"),lt.forEach(a),ze=c(Et),Ie=r(Et,"LI",{});var At=n(Ie);he=p(At,"As an employee, encourage business leaders to take immediate action to protect the planet"),At.forEach(a),ue=c(Et),rt=r(Et,"LI",{});var yt=n(rt);Je=p(yt,"As a business owner, require suppliers to demonstrate their green credentials"),yt.forEach(a),Xe=c(Et),P=r(Et,"LI",{});var Ut=n(P);B=p(Ut,"As a shareholder, hold executives accountable for meeting ESG goals"),Ut.forEach(a),U=c(Et),W=r(Et,"LI",{});var zt=n(W);Z=p(zt,"As a politician, listen to the people and take action to address their concerns"),zt.forEach(a),Et.forEach(a),oe=c(ut),H=r(ut,"DIV",{class:!0});var Ft=n(H);fe=p(Ft,`The battle for a greener future is ongoing, but the power to make a change lies within us. By taking action as
              individuals, we can contribute to a more sustainable world and support our planet's natural ecosystem. It's time
              to unite and fight for a cause that truly matters.`),Ft.forEach(a),ut.forEach(a),re.forEach(a),kt.forEach(a),ct.forEach(a),at.forEach(a),Pe=c(Le),ne=r(Le,"DIV",{class:!0});var Mt=n(ne);be=r(Mt,"DIV",{class:!0});var Jt=n(be);vt=p(Jt,"Copyright © 2023 Power for Planet"),Jt.forEach(a),Be=c(Mt),le=r(Mt,"DIV",{class:!0});var Ht=n(le);Ae=r(Ht,"DIV",{class:!0});var Xt=n(Ae);De=p(Xt,"Privacy Policy"),Xt.forEach(a),je=c(Ht),Fe=r(Ht,"DIV",{class:!0});var ht=n(Fe);qe=r(ht,"IMG",{src:!0,alt:!0,class:!0}),ke=c(ht),Ze=r(ht,"IMG",{src:!0,alt:!0,class:!0}),Lt=c(ht),Oe=r(ht,"IMG",{src:!0,alt:!0,class:!0}),ht.forEach(a),Ht.forEach(a),Mt.forEach(a),Le.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(w,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(_,"class","bg-cover bg-center bg-[url('/assets/new/3.jpg')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(M,"class","uppercase"),t(G,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(y,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(j,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t($,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(R,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(ae,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(z,"class","w-full flex-col flex items-start gap-3"),t(C,"class","w-full flex-col flex items-start gap-6"),t(ve,"class","text-xl leading-[34px] font-bold font-Poppins"),t(ie,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(te,"class","w-full flex-col flex items-start gap-3"),t(Q,"class","text-xl leading-[34px] font-bold font-Poppins"),t(me,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Y,"class","w-full flex-col flex items-start gap-3"),t($e,"class","text-xl leading-[34px] font-bold font-Poppins"),t(X,"class","list-disc pl-4"),t(H,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(J,"class","w-full flex-col flex items-start gap-3"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(I,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(be,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ae,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(qe.src,ft="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(qe,"src",ft),t(qe,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(qe,"class","h-6 w-6"),S(Ze.src,Nt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ze,"src",Nt),t(Ze,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Ze,"class","h-6 w-6"),S(Oe.src,mt="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Oe,"src",mt),t(Oe,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Oe,"class","h-6 w-6"),t(Fe,"class","flex items-center gap-5"),t(le,"class","flex-1 flex justify-end items-center gap-10"),t(ne,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(Pt,Le){Qe(Pt,l,Le),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,E),e(g,w),e(w,V),e(u,D),e(u,I),e(I,_),e(I,O),e(I,k),e(k,A),e(A,G),e(G,M),e(M,b),e(A,L),e(A,y),e(y,N),e(k,F),e(k,C),e(C,j),e(j,q),e(C,K),e(C,$),e($,ce),e(C,Se),e(C,z),e(z,R),e(R,se),e(z,ye),e(z,ae),e(ae,Ke),e(k,we),e(k,te),e(te,ve),e(ve,Ne),e(te,Ve),e(te,ie),e(ie,_e),e(k,Ce),e(k,Y),e(Y,Q),e(Q,Ee),e(Y,pe),e(Y,me),e(me,ge),e(k,de),e(k,J),e(J,$e),e($e,We),e(J,xe),e(J,X),e(X,He),e(He,Ge),e(X,ee),e(X,Me),e(Me,Te),e(X,ze),e(X,Ie),e(Ie,he),e(X,ue),e(X,rt),e(rt,Je),e(X,Xe),e(X,P),e(P,B),e(X,U),e(X,W),e(W,Z),e(J,oe),e(J,H),e(H,fe),e(l,Pe),e(l,ne),e(ne,be),e(be,vt),e(ne,Be),e(ne,le),e(le,Ae),e(Ae,De),e(le,je),e(le,Fe),e(Fe,qe),e(Fe,ke),e(Fe,Ze),e(Fe,Lt),e(Fe,Oe)},p:Re,i:Re,o:Re,d(Pt){Pt&&a(l)}}}class g4 extends yn{constructor(l){super(),wn(this,l,null,v4,ja,{})}}function h4(d){let l,i,u,v,g,x,m,h,E,w,V,D,I,_,O,k,A,G,M,b,L,y,N,F,C,j,q,K,$,ce,Se,z,R,se,ye,ae,Ke,we,te,ve,Ne,Ve,ie,_e,Ce,Y,Q,Ee,pe,me,ge,de,J,$e,We,xe,X,He,Ge,ee,Me,Te,ze,Ie,he,ue,rt,Je,Xe,P,B,U,W,Z,oe,H,fe,Pe,ne,be,vt,Be,le,Ae,De,je,Fe,qe,ft,ke,Ze,Nt,Lt,Oe,mt,Pt,Le,at,ct,Ct,gt,Dt,pt,Bt,kt,re,nt,Tt,Rt,it,dt;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),E=o(),w=s("div"),V=f("One ecosystem, one overall solution"),D=o(),I=s("div"),_=s("div"),O=o(),k=s("div"),A=s("div"),G=s("div"),M=s("div"),b=f("April 6, 2023"),L=o(),y=s("div"),N=f("One ecosystem, one overall solution"),F=o(),C=s("div"),j=s("div"),q=f("We must adopt a total system approach that does not focus simply on the headline issues of the day"),K=o(),$=s("div"),ce=f(`Recent headlines have focused on the UK's new net zero strategy, announced on March 30th. While the plan
              highlights the need to transition away from fossil fuels, it falls short in terms of providing a comprehensive
              approach to sustainability. Instead, it invests heavily in Carbon Capture and Storage (CCS) technology, which some
              experts argue has yet to prove its large-scale effectiveness.`),Se=o(),z=s("div"),R=s("div"),se=f("The war at hand"),ye=o(),ae=s("div"),Ke=f(`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),we=o(),te=s("div"),ve=s("div"),Ne=f("Individuals hold the power"),Ve=o(),ie=s("div"),_e=f("A few notable reactions to the strategy:"),Ce=o(),Y=s("div"),Q=s("ul"),Ee=s("li"),pe=f(`Dr. Peter Connor, Associate Professor of Sustainable Energy Policy at the University of Exeter, expresses
                concerns about the £20 billion commitment to CCS, citing its limited impact on reducing atmospheric carbon.`),me=o(),ge=s("li"),de=f(`Josh Burke, Senior Policy Fellow at the London School of Economics and Political Science, laments the absence of
                a long-term investment plan for greener solutions.`),J=o(),$e=s("li"),We=f(`Matthew Paterson, Professor of International and Climate Change Politics at the University of Manchester,
                critiques the plan's inadequate focus on retrofitting the UK's inefficient homes.`),xe=o(),X=s("li"),He=f(`Christophe Williams, CEO of Naked Energy, calls for increased awareness and support for existing clean
                technologies that could help businesses and communities save money while reducing environmental impact.`),Ge=o(),ee=s("div"),Me=f(`Naturally we agree!
              `),Te=s("br"),ze=f(`
              These aren’t the reasons, however, that make us assert that the document and the UK government are missing the point,
              as damning as they are.`),Ie=o(),he=s("div"),ue=s("div"),rt=f("Th 6R Approach"),Je=o(),Xe=s("div"),P=f(`At PFP, we believe in a "6 R" approach to address global environmental challenges, with "regrowth" as the ultimate
              goal. By focusing on reducing waste and re-engineering processes in line with ESG goals, we can have a newly
              defined type of growth and make a positive impact on our planet and future generations.`),B=o(),U=s("div"),W=s("img"),oe=o(),H=s("div"),fe=s("div"),Pe=f("PFP News"),ne=o(),be=s("div"),vt=f(`As we continue to develop our power from waste platform to fulfil our global commitment to creating energy from
              non-recyclable waste, we are also creating our network of collaborative partners to work with us to support our
              clients to re-engineer their entire process in line with their ESG goals.`),Be=o(),le=s("div"),Ae=f("We're delighted to announce a new partnership with Rafinex, found at "),De=s("a"),je=f("www.rafinex.com"),Fe=f(`
               Specialising in advanced numerical models for engineering applications, Rafinex will work alongside PFP and our clients
              to reduce waste and develop sustainable solutions designs across various industries.`),qe=o(),ft=s("div"),ke=f(`Rafinex' innovative cloud SaaS product Möbius embeds the latest breakthroughs in stochastic optimisation
              mathematics. It is able to compute highly optimised and reliably trustworthy product designs that remain safe in
              real-life variable operating conditions in a matter of hours - making sustainable designs both scalable and
              profitable at the same time. Rafinex enables companies to substantially save on material usage for creating
              products, as well as on the subsequent energy required to use or operate these products.`),Ze=o(),Nt=s("div"),Lt=f(`As we continue to connect businesses and communities with the best technology partners for power-from-waste
              projects, our mission is to reduce the strain on our planet caused by the pursuit of financial growth at any cost.
              Together, we can build a sustainable future.`),Oe=o(),mt=s("div"),Pt=s("div"),Le=f("Copyright © 2023 Power for Planet"),at=o(),ct=s("div"),Ct=s("div"),gt=f("Privacy Policy"),Dt=o(),pt=s("div"),Bt=s("img"),re=o(),nt=s("img"),Rt=o(),it=s("img"),this.h()},l(Zt){l=r(Zt,"DIV",{class:!0});var qt=n(l);i=r(qt,"DIV",{class:!0});var ot=n(i);u=r(ot,"DIV",{class:!0});var xt=n(u);v=r(xt,"DIV",{class:!0});var et=n(v);g=r(et,"DIV",{class:!0});var St=n(g);x=r(St,"A",{href:!0});var It=n(x);m=r(It,"DIV",{class:!0});var Gt=n(m);h=p(Gt,"News"),Gt.forEach(a),It.forEach(a),E=c(St),w=r(St,"DIV",{class:!0});var es=n(w);V=p(es,"One ecosystem, one overall solution"),es.forEach(a),St.forEach(a),et.forEach(a),D=c(xt),I=r(xt,"DIV",{class:!0});var Vt=n(I);_=r(Vt,"DIV",{class:!0}),n(_).forEach(a),O=c(Vt),k=r(Vt,"DIV",{class:!0});var Ue=n(k);A=r(Ue,"DIV",{class:!0});var ut=n(A);G=r(ut,"DIV",{class:!0});var $t=n(G);M=r($t,"DIV",{class:!0});var Et=n(M);b=p(Et,"April 6, 2023"),Et.forEach(a),$t.forEach(a),L=c(ut),y=r(ut,"DIV",{class:!0});var bt=n(y);N=p(bt,"One ecosystem, one overall solution"),bt.forEach(a),ut.forEach(a),F=c(Ue),C=r(Ue,"DIV",{class:!0});var lt=n(C);j=r(lt,"DIV",{class:!0});var At=n(j);q=p(At,"We must adopt a total system approach that does not focus simply on the headline issues of the day"),At.forEach(a),K=c(lt),$=r(lt,"DIV",{class:!0});var yt=n($);ce=p(yt,`Recent headlines have focused on the UK's new net zero strategy, announced on March 30th. While the plan
              highlights the need to transition away from fossil fuels, it falls short in terms of providing a comprehensive
              approach to sustainability. Instead, it invests heavily in Carbon Capture and Storage (CCS) technology, which some
              experts argue has yet to prove its large-scale effectiveness.`),yt.forEach(a),Se=c(lt),z=r(lt,"DIV",{class:!0});var Ut=n(z);R=r(Ut,"DIV",{class:!0});var zt=n(R);se=p(zt,"The war at hand"),zt.forEach(a),ye=c(Ut),ae=r(Ut,"DIV",{class:!0});var Ft=n(ae);Ke=p(Ft,`Our planet's ecosystem is suffering from the consequences of a financial system that prioritises profit above
                all else. With no voice or political influence, nature bears the brunt of this unprovoked war. As shareholders
                of planet Earth, the power to change lies within us, but how do we make an impact.`),Ft.forEach(a),Ut.forEach(a),lt.forEach(a),we=c(Ue),te=r(Ue,"DIV",{class:!0});var Mt=n(te);ve=r(Mt,"DIV",{class:!0});var Jt=n(ve);Ne=p(Jt,"Individuals hold the power"),Jt.forEach(a),Ve=c(Mt),ie=r(Mt,"DIV",{class:!0});var Ht=n(ie);_e=p(Ht,"A few notable reactions to the strategy:"),Ht.forEach(a),Mt.forEach(a),Ce=c(Ue),Y=r(Ue,"DIV",{class:!0});var Xt=n(Y);Q=r(Xt,"UL",{class:!0});var ht=n(Q);Ee=r(ht,"LI",{});var Js=n(Ee);pe=p(Js,`Dr. Peter Connor, Associate Professor of Sustainable Energy Policy at the University of Exeter, expresses
                concerns about the £20 billion commitment to CCS, citing its limited impact on reducing atmospheric carbon.`),Js.forEach(a),me=c(ht),ge=r(ht,"LI",{});var Vs=n(ge);de=p(Vs,`Josh Burke, Senior Policy Fellow at the London School of Economics and Political Science, laments the absence of
                a long-term investment plan for greener solutions.`),Vs.forEach(a),J=c(ht),$e=r(ht,"LI",{});var Kt=n($e);We=p(Kt,`Matthew Paterson, Professor of International and Climate Change Politics at the University of Manchester,
                critiques the plan's inadequate focus on retrofitting the UK's inefficient homes.`),Kt.forEach(a),xe=c(ht),X=r(ht,"LI",{});var st=n(X);He=p(st,`Christophe Williams, CEO of Naked Energy, calls for increased awareness and support for existing clean
                technologies that could help businesses and communities save money while reducing environmental impact.`),st.forEach(a),ht.forEach(a),Ge=c(Xt),ee=r(Xt,"DIV",{class:!0});var jt=n(ee);Me=p(jt,`Naturally we agree!
              `),Te=r(jt,"BR",{}),ze=p(jt,`
              These aren’t the reasons, however, that make us assert that the document and the UK government are missing the point,
              as damning as they are.`),jt.forEach(a),Xt.forEach(a),Ie=c(Ue),he=r(Ue,"DIV",{class:!0});var ss=n(he);ue=r(ss,"DIV",{class:!0});var Xs=n(ue);rt=p(Xs,"Th 6R Approach"),Xs.forEach(a),Je=c(ss),Xe=r(ss,"DIV",{class:!0});var Ps=n(Xe);P=p(Ps,`At PFP, we believe in a "6 R" approach to address global environmental challenges, with "regrowth" as the ultimate
              goal. By focusing on reducing waste and re-engineering processes in line with ESG goals, we can have a newly
              defined type of growth and make a positive impact on our planet and future generations.`),Ps.forEach(a),ss.forEach(a),B=c(Ue),U=r(Ue,"DIV",{class:!0});var Qt=n(U);W=r(Qt,"IMG",{class:!0,alt:!0,src:!0}),Qt.forEach(a),oe=c(Ue),H=r(Ue,"DIV",{class:!0});var wt=n(H);fe=r(wt,"DIV",{class:!0});var Qs=n(fe);Pe=p(Qs,"PFP News"),Qs.forEach(a),ne=c(wt),be=r(wt,"DIV",{class:!0});var ks=n(be);vt=p(ks,`As we continue to develop our power from waste platform to fulfil our global commitment to creating energy from
              non-recyclable waste, we are also creating our network of collaborative partners to work with us to support our
              clients to re-engineer their entire process in line with their ESG goals.`),ks.forEach(a),Be=c(wt),le=r(wt,"DIV",{class:!0});var ns=n(le);Ae=p(ns,"We're delighted to announce a new partnership with Rafinex, found at "),De=r(ns,"A",{href:!0,target:!0});var jr=n(De);je=p(jr,"www.rafinex.com"),jr.forEach(a),Fe=p(ns,`
               Specialising in advanced numerical models for engineering applications, Rafinex will work alongside PFP and our clients
              to reduce waste and develop sustainable solutions designs across various industries.`),ns.forEach(a),qe=c(wt),ft=r(wt,"DIV",{class:!0});var Na=n(ft);ke=p(Na,`Rafinex' innovative cloud SaaS product Möbius embeds the latest breakthroughs in stochastic optimisation
              mathematics. It is able to compute highly optimised and reliably trustworthy product designs that remain safe in
              real-life variable operating conditions in a matter of hours - making sustainable designs both scalable and
              profitable at the same time. Rafinex enables companies to substantially save on material usage for creating
              products, as well as on the subsequent energy required to use or operate these products.`),Na.forEach(a),Ze=c(wt),Nt=r(wt,"DIV",{class:!0});var ms=n(Nt);Lt=p(ms,`As we continue to connect businesses and communities with the best technology partners for power-from-waste
              projects, our mission is to reduce the strain on our planet caused by the pursuit of financial growth at any cost.
              Together, we can build a sustainable future.`),ms.forEach(a),wt.forEach(a),Ue.forEach(a),Vt.forEach(a),xt.forEach(a),ot.forEach(a),Oe=c(qt),mt=r(qt,"DIV",{class:!0});var ur=n(mt);Pt=r(ur,"DIV",{class:!0});var _r=n(Pt);Le=p(_r,"Copyright © 2023 Power for Planet"),_r.forEach(a),at=c(ur),ct=r(ur,"DIV",{class:!0});var ls=n(ct);Ct=r(ls,"DIV",{class:!0});var Er=n(Ct);gt=p(Er,"Privacy Policy"),Er.forEach(a),Dt=c(ls),pt=r(ls,"DIV",{class:!0});var Yt=n(pt);Bt=r(Yt,"IMG",{src:!0,alt:!0,class:!0}),re=c(Yt),nt=r(Yt,"IMG",{src:!0,alt:!0,class:!0}),Rt=c(Yt),it=r(Yt,"IMG",{src:!0,alt:!0,class:!0}),Yt.forEach(a),ls.forEach(a),ur.forEach(a),qt.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(w,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(_,"class","bg-cover bg-center bg-[url('/assets/new/2.jpg')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(M,"class","uppercase"),t(G,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(y,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(j,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t($,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(R,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(ae,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(z,"class","w-full flex-col flex items-start gap-3"),t(C,"class","w-full flex-col flex items-start gap-6"),t(ve,"class","text-xl leading-[34px] font-bold font-Poppins"),t(ie,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(te,"class","w-full flex-col flex items-start gap-3"),t(Q,"class","list-disc pl-4"),t(ee,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Y,"class","w-full flex-col flex items-start gap-3"),t(ue,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(Xe,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(he,"class","w-full flex-col flex items-start gap-3"),t(W,"class","object-cover w-full h-[2000px] rounded-2xl"),t(W,"alt","1680532545699"),S(W.src,Z="/assets/new/1680532545699.png")||t(W,"src",Z),t(U,"class","w-full flex-col flex items-start gap-4 text-sm leading-[25px] font-light font-PublicSans"),t(fe,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(be,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(De,"href","//www.rafinex.com"),t(De,"target","_blank"),t(le,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(ft,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Nt,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(H,"class","w-full flex-col flex items-start gap-3"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(I,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(Pt,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ct,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(Bt.src,kt="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Bt,"src",kt),t(Bt,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(Bt,"class","h-6 w-6"),S(nt.src,Tt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(nt,"src",Tt),t(nt,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(nt,"class","h-6 w-6"),S(it.src,dt="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(it,"src",dt),t(it,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(it,"class","h-6 w-6"),t(pt,"class","flex items-center gap-5"),t(ct,"class","flex-1 flex justify-end items-center gap-10"),t(mt,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(Zt,qt){Qe(Zt,l,qt),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,E),e(g,w),e(w,V),e(u,D),e(u,I),e(I,_),e(I,O),e(I,k),e(k,A),e(A,G),e(G,M),e(M,b),e(A,L),e(A,y),e(y,N),e(k,F),e(k,C),e(C,j),e(j,q),e(C,K),e(C,$),e($,ce),e(C,Se),e(C,z),e(z,R),e(R,se),e(z,ye),e(z,ae),e(ae,Ke),e(k,we),e(k,te),e(te,ve),e(ve,Ne),e(te,Ve),e(te,ie),e(ie,_e),e(k,Ce),e(k,Y),e(Y,Q),e(Q,Ee),e(Ee,pe),e(Q,me),e(Q,ge),e(ge,de),e(Q,J),e(Q,$e),e($e,We),e(Q,xe),e(Q,X),e(X,He),e(Y,Ge),e(Y,ee),e(ee,Me),e(ee,Te),e(ee,ze),e(k,Ie),e(k,he),e(he,ue),e(ue,rt),e(he,Je),e(he,Xe),e(Xe,P),e(k,B),e(k,U),e(U,W),e(k,oe),e(k,H),e(H,fe),e(fe,Pe),e(H,ne),e(H,be),e(be,vt),e(H,Be),e(H,le),e(le,Ae),e(le,De),e(De,je),e(le,Fe),e(H,qe),e(H,ft),e(ft,ke),e(H,Ze),e(H,Nt),e(Nt,Lt),e(l,Oe),e(l,mt),e(mt,Pt),e(Pt,Le),e(mt,at),e(mt,ct),e(ct,Ct),e(Ct,gt),e(ct,Dt),e(ct,pt),e(pt,Bt),e(pt,re),e(pt,nt),e(pt,Rt),e(pt,it)},p:Re,i:Re,o:Re,d(Zt){Zt&&a(l)}}}class m4 extends yn{constructor(l){super(),wn(this,l,null,h4,ja,{})}}function x4(d){let l,i,u,v,g,x,m,h,E,w,V,D,I,_,O,k,A,G,M,b,L,y,N,F,C,j,q,K,$,ce,Se,z,R,se,ye,ae,Ke,we,te,ve,Ne,Ve,ie,_e,Ce,Y,Q,Ee,pe,me,ge,de,J,$e,We,xe,X,He,Ge,ee,Me,Te,ze,Ie,he,ue,rt,Je,Xe,P,B,U,W,Z,oe,H,fe,Pe,ne,be,vt,Be,le,Ae,De,je,Fe,qe,ft,ke,Ze,Nt,Lt,Oe,mt;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=s("div"),x=s("a"),m=s("div"),h=f("News"),E=o(),w=s("div"),V=f('The "Great Greenwashing” of 2023'),D=o(),I=s("div"),_=s("div"),O=o(),k=s("div"),A=s("div"),G=s("div"),M=s("div"),b=f("March 6, 2023"),L=o(),y=s("div"),N=f('The "Great Greenwashing” of 2023'),F=o(),C=s("div"),j=s("div"),q=f("From Euronews green"),K=o(),$=s("div"),ce=f(`In recent news, Lufthansa released a poster reading "Protecting the Planet", featuring a plane overlaid on an
              image of the Earth, which was rapidly banned in the UK for misleading consumers about the airline's environmental
              impact. While Lufthansa has set a goal to become carbon neutral by 2050 and has invested in sustainable aviation
              fuel and carbon offset programs, there are currently no environmental initiatives or commercially viable
              technologies in the aviation industry which would substantiate the green claim "protecting the future".`),Se=o(),z=s("div"),R=s("div"),se=f("From the Guardian"),ye=o(),ae=s("div"),Ke=f(`A recent investigation has revealed troubling news about forest carbon offsets. The world's leading certifier,
                Verra, relied upon by major corporations like Disney, Shell, Gucci have been approving offset projects that are
                largely ineffective at combating climate change.`),we=o(),te=s("div"),ve=f(`The investigation analysed a significant percentage of Verra's projects and found that over 90% of the
                rainforest offset credits - which are among the most commonly used by companies - are likely to be "phantom
                credits". These credits do not represent genuine carbon reductions, which means that the purported benefits of
                these offsets are largely worthless.`),Ne=o(),Ve=s("div"),ie=s("div"),_e=f("From journalist Robin Hicks"),Ce=o(),Y=s("div"),Q=f(`Meanwhile, the South Korean government has said it will start taking action against companies that make misleading
              sustainability claims. It is a first-of-its-kind move in Asia and other governments and regulatory bodies should
              take note and follow suit.`),Ee=o(),pe=s("div"),me=f(`Under a draft new law, companies that mislead the public about their environmental impact will face fines of up to
              KRW3 million (£1,920). The news comes four months after the country’s largest oil and gas company SK E&C was
              forced to modify a marketing campaign that claimed the firm would produce “CO2-free” liquefied natural gas at a
              planned plant in northern Australia.`),ge=o(),de=s("div"),J=s("div"),$e=f("From the Planet"),We=o(),xe=s("div"),X=f(`The environmental harm caused by humans has led to a rapid acceleration of natural changes in my climate system.
              Of course, as a planet, I will still be here for quite some time - around 7.5 billion years, give or take a
              millennium. But unfortunately, the same cannot be said for the multitude of life forms, particularly the human
              species. Climate extremes will soon become the norm and coping with them will be a tremendous challenge.`),He=o(),Ge=s("div"),ee=f(`However, if humanity chooses to prioritise environmental repair over damage, there is a chance we can mitigate the
              worst effects of climate change. It will require more than just PR stunts and lip service. Real, substantive
              action is what's necessary - action that shows a genuine concern for the environment and a willingness to do what
              it takes to preserve our planet for future generations.`),Me=o(),Te=s("div"),ze=s("div"),Ie=f("From the People"),he=o(),ue=s("div"),rt=f(`We are no longer falling for flashy ad campaigns and PR-led trickery. We are wise to the tactics that corporations
              use to distract from their harmful actions. We are keeping a close eye on the leaders who perpetuate this cycle of
              deception, and they will be held accountable for their actions. In fact, the charge for corporate manslaughter is
              not out of the question - what about charges for the countless lives affected on earth?`),Je=o(),Xe=s("div"),P=s("div"),B=f("From PFP"),U=o(),W=s("div"),Z=f("Dear Shell et al,"),oe=o(),H=s("div"),fe=f(`You have the power to make a real difference. Instead of spending millions of dollars on PR campaigns that only
              serve to create the impression that you care about the environment, why not put your resources to work on projects
              that actually remove CO2 from the atmosphere? You could take non-recyclable waste and turn it into green energy,
              providing a secure supply of energy while also enhancing the environment. Your brand could be the one that
              sponsors this initiative. The time for action is now - let us make a difference before it's too late.`),Pe=o(),ne=s("div"),be=s("div"),vt=f("Copyright © 2023 Power for Planet"),Be=o(),le=s("div"),Ae=s("div"),De=f("Privacy Policy"),je=o(),Fe=s("div"),qe=s("img"),ke=o(),Ze=s("img"),Lt=o(),Oe=s("img"),this.h()},l(Pt){l=r(Pt,"DIV",{class:!0});var Le=n(l);i=r(Le,"DIV",{class:!0});var at=n(i);u=r(at,"DIV",{class:!0});var ct=n(u);v=r(ct,"DIV",{class:!0});var Ct=n(v);g=r(Ct,"DIV",{class:!0});var gt=n(g);x=r(gt,"A",{href:!0});var Dt=n(x);m=r(Dt,"DIV",{class:!0});var pt=n(m);h=p(pt,"News"),pt.forEach(a),Dt.forEach(a),E=c(gt),w=r(gt,"DIV",{class:!0});var Bt=n(w);V=p(Bt,'The "Great Greenwashing” of 2023'),Bt.forEach(a),gt.forEach(a),Ct.forEach(a),D=c(ct),I=r(ct,"DIV",{class:!0});var kt=n(I);_=r(kt,"DIV",{class:!0}),n(_).forEach(a),O=c(kt),k=r(kt,"DIV",{class:!0});var re=n(k);A=r(re,"DIV",{class:!0});var nt=n(A);G=r(nt,"DIV",{class:!0});var Tt=n(G);M=r(Tt,"DIV",{class:!0});var Rt=n(M);b=p(Rt,"March 6, 2023"),Rt.forEach(a),Tt.forEach(a),L=c(nt),y=r(nt,"DIV",{class:!0});var it=n(y);N=p(it,'The "Great Greenwashing” of 2023'),it.forEach(a),nt.forEach(a),F=c(re),C=r(re,"DIV",{class:!0});var dt=n(C);j=r(dt,"DIV",{class:!0});var Zt=n(j);q=p(Zt,"From Euronews green"),Zt.forEach(a),K=c(dt),$=r(dt,"DIV",{class:!0});var qt=n($);ce=p(qt,`In recent news, Lufthansa released a poster reading "Protecting the Planet", featuring a plane overlaid on an
              image of the Earth, which was rapidly banned in the UK for misleading consumers about the airline's environmental
              impact. While Lufthansa has set a goal to become carbon neutral by 2050 and has invested in sustainable aviation
              fuel and carbon offset programs, there are currently no environmental initiatives or commercially viable
              technologies in the aviation industry which would substantiate the green claim "protecting the future".`),qt.forEach(a),Se=c(dt),z=r(dt,"DIV",{class:!0});var ot=n(z);R=r(ot,"DIV",{class:!0});var xt=n(R);se=p(xt,"From the Guardian"),xt.forEach(a),ye=c(ot),ae=r(ot,"DIV",{class:!0});var et=n(ae);Ke=p(et,`A recent investigation has revealed troubling news about forest carbon offsets. The world's leading certifier,
                Verra, relied upon by major corporations like Disney, Shell, Gucci have been approving offset projects that are
                largely ineffective at combating climate change.`),et.forEach(a),we=c(ot),te=r(ot,"DIV",{class:!0});var St=n(te);ve=p(St,`The investigation analysed a significant percentage of Verra's projects and found that over 90% of the
                rainforest offset credits - which are among the most commonly used by companies - are likely to be "phantom
                credits". These credits do not represent genuine carbon reductions, which means that the purported benefits of
                these offsets are largely worthless.`),St.forEach(a),ot.forEach(a),dt.forEach(a),Ne=c(re),Ve=r(re,"DIV",{class:!0});var It=n(Ve);ie=r(It,"DIV",{class:!0});var Gt=n(ie);_e=p(Gt,"From journalist Robin Hicks"),Gt.forEach(a),Ce=c(It),Y=r(It,"DIV",{class:!0});var es=n(Y);Q=p(es,`Meanwhile, the South Korean government has said it will start taking action against companies that make misleading
              sustainability claims. It is a first-of-its-kind move in Asia and other governments and regulatory bodies should
              take note and follow suit.`),es.forEach(a),Ee=c(It),pe=r(It,"DIV",{class:!0});var Vt=n(pe);me=p(Vt,`Under a draft new law, companies that mislead the public about their environmental impact will face fines of up to
              KRW3 million (£1,920). The news comes four months after the country’s largest oil and gas company SK E&C was
              forced to modify a marketing campaign that claimed the firm would produce “CO2-free” liquefied natural gas at a
              planned plant in northern Australia.`),Vt.forEach(a),It.forEach(a),ge=c(re),de=r(re,"DIV",{class:!0});var Ue=n(de);J=r(Ue,"DIV",{class:!0});var ut=n(J);$e=p(ut,"From the Planet"),ut.forEach(a),We=c(Ue),xe=r(Ue,"DIV",{class:!0});var $t=n(xe);X=p($t,`The environmental harm caused by humans has led to a rapid acceleration of natural changes in my climate system.
              Of course, as a planet, I will still be here for quite some time - around 7.5 billion years, give or take a
              millennium. But unfortunately, the same cannot be said for the multitude of life forms, particularly the human
              species. Climate extremes will soon become the norm and coping with them will be a tremendous challenge.`),$t.forEach(a),He=c(Ue),Ge=r(Ue,"DIV",{class:!0});var Et=n(Ge);ee=p(Et,`However, if humanity chooses to prioritise environmental repair over damage, there is a chance we can mitigate the
              worst effects of climate change. It will require more than just PR stunts and lip service. Real, substantive
              action is what's necessary - action that shows a genuine concern for the environment and a willingness to do what
              it takes to preserve our planet for future generations.`),Et.forEach(a),Ue.forEach(a),Me=c(re),Te=r(re,"DIV",{class:!0});var bt=n(Te);ze=r(bt,"DIV",{class:!0});var lt=n(ze);Ie=p(lt,"From the People"),lt.forEach(a),he=c(bt),ue=r(bt,"DIV",{class:!0});var At=n(ue);rt=p(At,`We are no longer falling for flashy ad campaigns and PR-led trickery. We are wise to the tactics that corporations
              use to distract from their harmful actions. We are keeping a close eye on the leaders who perpetuate this cycle of
              deception, and they will be held accountable for their actions. In fact, the charge for corporate manslaughter is
              not out of the question - what about charges for the countless lives affected on earth?`),At.forEach(a),bt.forEach(a),Je=c(re),Xe=r(re,"DIV",{class:!0});var yt=n(Xe);P=r(yt,"DIV",{class:!0});var Ut=n(P);B=p(Ut,"From PFP"),Ut.forEach(a),U=c(yt),W=r(yt,"DIV",{class:!0});var zt=n(W);Z=p(zt,"Dear Shell et al,"),zt.forEach(a),oe=c(yt),H=r(yt,"DIV",{class:!0});var Ft=n(H);fe=p(Ft,`You have the power to make a real difference. Instead of spending millions of dollars on PR campaigns that only
              serve to create the impression that you care about the environment, why not put your resources to work on projects
              that actually remove CO2 from the atmosphere? You could take non-recyclable waste and turn it into green energy,
              providing a secure supply of energy while also enhancing the environment. Your brand could be the one that
              sponsors this initiative. The time for action is now - let us make a difference before it's too late.`),Ft.forEach(a),yt.forEach(a),re.forEach(a),kt.forEach(a),ct.forEach(a),at.forEach(a),Pe=c(Le),ne=r(Le,"DIV",{class:!0});var Mt=n(ne);be=r(Mt,"DIV",{class:!0});var Jt=n(be);vt=p(Jt,"Copyright © 2023 Power for Planet"),Jt.forEach(a),Be=c(Mt),le=r(Mt,"DIV",{class:!0});var Ht=n(le);Ae=r(Ht,"DIV",{class:!0});var Xt=n(Ae);De=p(Xt,"Privacy Policy"),Xt.forEach(a),je=c(Ht),Fe=r(Ht,"DIV",{class:!0});var ht=n(Fe);qe=r(ht,"IMG",{src:!0,alt:!0,class:!0}),ke=c(ht),Ze=r(ht,"IMG",{src:!0,alt:!0,class:!0}),Lt=c(ht),Oe=r(ht,"IMG",{src:!0,alt:!0,class:!0}),ht.forEach(a),Ht.forEach(a),Mt.forEach(a),Le.forEach(a),this.h()},h(){t(m,"class","font-bold text-[#3f9378]"),t(x,"href","/news"),t(w,"class","font-semibold text-[#2e3855]"),t(g,"class","flex items-center gap-2.5"),t(v,"class","w-full flex-col flex justify-center items-start gap-2.5 text-sm leading-[26px] font-PublicSans"),t(_,"class","bg-cover bg-center bg-[url('/assets/new/4.png')] w-full flex-col h-[300px] flex items-start p-5 rounded-t-[20px]"),t(M,"class","uppercase"),t(G,"class","bg-[#d0e6f2] flex items-start gap-2.5 px-2.5 py-1 rounded-[5px] text-sm leading-[21px] font-semibold text-center"),t(y,"class","text-2xl leading-[33px] font-bold w-[680px]"),t(A,"class","w-full flex-col flex items-start gap-4 font-Poppins"),t(j,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t($,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(R,"class","text-xl leading-[34px] font-bold font-Poppins w-[680px]"),t(ae,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(te,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(z,"class","w-full flex-col flex items-start gap-3"),t(C,"class","w-full flex-col flex items-start gap-6"),t(ie,"class","text-xl leading-[34px] font-bold font-Poppins"),t(Y,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(pe,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Ve,"class","w-full flex-col flex items-start gap-3"),t(J,"class","text-xl leading-[34px] font-bold font-Poppins"),t(xe,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Ge,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(de,"class","w-full flex-col flex items-start gap-3"),t(ze,"class","text-xl leading-[34px] font-bold font-Poppins"),t(ue,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Te,"class","w-full flex-col flex items-start gap-3"),t(P,"class","text-xl leading-[34px] font-bold font-Poppins"),t(W,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(H,"class","text-sm leading-[25px] font-light font-PublicSans w-[680px]"),t(Xe,"class","w-full flex-col flex items-start gap-3"),t(k,"class","flex-col w-5/6 flex items-center gap-5 text-[#2e3855]"),t(I,"class","bg-white w-full flex-col flex items-center gap-[30px] pb-[60px] rounded-[20px]"),t(u,"class","flex-col w-full flex items-start gap-[30px]"),t(i,"class","flex-col flex items-start gap-[50px] h-fit w-[1060px]"),t(be,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(Ae,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(qe.src,ft="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(qe,"src",ft),t(qe,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(qe,"class","h-6 w-6"),S(Ze.src,Nt="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Ze,"src",Nt),t(Ze,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(Ze,"class","h-6 w-6"),S(Oe.src,mt="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(Oe,"src",mt),t(Oe,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(Oe,"class","h-6 w-6"),t(Fe,"class","flex items-center gap-5"),t(le,"class","flex-1 flex justify-end items-center gap-10"),t(ne,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(l,"class","bg-[#e4eaea] flex-col flex items-center gap-10 h-fit mt-20 min-w-[1060px]")},m(Pt,Le){Qe(Pt,l,Le),e(l,i),e(i,u),e(u,v),e(v,g),e(g,x),e(x,m),e(m,h),e(g,E),e(g,w),e(w,V),e(u,D),e(u,I),e(I,_),e(I,O),e(I,k),e(k,A),e(A,G),e(G,M),e(M,b),e(A,L),e(A,y),e(y,N),e(k,F),e(k,C),e(C,j),e(j,q),e(C,K),e(C,$),e($,ce),e(C,Se),e(C,z),e(z,R),e(R,se),e(z,ye),e(z,ae),e(ae,Ke),e(z,we),e(z,te),e(te,ve),e(k,Ne),e(k,Ve),e(Ve,ie),e(ie,_e),e(Ve,Ce),e(Ve,Y),e(Y,Q),e(Ve,Ee),e(Ve,pe),e(pe,me),e(k,ge),e(k,de),e(de,J),e(J,$e),e(de,We),e(de,xe),e(xe,X),e(de,He),e(de,Ge),e(Ge,ee),e(k,Me),e(k,Te),e(Te,ze),e(ze,Ie),e(Te,he),e(Te,ue),e(ue,rt),e(k,Je),e(k,Xe),e(Xe,P),e(P,B),e(Xe,U),e(Xe,W),e(W,Z),e(Xe,oe),e(Xe,H),e(H,fe),e(l,Pe),e(l,ne),e(ne,be),e(be,vt),e(ne,Be),e(ne,le),e(le,Ae),e(Ae,De),e(le,je),e(le,Fe),e(Fe,qe),e(Fe,ke),e(Fe,Ze),e(Fe,Lt),e(Fe,Oe)},p:Re,i:Re,o:Re,d(Pt){Pt&&a(l)}}}class b4 extends yn{constructor(l){super(),wn(this,l,null,x4,ja,{})}}function y4(d){let l,i,u,v,g,x,m,h,E,w,V,D,I,_,O,k,A,G,M,b,L,y,N,F,C,j,q,K,$,ce,Se,z,R,se,ye,ae,Ke,we,te,ve,Ne,Ve,ie,_e,Ce,Y,Q,Ee,pe,me,ge,de,J,$e,We,xe,X,He,Ge,ee,Me,Te,ze,Ie,he,ue,rt,Je,Xe,P,B,U,W,Z,oe,H,fe,Pe,ne,be,vt,Be,le,Ae,De,je,Fe,qe,ft,ke,Ze,Nt,Lt,Oe,mt,Pt,Le,at,ct,Ct,gt,Dt,pt,Bt,kt,re,nt,Tt,Rt,it,dt,Zt,qt,ot,xt,et,St,It,Gt,es,Vt,Ue,ut,$t,Et,bt,lt,At,yt,Ut,zt,Ft,Mt,Jt,Ht,Xt,ht,Js,Vs,Kt,st,jt,ss,Xs,Ps,Qt,wt,Qs,ks,ns,jr,Na,ms,ur,_r,ls,Er,Yt,Ss,Cs,fr,ta,di,Gs,is,sa,pr,us,sl,Ba,xs,ra;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("Contact us"),x=o(),m=s("div"),h=s("div"),E=s("div"),w=f("Contact us and turn your green energy vision into reality"),V=o(),D=s("div"),I=s("div"),_=s("div"),O=s("div"),k=s("img"),G=o(),M=s("div"),b=f("Schedule a conversation with us"),L=o(),y=s("div"),N=s("button"),F=s("img"),j=o(),q=s("iframe"),$=o(),ce=s("script"),Se=f(`function toggleElement(k) {
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[1100px]')
              element.classList.toggle('pt-[80px]')
              element.classList.toggle('pt-[20px]')
              toggleElementX(k)
            }

            function toggleElement2(k) {
              // alert('a')
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[80px]')
              // element.classList.toggle('pt-[100px]')
              toggleElementX(k)
            }

            function toggleElementX(k) {
              document.querySelector('#' + k + '-chevron').classList.toggle('rotate-180')
              // document.querySelector('#' + k + '-heading').classList.toggle('bg-pfp-green')
            }`),z=o(),R=s("div"),se=s("div"),ye=s("div"),ae=s("img"),we=o(),te=s("div"),ve=f("Message us through our contact form"),Ne=o(),Ve=s("div"),ie=s("button"),_e=s("img"),Y=o(),Q=s("div"),Ee=s("div"),pe=s("div"),me=f("First name*"),ge=o(),de=s("div"),J=s("div"),$e=f("Input text"),We=o(),xe=s("div"),X=s("div"),He=f("Surname*"),Ge=o(),ee=s("div"),Me=s("div"),Te=f("Input text"),ze=o(),Ie=s("div"),he=s("div"),ue=s("div"),rt=f("Organization/Company name (optional)"),Je=o(),Xe=s("div"),P=s("div"),B=f("Input text"),U=o(),W=s("div"),Z=s("div"),oe=f("Type of query/contact*"),H=o(),fe=s("div"),Pe=s("div"),ne=f("Select..."),be=o(),vt=s("img"),le=o(),Ae=s("div"),De=s("div"),je=s("div"),Fe=f("Your message*"),qe=o(),ft=s("div"),ke=s("div"),Ze=f("Type your message here"),Nt=o(),Lt=s("a"),Oe=s("div"),mt=s("img"),Le=o(),at=s("div"),ct=f("Send message"),Ct=o(),gt=s("div"),Dt=s("div"),pt=s("div"),Bt=f("Find us"),kt=o(),re=s("div"),nt=s("div"),Tt=s("div"),Rt=s("div"),it=s("div"),dt=s("img"),qt=o(),ot=s("div"),xt=s("div"),et=s("div"),St=f("Power for Planet"),It=o(),Gt=s("div"),es=f("78 Pall Mall SW1Y 5ES London, United Kingdom"),Vt=o(),Ue=s("a"),ut=s("img"),Et=o(),bt=s("div"),lt=s("div"),At=s("div"),yt=s("img"),zt=o(),Ft=s("div"),Mt=s("div"),Jt=s("div"),Ht=f("Contact us"),Xt=o(),ht=s("div"),Js=f("+44 7796 302 102 dermot@powerforplanet.com"),Vs=o(),Kt=s("div"),st=s("div"),jt=s("div"),ss=s("div"),Xs=f("Follow us on social media"),Ps=o(),Qt=s("div"),wt=s("img"),ks=o(),ns=s("img"),Na=o(),ms=s("img"),_r=o(),ls=s("div"),Er=s("div"),Yt=f("Copyright © 2023 Power for Planet"),Ss=o(),Cs=s("div"),fr=s("div"),ta=f("Privacy Policy"),di=o(),Gs=s("div"),is=s("img"),pr=o(),us=s("img"),Ba=o(),xs=s("img"),this.h()},l(_n){l=r(_n,"DIV",{class:!0});var aa=n(l);i=r(aa,"DIV",{class:!0});var Zs=n(i);u=r(Zs,"DIV",{class:!0});var ui=n(u);v=r(ui,"DIV",{});var En=n(v);g=p(En,"Contact us"),En.forEach(a),ui.forEach(a),x=c(Zs),m=r(Zs,"DIV",{class:!0});var bs=n(m);h=r(bs,"DIV",{class:!0});var na=n(h);E=r(na,"DIV",{class:!0});var la=n(E);w=p(la,"Contact us and turn your green energy vision into reality"),la.forEach(a),V=c(na),D=r(na,"DIV",{class:!0});var Ts=n(D);I=r(Ts,"DIV",{id:!0,class:!0});var Ir=n(I);_=r(Ir,"DIV",{class:!0});var Ra=n(_);O=r(Ra,"DIV",{id:!0,class:!0});var ia=n(O);k=r(ia,"IMG",{src:!0,alt:!0,class:!0}),ia.forEach(a),G=c(Ra),M=r(Ra,"DIV",{class:!0});var ts=n(M);b=p(ts,"Schedule a conversation with us"),ts.forEach(a),L=c(Ra),y=r(Ra,"DIV",{class:!0});var vr=n(y);N=r(vr,"BUTTON",{onclick:!0});var er=n(N);F=r(er,"IMG",{id:!0,src:!0,alt:!0,class:!0}),er.forEach(a),vr.forEach(a),Ra.forEach(a),j=c(Ir),q=r(Ir,"IFRAME",{style:!0,height:!0,width:!0,frameborder:!0,src:!0,title:!0}),n(q).forEach(a),Ir.forEach(a),$=c(Ts),ce=r(Ts,"SCRIPT",{});var oa=n(ce);Se=p(oa,`function toggleElement(k) {
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[1100px]')
              element.classList.toggle('pt-[80px]')
              element.classList.toggle('pt-[20px]')
              toggleElementX(k)
            }

            function toggleElement2(k) {
              // alert('a')
              var element = document.querySelector('#' + k)
              element.classList.toggle('h-[80px]')
              // element.classList.toggle('pt-[100px]')
              toggleElementX(k)
            }

            function toggleElementX(k) {
              document.querySelector('#' + k + '-chevron').classList.toggle('rotate-180')
              // document.querySelector('#' + k + '-heading').classList.toggle('bg-pfp-green')
            }`),oa.forEach(a),z=c(Ts),R=r(Ts,"DIV",{id:!0,class:!0});var os=n(R);se=r(os,"DIV",{class:!0});var Ms=n(se);ye=r(Ms,"DIV",{id:!0,class:!0});var Us=n(ye);ae=r(Us,"IMG",{src:!0,alt:!0,class:!0}),Us.forEach(a),we=c(Ms),te=r(Ms,"DIV",{class:!0});var cs=n(te);ve=p(cs,"Message us through our contact form"),cs.forEach(a),Ne=c(Ms),Ve=r(Ms,"DIV",{class:!0});var rl=n(Ve);ie=r(rl,"BUTTON",{});var fi=n(ie);_e=r(fi,"IMG",{id:!0,src:!0,alt:!0,class:!0}),fi.forEach(a),rl.forEach(a),Ms.forEach(a),Y=c(os),Q=r(os,"DIV",{class:!0});var gr=n(Q);Ee=r(gr,"DIV",{class:!0});var rs=n(Ee);pe=r(rs,"DIV",{class:!0});var pi=n(pe);me=p(pi,"First name*"),pi.forEach(a),ge=c(rs),de=r(rs,"DIV",{class:!0});var In=n(de);J=r(In,"DIV",{class:!0});var Nr=n(J);$e=p(Nr,"Input text"),Nr.forEach(a),In.forEach(a),rs.forEach(a),We=c(gr),xe=r(gr,"DIV",{class:!0});var al=n(xe);X=r(al,"DIV",{class:!0});var nl=n(X);He=p(nl,"Surname*"),nl.forEach(a),Ge=c(al),ee=r(al,"DIV",{class:!0});var lo=n(ee);Me=r(lo,"DIV",{class:!0});var vi=n(Me);Te=p(vi,"Input text"),vi.forEach(a),lo.forEach(a),al.forEach(a),gr.forEach(a),ze=c(os),Ie=r(os,"DIV",{class:!0});var ys=n(Ie);he=r(ys,"DIV",{class:!0});var Dr=n(he);ue=r(Dr,"DIV",{class:!0});var $a=n(ue);rt=p($a,"Organization/Company name (optional)"),$a.forEach(a),Je=c(Dr),Xe=r(Dr,"DIV",{class:!0});var Wt=n(Xe);P=r(Wt,"DIV",{class:!0});var Vr=n(P);B=p(Vr,"Input text"),Vr.forEach(a),Wt.forEach(a),Dr.forEach(a),U=c(ys),W=r(ys,"DIV",{class:!0});var Hs=n(W);Z=r(Hs,"DIV",{class:!0});var tr=n(Z);oe=p(tr,"Type of query/contact*"),tr.forEach(a),H=c(Hs),fe=r(Hs,"DIV",{class:!0});var As=n(fe);Pe=r(As,"DIV",{class:!0});var ca=n(Pe);ne=p(ca,"Select..."),ca.forEach(a),be=c(As),vt=r(As,"IMG",{src:!0,alt:!0,class:!0}),As.forEach(a),Hs.forEach(a),ys.forEach(a),le=c(os),Ae=r(os,"DIV",{class:!0});var da=n(Ae);De=r(da,"DIV",{class:!0});var ua=n(De);je=r(ua,"DIV",{class:!0});var gi=n(je);Fe=p(gi,"Your message*"),gi.forEach(a),qe=c(ua),ft=r(ua,"DIV",{class:!0});var Ys=n(ft);ke=r(Ys,"DIV",{class:!0});var fs=n(ke);Ze=p(fs,"Type your message here"),fs.forEach(a),Ys.forEach(a),ua.forEach(a),da.forEach(a),Nt=c(os),Lt=r(os,"A",{href:!0});var Ul=n(Lt);Oe=r(Ul,"DIV",{class:!0});var ll=n(Oe);mt=r(ll,"IMG",{src:!0,alt:!0,class:!0}),Le=c(ll),at=r(ll,"DIV",{});var ws=n(at);ct=p(ws,"Send message"),ws.forEach(a),ll.forEach(a),Ul.forEach(a),os.forEach(a),Ts.forEach(a),na.forEach(a),Ct=c(bs),gt=r(bs,"DIV",{class:!0});var hr=n(gt);Dt=r(hr,"DIV",{class:!0});var Dn=n(Dt);pt=r(Dn,"DIV",{});var sr=n(pt);Bt=p(sr,"Find us"),sr.forEach(a),Dn.forEach(a),kt=c(hr),re=r(hr,"DIV",{class:!0});var fa=n(re);nt=r(fa,"DIV",{class:!0});var il=n(nt);Tt=r(il,"DIV",{class:!0});var Pr=n(Tt);Rt=r(Pr,"DIV",{class:!0});var as=n(Rt);it=r(as,"DIV",{class:!0});var Ws=n(it);dt=r(Ws,"IMG",{src:!0,alt:!0,class:!0}),Ws.forEach(a),qt=c(as),ot=r(as,"DIV",{class:!0});var js=n(ot);xt=r(js,"DIV",{class:!0});var ps=n(xt);et=r(ps,"DIV",{class:!0});var kr=n(et);St=p(kr,"Power for Planet"),kr.forEach(a),It=c(ps),Gt=r(ps,"DIV",{class:!0});var ol=n(Gt);es=p(ol,"78 Pall Mall SW1Y 5ES London, United Kingdom"),ol.forEach(a),Vt=c(ps),Ue=r(ps,"A",{href:!0,target:!0});var hi=n(Ue);ut=r(hi,"IMG",{src:!0,class:!0}),hi.forEach(a),ps.forEach(a),js.forEach(a),as.forEach(a),Pr.forEach(a),Et=c(il),bt=r(il,"DIV",{class:!0});var rr=n(bt);lt=r(rr,"DIV",{class:!0});var ar=n(lt);At=r(ar,"DIV",{class:!0});var _s=n(At);yt=r(_s,"IMG",{src:!0,alt:!0,class:!0}),_s.forEach(a),zt=c(ar),Ft=r(ar,"DIV",{class:!0});var Sr=n(Ft);Mt=r(Sr,"DIV",{class:!0});var pa=n(Mt);Jt=r(pa,"DIV",{class:!0});var Vn=n(Jt);Ht=p(Vn,"Contact us"),Vn.forEach(a),Xt=c(pa),ht=r(pa,"DIV",{class:!0});var cl=n(ht);Js=p(cl,"+44 7796 302 102 dermot@powerforplanet.com"),cl.forEach(a),pa.forEach(a),Sr.forEach(a),ar.forEach(a),rr.forEach(a),il.forEach(a),Vs=c(fa),Kt=r(fa,"DIV",{class:!0});var mi=n(Kt);st=r(mi,"DIV",{class:!0});var vs=n(st);jt=r(vs,"DIV",{class:!0});var Es=n(jt);ss=r(Es,"DIV",{class:!0});var Br=n(ss);Xs=p(Br,"Follow us on social media"),Br.forEach(a),Ps=c(Es),Qt=r(Es,"DIV",{class:!0});var Pn=n(Qt);wt=r(Pn,"IMG",{src:!0,alt:!0,class:!0}),ks=c(Pn),ns=r(Pn,"IMG",{src:!0,alt:!0,class:!0}),Na=c(Pn),ms=r(Pn,"IMG",{src:!0,alt:!0,class:!0}),Pn.forEach(a),Es.forEach(a),vs.forEach(a),mi.forEach(a),fa.forEach(a),hr.forEach(a),bs.forEach(a),_r=c(Zs),ls=r(Zs,"DIV",{class:!0});var dl=n(ls);Er=r(dl,"DIV",{class:!0});var kn=n(Er);Yt=p(kn,"Copyright © 2023 Power for Planet"),kn.forEach(a),Ss=c(dl),Cs=r(dl,"DIV",{class:!0});var zs=n(Cs);fr=r(zs,"DIV",{class:!0});var nr=n(fr);ta=p(nr,"Privacy Policy"),nr.forEach(a),di=c(zs),Gs=r(zs,"DIV",{class:!0});var mr=n(Gs);is=r(mr,"IMG",{src:!0,alt:!0,class:!0}),pr=c(mr),us=r(mr,"IMG",{src:!0,alt:!0,class:!0}),Ba=c(mr),xs=r(mr,"IMG",{src:!0,alt:!0,class:!0}),mr.forEach(a),zs.forEach(a),dl.forEach(a),Zs.forEach(a),aa.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),t(E,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(k.src,A="/assets/new/calendar-days.svg")||t(k,"src",A),t(k,"alt","calendar-days"),t(k,"class","h-10 w-10"),t(O,"id","calendar-heading"),t(O,"class","bg-none duration-200 flex justify-center items-center gap-2.5 px-[50px] py-5 rounded-l-[20px]"),t(M,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins w-[596px]"),t(F,"id","calendar-chevron"),S(F.src,C="/assets/new/chevron-down.svg")||t(F,"src",C),t(F,"alt","chevron-down"),t(F,"class","h-6 w-6 rotate-180 duration-180"),t(N,"onclick","toggleElement('calendar')"),t(y,"class","flex items-center gap-2.5 pl-[50px]"),t(_,"class","w-full flex items-center gap-[50px] pr-[50px]"),T(q,"background","none"),T(q,"filter","contrast(1.07)"),T(q,"margin-bottom","-100px"),t(q,"height","1100"),t(q,"width","100%"),t(q,"frameborder","0"),q.allowFullscreen="",S(q.src,K="https://calendly.com/csaladenes-6ee/30min?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=394e6a&primary_color=3f9378&back=1&month=2023-07")||t(q,"src",K),t(q,"title","book"),t(I,"id","calendar"),t(I,"class","bg-[#e7f5f5] w-full overflow-hidden duration-200 h-[100px] pt-[80px] flex-col flex justify-center items-center gap-[30px] pb-0 rounded-[20px] align-top"),S(ae.src,Ke="/assets/new/mail.svg")||t(ae,"src",Ke),t(ae,"alt","mail"),t(ae,"class","h-10 w-10"),t(ye,"id","contactform-heading"),t(ye,"class","bg-none duration-200 flex justify-center items-center gap-2.5 px-[50px] py-5 rounded-l-[20px]"),t(te,"class","text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins w-[596px]"),t(_e,"id","contactform-chevron"),S(_e.src,Ce="/assets/new/chevron-down.svg")||t(_e,"src",Ce),t(_e,"alt","chevron-down"),t(_e,"class","h-6 w-6 duration-200"),t(Ve,"class","flex items-center gap-2.5 pl-[50px]"),t(se,"class","w-full flex items-center gap-[50px] pr-[50px]"),t(pe,"class","text-sm font-bold"),t(J,"class","w-[299px]"),t(de,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium"),t(Ee,"class","flex-1 flex-col flex items-start gap-2"),t(X,"class","text-sm font-bold"),t(Me,"class","w-[299px]"),t(ee,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium"),t(xe,"class","flex-1 flex-col flex items-start gap-2"),t(Q,"class","w-[600px] flex justify-center items-center gap-[30px] leading-[26px] text-[#2e3855] font-PublicSans"),t(ue,"class","text-sm font-bold"),t(P,"class","w-[299px]"),t(Xe,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium"),t(he,"class","flex-1 flex-col flex items-start gap-2 leading-[26px] text-[#2e3855] font-PublicSans"),t(Z,"class","text-sm leading-[26px] font-bold text-[#2e3855] font-PublicSans"),t(Pe,"class","text-base leading-[26px] font-medium text-[#909090] font-PublicSans w-[265px]"),S(vt.src,Be="/assets/new/chevron-down.svg")||t(vt,"src",Be),t(vt,"alt","chevron-down"),t(vt,"class","h-6 w-6"),t(fe,"class","bg-white w-full flex items-center gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855]"),t(W,"class","flex-1 flex-col flex items-start gap-2"),t(Ie,"class","w-[700px] flex justify-center items-center gap-[30px]"),t(je,"class","text-sm font-bold text-[#2e3855]"),t(ke,"class","w-[664px]"),t(ft,"class","bg-white min-h-[150px] w-full flex-1 flex items-start gap-2.5 px-[18px] py-2.5 rounded-[6px] border border-[#2e3855] text-base font-medium text-[#909090]"),t(De,"class","h-full flex-1 flex-col flex items-start gap-2"),t(Ae,"class","w-[600px] h-5/12 flex justify-center items-center gap-[30px] leading-[26px] font-PublicSans"),S(mt.src,Pt="/assets/new/arrow-right-circle.svg")||t(mt,"src",Pt),t(mt,"alt","arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy"),t(mt,"class","h-5 w-5"),t(Oe,"class","bg-[#3f9378] h-11 flex justify-center items-center gap-2.5 px-5 py-2 rounded-[6px] text-base leading-[20px] font-normal tracking-wider text-white"),t(Lt,"href","/explore"),t(R,"id","contactform"),t(R,"class","bg-[#e7f5f5] duration-200 w-full overflow-hidden flex-col flex justify-center items-center gap-[30px] pb-10 rounded-[20px] z-[2]"),t(D,"class","w-full flex-col flex items-center gap-5"),t(h,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(Dt,"class","flex-col flex items-center gap-2 text-2xl leading-[33px] font-bold text-center text-[#2e3855] font-Poppins"),S(dt.src,Zt="/assets/new/map-pin.svg")||t(dt,"src",Zt),t(dt,"alt","map-pin"),t(dt,"class","h-10 w-10"),t(it,"class","bg-[#2e3855] flex justify-center items-center gap-2.5 p-5 rounded-[40px]"),t(et,"class","text-xl leading-[34px] font-Poppins w-[390px]"),t(Gt,"class","text-sm leading-[26px] font-PublicSans w-[390px]"),S(ut.src,$t="/assets/new/map.png")||t(ut,"src",$t),t(ut,"class","mt-5"),t(Ue,"href","https://www.google.com/maps/place/78+Pall+Mall,+St.+James's,+London+SW1Y+5ES/@51.5057924,-0.1362653,19z/data=!4m6!3m5!1s0x487604d7477ba0bb:0x5ecb442822d2e0e!8m2!3d51.5056999!4d-0.1359853!16s%2Fg%2F1tj90_zr?entry=ttu"),t(Ue,"target","_blank"),t(xt,"class","w-full flex-col flex items-center"),t(ot,"class","w-full flex-col flex items-start gap-2 font-bold text-center text-[#2e3855]"),t(Rt,"class","w-full flex-col flex justify-center items-center gap-6"),t(Tt,"class","h-full bg-[#e7f5f5] flex-1 flex-col flex items-center gap-6 p-10 rounded-[20px]"),S(yt.src,Ut="/assets/new/message-circle.svg")||t(yt,"src",Ut),t(yt,"alt","message-circle"),t(yt,"class","h-10 w-10"),t(At,"class","bg-[#2e3855] flex justify-center items-center gap-2.5 p-5 rounded-[40px]"),t(Jt,"class","text-xl leading-[34px] font-Poppins w-[390px]"),t(ht,"class","text-sm leading-[26px] font-PublicSans h-[52px] w-[390px]"),t(Mt,"class","w-full flex-col h-full flex items-start"),t(Ft,"class","w-full flex-col flex items-start gap-2 font-bold text-center text-[#2e3855]"),t(lt,"class","w-full flex-1 flex-col flex items-center gap-6"),t(bt,"class","bg-[#e7f5f5] h-full flex-1 flex-col flex items-center gap-6 p-10 pb-20 rounded-[20px]"),t(nt,"class","w-full flex items-start gap-5"),t(ss,"class","text-xl leading-[34px] font-bold text-center text-[#2e3855] font-Poppins"),S(wt.src,Qs="/assets/new/mdi_linkedin.svg")||t(wt,"src",Qs),t(wt,"alt","mdi:linkedin"),t(wt,"class","h-10 w-10"),S(ns.src,jr="/assets/new/mdi_twitter.svg")||t(ns,"src",jr),t(ns,"alt","mdi:twitter"),t(ns,"class","h-10 w-10"),S(ms.src,ur="/assets/new/mdi_instagram.svg")||t(ms,"src",ur),t(ms,"alt","mdi:instagram"),t(ms,"class","h-10 w-10"),t(Qt,"class","flex justify-center items-center gap-4"),t(jt,"class","w-full flex justify-center items-center gap-10"),t(st,"class","bg-[#e7f5f5] flex-1 flex-col flex items-center gap-6 p-10 rounded-[20px]"),t(Kt,"class","w-full flex items-start gap-5"),t(re,"class","w-full flex-col flex items-center gap-5"),t(gt,"class","bg-white w-full flex-col flex items-center gap-[50px] px-[50px] py-10 rounded-[20px]"),t(m,"class","w-full flex-col flex items-start gap-5"),t(Er,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(fr,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S(is.src,sa="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(is,"src",sa),t(is,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t(is,"class","h-6 w-6"),S(us.src,sl="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(us,"src",sl),t(us,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(us,"class","h-6 w-6"),S(xs.src,ra="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(xs,"src",ra),t(xs,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(xs,"class","h-6 w-6"),t(Gs,"class","flex items-center gap-5"),t(Cs,"class","flex-1 flex justify-end items-center gap-10"),t(ls,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col w-full flex items-start gap-[60px] max-w-[1060px] rounded-[20px]"),t(l,"class","flex-col flex items-center gap-10 h-fit mt-20")},m(_n,aa){Qe(_n,l,aa),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,E),e(E,w),e(h,V),e(h,D),e(D,I),e(I,_),e(_,O),e(O,k),e(_,G),e(_,M),e(M,b),e(_,L),e(_,y),e(y,N),e(N,F),e(I,j),e(I,q),e(D,$),e(D,ce),e(ce,Se),e(D,z),e(D,R),e(R,se),e(se,ye),e(ye,ae),e(se,we),e(se,te),e(te,ve),e(se,Ne),e(se,Ve),e(Ve,ie),e(ie,_e),e(R,Y),e(R,Q),e(Q,Ee),e(Ee,pe),e(pe,me),e(Ee,ge),e(Ee,de),e(de,J),e(J,$e),e(Q,We),e(Q,xe),e(xe,X),e(X,He),e(xe,Ge),e(xe,ee),e(ee,Me),e(Me,Te),e(R,ze),e(R,Ie),e(Ie,he),e(he,ue),e(ue,rt),e(he,Je),e(he,Xe),e(Xe,P),e(P,B),e(Ie,U),e(Ie,W),e(W,Z),e(Z,oe),e(W,H),e(W,fe),e(fe,Pe),e(Pe,ne),e(fe,be),e(fe,vt),e(R,le),e(R,Ae),e(Ae,De),e(De,je),e(je,Fe),e(De,qe),e(De,ft),e(ft,ke),e(ke,Ze),e(R,Nt),e(R,Lt),e(Lt,Oe),e(Oe,mt),e(Oe,Le),e(Oe,at),e(at,ct),e(m,Ct),e(m,gt),e(gt,Dt),e(Dt,pt),e(pt,Bt),e(gt,kt),e(gt,re),e(re,nt),e(nt,Tt),e(Tt,Rt),e(Rt,it),e(it,dt),e(Rt,qt),e(Rt,ot),e(ot,xt),e(xt,et),e(et,St),e(xt,It),e(xt,Gt),e(Gt,es),e(xt,Vt),e(xt,Ue),e(Ue,ut),e(nt,Et),e(nt,bt),e(bt,lt),e(lt,At),e(At,yt),e(lt,zt),e(lt,Ft),e(Ft,Mt),e(Mt,Jt),e(Jt,Ht),e(Mt,Xt),e(Mt,ht),e(ht,Js),e(re,Vs),e(re,Kt),e(Kt,st),e(st,jt),e(jt,ss),e(ss,Xs),e(jt,Ps),e(jt,Qt),e(Qt,wt),e(Qt,ks),e(Qt,ns),e(Qt,Na),e(Qt,ms),e(i,_r),e(i,ls),e(ls,Er),e(Er,Yt),e(ls,Ss),e(ls,Cs),e(Cs,fr),e(fr,ta),e(Cs,di),e(Cs,Gs),e(Gs,is),e(Gs,pr),e(Gs,us),e(Gs,Ba),e(Gs,xs)},p:Re,i:Re,o:Re,d(_n){_n&&a(l)}}}class w4 extends yn{constructor(l){super(),wn(this,l,null,y4,ja,{})}}function _4(d){let l,i,u,v,g,x,m,h,E,w,V,D,I,_,O,k,A,G,M,b,L,y,N,F,C,j,q,K,$,ce,Se,z,R,se,ye,ae,Ke,we,te,ve,Ne,Ve,ie,_e,Ce,Y,Q,Ee,pe,me,ge,de,J,$e,We,xe,X,He,Ge,ee,Me;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("Financial options"),x=o(),m=s("div"),h=s("div"),E=s("div"),w=s("img"),D=o(),I=s("div"),_=s("div"),O=s("div"),k=s("div"),A=s("div"),G=f("Funding solutions"),M=o(),b=s("div"),L=f(`If you’re in adopting a power-from-waste project to make use of your current waste and feedback heat and
                  electricity, there are several funding options available to cover the initial costs (CAPEX) required to take
                  your project from feasibility to operation. These options include:
                  `),y=s("ul"),N=s("li"),F=f("Self-funding"),C=o(),j=s("li"),q=f("Asset finance"),K=o(),$=s("li"),ce=f("Equity funding"),Se=o(),z=s("li"),R=f("Grants"),se=o(),ye=s("li"),ae=f("Government subsidies"),Ke=o(),we=s("li"),te=f("Carbon credits"),ve=o(),Ne=s("li"),Ve=f("Plastic credits"),ie=f(`
                  Choose the option that best fits your business needs and get your power-from-waste project off the ground today.`),_e=o(),Ce=s("div"),Y=s("div"),Q=f("Copyright © 2023 Power for Planet"),Ee=o(),pe=s("div"),me=s("div"),ge=f("Privacy Policy"),de=o(),J=s("div"),$e=s("img"),xe=o(),X=s("img"),Ge=o(),ee=s("img"),this.h()},l(Te){l=r(Te,"DIV",{class:!0});var ze=n(l);i=r(ze,"DIV",{class:!0});var Ie=n(i);u=r(Ie,"DIV",{class:!0});var he=n(u);v=r(he,"DIV",{});var ue=n(v);g=p(ue,"Financial options"),ue.forEach(a),he.forEach(a),x=c(Ie),m=r(Ie,"DIV",{class:!0});var rt=n(m);h=r(rt,"DIV",{class:!0});var Je=n(h);E=r(Je,"DIV",{class:!0});var Xe=n(E);w=r(Xe,"IMG",{src:!0,alt:!0,class:!0}),Xe.forEach(a),D=c(Je),I=r(Je,"DIV",{class:!0});var P=n(I);_=r(P,"DIV",{class:!0});var B=n(_);O=r(B,"DIV",{class:!0});var U=n(O);k=r(U,"DIV",{class:!0});var W=n(k);A=r(W,"DIV",{class:!0});var Z=n(A);G=p(Z,"Funding solutions"),Z.forEach(a),M=c(W),b=r(W,"DIV",{class:!0});var oe=n(b);L=p(oe,`If you’re in adopting a power-from-waste project to make use of your current waste and feedback heat and
                  electricity, there are several funding options available to cover the initial costs (CAPEX) required to take
                  your project from feasibility to operation. These options include:
                  `),y=r(oe,"UL",{class:!0});var H=n(y);N=r(H,"LI",{});var fe=n(N);F=p(fe,"Self-funding"),fe.forEach(a),C=c(H),j=r(H,"LI",{});var Pe=n(j);q=p(Pe,"Asset finance"),Pe.forEach(a),K=c(H),$=r(H,"LI",{});var ne=n($);ce=p(ne,"Equity funding"),ne.forEach(a),Se=c(H),z=r(H,"LI",{});var be=n(z);R=p(be,"Grants"),be.forEach(a),se=c(H),ye=r(H,"LI",{});var vt=n(ye);ae=p(vt,"Government subsidies"),vt.forEach(a),Ke=c(H),we=r(H,"LI",{});var Be=n(we);te=p(Be,"Carbon credits"),Be.forEach(a),ve=c(H),Ne=r(H,"LI",{});var le=n(Ne);Ve=p(le,"Plastic credits"),le.forEach(a),H.forEach(a),ie=p(oe,`
                  Choose the option that best fits your business needs and get your power-from-waste project off the ground today.`),oe.forEach(a),W.forEach(a),U.forEach(a),B.forEach(a),P.forEach(a),Je.forEach(a),rt.forEach(a),_e=c(Ie),Ce=r(Ie,"DIV",{class:!0});var Ae=n(Ce);Y=r(Ae,"DIV",{class:!0});var De=n(Y);Q=p(De,"Copyright © 2023 Power for Planet"),De.forEach(a),Ee=c(Ae),pe=r(Ae,"DIV",{class:!0});var je=n(pe);me=r(je,"DIV",{class:!0});var Fe=n(me);ge=p(Fe,"Privacy Policy"),Fe.forEach(a),de=c(je),J=r(je,"DIV",{class:!0});var qe=n(J);$e=r(qe,"IMG",{src:!0,alt:!0,class:!0}),xe=c(qe),X=r(qe,"IMG",{src:!0,alt:!0,class:!0}),Ge=c(qe),ee=r(qe,"IMG",{src:!0,alt:!0,class:!0}),qe.forEach(a),je.forEach(a),Ae.forEach(a),Ie.forEach(a),ze.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),S(w.src,V="/assets/new/illu-costs-31-Frame24-31-Frame24-31-Frame18-31-Savecosts-31-blockrow2-31-wrapper-31-03Greenenergy.svg")||t(w,"src",V),t(w,"alt","illu-costs-31-Frame32-31-Purpose-31-blockrow1-31-Intro-31-wrapper-31-03Greenenergy"),t(w,"class","h-40 w-[186px] mt-28"),t(E,"class","h-full flex-1 flex-col flex justify-center items-center"),t(A,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(y,"class","list-disc p-5 pl-10"),t(b,"class","text-md leading-[26px] font-light font-PublicSans w-[650px]"),t(k,"class","h-full flex-1 flex-col flex items-start gap-[18px]"),t(O,"class","w-full flex justify-end items-start gap-[18px]"),t(_,"class","w-full flex-col flex items-start gap-[18px]"),t(I,"class","flex-1 flex-col flex items-start gap-6 text-[#2e3855]"),t(h,"class","bg-white w-full flex items-start gap-[60px] p-10 rounded-[20px]"),t(m,"class","w-full flex-col flex items-start gap-5"),t(Y,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(me,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S($e.src,We="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t($e,"src",We),t($e,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t($e,"class","h-6 w-6"),S(X.src,He="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(X,"src",He),t(X,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(X,"class","h-6 w-6"),S(ee.src,Me="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ee,"src",Me),t(ee,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(ee,"class","h-6 w-6"),t(J,"class","flex items-center gap-5"),t(pe,"class","flex-1 flex justify-end items-center gap-10"),t(Ce,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col w-full flex items-start gap-[60px] rounded-[20px] max-w-[1060px]"),t(l,"class","flex-col flex items-center gap-[50px] h-fit mt-20")},m(Te,ze){Qe(Te,l,ze),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,E),e(E,w),e(h,D),e(h,I),e(I,_),e(_,O),e(O,k),e(k,A),e(A,G),e(k,M),e(k,b),e(b,L),e(b,y),e(y,N),e(N,F),e(y,C),e(y,j),e(j,q),e(y,K),e(y,$),e($,ce),e(y,Se),e(y,z),e(z,R),e(y,se),e(y,ye),e(ye,ae),e(y,Ke),e(y,we),e(we,te),e(y,ve),e(y,Ne),e(Ne,Ve),e(b,ie),e(i,_e),e(i,Ce),e(Ce,Y),e(Y,Q),e(Ce,Ee),e(Ce,pe),e(pe,me),e(me,ge),e(pe,de),e(pe,J),e(J,$e),e(J,xe),e(J,X),e(J,Ge),e(J,ee)},p:Re,i:Re,o:Re,d(Te){Te&&a(l)}}}class E4 extends yn{constructor(l){super(),wn(this,l,null,_4,ja,{})}}function I4(d){let l,i,u,v,g,x,m,h,E,w,V,D,I,_,O,k,A,G,M,b,L,y,N,F,C,j,q,K,$,ce,Se,z,R,se,ye,ae,Ke,we,te,ve,Ne,Ve,ie,_e,Ce,Y,Q,Ee,pe,me,ge,de,J,$e,We,xe,X,He,Ge,ee,Me;return{c(){l=s("div"),i=s("div"),u=s("div"),v=s("div"),g=f("Frequently Asked Questions"),x=o(),m=s("div"),h=s("div"),E=s("div"),w=s("img"),D=o(),I=s("div"),_=s("div"),O=s("div"),k=s("div"),A=s("div"),G=f("Funding solutions"),M=o(),b=s("div"),L=f(`If you’re in adopting a power-from-waste project to make use of your current waste and feedback heat and
                  electricity, there are several funding options available to cover the initial costs (CAPEX) required to take
                  your project from feasibility to operation. These options include:
                  `),y=s("ul"),N=s("li"),F=f("Self-funding"),C=o(),j=s("li"),q=f("Asset finance"),K=o(),$=s("li"),ce=f("Equity funding"),Se=o(),z=s("li"),R=f("Grants"),se=o(),ye=s("li"),ae=f("Government subsidies"),Ke=o(),we=s("li"),te=f("Carbon credits"),ve=o(),Ne=s("li"),Ve=f("Plastic credits"),ie=f(`
                  Choose the option that best fits your business needs and get your power-from-waste project off the ground today.`),_e=o(),Ce=s("div"),Y=s("div"),Q=f("Copyright © 2023 Power for Planet"),Ee=o(),pe=s("div"),me=s("div"),ge=f("Privacy Policy"),de=o(),J=s("div"),$e=s("img"),xe=o(),X=s("img"),Ge=o(),ee=s("img"),this.h()},l(Te){l=r(Te,"DIV",{class:!0});var ze=n(l);i=r(ze,"DIV",{class:!0});var Ie=n(i);u=r(Ie,"DIV",{class:!0});var he=n(u);v=r(he,"DIV",{});var ue=n(v);g=p(ue,"Frequently Asked Questions"),ue.forEach(a),he.forEach(a),x=c(Ie),m=r(Ie,"DIV",{class:!0});var rt=n(m);h=r(rt,"DIV",{class:!0});var Je=n(h);E=r(Je,"DIV",{class:!0});var Xe=n(E);w=r(Xe,"IMG",{src:!0,alt:!0,class:!0}),Xe.forEach(a),D=c(Je),I=r(Je,"DIV",{class:!0});var P=n(I);_=r(P,"DIV",{class:!0});var B=n(_);O=r(B,"DIV",{class:!0});var U=n(O);k=r(U,"DIV",{class:!0});var W=n(k);A=r(W,"DIV",{class:!0});var Z=n(A);G=p(Z,"Funding solutions"),Z.forEach(a),M=c(W),b=r(W,"DIV",{class:!0});var oe=n(b);L=p(oe,`If you’re in adopting a power-from-waste project to make use of your current waste and feedback heat and
                  electricity, there are several funding options available to cover the initial costs (CAPEX) required to take
                  your project from feasibility to operation. These options include:
                  `),y=r(oe,"UL",{class:!0});var H=n(y);N=r(H,"LI",{});var fe=n(N);F=p(fe,"Self-funding"),fe.forEach(a),C=c(H),j=r(H,"LI",{});var Pe=n(j);q=p(Pe,"Asset finance"),Pe.forEach(a),K=c(H),$=r(H,"LI",{});var ne=n($);ce=p(ne,"Equity funding"),ne.forEach(a),Se=c(H),z=r(H,"LI",{});var be=n(z);R=p(be,"Grants"),be.forEach(a),se=c(H),ye=r(H,"LI",{});var vt=n(ye);ae=p(vt,"Government subsidies"),vt.forEach(a),Ke=c(H),we=r(H,"LI",{});var Be=n(we);te=p(Be,"Carbon credits"),Be.forEach(a),ve=c(H),Ne=r(H,"LI",{});var le=n(Ne);Ve=p(le,"Plastic credits"),le.forEach(a),H.forEach(a),ie=p(oe,`
                  Choose the option that best fits your business needs and get your power-from-waste project off the ground today.`),oe.forEach(a),W.forEach(a),U.forEach(a),B.forEach(a),P.forEach(a),Je.forEach(a),rt.forEach(a),_e=c(Ie),Ce=r(Ie,"DIV",{class:!0});var Ae=n(Ce);Y=r(Ae,"DIV",{class:!0});var De=n(Y);Q=p(De,"Copyright © 2023 Power for Planet"),De.forEach(a),Ee=c(Ae),pe=r(Ae,"DIV",{class:!0});var je=n(pe);me=r(je,"DIV",{class:!0});var Fe=n(me);ge=p(Fe,"Privacy Policy"),Fe.forEach(a),de=c(je),J=r(je,"DIV",{class:!0});var qe=n(J);$e=r(qe,"IMG",{src:!0,alt:!0,class:!0}),xe=c(qe),X=r(qe,"IMG",{src:!0,alt:!0,class:!0}),Ge=c(qe),ee=r(qe,"IMG",{src:!0,alt:!0,class:!0}),qe.forEach(a),je.forEach(a),Ae.forEach(a),Ie.forEach(a),ze.forEach(a),this.h()},h(){t(u,"class","w-full flex-col flex justify-center items-center gap-2.5 text-4xl leading-[46px] font-bold text-center text-[#2e3855] font-Poppins"),S(w.src,V="/assets/new/illu-costs-31-Frame24-31-Frame24-31-Frame18-31-Savecosts-31-blockrow2-31-wrapper-31-03Greenenergy.svg")||t(w,"src",V),t(w,"alt","illu-costs-31-Frame32-31-Purpose-31-blockrow1-31-Intro-31-wrapper-31-03Greenenergy"),t(w,"class","h-40 w-[186px] mt-28"),t(E,"class","h-full flex-1 flex-col flex justify-center items-center"),t(A,"class","text-2xl leading-[33px] font-bold font-Poppins w-[650px]"),t(y,"class","list-disc p-5 pl-10"),t(b,"class","text-md leading-[26px] font-light font-PublicSans w-[650px]"),t(k,"class","h-full flex-1 flex-col flex items-start gap-[18px]"),t(O,"class","w-full flex justify-end items-start gap-[18px]"),t(_,"class","w-full flex-col flex items-start gap-[18px]"),t(I,"class","flex-1 flex-col flex items-start gap-6 text-[#2e3855]"),t(h,"class","bg-white w-full flex items-start gap-[60px] p-10 rounded-[20px]"),t(m,"class","w-full flex-col flex items-start gap-5"),t(Y,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans w-[530px]"),t(me,"class","text-xs leading-[14px] font-semibold text-[#2e3855] font-PublicSans underline"),S($e.src,We="/assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg")||t($e,"src",We),t($e,"alt","mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy"),t($e,"class","h-6 w-6"),S(X.src,He="/assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(X,"src",He),t(X,"alt","mditwitter-31-social-31-right-31-footer-31-03Greenenergy"),t(X,"class","h-6 w-6"),S(ee.src,Me="/assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg")||t(ee,"src",Me),t(ee,"alt","CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy"),t(ee,"class","h-6 w-6"),t(J,"class","flex items-center gap-5"),t(pe,"class","flex-1 flex justify-end items-center gap-10"),t(Ce,"class","w-[1060px] flex justify-between items-center pt-[30px] pb-[50px]"),t(i,"class","flex-col w-full flex items-start gap-[60px] rounded-[20px] max-w-[1060px]"),t(l,"class","flex-col flex items-center gap-[50px] h-fit mt-20")},m(Te,ze){Qe(Te,l,ze),e(l,i),e(i,u),e(u,v),e(v,g),e(i,x),e(i,m),e(m,h),e(h,E),e(E,w),e(h,D),e(h,I),e(I,_),e(_,O),e(O,k),e(k,A),e(A,G),e(k,M),e(k,b),e(b,L),e(b,y),e(y,N),e(N,F),e(y,C),e(y,j),e(j,q),e(y,K),e(y,$),e($,ce),e(y,Se),e(y,z),e(z,R),e(y,se),e(y,ye),e(ye,ae),e(y,Ke),e(y,we),e(we,te),e(y,ve),e(y,Ne),e(Ne,Ve),e(b,ie),e(i,_e),e(i,Ce),e(Ce,Y),e(Y,Q),e(Ce,Ee),e(Ce,pe),e(pe,me),e(me,ge),e(pe,de),e(pe,J),e(J,$e),e(J,xe),e(J,X),e(J,Ge),e(J,ee)},p:Re,i:Re,o:Re,d(Te){Te&&a(l)}}}class D4 extends yn{constructor(l){super(),wn(this,l,null,I4,ja,{})}}function V4(d){let l;const i=d[2].default,u=p_(i,d,d[3],null);return{c(){u&&u.c()},l(v){u&&u.l(v)},m(v,g){u&&u.m(v,g),l=!0},p(v,g){u&&u.p&&(!l||g&8)&&v_(u,i,v,v[3],l?h_(i,v[3],g,null):g_(v[3]),null)},i(v){l||(Os(u,v),l=!0)},o(v){Ls(u,v),l=!1},d(v){u&&u.d(v)}}}function P4(d){let l,i;return l=new D4({}),{c(){Qn(l.$$.fragment)},l(u){Zn(l.$$.fragment,u)},m(u,v){el(l,u,v),i=!0},p:Re,i(u){i||(Os(l.$$.fragment,u),i=!0)},o(u){Ls(l.$$.fragment,u),i=!1},d(u){tl(l,u)}}}function k4(d){let l,i;return l=new E4({}),{c(){Qn(l.$$.fragment)},l(u){Zn(l.$$.fragment,u)},m(u,v){el(l,u,v),i=!0},p:Re,i(u){i||(Os(l.$$.fragment,u),i=!0)},o(u){Ls(l.$$.fragment,u),i=!1},d(u){tl(l,u)}}}function S4(d){let l,i;return l=new w4({}),{c(){Qn(l.$$.fragment)},l(u){Zn(l.$$.fragment,u)},m(u,v){el(l,u,v),i=!0},p:Re,i(u){i||(Os(l.$$.fragment,u),i=!0)},o(u){Ls(l.$$.fragment,u),i=!1},d(u){tl(l,u)}}}function T4(d){let l,i;return l=new AE({}),{c(){Qn(l.$$.fragment)},l(u){Zn(l.$$.fragment,u)},m(u,v){el(l,u,v),i=!0},p:Re,i(u){i||(Os(l.$$.fragment,u),i=!0)},o(u){Ls(l.$$.fragment,u),i=!1},d(u){tl(l,u)}}}function A4(d){let l,i;return l=new SE({}),{c(){Qn(l.$$.fragment)},l(u){Zn(l.$$.fragment,u)},m(u,v){el(l,u,v),i=!0},p:Re,i(u){i||(Os(l.$$.fragment,u),i=!0)},o(u){Ls(l.$$.fragment,u),i=!1},d(u){tl(l,u)}}}function F4(d){let l,i;return l=new c4({}),{c(){Qn(l.$$.fragment)},l(u){Zn(l.$$.fragment,u)},m(u,v){el(l,u,v),i=!0},p:Re,i(u){i||(Os(l.$$.fragment,u),i=!0)},o(u){Ls(l.$$.fragment,u),i=!1},d(u){tl(l,u)}}}function O4(d){let l,i;return l=new b4({}),{c(){Qn(l.$$.fragment)},l(u){Zn(l.$$.fragment,u)},m(u,v){el(l,u,v),i=!0},p:Re,i(u){i||(Os(l.$$.fragment,u),i=!0)},o(u){Ls(l.$$.fragment,u),i=!1},d(u){tl(l,u)}}}function L4(d){let l,i;return l=new m4({}),{c(){Qn(l.$$.fragment)},l(u){Zn(l.$$.fragment,u)},m(u,v){el(l,u,v),i=!0},p:Re,i(u){i||(Os(l.$$.fragment,u),i=!0)},o(u){Ls(l.$$.fragment,u),i=!1},d(u){tl(l,u)}}}function C4(d){let l,i;return l=new g4({}),{c(){Qn(l.$$.fragment)},l(u){Zn(l.$$.fragment,u)},m(u,v){el(l,u,v),i=!0},p:Re,i(u){i||(Os(l.$$.fragment,u),i=!0)},o(u){Ls(l.$$.fragment,u),i=!1},d(u){tl(l,u)}}}function G4(d){let l,i;return l=new p4({}),{c(){Qn(l.$$.fragment)},l(u){Zn(l.$$.fragment,u)},m(u,v){el(l,u,v),i=!0},p:Re,i(u){i||(Os(l.$$.fragment,u),i=!0)},o(u){Ls(l.$$.fragment,u),i=!1},d(u){tl(l,u)}}}function M4(d){let l,i;return l=new u4({}),{c(){Qn(l.$$.fragment)},l(u){Zn(l.$$.fragment,u)},m(u,v){el(l,u,v),i=!0},p:Re,i(u){i||(Os(l.$$.fragment,u),i=!0)},o(u){Ls(l.$$.fragment,u),i=!1},d(u){tl(l,u)}}}function j4(d){let l,i,u,v;const g=[M4,G4,C4,L4,O4,F4,A4,T4,S4,k4,P4,V4],x=[];function m(h,E){return h[0]=="/news"||h[0]=="/news/"?0:h[0]=="/news-item"||h[0]=="/news-item/"?1:h[0]=="/news-item2"||h[0]=="/news-item2/"?2:h[0]=="/news-item3"||h[0]=="/news-item3/"?3:h[0]=="/news-item4"||h[0]=="/news-item4/"?4:h[0]=="/explore"||h[0]=="/explore/"?5:h[0]=="/about"||h[0]=="/about/"?6:h[0]=="/green-energy"||h[0]=="/green-energy/"?7:h[0]=="/contact"||h[0]=="/contact/"?8:h[0]=="/resources/financial-options"||h[0]=="/resources/financial-options/"?9:h[0]=="/resources/articles"||h[0]=="/resources/articles/"?10:11}return l=m(d),i=x[l]=g[l](d),{c(){i.c(),u=ea()},l(h){i.l(h),u=ea()},m(h,E){x[l].m(h,E),Qe(h,u,E),v=!0},p(h,E){let w=l;l=m(h),l===w?x[l].p(h,E):(c2(),Ls(x[w],1,1,()=>{x[w]=null}),d2(),i=x[l],i?i.p(h,E):(i=x[l]=g[l](h),i.c()),Os(i,1),i.m(u.parentNode,u))},i(h){v||(Os(i),v=!0)},o(h){Ls(i),v=!1},d(h){x[l].d(h),h&&a(u)}}}function N4(d){let l,i,u,v,g,x;return l=new aE({}),u=new IE({props:{path:d[0]}}),g=new PE({props:{path:d[0],$$slots:{default:[j4]},$$scope:{ctx:d}}}),{c(){Qn(l.$$.fragment),i=o(),Qn(u.$$.fragment),v=o(),Qn(g.$$.fragment)},l(m){Zn(l.$$.fragment,m),i=c(m),Zn(u.$$.fragment,m),v=c(m),Zn(g.$$.fragment,m)},m(m,h){el(l,m,h),Qe(m,i,h),el(u,m,h),Qe(m,v,h),el(g,m,h),x=!0},p(m,[h]){const E={};h&1&&(E.path=m[0]),u.$set(E);const w={};h&1&&(w.path=m[0]),h&9&&(w.$$scope={dirty:h,ctx:m}),g.$set(w)},i(m){x||(Os(l.$$.fragment,m),Os(u.$$.fragment,m),Os(g.$$.fragment,m),x=!0)},o(m){Ls(l.$$.fragment,m),Ls(u.$$.fragment,m),Ls(g.$$.fragment,m),x=!1},d(m){tl(l,m),m&&a(i),tl(u,m),m&&a(v),tl(g,m)}}}function B4(d,l,i){let{$$slots:u={},$$scope:v}=l,{data:g}=l,{res:x,path:m}=g;return $_.set(x),q_.set(B_(x)),m_(()=>K_({immediate:!0,onRegistered:h=>h&&setInterval(async()=>await h.update(),198964),onRegisterError:h=>console.error(h)})),m[m.length-1]=="/"&&(m=m.slice(0,-1)),d.$$set=h=>{"data"in h&&i(1,g=h.data),"$$scope"in h&&i(3,v=h.$$scope)},d.$$.update=()=>{d.$$.dirty&2&&g&&i(0,m=g.path)},[m,g,u,v]}class W4 extends yn{constructor(l){super(),wn(this,l,B4,N4,ja,{data:1})}}export{W4 as component,Y4 as universal};
