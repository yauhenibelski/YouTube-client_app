import { IconName } from '../icon-name.enum';

export const getNextIconName = (currentName: string | undefined) => {
  if (!currentName || currentName === IconName.empty) return IconName.arrowDown;
  if (currentName === IconName.arrowDown) return IconName.arrowUp;
  return IconName.empty;
};
