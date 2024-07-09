// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-regular-payroll',
//   templateUrl: './regular-payroll.component.html',
//   styleUrls: ['./regular-payroll.component.css']
// })
// export class RegularPayrollComponent {
//   currentTab: string = 'Employee Summary';
//   buttonText: string = 'Submit and Approve';
//   isConfirmationDialogOpen: boolean = false;
//   isBankAdviceDialogOpen: boolean = false;
//   employees: any[] = []; // Array to hold employee data, using 'any' for flexibility
//   selectedEmployee: any = null; // Selected employee for popup

//   constructor(){
//     this.fetchEmployees();
//   }

//   selectTab(tab: string) {
//     this.currentTab = tab;
//   }

//     // Function to fetch employees data (simulated)
//     fetchEmployees() {
//       // Simulated employee data
//       this.employees = [
//         { name: 'John Doe', paidDays: 25, grossPay: 10000, deductions: 1500, taxes: 1200, benefits: 500, reimbursements: 300, netPay: 8500 },
//         { name: 'Jane Smith', paidDays: 26, grossPay: 11000, deductions: 1600, taxes: 1300, benefits: 600, reimbursements: 350, netPay: 9000 },
//         // Add more employees as needed
//       ];
//     }

//   // Function to select an employee for details popup
//   selectEmployee(employee: any) {
//     this.selectedEmployee = employee;
//   }

//     // Function to close employee details popup
//     closePopup() {
//       this.selectedEmployee = null;
//     }
  
//     // Function to save employee details (placeholder for actual save logic)
//     saveEmployeeDetails() {
//       // Placeholder save logic
//       console.log('Employee details saved:', this.selectedEmployee);
//       this.closePopup(); // Close popup after saving
//     }
  
//     // Function to cancel editing employee details
//     cancelEdit() {
//       // Reset any changes or simply close the popup
//       this.closePopup();
//     }

//   handleButtonClick() {
//     if (this.buttonText === 'Submit and Approve') {
//       this.openConfirmationDialog();
//     } else {
//       // Handle "Record Payment" action here if needed
//     }
//   }


//   openConfirmationDialog() {
//     this.isConfirmationDialogOpen = true;
//   }

//   closeConfirmationDialog() {
//     this.isConfirmationDialogOpen = false;
//   }

//   confirmSubmitApprove() {
//     this.buttonText = 'Record Payment';
//     this.isConfirmationDialogOpen = false;
//   }

//   openBankAdviceDialog() {
//     this.isBankAdviceDialogOpen = true;
//   }

//   closeBankAdviceDialog() {
//     this.isBankAdviceDialogOpen = false;
//   }

//   downloadBankAdvice() {
//     // Logic to handle downloading the bank advice
//     this.isBankAdviceDialogOpen = false;
//   }

// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-regular-payroll',
  templateUrl: './regular-payroll.component.html',
  styleUrls: ['./regular-payroll.component.css']
})
export class RegularPayrollComponent {
  currentTab: string = 'Employee Summary';
  buttonText: string = 'Submit and Approve';
  isConfirmationDialogOpen: boolean = false;
  isBankAdviceDialogOpen: boolean = false;

  selectTab(tab: string) {
    this.currentTab = tab;
  }

  handleButtonClick() {
    if (this.buttonText === 'Submit and Approve') {
      this.openConfirmationDialog();
    } else {
      // Handle "Record Payment" action here if needed
    }
  }

  openConfirmationDialog() {
    this.isConfirmationDialogOpen = true;
  }

  closeConfirmationDialog() {
    this.isConfirmationDialogOpen = false;
  }

  confirmSubmitApprove() {
    this.buttonText = 'Record Payment';
    this.isConfirmationDialogOpen = false;
  }

  openBankAdviceDialog() {
    this.isBankAdviceDialogOpen = true;
  }

  closeBankAdviceDialog() {
    this.isBankAdviceDialogOpen = false;
  }

  downloadBankAdvice() {
    // Logic to handle downloading the bank advice
    this.isBankAdviceDialogOpen = false;
  }

}