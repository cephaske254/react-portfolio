module.exports = {
  globDirectory: "build/",
  // globPatterns: ["**/*.{json,ico,svg,html,png,txt,css,js,jpg}"],
  globPatterns: ["**/*.{html,ico,svg}"],
  globIgnores: [
    "node_modules/**/*",
    "{.,_}*/**/*",
    "**/*.{md,txt}",
    "Gemfile*",
    "package*",
    "*.map",
  ],
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
        },
      },
    },
    {
      urlPattern: /\.(?:css|js)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "assets",
      },
    },
    {
      urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
      },
    },
  ],
  swDest: "build/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  sourcemap: false,
};
