import { ChakraProvider, Container } from '@chakra-ui/react';
import theme from '../theme';
import Nav from './Nav';
import FilterBooks from './FilterBooks';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Container mt={10} mx="auto" maxW="80vw">
        <FilterBooks />
      </Container>
    </ChakraProvider>
  );
}

export default App;
