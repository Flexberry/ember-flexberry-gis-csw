/**
  @module ember-flexberry-gis-csw
*/
import BaseEditMode from 'ember-flexberry-gis/layers-prototyping-modes/-private/base';
/**
  Csw based edit mode.

  @class CswEditMode
*/
export default Object.assign(BaseEditMode, {
  requiredProperties: ['cswConnections', 'leafletMap'],

  name: 'csw'
});
