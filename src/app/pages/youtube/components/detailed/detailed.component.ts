import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { content } from '../../../../shared/content/content.mock';
import { PaintBorderBottomDirective } from '../../directives/paint-border-bottom.directive';
import { StatisticsComponent } from '../statistics/statistics.component';

@Component({
    selector: 'app-detailed',
    standalone: true,
    imports: [
        MatCardModule,
        PaintBorderBottomDirective,
        StatisticsComponent,
        MatButtonModule,
        MatIconModule,
    ],
    templateUrl: './detailed.component.html',
    styleUrl: './detailed.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedComponent {
    readonly content = content[4];

    readonly data = new Date(this.content.snippet.publishedAt);
}
