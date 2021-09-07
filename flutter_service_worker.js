'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bc77d832c9866276e7caefd95584f391",
".git/config": "157b48d45c8c9593f4639f666be973b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4bf2c26b05d2aca8d66fc78fb03a3bdd",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "897dbf2545ade879532ee70e2a645253",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e54f7ea98e644ce5409a30ee244979e2",
".git/logs/refs/heads/gh-pages": "86256b749b78c16de7711a3df4530a6d",
".git/logs/refs/heads/master": "a9c462fff7d0fa6ae44bbab24c6558e4",
".git/logs/refs/remotes/origin/gh-pages": "884120f0956536538e691cceff8cd450",
".git/logs/refs/remotes/origin/master": "3d32d3ae78e0403a7227b4261681af66",
".git/objects/03/87a6f51f385900446f5bedac77e8fa83fe09fc": "69ac9fe6038b3913598090f666a6fb44",
".git/objects/06/637829dabe6fd47d6a0b0d1b135d9d55395889": "acbbee0ed6ab1a229d458ad5306ce75d",
".git/objects/07/1e4351045e9930ba50ff55df4c7a7eae820ef7": "364b7de185949b9d24909c89e916ce8b",
".git/objects/09/eef66d84938f69872559982d60ecf858a75190": "180f90a8978431e20e317160065ec33c",
".git/objects/0b/8cd8d45f22159510f198fc1d8282a5dd83eb61": "bc5af66209ae6fe8623f8cd46e484af0",
".git/objects/0e/6df3494dcb7db0bb09784400f625f27cae191b": "6643a71226325e7a041e1b5df6a5fd47",
".git/objects/0e/b2413de9c5f97636ca6d6af0ab891e50085903": "2ee3fb03c284c455d4da161ec7293f92",
".git/objects/13/bb2d92745fea27cf70f12522cd6916d6c53fef": "7fda04935ad328b0178f598e2503f618",
".git/objects/16/40f8d28d7a30cce8ec8e0ad2b08157ba0bff41": "50fc77d33e56570472c8c14f185f417b",
".git/objects/24/ff0e19a6420268cf7d0f45a980032b7f068857": "b998271dca6b6612732d3eb3822293fd",
".git/objects/30/6fbe3b28796e0971c2be3856c82ef48d38a4d0": "8180900ae68145e0cdff56b96fb4c9dd",
".git/objects/4b/b8820e320763a6b8bbfc475184aa9d915ba04f": "793ae88b478e3304d3468eb26027dd4b",
".git/objects/54/f51ca7af71130dbbbdd5758b092a577eedf14e": "9e8340560c6e62539e912aa913c15748",
".git/objects/5c/9f41fce3463cf3acff68b090b19ba8585be8ef": "c3e78ad518d84eea2bffea4ae8b48c6f",
".git/objects/62/e01b7a2d12d218d8ee3c370efd92837afa048b": "50157112538a6d7e234710012c3ccfa5",
".git/objects/67/03b3510dcf935e363f2ad91ce2ddb4f0a64888": "91b13e364ab1326eb6e2e09c17f272ec",
".git/objects/69/bcc31f17a36136414940ee6bc720ee3c97f14f": "4a6c5834ca11562110b225b100461d42",
".git/objects/6b/7b9c401e923f0a6877b55b990d4d7e73746993": "2dfd88f3aae296f9ba17a8d3811ba1c8",
".git/objects/7e/90fb9c65eb5c064180d37eb436a7e15ce8ace4": "f6f38e582772593054a4fdc8a5acc846",
".git/objects/8a/f45cc05ae3e9701889a1b231e68078c33ab6a1": "30c2ee7d2c1a73dec780cc06a03b02fc",
".git/objects/8d/a703720f6635ca80ad92f40c528659cdecdc0b": "df8ce1ee7f883829f604e8a613c763f5",
".git/objects/a7/580c7304735385eb34b59b6e5cefb4ffbe6024": "197e87a04f1344022faa6f29504066e6",
".git/objects/e1/fc173e5d38d02bccdff3d828232b8c5a7b3103": "7f65e28229a6097346789bb717009a34",
".git/objects/eb/69467ac7cb269dfb35ac4f819ed85b0ec4be64": "f940a90317dd7b8f91f69cdde2a7d56a",
".git/objects/f5/a79fb5d9146dd5b0ea73e380a3e9937056309d": "3f437905a702ae5f4d5755823fda235c",
".git/objects/fb/dbb2bbf1f3f1e97cae62b471e9176cacb4c628": "e5ab6586345c8a2a300adab8ae48c6f6",
".git/objects/pack/pack-62ee06017a85b68418356d01c96f56ab83e584f3.idx": "62e98c30d8c34a3e6c8260125f9d5443",
".git/objects/pack/pack-62ee06017a85b68418356d01c96f56ab83e584f3.pack": "a93a8752c92f51fe5037122a5b3ded48",
".git/ORIG_HEAD": "346a902015691cdb7a54f35565f252fd",
".git/REBASE_HEAD": "42a9502f8a318b2788d720cb3e4e67b2",
".git/refs/heads/gh-pages": "8e12a841364c6a8183060f8b50e06ef6",
".git/refs/heads/master": "42a9502f8a318b2788d720cb3e4e67b2",
".git/refs/remotes/origin/gh-pages": "8e12a841364c6a8183060f8b50e06ef6",
".git/refs/remotes/origin/master": "98c32a7ef2b407843a968b387e9690b4",
"assets/AssetManifest.json": "b8d0d5ea2e2abe651c24ac151ee4a552",
"assets/assets/about_me.json": "cc659761d547011ee014f2e6ec13418d",
"assets/assets/icons/Android.png": "b522aceff2bcafa4dff080d8b2504354",
"assets/assets/icons/Arduino.png": "d311f87f6afc1e3b69db306e9ae69808",
"assets/assets/icons/C.png": "d0785a0e8de530eaf7bc1d23d3a795fb",
"assets/assets/icons/Cpp.png": "afdabf22064e382e6c6146cd45cb3a02",
"assets/assets/icons/Figma.png": "484143f86c1a7f467b7cf3531abac3ff",
"assets/assets/icons/Firebase.png": "680ff97822825bf447a54260367a3477",
"assets/assets/icons/Flutter.png": "e037a67b951c4dd974d7cad81e89d4f2",
"assets/assets/icons/Git.png": "9a7ae60f03511617b08b2fbf51b4687a",
"assets/assets/icons/Java.png": "67108e3b14c1a9f0185fb55aecd8a344",
"assets/assets/icons/Machine_Learning.png": "fbdc7d7fcf5be8874766e28a9c771c51",
"assets/assets/icons/MySql.png": "cbd9a76a50143a1da4cab3e2583901ca",
"assets/assets/icons/Python.png": "c043a36c8182990c10eb906c251c0648",
"assets/assets/loading_image.png": "f9f42c81c588ee7f8c87e51608ecfb00",
"assets/assets/person.json": "0e5a1ce0e4212b4d0c1c49cd17c33ec5",
"assets/assets/profile_image.png": "63eca7c60e347333c0a2a25ee9962a47",
"assets/assets/projects_dark_bg.png": "a00b5c57404cfef102b54710c7c25cc4",
"assets/assets/projects_light_bg.png": "41ad74a271faf466c3c7150af938caff",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "daa17cece07919668fbddf58d74d82be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"favicon.png": "1c1b61d0a8ccb372aeb2b31f514e8571",
"icons/Icon-192.png": "43dd27a1a89d9baae4916c94e927ecdf",
"icons/Icon-512.png": "6b395f35a222d37d97c00533831d34de",
"index.html": "3e083b6703693035244598c3a6bc012c",
"/Portfolio/": "3e083b6703693035244598c3a6bc012c",
"main.dart.js": "577bd9f026f1ac527952310e6a238a87",
"manifest.json": "7cfee987e49d7f7c02ecaa3a0f634659",
"styles.css": "ac47d5c4865e5cfe8ce6ab99f0f8bba5",
"version.json": "7d7cdf0fd2c36f0711b4b1ef13b9b90a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/Portfolio/",
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
