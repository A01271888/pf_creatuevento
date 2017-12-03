import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  session: Ember.inject.service(),
  actions: {

  },
  creador: Ember.computed(function(){
    this.get('store').find('usuario', this.get('session.uid')).then((user)=>{
      console.log(user.data.nombre);
      return user.data.nombre;
    });
      // return this.get('evento.nombre');
  }),
});
