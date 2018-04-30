import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {DoctorPage} from '../doctor/doctor'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  doc(){
   this.navCtrl.push('DoctorPage');
  }

}
