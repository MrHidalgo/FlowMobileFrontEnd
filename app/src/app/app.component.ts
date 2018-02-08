import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { TaskPage } from '../pages/task/task';
import { ProfilePage } from '../pages/profile/profile';
import { HoursPage } from '../pages/hours/hours';
import { ContactsPage } from '../pages/contacts/contacts';
import { SettingPage } from '../pages/setting/setting';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: ProfilePage },
      { title: 'Task', component: TaskPage },
      { title: 'Hours', component: HoursPage },
      { title: 'Contacts', component: ContactsPage },
      { title: 'Setting', component: SettingPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.menuCtrl.enable(false);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  signOut() {
    this.menuCtrl.close();

    let loader = this.loadingCtrl.create({
      content: "Thank you for using the application",
      duration: 1500
    });

    loader.present();

    setTimeout(() => {
      this.menuCtrl.enable(false);

      this.nav.setRoot(this.rootPage);
    }, 1000);
  }
}
