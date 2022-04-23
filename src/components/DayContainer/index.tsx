import React, {useEffect, useState} from 'react';
import {VStack, Text, FlatList} from 'native-base';
import {BlockHour} from '../BlockHour';
import {useDispatch, useSelector} from 'react-redux';
import {getDay} from '../../services/firebase/day';
import {daySelector} from '../../redux/slices/day.slice';
import {CustomSpinner} from '../Spinner';
import {DayData, generateSkeletonForNewDay} from '../../models';
import {FadeInContainer} from '../FadeInContainer';

export const DayContainer = () => {
  const dispatch = useDispatch();
  const {isCreationMode, isLoading, data, currentDate} =
    useSelector(daySelector);
  const [daySkeleton, setSkeletonDay] = useState<DayData[]>([]);

  useEffect(() => {
    checkCreationMode();
  }, []);

  const renderBlockhour = (itemList: {item: DayData}) => (
    <BlockHour isCreationMode={isCreationMode} data={itemList.item} />
  );

  const checkCreationMode = () => {
    return isCreationMode
      ? setSkeletonDay(generateSkeletonForNewDay())
      : dispatch(getDay());
  };

  if (isLoading) {
    return <CustomSpinner />;
  }

  return (
    <VStack space="4">
      <>
        <Text mt="8" fontSize="2xl">
          {currentDate}
        </Text>
        <FadeInContainer>
          <FlatList
            data={isCreationMode ? daySkeleton : data}
            renderItem={renderBlockhour}
          />
        </FadeInContainer>
      </>
    </VStack>
  );
};
