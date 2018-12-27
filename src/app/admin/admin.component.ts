import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formatText } from '../../model/helpers';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [HttpClient]
})
export class AdminComponent implements OnInit {
  loginForm: FormGroup;
  dataForm: FormGroup;
  http: HttpClient;
  authenticationFailed: boolean;
  showCard: boolean;

  constructor(builder: FormBuilder, http: HttpClient) {
    this.http = http;
    this.showCard = true;
    this.loginForm = builder.group({
      'login': [
        null, [
          Validators.required,
          Validators.maxLength(30)
        ]
      ],
      'password': [
        null, [
          Validators.required,
          Validators.maxLength(30)
        ]
      ]
    });
  }

  formatLogin(event) {
    formatText(this.loginForm, 'login', event, 30);
  }

  formatPassword(event) {
    formatText(this.loginForm, 'password', event, 30);
  }

  ngOnInit() {
  }

  isAuthenticated() {
    return environment.adminToken != null;
  }

  submitLogin() {
    console.log('start submitLogin');
    this.http.post(environment.backend + 'login', JSON.stringify(this.loginForm.value))
      .subscribe(ok => {
        environment.adminToken = ok['token'];
      }, error => {
        this.authenticationFailed = true;
      });
    console.log('submitted');
  }
}
