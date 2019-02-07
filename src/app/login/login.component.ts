import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  emailAddress;
  passWord;
  userKey = 'userName';
  passwordKey = 'password';
  textToSpeech1;
  textToSpeech;
  loginCreation(event) {
    if (localStorage.length > 0) {
      const localKey = localStorage.getItem(this.userKey);
      if (localKey !== this.emailAddress) {
        localStorage.setItem(this.userKey, this.emailAddress);
        localStorage.setItem(this.passwordKey, this.passWord);
      }
    }
  }
  ngOnInit() {
  }

}
