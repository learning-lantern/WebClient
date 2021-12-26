import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArabicRoutingModule } from './arabic-routing.module';
import { ArabicComponent } from './arabic.component';
import { LandingContainerComponent } from './landing/landing-container/landing-container.component';


@NgModule({
  declarations: [
    ArabicComponent,
    LandingContainerComponent
  ],
  imports: [
    CommonModule,
    ArabicRoutingModule
  ]
})
export class ArabicModule { }
