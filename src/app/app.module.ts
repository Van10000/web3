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
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { AdminCardPaymentComponent } from './admin-card-payment/admin-card-payment.component';
import { AdminRequestPaymentComponent } from './admin-request-payment/admin-request-payment.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent},
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
    AdminComponent,
    MainComponent,
    AdminCardPaymentComponent,
    AdminRequestPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
