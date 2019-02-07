import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  registerMessage;
  firstNameKey = 'FirstName';
  firstName;
  lastNameKey = 'LastName';
  lastName;
  emailAddressKey = 'EmailAddress';
  emailAddress;
  passwordKey = 'Password';
  password;
  getEmailAddress;
  dialogDisplay = 'none';
  registerAccount(event) {
    this.getEmailAddress = localStorage.getItem(this.emailAddress);
    if (this.getEmailAddress !== this.emailAddress) {
      localStorage.setItem(this.firstNameKey, this.firstName);
      localStorage.setItem(this.lastNameKey, this.lastName);
      localStorage.setItem(this.emailAddressKey, this.emailAddress);
      localStorage.setItem(this.passwordKey, this.password);
      this.registerMessage = 'Your account has been registered. Please enter your Email Address and Password on Login page.';
      this.openModalDialog();
    } else {
      this.registerMessage = 'You already have an account with Email Address {{emailAddress}}. Please click on OK button to navigate ' +
        'to Login Page.';
    }
  }

  openModalDialog() {
    this.dialogDisplay = 'block';
  }

  closeModalDialog() {
    this.dialogDisplay = 'none';
  }
  ngOnInit() {
  }

}
