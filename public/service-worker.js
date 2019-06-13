importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.routing.registerRoute(
  'http://localhost:3000',
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  new RegExp(' .*(?:googleapis|pgimgs)\\.com.*'),
  new workbox.strategies.StaleWhileRevalidate(
    {
      cacheName: 'google-fonts'
    }
  )
);

workbox.routing.registerRoute(
  new RegExp('https://sg1-cdn-integration.pgimgs.com/.*'),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('https://sg2-cdn-integration.pgimgs.com/.*'),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('https://c6649169.ngrok.io/v1/listings/.*'),
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  new RegExp('https://c6649169.ngrok.io/v1/listings/.*'),
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  new RegExp('/_next/'),
  new workbox.strategies.NetworkFirst()
);

workbox.routing.setDefaultHandler(
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.setDefaultHandler(({url, event, params}) => {
  console.log('==================',url);
});


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
    "revision": "838bf2f266cc8e53f6490fe5f427033d"
  },
  {
    "url": "styles.css",
    "revision": "5fb58032cec9437d3ae75fe21d321d7c"
  }
], {});
