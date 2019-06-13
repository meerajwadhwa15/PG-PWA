module.exports = {
    distDir: 'build',
    useFileSystemPublicRoutes: false,
    pageExtensions: ['jsx', 'js'],
    exportPathMap: async function (defaultPathMap) {
      return {
        '/': { page: '/' },
        '/property-for-rent': { page: '/listings', query: { isSale: false } },
        '/property-for-sale': { page: '/listings', query: { isSale: true } },
        '/listing/:id': { page: '/listing', query: {  } },
      };
    }
  };
