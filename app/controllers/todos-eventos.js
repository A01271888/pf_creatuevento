import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cerrarSesion(){
      return this.get("session").close().then(()=>{
        return this.transitionToRoute("login");
      })
    },
  }
});
