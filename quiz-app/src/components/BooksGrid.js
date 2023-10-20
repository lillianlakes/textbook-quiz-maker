import React from 'react';
import { Box, Text, SimpleGrid, Card, Image } from '@chakra-ui/react';
import '../styles/styles.css';
import { subjects } from '../data/Books.ts';

export default function BooksGrid() {
  const allBooks = subjects
    .flatMap((subject) => subject.books)
    .sort(() => Math.random() - 0.5);

  return (
    <Box my={20}>
      <SimpleGrid spacing={4} gap={6} columns={4}>
        {allBooks.map((book) => (
          <Card key={book.id} className="BookCard" gap={4} p={4} maxH="xs">
            <Image
              objectFit="contain"
              src={book.image_url}
              alt="Book Cover"
              className="BookCardImage"
            />

            <Text fontSize="sm" fontWeight={600} align="center">
              {book.title}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
