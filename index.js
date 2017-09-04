/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-flexberry-gis-csw',

  included: function (app) {
    this._super.included.apply(this._super, arguments);

    // OSGeo ows.js library (implementing JS API for CSW services) & it's dependencies.
    app.import(app.bowerDirectory + '/jsonix/dist/Jsonix-all.js');
    app.import('vendor/jsonix/jsonix.definitionFix.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/OWS_1_0_0.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/DC_1_1.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/DCT.js');
    app.import(app.bowerDirectory + '/w3c-schemas/scripts/lib/XLink_1_0.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/CSW_2_0_2.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/Filter_1_1_0.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/GML_3_1_1.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/SMIL_2_0_Language.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/SMIL_2_0.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/ISO19139_GCO_20060504.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/ISO19139_GMD_20060504.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/GML_3_2_1.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/GML_3_2_0.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/ISO19139_GTS_20060504.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/ISO19139_GSS_20060504.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/ISO19139_GSR_20060504.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/ISO19139_GMX_20060504.js');
    app.import(app.bowerDirectory + '/ogc-schemas/scripts/lib/ISO19139_SRV_20060504.js');
    app.import(app.bowerDirectory + '/ows.js/dist/ows.debug.js');
  }
};
