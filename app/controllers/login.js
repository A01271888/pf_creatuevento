import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service('store'),
  session: Ember.inject.service(),
  showError(message){
    this.set('errorMsg', message);
    setTimeout(()=>{ this.set('errorMsg', null) }, 5000); // 1000 == 1 seg
  },
  actions: {
    irCrearCuenta(){
      this.transitionToRoute('crearcuenta');
    },
    signIn(provider){
        //Còdigo para inicio de sesiòn
        switch (provider) {
          case 'email':
            let mail = this.get('email');
            let pass = this.get('password');

            this.get('session').open('firebase', {
              provider: 'password',
              email: mail,
              password: pass
            }).then(()=>{
              //console.log(email);
              this.set('email', "");
              this.set('password', "");
              let isAdmin = false;
              this.get('store').find('usuario', this.get('session.uid')).then((u)=>{
                this.set('isAdmin', u.data.isAdmin);
                debugger
                if(this.get('isAdmin')){
                  return this.transitionToRoute('perfilAdmin');
                }else{
                  return this.transitionToRoute('perfil');
                }
              }).catch(()=>{console.log("kha");});

            }).catch((error)=>{
              this.showError(error.message);
              this.set('email', "");
              this.set('password', "");
            })
            break;
          case 'google':
            this.get('google').open('firebase', {provider: 'google'}).then(()=>{
              if(this.get('session.isAuthenticated')){
                return this.transitionToRoute("perfil");
              }else{
                return this.transitionToRoute("login");
              }
            }).catch((error)=>{
              this.showError(error.message);
              this.set('email', "");
              this.set('password', "");
            });
            break;

          case 'facebook':
            this.get('session').open('firebase',{provider: 'facebook'}).then(()=>{
              // el inicio funcionó
              if(this.get('session.isAuthenticated')){
                return this.transitionToRoute("perfil");
              }else{
                return this.transitionToRoute("login");
              }
            }).catch((error)=>{
              this.showError(error.message);
              this.set('email', "");
              this.set('password', "");
            })
            break;
        }
    },
  },
});
