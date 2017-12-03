import Ember from 'ember';

export default Ember.Controller.extend({
  NoEditable: true,
  actions: {
    cerrarSesion(){
      return this.get("session").close().then(()=>{
        return this.transitionToRoute("login");
      })
    },
    save(){
      this.get('model').save();
      this.set('NoEditable', true);
    },
    changePicUrl(url){
      console.log(url);
      this.set('model.picProfile', url);
    },
    editable(){
      this.set('NoEditable', false);
    }
  }
});
