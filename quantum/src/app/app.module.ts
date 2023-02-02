import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewAccountStepperComponent } from './new-account-stepper/new-account-stepper.component';

import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewAccountStepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
