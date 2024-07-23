import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { format, parse } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpayschedule',
  templateUrl: './editpayschedule.component.html',
  styleUrls: ['./editpayschedule.component.css']
})
export class EditpayscheduleComponent {
  payScheduleForm: FormGroup;
  showPayDateField: boolean = false;
  formattedMonth: string = '';
  showMessage: boolean = false; // Flag to show/hide the message

  constructor(private fb: FormBuilder, private router: Router) {
    this.payScheduleForm = this.fb.group({
      workWeek: this.fb.array(['MON', 'TUE', 'WED', 'THU', 'FRI']),
      salaryBasis: ['actualDays'],
      organizationDays: [''],
      payDayOption: ['lastWorkingDay'],
      specificDay: [''],
      firstPayroll: [''],
      payDate: ['']
    });

    this.payScheduleForm.get('firstPayroll')?.valueChanges.subscribe(value => {
      this.updatePayDateField(value);
    });
  }

  get workWeek(): FormArray {
    return this.payScheduleForm.get('workWeek') as FormArray;
  }

  onWorkWeekChange(event: any) {
    const workWeek: FormArray = this.workWeek;
    if (event.target.checked) {
      workWeek.push(this.fb.control(event.target.value));
    } else {
      const index = workWeek.controls.findIndex(x => x.value === event.target.value);
      workWeek.removeAt(index);
    }
  }

  updatePayDateField(value: string) {
    if (value) {
      this.showPayDateField = true;
      const date = parse(value, 'yyyy-MM', new Date());
      this.formattedMonth = format(date, 'MMMM yyyy');
    } else {
      this.showPayDateField = false;
      this.formattedMonth = '';
    }
  }

  onSubmit() {
    // Logic to save the form goes here
    // For demonstration, let's set showMessage to true
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = true;
      this.router.navigate(['/payschedule']);
    }, 2000); 
  }

  onCancel() {
    this.payScheduleForm.reset();
    this.router.navigate(['/payschedule']);
  }
}
