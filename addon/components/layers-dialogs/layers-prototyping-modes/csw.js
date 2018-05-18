/**
  @module ember-flexberry-gis-csw
*/

import Ember from 'ember';
import BaseModeComponent from 'ember-flexberry-gis/components/layers-dialogs/layers-prototyping-modes/base';
import layout from '../../../templates/components/layers-dialogs/layers-prototyping-modes/csw';
/*import {
  translationMacro as t
} from 'ember-i18n';
*/
/**
  Component's CSS-classes names.
  JSON-object containing string constants with CSS-classes names related to component's .hbs markup elements.

  @property {Object} flexberryClassNames
  @property {String} flexberryClassNames.prefix Component's CSS-class names prefix ('flexberry-edit-mode-csw').
  @property {String} flexberryClassNames.wrapper Component's wrapping <div> CSS-class name (null, because component is tagless).
  @readonly
  @static

  @for CswModeComponent
*/
const flexberryClassNamesPrefix = 'flexberry-edit-mode-csw';
const flexberryClassNames = {
  prefix: flexberryClassNamesPrefix,
  wrapper: null
};

/**
  @class CswModeComponent
  @extends BaseModeComponent
*/
let CswModeComponent = BaseModeComponent.extend({

  layout,

  /**
    Array of property names that will be bound from parentView.

    @property bindingProperties
    @type String[]
    @default ['cswConnections', 'leafletMap']
  */
  bindingProperties: ['cswConnections', 'leafletMap'],

  /**
    Loaded CSW connections.

    @property cswConnections
    @type Object[]
    @default null
  */
  cswConnections: null,

  /**
    Leaflet map.

    @property leafletMap
    @type <a href="http://leafletjs.com/reference-1.0.0.html#map">L.Map</a>
    @default null
  */
  leafletMap: null,

  actions: {
    /**
      Handles {{#crossLink "FlexberryCswComponent/sendingActions.recordSelected:method"}}'flexberry-csw' component's 'recordSelectd' action{{/crossLink}}.

      @method actions.onCswRecordSelected
      @param {Object} record Selected record
    */
    onCswRecordSelected(record) {
      let layerClass = Ember.getOwner(this).knownForType('layer', Ember.get(record, 'type'));
      let settings = layerClass.createSetingsFromCsw(record);

      let layer = {
        type: Ember.get(record, 'type'),
        name: Ember.get(record, 'title'),
        settings: settings,
        coordinateReferenceSystem: {
          code: Ember.get(record, 'crs'),
          definition: null
        }
      };

      this.sendAction('editingFinished', layer);
    }
  }

  /**
      Component's action invoking when inner editing process is finished.

      @method sendingActions.editingFinished
      @param {Object} layer Editable object.
  */
});

// Add component's CSS-class names as component's class static constants
// to make them available outside of the component instance.
CswModeComponent.reopenClass({
  flexberryClassNames,
  layout
});

export default CswModeComponent;
