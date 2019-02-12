import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Swal } from 'sweetalert2/dist/sweetalert2.js';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { RegisterComponent } from './register/register.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NutritionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
