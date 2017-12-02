import Ember from 'ember';

export default Ember.Controller.extend({
  Paso1: true,
  Paso2: true,
  Paso3: true,
  actions: {
    listoPaso1(){
      // this.set('Paso1', false);
      // this.set('Paso2', true);
    },
    listoPaso2(){
      this.set('Paso2', false);
      this.set('Paso3', true);
    }
  }
});
