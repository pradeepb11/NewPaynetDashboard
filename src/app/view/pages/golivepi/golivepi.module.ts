import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GolivepiRoutingModule } from './golivepi-routing.module';
import { GolivepiComponent } from './golivepi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    GolivepiComponent
  ],
  imports: [
    CommonModule,
    GolivepiRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ArchwizardModule,
    NgbModule
    
  ]
})
export class GolivepiModule { }
