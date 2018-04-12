import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { mockMap } from 'dummy/tests/helpers/mapbox-mock';

moduleForComponent('mapbox-layer', 'Integration | Component | mapbox layer', {
  integration: true,
  beforeEach() {
    L.mapbox.map = function() {
      return mockMap;
    };
  }
});

test('it adds layer to map', function(assert) {
  assert.expect(1);

  mockMap.addLayer = () => assert.ok(true);
  
  this.setProperties({
    map: mockMap,
    layer: { id: 'a' }
  })

  this.render(hbs`{{mapbox-layer map=map layer=layer}}`);
});
