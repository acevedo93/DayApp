import React, {useEffect, useState} from 'react';
import {VStack, Text, FlatList} from 'native-base';
import {BlockHour} from '../BlockHour';
import {useDispatch, useSelector} from 'react-redux';
import {getDay} from '../../services/firebase/day';
import {daySelector} from '../../redux/slices/day.slice';
import {CustomSpinner} from '../Spinner';
import {DayData, generateSkeletonForNewDay} from '../../models';
import {FadeInContainer} from '../FadeInContainer';
import {SetEditBlockHour} from '../Modals/SetEditBlockHour';

interface Props {
  isCreationMode?: boolean;
}

export const DayContainer = ({isCreationMode = false}: Props) => {
  const dispatch = useDispatch();
  const {isLoading, data, currentDate} = useSelector(daySelector);
  const [daySkeleton, setSkeletonDay] = useState<DayData[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    checkCreationMode();
  }, []);

  const handleOpenModal = () => {
    if (!isCreationMode) {
      return null;
    }
    setShowModal(!showModal);
  };

  const renderBlockhour = (itemList: {item: DayData}) => (
    <BlockHour
      onPress={handleOpenModal}
      isCreationMode={isCreationMode}
      data={itemList.item}
    />
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

      {isCreationMode && (
        <SetEditBlockHour
          showModal={showModal}
          setShowModal={close => setShowModal(close)}
        />
      )}
    </VStack>
  );
};
