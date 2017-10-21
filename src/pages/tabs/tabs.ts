import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { AddTourPage } from '../add-tour/add-tour';
import { ProfilePage } from '../profile/profile';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AddTourPage;
  tab3Root = ProfilePage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
