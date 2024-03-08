import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaintBorderBottomDirective } from '../../directives/paint-border-bottom.directive';
import { StatisticsComponent } from '../statistics/statistics.component';
import { ContentStoreService } from '../../../../shared/content/content-store.service';

@Component({
    selector: 'app-detailed',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        PaintBorderBottomDirective,
        MatProgressSpinnerModule,
        StatisticsComponent,
        MatButtonModule,
        MatIconModule,
        RouterLink,
    ],
    templateUrl: './detailed.component.html',
    styleUrl: './detailed.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedComponent {
    private readonly activatedRoute$ = inject(ActivatedRoute);
    private readonly contentStoreService = inject(ContentStoreService);

    readonly content$ = this.activatedRoute$.paramMap.pipe(
        map(paramMap => paramMap.get('id')),
        tap(contentID => {
            this.contentStoreService.loadContentByID(contentID);
        }),
        switchMap(() => this.contentStoreService.currentContent$),
    );

    getDate(date: string): string {
        return new Date(date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
        });
    }
}
