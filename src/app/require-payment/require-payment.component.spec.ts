import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirePaymentComponent } from './require-payment.component';

describe('RequirePaymentComponent', () => {
  let component: RequirePaymentComponent;
  let fixture: ComponentFixture<RequirePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
