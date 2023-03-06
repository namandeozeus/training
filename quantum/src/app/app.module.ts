import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewAccountStepperComponent } from './new-account-stepper/new-account-stepper.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { NewAccountHeaderComponent } from './new-account-header/new-account-header.component';
import { WalkInListComponent } from './walk-in-list/walk-in-list.component';
import { WalkInDetailsComponent } from './walk-in-details/walk-in-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewAccountStepperComponent,
    HeaderComponent,
    NewAccountHeaderComponent,
    WalkInListComponent,
    WalkInDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
