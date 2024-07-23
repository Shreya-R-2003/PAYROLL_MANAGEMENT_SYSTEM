import { Component } from '@angular/core';

@Component({
  selector: 'app-releaseitdeclaration',
  templateUrl: './releaseitdeclaration.component.html',
  styleUrls: ['./releaseitdeclaration.component.css']
})
export class ReleaseitdeclarationComponent {
  selectedDate: string = '';
  currentDate: string = '';
  isPopupVisible: boolean = false;
  reminderDays: number = 0; // Initialize reminderDays
  reminders: number[] = []; // Array to hold reminders

  constructor() {
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0]; // Format to YYYY-MM-DD
  }

  onDateChange(event: any) {
    this.selectedDate = event.target.value;
  }

  showPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  addReminder() {
    if (this.reminderDays > 0) {
      this.reminders.push(this.reminderDays);
      console.log(`Reminder set for ${this.reminderDays} days before lock date`);
      this.isPopupVisible = false;
      this.reminderDays = 0; // Reset reminderDays after adding
    } else {
      alert('Please enter a valid number of days');
    }
  }
}
