import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishRoutingModule } from './english-routing.module';
import { EnglishComponent } from './english.component';
import { LandingContainerComponent } from './landing/landing-container/landing-container.component';
import { HeaderComponent } from './landing/header/header.component';
import { MainComponent } from './landing/main/main.component';
import { FooterComponent } from './landing/footer/footer.component';
import { HomeComponent } from './todo/home/home.component';
import { AddTaskComponent } from './todo/add-task/add-task.component';
import { TaskComponent } from './todo/task/task.component';
import { NotFoundComponent } from './todo/not-found/not-found.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnglishComponent,
    LandingContainerComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    AddTaskComponent,
    TaskComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    EnglishRoutingModule,
    FormsModule
  ]
})
export class EnglishModule { }
