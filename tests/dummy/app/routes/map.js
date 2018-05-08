/**
  @module ember-flexberry-gis-csw-dummy
*/

import Ember from 'ember';
import EditMapRoute from 'ember-flexberry-gis/routes/edit-map';
import EditFormRouteOperationsIndicationMixin from 'ember-flexberry/mixins/edit-form-route-operations-indication';
import MapRouteCswLoaderMixin from 'ember-flexberry-gis-csw/mixins/map-route-csw-loader';

/**
  Map edit route.

  @class MapRoute
  @extends EditMapRoute
  @uses EditFormRouteOperationsIndicationMixin
*/
export default EditMapRoute.extend(EditFormRouteOperationsIndicationMixin, MapRouteCswLoaderMixin, {

  /**
    Loaded CSW connections.

    @property cswConnections
    @type Object[]
    @default null
  */
  cswConnections: null,

  model() {
    let store = this.get('store');

    let rootLayer = store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
      type: 'group'
    });

    let cswConne = store.createRecord('new-platform-flexberry-g-i-s-csw-connection', {
      url: 'https://rgis.rk.gov.ru/geoserver/csw',
      name:'CSW',
    });

    let map = store.createRecord('new-platform-flexberry-g-i-s-map', {
      name: 'testMap',
      zoom: 14,
      public: true,
      coordinateReferenceSystem: '{"code":"EPSG:4326"}',
      lat: 44.9392254340553,
      lng: 34.105339050293,
      rootLayer: rootLayer
    });

    let tileLayer = store.createRecord('new-platform-flexberry-g-i-s-map-layer', {
      parent: rootLayer,
      type: 'wms',
      name: 'WMS with based on existing record from services catalog',
      visibility: true,
      coordinateReferenceSystem: '{"code":"EPSG:4326"}',
      settings: '{"url":"http://watzmann.geog.uni-heidelberg.de/cached/histosm/wms", "showOnMinimap":true, "version":"1.3.0", ' +
        '"info_format":"text/html", "feature_count":100, "layers":"osm_auto:osm_lulc,osm_auto:histosm2_temp,europe_wms:hs_srtm_europa,osm_auto:all", ' +
        '"format":"image/png" }',
      index: 0
    });

    rootLayer.set('layers', Ember.A([
      tileLayer
    ]));

    this.set('cswConnections', Ember.A([
      cswConne
    ]));

    return map;
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('cswConnections', this.get('cswConnections'));
  }
});
