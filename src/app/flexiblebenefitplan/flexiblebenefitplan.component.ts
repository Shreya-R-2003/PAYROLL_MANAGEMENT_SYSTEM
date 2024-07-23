import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flexiblebenefitplan',
  templateUrl: './flexiblebenefitplan.component.html',
  styleUrls: ['./flexiblebenefitplan.component.css']
})
export class FlexiblebenefitplanComponent {

  constructor(private router: Router) { }

  navigateToReleaseDetails() {
    this.router.navigate(['/releasefbpdeclarations']);
  }
}
