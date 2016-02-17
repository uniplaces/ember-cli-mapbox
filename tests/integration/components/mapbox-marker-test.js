import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import mockMarker from 'dummy/tests/helpers/mock-marker';

moduleForComponent('mapbox-marker', 'Integration | Component | mapbox marker', {
  integration: true,

  beforeEach() {
    L.marker = function() {
      return mockMarker;
    };

    L.mapbox.marker.icon = function() {

    };
  }
});

test('it sets the marker color size and symbol', function(assert) {
  assert.expect(3);

  L.mapbox.marker.icon = function(params) {
    assert.equal(params['marker-color'], 'red');
    assert.equal(params['marker-size'], 'large');
    assert.equal(params['marker-symbol'], 'circle');
  };

  this.render(hbs`{{mapbox-marker color='red' size='large' symbol='circle'}}`);
});
