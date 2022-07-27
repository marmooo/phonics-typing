var CACHE_NAME = "2022-07-27 21:11";
var urlsToCache = [
  "/phonics-typing/",
  "/phonics-typing/index.js",
  "/phonics-typing/mp3/bgm.mp3",
  "/phonics-typing/mp3/cat.mp3",
  "/phonics-typing/mp3/correct.mp3",
  "/phonics-typing/mp3/end.mp3",
  "/phonics-typing/mp3/keyboard.mp3",
  "/phonics-typing/favicon/favicon.svg",
  "https://marmooo.github.io/fonts/textar-light.woff2",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
  "https://cdn.jsdelivr.net/npm/simple-keyboard@3.4.52/build/index.min.js",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      }),
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
  );
});

self.addEventListener("activate", function (event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
