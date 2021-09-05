'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "22accd44bb71d972dfca547843a955a7",
".git/config": "157b48d45c8c9593f4639f666be973b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6f6368d8a27fa0c5e6b9fe2797360114",
".git/HEAD": "10a90b178d4c6fc9bbd28f01aec36e57",
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
".git/index": "409bce5dbf02f3fd211ddb5a00993a74",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d57fd65b72c5459058c8b5a626fc198e",
".git/logs/refs/heads/master": "c66740b2b434ab4cc8d6854bfae04852",
".git/logs/refs/remotes/origin/gh-pages": "203fe98801340a0eb3fef7073eeca8cd",
".git/MERGE_MSG": "39b01dcde6041b5b5b2fea173f7240df",
".git/objects/0a/96086c3133b9fc080868b825c38d7ae504ba0f": "65c8db9bbfa7a7d8e78d9edfe68f9df0",
".git/objects/19/a96bc337d9f96b2fa8c4cbf0f6ba00b2ac7be0": "9185f83a667dab39b11d9806380c73ac",
".git/objects/1b/f475790616de889589190f2ba4b009025007c6": "692e13a1a5082b4d06d8c461fc3557ee",
".git/objects/27/2cb7f8f3dbff1db7af9a713e61273c9e91bee9": "ef98b654fa0f60885be904b556f9baa0",
".git/objects/2b/47164ee3bd28dac05b3a956df6ff77616f2245": "3ffac40294e73319bd31d775dd4745af",
".git/objects/2d/76721bca0d38c19bcf1c6d00a390be2d5f5494": "0653022728e3b01f0f7c0050e86ecd3b",
".git/objects/2f/02a2c4e7752cfd23022d85629ab61ee699985b": "9b6a3399e08688f2b832981af2dcd556",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/a8090b5013703a35cb9da646b28dfee5d496b0": "d383106f6b16cb945d3bf4afee0e6e5f",
".git/objects/39/e8677f504068432baf29f5e522a94977b04360": "2dfee9307d81320efbbc1390494bc1b2",
".git/objects/3a/26d90da3e715bb132bfe516bd1ad4a9bd9960f": "4a691134f7f8c1b7c27530afaa2183d0",
".git/objects/3b/9fa07327fc259f7fa1d88c94d310973f139a42": "601030ad50df3a23352db2b9fe2cd3d9",
".git/objects/41/8162f445e925ff80aa0e23ee627f245bc5cba4": "86af816f6ef520b8af3514f974c01c47",
".git/objects/44/556a5269a99295e0c5713126510a810b079fb3": "f365af88affbfef86b7c2488c64e62a5",
".git/objects/46/d989655f8c1d2b48f19b34f21ebb2e5227359a": "5b6351e7a9d5a88f5859d249fc21ee9b",
".git/objects/52/a15f475c5f1964d75730212bf57626e369f51e": "c3cce87d3555144f7df9392bd459cb1d",
".git/objects/55/456295b3f19915380fa8d5c4c99db2b034bbc9": "08214898a93bbc3eefc8f47fb838b857",
".git/objects/5b/99b5c3cd9137366c58cacf90ccf8426a4b570d": "4a0998ba40877d7c22f288997f660e33",
".git/objects/5d/2f6235bbd6bb4ed372feac3d1981fb8b673f47": "de91e7ed38e3126e7d83486525ac7741",
".git/objects/5f/089f9c70818769496128069e4a4631ed6d1316": "043a7a495c9c8ea696eaf90dc3364eaa",
".git/objects/61/76fd93cacd7ef5835fbb4fbed965ca9cbd0e0d": "fff24bd1e90b93b81295f3ebdb9f64fc",
".git/objects/63/ae91781b27ac492da799ae4010e2a6bd0c1183": "5fb3a33e244995a80bc868ba08d2ca4b",
".git/objects/69/e7c61c46bde4939c75004d9bab8047e3da2f22": "bc6644c60af3cd88a3ac7c436e89d03a",
".git/objects/74/f0438e8a2aaad758df7a99324f34be0a1857a4": "7da4af49223ad6eb8892bda057a2d033",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/fea839f05c88d49a24afe3bc5e95721d3cd98c": "16b10c7d4e689fc66e458c72ae7453b4",
".git/objects/8c/1a1ea72df9d6d90902fbf106a0c49a888d1df4": "f8f3713886fddcd073116e49a5576177",
".git/objects/8d/b389527531b2c9a844602118c12bfaa94b74bb": "18b297cba98aa5aae0804f1acfede320",
".git/objects/93/42fc5eb834c719366e9acf778f6b75f673b737": "d07b72bfceea0fdcbe87a7e4939c9f8b",
".git/objects/a1/08fdf7c7260f962b43591321996e27cbb1be81": "b1cd0a408e900ebf908df5533b2d004c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/9cd5e6118a222e79c67cdc48071e130706079c": "900bbb5bec0a8169823780f3ff36a843",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ae/f975b342d3e76fb9da5cdaa21e308add302346": "41affa1385ede2e11b9215456fd35476",
".git/objects/b3/e3361f30610773d8307568e6814a2a268865da": "6139733c12e62ba19dd6de964a402bbc",
".git/objects/b5/4daa571bf395bbddc52b3c6d30110ec8e29c7b": "d07b9ea217b20bc6726298eaec6c71be",
".git/objects/ba/6223faf9fa0b70c3c2b3fc17ac024b7baef5f7": "22f9d8355800048a576794ac76fdcb7c",
".git/objects/ba/6e47c5edc2505eb1fafff137a63cbd0b3b1802": "a3d7de888e774a5b7224f999c974228c",
".git/objects/c4/2ab57d682f245ec3b7f6a3286a68961b87cc02": "b8ff1057e73543dc172d01218567e5a0",
".git/objects/c8/10933e72499b8d8c1afd66ee8b06eb1fb039fb": "5ba18eaa48cec27b3ff736db10c72f0e",
".git/objects/c8/c5f56a53d655e929c7ef42f40c643e097c1fdd": "02e22b6f781442a6848f14fb7ea4d382",
".git/objects/ca/88e7bde04c398f652c65b4b44b169281c9c9a7": "426dd50e64aa48a0d0f6b1e4c1520922",
".git/objects/cb/5888393cd9e2b60d378957d34c11495156e1e9": "acba39fd7f9d3f9b38230536d23eed7b",
".git/objects/d6/6cd0eb9cef3bd8e0350bfc67ade983d9516832": "a761895027ce82e18d779a6da609e405",
".git/objects/d9/896bb92cee054c42bb2dc4c4bc63d616418afa": "0f0e3a4c3fc23a4ddd716668c4f8ed45",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/dd/69fd19a7d31d6e18754cfc687183c48d7fa673": "5a354eea3fb606baf71309e3bd04b6b2",
".git/objects/df/c295a4d716ccd616aaa438b96af64c86286922": "5997e7fad8745b77dcf61fa1461faa59",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fc/492fca0c11adebffbde61fafc138f18b86abda": "c335936447d70de1c1b0e004aa53dab4",
".git/objects/pack/pack-9a7162cf48380bdc33228879b3904dfbdbe4ed3a.idx": "21d2a10ec6705c51e2ef6cdcc79bac88",
".git/objects/pack/pack-9a7162cf48380bdc33228879b3904dfbdbe4ed3a.pack": "b65d0df3ecef039f3ab3d53de7d34d0b",
".git/ORIG_HEAD": "9f674bf5d250b17ade8834e40aed3fc0",
".git/rebase-merge/author-script": "15471761833606d0b0d40266bd9743ce",
".git/rebase-merge/done": "3670f06369b578667b19ae7ab0fb1e7b",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/git-rebase-todo.backup": "df1e626cda0d83b7eb0ab79f8205328a",
".git/rebase-merge/head-name": "7af7f62c1ff93562f49dd5a2f00c248f",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "0fe9b0a19c0f80dd18bc999de07cef1c",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/onto": "10a90b178d4c6fc9bbd28f01aec36e57",
".git/rebase-merge/orig-head": "9f674bf5d250b17ade8834e40aed3fc0",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "9b2460e2f42cc86f405db97a89d15f2f",
".git/REBASE_HEAD": "9f674bf5d250b17ade8834e40aed3fc0",
".git/refs/heads/master": "9f674bf5d250b17ade8834e40aed3fc0",
".git/refs/remotes/origin/gh-pages": "10a90b178d4c6fc9bbd28f01aec36e57",
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
"assets/NOTICES": "54d798e5b32655e6f178202e9fb57ea6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"favicon.png": "8f53860fd2bf60b8a37208c33de94ec0",
"icons/Icon-192.png": "1fd4f9d10e0db0de602f96a275cc5b5c",
"icons/Icon-512.png": "555113a9d551c75b40ee11bc304be4a3",
"icons/Icon-maskable-192.png": "1fd4f9d10e0db0de602f96a275cc5b5c",
"icons/Icon-maskable-512.png": "555113a9d551c75b40ee11bc304be4a3",
"index.html": "d2b084ad4306f292613198a4702b5b10",
"/": "d2b084ad4306f292613198a4702b5b10",
"main.dart.js": "f4eb6c0f674c70fa154ff5030efb7f8a",
"manifest.json": "96b6496ba834d99a31dbdd783336d362",
"splash/img/dark-1x.png": "709580b00b617efa6511394ece3a7353",
"splash/img/dark-2x.png": "aaba5f1b3f548bdf1ac1c2e12fe9ff7a",
"splash/img/dark-3x.png": "20fc038c051c91d413c5565314657cff",
"splash/img/dark-4x.png": "6152248684adc358a387de644161cfc3",
"splash/img/light-1x.png": "709580b00b617efa6511394ece3a7353",
"splash/img/light-2x.png": "aaba5f1b3f548bdf1ac1c2e12fe9ff7a",
"splash/img/light-3x.png": "20fc038c051c91d413c5565314657cff",
"splash/img/light-4x.png": "6152248684adc358a387de644161cfc3",
"splash/style.css": "cb06740112c06f795f6cb29e23a2ad19",
"styles.css": "ac47d5c4865e5cfe8ce6ab99f0f8bba5",
"version.json": "7d7cdf0fd2c36f0711b4b1ef13b9b90a"
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
