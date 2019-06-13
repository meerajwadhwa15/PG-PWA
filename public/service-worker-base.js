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

/**
 * Handling Offline Page fallback
 */
self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
        event.respondWith(
            fetch(event.request.url).catch(error => {
                // Return the offline page
                return caches.match('/static/');
            })
        );
    }
    else{
        // Respond with everything else if we can
        event.respondWith(caches.match(event.request)
            .then(function (response) {
                return response || fetch(event.request);
            })
        );
    }
});

workbox.precaching.precacheAndRoute([], {});
