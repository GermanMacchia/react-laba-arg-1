import { Flex } from '@chakra-ui/react';
import { Buttons, Screen } from './components';
import { CalculatorProvider } from './context';

function App() {
  return (
    <CalculatorProvider>
      <Flex align="center" justify="center">
        <Flex width="375px" direction="column">
          <Screen />
          <Buttons />
        </Flex>
      </Flex>
    </CalculatorProvider>
  );
}

export default App;
