import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { mockMap, mockStyleLayer } from 'dummy/tests/helpers/mapbox-mock';

moduleForComponent('mapbox-map', 'Integration | Component | mapbox map', {
  integration: true,
  beforeEach() {
    L.mapbox.map = function() {
      return mockMap;
    };

    L.mapbox.styleLayer = function() {
      return mockStyleLayer;
    }
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

test('it creates the mapbox instance with center as an option', function(assert) {
  assert.expect(1);

  L.mapbox.map = (_divId, _mapId, { center }) => {
    assert.equal(center, 'center');

    return mockMap;
  };

  this.render(hbs`{{mapbox-map center='center'}}`);
});

test('it calls fitBounds if a boundingBox is defined', function(assert) {
  assert.expect(2);

  mockMap.fitBounds = function(bounds, options) {
    assert.equal(bounds, 'bounds');
    assert.equal(options, 'options');
  };

  this.render(hbs`{{mapbox-map boundingBox='bounds' boundingBoxOptions='options'}}`);
});

test('it calls setView with zoom if it is defined', function(assert) {
  assert.expect(1);

  L.mapbox.map = (_divId, _mapId, { zoom }) => {
    assert.equal(zoom, 'zoom');

    return mockMap;
  };

  this.render(hbs`{{mapbox-map zoom='zoom'}}`);
});

test('it tries to add style to map', function(assert) {
  assert.expect(2);

  L.mapbox.styleLayer = (style) => {
    assert.equal(style, 'style')

    return {
      addTo: (map) => {
        assert.ok(map);
      }
    }
  }

  this.render(hbs`{{mapbox-map style='style'}}`);
});

test('it registers an event for click (deprecated)', function(assert) {
  assert.expect(1);

  this.set('click', function() {
    assert.ok(true);
  });

  mockMap.on = function(e, method) {
    if (e === 'click') {
      method();
    }
  };

  this.render(hbs`{{mapbox-map click=click}}`);
});

test('it registers an event for onclick', function(assert) {
  assert.expect(1);

  this.set('onclick', function() {
    assert.ok(true);
  });

  mockMap.on = function(e, method) {
    if (e === 'click') {
      method();
    }
  };

  this.render(hbs`{{mapbox-map onclick=onclick}}`);
});

test('it registers an event for onlocationerror', function(assert) {
  assert.expect(1);

  this.set('explode', function() {
    assert.ok(true);
  });

  mockMap.on = function(e, method) {
    if (e === 'locationerror') {
      method();
    }
  };

  this.render(hbs`{{mapbox-map onlocationerror=explode}}`);
});
