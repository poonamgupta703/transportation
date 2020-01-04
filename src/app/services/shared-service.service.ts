import { Injectable } from '@angular/core';
import { Driver } from '../models/driver';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Vehicle } from '../models/vehicle';
import { FuelDto } from '../models/fuel-dto';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  driver: Driver = new Driver();
  vehicle: Vehicle=new Vehicle();
  fuel:FuelDto= new FuelDto();

  vehicleSetter(vehicle) {
    this.vehicle = vehicle;
  }
  resetVehicleSetter()
  {
    this.vehicle.vehicleNo=null;
    this.vehicle.vehicleId=null;
    this.vehicle.assinplant=null;
    this.vehicle.vMake=null;
    this.vehicle.vModel=null;
    this.vehicle.manfDate=null;
  }
  
  vehicleGetter() {
    return this.vehicle;
  }

  driverSetter(driver) {
    this.driver = driver;
  }
  driverGetter() {
    return this.driver;
  }
  resetSetter()
  {
    this.driver.dId=null;
    this.driver.dName=null;
    this.driver.createdDate=null;
    this.driver.driverId=null;
    this.driver.licenceExp=null;
    this.driver.licenceNo=null;
    this.driver.phNo=null;
    this.driver.plant=null;
    this.driver.vehicleId=null;
  }

  public glpost(model: any, url: string) {
    const body = model;
    return this.http.post(url, body, { responseType: 'json' })
      .pipe(map(data => { return data; }), catchError(this.handlError));
  }

  public get(url: string) {
    return this.http.get(url, { responseType: 'json' }).pipe(map(data => { return data; }), catchError(this.handlError));
  }

  private handlError(res: Response) {
    if (res) {
      if (res.status === 200) {
        return res.json();
      } else if (res.status === 400 || res.status === 401 || res.status === 403 || res.status === 500) {
        return [{ status: res.status, json: res }];
      } else {
        return [{ status: '500', json: res }]
      }
    }
  }

}
