import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payschedule',
  templateUrl: './payschedule.component.html',
  styleUrls: ['./payschedule.component.css']
})
export class PayscheduleComponent {

  constructor(private router: Router) {}

  redirectToEdit() {
    this.router.navigate(['/editpayschedule']);
  }
}
