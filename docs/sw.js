const CACHE_NAME="2023-08-17 08:35",urlsToCache=["/phonics-typing/","/phonics-typing/index.js","/phonics-typing/mp3/bgm.mp3","/phonics-typing/mp3/cat.mp3","/phonics-typing/mp3/correct.mp3","/phonics-typing/mp3/end.mp3","/phonics-typing/mp3/keyboard.mp3","/phonics-typing/favicon/favicon.svg","https://marmooo.github.io/fonts/textar-light.woff2","https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js","https://cdn.jsdelivr.net/npm/simple-keyboard@3.4.52/build/index.min.js"];self.addEventListener("install",a=>{a.waitUntil(caches.open(CACHE_NAME).then(a=>a.addAll(urlsToCache)))}),self.addEventListener("fetch",a=>{a.respondWith(caches.match(a.request).then(b=>b||fetch(a.request)))}),self.addEventListener("activate",a=>{a.waitUntil(caches.keys().then(a=>Promise.all(a.filter(a=>a!==CACHE_NAME).map(a=>caches.delete(a)))))})