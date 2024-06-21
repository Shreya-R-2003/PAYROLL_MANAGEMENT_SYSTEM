import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  currentTab: string = 'Overview';
  investmentTab: string = 'IT Declaration'; // Default tab for Investments
  startYear: number; // Selected start year from the period selector
  endYear: number; // Calculated end year

  constructor() {
    const currentYear = new Date().getFullYear();
    this.startYear = currentYear; // Initialize startYear with current year
    this.endYear = currentYear + 1; // Initialize endYear as next year
  }

  selectTab(tab: string): void {
    this.currentTab = tab;
  }

  selectInvestmentTab(tab: string): void {
    this.investmentTab = tab;
  }

  updateEndYear(): void {
    this.endYear = this.startYear + 1; // Update endYear based on selected startYear
  }
  editITDeclaration(): void {
    // Implement your edit logic here
    console.log('Editing IT Declaration');
  }
}
