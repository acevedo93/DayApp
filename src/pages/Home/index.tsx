import { Container, Box, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../services/firebase/auth';
import { getDay } from '../../services/firebase/days';
import { HourBlock } from './components/HourBlock';
import { NewDayButton } from './components/NewDayButton';
import { TodayDate } from './components/TodayDate';

import { tasks } from './data';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDay());
  }, []);
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
