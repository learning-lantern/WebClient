import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerComponent } from "./auth/form-container/form-container.component";
import { LoginFormComponent } from "./auth/login-form/login-form.component";
import { SignupFormComponent } from "./auth/signup-form/signup-form.component";
import { LandingContainerComponent } from "./landing/landing-container/landing-container.component";
import { AddTaskComponent } from './todo/add-task/add-task.component';
import { HomeComponent } from './todo/home/home.component';
import { NotFoundComponent } from './todo/not-found/not-found.component';
import { TaskComponent } from './todo/task/task.component';

const routes: Routes = [

  {
    path: '',
    component: LandingContainerComponent
  },
  {
    path: "auth",
    component: FormContainerComponent,
    children: [
      {
        path: "login",
        component: LoginFormComponent,
        pathMatch: "full",
        data: { name: "login" }
      },
      {
        path: "signup",
        component: SignupFormComponent,
        pathMatch: "full",
        data: { name: "signup" }
      }
    ]
  }
  ,
  {
    path: 'td', component: HomeComponent
  },
  { path: 'td/task', component: TaskComponent },
  { path: 'td/task/:id', component: TaskComponent },

  { path: 'td/add-task', component: AddTaskComponent },
  { path: 'not-found', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnglishRoutingModule { }
