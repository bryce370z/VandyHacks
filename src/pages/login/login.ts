import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector:'login-page',
  templateUrl:'login.html'
})
export class LoginPage{
  tabsPage = TabsPage;
  private login: FormGroup;
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController){
  //  this.login = this.formBuilder.group({
  //    username: ['',Validators.required],
  //    password: ['', Validators.required]

  //  });
//  }
//  loginForm(){
//    this.navCtrl.push(TabsPage);
  }
}
