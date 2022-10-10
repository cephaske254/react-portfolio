import { Workbox } from "workbox-window";
async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("/sw.js");

    wb.register().then((reg) => {
      if (!reg) return reg;
      reg.onupdatefound = (e) => {
        console.log("New update found!");
      };
    });
  }
}

export default registerServiceWorker;
