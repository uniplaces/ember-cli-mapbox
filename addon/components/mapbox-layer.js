import Ember from 'ember';
import layout from '../templates/components/mapbox-layer';

const { Component } = Ember;

export default Component.extend({
  layout,

  id: null,
  map: null,
  layer: {},

  didInsertElement() {
    let id = this.get('layer')['id'];
    if (!id) {
      Ember.Logger.error("Provide an id");

      return;
    }

    if (this.get('map')) {
      this.get('map').addLayer(this.get('layer'));
    }

    this.set('id', id);
  },

  willDestroyElement() {
    this.get('map').removeLayer(this.get('id'));
  }
});
