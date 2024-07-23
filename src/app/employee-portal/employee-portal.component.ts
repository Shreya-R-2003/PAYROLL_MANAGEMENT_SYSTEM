import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrl: './employee-portal.component.css'
})
export class EmployeePortalComponent {
  bannerMessage: string = '';
  displayDate: string = '';
  saveSuccessMessage: string = '';

  constructor() { }

  saveData() {
    console.log('Save button clicked!');

    // Example: Simulate saving (you can replace this with actual save logic)
    // For demonstration, we'll just show a message
    this.saveSuccessMessage = 'Data saved successfully!';
    
    // Optionally clear input fields after save
    this.bannerMessage = '';
    this.displayDate = '';
  }
}

