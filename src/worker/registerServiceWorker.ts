/* eslint-disable no-restricted-globals */
import { Workbox, WorkboxLifecycleEvent } from "workbox-window";

async function registerServiceWorker(
  onActivated?: (e: WorkboxLifecycleEvent) => void
) {
  if ("navigator" in window && process.env.NODE_ENV === "production") {
    const wb = new Workbox("/sw.js");

    const registration = await wb.register();

    wb.addEventListener("redundant", (e) => {
      onActivated?.(e);
    });

    wb.addEventListener("installed", (w) => {
      console.log(self);
      //@ts-ignore
      self.skipWaiting();
    });

    if (registration?.waiting) wb.messageSkipWaiting();

    registration?.addEventListener("updatefound", (e) => {
      console.log("SW update found");
      wb.messageSkipWaiting();
    });
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
