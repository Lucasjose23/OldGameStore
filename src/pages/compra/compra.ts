import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the CompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compra',
  templateUrl: 'compra.html',
})
export class CompraPage {
  public rangeObject = 1;
 
  categoria;
  tipoCategoria;
  valorTotal;
  soma;
  email;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public db:AngularFireDatabase, private afAuth: AngularFireAuth
    ) {
    this.categoria=navParams.get('categoria');
    this.tipoCategoria=navParams.get('tipoCategoria');
    this.valorTotal=navParams.get('soma');
    this.soma=navParams.get('soma');
    this.email=navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompraPage');
  }

  calculaValorTotal()
  {
    this.valorTotal = this.soma * this.rangeObject;
  }

  confirmaCompar()
  {
    const alert = this.alertCtrl.create({
      title: 'Parabéns!',
      subTitle: 'Produto adiquirido com sucesso!',
      buttons: ['OK']
    });
    alert.present();
    this.salvar();
    this.navCtrl.push(HomePage);
  }

  salvar(){
    
    let compra={email:'',valortotal:0}
    compra.valortotal=this.valorTotal;
    compra.email=this.email;
    
 
     
    this.db.list('compras').push(compra);
 
    
    
  }

}
