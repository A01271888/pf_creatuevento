import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend(AuthRoute, {
  session: Ember.inject.service(),
  model(){
    // El modelo de la ruta es el usuario
    let id = this.get('session.uid');
    return this.store.find('usuario', id);
    // t.then((model)=>{
    //   console.log(model.data.nombre);
    //   if(model.data.isAdmin){
    //     // return model;
    //     transition.abort();
    //     this.transitionTo('perfilAdmin');
    //   }else{
    //     console.log('Entre al perfinl de ', model.data.nombre," ", model.data.isAdmin);
    //     this.set('user',model);
    //     console.log(model.id);
    //     return model;
    //   }
    // });

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
