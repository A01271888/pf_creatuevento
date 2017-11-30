import Ember from 'ember';

export default Ember.Controller.extend({
  editable: true,
  actions: {
    cerrarSesion(){
      return this.get("session").close().then(()=>{
        return this.transitionToRoute("login");
      })
    },
    changePicUrl(url){
      this.set('model.picUrl', url);
    }
  }
});
