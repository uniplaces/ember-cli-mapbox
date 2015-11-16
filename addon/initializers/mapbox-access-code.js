export function initialize(instance) {
  
  // reliable way to get the config under Ember 2.1
  var configName = Object.keys(window.requirejs.entries).filter((entry) => {
    return entry.match(/\/config\/environment/);
  })[0];
  var config = window.requirejs(configName).default;

  if (!config.mapbox || !config.mapbox.accessToken) {
    console.error('Please specify your mapbox.accessToken in your config.');
    return;
  }

  L.mapbox.accessToken = config.mapbox.accessToken;
}

export default {
  name: 'mapbox-access-code',
  initialize: initialize,
};
