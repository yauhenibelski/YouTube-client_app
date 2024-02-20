import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterBlockComponent } from './filter-block/filter-block.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        FilterBlockComponent,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
