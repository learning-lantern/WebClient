import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "en", pathMatch: "full" },
  { path: 'ar', loadChildren: () => import('./languages/arabic/arabic.module').then(m => m.ArabicModule) },
  { path: 'en', loadChildren: () => import('./languages/english/english.module').then(m => m.EnglishModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
