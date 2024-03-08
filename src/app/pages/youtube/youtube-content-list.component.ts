import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { Content } from '../../shared/content/content.interface';
import { ContentStoreService } from '../../shared/content/content-store.service';
import { FilterContentPipe } from './pipes/filter-content.pipe';
import { FilterBlockService } from '../../core/header/filter-block/services/filter-block.service';

@Component({
    selector: 'app-youtube-content-list',
    standalone: true,
    imports: [CardComponent, CommonModule, FilterContentPipe],
    templateUrl: './youtube-content-list.component.html',
    styleUrl: './youtube-content-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeContentListComponent implements OnInit {
    readonly youTubeContent$ = this.contentStoreService.contentList$;
    readonly filterValue$ = this.filterService.options$;

    constructor(
        private contentStoreService: ContentStoreService,
        private filterService: FilterBlockService,
    ) {}

    ngOnInit(): void {
        this.contentStoreService.loadContent();
    }

    trackById(_: number, content: Content): string {
        return content.id;
    }
}
