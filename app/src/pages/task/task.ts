import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';

import {TaskDescription} from '../taskDescription/taskDescription';

@Component({
  templateUrl: 'task.html'
})

export class TaskPage {

  constructor(
    public modalCtrl: ModalController
  ) {}

  openModal(number) {
    let taskDesc = this.modalCtrl.create(TaskDescription, {
      number
    });

    taskDesc.present();
  }

}
