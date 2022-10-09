async function registerServiceWorker() {
  if ("navigator" in window && process.env.NODE_ENV === "production") {
    const { Workbox } = await import("workbox-window");

    const wb = new Workbox("/sw.js");

    // eslint-disable-next-line no-restricted-globals
    self.addEventListener("activate", async function () {
      await caches.keys().then(function (cacheNames) {
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
      });
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
