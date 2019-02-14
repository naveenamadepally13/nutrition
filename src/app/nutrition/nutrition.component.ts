import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {textToSpeech} from '@google-cloud/text-to-speech';
import {NutritionService} from '../nutrition.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
  date;
  constructor(private http: HttpClient, private dateService: NutritionService) {
    }
  foodData;
  finalfoodData;
  onClickSubmit(data) {
    this.http.get('https://api.nutritionix.com/v1_1/search/' + data.food +
      '?results=0:1&fields=*&appId=3f722676&appKey=ca48e4e76f26a1e5e44e9f8728c4ffe0').
    subscribe(respDataCondition => {
      this.foodData = respDataCondition;
      this.finalfoodData = this.foodData.hits[0].fields;
    }, error => {});
  }
  ngOnInit() {
    this.date = this.dateService.displayDate();
  }
}
