import { Component } from '@angular/core';

@Component({
  selector: 'app-reimbursementclaims',
  templateUrl: './reimbursementclaims.component.html',
  styleUrls: ['./reimbursementclaims.component.css']
})
export class ReimbursementclaimsComponent {
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  selectedDay: number = 22;

  savePreferences() {
    // Logic to save preferences
    console.log('Preferences saved', this.selectedDay);
  }

  onDayChange(event: any) {
    this.selectedDay = event.target.value;
  }
}
