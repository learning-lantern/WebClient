import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArabicRoutingModule } from './arabic-routing.module';
import { ArabicComponent } from './arabic.component';
import { LandingContainerComponent } from './landing/landing-container/landing-container.component';
import { FooterComponent } from "./landing/footer/footer.component";
import { MainComponent } from "./landing/main/main.component";
import { HeaderComponent } from "./landing/header/header.component";
import { HomeComponent } from './todo/home/home.component';
import { AddTaskComponent } from './todo/add-task/add-task.component';
import { TaskComponent } from './todo/task/task.component';
import { NotFoundComponent } from './todo/not-found/not-found.component';



@NgModule({
  declarations: [
    ArabicComponent,
    LandingContainerComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    HomeComponent,
    AddTaskComponent,
    TaskComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ArabicRoutingModule
  ]
})
export class ArabicModule { }
