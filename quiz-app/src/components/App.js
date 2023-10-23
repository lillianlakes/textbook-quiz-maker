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
import Highlights from './Highlights';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showHighlights, setShowHighlights] = useState(false);
  const [bookHighlights, setBookHighlights] = useState([]);
  const [bionicMode, setBionicMode] = useState(false);
  const [comicNeueActive, setComicNeueActive] = useState(false);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setShowHighlights(false);

    const highlightsForSelectedBook = localStorage.getItem(
      `highlightedText_${book.title}`
    );
    setBookHighlights(
      highlightsForSelectedBook ? highlightsForSelectedBook.split('. ') : []
    );
  };

  const handleMenuClose = () => {
    setSelectedBook(null);
    setShowHighlights(false);
  };

  const openQuiz = () => setShowQuiz(true);

  const goBackClick = () => {
    if (showQuiz) {
      setShowQuiz(false);
    } else if (showHighlights) {
      setShowHighlights(false);
    }
  };

  const openHighlights = () => {
    setShowHighlights(true);
  };

  const handleHighlightsChange = (newHighlights) => {
    setBookHighlights(newHighlights);
    if (selectedBook) {
      localStorage.setItem(
        `highlightedText_${selectedBook.title}`,
        newHighlights.join('. ')
      );
    }
  };

  const RenderMenu = () => (
    <Menu
      selectedBook={selectedBook}
      goBackClick={goBackClick}
      onClose={handleMenuClose}
      showQuiz={showQuiz}
      showHighlights={showHighlights}
    />
  );

  const RenderFooter = () => (
    <Footer
      openQuiz={openQuiz}
      onHighlightsChange={handleHighlightsChange}
      openHighlights={openHighlights}
      setBionicMode={setBionicMode}
      setComicNeueActive={setComicNeueActive}
    />
  );

  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Container my={8} mx="auto" maxW="70vw">
        {selectedBook ? (
          <>
            <RenderMenu />
            {showQuiz ? (
              <Quiz />
            ) : showHighlights ? (
              <>
                <Highlights
                  sentences={bookHighlights}
                  onHighlightsChange={handleHighlightsChange}
                />
                <RenderFooter />
              </>
            ) : (
              <>
                <BookReader
                  selectedBook={selectedBook}
                  onHighlightsChange={handleHighlightsChange}
                  bionicMode={bionicMode}
                  comicNeueActive={comicNeueActive}
                />
                <RenderFooter />
              </>
            )}
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
