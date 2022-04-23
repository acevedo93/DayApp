import React, {useEffect, useState} from 'react';
import {Box, Text} from 'native-base';
import {useDispatch} from 'react-redux';
import {setCreationMode} from '../../redux/slices/day.slice';
import {DayContainer} from '../../components/DayContainer';

export const NewDayScreen = () => {
  return (
    <Box background="info.10" flex="1" px="4">
      <DayContainer />
    </Box>
  );
};
