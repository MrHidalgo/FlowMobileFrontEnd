import { Component } from '@angular/core';
import { NavController, MenuController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

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
    public menuCtrl: MenuController,
    private network: Network,
    public toastCtrl: ToastController
  ) {
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

  ngOnInit() {
    // console.log(`ngOnInit`);

    // console.log(this.network.type);

    // const toast = this.toastCtrl.create({
    //   message: this.network.type,
    //   showCloseButton: true,
    //   closeButtonText: 'Ok'
    // });
    //
    // toast.present();
  }

  login() {
    let form = this.loginForm;

    const body = {
      email: form.value.userEmail,
      password: form.value.userPassword
    };

    this.rootPage = TaskPage;
    this.navCtrl.setRoot(this.rootPage);
    this.menuCtrl.enable(true);

    console.log(body);
  }

}
