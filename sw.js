const CACHE_NAME = 'bauchfit-shell-v7';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
  './exercises/standing.webp',
  './exercises/knee-lift.webp',
  './exercises/jumping-jacks.webp',
  './exercises/squat.webp',
  './exercises/push-up.webp',
  './exercises/dead-bug.webp',
  './exercises/reverse-crunch.webp',
  './exercises/bicycle-crunch.webp',
  './exercises/glute-bridge.webp',
  './exercises/plank.webp',
  './exercises/mountain-climber.webp',
  './exercises/bird-dog.webp',
  './exercises/side-plank.webp',
  './exercises/side-stretch.webp',
  './exercises/lunge.webp',
  './exercises/forward-fold.webp'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key.startsWith('bauchfit-shell-') && key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => {
        if (event.request.mode === 'navigate') return caches.match('./index.html');
        return new Response('', { status: 503, statusText: 'Offline asset unavailable' });
      });
    })
  );
});
