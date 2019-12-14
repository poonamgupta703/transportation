import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehicle } from '../models/vehicle';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {
  constructor(private http:HttpClient) {}
  vehicle:Vehicle=new Vehicle();
  private baseUrl = 'http://localhost:8081/VehicleController/';
 
  public getVehicles() {
    return this.http.get<Vehicle[]>(this.baseUrl+"getVehicles");
  }
  public deleteVehicle(id:any) {
    return this.http.delete(this.baseUrl+"deleteVehicle/"+id);
  }
  public editVehicle(vehicle:Vehicle) {
    return this.http.put(this.baseUrl+"UpdateVehicle",vehicle);
  }
  public creatVehicle(vehicle:Vehicle) {
    return this.http.post(this.baseUrl+"createVehicle",vehicle);
  }

  vehicleSetter(vehicle)
  {
    this.vehicle=vehicle;
  }
  vehicleGetter(){
    return this.vehicle;
  }
}
