import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/material/material.module';
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
import { ClassListComponent } from './class/class-list/class-list.component';
import { MyCoursesComponent } from './class/my-courses/my-courses.component';
import { CalenderComponent } from './class/calender/calender.component';
import { TodoMatComponent } from './class/todo-mat/todo-mat.component';
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
    ClassListComponent,
    MyCoursesComponent,
    CalenderComponent,
    TodoMatComponent,
    TodoMainComponent,
  ],
  imports: [
    CommonModule,
    EnglishRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
})
export class EnglishModule {}
