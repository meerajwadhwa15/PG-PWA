const withOffline = require('next-offline')

module.exports = withOffline({
    distDir: 'build',
    pageExtensions: ['jsx', 'js'],
    exportPathMap: async function (defaultPathMap) {
      return {
        '/': { page: '/' },
        '/property-for-rent': { page: '/listings', query: { listing_type: 'rent' } },
        '/property-for-sale': { page: '/listings', query: { listing_type: 'sale' } },
        '/listing/:id': { page: '/listing', query: {  } },
      };
    }
  });
