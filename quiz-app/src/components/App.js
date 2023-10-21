import React, { useState } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import theme from '../theme';
import Nav from './Nav';
import FilterBooks from './FilterBooks';
import BooksGrid from './BooksGrid';
import BookReader from './BookReader.tsx';
import Menu from './Menu';
import Footer from './Footer';
import Quiz from './Quiz';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizMode, setQuizMode] = useState(false);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const handleMenuClose = () => {
    setSelectedBook(null);
  };

  const openQuiz = () => {
    setShowQuiz(true);
    setQuizMode(true);
  };

  const goBackClick = () => {
    setShowQuiz(false);
    setQuizMode(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Container my={8} mx="auto" maxW="70vw">
        {selectedBook ? (
          showQuiz ? (
            <>
              <Menu
                selectedBook={selectedBook}
                onClose={handleMenuClose}
                quizMode={quizMode}
                goBackClick={goBackClick}
              />
              <Quiz />
            </>
          ) : (
            <>
              <Menu selectedBook={selectedBook} onClose={handleMenuClose} />
              <BookReader selectedBook={selectedBook} />
              <Footer openQuiz={openQuiz} />
            </>
          )
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
