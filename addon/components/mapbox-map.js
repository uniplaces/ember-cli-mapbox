import Ember from 'ember';
import layout from '../templates/components/mapbox-map';

export default Ember.Component.extend({
  layout: layout,
  divId: 'map',

  mapId: null,

  setup: Ember.on('didInsertElement', function() {
    var map = L.mapbox.map(this.get('divId'), this.get('mapId'));

    this.set('map', map);
  }),
});
