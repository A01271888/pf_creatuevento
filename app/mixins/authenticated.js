import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel(){
  return this.get("session").fetch().catch(()=>{
    if(this.get('session.isAuthenticated')){
      // return this.transitionTo("lista-eventos");
    }else {
      return this.transitionToRoute('login');
    }
  });
}
});
