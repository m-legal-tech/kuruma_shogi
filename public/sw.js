const CACHE_NAME = 'kuruma-shogi-v1';
const urlsToCache = [
  '/kuruma-shogi.html',
  '/public/manifest.json',
  '/public/icon-192.png',
  '/public/icon-512.png',
  '/public/apple-touch-icon.png',
  '/public/fire-truck-large-trans.png',
  '/public/police-car-new-trans.png',
  '/public/ambulance-unified-trans.png',
  '/public/bulldozer-unified-trans.png',
  '/public/school-bus-unified-trans.png'
];

// インストール時にキャッシュを作成
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('キャッシュを開きました');
        return cache.addAll(urlsToCache);
      })
  );
});

// キャッシュから返す
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // キャッシュにあればそれを返す
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// 古いキャッシュを削除
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
