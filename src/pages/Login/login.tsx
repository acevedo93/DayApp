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
} from '@chakra-ui/react';
export const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(signIn());
  };

  return (
    <Container>
      <Center h={'100vh'}>
        <Box bg="neutral.25" p="5" paddingTop="2" borderRadius="20">
          <Heading color="neutral.200" textAlign="center">
            Login
          </Heading>

          <Text color="neutral.200" textAlign="center">
            Bienvenido a DayApp Ingresa con tu cuenta favorita
          </Text>
          <Stack spacing={4} marginTop={4}>
            <Button onClick={handleLogin} bg="primary.100" color="neutral.200">
              Sign up with google
            </Button>

            <Button onClick={handleLogin} bg="primary.100" color="neutral.200">
              Sign up with Facebook
            </Button>

            <Button onClick={handleLogin} bg="primary.100" color="neutral.200">
              Sign up with github
            </Button>
            <Spinner color="accent.200" size="xl" alignSelf="center" />
          </Stack>
        </Box>
      </Center>
    </Container>
  );
};
