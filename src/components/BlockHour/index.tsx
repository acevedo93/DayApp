import React from 'react';
import {HStack, Text, VStack, Pressable} from 'native-base';
import {Task} from '../Task';
import {DayData} from '../../models/index';

interface Props {
  data: DayData;
  isCreationMode: boolean;
  onPress: (data: DayData) => void;
}

export const BlockHour = ({data, isCreationMode, onPress}: Props) => {
  return (
    <Pressable onPress={() => onPress(data)}>
      <HStack marginBottom="4">
        <Text flex="1" fontSize="lg" fontWeight="bold">
          {data.hour}
        </Text>
        <VStack flex="3" space="2">
          <Task task={data.tasks[0]} isCreationMode={isCreationMode} />
          <Task task={data.tasks[1]} isCreationMode={isCreationMode} />
        </VStack>
      </HStack>
    </Pressable>
  );
};
