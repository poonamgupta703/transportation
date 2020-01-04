import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';
import { ExcelServiceService } from '../services/excel-service.service';
import { FuelDto } from '../models/fuel-dto';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { containsElement } from '@angular/animations/browser/src/render/shared';
import { SharedService } from '../services/shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consolidated-view',
  templateUrl: './consolidated-view.component.html',
  styleUrls: ['./consolidated-view.component.css']
})
export class ConsolidatedViewComponent implements OnInit, AfterViewInit {
  constructor(private excelService: ExcelServiceService, private router: Router, private fuelServiceService: SharedService) { }
  fuels: FuelDto[];
  displayedColumns = ['plant', 'vehicleNo', 'closingKm', 'openingKm', 'fuelAmmount', 'efficiency'];
  dataSource = new MatTableDataSource<FuelDto>();
  vehicleColumns = ['date', 'plant', 'vehicleNo', 'openingKm', 'closingKm', 'fuelLtr', 'fuelAmmount', 'efficiency'];
  vehicleDataSource = new MatTableDataSource<FuelDto>();
  historyFlag: boolean = false;
  private baseUrl = 'http://localhost:8081/fuelController/';
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  ngOnInit() {
    this.getConsolidatedView();
  }
  refresh() {
    this.paginator.firstPage();
    this.historyFlag = false;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  exportAsExcel() {
    this.excelService.exportAsExcel(this.table);
  }

  getConsolidatedView() {
    this.fuelServiceService.get(this.baseUrl + "getFuels").subscribe(result => {
      if (result.status === 404) {
        this.router.navigate(["PageNotfound"]);
      } else if (result.status === 500) {
        this.router.navigate(["InternalServerError"]);
      } else if (result.status === 401 || result.status === 403) {
        this.router.navigate(["Unautherized"]);
      } else {
        this.dataSource.data = result as FuelDto[];
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getFuelEntry(getFuelEntry: String) {
    this.historyFlag = true;
    this.fuelServiceService.get(this.baseUrl + "getFuels/" + getFuelEntry).subscribe(result => {
      if (result.status === 404) {
        this.router.navigate(["PageNotfound"]);
      } else if (result.status === 500) {
        this.router.navigate(["InternalServerError"]);
      } else if (result.status === 401 || result.status === 403) {
        this.router.navigate(["Unautherized"]);
      } else {
        this.vehicleDataSource.data = result as FuelDto[];
      }
    });

  }

}