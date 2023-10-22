import React from 'react';
import { Box, Flex, Button, Text, List, ListItem } from '@chakra-ui/react';

export default function Highlights({ sentences, onHighlightsChange }) {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      borderRadius={12}
      p={10}
    >
      <Box
        border="3px solid black"
        bg="white"
        h="100%"
        w="80%"
        p={5}
        borderRadius={12}
      >
        <List spacing={3}>
          {sentences.length === 0 ? (
            <Text>No highlights yet!</Text>
          ) : (
            sentences.map((sentence, i) => (
              <ListItem key={i} gap={3} display="flex">
                <Button
                  size="xs"
                  bg="purple.200"
                  outline="solid black 1px"
                  onClick={() => {
                    const newSentences = sentences.filter((_, j) => j !== i);
                    onHighlightsChange(newSentences);
                  }}
                >
                  X
                </Button>
                <Text fontSize="sm">{sentence}</Text>
              </ListItem>
            ))
          )}
        </List>
      </Box>
    </Flex>
  );
}
