import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginserviceProvider } from '../../providers/loginservice/loginservice';
import { Storage } from '@ionic/storage';
import 'rxjs/Rx';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginservice: LoginserviceProvider,
        public loadingCtrl: LoadingController, public toastCtrl: ToastController,
         public storage: Storage) {
    this.inializeForm();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
  }

    presentToast(message: string){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top',
      cssClass: 'toastStyle'
  });

  toast.present();
  }


  login() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    const values = this.loginForm.value;
    this.loginservice.verifyCredentials(values.username, values.password)
      .subscribe((res: any) => {
        console.log(res.token);
        this.storage.set('token',res.token);
        loading.dismiss();
        this.navCtrl.push(TabsPage);
      },
        (err: any) => {
          loading.dismiss();
           if(err.status == 401){
            this.presentToast('Check Your Credentials and Log in Again');
           }
           else {
            this.presentToast('Some Thing Went Wrong Please Try Again Later');
           }
        }

      )
  }

  inializeForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

}
