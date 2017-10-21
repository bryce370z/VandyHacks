import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector:'login-page',
  templateUrl:'login.html'
})
export class LoginPage{
  tabspage = TabsPage;
  constructor(){

  }
}
