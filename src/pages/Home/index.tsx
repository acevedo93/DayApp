import { Container, Box, Text, Stack, HStack, VStack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../services/firebase/auth';
import { ScheduleBlock } from '../../types/schedule';
import { HourBlock } from './components/HourBlock';
import { NewDayButton } from './components/NewDayButton';
import { TodayDate } from './components/TodayDate';

const tasks: ScheduleBlock[] = [
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

export const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Container>
      <NewDayButton />
      <Box>
        <TodayDate />
        <Stack spacing="6">
          {tasks.map((scheduleBlock) => {
            return <HourBlock scheduleBlock={scheduleBlock} />;
          })}
        </Stack>
      </Box>
    </Container>
  );
};
