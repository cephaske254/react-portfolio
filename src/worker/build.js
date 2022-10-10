const path = require("path");
const { generateSW } = require("workbox-build");
const root = path.resolve(__dirname, "../../");

generateSW({
  swDest: path.join(root, "build/sw.js"),
  globDirectory: path.join(root, "build"),
  clientsClaim: true,
  skipWaiting: true,
  sourcemap: false,
  navigationPreload: false,
  cleanupOutdatedCaches: true,
  mode: "production",
  navigateFallback: "/offline.html",
  runtimeCaching: [
    {
      urlPattern: "/",
      handler: "NetworkFirst",
      method: "GET",
      options: {
        expiration: {
          maxAgeSeconds: 86400,
          maxEntries: 1,
        },
        cacheName: "start-url",
      },
    },
    {
      urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      handler: "CacheFirst",
      method: "GET",
      options: {
        cacheName: "google-fonts",
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)*/i,
      handler: "CacheFirst",
      method: "GET",
      options: {
        cacheName: "images",
      },
    },
    {
      urlPattern: /\.(?:css|js)$/i,
      handler: "StaleWhileRevalidate",
      method: "GET",
      options: {
        cacheName: "static-files",
      },
    },
  ],
}).then(({ count, size, warnings }) => {
  if (warnings.length > 0) {
    console.warn(
      "Warnings encountered while injecting the manifest:",
      warnings.join("\n")
    );
  }

  console.log(
    `Injected a manifest which will precache ${count} files, totaling ${size} bytes.`
  );
});
