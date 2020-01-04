import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
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
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FuelEntryComponent } from './fuel-entry/fuel-entry.component';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import 'hammerjs';

import {ScrollingModule} from '@angular/cdk/scrolling';
import { ConsolidatedViewComponent } from './consolidated-view/consolidated-view.component';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { LogOutComponent } from './log-out/log-out.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { UnautherizedUserComponent } from './unautherized-user/unautherized-user.component';
/* import {SocketIoConfig,SocketIoModule} from 'ng-socket-io';
import * as myGlobals from './global'; */
/* const config: SocketIoConfig={url: myGlobals.baseUrl, options:{}}; */

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
    FuelEntryComponent,
    ConsolidatedViewComponent,
    UserEntryComponent,
    LogOutComponent,
    HomeComponent,
    PageNotFoundComponent,
    InternalServerErrorComponent,
    UnautherizedUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//SocketIoModule.forRoot(config),
    FormsModule,
    ReactiveFormsModule,ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule,MaterialModule,
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
