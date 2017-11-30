import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  apellidos: DS.attr('string'),
  telefono: DS.attr('string'),
  mail: DS.attr('string'),
  isAdmin: DS.attr('boolean', {defaultValue: false}),
  picProfile: DS.attr('string'),

  eventos: DS.hasMany('registro-evento'),
  salones: DS.hasMany('salon')
});
