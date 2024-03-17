const CACHE_NAME = "2024-03-17 15:40";
const urlsToCache = [
  "/phonics-typing/",
  "/phonics-typing/index.js",
  "/phonics-typing/mp3/bgm.mp3",
  "/phonics-typing/mp3/cat.mp3",
  "/phonics-typing/mp3/correct.mp3",
  "/phonics-typing/mp3/end.mp3",
  "/phonics-typing/mp3/keyboard.mp3",
  "/phonics-typing/favicon/favicon.svg",
  "https://marmooo.github.io/fonts/textar-light.woff2",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  "https://cdn.jsdelivr.net/npm/simple-keyboard@3.4.52/build/index.min.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
    }),
  );
});
