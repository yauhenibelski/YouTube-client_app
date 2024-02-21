import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../../../shared/content/content.interface';
import { Filter } from '../../../core/header/filter-block/filter-value.interface';

@Pipe({
    name: 'filterContent',
    standalone: true,
})
export class FilterContentPipe implements PipeTransform {
    transform(content: Content[] | null, filter: Filter | null): Content[] | null {
        let sorted = content ? [...content] : [];

        if (filter?.word) {
            sorted = sorted.filter((c: Content) =>
                c.snippet.title.toLowerCase().includes(filter.word.toLocaleLowerCase()),
            );
        }

        if (filter?.value) {
            const sortByIncrease = (a: Content, b: Content) => {
                return filter.value === 'date'
                    ? Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt)
                    : +a.statistics.viewCount - +b.statistics.viewCount;
            };

            const sortByDecrease = (a: Content, b: Content) => {
                return filter.value === 'date'
                    ? Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt)
                    : +b.statistics.viewCount - +a.statistics.viewCount;
            };

            if (filter.direction) {
                // eslint-disable-next-line no-return-assign
                return filter.direction === 'up'
                    ? (sorted = sorted.sort(sortByDecrease))
                    : (sorted = sorted.sort(sortByIncrease));
            }
        }

        return content ? sorted : content;
    }
}
