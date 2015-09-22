import Ember from 'ember';
import layout from '../templates/components/mapbox-marker';

export default Ember.Component.extend({
  layout: layout,
  symbol: '',
  color: '#444444',
  marker: null,

  setup: Ember.on('didInsertElement', function() {
    var marker = L.marker(this.get('coordinates'), {
      icon: L.mapbox.marker.icon({
        'marker-color': this.get('color'),
        'marker-size': this.get('size'),
        'marker-symbol': this.get('symbol'),
      }),
    });
    marker.bindPopup(this.get('popup-title'));
    marker.addTo(this.get('map'));

    marker.on('click', () => {
      this.sendAction('onclick');
    });

    this.set('marker', marker);
  }),

  teardown: Ember.on('willDestroyElement', function() {
    let marker = this.get('marker');
    let map = this.get('map');
    if (map && marker) {
      map.removeLayer(marker);
    }
  }),

  popup: Ember.on('didRender', function() {
    if (this.get('is-open')) {
      this.get('marker').openPopup();
    }
  }),
});
