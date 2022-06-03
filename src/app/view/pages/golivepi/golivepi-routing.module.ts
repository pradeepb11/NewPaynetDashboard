import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GolivepiComponent } from './golivepi.component';

const routes: Routes = [{ path: '', component: GolivepiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GolivepiRoutingModule { }
