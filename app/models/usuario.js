import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  apellidos: DS.attr('string'),
  telefono: DS.attr('string'),
  mail: DS.attr('string'),
  isAdmin: DS.attr('boolean', {defaultValue: false}),
  picProfile: DS.attr('string', {defaultValue: "https://firebasestorage.googleapis.com/v0/b/crea-tu-evento.appspot.com/o/pics%2Fuser-default.png?alt=media&token=18c2162a-a228-4baa-9b10-2a19895e14cc"}),

  eventos: DS.hasMany('registro-evento'),
  salones: DS.hasMany('salon')
});
