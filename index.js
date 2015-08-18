/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-mapbox',

  included: function included(app) {
    app.import(app.bowerDirectory + '/mapbox.js/mapbox.js');
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
