import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';
import { ContatoPage } from '../contato/contato';
import { DetalhesPage } from '../detalhes/detalhes';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth,
    private toast: ToastController) {

  }
  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.email=data.email;
        this.toast.create({
          message: `Boas vindas ${data.email}`,
          duration: 3000
        }).present();
      } else {
        this.toast.create({
          message: 'Não foi possível autenticar.',
          duration: 3000
        }).present();
      }
    });
  }
  openPage1(){
    this.navCtrl.push(HomePage);
  }
  openPage2(){
    this.navCtrl.push(LoginPage);
  }
  openPage3(){
    this.navCtrl.push(CadastroPage);
  }
  openPage4(){
    this.navCtrl.push(ContatoPage);
  }
  goDetalhes(){
    this.navCtrl.push(DetalhesPage,{email:this.email});
  }




}
