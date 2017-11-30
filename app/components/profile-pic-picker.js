import Ember from 'ember';

export default Ember.Component.extend({
  firebaseUtil: Ember.inject.service(),
  session: Ember.inject.service(),
  actions:{
    previewPic(event){
      let input = event.target;
      let file = input.files[0];

      //Mandar el file al img#preview
      let reader = new FileReader();

      reader.onload = (e)=>{
        //Hacer algo con el archivo al terminar de leerlo
        this.$('#preview').attr('src', e.target.result);
        this.get('firebaseUtil').uploadFile(`pics/${this.get('session.uid')}`, file).then((downloadURL)=>{
          this.sendAction('didChange', downloadURL);
        });
      }
      reader.readAsDataURL(file);

    }
  }
});
