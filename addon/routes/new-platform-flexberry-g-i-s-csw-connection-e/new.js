/**
  @module ember-flexberry-gis-csw
*/

import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';

/**
  New map edit route.

  @class NewNewPlatformFlexberryGISCswConnectionNewERoute
  @extends EditFormNewRoute
*/
export default EditFormNewRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'CswConnectionE'
  */
  modelProjection: 'CswConnectionE',

  /**
    Name of model to be used as record type.

    @property modelName
    @type String
    @default 'new-platform-flexberry-g-i-s-csw-connection'
  */
  modelName: 'new-platform-flexberry-g-i-s-csw-connection',

  /**
    Name of template to be rendered.

    @property templateName
    @type String
    @default 'new-platform-flexberry-g-i-s-csw-connection-e'
  */
  templateName: 'new-platform-flexberry-g-i-s-csw-connection-e'
});
