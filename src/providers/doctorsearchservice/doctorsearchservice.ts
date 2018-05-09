import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the DoctorsearchserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctorsearchserviceProvider {

  private url: string = "http://localhost:8080/swiftcure/api/DoctorService/getDoctorList";

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello DoctorsearchserviceProvider Provider');
  }

  gettoken() {
    return Observable.fromPromise(this.storage.get('token'));

  }
  searchDoc(speciality: string): Observable<any> {
    
    return this.gettoken().flatMap(data => {
      
        const requestHeaders  = new HttpHeaders().append('X-AUTH-TOKEN', data);
      return this.http.get(`${this.url}/${speciality}`, { headers: requestHeaders });
    });
 }

}
