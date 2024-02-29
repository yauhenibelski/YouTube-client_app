import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ContentStatistics } from '../../../../shared/content/content.interface';

@Component({
    selector: 'app-statistics',
    standalone: true,
    imports: [MatIconModule],
    templateUrl: './statistics.component.html',
    styleUrl: './statistics.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent {
    @Input({ required: true }) statistics: ContentStatistics | null = null;
}
