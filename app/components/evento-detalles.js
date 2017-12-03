import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  salones: Ember.computed('model.[]', function(){
    return this.get('store').findAll('salon');
  })
});
