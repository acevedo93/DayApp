import React, {useEffect} from 'react';
import {VStack, Text, FlatList} from 'native-base';
import {BlockHour} from '../BlockHour';
import {useDispatch, useSelector} from 'react-redux';
import {getDay} from '../../services/firebase/day';
import {daySelector} from '../../redux/slices/day.slice';
import {CustomSpinner} from '../Spinner';
import {DayData} from '../../models';
import {FadeInContainer} from '../FadeInContainer';

export const DayContainer = () => {
  const dispatch = useDispatch();
  const day = useSelector(daySelector);

  useEffect(() => {
    dispatch(getDay());
  }, []);

  const renderBlockhour = (itemList: {item: DayData}) => (
    <BlockHour data={itemList.item} />
  );

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
          <FadeInContainer>
            <FlatList data={day.data} renderItem={renderBlockhour} />
          </FadeInContainer>
        </>
      )}
    </VStack>
  );
};
