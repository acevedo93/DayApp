import { Text, Box } from '@chakra-ui/react';

export const NewDayButton = () => {
  const handleNewDay = () => {
    console.log('hola');
  };
  return (
    <Box
      onClick={handleNewDay}
      bg="neutral.25"
      borderRadius="10"
      borderWidth="2px"
      borderStyle="dotted"
      borderColor="accent.100"
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
