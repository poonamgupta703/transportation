import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Router,ActivatedRoute } from '@angular/router';
import { SharedService } from '../services/shared-service.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})

export class AddVehicleComponent implements OnInit {
  constructor(private vehicleService:SharedService, private router:Router) { }
  vehicle:Vehicle=new Vehicle();
  btnMsg:String;
  message:String;
  private baseUrl = 'http://localhost:8081/VehicleController/';

  ngOnInit() {
     this.vehicle=this.vehicleService.vehicleGetter();  
    if(this.vehicle.vehicleId!=null && this.vehicle.vehicleId!=undefined){
      this.message="Edit Vehicle Details";
      this.btnMsg="Edit Record";
    }
    else{
      this.message="Add Vehicle Details";
      this.btnMsg="Save Record";
    }
  }
  
  createVehicle(vehicle:Vehicle)
  {
      this.vehicleService.glpost(vehicle,this.baseUrl+"UpdateVehicle").subscribe(result=>{
      if(result.status===404){
        this.router.navigate(["PageNotfound"]);
      }else if(result.status===500){
        this.router.navigate(["InternalServerError"]);
      }else if(result.status===401 || result.status===403){
        this.router.navigate(["Unautherized"]);
      }else{
        if(this.btnMsg=="Save Record"){
          alert("Vehicle Details created Successfully.");
        }else{
          alert("Vehicle Details edited Successfully.");
        }
         this.router.navigate(["/VehicleDetails"]);
         }
      });      
  }  
}
