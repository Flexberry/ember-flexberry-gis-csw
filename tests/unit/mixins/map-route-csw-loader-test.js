import Ember from 'ember';
import MapRouteCswLoaderMixin from 'ember-flexberry-gis-csw/mixins/map-route-csw-loader';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Unit | Mixin | map route csw loader');

test('it should call _loadCswConnection on model hook', function(assert) {
  let _loadCswConnections = sinon.spy();
  let MapRouteCswLoaderObject = Ember.Object.extend(MapRouteCswLoaderMixin);
  let subject = MapRouteCswLoaderObject.create({ _loadCswConnections });

  subject.model();

  assert.ok(_loadCswConnections.called);
});
