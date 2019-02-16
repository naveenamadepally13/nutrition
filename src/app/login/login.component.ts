import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {LoginserviceService} from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  date;
  constructor(private router: Router, private loginserviceService: LoginserviceService) { }
  loginCreation(event) {
    if (event.emailAddress in localStorage) {
        if (JSON.parse(localStorage.getItem(event.emailAddress))['Password'] === event.passWord) {
          this.router.navigateByUrl('/nutrition');
          this.loginserviceService.firstname = JSON.parse(localStorage.getItem(event.emailAddress))['FirstName'];
          this.loginserviceService.secondname = JSON.parse(localStorage.getItem(event.emailAddress))['LastName'];

        } else { Swal.fire('Password is incorrect. Please enter correct password'); }
      } else {
      Swal.fire('Your do not have an account. Please create an account.');
     this.router.navigateByUrl('/register');
    }
  }
  ngOnInit() {
  }

}
