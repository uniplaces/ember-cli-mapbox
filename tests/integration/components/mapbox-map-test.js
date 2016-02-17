import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import mockMap from 'dummy/tests/helpers/mock-map';

moduleForComponent('mapbox-map', 'Integration | Component | mapbox map', {
  integration: true,

  beforeEach() {
    L.mapbox.map = function() {
      return mockMap;
    };
  }
});

test('it sets up a mapbox map with the supplied ids', function(assert) {
  assert.expect(2);

  L.mapbox.map = function(divId, mapId) {
    assert.equal(divId, 'frap');
    assert.equal(mapId, 'brap');
    return mockMap;
  };

  this.render(hbs`{{mapbox-map divId='frap' mapId='brap'}}`);
});

test('it defaults the divId to map', function(assert) {
  assert.expect(2);

  L.mapbox.map = function(divId, mapId) {
    assert.equal(divId, 'map');
    assert.equal(mapId, 'brap');
    return mockMap;
  };

  this.render(hbs`{{mapbox-map mapId='brap'}}`);
});

test('it calls setView if a center is defined', function(assert) {
  assert.expect(1);

  mockMap.setView = function(center) {
    assert.equal(center, 'baba');
  };

  L.mapbox.map = function() {
    return mockMap;
  };

  this.render(hbs`{{mapbox-map center='baba'}}`);
});

test('it calls setView with zoom if it is defined', function(assert) {
  assert.expect(2);

  mockMap.setView = function(center, zoom) {
    assert.equal(center, 'baba');
    assert.equal(zoom, 'gaga');
  };

  L.mapbox.map = function() {
    return mockMap;
  };

  this.render(hbs`{{mapbox-map center='baba' zoom='gaga'}}`);
});
