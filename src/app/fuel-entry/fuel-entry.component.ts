import { Component, OnInit, ViewChild } from '@angular/core';
import { FuelDto } from '../models/fuel-dto';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared-service.service';

@Component({
  selector: 'app-fuel-entry',
  templateUrl: './fuel-entry.component.html',
  styleUrls: ['./fuel-entry.component.css']
})
export class FuelEntryComponent implements OnInit {
  @ViewChild('myForm') mytemplateForm: NgForm;
  constructor(private service: SharedService, private router: Router) { }
  fuelDto: FuelDto = new FuelDto();
  dtolist: FuelDto[];
  private baseUrl = 'http://localhost:8081/fuelController/';

  ngOnInit() {
  }

  onChangeVehicleNo(vehileNo: String) {
    this.service.get(this.baseUrl+"getFuelByVehicleNo/"+vehileNo).subscribe(data => {
      console.log(data);
      this.dtolist = data;
      this.fuelDto = this.dtolist[0];
    })
  }

  resetForm() {
    this.mytemplateForm.reset();
    this.fuelDto.closingKm = null;
    this.fuelDto.date = null
    this.fuelDto.vehicleNo = null;
    this.fuelDto.driver = null;
    this.fuelDto.make = null;
    this.fuelDto.model = null;
    this.fuelDto.plant = null;
    this.fuelDto.openingKm = null;
    this.fuelDto.efficiency = null;
    this.fuelDto.fuelAmmount = null;
    this.fuelDto.fuelLtr = null;
    this.fuelDto.id = null;
  }

  public createFuel(fuelDto) {
    this.service.glpost(fuelDto, this.baseUrl + "createFuel").subscribe(result => {
      if (result.status === 404) {
        this.router.navigate(["PageNotfound"]);
      } else if (result.status === 500) {
        this.router.navigate(["InternalServerError"]);
      } else if (result.status === 401 || result.status === 403) {
        this.router.navigate(["Unautherized"]);
      } else {
        alert("Fuel entry has been created successfully");
        this.router.navigate(["/Consolidated"]);
      }
    });
  }

  public createAndNext(fuelDto) {
    this.service.glpost(fuelDto, this.baseUrl + "createFuel").subscribe(result => {
      if (result.status === 404) {
        this.router.navigate(["PageNotfound"]);
      } else if (result.status === 500) {
        this.router.navigate(["InternalServerError"]);
      } else if (result.status === 401 || result.status === 403) {
        this.router.navigate(["Unautherized"]);
      } else {
        alert("Fuel entry has been created successfully");
        this.resetForm();
        this.router.navigate(["/VehicleDetails"]);
      }
    });
  }
}
