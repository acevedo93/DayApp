import dayjs from 'dayjs';
import {Day, DayData} from '../models';
import {QuerySnapshotDay} from '../models';

export const dayAdapter = (data: QuerySnapshotDay): Day => {
  const day: DayData[] = [];
  const currentDateFormat = dayjs().format('dddd, DD/MMM');
  data.forEach(QS => {
    day.push(QS.data());
  });

  return {
    date: currentDateFormat,
    data: day,
  };
};
