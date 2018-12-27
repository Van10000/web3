import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatNumeric, formatText, inRange } from '../../model/helpers';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Component({
  selector: 'app-require-payment',
  templateUrl: './require-payment.component.html',
  styleUrls: ['./require-payment.component.scss'],
  providers: [FormBuilder, HttpClient]
})
export class RequirePaymentComponent implements OnInit {
  form: FormGroup;
  forWhatOptions: string[];
  forWhatSelected: number;
  submitted: boolean;
  http: HttpClient;

  constructor(builder: FormBuilder, http: HttpClient) {
    this.http = http;
    this.forWhatOptions = ['НДС 18%', 'НДС 10%', 'Без НДС'];
    this.forWhatSelected = -1;
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
      ],
      'phone-number': [
        null, [
          Validators.pattern('\\+7\\ \\d{3}\\ \\d{3}\\ \\d{2}\\ \\d{2}')
        ]
      ],
      'payment-email': [
        null, [
          Validators.required,
          Validators.email,
          Validators.maxLength(150)
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

  formatPhone(event) {
    const control = this.form.controls['phone-number'];
    const controlValue = (control.value != null) ? control.value.toString() : '';
    const pattern = '+7 ddd ddd dd dd';
    const is_number = inRange(event.key, '0', '9');
    const too_long = controlValue.length > (pattern.length - 1);
    if (too_long) {
      event.preventDefault();
      return;
    }
    if (pattern[controlValue.length] !== 'd' && pattern[controlValue.length] !== event.key && is_number) {
      const next_index = pattern.indexOf('d', controlValue.length);
      control.setValue(controlValue + pattern.substring(controlValue.length, next_index));
      return;
    }
    if (!((pattern[controlValue.length] === 'd' && is_number) || (pattern[controlValue.length] === event.key))) {
      event.preventDefault();
    }
  }

  formatEmail(event) {
    formatText(this.form, 'payment-email', event, 150);
  }

  submit() {
    console.log('require-payment');
    this.http.post(environment.backend + 'require-payment', JSON.stringify(this.form.value))
      .subscribe(ok => {
        console.log('ok');
      }, error => {
        console.log('error');
      });
    this.submitted = true;
    setTimeout(() => this.submitted = false, 500);
  }

  ngOnInit() {
  }

}
