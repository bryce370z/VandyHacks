import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the AddTourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-tour',
  templateUrl: 'add-tour.html',
})
export class AddTourPage {
public base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTourPage');
  }
  // const options: CameraOptions = {
  //   quality: 100,
  //   destinationType:
  // }
  takePicture(){


  }

}
