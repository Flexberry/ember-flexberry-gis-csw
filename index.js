/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-flexberry-gis-esri',

  isDevelopingAddon() {
    return true;
  },

  included: function (app) {
    this._super.included.apply(this._super, arguments);
  }
};
