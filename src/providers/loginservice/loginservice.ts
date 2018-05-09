import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the LoginserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginserviceProvider {

  private url:string = "http://localhost:8080/swiftcure/api/login";

  constructor(public http: HttpClient) {
    console.log('Hello LoginserviceProvider Provider');
  }

  verifyCredentials(username: String, password: String){
    const user = {'username':username, 'password':password};
     return  this.http.post(this.url,user);
  }

}
