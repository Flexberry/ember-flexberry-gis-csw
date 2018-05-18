/**
  @module ember-flexberry-gis-dummy
*/

import cswService from 'ember-flexberry-gis-csw/services/csw-connections';

/**
  CSW connections service.

  @class CswConnections
  @uses CswConnectionsMixin
*/
export default cswService.reopen({
  /**
    Update available CSW connections.

    @method updateConnections
    @return {<a href="http://emberjs.com/api/classes/RSVP.Promise.html">Ember.RSVP.Promise</a>}
    Promise will return available CSW connections after it will be resolved.
  */
  updateConnections() {
  }
});
