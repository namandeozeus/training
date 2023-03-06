import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountHeaderComponent } from './new-account-header.component';

describe('NewAccountHeaderComponent', () => {
  let component: NewAccountHeaderComponent;
  let fixture: ComponentFixture<NewAccountHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAccountHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewAccountHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
