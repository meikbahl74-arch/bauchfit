const CACHE_NAME = 'bauchfit-shell-v7';
const CORE = ['./','./index.html','./manifest.webmanifest','./icon.svg',
  './exercises/bicycle-crunch.webp',
  './exercises/bird-dog.webp',
  './exercises/cross-arm-crunch.webp',
  './exercises/dead-bug.webp',
  './exercises/forward-fold.webp',
  './exercises/glute-bridge.webp',
  './exercises/jumping-jacks.webp',
  './exercises/knee-lift.webp',
  './exercises/leg-spread.webp',
  './exercises/lunge.webp',
  './exercises/mountain-climber.webp',
  './exercises/plank.webp',
  './exercises/push-up.webp',
  './exercises/reverse-crunch.webp',
  './exercises/side-leg-lift-left.webp',
  './exercises/side-leg-lift-right.webp',
  './exercises/side-plank.webp',
  './exercises/side-stretch.webp',
  './exercises/squat.webp',
  './exercises/standing.webp',
  './exercises/twist-lying.webp'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('bauchfit-shell-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    if (response.ok && new URL(event.request.url).origin === self.location.origin) caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
