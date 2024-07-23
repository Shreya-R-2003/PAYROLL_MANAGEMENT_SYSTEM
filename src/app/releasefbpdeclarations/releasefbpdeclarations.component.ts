import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-releasefbpdeclarations',
  templateUrl: './releasefbpdeclarations.component.html',
  styleUrls: ['./releasefbpdeclarations.component.css'],
  providers: [DatePipe]  // Add DatePipe to providers
})
export class ReleasefbpdeclarationsComponent implements OnInit {
  selectedDateMessage: string | null = null;
  currentDateFormatted: string | null = null;

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    const currentDate = new Date();
    this.currentDateFormatted = this.datePipe.transform(currentDate, 'dd/MM/yy');
  }

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selectedDate = input.value;
    if (selectedDate && this.currentDateFormatted) {
      const formattedDate = this.datePipe.transform(selectedDate, 'dd/MM/yy');
      this.selectedDateMessage = `Employees can declare their FBP anytime between ${this.currentDateFormatted} and ${formattedDate}.`;
    } else {
      this.selectedDateMessage = null;
    }
  }

  onSave(): void {
    // Reset form fields
    const dateInput = document.getElementById('fbp-date') as HTMLInputElement;
    dateInput.value = '';
    this.selectedDateMessage = null;
  }
}
