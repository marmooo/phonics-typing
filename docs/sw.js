const CACHE_NAME="2024-03-17 15:40",urlsToCache=["/phonics-typing/","/phonics-typing/index.js","/phonics-typing/mp3/bgm.mp3","/phonics-typing/mp3/cat.mp3","/phonics-typing/mp3/correct.mp3","/phonics-typing/mp3/end.mp3","/phonics-typing/mp3/keyboard.mp3","/phonics-typing/favicon/favicon.svg","https://marmooo.github.io/fonts/textar-light.woff2","https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js","https://cdn.jsdelivr.net/npm/simple-keyboard@3.4.52/build/index.min.js"];self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(e=>e.addAll(urlsToCache)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>e!==CACHE_NAME).map(e=>caches.delete(e)))))})