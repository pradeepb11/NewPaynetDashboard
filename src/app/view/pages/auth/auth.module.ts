import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { StrengthMeterModule } from "ngx-strength-meter";
import { GoliveComponent } from './golive/golive.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    OtpverificationComponent,
    GoliveComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StrengthMeterModule
  ]
})
export class AuthModule { }
