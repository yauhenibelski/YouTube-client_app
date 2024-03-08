import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isLogged$ = new BehaviorSubject<boolean>(Boolean(document.cookie));

    get isLogged(): Observable<boolean> {
        return this.isLogged$.asObservable();
    }

    logIn(): void {
        document.cookie = 'userKey=someKey';
        this.isLogged$.next(true);
        this.router.navigateByUrl('/youtube-list');
    }

    logOut(): void {
        document.cookie = 'userKey=someKey; max-age=0';
        this.isLogged$.next(false);
        this.router.navigateByUrl('/login');
    }

    constructor(private router: Router) {}
}
