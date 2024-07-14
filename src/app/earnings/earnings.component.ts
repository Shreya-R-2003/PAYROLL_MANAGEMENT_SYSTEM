import { Component } from '@angular/core';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent {
  earningName: string = '';
  earningType: string = '';
  calculationType: string = 'Flat Amount';
  flatAmount: number = 0;
  percentage: number = 0;
  isPartOfSalaryStructure: boolean = false;
  isTaxable: boolean = false;
  proRataBasis: boolean = false;
  flexibleBenefit: boolean = false;
  epfAlways: boolean = false;
  epfLessThan15000: boolean = false;
  esiContribution: boolean = false;
  showInPayslip: boolean = false;

  submitEarnings() {
    const earningsData = {
      earningName: this.earningName,
      earningType: this.earningType,
      calculationType: this.calculationType,
      flatAmount: this.flatAmount,
      percentage: this.percentage,
      isPartOfSalaryStructure: this.isPartOfSalaryStructure,
      isTaxable: this.isTaxable,
      proRataBasis: this.proRataBasis,
      flexibleBenefit: this.flexibleBenefit,
      epfAlways: this.epfAlways,
      epfLessThan15000: this.epfLessThan15000,
      esiContribution: this.esiContribution,
      showInPayslip: this.showInPayslip
    };

    // Retrieve existing earnings data from local storage
    let existingEarningsDataString = localStorage.getItem('earningsData');
    let existingEarningsData: any[] = [];
    
    if (existingEarningsDataString) {
      existingEarningsData = JSON.parse(existingEarningsDataString);
    }
    
    // Add new earnings data to the existing array
    existingEarningsData.push(earningsData);
    
    // Store updated earnings data back to local storage
    localStorage.setItem('earningsData', JSON.stringify(existingEarningsData));
    
    // Optionally, clear form fields after submission
    this.clearForm();
  }

  clearForm() {
    this.earningName = '';
    this.earningType = '';
    this.calculationType = 'Flat Amount';
    this.flatAmount = 0;
    this.percentage = 0;
    this.isPartOfSalaryStructure = false;
    this.isTaxable = false;
    this.proRataBasis = false;
    this.flexibleBenefit = false;
    this.epfAlways = false;
    this.epfLessThan15000 = false;
    this.esiContribution = false;
    this.showInPayslip = false;
  }
}
