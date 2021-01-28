//
//// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');
//
//// if (workbox) {
////   console.log(`Yay! Workbox is loaded 🎉`);
//// } else {
////   console.log(`Boo! Workbox didn't load 😬`);
//// }
//// workbox.routing.registerRoute(
////   new RegExp('.*\.js'),
//// console.log('load *.js here .')
//// );
//
//
//
//
//// 10. INSTALL 事件，載入快取資源
//// install的事件發生的時候，我們可以快取頁面上最少的必要性資源，
//// 快取的容量是有限的，因此，不應該什麼資源都快取起來，所以我們選擇將網頁中，
//// 每一頁都有的必要資源快取起來，並以網頁不跑版為前提做選擇。
//
//const filesToCache = [
//	'/',
//  '/login.html',
//  './res/db.sqlite',
//  './images/test_icon_128.png',
//  './images/test_icon_512.png',
//  './css',
//  './js'
//
//];
//
//self.addEventListener('install', event => {
//  console.log('installing........');
//	event.waitUntil(
//		caches.open('static-v1').then(cache => {
//			return cache.addAll(filesToCache);
//		})
//	);
//});
//
//// activate
//self.addEventListener('activate', event => {
//	console.log('now ready to handle fetches!');
//// 	  event.waitUntil(
//// 		caches.keys().then(function(cacheNames) {
//// 			var promiseArr = cacheNames.map(function(item) {
//// 				if (item !== cacheNames) {
//// 					// Delete that cached file
//// 					return caches.delete(item);
//// 				}
//// 			})
//// 			return Promise.all(promiseArr);
//// 		})
//// 	); // end e.waitUntil
//});
//
//// fetch
//cnt = 0;
//self.addEventListener('fetch', event => {
//  // event.respondWith(caches.match(event.request)
//  // .then(function(responce){//抓不到會拿到null
//  //   if(responce){return responce;} else{ fetch(event.request);}
//  // }))
//
//    console.log('now fetch!');
//    console.log('event.target', cnt = cnt + 1 , event.request);
//    console.log('[ServiceWorker] Fetch' , cnt  , event.request.url);
//    // event.respondWith(null); // 網站會掛掉
//
//
//});