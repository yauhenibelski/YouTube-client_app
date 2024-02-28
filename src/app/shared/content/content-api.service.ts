import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { content } from './content.mock';
import { Content } from './content.interface';

@Injectable({
    providedIn: 'root',
})
export class ContentApiService {
    // eslint-disable-next-line class-methods-use-this
    getContent(): Observable<Content[]> {
        return of(content);
    }
}
