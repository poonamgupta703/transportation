import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { VehicleServiceService } from './services/vehicle-service.service';
import { DriverServiceService } from './services/driver-service.service';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FuelEntryComponent } from './fuel-entry/fuel-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    VehicleDetailsComponent,
    AddVehicleComponent,
    AddDriverComponent,
    DriverDetailsComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    FuelEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [VehicleServiceService,DriverServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
