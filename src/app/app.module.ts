import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './en/landing/header/header.component';
import { MainComponent } from './en/landing/main/main.component';
import { FooterComponent } from './en/landing/footer/footer.component';
import { HeaderArComponent } from './AR/landing/header-ar/header-ar.component';
import { MainArComponent } from './AR/landing/main-ar/main-ar.component';
import { FooterArComponent } from './AR/landing/footer-ar/footer-ar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
 HeaderArComponent,
    MainArComponent,
    FooterArComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
