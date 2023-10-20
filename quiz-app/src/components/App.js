import React, { useState } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import theme from '../theme';
import Nav from './Nav';
import FilterBooks from './FilterBooks';
import BooksGrid from './BooksGrid';
import BookReader from './BookReader.tsx';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Container my={10} mx="auto" maxW="70vw">
        <FilterBooks />
        <BooksGrid onBookSelect={handleBookSelect} />
        {selectedBook && <BookReader selectedBook={selectedBook} />}
      </Container>
    </ChakraProvider>
  );
}

export default App;
