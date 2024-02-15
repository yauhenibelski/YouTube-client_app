import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sorting-block',
  standalone: true,
  imports: [],
  templateUrl: './sorting-block.component.html',
  styleUrl: './sorting-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortingBlockComponent {}
