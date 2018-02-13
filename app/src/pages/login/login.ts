import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { TaskPage } from '../task/task';

import { FormGroup, FormControl, Validators }   from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  public rootPage: any = null;
  public loginForm: FormGroup = null;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {
    this.rootPage = TaskPage;

    this.loginForm = new FormGroup({
      "userEmail": new FormControl("", [
        Validators.pattern("^[a-zA-Z0-9]+[a-zA-Z0-9'._%+\\-]*[a-zA-Z0-9]*\\@(?:[a-z0-9]+(?:-[a-z0-9]+)*\\.)+[a-z]{2,}$"),
        Validators.required
      ]),
      "userPassword": new FormControl("", [
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])
    });
  }

  login() {
    let form = this.loginForm;

    const body = {
      email: form.value.userEmail,
      password: form.value.userPassword
    };

    this.navCtrl.setRoot(this.rootPage);
    this.menuCtrl.enable(true);

    console.log(body);
  }

}
