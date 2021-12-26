import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArabicComponent } from './arabic.component';

const routes: Routes = [{ path: '', component: ArabicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArabicRoutingModule { }
