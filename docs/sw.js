const CACHE_NAME="2025-04-08 09:00",urlsToCache=["/phonics-typing/","/phonics-typing/index.js","/phonics-typing/mp3/bgm.mp3","/phonics-typing/mp3/cat.mp3","/phonics-typing/mp3/correct.mp3","/phonics-typing/mp3/end.mp3","/phonics-typing/mp3/keyboard.mp3","/phonics-typing/favicon/favicon.svg","https://marmooo.github.io/fonts/textar-light.woff2"];self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(e=>e.addAll(urlsToCache)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>e!==CACHE_NAME).map(e=>caches.delete(e)))))})