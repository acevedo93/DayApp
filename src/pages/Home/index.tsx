import { Container, Box, Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../services/firebase/auth';
import { HourBlock } from './components/HourBlock';
import { NewDayButton } from './components/NewDayButton';
import { TodayDate } from './components/TodayDate';

import { tasks } from './data';

export const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Container>
      <NewDayButton />
      <Box>
        <Stack spacing="6">
          <TodayDate />
          {tasks.map((scheduleBlock) => {
            return <HourBlock scheduleBlock={scheduleBlock} />;
          })}
        </Stack>
      </Box>
    </Container>
  );
};
