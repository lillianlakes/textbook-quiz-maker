import React from 'react';
import { Flex, Text, CloseButton, Button } from '@chakra-ui/react';

export default function Menu({
  selectedBook,
  onClose,
  showQuiz,
  goBackClick,
  showHighlights,
}) {
  return (
    <>
      {selectedBook && (
        <Flex direction="row" my={5} justify="space-between">
          <Text fontSize="xl" as="b">
            {showQuiz ? `Quizzing: ${selectedBook.title}` : selectedBook.title}
          </Text>
          {showQuiz || showHighlights ? (
            <Button size="md" bg="#FFBD12" onClick={goBackClick}>
              Back
            </Button>
          ) : (
            <CloseButton
              size="md"
              bg="#FFBD12"
              borderRadius="50%"
              onClick={onClose}
              showHighlights={showHighlights}
            />
          )}
        </Flex>
      )}
    </>
  );
}
