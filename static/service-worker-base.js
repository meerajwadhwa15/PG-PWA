importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.routing.registerRoute(
  new RegExp('(?:listingsearch)\.com.$'),
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

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  return self.clients.claim();
});

workbox.precaching.precacheAndRoute([], {});
