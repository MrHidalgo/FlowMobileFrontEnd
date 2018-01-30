import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { TaskPage } from '../pages/task/task';
// import { ProfilePage } from '../pages/profile/profile';
// import { ContactsPage } from '../pages/contacts/contacts';
// import { SettingPage } from '../pages/setting/setting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TaskPage,
    // ProfilePage,
    // ContactsPage,
    // SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TaskPage,
    // ProfilePage,
    // ContactsPage,
    // SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}
