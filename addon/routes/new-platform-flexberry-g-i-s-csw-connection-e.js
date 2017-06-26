/**
  @module ember-flexberry-gis-csw
*/

import EditFormRoute from 'ember-flexberry/routes/edit-form';

/**
  CSW connection edit route.

  @class NewPlatformFlexberryGISCswConnectionERoute
  @extends EditFormRoute
*/
export default EditFormRoute.extend({
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
  modelName: 'new-platform-flexberry-g-i-s-csw-connection'
});
