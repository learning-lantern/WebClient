import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArabicRoutingModule } from './arabic-routing.module';
import { ArabicComponent } from './arabic.component';
import { LandingContainerComponent } from './landing/landing-container/landing-container.component';
import { FooterComponent } from "./landing/footer/footer.component";
import { MainComponent } from "./landing/main/main.component";
import { HeaderComponent } from "./landing/header/header.component";



@NgModule({
  declarations: [
    ArabicComponent,
    LandingContainerComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ArabicRoutingModule
  ]
})
export class ArabicModule { }
