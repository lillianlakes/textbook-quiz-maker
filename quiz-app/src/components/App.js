import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import Nav from './Nav';
import Home from './Home'
import Dashboard from './Dashboard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Home />
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;
