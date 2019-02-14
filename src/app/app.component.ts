import {Component, Input, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onNutrition: boolean;
  title = 'nutrition';
  private router: Router;
 }
