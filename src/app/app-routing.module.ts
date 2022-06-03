import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helper/guard/auth.guard';
import { BaseComponent } from './view/layout/base/base.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./view/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path:'',
    component: BaseComponent,
    canActivate:[AuthGuard],
    children:[
     
      { path: 'dashboard', loadChildren: () => import('./view/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'personalinfo', loadChildren: () => import('./view/pages/golivepi/golivepi.module').then(m => m.GolivepiModule) },
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
    ]
  },
 

   
   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
