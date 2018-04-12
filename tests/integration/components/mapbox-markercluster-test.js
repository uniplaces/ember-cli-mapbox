import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { mockMarkerCluster, mockMap } from 'dummy/tests/helpers/mapbox-mock';

moduleForComponent('mapbox-markercluster', 'Integration | Component | mapbox markercluster', {
  integration: true,
  beforeEach() {
    L.MarkerClusterGroup = () => mockMarkerCluster
    L.mapbox.map = () => mockMap;
  }
});

test('it adds layer to map', function(assert) {
  assert.expect(1);

  mockMap.addLayer = () => assert.ok(true);
  
  this.setProperties({
    map: mockMap,
    cluster: mockMarkerCluster,
    layer: { id: 'a' }
  })

  this.render(hbs`{{mapbox-markercluster map=map cluster=cluster}}`);
});
