import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  actions: {
    // regresa(){
    //   transitionToRoute('lista-eventos');
    // }
    confirmaEvento(rE){

      this.get('store').find('registroEvento', rE.get('id')).then((rE)=>{
        rE.set('estado', "confimado");
        rE.save();
        window.swal({
          title: '¡Listo!',
          text: 'Tu evento quedo registrado, deberás realizar màximo en 3 días de lo contrario se cancelará',
          confirmButtonText: 'Ok',
          type: 'success'
        }).then(()=>{
          console.log(this);
          // this.transitionToRoute('lista-eventos')
        })
      });

    }
  }
});
