import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from "@angular/router";
import { DatadashboardService } from '../datadashboard.service';
//import { Http, Headers, RequestOptions } from "@angular/http";
import { HttpClient , HttpParams,HttpHeaders } from '@angular/common/http';
//import { User } from '../User';
import "rxjs/Rx";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  private sid: string;
    public entries: Array<any>;
 users: any;

  constructor(private http: HttpClient,private auth : AuthService,private router: Router, private datadashboardService: DatadashboardService, private route: ActivatedRoute) {
    this.entries = [];
   }
  
  ngOnInit() {
     if(!this.auth.check_user_login()){
       alert("hi");
        this.router.navigate(['/signin']);
     }
     
     this.datadashboardService.getUsers()
      .subscribe((responseData) => {
          this.users = responseData.data;
          console.log(this.users);
        });







//  this.route.queryParams.subscribe(params => {
//         this.sid = params["sid"];
//         let headers = new Headers({ "authorization": "Bearer " + params["sid"] });
//         let options = new RequestOptions({ headers: headers });
//         this.http.get("http://localhost:3000/blogs", options)
//             .map(result => result.json())
//             .subscribe(result => {
//                 this.entries = result;
//             });
//     });
}
// public create() {
//     this.router.navigate(["/blog"], { "queryParams": { "sid": this.sid } });
// }
}

