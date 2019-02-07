// import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginCreation(event) {
    if (localStorage.length > 0) {
      if (localStorage.getItem('EmailAddress') !== event.emailAddress) {
        Swal.fire('Your do not have an account. Please create an account.');
      } else {
        if (localStorage.getItem('EmailAddress') === event.emailAddress && localStorage.getItem('Password') !== event.passWord) {
          Swal.fire('Password is incorrect. Please enter correct password');
        }
      }
    }
  }
  ngOnInit() {
  }

}
