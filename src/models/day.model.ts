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
