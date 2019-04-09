import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
    submitted = false;
    isLogin = false;
      error_message : string;
    formdata;

  constructor(private formBuilder: FormBuilder,private router: Router,private auth: AuthService) { }

ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
        
    }
    get f() { return this.loginForm.controls; }
    login() {
      var formdata=this.loginForm.value;  
          this.auth.userSignIn(formdata).subscribe( responseData =>
          {console.log( responseData);
               if(responseData.status==true){
                console.log('in');
                localStorage.setItem('user_login','true');
                localStorage.setItem('current_user',responseData.data);
                this.isLogin = true;
                this.error_message=responseData.message;
                this.router.navigate(['/dashboard']);
                alert("in");
               }else{
                   console.log('out');
                  this.error_message=responseData.message;
               }
            }
          );
        // this.submitted = true;
        // if (this.loginForm.invalid) {
        //     return;
        // } else{
        //   localStorage.setItem('user_login','true');
        //   this.router.navigate(['/dashboard']);
        // }   
    }
}