import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  actions: {
    guardaDetalles(){
      let detalleEvento = this.get('detalleEvento');
      this.get('store').findAll('detalleEvento').then((array)=>{
        array.forEach((item)=>{
          item.save().then(()=>{
            window.swal({
              title: '¿Seguro de los detalles?',
              text: "Solo verifica que tus datos sean correctos.",
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
                // let detalles = this.get('store').createRecord('detalleEvento', {
                //   registroEvento: this.get('registroEvento')
                // });
                this.sendAction('Paso2');
                //this.set('titularEvento', detalles.id)
              });
            }).catch((e)=>{
              console.log(e);
            });
          });
        })
      });
      // this.store.find('detalleEvento', detalleEvento.id).then((dE)=>{
      //   dE.save();
      // })
      //console.log(this.get('detalleEvento.noMesas'));
      //detalleEvento.save();
      // detalleEvento.save();
      //detalleEvento.save().then(()=>{

      //});
    }
  }
});
