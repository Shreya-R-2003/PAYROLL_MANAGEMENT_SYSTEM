import { Component } from '@angular/core';

@Component({
  selector: 'app-worklocations',
  templateUrl: './worklocations.component.html',
  styleUrls: ['./worklocations.component.css']
})
export class WorklocationsComponent {
  isAddLocationFormVisible: boolean = false;
  newLocation: { name: string; address: string; employees: number } = { name: '', address: '', employees: 0 };
  workLocations: Array<{ name: string; address: string; employees: number }> = [];

  showAddLocationForm() {
    this.isAddLocationFormVisible = true;
  }

  addLocation() {
    this.workLocations.push({ ...this.newLocation });
    this.newLocation = { name: '', address: '', employees: 0 };
    this.isAddLocationFormVisible = false;
  }
}
