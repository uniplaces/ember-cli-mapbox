/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-mapbox',
  configKeyName: 'mapbox',

  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);

    var target = parentAddon || app;
    if (target.app) {
      target = target.app;
    }

    var config = target.project.config(target.env) || {};
    var addonConfig = config[this.configKeyName] || {};

    // Mapbox
    app.import(app.bowerDirectory + '/mapbox.js/mapbox.js');
    app.import(app.bowerDirectory + '/mapbox.js/mapbox.css');

    // Leaflet markercluster
    if (addonConfig.excludeCluster) {
      return;
    }

    app.import(app.bowerDirectory + '/leaflet.markerclusterer/dist/leaflet.markercluster.js');
    app.import(app.bowerDirectory + '/leaflet.markerclusterer/dist/MarkerCluster.css');
    app.import(app.bowerDirectory + '/leaflet.markerclusterer/dist/MarkerCluster.Default.css');
  },

  treeForPublic: function() {
    var mapboxPath = path.join(this.app.bowerDirectory, 'mapbox.js');
    var mapboxTree = new Funnel(this.treeGenerator(mapboxPath), {
      srcDir: '/images',
      destDir: '/assets/images'
    });

    return mapboxTree;
  }
};
