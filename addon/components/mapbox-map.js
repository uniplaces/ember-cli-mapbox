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
      map.on('click', e => this.sendAction('onclick', e)); // Legacy
      map.on('click', e => this.sendAction('click', e));
      map.on('dblclick', e => this.sendAction('dblclick', e));
      map.on('mousedown', e => this.sendAction('mousedown', e));
      map.on('mouseup', e => this.sendAction('mouseup', e));
      map.on('mouseover', e => this.sendAction('mouseover', e));
      map.on('mouseout', e => this.sendAction('mouseout', e));
      map.on('mousemove', e => this.sendAction('mousemove', e));
      map.on('contextmenu', e => this.sendAction('contextmenu', e));
      map.on('focus', e => this.sendAction('focus', e));
      map.on('blur', e => this.sendAction('blur', e));
      map.on('load', e => this.sendAction('load', e));
      map.on('unload', e => this.sendAction('unload', e));
      map.on('viewreset', e => this.sendAction('viewreset', e));
      map.on('movestart', e => this.sendAction('movestart', e));
      map.on('move', e => this.sendAction('move', e));
      map.on('moveend', e => this.sendAction('moveend', e));
      map.on('dragstart', e => this.sendAction('dragstart', e));
      map.on('drag', e => this.sendAction('drag', e));
      map.on('dragend', e => this.sendAction('dragend', e));
      map.on('zoomstart', e => this.sendAction('zoomstart', e));
      map.on('zoomend', e => this.sendAction('zoomend', e));
      map.on('zoomlevelschange', e => this.sendAction('zoomlevelschange', e));
      map.on('resize', e => this.sendAction('resize', e));
      map.on('autopanstart', e => this.sendAction('autopanstart', e));
      map.on('layeradd', e => this.sendAction('layeradd', e));
      map.on('layerremove', e => this.sendAction('layerremove', e));
      map.on('baselayerchange', e => this.sendAction('baselayerchange', e));
      map.on('overlayadd', e => this.sendAction('overlayadd', e));
      map.on('overlayremove', e => this.sendAction('overlayremove', e));
      map.on('locationfound', e => this.sendAction('locationfound', e));
      map.on('locationerror', e => this.sendAction('locationerror', e));
      map.on('popupopen', e => this.sendAction('popupopen', e));
      map.on('popupclose', e => this.sendAction('popupclose', e));


      // Set
      this.set('map', map);
    });
  })
});
