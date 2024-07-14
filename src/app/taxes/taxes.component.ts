import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css']
})
export class TaxesComponent {
  taxForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taxForm = this.fb.group({
      pan: [''],
      tan: [''],
      taxPaymentFrequency: [''],
      tdsCircle1: [''],
      tdsCircle2: [''],
      tdsCircle3: [''],
      tdsCircle4: [''],
      deductorType: ['employee'],  // default to employee
      deductorName: [''],
      deductorFatherName: [''],
      deductorDesignation: [''],
      employeeId: ['']
    });
  }

  get isNonEmployee() {
    return this.taxForm.get('deductorType')?.value === 'non-employee';
  }

  get isEmployee() {
    return this.taxForm.get('deductorType')?.value === 'employee';
  }

  onSubmit() {
    console.log(this.taxForm.value);
  }
}