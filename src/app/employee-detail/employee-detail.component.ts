import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

interface ProofOfInvestment {
  particulars: string;
  declaredAmount: number;
  proof?: string;
  comment?: string;
  actualAmount: number;
}

interface Reimbursement {
  name: string;
  eligibleAmount: number;
  paid: number;
  approvedUnpaid: number;
  pendingApproval: number;
  unclaimed: number;
}



@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: any = {};
  currentTab: string = 'Overview';
  salaryDetails: any = {};

  investmentTab: string = 'IT Declaration'; // Default tab for Investments
  startYear: number; // Selected start year from the period selector
  endYear: number; // Calculated end year
  loanDetails: any; // Property to hold ongoing loan details
  hasLoan: boolean = false; // Property to indicate if the employee has an ongoing loan
  completedLoans: any[] = []; // Array to hold completed loan details

  proofs: ProofOfInvestment[] = []; // List of proofs of investment
  showProofForm: boolean = false; // To control the display of the form modal
  newProof: ProofOfInvestment = {
    particulars: '',
    declaredAmount: 0,
    actualAmount: 0
  }; // New proof form data

  // Array to hold payslip data
  payslips: 
  { paymentDate: string, 
    month: string, 
    payslipUrl: string,
    tdsSheetUrl: string 
  }[] = [];

  reimbursements: Reimbursement[] = [
    {
      name: 'Reimbursement 1',
      eligibleAmount: 500,
      paid: 200,
      approvedUnpaid: 100,
      pendingApproval: 150,
      unclaimed: 50
    },
    {
      name: 'Reimbursement 2',
      eligibleAmount: 300,
      paid: 100,
      approvedUnpaid: 50,
      pendingApproval: 100,
      unclaimed: 50
    }
  ]; // Sample

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {
    const currentYear = new Date().getFullYear();
    this.startYear = currentYear; // Initialize startYear with current year
    this.endYear = currentYear + 1; // Initialize endYear as next year

    const savedProofs = localStorage.getItem('proofs');
    if (savedProofs) {
      this.proofs = JSON.parse(savedProofs);
    }

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const employeeId = params.get('id');
      if (employeeId) {
        this.employee = this.employeeService.getEmployeeById(+employeeId);
      }
    });

    // Fetch loan details from an API or service (mock data here for demonstration)
    this.fetchLoanDetails();

    // Populate payslip data (mock data here for demonstration)
    this.payslips = [
      { paymentDate: '31/01/2024', month: 'January 2024', payslipUrl: 'path/to/payslip-january.pdf', tdsSheetUrl: 'path/to/tds-january.pdf' },
      { paymentDate: '29/02/2024', month: 'February 2024', payslipUrl: 'path/to/payslip-february.pdf', tdsSheetUrl: 'path/to/tds-february.pdf' },
      { paymentDate: '31/03/2024', month: 'March 2024', payslipUrl: 'path/to/payslip-march.pdf', tdsSheetUrl: 'path/to/tds-march.pdf' },
      { paymentDate: '30/04/2024', month: 'April 2024', payslipUrl: 'path/to/payslip-april.pdf', tdsSheetUrl: 'path/to/tds-april.pdf' },
      { paymentDate: '31/05/2024', month: 'May 2024', payslipUrl: 'path/to/payslip-may.pdf', tdsSheetUrl: 'path/to/tds-may.pdf' },
    ];
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

  fetchLoanDetails(): void {
    // Mock ongoing loan details
    this.loanDetails = {
      loanAmount: 1000000,
      loanId: '00006',
      installmentAmount: 50000,
      amountRepaid: 0,
      remainingAmount: 1000000,
      installmentsRemaining: 20,
      nextInstallmentDate: '2024-07-01'
    };

    // Check if the employee has taken a loan
    this.hasLoan = !!this.loanDetails;
  }

  saveEmployee(): void {
    this.employeeService.updateEmployee(this.employee);
    alert('Employee details saved successfully!');
  }


  openProofForm(): void {
    this.showProofForm = true;
  }

  closeProofForm(): void {
    this.showProofForm = false;
  }

  submitProofForm(): void {
    this.proofs.push({ ...this.newProof });
    localStorage.setItem('proofs', JSON.stringify(this.proofs));
    this.closeProofForm();
    this.resetForm();
  }

  resetForm(): void {
    this.newProof = {
      particulars: '',
      declaredAmount: 0,
      actualAmount: 0
    };
  }

  uploadProof(proof: ProofOfInvestment): void {
    // Implement your upload logic here
    console.log('Upload proof for', proof);
  }

  addComment(proof: ProofOfInvestment): void {
    // Implement your add comment logic here
    console.log('Add comment for', proof);
  }

  generateYearOptions(): number[] {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
      years.push(i);
    }
    return years;
  }
}