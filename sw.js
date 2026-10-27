const CACHE_NAME = 'bauchfit-v1-1-original-cards-20261027';
const CORE = ['./','./index.html','./manifest.webmanifest','./icon.svg',
  './card-arms.webp',
  './card-backmob.webp',
  './card-bicycle.webp',
  './card-bird-dog.webp',
  './card-bridge.webp',
  './card-butt-kicks.webp',
  './card-child-pose.webp',
  './card-cross-crunch.webp',
  './card-crunch-hold.webp',
  './card-deadbug.webp',
  './card-flutter-kicks.webp',
  './card-heel-digs-arms.webp',
  './card-heel-digs.webp',
  './card-heel-taps.webp',
  './card-hip-circles.webp',
  './card-hollow-hold.webp',
  './card-jacks.webp',
  './card-knee-fallout.webp',
  './card-kneelift.webp',
  './card-leg-raises.webp',
  './card-march-high.webp',
  './card-march-reach.webp',
  './card-mountain.webp',
  './card-plank-hip-dips.webp',
  './card-plank-taps.webp',
  './card-plank.webp',
  './card-reverse.webp',
  './card-russian-twist.webp',
  './card-scissor-kicks.webp',
  './card-seated-leg-lifts.webp',
  './card-shoulder-rolls.webp',
  './card-side-plank.webp',
  './card-sidestep.webp',
  './card-sit-up.webp',
  './card-standing-hamstring-curl.webp',
  './card-standing-knee-crunch.webp',
  './card-standing-quad-stretch.webp',
  './card-standing-side-knee-raise.webp',
  './card-standing-toe-taps.webp',
  './card-standing-torso.webp',
  './card-step-back-burpee.webp',
  './card-step-touch-reach.webp',
  './card-stretchside.webp',
  './card-superman.webp',
  './card-toe-touches.webp',
  './card-v-sit.webp',
  './card-windshield-wipers.webp',
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
