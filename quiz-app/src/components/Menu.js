import React from 'react';
import { Flex, Text, CloseButton } from '@chakra-ui/react';

export default function Menu({ selectedBook, onClose }) {
  return (
    <Flex direction="row" my={5} justify="space-between">
      <Text fontSize="xl" as="b">
        {selectedBook.title}
      </Text>
      <CloseButton
        size="md"
        bg="#FFBD12"
        borderRadius="50%"
        onClick={onClose}
      />
    </Flex>
  );
}
