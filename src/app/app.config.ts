import { type ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './router/app.routes';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes, withPreloading(PreloadAllModules)), provideAnimationsAsync()],
};
