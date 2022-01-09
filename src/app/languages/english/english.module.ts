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
import { ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from './todo/home/home.component';
import { AddTaskComponent } from './todo/add-task/add-task.component';
import { TaskComponent } from './todo/task/task.component';
import { NotFoundComponent } from './todo/not-found/not-found.component';



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
    HomeComponent,
    AddTaskComponent,
    TaskComponent,
    NotFoundComponent

  ],
  imports: [
    CommonModule,
    EnglishRoutingModule,
    ReactiveFormsModule
  ]
})
export class EnglishModule { }
