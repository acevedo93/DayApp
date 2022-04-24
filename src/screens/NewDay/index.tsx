import React from 'react';
import {Box} from 'native-base';
import {DayContainer} from '../../components/DayContainer';

export const NewDayScreen = () => {
  return (
    <Box background="info.10" flex="1" px="4">
      <DayContainer isCreationMode={true} />
    </Box>
  );
};
