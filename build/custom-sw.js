importScripts("/precache-manifest.d4e2dcbae4b8496da5bcd3f9cb33d94f.js", "/workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v3.6.2"});
// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

self.addEventListener("install", event => event.waitUntil(self.skipWaiting()));
self.addEventListener("activate", event =>
  event.waitUntil(self.clients.claim())
);

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// app-shell
workbox.routing.registerRoute("/", workbox.strategies.cacheFirst());

