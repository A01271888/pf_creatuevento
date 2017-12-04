import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {path: '/'});
  this.route('crearcuenta');
  this.route('perfil');
  this.route('lista-eventos');
  this.route('crearEvento');
  this.route('perfilAdmin');
  this.route('inicio', {path: '/:salon_id'});
  this.route('detalles-evento', {path: 'detalles-evento/:id'});
  this.route('detallesSalon');
  this.route('todos-eventos');
});

export default Router;
