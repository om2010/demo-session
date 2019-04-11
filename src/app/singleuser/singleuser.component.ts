import { Component, OnInit } from '@angular/core';
import { DatadashboardService } from '../datadashboard.service';


@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {

  signledata;

  constructor(private datadashboardService:DatadashboardService ) { }

  ngOnInit() {
    this.datadashboardService.getsingleUsers()
      .subscribe((responseData) => {
        console.log(responseData)
        this.signledata = responseData.data;
        });
  }

}