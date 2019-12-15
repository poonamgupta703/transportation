import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { FuelEntryComponent } from './fuel-entry/fuel-entry.component';
import { ConsolidatedViewComponent } from './consolidated-view/consolidated-view.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path: "ResetPassword", component:ResetPasswordComponent},
  {path: "Consolidated", component:ConsolidatedViewComponent},
  {path: "AddVehicle", component:AddVehicleComponent},
  {path: "FuelEntry", component:FuelEntryComponent},
  {path: "VehicleDetails", component:VehicleDetailsComponent},
  {path: "DriverDetails", component:DriverDetailsComponent},
  {path: "AddDriver", component:AddDriverComponent},
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
