import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { content } from '../../shared/content/content.mock';

@Component({
  selector: 'app-youtube-content-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './youtube-content-list.component.html',
  styleUrl: './youtube-content-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeContentListComponent {
  readonly youTubeContent = content;
}
