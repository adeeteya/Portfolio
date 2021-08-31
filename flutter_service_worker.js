'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "35817f8ced110feb403415a1e676e264",
".git/config": "157b48d45c8c9593f4639f666be973b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "73d42f33f5543d9a9af603253a95f976",
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
".git/index": "44244eae26f12db96ebcf6004677f998",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "769f13ef6cc38d6461165f3d4a4c6b29",
".git/logs/refs/heads/gh-pages": "ed3a4be284c143be27792d3e4b1c93db",
".git/logs/refs/heads/master": "22870e696671f401f82098ee0eba5fed",
".git/logs/refs/remotes/origin/gh-pages": "b2ed09e52d83c367e3b9ea6e960d40e3",
".git/logs/refs/remotes/origin/master": "1a10916528e0899e0e451fe80650cebf",
".git/objects/29/be49fd979b04aeaf9a53c47b8f4d879bb0cda0": "cfebaa3a6cbcba142bfd09214f78c58a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/7a4e534b06451d6cd3b6d6a518c97210f51382": "6adf3dc59eaadf5a176b1af74f852585",
".git/objects/37/a8090b5013703a35cb9da646b28dfee5d496b0": "d383106f6b16cb945d3bf4afee0e6e5f",
".git/objects/3a/26d90da3e715bb132bfe516bd1ad4a9bd9960f": "4a691134f7f8c1b7c27530afaa2183d0",
".git/objects/41/8162f445e925ff80aa0e23ee627f245bc5cba4": "86af816f6ef520b8af3514f974c01c47",
".git/objects/46/d989655f8c1d2b48f19b34f21ebb2e5227359a": "5b6351e7a9d5a88f5859d249fc21ee9b",
".git/objects/52/a15f475c5f1964d75730212bf57626e369f51e": "c3cce87d3555144f7df9392bd459cb1d",
".git/objects/55/456295b3f19915380fa8d5c4c99db2b034bbc9": "08214898a93bbc3eefc8f47fb838b857",
".git/objects/56/d7f2314af8af876ca33ea134edb388f982da3a": "8eeaa95dd7c6a6b47eafc81145ac822f",
".git/objects/5b/99b5c3cd9137366c58cacf90ccf8426a4b570d": "4a0998ba40877d7c22f288997f660e33",
".git/objects/5d/2f6235bbd6bb4ed372feac3d1981fb8b673f47": "de91e7ed38e3126e7d83486525ac7741",
".git/objects/5e/4cdb5bc5ed1555b9f56420b103f88e87cc28c8": "33e5bb8b14d96b5843641e6c37d19488",
".git/objects/5f/089f9c70818769496128069e4a4631ed6d1316": "043a7a495c9c8ea696eaf90dc3364eaa",
".git/objects/61/76fd93cacd7ef5835fbb4fbed965ca9cbd0e0d": "fff24bd1e90b93b81295f3ebdb9f64fc",
".git/objects/63/ae91781b27ac492da799ae4010e2a6bd0c1183": "5fb3a33e244995a80bc868ba08d2ca4b",
".git/objects/69/909286555b03a5eda5d3d46b9a6a39c7f0698c": "976ef143671b8f32c5cc2b22ec316bad",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/a0e9c4bc60ba72efd1846a8162a05d0239beca": "51fe08567f07bcd689554bbb5f78ff8d",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/3b783a46a4dc99115d4618bdf25131e1d8d6c9": "f6082b4a9ab77d3bc5afbc98ac735dd1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1a1ea72df9d6d90902fbf106a0c49a888d1df4": "f8f3713886fddcd073116e49a5576177",
".git/objects/8d/b389527531b2c9a844602118c12bfaa94b74bb": "18b297cba98aa5aae0804f1acfede320",
".git/objects/93/42fc5eb834c719366e9acf778f6b75f673b737": "d07b72bfceea0fdcbe87a7e4939c9f8b",
".git/objects/98/f82e3fc1c2380c3e4c7d77ceb350a2f5967814": "f45df908db3619caa0fe266b72f87d1f",
".git/objects/9b/4139f4766c2ff26639457cde8a41ebfa644cad": "b34843add009311c82bba663e66af7b2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/431bbda433343308f0ee13ba5d0cb4befb9687": "fa83cc88432ec8c23c71fed42742adb1",
".git/objects/b0/6fa61941562f00d2d4691df0578cb9ebfe4aad": "a38859c12dd696dc2b9bc1fc15c4f8d9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/6223faf9fa0b70c3c2b3fc17ac024b7baef5f7": "22f9d8355800048a576794ac76fdcb7c",
".git/objects/c4/2ab57d682f245ec3b7f6a3286a68961b87cc02": "b8ff1057e73543dc172d01218567e5a0",
".git/objects/ca/88e7bde04c398f652c65b4b44b169281c9c9a7": "426dd50e64aa48a0d0f6b1e4c1520922",
".git/objects/cc/85e7c74b484c1d23792d2c2313cacfdfa68f16": "dffb7b5cf192140cf94d692fb1f78474",
".git/objects/d5/a656d829b9ea1ffc3f24c4396625a64599da0b": "cbc2c7553c016bdc38b2285df8a07661",
".git/objects/d6/6cd0eb9cef3bd8e0350bfc67ade983d9516832": "a761895027ce82e18d779a6da609e405",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/533d97336827691140d3391871e24402f78dc1": "077ddd4db03e5beda6968c2afd211d9a",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/dd/69fd19a7d31d6e18754cfc687183c48d7fa673": "5a354eea3fb606baf71309e3bd04b6b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/492fca0c11adebffbde61fafc138f18b86abda": "c335936447d70de1c1b0e004aa53dab4",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/pack/pack-80657dd76a1da26ec3651abacb45daf90bb0dea3.idx": "6f3bfb210932553630a54902e5222b0b",
".git/objects/pack/pack-80657dd76a1da26ec3651abacb45daf90bb0dea3.pack": "7e16a76df0f167b8e52ed23518fd6248",
".git/refs/heads/gh-pages": "36e6d60ef106f5599001ea95e5cbc949",
".git/refs/heads/master": "36e6d60ef106f5599001ea95e5cbc949",
".git/refs/remotes/origin/gh-pages": "36e6d60ef106f5599001ea95e5cbc949",
".git/refs/remotes/origin/master": "5ea0aab4350ceca48010b59cf32674bf",
"assets/AssetManifest.json": "d67cd9a2305c7a60a72bd56275f15983",
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
"assets/assets/person.json": "0e5a1ce0e4212b4d0c1c49cd17c33ec5",
"assets/assets/profile_image.png": "63eca7c60e347333c0a2a25ee9962a47",
"assets/assets/projects_bg.png": "707c2c8cd5f718573a79af538ae0a2b8",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1d4e3bbcc04df97434ffa5aa68ea5e53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9de65eb7edc53942300f32298c98df8b",
"/": "9de65eb7edc53942300f32298c98df8b",
"main.dart.js": "a6d1b48551800218560a3b2291fa9c20",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
