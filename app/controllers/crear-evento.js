import Ember from 'ember';

export default Ember.Controller.extend({
  Paso1: true,
  actions: {
    listoPaso1(){
      this.set('Paso1', false);
    },
  }
});
