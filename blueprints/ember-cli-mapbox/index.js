module.exports = {
  afterInstall: function() {
    return this.addBowerPackageToProject('mapbox.js', '2.3.0');
  },
};
