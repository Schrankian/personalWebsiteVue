'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f91a05f7dc7dbc9a8ad35f30c1ae3ead",
"assets/assets/flags/de.png": "c0d0800fa9091a0e8830d78a29e4091a",
"assets/assets/flags/es.png": "075c30fd313b802b80b34687e554cf4f",
"assets/assets/flags/fr.png": "02aea38f9e516467efca62ca26b7046e",
"assets/assets/flags/gb.png": "4f3d96e67f55b5b8495ff9d104c6872d",
"assets/assets/flags/it.png": "3e556834b2a2bd13043fc750f2134261",
"assets/assets/flags/pt.png": "f9a2dd01d695901f6d5df9786fb94b28",
"assets/assets/wordsDeutsch/wordsDeutsch4.txt": "d8f0e85eb210aaf1f6a7587ea2fb96bb",
"assets/assets/wordsDeutsch/wordsDeutsch5.txt": "902a568127c35d43323b07c6d0660e8c",
"assets/assets/wordsDeutsch/wordsDeutsch6.txt": "40c0f2e8ed059c802888811c193156b2",
"assets/assets/wordsDeutsch/wordsDeutsch7.txt": "a6e8db7fb85b6e234193de7a878f8a44",
"assets/assets/wordsDeutsch/wordsDeutsch8.txt": "91255aac7a8e0bf415652616f1a3bbc7",
"assets/assets/wordsDeutsch/wordsDeutschGuess4.txt": "8e8b226eb3b6f3ad557001cedeefd690",
"assets/assets/wordsDeutsch/wordsDeutschGuess5.txt": "074bedda92b85bf1328e1647af2947ff",
"assets/assets/wordsDeutsch/wordsDeutschGuess6.txt": "b5569976d9281e6c2236c79f5b42c23a",
"assets/assets/wordsDeutsch/wordsDeutschGuess7.txt": "45db7c61f298cfce5286a7d043740f82",
"assets/assets/wordsDeutsch/wordsDeutschGuess8.txt": "3be6b9f423c24fe31a26ac5b80527321",
"assets/assets/wordsEnglish/wordsEnglish4.txt": "3318c14cbe8680621d5958b3abb0a168",
"assets/assets/wordsEnglish/wordsEnglish5.txt": "fd74f85c20155dd29f0e008ac7624848",
"assets/assets/wordsEnglish/wordsEnglish6.txt": "c516e71bf1edee33cf59ec9eb6ec70c3",
"assets/assets/wordsEnglish/wordsEnglish7.txt": "19db296848a10d1a2b6c65d7c5d905b0",
"assets/assets/wordsEnglish/wordsEnglish8.txt": "1f5caff3d584ecd5e9d2c62b89bd195e",
"assets/assets/wordsEnglish/wordsEnglishGuess4.txt": "5992aa4ee3b5e5301ea601d1a62006f7",
"assets/assets/wordsEnglish/wordsEnglishGuess5.txt": "4e3a7bcc607d109bc9fc8691cb761905",
"assets/assets/wordsEnglish/wordsEnglishGuess6.txt": "ea596b35c26df8e08b3ba48eaa851c12",
"assets/assets/wordsEnglish/wordsEnglishGuess7.txt": "0540e42b1d1218f6375d24167bd88434",
"assets/assets/wordsEnglish/wordsEnglishGuess8.txt": "2a276dd8c9902247e1c60ff5e3edfbd5",
"assets/assets/wordsEspanol/wordsEspanol4.txt": "27b606b7726457c1c89ed6954a7d7308",
"assets/assets/wordsEspanol/wordsEspanol5.txt": "44eb054ab606bf074e4f1866cf25c8d1",
"assets/assets/wordsEspanol/wordsEspanol6.txt": "898be8ad6347cc6aea3d92a73322d11d",
"assets/assets/wordsEspanol/wordsEspanol7.txt": "216b1d6345550b1776732929799c6aff",
"assets/assets/wordsEspanol/wordsEspanol8.txt": "91b01952cc69410a41937f67c5964af3",
"assets/assets/wordsEspanol/wordsEspanolGuess4.txt": "27b606b7726457c1c89ed6954a7d7308",
"assets/assets/wordsEspanol/wordsEspanolGuess5.txt": "44eb054ab606bf074e4f1866cf25c8d1",
"assets/assets/wordsEspanol/wordsEspanolGuess6.txt": "898be8ad6347cc6aea3d92a73322d11d",
"assets/assets/wordsEspanol/wordsEspanolGuess7.txt": "216b1d6345550b1776732929799c6aff",
"assets/assets/wordsEspanol/wordsEspanolGuess8.txt": "91b01952cc69410a41937f67c5964af3",
"assets/assets/wordsFrancais/wordsFrancais4.txt": "e39ffc8a74b5eea554a8c0a2c146f044",
"assets/assets/wordsFrancais/wordsFrancais5.txt": "582a8c34a3edc40bfe512fe7a24b352e",
"assets/assets/wordsFrancais/wordsFrancais6.txt": "542a0aa41ade504331a5065609b1b8e8",
"assets/assets/wordsFrancais/wordsFrancais7.txt": "63232f267fd27ef2077e3d342211e625",
"assets/assets/wordsFrancais/wordsFrancais8.txt": "601c16369cd87900b02de2f0d07b09dc",
"assets/assets/wordsFrancais/wordsFrancaisGuess4.txt": "e39ffc8a74b5eea554a8c0a2c146f044",
"assets/assets/wordsFrancais/wordsFrancaisGuess5.txt": "582a8c34a3edc40bfe512fe7a24b352e",
"assets/assets/wordsFrancais/wordsFrancaisGuess6.txt": "542a0aa41ade504331a5065609b1b8e8",
"assets/assets/wordsFrancais/wordsFrancaisGuess7.txt": "63232f267fd27ef2077e3d342211e625",
"assets/assets/wordsFrancais/wordsFrancaisGuess8.txt": "601c16369cd87900b02de2f0d07b09dc",
"assets/assets/wordsItaliano/wordsItaliano4.txt": "6faa4ae57f1ec92195597ddbc2b5c422",
"assets/assets/wordsItaliano/wordsItaliano5.txt": "f47058734e22d16a4bb9da71ead47465",
"assets/assets/wordsItaliano/wordsItaliano6.txt": "f9a397021cc7db1f56263f449bd7d269",
"assets/assets/wordsItaliano/wordsItaliano7.txt": "5c0152346dc1484168d75dcfe1d5dc18",
"assets/assets/wordsItaliano/wordsItaliano8.txt": "bc76930fe07e7ff40ecf320c8e59c498",
"assets/assets/wordsItaliano/wordsItalianoGuess4.txt": "390353d2877e3929c9a89aa7dda1c0ec",
"assets/assets/wordsItaliano/wordsItalianoGuess5.txt": "97a0b4c000b0a46bfae8c1900ebb67a8",
"assets/assets/wordsItaliano/wordsItalianoGuess6.txt": "41f9c2358cde09b5e4efc9fadbd14f83",
"assets/assets/wordsItaliano/wordsItalianoGuess7.txt": "5dcfbd43f7be9e46897d3625f120eef6",
"assets/assets/wordsItaliano/wordsItalianoGuess8.txt": "d7df9b79db6a07ac6281b074806243ea",
"assets/assets/wordsPortugues/wordsPortugues4.txt": "62c66af53675bc3deb864f7b67755b27",
"assets/assets/wordsPortugues/wordsPortugues5.txt": "2e78b8672442aad8127b619350ea9855",
"assets/assets/wordsPortugues/wordsPortugues6.txt": "6386f58fa5aa864f5c945e32be7b462e",
"assets/assets/wordsPortugues/wordsPortugues7.txt": "7259756be03224ddef98e58a9bbe0c36",
"assets/assets/wordsPortugues/wordsPortugues8.txt": "ea00c30fa41b969639cfc7c4039651d2",
"assets/assets/wordsPortugues/wordsPortuguesGuess4.txt": "21c4460bf5210661a5d7009816f6e926",
"assets/assets/wordsPortugues/wordsPortuguesGuess5.txt": "280238390866172daaa3316f6c985ff5",
"assets/assets/wordsPortugues/wordsPortuguesGuess6.txt": "34a96e4637d392ad7d262f65ea7f7412",
"assets/assets/wordsPortugues/wordsPortuguesGuess7.txt": "7ff63daaca1c3026f58e348c55211658",
"assets/assets/wordsPortugues/wordsPortuguesGuess8.txt": "cc87904ad0d9c0784901a5cdda656248",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3bcad3438760423f29f86ccd3aebbcb1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fb95c7216b4833df896320e206de6d75",
"/": "fb95c7216b4833df896320e206de6d75",
"main.dart.js": "f4e8db07b024881ba09a494556ddae2f",
"manifest.json": "a9a53f63231e292e16a4861b958274b7",
"version.json": "3159239c446d8c31ba3a3ae91ef26ad8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
