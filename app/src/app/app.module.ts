import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { TaskPage } from '../pages/task/task';
import { ProfilePage } from '../pages/profile/profile';
import { HoursPage } from '../pages/hours/hours';
import { ContactsPage } from '../pages/contacts/contacts';
import { SettingPage } from '../pages/setting/setting';
import { TaskDescription } from '../pages/taskDescription/taskDescription';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TaskPage,
    ProfilePage,
    HoursPage,
    ContactsPage,
    SettingPage,
    TaskDescription
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TaskPage,
    ProfilePage,
    HoursPage,
    ContactsPage,
    SettingPage,
    TaskDescription
  ],
  providers: [
    Network,
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}
