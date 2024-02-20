import { BorderColor } from '../colors.enum';

export const getColorByTime = (published: string): BorderColor => {
    const publishedData = new Date(published);
    const dataNow = new Date();

    const differ = {
        days: (Date.parse(dataNow.toDateString()) - Date.parse(published)) / 86400000,
        months:
            (dataNow.getUTCFullYear() - publishedData.getFullYear()) * 12 +
            (dataNow.getMonth() - publishedData.getMonth()),
    };

    if (differ.months > 6) return BorderColor.red;
    if (differ.months > 1) return BorderColor.yellow;
    if (differ.days < 7) return BorderColor.blue;
    return BorderColor.green;
};
