import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerComponent } from './auth/form-container/form-container.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { CalenderComponent } from './class/calender/calender.component';
import { ClassListComponent } from './class/class-list/class-list.component';
import { MyCoursesComponent } from './class/my-courses/my-courses.component';
import { TodoMatComponent } from './class/todo-mat/todo-mat.component';
import { LandingContainerComponent } from './landing/landing-container/landing-container.component';
import { TodoMainComponent } from './todo-list/todo-main/todo-main.component';

const routes: Routes = [
  {
    path: '',
    component: LandingContainerComponent,
  },
  {
    path: 'auth',
    component: FormContainerComponent,
    children: [
      {
        path: 'login',
        component: LoginFormComponent,
        pathMatch: 'full',
        data: { name: 'login' },
      },
      {
        path: 'signup',
        component: SignupFormComponent,
        pathMatch: 'full',
        data: { name: 'signup' },
      },
    ],
  },
  {
    path: 'class',
    component: ClassListComponent,
    children: [
      {
        path: 'mycourses',
        component: MyCoursesComponent,
      },
      {
        path: 'todo',
        component: TodoMatComponent,
      },
      {
        path: 'calender',
        component: CalenderComponent,
      },
    ],
  },

  {
    path: '**',
    component: LandingContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishRoutingModule {}
