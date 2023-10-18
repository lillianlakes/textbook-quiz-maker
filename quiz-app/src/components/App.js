import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import Nav from './Nav';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
    </ChakraProvider>
  );
}

export default App;
