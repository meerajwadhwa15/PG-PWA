importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.router.registerRoute(/.(?:googleapis|gstatic)\.com.$/, workbox.strategies.staleWhileRevalidate(
  {
    cacheName: 'google-fonts'
  }
));

workbox.precaching.precacheAndRoute([
  {
    "url": "icons/icon-128x128.png",
    "revision": "9096e96916ab2836d1717b9819479823"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "0ad8d116f4028deac034acb07557da26"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "ed991949181b13b03a20495b99309f5b"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "c36b2726a7a38a56126ea112e39c327e"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "5bf48b5e7b8e053877ebc42ce3fe715b"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "16e5e78cfc8520547471976428cef228"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "f3a3eafeded2fe7db2e7205b1258a365"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "2cfb70ceece7c3ff703cc8d73ab67d13"
  },
  {
    "url": "service-worker-base.js",
    "revision": "f8de3f7b3b63cb4168017817f04bfbd0"
  },
  {
    "url": "styles.css",
    "revision": "5fb58032cec9437d3ae75fe21d321d7c"
  }
], {});