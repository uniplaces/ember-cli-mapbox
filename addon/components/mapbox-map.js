import Ember from 'ember';
import layout from '../templates/components/mapbox-map';

export default Ember.Component.extend({
  layout: layout,

  mapId: null,
  targetDivId: 'map',

  setup: Ember.on('didInsertElement', function() {
    L.mapbox.map('map', this.get('mapId'));
  }),
});
