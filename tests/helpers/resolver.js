import Resolver from '../../resolver';
import config from '../../config/environment';
import mockMapbox from './mapbox-mock';

const resolver = Resolver.create();

resolver.namespace = {
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix
};

L = mockMapbox;

export default resolver;
