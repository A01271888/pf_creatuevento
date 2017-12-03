import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  session: Ember.inject.service(),
  Paso1: true,
  Paso2: false,
  Paso3: false,
  actions: {
    registraEvento(){
      let registroEvento = this.get('registroEvento');

      let id = this.get('session.uid');

      this.get('store').find('usuario', id).then((user)=>{
        //console.log(user.id);
        registroEvento.set('usuario', user.id);
        registroEvento.save();
        user.get('registroEventos').pushObject(registroEvento);
        user.save();
      });

      let dE = this.get('store').createRecord('detalleEvento', {
        registroEvento: this.get('registroEvento')
      });
      dE.save();

      registroEvento.save().then(()=>{
        window.swal({
          title: '¿Seguro de tus datos?',
          text: "Solo verifica que tus datos son correctos.",
          type: 'warning',
          showCancelButton: true,
          cancelButtonText: 'Regresa a confirmar',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Son correctos!'
        }).then(() => {
          window.swal({
              title: 'Genial',
              text: 'Sigamos con el Paso 2',
              confirmButtonText: 'Ok',
              type: 'success'
          }).then(()=>{
            // this.get('registroEvento').this.get('detalleEvento').createRecord();

            this.sendAction('Paso1');
            this.set('Paso2', true);
            this.set('Paso1', false);
            //this.set('titularEvento', detalles.id)
          });
        })
      });
    },
    selectTipo(value){
      let registroEvento = this.get('registroEvento');
      this.set('registroEvento.tipoEvento', value);
    },
    listoPaso2(){
      this.set('Paso2', false);
      this.set('Paso3', true);
    }
  }
});
