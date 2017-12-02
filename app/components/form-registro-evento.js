import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  session: Ember.inject.service(),
  Paso1: true,
  Paso2: false,
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
            this.get('store').createRecord('detalle-evento', {
              registroEvento: this.get('registro-evento')
            });
            this.sendAction('Paso1');
            this.set('Paso2', true);
            this.set('Paso1', false);
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
    },
    guardaDetalles(){
      let registroEvento = this.get('registroEvento');
      registroEvento.save().then(()=>{
        Ember.RSVP.all(  registroEvento.get('detalleEvento').invoke('save')  ).then(()=>{
          alert('Ya se guardo');
        });
      });
    }
  }
});
