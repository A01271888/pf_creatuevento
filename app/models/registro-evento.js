import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  fecha: DS.attr('string'),
  horaInicio: DS.attr(), //verificar tipo de dato
  picEvento: DS.attr('string', {defaultValue: "https://firebasestorage.googleapis.com/v0/b/crea-tu-evento.appspot.com/o/default%2Fdefault-placeholder.png?alt=media&token=b7b68d7f-4cd1-44fd-95ea-700cd5f1adbf"}),
  //Posibles modelos
  estado: DS.attr('string', {defaultValue: 'tentativo'}),
  tipoEvento: DS.attr('string'),

  // quienGenero: DS.attr('string'),  //hacer un match

  usuario: DS.belongsTo('usuario'),
  detalleEvento: DS.belongsTo('detalleEvento'),
  salon: DS.belongsTo('salon')
});
