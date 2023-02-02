import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountStepperComponent } from './new-account-stepper.component';

describe('NewAccountStepperComponent', () => {
  let component: NewAccountStepperComponent;
  let fixture: ComponentFixture<NewAccountStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAccountStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAccountStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
