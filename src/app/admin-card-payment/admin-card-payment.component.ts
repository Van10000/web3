import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-admin-card-payment',
  templateUrl: './admin-card-payment.component.html',
  styleUrls: ['./admin-card-payment.component.scss'],
  providers: [FormBuilder, HttpClient]
})
export class AdminCardPaymentComponent implements OnInit {
  form: FormGroup;
  http: HttpClient;
  payments: object[];
  paymentFields = [
    'id',
    'card_number',
    'card_release_date',
    'card_cvc',
    'payment_amount',
    'payment_comment',
    'payment_email',
    'not_safe'
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
    this.http.get(environment.backend + 'card-payment', {
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

  changeNotSafe(id, not_safe) {
    this.http.patch(
      environment.backend + 'card-payment',
      JSON.stringify({'id': id, 'not_safe': not_safe}),
      {headers: new HttpHeaders({'Admin-Token': environment.adminToken})}
      ).subscribe(ok => {
        this.loadData();
    });
  }

  ngOnInit() {
  }

}
