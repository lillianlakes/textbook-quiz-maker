import React from 'react';
import { Text, SimpleGrid, Card, Image } from '@chakra-ui/react';
import '../styles/styles.css';
import { subjects } from '../data/Books.ts';

export default function BooksGrid({ onBookSelect }) {
  const allBooks = subjects.flatMap((subject) => subject.books);

  const handleBookClick = (book) => {
    onBookSelect(book);
  };

  return (
    <SimpleGrid gap={4} columns={4} my={10} justifyItems="center">
      {allBooks.map((book) => (
        <Card key={book.id} p={3} gap={4} className="BookCard">
          <Image
            src={book.image_url}
            alt="Book Cover"
            className="BookCardImage"
            onClick={() => handleBookClick(book)}
          />

          <Text
            fontSize="sm"
            fontWeight={600}
            align="center"
            onClick={() => handleBookClick(book)}
          >
            {book.title}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
}
