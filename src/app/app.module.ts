import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { Form16Component } from './form16/form16.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { LoansComponent } from './loans/loans.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PayrunsComponent } from './payruns/payruns.component';
import { RegularPayrollComponent } from './regular-payroll/regular-payroll.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeComponent,
    Form16Component,
    EmployeeDetailComponent,
    LoansComponent,
    NavbarComponent,
    SidebarComponent,
    PayrunsComponent,
    RegularPayrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
