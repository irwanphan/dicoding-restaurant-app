if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const o=e=>c(e,r),d={module:{uri:r},exports:a,require:o};i[r]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(s(...e),a)))}}define(["./workbox-94c66d79"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"a5d537c14bb1d985646ee10b7d0772cb"},{url:"app.bundle.js.LICENSE.txt",revision:"6c9ff479eafed49d53f9da1770dcb25c"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.ico",revision:"704843998b77b1e884d77997963fb3f6"},{url:"icons/icon-128x128.png",revision:"ef08b4225568cb339a8586391fd028e5"},{url:"icons/icon-144x144.png",revision:"b434e006ae1fc41e8c52cc223fd18968"},{url:"icons/icon-152x152.png",revision:"b27c667203e9a928f8ab50703734edad"},{url:"icons/icon-192x192.png",revision:"942a3e2cb9227d4dd5444f544a8a8b13"},{url:"icons/icon-384x384.png",revision:"e318f6c6565f1a7450e1e021237aece6"},{url:"icons/icon-512x512.png",revision:"4a01b9da732680e6accf056a9a073142"},{url:"icons/icon-72x72.png",revision:"dc00735f992c12050bf5765f6516ce28"},{url:"icons/icon-96x96.png",revision:"f27d692571cb34b2aaf0ec28e6c6fd7f"},{url:"images/github.svg",revision:"2814ac8dd716ffc7ca51f42546e24f7a"},{url:"images/heros/hero-image.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/instagram.svg",revision:"a4caa420d0d15fe6d4367dd85c220e63"},{url:"images/linkedin.svg",revision:"08f988189034f6be8e78abea75ccfbaf"},{url:"images/logo.svg",revision:"2872b7b04840c07ef86e7c16969c6ddd"},{url:"index.html",revision:"79d3355f2d87ebfd6cccd8ebc2474d70"},{url:"manifest.json",revision:"1ac7d3d1c428a5135c72ae947469b404"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/")),new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
