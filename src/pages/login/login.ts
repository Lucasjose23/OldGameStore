import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { ErrorPage } from '../error/error';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = { email: '', password: '' };
  loginForm: any;
  messageEmail = '';
  messagePassword = '';
  errorEmail = false;
  errorPassword = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fbAuth: AngularFireAuth, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]


    });

  }

  async login(user) {
    try {
      const result = await this.fbAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        this.navCtrl.push(HomePage);
        this.showAlert(1)
    
    } catch (e) {
      console.error(e);
      this.showAlert(2);
    }
  }

  showAlert(p) {
    if (p == 1) {
      const alert = this.alertCtrl.create({
        title: 'Ola !!',
        subTitle: 'Login realizado com sucesso!',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Ola !!',
        subTitle: 'Login com erro!!senha ou e-mail incorreto.',
        buttons: ['OK']
      });
      alert.present();

    }
  }

}
