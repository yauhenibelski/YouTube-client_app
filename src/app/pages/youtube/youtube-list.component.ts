import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { content } from '../../shared/content/content.mock';

@Component({
  selector: 'app-youtube-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './youtube-list.component.html',
  styleUrl: './youtube-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeListComponent {
  readonly youTubeContent = content;
}
