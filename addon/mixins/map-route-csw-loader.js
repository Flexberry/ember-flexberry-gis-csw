/**
  @module ember-flexberry-gis-csw
*/

import Ember from 'ember';

/**
  Mixin thats load data for use in add layers dialog by CSW settings.

  @class MapRouteCswLoaderMixin
  @extends <a href="http://emberjs.com/api/classes/Ember.Mixin.html">Ember.Mixin</a>
*/
export default Ember.Mixin.create({
  /**
    Reference to 'csw-connections' service.

    @property cswService
  */
  cswService: Ember.inject.service('csw-connections'),

  /**
    [Model hook](http://emberjs.com/api/classes/Ember.Route.html#method_model) that returns a map project for current route.

    @method model
    @param {Object} params
    @param {Object} transition
    @return {<a href="http://emberjs.com/api/classes/RSVP.Promise.html">Ember.RSVP.Promise</a>}
    Promise which will return map project related to current route
  */
  model(params) {
    this._loadCswConnections();
    return this._super(...arguments);
  },

  /**
    Loads available CSW connections.

    @method _loadCswConnections
    @private
  */
  _loadCswConnections() {
    this.get('cswService').updateConnections();
  },
});
