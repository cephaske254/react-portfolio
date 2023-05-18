const path = require("path");
const { generateSW } = require("workbox-build");
const root = path.resolve(__dirname, "../../");

generateSW({
  swDest: path.join(root, "build/sw.js"),
  globDirectory: path.join(root, "build"),
  clientsClaim: true,
  skipWaiting: true,
  sourcemap: false,
  cleanupOutdatedCaches: true,
  navigationPreload: false,
  mode: "production",
  navigateFallback: "/offline.html",
  navigateFallbackAllowlist: [],

  runtimeCaching: [
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
      urlPattern: /^https:\/\/api.iconify.design/i,
      handler: "CacheFirst",
      method: "GET",
      options: {
        cacheName: "icons",
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
    {
      urlPattern: new RegExp("(.*?)"),
      handler: ({ url }) => {
        if (url.pathname === "/" || url.pathname === "") {
          return "NetworkFirst";
        }
        return "CacheFirst";
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
