"use strict";(self.webpackChunkresturaunt_page=self.webpackChunkresturaunt_page||[]).push([[654],{426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"* {\n    margin: 0; \n    padding: 0;\n}\n\nbutton {\n    padding: 20px;\n    background: #d946ef;\n    width: 10rem;\n\n    border-radius: 10%;\n\n    font-size: 2rem;\n}\n\n.switchContainer {\n    margin-top: 32px;\n    height: -webkit-fill-available;\n}\n\n/* home page */\nh1 {\n    font-size: 5rem;\n    font-weight: 700;\n    margin-bottom: 10px;\n    position: relative;\n    top: 214px;\n    right: -85px;\n\n    text-shadow: 4px 4px 2px rgba(150, 150, 150, 1);\n    color: rgb(112, 26, 117, .9);\n}\n\n.mainContainer {\n    height: 52vh;\n}\n\n.logoHeader {\n    position: relative;\n    margin-top: 32px;\n    margin-bottom: 32px;\n}\n\n.logo {\n    height: 20rem;\n    position: absolute;\n    top: 30px;\n    right: 94px;\n    \n}\n\n    \n\n.header {\n    display: flex;\n    gap: 20%;\n    width: 80%;\n    margin-top: 32px;\n}\n\n/* contactPage */\n\n.babyCard {\n    background: #FFF;\n    width: 400px;\n    height: 200px;\n    padding: 20px;\n    margin-top: 20%;\n\n    display: flex;\n\n    border: solid #d946ef;\n}\n\n.babyCard > img {\n    height: 80%;\n    align-self: center;\n    \n}\n\n.babyCardText {\n    display: flex;\n    flex-direction: column;\n\n    max-width: 70%;\n\n    white-space: pre-line;\n}\n\n.babyName {\n    font-weight: 700;\n    font-size: 2rem;\n}\n\n.babyDetails {\n    align-self: center;\n\n    font-weight: 700;\n\n    \n}\n\n.babyDetails > * {\n    margin: 30px;\n\n    \n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},654:(n,e,t)=>{t.r(e),t.d(e,{default:()=>v});var r=t(379),a=t.n(r),o=t(795),i=t.n(o),s=t(569),c=t.n(s),p=t(565),l=t.n(p),u=t(216),d=t.n(u),f=t(589),h=t.n(f),m=t(426),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d(),a()(m.Z,g);const v=m.Z&&m.Z.locals?m.Z.locals:void 0},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],p=r.base?c[0]+r.base:c[0],l=o[p]||0,u="".concat(p," ").concat(l);o[p]=l+1;var d=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var h=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),p=0;p<o.length;p++){var l=t(o[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);