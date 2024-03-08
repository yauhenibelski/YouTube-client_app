import { type Routes } from '@angular/router';
import { ErrorPageComponent } from '../pages/error/error-page.component';
import { YoutubeContentListComponent } from '../pages/youtube/youtube-content-list.component';
import { userLoggedGuard } from './guards/user-logged.guard';

export const routes: Routes = [
    {
        path: 'youtube-list',
        component: YoutubeContentListComponent,
        canMatch: [userLoggedGuard],
    },

    {
        path: 'youtube-list/:id',
        canMatch: [userLoggedGuard],
        loadComponent: () =>
            import('../pages/youtube/components/detailed/detailed.component').then(
                m => m.DetailedComponent,
            ),
    },
    {
        path: 'login',
        loadComponent: () => import('../pages/auth/auth.component').then(m => m.AuthComponent),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'youtube-list',
    },
    { path: '**', component: ErrorPageComponent },
];
