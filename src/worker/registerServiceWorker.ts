/* eslint-disable no-restricted-globals */
async function registerServiceWorker() {
  if ("navigator" in window && process.env.NODE_ENV === "production") {
    const { Workbox } = await import("workbox-window");

    const wb = new Workbox("/sw.js");

    self.addEventListener("install", () => {
      // The promise that skipWaiting() returns can be safely ignored.
      // @ts-ignore
      self.skipWaiting();

      // Perform any other actions required for your
      // service worker to install, potentially inside
      // of event.waitUntil();
    });

    // eslint-disable-next-line no-restricted-globals
    self.addEventListener("activate", function (e) {
      // @ts-ignore
      e.waitUntil(
        Promise.all([
          // @ts-ignore
          self.clients.claim(),
          caches.keys().then(function (cacheNames) {
            return Promise.all(
              cacheNames
                .filter(function (_cacheName) {
                  // Return true if you want to remove this cache,
                  // but remember that caches are shared across
                  // the whole origin
                  return true;
                })
                .map(function (cacheName) {
                  console.log("clearing cache", cacheName);

                  return caches.delete(cacheName);
                })
            );
          }),
        ]).then((e) => {
          console.log("done");
          return e;
        })
      );
    });

    wb.register();
  } else if (
    process.env.NODE_ENV !== "production" &&
    window.navigator &&
    navigator.serviceWorker
  ) {
    const sw = new URL("sw.js", window.location.origin).href;

    const worker = await navigator.serviceWorker.getRegistration(sw);
    worker?.unregister().then((state) => {
      console.log(
        state
          ? "Sevice worker unmounted successfully"
          : "Failed to unmount service worker"
      );
    });
  }
}

export default registerServiceWorker;
