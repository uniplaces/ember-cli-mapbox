import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { mockMap, mockGeoJson } from 'dummy/tests/helpers/mapbox-mock';

moduleForComponent('mapbox-geojson', 'Integration | Component | mapbox geojson', {
  integration: true,
  beforeEach() {
    L.mapbox.map = () => mockMap;
    L.geoJson = () => mockGeoJson;
  }
});

test('it adds layer to map', function(assert) {
  assert.expect(1);

  mockGeoJson.addTo = () => assert.ok(true);

  this.setProperties({
    map: mockMap,
    json: mockGeoJson
  })

  this.render(hbs`{{mapbox-geojson map=map json=json}}`);
});

test('it sets up click event', function(assert) {
  assert.expect(2);

  mockGeoJson.addTo = () => assert.ok(true);

  this.setProperties({
    json: mockGeoJson,
    clickHandler: () => {
      assert.ok(true)
    },
    map: mockMap
  })

  mockGeoJson.on = function(e, method) {
    if (e === 'click') {
      method();
    }
  };

  this.render(hbs`{{mapbox-geojson map=map onclick=clickHandler json=json}}`);
});
