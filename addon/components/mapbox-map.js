import Ember from 'ember';
import layout from '../templates/components/mapbox-map';

export default Ember.Component.extend({
  layout: layout,
  divId: 'map',

  mapId: null,

  setup: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      let map = L.mapbox.map(this.get('divId'), this.get('mapId'));

      // Setters
      if (this.get('center')) {
        map.setView(this.get('center'), this.get('zoom'));
      }

      // Bind Events
      const MAP_EVENTS = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove',
                          'contextmenu', 'focus', 'blur', 'load', 'unload', 'viewreset', 'movestart', 'move',
                          'moveend', 'dragstart', 'drag', 'dragend', 'zoomstart', 'zoomend', 'zoomlevelschange',
                          'resize', 'autopanstart', 'layeradd', 'layerremove', 'baselayerchange', 'overlayadd',
                          'overlayremove', 'locationfound', 'locationerror', 'popupopen', 'popupclose'];

      MAP_EVENTS.forEach((event) => {
        map.on(event, (e) => this.sendAction('on' + event, map, e));
      });

      map.on('click', (e) => {
        Ember.deprecate('The "click" action in mapbox-map is deprecated, please use "onclick" instead.', false, {
          id: 'mapbox-click-action',
          url: 'https://github.com/binhums/ember-cli-mapbox',
          until: '1 April 2016'
        });
        this.sendAction('click', map, e);
      });

      // Set
      this.set('map', map);
    });
  })
});
