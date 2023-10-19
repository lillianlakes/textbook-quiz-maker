import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import Nav from './Nav';
import FilterBooks from './FilterBooks';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <FilterBooks />
    </ChakraProvider>
  );
}

export default App;
