import { Component, OnInit } from '@angular/core';
import { DatadashboardService } from '../datadashboard.service';
import {  ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})

export class SingleuserComponent implements OnInit {

  xyz:any;
activeSlug;

  constructor(private datadashboardService:DatadashboardService , private router:ActivatedRoute ) { }

  ngOnInit() {
    let sluger = this.router.snapshot.params['slug'];
    this.activeSlug = sluger;
    this.datadashboardService.getsingleUsers(this.activeSlug).subscribe(responseData => {
        let data = responseData;
        console.log(data);
        this.xyz = data;
        })
  }

}