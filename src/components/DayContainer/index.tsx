import React, {useEffect, useState} from 'react';
import {VStack, Text, FlatList, Button, Box} from 'native-base';
import {BlockHour} from '../BlockHour';
import {useDispatch, useSelector} from 'react-redux';
import {getDay} from '../../services/firebase/day';
import {daySelector} from '../../redux/slices/day.slice';
import {CustomSpinner} from '../Spinner';
import {DayData, generateSkeletonForNewDay} from '../../models';
import {FadeInContainer} from '../FadeInContainer';
import {SetEditBlockHour} from '../Modals/SetEditBlockHour';
import {find} from 'lodash';

interface Props {
  isCreationMode?: boolean;
}

export const DayContainer = ({isCreationMode = false}: Props) => {
  const dispatch = useDispatch();
  const {isLoading, data, currentDate} = useSelector(daySelector);
  const [daySkeleton, setSkeletonDay] = useState<DayData[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [blockHourInModal, setBlockHourInModal] = useState<DayData>({
    hour: '',
    date: '',
    tasks: [],
    state: 'pending',
  });

  useEffect(() => {
    checkCreationMode();
  }, []);

  const handleOpenModal = (blockHour: DayData) => {
    if (!isCreationMode) {
      return null;
    }
    setShowModal(!showModal);
    setBlockHourInModal(blockHour);
  };
  const setBlockHour = (blockHour: DayData) => {
    let skeletonDayCopy = [...daySkeleton];
    const skeletonDayWithNewBlockHour = skeletonDayCopy.map(elem =>
      elem.hour === blockHour.hour ? blockHour : elem,
    );
    setSkeletonDay(skeletonDayWithNewBlockHour);
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

  const saveData = () => {
    //dispatch new Day to server
  };

  if (isLoading) {
    return <CustomSpinner />;
  }
  console.log(daySkeleton);

  return (
    <VStack space="4">
      <>
        <Box flexDir="row" alignItems="center" justifyContent="space-between">
          <Text mt="8" fontSize="2xl">
            {currentDate}
          </Text>{' '}
          {isCreationMode && (
            <Button
              mt="10"
              backgroundColor={'secondary.200'}
              onPress={saveData}>
              Guardar
            </Button>
          )}
        </Box>
        <FadeInContainer>
          <FlatList
            data={isCreationMode ? daySkeleton : data}
            renderItem={renderBlockhour}
          />
        </FadeInContainer>
      </>

      {isCreationMode && (
        <SetEditBlockHour
          sendData={setBlockHour}
          data={blockHourInModal}
          showModal={showModal}
          setShowModal={close => setShowModal(close)}
        />
      )}
    </VStack>
  );
};
