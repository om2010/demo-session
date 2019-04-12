import { Component, OnInit } from '@angular/core';
import { DatadashboardService } from '../datadashboard.service';


@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})

export class SingleuserComponent implements OnInit {

  xyz:any;

  constructor(private datadashboardService:DatadashboardService ) { }

  ngOnInit() {
    this.datadashboardService.getsingleUsers().subscribe(responseData => {
        let data = responseData.data;
        console.log(data);
        this.xyz = data;
        })
  }

}