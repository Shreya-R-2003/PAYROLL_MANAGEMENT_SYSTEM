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
import { UsersRolesComponent } from './users-roles/users-roles.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { PayscheduleComponent } from './payschedule/payschedule.component';
import { EditpayscheduleComponent } from './editpayschedule/editpayschedule.component';
import { FlexiblebenefitplanComponent } from './flexiblebenefitplan/flexiblebenefitplan.component';
import { ReleasefbpdeclarationsComponent } from './releasefbpdeclarations/releasefbpdeclarations.component';
import { ReimbursementclaimsComponent } from './reimbursementclaims/reimbursementclaims.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { EmployeeCustomFieldComponent } from './employee-custom-field/employee-custom-field.component';
import { IncometaxdeclarationComponent } from './incometaxdeclaration/incometaxdeclaration.component';
import { ReleaseitdeclarationComponent } from './releaseitdeclaration/releaseitdeclaration.component';
import { PreferencesSidebarComponent } from './preferences-sidebar/preferences-sidebar.component';
import { ProofOfInvestmentsComponent } from './proof-of-investments/proof-of-investments.component';

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
  { path: 'taxes', component:TaxesComponent},
  { path: 'userandroles', component:UsersRolesComponent},
  { path: 'new-role', component: NewRoleComponent },
  { path: 'preferences', component:PreferencesSidebarComponent},
  { path: 'flexibleBP', component:FlexiblebenefitplanComponent},
  { path: 'payschedule',component:PayscheduleComponent},
  { path: 'editpayschedule', component:EditpayscheduleComponent},
  { path: 'flexiblebenefitplan', component:FlexiblebenefitplanComponent},
  { path: 'releasefbpdeclarations', component:ReleasefbpdeclarationsComponent},
  { path: 'reimbursementclaims', component:ReimbursementclaimsComponent},
  { path: 'employee-portal', component:EmployeePortalComponent},
  { path: 'employee-custom-field', component:EmployeeCustomFieldComponent},
  { path: 'incometaxdeclaration', component:IncometaxdeclarationComponent},
  { path: 'releaseitdeclaration',component:ReleaseitdeclarationComponent},
  { path: 'preferences-sidebar', component:PreferencesSidebarComponent},
  { path: 'proof-of-investments', component: ProofOfInvestmentsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
