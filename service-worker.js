if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let s={};const g=e=>a(e,f),n={module:{uri:f},exports:s,require:g};i[f]=Promise.all(r.map((e=>n[e]||g(e)))).then((e=>(c(...e),s)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"1ce0ec0ae1885143469f.otf",revision:null},{url:"1ee1119f16a9689b6a02.png",revision:null},{url:"3442741e4c9a0b51d5a2.png",revision:null},{url:"6b0734123098771f7985.png",revision:null},{url:"82f96008015afc1bed87.png",revision:null},{url:"a1db3237c28c74020536.png",revision:null},{url:"c30669f60081a5028c14.svg",revision:null},{url:"d04f43628e30e0d694ee.png",revision:null},{url:"fonts/ciclista/Ciclista License .txt",revision:"434b26fc8f47d03a1dc17589022d5b7c"},{url:"fonts/ciclista/Ciclista-Basic.otf",revision:"05425f47f6711ec3a721368249f7f175"},{url:"fonts/ciclista/Ciclista-BasicRough.otf",revision:"afe6e1c734f1dab853a355390e5e592d"},{url:"fonts/ciclista/Ciclista-Mountain.otf",revision:"90c20facfdbb28f1e4a8a3664efe3b41"},{url:"fonts/ciclista/Ciclista-MountainRough.otf",revision:"7edb56ade42846ccfd6f5d3e717d761c"},{url:"img/about-active-puzzles/image 19184.png",revision:"f93590a7168836c3b5b025c682621256"},{url:"img/about-active-puzzles/image 19185.png",revision:"d55a2b2677a74f2ccdd721621511aa03"},{url:"img/about-active-puzzles/image 19186.png",revision:"e53d1ed752ff03775087470c5a3fe736"},{url:"img/about-active-puzzles/image 19187.png",revision:"f19f26bf2fbe2473ffd345ceed2a5581"},{url:"img/about-active-puzzles/image 19188.png",revision:"fe2d0283de53b5fe1286b83eb82b5263"},{url:"img/about-block.png",revision:"5c9cb1a7158166dccc992a4676177654"},{url:"img/active-puzzles/image-1-bg.png",revision:"f08af4dc1dbf5200cf2ce6a383b1eab1"},{url:"img/active-puzzles/image-1.png",revision:"80ca9da82ff8b9ee735a8e76f36fdaa1"},{url:"img/active-puzzles/image-2-bg.png",revision:"12b4da27a3a730e3b20078097fa1fbce"},{url:"img/active-puzzles/image-2.png",revision:"ed766c82e09cbd0db11a0a91da719296"},{url:"img/active-puzzles/image-3-bg.png",revision:"274162d76ba91b709741fec5fa6eae90"},{url:"img/active-puzzles/image-3.png",revision:"86cbac312d72b03a8fa73687d363dfbc"},{url:"img/active-puzzles/image-4-bg.png",revision:"12b4da27a3a730e3b20078097fa1fbce"},{url:"img/active-puzzles/image-4.png",revision:"246cc8ebccdf4235f90499f5ff91b557"},{url:"img/all-categories/Group-1.png",revision:"791ebf7fdf3435997ef5c1d47257d7f1"},{url:"img/all-categories/Group-2.png",revision:"0a9eb5403aee57bcbac17c6cfbf2e3fb"},{url:"img/all-categories/Group-3.png",revision:"1ddab83b4cc09c3a08299aab024e255e"},{url:"img/all-categories/Group-4.png",revision:"303633e6619264a07508709ddf134600"},{url:"img/all-categories/Group-5.png",revision:"b3cea5cd6be13df106192829398643fc"},{url:"img/all-categories/Group-6.png",revision:"a5c5cff8a68ca034f8c1f40cbf7855fa"},{url:"img/animal/IMAGE-1.png",revision:"164b89d883d0ac7e1d13a785c160ebde"},{url:"img/animal/IMAGE-2.png",revision:"e58d5ee637c8b1590177479ec4cdccca"},{url:"img/animal/IMAGE.png",revision:"eea7d8534c71903b84630ebcd25ccaac"},{url:"img/best-art/IMAGE-1.png",revision:"d823efd84f7764209335d79aad986353"},{url:"img/best-art/IMAGE-2.png",revision:"9d5231fc9764e6e65c6bdfc0cc56c914"},{url:"img/best-art/IMAGE-3.png",revision:"95ea5504b98a3017fc355aa28478779a"},{url:"img/best-art/IMAGE-4.png",revision:"2a89c0a80f62f5ed97fb44571c11044c"},{url:"img/best-art/IMAGE-5.png",revision:"d5d2b96afbf8b8220444e9d2899bf711"},{url:"img/bestsellers/IMAGE__1.png",revision:"c225cffd47217eae16a6526194b5ba15"},{url:"img/bestsellers/IMAGE__2.png",revision:"51031ab97b59e5592f53315b19bccdbb"},{url:"img/bestsellers/IMAGE__3.png",revision:"0d33539e482be1a9ee4ff5ab25e24b6d"},{url:"img/bg-page/image-bg-page-1.png",revision:"5bc33f2190ed75c529042fe6984429e2"},{url:"img/bg-page/image-bg-page-2.png",revision:"5ed5a5afca378657b4da5f121f68eae2"},{url:"img/bg-page/image-bg-page-3.png",revision:"c22a31d8d955299de4ac16696ae690e7"},{url:"img/blog-posts.png",revision:"eedc3c51f3a04703231b16b6dd1486a0"},{url:"img/card-list/Rectangle 794.png",revision:"774ac65739dc61d4723e90d15b077f0a"},{url:"img/card-list/Rectangle 795.png",revision:"6c2797a9e5f07e0da4da5ddfb2858c61"},{url:"img/card-list/Rectangle 796.png",revision:"a96ef995f18b1c4826546bcbe51d3a2f"},{url:"img/card-list/Rectangle 797.png",revision:"f525d158c1f7ff216e868a4b285a5d9a"},{url:"img/card-list/Rectangle 798.png",revision:"435e79740171910d802695fc14a662da"},{url:"img/card-list/Rectangle 799.png",revision:"d4c78dc52a4f6c0e8413dba493dc144f"},{url:"img/card-list/Rectangle 800.png",revision:"2b61d7565dbcc749ddd00ab572320afa"},{url:"img/card-list/Rectangle 801.png",revision:"d36cc970f78a51ed9a6f8956fa9f1a42"},{url:"img/card-list/Rectangle 802.png",revision:"9fa3d0c93441132d17e87eef7773e861"},{url:"img/card-list/Rectangle 803.png",revision:"32bdd34cb4e512bd69988f62ecbde02a"},{url:"img/cards-positive/1.png",revision:"1cb12f3fea58f44f1eb89af36d656ff0"},{url:"img/cards-positive/2.png",revision:"30909a25e9d9a44277a25512c58c50cf"},{url:"img/cards-positive/3.png",revision:"326af650184daffdfab1c72e21f09496"},{url:"img/flags/es.png",revision:"2cf6535a8049e37e53a4c0d55978ce7b"},{url:"img/flags/fr.png",revision:"b5eb05dbde98d34d2a070f6349955156"},{url:"img/flags/gb.png",revision:"5f94d206a4956ec58c461b2520f12887"},{url:"img/footer-bottom.png",revision:"eb24c900b8a0db438e5cec2e38f069dd"},{url:"img/gift-box/1.png",revision:"2b995e189aad22796f3067f9847f5b37"},{url:"img/gift-box/2.png",revision:"b7bfff1a74f0ae2e83bdd7eff57a5fea"},{url:"img/gift-box/3.png",revision:"a09d5696726210ed52e9ffd862a9df12"},{url:"img/gift-box/4.png",revision:"31e7e442fccb509485037dc641c79da5"},{url:"img/gift-box/gift-box-bg.png",revision:"e32e233822655244cad3d34a38b185af"},{url:"img/gift-box/gift-box.png",revision:"e5a0db27f4e16df9eb27c1b392810265"},{url:"img/logotype.png",revision:"50abb3e8829583c69149f7fd573f2f04"},{url:"img/main-puzzles/1.png",revision:"5b56f4b3248518ac941499725476b2d0"},{url:"img/main-puzzles/2.png",revision:"6a8051a58fdf66b32fc0b593a16f3bfa"},{url:"img/main-puzzles/3.png",revision:"8a13a01193d5d5e80ee9c88b9adafe11"},{url:"img/mountain.png",revision:"b0177214c42845eaf753867ee23c0a4a"},{url:"img/nature-block/bg.png",revision:"b1148f3a77593832c761799f708d819e"},{url:"img/nature-block/logo.png",revision:"3bd293ea66487d3a80aa5fd95666a44e"},{url:"img/nature-block/nature.png",revision:"fcabae1ab2ce878eeed76f4bd88a2d2b"},{url:"img/puzzles-info/premium.png",revision:"d2a01533826a927ecba8ce0d0eead0bf"},{url:"img/puzzles-info/unique.png",revision:"e4e46a086aa262986bf27046ce242c59"},{url:"img/recommended/recom__1.png",revision:"28801db409e095ef06b9cc551e84faed"},{url:"img/recommended/recom__2.png",revision:"c2008edc906dbbea16c71b9149994cc3"},{url:"img/recommended/recom__3.png",revision:"3559456591727245fbd663e0a1063e96"},{url:"img/recommended/recom__4.png",revision:"8ef15443f882c811ea91313bed271f7e"},{url:"img/reviews-block/1.png",revision:"7bac2af18857718500f498cf79665f30"},{url:"img/reviews-block/2.png",revision:"1c6b7182384d13fbf971ff0fc2f4f594"},{url:"img/reviews-block/trustpilot-logo.png",revision:"ece4786a3811d3a2723c2d5b448c9c37"},{url:"img/wheel/1111.png",revision:"e471a34950904884f0e00b2470a4a432"},{url:"img/wheel/2222.png",revision:"89585990bb3e6bf08da7f210462a6b0c"},{url:"index.html",revision:"9363315d677e82d380d7355a45adfd56"},{url:"main.2a53a928debcf0d8f308.js",revision:null},{url:"main.2a53a928debcf0d8f308.js.LICENSE.txt",revision:"c4a9f1524b7a7cd7c6ccc0cd953a732e"},{url:"main.css",revision:"17d55081b2e2008fac14ace365851d56"},{url:"svg/Handbag.svg",revision:"9df47f6a482f57a03d8def6005fb907f"},{url:"svg/card/dye.svg",revision:"72a50193e5f2a14156cd6fa6a4dbebf5"},{url:"svg/card/hq.svg",revision:"a4709badea831284330eb444c74b5a1f"},{url:"svg/card/image.svg",revision:"c29d61f25fb9e08b55ea814037264f62"},{url:"svg/card/leaf.svg",revision:"b71eba57910036e7c23fb21afd12e77a"},{url:"svg/card/puzzle.svg",revision:"a4640ddaafbf8c22f5a1576761d52324"},{url:"svg/card/smile.svg",revision:"2d63d315b2481fbf12a4acd207d5f2dc"},{url:"svg/cards-positive/bulb.svg",revision:"f12283a58e2f0b81319631bfe0a76dbb"},{url:"svg/cards-positive/child.svg",revision:"b7730842d1fdff75d04965aee4e613ac"},{url:"svg/cards-positive/family.svg",revision:"951bcdf35882047c34e20a44b6fc97ec"},{url:"svg/facebook.svg",revision:"0e7d913aaeb4bce109a3e985220befe5"},{url:"svg/file.svg",revision:"ebde97803dbf3ebed93293f10b6fb2f5"},{url:"svg/follow/announcement.svg",revision:"a77787f95f3284d025de56ac4ef333a8"},{url:"svg/follow/gift.svg",revision:"f172ade1cff5c70b9afc04bdba18003b"},{url:"svg/follow/reviews.svg",revision:"9509b6ffad3d6d25f8ef7640799b0878"},{url:"svg/instagram.svg",revision:"596a3cbd68f6ecbf71a05f7c7d17a528"},{url:"svg/like-black.svg",revision:"9ae11d41e123ee16041990b7db3f0adf"},{url:"svg/marker-map.svg",revision:"700ef219a866fb2216777316b63f8c7e"},{url:"svg/pintrest.svg",revision:"5b189713e31a715e41088817a5545493"},{url:"svg/search.svg",revision:"2f413ca5034d4129a499e4f682c4f273"},{url:"svg/star.svg",revision:"c4c607778fb83d41d067b3cef59773de"},{url:"svg/user/heart__like.svg",revision:"1acd6549da2557967855a773cb7b9c17"},{url:"svg/user/market.svg",revision:"72d0ae89378b3df81bdb10e6ec7e59c6"},{url:"svg/user/person.svg",revision:"e86bc41342bad54b46cc36190b28fd47"},{url:"svg/whatsapp.svg",revision:"19e7f9734028794ee5ddf19ae661c4d2"}],{})}));
