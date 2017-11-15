import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mapbox-marker', 'Integration | Component | mapbox marker', {
  integration: true
});

test('It sets the marker color size and symbol', function(assert) {
  assert.expect(3);

  L.mapbox.marker.icon = (params) => {
    assert.equal(params['marker-color'], 'red');
    assert.equal(params['marker-size'], 'large');
    assert.equal(params['marker-symbol'], 'circle');
  };

  this.render(hbs`{{mapbox-marker color='red' size='large' symbol='circle'}}`);
});

// test('It registers an event for onclick', function(assert) {
//   assert.expect(1);
//
//   this.on('explode', function() {
//     assert.ok(true);
//   });
//
//   L.marker.on = function(e, method) {
//     if (e === 'click') {
//       method();
//     }
//   };
//
//   this.render(hbs`{{mapbox-marker onclick='explode'}}`);
// });
//
// test('it registers an event for onpopupopen', function(assert) {
//   assert.expect(1);
//
//   this.on('explode', function() {
//     assert.ok(true);
//   });
//
//   mockMarker.on = function(e, method) {
//     if (e === 'popupopen') {
//       method();
//     }
//   };
//
//   this.render(hbs`{{mapbox-marker onpopupopen='explode'}}`);
// });
//
// test('it registers an event for onremove', function(assert) {
//   assert.expect(1);
//
//   this.on('explode', function() {
//     assert.ok(true);
//   });
//
//   mockMarker.on = function(e, method) {
//     if (e === 'remove') {
//       method();
//     }
//   };
//
//   this.render(hbs`{{mapbox-marker onremove='explode'}}`);
// });
