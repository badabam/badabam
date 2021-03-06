/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "apple-touch-icon-114x114.d9f0aceb.png",
    "revision": "164504e1bcde792ac319f4b84564541d"
  },
  {
    "url": "apple-touch-icon-120x120.35df3770.png",
    "revision": "63b2369b913976a748f4d174ce2c2673"
  },
  {
    "url": "apple-touch-icon-144x144.d1051a3d.png",
    "revision": "b7134c8691b21d27628c9cbcda88db4c"
  },
  {
    "url": "apple-touch-icon-152x152.a7016124.png",
    "revision": "102b86ab9ce8a184616e37b2db9085d9"
  },
  {
    "url": "apple-touch-icon-57x57.e91da06e.png",
    "revision": "24d0aefb1c480260061bf109023ad292"
  },
  {
    "url": "apple-touch-icon-60x60.75753e74.png",
    "revision": "453a3014d8ce8bcf1e4bd03adbbd1792"
  },
  {
    "url": "apple-touch-icon-72x72.5d6b7bdf.png",
    "revision": "3770688a0c95e2fa4658e7d9571f8fc3"
  },
  {
    "url": "apple-touch-icon-76x76.ac496ccf.png",
    "revision": "f82f01c28c4e1f175fb43109577e08ce"
  },
  {
    "url": "favicon-128.c8091976.png",
    "revision": "d1a3537d3feef5c799417b1a31cb02f2"
  },
  {
    "url": "favicon-16x16.ccb1fd6c.png",
    "revision": "d994c4c3bcfbc089e2498ac584845a5a"
  },
  {
    "url": "favicon-196x196.f2bc925b.png",
    "revision": "1758a06ca976c0145f7a9fb110042662"
  },
  {
    "url": "favicon-32x32.07d89450.png",
    "revision": "98cba1e05cd7b011c3508b43174de40e"
  },
  {
    "url": "favicon-512x512.1c70f862.png",
    "revision": "92cc0e97e9fa46cfa448520a386e469f"
  },
  {
    "url": "favicon-96x96.d73dc5e8.png",
    "revision": "4c6a6a58edcbeca27cd13d6d2b10e3a4"
  },
  {
    "url": "index.html",
    "revision": "6c09a05b6a02d156e2360fde9cf4e483"
  },
  {
    "url": "jeremias_erbs_profilbild.251dafb9.jpg",
    "revision": "f0f49252f180a4e79e11d795e5e6579c"
  },
  {
    "url": "jeremias_erbs.1ecf77cb.jpg",
    "revision": "06310b8781046484ad64d36370eb0088"
  },
  {
    "url": "main.30901d69.css",
    "revision": "b2e44c5de53d2bfb1ca90db930d2fd78"
  },
  {
    "url": "main.a753bb2a.js",
    "revision": "c9ef2f80e0ecaf1584da615c47d7cc7a"
  },
  {
    "url": "mstile-144x144.d1051a3d.png",
    "revision": "b7134c8691b21d27628c9cbcda88db4c"
  },
  {
    "url": "mstile-150x150.b36f571a.png",
    "revision": "5c6921f523f227fdcc7203ffd69b6358"
  },
  {
    "url": "mstile-310x150.f34ff4fd.png",
    "revision": "5f4740866799431484ee9dbe196c0350"
  },
  {
    "url": "mstile-310x310.3ada9b96.png",
    "revision": "5c9d9a031c90314c8918ce31af748422"
  },
  {
    "url": "mstile-70x70.c8091976.png",
    "revision": "d1a3537d3feef5c799417b1a31cb02f2"
  },
  {
    "url": "raleway-v13-latin-100.0f8b2613.woff2",
    "revision": "2d7a1238fea2c2307507a59e0855ff42"
  },
  {
    "url": "raleway-v13-latin-100.5eb1c522.woff",
    "revision": "161ab2ad00fa982f54cb8f16f26a0af3"
  },
  {
    "url": "raleway-v13-latin-300.368714ff.woff2",
    "revision": "d724dad2e61905f488d048e51d45ae3e"
  },
  {
    "url": "raleway-v13-latin-300.cecc086e.woff",
    "revision": "4baae0f7033718fc7a7a6dbb301db7cc"
  },
  {
    "url": "raleway-v13-latin-500italic.94f070b2.woff2",
    "revision": "3ffdda0b3d57c6a3ccfc61960ac10934"
  },
  {
    "url": "raleway-v13-latin-500italic.d1335e55.woff",
    "revision": "20ee2c52d2e06b53d5c90d1dafcf5026"
  },
  {
    "url": "styles.e6468999.css",
    "revision": "32b036963211828f5121c41c7dc59001"
  },
  {
    "url": "/",
    "revision": "6ed4ffbac0c081af52c934adf1da3a83"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
