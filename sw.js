/* 오프라인 지원: 네트워크 우선, 실패 시 캐시 */
const CACHE = 'lingua-v10';
const FILES = ['./', 'index.html', 'css/app.css', 'js/core.js', 'js/app.js', 'js/sync.js', 'firebase-config.js', 'content/en1.js', 'content/en2.js', 'content/ja1.js', 'content/ja2.js', 'content/ja3.js', 'content/ja4.js', 'content/ja5.js', 'content/ja6.js', 'content/ja7.js', 'content/ja8.js', 'content/ja9.js', 'content/ja10.js', 'content/ja11.js', 'content/ja12.js', 'content/ja13.js', 'content/ja14.js', 'content/ja15.js', 'content/ja16.js', 'content/ja17.js', 'content/ja18.js', 'content/ja19.js', 'content/zh1.js', 'content/zh2.js', 'content/zh3.js', 'content/zh4.js', 'content/zh5.js', 'content/zh6.js', 'content/zh7.js', 'content/es1.js', 'content/es2.js', 'content/es3.js', 'content/es4.js', 'content/es5.js', 'content/es6.js', 'content/es7.js', 'content/es8.js', 'content/es9.js', 'content/es10.js', 'content/es11.js', 'content/es12.js', 'content/es13.js', 'content/ru1.js', 'content/ru2.js', 'manifest.webmanifest', 'icon.svg',
  ];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
