import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {useEffect, useState} from 'react';

dayjs.extend(relativeTime);

const HOURS_TO_CLOSEDAY = 2;

export const useFinishDay = () => {
  const [isTimeToCloseDay, setCloseDay] = useState<boolean>(false);

  useEffect(() => {
    calculateTimeRemaining();
  }, []);

  const calculateTimeRemaining = () => {
    const tomorrow = dayjs().add(1, 'day').set('h', 0).set('m', 0).set('s', 0);
    const timeRemaining = dayjs().diff(tomorrow, 'h');
    return setCloseDay(Math.abs(timeRemaining) <= HOURS_TO_CLOSEDAY);
  };

  return {
    isTimeToCloseDay,
  };
};
