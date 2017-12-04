import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  session: Ember.inject.service(),
  actions: {

  },

  creador: Ember.computed('usuario', function(){
    this.get('store').find('usuario', this.get('session.uid')).then((user)=>{
      let nombre = user.data.nombre + " " + user.data.apellidos;
      console.log(nombre);
      return nombre;
    });

  })
  // creador: Ember.computed('model.usuario', function(){
  //   this.get('store').query('usuario', {
  //           orderBy: 'nombre',
  //           equalTo: this.get('model.usuario')
  //         }).then((user)=>{
  //           console.log(user);
  //         })
  // })

});
