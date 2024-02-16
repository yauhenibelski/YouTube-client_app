import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-filter-block',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './filter-block.component.html',
  styleUrl: './filter-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBlockComponent {
  isShowBlock = true;

  constructor(private changeDetector: ChangeDetectorRef) {}

  showBlock() {
    this.isShowBlock = !this.isShowBlock;
    this.changeDetector.markForCheck();
  }
}
