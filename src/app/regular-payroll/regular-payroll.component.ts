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
