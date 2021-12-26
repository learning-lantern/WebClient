import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnglishRoutingModule } from './english-routing.module';
import { EnglishComponent } from './english.component';
import { LandingContainerComponent } from './landing/landing-container/landing-container.component';
import { HeaderComponent } from './landing/header/header.component';
import { MainComponent } from './landing/main/main.component';
import { FooterComponent } from './landing/footer/footer.component';


@NgModule({
  declarations: [
    EnglishComponent,
    LandingContainerComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    EnglishRoutingModule
  ]
})
export class EnglishModule { }
