import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    guardaDetalles(){
      this.get('detalleEvento').save().then(()=>{
        window.swal({
          title: '¿Seguro de los detalles?',
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
              text: 'Sigamos con el Paso 3',
              confirmButtonText: 'Ok',
              type: 'success'
          }).then(()=>{
            let detalles = this.get('store').createRecord('detalle-evento', {
              registroEvento: this.get('registro-evento')
            });
            this.sendAction('Paso2');
            //this.set('titularEvento', detalles.id)
          });
        }).catch(()=>{
          console.log("No se que pasó):");
        });
      });
    }
  }
});
