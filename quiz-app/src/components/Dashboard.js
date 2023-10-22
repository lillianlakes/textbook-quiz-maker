import {useCurrentUser} from '../hooks/useCurrentUser';
import styles from '../styles/Dashboard.module.css';

import React, { useState } from 'react';
import { Container } from '@chakra-ui/react';

import FilterBooks from './FilterBooks';
import BooksGrid from './BooksGrid';
import BookReader from './BookReader.tsx';
import Menu from './Menu';
import Footer from './Footer';
import Quiz from './Quiz';

function Dashboard() {
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

    const {isLoading, isAuthorized, username} = useCurrentUser();

    if (isLoading) {
        return null;
    }
    const authorizedBody = 
    <>
        You successfully signed in with Passage.
        <br/><br/>
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
    </>

    const unauthorizedBody = 
    <>
        You have not logged in and cannot view the dashboard.
        <br/><br/>
        <a href="/" className={styles.link}>Login to continue.</a>
    </>

    return (
        <div className={styles.dashboard}>
            <div className={styles.title}>{isAuthorized ? 'Welcome!' : 'Unauthorized'}</div>
            <div className={styles.message}>
                { isAuthorized ? authorizedBody : unauthorizedBody }
            </div>
        </div>
    );

}

export default Dashboard;