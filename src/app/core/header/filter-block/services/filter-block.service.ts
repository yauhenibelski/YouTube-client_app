import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filter } from '../filter-value.interface';

@Injectable({
    providedIn: 'root',
})
export class FilterBlockService {
    private value$ = new BehaviorSubject<Filter>({ value: '', direction: '', word: '' });

    set value(value: Partial<Filter>) {
        const newVal = { ...this.value$.value, ...value };
        this.value$.next(newVal);
    }

    get value(): Observable<Filter> {
        return this.value$.asObservable();
    }
}
