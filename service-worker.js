if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const d=e=>r(e,a),o={module:{uri:a},exports:c,require:d};i[a]=Promise.all(s.map((e=>o[e]||d(e)))).then((e=>(n(...e),c)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"a2ced84972f9a9741ad4.png",revision:null},{url:"img/bestsellers/IMAGE__1.png",revision:"c225cffd47217eae16a6526194b5ba15"},{url:"img/bestsellers/IMAGE__2.png",revision:"51031ab97b59e5592f53315b19bccdbb"},{url:"img/bestsellers/IMAGE__3.png",revision:"0d33539e482be1a9ee4ff5ab25e24b6d"},{url:"img/logotype.png",revision:"50abb3e8829583c69149f7fd573f2f04"},{url:"img/main-puzzles/1.png",revision:"5b56f4b3248518ac941499725476b2d0"},{url:"img/main-puzzles/2.png",revision:"6a8051a58fdf66b32fc0b593a16f3bfa"},{url:"img/main-puzzles/3.png",revision:"8a13a01193d5d5e80ee9c88b9adafe11"},{url:"img/puzzles-info/premium.png",revision:"d2a01533826a927ecba8ce0d0eead0bf"},{url:"img/puzzles-info/unique.png",revision:"e4e46a086aa262986bf27046ce242c59"},{url:"img/recommended/recom__1.png",revision:"28801db409e095ef06b9cc551e84faed"},{url:"img/recommended/recom__2.png",revision:"c2008edc906dbbea16c71b9149994cc3"},{url:"img/recommended/recom__3.png",revision:"3559456591727245fbd663e0a1063e96"},{url:"img/recommended/recom__4.png",revision:"8ef15443f882c811ea91313bed271f7e"},{url:"index.html",revision:"8ddebe6d030faac06dafccb9bb791cff"},{url:"main.bfdeadd113ce2e690a9c.js",revision:null},{url:"main.bfdeadd113ce2e690a9c.js.LICENSE.txt",revision:"02ab01ac4d3105ae5d891a416df1a9f7"},{url:"main.css",revision:"b6882124998e124b9072ff492f27a2e4"},{url:"svg/facebook.svg",revision:"0e7d913aaeb4bce109a3e985220befe5"},{url:"svg/instagram.svg",revision:"596a3cbd68f6ecbf71a05f7c7d17a528"},{url:"svg/like-black.svg",revision:"9ae11d41e123ee16041990b7db3f0adf"},{url:"svg/pintrest.svg",revision:"5b189713e31a715e41088817a5545493"},{url:"svg/user/heart__like.svg",revision:"1acd6549da2557967855a773cb7b9c17"},{url:"svg/user/market.svg",revision:"b3889df38671b2296c84684900b071c9"},{url:"svg/user/person.svg",revision:"e86bc41342bad54b46cc36190b28fd47"},{url:"svg/whatsapp.svg",revision:"19e7f9734028794ee5ddf19ae661c4d2"}],{})}));
