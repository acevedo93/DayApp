import dayjs from 'dayjs';
import {Day, DayData} from '../models';
import {QuerySnapshotDay} from '../models';

export const DAY_FORMAT = 'ddd DD MMM';
export const dayAdapter = (data: QuerySnapshotDay): Day => {
  const day: DayData[] = [];
  const currentDateFormat = dayjs().format(DAY_FORMAT).toUpperCase();
  data.forEach(QS => {
    day.push(QS.data());
  });

  return {
    date: currentDateFormat,
    data: day,
  };
};
