import { ScheduleBlock } from '../../types/schedule';

export const tasks: ScheduleBlock[] = [
  {
    hour: '5:00',
    tasks: [
      {
        block: '1',
        title: 'React',
        description: 'Tarea de React',
        state: 'success',
      },

      {
        block: '2',
        title: 'React',
        description: 'Tarea de React',
        state: 'progress',
      },
    ],
    state: 'pending',
  },

  {
    hour: '6:00',
    tasks: [
      {
        block: '1',
        title: 'React',
        description: 'Tarea de React',
        state: 'pending',
      },

      {
        block: '2',
        title: 'React',
        description: 'Tarea de React',
        state: 'pending',
      },
    ],
    state: 'pending',
  },

  {
    hour: '7:00',
    tasks: [
      {
        block: '1',
        title: 'React',
        description: 'Tarea de React',
        state: 'pending',
      },

      {
        block: '2',
        title: 'React',
        description: 'Tarea de React',
        state: 'pending',
      },
    ],
    state: 'pending',
  },
];
