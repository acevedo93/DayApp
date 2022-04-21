import React, {useEffect} from 'react';
import {VStack, Text, Spinner} from 'native-base';
import {BlockHour} from '../BlockHour';
import {useDispatch, useSelector} from 'react-redux';
import {getDay} from '../../services/firebase/day';
import {daySelector} from '../../redux/slices/day.slice';
import {CustomSpinner} from '../Spinner';

export const DayContainer = () => {
  const dispatch = useDispatch();
  const day = useSelector(daySelector);

  useEffect(() => {
    dispatch(getDay());
  }, []);

  if (day.isLoading) {
    return <CustomSpinner />;
  }
  return (
    <VStack space="4">
      {!day.isLoading && day.data && (
        <>
          <Text mt="8" fontSize="2xl">
            {day.currentDate}
          </Text>
          {day.data.map(blockHour => {
            return <BlockHour data={blockHour} />;
          })}
        </>
      )}
    </VStack>
  );
};
