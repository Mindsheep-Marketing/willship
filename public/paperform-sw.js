// Paperform Service Worker for ultra-aggressive caching
const CACHE_NAME = 'paperform-cache-v2';
const PAPERFORM_URLS = [
  'https://mlc28uxr.paperform.co/',
  'https://mlc28uxr.paperform.co/css/form/mlc28uxr/',
  'https://paperform.co/__embed.min.js',
  'https://mlc28uxr.paperform.co/api/v1/form/684ba2b89f9b675b66028318/event',
  'https://mlc28uxr.paperform.co/api/v1/form/684ba2b89f9b675b66028318/collect'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Paperform SW: Caching critical resources');
        return cache.addAll(PAPERFORM_URLS);
      })
      .catch((error) => {
        console.warn('Paperform SW: Failed to cache resources', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName.includes('paperform')) {
            console.log('Paperform SW: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - ultra-aggressive caching with network fallback
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  
  // Handle all Paperform requests with aggressive caching
  if (url.includes('paperform.co')) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            console.log('Paperform SW: Serving from cache (instant)', url);
            // Serve from cache immediately, but also fetch fresh copy in background
            fetch(event.request)
              .then((freshResponse) => {
                if (freshResponse.status === 200) {
                  caches.open(CACHE_NAME)
                    .then((cache) => {
                      cache.put(event.request, freshResponse.clone());
                    });
                }
              })
              .catch(() => {}); // Silent background update
            return response;
          }
          
          // Not in cache - fetch from network with aggressive caching
          return fetch(event.request)
            .then((response) => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(event.request, responseClone);
                    console.log('Paperform SW: Cached for future instant access', url);
                  });
              }
              return response;
            })
            .catch((error) => {
              console.warn('Paperform SW: Network request failed', error);
              // Try to serve stale cache as last resort
              return caches.match(event.request, { ignoreSearch: true });
            });
        })
    );
  }
});
