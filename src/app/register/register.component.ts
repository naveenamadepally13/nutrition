import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  /*dialogDisplay = 'none';*/
  registerAccount(event) {
    if (localStorage.getItem('EmailAddress') !== event.emailAddress) {
      localStorage.setItem('FirstName', event.firstName);
      localStorage.setItem('LastName', event.lastName);
      localStorage.setItem('EmailAddress', event.emailAddress);
      localStorage.setItem('Password', event.passWord);
      Swal.fire('Your account has been successfully registered. Please enter your email Address and password to login.');
    } else {
      Swal.fire('You already have an account with this email address. Please click on Login button to continue.');
    }
  }
  ngOnInit() {
  }

}
