import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTES} from './app-routes';
import { DomainModule } from './domain';
import { AppComponent } from './app.component';
import { SemestersComponent } from './semesters/semesters.component';
import { JapaneseStudyComponent } from './japanese-study/japanese-study.component';


@NgModule({
  declarations: [
    AppComponent,
    SemestersComponent,
    JapaneseStudyComponent
  ],
  imports: [
    BrowserModule,
    DomainModule,
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
