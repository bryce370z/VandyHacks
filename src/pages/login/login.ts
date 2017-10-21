import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';


@Component({
  selector:'login-page',
  templateUrl:'login.html'
})
export class LoginPage{

  postList = {};
  constructor(private remoteService : RemoteServiceProvider){
    this.getPosts();
  }
  getPosts(){
    this.remoteService.getPosts().subscribe((data)=>{
      this.postList = data;
    });
}
  tabspage = TabsPage;
  title = 'hi';
}
