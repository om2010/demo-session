import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from "@angular/router";
import { DatadashboardService } from '../datadashboard.service';
import { HttpClient , HttpParams,HttpHeaders } from '@angular/common/http';
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
  
  sendslug(getslug){
  this.router.navigate([]);
  console.log(getslug)
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
}

}

