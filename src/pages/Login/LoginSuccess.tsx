import { useEffect, useState } from 'react';
import { Box, Text, Center, Heading, Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const LoginSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 3000);
  }, []);
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
          <Text>SUCCESS</Text>
        </Box>
      </Center>
    </Container>
  );
};
