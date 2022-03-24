import { Container, Box, Stack, Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../services/firebase/auth';
import { getDay } from '../../services/firebase/days';
import { daySelector } from '../../store/selectors/daySelector';
import { HourBlock } from './components/HourBlock';
import { NewDayButton } from './components/NewDayButton';
import { TodayDate } from './components/TodayDate';

export const Home = () => {
  const dispatch = useDispatch();

  const day = useSelector(daySelector);

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
          {day.map((scheduleBlock) => {
            return <HourBlock scheduleBlock={scheduleBlock} />;
          })}
        </Stack>

        <Button onClick={handleLogout}>salir</Button>
      </Box>
    </Container>
  );
};
