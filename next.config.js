const withOffline = require('next-offline')

module.exports = withOffline({
    distDir: 'build',
    pageExtensions: ['jsx', 'js'],
    exportPathMap: async function (defaultPathMap) {
      return {
        '/': { page: '/' },
        '/property-for-rent': { page: '/listings', query: { isSale: false } },
        '/property-for-sale': { page: '/listings', query: { isSale: true } },
        '/listing/:id': { page: '/listing', query: {  } },
      };
    }
  });
