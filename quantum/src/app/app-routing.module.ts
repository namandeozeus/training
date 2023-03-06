import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalkInListComponent } from './walk-in-list/walk-in-list.component'
import { WalkInDetailsComponent } from './walk-in-details/walk-in-details.component'
import { LoginComponent } from './user/login/login.component'
import { NewAccountStepperComponent } from './new-account-stepper/new-account-stepper.component'
 
const routes: Routes = [
  {
    component:LoginComponent,
    path : ''
  },
  {
    component:WalkInListComponent,
    path : 'list'
  },
  {
    component:WalkInDetailsComponent,
    path : 'list/details'
  },
  {
    component:NewAccountStepperComponent,
    path:'new-account'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
