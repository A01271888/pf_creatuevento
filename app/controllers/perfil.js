import Ember from 'ember';

export default Ember.Controller.extend({
  editable: false,
  actions: {
    cerrarSesion(){
      return this.get("session").close().then(()=>{
        return this.transitionToRoute("login");
      })
    },
    save(){
      this.get('model').save();
      this.set('editable', false);
    },
    changePicUrl(url){
      console.log(url);
      this.set('model.picProfile', url);
    },
    editable(){
      this.set('editable', true);
    }
  }
});
