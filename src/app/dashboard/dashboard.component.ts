import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from "@angular/router";
import { DatadashboardService } from '../datadashboard.service';

import { Http, RequestOptions } from "@angular/http";
import { User } from '../User';
import "rxjs/Rx";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  private sid: string;
    public entries: Array<any>;
 users: User[];

  constructor(private http: Http,private auth : AuthService,private router: Router, private datadashboardService: DatadashboardService, private route: ActivatedRoute) { }
  ngOnInit() {
     if(!this.auth.check_user_login()){
        this.router.navigate(['/signin']);
     }
     
     this.datadashboardService.getUsers()
      .subscribe((responseData) => {
          this.users = responseData.data;
          console.log(this.users);
        });
  }

}

