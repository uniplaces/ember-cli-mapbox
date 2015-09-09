/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-mapbox',

  included: function included(app) {
    app.import(app.bowerDirectory + '/mapbox.js/mapbox.js');
    app.import(app.bowerDirectory + '/mapbox.js/mapbox.css');
  },

  treeForPublic: function() {
    var mapboxPath = path.join(this.app.bowerDirectory, 'mapbox.js');
    var mapboxTree = new Funnel(this.treeGenerator(mapboxPath), {
      srcDir: '/images',
      destDir: '/assets/images',
    });

    return mapboxTree;
  },

  contentFor: function(type, config) {
    var content = [];

    if (type === 'body-footer') {
      if (!config.mapbox || !config.mapbox.accessToken) {
        console.error('Please specify your mapbox.accessToken in your config.');
        return content;
      }

      content = [
        '<script>',
        'L.mapbox.accessToken = "' + config.mapbox.accessToken + '";',
        '</script>',
      ];
    }

    return content;
  },
};
