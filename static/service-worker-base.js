importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.routing.registerRoute(
  'http://10.41.100.142:9000',
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  new RegExp('(?:googleapis|gstatic)\.com.$'),
  new workbox.strategies.StaleWhileRevalidate(
    {
      cacheName: 'google-fonts'
    }
  )
);

workbox.routing.registerRoute(
  new RegExp('https://sg-rpfs-integration\.pgimgs\.com.*'),
  new workbox.strategies.CacheFirst(
    {
      cacheName: 'imgs'
    }
  )
);

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  return self.clients.claim();
});

self.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  return false;
});

workbox.precaching.precacheAndRoute([], {});
