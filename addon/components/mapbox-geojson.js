import Ember from 'ember';
import layout from '../templates/components/mapbox-geojson';

export default Ember.Component.extend({
  classNameBindings: ['isLoaded'],
  layout: layout,
  geojson: null,

  isLoaded: Ember.computed('map', 'geojson', function() {
    let map = this.get('map');
    let geojson = this.get('geojson');
    if (!Ember.isEmpty(map) && !Ember.isEmpty(geojson)) {
      geojson.addTo(map);
      return true;
    }
    return false;
  }),

  setup: Ember.on('init', function() {
    let geojson = L.geoJson(this.get('json'), {
      // TODO
    });

    geojson.on('click', () => {
      this.sendAction('onclick');
    });

    this.set('geojson', geojson);
  }),

  teardown: Ember.on('willDestroyElement', function() {
    let geojson = this.get('geojson');
    let map = this.get('map');
    if (map && geojson) {
      map.removeLayer(geojson);
    }
  }),
});
