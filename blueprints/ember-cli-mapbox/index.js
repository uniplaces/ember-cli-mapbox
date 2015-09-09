module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    // we need to install moment-timezone via bower since npmignore
    // ignores `moment-timezone/builds/*`
    return this.addBowerPackagesToProject([
      { name: 'mapbox.js', target: '>= 2.2.1' },
    ]);
  },
};
