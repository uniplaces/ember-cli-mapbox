/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
     options: {
      babel: {
        plugins: ['transform-object-rest-spread']
      }
    }
  });

  return app.toTree();
};
