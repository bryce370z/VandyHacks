import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App} from 'ionic-angular';

import { LoginPage } from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  loginPage = LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

backtoLogin(){
  this.app.getRootNav().setRoot(this.loginPage);
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
