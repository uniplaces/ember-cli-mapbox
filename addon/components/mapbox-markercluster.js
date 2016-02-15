import Ember from 'ember';
import layout from '../templates/components/mapbox-markercluster';

export default Ember.Component.extend({
  classNameBindings: ['isLoaded'],
  layout: layout,
  cluster: null,

  isLoaded: Ember.computed('map', 'cluster', function() {
    let map = this.get('map');
    let cluster = this.get('cluster');
    if (!Ember.isEmpty(map) && !Ember.isEmpty(cluster)) {
      map.addLayer(cluster);
      return true;
    } else {
      return false;
    }
  }),

  setup: Ember.on('init', function() {
    let cluster = new L.MarkerClusterGroup();
    this.set('cluster', cluster);
  }),

  teardown: Ember.on('willDestroyElement', function() {
    let cluster = this.get('cluster');
    let map = this.get('map');
    if (map && cluster) {
      map.removeLayer(cluster);
    }
  })
});
