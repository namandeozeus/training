import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-account-stepper',
  templateUrl: './new-account-stepper.component.html',
  styleUrls: ['./new-account-stepper.component.scss']
})
export class NewAccountStepperComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}
