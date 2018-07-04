module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/cesta': { page: '/cesta' },
      '/ubytovani': { page: '/ubytovani' },
      '/obrad': { page: '/obrad' },
      '/co-na-sebe': { page: '/co-na-sebe' },
      '/dary': { page: '/dary' },
      '/vzpominky': { page: '/vzpominky' }
    };
  },
  webpack: function(cfg) {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js']) {
        entries['main.js'].unshift('./lib/Polyfills.js');
      }

      return entries;
    };

    return cfg;
  }
};
