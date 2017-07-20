import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  currentActivePage:any;
  pages: Array<{ title: string,iconName:string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', iconName: 'home', component: HomePage },
      { title: 'Mini Forum', iconName: 'paper', component: ListPage },
      { title: 'Kind', iconName: 'apps', component: ListPage },
      { title: "Full Chappter", iconName: 'book', component: ListPage },
      { title: "For Boy", iconName: 'images', component: ListPage },
      { title: "For Girl", iconName: 'image', component: ListPage },
      { title: "About", iconName: 'information', component: ListPage }
    ];
    
    this.currentActivePage = this.pages[0]; // default home-page
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
   
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.currentActivePage = page;
  }

  isActivePage(page):boolean{
    return this.currentActivePage == page;
  }
}
