import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export type HourState = 'progress' | 'pending' | 'success';
export type TypeTask = 'work' | 'rest';

export interface DayData {
  date: string;
  hour: string;
  state: HourState;
  tasks: Task[];
}

export interface Day {
  date: string;
  data: DayData[];
}

export interface Task {
  title: string;
  state: HourState;
  type: TypeTask;
  description: string;
}

export type QuerySnapshotDay = FirebaseFirestoreTypes.QuerySnapshot<DayData>;

export type GetDayResponseService = QuerySnapshotDay | undefined;

//initial config for new Day

export const generateSkeletonForNewDay = (): DayData[] => {
  const startAt = 5;
  const endsAt = 22;

  const hourSkeleton: DayData = {
    date: '23-4-3',
    hour: `${startAt}:00`,
    state: 'pending',
    tasks: [
      {
        title: '',
        description: '',
        state: 'pending',
        type: 'work',
      },

      {
        title: '',
        description: '',
        state: 'pending',
        type: 'work',
      },
    ],
  };
  const blockDay: DayData[] = [];

  for (let i = startAt; i <= endsAt; i++) {
    blockDay.push({
      ...hourSkeleton,
      hour: `${i}:00`,
    });
  }

  return blockDay;
};
