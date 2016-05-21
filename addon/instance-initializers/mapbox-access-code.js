export function initialize(instance) {
  const lookupContext = instance.lookup ? instance : instance.container;
  let config = lookupContext.lookup('config:environment');

  if (!config.mapbox || !config.mapbox.accessToken) {
    console.error('Please specify your mapbox.accessToken in your config.');
    return;
  }

  L.mapbox.accessToken = config.mapbox.accessToken;
}

export default {
  name: 'mapbox-access-code',
  initialize: initialize
};

export default {
  name: 'boobs',
  initialize
};
