import{E as b,s as h}from"./index.6a262c57.js";const e=[];function d(o,a=b){let i;const n=new Set;function r(t){if(h(o,t)&&(o=t,i)){const c=!e.length;for(const s of n)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(o))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(i=a(r)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:l,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_xo3s1c)==null?void 0:f.base)??"";var u;const q=((u=globalThis.__sveltekit_xo3s1c)==null?void 0:u.assets)??p;export{q as a,p as b,d as w};
