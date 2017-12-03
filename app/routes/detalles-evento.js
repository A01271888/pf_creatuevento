import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend(AuthRoute, {
  session: Ember.inject.service(),
  store: Ember.inject.service('store'),
  model(params){
    return this.store.find('registroEvento', params.id);
  }
});
