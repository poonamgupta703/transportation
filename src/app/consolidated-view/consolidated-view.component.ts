import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConsolidatedView } from '../models/consolidated-view';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';
import { ExcelServiceService } from '../services/excel-service.service';
import { FuelDto } from '../models/fuel-dto';
import { FuelServiceService } from '../services/fuel-service.service';

@Component({
  selector: 'app-consolidated-view',
  templateUrl: './consolidated-view.component.html',
  styleUrls: ['./consolidated-view.component.css']
})
export class ConsolidatedViewComponent implements OnInit {

  constructor(private excelService: ExcelServiceService, private fuelServiceService: FuelServiceService) { }
  ELEMENT_DATA: FuelDto[];
  fuels:FuelDto[];
   displayedColumns = ['plant', 'vehicleNo', 'closingKm', 'openingKm', 'fuelAmmount', 'efficiency'];
  //displayedColumns = ['plant'];
  //this.ELEMENT_DATA=this.getConsolidatedView();
  
  dataSource = new MatTableDataSource<FuelDto>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getConsolidatedView();
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  exportAsExcel() {
    this.excelService.exportAsExcel(this.table);
  }
  getConsolidatedView() {
    /* this.fuelServiceService.getFuels().subscribe(data => {
      this.fuels= data;
      console.log(this.fuels);
    }) */
    this.fuels=this.fuelServiceService.getFuel1s();
    console.log(this.fuels);
  }

}
const ELEMENT_DATA: FuelDto[] =  [
  { id: 1, plant: "1", vehicleNo: 'Hydrogen', closingKm: 1.0079, openingKm: 23, fuelAmmount: 787, efficiency: 212, make: "dfd", model: "232", driver: "232", date: new Date(), fuelLtr: 232 },
  { id: 2, plant: "2", vehicleNo: 'Hydrogen', closingKm: 1.0079, openingKm: 23, fuelAmmount: 787, efficiency: 212, make: "dfd", model: "232", driver: "232", date: new Date(), fuelLtr: 232 },
  { id: 3, plant: "3", vehicleNo: 'Hydrogen', closingKm: 1.0079, openingKm: 23, fuelAmmount: 787, efficiency: 212, make: "dfd", model: "232", driver: "232", date: new Date(), fuelLtr: 232 },
  { id: 4, plant: "4", vehicleNo: 'Hydrogen', closingKm: 1.0079, openingKm: 23, fuelAmmount: 787, efficiency: 212, make: "dfd", model: "232", driver: "232", date: new Date(), fuelLtr: 232 },
  { id: 5, plant: "5", vehicleNo: 'Hydrogen', closingKm: 1.0079, openingKm: 23, fuelAmmount: 787, efficiency: 212, make: "dfd", model: "232", driver: "232", date: new Date(), fuelLtr: 232 },
  { id: 6, plant: "6", vehicleNo: 'Hydrogen', closingKm: 1.0079, openingKm: 23, fuelAmmount: 787, efficiency: 212, make: "dfd", model: "232", driver: "232", date: new Date(), fuelLtr: 232 },
  { id: 7, plant: "7", vehicleNo: 'Hydrogen', closingKm: 1.0079, openingKm: 23, fuelAmmount: 787, efficiency: 212, make: "dfd", model: "232", driver: "232", date: new Date(), fuelLtr: 232 },
]; 

