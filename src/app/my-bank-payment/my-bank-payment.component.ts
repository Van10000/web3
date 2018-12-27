import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formatNumeric } from '../../model/helpers';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Component({
  selector: 'app-my-bank-payment',
  templateUrl: './my-bank-payment.component.html',
  styleUrls: ['./my-bank-payment.component.scss'],
  providers: [FormBuilder, HttpClient]
})
export class MyBankPaymentComponent implements OnInit {
  form: FormGroup;
  forWhatOptions: string[];
  forWhatSelected: number;
  http: HttpClient;
  submitted: boolean;

  constructor(builder: FormBuilder, http: HttpClient) {
    this.forWhatOptions = ['НДС 18%', 'НДС 10%', 'Без НДС'];
    this.forWhatSelected = -1;
    this.http = http;
    this.submitted = false;

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

  submit() {
    this.http.post(environment.backend + 'create-payment', JSON.stringify(this.form.value))
      .subscribe(ok => {
        window.open(environment.backend + 'get-created-payment?token=' + ok['token']);
      });
    this.submitted = true;
    setTimeout(() => this.submitted = false, 500);
  }

  ngOnInit() {
  }

}
