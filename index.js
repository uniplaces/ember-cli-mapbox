/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-mapbox',

  included: function included(app) {
    app.import(app.bowerDirectory + '/mapbox.js/mapbox.js');
  },
};
