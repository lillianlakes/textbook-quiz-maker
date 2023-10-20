import { ChakraProvider, Container } from '@chakra-ui/react';
import theme from '../theme';
import Nav from './Nav';
import FilterBooks from './FilterBooks';
import BooksGrid from './BooksGrid';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Container my={10} mx="auto" maxW="70vw">
        <FilterBooks />
        <BooksGrid />
      </Container>
    </ChakraProvider>
  );
}

export default App;
