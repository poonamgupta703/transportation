import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Object;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    //this.authService.getProfile().subscribe(profile=>{
    //  this.user = profile.user;
    //},
  //  err=>{
   //  console.log(err);
     return false;
   // });
 }

    //onLogoutClick(){
     // this.authService.logout();
     // this.flashMessage.show('You are logged out', {cssClass: 'alert-success', timeout: 3000 });
     // this.router.navigate(['/login']);
     // return false;
 // }

}
