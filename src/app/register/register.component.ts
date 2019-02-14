import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import {Router} from '@angular/router';
import {NutritionService} from '../nutrition.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private dateService: NutritionService) { }
  saveUser;
  date;
  registerAccount(event) {
      if (event.emailAddress in localStorage) {
        Swal.fire('You already have an account with this email address. Please click on Login button to continue.');
        this.router.navigateByUrl('/login');
      } else {
      if (event.passWord === event.rePassWord) {
        this.saveUser = {FirstName: event.firstName, LastName: event.lastName, EmailAddress: event.emailAddress,
          Password: event.passWord};
        localStorage.setItem(event.emailAddress, JSON.stringify(this.saveUser));
        Swal.fire('Your account has been successfully registered. Please enter your email Address and password to login.');
        this.router.navigateByUrl('/login');
      } else {
        Swal.fire('Password does not match with re-entered password. Please enter the same password.');
      }}
  }
  ngOnInit() {
    this.date = this.dateService.displayDate();
  }

}
