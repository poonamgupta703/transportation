import { Component, OnInit } from '@angular/core';
import { DriverServiceService } from '../services/driver-service.service';
import { Driver } from '../models/driver';


@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  constructor(private driverService:DriverServiceService){}
  driver:Driver=new Driver();
  btnMsg:String;
  message:String;
  
  ngOnInit() {
     this.driver=this.driverService.driverGetter();  
    if(this.driver.id!=null && this.driver.id!=undefined){
      this.message="Edit Driver";
      this.btnMsg="Edit Record";
    }
    else{
      this.message="Add Driver";
      this.btnMsg="Save Record";
    }
  }

  addDriver(driver:any)
  {
     alert("Driver added sucessfuly");
  }
  createdriver(driver:Driver)
  {
    this.driverService.creatDriver(driver).subscribe(data=>{    
    });
  }
}