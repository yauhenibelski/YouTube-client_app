import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Content } from './content.interface';
import { ContentApiService } from './content-api.service';

@Injectable({
    providedIn: 'root',
})
export class ContentStoreService {
    private readonly contentStore$ = new BehaviorSubject<Content[] | null>(null);
    private readonly currentContentData$ = new BehaviorSubject<Content | null>(null);

    private readonly contentApi = inject(ContentApiService);

    private activeLoadContentStoreSubscription: Subscription | null = null;
    private activeLoadCurrentContentSubscription: Subscription | null = null;

    readonly contentList$ = this.contentStore$.asObservable();
    readonly currentContent$ = this.currentContentData$.asObservable();

    loadContent(): void {
        if (this.activeLoadContentStoreSubscription) {
            this.activeLoadContentStoreSubscription.unsubscribe();
        }

        this.contentStore$.next(null);

        this.activeLoadContentStoreSubscription = this.contentApi
            .getContent()
            .subscribe(content => {
                this.contentStore$.next(content);
            });
    }

    loadContentByID(id: string | null): void {
        if (!id) return;

        if (this.activeLoadCurrentContentSubscription) {
            this.activeLoadCurrentContentSubscription.unsubscribe();
        }

        this.currentContentData$.next(null);

        this.activeLoadCurrentContentSubscription = this.contentApi
            .getContentByID(id)
            .subscribe(content => {
                this.currentContentData$.next(content);
            });
    }
}
