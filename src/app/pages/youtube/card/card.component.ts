import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Content } from '../../../shared/content/content.interface';
import { PaintBorderBottomDirective } from './directives/paint-border-bottom.directive';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MatCardModule, MatIconModule, PaintBorderBottomDirective],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input({ required: true }) content: Content | null = null;
}
