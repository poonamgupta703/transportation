import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService,private formBuilder: FormBuilder) { }

  loginForm: FormGroup;
  isSubmitted = false;
  user:User=new User();
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginservice.logOut();
  }
  get formControls() {
    return this.loginForm.controls;
  }

  checkLogin() {   
    if(this.loginForm.invalid){
      console.log("this.loginForm.invalid "+this.loginForm.invalid)
      return 
    } 
      this.loginservice.authenticate(this.username, this.password).subscribe(
      data=> {       
        this.router.navigateByUrl('/Home');
        this.invalidLogin = false;
      });      
     error => {
        this.invalidLogin = true;
      }
        
  }
}



