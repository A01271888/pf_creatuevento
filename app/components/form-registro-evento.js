import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  session: Ember.inject.service(),
  Paso1: false,
  actions: {
    registraEvento(){
      let registroEvento = this.get('registroEvento');

      let id = this.get('session.uid');
      // this.set('registroEvento.nombre', id);
      // console.log(id);

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
            let detalles = this.get('store').createRecord('detalle-evento', {
              registroEvento: this.get('registro-evento')
            });
            this.sendAction('Paso1');
            //this.set('titularEvento', detalles.id)
          });
        }).catch(()=>{
          console.log("No se que pasó):");
        });
      });
    },
    selectTipo(value ){
      let registroEvento = this.get('registroEvento');
      this.set('registroEvento.tipoEvento', value);
    }
  }
});
