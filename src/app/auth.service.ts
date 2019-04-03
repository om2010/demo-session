import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient , HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {
private url = 'https://angular.cppatidar.com/angular/webservice/webservice.php';
  constructor(private router: Router, private Http: HttpClient) { }

  check_user_login(){
    if(localStorage.getItem('user_login')){
      return true;
    }
    return false;
  }

  logout(){
      localStorage.setItem('user_login','');
       this.router.navigate(['/signin']);
  }
  userSignup(datavalue:any):Observable<any> {

     const  pushData =  new  HttpParams().set('method', "registration").set('data', JSON.stringify([{"username":datavalue.username,"email":datavalue.email,"password":datavalue.password}]));

    return this.Http.post<any>(this.url,pushData)
}
  userSignIn(datavalue:any):Observable<any> {
 console.log(datavalue);
     const  pushData =  new  HttpParams().set('method', "login").set('data', JSON.stringify([{"email":datavalue.email,"password":datavalue.password}]));

    return this.Http.post<any>(this.url,pushData);
}
}
