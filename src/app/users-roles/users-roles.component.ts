import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-roles',
  templateUrl: './users-roles.component.html',
  styleUrls: ['./users-roles.component.css']
})
export class UsersRolesComponent {
  currentView: string = 'users';
  showInviteUserModal: boolean = false;
  showNewRoleModal: boolean = false;
  inviteEmail: string = '';

  constructor(private router: Router){
    
  }
  users = [
    { details: 'John Doe', role: 'Admin', status: 'Active' },
    { details: 'Jane Smith', role: 'User', status: 'Inactive' },
    // Add more users as needed
  ];

  roles = [
    { name: 'Admin', description: 'Full access to all features' },
    { name: 'User', description: 'Limited access' },
    { name: 'Manager', description: '' },
    { name: 'Developer', description: 'Can access developer tools' },
    { name: 'Tester', description: '' }
  ];

  newRole = { name: '', description: '' };

  toggleView(view: string) {
    this.currentView = view;
  }

  openInviteUserModal() {
    this.showInviteUserModal = true;
  }

  closeInviteUserModal() {
    this.showInviteUserModal = false;
    this.inviteEmail = '';
  }

  inviteUser() {
    // Logic to invite user using the inviteEmail
    console.log(`Inviting user with email: ${this.inviteEmail}`);
    this.closeInviteUserModal();
  }

  openNewRoleModal() {
    this.router.navigate(['/new-role']);
  }

  closeNewRoleModal() {
    this.showNewRoleModal = false;
    this.newRole = { name: '', description: '' };
  }

  addNewRole() {
    // Logic to add new role
    console.log(`Adding new role: ${this.newRole.name}, Description: ${this.newRole.description}`);
    this.roles.push({ ...this.newRole });
    this.closeNewRoleModal();
  }
}
