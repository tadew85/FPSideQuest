import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnboardComponent } from './main/onboard/onboard.component';
import { MainComponent } from './main/main.component';

import { EmailComponent } from './main/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardComponent,
    MainComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
