import Resolver from '../../resolver';
import config from '../../config/environment';
import { mock }  from './mapbox-mock';

const resolver = Resolver.create();

resolver.namespace = {
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix
};

L = mock;

export default resolver;
