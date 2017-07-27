import Ember from 'ember';
import layout from '../templates/components/mapbox-map';
import { MAP_EVENTS } from '../constants/events';

export default Ember.Component.extend({
  layout: layout,
  divId: 'map',
  mapId: null,

  // Map Options
  center: null,
  zoom: null,
  style: 'mapbox://styles/mapbox/basic-v9',
  dragging: true,
  scrollWheelZoom: true,
  doubleClickZoom: true,
  tap: true,
  options: {},

  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      let map = L.mapbox.map(
        this.get('divId'),
        this.get('mapId'),
        {
          ...this.getProperties('center', 'zoom', 'dragging', 'scrollWheelZoom', 'doubleClickZoom', 'tap'),
          ...this.get('options')
        }
      );

      L.mapbox.styleLayer(this.get('style')).addTo(map);

      // Bind Events
      MAP_EVENTS.forEach((event) => {
        map.on(event, (e) => this.sendAction('on' + event, map, e));
      });

      this.set('map', map);
    });
  },
});
