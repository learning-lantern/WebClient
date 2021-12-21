import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './en/landing/header/header.component';
import { MainComponent } from './en/landing/main/main.component';
import { FooterComponent } from './en/landing/footer/footer.component';
import { FormContainerComponent } from './en/auth/form-container/form-container.component';
import { LoginComponent } from './en/auth/login/login.component';
import { SignupComponent } from './en/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    FormContainerComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
