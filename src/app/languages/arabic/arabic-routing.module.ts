import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingContainerComponent } from "./landing/landing-container/landing-container.component";

const routes: Routes = [
  {
    path: '',
    component: LandingContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArabicRoutingModule { }
