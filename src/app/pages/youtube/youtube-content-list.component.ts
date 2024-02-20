import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { content as mockYouTubeContent } from '../../shared/content/content.mock';
import { Content } from '../../shared/content/content.interface';

@Component({
  selector: 'app-youtube-content-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './youtube-content-list.component.html',
  styleUrl: './youtube-content-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeContentListComponent {
  readonly youTubeContent = mockYouTubeContent;

  // eslint-disable-next-line class-methods-use-this
  trackById(_: number, content: Content): Content['id'] {
    return content.id;
  }
}
