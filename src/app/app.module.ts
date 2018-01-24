import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {APP_ROUTES} from './app-routes';
import {DomainModule } from './domain';
import { AppComponent } from './app.component';
import { SemestersComponent } from './semesters/semesters.component';


@NgModule({
  declarations: [
    AppComponent,
    SemestersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: true }
    ),
    DomainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
