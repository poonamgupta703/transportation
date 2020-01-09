import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../models/driver';
import { SharedService } from '../services/shared-service.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  private baseUrl = 'http://localhost:8081/VehicleController/';
  constructor(private driverService: SharedService, private router: Router) { }
  drivers: Driver[];
  disableFlag = true;
  
  ngOnInit() {
    this.getDrivers();
     }

  public getDrivers() {
    this.driverService.get(this.baseUrl + "getDrivers").subscribe(result => {
      if (result.status === 404) {
        this.router.navigate(["PageNotfound"]);
      } else if (result.status === 500) {
        this.router.navigate(["InternalServerError"]);
      } else if (result.status === 401 || result.status === 403) {
        this.router.navigate(["Unautherized"]);
      } else {
        this.drivers = result;
      }
    });
    this.checkUserProfile();
  }

  checkUserProfile() {
    let user = sessionStorage.getItem('username');
    if (user == "U") {
      this.disableFlag = false;
    } else {
      this.disableFlag = true;
    }
  }

  editDriver(driver: Driver) {
    this.driverService.driverSetter(driver);
    this.router.navigate(["/AddDriver"]);
  }

  addDriver() {
    this.driverService.resetSetter();
    this.router.navigate(["/AddDriver"]);
  }

  deleteDriver(driver: Driver) {
    console.log(driver);
    this.driverService.get(this.baseUrl + "deleteDriver/" + driver.driverId).subscribe(result => {
      if (result.status === 404) {
        this.router.navigate(["PageNotfound"]);
      } else if (result.status === 500) {
        this.router.navigate(["InternalServerError"]);
      } else if (result.status === 401 || result.status === 403) {
        this.router.navigate(["Unautherized"]);
      } else {
       // this.drivers = this.drivers.filter(u => u !== driver);        
      }
        });
    this.drivers = this.drivers.filter(u => u !== driver);        
  };

  onClickSearch(searchString: string) {
      if(searchString!=null && searchString!=undefined && searchString!=""){
        this.drivers= this.drivers.filter(singleItem =>
          singleItem.dName.toLowerCase().includes(searchString.toLowerCase()));
      }else{
        this.getDrivers();
      }
         
  }
}
