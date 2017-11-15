import Resolver from '../../resolver';
import config from '../../config/environment';
import MapboxMock from './mapbox-mock';

const resolver = Resolver.create();

resolver.namespace = {
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix
};

L = MapboxMock;

export default resolver;
