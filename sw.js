if(!self.define){let e,s={};const r=(r,a)=>(r=new URL(r+".js",a).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const b=e=>r(e,i),d={module:{uri:i},exports:c,require:b};s[i]=Promise.all(a.map((e=>d[e]||b(e)))).then((e=>(n(...e),c)))}}define(["./workbox-25d99430"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/0.9275ef20.css",revision:null},{url:"_app/immutable/assets/favicon.495a9fe8.avif",revision:null},{url:"_app/immutable/chunks/footer.34d00712.js",revision:null},{url:"_app/immutable/chunks/icon.5faad7a9.js",revision:null},{url:"_app/immutable/chunks/index.28483bdd.js",revision:null},{url:"_app/immutable/chunks/paths.abac8063.js",revision:null},{url:"_app/immutable/chunks/post_layout.86001562.js",revision:null},{url:"_app/immutable/chunks/posts.743117c1.js",revision:null},{url:"_app/immutable/chunks/preload-helper.a4192956.js",revision:null},{url:"_app/immutable/chunks/singletons.40def4cb.js",revision:null},{url:"_app/immutable/chunks/stores.5f66e94e.js",revision:null},{url:"_app/immutable/entry/app.c25eb158.js",revision:null},{url:"_app/immutable/entry/start.9497a4f2.js",revision:null},{url:"_app/immutable/nodes/0.63b0ef6a.js",revision:null},{url:"_app/immutable/nodes/1.294f245a.js",revision:null},{url:"_app/immutable/nodes/10.38a7f88e.js",revision:null},{url:"_app/immutable/nodes/11.3d5d5e48.js",revision:null},{url:"_app/immutable/nodes/12.b10ab0bd.js",revision:null},{url:"_app/immutable/nodes/13.fee95ca2.js",revision:null},{url:"_app/immutable/nodes/14.3419c417.js",revision:null},{url:"_app/immutable/nodes/15.3bc6d3db.js",revision:null},{url:"_app/immutable/nodes/16.8a44fe50.js",revision:null},{url:"_app/immutable/nodes/17.7f5b6227.js",revision:null},{url:"_app/immutable/nodes/18.b3e2512d.js",revision:null},{url:"_app/immutable/nodes/19.4bea8ab6.js",revision:null},{url:"_app/immutable/nodes/2.2ddd1fe3.js",revision:null},{url:"_app/immutable/nodes/20.3cfb207c.js",revision:null},{url:"_app/immutable/nodes/21.6fa4ad58.js",revision:null},{url:"_app/immutable/nodes/22.d5287d46.js",revision:null},{url:"_app/immutable/nodes/23.f5e02f8f.js",revision:null},{url:"_app/immutable/nodes/3.c40aecff.js",revision:null},{url:"_app/immutable/nodes/4.b5514e18.js",revision:null},{url:"_app/immutable/nodes/5.fd9902d3.js",revision:null},{url:"_app/immutable/nodes/6.45732900.js",revision:null},{url:"_app/immutable/nodes/7.db0e3490.js",revision:null},{url:"_app/immutable/nodes/8.f81243a5.js",revision:null},{url:"_app/immutable/nodes/9.0d702a0c.js",revision:null},{url:"assets/any@180.png",revision:"675b85dc6c662d9d0fcc2397ef94ec3e"},{url:"assets/any@192.png",revision:"957fd2c2bab7d28832fa570eab849f20"},{url:"assets/any@512.png",revision:"43951e8abfd9ae290f7fff02be6b97cc"},{url:"assets/apple 1.png",revision:"aca96f4ceb45eba4304645c4cf478a19"},{url:"assets/arrow-right-circle (1).png",revision:"f910fcf2886bed6b23babfb738f8ae6c"},{url:"assets/arrow-right-circle.png",revision:"e66d88867cb6b89a759670cbbb49ae38"},{url:"assets/bar-chart (1).png",revision:"beef7d4d0296496bde89b789a646252e"},{url:"assets/bar-chart.png",revision:"692a994cdc8e4ab2b6410a0b164148c8"},{url:"assets/book-open.png",revision:"e08fbf77da0858e489e243227271660a"},{url:"assets/calculator.png",revision:"bff7ff5844ea75904325dc6c2b677965"},{url:"assets/Calque_1.png",revision:"692a994cdc8e4ab2b6410a0b164148c8"},{url:"assets/Calque_2.png",revision:"692a994cdc8e4ab2b6410a0b164148c8"},{url:"assets/Calque_3.png",revision:"692a994cdc8e4ab2b6410a0b164148c8"},{url:"assets/Calque_4.png",revision:"692a994cdc8e4ab2b6410a0b164148c8"},{url:"assets/Calque_5.png",revision:"692a994cdc8e4ab2b6410a0b164148c8"},{url:"assets/circle.png",revision:"c36a45ee01f8ecb70d948ebcf2c9ed43"},{url:"assets/cow 1 (1).png",revision:"ebbca5adcaee579fbef8a73adb8bfec1"},{url:"assets/cow 1.png",revision:"66aab6c52f71f5fa29e3ebc17f1ccee2"},{url:"assets/Ellipse 1.png",revision:"6136d1f1b7e89cab4d4a849ffe0e5d68"},{url:"assets/Ellipse 3.png",revision:"d0b372a270df8436585ec2cd16510da6"},{url:"assets/fish 1.png",revision:"a73b931ea0848b85af5d0c67146647dd"},{url:"assets/Frame 13.png",revision:"a709a2aa16b269966d34ebc3a036713b"},{url:"assets/Frame 15.png",revision:"4d3a60888491e1cecaf43d986aaf40e7"},{url:"assets/Frame 19 (1).png",revision:"64b58932d78a5fcba8e34a9aa690c9ac"},{url:"assets/Frame 19 (2).png",revision:"978e121e80af062207fc4997f20c4f21"},{url:"assets/Frame 19.png",revision:"adbb6fa8e2bbe0293d140c7a0aa322c6"},{url:"assets/Frame 19.svg",revision:"1a0e40ff554db94499caeb88edecc4a9"},{url:"assets/Frame 21 (1).png",revision:"c2426c1ab383068edcb0759c8bddcae9"},{url:"assets/Frame 21.png",revision:"1668ea10187a4adf344cc4dbf5f1a55e"},{url:"assets/Frame_19-removebg-preview.png",revision:"6481947f0788abe95fdfafcf428149f7"},{url:"assets/frame13.png",revision:"a709a2aa16b269966d34ebc3a036713b"},{url:"assets/graphic.svg",revision:"ba784fa90a05cd4fad6578833946a606"},{url:"assets/Group 14.png",revision:"81ecc25e6e8141f0b78dd39acd82b125"},{url:"assets/Group 3.png",revision:"d859861a7c376b4e7b5e19e7a7f875d7"},{url:"assets/Group 6.png",revision:"d01b35c17137b667322bdb6728b76840"},{url:"assets/Group 7 (1).png",revision:"7ab1a61d462538e667e26ae2f80ca5cb"},{url:"assets/Group 7 (2).png",revision:"51a3076282f0605aa7c9c47e84b2c278"},{url:"assets/Group 7 (3).png",revision:"4c4d44f9f83546f536e6e49b5d43052c"},{url:"assets/Group 7.png",revision:"d01b35c17137b667322bdb6728b76840"},{url:"assets/Group14.png",revision:"c51f4505f667d009fa4f3bae417caa4f"},{url:"assets/Group14a.png",revision:"98bdb21b024cbbdc42a9d84f73355da9"},{url:"assets/hires/best suited technology box.png",revision:"4badc8ea62f8f7541128e12e5ef5a715"},{url:"assets/image 3.png",revision:"6981233557f208f3f0228ec70aad7b65"},{url:"assets/image 5.png",revision:"b371a7b6dae80d6e257738e0d142717f"},{url:"assets/image 6.png",revision:"e48c5c33b604b3c8369234d6c051369d"},{url:"assets/image 7.png",revision:"22c493638abd0f3f902a9bfc38c5d5a1"},{url:"assets/image 8.png",revision:"28d3bb5bbfa94abc5364a384891d61d2"},{url:"assets/info.png",revision:"8db55028c31dfe216d3c15cb32bd7a24"},{url:"assets/leaf1 1.png",revision:"8d33d71a2c2df379ba3eeddc206892c6"},{url:"assets/leaf2 1.png",revision:"a0d8037c8a72d791d0cd900f81f4c4c5"},{url:"assets/LI.png",revision:"a026196075fc031b675a08b7d20afe0a"},{url:"assets/logo 1.png",revision:"d859861a7c376b4e7b5e19e7a7f875d7"},{url:"assets/logo-blue.png",revision:"6f795a689e0e9dfc10da4a59d1dc419c"},{url:"assets/logo/a.png",revision:"33882677d3c7dd0852998eec63631edb"},{url:"assets/logo/blue-globe.png",revision:"ccce41ce58a29b99ee26551046a5e88e"},{url:"assets/logo/c.png",revision:"96e7756668d565eb527602134333e310"},{url:"assets/logo/favicon.png",revision:"c488e12e761363c2ffe78fe6d3b28591"},{url:"assets/logo/fsega_en.png",revision:"86870c2e7c42094192277096efebf294"},{url:"assets/logo/fsega_hu.png",revision:"6f3e242eb80491322426f1abe0b4cb31"},{url:"assets/logo/fsega_ro.png",revision:"4c179679de0116f3f28c2ed181cf49c7"},{url:"assets/logo/logo_UBB_en.png",revision:"4505587291792016e188c15e7cb9fb44"},{url:"assets/logo/logo_UBB_hu.png",revision:"12da58bedb4fa35239ed6c53c5cffbc8"},{url:"assets/logo/logo_UBB_ro.png",revision:"b6e91d62d0688075b0be5c2671a39e0d"},{url:"assets/logo/orange-a.png",revision:"e86fb1968f6dae979d4bbb8b426f5f7c"},{url:"assets/logo/orange-c.png",revision:"22e039b6669fd3acd50f142a7e230546"},{url:"assets/logo/purple-globe.png",revision:"51b841db08332236dbdcd9b9cecf224e"},{url:"assets/logo/purple-globe180.png",revision:"ac261c0611b634cc154fafb2fcd93b02"},{url:"assets/logo/purple-globe192.png",revision:"ec6bae47d38f4b6217ed24f1918dd9f4"},{url:"assets/logo/purple-globe512.png",revision:"82d5b259dc3b59e2e0e5e1ca70dd3939"},{url:"assets/logo/r.png",revision:"fd58367d42a7aec62bbdbacf26089c96"},{url:"assets/logo/v.png",revision:"0c72759a8f94fced88096667ff3918af"},{url:"assets/logo/y.png",revision:"fa6f9e943de7e494694f88e7f8dc44e8"},{url:"assets/manure 1.png",revision:"d06319813998c88fa0c501c28f6e721b"},{url:"assets/maskable@192.png",revision:"957fd2c2bab7d28832fa570eab849f20"},{url:"assets/maskable@512.png",revision:"43951e8abfd9ae290f7fff02be6b97cc"},{url:"assets/medres/best suited technology box.png",revision:"26bb1a875a35682c0e73d9743d2bee7c"},{url:"assets/medres/Investing in green energy box.png",revision:"1455e1cd3d8dfb93cf314f8dc77f7e9d"},{url:"assets/medres/Learn about Power-from-Waste as a renewable box.png",revision:"9a28d5d26b3b66b5e54938bef34628c5"},{url:"assets/medres/Minimise your environmental footprint.png",revision:"2e5260ca17ab796316df276f19061dac"},{url:"assets/medres/Non-recyclable waste box.png",revision:"d001ec35ac3cfb1d3986d1b2c71726d8"},{url:"assets/medres/Save costs box.png",revision:"71729030beeb82c3e45c47240c28b8ab"},{url:"assets/new/1680532545699.png",revision:"26827c4ab58766721299aad85fa0cd70"},{url:"assets/new/4.png",revision:"81813338b771d493a583f88485e3202c"},{url:"assets/new/arrow-left-white.svg",revision:"f84fdee345e0da371c88de519c8333ba"},{url:"assets/new/arrow-left.svg",revision:"f18ade08534a857ce11dabd0d13d079f"},{url:"assets/new/arrow-right-circle-31-CTA-31-ctas-31-Frame25-31-Frame24-31-Hero-31-wrapper-31-03Greenenergy0.svg",revision:"81ee2d4b36c0fd33b56f310bbc6fd89c"},{url:"assets/new/arrow-right-circle-31-CTA-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy.svg",revision:"81ee2d4b36c0fd33b56f310bbc6fd89c"},{url:"assets/new/arrow-right-circle.svg",revision:"81ee2d4b36c0fd33b56f310bbc6fd89c"},{url:"assets/new/arrow-right-white.svg",revision:"613fa219b209cd534e37f5e20b961437"},{url:"assets/new/arrow-right.svg",revision:"dc871648b0abb256fb252661a875a74f"},{url:"assets/new/badge-minus.svg",revision:"2e850ec224c325c4d7246dd50b3b2c3f"},{url:"assets/new/badge-plus.svg",revision:"90c461126bcbabaf3e364aa301bf00f1"},{url:"assets/new/barleyeagle1-31-Frame24-31-Ourpartners-31-wrapper-31-03Greenenergy.png",revision:"96a9845a1156daf54668506c6b9f4683"},{url:"assets/new/calc.png",revision:"6258d02ff4b1f92fbde3632f69279ab8"},{url:"assets/new/calendar-days.svg",revision:"49427165bc1758ce9ccef6c8013b2631"},{url:"assets/new/Calque_1-31-Frame24-31-Frame18-31-Controlsupply-31-blockrow1-31-wrapper-31-03Greenenergy.svg",revision:"0e2bccf591b88def33e417c1d33a3091"},{url:"assets/new/Calque_1-31-Frame24-31-Frame24-31-Frame24-31-Frame18-31-Controlfootprint-31-blockrow2-31-wrapper-31-03Greenenergy.svg",revision:"2fae94f6f5ff00ac5ccecca5bbe08c0f"},{url:"assets/new/chevron-down.svg",revision:"1385b284f81cef0668bb7d60aec6b99d"},{url:"assets/new/costs.png",revision:"e8d9bee7aebdfdb124b643353de6ab78"},{url:"assets/new/cst--21-31-Frame24-31-Ourpartners-31-wrapper-31-03Greenenergy.png",revision:"bfb9fb7cad7e780055ca30b5667f728c"},{url:"assets/new/cst--61-31-Frame24-31-Ourpartners-31-wrapper-31-03Greenenergy.png",revision:"84f872e370aff0db941e4a91d080c460"},{url:"assets/new/CTAmdiinstagram-31-social-31-right-31-footer-31-03Greenenergy.svg",revision:"61bd79c3e7d893569cefed337f1ae0b4"},{url:"assets/new/E1.png",revision:"eaecd7433845ccf74c8dac986ba3ef12"},{url:"assets/new/E5.png",revision:"eaecd7433845ccf74c8dac986ba3ef12"},{url:"assets/new/E6.png",revision:"11e91e059c7b5189135bff036b267ceb"},{url:"assets/new/Ellipse1-31-slider-bullets-31-slider-31-Frame18-31-testimonials-31-wrapper-31-03Greenenergy.svg",revision:"853e30692eed7dfb083be3f58a072f70"},{url:"assets/new/Ellipse2-31-slider-bullets-31-slider-31-Frame18-31-testimonials-31-wrapper-31-03Greenenergy.svg",revision:"8a375264f6dc4ab81692afc9b3c95407"},{url:"assets/new/Ellipse3-31-slider-bullets-31-slider-31-Frame18-31-testimonials-31-wrapper-31-03Greenenergy.svg",revision:"6d4d3effbd2063cdc1cbdcec9073bbb7"},{url:"assets/new/frame19-31-hero-31-wrapper-31-03greenenergy.png",revision:"987aa4dec99877d472ac62783c8b02fc"},{url:"assets/new/graphic-10.svg",revision:"59ab59b8c4d7a001af60d8fcf1ca29ae"},{url:"assets/new/graphic-45.svg",revision:"4cd294220caedfffb5bd057cd6fe5679"},{url:"assets/new/graphic.svg",revision:"47b7ab8aea40233bd06d0e912107dec6"},{url:"assets/new/Group-29.svg",revision:"820db8c4cb0ae9de199baed43b8bd81a"},{url:"assets/new/Group-31-Calque_1-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy.svg",revision:"0086360389832b3f77740464b73c8f9b"},{url:"assets/new/Group-31-Calque_1-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy0.svg",revision:"08ac34ce17f768cab0316f6243a4cb3e"},{url:"assets/new/Group-31-Calque_1-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy1.svg",revision:"6c3624e4b7b9e34902d22bf30692f047"},{url:"assets/new/Group29-31-Calque_1-31-Frame18-31-Ourcutting-edgetechnologymatchingservice-31-wrapper-31-03Greenenergy.svg",revision:"19381232c02fd8b8b554d5cb8a566b94"},{url:"assets/new/H3.png",revision:"966c6723acf5466c4564d64a5ff04355"},{url:"assets/new/illu-costs-31-Frame24-31-Frame24-31-Frame18-31-Savecosts-31-blockrow2-31-wrapper-31-03Greenenergy.svg",revision:"6ea453c0a23363e7c4ac1aa30deb0189"},{url:"assets/new/insta--11-31-Frame24-31-Ourpartners-31-wrapper-31-03Greenenergy.png",revision:"722648c611979ff892f6127f8e78a7f2"},{url:"assets/new/klimatelink1-31-Frame24-31-Ourpartners-31-wrapper-31-03Greenenergy.png",revision:"c41b836fedca48b04dd235ada626455e"},{url:"assets/new/lightbulb-31-Calque_1-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy.svg",revision:"e01e6dd986e30f7adafbf91234ee2682"},{url:"assets/new/Line-1.svg",revision:"dad724362c6df773f903d115f6cbcfcb"},{url:"assets/new/mail.svg",revision:"6dee6cd62a16f3183de3357daf65320e"},{url:"assets/new/map-pin.svg",revision:"82a6e5594c98e0d1be2250516c08634e"},{url:"assets/new/map.png",revision:"ae2fd1323219c32abb0d6c61cddccd1d"},{url:"assets/new/mdi_instagram.svg",revision:"448222df2536c19b02632bf14e2c8aab"},{url:"assets/new/mdi_linkedin.svg",revision:"8a297ed89fdc16abb435a78caee17b94"},{url:"assets/new/mdi_spotify.svg",revision:"b2d208cb11f5039c7297e65e52c020e8"},{url:"assets/new/mdi_twitter.svg",revision:"704b2ac189f8dce8f22ce51a07c44ffa"},{url:"assets/new/mdilinkedin-31-social-31-right-31-footer-31-03Greenenergy.svg",revision:"9fa35bea6b550740c21e21ee9b35f419"},{url:"assets/new/mditwitter-31-social-31-right-31-footer-31-03Greenenergy.svg",revision:"1a5cfdcd03ca458ce080b4fa8ef81363"},{url:"assets/new/message-circle.svg",revision:"5f2e5632b59946552ae5d58c3037509c"},{url:"assets/new/petbottle1-31-Group7-31-Group20-31-Calque_1-31-Frame18-31-Ourcutting-edgetechnologymatchingservice-31-wrapper-31-03Greenenergy.png",revision:"36fab715c7b48b86729490ea97bb3b84"},{url:"assets/new/plate1-31-Group7-31-Group21-31-Calque_1-31-Frame18-31-Ourcutting-edgetechnologymatchingservice-31-wrapper-31-03Greenenergy.png",revision:"4c8e9be38d52f30af15d1107b5352b03"},{url:"assets/new/rl.png",revision:"84e0cad016ca9b026d25a38cfa4a8849"},{url:"assets/new/rm.png",revision:"1542f25e2796bf1a20a6cefba06d7c35"},{url:"assets/new/search-31-Calque_1-31-Frame18-31-Ourcutting-edgetechnologymatchingservice-31-wrapper-31-03Greenenergy.svg",revision:"9f408d7df5a34f7de50822db6c445eb8"},{url:"assets/new/search.svg",revision:"85ef9b8ed8cba1987de6647fe2590887"},{url:"assets/new/Union-31-Group20-31-Calque_1-31-Frame18-31-Ourcutting-edgetechnologymatchingservice-31-wrapper-31-03Greenenergy.svg",revision:"e4c699254ba96ea94d3fb716073d2413"},{url:"assets/new/Union-31-Group21-31-Calque_1-31-Frame18-31-Ourcutting-edgetechnologymatchingservice-31-wrapper-31-03Greenenergy.svg",revision:"448915987ef6ac1eb0927bbba124109d"},{url:"assets/new/Vector-11.svg",revision:"a06a5e9751f021ee055e31c045875d4c"},{url:"assets/new/Vector-12.svg",revision:"a8b86b305707e4fa8bfe45bd360d7736"},{url:"assets/new/Vector-13.svg",revision:"3cb03864848cdf3f7a2f39de279794d6"},{url:"assets/new/Vector-14.svg",revision:"cd0ba9e2d8672a5b25c8b3b0cecd2e03"},{url:"assets/new/Vector-15.svg",revision:"fa15178590bb7b2dbf9b3143265aba43"},{url:"assets/new/Vector-16.svg",revision:"7ceb83668eb205d3d4a840d10604d3d6"},{url:"assets/new/Vector-17.svg",revision:"ee7725e0b212bf8daac99e52e83b7c6d"},{url:"assets/new/Vector-18.svg",revision:"b074eb24e53e516ac88519e6b1e8f098"},{url:"assets/new/Vector-19.svg",revision:"b0821a19dfbb541166370a187cc77317"},{url:"assets/new/Vector-20.svg",revision:"1123a9b87483dc1b518a9a0e750ccffd"},{url:"assets/new/Vector-31-Calque_1-31-Frame18-31-Ourcutting-edgetechnologymatchingservice-31-wrapper-31-03Greenenergy0.svg",revision:"de76528675db93104cff1a319b11d940"},{url:"assets/new/Vector-31-Calque_1-31-Frame18-31-Ourcutting-edgetechnologymatchingservice-31-wrapper-31-03Greenenergy1.svg",revision:"658655be5a43b0cf29e8465623e15642"},{url:"assets/new/Vector-31-Calque_1-31-Frame18-31-Ourcutting-edgetechnologymatchingservice-31-wrapper-31-03Greenenergy2.svg",revision:"6d77b9aa0fa244a99cd61baab7259689"},{url:"assets/new/Vector-31-Calque_1-31-Gridindependence-31-blockrow1-31-wrapper-31-03Greenenergy.svg",revision:"7b8c201189ead2436a391c064affd315"},{url:"assets/new/Vector-5.svg",revision:"fd39b117be9cedffc1e059ceff949bbc"},{url:"assets/new/Vector-6.svg",revision:"9abf47f435979a2d94ef7ee61a692184"},{url:"assets/new/Vector-8.svg",revision:"d65e23aabc1e40401ad50c300895fbcc"},{url:"assets/new/Vector.svg",revision:"c22c296c728917c77b22a989449344ce"},{url:"assets/new/XH1.svg",revision:"5393f65b71b86cc584670be92ea95bb5"},{url:"assets/new/XH2.svg",revision:"0e2bccf591b88def33e417c1d33a3091"},{url:"assets/partners/Apem Logo.png",revision:"f51cf9d1f8d428b2e3e2587092852432"},{url:"assets/partners/Furlong Energy Logo.png",revision:"367bbfbd02a95d8b9aeb37627244f7c4"},{url:"assets/partners/Handprint logo.png",revision:"e6f4631c3bb434f71e6bbde24f7ec790"},{url:"assets/pet bottle 1.png",revision:"2820818067d5c01dc0d0a6721d08deec"},{url:"assets/pfp.png",revision:"7625f23f581c34cf63a6db0732ee425f"},{url:"assets/tech.png",revision:"5e901f39c8b33f3581a836b221927b99"},{url:"assets/woodchips 1.png",revision:"66a9574edf54e8b6582923c0749d574a"},{url:"assets/x-circle.png",revision:"6aede8cd8ab52dfb45d3290abdab0525"},{url:"favicon.png",revision:"fa7fb61fa0660847e91dc5d0dbb0219a"},{url:"server/_app/immutable/assets/_layout.d8d1484e.css",revision:null},{url:"server/_app/immutable/assets/favicon.495a9fe8.avif",revision:null},{url:"server/chunks/footer.js",revision:"6fcadafad46b3e7509d863db409bbbc2"},{url:"server/chunks/hooks.server.js",revision:"6ed0137f5b1b428fcebfb4211d321ea5"},{url:"server/chunks/icon.js",revision:"893414de8396032ec32d7b96ae95395c"},{url:"server/chunks/index.js",revision:"db779c93def37b9dd70f234e62358ca6"},{url:"server/chunks/index2.js",revision:"d9bccab39e1ceeb87b9e463f33918929"},{url:"server/chunks/index3.js",revision:"dcd9c21fa31003be4b19bdc540cfa073"},{url:"server/chunks/internal.js",revision:"81033a3edc24de0a3ab087c883534b7b"},{url:"server/chunks/posts.js",revision:"28abf207e88373ea0ca9e79cfddad036"},{url:"server/chunks/prod-ssr.js",revision:"61cd30ecbbcd623b1d3535cb80266f5a"},{url:"server/chunks/site.js",revision:"5c780f036d504a003d569aa45b787410"},{url:"server/chunks/stores.js",revision:"a1fa77badad9b2b74062565ea1a15e87"},{url:"server/chunks/title.js",revision:"f3b365fb561c049ddda63ed66d1c1e02"},{url:"server/entries/endpoints/atom.xml/_server.ts.js",revision:"9d652fd81c5d5e41cef548531c9a713d"},{url:"server/entries/endpoints/feed.json/_server.ts.js",revision:"213c6c6bcf86f503a4f3939acfc0e38d"},{url:"server/entries/endpoints/manifest.webmanifest/_server.ts.js",revision:"cac5ff7dd4676b4033b07a59525b551e"},{url:"server/entries/endpoints/posts.json/_server.ts.js",revision:"3680e786c090c488e5c4d8330cc5ea51"},{url:"server/entries/endpoints/sitemap.xml/_server.ts.js",revision:"5c9faeb7155f3e1dfda2753f8c54df83"},{url:"server/entries/endpoints/tags.json/_server.ts.js",revision:"3f706ebd4a24dd69c56d0f0efa797aab"},{url:"server/entries/fallbacks/error.svelte.js",revision:"cf158405e727dd30ff6aec646d6f5203"},{url:"server/entries/pages/_layout.svelte.js",revision:"5ec6cc582021d301e20a8b3deafba167"},{url:"server/entries/pages/_layout.ts.js",revision:"2263b7579c01ba9bff61b1d1fb5120ae"},{url:"server/entries/pages/_page.svelte.js",revision:"6ad6391b943e9308beebe70f6815ba30"},{url:"server/entries/pages/about/_page.md.js",revision:"45da03ccf94a41ff8434afe31a0b97c6"},{url:"server/entries/pages/articles/_page.md.js",revision:"1a5939332eb43e0ee8973796850481ac"},{url:"server/entries/pages/case-studies/_page.md.js",revision:"6446bd9afd11afe33ca6299bfbaaf3bd"},{url:"server/entries/pages/contact/_page.md.js",revision:"db10784d44c4cf7f8844c1f81cd4bb9e"},{url:"server/entries/pages/explore/_page.md.js",revision:"b81e4e2978c0d6493606d7d56acfeeff"},{url:"server/entries/pages/financial-options/_page.md.js",revision:"4d1eaa5f035209b45be54e7f354082e9"},{url:"server/entries/pages/green-energy/_page.md.js",revision:"0f79eda78b9ad8c2216b5a1e05282c1d"},{url:"server/entries/pages/how-non-recyclable-waste-can-help-fuel-the-future/_page.md.js",revision:"d642cc98a9cafcd1f0e801a4c2e5bbb5"},{url:"server/entries/pages/news-item/_page.md.js",revision:"6b8e428664209e3d9da85ec477ab7338"},{url:"server/entries/pages/news-item2/_page.md.js",revision:"ae04f65bc597d1516193e8b172f2a091"},{url:"server/entries/pages/news-item3/_page.md.js",revision:"3359206dc6c2ae791404668760e2e6a6"},{url:"server/entries/pages/news-item4/_page.md.js",revision:"db334faee941024cdf514ed7f57a7327"},{url:"server/entries/pages/news/_page.md.js",revision:"31208e012e5d64bc3d93c6a2c3f5bfbd"},{url:"server/entries/pages/news/how-non-recyclable-waste-can-help-fuel-the-future/_page.md.js",revision:"db447fec03e3c7640d35ed56e0d8171e"},{url:"server/entries/pages/news/the-challenges-facing-the-power-from-waste-industry/_page.md.js",revision:"0f0b1a3fcc02517214ca72ccd5cc4b44"},{url:"server/entries/pages/policy/_page.md.js",revision:"579691d1f84108817c39e2caa3d78b7c"},{url:"server/entries/pages/resources/articles/_page.md.js",revision:"233807c47e2d7d1d60e6bfcaf7b0a97e"},{url:"server/entries/pages/resources/case-studies/_page.md.js",revision:"a96be0d250fa595c354bb876ad8879db"},{url:"server/entries/pages/resources/financial-options/_page.md.js",revision:"fbdb0081339c6484b9b27c38f1618758"},{url:"server/entries/pages/resources/policy/_page.md.js",revision:"400f2cbbf90684a9a2020985e3ab8212"},{url:"server/entries/pages/the-challenges-facing-the-power-from-waste-industry/_page.md.js",revision:"87d75b28a4ca4a667c4e20b9d8177aad"},{url:"server/index.js",revision:"ddd378170ce5e276d83146d7b64b7d40"},{url:"server/internal.js",revision:"3844e499e60d526c6664c1c777b19618"},{url:"server/manifest-full.js",revision:"a1e56eda51b532b322b693e08c13a2e6"},{url:"server/nodes/0.js",revision:"94d35197cee576736e350e70a1f3b59f"},{url:"server/nodes/1.js",revision:"b9fb9548d69b97b47bf21126f1a9af89"},{url:"server/nodes/10.js",revision:"958ebdb8a9cf58cd744e37833c933590"},{url:"server/nodes/11.js",revision:"a397ea3b61313d754be6eb1ca83591b2"},{url:"server/nodes/12.js",revision:"6c0b66134617d6a4f6d65fe5122276eb"},{url:"server/nodes/13.js",revision:"601a6f0323cabc7a2e8346331bc2ec6f"},{url:"server/nodes/14.js",revision:"745c0b7a02f19c6e1e74fad27b236c15"},{url:"server/nodes/15.js",revision:"2447c6ad46a2c9eac834174cf56f5c23"},{url:"server/nodes/16.js",revision:"dcee489e81e914f483792c2c9df5a8ec"},{url:"server/nodes/17.js",revision:"ea3b70cf5d30196339994bb7d1b810c4"},{url:"server/nodes/18.js",revision:"3e06d70adb510195664ef2ebe9b35033"},{url:"server/nodes/19.js",revision:"5fd1c78f95ac50590f9f964a99228828"},{url:"server/nodes/2.js",revision:"7ac808dd59dee58b6ed718a56c351662"},{url:"server/nodes/20.js",revision:"4dd429dfcb7b0502ebb09c66acfecaea"},{url:"server/nodes/21.js",revision:"81923e279a117204a4b90bfe69e2f818"},{url:"server/nodes/22.js",revision:"977c17d20670abc2f37e843db48f4f4a"},{url:"server/nodes/23.js",revision:"99c5fa6b274e4bac4e3560c67897bb54"},{url:"server/nodes/3.js",revision:"effbb4abe33b31915ff2d78b3488cee5"},{url:"server/nodes/4.js",revision:"149a7c44a52101e9b9aaca2d3a12d86c"},{url:"server/nodes/5.js",revision:"837e84927f204d781babeedb850232eb"},{url:"server/nodes/6.js",revision:"c2cc8f57b408fd6ecb7286c7f5a2f2ef"},{url:"server/nodes/7.js",revision:"e22e3d1ce8bb198a6783d7a2d6f24681"},{url:"server/nodes/8.js",revision:"bdc52451b2c36e8b730bd7a48718204d"},{url:"server/nodes/9.js",revision:"8e755d984cb8a89877bc64ff812e3169"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));
