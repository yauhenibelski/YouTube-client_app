import { Directive, HostBinding, Input } from '@angular/core';
import { getColorByTime } from './utils/get-color-by-time';

@Directive({
    selector: '[appPaintBorderBottom]',
    standalone: true,
})
export class PaintBorderBottomDirective {
    @Input({ required: true }) appPaintBorderBottom: string | null = null;

    @HostBinding('style') get style() {
        const color = this.appPaintBorderBottom
            ? getColorByTime(this.appPaintBorderBottom)
            : 'none';

        return {
            'border-bottom': 'solid 3px',
            'border-bottom-color': color,
        };
    }
}
