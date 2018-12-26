import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { inRange, formatNumeric } from '../../model/helpers';

@Component({
  selector: 'app-my-bank-payment',
  templateUrl: './my-bank-payment.component.html',
  styleUrls: ['./my-bank-payment.component.scss'],
  providers: [FormBuilder]
})
export class MyBankPaymentComponent implements OnInit {
  form: FormGroup;
  forWhatOptions: string[];
  forWhatSelected: number;

  constructor(builder: FormBuilder) {
    this.forWhatOptions = ['НДС 18%', 'НДС 10%', 'Без НДС'];
    this.forWhatSelected = -1;

    this.form = builder.group({
      'payment-from': [
        null, [
          Validators.required,
          Validators.pattern('(\\d{10}|\\d{12})')
        ]
      ],
      'payment-BIK': [
        null, [
          Validators.required,
          Validators.pattern('\\d{9}')
        ]
      ],
      'account-number': [
        null, [
          Validators.required,
          Validators.pattern('\\d{20}')
        ]
      ],
      'payment-for-what': [
        null, [
          Validators.required
        ]
      ],
      'payment-amount': [
        null, [
          Validators.required,
          Validators.min(1000),
          Validators.max(75000)
        ]
      ]
    });
  }

  formatFrom(event) {
    formatNumeric(this.form, 'payment-from', event, 12);
  }

  formatBIK(event) {
    formatNumeric(this.form, 'payment-BIK', event, 9);
  }

  formatAccountNumber(event) {
    formatNumeric(this.form, 'account-number', event, 20);
  }

  formatAmount(event) {
    formatNumeric(this.form, 'payment-amount', event, 5);
  }

  ngOnInit() {
  }

}
