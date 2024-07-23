import { Component } from '@angular/core';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent {
  newRole: any = {
    name: '',
    description: '',
    isEmployee: false,
    isPayrollRun: false,
    isApprovals: false,
    isSettings: false,
    isPreferences: false,
    isReport: false,
    permissions: {
      viewAndDownloadPayslips: false,
      terminateEmployee: false,
      deleteEmployee: false,
    }
  };

  categories: any[] = [
    { name: 'Basic and personal details', permissions: { fullAccess: false, create: false, view: false, edit: false } },
    { name: 'Salary Details', permissions: { fullAccess: false, create: false, view: false, edit: false } },
    { name: 'Employee Payment Information', permissions: { fullAccess: false, create: false, view: false, edit: false } },
    { name: 'Employee Declarations', permissions: { fullAccess: false, create: false, view: false, edit: false } },
    { name: 'Salary Revision', permissions: { fullAccess: false, create: false, view: false, edit: false } },
    { name: 'Employee Reimbursement Summary', permissions: { fullAccess: false, create: false, view: false, edit: false } },
    { name: 'Employee Loan', permissions: { fullAccess: false, create: false, view: false, edit: false } }
  ];

  payrollRunPermissions: any = { fullAccess: false, create: false, view: false, edit: false, approve: false, pay: false };

  approvals: any[] = [
    { name: 'Reimbursements', permissions: { fullAccess: false, create: false, view: false, edit: false, approve: false } },
    { name: 'Proof of Investments', permissions: { fullAccess: false, create: false, view: false, edit: false, approve: false } },
    { name: 'Salary Revision', permissions: { fullAccess: false, create: false, view: false, edit: false, approve: false } }
  ];

  settingsPermissions: any = {
    updateOrgProfile: false,
    manageUsers: false,
    workLocation: false,
    department: false,
    designation: false,
    salaryAndStatutoryComponents: false,
    salaryTemplates: false,
    taxes: false,
    paySchedule: false,
    emailTemplates: false,
    integration: false,
    provideAccessToProtectedData: false
  };

  preferencesPermissions: any = {
    reimbursementsAndFBPSettings: false,
    itDeclaration: false
  };

  reportPermissions: any = {
    payrollReports: false,
    deductionReports: false,
    taxReports: false
  };

  addNewRole() {
    const roleData = {
      newRole: this.newRole,
      categories: this.categories,
      payrollRunPermissions: this.payrollRunPermissions,
      approvals: this.approvals,
      settingsPermissions: this.settingsPermissions,
      preferencesPermissions: this.preferencesPermissions,
      reportPermissions: this.reportPermissions
    };

    localStorage.setItem('roleData', JSON.stringify(roleData));

    console.log('New role details:', roleData);
    alert('Role saved successfully!');
  }

}
