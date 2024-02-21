import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filter } from '../filter-value.interface';

@Injectable({
    providedIn: 'root',
})
export class FilterBlockService {
    private filterOptions$ = new BehaviorSubject<Filter>({ value: '', direction: '', word: '' });

    set options(newOptions: Partial<Filter>) {
        const newVal = { ...this.filterOptions$.value, ...newOptions };
        this.filterOptions$.next(newVal);
    }

    get options$(): Observable<Filter> {
        return this.filterOptions$.asObservable();
    }
}
