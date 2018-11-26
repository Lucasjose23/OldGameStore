import { Component, Sanitizer } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CompraPage } from '../compra/compra';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  categoria = { capa: 0, memoria: 0, acessorio: 0 }
  tipocategoria = { capa: "", memoria: "", acessorio: "" }
  soma=0;
 email;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.email=navParams.get('email');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

  mostrar(tipo) {
    const alert = this.alertCtrl.create({
      title: 'Ola amigo!!',
      subTitle: 'Cadastro realizado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

  adicionarC(ad) {
    switch (ad) {
      case 1:
          this.categoria.capa = 100;
          this.tipocategoria.capa="1";
        break;
      case 2:
          this.categoria.capa = 100;
          this.tipocategoria.capa="2";
        break;
      case 3:
          this.categoria.capa = 100;
          this.tipocategoria.capa="3";
        break;
    }

  }

  adicionarM(item) {
    switch (item) {
          case 1:
              this.categoria.memoria = 100;
              this.tipocategoria.memoria="32 GB";
            break;
          case 2:
              this.categoria.memoria = 200;
              this.tipocategoria.memoria="64 GB";
            break;
          case 3:
              this.categoria.memoria = 300;
              this.tipocategoria.memoria="128 GB";
            break;
        }
  }
  adicionarA(item) {
    switch (item) {
      case 1:
          this.categoria.acessorio = 100;
          this.tipocategoria.acessorio="1";
        break;
      case 2:
          this.categoria.acessorio = 200;
          this.tipocategoria.acessorio="2";
        break;
      case 3:
          this.categoria.acessorio = 300;
          this.tipocategoria.acessorio="3";
        break;
    }
  }


  comprar() {
    if(this.categoria.acessorio != 0 && this.categoria.capa != 0 && this.categoria.memoria!=0)
    {
      this.soma = this.categoria.acessorio + this.categoria.capa + this.categoria.memoria;
      this.navCtrl.push(CompraPage, { categoria:this.categoria, tipoCategoria:this.tipocategoria, soma:this.soma,email:this.email});
    }

  }


}
