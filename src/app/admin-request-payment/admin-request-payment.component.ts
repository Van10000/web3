import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-admin-request-payment',
  templateUrl: './admin-request-payment.component.html',
  styleUrls: ['./admin-request-payment.component.scss'],
  providers: [FormBuilder, HttpClient]
})
export class AdminRequestPaymentComponent implements OnInit {
  form: FormGroup;
  http: HttpClient;
  payments: object[];
  paymentFields = [
    'id',
    'payment_from',
    'payment_BIK',
    'account_number',
    'payment_for_what',
    'payment_amount',
    'phone_number',
    'payment_email'
  ];

  constructor(builder: FormBuilder, http: HttpClient) {
    // Админ панель - для админа. Поэтому никакой вам валидации и юзабилити.
    this.form = builder.group({
      'sort_field': null,
      'sort_desc': false,
      'filter_field': null,
      'filter_value': null
    });
    this.http = http;
  }

  loadData() {
    console.log('load data');
    let params = new HttpParams();
    params = params.append('sort_field', this.form.value['sort_field']);
    params = params.append('sort_desc', this.form.value['sort_desc'] ? '1' : '0');
    params = params.append('filter_field', this.form.value['filter_field']);
    params = params.append('filter_value', this.form.value['filter_value']);
    this.http.get(environment.backend + 'required-payments', {
      params: params,
      headers: new HttpHeaders({'Admin-Token': environment.adminToken})
    }).subscribe(ok => {
      this.payments = [];
      for (const paymentInfo of ok) {
        this.payments.push(paymentInfo);
      }
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
