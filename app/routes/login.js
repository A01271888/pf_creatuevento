import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    return this.get("session").fetch().catch(()=>{
      if(this.get('session.isAuthenticated')){
        return this.transitionTo("login");
      }
    })
  }
});
