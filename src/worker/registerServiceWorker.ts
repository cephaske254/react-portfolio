import { Workbox } from "workbox-window";

const register = async (
  workerPath: string,
  { bypass, ...options }: { bypass?: boolean; scope: string }
) => {
  if (
    "navigator" in window &&
    (bypass || process.env.NODE_ENV === "production")
  ) {
    const wb = new Workbox(workerPath, options);

    wb.addEventListener("activated", async function () {
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

    wb.register({ immediate: true });
  } else if (
    process.env.NODE_ENV !== "production" &&
    window.navigator &&
    navigator.serviceWorker
  ) {
    const sw = new URL(workerPath, window.location.origin).href;

    const worker = await navigator.serviceWorker.getRegistration(sw);
    worker?.unregister().then((state) => {
      console.log(
        state
          ? "Sevice worker unmounted successfully"
          : "Failed to unmount service worker"
      );
    });
  }
};

async function registerServiceWorker() {
  register("/sw.js", { scope: "/" });
}

export default registerServiceWorker;
