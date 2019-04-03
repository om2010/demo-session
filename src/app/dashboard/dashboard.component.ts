import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DatadashboardService } from '../datadashboard.service';
import { User } from '../User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
 users: User[];

  constructor(private auth : AuthService,private router: Router, private datadashboardService: DatadashboardService) { }
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
