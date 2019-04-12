import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';

@Injectable()
export class DatadashboardService {

  constructor(private http: HttpClient) { }
  url = 'https://angular.cppatidar.com/angular/webservice/webservice.php';
  getUsers() {
    const  pushData =  new  HttpParams().set('method', "getFeeds"); 
      return this.http.post<any>(this.url,pushData);
        }

    getsingleUsers(getslug) {
      const  pushData =  new  HttpParams().set('method', "getFeedBySlug").set('data',JSON.stringify([{"slug":'getslug' }])); 
        return this.http.post<any>(this.url,pushData);
          }
}

 