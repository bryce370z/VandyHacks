import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';

import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector:'login-page',
  templateUrl:'login.html'
})

export class LoginPage{
  tabsPage = TabsPage;
  private login: FormGroup;
  postList = {};
  constructor(private remoteService : RemoteServiceProvider, private formBuilder: FormBuilder, public navCtrl: NavController){
    this.getPosts();
    this.login = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['', Validators.required]

   });
  }
  getPosts(){
    this.remoteService.getPosts().subscribe((data)=>{
      this.postList = data;
    });
  }
  loginForm(){

      //TODO: login form login goes here! something like this.username & this.p
      this.navCtrl.push(TabsPage);
  }

}
