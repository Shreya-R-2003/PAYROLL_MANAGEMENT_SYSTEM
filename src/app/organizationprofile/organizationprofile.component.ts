// organizationprofile.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizationprofile',
  templateUrl: './organizationprofile.component.html',
  styleUrls: ['./organizationprofile.component.css']
})
export class OrganizationprofileComponent implements OnInit {
  primaryContactEmail: string;
  emailSender: string;
  isChangePrimaryContactModalOpen: boolean = false;
  isChangeEmailSenderModalOpen: boolean = false;
  newPrimaryContactEmail: string = '';
  newEmailSender: string = '';

  constructor() {
    // Initialize values from local storage or default values
    this.primaryContactEmail = localStorage.getItem('primaryContactEmail') || 'contact@example.com';
    this.emailSender = localStorage.getItem('emailSender') || 'no-reply@example.com';
  }

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  openChangePrimaryContactModal(): void {
    this.newPrimaryContactEmail = this.primaryContactEmail;
    this.isChangePrimaryContactModalOpen = true;
  }

  closeChangePrimaryContactModal(): void {
    this.isChangePrimaryContactModalOpen = false;
  }

  submitChangePrimaryContact(): void {
    if (this.newPrimaryContactEmail) {
      this.primaryContactEmail = this.newPrimaryContactEmail;
      localStorage.setItem('primaryContactEmail', this.primaryContactEmail);
      this.closeChangePrimaryContactModal();
    }
  }

  openChangeEmailSenderModal(): void {
    this.newEmailSender = this.emailSender;
    this.isChangeEmailSenderModalOpen = true;
  }

  closeChangeEmailSenderModal(): void {
    this.isChangeEmailSenderModalOpen = false;
  }

  submitChangeEmailSender(): void {
    if (this.newEmailSender) {
      this.emailSender = this.newEmailSender;
      localStorage.setItem('emailSender', this.emailSender);
      this.closeChangeEmailSenderModal();
    }
  }
}
