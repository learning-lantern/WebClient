import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingContainerComponent } from "./landing/landing-container/landing-container.component";
import { AddTaskComponent } from './todo/add-task/add-task.component';
import { HomeComponent } from './todo/home/home.component';
import { NotFoundComponent } from './todo/not-found/not-found.component';
import { TaskComponent } from './todo/task/task.component';

const routes: Routes = [
  { path: '', component: LandingContainerComponent },
  {path:'td',component:HomeComponent,
  children:[
    {path:'task',component:TaskComponent},
    {path:'task/:id',component:TaskComponent},
  ]},
  {path:'add-task',component:AddTaskComponent},
  {path:'not-found',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnglishRoutingModule { }
