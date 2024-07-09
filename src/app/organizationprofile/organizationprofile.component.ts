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
  logo: any; // Variable to store the logo image

  constructor() {
    // Initialize values from local storage or default values
    this.primaryContactEmail = localStorage.getItem('primaryContactEmail') || 'contact@example.com';
    this.emailSender = localStorage.getItem('emailSender') || 'no-reply@example.com';
    this.logo = localStorage.getItem('organizationLogo'); // Retrieve logo from local storage if exists
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

  handleLogoUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Assuming you want to store the logo as a base64 encoded string
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.logo = e.target.result;
        localStorage.setItem('organizationLogo', this.logo); // Store logo in local storage
      };
      reader.readAsDataURL(file);
    }
  }
}
