import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DoctorsearchserviceProvider } from '../../providers/doctorsearchservice/doctorsearchservice';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private search: string;

  constructor(public navCtrl: NavController, public doctorsearch: DoctorsearchserviceProvider) {

  }

  searchdoc(search){
    console.log(this.search);
    this.doctorsearch.searchDoc(this.search).subscribe(
      (res) => {
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
    )
   //this.navCtrl.push('DoctorPage');
  }

}
