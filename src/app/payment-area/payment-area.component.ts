import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-area',
  templateUrl: './payment-area.component.html',
  styleUrls: ['./payment-area.component.scss', '../app.component.scss']
})
export class PaymentAreaComponent implements OnInit {
  selectedPayment: boolean;
  selectedAnyBankPayment: boolean;

  constructor() {
    this.selectedPayment = true;
    this.selectedAnyBankPayment = true;
  }

  ngOnInit() {
  }

}
