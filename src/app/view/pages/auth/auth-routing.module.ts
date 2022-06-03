import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { GoliveComponent } from './golive/golive.component';
import { LoginComponent } from './login/login.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { 
    path: '', 
    component: AuthComponent ,
    children:[
      {
        path:'',
        redirectTo:'login',
        pathMatch: 'full'
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'register',
        component: RegisterComponent
      },
      {
        path:'forgotpassword',
        component: ForgotpasswordComponent
      },
      {
        path:'otpverification',
        component: OtpverificationComponent
      },
      {
        path:'golive',
        component: GoliveComponent      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
