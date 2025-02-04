self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/StatsTracker/',
                '/StatsTracker/index.html',
                '/StatsTracker/styles.css',
                '/StatsTracker/app.js',
                '/StatsTracker/manifest.json',
                '/StatsTracker/Icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});