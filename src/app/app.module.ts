import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { PaymentAreaComponent } from './payment-area/payment-area.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AnyBankPaymentComponent } from './any-bank-payment/any-bank-payment.component';
import { MyBankPaymentComponent } from './my-bank-payment/my-bank-payment.component';
import { RequirePaymentComponent } from './require-payment/require-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent},
  { path: 'admin', component: AdminComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyInfoComponent,
    PaymentAreaComponent,
    AboutCompanyComponent,
    AnyBankPaymentComponent,
    MyBankPaymentComponent,
    RequirePaymentComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
