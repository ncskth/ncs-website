import{S as t,i as s,s as e,a,e as n,t as i,q as o,d as c,c as r,b as l,f as h,g as u,h as f,j as m,k as p,l as d,n as v}from"./client.b47b3e25.js";function j(t){let s,e,j,b,g,x,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){e=a(),j=n("h1"),b=i(E),g=a(),x=n("div"),this.h()},l(t){o('[data-svelte="svelte-1uty71u"]',document.head).forEach(c),e=r(t),j=l(t,"H1",{});var s=h(j);b=u(s,E),s.forEach(c),g=r(t),x=l(t,"DIV",{class:!0}),h(x).forEach(c),this.h()},h(){f(x,"class","content svelte-emm3f3")},m(t,s){m(t,e,s),m(t,j,s),p(j,b),m(t,g,s),m(t,x,s),x.innerHTML=H},p(t,[e]){1&e&&s!==(s=t[0].title)&&(document.title=s),1&e&&E!==(E=t[0].title+"")&&d(b,E),1&e&&H!==(H=t[0].html+"")&&(x.innerHTML=H)},i:v,o:v,d(t){t&&c(e),t&&c(j),t&&c(g),t&&c(x)}}}async function b({params:t}){const s=await this.fetch(`science/${t.slug}.json`),e=await s.json();if(200===s.status)return{post:e};this.error(s.status,e.message)}function g(t,s,e){let{post:a}=s;return t.$$set=t=>{"post"in t&&e(0,a=t.post)},[a]}export default class extends t{constructor(t){super(),s(this,t,g,j,e,{post:0})}}export{b as preload};
