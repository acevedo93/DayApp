import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../services/firebase/auth';
import { Box, Text } from '@chakra-ui/react';
export const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(signIn());
  };
  return (
    <>
      <div>
        <Box bg="neutral.25">
          <Text color="neutral.600">Login</Text>
          <Text color="neutral.600">Ingresa con tu cuenta de google</Text>
          <Button onClick={handleLogin} bg="primary.100">
            Sign up with google
          </Button>
        </Box>
      </div>
    </>
  );
};
