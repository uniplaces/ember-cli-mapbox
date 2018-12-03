module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'mapbox.js', target: '3.1.1' },
      { name: 'leaflet.markerclusterer', target: '0.4.0' }
    ]);
  },
};
