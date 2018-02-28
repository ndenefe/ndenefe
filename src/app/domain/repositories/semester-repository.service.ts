import { Course } from '../models/course';
import { CourseList } from '../models/course-list';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SemesterRepository {
    protected endpoint = 'api/semesters';

    constructor(
        protected httpClient: HttpClient
    ) {}

    public getAll(): Observable<CourseList[]> {
        return this.httpClient.get<CourseList[]>(this.endpoint).catch(x => this.handleException(x));
    }
    public getBySemester(semester: string): Observable<CourseList> {
        return this.httpClient.get<CourseList>(`${this.endpoint}/${semester}`)
        .catch( x => this.handleException(x) );
    }
    protected handleException(exception: any) {
        const message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
        alert(message);
        return Observable.throw(message);
    }
}
