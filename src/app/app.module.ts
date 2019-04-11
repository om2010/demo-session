import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { DatadashboardService } from './datadashboard.service';
@NgModule({
  imports:      [ BrowserModule,HttpClientModule ,ReactiveFormsModule, FormsModule, RouterModule.forRoot([
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
  ]) ],
  declarations: [ AppComponent, HelloComponent, SignupComponent, HeaderComponent, SigninComponent, DashboardComponent],
  providers: [AuthService, DatadashboardService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
