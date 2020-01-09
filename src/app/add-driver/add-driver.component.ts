import { Component, OnInit } from '@angular/core';
import { Driver } from '../models/driver';
import { SharedService } from '../services/shared-service.service';
import { Router } from '@angular/router';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  private baseUrl = 'http://localhost:8081/VehicleController/';
  constructor(private driverService: SharedService, private router: Router) { }
  driver: Driver = new Driver();
  vehicle: Vehicle = new Vehicle();
  vehicles: Vehicle[];
  btnMsg: String;
  message: String;
  disableFlag:Boolean=false;

  ngOnInit() {
    this.driver = this.driverService.driverGetter();
    this.getVehicles();
    this.checkButtonType();
  }

  checkFormValidity()
  {
    if(this.driver.dName!=null && this.driver.dName!=undefined && this.driver.dName!=""){
      this.disableFlag=true;
    }else{
      this.disableFlag=false;
    }
  }
  checkButtonType() {
    if (this.driver.driverId != null && this.driver.driverId != undefined &&this.driver.licenceNo !=null && this.driver.licenceNo!="" && this.driver.licenceNo!=undefined) {
      this.message = "Edit Driver";
      this.btnMsg = "Edit Record";
    }
    else {
      this.message = "Add Driver";
      this.btnMsg = "Save Record";
    }
  }

  createdriver(driver: Driver) {
    console.log("vehicleId "+driver.vehicleId)
    this.driverService.glpost(driver, this.baseUrl + "createDriver").subscribe(result => {
      if (result.status === 404) {
        this.router.navigate(["PageNotfound"]);
      } else if (result.status === 500) {
        this.router.navigate(["InternalServerError"]);
      } else if (result.status === 401 || result.status === 403) {
        this.router.navigate(["Unautherized"]);
      } else {
        console.log("createdriver  " + result);
        if(this.btnMsg=="Save Record"){
          alert("Driver details created sucessfully");      
      }else{
        alert("Driver details edited successfully.");
      }
        this.router.navigate(["/DriverDetails"]);
      }
    });
  }

  getVehicles() {
    this.driverService.get(this.baseUrl + "getAllVehicleNoAndVehicleId").subscribe(result => {
      if (result.status === 404) {
        this.router.navigate(["PageNotfound"]);
      } else if (result.status === 500) {
        this.router.navigate(["InternalServerError"]);
      } else if (result.status === 401 || result.status === 403) {
        this.router.navigate(["Unautherized"]);
      } else {
        this.vehicles = result;
        console.log("getallVehicle    " + result);
      }
    });
  }
}