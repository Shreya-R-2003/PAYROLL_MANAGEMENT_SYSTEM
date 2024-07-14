import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salarycomponent',
  templateUrl: './salarycomponent.component.html',
  styleUrls: ['./salarycomponent.component.css']
})
export class SalarycomponentComponent {
  currentTab: string = 'Earnings';
  selectedItem: any = null;
  earnings: any[] = [];
  reimbursements: any[] = [];
  dropdownOpen: boolean = false; 
  addEarnings: boolean = false;
  addCorrections = false;
  addPostTax = false;
  addPreTax = false;
  addReimbursements = false;

  newReimbursement: any = {
    name: '',
    reimbursementType: '',
    maxAmount: 0,
    status: 'Active'
  };

  newEarning: any = {
    name: '',
    earningType: '',
    calculationType: '',
    considerForEPF: false,
    considerForESI: false,
    status: 'Active'
  };

  constructor(private router: Router){
    this.earnings = this.getEarningsFromStorage();
    this.reimbursements = this.getReimbursemenfromStorage();
  }

  selectTab(tab: string) {
    this.currentTab = tab;
    this.selectedItem = null;
    this.addEarnings = false;
  }

  selectItem(item: any, type:String) {
    if(type === 'Earnings'){
      this.selectedItem = item;
      this.addEarnings = false;
    }
    if(type === 'Reimbursements'){
      this.selectedItem = item;
      this.addReimbursements = false;
    }
  }

  clearSelection(type: String) {
    this.selectedItem = null;
    if(type === 'Earnings'){
      this.addEarnings = false;
    }
    else if( type === 'Reimbursements'){
      this.addReimbursements = false;
    }
  }

  saveChanges(type: string) {
    if (type === 'Earnings' && this.selectedItem) {
        // Find the index of the selected item in the earnings array
        const index = this.earnings.findIndex(item => item === this.selectedItem);

        if (index !== -1) {
            // Update the existing item with the changes
            this.earnings[index] = {
                ...this.selectedItem,  // Maintain existing properties
                name: this.selectedItem.name,
                nameInPayslip: this.selectedItem.nameInPayslip,
                calculationType: this.selectedItem.calculationType,
                amount: this.selectedItem.amount,
                isActive: this.selectedItem.isActive,
                includeInSalaryStructure: this.selectedItem.includeInSalaryStructure,
                isTaxable: this.selectedItem.isTaxable,
                calculateProRata: this.selectedItem.calculateProRata,
                includeInFBP: this.selectedItem.includeInFBP,
                considerForEPF: this.selectedItem.considerForEPF,
                considerForESI: this.selectedItem.considerForESI,
                considerForPayslip: this.selectedItem.considerForPayslip
                // Add more properties as needed
            };

            // Update earnings in local storage
            localStorage.setItem('earnings', JSON.stringify(this.earnings));

            // Clear the selection after saving
            this.selectedItem = null;
        }
    }

    if (type === 'Reimbursements' && this.selectedItem) {
      // Find the index of the selected item in the reimbursements array
      const index = this.reimbursements.findIndex(item => item === this.selectedItem);

      if (index !== -1) {
          // Update the existing item with the changes
          this.reimbursements[index] = {
              ...this.selectedItem,
              name: this.selectedItem.name,
              reimbursementType: this.selectedItem.reimbursementType,
              maxAmount: this.selectedItem.maxAmount,
              status: this.selectedItem.status
              // Add more properties as needed
          };

          // Update reimbursements in local storage
          localStorage.setItem('reimbursements', JSON.stringify(this.reimbursements));

          // Clear the selection after saving
          this.selectedItem = null;
      }
  }

}


  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  getEarningsFromStorage(): any[] {
    const earnings = localStorage.getItem('earnings');
    return earnings ? JSON.parse(earnings) : [];
  }

  getReimbursemenfromStorage() :any[] {
    const reimbursements = localStorage.getItem('reimbursements');
    return reimbursements ? JSON.parse(reimbursements) : []; 
  }

  addComponent(type: string) {
    if (type === 'Earnings') {
        this.addEarnings = true;
    } else if (type === 'Corrections') {
        this.addCorrections = true;
    } else if (type === 'Post-tax Deductions') {
        this.addPostTax = true;
    } else if (type === 'Pre-tax Deductions') {
        this.addPreTax = true;
    } else if (type === 'Reimbursements') {
      this.addReimbursements = true;
    }
    this.dropdownOpen = false; // Close dropdown after selecting an option
  }

  addNewEarning() {
    // Assuming selectedItem is not used for adding new earnings, reset it if necessary
    this.selectedItem = null;
  
    // Create a new earning object from form values
    const newEarning = {
      name: this.newEarning.name,
      earningType: this.newEarning.earningType,
      calculationType: this.newEarning.calculationType,
      considerForEPF: this.newEarning.considerForEPF,
      considerForESI: this.newEarning.considerForESI,
      status: this.newEarning.status, // Assuming status is always 'Active' for new entries
      // Add more properties as needed from your form
    };
  
    // Push the new earning object to the earnings array
    this.earnings.push(newEarning);
  
    // Update earnings in local storage
    localStorage.setItem('earnings', JSON.stringify(this.earnings));
  
    // Reset newEarning to clear the form
    this.newEarning = {
      name: '',
      earningType: '',
      calculationType: '',
      considerForEPF: false,
      considerForESI: false,
      status: 'Active'
    };
  
    // Close the add earnings view
    this.addEarnings = false;
  }

  addNewReimbursement() {
    // Assuming selectedItem is not used for adding new earnings, reset it if necessary
    this.selectedItem = null;

      const newReimbursement = {
        name: this.newReimbursement.name,
        reimbursementType: this.newReimbursement.reimbursementType,
        maxAmount: this.newReimbursement.maxAmount,
        status: this.newReimbursement.status
      };

      this.reimbursements.push(newReimbursement);

      localStorage.setItem('reimbursements', JSON.stringify(this.reimbursements));

      this.newReimbursement = {
        name: '',
        earningType: '',
        calculationType: '',
        considerForEPF: false,
        considerForESI: false,
        status: 'Active'
      };

      this.addReimbursements = false;
    }
  

  updateInStorage(type: String) {
    if(type === 'Earnings'){
      localStorage.setItem('earnings', JSON.stringify(this.earnings));
    }
    else if (type === 'Reimbursements'){
      localStorage.setItem('reimbursements', JSON.stringify(this.reimbursements));
    }
    
  }
}
