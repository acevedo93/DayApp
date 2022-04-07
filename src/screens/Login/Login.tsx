import {Box, Text, Heading, Button, VStack} from 'native-base';

import React from 'react';

export const LoginScreen = () => {
  const handleLogin = (): void => {
    console.log('Login action');
  };
  return (
    <Box background="info.10" flex="1" safeArea alignItems="center">
      <Box mt="50%" width="80%" rounded="lg" height="50%" background="info.25">
        <VStack alignItems="center" space="10">
          <Heading color="info.200">Login</Heading>
          <Button onPress={handleLogin} bg="primary.100" color="info.200">
            Iniciar session
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};
