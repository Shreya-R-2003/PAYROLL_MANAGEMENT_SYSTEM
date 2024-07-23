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
import { OrganizationprofileComponent } from './organizationprofile/organizationprofile.component';
import { WorklocationsComponent } from './worklocations/worklocations.component';
import { SettingsSidebarComponent } from './settings-sidebar/settings-sidebar.component';
import { SalarycomponentComponent } from './salarycomponent/salarycomponent.component';
import { EarningsComponent } from './earnings/earnings.component';
import { TaxesComponent } from './taxes/taxes.component';
import { UsersRolesComponent } from './users-roles/users-roles.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { PreferencesSidebarComponent } from './preferences-sidebar/preferences-sidebar.component';
import { FlexiblebenefitplanComponent } from './flexiblebenefitplan/flexiblebenefitplan.component';
import { ProofOfInvestmentsComponent } from './proof-of-investments/proof-of-investments.component';
import { EditpayscheduleComponent } from './editpayschedule/editpayschedule.component';
import { EmployeeCustomFieldComponent } from './employee-custom-field/employee-custom-field.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { IncometaxdeclarationComponent } from './incometaxdeclaration/incometaxdeclaration.component';
import { PayscheduleComponent } from './payschedule/payschedule.component';
import { ReimbursementclaimsComponent } from './reimbursementclaims/reimbursementclaims.component';
import { ReleasefbpdeclarationsComponent } from './releasefbpdeclarations/releasefbpdeclarations.component';
import { ReleaseitdeclarationComponent } from './releaseitdeclaration/releaseitdeclaration.component';

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
    RegularPayrollComponent,
    OrganizationprofileComponent,
    WorklocationsComponent,
    SettingsSidebarComponent,
    SalarycomponentComponent,
    EarningsComponent,
    TaxesComponent,
    UsersRolesComponent,
    NewRoleComponent,
    PreferencesSidebarComponent,
    FlexiblebenefitplanComponent,
    ProofOfInvestmentsComponent,
    EditpayscheduleComponent,
    EmployeeCustomFieldComponent,
    EmployeePortalComponent,
    IncometaxdeclarationComponent,
    PayscheduleComponent,
    PreferencesSidebarComponent,
    ReimbursementclaimsComponent,
    ReleasefbpdeclarationsComponent,
    ReleaseitdeclarationComponent

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
