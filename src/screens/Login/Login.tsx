import React, {useState} from 'react';
import {Box, Heading, Button, VStack, Text, Checkbox} from 'native-base';
import {loginFirebase} from '../../services/firebase/auth';

export const LoginScreen = () => {
  const [terms, setTerms] = useState(false);

  const handleLogin = () => {
    loginFirebase();
  };

  return (
    <Box background="info.10" flex="1" safeArea alignItems="center">
      <Box mt="50%" width="80%" rounded="lg" height="50%" background="info.25">
        <VStack alignItems="center" space="4" padding="10">
          <Heading color="info.200">Login</Heading>
          <Text>
            Lorem ipsum vim dsadsads rewrwerew rewrew rew Lorem ipsum vim
            dsadsads rewrwerew rewrew rewLorem ipsum vim dsadsads rewrwerew
          </Text>
          <Checkbox
            colorScheme="success"
            value="term"
            onChange={val => setTerms(val)}
            accessibilityLabel="Accpet terms and conditions">
            Accept terms and conditions
          </Checkbox>
          <Button
            disabled={!terms}
            onPress={handleLogin}
            bg="primary.100"
            color="info.200">
            Login with google
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};
