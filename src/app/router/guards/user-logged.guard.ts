import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../../pages/auth/services/auth.service';

export const userLoggedGuard: CanMatchFn = () => {
    const isUserLogged$ = inject(AuthService).isLogged;
    const urlTree = inject(Router).createUrlTree(['/login']);

    return isUserLogged$.pipe(map((value: boolean) => value || urlTree));
};
