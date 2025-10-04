
// SW: Stale-While-Revalidate pre HTML, Cache-First pre assets
const VERSION = 'v1.0.0';
const STATIC_CACHE = `static-${VERSION}`;
const ASSETS = [
  '/',
  '/offline.html'
  // Add other critical assets like CSS, JS, logo here if needed
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(STATIC_CACHE).then((c) => c.addAll(ASSETS)).catch(err => console.log("Failed to cache assets:", err)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== STATIC_CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);

  // Ignore non-GET requests
  if (req.method !== 'GET') {
      return;
  }
  
  // Ignore Firebase and Genkit requests
  if (url.hostname.includes('firebase') || url.hostname.includes('googleapis.com')) {
    return;
  }

  // HTML pages: Stale-While-Revalidate
  if (req.headers.get('accept')?.includes('text/html')) {
    e.respondWith(
      caches.open(STATIC_CACHE).then(cache => {
        return fetch(req).then((res) => {
          const clone = res.clone();
          cache.put(req, clone);
          return res;
        }).catch(() => cache.match(req).then(r => r || cache.match('/offline.html')));
      })
    );
    return;
  }

  // Static assets: Cache-First
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

    