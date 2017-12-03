import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  fecha: DS.attr('string'),
  horaInicio: DS.attr(), //verificar tipo de dato
  picEvento: DS.attr('string', {defaultValue: "https://firebasestorage.googleapis.com/v0/b/crea-tu-evento.appspot.com/o/pics%2Fuser-default.png?alt=media&token=18c2162a-a228-4baa-9b10-2a19895e14cc"}),
  //Posibles modelos
  estado: DS.attr('string', {defaultValue: 'tentativo'}),
  tipoEvento: DS.attr('string'),

  // quienGenero: DS.attr('string'),  //hacer un match

  usuario: DS.belongsTo('usuario'),
  detalleEvento: DS.belongsTo('detalleEvento'),
  salon: DS.belongsTo('salon')
});
