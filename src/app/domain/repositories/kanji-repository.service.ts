import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kanji } from '../models/kanji';
import { KanjiList } from '../models/kanji-list';

@Injectable()
export class KanjiRepository {
    protected endpoint = 'api/kanji';

    constructor(
        protected httpClient: HttpClient
    ) {}

    public getAll(): Observable<KanjiList[]> {
        return this.httpClient.get<KanjiList[]>(this.endpoint);
    }
    public getByChapter(chapter: string): Observable<KanjiList> {
        return this.httpClient.get<KanjiList>(`${this.endpoint}/?chapter=${chapter}`);
    }
    protected handleException(exception: any) {
        const message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
        alert(message);
        return Observable.throw(message);
    }
}
