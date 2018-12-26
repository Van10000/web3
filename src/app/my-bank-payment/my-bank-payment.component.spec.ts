import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBankPaymentComponent } from './my-bank-payment.component';

describe('MyBankPaymentComponent', () => {
  let component: MyBankPaymentComponent;
  let fixture: ComponentFixture<MyBankPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBankPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBankPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
