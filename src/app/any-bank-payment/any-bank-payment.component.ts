import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {inRange, formatNumeric, formatText} from '../../model/helpers';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-any-bank-payment',
  templateUrl: './any-bank-payment.component.html',
  styleUrls: ['./any-bank-payment.component.scss'],
  providers: [FormBuilder, HttpClient]
})
export class AnyBankPaymentComponent implements OnInit {
  form: FormGroup;
  http: HttpClient;
  submitted: boolean;

  constructor(builder: FormBuilder, http: HttpClient) {
    this.http = http;
    this.submitted = false;
    this.form = builder.group({
      'card-number': [
        null, [
          Validators.required,
          Validators.pattern('\\d{16}')
        ]
      ],
      'card-release-date': [
        null, [
          Validators.required,
          Validators.pattern('(0[1-9]|1[0-2])\\/(1[7-9]|2[0-9]|3[0-5])')
        ]
      ],
      'card-cvc': [
        null, [
          Validators.required,
          Validators.pattern('\\d{3}')
        ]
      ],
      'payment-amount': [
        null, [
          Validators.required,
          Validators.min(1000),
          Validators.max(75000)
        ]
      ],
      'payment-comment': [
        null, [
          Validators.maxLength(150)
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

  ngOnInit() {
  }

  formatReleaseDate(event) {
    const control = this.form.controls['card-release-date'];
    const controlValue = (control.value != null) ? control.value : '';
    const is_slash = controlValue.length === 2 && event.key === '/';
    const is_number = inRange(event.key, '0', '9');
    const too_long = controlValue.length > 4;
    if ((!(is_number || is_slash)) || too_long) {
      event.preventDefault();
    }
    if (controlValue.length === 2) {
      if (!is_slash) {
        control.setValue(controlValue + '/');
      }
    }
  }

  formatCVC(event) {
    formatNumeric(this.form, 'card-cvc', event, 3);
  }

  formatCardNumber(event) {
    formatNumeric(this.form, 'card-number', event, 16);
  }

  formatPaymentAmount(event) {
    formatNumeric(this.form, 'payment-amount', event, 5);
  }

  formatEmail(event) {
    formatText(this.form, 'payment-email', event, 150);
  }

  submit() {
    console.log('start submitLogin');
    this.http.post(environment.backend + 'card-payment', JSON.stringify(this.form.value));
    console.log('submitted');
    this.submitted = true;
    setTimeout(() => this.submitted = false, 500);
  }
}
