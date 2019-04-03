import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    error_msg;
  constructor(private formBuilder: FormBuilder,private router: Router, private auth: AuthService,private authService: AuthService) { }

ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
      var signupuser =  this.registerForm.value;

      this.authService.userSignup(signupuser).subscribe( responseData =>
          {
            if(responseData.status=true){
                 this.error_msg = responseData.message;
               }
            }   
      )}
}