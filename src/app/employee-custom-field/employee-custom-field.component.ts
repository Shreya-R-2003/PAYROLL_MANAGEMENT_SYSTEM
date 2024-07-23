import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-custom-field',
  templateUrl: './employee-custom-field.component.html',
  styleUrls: ['./employee-custom-field.component.css']
})
export class EmployeeCustomFieldComponent {
  showForm = false;
  newField = {
    name: '',
    dataType: ''
  };

  toggleForm() {
    this.showForm = !this.showForm;
  }

  saveField() {
    if (this.newField.name && this.newField.dataType) {
      console.log('Field saved:', this.newField);
      
    } else {
      console.error('Please fill in all required fields');
    }
  }
}