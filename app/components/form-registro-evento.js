import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  actions: {
    registraEvento(){
      let evento = this.get('registro-evento');
      console.log(evento.nombre);
      // if(Ember.isBlank( evento.get('nombre'))){
      //   alert('El campo de nombre no puede estar vacio.');
      //   return;
      // }
      evento.save().then(()=>{
        alert('ya se guardó');
      });
    }
  }
});
