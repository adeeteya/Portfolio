'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e43969e0096d4acb26b9b6a48b442f65",
".git/config": "157b48d45c8c9593f4639f666be973b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ba95f49cd99dd860aeda6d0c7397b7f7",
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
".git/index": "40d9d420060b3e7f66f9555b2c5d9e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3a74b8a9de83e110ccfe82210e98e92d",
".git/logs/refs/heads/gh-pages": "3a02a02a0bca6379cf871fb68716d0da",
".git/logs/refs/heads/master": "22870e696671f401f82098ee0eba5fed",
".git/logs/refs/remotes/origin/gh-pages": "0c7036db69b2ca7bd67f8250050780f5",
".git/logs/refs/remotes/origin/master": "47a952139755feed725d841ff5ed7a4b",
".git/objects/03/20a5cedb6f076752a3c5f85dce136a4ca1a6bf": "ef5cd1e195647cfd0432d6e2d112ce7b",
".git/objects/03/3e6f16062b1d6df8030e156d65ebad46e45b38": "4e15347660bf319f127eb195eef2a6d5",
".git/objects/05/a33d84121517718e6101395df219b225837c40": "7e498a0254e7137c082fd5607000c0fb",
".git/objects/07/e8e3ce42468a3c111b77f94ed52e3a6fc68683": "2223725bc338a3038136dcf264d86884",
".git/objects/08/974a0e13d1b5264e20d71b4cf86a9e69fe46f6": "c882e87b05102f2c861a79a56be1e728",
".git/objects/0b/ce9f6b727371e95d1ed2cb0f8a919697663366": "612916251b9e3427135d3d97511b2961",
".git/objects/0d/7f15b492c4ea122f925d07ffcb20d9ba0bbb3f": "6b4bbe1133ea346434ca6630fac01e29",
".git/objects/0d/94e41ed7af7986b2279b1f18616d0bec3c93a6": "e8bb291556dce8106c0692cc659061d0",
".git/objects/0f/2b49b3130103c30ddf5622f3beeb22ec3e4966": "270067d66460e89423f29ab47a8e5bc6",
".git/objects/10/5893555fa562c9f6977bf73a399916a8fcdc8b": "4c76a6395b953cd39a05d1e0f01f4d95",
".git/objects/10/a7d03b6bc9f474a1e87abf8953c522645333fe": "38ea76baf6e5b87c24261257642b30b8",
".git/objects/10/bbbeb62ea434bc91a5411d3dcad898d0f9186a": "2443d3aed54e0115b8f7c3cf09d25ad6",
".git/objects/11/b82a1c816983954dcb022ce49ed6b7302ee42d": "cb52af514acf153805012b3ccc6cbb53",
".git/objects/16/7c1a99ff61b702e65897f309e890405e5ee289": "956ba92f63148553b5357f016659d7a7",
".git/objects/16/b3cd50e005fafafa077346bbf09f473abb9ddd": "a96d217283c16bb4af7a4593dae98861",
".git/objects/16/fe58205161d0ddc4eddd47746f545d752a2c3f": "50c0ff3b51e2aa371ff45dd78d088077",
".git/objects/18/c7784266f1fadaf5bbad2647d6300f84e42576": "70880ac11d6c4da4f44c415c8f5d7711",
".git/objects/18/f2ba8af47187be4b6ab48791f7c8cca08559ce": "a9f4c22df0512dd31785a7da77a1c54f",
".git/objects/1b/5a685445825eb37ffeda0cfcd989508e0ac200": "a7d41dc016e07f0d96a452ab5a480128",
".git/objects/1c/f117ae1406976b857182cd11e5f1e9f4a5f6f3": "c3b1d1a0d7f0f069a1c27737f263611e",
".git/objects/21/9a47b67e1658b8cc0606800177175301e6f78f": "cb6dc1d023d0234f2e7b5bad4c463749",
".git/objects/28/562f2cade0160e4123d10b4565c5446fe908b5": "56d6d5c72fce3c77edd66bec94f7eb54",
".git/objects/29/be49fd979b04aeaf9a53c47b8f4d879bb0cda0": "cfebaa3a6cbcba142bfd09214f78c58a",
".git/objects/30/2ca571b416587845ca1b2fa3bf0e9f0af0df03": "499242e8b64b8c3d7b585cccba75ebfe",
".git/objects/32/2221df9f2ae19fb9d34ccba9bc1c514a91a460": "7af201a9df47dd8f1622ad75a54d48d1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/692ae29e9b352a2cc7e022b9f99ccef4cc915a": "73739577da9ce239f90faaf375ee24f4",
".git/objects/35/e91a4de9fef07a20ce78a36e272b3c3da59641": "78e03f5b463741bbddf9148fe2080654",
".git/objects/36/7a4e534b06451d6cd3b6d6a518c97210f51382": "6adf3dc59eaadf5a176b1af74f852585",
".git/objects/37/28f53db8c6d76b0a199e82db904a58cffda43d": "e750a4032902aafe948f8e279675070e",
".git/objects/37/a8090b5013703a35cb9da646b28dfee5d496b0": "d383106f6b16cb945d3bf4afee0e6e5f",
".git/objects/38/fb04b22d2a6d894b8d0c21d247a2244d8b8bc7": "c8eff4897fc1d4181cef0f0dbf87c22c",
".git/objects/39/0240cdc71fe1a2e4085c5c09e645d163525fbb": "8ea35c94ef5612f16b1a0c6a1a1eadea",
".git/objects/39/442548136e613f5a584a6dd3b026c7d4b3d410": "f736d34c020728b28843bf401303270a",
".git/objects/39/e8677f504068432baf29f5e522a94977b04360": "2dfee9307d81320efbbc1390494bc1b2",
".git/objects/3a/26d90da3e715bb132bfe516bd1ad4a9bd9960f": "4a691134f7f8c1b7c27530afaa2183d0",
".git/objects/3f/d090260570f6e40164c3d570437494a43c2bf6": "967b1b072c09b400d153d221f1f15a9e",
".git/objects/41/8162f445e925ff80aa0e23ee627f245bc5cba4": "86af816f6ef520b8af3514f974c01c47",
".git/objects/45/37e5835b33be229ff757c855be127a94769708": "7b24fffc10bdec0e27c3fcdd72bbc584",
".git/objects/45/630a67dcfacb2cf44e1f6a9590d0525cc2259b": "96f916ad0bc668cf2e7df43b3e8c473d",
".git/objects/45/c9434b3e92d13005d261a2cf55c20896cda48d": "93dcb2c5c96946aa0173d8e1e89957b1",
".git/objects/46/d989655f8c1d2b48f19b34f21ebb2e5227359a": "5b6351e7a9d5a88f5859d249fc21ee9b",
".git/objects/47/54c88b85317e9a4b7365b12c806d27c7411c18": "67b52c3ce8fce616f9428f7382824bcd",
".git/objects/48/2d37208c507a7485eebad41a32e5bd6e0e56f4": "49eafc38e25d632977507dbc6c3f4d4a",
".git/objects/4c/154c79b251e323c1b949bf05f0935c4ace1c38": "0ad2c6c5547ef69db55ea7ba27b1d4db",
".git/objects/4c/1d9c79358a14ffc329a9b72a912fd89f3be1c0": "278ca8fb1f210f974cc291f5fee585ba",
".git/objects/4e/3289be99095de54cbf9a3a31bf1f4bf817930a": "69be6b93a6628c50b53afffd8827d614",
".git/objects/51/9305562405ef883312dfa476d5a2f540fa9ca6": "63b943abde2da63aff4131eb032891ad",
".git/objects/51/eb7e1751e631e2f5932c48c59e6626c3d17d97": "f046f1e224d91f32f3f7e58645b89401",
".git/objects/52/3096a2bfbe036a48a1b295067bd004a5be7de5": "3e25de88584c5b4315e71c386010da8e",
".git/objects/52/a15f475c5f1964d75730212bf57626e369f51e": "c3cce87d3555144f7df9392bd459cb1d",
".git/objects/53/498482e4beaafab12cee7a8e670c8a406f8ec9": "992aea340cc11ad0a95242d25851d93f",
".git/objects/54/fc1eff6ed78374f4e81f23bd5285735a8e74f3": "433d69d89ab9578b09a99a0d99e1ad25",
".git/objects/55/2b16e5ef08a8d14b680750b88781158e0354d0": "a8ba7021b7e890fdaa6bc00ac28af1bd",
".git/objects/55/456295b3f19915380fa8d5c4c99db2b034bbc9": "08214898a93bbc3eefc8f47fb838b857",
".git/objects/56/2b5803b4585513dc9a16f92cc9dacc249fce54": "9bde7fab876a846049b3dac4b50c5f6a",
".git/objects/56/d7f2314af8af876ca33ea134edb388f982da3a": "8eeaa95dd7c6a6b47eafc81145ac822f",
".git/objects/5b/6c92e1529c41fa6579ad0bc40f7c5709c9d54b": "8f577ea50f2385df7de508921544fc5f",
".git/objects/5b/92e426debb4c78d52d75c6bf20256898daedea": "43f58c8a19d92a92734720ad65e21cf0",
".git/objects/5b/99b5c3cd9137366c58cacf90ccf8426a4b570d": "4a0998ba40877d7c22f288997f660e33",
".git/objects/5c/486531bff2d531f1f9a7664fab0afbe30b0a3b": "206965ac62a2cb40aa914cb2ac3108d6",
".git/objects/5c/f4ac8148fc9a470d808086b526af66e27281b8": "1fa3c16d9143f6e3e8a5e383ba9d5ab4",
".git/objects/5d/2f6235bbd6bb4ed372feac3d1981fb8b673f47": "de91e7ed38e3126e7d83486525ac7741",
".git/objects/5d/54c16d3697c64de20ef117571a2d879c8b0bf3": "93625cb0da34f2cc2d16712d712a4a45",
".git/objects/5e/4cdb5bc5ed1555b9f56420b103f88e87cc28c8": "33e5bb8b14d96b5843641e6c37d19488",
".git/objects/5e/91e380748608c246c1cf801837e5581a454af3": "f8aa2189d0ec822986c7c4cfd02ee539",
".git/objects/5f/089f9c70818769496128069e4a4631ed6d1316": "043a7a495c9c8ea696eaf90dc3364eaa",
".git/objects/5f/6cacd9304b642792f1d5dc98b36680b88f9a6b": "6fd500bc89d7e3a674679027cd63b380",
".git/objects/61/76fd93cacd7ef5835fbb4fbed965ca9cbd0e0d": "fff24bd1e90b93b81295f3ebdb9f64fc",
".git/objects/62/ea8cf983fc8a66c5db4c6253b05cef7e3be79b": "754c74e6ba8b77c251a08d1297ccec3e",
".git/objects/63/ae91781b27ac492da799ae4010e2a6bd0c1183": "5fb3a33e244995a80bc868ba08d2ca4b",
".git/objects/64/6c806ec9a760aea65b8fcff7b6ce8e5909afe3": "9b04560f64ce0bf93cd6373433c94d9e",
".git/objects/65/2d17bbd9c986c836eb2e6610531c50fd6279a9": "071fb232dde7f909a8025b306e09e95d",
".git/objects/65/3ac591b0b64e8837fddaa5aa0bfc31fd8d97c0": "8083edfa21587a0b0fc33c38f79480d6",
".git/objects/69/909286555b03a5eda5d3d46b9a6a39c7f0698c": "976ef143671b8f32c5cc2b22ec316bad",
".git/objects/69/e7c61c46bde4939c75004d9bab8047e3da2f22": "bc6644c60af3cd88a3ac7c436e89d03a",
".git/objects/6b/291371ef84bdf7463a64cead6dbe51f2cb5eac": "455b04c8e4ec04de7474bee1ac1c945c",
".git/objects/6c/38a007dc22b5d649e6519b993b8b546b348b21": "73e417a4bdba2d2addc7014c564f55d9",
".git/objects/6c/ca4a50e07a640847f7cb41f4cab954489006df": "fa1096585e2e69fc1ff2af2480338add",
".git/objects/6f/682f044ac595c0fa2a556025cd124377033e3f": "b94b42c5d71ea5345cdbd19f008e0bab",
".git/objects/72/bcf7438da2ea580d1db1d6bd535721484a62a3": "05b945873f5c3ec557ba1e2462a56604",
".git/objects/73/1b9fc22c15a8c5708076de7a9d9f02b915c603": "811747958910dbfd0f78ac3dc0c67f16",
".git/objects/74/c5a3246660c33ae584e7c10c0ecee698cf29fd": "cfcace64709563a18fbd54d705aba260",
".git/objects/75/6ecce39128bc26c3b56a5bcafdca0a32fac85f": "f2b4a7abce1436b08f3b943c46d04f09",
".git/objects/75/ad0a48c49e46956e482a30ac9e8605c4685ab0": "6d375d2d240ddaff9c2bbddd9932248a",
".git/objects/78/d36fc9bfa25bfbbb4f2ff16707efab37c08439": "b69c4cd6a1406a937f6d1fa647ddb094",
".git/objects/79/0e3161284f102c6d7ecd94ed6b88ea1f8f0457": "cacd4763983161b30891a109cc3670ff",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/2a77c2324499692d2e70ae217c5f0e5e6d65a2": "8d40e844e3491879595ac2ecd455e042",
".git/objects/7c/dfa50279d7b19709e8aefcc82b3ffdfef2577f": "d18ea9504e1fd80014ef6d68564b007d",
".git/objects/7d/22da10a8946af47e4165a54e390e99aead992b": "8d48fb3146ce778251093aaf639be2e9",
".git/objects/7e/344cdcdb7413bf4810e101db267a4379dcf5d5": "58a6ce14d62440703118fdcbbbf16d68",
".git/objects/7f/74d03d4ffd5d0804d27fbf663ec82501643d77": "900461221e41b48c41b5bf141daadf6f",
".git/objects/7f/d91d729d9292600cadab3f5e92c332e071ce23": "99af8fc61595c5ea04f81f8560d074ae",
".git/objects/80/3fb5276b51c171a428c65d8f43dfbbdb155424": "9987127aa2c7d3aa7c4cb0ec71a9c15e",
".git/objects/83/a0e9c4bc60ba72efd1846a8162a05d0239beca": "51fe08567f07bcd689554bbb5f78ff8d",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/84/f9aec99fcb3c9d07bb16d540ad7001df9b0044": "c18727c5b985fd91ec894c85eed87217",
".git/objects/87/4d4aa3734795f5e092053e15219b5d27719eb5": "3dca025dd0ba75df6e476ea1b6d556b2",
".git/objects/87/92b5df914e01dda95aa99bcd2321c5e7c73d11": "57d3ebb4a9e027da44d85db4925ddcd9",
".git/objects/88/3b783a46a4dc99115d4618bdf25131e1d8d6c9": "f6082b4a9ab77d3bc5afbc98ac735dd1",
".git/objects/88/64342c5794c371b96c92f48c2b538131c8434d": "328609ea000ece767fd4972be4851e6f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e895821f02bf256591bf1ed1ab082fc5368f31": "95123a05af811ebd337d670d87a936fc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1a1ea72df9d6d90902fbf106a0c49a888d1df4": "f8f3713886fddcd073116e49a5576177",
".git/objects/8d/b389527531b2c9a844602118c12bfaa94b74bb": "18b297cba98aa5aae0804f1acfede320",
".git/objects/8e/7eea2185db38d457c20788ad1de19ef445214a": "c2400e692744356b3b60516bc90e9007",
".git/objects/93/25caa019d79d4b81fbabd0032cb8172f61ed09": "dad047bfc3b511751139c57791ac8bd1",
".git/objects/93/42fc5eb834c719366e9acf778f6b75f673b737": "d07b72bfceea0fdcbe87a7e4939c9f8b",
".git/objects/97/edc95d44c1365bc02327582b63013c8c847cbd": "1d0f3e4889f4368f387a10e67167288f",
".git/objects/98/5f120b2878b3e7eb16d29fca9906b2dff4c2b6": "177ed3ed2d230dd7e8932df6fca78e9f",
".git/objects/98/f82e3fc1c2380c3e4c7d77ceb350a2f5967814": "f45df908db3619caa0fe266b72f87d1f",
".git/objects/9a/285b867ff85c658726497dc39fb86e1d16f6fc": "7103b58478a4ba9f3bc201da717ba273",
".git/objects/9b/4139f4766c2ff26639457cde8a41ebfa644cad": "b34843add009311c82bba663e66af7b2",
".git/objects/9d/91adfc153a9ebf1c349a398a4e5b0c17cffd5d": "ac367b0a7ad2282afdd68cd6518859c5",
".git/objects/9f/be542f68ff65dc4ff9a331007a604bd7a1c3b9": "9c0eeb751f7003ec6d9e66704699281b",
".git/objects/9f/d7d210789220d38dc90acb3611c9eafff97e29": "c4d7e8eb4c8ae1e85f7ca856db3f42fb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/c3cb9fdcdc4ac1e2ac07912621fedb0bd37cb0": "99986c35bd5965f1e00ab1630ad46304",
".git/objects/a2/20868919370e4e2175c92686ccb1c2f0cae357": "8dbc46212c7239e780e7199743f2582c",
".git/objects/a2/c61c35b9f0948031f8db54c1ec3d8f48b34fba": "36ac9458f00f29c7be4e817bdd44b104",
".git/objects/a3/3879f772a77d9b2e8a76063440a3c9ea657b3c": "4b50bd9772dd81eebd8eed87cc5df96a",
".git/objects/a3/3d94bd634192005cf1b38034db14a1452d8880": "a5407c76807f7b0ac06f23ae2fc213eb",
".git/objects/a5/509f9c76f3a542de49636ade2da39643d3b6f1": "7a2e2e9c63d74f22807542aae8a78722",
".git/objects/a5/9430b5df2fd23254dd40009f4a4fd0702a873b": "4f57240eb292460df01ac044e373bbc0",
".git/objects/a7/a0d90745f8a6d9488a452a0c947ee40f16e3d4": "a0786453f69f086627a95d1a91ade3a4",
".git/objects/a7/c9444ee41edd422cd4b634dc8f7ad1a2ccaf79": "9d7a04727440e6ebc4b516acc5d5c7ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/fa8863b0fd6bb52d192f27fee325d965e3b679": "ae6a92db714a2c05ecb5585061baa58b",
".git/objects/ac/431bbda433343308f0ee13ba5d0cb4befb9687": "fa83cc88432ec8c23c71fed42742adb1",
".git/objects/ad/40de9b38f4b72cb691cc1a1c6dba0fad36ad17": "d89a3e8c4931d7301228d6c8ebd1b108",
".git/objects/ae/f975b342d3e76fb9da5cdaa21e308add302346": "41affa1385ede2e11b9215456fd35476",
".git/objects/af/1e01a50a3081bc415bf2210973d30568d7a23c": "d1ebb7f546178c7e95c2ede9d65cb5dc",
".git/objects/b0/6fa61941562f00d2d4691df0578cb9ebfe4aad": "a38859c12dd696dc2b9bc1fc15c4f8d9",
".git/objects/b1/bd500bada620bd393ccee1aca0da3a71aae910": "f772b2d015979abd65504950f47dc1d0",
".git/objects/b3/1c32940e4ff4719512a34ba8e4926af49df03e": "326bd06dcf864e9a10f9156881def859",
".git/objects/b3/e3361f30610773d8307568e6814a2a268865da": "6139733c12e62ba19dd6de964a402bbc",
".git/objects/b4/43ebf22bf6021ac0d8a6a3019e928da158150d": "cae26c8747efe7447e5c0eda9e8af49a",
".git/objects/b4/46374734b5040771135dc5c0a9576297ceb55c": "b797bb531c85aa3275b878ae191dbc92",
".git/objects/b5/4daa571bf395bbddc52b3c6d30110ec8e29c7b": "d07b9ea217b20bc6726298eaec6c71be",
".git/objects/b5/4de05484ba325d956c855561ffe665f0d806e4": "b46b6c914de59275d637312cabf8f2ee",
".git/objects/b5/d5828989ad733c47a7a8682c80065be800a4eb": "78780cbaabb9f6d03d0b3ec21cc7c528",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cb4c1f429902d2af7181d8fe0f5cb6fba0df35": "1207291a17636066a13a07c688cc3627",
".git/objects/b8/b0d726e3311bb3243d4c0982434f9179688973": "7a012f3c1154c878e0dcf0b759646e55",
".git/objects/b9/0edd49ecae315ec9d45f194bbfa0ebf78e2680": "d58701d1ae9fa78f11c4ee9e391fce75",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/bf58ac77cbeef9012ea807bb776e52e359f710": "4a61ef70e7b166e08c78b0434a3a0bb2",
".git/objects/ba/4cbed021fd53ad631f77ed37ce0cb1c051ef61": "546b6c32046770df975481dedf01cfdb",
".git/objects/ba/6044b42e2a499cabb8ece3a2e47debcd42c152": "48dffaa134104ea2e06ced31400ccb3e",
".git/objects/ba/6223faf9fa0b70c3c2b3fc17ac024b7baef5f7": "22f9d8355800048a576794ac76fdcb7c",
".git/objects/bd/2540d84becd4a23fdedd65f211d160cb8b47f5": "72a1e2d866d9af92d853473e64d3049a",
".git/objects/bd/863363b0005c2adf0af52e1aa5defecb979275": "b23177c42ddbf363ef070db7442a0890",
".git/objects/c0/64147a0fa8f95ab028708dd53ab61346b8afe8": "8091ee75e0bc5710333ef66756ef49e8",
".git/objects/c1/6f444dcedcacce580e38f3dda29071970f0f90": "35c9a899629a640d773a5ff3f366352e",
".git/objects/c1/cf6cdcc0398ef25bec95a565df9235587ca241": "c768f1cb5042e5701a6aa470963b928c",
".git/objects/c2/4ebb2644a125dfc7e632b7972bf25ba1708996": "f458ca7d86c897d6290f24948883245f",
".git/objects/c3/330840ab43ad85a10277a02b6bb008b54750ed": "0ac1ca2ee55e5aee139cabdcd37ba340",
".git/objects/c4/2ab57d682f245ec3b7f6a3286a68961b87cc02": "b8ff1057e73543dc172d01218567e5a0",
".git/objects/c4/750d204c6280e83cc5aab706ebb55b774aa3a3": "9105251d6472c86e999193be15525637",
".git/objects/c4/8d9763a90b6990a493b761d0e222a073ca9ef7": "1759546f382800c3720a1251a08025f5",
".git/objects/c5/4ba969d28f8094caf08f38b6e77c45819918c5": "3b3ed32fd6ebe7f0bf34fe1fa46b430d",
".git/objects/c8/009fd52562d81a3c506b9cfdfb2c69fc846200": "a5adbb69d1f163e142d35d47751a5262",
".git/objects/c8/10933e72499b8d8c1afd66ee8b06eb1fb039fb": "5ba18eaa48cec27b3ff736db10c72f0e",
".git/objects/c8/c5f56a53d655e929c7ef42f40c643e097c1fdd": "02e22b6f781442a6848f14fb7ea4d382",
".git/objects/c9/681d14f5b9e06ccb285f4f5352be9dd720c1c4": "ca6feb0257a66560566f0a0933beae04",
".git/objects/ca/54f598af05ddfab57b7ae67b9ca2d95d13d6a4": "ade9fcc98a3dee39261b667508fbec53",
".git/objects/ca/88e7bde04c398f652c65b4b44b169281c9c9a7": "426dd50e64aa48a0d0f6b1e4c1520922",
".git/objects/cc/85e7c74b484c1d23792d2c2313cacfdfa68f16": "dffb7b5cf192140cf94d692fb1f78474",
".git/objects/cd/446d7364f78851210084f020620661589c3a13": "fa77cb2f0edd3c3cf2347f9dc5fed7ef",
".git/objects/cd/83bede88abb826c04b5da0bb74e40e8847cbf4": "db2067baac15896ce0b928154ba1fe4e",
".git/objects/ce/b473b587fcc03c4f4bb73ce558dd2e955465be": "fd1b2321b24cd5e71786b33ecff791ac",
".git/objects/d2/9104e74b417b6a47243fed69173c3e4c0fecf8": "3b36d3ec9e521172452a9a982bbcc825",
".git/objects/d4/2ed9053b6f2749d3a5679dbc8ecb08ea9df679": "352a11e136ff8c5585607e20598a0875",
".git/objects/d5/a656d829b9ea1ffc3f24c4396625a64599da0b": "cbc2c7553c016bdc38b2285df8a07661",
".git/objects/d5/e6f64068a7eb27abf26101ccd5724f42c5b5b7": "75c65261b45d83824736486f33e8699e",
".git/objects/d6/6cd0eb9cef3bd8e0350bfc67ade983d9516832": "a761895027ce82e18d779a6da609e405",
".git/objects/d6/9878c0c59037161ab30db32a24af773635e1b5": "a22201765f0ea3ec9e7a35e358fe9190",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/896bb92cee054c42bb2dc4c4bc63d616418afa": "0f0e3a4c3fc23a4ddd716668c4f8ed45",
".git/objects/d9/9112a79202493c8155cb29140e583ddc66cae6": "703eb570b025e558653ad5d7794ccb7d",
".git/objects/db/795cc1fc16788c5c261991879c543854ead058": "25aa741b8a167bc0001e94b90b495c2c",
".git/objects/dc/0a5b2aa82ae1493bbcb7bcc0e9a2349f96a5df": "8522ff678ec861f9b58e631fc95e624a",
".git/objects/dc/533d97336827691140d3391871e24402f78dc1": "077ddd4db03e5beda6968c2afd211d9a",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/dd/69fd19a7d31d6e18754cfc687183c48d7fa673": "5a354eea3fb606baf71309e3bd04b6b2",
".git/objects/dd/7d2e6b25baf956f7df008c3b287accac81da83": "4b150077c98daa927caa0f8fd82601a9",
".git/objects/dd/eb365696385847f3a31aaab7461da427bd91cd": "3cb5d95501d49dd09f95444b54fa1b5e",
".git/objects/df/c295a4d716ccd616aaa438b96af64c86286922": "5997e7fad8745b77dcf61fa1461faa59",
".git/objects/df/c6a0128bdf9fcdcb49203b90f843a6b7d69f33": "0a0bacdff1d215eeee8e2f16e6b0098e",
".git/objects/e1/02cfc659628aa9aad6507741ae8b6e8da5ff14": "c07d9f90bb79487a77a92764355d8686",
".git/objects/e1/768fdecf68b8f459eebe0a8b0b8c5a62b013eb": "b3148f21d6497c51435a3f460d884e24",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/f8eecead8a22f66945b23e0665b8b9f8ecde39": "3c3abccaca0c8d5a907014544ef81724",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/3b662e4bafcc7d9189573aa25a344036c73d69": "b1f7b4e46a93ee3605216aaa7ecf3807",
".git/objects/e7/c5641490edac1a1b15db16382d1027af1ccddb": "edb7a65ce11291b9d81a15e3de90a02d",
".git/objects/e9/c97bd95b466631a7f27f3899840463451b6a51": "84af44974df9886b22cfaf04162d8632",
".git/objects/eb/83d91d847e686bc45ffd1ec98bd41d965a596e": "2a689dfb327ca6def658e40aa43c6a92",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/1bf731aa3a951ef8178fadfd87879da3e34608": "650dca64589c0a13ed1909f83c474720",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f2/7f0fd76a383d1c82cf989fc764bf5cfa6c6072": "7bf386254d4aec57194162c7e8524565",
".git/objects/f5/9e976913a3f6824d073883ef99bae57df66133": "95a9de6f3b696e2d65e80f38377a00f1",
".git/objects/f9/a1b046c0bb36e11508d4ae5335ac6d53a1aded": "efdb8631c8f56cbb813bc24b9e6e80cd",
".git/objects/fa/1250f0ca1af12c88094c4fcea7be4945424f40": "e01c04f1853703bcb54abc57c06f2ecd",
".git/objects/fa/eb55c1c187470b80392aface7bba9a1553c798": "95932536b14e1e90ebe249fe419ca9a6",
".git/objects/fc/492fca0c11adebffbde61fafc138f18b86abda": "c335936447d70de1c1b0e004aa53dab4",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/pack/pack-80657dd76a1da26ec3651abacb45daf90bb0dea3.idx": "6f3bfb210932553630a54902e5222b0b",
".git/objects/pack/pack-80657dd76a1da26ec3651abacb45daf90bb0dea3.pack": "7e16a76df0f167b8e52ed23518fd6248",
".git/ORIG_HEAD": "7371e164ca0f01539bace4e2d8f08ce9",
".git/refs/heads/gh-pages": "7371e164ca0f01539bace4e2d8f08ce9",
".git/refs/heads/master": "36e6d60ef106f5599001ea95e5cbc949",
".git/refs/remotes/origin/gh-pages": "7371e164ca0f01539bace4e2d8f08ce9",
".git/refs/remotes/origin/master": "7f13d08a3dcbc455b19f6bed0b9815c8",
"assets/AssetManifest.json": "8fdf935151d90e3e269738de12a73250",
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
"assets/assets/projects_dark_bg.png": "a00b5c57404cfef102b54710c7c25cc4",
"assets/assets/projects_light_bg.png": "41ad74a271faf466c3c7150af938caff",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "148a676efe7c28f9cca08e7caa1de305",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"favicon.png": "8f53860fd2bf60b8a37208c33de94ec0",
"icons/Icon-192.png": "1fd4f9d10e0db0de602f96a275cc5b5c",
"icons/Icon-512.png": "555113a9d551c75b40ee11bc304be4a3",
"icons/Icon-maskable-192.png": "1fd4f9d10e0db0de602f96a275cc5b5c",
"icons/Icon-maskable-512.png": "555113a9d551c75b40ee11bc304be4a3",
"index.html": "d35a7fca1a821be5aa096ea0ac1d8c54",
"/": "d35a7fca1a821be5aa096ea0ac1d8c54",
"main.dart.js": "1d342629b3e72c0357a5ad8618c5b11e",
"manifest.json": "96b6496ba834d99a31dbdd783336d362",
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
