import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'taskDescription.html'
})

export class TaskDescription {
  num;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.num = this.params.get('number');
    // console.log(this.num);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

