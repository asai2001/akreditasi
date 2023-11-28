'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "dd7617b4a43469f8f5d3f3f50c85d744",
"assets/AssetManifest.json": "03491857b2e22ebd5d60bc6ca93c88ab",
"assets/FontManifest.json": "9e0649c90f16a7be3d51ab27d6089604",
"assets/NOTICES": "67569a95289c223234f52799fa796c16",
"assets/fonts/MaterialIcons-Regular.otf": "ce97d1e3dcdc6df1c94843a94bca6d70",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/workspace.xml": "6ffa93d252278b7b0f05567b06136458",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"manifest.json": "1a2beacf53878b90b926d34a0ddb65ea",
"main.dart.js": "1eb997366b5af991366daf0d413bcd34",
".git/logs/HEAD": "a426eedd70c8932d5d8f94aeb2334e8a",
".git/logs/refs/heads/deploy": "2ec5c1a6f5906a875e5d7149c43a8a4e",
".git/logs/refs/remotes/origin/deploy": "16115448aac34b8a518be310049bb134",
".git/logs/refs/remotes/origin/masters": "1de7595c8b79a37532ab1b8ce5e57c3a",
".git/logs/refs/remotes/origin/masters2": "d8c2b69230afe09dacdfd1c833f02797",
".git/logs/refs/remotes/origin/master": "fd5ead9af6c89151dba25a27f0657b23",
".git/logs/refs/remotes/origin/main": "e523968d5e8e29884ac1017174c95067",
".git/FETCH_HEAD": "400e824be4682690db5806516faf3d5d",
".git/objects/37/eecce7010fe62b00ff7d0c3f782609d90795d9": "57e66c18bbbc93e30a7ad2bea1faf4d7",
".git/objects/7c/00e57b677fbc3979b91522ca35016d29ddd5f7": "65678b5bd266e4850fff08e11057ed32",
".git/objects/12/3c3b0262784b0a08f8f1b43b0ea328203fdf05": "7c75de6d6a1de595b99d76823de2b37c",
".git/objects/72/4a44bbe47d01a74a3a05e664ca9d0eb4a5410f": "ca60283f413b01737fc2b0fbafd29814",
".git/objects/bd/8c399887a3e75acfe7da85be777f3fe3d46806": "68674487e9a637189b4e4e10c17e7442",
".git/objects/14/9df043a5ed81d553aa714825f438fb54c2439f": "7efa8ebdd5071c865fa6f5fb2685d83a",
".git/objects/1d/9c6ee0c66d786a8ce761f5711441db600ca5a9": "51a8aafa2a6c4017b7233dcfec7ef055",
".git/objects/8d/35f96fd818b38a3441939f9f972bd33e094545": "618259e7d0fe02de945c1faa9b176d8f",
".git/objects/8d/db5d80f7bce90eb0b439c48b8ab1db481841a2": "e252c952978a506b6897b425f9304519",
".git/objects/05/cb5ed19199dd50d7e47808bae558b8764c201e": "b5ab77a99ef5603bddfe4b7a664aeadf",
".git/objects/05/7b33c6faa7917842612216594b92bbed0f0415": "270ede4448046851c1335f3006218bd3",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/82/79da2253f757ea3ab20361da3d0450eea34e41": "14058a1d1b6b6c2c0d4af184857ccd6c",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "2c1b8e6cfbaeb6471623b700d6a28c94",
".git/objects/e2/736edaca600e5417e7859a33d5d98abd6d2c11": "c11bf501f69ad9219cfedc2482a6a030",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
".git/objects/26/9403ee9538060d52dcd3dfbb6318036f00cded": "0420f55ac9c7e19639d6ce3aaa3bfc12",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "a18e07d845055d3b4d84ca9d23c58744",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/f3/a54e8d9fe6d271d8be2b414043b1343f6f3ad2": "3ee31570022695ef2e60219accacf6e3",
".git/objects/7a/7cd37b4540d0bb662ac4a1286f26dd05fd987b": "efb7cc9e37b0fb902f020d16b1ceeef1",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/157596198efd2fbc84e97f467e5997c2638e28": "ff2785d8df6047d30514211095ffbb27",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/7f/e32c7c436100cd85e34613c84bd31cf3a2f86e": "4c7473bfc55d890b358e326343bca696",
".git/objects/93/7e01f7c59a88565b0abcabcca2a68e55de8cc1": "232477654ae972c17ae9cc2fec868c0a",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "3da16e3d8802fca930f64bc41021c151",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/cd/7df4a49b7f3201af786f61db6dc987b2a8f6cd": "ed1a3dcbe25802a336fa1e8b37801c11",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/b3/e98af87b4e414f38432253e71099645971df34": "697c051574f63f3c798e5712deb42808",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/f8/77a839e36bd7f977a2cec9d4e8144e1ca67ae4": "5e17418cfde2ade241f548b3fbbca27d",
".git/objects/b0/75d87ae67137a612b6af3579b0e22466e923af": "0dac0f65ddd3be5b81986e2ca3fef063",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/28/e801fbe57e2180ce367fe52b4e012012fc76fe": "353674e75f3308b099490c2825a6254e",
".git/objects/0a/9f78cd1e8fdaaa8c8a698a2d20750d8663442b": "5cb0dfc965cb09980833150f397d1e71",
".git/objects/3f/6a8d71965f42d254a39e891ab9e1b2f9bb3932": "838e1738ff32a8f04e4fca75e004566f",
".git/objects/3f/3bf8284f2253083ee4a627b9f1e8fac7292c22": "a2032199dd166cc4bb82f39d7263b0cd",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/d6/ae88febfbd5b873a43d2fe317f506da5169f8d": "09eed33960c9e138e6181ad3f489050f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/67/7c5dcbe945634437f6c34f6653fcbfd8e716ec": "79c49839715ddbacd62343882978789c",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/1a/e7fcbf4023908f814b78bacdd85cd52f3b47da": "19264bc94982f413e40d755980d8ae91",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/51/4e425d38af058aa3d1c99c43c52cbb01effd9c": "c56100b4ef93b62d647340e8750a95c8",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "32a80c198b50a0ceaf647af62acfcc20",
".git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
".git/objects/3a/5923633d15062bb112fbef647a349970d92bac": "fc2a0b2b005e37832b234ccb03008bb5",
".git/objects/68/6cdf8ba29523f0b6c6dbd0f49d6a9f3081f8eb": "b3003627236286230985a56bcc76e938",
".git/objects/56/8d3d638e6a215101346db9d759fae780f8aa7c": "7b9a54873fbd15d762336f8cfdcb9228",
".git/objects/3b/ef7a3481d03467c5be8f816577d9459cabd08d": "f53d6ba0f6e71d65deb9dec12e1c3a05",
".git/objects/fa/e3b3e7c5b5270d102d570993fe063d90397617": "91e0f55bd710e6672c73cfc8a07fa9e9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/94/ce3a49cb18abfaa4c2eb13114e8d95bb61a6ef": "ce69d056501459a74c4d4ed4d92a77ee",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/91/f283f3f947fc6038a1bfb82537b1cf0ee200f1": "bcd25d25e65d1cf1acaf5348a966b43d",
".git/objects/91/3f66b9272e28c5087bd6317758b4e3052c83a0": "c63c0316ebc777b8895abdf3d53992e0",
".git/objects/9c/7700ea77a092dcb328e7910e426143536d760a": "81af436c68f6705b04c0eea9e6d6571c",
".git/objects/6b/d9a63e5a834d23e554cd5a5b06f8aaf934db00": "710b6c151c49b8bd382cc9dee96bb75f",
".git/objects/4d/7dc959d40dea6ce0342469a5fb12db3b61edd1": "2cd66be7af6b1fd92471e4fc65a6601a",
".git/objects/2a/7f75d1349ea115170843cdbb26e8265f62a280": "4bf2d23443315acaa29052e52c8cb663",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/f6/e2443b71da21b7ddb4580931872e3534530d3f": "b3645d5b8c8e4aed2adce7751879c7f9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/7b/3ce845cefed5f0eb24e9a645799aedfafab845": "ba17bd786df1409f68e0b95b70f6b09a",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/5d/17f9cb733bdcf670f457b1cf8fc9ee4af5a12e": "6d4367c9a7b4b6ff749746f55fcb4a00",
".git/objects/48/bae00343346cc1a6ec6f40d0ae68c80ced28f0": "23b703df5faa0ab7152ae6f9e663ac21",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "578adb7e42efb86aa134b9d87d201d8d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a2/ef4afff50796d58574e859956724ef843b2b6b": "55f26364a4ecb2c2332d491248a2d5f9",
".git/objects/a2/5a3bdc9c0605231a62c711817cc4cc134003e4": "82c2312f79ed2c7d12d34240e3cdc1a3",
".git/objects/fd/320b5f2f356ecac218f4d47f07f893b2f54283": "c7d019f03f0c18d1f1c8c29fa725540f",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/21672970987d6ef221c1568667fdd203e4f9a3": "77e52c7c4816aae59a48471d2227e37e",
".git/objects/77/e57dd04fcd508b852bc4019c1ea6f5c71be4c8": "f53850a621144d160e9ec62de5ffa614",
".git/objects/27/e30e1f3d9fdf092674afd65a6432652741a4ce": "e176a91a5f0eb2cdbb0e19de7bc339ef",
".git/objects/c2/82762e8db4fdf781e79a71dfe8da50cf02b7d9": "e9e751c19f57ab71a6ad1baceb8c2fa1",
".git/objects/54/cf4847a9b4bea221a9fabc13280a395651288a": "2c1066424cc8c928bcad5e969983af80",
".git/objects/25/7ff834e3eb8100efc86b35df76317056cb08e1": "46fcc31a8ce7a14a5f986cc987de79c3",
".git/objects/90/36c46e77638a69ebc5aee3bd85e81087e2e83c": "a03e7ca2d179d68cffe4578c61d1088c",
".git/objects/90/e8ce1e8ce3d32bf70f954f6280f199d96b85f8": "d66cff2b51c5df2219a53898a9197aa4",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "36d2e6bfefea098ed28d3260f6fd2002",
".git/index": "5c3d1a354cd2c7cd372db1c1c8239d92",
".git/COMMIT_EDITMSG": "4df9cc121afe1c00de4e9e396af4cdb1",
".git/refs/heads/deploy": "12e6f9470162eea84011bbb0debcf5e9",
".git/refs/remotes/origin/deploy": "12e6f9470162eea84011bbb0debcf5e9",
".git/refs/remotes/origin/masters": "4d6acc8ce7af865e6570f6c846af78d7",
".git/refs/remotes/origin/masters2": "213818253ad83dbc065b191642e539c0",
".git/refs/remotes/origin/master": "d85e5e8c58de3e115097da9504b4f3ca",
".git/refs/remotes/origin/main": "538c9e186e8178b1a5042a4d75717dbe",
".git/config": "3ce703d275859884b384c1d66380a6b6",
"index.html": "ae4ac0cd396645fbbf64eca19b2ad026",
"/": "ae4ac0cd396645fbbf64eca19b2ad026",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"version.json": "f171c4fdc6f421ec19ac45a8f2cdeee3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
