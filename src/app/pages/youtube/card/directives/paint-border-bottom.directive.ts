import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { getColorByTime } from './utils/get-color-by-time';

@Directive({
  selector: '[appPaintBorderBottom]',
  standalone: true,
})
export class PaintBorderBottomDirective {
  @Input({ required: true }) set appPaintBorderBottom(publishedData: string | null) {
    if (publishedData) {
      this.renderer.addClass(this.element.nativeElement, getColorByTime(publishedData));
    }
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}
}
