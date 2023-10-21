import React from 'react';
import { Flex, Text, CloseButton } from '@chakra-ui/react';

export default function Menu({ selectedBook, onClose }) {
  return (
    <Flex direction="row" my={8} justify="space-between">
      <Text fontSize="2xl" as="b">
        {selectedBook.title}
      </Text>
      <CloseButton size="md" bg="#FFBD12" onClick={onClose} />
    </Flex>
  );
}
