import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Content } from '../../../../shared/content/content.interface';
import { PaintBorderBottomDirective } from '../../directives/paint-border-bottom.directive';
import { StatisticsComponent } from '../statistics/statistics.component';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MatCardModule, PaintBorderBottomDirective, StatisticsComponent, RouterLink],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input({ required: true }) content: Content | null = null;
}
