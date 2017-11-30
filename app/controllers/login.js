import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    irCrearCuenta(){
      this.transitionToRoute('crearcuenta');
    },
    signIn(provider){
        //Còdigo para inicio de sesiòn
        switch (provider) {
          case 'email':
            let email = this.get('email');
            let pass = this.get('password');

            this.get('session').open('firebase', {
              provider: 'password',
              email: email,
              password: pass
            }).then(()=>{
              //console.log(email);
              return this.transitionToRoute('perfil');
            }).catch((error)=>{
              console.log(error);
            })
            break;

        }
    },
  },
});
