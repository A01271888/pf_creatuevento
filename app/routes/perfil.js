import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend(AuthRoute, {
  session: Ember.inject.service(),
  model(){
    // El modelo de la ruta es el usuario
    let id = this.get('session.uid');
    let model = this.store.find('usuario', id);
      console.log(model.nombre);
      if(model.isAdmin){
        return model;
        //this.transitionTo('perfilAdmin');
      }else{
        return model;
      }

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
