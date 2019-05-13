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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "apple-touch-icon-114x114.cfc99659.png",
    "revision": "12a7ce6e3e5bc2e75faae35259e5e9dd"
  },
  {
    "url": "apple-touch-icon-120x120.69328430.png",
    "revision": "142452309807845e953602d89c8780b1"
  },
  {
    "url": "apple-touch-icon-128x128.d9424f86.png",
    "revision": "f866a26fc3d6f56ec98a302c32516c6f"
  },
  {
    "url": "apple-touch-icon-144x144.e2c9f487.png",
    "revision": "a09b48e6bbc933f513caba4b0c5397b9"
  },
  {
    "url": "apple-touch-icon-152x152.eef83ce5.png",
    "revision": "85ab3a36a458b075cf75287e83a9a517"
  },
  {
    "url": "apple-touch-icon-180x180.6b665aab.png",
    "revision": "c5b734d49396d4c6482fe4b1fa33cb93"
  },
  {
    "url": "apple-touch-icon-57x57.5959e877.png",
    "revision": "c32283c6ba00bf78663a84f71c915a5b"
  },
  {
    "url": "apple-touch-icon-60x60.fe8ab2ee.png",
    "revision": "79679b78fc5c1e186d3c27e1851aa518"
  },
  {
    "url": "apple-touch-icon-72x72.1819f7ca.png",
    "revision": "65dab31f6fc67207a2629cc468ab9c4a"
  },
  {
    "url": "apple-touch-icon-76x76.7d3da37c.png",
    "revision": "248f8060906e68eb702290a42397270c"
  },
  {
    "url": "apple-touch-icon-precomposed.5959e877.png",
    "revision": "c32283c6ba00bf78663a84f71c915a5b"
  },
  {
    "url": "apple-touch-icon.fe8ab2ee.png",
    "revision": "79679b78fc5c1e186d3c27e1851aa518"
  },
  {
    "url": "favicon-160x160.331b3b25.png",
    "revision": "f5e8c3605cd6c24cfb1c2118d2eecc76"
  },
  {
    "url": "favicon-16x16.94729536.png",
    "revision": "6b8b871a79046c874ca893758b6eae84"
  },
  {
    "url": "favicon-192x192.5e305d94.png",
    "revision": "ff4ab8cf640c1b8efd84b064fabee651"
  },
  {
    "url": "favicon-196x196.33568edb.png",
    "revision": "9e7c791dc27d26e38510dab7e2422120"
  },
  {
    "url": "favicon-32x32.91fb8789.png",
    "revision": "c78c0dfd04db24a270838058492d1e97"
  },
  {
    "url": "favicon-96x96.2a8faeb0.png",
    "revision": "ea7c78d222d548d0fe64371f6465cef6"
  },
  {
    "url": "favicon.5827e367.png",
    "revision": "ffeb62455d968f92b195163c6d3c25f8"
  },
  {
    "url": "index.html",
    "revision": "2a587730aa9fca300cede7598da68424"
  },
  {
    "url": "jeremias_erbs.1ecf77cb.jpg",
    "revision": "06310b8781046484ad64d36370eb0088"
  },
  {
    "url": "lato-v15-latin-100.2928202c.woff",
    "revision": "4dfdd1c035c641accc4f3fedb7b73055"
  },
  {
    "url": "lato-v15-latin-100.9c743f47.woff2",
    "revision": "9ca14b8703044ec44627982d6d0e1e44"
  },
  {
    "url": "main.f26788c5.js",
    "revision": "79168e51d199b804c88ec36c5867010b"
  },
  {
    "url": "source-sans-pro-v12-latin-200.1b8a45ea.woff",
    "revision": "a3bea45981594e21f3a107386ba1a219"
  },
  {
    "url": "source-sans-pro-v12-latin-200.1c7e3a3c.woff2",
    "revision": "d30190b81146365670a14117cefddec7"
  },
  {
    "url": "styles.11cd3046.css",
    "revision": "b614992b9f085d0dd4537c3db784c5ce"
  },
  {
    "url": "/",
    "revision": "dea744266cd56d0d3f3f618fa843d45c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");
