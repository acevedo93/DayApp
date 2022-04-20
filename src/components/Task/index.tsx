import React from 'react';

import {Box, Text} from 'native-base';

interface Props {
  task: any;
}

export const Task = ({task}: Props) => {
  //this is horrible, should be improve
  const checkTaskState = () => {
    if (task.state === 'success') {
      return 'success.200';
    }

    if (task.state === 'pending') {
      return 'danger.400';
    }

    if (task.state === 'progress') {
      return 'warning.200';
    }

    return 'danger.400';
  };

  return (
    <Box
      borderWidth="2"
      paddingX="2"
      borderColor={checkTaskState()}
      minHeight="36"
      alignItems="center"
      borderRadius="5"
      flexDir="row">
      <Text flex="2">{task.description}</Text>
      <Text>23:21</Text>
    </Box>
  );
};
