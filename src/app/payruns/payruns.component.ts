import { Component } from '@angular/core';

@Component({
  selector: 'app-payruns',
  templateUrl: './payruns.component.html',
  styleUrls: ['./payruns.component.css']
})
export class PayrunsComponent {
  currentTab: string = 'Pay Run';

  selectTab(tab: string) {
    this.currentTab = tab;
  }

  // regularPayrunsRoute() {

  // }
}
