import Ember from 'ember';
import layout from '../templates/components/mapbox-layer';

export default Ember.Component.extend({
  layout,
  
  map: null,
  circle: null,
  center: null,
  radius: 200,
  options: {},

  didInsertElement() {
    let { center, radius, options } = this.getProperties('center', 'radius', 'options');
    this.set('circle', new L.Circle(center, radius, options));

    this.get('circle').addTo(this.get('map'));
  },

  willDestroyElement() {
    this.get('map').removeLayer(this.get('circle'));
  }
});
