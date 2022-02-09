import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArabicRoutingModule } from './arabic-routing.module';
import { ArabicComponent } from './arabic.component';
import { LandingContainerComponent } from './landing/landing-container/landing-container.component';
import { FooterComponent } from './landing/footer/footer.component';
import { MainComponent } from './landing/main/main.component';
import { HeaderComponent } from './landing/header/header.component';
import { FormContainerComponent } from './auth/form-container/form-container.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArabicComponent,
    LandingContainerComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    FormContainerComponent,
    LoginFormComponent,
    SignupFormComponent,
  ],
  imports: [CommonModule, ArabicRoutingModule, ReactiveFormsModule],
})
export class ArabicModule {}
