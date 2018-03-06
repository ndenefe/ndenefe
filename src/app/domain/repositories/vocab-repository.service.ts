import { JapanVocab } from '../models/japan-vocab';
import { VocabList } from '../models/vocab-list';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VocabRepository {
    protected endpoint = 'api/vocabulary';

    constructor(
        protected httpClient: HttpClient
    ) {}

    public getAll(): Observable<VocabList[]> {
        return this.httpClient.get<VocabList[]>(this.endpoint);
    }
    public getByChapter(chapter: string): Observable<VocabList> {
        return this.httpClient.get<VocabList>(`${this.endpoint}/?chapter=${chapter}`);
    }
    protected handleException(exception: any) {
        const message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
        alert(message);
        return Observable.throw(message);
    }
}
