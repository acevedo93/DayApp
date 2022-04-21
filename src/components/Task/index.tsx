import React from 'react';

import {Box, Text} from 'native-base';
import {PomodoroClock} from '../PomodoroClock';
import {checkTaskState} from './utils';

interface Props {
  task: any;
}

export const Task = ({task}: Props) => {
  //this is horrible, should be improve

  return (
    <Box
      borderWidth="2"
      paddingX="2"
      borderColor={checkTaskState(task)}
      minHeight="36"
      alignItems="center"
      borderRadius="5"
      flexDir="row">
      <Text flex="2">{task.description}</Text>
      <PomodoroClock />
    </Box>
  );
};
