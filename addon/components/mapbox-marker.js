import Ember from 'ember';
import layout from '../templates/components/mapbox-marker';
import { MARKER_EVENTS } from '../constants/events';

const { Component, computed, isEmpty, observer, isPresent } = Ember;

export default Component.extend({
  classNameBindings: ['isLoaded'],
  layout: layout,

  marker: null,

  color: '#444444',
  size: 'large',
  symbol: '',

  draggable: false,
  hasEvents: true,
  isOpen: true,

  createMarkerIcon(color, size, symbol) {
    return L.mapbox.marker.icon({
      'marker-color': color,
      'marker-size': size,
      'marker-symbol': symbol
    });
  },

  isLoaded: computed('map', 'marker', function() {
    let { map, marker, cluster } = this.getProperties('map', 'marker', 'cluster');

    if (isEmpty(map) || isEmpty(marker)) {
      return false;
    }

    if (!isEmpty(cluster)) {
      cluster.addLayer(marker);
    } else {
      marker.addTo(map);
    }

    return true;
  }),

  iconChange: observer('color', 'size', 'symbol', function() {
    let { map, marker, color, size, symbol } = this.getProperties('map', 'marker', 'color', 'size', 'symbol');

    if (typeof map !== 'undefined' && marker != null) {
      marker.setIcon(this.get('createMarkerIcon')(color, size, symbol));
    }
  }),

  didInsertElement() {
    this._super(...arguments);

    let { color, size, symbol } = this.getProperties('color', 'size', 'symbol');
    let marker = L.marker(
      this.get('coordinates'),
      {
        icon: this.get('createMarkerIcon')(color, size, symbol),
        draggable: this.get('draggable')
      }
    );

    if (isPresent(this.get('popup-title'))) {
      marker.bindPopup(this.get('popup-title'));
    }

    if (this.get('hasEvents')) {
      MARKER_EVENTS.forEach((event) => {
        marker.on(event, (e) => this.sendAction('on' + event, marker, e));
      });
    }

    this.set('marker', marker);
  },

  willDestroyElement() {
    this._super(...arguments);

    let { map, marker } = this.getProperties('map', 'marker');

    if (map && marker) {
      map.removeLayer(marker);
    }
  },

  didRender() {
    this._super(...arguments);

    if (!this.get('isOpen')) {
      return;
    }

    if (isPresent(this.get('popupTitle'))) {
      this.get('marker').openPopup();
    }

    if (this.get('recenter')) {
      this.get('map').setView(this.get('coordinates'));
    }
  }
});
