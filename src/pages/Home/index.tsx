import { Container, Box, Stack, Button, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../services/firebase/auth';
import { getDay } from '../../services/firebase/days';
import {
  dayLoadingSelector,
  daySelector,
} from '../../store/selectors/daySelector';
import { HourBlock } from './components/HourBlock';
import { NewDayButton } from './components/NewDayButton';
import { TodayDate } from './components/TodayDate';

export const Home = () => {
  const dispatch = useDispatch();

  const day = useSelector(daySelector);
  const loading = useSelector(dayLoadingSelector);

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
        {loading && (
          <Spinner
            mt="6"
            mb="6"
            color="accent.200"
            size="xl"
            alignSelf="center"
          />
        )}
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
