import Ember from 'ember';
import layout from '../templates/components/mapbox-marker';

export default Ember.Component.extend({
  layout: layout,

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

    marker.on('click', function() {
      this.get('map').setView(marker.getLatLng(), 15);
    });

    marker.on('popupopen', function(event) {
      event.popup.setContent(this.get('popup-title'));
    });
  }),
});
