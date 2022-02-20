import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerComponent } from './auth/form-container/form-container.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { LandingContainerComponent } from './landing/landing-container/landing-container.component';
import { TodoContainerComponent } from './todo-list/todo-container/todo-container.component';

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
    path: 'to-do',
    component: TodoContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArabicRoutingModule {}
