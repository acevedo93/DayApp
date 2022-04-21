import React from 'react';

import {Spinner, Center} from 'native-base';

export const CustomSpinner = () => {
  return (
    <Center w="100%" h="100%">
      <Spinner size="lg" color="info.200" />
    </Center>
  );
};
