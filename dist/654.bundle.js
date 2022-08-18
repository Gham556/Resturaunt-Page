"use strict";(self.webpackChunkresturaunt_page=self.webpackChunkresturaunt_page||[]).push([[654],{426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n    margin: 0; \n    padding: 0;\n}\n\nbutton {\n    padding: 20px;\n    background: #d946ef;\n    width: 10rem;\n\n    border-radius: 10%;\n\n    font-size: 2rem;\n}\n\n.switchContainer {\n    margin-top: 32px;\n}\n\n/* home page */\nh1 {\n    font-size: 5rem;\n    font-weight: 700;\n    margin-bottom: 10px;\n    position: relative;\n    top: 214px;\n    right: -85px;\n\n    text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);\n    color: rgb(112, 26, 117, .9);\n}\n\n.mainContainer {\n    height: 52vh;\n}\n\n.logoHeader {\n    position: relative;\n    margin-top: 32px;\n    margin-bottom: 32px;\n}\n\n.logo {\n    height: 20rem;\n    position: absolute;\n    top: 30px;\n    right: 94px;\n    \n}\n\n    \n\n.header {\n    display: flex;\n    gap: 20%;\n    width: 80%;\n    margin-top: 32px;\n}\n\n/* contactPage */\n\n.babyCard {\n    background: #FFF;\n    width: 100px;\n    padding: 20px;\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},654:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var r=t(379),o=t.n(r),a=t(795),i=t.n(a),s=t(569),c=t.n(s),p=t(565),u=t.n(p),d=t(216),l=t.n(d),f=t(589),h=t.n(f),m=t(426),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=l(),o()(m.Z,v);const g=m.Z&&m.Z.locals?m.Z.locals:void 0},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],p=r.base?c[0]+r.base:c[0],u=a[p]||0,d="".concat(p," ").concat(u);a[p]=u+1;var l=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),p=0;p<a.length;p++){var u=t(a[p]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);