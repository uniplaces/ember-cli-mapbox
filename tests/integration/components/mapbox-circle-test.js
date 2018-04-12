import { moduleForComponent, test } from 'ember-qunit';
import { mockCircle } from 'dummy/tests/helpers/mapbox-mock';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mapbox-circle', 'Integration | Component | mapbox circle', {
  integration: true,
  beforeEach() {
    L.circle = function() {
      return mockCircle;
    }
  }
});

test('it sets up circle with provided options', function(assert) {
  assert.expect(3);
  
  L.circle = function(center, radius, options) {
    assert.equal(center, 'center');
    assert.equal(radius, 'radius');
    assert.equal(options, 'options');

    return mockCircle;
  };

  this.render(hbs`{{mapbox-circle center='center' radius='radius' options='options'}}`);
});

test('it adds to cluster if cluster is present', function(assert) {
  assert.expect(1);

  this.setProperties({
    cluster: {
      addLayer: () => assert.ok(true),
    },
    map: { removeLayer() {} }
  })

  this.render(hbs`{{mapbox-circle map=map circle='a' cluster=cluster}}`);
});
