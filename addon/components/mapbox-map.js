import Ember from 'ember';
import layout from '../templates/components/mapbox-map';
import { MAP_EVENTS } from '../constants/events';

const { Component, run, deprecate } = Ember;

export default Component.extend({
  layout: layout,
  divId: 'map',
  mapId: null,

  // Map Options
  center: null,
  boundingBox: null,
  zoom: null,
  style: 'mapbox://styles/mapbox/basic-v9',
  dragging: true,
  scrollWheelZoom: true,
  doubleClickZoom: true,
  tap: true,
  position: 'topleft',
  showZoomControl: true,
  options: {},
  boundingBoxOptions: {},
  addControls: true,
  attributionControl: false,

  didInsertElement() {
    this._super(...arguments);

    run.scheduleOnce('afterRender', this, function() {
      let map = L.mapbox.map(
        this.get('divId'),
        this.get('mapId'),
        {
          ...this.getProperties('center', 'zoom', 'dragging', 'scrollWheelZoom', 'doubleClickZoom', 'tap'),
          zoomControl: false,
          addControls: this.get('addControls'),
          attributionControl: this.get('attributionControl'),
          ...this.get('options')
        }
      );

      if (this.get('boundingBox')) {
        map.fitBounds(this.get('boundingBox'), this.get('boundingBoxOptions'));
      }

      L.mapbox.styleLayer(this.get('style')).addTo(map);

      if (this.get('showZoomControl')) {
        let zoomControl = new L.Control.Zoom({ position: this.get('position') });
        zoomControl.addTo(map);
      }

      // Bind Events
      MAP_EVENTS.forEach((event) => {
        map.on(event, (e) => this.sendAction('on' + event, map, e));
      });

      if (this.get('click')) {
        deprecate('The "click" action in mapbox-map is deprecated, please use "onclick" instead.', false, {
          id: 'mapbox-map-click-action',
          url: 'https://github.com/binhums/ember-cli-mapbox',
          until: '1 April 2016'
        });

        map.on('click', (e) => this.sendAction('click', map, e));
      }

      this.set('map', map);
    });
  },
});
