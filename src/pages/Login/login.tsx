import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../services/firebase/auth';
import {
  Box,
  Text,
  Center,
  Stack,
  Heading,
  Container,
  Spinner,
  Checkbox,
} from '@chakra-ui/react';

import { useAuth } from '../../hooks/useAuth';
export const Login = () => {
  const dispatch = useDispatch();
  const [loading] = useAuth();
  const [termsAndConditions, setTermsAndConditions] = useState<boolean>(false);

  const handleTermsAndContiditions = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;
    setTermsAndConditions(checked);
  };

  const handleLogin = (): void => {
    dispatch(signIn());
  };

  const renderHeader = () => (
    <>
      <Heading color="neutral.200" textAlign="center">
        Login
      </Heading>

      <Text color="neutral.200" textAlign="center" mt="4">
        Bienvenido a DayApp Ingresa con tu cuenta
      </Text>
    </>
  );

  return (
    <Container>
      <Center h={'100vh'}>
        <Box
          bg="neutral.25"
          p="5"
          paddingTop="2"
          borderRadius="20"
          minH="200px"
        >
          {renderHeader()}
          <Stack spacing={4} marginTop={4}>
            {!loading && (
              <>
                <Button
                  onClick={handleLogin}
                  disabled={!termsAndConditions}
                  bg="primary.100"
                  color="neutral.200"
                >
                  Sign up with google
                </Button>

                <Checkbox
                  onChange={handleTermsAndContiditions}
                  size="lg"
                  colorScheme="primary.100"
                >
                  <Text color="neutral.200">
                    {' '}
                    Aceptas terminos y condiciones
                  </Text>
                </Checkbox>
              </>
            )}
            {loading && termsAndConditions && (
              <Spinner color="accent.200" size="xl" alignSelf="center" />
            )}
          </Stack>
        </Box>
      </Center>
    </Container>
  );
};
