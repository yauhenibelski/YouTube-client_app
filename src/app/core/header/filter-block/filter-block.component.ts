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
import { FilterBlockService } from './services/filter-block.service';
import { Filter } from './filter-value.interface';
import { getDirection } from './utils/get-direction';

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

    constructor(
        private changeDetector: ChangeDetectorRef,
        public filterService: FilterBlockService,
    ) {}

    isShowBlock = false;

    changeFilterValueByDirection(currentIcon: MatIcon, filterBy: Filter['value']): void {
        if (this.icons) {
            const icons = this.icons.toArray();
            const nextIconName = getNextIconName(currentIcon.fontIcon);
            const direction = getDirection(nextIconName);

            currentIcon.fontIcon = nextIconName;

            icons.forEach(icon => {
                if (icon !== currentIcon) icon.fontIcon = IconName.empty;
            });

            this.filterService.value = {
                direction,
                value: direction ? filterBy : '',
            };
        }
    }

    changeFilterValueByWord(event: Event) {
        const input = event.target as HTMLInputElement;

        this.filterService.value = {
            word: input.value,
        };
    }

    showBlock(): void {
        this.isShowBlock = !this.isShowBlock;
        this.changeDetector.markForCheck();
    }
}
