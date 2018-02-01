import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskPage } from '../task/task';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  rootPage: any = TaskPage;

  constructor(
    public navCtrl: NavController
  ) {
    this.rootPage = TaskPage;
  }

  public login() {
    this.navCtrl.setRoot(this.rootPage);
  }

}
