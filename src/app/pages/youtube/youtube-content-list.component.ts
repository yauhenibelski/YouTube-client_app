import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { Content } from '../../shared/content/content.interface';
import { ContentStoreService } from '../../shared/content/content-store.service';

@Component({
    selector: 'app-youtube-content-list',
    standalone: true,
    imports: [CardComponent, CommonModule],
    templateUrl: './youtube-content-list.component.html',
    styleUrl: './youtube-content-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeContentListComponent implements OnInit {
    readonly youTubeContent$ = this.contentStoreService.content$;

    constructor(private contentStoreService: ContentStoreService) {}

    ngOnInit(): void {
        this.contentStoreService.loadContent();
    }

    // eslint-disable-next-line class-methods-use-this
    trackById(_: number, content: Content): Content['id'] {
        return content.id;
    }
}
