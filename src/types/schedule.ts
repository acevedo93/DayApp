export interface ScheduleBlock {
  hour: string;
  tasks: Task[];
  state: State;
}

export interface Task {
  block: Block;
  title: string;
  description: string;
  state: State;
}

export type Block = '1' | '2';

export type State = 'success' | 'pending' | 'progress';
