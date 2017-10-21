import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddTourPage } from '../add-tour/add-tour';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addTourPage = AddTourPage;
  constructor(public navCtrl: NavController) {



  }

}
