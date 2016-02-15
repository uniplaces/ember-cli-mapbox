module.exports = {
  afterInstall: function() {
    let packages = [
      { name: 'mapbox.js', target: '2.3.0' },
      { name: 'leaflet.markerclusterer', target: '0.4.0' }
    ];
    return this.addBowerPackagesToProject(packages);
  },
};
