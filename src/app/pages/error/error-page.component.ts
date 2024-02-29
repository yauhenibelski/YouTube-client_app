import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-error-page',
    standalone: true,
    imports: [MatIconModule],
    templateUrl: './error-page.component.html',
    styleUrl: './error-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPageComponent {}
