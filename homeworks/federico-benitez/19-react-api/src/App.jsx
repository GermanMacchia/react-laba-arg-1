import { Box, Flex } from '@chakra-ui/react';
import Buttons from './components/Buttons';

function App() {
  return (
    <Flex align="center" justify="center">
      <Flex width="375px" direction="column">
        <Buttons />
      </Flex>
    </Flex>
  );
}

export default App;
