import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mapbox-markercluster', 'Integration | Component | mapbox markercluster', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{mapbox-markercluster}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#mapbox-markercluster}}
      template block text
    {{/mapbox-markercluster}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
