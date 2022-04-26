import dayjs from 'dayjs';
import {Day, DayData} from '../models';
import {QuerySnapshotDay} from '../models';
import {Task} from '../models/index';

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

export const taskFormatAdapter = (task1: string, task2: string): Task[] => {
  return [
    {
      title: '',
      description: task1,
      state: 'pending',
      type: task1.length ? 'work' : 'rest',
    },

    {
      title: '',
      description: task2,
      state: 'pending',
      type: task2.length ? 'work' : 'rest',
    },
  ];
};
