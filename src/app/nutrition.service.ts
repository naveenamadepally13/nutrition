import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  constructor() { }
  displayDate() {
    return Date.now();
  }
}
