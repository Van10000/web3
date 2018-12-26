import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAreaComponent } from './payment-area.component';

describe('PaymentAreaComponent', () => {
  let component: PaymentAreaComponent;
  let fixture: ComponentFixture<PaymentAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
