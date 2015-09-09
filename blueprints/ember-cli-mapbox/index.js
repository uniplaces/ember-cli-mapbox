module.exports = {
  description: '',

  afterInstall: function() {
    // we need to install moment-timezone via bower since npmignore
    // ignores `moment-timezone/builds/*`
    return this.addBowerPackagesToProject([
      { name: 'mapbox.js', target: '>= 2.2.1' },
    ]);
  }
};
