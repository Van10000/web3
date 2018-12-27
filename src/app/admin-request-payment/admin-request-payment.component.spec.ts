import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequestPaymentComponent } from './admin-request-payment.component';

describe('AdminRequestPaymentComponent', () => {
  let component: AdminRequestPaymentComponent;
  let fixture: ComponentFixture<AdminRequestPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRequestPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRequestPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
