import { Component, OnInit } from '@angular/core';
import { FuelDto } from '../models/fuel-dto';
import { FuelServiceService } from '../services/fuel-service.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-fuel-entry',
  templateUrl: './fuel-entry.component.html',
  styleUrls: ['./fuel-entry.component.css']
})
export class FuelEntryComponent implements OnInit {

  constructor(private service:FuelServiceService) { }
  fuelDto:FuelDto=new FuelDto();

  ngOnInit() {
  }

 public createfuel(fuelDto)
  {
    this.service.createFuel(this.fuelDto).subscribe( data=>{
      console.log(data);
      if(data==1){
        alert("Inserted success");
      }else{
        alert("Error:-");
      }
    });
  }

}
