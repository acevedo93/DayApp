import React from 'react';
import {Box, Text} from 'native-base';
import {PomodoroClock} from '../PomodoroClock';
import {checkTaskState} from './utils';

interface Props {
  task: any;
  isCreationMode: boolean;
}

export const Task = ({task, isCreationMode}: Props) => {
  return (
    <Box
      borderWidth="2"
      paddingX="2"
      borderColor={!isCreationMode ? checkTaskState(task) : 'warning.200'}
      minHeight="36"
      alignItems="center"
      borderRadius="5"
      flexDir="row">
      <Text flex="2">{isCreationMode ? '' : task.description}</Text>
      <PomodoroClock />
    </Box>
  );
};
