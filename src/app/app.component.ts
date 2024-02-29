import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YoutubeContentListComponent } from './pages/youtube/youtube-content-list.component';
import { HeaderComponent } from './core/header/header.component';
import { DetailedComponent } from './pages/youtube/components/detailed/detailed.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, YoutubeContentListComponent, HeaderComponent, DetailedComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {}
