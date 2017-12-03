import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend(AuthRoute, {
  session: Ember.inject.service(),
  model(){
    // let id = this.get('session.uid');

    let evento = this.get('store').createRecord('registro-evento');
    return evento;

  },
  beforeModel(){
  return this.get("session").fetch().catch(()=>{
    if(!this.get('session.isAuthenticated')){
      return this.transitionTo('login');
      //return this.transitionTo("perfil");
    }
  });
}
});
