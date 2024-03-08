import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { content } from './content.mock';
import { Content } from './content.interface';

@Injectable({
    providedIn: 'root',
})
export class ContentApiService {
    getContent(): Observable<Content[]> {
        return of(content);
    }

    getContentByID(ID: string): Observable<Content | null> {
        const currentContent = content.find(({ id }) => id === ID);

        return of(currentContent || null);
    }
}
