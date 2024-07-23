import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-incometaxdeclaration',
  templateUrl: './incometaxdeclaration.component.html',
  styleUrls: ['./incometaxdeclaration.component.css']
})
export class IncometaxdeclarationComponent {
  constructor(private router: Router) {}
  
  releaseDeclaration() {
    this.router.navigate(['/releaseitdeclaration']);
    
  }
}
