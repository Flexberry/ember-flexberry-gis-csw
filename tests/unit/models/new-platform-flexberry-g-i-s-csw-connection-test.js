import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-flexberry-g-i-s-csw-connection', 'Unit | Model | new-platform-flexberry-g-i-s-csw-connection', {
  // Specify the other units that are required for this test.
  needs: [
    'model:new-platform-flexberry-g-i-s-csw-connection'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
