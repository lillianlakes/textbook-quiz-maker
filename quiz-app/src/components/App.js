import React, { useState } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import theme from '../theme';
import Nav from './Nav';
import FilterBooks from './FilterBooks';
import BooksGrid from './BooksGrid';
import BookReader from './BookReader.tsx';
import Menu from './Menu';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  function handleMenuClose() {
    setSelectedBook(null);
  }

  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Container my={10} mx="auto" maxW="70vw">
        {selectedBook ? (
          <>
            <Menu selectedBook={selectedBook} onClose={handleMenuClose} />
            <BookReader selectedBook={selectedBook} />
          </>
        ) : (
          <>
            <FilterBooks />
            <BooksGrid onBookSelect={handleBookSelect} />
          </>
        )}
      </Container>
    </ChakraProvider>
  );
}

export default App;
