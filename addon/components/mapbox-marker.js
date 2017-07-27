import Ember from 'ember';
import layout from '../templates/components/mapbox-marker';
import { MARKER_EVENTS } from '../constants/events';

const { on, computed, isEmpty, observer } = Ember;

export default Ember.Component.extend({
  classNameBindings: ['isLoaded'],
  layout: layout,
  symbol: '',
  color: '#444444',
  marker: null,
  draggable: false,
  hasEvents: true,

  createMarkerIcon() {
    return L.mapbox.marker.icon({
      'marker-color': this.get('color'),
      'marker-size': this.get('size'),
      'marker-symbol': this.get('symbol')
    });
  },

  isLoaded: computed('map', 'marker', function() {
    let {map, marker, cluster } = this.getProperties('map', 'marker', 'cluster');

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
    let { map, marker } = this.getProperties('map', 'marker');

    if (typeof map !== 'undefined' && marker != null) {
      marker.setIcon(this.get('createMarkerIcon')());
    }
  }),

  setup: on('init', function() {
    let marker = L.marker(this.get('coordinates'), {
      icon: this.get('createMarkerIcon')(),
      draggable: this.get('draggable')
    });

    if (this.get('hasEvents')) {
      marker.bindPopup(this.get('popup-title'));

      MARKER_EVENTS.forEach((event) => {
        marker.on(event, (e) => this.sendAction('on' + event, marker, e));
      });
    }

    this.set('marker', marker);
  }),

  teardown: on('willDestroyElement', function() {
    let { map, marker } = this.getProperties('map', 'marker');
    
    if (map && marker) {
      map.removeLayer(marker);
    }
  }),

  popup: on('didRender', function() {
    if (!this.get('is-open')) {
      return;
    }

    if (this.get('hasEvents')) {
      this.get('marker').openPopup();
    }

    if (this.get('recenter')) {
      this.get('map').setView(this.get('coordinates'));
    }
  })
});
