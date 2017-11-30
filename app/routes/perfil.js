import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend(AuthRoute, {
  session: Ember.inject.service(),
  model(){
    // El modelo de la ruta es el usuario
    let id = this.get('session.uid');
    // debugger
    return this.store.find('usuario', id);
  }
});
