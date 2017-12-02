import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  fecha: DS.attr('string'),
  horaInicio: DS.attr(), //verificar tipo de dato

  //Posibles modelos
  estado: DS.attr('string', {defaultValue: 'tentativo'}),
  tipoEvento: DS.attr('string'),

  // quienGenero: DS.attr('string'),  //hacer un match

  usuario: DS.belongsTo('usuario'),
  detalleEvento: DS.belongsTo('detalle-evento'),
  salon: DS.belongsTo('salon')
});
