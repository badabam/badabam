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
    "url": "favicon-512x512.4d940ccf.png",
    "revision": "678aad46c5f5bb25f0366358931f4058"
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
    "revision": "a60e743af48ca2e35e7857b04fa35d1e"
  },
  {
    "url": "jeremias_erbs.1ecf77cb.jpg",
    "revision": "06310b8781046484ad64d36370eb0088"
  },
  {
    "url": "main.24dfed61.js",
    "revision": "e042749a5d00f84eafa4a078629b9adc"
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
    "url": "styles.79179d73.css",
    "revision": "7fc90ee76dc9fe73c460db20de7ee55c"
  },
  {
    "url": "/",
    "revision": "b3119ea1f0ec17ccd7cae8626b92c299"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");
