import React from 'react';
import {Box, Heading, Center, Pressable} from 'native-base';
import {DayContainer} from '../../components/DayContainer';
import {useFinishDay} from '../../hooks/useFinishDay';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setCreationMode} from '../../redux/slices/day.slice';

export const HomeScreen = () => {
  const {isTimeToCloseDay} = useFinishDay();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goToNweDay = () => {
    dispatch(setCreationMode());
    navigation.navigate('newDay');
  };

  return (
    <Box background="info.10" flex="1" px="4">
      {!isTimeToCloseDay && (
        <Pressable onPress={goToNweDay}>
          <Center
            mt="10%"
            width="100%"
            rounded="lg"
            height="60"
            background="info.25"
            alignItems="center"
            borderWidth="1"
            borderColor="info.300"
            borderStyle="dashed">
            <Heading color="info.200">Planear Nuevo dia</Heading>
          </Center>
        </Pressable>
      )}

      <DayContainer />
    </Box>
  );
};
