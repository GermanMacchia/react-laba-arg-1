import { Flex, Text } from '@chakra-ui/react';
import { useCalculatorContext } from '../context/CalculatorContext';

export default function Screen() {
  const { result } = useCalculatorContext();

  return (
    <Flex height={'342px'} bg="background.100" flexDirection="column" justifyContent="flex-end" alignItems="flex-end">
      <Text color="white" fontSize="3xl">
        256.6 + 9.5
      </Text>
      <Text fontSize="5xl" fontWeight="bold" color="white">
        {result}
      </Text>
    </Flex>
  );
}
