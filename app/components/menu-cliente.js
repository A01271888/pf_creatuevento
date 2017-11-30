import Ember from 'ember';

export default Ember.Component.extend({
  estadoI: "active",
  estadoE: "",
  actions: {
      clickCerrarSesion(){
        this.sendAction('deCerrarSesion');
      }
  }
});
