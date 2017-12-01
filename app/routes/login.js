import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend(AuthRoute,{
  session: Ember.inject.service(),
  beforeModel(){
    //Preguntar BENO
    //console.log("no puedes entrar aquì", this.get('session.uid'));
    return this.get("session").fetch().catch(()=>{
      if(this.get('session.isAuthenticated')){
        console.log("no puedes entrar aquì, men");
        return this.transitionTo("perfil");
      }
    });
  }
});
