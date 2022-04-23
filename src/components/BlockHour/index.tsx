import React from 'react';
import {HStack, Text, VStack, Pressable} from 'native-base';
import {Task} from '../Task';
import {DayData} from '../../models/index';

interface Props {
  data: DayData;
  isCreationMode: boolean;
}

export const BlockHour = ({data, isCreationMode}: Props) => {
  return (
    <Pressable onPress={() => console.log('hola')}>
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
