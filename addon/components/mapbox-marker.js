import Ember from 'ember';
import layout from '../templates/components/mapbox-marker';

export default Ember.Component.extend({
  classNameBindings: ['isLoaded'],
  layout: layout,
  symbol: '',
  color: '#444444',
  marker: null,

  isLoaded: Ember.computed('map', 'marker', function() {
    let map = this.get('map');
    let marker = this.get('marker');
    if (!Ember.isEmpty(map) && !Ember.isEmpty(marker)) {
      marker.addTo(map);
      return true;
    } else {
      return false;
    }
  }),

  iconChange: Ember.observer('color', 'size', 'symbol', function() {
    var map = this.get('map');
    var marker = this.get('marker');
    if (typeof map !== 'undefined' && marker != null) {
      marker.setIcon(L.mapbox.marker.icon({
        'marker-color': this.get('color'),
        'marker-size': this.get('size'),
        'marker-symbol': this.get('symbol')
      }));
    }
  }),

  setup: Ember.on('init', function() {
    let marker = L.marker(this.get('coordinates'), {
      icon: L.mapbox.marker.icon({
        'marker-color': this.get('color'),
        'marker-size': this.get('size'),
        'marker-symbol': this.get('symbol')
      })
    });
    marker.bindPopup(this.get('popup-title'));

    marker.on('click', () => {
      this.sendAction('onclick');
    });

    marker.on('popupopen', () => {
      this.sendAction('onpopupopen');
    });

    marker.on('popupclose', () => {
      this.sendAction('onpopupclose');
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
      if (this.get('recenter')) {
        this.get('map').setView(this.get('coordinates'));
      }
    }
  })
});
