import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-youtube-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './youtube-list.component.html',
  styleUrl: './youtube-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeListComponent {}
