const CACHE_NAME = 'bauchfit-v1-profile-images-20261024';
const CORE = ['./','./index.html','./manifest.webmanifest','./icon.svg',
  './bicycle-crunch.webp',
  './bird-dog.webp',
  './cross-arm-crunch.webp',
  './dead-bug.webp',
  './forward-fold.webp',
  './glute-bridge.webp',
  './jumping-jacks.webp',
  './knee-lift.webp',
  './leg-spread.webp',
  './lunge.webp',
  './mountain-climber.webp',
  './plank.webp',
  './push-up.webp',
  './reverse-crunch.webp',
  './side-leg-lift-left.webp',
  './side-leg-lift-right.webp',
  './side-plank.webp',
  './side-stretch.webp',
  './squat.webp',
  './standing.webp',
  './twist-lying.webp'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('bauchfit-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    if (response.ok && new URL(event.request.url).origin === self.location.origin) caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
