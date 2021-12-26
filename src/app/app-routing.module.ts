import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingContainerComponentArabic } from './AR/landing/landing-container/landing-container.component';
import { LoginComponent } from "./en/auth/login/login.component";
import { SignupComponent } from "./en/auth/signup/signup.component";
import { LandingContainerComponent } from "./en/landing/landing-container/landing-container.component";

const routes: Routes = [
  { path: 'ar', loadChildren: () => import('./languages/arabic/arabic.module').then(m => m.ArabicModule) },
  { path: 'en', loadChildren: () => import('./languages/english/english.module').then(m => m.EnglishModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
