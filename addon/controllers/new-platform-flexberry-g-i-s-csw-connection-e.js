/**
  @module ember-flexberry-gis-csw
*/

import EditFormController from 'ember-flexberry/controllers/edit-form';

/**
  CSW-connections edit controller.

  @class NewPlatformFlexberrtGISCswConnectionEController
  @extends EditFormController
*/
export default EditFormController.extend({
  /**
    Parent route.

    @property parentRoute
    @type String
    @default 'new-platform-flexberry-g-i-s-csw-connection-l'
  */
  parentRoute: 'new-platform-flexberry-g-i-s-csw-connection-l',
});
