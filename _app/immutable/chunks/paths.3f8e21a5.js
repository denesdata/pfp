import{E as c,s as g}from"./index.6a262c57.js";const e=[];function d(n,a=c){let i;const o=new Set;function r(t){if(g(n,t)&&(n=t,i)){const b=!e.length;for(const s of o)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(n))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(i=a(r)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:l,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_1bkngws)==null?void 0:f.base)??"";var u;const k=((u=globalThis.__sveltekit_1bkngws)==null?void 0:u.assets)??h;export{k as a,h as b,d as w};
