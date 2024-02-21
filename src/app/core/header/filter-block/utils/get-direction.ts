import { Filter } from '../filter-value.interface';
import { IconName } from '../icon-name.enum';

export const getDirection = (iconName: IconName): Filter['direction'] => {
    if (iconName === IconName.arrowDown) return 'down';
    if (iconName === IconName.arrowUp) return 'up';
    return '';
};
