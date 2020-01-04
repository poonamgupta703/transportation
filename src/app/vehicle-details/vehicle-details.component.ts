import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehicle } from '../models/vehicle';
import { SharedService } from '../services/shared-service.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  constructor(private vehicleService: SharedService, private router: Router) { }
  vehicles: Vehicle[];
  vehicles1: Vehicle[];
  disableFlag = true;
  vehicle: Vehicle = new Vehicle();
  private baseUrl = 'http://localhost:8081/VehicleController/';

  ngOnInit() {
    this.getVehical();    
  }

  public getVehical() {
    this.vehicleService.get(this.baseUrl+"getVehicles").subscribe(result => {
      if(result.status===404){
        this.router.navigate(["PageNotfound"]);
      }else if(result.status===500){
        this.router.navigate(["InternalServerError"]);
      }else if(result.status===401 || result.status===403){
        this.router.navigate(["Unautherized"]);
      }else{
        this.vehicles = result;
         }
      });
    this.checkUserProfile();
  }

  deleteVehicle(vehicle: Vehicle) {
    this.vehicleService.get(this.baseUrl+"deleteVehicle/"+vehicle.vehicleId).subscribe(result => {
      if(result.status===404){
        this.router.navigate(["PageNotfound"]);
      }else if(result.status===500){
        this.router.navigate(["InternalServerError"]);
      }else if(result.status===401 || result.status===403){
        this.router.navigate(["Unautherized"]);
      }else{
        
      }      
    })
    this.vehicles = this.vehicles.filter(u => u !== vehicle);
  };

  checkUserProfile() {
    let user = sessionStorage.getItem('username');
    if (user == "U") {
      this.disableFlag = false;
    } else {
      this.disableFlag = true;
    }
  }

  onSearch(searchString: any) {
    this.vehicles1 = null;   
    return this.vehicles.filter(vehicle =>
      vehicle.vehicleNo.toLowerCase().indexOf(searchString.toLowerCase()) != -1);  
  }

  editVehicle(vehicle: any) {
    this.vehicleService.vehicleSetter(vehicle);
    this.router.navigate(["/AddVehicle"]);
  }

  addVehicle() {
    this.vehicleService.resetVehicleSetter();
    this.router.navigate(["/AddVehicle"]);
  }
 

}
