// import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  loginCreation(event) {
    if (localStorage.length > 0) {
      if (localStorage.getItem('EmailAddress') !== event.emailAddress) {
        Swal.fire('Your do not have an account. Please create an account.');
        this.router.navigateByUrl('/register');
      } else {
        if (localStorage.getItem('EmailAddress') === event.emailAddress && localStorage.getItem('Password') !== event.passWord) {
          Swal.fire('Password is incorrect. Please enter correct password');
        } else {
          if (localStorage.getItem('EmailAddress') === event.emailAddress && localStorage.getItem('Password') === event.passWord) {
            this.router.navigateByUrl('/nutrition');
          }
        }
      }
    }
  }
  ngOnInit() {
  }

}
