module.exports = {
  "globDirectory": "./static",
  "globPatterns": [
    "**/*.{css,png,js}"
  ],
  "globIgnores": [
    'service-worker.js',
  ],
  "swSrc": "./public/service-worker-base.js",
  "swDest": "./public/service-worker.js",
};
