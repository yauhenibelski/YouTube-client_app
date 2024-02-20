import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Content } from './content.interface';
import { ContentApiService } from './content-api.service';

@Injectable({
    providedIn: 'root',
})
export class ContentStoreService {
    private contentStore$ = new BehaviorSubject<Content[] | null>(null);

    constructor(private contentApi: ContentApiService) {}

    get content$(): Observable<Content[] | null> {
        return this.contentStore$.asObservable();
    }

    loadContent(): void {
        this.contentApi.getContent().subscribe(content => {
            this.contentStore$.next(content);
        });
    }
}
