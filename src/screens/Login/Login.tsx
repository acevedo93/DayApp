import React from 'react';
import {Box, Heading, Button, VStack} from 'native-base';

export const LoginScreen = () => {
  const handleLogin = () => {};

  const handleLogout = () => {};

  return (
    <Box background="info.10" flex="1" safeArea alignItems="center">
      <Box mt="50%" width="80%" rounded="lg" height="50%" background="info.25">
        <VStack alignItems="center" space="4" padding="10">
          <Heading color="info.200">Login</Heading>
          <Button onPress={handleLogin} bg="primary.100" color="info.200">
            Login with google
          </Button>
          <Button bg="primary.100" color="info.200" onPress={handleLogout}>
            Logout
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};
