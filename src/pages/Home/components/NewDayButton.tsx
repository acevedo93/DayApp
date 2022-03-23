import { Center, Text, Box } from '@chakra-ui/react';

export const NewDayButton = () => {
  const handleNewDay = () => {
    console.log('hola');
  };
  return (
    <Box
      onClick={handleNewDay}
      bg="neutral.25"
      borderRadius="20"
      borderStyle="dashed"
      borderWidth="2"
      borderColor="neutral.200"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="20"
      mt="4"
    >
      <Text color="neutral.200">PLANEAR NUEVO DIA</Text>
    </Box>
  );
};
