import { Injectable } from '@angular/core';
import { Driver } from '../models/driver';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FuelDto } from '../models/fuel-dto';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FuelServiceService {
  fuel:FuelDto= new FuelDto();

  constructor(private http:HttpClient) {}
  private baseUrl = 'http://localhost:8081/fuelController/';

  public createFuel(fuel:FuelDto) {
    return this.http.post(this.baseUrl+"createFuel",fuel);
  }
  onChangeVehicleNo(vehileNo:String){
    return this.http.get<FuelDto[]>(this.baseUrl+"getFuelByVehicleNo/"+vehileNo);
  }
  getFuels(){
    return this.http.get<FuelDto[]>(this.baseUrl+"getFuels");
  }
  getFuel1s()
  {
    const ELEMENT_DATA: FuelDto[] = [
      { id: 1, plant: "1", vehicleNo: 'Hydrogen', closingKm: 1.0079, openingKm: 23, fuelAmmount: 787, efficiency: 212, make: "dfd", model: "232", driver: "232", date: new Date(), fuelLtr: 232 },
 ];
     return ELEMENT_DATA;
  }
  
}

