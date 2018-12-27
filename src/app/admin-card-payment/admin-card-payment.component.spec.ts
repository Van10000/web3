import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCardPaymentComponent } from './admin-card-payment.component';

describe('AdminCardPaymentComponent', () => {
  let component: AdminCardPaymentComponent;
  let fixture: ComponentFixture<AdminCardPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCardPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCardPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
