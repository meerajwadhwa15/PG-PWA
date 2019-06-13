importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.router.registerRoute(/.(?:googleapis|gstatic)\.com.$/, workbox.strategies.staleWhileRevalidate(
  {
    cacheName: 'google-fonts'
  }
));

workbox.precaching.precacheAndRoute([], {});
