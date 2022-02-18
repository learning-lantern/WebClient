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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoHeaderComponent } from './todo-list/todo-header/todo-header.component';
import { TodoMainComponent } from './todo-list/todo-main/todo-main.component';
import { TodoContainerComponent } from './todo-list/todo-container/todo-container.component';

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
    TodoHeaderComponent,
    TodoMainComponent,
    TodoContainerComponent,
  ],
  imports: [CommonModule,
     ArabicRoutingModule,
      ReactiveFormsModule,
      FormsModule,
    ],
})
export class ArabicModule {}
