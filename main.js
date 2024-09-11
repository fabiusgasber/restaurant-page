(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>g});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),u=new URL(t(71),t.b),l=new URL(t(238),t.b),d=new URL(t(517),t.b),p=i()(o()),m=s()(u),f=s()(l),h=s()(d);p.push([e.id,`:root {\n    color: white;\n}\n\nh1, p {\n    margin: 0;\n    margin-block-start: 0;\n    margin-block-end: 0;\n}\n\n@font-face {\n    font-family: playfair;\n    src: url(${m});\n}\n\n@font-face {\n    font-family: montserrat;\n    src: url(${f});\n}\n\nbody {\n    background-color: black;\n    display: grid;\n    font-family: montserrat;\n    padding: 20px;\n    justify-items: center;\n    align-content: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    gap: 3rem;\n    overflow: hidden;\n}\n\n.home h1 {\n    font-size: 5rem;\n}\n\nh1 {\n    font-family: playfair;\n    font-weight: 100;\n}\n\n.courseInfo {\n    font-size: smaller;\n    font-style: italic;\n}\n\n.menuDescription, .winePairing {\n    font-size: 15px;\n}\n\nbody::before {\n    content: " ";\n    background: no-repeat fixed center/100vw url(${h});\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n    opacity: 0.4;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\ndiv#content, header {\n    position: relative;\n}\n\n.menu, .home, .contact {\n    height: 70vh;\n    max-height: 700px;\n    width: 80vw;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-auto-rows: 1fr;\n    grid-auto-columns: 1fr;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 30px 50px;\n    overflow-y: auto;\n}\n\n.home {\n    line-height: 1.5;\n    justify-items: center;\n    align-items: center;\n    grid-template-rows: repeat(3, 1fr);\n    gap: 20px;\n}\n\n.home button {\n    align-self: start;\n}\n\n.menu {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    align-items: center;\n    line-height: 1.5;\n    gap: 1rem;\n}\n\n.menu > h1 {\n    text-align: center;\n    grid-column: span 2;\n}\n\n.menuHeadline {\n    color: rgb(213, 103, 0);\n}\n\nbutton {\n    appearance: none;\n    font-family: inherit;\n    font-size: 100%;\n    width: 15vw;\n    max-width: 200px;\n    min-width: 100px;\n    height: 30px;\n    margin: 0;\n    padding: 5px;\n    border: none;\n    border-radius: 10px;\n    background-color: rgb(213, 103, 0);\n    transition-duration: 1s;\n    color: white;\n}\n\nbutton:hover {\n    background-color: rgb(128, 62, 1);\n    color: white;\n    cursor: pointer;\n}\n\n\nul, ul li {\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\nul {\n    gap: 5rem;\n}\n\nul li:hover {\n    text-decoration-line: underline;\n    text-decoration-color: rgb(213, 103, 0);\n    cursor: pointer;\n}\n\n.contact {\n    justify-items: center;\n    gap: 2em;\n}\n\n.contact ul {\n    flex-direction: column;\n    gap: 0;\n}\n\n.contact ul li:hover {\n    text-decoration: none;\n    cursor: auto;\n}\n\n#contact-form {\n    display: grid;\n    justify-items: center;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\ntextarea {\n    grid-column: span 2;\n    border-radius: 10px;\n    padding: 10px;\n    width: 500px;\n    height: 50px;\n    font-family: inherit;\n    font-size: inherit;\n}\n\nform input {\n    appearance: none;\n    border: none;\n    width: 15rem;\n    height: 10px;\n    border-radius: 10px;\n    padding: 15px;\n    font-family: inherit;\n    font-size: inherit;\n}`,""]);const g=p},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=t(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},238:(e,n,t)=>{e.exports=t.p+"7e687123cd4528224ce5.ttf"},71:(e,n,t)=>{e.exports=t.p+"bf46a6bcddc9999a295e.ttf"},517:(e,n,t)=>{e.exports=t.p+"984c3e6b890e4008a696.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),u=t(56),l=t.n(u),d=t(540),p=t.n(d),m=t(113),f=t.n(m),h=t(365),g={};function v(){const e=document.createElement("div");e.classList.add("menu");const n=document.createElement("h1");n.textContent="Menu",e.appendChild(n),[{courseInfo:"First Course",menuHeadline:"Heirloom Tomato & Burrata Salad",menuDescription:"Delicate heirloom tomatoes, creamy burrata, basil oil, and a balsamic reduction.",winePairing:"Wine Pairing: Sauvignon Blanc",price:"22"},{courseInfo:"Main Course",menuHeadline:"Seared Duck Breast",menuDescription:"Pan-seared duck breast served with caramelized shallots, truffle-infused mashed potatoes, and a rich blackberry port reduction.",winePairing:"Wine Pairing: Pinot Noir",price:"38"},{courseInfo:"Dessert",menuHeadline:"Lavender Honey Crème Brûlée",menuDescription:"Silky custard infused with lavender and honey, topped with a golden caramelized sugar crust.",winePairing:"Wine Pairing: Late Harvest Riesling",price:"27"}].forEach((n=>{const t=document.createElement("div"),r=document.createElement("p");r.textContent=n.courseInfo,r.classList.add("courseInfo");const o=document.createElement("h1");o.textContent=n.menuHeadline,o.classList.add("menuHeadline");const a=document.createElement("p");a.textContent=n.menuDescription,a.classList.add("menuDescription");const i=document.createElement("p");i.textContent=n.winePairing,i.classList.add("winePairing");const c=document.createElement("p");c.textContent=n.price,t.append(r,o,a,i),e.append(t,c)}));const t=document.querySelector("div#content");t.innerHTML="",t.append(e)}function b(){const e=document.createElement("div");e.classList.add("home");const n=document.createElement("h1");n.textContent="Welcome to Terra & Vine";const t=document.createElement("p");t.textContent="Nestled in the heart of wine country, Terra & Vine celebrates the union of earth’s finest ingredients and handcrafted wines. Our menu showcases locally sourced, seasonal produce, paired perfectly with our curated selection of regional and international wines. At Terra & Vine, we invite you to savor elegant flavors, in a warm and inviting atmosphere. Join us for a culinary journey that pays homage to the land and the vine.";const r=document.createElement("button");r.textContent="Menu",r.id="homeMenu",r.addEventListener("click",v);const o=[n,t,r];e.append(...o),document.querySelector("div#content").append(e)}function y(e,n,t,r){const o=document.createElement("input");return o.type=e,o.name=n,o.required=t,o.placeholder=r,o}function x(e){const n=e.target.id;switch(document.querySelector("div#content").innerHTML="",n){case"menuBtn":v();break;case"contactBtn":!function(){const e=document.createElement("div");e.classList.add("contact");const n=document.createElement("h1");n.textContent="Get in touch with us";const t=document.createElement("p");t.textContent="Have any questions or need assistance? We're here to help! Fill out the form below, and our team will get back to you as soon as possible.";const r=function(){const e=document.createElement("form");e.action="",e.method="get",e.id="contact-form",e.classList.add("contact-form");const n=y("text","firstName",!0,"First Name"),t=y("text","lastName",!0,"Last Name"),r=y("email","email",!0,"E-Mail"),o=y("tel","tel",!0,"Telephone Number"),a=document.createElement("textarea");a.name="textarea",a.placeholder="Please write down your message for us",a.required=!0;const i=[n,t,r,o,a];return e.append(...i),e}(),o=document.createElement("button");o.setAttribute("form","contact-form"),o.name="submit",o.value="Submit",o.textContent="Submit",e.append(n,t,r,o),document.querySelector("div#content").append(e)}();break;default:b()}}g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(h.A,g),h.A&&h.A.locals&&h.A.locals,document.querySelectorAll("li").forEach((e=>e.addEventListener("click",x))),b()})();