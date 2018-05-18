import Ember from 'ember';
import {
  Query
} from 'ember-flexberry-data';

export default Ember.Service.extend({
  /**
    Reference to 'store' service.

    @property store
    @type <a href="https://emberjs.com/api/ember-data/2.4/classes/DS.Store">DS.Store</a>
    @private
  */
  store: Ember.inject.service('store'),

  /**
  Name of CSW connection model projection to be used as record's properties limitation.

  @property cswConnectionProjection
  @type String
  @default 'MapE'
*/
  cswConnectionProjection: 'CswConnectionE',

  /**
    Name of CSW connection model to be used as form's record type.

    @property cswConnectionModelName
    @type String
    @default 'new-platform-flexberry-g-i-s-csw-connection'
  */
  cswConnectionModelName: 'new-platform-flexberry-g-i-s-csw-connection',

  /**
    Available CSW connections.

    @property cswConnections
    @type Array
    @default undefined
  */
  cswConnections: undefined,

  init() {
    this._super(...arguments);
    this.updateConnections();
  },

  /**
    Update available CSW connections.

    @method updateConnections
    @return {<a href="http://emberjs.com/api/classes/RSVP.Promise.html">Ember.RSVP.Promise</a>}
    Promise will return available CSW connections after it will be resolved.
  */
  updateConnections() {
    let store = this.get('store');
    let modelName = this.get('cswConnectionModelName');

    let query = new Query.Builder(store)
      .from(modelName)
      .selectByProjection(this.get('cswConnectionProjection'));

    return store.query(modelName, query.build()).then((cswConnections) => {
      this.set('cswConnections', cswConnections.toArray());
    });
  },

  /**
    Get available CSW connections.

    @method getConnections
    @return {Array} Available CSW connections.
  */
  getConnections() {
    return this.get('cswConnections') || [];
  }
});
