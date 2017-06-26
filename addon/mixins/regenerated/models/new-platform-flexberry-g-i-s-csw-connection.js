import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  url: DS.attr('string'),
  createTime: DS.attr('string'),
  creator: DS.attr('string'),
  editTime: DS.attr('string'),
  editor: DS.attr('string'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      name: { presence: true },
      url: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'new-platform-flexberry-g-i-s-csw-connection', {
    name: Projection.attr('Name'),
    creator: Projection.attr('Creator'),
    createTime: Projection.attr('Create time'),
    editor: Projection.attr('Editor'),
    editTime: Projection.attr('Edit time')
  });
  model.defineProjection('CswConnectionE', 'new-platform-flexberry-g-i-s-csw-connection', {
    name: Projection.attr('Name'),
    url: Projection.attr('Url')
  });
  model.defineProjection('CswConnectionL', 'new-platform-flexberry-g-i-s-csw-connection', {
    name: Projection.attr('Name'),
    url: Projection.attr('Url')
  });
};
