import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { EnglishRoutingModule } from './english-routing.module';
import { EnglishComponent } from './english.component';
import { LandingContainerComponent } from './landing/landing-container/landing-container.component';
import { HeaderComponent } from './landing/header/header.component';
import { MainComponent } from './landing/main/main.component';
import { FooterComponent } from './landing/footer/footer.component';
import { FormContainerComponent } from './auth/form-container/form-container.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './classroom-list/classroom/chat/chat.component';
import { TodoContainerComponent } from './todo-list/todo-container/todo-container.component';
import { TodoHeaderComponent } from './todo-list/todo-header/todo-header.component';
import { TodoFooterComponent } from './todo-list/todo-footer/todo-footer.component';
import { TodoMainComponent } from './todo-list/todo-main/todo-main.component';

@NgModule({
  declarations: [
    EnglishComponent,
    LandingContainerComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    FormContainerComponent,
    LoginFormComponent,
    SignupFormComponent,
    ChatComponent,
    TodoContainerComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoMainComponent,
  ],
  imports: [
    CommonModule,
    EnglishRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class EnglishModule {}
