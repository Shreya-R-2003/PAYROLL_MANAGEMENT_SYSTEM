import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { Form16Component } from './form16/form16.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { LoansComponent } from './loans/loans.component';
import { PayrunsComponent } from './payruns/payruns.component';
import { RegularPayrollComponent } from './regular-payroll/regular-payroll.component';
import {OrganizationprofileComponent} from './organizationprofile/organizationprofile.component';
import { WorklocationsComponent } from './worklocations/worklocations.component';
import { SalarycomponentComponent } from './salarycomponent/salarycomponent.component';
import { EarningsComponent } from './earnings/earnings.component';
import { TaxesComponent } from './taxes/taxes.component';
const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'form16', component: Form16Component },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'loans', component: LoansComponent },
  { path: 'employee-detail', component: EmployeeDetailComponent },
  { path: 'payruns', component: PayrunsComponent },
  { path: 'regular-payroll', component: RegularPayrollComponent },
  { path: 'organizationprofile', component: OrganizationprofileComponent },
  { path: 'worklocations', component:WorklocationsComponent},
  { path: 'salarycomponent', component:SalarycomponentComponent},
  { path: 'newearnings', component:EarningsComponent},
  { path: 'taxes', component:TaxesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
