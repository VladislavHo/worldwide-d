if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const f=e=>a(e,c),b={module:{uri:c},exports:n,require:f};i[c]=Promise.all(r.map((e=>b[e]||f(e)))).then((e=>(s(...e),n)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"a1db3237c28c74020536.png",revision:null},{url:"a2ced84972f9a9741ad4.png",revision:null},{url:"img/active-puzzles/image-1-bg.png",revision:"f08af4dc1dbf5200cf2ce6a383b1eab1"},{url:"img/active-puzzles/image-1.png",revision:"80ca9da82ff8b9ee735a8e76f36fdaa1"},{url:"img/active-puzzles/image-2-bg.png",revision:"12b4da27a3a730e3b20078097fa1fbce"},{url:"img/active-puzzles/image-2.png",revision:"ed766c82e09cbd0db11a0a91da719296"},{url:"img/active-puzzles/image-3-bg.png",revision:"274162d76ba91b709741fec5fa6eae90"},{url:"img/active-puzzles/image-3.png",revision:"86cbac312d72b03a8fa73687d363dfbc"},{url:"img/active-puzzles/image-4-bg.png",revision:"12b4da27a3a730e3b20078097fa1fbce"},{url:"img/active-puzzles/image-4.png",revision:"246cc8ebccdf4235f90499f5ff91b557"},{url:"img/all-categories/Group-1.png",revision:"791ebf7fdf3435997ef5c1d47257d7f1"},{url:"img/all-categories/Group-2.png",revision:"0a9eb5403aee57bcbac17c6cfbf2e3fb"},{url:"img/all-categories/Group-3.png",revision:"1ddab83b4cc09c3a08299aab024e255e"},{url:"img/all-categories/Group-4.png",revision:"303633e6619264a07508709ddf134600"},{url:"img/animal/IMAGE-1.png",revision:"164b89d883d0ac7e1d13a785c160ebde"},{url:"img/animal/IMAGE-2.png",revision:"e58d5ee637c8b1590177479ec4cdccca"},{url:"img/animal/IMAGE.png",revision:"eea7d8534c71903b84630ebcd25ccaac"},{url:"img/best-art/IMAGE-1.png",revision:"d823efd84f7764209335d79aad986353"},{url:"img/best-art/IMAGE-2.png",revision:"9d5231fc9764e6e65c6bdfc0cc56c914"},{url:"img/best-art/IMAGE-3.png",revision:"95ea5504b98a3017fc355aa28478779a"},{url:"img/best-art/IMAGE-4.png",revision:"2a89c0a80f62f5ed97fb44571c11044c"},{url:"img/best-art/IMAGE-5.png",revision:"d5d2b96afbf8b8220444e9d2899bf711"},{url:"img/bestsellers/IMAGE__1.png",revision:"c225cffd47217eae16a6526194b5ba15"},{url:"img/bestsellers/IMAGE__2.png",revision:"51031ab97b59e5592f53315b19bccdbb"},{url:"img/bestsellers/IMAGE__3.png",revision:"0d33539e482be1a9ee4ff5ab25e24b6d"},{url:"img/cards-positive/1.png",revision:"1cb12f3fea58f44f1eb89af36d656ff0"},{url:"img/cards-positive/2.png",revision:"30909a25e9d9a44277a25512c58c50cf"},{url:"img/cards-positive/3.png",revision:"326af650184daffdfab1c72e21f09496"},{url:"img/gift-box/1.png",revision:"2b995e189aad22796f3067f9847f5b37"},{url:"img/gift-box/2.png",revision:"b7bfff1a74f0ae2e83bdd7eff57a5fea"},{url:"img/gift-box/3.png",revision:"a09d5696726210ed52e9ffd862a9df12"},{url:"img/gift-box/4.png",revision:"31e7e442fccb509485037dc641c79da5"},{url:"img/gift-box/gift-box-bg.png",revision:"e32e233822655244cad3d34a38b185af"},{url:"img/gift-box/gift-box.png",revision:"e5a0db27f4e16df9eb27c1b392810265"},{url:"img/logotype.png",revision:"50abb3e8829583c69149f7fd573f2f04"},{url:"img/main-puzzles/1.png",revision:"5b56f4b3248518ac941499725476b2d0"},{url:"img/main-puzzles/2.png",revision:"6a8051a58fdf66b32fc0b593a16f3bfa"},{url:"img/main-puzzles/3.png",revision:"8a13a01193d5d5e80ee9c88b9adafe11"},{url:"img/mountain.png",revision:"b0177214c42845eaf753867ee23c0a4a"},{url:"img/puzzles-info/premium.png",revision:"d2a01533826a927ecba8ce0d0eead0bf"},{url:"img/puzzles-info/unique.png",revision:"e4e46a086aa262986bf27046ce242c59"},{url:"img/recommended/recom__1.png",revision:"28801db409e095ef06b9cc551e84faed"},{url:"img/recommended/recom__2.png",revision:"c2008edc906dbbea16c71b9149994cc3"},{url:"img/recommended/recom__3.png",revision:"3559456591727245fbd663e0a1063e96"},{url:"img/recommended/recom__4.png",revision:"8ef15443f882c811ea91313bed271f7e"},{url:"img/wheel/1111.png",revision:"e471a34950904884f0e00b2470a4a432"},{url:"img/wheel/2222.png",revision:"89585990bb3e6bf08da7f210462a6b0c"},{url:"index.html",revision:"3310261c7ab84e3614167bb2ac276d04"},{url:"main.aefce34bbc6db58fe556.js",revision:null},{url:"main.aefce34bbc6db58fe556.js.LICENSE.txt",revision:"02ab01ac4d3105ae5d891a416df1a9f7"},{url:"main.css",revision:"6ecc6d0c85c3655e482551611613847a"},{url:"svg/Handbag.svg",revision:"9df47f6a482f57a03d8def6005fb907f"},{url:"svg/cards-positive/bulb.svg",revision:"f12283a58e2f0b81319631bfe0a76dbb"},{url:"svg/cards-positive/child.svg",revision:"b7730842d1fdff75d04965aee4e613ac"},{url:"svg/cards-positive/family.svg",revision:"951bcdf35882047c34e20a44b6fc97ec"},{url:"svg/facebook.svg",revision:"0e7d913aaeb4bce109a3e985220befe5"},{url:"svg/instagram.svg",revision:"596a3cbd68f6ecbf71a05f7c7d17a528"},{url:"svg/like-black.svg",revision:"9ae11d41e123ee16041990b7db3f0adf"},{url:"svg/pintrest.svg",revision:"5b189713e31a715e41088817a5545493"},{url:"svg/user/heart__like.svg",revision:"1acd6549da2557967855a773cb7b9c17"},{url:"svg/user/market.svg",revision:"b3889df38671b2296c84684900b071c9"},{url:"svg/user/person.svg",revision:"e86bc41342bad54b46cc36190b28fd47"},{url:"svg/whatsapp.svg",revision:"19e7f9734028794ee5ddf19ae661c4d2"}],{})}));
