// SW: Stale-While-Revalidate pre HTML, Cache-First pre assets
const VERSION = 'v1.0.0';
const STATIC_CACHE = `static-${VERSION}`;
const ASSETS = [
  '/',
  '/offline.html',
  '/styles.css',
  '/og-cover.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(STATIC_CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => ![STATIC_CACHE].includes(k)).map(k => caches.delete(k))))
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);

  // HTML: SWR
  if (req.headers.get('accept')?.includes('text/html')) {
    e.respondWith(
      fetch(req).then((res) => {
        const clone = res.clone();
        caches.open(STATIC_CACHE).then(cache => cache.put(req, clone));
        return res;
      }).catch(() => caches.match(req).then(r => r || caches.match('/offline.html')))
    );
    return;
  }

  // Assets: Cache-First
  if (['font', 'image', 'script', 'style'].includes(req.destination)) {
    e.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => {
        const clone = res.clone();
        caches.open(STATIC_CACHE).then(cache => cache.put(req, clone));
        return res;
      }))
    );
  }
});
