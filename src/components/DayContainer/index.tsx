import React, {useEffect} from 'react';
import {VStack, Text} from 'native-base';
import {BlockHour} from '../BlockHour';
import {useDispatch, useSelector} from 'react-redux';
import {getDay} from '../../services/firebase/day';
import {daySelector} from '../../redux/slices/day.slice';

export const DayContainer = () => {
  const dispatch = useDispatch();
  const day = useSelector(daySelector);

  useEffect(() => {
    dispatch(getDay());
  }, []);

  return (
    <VStack space="4">
      <Text mt="8" fontSize="2xl">
        {day.currentDate}
      </Text>
      {day.data.map(blockHour => {
        return <BlockHour data={blockHour} />;
      })}
    </VStack>
  );
};
