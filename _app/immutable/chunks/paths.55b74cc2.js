import{E as b,s as h}from"./index.28483bdd.js";const e=[];function d(i,a=b){let n;const o=new Set;function r(t){if(h(i,t)&&(i=t,n)){const c=!e.length;for(const s of o)s[1](),e.push(s,i);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(i))}function _(t,c=b){const s=[t,c];return o.add(s),o.size===1&&(n=a(r)||b),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_1s92vcs)==null?void 0:f.base)??"";var u;const q=((u=globalThis.__sveltekit_1s92vcs)==null?void 0:u.assets)??p;export{q as a,p as b,d as w};