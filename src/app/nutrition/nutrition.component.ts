import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginserviceService} from '../loginservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
  date;
  constructor(private http: HttpClient, private loginserviceService: LoginserviceService) {
    }
  foodData;
  finalfoodData;
  onClickSubmit(data) {
    if (data.food === '') {
      Swal.fire('Please enter a food item to search');
    } else {
      this.http.get('https://api.nutritionix.com/v1_1/search/' + data.food +
        '?results=0:1&fields=*&appId=3f722676&appKey=ca48e4e76f26a1e5e44e9f8728c4ffe0').
      subscribe(respDataCondition => {
        this.foodData = respDataCondition;
        if (this.foodData.hits.length === 0) {
          Swal.fire('Please enter a food item to search');
        } else {
          this.finalfoodData = this.foodData.hits[0].fields;
        }
      }, error => {});
    }
  }
  speechFunction(speechdata) {
    // @ts-ignore
    responsiveVoice.speak(speechdata);
  }
  ngOnInit() {
  }
}
