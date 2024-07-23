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
  preTaxDeductions: any[] = [];
  postTaxDeductions: any[] = [];
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

  newPreTax: any = {
    name: '',
    type: '',
    amount: 0,
    isActive: true
  };

  newPostTax: any = {
    name: '',
    type: '',
    amount: 0,
    isActive: true
  };

  constructor(private router: Router){
    this.earnings = this.getEarningsFromStorage();
    this.reimbursements = this.getReimbursementsFromStorage();
    this.preTaxDeductions = this.getPreTaxDeductionsFromStorage();
    this.postTaxDeductions = this.getPostTaxDeductionsFromStorage();
  }

  selectTab(tab: string) {
    this.currentTab = tab;
    this.selectedItem = null;
    this.addEarnings = false;
    this.addPreTax = false;
    this.addPostTax = false;
    this.addReimbursements = false;
  }

  selectItem(item: any, type: string) {
    this.selectedItem = item;
    this.addEarnings = false;
    this.addPreTax = false;
    this.addPostTax = false;
    this.addReimbursements = false;
  }

  clearSelection(type: string) {
    this.selectedItem = null;
    if (type === 'Earnings') {
      this.addEarnings = false;
    } else if (type === 'PreTax') {
      this.addPreTax = false;
    } else if (type === 'PostTax') {
      this.addPostTax = false;
    } else if (type === 'Reimbursements') {
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
          };

          // Update reimbursements in local storage
          localStorage.setItem('reimbursements', JSON.stringify(this.reimbursements));

          // Clear the selection after saving
          this.selectedItem = null;
      }
  }

    if (type === 'PreTax' && this.selectedItem) {
        const index = this.preTaxDeductions.findIndex(item => item === this.selectedItem);

        if (index !== -1) {
            this.preTaxDeductions[index] = {
                ...this.selectedItem,
                name: this.selectedItem.name,
                type: this.selectedItem.type,
                amount: this.selectedItem.amount,
                isActive: this.selectedItem.isActive
            };

            localStorage.setItem('preTaxDeductions', JSON.stringify(this.preTaxDeductions));
            this.selectedItem = null;
        }
    }

    if (type === 'PostTax' && this.selectedItem) {
        const index = this.postTaxDeductions.findIndex(item => item === this.selectedItem);

        if (index !== -1) {
            this.postTaxDeductions[index] = {
                ...this.selectedItem,
                name: this.selectedItem.name,
                type: this.selectedItem.type,
                amount: this.selectedItem.amount,
                isActive: this.selectedItem.isActive
            };

            localStorage.setItem('postTaxDeductions', JSON.stringify(this.postTaxDeductions));
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

  getReimbursementsFromStorage(): any[] {
    const reimbursements = localStorage.getItem('reimbursements');
    return reimbursements ? JSON.parse(reimbursements) : []; 
  }

  getPreTaxDeductionsFromStorage(): any[] {
    const preTaxDeductions = localStorage.getItem('preTaxDeductions');
    return preTaxDeductions ? JSON.parse(preTaxDeductions) : [];
  }

  getPostTaxDeductionsFromStorage(): any[] {
    const postTaxDeductions = localStorage.getItem('postTaxDeductions');
    return postTaxDeductions ? JSON.parse(postTaxDeductions) : [];
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
    this.selectedItem = null;
    const newEarning = {
      name: this.newEarning.name,
      earningType: this.newEarning.earningType,
      calculationType: this.newEarning.calculationType,
      considerForEPF: this.newEarning.considerForEPF,
      considerForESI: this.newEarning.considerForESI,
      status: this.newEarning.status
    };
    this.earnings.push(newEarning);
    localStorage.setItem('earnings', JSON.stringify(this.earnings));
    this.newEarning = {
      name: '',
      earningType: '',
      calculationType: '',
      considerForEPF: false,
      considerForESI: false,
      status: 'Active'
    };
    this.addEarnings = false;
  }

  addNewReimbursement() {
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
      reimbursementType: '',
      maxAmount: 0,
      status: 'Active'
    };
    this.addReimbursements = false;
  }

  addNewPreTax() {
    this.selectedItem = null;
    const newPreTax = {
      name: this.newPreTax.name,
      type: this.newPreTax.type,
      amount: this.newPreTax.amount,
      isActive: this.newPreTax.isActive
    };
    this.preTaxDeductions.push(newPreTax);
    localStorage.setItem('preTaxDeductions', JSON.stringify(this.preTaxDeductions));
    this.newPreTax = {
      name: '',
      type: '',
      amount: 0,
      isActive: true
    };
    this.addPreTax = false;
  }

  addNewPostTax() {
    this.selectedItem = null;
    const newPostTax = {
      name: this.newPostTax.name,
      type: this.newPostTax.type,
      amount: this.newPostTax.amount,
      isActive: this.newPostTax.isActive
    };
    this.postTaxDeductions.push(newPostTax);
    localStorage.setItem('postTaxDeductions', JSON.stringify(this.postTaxDeductions));
    this.newPostTax = {
      name: '',
      type: '',
      amount: 0,
      isActive: true
    };
    this.addPostTax = false;
  }
}
