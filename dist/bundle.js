(()=>{"use strict";var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,o),a.exports}o.m=n,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="resturaunt-page:",o.l=(n,r,a,d)=>{if(e[n])e[n].push(r);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var u=l[s];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+a),i.src=n),e[n]=[r];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=a);var d=o.p+o.u(t),i=new Error;o.l(d,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+d+")",i.name="ChunkLoadError",i.type=a,i.request=d,r[1](i)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,a,[d,i,c]=n,l=0;if(d.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);c&&c(o)}for(t&&t(n);l<d.length;l++)a=d[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunkresturaunt_page=self.webpackChunkresturaunt_page||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0;const a=o.p+"725e060a172285484a54.svg",d=((()=>{const e=new Image;e.src=a;const t=document.querySelector("div"),n=document.createElement("h1"),r=document.createElement("h2"),d=document.createElement("button"),i=document.createElement("button"),c=document.createElement("button"),l=document.createElement("div"),s=document.createElement("div"),u=document.createElement("div");u.classList.add("mainContainer"),s.classList.add("logoHeader"),e.classList.add("logo"),l.classList.add("header"),d.classList.add("contactTab","tab"),i.classList.add("homeTab","tab"),c.classList.add("menuTab","tab"),n.textContent="Babies Big Bites",r.textContent="Come on down to Babies Big Bites! The best late-night eatery around!",d.textContent="Contact",i.textContent="Home",c.textContent="Menu",t.appendChild(l),l.appendChild(d),l.appendChild(i),l.appendChild(c),t.appendChild(u),u.appendChild(s),s.appendChild(e),s.appendChild(n),t.appendChild(r),t.addEventListener("DOMContentLoaded",o.e(654).then(o.bind(o,654)))})(),document.querySelector("div")),i=(document.querySelector(".contactTab"),document.querySelectorAll("button"));console.log(i);for(let e of i)e.addEventListener("click",c);function c(){d.innerHTML="",(this.classlist="menuTab")&&(()=>{const e=new Image;e.src=a;const t=document.querySelector("div"),n=document.createElement("button");document.createElement("button"),document.createElement("button"),e.classList.add("logo"),t.appendChild(n)})()}})();