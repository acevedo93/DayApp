import React from 'react';

import {Box, Spacer, Text} from 'native-base';

interface Props {
  task: any;
}

export const Task = () => {
  console.log('ENTRO ACA');
  return (
    <Box
      borderWidth="2"
      paddingX="2"
      borderColor="success.200"
      height="38"
      alignItems="center"
      borderRadius="5"
      flexDir="row">
      <Text testID="task-title">React js- Planear Day app</Text>
      <Spacer />
      <Text>23:21</Text>
    </Box>
  );
};
