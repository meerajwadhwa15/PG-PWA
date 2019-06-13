module.exports = {
  "globDirectory": "./static",
  "globPatterns": [
    "**/*.{css,png,js}"
  ],
  "globIgnores": [
    'service-worker.js',
  ],
  "swSrc": "./static/service-worker-base.js",
  "swDest": "./static/service-worker.js",
};
