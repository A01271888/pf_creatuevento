import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  salones: Ember.computed('salon.[]', function(){
    return this.get('store').findAll('salon');
  })
  // salones: Ember.RSVP.hash({
  //           s: this.get('store').findAll('salon'),
  //         }),

});
