import React from 'react';
import { Flex, Text, CloseButton, Button } from '@chakra-ui/react';

export default function Menu({ selectedBook, onClose, quizMode, goBackClick }) {
  return (
    <>
      {selectedBook && (
        <Flex direction="row" my={5} justify="space-between">
          <Text fontSize="xl" as="b">
            {quizMode ? `Quizzing: ${selectedBook.title}` : selectedBook.title}
          </Text>
          {quizMode ? (
            <Button size="md" bg="#FFBD12" onClick={goBackClick}>
              Back
            </Button>
          ) : (
            <CloseButton
              size="md"
              bg="#FFBD12"
              borderRadius="50%"
              onClick={onClose}
            />
          )}
        </Flex>
      )}
    </>
  );
}
