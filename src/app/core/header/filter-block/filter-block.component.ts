import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { getNextIconName } from './utils/get-next-icon-name';
import { IconName } from './icon-name.enum';

@Component({
    selector: 'app-filter-block',
    standalone: true,
    imports: [MatToolbarModule, MatIconModule, MatButtonModule],
    templateUrl: './filter-block.component.html',
    styleUrl: './filter-block.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBlockComponent {
    @ViewChildren(MatIcon) private icons: QueryList<MatIcon> | null = null;

    constructor(private changeDetector: ChangeDetectorRef) {}

    isShowBlock = false;

    changeFilterValue(currentIcon: MatIcon, filterBy: 'date' | 'views'): void {
        if (this.icons) {
            const icons = this.icons.toArray();
            currentIcon.fontIcon = getNextIconName(currentIcon.fontIcon);

            icons.forEach(icon => {
                if (icon !== currentIcon) icon.fontIcon = IconName.empty;
            });
        }

        // TODO: change filter value
        console.log(filterBy);
    }

    showBlock(): void {
        this.isShowBlock = !this.isShowBlock;
        this.changeDetector.markForCheck();
    }
}
