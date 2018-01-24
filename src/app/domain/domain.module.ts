import { NgModule } from '@angular/core';
import { MockApi } from './mock-api.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SemesterRepository } from './repositories/semester-repository.service';
@NgModule({
  imports: [
    HttpClientModule,
    InMemoryWebApiModule.forFeature(MockApi)
  ],
  providers: [
      SemesterRepository
  ]
})
export class DomainModule { }
