import { Injectable } from '@angular/core';
import { Driver } from '../models/driver';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DriverServiceService {

  constructor(private http:HttpClient) {}
  driver:Driver= new Driver();
  private baseUrl = 'http://localhost:8081/VehicleController/';
  //private userUrl = '/api';
  public getDriver() {
    return this.http.get<Driver[]>(this.baseUrl+"getDrivers");
  }
  public deleteDriver(id:any) {
    return this.http.delete(this.baseUrl+"deleteDriver/"+id);
  }
  public editDriver(driver:Driver) {
    return this.http.put(this.baseUrl+"UpdateDriver",driver);
  }
  public creatDriver(driver:Driver) {
    return this.http.post(this.baseUrl+"createDriver",driver);
  }
  driverSetter(driver)
  {
    this.driver=driver;
  }
  driverGetter(){
    return this.driver;
  }
}

